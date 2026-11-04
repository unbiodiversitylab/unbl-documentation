#!/usr/bin/env python3
"""Consistency checks for the UNBL documentation site.

One script used by people, by CI (.github/workflows/pr-check.yml) and by the
Claude Code Stop hook (.claude/settings.json). It needs only Python 3.9+;
PyYAML (installed with requirements.txt) enables the navigation checks.

Usage:
    python scripts/check_docs.py                      # check everything
    python scripts/check_docs.py --changed origin/main  # focus on files changed vs a branch
    python scripts/check_docs.py --drift [--lang fr]  # which translations are behind English
    python scripts/check_docs.py --verbose            # list every warning, not just a summary

ERRORS (exit code 1) are things that are broken: a missing translation file,
a nav title without a translation, an image or page link that points nowhere.
WARNINGS never fail the build. They track known debt (missing alt text, file
names with spaces, oversized images) so it can be paid down over time.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
import tempfile
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
DEFAULT_LANGS = ["es", "fr", "pt", "ru"]  # used if mkdocs.yml cannot be read

# Size budgets for images (bytes). Larger files slow the site for users on
# low-bandwidth connections and for the WordPress page that embeds it.
IMAGE_BUDGET = 1_000_000
GIF_BUDGET = 5_000_000
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"}

IMG_MD = re.compile(r"!\[([^\]]*)\]\(\s*<?([^)>]*?)>?(?:\s+[\"'][^\"']*[\"'])?\s*\)")
IMG_HTML = re.compile(r"<img\b[^>]*>", re.IGNORECASE)
LINK_MD = re.compile(r"(?<!!)\[[^\]]*\]\(\s*<?([^)>\s]+\.md[^)>\s]*)>?(?:\s+[\"'][^\"']*[\"'])?\s*\)")
ADMONITION_NO_SPACE = re.compile(r"^\s*(!!!|\?\?\?\+?)(?=[a-z])")
FRONT_MATTER = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.DOTALL)

try:  # pragma: no cover - trivial
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except AttributeError:
    pass


# --------------------------------------------------------------------------- #
# Findings
# --------------------------------------------------------------------------- #
@dataclass
class Finding:
    level: str  # "error" | "warning"
    category: str
    message: str
    path: str = ""
    line: int = 0

    def location(self) -> str:
        if not self.path:
            return ""
        return f"{self.path}:{self.line}" if self.line else self.path


class Report:
    def __init__(self) -> None:
        self.items: list[Finding] = []

    def error(self, category, message, path="", line=0):
        self.items.append(Finding("error", category, message, path, line))

    def warn(self, category, message, path="", line=0):
        self.items.append(Finding("warning", category, message, path, line))

    @property
    def errors(self):
        return [f for f in self.items if f.level == "error"]

    @property
    def warnings(self):
        return [f for f in self.items if f.level == "warning"]


# --------------------------------------------------------------------------- #
# Helpers
# --------------------------------------------------------------------------- #
def rel(p: Path) -> str:
    return p.relative_to(ROOT).as_posix()


def git(*args: str) -> str | None:
    try:
        out = subprocess.run(
            ["git", *args], cwd=ROOT, capture_output=True, text=True,
            encoding="utf-8", check=True,
        )
        return out.stdout
    except (OSError, subprocess.CalledProcessError):
        return None


def load_mkdocs():
    """Return the parsed mkdocs.yml, or None if PyYAML is unavailable."""
    try:
        import yaml  # noqa: WPS433
    except ImportError:
        return None

    class Loader(yaml.SafeLoader):
        pass

    # mkdocs.yml uses !!python/name tags (emoji, mermaid); ignore them here.
    Loader.add_multi_constructor("tag:yaml.org,2002:python/", lambda *_: None)
    with open(ROOT / "mkdocs.yml", encoding="utf-8") as fh:
        return yaml.load(fh, Loader=Loader)  # noqa: S506 - SafeLoader subclass


def i18n_config(cfg) -> tuple[str, list[str], dict[str, dict]]:
    """(default locale, other locales, {locale: nav_translations})."""
    if not cfg:
        return "en", DEFAULT_LANGS, {}
    for plugin in cfg.get("plugins", []):
        if isinstance(plugin, dict) and "i18n" in plugin:
            langs = plugin["i18n"].get("languages", [])
            default = next((l["locale"] for l in langs if l.get("default")), "en")
            others = [l["locale"] for l in langs if l["locale"] != default]
            nav_t = {l["locale"]: (l.get("nav_translations") or {}) for l in langs}
            return default, others, nav_t
    return "en", DEFAULT_LANGS, {}


def lang_of(path: Path, langs: list[str]) -> str | None:
    """'fr' for foo.fr.md, None for an English source page."""
    parts = path.name.split(".")
    if len(parts) >= 3 and parts[-2] in langs:
        return parts[-2]
    return None


def source_of(path: Path, langs: list[str]) -> Path:
    lang = lang_of(path, langs)
    return path.with_name(path.name.replace(f".{lang}.md", ".md")) if lang else path


def translation_of(path: Path, lang: str) -> Path:
    return path.with_name(path.name[:-3] + f".{lang}.md")


def walk_nav(nav, out):
    """Yield (title or None, path) for every page in the nav."""
    for item in nav or []:
        if isinstance(item, str):
            out.append((None, item))
        elif isinstance(item, dict):
            for title, value in item.items():
                if isinstance(value, str):
                    out.append((title, value))
                else:
                    out.append((title, None))
                    walk_nav(value, out)
    return out


def front_matter(text: str) -> dict:
    m = FRONT_MATTER.match(text)
    if not m:
        return {}
    data = {}
    for line in m.group(1).splitlines():
        if ":" in line and not line.startswith((" ", "\t")):
            k, v = line.split(":", 1)
            data[k.strip()] = v.strip().strip("'\"")
    return data


def changed_files(base: str | None) -> set[Path]:
    """Files changed vs `base` (committed on this branch) plus uncommitted work."""
    names: set[str] = set()
    if base:
        out = git("diff", "--name-only", "-z", f"{base}...HEAD")
        if out is None:
            print(f"warning: could not diff against {base!r}; is it fetched?", file=sys.stderr)
        names.update(filter(None, (out or "").split("\0")))
    for args in (("diff", "--name-only", "-z", "HEAD"),
                 ("ls-files", "--others", "--exclude-standard", "-z")):
        names.update(filter(None, (git(*args) or "").split("\0")))
    return {ROOT / n for n in names}


def added_lines(path: str) -> set[int]:
    """Line numbers added or modified in uncommitted changes to `path`."""
    if git("ls-files", "--error-unmatch", "--", path) is None:  # untracked: all lines
        return set(range(1, len((ROOT / path).read_text(encoding="utf-8").splitlines()) + 1))
    lines: set[int] = set()
    for hunk in re.finditer(r"^@@ -\S+ \+(\d+)(?:,(\d+))? @@", git("diff", "-U0", "HEAD", "--", path) or "", re.M):
        start, count = int(hunk.group(1)), int(hunk.group(2) or 1)
        lines.update(range(start, start + count))
    return lines


# --------------------------------------------------------------------------- #
# Checks
# --------------------------------------------------------------------------- #
def check_parity(report: Report, langs: list[str]):
    for md in sorted(DOCS.rglob("*.md")):
        lang = lang_of(md, langs)
        if lang is None:
            for other in langs:
                if not translation_of(md, other).exists():
                    report.error("translation-missing",
                                 f"no {other} translation (expected {translation_of(md, other).name})",
                                 rel(md))
        elif not source_of(md, langs).exists():
            report.error("translation-orphan",
                         f"{lang} page has no English source ({source_of(md, langs).name})", rel(md))


def check_nav(report: Report, cfg, langs: list[str], nav_t: dict):
    if cfg is None:
        report.warn("setup", "PyYAML not installed; navigation checks skipped "
                    "(pip install -r requirements.txt)")
        return
    entries = walk_nav(cfg.get("nav"), [])
    in_nav = set()
    for title, path in entries:
        if path:
            in_nav.add(path)
            if not (DOCS / path).exists():
                report.error("nav-missing-page", f"nav points to missing page '{path}'", "mkdocs.yml")
        if title:
            for lang in langs:
                if title not in nav_t.get(lang, {}):
                    report.error("nav-translation-missing",
                                 f"nav title '{title}' has no {lang} entry in nav_translations",
                                 "mkdocs.yml")
    for md in sorted(DOCS.rglob("*.md")):
        if lang_of(md, langs) is None:
            p = md.relative_to(DOCS).as_posix()
            if p not in in_nav:
                report.warn("not-in-nav", "page is not in the mkdocs.yml nav (only reachable by link)",
                            rel(md))


def check_page(report: Report, md: Path, langs: list[str]):
    text = md.read_text(encoding="utf-8")
    in_fence = False
    for n, line in enumerate(text.splitlines(), 1):
        if line.lstrip().startswith(("```", "~~~")):
            in_fence = not in_fence
        if in_fence:
            continue

        for alt, target in IMG_MD.findall(line):
            check_image_ref(report, md, n, target.strip(), alt, langs)
        for tag in IMG_HTML.findall(line):
            src = re.search(r"src=[\"']([^\"']+)", tag)
            alt = re.search(r"alt=[\"']([^\"']*)", tag)
            if src:
                check_image_ref(report, md, n, src.group(1), alt.group(1) if alt else "", langs)

        for target in LINK_MD.findall(line):
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            page = target.split("#", 1)[0].rstrip("/")
            if page and not (md.parent / page).resolve().exists():
                report.error("broken-link", f"link to missing page '{target}'", rel(md), n)

        if ADMONITION_NO_SPACE.match(line):
            report.warn("admonition-syntax", "write '!!! note' with a space after '!!!'", rel(md), n)


def check_image_ref(report: Report, md: Path, n: int, target: str, alt: str, langs=()):
    if target.startswith(("http://", "https://", "data:")):
        return
    path = target.split("#", 1)[0].replace("%20", " ")
    loc = localized_lang(Path(path), langs)
    if loc and "-extra-" not in path:
        report.warn("localized-image-ref",
                    f"reference the English file name ({localized_base(Path(path), loc).name}); "
                    f"the {loc} site picks the .{loc} version automatically", rel(md), n)
    if not alt.strip():
        report.error("alt-text-missing", f"image has no alt text: {path}", rel(md), n)
    if " " in path:
        report.error("filename-spaces", f"image file name contains spaces: {path}", rel(md), n)
    if not (md.parent / path).exists():
        report.error("broken-image", f"image not found: {path}", rel(md), n)


def check_image_sizes(report: Report, files, new_files=frozenset()):
    """Oversized images: an error for newly added files, a warning for old ones."""
    for f in files:
        if f.suffix.lower() in IMAGE_EXTS and f.exists():
            size = f.stat().st_size
            budget = GIF_BUDGET if f.suffix.lower() == ".gif" else IMAGE_BUDGET
            if size > budget:
                msg = (f"{size / 1e6:.1f} MB (budget {budget / 1e6:.0f} MB); crop it, keep it "
                       "under ~1600 px wide, or save it as PNG with fewer colours")
                if f in new_files:
                    report.error("image-too-large", msg, rel(f))
                else:
                    report.warn("image-too-large", msg, rel(f))


def localized_lang(path: Path, langs) -> str | None:
    """'fr' for name.fr.png, else None."""
    parts = path.name.split(".")
    return parts[-2] if len(parts) >= 3 and parts[-2] in langs else None


def localized_base(path: Path, lang: str) -> Path:
    return path.with_name(path.name.replace(f".{lang}.", ".", 1))


def image_refs(md: Path, include_icons=True) -> list[str]:
    out = []
    in_fence = False
    for line in md.read_text(encoding="utf-8").splitlines():
        if line.lstrip().startswith(("```", "~~~")):
            in_fence = not in_fence
        if in_fence:
            continue
        for _, target in IMG_MD.findall(line):
            target = target.strip()
            if target.startswith(("http://", "https://", "data:")):
                continue
            if include_icons or "/icons/" not in target:
                out.append(target)
        for tag in IMG_HTML.findall(line):
            src = re.search(r"src=[\"']([^\"']+)", tag)
            if src and not src.group(1).startswith(("http://", "https://", "data:")):
                out.append(src.group(1))
    return out


def check_image_files(report: Report, langs, scope=None):
    """Unused images and translated screenshots without an English original."""
    used = set()
    for md in DOCS.rglob("*.md"):
        for target in image_refs(md):
            used.add((md.parent / target.split("#", 1)[0].replace("%20", " ")).resolve())
    cfg_text = (ROOT / "mkdocs.yml").read_text(encoding="utf-8")
    for f in sorted(DOCS.rglob("*")):
        if not f.is_file() or f.suffix.lower() not in IMAGE_EXTS or "images" not in f.parts:
            continue
        if scope is not None and f not in scope:
            continue
        if "icons" in f.parts or "assets" in f.parts or f.relative_to(DOCS).as_posix() in cfg_text:
            continue
        lang = localized_lang(f, langs)
        if lang and "-extra-" not in f.name:
            base = localized_base(f, lang)
            if not base.exists():
                report.warn("localized-image-orphan",
                            f"translated screenshot has no English original ({base.name})", rel(f))
            elif base.resolve() not in used:
                report.warn("image-unused", "not used by any page", rel(f))
        elif f.resolve() not in used:
            report.warn("image-unused", "not used by any page", rel(f))


def check_translation_images(report: Report, langs, pages):
    """Translations should show the same screenshots as English."""
    for en in pages:
        if lang_of(en, langs) or not en.exists() or DOCS not in en.parents:
            continue
        en_refs = image_refs(en, include_icons=False)
        for lang in langs:
            tr = translation_of(en, lang)
            if not tr.exists():
                continue
            tr_refs = [r for r in image_refs(tr, include_icons=False) if "-extra-" not in r]
            if tr_refs != en_refs:
                missing = [r for r in en_refs if r not in tr_refs]
                detail = f"; missing: {', '.join(missing[:3])}" if missing else ""
                report.warn("image-refs-differ",
                            f"{lang} page shows different screenshots from English{detail}", rel(tr))


def check_translation_sync(report: Report, changed: set[Path], langs: list[str]):
    """English pages changed without any of their translations changing."""
    for f in sorted(changed):
        if f.suffix != ".md" or DOCS not in f.parents or lang_of(f, langs) or not f.exists():
            continue
        stale = [l for l in langs if translation_of(f, l) not in changed]
        if stale:
            report.warn("translation-not-updated",
                        "English page changed but these translations were not: "
                        + ", ".join(stale) + ". Update them, or note in the PR that "
                        "translation is pending (see /translation-status).", rel(f))


# --------------------------------------------------------------------------- #
# Drift report
# --------------------------------------------------------------------------- #
def ignored_revs() -> set[str]:
    """Mechanical commits listed in .git-blame-ignore-revs (skipped by drift)."""
    path = ROOT / ".git-blame-ignore-revs"
    if not path.exists():
        return set()
    return {line.split()[0] for line in path.read_text(encoding="utf-8").splitlines()
            if line.strip() and not line.lstrip().startswith("#")}


def last_content_change(path: str, ignore: set[str]) -> str | None:
    """Unix time of the newest commit touching `path` that isn't mechanical."""
    for line in (git("log", "--format=%H %ct", "--", path) or "").splitlines():
        sha, ts = line.split()
        if sha not in ignore:
            return ts
    return None


