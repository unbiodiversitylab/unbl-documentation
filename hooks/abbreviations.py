"""MkDocs hook: give acronyms a hover tooltip in the reader's language.

Appends includes/abbreviations.md (English) or includes/abbreviations.<lang>.md
to every page before it is rendered. The `abbr` Markdown extension then wraps
each listed acronym in <abbr title="...">, which Material shows as a tooltip.

To add or change an acronym, edit the files in includes/ (all five languages).
"""
from pathlib import Path

INCLUDES = Path(__file__).resolve().parent.parent / "includes"
LANGS = {"es", "fr", "pt", "ru"}
_cache: dict[str, str] = {}


def _definitions(lang: str) -> str:
    if lang not in _cache:
        name = "abbreviations.md" if lang == "en" else f"abbreviations.{lang}.md"
        path = INCLUDES / name
        _cache[lang] = path.read_text(encoding="utf-8") if path.exists() else ""
    return _cache[lang]


def on_page_markdown(markdown, page, **kwargs):
    parts = page.file.src_uri.rsplit(".", 2)
    lang = parts[-2] if len(parts) == 3 and parts[-2] in LANGS else "en"
    return markdown + "\n\n" + _definitions(lang)
