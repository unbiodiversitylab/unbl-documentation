# Makefile for UNBL Sphinx documentation

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD  ?= sphinx-build
SOURCEDIR    = .
BUILDDIR     = _build
PORT         ?= 8000

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile clean livehtml install update-deps lint format check serve

# Catch-all target: route all unknown targets to Sphinx-using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

# Development targets
install:
	@echo "🚀 Setting up UNBL documentation environment..."
	@if command -v mamba >/dev/null 2>&1; then \
		echo "Using mamba for faster installation..."; \
		mamba env create -f environment.yaml; \
	elif command -v conda >/dev/null 2>&1; then \
		echo "Using conda..."; \
		conda env create -f environment.yaml; \
	else \
		echo "❌ Error: Neither conda nor mamba found."; \
		echo "Please install Miniconda or Mambaforge first."; \
		exit 1; \
	fi
	@echo "✅ Environment created! Activate with: conda activate unbl-docs"

update-deps:
	@echo "📦 Updating conda environment..."
	@if command -v mamba >/dev/null 2>&1; then \
		mamba env update -f environment.yaml --prune; \
	else \
		conda env update -f environment.yaml --prune; \
	fi
	@echo "✅ Dependencies updated!"

clean:
	@echo "🧹 Cleaning build directory..."
	rm -rf $(BUILDDIR)/*
	@echo "✅ Build directory cleaned!"

livehtml:
	@echo "🔥 Starting live HTML build server..."
	@echo "📖 Documentation will be available at http://localhost:$(PORT)"
	@echo "Press Ctrl+C to stop the server"
	sphinx-autobuild $(SOURCEDIR) $(BUILDDIR)/html \
		--host 0.0.0.0 --port $(PORT) \
		--open-browser \
		--delay 1 \
		--ignore "*.tmp" \
		--ignore "*.temp" \
		--ignore "*~"

serve: html
	@echo "🌐 Starting simple HTTP server..."
	@echo "📖 Documentation available at http://localhost:$(PORT)"
	@cd $(BUILDDIR)/html && python -m http.server $(PORT)

lint:
	@echo "🔍 Running code quality checks..."
	@if command -v pre-commit >/dev/null 2>&1; then \
		pre-commit run --all-files; \
	else \
		echo "⚠️  pre-commit not found. Install with: pip install pre-commit"; \
	fi

format:
	@echo "🎨 Formatting code..."
	@if command -v black >/dev/null 2>&1; then \
		black .; \
		echo "✅ Python files formatted with black"; \
	else \
		echo "⚠️  black not found"; \
	fi
	@if command -v isort >/dev/null 2>&1; then \
		isort .; \
		echo "✅ Imports sorted with isort"; \
	else \
		echo "⚠️  isort not found"; \
	fi

check: lint linkcheck
	@echo "✅ All checks completed!"

# Translation targets
gettext:
	@echo "🌍 Extracting translatable strings..."
	@$(SPHINXBUILD) -b gettext $(SOURCEDIR) $(BUILDDIR)/gettext
	@echo "✅ Translation template created in $(BUILDDIR)/gettext"

extract-messages: gettext
	@echo "🌍 Updating translation files..."
	sphinx-intl update -p $(BUILDDIR)/gettext -l en -l es -l fr -l pt -l ru
	@echo "✅ Translation files updated in locale/"

build-translations:
	@echo "🌍 Building translation files..."
	sphinx-intl build
	@echo "✅ Translation files built"

# Build translations for all languages
html-en: build-translations
	@echo "🇺🇸 Building English documentation..."
	@$(SPHINXBUILD) -b html -D language=en $(SOURCEDIR) $(BUILDDIR)/html/en

html-es: build-translations
	@echo "🇪🇸 Building Spanish documentation..."
	@$(SPHINXBUILD) -b html -D language=es $(SOURCEDIR) $(BUILDDIR)/html/es

html-fr: build-translations
	@echo "🇫🇷 Building French documentation..."
	@$(SPHINXBUILD) -b html -D language=fr $(SOURCEDIR) $(BUILDDIR)/html/fr

html-pt: build-translations
	@echo "🇵🇹 Building Portuguese documentation..."
	@$(SPHINXBUILD) -b html -D language=pt $(SOURCEDIR) $(BUILDDIR)/html/pt

html-ru: build-translations
	@echo "🇷🇺 Building Russian documentation..."
	@$(SPHINXBUILD) -b html -D language=ru $(SOURCEDIR) $(BUILDDIR)/html/ru

html-all: html-en html-es html-fr html-pt html-ru
	@echo "🌍 All language versions built!"

# GitHub Pages deployment
github: html
	@echo "🚀 Preparing GitHub Pages deployment..."
	@if [ ! -d "$(BUILDDIR)/html/.git" ]; then \
		cd $(BUILDDIR)/html && \
		git init && \
		git remote add origin $$(git -C ../.. remote get-url origin) && \
		git checkout -b gh-pages; \
	fi
	@cd $(BUILDDIR)/html && \
		touch .nojekyll && \
		git add . && \
		git commit -m "Update documentation $$(date)" && \
		git push -f origin gh-pages
	@echo "✅ Documentation deployed to GitHub Pages!"

# Development workflow helpers
dev-setup: install
	@echo "🔧 Setting up development environment..."
	@conda run -n unbl-docs pre-commit install
	@echo "✅ Development environment ready!"

quick-build: clean html
	@echo "⚡ Quick build completed!"

full-check: clean lint linkcheck html
	@echo "✅ Full quality check completed!"

# Show environment info
info:
	@echo "📋 Environment Information:"
	@echo "Python: $$(python --version 2>&1 || echo 'Not found')"
	@echo "Sphinx: $$(sphinx-build --version 2>&1 || echo 'Not found')"
	@echo "Conda env: $$(conda info --envs | grep '*' || echo 'No active environment')"
	@echo "Build dir: $(BUILDDIR)"
	@echo "Source dir: $(SOURCEDIR)"

# Help with common tasks
usage:
	@echo "🚀 UNBL Documentation - Common Commands:"
	@echo ""
	@echo "Setup:"
	@echo "  make install       Install conda environment"
	@echo "  make dev-setup     Install + setup pre-commit hooks"
	@echo "  make update-deps   Update conda environment"
	@echo ""
	@echo "Building:"
	@echo "  make html          Build HTML documentation"
	@echo "  make livehtml      Start live development server"
	@echo "  make clean         Clean build directory"
	@echo ""
	@echo "Quality:"
	@echo "  make lint          Run code quality checks"
	@echo "  make linkcheck     Check for broken links"
	@echo "  make format        Format code with black/isort"
	@echo ""
	@echo "Translation:"
	@echo "  make gettext       Extract translatable strings"
	@echo "  make html-all      Build all language versions"
	@echo ""
	@echo "Deployment:"
	@echo "  make github        Deploy to GitHub Pages"
	@echo ""
	@echo "Help:"
	@echo "  make help          Show Sphinx help"
	@echo "  make info          Show environment info"