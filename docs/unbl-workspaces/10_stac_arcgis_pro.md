# Accessing UNBL Data in ArcGIS Pro (STAC)

UN Biodiversity Lab (UNBL) publishes its raster datasets through a STAC API. If you are a member of a UNBL workspace, you can connect ArcGIS Pro to this API, search the catalogue and add UNBL rasters to your map without downloading them first.

This page explains how to set up the connection and what to expect from the layers you add.

## What do I need before I start?

- **A UNBL account that belongs to a workspace.** Anyone can search the catalogue, but only workspace members can open the data itself. To request a workspace, see [How do I request a UNBL workspace?](1_basics.md#how-do-i-request-a-unbl-workspace)
- **A credential** that tells UNBL who you are: either an API token or an API key (see the next section).
- **ArcGIS Pro 3.5.3, or 3.6 or later.** Earlier 3.x versions have a known STAC bug (Esri BUG-000164564) that stops layers loading with the message *Failed to add data: Unknown error*.

!!! note
    A credential is needed for every dataset, including datasets marked as public. If you only need a copy of a global dataset, see [How do I download unclipped global datasets?](../unbl-public-platform/16_download_global_data.md)

## How do I get a credential?

You can use either of two credentials:

| Credential | How long it lasts | Best for |
|---|---|---|
| **API key** | Does not expire | ArcGIS Pro and other desktop GIS software |
| **API token** | About one hour | Trying the connection once, or short tasks |

We recommend an API key for ArcGIS Pro: you enter it once, and it does not need replacing every hour.

### To request an API key

1. Email <support@unbiodiversitylab.org> and ask for a STAC API key for ArcGIS Pro.
2. Include the email address of your UNBL account and the name of your workspace.
3. Keep the key you receive private. Anyone who has it can open the data your workspace can see.

### To get an API token

1. Go to the UNBL STAC Browser at <https://stac.unbiodiversitylab.org>.
2. Click **Login** and sign in with your UNBL account. If you don't have an account yet, click **Login**, then **Sign up**, and confirm your account using the link in the email you receive.
3. Click **API token**, in the same row of buttons as **Login**.
4. In the panel that opens, check that your account shows workspace access. If it doesn't, the data will not open in ArcGIS Pro.
5. Copy the token. The panel also shows when it expires.

For more technical details, including access from Python and GDAL, see the [UNBL API access page](https://stac.unbiodiversitylab.org/api-access.html).

## How do I connect ArcGIS Pro to the UNBL STAC?

1. In ArcGIS Pro, on the **Insert** tab, click **Connections**, then **STAC Connection**, then **New STAC Connection**.
2. In **Connection**, enter `https://stac.api.unbiodiversitylab.org/`
3. Leave **STAC API Authentication** empty. ArcGIS Pro offers only Microsoft Azure sign-in here, which UNBL does not use.
4. Under **Custom Headers**, add one header:
    - With an **API key**: key `X-API-Key`, value: your API key.
    - With an **API token**: key `Authorization`, value: `Bearer`, a space, and then your token (for example `Bearer eyJhbGci...`).
5. Leave **Cloud Storage Connections** empty.
6. Click **OK** to save the connection.

!!! tip
    Copy and paste your credential directly into the ArcGIS Pro dialog. An API token is very long (about 5,700 characters), and some programs, such as a terminal window, silently cut long text when you paste it. A shortened token gives the same error as an expired one.

!!! warning
    Keep only **one** UNBL STAC connection in ArcGIS Pro. An old copy of the connection can stay selected and keep sending an expired credential. If you need a new token, edit the existing connection rather than creating a second one.

## How do I add UNBL layers to my map?

1. Open the **Explore STAC** pane and choose the UNBL connection from the drop-down list.
2. On the **Parameters** tab, choose the collection you want.
3. Click **Select assets** next to the collection and tick the assets (files) you want to add.
4. Run the search.
5. In the results, add the items you want to the map.

!!! note
    ArcGIS Pro fixes your choice of assets when you run the search. If you change the assets, run the search again.

## How long do the layers last?

Layers added from the UNBL STAC are **temporary**. Each layer opens through a secure link that expires about **two hours** after UNBL issues it (in practice, between about 1 hour 45 minutes and 2 hours 15 minutes after you add it). Using an API key does not change this.

| Task | Credential needed? |
|---|---|
| Searching the catalogue | No |
| Adding a search result to the map | Yes |
| Redrawing a layer you added less than two hours ago | No |
| Reopening a layer saved in an ArcGIS Pro project | Not possible: search again and add the item again |

After the link expires, the layer stops drawing. To continue working, search again and re-add the item.

!!! tip
    To keep a dataset for longer, download the GeoTIFF file while the link is still valid and add it to ArcGIS Pro as a local raster.

## What do these error messages mean?

| Error message | Likely cause | What to do |
|---|---|---|
| `401 Invalid token` or `401 Token expired` | The token was cut short, mistyped or has expired | Get a new token and paste it straight into the connection |
| `401 Invalid API key` | The API key is wrong or has been disabled | Check the `X-API-Key` value, or contact <support@unbiodiversitylab.org> |
| `HTTP error code : 404` on a path starting with `/vsiaz/` | No credential reached UNBL | Check the **Custom Headers** entry on the connection |
| `403` on an address containing `blob.core.windows.net` | The layer's secure link has expired | Search again and re-add the item |
| `unsupported data type` mentioning `StacItemHref` | An old or duplicate connection is selected | Keep one UNBL connection and select it in **Explore STAC** |
| `Failed to add data: Unknown error` | A known ArcGIS Pro bug (BUG-000164564) | Upgrade to ArcGIS Pro 3.5.3, or 3.6 or later |
| Paths still start with `/vsiaz/` after you sign in | Your account does not belong to a workspace | [Request a UNBL workspace](1_basics.md#how-do-i-request-a-unbl-workspace) or ask your workspace admin to add you |

For other problems, contact us at <support@unbiodiversitylab.org>.

## Further reading

- [UNBL API access](https://stac.unbiodiversitylab.org/api-access.html)
- [Create a STAC connection](https://doc.esri.com/en/arcgis-pro/latest/help/data/imagery/create-a-stac-connection.html) (Esri)
- [Select STAC assets](https://pro.arcgis.com/en/pro-app/3.4/help/data/imagery/selecting-stac-assets.htm) (Esri)
