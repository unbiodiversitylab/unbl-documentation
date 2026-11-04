---
name: translate
description: Translate a new or changed English UNBL documentation page into Spanish, French, Portuguese and/or Russian, using the project glossary and recording source_rev so drift can be tracked. Use when English content changed, a translation is missing or stale, or someone asks to translate a page.
argument-hint: "<docs/path/page.md> [es fr pt ru] [--full]"
---

# Translate a page

Arguments: `$ARGUMENTS`. The first is the English page (`docs/.../name.md`). Optional language codes (default: all four). `--full` retranslates the whole page instead of only the changed parts.

## Before you start

1. Read `i18n/glossary.yml`. Its terms, do-not-translate list and style rules apply.
2. Read the English page and each existing target-language page.
3. Find what changed in English:
   - If the target page has `source_rev` in its front matter: `git diff <source_rev> -- <english page>` (plus `git diff` for uncommitted work).
   - Without `source_rev`: compare the two pages section by section and identify English content missing or different in the translation. Tell the user this was a manual comparison.
   - If the target page doesn't exist, translate the whole page.

## Translating

- **Update only what changed** unless `--full` was given or the page is new. Translators may have hand-polished the other text, so leave it alone.
- Keep the structure identical to English: the same headings at the same levels, the same lists, admonitions, figures, figure IDs, anchors and link targets.
- Image paths: keep them **exactly as in English** (e.g. `images/creating-analysis-05.png`). The site serves `creating-analysis-05.<lang>.png` automatically if it exists. Never write a `.<lang>.png` path into a page. Translate alt text and figure captions.
- Links: keep the target unchanged and translate the link text.
- UI labels: keep them as they appear in the interface, in capitals, with a translation in brackets the first time on the page, as existing pages do.
- Formal register. Follow the existing wording in neighbouring pages of the same language over your own preferences; consistency matters more than elegance.
- If a glossary term doesn't fit the context, or you find a term not in the glossary that appears repeatedly, note it for the user. Don't edit the glossary without asking.

## Front matter

At the top of every page you write or update:

```yaml
---
source_rev: <output of: git log -1 --format=%H -- <english page>>
translation_status: machine
---
```

Keep any other existing front matter keys. If the English page has uncommitted changes, `source_rev` would point to the wrong version: tell the user and offer to commit the English change first.

## Navigation

If the English H1 changed, update the matching `nav_translations` value for each language in `mkdocs.yml` (and the `nav:` key itself, if it's the English title).

## Finish

1. Run `python scripts/check_docs.py --changed origin/main` and `mkdocs build --strict`.
2. For a substantial translation, offer to run the `translation-reviewer` agent for an independent check.
3. Tell the user which languages were updated and that the text is a **machine translation awaiting review by a native speaker**. Suggest they ask the reviewer for that language on the PR.
