# Annex 3: Data Layer Change Log

This page records changes to the **default data layers** used by the ELSA Integrated Spatial Planning Tool. Default data layers are the planning features, lock-in restrictions, and zoning constraints that ELSA provides for a new analysis. The current set is listed in [Annex 2 - Data layers](13_annex2.md).

This log covers only these global default layers. National or other country-specific layers that are added to a country's ELSA configuration are not listed here.

Data layers change over time: source datasets are updated by the institutions that produce them, better datasets become available, and the way data are prepared for ELSA evolves. This change log allows users to see which layers changed, when they changed, and why, so that results produced at different times can be compared, interpreted, and cited correctly.

!!! note
    Changes listed here are **not applied automatically** to existing country configurations. Each configuration's input data (its data stack) has to be updated before new analyses use the changed layers. Analyses that have already been run keep the data layers they were run with, and their results are not recalculated. To find out whether a configuration uses the updated layers, see [Support and Contact](11_support.md).

## How to read this change log

Each entry describes one change to one default data layer, using one of the following change types.

| Change type | Meaning |
|-------------|---------|
| Added | A new default layer was introduced. |
| Updated | The same dataset was replaced by a newer version or edition from the same source. |
| Replaced | The layer was replaced by a different dataset, from the same or a different source. |
| Reprocessed | The underlying dataset did not change, but the way it is prepared for ELSA did (for example, resampling, rescaling, or masking). |
| Renamed | Only the layer name shown in the tool changed; the underlying data are the same. |
| Removed | The layer is no longer used by default. |

## Planned changes

Changes that are expected but have not yet been applied. Dates are indicative and may change.

No changes are planned at the moment.

<!--
PLANNED CHANGES TEMPLATE: replace the sentence above with this table when a change is planned.

| Expected date | Layer | Change type | Description | Status |
|---------------|-------|-------------|-------------|--------|
| Month YYYY | Layer name | Updated | Short description. | Under review |
-->

## Change history {#change-history}

Changes are listed with the most recent first.

<!--
ENTRY TEMPLATE — copy the block below to add a new dated entry, and translate it
into the es, fr, pt, and ru versions of this page.

### YYYY-MM-DD

| Layer | Change type | Previous source | New source | Reason for the change |
|-------|-------------|-----------------|------------|-----------------------|
| Layer name | Updated | Author et al., YEAR | Author et al., YEAR | Short explanation. |

**Effect on analyses:** How this change affects ELSA results (for example, which
KMGBF targets or action zones are affected).
-->

No changes have been recorded since this log started in November 2026. Earlier changes are not recorded.

## Questions about a specific layer

For questions about a particular data layer, its source, or how a change affects an existing analysis, see [Support and Contact](11_support.md).
