# MkDocs Migration TODO List

## ✅ Completed

- [x] Created MkDocs configuration (`mkdocs.yml`)
- [x] Converted all 72 RST files to Markdown
- [x] Set up multi-language support structure (5 languages)
- [x] Migrated CSS files to `docs/assets/css/`
- [x] Preserved image directories in place (81 images)
- [x] Created conda/mamba environment (`environment-mkdocs.yaml`)
- [x] Created Python requirements file (`requirements.txt`)
- [x] Fixed navigation structure in `mkdocs.yml`
- [x] Created missing index files (elsa/index.md)
- [x] Verified all 5 language builds work
- [x] Created quick start guide

## 🔄 In Progress / Recommended Next Steps

### High Priority

- [ ] **Review converted Markdown files** - Check that complex RST directives converted correctly
- [ ] **Test all internal links** - Verify cross-references between pages work
- [ ] **Review images** - Ensure all images display correctly and paths are correct

### Medium Priority

- [ ] **Complete translations** - Migrate content from .po files to .lang.md files
  - Option A: Run `python3 setup_i18n.py` to create placeholders
  - Option B: Use translation management platform (Crowdin, Transifex)
  - Option C: Manual extraction from .po files
- [ ] **Add missing index files** - Create comprehensive index.md files for subsections
- [ ] **Update custom CSS** - Review and update `docs/assets/css/elsa-custom.css` for Material theme
- [ ] **Add logo and favicon** - Update paths in mkdocs.yml if you have logo files

### Low Priority

- [ ] **Add social cards** - Configure Material theme's social cards feature
- [ ] **Set up versioning** - Use mike for documentation versioning if needed
- [ ] **Add analytics** - Configure Google Analytics or privacy-friendly alternative
- [ ] **Improve SEO** - Add meta descriptions to pages
- [ ] **Add search configuration** - Fine-tune search behavior if needed
- [ ] **Create custom 404 page** - Add docs/404.md for better error handling

## 📋 Testing Checklist

Before deploying to production:

- [ ] Build succeeds without errors: `mkdocs build --strict`
- [ ] Local preview works: `mkdocs serve`
- [ ] Test all major pages load correctly
- [ ] Test navigation between sections
- [ ] Test language switcher
- [ ] Test search functionality
- [ ] Test on mobile/tablet devices
- [ ] Test images and diagrams display
- [ ] Test code blocks and syntax highlighting
- [ ] Test admonitions (notes, warnings, etc.)

## 🐛 Known Issues

## 📝 Translation Status

### English
- ✅ 100% complete (13 ELSA tool documentation files)

### Spanish (es)
- ⏳ Structure ready - needs real person review

### French (fr)
- ⏳ Structure ready - needs real person review

### Portuguese (pt)
- ⏳ Structure ready - needs real person review

### Russian (ru)
- ⏳ Structure ready - needs real person review

## 🎯 Milestone Goals

### Milestone 1: Translations
- Migrate translations from .po to Markdown
- Test all language versions
- Verify content accuracy

### Milestone 2: Production Ready
- All tests passing
- All languages complete

## 📞 Resources

- MkDocs Docs: https://www.mkdocs.org/
- Material Theme: https://squidfunk.github.io/mkdocs-material/
- i18n Plugin: https://github.com/ultrabug/mkdocs-static-i18n
- Quick Start: See `QUICKSTART.md`
