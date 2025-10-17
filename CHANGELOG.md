# Changelog

All notable changes to the ELSA (Essential Life Support Area) Tool will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- MkDocs-based documentation system with Material theme
- Multi-language support infrastructure (EN, ES, FR, PT, RU)
- Complete Spanish (ES) documentation translation
- Complete French (FR) documentation translation
- Complete Portuguese (PT) documentation translation
- Complete Russian (RU) documentation translation
- Modern, mobile-responsive documentation interface
- Dark/light mode toggle for improved readability
- Image lightbox functionality for full-size viewing
- Code block copy buttons
- Client-side search with multi-language support
- GitHub integration with edit links on each page
- GitHub Actions workflow for automatic deployment to GitHub Pages
- Comprehensive migration and setup documentation

### Changed
- **BREAKING**: Migrated documentation from Sphinx/reStructuredText to MkDocs/Markdown
- **BREAKING**: Changed hosting from ReadTheDocs to GitHub Pages
- **BREAKING**: Streamlined documentation to focus on core ELSA tool usage
- Converted all documentation pages from .rst to .md format
- Reorganized static assets into `docs/assets/` structure
- Updated build system from Sphinx to MkDocs (build time: ~3-4 seconds)
- Updated site URL to GitHub Pages (will support custom domain docs.unbiodiversitylab.org)
- Archived Sphinx translation files to `archive/sphinx-locales/` for reference
- Moved conversion scripts to `scripts/` directory for organization

### Removed
- **BREAKING**: Training materials section (27 training documents)
  - R and RStudio installation guides
  - prioritizR training materials
  - Web tool setup tutorials
  - Gurobi solver installation guides
- **BREAKING**: Regional guidance section (32 country-specific guides)
  - Ecuador implementation guidance
  - Peru implementation guidance
- Sphinx configuration files (conf.py, Makefile, make.bat)
- All .rst documentation source files
- Sphinx build artifacts (_build directory)
- Old environment.yaml for Sphinx
- ReadTheDocs configuration (.readthedocs.yaml)
- Requirement for paid ReadTheDocs hosting plan
- Requirement for ReadTheDocs account management
- Temporary migration documentation files (after migration completion):
  - CLEANUP_SUMMARY.md
  - DEPLOYMENT_SUMMARY.md
  - GITHUB_PAGES_SETUP.md
  - MKDOCS_MIGRATION.md
  - READY_TO_DEPLOY.md
  - RST_TO_MARKDOWN_GUIDE.md
- Migration utility scripts (after migration completion):
  - scripts/convert_rst_to_md.py
  - scripts/fix_rst_remnants.py
  - scripts/setup_i18n.py

### Fixed
- Improved navigation structure with tabbed layout
- Enhanced mobile responsiveness
- Better cross-reference linking between documentation pages
- Faster documentation build times

### Documentation
- Added MKDOCS_MIGRATION.md - Complete migration guide
- Added QUICKSTART.md - Quick start guide for building docs
- Added README-MKDOCS.md - MkDocs-specific README
- Added GITHUB_PAGES_SETUP.md - GitHub Pages deployment guide
- Added CUSTOM_DOMAIN_SETUP.md - Custom domain configuration guide
- Added DEPLOYMENT_SUMMARY.md - Deployment overview
- Added FILE_PURPOSES.md - File purposes and requirements explanation
- Added READY_TO_DEPLOY.md - Pre-deployment checklist
- Added TODO.md - Task tracking and roadmap
- Added CLEANUP_SUMMARY.md - Cleanup documentation
- Added TRANSLATION_MIGRATION.md - Translation guide

### Infrastructure
- Hosting: GitHub Pages (free tier with unlimited bandwidth)
- Deployment: Automated via GitHub Actions
- Build time: ~3-4 seconds locally, ~2-3 minutes on GitHub Actions
- Supports custom domain (docs.unbiodiversitylab.org) when DNS configured

### Cost Savings
- Eliminated need for paid ReadTheDocs plan ($50-150/month)
- No hosting costs (GitHub Pages is free)
- No account management overhead
- Annual savings: $600-1,800

## [1.2.0] - 2025-08-20

### Added
- New national boundary overlay functionality with transparent fill
- Enhanced visualization options for ESA Croplands mapping
- Support for Kazakhstan (S1) regional analysis
- Improved figure referencing system in documentation

### Changed
- Updated ggplot visualization to use `scale_fill_gradient()` for binary raster data
- Enhanced theme and styling for map outputs
- Improved legend formatting and positioning

### Fixed
- Resolved continuous vs discrete scale issues in raster visualization
- Fixed figure numbering and cross-references in documentation
- Corrected glossary term linking functionality

## Citation

When using the ELSA Tool in formal reports or publications, please cite:

```
UNDP & UNEP-WCMC 2025. Integrated Spatial Planning for the KMGBF. Map created using spatial data and the UN Biodiversity Lab Essential Life Support Area Tool (https://map.unbiodiversitylab.org/earth), on [insert date with Day Month Year].
```

## Contributing

For information about contributing to the ELSA Tool development, please refer to the project documentation.

## Links

- [UN Biodiversity Lab](https://map.unbiodiversitylab.org/earth)
- [UNDP Integrated Spatial Planning Workbook](https://www.undp.org/publications/integrated-spatial-planning-workbook)
- [Documentation](link-to-docs)

---

**Legend:**
- `Added` for new features
- `Changed` for changes in existing functionality  
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` for vulnerability fixes