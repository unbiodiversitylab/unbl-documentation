---
name: add-page
description: Create a new documentation page in all five languages (EN, ES, FR, PT, RU), with its mkdocs.yml nav entry and nav_translations for every locale. Use when someone wants to add a new page or section to the UNBL docs.
argument-hint: "<section> <English page title>"
---

# Add a new page

Arguments: `$ARGUMENTS` (section such as `unbl-workspaces`, `unbl-public-platform`, `elsa`, then the English title). If either is missing, ask.

## 1. Decide the file name and position

- Look at the existing files in `docs/<section>/` and the `nav:` block in `mkdocs.yml`.
- Follow the section's numbering style (`N_name.md` for the public platform and workspaces, `NN_name.md` for ELSA). Use a short lowercase slug with underscores.
- **Don't renumber existing files** to make room: that breaks deep links from the WordPress site and conflicts with open branches. If the page belongs mid-sequence, give it the next free number and place it correctly in `nav:` (nav order is independent of file names). Confirm the position with the user.

## 2. Write the English page

- One `#` H1 that exactly matches the nav title.
- Follow the conventions in CLAUDE.md (task-first numbered steps, admonitions, alt text on every image, relative links).
- If the user hasn't given content yet, write a short skeleton with headings and a `!!! note` placeholder, and say it's a draft.

## 3. Create the four translations

- Translate the page into `name.es.md`, `name.fr.md`, `name.pt.md`, `name.ru.md` following the `/translate` skill (glossary, front matter with `source_rev` and `translation_status: machine`).
- If the English page isn't committed yet, leave `source_rev` out and tell the user to run `/translate` again after committing, or offer to commit.

## 4. Update mkdocs.yml

- Add `- <English title>: <section>/<file>.md` to `nav:` at the agreed position.
- Add `<English title>: <translated title>` to `nav_translations` in **each** of the `es`, `fr`, `pt`, `ru` locale blocks. The translated title must match that language's H1. Watch YAML quoting: quote titles containing `: ` or starting with special characters.
- If the page links from a section `index.md`, update the index in all 5 languages too.

## 5. Verify

```bash
python scripts/check_docs.py --changed origin/main
mkdocs build --strict
```

Report: the files created, the nav position, and that the translations are machine drafts needing review by a native speaker.
