# UN Biodiversity Lab — User Documentation

[![Deploy](https://github.com/unbiodiversitylab/unbl-documentation/actions/workflows/deploy.yml/badge.svg)](https://github.com/unbiodiversitylab/unbl-documentation/actions/workflows/deploy.yml)

User guides for the [UN Biodiversity Lab](https://www.unbiodiversitylab.org) (UNBL) in
English, Spanish, French, Portuguese and Russian:

- **UNBL Public Platform**: finding places, datasets and metrics, making maps
- **UNBL Secure Workspaces**: managing users, places, data and custom metrics
- **ELSA Integrated Spatial Planning Tool**: creating and analysing spatial plans

**Read the docs:** https://unbiodiversitylab.github.io/unbl-documentation/

**Need help with the platform itself?** Email support@unbiodiversitylab.org.

## Contributing

Spotted an error? [Open an issue](https://github.com/unbiodiversitylab/unbl-documentation/issues/new/choose),
or use the pencil icon on any page to suggest an edit.

To write, translate or maintain the docs, see **[CONTRIBUTING.md](CONTRIBUTING.md)**. For
translators working across all three UNBL repositories, see
**[TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md)**.

Quick preview on your computer:

```bash
pip install -r requirements.txt   # once
mkdocs serve                      # then open http://127.0.0.1:8000
```

## How it works

| Piece | Where |
|---|---|
| Pages (Markdown, one file per language: `page.md`, `page.fr.md`, …) | [`docs/`](docs/) |
| Site configuration, navigation and its translations | [`mkdocs.yml`](mkdocs.yml) |
| Terminology in all five languages | [`i18n/glossary.yml`](i18n/glossary.yml) |
| Consistency checks (translations, links, images) | [`scripts/check_docs.py`](scripts/check_docs.py) |
| Claude Code project setup (instructions, skills, hook) | [`CLAUDE.md`](CLAUDE.md), [`.claude/`](.claude/) |
| PR checks and deployment to GitHub Pages | [`.github/workflows/`](.github/workflows/) |

Every pull request is built and checked automatically. Merging to `main` publishes the
site within a few minutes. Built with [MkDocs](https://www.mkdocs.org/),
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) and
[mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n).

## License

Documentation content © 2026 UNDP & UNEP-WCMC. See [LICENSE](LICENSE).
