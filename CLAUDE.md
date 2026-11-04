# UNBL Documentation — guide for Claude

User documentation for the **UN Biodiversity Lab (UNBL)**, published at
https://unbiodiversitylab.github.io/unbl-documentation/ and embedded in the UNBL
WordPress site. Built with MkDocs + Material, in **five languages**: English (source),
Spanish, French, Portuguese, Russian.

**Readers:** government focal points, conservation planners and UN staff, often
non-native English speakers on slow connections. Write plainly, task-first, one action
per numbered step.

**Contributors:** a small team, mostly translators and content specialists, not
developers. Several work on Windows in VS Code or the GitHub web editor. Explain git or
build steps in plain language when you ask them to do something.

## Layout

```
docs/
  index.md (+ .es/.fr/.pt/.ru)      landing page
  unbl-public-platform/  N_name.md   "How do I...?" guide to the public map app
  unbl-workspaces/       N_name.md   guide to secure workspaces (admins)
  elsa/                  NN_name.md  ELSA spatial planning tool
  <section>/images/                  screenshots: name.png + name.fr.png etc. (see "Images")
  assets/css/unbl-custom.css         the only custom CSS
  wordpress-site/notify-parent.js    deep-linking for the WordPress embed. Do not remove.
mkdocs.yml        config, nav, and nav_translations for every language
i18n/glossary.yml terminology in 5 languages. Read it before translating.
scripts/check_docs.py  repo checks (also run by CI and the Stop hook)
```

## The five-language rule

Every page exists as `name.md` (English) plus `name.es.md`, `name.fr.md`, `name.pt.md`,
`name.ru.md` (mkdocs-static-i18n, `docs_structure: suffix`).

- **Changing English content means the four translations change too.** Either update
  them in the same change (use `/translate`), or tell the user clearly that they are
  pending so it goes in the PR description. Never silently leave them behind.
- **A new page needs** the English file, 4 translations, a `nav` entry in `mkdocs.yml`,
  and a `nav_translations` entry for that title in **each** of the 4 locale blocks. Use
  `/add-page`.
- When you write or update a translation, set front matter so drift can be tracked:
  ```yaml
  ---
  source_rev: <git SHA of the English file this translation matches>
  translation_status: machine   # or: reviewed (set only by a human reviewer)
  ---
  ```
  Get the SHA with `git log -1 --format=%H -- docs/<path>.md`. If the English file has
  uncommitted changes, set `source_rev` after committing it.
- Use `i18n/glossary.yml`. Product names (UN Biodiversity Lab, UNBL, ELSA) are never
  translated. UI labels in capitals stay in English with a translation in brackets.
- Keep identical between languages: heading levels, figure IDs (`{#fig-...}`), anchors,
  admonition keywords (`!!! note`), link targets, and **image references** (every
  language references the English file name; see "Images").

## Language variants

Write each language in one consistent variant, matching the existing pages:

- **Portuguese: European Portuguese** (decided Nov 2026, issue #42): descarregar, ficheiro,
  utilizador, ecrã, separador, registar, gerir, planeamento, contacto, equipa, partilhar;
  "estar a + infinitivo"; address the reader in the third person or the imperative, not
  "você". A separate Brazilian Portuguese version is proposed in issue #43; until it
  exists, don't write Brazilian forms into `.pt.md` pages.
- **Spanish: neutral international Spanish** that reads naturally in Latin America:
  archivo (not fichero), computadora/equipo, "haga clic", formal *usted* imperative; avoid
  Spain-only forms (vosotros, ordenador).
- **French: international (France) French**, formal *vous*: télécharger, fichier, cliquez.
- **Russian: standard Russian**, formal *вы*.
- **English:** follow the existing pages (currently mostly American spelling: color,
  visualize, optimization). Official names keep their own spelling (UN Development
  Programme, UNEP-WCMC World Conservation Monitoring Centre).

## Markdown conventions

- Headings: one `#` H1 per page, which matches the nav title. Don't skip levels.
- Admonitions: `!!! note`, `!!! tip`, `!!! warning`, `!!! important`, with a space after
  `!!!` and a 4-space indented body.
- Figures with captions (ELSA style):
  ```markdown
  <figure markdown>
  ![Create new analysis dialog](images/creating-analysis-05.png){#fig-create-new-analysis}
  <figcaption>Figure 5. Creating a new analysis</figcaption>
  </figure>
  ```
- **Every new image needs alt text** describing what the screenshot shows (about 5–15
  words, translated in each language).
- Internal links are relative to the `.md` file (`../unbl-workspaces/5_add_places.md#anchor`).
  MkDocs resolves the right language automatically.
- Contact address: `support@unbiodiversitylab.org`.
- **Acronyms** get hover tooltips from `includes/abbreviations.md` and
  `includes/abbreviations.<lang>.md` (appended to every page by `hooks/abbreviations.py`).
  When a page introduces a new acronym, add it to all five files, using the expansion
  the translated pages already use (check the glossary).
- **What's new** (`docs/whats-new*.md`): when a change matters to readers (new page,
  new feature documented, changed steps), add a dated bullet at the top in all five
  languages. Typo fixes don't go there.

