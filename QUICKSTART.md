# MkDocs Quick Start Guide

## Prerequisites

- Mamba/Conda or Python 3.11+ installed
- Git repository cloned locally

## Option 1: Using Mamba/Conda (Recommended)

### Step 1: Activate Environment

```bash
# If mamba is in PATH
mamba activate unbl-mkdocs

# If mamba is not in PATH (use full path)
/my/full/path/miniconda3/bin/mamba activate unbl-mkdocs
```

### Step 2: Build Documentation

```bash
mkdocs build
```

### Step 3: Preview Locally

```bash
mkdocs serve
```

Then open http://127.0.0.1:8000 in your browser.

### Step 4: Deploy

Push to your git repository and GitHub Pages will automatically build and deploy.

```bash
git add .
git commit -m "Update documentation"
git push origin main
```

Your site will be live at: https://undp-unbl.github.io/unbl-documentation/

## Option 2: Using Python Virtual Environment

### Step 1: Create Environment

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### Step 2: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 3: Build Documentation

```bash
mkdocs build
```

### Step 4: Preview Locally

```bash
mkdocs serve
```

### Step 5: Deploy

Push to your git repository and GitHub Pages will automatically build and deploy.

```bash
git add .
git commit -m "Update documentation"
git push origin main
```

Your site will be live at: https://undp-unbl.github.io/unbl-documentation/

## Common Commands

```bash
# Build the documentation
mkdocs build

# Serve locally with live reload
mkdocs serve

# Build with strict mode (fails on warnings)
mkdocs build --strict

# Clean the build directory
mkdocs build --clean

# Deploy to GitHub Pages (if using)
mkdocs gh-deploy
```

## Project Structure

```
docs/
├── index.md              # Homepage
├── unbl-public-platform/ # UNBL docs
├── unbl-workspaces/      # UNBL workspaces
├── elsa/                 # ELSA docs
└── assets/               # CSS, images, etc.

mkdocs.yml               # Configuration file
requirements.txt         # Python dependencies
environment-mkdocs.yaml  # Conda environment
```

## Making Changes

1. Edit Markdown files in `docs/` directory
2. Save changes
3. If `mkdocs serve` is running, changes appear automatically
4. Review in browser at http://127.0.0.1:8000
5. Commit and push when satisfied

!!! tip
    Don't forget to make translated versions of  your `.md` too!

## Language Support

The site supports 5 languages:
- English (default)
- Spanish
- French
- Portuguese
- Russian

To create translations, create files with language suffix:
- `index.md` → English
- `index.es.md` → Spanish
- `index.fr.md` → French
- `index.pt.md` → Portuguese
- `index.ru.md` → Russian

## Troubleshooting

### "mkdocs: command not found"

**Solution:** Activate the environment first or use full path:
```bash
/your/path/miniconda3/bin/mamba run -n unbl-mkdocs mkdocs build
```

### Build warnings about missing files

**Solution:** Check the `nav:` section in `mkdocs.yml` matches actual file paths.

### Images not showing

**Solution:** Check image paths are relative to the markdown file location.

### Port already in use

**Solution:** Use a different port:
```bash
mkdocs serve -a 127.0.0.1:8001
```

## Documentation

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Markdown Guide](https://www.markdownguide.org/)
