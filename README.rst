UNBL Documentation
==================

.. image:: https://readthedocs.org/projects/unbl-docs/badge/?version=latest
    :target: https://unbl-docs.readthedocs.io/en/latest/?badge=latest
    :alt: Documentation Status

.. image:: https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white
    :target: https://github.com/pre-commit/pre-commit
    :alt: pre-commit

.. image:: https://img.shields.io/badge/code%20style-black-000000.svg
    :target: https://github.com/psf/black
    :alt: Code style: black

This repository contains the documentation for the **UN Biodiversity Lab (UNBL)**, built with Sphinx and available in multiple languages.

📖 **Read the Documentation:** `docs.unbiodiversitylab.org <https://docs.unbiodiversitylab.org>`_

🌐 **Visit UNBL Platform:** `unbiodiversitylab.org <https://unbiodiversitylab.org>`_

Quick Start for Contributors
-----------------------------

.. code-block:: bash

   # 1. Clone and setup
   git clone https://github.com/your-org/unbl-docs.git
   cd unbl-docs
   
   # 2. Create environment (requires conda/mamba)
   mamba env create -f environment.yaml
   conda activate unbl-docs
   
   # 3. Start live development
   make livehtml

The documentation will be available at ``http://localhost:8000`` with live reloading.

About UNBL
----------

The UN Biodiversity Lab democratizes access to spatial data and analytic tools for conservation and sustainable development. With 400+ global datasets, the platform enables policymakers and stakeholders to use spatial data for evidence-based decision-making.

**Key Features:**

- 🌍 Global environmental datasets
- 📊 Dynamic country indicators  
- 🔧 No GIS experience required
- 🌐 Multi-language support (EN, ES, FR, PT, RU)
- 🔒 Secure institutional workspaces

Contributing
------------

We welcome contributions! Please see our `contributing guidelines <https://docs.unbiodiversitylab.org/contributing.html>`_ for details.

**Quick contribution workflow:**

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Test locally with ``make livehtml``
5. Submit a pull request

For major changes or new content, please open an issue first to discuss.

Translation
-----------

This documentation is available in multiple languages. To contribute translations:

.. code-block:: bash

   # Extract translatable content
   make gettext
   
   # Update translation files
   sphinx-intl update -p _build/gettext -l <language_code>
   
   # Build translated version
   make html-<language_code>

**Supported languages:** ``en`` (English), ``es`` (Spanish), ``fr`` (French), ``pt`` (Portuguese), ``ru`` (Russian)

Development Setup
-----------------

**Requirements:**

- Python 3.11+
- Conda or Mamba
- Git

**Full development setup:**

.. code-block:: bash

   # Install with development tools
   make dev-setup
   
   # Run quality checks
   make lint
   
   # Build all formats
   make html latexpdf epub

**Available make targets:**

- ``make html`` - Build HTML documentation
- ``make livehtml`` - Live development server
- ``make linkcheck`` - Check for broken links
- ``make clean`` - Clean build directory
- ``make lint`` - Run code quality checks

Support
-------

- 📧 **Email:** support@unbiodiversitylab.org
- 🐛 **Issues:** `GitHub Issues <https://github.com/your-org/unbl-docs/issues>`_
- 📖 **Documentation:** `docs.unbiodiversitylab.org <https://docs.unbiodiversitylab.org>`_

License
-------

Documentation content is licensed under `CC-BY-NC-SA-4.0 <https://creativecommons.org/licenses/by-nc-sa/4.0/>`_.

Partnership
-----------

UNBL is a collaborative initiative between:

- United Nations Development Programme (UNDP)
- UN Environment Programme (UNEP) 
- UN Environment Programme World Conservation Monitoring Centre (UNEP-WCMC)
- Convention on Biological Diversity (CBD) Secretariat