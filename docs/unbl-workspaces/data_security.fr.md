# Fiche d'information : Stockage des données nationales ajoutées aux espaces de travail sur UN Biodiversity Lab

## Contrôle d'accès général pour votre espace de travail UNBL

**Notions de base sur les espaces de travail sécurisés UNBL**

Les espaces de travail UNBL fournissent une zone de travail sécurisée où les données nationales ou infranationales peuvent être ajoutées et partagées avec un ensemble d'utilisateurs spécifiés. Ils offrent aux utilisateurs de tout niveau d'expertise SIG la possibilité de collaborer sur des projets de données spatiales en utilisant leurs propres données et lieux. Les utilisateurs non commerciaux du UNBL peuvent [demander un espace de travail UNBL pour](https://unbiodiversitylab.org/en/unbl-workspaces/) :

- Inviter une communauté d'utilisateurs pertinents à collaborer et à utiliser des données spatiales nationales et mondiales ;

- Se connecter aux référentiels de données spatiales nationaux existants, permettant de consolider toutes les données pertinentes en un seul endroit et garantissant des mises à jour automatiques depuis la source d'origine ;

- Télécharger des ensembles de données nationaux/infranationaux et des zones d'intérêt ;

- Étiqueter les données nationales pour identifier clairement les objectifs politiques ou les projets pertinents qu'elles seront utilisées pour soutenir ;

- Visualiser les ensembles de données nationaux/infranationaux aux côtés de toutes les couches de données mondiales disponibles sur le UNBL ; et

- Calculer toutes les métriques UNBL en utilisant la couche de limite nationale officielle ou les couches de limites infranationales officielles.

**Accès à un espace de travail sécurisé UNBL**

Lorsque vous demandez un espace de travail UNBL, vous serez désigné comme propriétaire de l'espace de travail. Vous pouvez attribuer des rôles à des individus ou à des groupes d'utilisateurs pour déterminer leur niveau d'accès. Ces rôles comprennent :

- *Propriétaires* : Nommés par le pays pour prendre le contrôle de l'espace de travail. Les propriétaires seront responsables d'inviter et d'accorder l'accès à d'autres utilisateurs, ainsi que d'ajouter d'autres administrateurs.

- *Administrateurs* : Peuvent ajouter et gérer des utilisateurs, attribuer des rôles aux utilisateurs en tant qu'éditeurs et visualisateurs, gérer les actifs de l'espace de travail via l'outil d'administration et voir tous les actifs de l'espace de travail dans la vue carte.

- *Éditeurs* : Peuvent gérer les actifs de l'espace de travail via l'outil d'administration et voir tous les actifs de l'espace de travail dans la vue carte. Les éditeurs doivent avoir de l'expérience dans l'utilisation de logiciels SIG pour pouvoir télécharger et modifier les couches de données.

- *Visualisateurs* : Peuvent voir tous les actifs de l'espace de travail dans la vue carte. Les visualisateurs ne peuvent pas accéder à l'outil d'administration.

Aucun utilisateur en dehors de ceux que vous attribuez ne pourra accéder à votre espace de travail.

Les administrateurs de la plateforme UNBL au PNUD et au PNUE-WCMC peuvent créer/supprimer des espaces de travail sécurisés UNBL et ajouter/supprimer des utilisateurs à un espace de travail sécurisé donné. Les administrateurs de la plateforme UNBL ne le feront qu'à la demande expresse du propriétaire d'un espace de travail.

## Détails du stockage des données pour les couches ajoutées à votre espace de travail UNBL

**Notions de base sur l'ajout d'une 'couche' à un espace de travail sécurisé sur UNBL**

Les données géospatiales peuvent être téléchargées et/ou liées au sein d'un espace de travail sécurisé UNBL, donnant ainsi à tous les membres de l'espace de travail la possibilité de visualiser ces données sur UNBL sans avoir besoin d'une expérience SIG préalable.

Les espaces de travail UNBL prennent en charge le téléchargement de données raster géospatiales dans le format de fichier suivant :

- GeoTIFF (Georeferenced Tagged Image File Format)

Les espaces de travail UNBL prennent également en charge la connexion à des données géospatiales externes via l'un des fournisseurs de services de tuiles externes suivants :

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Vector Tile Services (servis comme pg_tileserv ou Martin)

Les ensembles de données au sein d'un espace de travail ne sont découvrables que par les membres de l'espace de travail. Cependant, si un utilisateur ayant le rôle d'administrateur de l'espace de travail souhaite qu'un ensemble de données particulier au sein de son espace de travail soit découvrable par quiconque en dehors de son espace de travail, il peut activer cela en utilisant une option d'URL de couche publique. Les utilisateurs ayant le statut d'administrateur peuvent révoquer cette autorisation à tout moment.

Il est important de noter que tous les ensembles de données dans un espace de travail UNBL peuvent également être visualisés avec les ensembles de données mondiaux publiés sur la plateforme publique du UNBL.

**Stockage des données pour les couches téléchargées (GeoTIFF)**

Les fichiers GeoTIFF téléchargés dans les espaces de travail UNBL seront stockés dans un conteneur de blob de stockage privé sécurisé désigné de Microsoft Azure.

- Lorsque les utilisateurs suppriment la couche, tous les fichiers correspondants sont automatiquement supprimés du stockage.

- Le conteneur de stockage est hébergé dans le centre de données **Europe du Nord** d'Azure, qui se trouve en Irlande.

- Les utilisateurs ne peuvent pas accéder directement au conteneur de stockage. Les utilisateurs ne peuvent télécharger et supprimer des fichiers que via l'interface utilisateur de l'espace de travail.

**Stockage des données pour les ensembles de données créés à partir de données géospatiales externes**

Les données relatives aux ensembles de données créés par les données géospatiales hébergées sur les services suivants ne sont pas hébergées au sein du UNBL. La sécurité des données de ces ensembles de données peut dépendre du service externe respectif.

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Vector Tile Services (servis comme pg_tileserv ou Martin)

## Détails du stockage des données pour les lieux ajoutés à votre espace de travail UNBL

**Notions de base sur le téléchargement d'un 'lieu' dans un espace de travail sécurisé sur UNBL**

Les espaces de travail sécurisés UNBL permettent aux utilisateurs de télécharger des lieux dans un environnement sécurisé. L'ajout d'un nouveau lieu offre aux utilisateurs la possibilité d'utiliser toutes les fonctionnalités du UNBL pour une zone d'intérêt infranationale, nationale ou transfrontalière. Une fois le lieu ajouté à un espace de travail UNBL, les utilisateurs peuvent : (1) afficher des métriques dynamiques pour cet emplacement ; et (2) découper toute couche raster de la plateforme publique du UNBL (uniquement les données avec une licence d'accès ouvert) pour cet emplacement et la télécharger pour un travail ultérieur dans un logiciel SIG de bureau. L'ajout d'un lieu implique le téléchargement d'un fichier vectoriel vers le UNBL.

Les espaces de travail UNBL prennent en charge le téléchargement de lieux en utilisant les types de fichiers suivants : GeoJSON (.geojson), GeoJSON Lines (.geojsonl), fichiers Google Earth (.kml, .kmz) ou ESRI Shapefiles (.zip contenant les fichiers .shp, .dbf, .shx, .prj).

**Sécurité des données pour les 'lieux' téléchargés**

- Tous les fichiers non geojson seront convertis en .geojson avant d'être téléchargés vers le backend du UNBL.

- Les fichiers .geojson téléchargés sont stockés dans la base de données Mongo UNBL (Mongo DB).

- Lorsque l'utilisateur supprime le lieu, les données sont supprimées de la Mongo DB active du UNBL.

- La Mongo DB UNBL est hébergée dans le **centre de données Europe du Nord**, qui se trouve en Irlande.
