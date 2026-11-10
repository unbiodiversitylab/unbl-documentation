"""MkDocs hook: preview draft pages in every language with `mkdocs serve`.

Pages listed in `draft_docs` (mkdocs.yml) are left out of `mkdocs build`, so
they are never published. `mkdocs serve` is meant to show them for preview, but
with the i18n plugin it only does so for English: the translated drafts are
dropped. This hook includes all draft pages when serving, so translators can
preview their language. It changes nothing for `mkdocs build` (CI, production).
"""
from mkdocs.structure.files import InclusionLevel

_serving = False


def on_startup(command, dirty, **kwargs):
    global _serving
    _serving = command == "serve"


def on_files(files, config, **kwargs):
    if _serving:
        for f in files:
            if f.inclusion is InclusionLevel.DRAFT:
                f.inclusion = InclusionLevel.INCLUDED
    return files
