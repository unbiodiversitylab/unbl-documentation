# UNBL Translation Contributor Guide

This guide helps translators work on translations across UNBL repositories using VS Code and Git. It covers three repos, each with a different translation approach:

| Repository | What You Translate | Format | How to Find Missing Translations |
|---|---|---|---|
| **unbl-documentation** | User-facing help docs | Markdown files (one per language) | Look for missing `.{lang}.md` files |
| **unbl-elsa** | ELSA tool interface text | Single YAML file | Search for `null` values |
| **unbl-frontend** | Web app interface text | JSON files (one folder per language) | Search for `"TODO"` or run `yarn translations:missing` |

**Supported languages:** English (en), Spanish (es), French (fr), Portuguese (pt), Russian (ru).

---

## One-Time Setup

You only need to do these steps once on your computer.

### Install VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Click the download button for your operating system (Windows or Mac)
3. Run the installer and follow the prompts

### Install Git

**Windows:**
1. Go to [git-scm.com](https://git-scm.com)
2. Download and run the installer
3. Use all default options during installation

**Mac:**
Git is usually pre-installed. Open Terminal and type `git --version` to check. If not installed, you'll be prompted to install it.

### Clone the Repositories

Open VS Code, then for each repo you need to work on:

1. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac) to open the Command Palette
2. Type **Git: Clone** and select it
3. Paste the repository URL and choose a folder on your computer (e.g., Documents)
4. When prompted, click **Open** to open the project
5. If prompted to sign in to GitHub, follow the sign-in steps

Repository URLs:

- **Documentation:** `https://github.com/UNDP-UNBL/unbl-documentation.git`
- **ELSA:** `https://github.com/UNDP-UNBL/unbl-elsa.git`
- **Frontend:** `https://github.com/UNDP-UNBL/unbl-frontend.git`

---

## General Workflow (All Repos)

Follow these steps each time you work on translations, regardless of which repo you're editing.

```
  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌────────┐     ┌──────────┐     ┌──────────┐
  │  1. Pull │     │2. Create │     │3. Find   │     │4. Edit │     │5. Commit │     │ 6. Open  │
  │  latest  │────>│  branch  │────>│  what    │────>│  and   │────>│  and     │────>│  Pull    │
  │  changes │     │          │     │  needs   │     │  save  │     │  sync    │     │  Request │
  └──────────┘     └──────────┘     │  work    │     └────────┘     └──────────┘     └──────────┘
                                    └──────────┘
```

### Before You Start

Always pull the latest changes before editing:

1. Open your project in VS Code
2. Look at the bottom-left corner of VS Code for the sync icon:

```
┌─────────────────────────────────────────────────────────┐
│  VS Code bottom status bar                              │
│                                                         │
│  main ↻  ← Click here to sync                           │
│  ↑                                                      │
│  Current branch                                         │
└─────────────────────────────────────────────────────────┘
```

Or use the terminal (`Ctrl+`` ` to open it):

```bash
git checkout main
git pull origin main
```

### Create a Branch

Create a branch for your work so it can be reviewed before merging. In the VS Code terminal:

```bash
git checkout -b translate/fr-elsa-docs
```

Use this naming convention: `translate/<language>-<short-description>`

You'll see the branch name change in the bottom-left corner:

```
┌─────────────────────────────────────────────────────────┐
│  translate/fr-elsa-docs ↻                               │
│  ↑                                                      │
│  Your new branch name now shows here                    │
└─────────────────────────────────────────────────────────┘
```

### While Working

- Save files with `Ctrl+S` (Windows) or `Cmd+S` (Mac)
- A white dot on the file tab means you have unsaved changes:

```
┌──────────────────────────────────────────┐
│  01_overview.fr.md ●   01_overview.md    │   ● = unsaved changes
│ ─────────────────────────────────────────│
│  File content here...                    │
└──────────────────────────────────────────┘
```

### When You're Done

1. Click the **Source Control** icon in the left sidebar (it looks like a branching line, and may show a badge with the number of changed files)

