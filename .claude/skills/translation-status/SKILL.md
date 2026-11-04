---
name: translation-status
description: Report which UNBL documentation translations are missing, out of date with English, or machine-translated and awaiting review, per language. Use when a translator asks what needs work, or before a release.
argument-hint: "[es|fr|pt|ru]"
allowed-tools: Bash(python scripts/check_docs.py *), Bash(python3 scripts/check_docs.py *), Bash(git log *), Bash(git diff *), Read
---

# Translation status

1. Run `python scripts/check_docs.py --drift` (add `--lang $ARGUMENTS` if a language was given). Use `python3` if `python` isn't found.
2. Turn the output into a short to-do list for a translator, grouped by language, most urgent first:
   - **MISSING**: the page doesn't exist in that language.
   - **STALE**: exact. English changed since the recorded `source_rev`. For each one, summarise *what* changed in English (run the `git diff` the report suggests and read it) in one line, e.g. "new step 4 about GeoTIFF size limit".
   - **MAYBE-STALE**: a guess from commit dates, because no `source_rev` is recorded yet. Say that some of these may be false alarms (typo fixes, repo-wide edits). For the few most recent, spot-check by comparing headings or section counts between English and the translation.
   - **REVIEW**: machine translations no human has reviewed yet.
3. End with the next action: e.g. "Run `/translate docs/elsa/04_creating_analysis.md pt` to update the Portuguese page", or, for a reviewer, "after reviewing, change `translation_status: machine` to `reviewed`".

Keep it readable for a non-developer. Don't paste the raw script output if it's long.
