# Try It First: A Hands-on Planning Exercise

The ELSA tool asks you to set area-based targets, weights and a boundary penalty factor. A computer then works out where each action should go. On this page you can make the same kind of decision yourself, on a small grid, before you use the tool with national data. It takes about ten minutes. Nothing you do here is saved or sent anywhere.

!!! note "Credit"
    This exercise is adapted from the *Conservation Planning Exercise* created by Trevor Wiens, Apropos Information Systems Inc., and hosted by PacMARA and The University of Queensland at [marxansolutions.org](https://marxansolutions.org/getting-started/). The data on this page is invented for practice.

<!-- When the permissions in elsa-planning-exercise/PERMISSIONS.md are received, add "Used and adapted with permission." to the credit, in all five languages. -->

## Two ways to ask the planning question {#two-questions}

Spatial planning tools answer one of two questions:

| | Lowest cost | Most value in the area available |
|---|---|---|
| **The question** | What is the cheapest set of places that meets every target? | With a fixed amount of land for each action, where can we secure the most? |
| **You set** | A target for each planning feature | An area-based target for each action, and a weight for each planning feature |
| **Used by** | Marxan, and the minimum set objective in prioritizr | The ELSA tool (the maximum utility objective in prioritizr) |

The first tab below is the classic puzzle that many planners learn with. The second is a small version of the problem the ELSA tool solves for your country.

## The exercise {#exercise}

=== "Lowest cost"

    Each square is a [planning unit](12_annex1.md#planning-units). Each planning unit has a cost and an amount of three planning features: A, B and C.

    1. Each planning unit shows the amounts of features A, B and C, and its cost. To see one value at a time, choose it under **Show on the map**.
    2. Click planning units to select them, or use the arrow keys and Space. Click a selected planning unit again to remove it.
    3. Meet every target in the table, with the lowest score you can.
    4. Choose **Let the computer search** and **Show the best answer** to compare your answer with the computer's.
    5. Change the **Boundary penalty factor (BPF)** and try again. A higher BPF rewards compact groups of planning units.

    <div class="planning-exercise" data-mode="mincost" markdown>
    *This exercise needs JavaScript. If you can't see it, reload the page or try another browser.*
    </div>

    The score adds up three things. Lower is better.

    - **Cost**: the total cost of the selected planning units.
    - **Boundary penalty**: the BPF multiplied by the length of the outer edge of your selection. Each side of a planning unit is 10 long. Sides shared by two selected planning units don't count.
    - **Shortfall penalty**: 100 for each unit of a target that is not met.

    !!! tip "What this means in ELSA"
        The ELSA tool uses the same [boundary penalty factor](05_editing_analysis.md#fig-adjust-bpf) to make action zones more compact. But it does not look for the lowest cost. The second tab shows what it does instead.

=== "ELSA-style"

    Here each planning unit can get one of three actions: **Protect**, **Restore** or **Manage**. Each action has an [area-based target](12_annex1.md#area-based-target): the largest number of planning units it may cover. Your aim is to secure as much weighted value as possible for four planning features: biodiversity, carbon storage, water provision and livelihoods.

    1. Choose an action under **Action to apply**, then click planning units to give them that action. Click a planning unit again to remove its action.
    2. Under **Show on the map**, choose **Land type**. Each action is only allowed on some land types, like the [action zones](12_annex1.md#action-zones) in ELSA. Nothing is allowed in urban areas, and Protect is only allowed on intact or degraded land.
    3. The existing protected area (dashed outline) is [locked in](12_annex1.md#lock-in-features) for Protect. You can turn the lock-in off.
    4. Choose **Heatmap (weighted value)** to see where the weighted value is highest, like the [heatmaps](07_viewing_heatmaps.md) in ELSA.
    5. Open **Settings** to change the area-based targets and the [weights](12_annex1.md#weights), then let the computer search again and see how its map changes.
    6. Compare your map with the computer's search and the best answer.

    <div class="planning-exercise" data-mode="elsa" markdown>
    *This exercise needs JavaScript. If you can't see it, reload the page or try another browser.*
    </div>

    Each action secures a different share of each feature. For example, Protect secures all of a planning unit's biodiversity value but little of its livelihood value, and Manage does the opposite. The score is the weighted value secured minus the boundary penalty. Higher is better.

    !!! tip "What this means in ELSA"
        Each setting here matches a setting in the ELSA tool: area-based targets, lock-in, weights and the boundary penalty factor (see [Editing an analysis](05_editing_analysis.md)). The ELSA tool solves the same kind of problem for every planning unit in your country, with four actions and many more planning features.

## Why a computer does this {#why-a-computer}

A grid of 100 planning units can be selected in 2^100^ different ways, about a million million million million million. Nobody could check them one by one. A country in the ELSA tool has tens of thousands of planning units.

- **Computer search** uses simulated annealing, the method that Marxan uses. It makes many small random changes and keeps most of the changes that improve the score. It finds good answers quickly, but each run gives a slightly different answer, and it cannot tell how far it is from the best answer.
- **Best answer** was calculated with prioritizr, the software behind the ELSA tool, using an exact solver. On a grid this small it is the best possible answer for those settings. For a whole country, the ELSA tool stops when its answer is within 5% of the best possible answer, so that an analysis takes minutes rather than days.

Run the computer search a few times and compare its answers with the best answer.

## Next steps {#next-steps}

- Use the ELSA tool with your national data: see [Creating a new analysis](04_creating_analysis.md) and [Editing an analysis](05_editing_analysis.md).
- Learn more about systematic conservation planning in the [Integrated Spatial Planning self-paced course](https://www.learningfornature.org/en/courses/integrated-spatial-planning-2).
- Find the original *Conservation Planning Exercise* and Marxan training materials at [marxansolutions.org](https://marxansolutions.org/getting-started/).
- Read more about prioritizr at [prioritizr.net](https://prioritizr.net).