```
┌───┬─────────────────────────────────────────────┐
│   │  SOURCE CONTROL                             │
│ ☐ │                                             │
│ 🔍│  Message (e.g., "Updated French             │
│ ⑃ │  translations for ELSA docs")               │
│ ↑ │  ┌──────────────────────────────────────┐   │
│   │  │          ✓ Commit                    │   │
│ S │  └──────────────────────────────────────┘   │
│ o │                                             │
│ u │  Changes (2)                                │
│ r │    M  01_overview.fr.md          [+] [-]    │
│ c │    A  02_tool_purpose.fr.md      [+] [-]    │
│ e │                                             │
│   │  M = Modified    A = Added (new file)       │
│ C │  [+] = stage     [-] = discard changes      │
│ o │                                             │
│ n │                                             │
│ t │                                             │
│ r │                                             │
│ o │                                             │
│ l │                                             │
└───┴─────────────────────────────────────────────┘
```

2. Click the **+** next to each file to stage it (or **+** next to "Changes" to stage all)
3. Type a short message describing your changes
4. Click the **Commit** button (checkmark)
5. Click **Sync Changes** to upload to GitHub
6. Go to the repository on GitHub — you'll see a banner prompting you to **Create a Pull Request**. Click it, add a description, and submit

### Keyboard Shortcuts Quick Reference

| Action | Windows | Mac |
|---|---|---|
| Save file | `Ctrl+S` | `Cmd+S` |
| Find in current file | `Ctrl+F` | `Cmd+F` |
| Find in all files | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Undo | `Ctrl+Z` | `Cmd+Z` |
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |

---

<a id="unbl-documentation"></a>

## Translating: unbl-documentation (MkDocs Site)