## Images

Screenshots use mkdocs-static-i18n **localized assets**:

```
docs/elsa/images/creating-analysis-05.png      English (and the fallback)
docs/elsa/images/creating-analysis-05.fr.png   French version, if one exists
```

- **Every language's page references the English name** (`images/creating-analysis-05.png`).
  The French site automatically serves `creating-analysis-05.fr.png` if it exists, and
  the English image otherwise. Never write `.fr.png` into a page.
- Names are `<page-slug>-<NN>.png`: the page file name without its number prefix,
  hyphenated, plus a two-digit position. For a new screenshot in the middle of a page,
  use the next free number (or a descriptive suffix such as `creating-analysis-05b.png`)
  rather than renumbering existing files.
- Lowercase, hyphens, **no spaces**, PNG. The translated file must have exactly the same
  name and extension as the English one, plus `.<lang>`.
- Keep each image under **1 MB** and no wider than about 1600 px: crop to the relevant
  area, not full-screen captures. No GIFs. Tutorial videos are embedded from YouTube
  (see the `unbl-video` blocks on public platform pages).
- Shared icons live in `images/icons/` and aren't localized.

## Checking your work

Before saying a change is done, run both:

```bash
python scripts/check_docs.py --changed origin/main   # translations, nav, images, links
mkdocs build --strict                                # the real build (about 10 s)
```

- `python scripts/check_docs.py --drift` lists translations that lag English.
- `mkdocs serve` gives a live preview at http://127.0.0.1:8000.
- A Stop hook runs the checker on uncommitted changes and reports problems once per
  session. Fix errors. For warnings, act or explain to the user.
- Errors fail CI. Warnings never do; they track known debt.

## Git and PRs

- `main` deploys to production automatically. **Never push to `main`.** Work on a
  branch and open a PR. Pushing and opening PRs need the user's go-ahead.
- PR descriptions must list which languages were updated and which are pending.
- Commit messages: short imperative summary, e.g. "Add custom metrics section (EN, ES)".
- Avoid sweeping renames or reformatting across many files. Translators often have long
  open branches (check `gh pr list`), and big renames cause merge conflicts and break
  deep links from the WordPress site.

## Do not

- Remove or "fix" `notify-parent.js` or its `extra_javascript` entry.
- Re-add `polyfill.io` (see the comment in `mkdocs.yml`).
- Edit `site/` (build output) or the `gh-pages` branch.
- Upgrade dependencies by hand. `requirements.txt` is pinned and updated through
  Dependabot PRs.
- Translate content inside code blocks, URLs, anchors or file names.

## Skills and agents in this repo

| Command | Use it to |
|---|---|
| `/add-page` | create a new page in all 5 languages, plus nav and nav translations |
| `/translate` | translate a new or changed English page into one or more languages |
| `/translation-status` | see what is missing, stale or awaiting review, per language |
| `/review-page` | check a page for style, accessibility, links and translation parity |
| `/document-feature` | turn a UNBL GitHub issue or PR into a documentation update |
| `translation-reviewer` agent | independent terminology and fidelity check of a translation |