def drift(langs: list[str], only: str | None):
    rows = []
    ignore = ignored_revs()
    for en in sorted(DOCS.rglob("*.md")):
        if lang_of(en, langs):
            continue
        en_time = last_content_change(rel(en), ignore)
        for lang in [only] if only else langs:
            tr = translation_of(en, lang)
            if not tr.exists():
                rows.append((lang, rel(tr), "MISSING", ""))
                continue
            fm = front_matter(tr.read_text(encoding="utf-8"))
            status = fm.get("translation_status", "")
            rev = fm.get("source_rev")
            if rev:
                revs = git("rev-list", f"{rev}..HEAD", "--", rel(en))
                count = None if revs is None else str(len([r for r in revs.split() if r not in ignore]))
                if count is None:
                    rows.append((lang, rel(tr), "UNKNOWN", f"source_rev {rev} not in history"))
                elif int(count) > 0:
                    rows.append((lang, rel(tr), "STALE",
                                 f"{count.strip()} English commit(s) since {rev[:9]}; "
                                 f"see: git diff {rev[:9]} -- {rel(en)}"))
                elif status == "machine":
                    rows.append((lang, rel(tr), "REVIEW", "machine translation awaiting review"))
            else:
                tr_time = last_content_change(rel(tr), ignore)
                if en_time and tr_time and int(en_time) > int(tr_time):
                    days = (int(en_time) - int(tr_time)) // 86400
                    rows.append((lang, rel(tr), "MAYBE-STALE",
                                 f"English last changed {days} day(s) after this file "
                                 "(no source_rev recorded)"))
                elif status == "machine":
                    rows.append((lang, rel(tr), "REVIEW", "machine translation awaiting review"))
    order = {"MISSING": 0, "STALE": 1, "UNKNOWN": 2, "MAYBE-STALE": 3, "REVIEW": 4}
    rows.sort(key=lambda r: (r[0], order[r[2]], r[1]))
    if not rows:
        print("All translations are up to date.")
        return 0
    current = None
    for lang, path, state, note in rows:
        if lang != current:
            current = lang
            print(f"\n== {lang} ==")
        print(f"  {state:<12} {path}" + (f"  - {note}" if note else ""))
    counts = defaultdict(int)
    for r in rows:
        counts[r[2]] += 1
    print("\nSummary: " + ", ".join(f"{k}={v}" for k, v in sorted(counts.items(), key=lambda kv: order[kv[0]])))
    print("STALE is exact (from source_rev front matter). MAYBE-STALE is a guess from commit "
          "dates; any later commit to the English file (even a typo fix) triggers it.")
    return 0