This repo contains the user-facing help documentation at [undp-unbl.github.io/unbl-documentation](https://undp-unbl.github.io/unbl-documentation/). Translations use a **file suffix** convention — each language gets its own copy of the Markdown file.

### How It Works

For every English page, there should be a translated version with a language suffix:

| Language | File suffix | Example |
|---|---|---|
| English (default) | `.md` | `01_overview.md` |
| Spanish | `.es.md` | `01_overview.es.md` |
| French | `.fr.md` | `01_overview.fr.md` |
| Portuguese | `.pt.md` | `01_overview.pt.md` |
| Russian | `.ru.md` | `01_overview.ru.md` |

If a translated file is missing, the site automatically shows the English version to the user.

### Directory Structure

```
docs/
├── index.md                          # Homepage (English)
├── index.es.md                       # Homepage (Spanish)
├── index.fr.md                       # Homepage (French)
├── ...
├── elsa/                             # ELSA tool documentation
│   ├── 01_overview.md                # English
│   ├── 01_overview.es.md             # Spanish
│   ├── 01_overview.fr.md             # French
│   ├── images/
│   │   ├── en/                       # English screenshots
│   │   ├── es/                       # Spanish screenshots
│   │   ├── fr/                       # French screenshots
│   │   └── ...
├── unbl-public-platform/             # UNBL Platform documentation
│   ├── 1_register.md
│   ├── 1_register.es.md
│   └── images/
│       ├── en/
│       ├── es/
│       └── ...
└── unbl-workspaces/                  # Workspaces documentation
    ├── 1_basics.md
    ├── 1_basics.es.md
    └── images/
        ├── en/
        └── ...
```

### Finding What Needs Translation

#### Method 1: Compare file lists in VS Code

Expand a section folder in the left sidebar and look for missing language files:

```
┌─ EXPLORER ────────────────────────────────────────────┐
│  ▼ docs/elsa/                                         │
│      01_overview.md            ← English              │
│      01_overview.es.md         ← Spanish    ✓         │
│      01_overview.fr.md         ← French     ✓         │
│      01_overview.pt.md         ← Portuguese ✓         │
│      01_overview.ru.md         ← Russian    ✓         │
│      02_tool_purpose.md        ← English              │
│      02_tool_purpose.es.md     ← Spanish    ✓         │
│      (no .fr.md file!)         ← French     ✗ MISSING │
│      02_tool_purpose.pt.md     ← Portuguese ✓         │
│      02_tool_purpose.ru.md     ← Russian    ✓         │
└───────────────────────────────────────────────────────┘
         In this example, the French translation
         for 02_tool_purpose is missing.
```

#### Method 2: Side-by-side comparison (for outdated translations)

If a translated file already exists but the English version was recently updated, use VS Code's built-in diff viewer to see exactly what changed:

**Step 1:** Right-click the English file → **Select for Compare**

**Step 2:** Right-click your language file → **Compare with Selected**

VS Code opens the diff view — two files side by side with differences highlighted:

```
┌─────────────────────────────┬──────────────────────────────┐
│  01_overview.md (English)   │  01_overview.fr.md (French)  │
│─────────────────────────────│──────────────────────────────│
│                             │                              │
│  ## Overview                │  ## Vue d'ensemble           │
│                             │                              │
│  The ELSA tool helps        │  L'outil ELSA aide les       │
│  countries identify         │  pays à identifier           │
│  priority areas.            │  les zones prioritaires.     │
│                             │                              │
│ +┃ ### New Feature          │                              │
│ +┃ This section was         │    (nothing here — this      │
│ +┃ recently added to the    │     needs to be translated)  │
│ +┃ English version.         │                              │
│                             │                              │
│  ## Getting Started         │  ## Pour commencer           │
│                             │                              │
└─────────────────────────────┴──────────────────────────────┘
  Lines marked with + (green) exist in one file but
  not the other — these are sections you need to translate.
```

> **Tip:** You can also compare files using the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`). Type **File: Compare Active File With...** and select the file to compare against.

#### Method 3: Check recent English changes using Git history

To see what changed recently in an English file, open it and look at the left margin of the editor:

```
┌─────┬──────────────────────────────────────────┐
│     │  01_overview.md                          │
│─────│──────────────────────────────────────────│
│     │                                          │
│     │  ## Overview                             │
│     │                                          │
│     │  The ELSA tool helps countries           │
│  ┃  │  identify priority areas for nature      │  ← Blue bar = modified line
│  ┃  │  conservation and restoration.           │
│     │                                          │
│ +┃  │  ### New Feature                         │  ← Green bar = new lines
│ +┃  │  This section was recently added.        │
│ +┃  │  It explains the new optimization        │
│ +┃  │  settings available in v2.0.             │
│     │                                          │
│  ▼  │  (line was deleted here)                 │  ← Red triangle = deleted line
│     │                                          │
│     │  ## Getting Started                      │
└─────┴──────────────────────────────────────────┘
```

**Using the Timeline panel** for a full history:

1. Open the English file
2. In the bottom of the left sidebar, expand the **TIMELINE** panel
3. You'll see a list of all past commits that touched this file

```
┌─ TIMELINE ──────────────────────────────────────┐
│  01_overview.md                                 │
│                                                 │
│  ○ Updated optimization section  - 2 days ago   │  ← Click to see
│  ○ Added new feature docs        - 1 week ago   │     what changed
│  ○ Fixed typo in overview        - 2 weeks ago  │     in that commit
│  ○ Initial version               - 3 months ago │
└─────────────────────────────────────────────────┘
```

Click any entry to see a diff of what changed in that commit — this helps you identify exactly which sections need updating in your translation.

#### Method 4: Use Git to find all recently changed English files

In the VS Code terminal, run this to see which English files changed in the last 30 days:

```bash
git log --since="30 days ago" --name-only --pretty=format:"" -- 'docs/*.md' ':!docs/*.*.md' | sort -u
```

This lists only English source files (excluding already-translated `.es.md`, `.fr.md`, etc.) that were modified recently. Each file in the output may need its translations updated.

### Creating a New Translation

```
   Step 1                    Step 2                    Step 3
┌───────────────┐        ┌──────────────┐        ┌───────────────────┐
│ 01_overview.md│  Copy  │ 01_overview  │Rename  │ 01_overview.fr.md │
│   (English)   │ -----> │  copy.md     │ -----> │    (French)       │
└───────────────┘        └──────────────┘        └───────────────────┘
                                                        │
                                                        ▼
                                                  Step 4: Open and
                                                  translate content
```

1. In VS Code, right-click the English file you want to translate
2. Select **Copy** and then **Paste** in the same folder
3. Rename the copy with your language suffix (e.g., `01_overview.md` becomes `01_overview.fr.md`)
4. Open the new file and translate the content

### What to Preserve (Don't Translate These)

When translating a Markdown file, keep the following exactly as they are:

- **Heading levels** — keep `#`, `##`, `###` structure the same
- **Admonition syntax** — keep `!!! tip`, `!!! note`, `!!! warning` keywords in English; translate only the title and body text inside:
  ```markdown
  !!! tip "Conseil"
      Votre texte traduit ici.
  ```
- **Links** — keep the URL, translate only the display text:
  ```markdown
  [Texte traduit](https://same-url.com)
  ```
- **Image references** — update the path to point to your language's images if they exist:
  ```markdown
  ![Description traduite](images/fr/screenshot.png)
  ```
  If no language-specific image exists, keep the English path (`images/en/...`)
- **Markdown formatting** — bold `**text**`, italic `*text*`, lists, tables, code blocks

### Image Translations

Screenshots that contain visible text should ideally have language-specific versions:

- Images are stored in `docs/<section>/images/<language>/`
- If a screenshot in your language already exists, reference it (e.g., `images/fr/screenshot.png`)
- If no translated screenshot exists, use the English version (`images/en/screenshot.png`) — it's better than a broken image
- If you create new screenshots, place them in the correct language folder

### Navigation Translations

Page titles in the site navigation are translated in `mkdocs.yml` under `nav_translations` for each language. If you add a new page, ask your team lead to add the navigation translations — or locate the `nav_translations` section for your language in `mkdocs.yml` and add the translated title:

```yaml
# Example: Spanish nav_translations section in mkdocs.yml
nav_translations:
  Home: Inicio
  How do I register or log-in?: ¿Cómo me registro o inicio sesión?
```

### Previewing Your Work Locally

If you have the MkDocs environment set up (see [QUICKSTART.md](QUICKSTART.md)):

```bash
mkdocs serve
```

Then open http://127.0.0.1:8000 and use the language selector in the site header to switch to your language.

---

<a id="unbl-elsa"></a>

## Translating: unbl-elsa (ELSA Tool Text)

The ELSA repo has a single translation file containing all user-facing text for the ELSA optimization tool.

### How It Works

All translations live in one file: **`ELSA/elsa_text.yaml`**

Each translatable term has language codes as keys:

```yaml
priority_area_map_name:
  en: Priority Area Map
  es: Mapa de Áreas Prioritarias
  fr: Carte des Zones Prioritaires
  ru: null
```

A `null` value means the translation is missing.

### Finding What Needs Translation

1. Open `ELSA/elsa_text.yaml` in VS Code
2. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac) to open Find
3. Search for your language code followed by `: null`
4. Each match is a term that needs translating

