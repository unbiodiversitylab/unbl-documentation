---
name: review-page
description: Review one or more UNBL documentation pages (or the current branch's changes) for clarity, house style, accessibility, broken links and images, and parity between languages. Use before opening a PR or when asked to check a page.
argument-hint: "[docs/path/page.md ... | blank for all changes on this branch]"
---

# Review documentation pages

Scope: `$ARGUMENTS`. If blank, review the `.md` files changed on this branch: `git diff --name-only origin/main...HEAD -- docs` plus uncommitted changes.

## 1. Automated checks

Run `python scripts/check_docs.py --changed origin/main` and `mkdocs build --strict`, and include any errors.

## 2. Read each page as a user would

Check against CLAUDE.md conventions:

- **Clarity**: does the page answer its title's question? Is it task-first, one action per numbered step? Are UI labels written exactly as in the interface? Remove jargon, or explain it.
- **Accuracy hints**: steps that reference figures or buttons not shown, outdated numbers (e.g. "eleven dynamic metrics"), dates, or "coming soon" text.
- **Accessibility**: alt text on new images; descriptive link text (not "click here"); heading levels in order; tables with header rows.
- **Formatting**: admonition syntax (`!!! note` with a space, body indented 4 spaces), figure blocks, numbered lists that restart unintentionally (often a missing indent under a list item).
- **Links**: relative `.md` links to pages that exist; external links that look outdated.

## 3. Language parity (for English pages)

Compare the English page with each translation: the same number of headings, figures, admonitions and numbered steps. List any section that exists in English but not in a translation. Don't judge translation quality here; offer the `translation-reviewer` agent for that.

## 4. Report

Group findings by page, most important first, each with `file:line` and a concrete fix. Separate "must fix" (broken, wrong, inaccessible) from "suggestions". Offer to apply the fixes. Don't edit anything without the user's go-ahead.
