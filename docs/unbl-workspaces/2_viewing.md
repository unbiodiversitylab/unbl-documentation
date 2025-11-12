# Viewing Your UNBL Workspace

## How do I access my workspace(s)?

If you are a registered user who has been granted access to one or multiple UNBL workspaces, please follow these steps:

1.	Login to your account and launch the UNBL data app.

2.	Click the ‘WORKSPACES’ button in the top-left corner. This will display the workspaces you belong to.

3.	You can view the assets (places and datasets) for each workspace independently, or at the same time if you are a member of more than one workspace. Press the toggle button for workspaces you want to include in your map view. 

	!!!Note
		You can toggle/untoggle all workspaces at once using the top-most ‘Map View’ toggle button.

4.	Untoggle workspaces that you don’t want to view. You can also untoggle the *UNBL* workspace at the top of the list, which will allow you to only see assets exclusive to your UNBL secure workspace(s) and filter out all assets on the UNBL public platform. Please note that untoggling the *UNBL* workspace will remove access to all public global layers and dashboard metrics for all areas, including areas in your secure workspace. 

![](images/en/image2.png)

## How do I view places within my UNBL workspace?

Once your preferred workspace(s) is/are selected, you can use the ‘PLACES’ tab to search for and select a place, as well as to view its associated dynamic metrics. Places are also known as *areas of interest* or *locations*. Only places added within your toggled workspaces will be available. If you have your workspace as well as the UNBL workspace selected, then all places on the public platform will be available alongside custom places that you have added to your own workspace.

!!!Note
	You need to first add places to your secure workspace to be able to view them on UNBL. See [‘How do I add places?’](5_add_places.md#how-do-i-add-places) 
	
To search for a place, you can either:

1.	Click on the ‘PLACES’ button, type the name of the country or jurisdiction you want to view into the search box, and select the desired result in the search result list. 

	**OR**
	
2.	Click on the ‘PLACES’ button, click to expand the filters box, and select your filter of interest. You then can select the desired place from the search result list. 

!!!Note
	Places are filtered by *Country* type by default upon opening the UNBL map view.  If your place is of a different category, such as a *Protected Area* or *Cross-Boundary Area* and not *Country* type, then you need to click on the ‘CLEAR’ button to clear all filters, or expand the ‘FILTERS’ dropdown menu and uncheck the country box and select your filter of interest to find your place.
	
![](images/en/image3.png)

## How do I download a dataset for my area of interest?

You can clip selected datasets from the UNBL public platform to an added place in your own workspace and download them for use in a desktop GIS software. This function allows users to access the underlying data available on our platform while avoiding the bandwidth and storage required to download and work with a global data layer. 

To clip a dataset to your area of interest and download:

1.	Click on the ‘PLACES’ button and select your place of interest.

2.	Click on the ![](images/icons/ellipsis.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} icon to the right of the place’s name and click on ‘Clip and Export Layers’. 

	![](images/en/image4.png)
	
3.	Type the name or select the dataset you want to download. If the data contains layers covering multiple years/categories, select the year/category you want to download. You have the option of downloading clipped layers in a GeoTIFF raster format or a PNG image file format.

4.	Click 'DOWNLOAD’. 

	a.	The selected layer will be clipped to the bounding box of the area of interest. 
	
	b.	There is a small buffer added to the bounding box, which will slightly enlarge the area of the clipped raster. This helps to ensure that any incongruities between the area of interest boundary used in UNBL and the official boundary file you may wish to use do not result in loss of data. This assumes that differences are potentially small. If this is not the case, please contact us at <support@unbiodiversitylab.org> for assistance.
	
	c.	*Note*: in case of downloading GeoTIFFs, this is raw data and will not include styling information. 
	
	![](images/en/image5.png)
	
5.	The downloaded GeoTIFF data can be opened in any GIS software for further analysis.

## How do I view datasets within my workspace?

Your UNBL workspace offers you the ability to visualize any data added to your UNBL workspaces with any of the global data on UNBL within the UNBL workspace. 

!!!Note
	You need to first create layers in your workspace to be able to view them on UNBL. See [‘Adding Your Own Geospatial Data to Your Workspace’](6_add_data.md#adding-your-own-geospatial-data-to-your-workspace). 

To search for available datasets: 

1.	Click on the ‘DATASETS’ button. The data layers from the workspaces you have selected will populate this tab automatically.

2.	To search for a dataset, you can either:

	a.	Type the name of the dataset you want to view into the search box and select the desired result in the search result list (*your search must include at least 3 characters*).

	**OR**

	b.	Click to expand the 'FILTERS’ box and select your filter of interest. You then can select the desired result in the search result list. 
	
	**OR**
	
	c.	Click to expand the ‘Dataset tags’ dropdown menu and select your tag of interest. You then can select the desired result in the search result list.
	
3.	Click the toggle button to the right of the dataset name to load this dataset to the map view. 

4.	Click the toggle button again or click the ![](images/icons/cross.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} icon in the layer legend to remove this dataset.

!!!Note
	If you have the *UNBL* workspace and your own workspace activated, your search will have to be specific to find datasets that you uploaded to your own workspace that are not part of the public platform. The easiest way to do this is to create a recognizable tag for your added layer – see step 2d in [‘What parameters and metadata do I fill in when creating a layer?’](6_add_data.md#what-parameters-and-metadata-do-i-fill-in-when-creating-a-layer)
	
![](images/en/image6.png)