```
┌──────────────────────────────────────────────────────┐
│  Find: [ fr: null              ]  3 of 12 results    │
│──────────────────────────────────────────────────────│
│                                                      │
│  priority_area_map_name:                             │
│    en: Priority Area Map                             │
│    es: Mapa de Áreas Prioritarias                    │
│    fr: null                        ← MATCH: needs    │
│    ru: Карта приоритетных территорий   translation   │
│                                                      │
│  action:                                             │
│    en: Action                                        │
│    es: Acción                                        │
│    fr: null                        ← MATCH           │
│    ru: Действие                                      │
│                                                      │
│  Use ↑ ↓ arrows to jump between matches              │
└──────────────────────────────────────────────────────┘
```

### Adding a Translation

Replace `null` with your translated text in quotes:

**Before:**
```yaml
priority_area_map_name:
  en: Priority Area Map
  es: Mapa de Áreas Prioritarias
  fr: null
```

**After:**
```yaml
priority_area_map_name:
  en: Priority Area Map
  es: Mapa de Áreas Prioritarias
  fr: Carte des Zones Prioritaires
```

### YAML Formatting Rules

- **Use spaces, never tabs** — YAML is indentation-sensitive (2 spaces per level)
- **Wrap text in quotes** if it contains colons (`:`), hash symbols (`#`), or starts with a special character:
  ```yaml
  fr: "Note : ceci contient un deux-points"
  ```
