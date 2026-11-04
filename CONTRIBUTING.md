# Contributing to the UNBL documentation

Thank you for helping. This guide has three parts; read the one that fits you:

- [Authors](#authors): writing or updating English content
- [Translators](#translators): Spanish, French, Portuguese, Russian
- [Maintainers](#maintainers): build, deployment, configuration

New to git and VS Code? [TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md) walks through
installing the tools, branches and pull requests step by step, with pictures.

---

## The basics (everyone)

1. **Never edit `main` directly.** Create a branch, make your changes, and open a pull
   request (PR). Merging a PR publishes the site automatically.
2. **Every page exists in five languages**: `page.md` (English) and `page.es.md`,
   `page.fr.md`, `page.pt.md`, `page.ru.md`. If you change one, say in your PR what
   happens to the others (updated, or pending).
3. **Each PR is checked automatically.** A "Check documentation" status appears on the
   PR. A red cross means something is broken (a missing translation file, a broken link
   or image); click **Details** to see what. Yellow warnings are information only.
4. **Words matter.** Use [`i18n/glossary.yml`](i18n/glossary.yml) for terminology in
   every language. Product names (UN Biodiversity Lab, UNBL, ELSA) are never translated.

### Preview on your computer (optional)

```bash
pip install -r requirements.txt      # once (or: mamba env create -f environment-mkdocs.yaml)
mkdocs serve                         # open http://127.0.0.1:8000; reloads as you edit
python scripts/check_docs.py         # the same checks the PR runs
```

### Using Claude Code (optional)

This repository includes shared Claude Code settings, so Claude follows the project's
conventions for everyone. Open the folder in VS Code with the Claude Code extension
(recommended automatically), or run `claude` in the repository folder. The first time,
Claude asks you to trust the folder; say yes so the shared settings apply.

| Type | To |
|---|---|
| `/translation-status fr` | see which French pages are missing, outdated or awaiting review |
| `/translate docs/elsa/04_creating_analysis.md pt` | update the Portuguese page from the latest English |
| `/add-page unbl-workspaces "Exporting your data"` | create a page in all 5 languages, including navigation |
| `/review-page` | check your changes before opening a PR |
| `/document-feature <issue link>` | draft documentation for a product change |

What the shared configuration does:

- [`CLAUDE.md`](CLAUDE.md) tells Claude about the project, its readers and the rules above.
- [`.claude/skills/`](.claude/skills/) holds the commands in the table.
- [`.claude/agents/translation-reviewer.md`](.claude/agents/translation-reviewer.md) is a
  second-opinion reviewer for translations. Ask Claude to "use the translation-reviewer
  on docs/…fr.md".
- [`.claude/settings.json`](.claude/settings.json) lets Claude build and preview without
  asking, asks before any `git push` or PR, and blocks pushing to `main` or force-pushing.
  When Claude finishes a task it runs `scripts/check_docs.py` and is told about anything
  broken. This needs Python; without it the check is skipped silently.
- For your own preferences, create `.claude/settings.local.json`. It isn't committed.

Claude's translations are drafts. They're marked `translation_status: machine` until a
native speaker reviews them.

---

## Authors

- Write for busy, often non-native English readers: short sentences, one action per
  numbered step, UI labels exactly as on screen ('CREATE NEW METRIC').
- Page structure: one `#` title (it must match the title in the site menu), then `##`
  sections. Use `!!! note` / `!!! tip` / `!!! warning` boxes sparingly.
- **Screenshots** go in `docs/<section>/images/en/`. Use lowercase names with hyphens,
  no spaces, crop to the relevant area, and keep each under 1 MB. **Every image needs alt
  text**: `![The Metrics page with the CREATE NEW METRIC button](images/en/metrics-create.png)`.
- **A new page** also needs a line in the `nav:` section of `mkdocs.yml`, and a
  translated title under `nav_translations` for each language. `/add-page` does all of
  this, or ask a maintainer.
- After changing English, either update the translations in the same PR or list them as
  pending in the PR description, so the translators know.
- Add a line to [CHANGELOG.md](CHANGELOG.md) for notable changes.

---

## Translators

- **What needs work?** Run `/translation-status <lang>` in Claude Code, or
  `python scripts/check_docs.py --drift --lang <lang>`. The same summary appears on every
  PR's check page.
- **Keep structure identical** to English: headings, lists, boxes (`!!! note` stays in
  English), figure IDs like `{#fig-create-new-analysis}`, link targets and anchors.
  Translate the text, link text, alt text and captions.
- **Images**: use `images/<lang>/` if a translated screenshot exists, otherwise keep the
  `images/en/` path.
- **Front matter**: translated pages may start with:
  ```yaml
  ---
  source_rev: 3f2a9c1…          # the English version this translation matches
  translation_status: machine   # machine | reviewed
  ---
  ```
  `source_rev` lets the tools tell you exactly what changed in English since. When you
  have reviewed a machine translation, change `machine` to `reviewed`. Pages without front
  matter are fine; the drift report just has to guess ("MAYBE-STALE").
- **Terminology**: if you disagree with, or add to, `i18n/glossary.yml`, change it in a
  PR so everyone (and Claude) uses the same words.
- Menu titles are translated in `mkdocs.yml` under `nav_translations` for your language.

---

## Maintainers

### Build and deployment

- `.github/workflows/pr-check.yml` runs on every PR: `check_docs.py --changed`,
  `mkdocs build --strict`, and a translation-drift summary.
- `.github/workflows/deploy.yml` runs on every push to `main`. It builds strictly and
  publishes with `actions/deploy-pages`. Repo **Settings → Pages → Source** must be
  **GitHub Actions**.
- `requirements.txt` is pinned. Dependabot opens monthly upgrade PRs for Python packages
  and GitHub Actions. Merge them when the PR check is green.
- **Material for MkDocs reaches end of life on 5 May 2027**, after which it gets no
  security fixes. Plan the move to its successor, Zensical (see the roadmap below).

### Things that look odd but are deliberate

- `docs/wordpress-site/notify-parent.js` tells the UNBL WordPress page which docs page is
  showing inside its embed (deep-linking). Keep it.
- `polyfill.io` was removed after a supply-chain attack. Don't re-add it.
- Old pages are numbered (`7_find_country.md`). Don't renumber them: links from the
  WordPress site and other places point at these URLs. If a rename is unavoidable, add a
  `redirects` entry (`mkdocs-redirects` is installed).

### `scripts/check_docs.py`

| Mode | Use |
|---|---|
| `python scripts/check_docs.py` | the whole site; warnings summarised (`-v` lists all) |
| `--changed origin/main` | focus on what this branch changed (what CI runs) |
| `--drift [--lang xx]` | translation status report |
| `--hook` | used by the Claude Code Stop hook; reads JSON on stdin |

**Errors** (fail CI): a missing translation file, a nav title without a translation, a
nav entry to a missing page, a broken internal link or image.
**Warnings** (never fail): missing alt text, spaces in image names, images over budget,
pages not in the nav, admonition typos, English changed without its translations.

---

## Roadmap

Agreed in November 2026. Phase 0 is the PR that added this file.

**Phase 1: content and media** (after the large "2026 H1 updates" PR is merged, to
avoid conflicts)

- Shrink media. The 18 GIFs in `docs/unbl-public-platform/images/gifs/` (123 MB) are not
  used by any page: delete them. The public platform tutorials are moving to embedded
  YouTube videos (PR #34). Compress PNGs losslessly, and make the image-size warning an
  error for new files. Target: site under 80 MB (it's about 380 MB now).
- Write alt text for the ~700 existing images (Claude drafts it from the screenshots,
  then it's translated), for accessibility.
- Rename images to remove spaces and settle on one layout per section. Use the
  mkdocs-static-i18n localized-asset convention (`image.png` + `image.fr.png` with
  automatic fallback) if it proves to work with our setup, so all languages share the
  same image references.
- Consider dropping `nav_translations` in favour of each page's translated title, which
  removes ~300 lines from `mkdocs.yml`.
- Reader improvements: a "Last updated" date per page (git-revision-date plugin);
  site-wide abbreviation tooltips (ELSA, DPG, WDPA…); add the Data Security page to the
  menu; a "What's new" page; fix the CSS that shrinks every screenshot to 50% width; one
  consistent title style across sections.

**Phase 2: platform**

- Migrate from Material for MkDocs to Zensical before May 2027.
- A `/refresh-screenshots` workflow that recaptures screenshots per language with
  browser automation after UI changes.
- Preview deployments for pull requests.
