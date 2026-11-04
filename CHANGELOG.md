# Changelog

Notable changes to the UNBL user documentation: new and rewritten guides, new
languages, and changes to how the site is built. Typo fixes and small wording updates
aren't listed; see the [commit history](https://github.com/unbiodiversitylab/unbl-documentation/commits/main)
for those.

Add an entry under **Unreleased** in the same PR as your change. Group entries as
*Content*, *Translations* or *Site and tooling*.

## [Unreleased]

### Translations
- Russian brought up to date with English (all 2026 H1 changes), as machine drafts
  awaiting native review.
- Spanish and Portuguese brought up to date with English (all 2026 H1 changes), as
  machine drafts awaiting native review. Spanish button labels fixed (#42).
- Portuguese standardised on European Portuguese (#42); Brazilian Portuguese proposed
  as a separate language (#43).

### Content
- What's new page (all five languages); data storage info sheet added to the Workspaces
  menu; partner logos on the translated home pages (#40).
- Alt text for every image (about 150 per language, 710 in all), describing what each
  screenshot shows for its step, in the page's language. Icons have consistent names
  ("Information", "More options (three dots)", …). Missing alt text now fails the PR check.
- 2026 H1 English updates (#34): embedded tutorial videos on most public platform pages
  (all five languages); new Protected Connected Index, Coastal Eutrophication and marine
  metrics; clip and export now downloads GeoJSON boundaries; ELSA guide uses
  "area-based targets" instead of "constraints", with new screenshots; workspace guide
  chapters 1–6 updated. Translations of the text changes are pending.

### Site and tooling
- English pages use British spelling (UN style); admonitions use one syntax; broken
  links to page sections now fail the build (5 fixed).
- The translation drift report ignores mechanical commits listed in
  `.git-blame-ignore-revs`.
- "Last updated" date on every page, acronym tooltips in the reader's language
  (`includes/abbreviations*.md`), and screenshots shown at full column width instead of
  50% (#40).
- Screenshots moved to one folder per section with localized names
  (`creating-analysis-05.png` + `creating-analysis-05.fr.png`); every language now uses
  the same image references and falls back to English automatically.
- Deleted 18 unused GIFs and other unreferenced images; compressed, resized (max
  1600 px) and palette-reduced screenshots. Built site 396 MB → 84 MB; no screenshot
  over 1 MB.
- `check_docs.py` checks the image convention, flags unused images, and fails PRs that
  add images over 1 MB.
- Added `CLAUDE.md` and shared Claude Code configuration (`.claude/`): project
  instructions, the `/add-page`, `/translate`, `/translation-status`, `/review-page` and
  `/document-feature` skills, a `translation-reviewer` agent, permissions that prevent
  pushing to `main`, and a hook that checks changes before Claude finishes.
- Added `scripts/check_docs.py`, which checks translation parity, nav translations,
  broken links and images, alt text, image sizes and translation drift.
- Added `i18n/glossary.yml`, terminology in all five languages seeded from existing
  translations.
- Added a PR check (strict build + repository checks + translation summary), Dependabot,
  PR and issue templates, a draft CODEOWNERS and shared VS Code recommendations.
- Deployment now uses GitHub's official Pages actions instead of `mkdocs gh-deploy`, so
  the repository no longer grows with every published build.
- Pinned all Python dependencies, and made `environment-mkdocs.yaml` read from
  `requirements.txt`.
- Replaced QUICKSTART.md, FILE_PURPOSES.md and CUSTOM_DOMAIN_SETUP.md with a shorter
  README.md and a new CONTRIBUTING.md. The custom domain is no longer planned.
- Removed unused configuration (the `mike` version selector, and a feedback widget that
  never appeared because no analytics provider is configured) and stray `.Rhistory` files.

## 2026

### Content
- Custom metrics section for UNBL workspaces (EN, with ES/FR/PT/RU translations).
- Data security sheet for workspaces (all five languages).
- UNCCD targets in the Spanish ELSA guide.

### Site and tooling
- UNBL logo and favicon.
- Deep-linking support for the WordPress embed (`notify-parent.js`).
- Removed the compromised polyfill.io script.
- Moved the repository to the `unbiodiversitylab` GitHub organisation.

## 2025

### Content
- UNCCD targets added to the ELSA guide.
- Guide to UNBL Secure Workspaces (EN, then ES, FR, PT, RU).
- Revised guide to the UNBL Public Platform and the ELSA tool, including reviewed FR
  and ES versions and the Russian ELSA guide.

### Site and tooling
- Migrated from Sphinx/reStructuredText on ReadTheDocs to MkDocs Material on GitHub
  Pages, with multilingual support via mkdocs-static-i18n. The earlier training
  materials and country-specific guidance were not carried over.

## 2023–2024

- First public version of the documentation, with the public platform guide and the
  FR, ES, PT and RU language structure.