- **Keep placeholders unchanged** — if the English text contains `{variable}` or similar, keep it in your translation:
  ```yaml
  en: "Map for {country_name}"
  fr: "Carte pour {country_name}"
  ```

### Common Pitfalls

- Accidentally changing the indentation (this breaks the YAML structure)
- Forgetting to quote strings that contain colons
- Translating the key name instead of the value (only translate text after the language code)

---

<a id="unbl-frontend"></a>

## Translating: unbl-frontend (Web Application)

The frontend repo uses JSON translation files organized by language, with the i18next library.

### How It Works

Translation files live in: **`packages/earth-shared/src/translations/`**

```
translations/
├── en/                           # English (source)
│   ├── translation.json          # Main app text
│   ├── admin.translation.json    # Admin panel text
│   └── elsa.translation.json     # ELSA-related text
├── es/                           # Spanish
│   ├── translation.json
│   ├── admin.translation.json
│   └── elsa.translation.json
├── fr/                           # French
├── pt/                           # Portuguese
└── ru/                           # Russian
```

Missing translations are marked with the value `"TODO"`.

### Finding What Needs Translation

**Option 1: Use the built-in script** (if you have yarn/node set up)

```bash
yarn translations:missing
```

This generates `.missing.json` files showing exactly which keys need translation.

**Option 2: Search in VS Code**

1. Press `Ctrl+Shift+F` (Windows) or `Cmd+Shift+F` (Mac) for Find in Files
2. Type `"TODO"` in the search box
3. Click the filter icon (···) and type `translations/fr/` to narrow to your language
4. Each match is a string that needs translating

```
┌─ SEARCH ────────────────────────────────────────┐
│  Search: [ "TODO"                          ]    │
│  Files:  [ translations/fr/               ]     │
│──────────────────────────────────────────────── │
│                                                 │
│  translations/fr/translation.json               │
│    12:   "Collection name": "TODO"              │
│    15:   "Search datasets": "TODO"              │
│    28:   "Download results": "TODO"             │
│                                                 │
│  translations/fr/admin.translation.json         │
│    5:    "Manage users": "TODO"                 │
│    9:    "Create workspace": "TODO"             │
│                                                 │
│  5 results in 2 files                           │
│                                                 │
│  Click any line to jump directly to it.         │
└─────────────────────────────────────────────────┘
```

### Adding a Translation

Open the JSON file for your language and replace `"TODO"` with the translated text:

**Before:**
```json
{
  "Collection name": "TODO",
  "Search datasets": "TODO"
}
```

**After:**
```json
{
  "Collection name": "Nom de la collection",
  "Search datasets": "Rechercher des jeux de données"
}
```

### JSON Formatting Rules

- **Always use straight double quotes** `"like this"` — not curly/smart quotes
- **Every line except the last needs a comma** at the end
- **If your translation contains a quote mark**, escape it with a backslash: `\"`
- **Keep `{{interpolation}}` variables unchanged** — these are dynamic values filled in by the app:
  ```json
  "Welcome, {{name}}": "Bienvenue, {{name}}"
  ```
- **Keep HTML tags unchanged** if present:
  ```json
  "Read our <1>terms</1>": "Lisez nos <1>conditions</1>"
  ```