# --------------------------------------------------------------------------- #
# Output
# --------------------------------------------------------------------------- #
def print_report(report: Report, verbose: bool, stream=sys.stdout):
    gha = os.environ.get("GITHUB_ACTIONS") == "true"
    for f in report.errors:
        print(f"ERROR   [{f.category}] {f.location()}  {f.message}", file=stream)
        if gha:
            print(f"::error file={f.path},line={f.line or 1},title={f.category}::{f.message}")

    by_cat = defaultdict(list)
    for f in report.warnings:
        by_cat[f.category].append(f)
    for cat, items in sorted(by_cat.items()):
        shown = items if verbose or len(items) <= 5 else items[:3]
        for f in shown:
            print(f"warning [{cat}] {f.location()}  {f.message}", file=stream)
            if gha:
                print(f"::warning file={f.path},line={f.line or 1},title={cat}::{f.message}")
        if len(shown) < len(items):
            print(f"warning [{cat}] ... and {len(items) - len(shown)} more (use --verbose)", file=stream)
    print(f"\n{len(report.errors)} error(s), {len(report.warnings)} warning(s).", file=stream)


def hook_mode() -> int:
    """Claude Code Stop hook: block once per distinct problem set, never loop."""
    try:
        payload = json.load(sys.stdin)
    except (json.JSONDecodeError, ValueError):
        payload = {}
    if payload.get("stop_hook_active"):
        return 0
    if git("rev-parse", "--git-dir") is None:
        return 0

    changed = {f for f in changed_files(None) if f.exists() or f.suffix == ".md"}
    relevant = [f for f in changed if DOCS in f.parents or f.name == "mkdocs.yml"]
    if not relevant:
        return 0

    cfg = load_mkdocs()
    _, langs, nav_t = i18n_config(cfg)
    report = Report()
    check_parity(report, langs)
    if cfg is not None:
        check_nav(report, cfg, langs, nav_t)
    for f in relevant:
        if f.suffix == ".md" and f.exists():
            check_page(report, f, langs)
    check_image_sizes(report, relevant)
    check_translation_sync(report, changed, langs)

    keep = {"translation-missing", "translation-orphan", "nav-missing-page",
            "nav-translation-missing", "broken-link", "broken-image",
            "translation-not-updated", "image-too-large", "alt-text-missing"}
    changed_rel = {rel(f) for f in relevant}
    findings = [f for f in report.items if f.category in keep
                and (f.level == "error" or f.path in changed_rel or f.path == "mkdocs.yml")]
    # Alt text: only nag about images added in this change, not old debt on
    # the same page (that is Phase 1 work, done deliberately).
    added: dict[str, set[int]] = {}
    for f in findings:
        if f.category == "alt-text-missing" and f.path not in added:
            added[f.path] = added_lines(f.path)
    findings = [f for f in findings
                if f.category != "alt-text-missing" or f.line in added.get(f.path, set())]
    if not findings:
        return 0

    msg = "\n".join(f"- [{f.category}] {f.location()}: {f.message}" for f in findings)
    digest = hashlib.sha1(msg.encode("utf-8")).hexdigest()
    state = Path(tempfile.gettempdir()) / f"unbl-docs-hook-{payload.get('session_id', 'x')}.txt"
    try:
        if state.exists() and digest in state.read_text().split():
            return 0  # already reported these exact problems this session
        with open(state, "a") as fh:
            fh.write(digest + "\n")
    except OSError:
        pass
    print("Docs checks (scripts/check_docs.py) found issues in your uncommitted changes:\n"
          + msg + "\n\nFix the errors. For translation-not-updated, either update the "
          "translations (/translate) or tell the user translation is pending. "
          "For alt-text-missing, add a short description of the screenshot.", file=sys.stderr)
    return 2


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--changed", metavar="BASE",
                    help="focus page checks on files changed vs BASE (e.g. origin/main)")
    ap.add_argument("--drift", action="store_true", help="report translations that lag English")
    ap.add_argument("--lang", help="with --drift: one language only")
    ap.add_argument("--verbose", "-v", action="store_true", help="list every warning")
    ap.add_argument("--hook", action="store_true", help=argparse.SUPPRESS)
    args = ap.parse_args(argv)

    if args.hook:
        return hook_mode()

    cfg = load_mkdocs()
    _, langs, nav_t = i18n_config(cfg)
    if args.drift:
        return drift(langs, args.lang)

    report = Report()
    check_parity(report, langs)
    check_nav(report, cfg, langs, nav_t)
    if args.changed:
        changed = changed_files(args.changed)
        pages = [f for f in changed if f.suffix == ".md" and DOCS in f.parents and f.exists()]
        images = [f for f in changed if DOCS in f.parents]
        added = git("diff", "--name-only", "-z", "--diff-filter=A", f"{args.changed}...HEAD") or ""
        added += git("ls-files", "--others", "--exclude-standard", "-z") or ""
        new_files = {ROOT / n for n in added.split("\0") if n}
        check_translation_sync(report, changed, langs)
        scope = set(images)
        en_pages = {source_of(p, langs) for p in pages}
    else:
        pages = sorted(DOCS.rglob("*.md"))
        images = sorted(p for p in DOCS.rglob("*") if p.is_file())
        new_files = frozenset()
        scope = None
        en_pages = pages
    for md in pages:
        check_page(report, md, langs)
    check_image_sizes(report, images, new_files)
    check_image_files(report, langs, scope)
    check_translation_images(report, langs, sorted(en_pages))

    print_report(report, args.verbose)
    return 1 if report.errors else 0


if __name__ == "__main__":
    sys.exit(main())
