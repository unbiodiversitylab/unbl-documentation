# UNBL Documentation

[![Deploy MkDocs to GitHub Pages](https://github.com/UNDP-UNBL/unbl-documentation/actions/workflows/deploy.yml/badge.svg)](https://github.com/UNDP-UNBL/unbl-documentation/actions/workflows/deploy.yml)

This repository contains the documentation for the **UN Biodiversity Lab (UNBL)**, built with MKDocs and available in multiple languages.

## 🚀 Quick Start

### Using Mamba/Conda (Recommended)

```bash
# Activate the environment
mamba activate unbl-mkdocs

# Serve locally
mkdocs serve

# Build for deployment
mkdocs build
```

### Using Python Virtual Environment

```bash
# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Serve locally
mkdocs serve
```

Visit http://127.0.0.1:8000 to view the documentation.

## 📁 Project Structure

```
unbl-documentation/
├── mkdocs.yml                    # MkDocs configuration
├── requirements.txt              # Python dependencies
├── environment-mkdocs.yaml       # Conda/mamba environment
├── docs/
│   ├── index.md                 # Homepage
│   ├── assets/
│   │   └── css/
│   │       └── unbl-custom.css  # Custom styling
│   ├── unbl-public-platform/    # UNBL Tool docs
│   │   ├── index.md
│   │   ├── 1_register.md
│   │   ├── 2_manage.md
│   │   └── ...
│   └── elsa/                    # ELSA Tool docs
│       ├── index.md
│       ├── 01_overview.md
│       ├── 02_tool_purpose.md
│       └── ...
└── site/                        # Built documentation (auto-generated)
```

## 🌍 Multi-language Support

Documentation is available in 5 languages:
- 🇬🇧 **English** (default)
- 🇪🇸 **Spanish** (Español)
- 🇫🇷 **French** (Français)
- 🇵🇹 **Portuguese** (Português)
- 🇷🇺 **Russian** (Русский)

Language switching is available in the site header.

## 📝 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 5 minutes
- **[CUSTOM_DOMAIN_SETUP](CUSTOM_DOMAIN_SETUP.md)** - Guidance on setting up a custom domain instead of using the default GitHub Pages URL
- **[TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md)** - Guide for translators working across UNBL repos

## 🎨 Features

- ✅ Modern, mobile-responsive Material theme
- ✅ Fast client-side search
- ✅ Dark/light mode toggle
- ✅ Code syntax highlighting with copy buttons
- ✅ Image lightbox for full-size viewing
- ✅ Tabbed navigation
- ✅ GitHub integration with edit links
- ✅ Multi-language support

## 🛠️ Common Tasks

### Preview Changes Locally

```bash
mkdocs serve
# Opens at http://127.0.0.1:8000
```

### Build Documentation

```bash
mkdocs build
# Output in site/ directory
```

### Add New Page

1. Create new `.md` file in `docs/` directory
2. Add to navigation in `mkdocs.yml`
3. Test with `mkdocs serve`

!!! tip Important!
    Don't forget to make translated versions of  your `.md` too.

### Update Styling

Edit `docs/assets/css/unbl-custom.css` for custom styles.

## 🔧 Environment Setup

### Conda/Mamba Environment

The environment has already been created. To recreate:

```bash
mamba env create -f environment-mkdocs.yaml
```

### System Requirements

- Python 3.11+
- 100 MB disk space for environment
- 50 MB for built site

## 📖 Documentation Content

### UNBL Documentation
- Overview and introduction
- Registration and access

### ELSA Tool Documentation
- Creating and editing analyses
- Running optimizations
- Viewing and downloading results
- Support and annexes

## 🤝 Contributing

1. Create a feature branch
2. Make your changes to `.md` files
3. Test locally with `mkdocs serve`
4. Submit a pull request

!!! tip Important!
    Don't forget to make translated versions of  your `.md` too.

## 📜 License

Documentation content © 2025 UNDP & UNEP-WCMC

## 🔗 Links

- **Live Documentation:** https://undp-unbl.github.io/unbl-documentation/
- **UN Biodiversity Lab:** https://www.unbiodiversitylab.org
- **GitHub Repository:** https://github.com/UNDP-UNBL/unbl-documentation

## 📚 Additional Resources

### For Developers
- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Markdown Guide](https://www.markdownguide.org/)

### For Translators
- [Translation Contributor Guide](TRANSLATION_GUIDE.md) - Step-by-step guide for translating across all UNBL repos
- [mkdocs-static-i18n Plugin](https://github.com/ultrabug/mkdocs-static-i18n)

### For Content Authors
- [Markdown Syntax](https://www.markdownguide.org/basic-syntax/)
- [Material Theme Reference](https://squidfunk.github.io/mkdocs-material/reference/)
- [Admonitions Guide](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

---