**Tip:** If VS Code shows a red squiggly line under your text, there's likely a JSON syntax error. Hover over it to see what's wrong.

### Validating Your Work

After translating, run the missing translations check again to confirm your progress:

```bash
yarn translations:missing
```

Your language should show fewer (or zero) missing entries.

---

## Tips for All Repos

### What to Translate

- User-visible text and content
- Alt text for images (accessibility)
- Navigation labels and page titles

### What NOT to Translate

- File names (except adding the language suffix in unbl-documentation)
- Code examples and technical identifiers
- URLs and links (translate display text only)
- Placeholder variables (`{{name}}`, `{country}`, etc.)
- YAML/JSON keys (only translate values)
- Markdown syntax (`#`, `**`, `!!!`, `[]()`, etc.)

### Style Guidelines

- Use formal register appropriate for UN documentation
- Be consistent with existing translations in the same language
- When unsure about terminology, check existing translated files in the same repo
- Keep sentences similar in length to the English original

---

## Troubleshooting

### "I made a mistake and want to undo"

- **In the editor:** Press `Ctrl+Z` (Windows) or `Cmd+Z` (Mac) to undo
- **Before committing:** If you saved a file but haven't committed yet, you can discard changes in the Source Control panel:

```
┌─ SOURCE CONTROL ────────────────────────────────┐
│                                                 │
│  Changes (1)                                    │
│    M  01_overview.fr.md      [+] [↩]            │
│                                    ↑            │
│                         Click ↩ to discard      │
│                         all changes to this     │
│                         file (reverts to the    │
│                         last committed version) │
└─────────────────────────────────────────────────┘
```

### "My branch is behind main"

If others have made changes while you were working:

1. Save and commit your current work
2. Run in the terminal:
   ```bash
   git pull origin main
   ```
3. If there are no conflicts, you're good to continue

### "There are merge conflicts"

This happens when you and someone else edited the same lines. VS Code will highlight the conflicts with colored blocks:

```
┌──────────────────────────────────────────────────────┐
│  translation.json                                    │
│──────────────────────────────────────────────────────│
│                                                      │
│  <<<<<<< HEAD (Current Change)                       │
│ ┃ "welcome": "Bienvenue sur notre site"              │  ← Your version
│  =======                                             │
│ ┃ "welcome": "Bienvenue dans notre plateforme"       │  ← Their version
│  >>>>>>> main (Incoming Change)                      │
│                                                      │
│  ┌──────────────┐ ┌────────────────┐ ┌───────────┐   │
│  │Accept Current│ │Accept Incoming │ │Accept Both│   │
│  └──────────────┘ └────────────────┘ └───────────┘   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Accept Current Change** = keep your version
- **Accept Incoming Change** = use the other person's version
- **Accept Both Changes** = keep both (you'll need to clean up afterwards)

If unsure, ask your team lead for help. After resolving, save the file, commit, and sync.

### "I can't find my project"

Go to **File > Open Recent** in VS Code to see projects you've opened before.

### "Git asks for credentials"

VS Code should open a browser window for you to sign in to GitHub. Use your GitHub account credentials. If it keeps asking, try:

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type **Git: Sign In** and follow the prompts

### "Red squiggly lines in my file"

This usually means a syntax error. Common causes:
- **JSON:** Missing comma, mismatched quotes, trailing comma on last item
- **YAML:** Wrong indentation, unquoted string with special characters
- **Markdown:** Usually not a real error — Markdown is very forgiving

Hover over the red line to see the error message.

### "MkDocs won't build" (unbl-documentation only)

Common causes:
- YAML syntax error in `mkdocs.yml`
- A file referenced in navigation doesn't exist
- Run `mkdocs build` in the terminal to see the specific error message

---

## Daily Checklist

1. Sync/pull changes before starting
2. Create a branch for your work
3. Find what needs translation (missing files, `null` values, or `"TODO"` entries)
4. Translate and save files
5. Write a clear commit message
6. Push your branch and open a Pull Request
