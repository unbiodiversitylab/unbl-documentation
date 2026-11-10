# ELSA planning exercise: development notes

The exercise is the page *Try It First: A Hands-on Planning Exercise* in the ELSA
guide. It has two tabs:

- **Lowest cost**: meet a target for each of three features at the lowest
  score (cost + boundary penalty + shortfall penalty). This is the minimum set
  problem that Marxan solves, as in the original exercise by Trevor Wiens.
- **Most value in the area available (ELSA-style)**: give planning units the
  actions Protect, Restore or Manage within an area-based target per action, with
  action zones, protected-area lock-in, feature weights and a boundary penalty.
  This is a small version of the problem the ELSA tool solves
  (`add_max_utility_objective` in unbl-elsa's `define_prioritization_problem.R`).

See [PLAN.md](PLAN.md) for the design and [PERMISSIONS.md](PERMISSIONS.md) for
what must happen before it is published.

## Where things are

| File | What it is |
| --- | --- |
| `docs/elsa/planning_exercise.md` (+ `.es` `.fr` `.pt` `.ru`) | The page: all text, instructions and credit. Translate like any page. |
| `docs/elsa/exercise/strings.json` (+ `.es` `.fr` `.pt` `.ru`) | Short interface labels (buttons, table headings). Translate only the right-hand side; keep `{words}` in curly brackets. |
| `docs/elsa/exercise/loader.js` | Listed in `mkdocs.yml` `extra_javascript`. Does nothing unless a page contains the exercise. |
| `docs/elsa/exercise/exercise.js`, `exercise.css` | The exercise itself. Plain JavaScript, no libraries, nothing saved or sent. |
| `docs/elsa/exercise/grid.json` | Invented grid data and the stored best answers. Generated: don't edit by hand. |
| `make_grid.py` | Generates the grid from a fixed seed (Python standard library). |
| `solve.R` | Adds the best answers, calculated with prioritizr and HiGHS. |
| `verify_solutions.py` | Independent check of those answers with scipy. |

The page is in `draft_docs`, so `mkdocs serve` shows it at
<http://127.0.0.1:8000/unbl-documentation/elsa/planning_exercise/> but the
published site does not include it.

## Changing the data

```bash
python elsa-planning-exercise/make_grid.py      # writes docs/elsa/exercise/grid.json
Rscript elsa-planning-exercise/solve.R          # adds best answers (about 1 minute)
python elsa-planning-exercise/verify_solutions.py   # needs scipy; all rows must say "ok"
python scripts/check_docs.py                    # recomputes stored scores with the on-screen rules
```

`solve.R` needs the R packages prioritizr (8 or later), highs, terra and
jsonlite. If you change the scoring in `exercise.js`, change `solve.R`,
`verify_solutions.py` and `check_exercise()` in `scripts/check_docs.py` to match.

The shortfall penalty (100 per unit) must stay high enough that meeting every
target is always the best score. `verify_solutions.py` checks this: it treats
targets as soft, as the page does, and must still find prioritizr's answers.

## Manual checks before a release

- Every language: both tabs load, labels are translated, numbers use the local format.
- Phone width (360 px): no sideways scrolling.
- Dark mode.
- Keyboard only: Tab into the grid, arrow keys move, Space selects; all buttons reachable.
- Screen reader spot check: each planning unit reads its position, values and state.
- Inside the WordPress page that embeds the docs.
