---
name: document-feature
description: Turn a UNBL product change (a GitHub issue or PR in unbl-documentation, unbl-frontend, unbl-services or unbl-elsa, or a plain description) into a documentation update plan and draft. Use when a feature shipped or changed and the docs need to catch up.
argument-hint: "<issue/PR URL or number, or a description of the change>"
---

# Document a product change

Input: `$ARGUMENTS`.

## 1. Understand the change

- For a GitHub link or number, read it with `gh issue view` / `gh pr view` (add `-R owner/repo` for other repos; a bare number means this repo). Follow links to related PRs (e.g. in `unepwcmc/unbl-frontend` or `unepwcmc/unbl-services`) and read their descriptions and, where useful, the diff of UI text. If access is denied, ask the user to paste the relevant details.
- Summarise in 3–5 bullets **what changes for a user**: new buttons or labels, removed options, changed behaviour, new limits. Ignore implementation details.

## 2. Find what the docs say today

- Search `docs/` (English files) for the affected feature: UI labels, concepts, screenshots that show the old UI.
- List each affected page and section, and what is now wrong or missing. Note screenshots that need recapturing: you can't capture them, so they go to the user as a to-do.

## 3. Propose before writing

Show the user a short plan: pages to edit, new sections or pages (with `/add-page`), screenshots to retake, and which languages will be updated now versus marked pending. Wait for their go-ahead.

## 4. Draft

- Edit the English pages following CLAUDE.md.
- Then either run `/translate` for each changed page, or (if the user prefers to wait for English review first) list the translations as pending.
- Run `python scripts/check_docs.py --changed origin/main` and `mkdocs build --strict`.

## 5. Hand off

Draft a PR description: the source issue or PR links, a user-facing summary of the change, pages updated, screenshots still needed, and language status (updated / machine draft / pending). Don't open the PR without the user's go-ahead.
