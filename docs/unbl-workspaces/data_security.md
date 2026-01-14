# Info Sheet: Storage for National Data Added to Workspaces on UN Biodiversity Lab

## Overall access control for your UNBL workspace

**Basics of UNBL secure workspaces**

UNBL workspaces provide a secure work area where national or subnational data can be added and shared with a set of specified users. They offer users with any level of GIS expertise the ability to collaborate on spatial data projects using their own data and places. UNBL non-commercial users can [request a UNBL workspace to](https://unbiodiversitylab.org/en/unbl-workspaces/):

- Invite a community of users relevant to collaborate and use national and global spatial data; 
- Connect to existing national spatial data repositories, enabling all relevant data to be consolidated in one location and ensuring automatic updates from the original source; 

- Upload national/subnational datasets and areas of interest; 

- Tag national data to clearly identify the relevant policy targets or projects that it will be used to support; 

- Visualize national/subnational datasets alongside any of the global data layers available on UNBL; and 

- Calculate any UNBL metrics using the official national boundary layer or official sub-national boundary layers. 

**Access to a UNBL secure workspace**

When you request a UNBL workspace, you will be assigned as the workspace owner. You can assign roles to individuals or user groups to determine their level of access. These roles include:  

- *Owners*: Nominated by the country to take control of the workspace. The owners will be responsible for inviting and granting access to other users, as well as adding other administrators.  

- *Admins*: Can add and manage users, assign roles to users as editors and viewers, manage workspace assets via the admin tool, and view all workspace assets in the map view. 

- *Editors*: Can manage workspace assets via the admin tool and view all workspace assets in the map view. Editors should have experience using GIS software to enable them to upload and edit data layers. 

- *Viewers*: Can view all workspace assets on the map view. Viewers cannot access the admin tool. 

No users outside those you assign will be able to access your workspace. 

UNBL platform administrators at UNDP and UNEP-WCMC can create/delete secure UNBL workspaces and add/remove users to a given secure workspace. UNBL platform administrators will only do this at the express request of the owner of a workspace. 

## Data storage details for Layers added to your UNBL workspace 

**Basics of adding a ‘layer’ to a secure workspace on UNBL**

Geospatial data can be uploaded and/or linked to within a secure UNBL workspace, thereby giving all workspace members the ability to view these data on UNBL without them needing any prior GIS experience.  

UNBL workspaces support the upload of geospatial raster data in the following file format: 

- GeoTIFF (Georeferenced Tagged Image File Format)

UNBL workspaces also support the connection to external geospatial data through any of the following external tile service providers:

- WMS (Web Map Service) 

- WMTS (Web Map Tile Service) 

- XYZ Tile Service 

- Mapbox 

- Esri ArcGIS API Map Service 

- Vector Tile Services (served as pg_tileserv or Martin) 
	
Datasets within a workspace are only discoverable by members of the workspace. However, if a user with the workspace administrator role wants a particular dataset within their workspace to be discoverable by anyone outside of their workspace, they can enable this using a public layer URL option. Users with admin status can revoke this permission at any time. 

Importantly, any datasets in a UNBL workspace can also be viewed along with global datasets published on UNBL’s public platform. 

**Data storage for uploaded layers (GeoTIFF)**

GeoTIFF files uploaded into UNBL workspaces will be stored in a designated secure private Microsoft Azure storage blob container. 

- When users delete the layer, any corresponding files are automatically deleted from the storage.  

- The storage container is hosted in Azure’s **North-European** Data Centre which is in Ireland. 

- Users cannot access the storage container directly. Users can only upload and delete files through the workspace UI. 
	
**Data storage for datasets created using external geospatial data**

Data related to the datasets created by the geospatial data hosted on the following services is not hosted within UNBL. Data security of these datasets may rely on the respective external service. 

- WMS (Web Map Service) 

- WMTS (Web Map Tile Service) 

- XYZ Tile Service 

- Mapbox 

- Esri ArcGIS API Map Service 

- Vector Tile Services (served as pg_tileserv or Martin) 
	
## Data storage details for Places added to your UNBL workspace

**Basics of uploading a ‘place’ to a secure workspace on UNBL**

UNBL secure workspaces enable users to upload places in a secure environment. Adding a new place provides users with the ability to utilize all functionalities of UNBL for a subnational, national, or transboundary area of interest. Once the place has been added to a UNBL workspace, users are able to: (1) display dynamic metrics for this location; and (2) clip any raster layer from the UNBL public platform (only data with an open-access license) to this location and download it for further work in a desktop GIS software. Adding a place involves uploading a vector file to UNBL. 

UNBL workspaces support the upload of places using the following file types: GeoJSON (.geojson), GeoJSON Lines (.geojsonl), Google Earth files (.kml, .kmz), or ESRI Shapefiles (.zip containing .shp, .dbf, .shx, .prj files). 

**Data security for uploaded ‘places’**

- All non geojson files will be converted into .geojson before uploading to the UNBL backend. 

- The uploaded .geojson files are stored in the UNBL Mongo Database (Mongo DB). 

- When the user removes the place, the data  is deleted from the live UNBL Mongo DB. 

- The UNBL Mongo DB is hosted in the **North Europe Data Centre**, which is in Ireland.  
