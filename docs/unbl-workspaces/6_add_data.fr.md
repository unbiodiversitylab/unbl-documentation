# Ajouter vos propres données géospatiales à votre espace de travail

Les espaces de travail UNBL prennent en charge le téléchargement de données raster géospatiales dans le format de fichier suivant :

- GeoTIFF (Format de fichier image géoréférencé balisé)

Les espaces de travail UNBL prennent également en charge la connexion à des données géospatiales externes via l'un des fournisseurs de services de tuiles externes suivants :

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- Google Earth Engine (GEE)

- Spatiotemporal Asset Catalog (STAC)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Services de tuiles vectorielles (servis comme pg_tileserv ou Martin)

Les données géospatiales peuvent être téléchargées et/ou liées dans votre espace de travail, donnant ainsi à tous les membres de votre espace de travail la possibilité de visualiser vos données sur UNBL sans avoir besoin d'une expérience SIG préalable. La sécurité UNBL garantit que les jeux de données dans votre espace de travail sont **uniquement** visibles par les membres de votre espace de travail. Cependant, si vous souhaitez que les jeux de données de votre espace de travail soient visibles par quelqu'un en dehors de votre espace de travail, vous pouvez activer cela en utilisant une option d'URL de couche publique. Seules les personnes ayant accès à cette URL pourront visualiser votre couche.

Il est important de noter que tous les jeux de données de votre espace de travail peuvent également être visualisés en parallèle avec les jeux de données globaux publiés sur la plateforme publique d'UNBL.

!!!Note
	Les termes *jeu de données* et *couche* sont utilisés de manière interchangeable ci-après. Un jeu de données fait référence à une collection de données spatiales composée d'une ou plusieurs couches. Sur UNBL, un téléchargement unique ou une configuration de données géospatiales se réalise en *« créant une couche »*. Plusieurs entrées de couches peuvent être combinées et visualisées sur UNBL comme un jeu de données. Les couches individuelles peuvent également être visualisées indépendamment sur UNBL.

## Quels paramètres et métadonnées dois-je remplir lors de la création d'une couche ?

Pour commencer à créer une couche et remplir les métadonnées pertinentes pour la couche :

1.	Ouvrez le menu déroulant « Home » dans l'interface d'administration de votre espace de travail et cliquez sur « Layers ».

2.	Cliquez sur le bouton « CREATE NEW LAYER ».

	![](images/en/image22.png)

3.	Dans la page de nouvelle couche, remplissez les informations suivantes :

	a.	*Layer title* : Le nom de votre couche. Cela doit être concis (nous recommandons qu'il soit de moins de 100 caractères) et descriptif de vos données.

	b.	*Layer slug* : Un slug est un identifiant unique pour la couche dans votre espace de travail. Vous ne pouvez pas avoir plusieurs couches dans votre espace de travail avec le même slug. Il ne doit contenir que des lettres, des chiffres et des tirets (« - »). Vous pouvez utiliser le bouton « GENERATE SLUG NAME » pour générer un identifiant unique basé sur le titre de couche fourni.

	c.	*Layer category (optionnel)* : Vous pouvez sélectionner une ou plusieurs catégories pour la couche dans la liste d'options du menu déroulant. Un large éventail de catégories socio-économiques, basées sur la nature et liées aux politiques du KMGBF sont disponibles. Plus d'une catégorie peut être sélectionnée pour la même couche. Ces catégories correspondent aux filtres de catégorie de jeu de données dans la vue cartographique. La sélection d'une catégorie signifie que votre couche apparaîtra dans la liste des jeux de données filtrés lorsque le filtre de catégorie de jeu de données correspondant est appliqué.

	d.	*Tag (optionnel)* : Vous pouvez spécifier une ou plusieurs étiquettes pour votre couche. Les étiquettes correspondent au filtre d'étiquettes de jeu de données dans la vue cartographique. La spécification d'une étiquette pour votre couche signifie que la couche apparaîtra dans la liste des couches filtrées lorsque le filtre d'étiquette de jeu de données correspondant est appliqué dans la carte. Contrairement aux catégories de couches, les étiquettes peuvent être n'importe quelle chaîne de texte de votre choix, ce qui rend cette fonctionnalité utile si vous avez besoin de différencier clairement vos couches d'espace de travail des jeux de données de la plateforme publique et de pouvoir appliquer des filtres plus efficaces lors de la recherche de vos jeux de données dans la vue cartographique. Par exemple, vous pourriez utiliser une étiquette pour identifier la cible de votre stratégie et plan d'action national pour la biodiversité (SPANB) pour laquelle la couche de données est pertinente.

	e.	*Layer description (optionnel)* : Dans le champ de description, vous pouvez spécifier le texte qui apparaîtra dans la boîte pop-up d'information de la couche. Ici, vous pouvez insérer l'essentiel de vos métadonnées de couche, comme une description générale, la citation de l'article scientifique/jeu de données, des liens externes vers l'article scientifique/jeu de données, les spécifications de licence, etc.

	!!!Note
		Pour les couches individuelles qui font partie d'une couche de groupe parent, le texte pop-up d'information de la couche affichera toujours la description de la couche de groupe parent et donc le champ de description est redondant (voir [« Comment créer des couches groupées ? »](#comment-creer-des-couches-groupees)).

	![](images/en/image23.png)

4.	Une fois que vous avez rempli les métadonnées pertinentes pour documenter cette nouvelle couche, vous devez maintenant spécifier le format ou la norme de service web géospatial de vos données géospatiales et configurer la couche en conséquence. Les sections suivantes détaillent comment configurer votre couche en fonction du format de vos données géospatiales.

## Comment télécharger des couches raster au format GeoTIFF ?

Actuellement, vous pouvez télécharger manuellement des données géospatiales dans votre espace de travail UNBL uniquement si elles sont disponibles au format raster GeoTIFF. Une couche raster constitue une grille de cellules (ou pixels) où chaque cellule a une valeur représentant des informations sur un sujet ou phénomène spécifique. Nous ne pouvons actuellement accepter que des GeoTIFFs avec une seule bande. Si vous avez un GeoTIFF avec plus d'une bande, divisez-le au préalable en différents fichiers. Les couches raster GeoTIFF sont ajoutées à votre espace de travail UNBL par un téléchargement direct vers un dépôt de données SIG UNBL sécurisé et conforme au RGPD sur Azure. Pour plus d'informations, veuillez consulter notre fiche de présentation sur la sécurité des données *(à venir - merci de votre patience !)*.

!!!Note
	Les données géospatiales dans d'autres formats de couches raster et vectorielles peuvent être configurées sur UNBL en se connectant à une ressource externe. Voir [« Comment configurer des couches raster en utilisant des services de tuiles externes ? »](#comment-configurer-des-couches-raster-en-utilisant-des-services-de-tuiles-externes-wmswmts) et [« Comment configurer des couches vectorielles en utilisant des services de tuiles externes ? »](#comment-configurer-des-couches-vectorielles-en-utilisant-des-services-de-tuiles-externes) pour les formats de services Web OGC interopérables avec UNBL et les guides pour s'y connecter.

Pour télécharger un fichier GeoTIFF :

1.	Naviguez vers la page de nouvelle couche et remplissez les métadonnées pertinentes (voir [« Quels paramètres et métadonnées dois-je remplir lors de la création d'une couche ? »](#quels-parametres-et-metadonnees-dois-je-remplir-lors-de-la-creation-dune-couche)).

2.	Dans la section « Layer Config » :

	a.	*Layer type* : Sélectionnez « raster ».

	b.	*Layer provider* : Sélectionnez « GeoTIFF File Upload ».

	c.	*GeoTIFF file* : Cliquez sur le bouton « Choose File » pour télécharger une couche raster GeoTIFF valide depuis votre système de fichiers local. Les fichiers téléchargés doivent être un raster à bande unique et doivent faire moins de 1000 Mo. Vous serez notifié si vous sélectionnez un fichier invalide.

	d.	*Data type* : Spécifiez si le raster contient des données « categorical » ou « continuous ». Les données catégorielles représentent des classes ou catégories discrètes où chaque valeur de pixel représente un type ou une classe distincte (par exemple, les classes d'occupation du sol). Les jeux de données continus représentent des données où les valeurs peuvent se situer n'importe où dans une plage de valeurs spécifiée (par exemple, la température moyenne annuelle).

	e.	*Minimum/Maximum value* : Si votre raster contient des données continues, vous devez fournir la plage de valeurs dans les données en spécifiant les valeurs minimale et maximale de la plage.

	f.	*Minimum/Maximum zoom level (optionnel)* : La plage de niveau de zoom par défaut est définie de 0 à 14. Vous pouvez optionnellement spécifier les niveaux de zoom pour la couche si le fichier raster ne contient des données qu'à certains niveaux de zoom. Notez qu'UNBL prend en charge un niveau de zoom maximum de 14.

	g.	*Layer styling* : Le style de couche détermine comment la couche est affichée sur la carte. En cliquant sur « ADD ADDITIONAL STYLING », vous pouvez spécifier n'importe quel nombre d'entrées de style de couche pour correspondre aux valeurs de votre raster. Chaque entrée de style de couche doit définir les propriétés suivantes :

	- *Value* - la valeur de pixel dans les données pour laquelle définir le style.

	- *Name* – le nom de l'entrée de style dans la légende de la couche sur la carte.

	- *Color* – la couleur des pixels avec la valeur spécifiée sur la carte. Vous pouvez définir une couleur via le sélecteur de couleur manuel, ou en entrant une valeur RGBA ou hexadécimale. Optionnellement, vous pouvez définir l'opacité de la couleur dans une plage de 0 à 100%, où 0% est entièrement transparent et 100% est entièrement opaque.

	Vous pouvez également choisir optionnellement si l'étiquette de nom d'une entrée de style est masquée dans la légende de la couche sur la carte en cliquant sur l'icône ![](images/icons/hide.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} à côté de l'entrée de style. Pour les couches catégorielles, les entrées de valeur de style de couche doivent correspondre aux valeurs de chaque catégorie/classe dans la source de données raster. Pour les couches continues, les entrées de valeur de style de couche doivent correspondre à la plage de valeurs dans votre fichier raster que vous souhaitez rendre sur la carte. Vous pouvez spécifier n'importe quels points le long de la plage de valeurs entre les valeurs minimale et maximale -- un dégradé de couleurs entre chacune de ces valeurs sera généré.

	![](images/en/image24.png)

3.	Une fois que toutes les métadonnées et tous les paramètres ont été spécifiés, le bouton « SAVE AND VIEW DETAILS » s'allumera en bleu, à condition que toutes les informations saisies soient valides. Cliquez sur ce bouton pour télécharger votre fichier GeoTIFF dans votre espace de travail. Le fichier sera stocké dans un dépôt privé sûr et dédié sur Azure. Cela peut prendre quelques secondes selon la taille du fichier et la vitesse de votre connexion internet haut débit, donc après avoir cliqué sur le bouton, vous devez attendre d'être redirigé vers la page de modification de la couche. Voir [« Comment publier ma couche et la partager avec des utilisateurs externes ? »](#comment-publier-ma-couche-et-la-partager-avec-des-utilisateurs-externes) et [« Comment modifier mes couches ajoutées ? »](#comment-modifier-mes-couches-ajoutees) pour les étapes suivantes.

## Comment configurer des couches raster en utilisant des services de tuiles externes WMS/WMTS ?

UNBL prend en charge la configuration de couches d'images raster dans votre espace de travail en se connectant à des fournisseurs de services de tuiles externes. Pour ajouter des données géospatiales à votre espace de travail en utilisant cette méthode :

1.	Naviguez vers la page de nouvelle couche et remplissez les métadonnées pertinentes (voir [« Quels paramètres et métadonnées dois-je remplir lors de la création d'une couche ? »](#quels-parametres-et-metadonnees-dois-je-remplir-lors-de-la-creation-dune-couche)).

2.	Dans la section « Layer Config » :

	a.	*Layer type* : Sélectionnez « raster ».

	b.	*Layer provider* : Sélectionnez « External Tile Service (WMS, WMTS, etc.) ».

	c.	*Tiles URL* : Ici, vous pouvez vous connecter à un service de tuiles externe qui utilise les protocoles Web Map Service (WMS), Web Map Tile Service (WMTS) ou XYZ Tile Service. Pour configurer des couches en utilisant ces fournisseurs, vous devez fournir une URL de tuile valide, qui doit contenir soit les espaces réservés `{z}{x}{y}` soit l'espace réservé `{bbox-epsg-3857}`.

	Par exemple, l'URL WMS d'exemple ci-dessous ne fonctionnera **pas** :

	```
	https://wms.server.net/mapserv?request=getmap&service=wms&BBOX=-90,-180,90,360&crs=EPSG:4326&format=image/jpeg&layers=layer_latest&width=1200&height=600
	```

	car elle contient un format de paramètre de boîte englobante (BBOX) incorrect. L'URL peut être ajustée en changeant le paramètre `BBOX` pour correspondre à l'espace réservé, ainsi que le paramètre du système de référence de coordonnées (`crs`) pour refléter le système de coordonnées Web Mercator (EPSG : 3857). Une URL configurable serait :

	```
	https://wms.server.net/mapserv?request=getmap&service=wms&BBOX={bbox-epsg-3857}&crs=EPSG:3857&format=image/jpeg&layers=layer_latest&width=1200&height=600
	```

	!!!Note "Les espaces réservés suivants ont été ajustés pour permettre la configuration UNBL :"
		- `-90,-180,90,360` changé en `{bbox-epsg-3857}`
		- `EPSG:4326` changé en `EPSG:3857`

	d.	*Data type* : Spécifiez si l'image raster contient des données « categorical » ou « continuous ». Les données catégorielles représentent des classes ou catégories discrètes où chaque valeur de pixel représente un type ou une classe distincte. Les jeux de données continus représentent des données où les valeurs peuvent se situer n'importe où dans une plage de valeurs spécifiée.

	e.	*Minimum/Maximum zoom level (optionnel)* : La plage de niveau de zoom par défaut est définie de 0 à 14. Vous pouvez optionnellement spécifier les niveaux de zoom pour la couche si l'image raster ne contient des données qu'à certains niveaux de zoom. Notez qu'UNBL prend en charge un niveau de zoom maximum de 14.

	f.	*Layer styling* : Le style de couche détermine comment la légende de l'image raster est affichée sur la carte. En cliquant sur « ADD ADDITIONAL STYLING », vous pouvez spécifier n'importe quel nombre d'entrées de style de couche pour correspondre aux valeurs de l'image raster. Chaque entrée de style de couche doit définir les propriétés suivantes :

	- *Name* – le nom de l'entrée de style dans la légende de la couche sur la carte.

	- *Color* – la couleur associée au nom spécifié dans la légende de la couche. Vous pouvez sélectionner une couleur en utilisant le sélecteur de couleur, ou en spécifiant une valeur de code couleur RGBA ou Hex.

	Vous pouvez également choisir optionnellement si l'étiquette de nom d'une entrée de style est masquée dans la légende de la couche sur la carte en cliquant sur l'icône ![](images/icons/hide.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} à côté de l'entrée de style. Pour les images raster catégorielles, les entrées de style de légende de couche doivent représenter les valeurs de chaque catégorie/classe dans la source de données raster. Pour les images raster continues, les entrées de style de légende doivent représenter la plage de valeurs visualisées dans l'image raster. Vous pouvez spécifier n'importe quels points le long de la plage de valeurs entre les valeurs minimale et maximale - un dégradé de couleurs entre chacune de ces valeurs sera généré.

	![](images/en/image25.png)

3. Une fois que toutes les métadonnées et propriétés de configuration ont été spécifiées, le bouton « SAVE AND VIEW DETAILS » s'allumera en bleu, à condition que toutes les informations saisies soient valides. Cliquez sur ce bouton pour configurer votre image raster dans votre espace de travail. Voir [« Comment publier ma couche et la partager avec des utilisateurs externes ? »](#comment-publier-ma-couche-et-la-partager-avec-des-utilisateurs-externes) et [« Comment modifier mes couches ajoutées ? »](#comment-modifier-mes-couches-ajoutees) pour les étapes suivantes.

## Comment configurer des couches raster en utilisant Google Earth Engine (GEE) ?

Si vous souhaitez afficher des ressources GEE dans votre espace de travail UNBL depuis votre propre compte ou un compte public, vous pouvez le faire en configurant une ressource raster à bande unique GEE. Actuellement, nous ne prenons pas en charge la configuration de rasters multi-bandes ou de données vectorielles depuis GEE. Pour configurer des ressources raster à bande unique GEE :

1. Si vous configurez une ressource depuis votre projet Cloud personnel, assurez-vous que la case « Anyone can read » est cochée pour cette ressource.

	![](images/en/draft2-image1.png)

	![](images/en/draft2-image2.png)

2. Naviguez vers la page de nouvelle couche dans l'interface d'administration UNBL et remplissez les métadonnées pertinentes (voir [« Quels paramètres et métadonnées dois-je remplir lors de la création d'une couche ? »](#quels-parametres-et-metadonnees-dois-je-remplir-lors-de-la-creation-dune-couche)).

3. Dans la section *Layer Config* :

	a.	*Layer type* : Sélectionnez « raster ».

	b.	*Layer provider* : Sélectionnez « Google Earth Engine ».

	c.	*Asset Path* : Copiez et collez l'ID d'image de votre ressource GEE. N'importe quel ID d'image peut être configuré sur UNBL, à condition qu'il s'agisse d'une image raster à bande unique. Il peut s'agir d'un ID d'image de votre projet Cloud GEE personnel, ou de tout autre projet Cloud GEE partagé ou jeu de données GEE disponible publiquement, comme celui du catalogue public [awesome-gee-community-catalog](https://gee-community-catalog.org/), qui donne accès à plus de 4 000 ressources GEE publiques.

	![](images/en/draft2-image3.png)

	d.	*Data type* : Spécifiez si l'image raster contient des données « categorical » ou « continuous ». Les données catégorielles représentent des classes ou catégories discrètes où chaque valeur de pixel représente un type ou une classe distincte. Les jeux de données continus représentent des données où les valeurs peuvent se situer n'importe où dans une plage de valeurs spécifiée.

	e.	*Minimum/Maximum zoom level (optionnel)* : La plage de niveau de zoom par défaut est définie de 0 à 14. Vous pouvez optionnellement spécifier les niveaux de zoom pour la couche si l'image raster ne contient des données qu'à certains niveaux de zoom. Notez qu'UNBL prend en charge un niveau de zoom maximum de 14.

	![](images/en/draft2-image4.png)

	f.	*Layer styling* : Le style de couche détermine comment la légende de la ressource GEE est affichée sur la carte. En cliquant sur « ADD ADDITIONAL STYLING », vous pouvez spécifier n'importe quel nombre d'entrées de style de couche (également appelées *classes* ou *seuils*) pour correspondre aux valeurs de l'image raster. Chaque entrée de style de couche doit définir les propriétés suivantes :

	- *Value* - la valeur de pixel dans les données pour laquelle définir le style.

	- *Name* – le nom de la classe ou plage dans la légende de la couche sur la carte.

	- *Color* – la couleur des pixels avec la valeur spécifiée sur la carte. Vous pouvez définir une couleur via le sélecteur de couleur manuel, ou en entrant une valeur RGBA ou hexadécimale. Optionnellement, vous pouvez définir l'opacité de la couleur dans une plage de 0 à 100%, où 0% est entièrement transparent et 100% est entièrement opaque.

	Vous pouvez également choisir optionnellement si l'étiquette de nom d'une entrée de style est masquée dans la légende de la couche sur la carte en cliquant sur l'icône ![](images/icons/hide.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} à côté de l'entrée de style. Pour les couches catégorielles, les entrées de valeur de style de couche doivent correspondre aux valeurs de chaque catégorie/classe dans la source de données raster. Pour les couches continues, les entrées de valeur de style de couche doivent correspondre à la plage de valeurs dans votre fichier raster que vous souhaitez rendre sur la carte. Vous pouvez spécifier n'importe quels points le long de la plage de valeurs entre les valeurs minimale et maximale -- un dégradé de couleurs entre chacune de ces valeurs sera généré. Il est important de noter que les valeurs de pixels minimale et maximale, et donc la plage de valeurs, peuvent être dérivées directement en visualisant l'onglet « BANDS » dans la boîte d'information « Asset details » de votre ressource sur GEE. L'exemple de style de couche ci-dessous crée une palette de couleurs continue pour la concentration de stock de carbone.

	![](images/en/draft2-image5.png)

	![](images/en/draft2-image6.png)

	Pour les couches raster catégorielles, chaque valeur de pixel spécifiée correspond exactement à une classe ou catégorie discrète. L'exemple de style de couche ci-dessous crée une palette de couleurs discrète qui représente les classes d'occupation du sol.

	![](images/en/draft2-image7.png)

	g.	*Styled Layer Description (SLD)* : Cliquez sur le bouton « GENERATE GEE SLD » pour générer automatiquement un SLD pour configurer le style de votre ressource GEE sur UNBL, basé sur les paramètres que vous avez définis pour le *Layer styling* à l'étape f. Alors que le style de couche détermine le style de la légende de la couche, le SLD déterminera le style des pixels réels dans vos données. Basé sur les exemples fournis à l'étape f, la configuration SLD pour un schéma de couleurs continu pour la concentration de stock de carbone ressemblerait à ceci :

	```

	<RasterSymbolizer>
	<ColorMap type="ramp" extended="false">
		<ColorMapEntry color="#FFF1B8" quantity="1"/>
		<ColorMapEntry color="#E2C98F" quantity="10"/>
		<ColorMapEntry color="#B58A5A" quantity="50"/>
		<ColorMapEntry color="#6E4A28" quantity="200"/>
		<ColorMapEntry color="#1C130C" quantity="590"/>
	</ColorMap>
	</RasterSymbolizer>

	```

	Pour le raster catégoriel d'occupation du sol, la configuration SLD ressemblerait à ceci :

	```

	<RasterSymbolizer>
	<ColorMap type="values" extended="false">
		<ColorMapEntry color="#FFFFFF" quantity="1"/>
		<ColorMapEntry color="#1A5BAB" quantity="2"/>
		<ColorMapEntry color="#358221" quantity="3"/>
		<ColorMapEntry color="#A7D282" quantity="4"/>
		<ColorMapEntry color="#87D19E" quantity="5"/>
		<ColorMapEntry color="#FFDB5C" quantity="6"/>
		<ColorMapEntry color="#EECFA8" quantity="7"/>
		<ColorMapEntry color="#ED022A" quantity="8"/>
		<ColorMapEntry color="#EDE9E4" quantity="9"/>
	</ColorMap>
	</RasterSymbolizer>


	```

	Où chaque couleur ColorMapEntry et quantité de pixel associée correspond exactement à une ligne d'entrée de style de couche de l'étape f.

	![](images/en/draft2-image8.png)

4. Une fois que toutes les métadonnées et propriétés de configuration ont été spécifiées, le bouton « SAVE AND VIEW DETAILS » s'allumera en bleu, à condition que toutes les informations saisies soient valides. Cliquez sur ce bouton pour configurer votre image raster dans votre espace de travail. Voir [« Comment publier ma couche et la partager avec des utilisateurs externes ? »](#comment-publier-ma-couche-et-la-partager-avec-des-utilisateurs-externes) et [« Comment modifier mes couches ajoutées ? »](#comment-modifier-mes-couches-ajoutees) pour les étapes suivantes.

## Comment configurer des couches raster en utilisant Spatiotemporal Asset Catalog (STAC) ?

La fonctionnalité de configuration STAC est actuellement en test et est sujette à des mises à jour futures. Si vous souhaitez configurer une nouvelle couche provenant d'un catalogue STAC externe dans votre espace de travail UNBL, veuillez nous contacter à <support@unbiodiversitylab.org> afin que nous puissions comprendre le cas d'utilisation de cette fonctionnalité.

## Comment configurer des couches vectorielles en utilisant des services de tuiles externes ?

UNBL prend en charge la configuration de couches de tuiles vectorielles dans votre espace de travail en se connectant à des fournisseurs de services de tuiles externes. Les couches vectorielles sont des formes géométriques discrètes, telles que des points et des polygones. Pour ajouter des données géospatiales à votre espace de travail en utilisant cette méthode :

1.	Naviguez vers la page de modification de couche et remplissez les métadonnées pertinentes (voir [« Quels paramètres et métadonnées dois-je remplir lors de la création d'une couche ? »](#quels-parametres-et-metadonnees-dois-je-remplir-lors-de-la-creation-dune-couche)).

2. Dans la section « Layer Config » (tous les champs sont obligatoires sauf indication contraire) :

	a.	*Layer type* : Sélectionnez « vector ».

	b.	*Layer provider* : Sélectionnez « External Tile Service (Mapbox, ESRI, pg_tileserv, Martin, etc.) ».

	c.	*Tiles URL* : Ici, vous pouvez vous connecter à un fournisseur de services de tuiles vectorielles externes qui héberge vos données géospatiales, comme Mapbox, Esri, pg_tileserv, Martin et autres. Pour configurer des couches en utilisant ces fournisseurs, vous devez fournir une URL de tuile valide, qui doit contenir soit les espaces réservés `{z}{x}{y}` soit l'espace réservé `{bbox-epsg-3857}`. Par exemple, une URL de couche configurable pour un jeu de données de couverture forestière hébergé sur Martin ressemble à ceci :

	```

	https://example-tileserv.org/martin/forest_cover/{z}/{x}/{y}
	```

	d.	*Data type* : Spécifiez si les tuiles vectorielles contiennent des données « categorical » ou « continuous ». Les données catégorielles représentent des classes ou catégories discrètes. Les jeux de données continus représentent des données où les valeurs peuvent se situer n'importe où dans une plage de valeurs spécifiée. Bien que les tuiles vectorielles puissent stocker plusieurs attributs de données, vous ne pouvez choisir qu'un seul attribut de données pour le style de légende de couche sur UNBL. Vous devez spécifier le type de données basé sur la légende provisoire de couche de votre couche ajoutée sur UNBL.

	![](images/en/image26.png)

3.	La section « Render layers » spécifie les attributs de données de la source de données vectorielles qui doivent être affichés sur la carte. Dans cette section :

	a.	*Source layer* : Spécifiez le nom du jeu de données que vous hébergez sur le serveur de tuiles vectorielles. Par exemple, la couche source pour l'URL d'exemple de l'étape 2c est `forest_cover`. Cliquez sur l'icône ![](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} pour cette propriété pour visualiser la documentation détaillée sur le référencement de la couche source.

	b.	*Type* : Spécifiez le type de géométrie que votre jeu de données représente. Les options disponibles sont *fill, line, symbol, circle, heatmap* et *fill-extrusion*. Dans la majorité des cas, le type de géométrie sera *fill* (polygones avec une rampe de couleur de remplissage). Cliquez sur l'icône ![](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} pour cette propriété pour visualiser la documentation détaillée sur les options de type de géométrie.

	c.	*Paint (optionnel)* : Ici, vous pouvez spécifier le style de couche pour votre jeu de données sur UNBL en utilisant une configuration de style .json. Cliquez sur l'icône ![](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} pour cette propriété pour visualiser la documentation détaillée pour configurer le style de couche. Pour les types de géométrie les plus courants de type *fill*, la configuration paint suit un modèle défini. Pour configurer le style de couche pour les jeux de données catégoriels, utilisez le modèle suivant :

	```

	{
    "fill-opacity": 0.9,
    "fill-color": [
    "match",
    [ "get", "forest_cover_2023" ],
    "Mixed forest",
    "#7c549e",
    "Mangrove forest",
    "#e5bcf6",
    "Plantation forest",
    "#add911",
    "#ffffff"],
    "fill-outline-color": [
    "match",
    [ "get", " forest_cover_2023" ],
    "Mixed forest",
    "#7c549e",
    "Mangrove forest",
    "#e5bcf6",
    "Plantation forest",
    "#add911",
    "#ffffff" ]
    }
	```

	Le même modèle, au format texte ci-dessous, met en évidence les chaînes qui sont des variables configurables et doivent être modifiées en fonction de votre style de couche :

	{
	"fill-opacity": ==0.9==,
    "fill-color": [
    "match",
    [ "get", =="forest_cover_2023"==],
    =="Mixed forest",
    "#7c549e",
    "Mangrove forest",
    "#e5bcf6",
    "Plantation forest",
    "#add911",
    "#ffffff"==],
    "fill-outline-color": [
    "match",
    ["get", =="forest_cover_2023"==],
    =="Mixed forest",
    "#7c549e",
    "Mangrove forest",
    "#e5bcf6",
    "Plantation forest",
    "#add911",
    "#ffffff"==]
    }

	où :

	- `fill-opacity` définit l'opacité du remplissage du polygone, de 0 (entièrement transparent) à 1 (entièrement opaque).

	- `fill-color` spécifie l'attribut de données qui sera utilisé pour styliser le remplissage du polygone, ainsi que le style lui-même (dans ce cas, c'est l'attribut `forest_cover_2023` du jeu de données source `forest_cover` d'exemple mentionné précédemment, et `match` spécifie le style pour les catégories discrètes de cet attribut de données). Chaque paire de chaîne de texte configurable suivante spécifie une catégorie discrète de votre attribut de données et la couleur que vous souhaitez peindre pour cette catégorie spécifique (au format code Hex), respectivement.

	- `fill-outline-color` fonctionne de la même manière que `fill-color`, mais spécifie la couleur de la limite linéaire du polygone au lieu du remplissage intérieur du polygone. De cette façon, vous pouvez spécifier une limite de couleur différente pour les polygones par rapport à la couleur de leur remplissage intérieur (notez que ce n'est pas le cas pour l'exemple ci-dessus). Important, vous pouvez spécifier une chaîne `"#ffffff"` à la fin de la dernière chaîne de code hex pour l'une ou l'autre des propriétés de remplissage pour signifier que toutes les catégories de données qui ne sont pas explicitement listées dans la propriété de style de remplissage doivent être transparentes.

	!!!Important
		Si vous n'incluez pas la chaîne `"#ffffff"` pour le style transparent pour les catégories de données non incluses, vos tuiles vectorielles ne parviendront pas à se visualiser si vous omettez de spécifier exhaustivement le style pour **toutes** les catégories de données présentes dans votre attribut de données dans la propriété de style de remplissage. Cependant, vous n'êtes pas obligé de spécifier un style transparent inclusif si vous spécifiez un filtre pour exclure les catégories de données sélectionnées dans votre attribut de données de la considération pour le style de couche (étape 3d).

	Pour configurer le style de couche pour les jeux de données continus, utilisez le modèle suivant :

	```

	{
    "fill-opacity": 0.9,
    "fill-color": [
    "interpolate",
	[ "linear" ],
    [ "get", "canopy_height_2023" ],
    0,
	"#f5ebd5",
	5,
	"#eef5c9",
	10,
	"#dbe6a1",
	20,
	"#c5e897",
	30,
	"#9fe04a",
	50,
	"#689c24",
	75,
	"#518510",
	100,
	"#305207" ],
    "fill-outline-color": [
    "interpolate",
	[ "linear" ],
    [ "get", "canopy_height_2023" ],
    0,
	"#f5ebd5",
	5,
	"#eef5c9",
	10,
	"#dbe6a1",
	20,
	"#c5e897",
	30,
	"#9fe04a",
	50,
	"#689c24",
	75,
	"#518510",
	100,
	"#305207" ]
    }
	```

	Le même modèle, au format texte ci-dessous, met en évidence les chaînes qui sont des variables configurables et doivent être modifiées en fonction de votre style de couche :

	{
    "fill-opacity": ==0.9==,
    "fill-color": [
    "interpolate",
	[ "linear" ],
    [ "get", =="canopy_height_2023"== ],
    ==0,
	"#f5ebd5",
	5,
	"#eef5c9",
	10,
	"#dbe6a1",
	20,
	"#c5e897",
	30,
	"#9fe04a",
	50,
	"#689c24",
	75,
	"#518510",
	100,
	"#305207"== ],
    "fill-outline-color": [
    "interpolate",
	[ "linear" ],
    [ "get", =="canopy_height_2023"== ],
    ==0,
	"#f5ebd5",
	5,
	"#eef5c9",
	10,
	"#dbe6a1",
	20,
	"#c5e897",
	30,
	"#9fe04a",
	50,
	"#689c24",
	75,
	"#518510",
	100,
	"#305207"== ]
    }

	où :

	- `fill-opacity` définit l'opacité du remplissage du polygone, de 0 (entièrement transparent) à 1 (entièrement opaque).

	- `fill-color` spécifie l'attribut de données qui sera utilisé pour styliser le remplissage du polygone, ainsi que le style lui-même (dans ce cas, c'est l'attribut `canopy_height_2023` du jeu de données source `forest_cover` d'exemple mentionné précédemment, et `interpolate` spécifie le style pour une plage continue de valeurs pour cet attribut de données). Chaque paire de variable configurable suivante spécifie un nombre qui se situe dans la plage de valeurs de votre attribut de données et une chaîne de texte avec la couleur que vous souhaitez peindre pour cette valeur spécifique (au format code Hex), respectivement. Pour construire un schéma de couleurs continu pour votre attribut de données, commencez par styliser la valeur minimale et progressez vers le haut par intervalles raisonnables, basés sur la dispersion de vos données, pour atteindre la valeur maximale. Toutes les valeurs se situant entre un intervalle spécifié seront stylisées en utilisant une couleur graduée qui est plus foncée que la couleur de valeur spécifiée plus petite, et plus claire que la couleur de valeur spécifiée plus grande dans l'intervalle spécifié.

	- `fill-outline-color` fonctionne de la même manière que `fill-color`, mais spécifie la couleur de la limite linéaire du polygone au lieu du remplissage intérieur du polygone. De cette façon, vous pouvez spécifier une limite de couleur différente pour les polygones par rapport à la couleur de leur remplissage intérieur (notez que ce n'est pas le cas pour l'exemple ci-dessus).

	d.	*Filter (optionnel)* : Vous pouvez optionnellement spécifier un sous-ensemble de catégories de données, ou une plage de valeurs spécifique, qui doit être utilisé pour styliser la carte. Toutes les catégories de données ou plages de valeurs tombant en dehors du filtre spécifié ne seront pas considérées dans le style de couche. Cliquez sur l'icône ![](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} pour cette propriété pour visualiser la documentation détaillée pour configurer les options de filtre. Comme exemple, si vous vouliez filtrer la catégorie "Mixed forest" de l'attribut de données `forest_cover_2023`, vous utiliseriez le modèle suivant :

	```

	["!=", ["get", "forest_cover_2023"], "Mixed forest"]
	```

	où `!=` spécifie une expression d'exclusion conditionnelle.

	![](images/en/image27.png)

	e.	*ADD LAYER CONFIG (optionnel)* : Dans certains cas, vous pouvez souhaiter configurer le style pour plus d'un attribut de données dans votre jeu de données vectoriel. En cliquant sur ce bouton, vous pouvez spécifier d'autres expressions de style. Notez que tous les attributs de données, catégories de données ou plages de valeurs qui se chevauchent entre les expressions de style ou sont contenus dans les mêmes polygones dans vos données et ne sont pas filtrés en conséquence, conduiront à une visualisation de couche confuse.

4.	La section « Interaction config » spécifie les attributs de données dans le jeu de données vectoriel qui doivent être affichés dans le popup lors du clic sur les polygones de la couche vectorielle sur la carte. Cliquez sur « ADD ADDITIONAL OPTION » pour spécifier un attribut de données qui doit être affiché dans le popup. C'est une section optionnelle – elle peut être laissée vide si non nécessaire. Pour chaque entrée Interaction config :

	a.	*Column* : Le nom de l'attribut de données qui sera affiché (sensible à la casse). Par exemple, pour la couche source `forest_cover`, l'attribut de données pourrait être `forest_cover_2023` ou `canopy_height_2023`.

	b.	*Type* : Choisissez le type *string*, *date* ou *number*, selon le format de votre attribut de données.

	c.	*Format (optionnel)* : Si votre attribut de données est de type *date* ou *number*, vous pouvez spécifier le formatage ici (ex. `dd/mm/yyyy` pour date).

	d.	*Property (optionnel)* : Ici, vous pouvez spécifier l'étiquette de l'attribut de données affichée dans le tableau popup.

	e.	*Prefix (optionnel)* : Vous pouvez spécifier un préfixe qui sera affiché devant la valeur/catégorie de l'attribut de données.
	Notez que cela sera affiché après l'étiquette de propriété.

	f.	*Suffix (optionnel)* : Vous pouvez spécifier un suffixe qui sera affiché après la valeur/catégorie de l'attribut de données (ex. unités).

	g.	Cliquez sur l'icône ![](images/icons/delete.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} pour supprimer une entrée Interaction config.

	![](images/en/image28.png)

	![](images/en/image29.png)

5.	Spécifiez les niveaux de zoom pour vos tuiles vectorielles. La plage de niveau de zoom par défaut est définie de 0 à 20. Vous pouvez optionnellement spécifier les niveaux de zoom pour la couche si les tuiles vectorielles ne sont visibles qu'à une résolution plus petite/plus grande. Notez qu'UNBL prend en charge un niveau de zoom maximum de 20 pour les tuiles vectorielles.

6.	Spécifiez le style de légende pour votre couche de tuiles vectorielles dans la section « Legend Config ». Dans cette section (tous les champs sont obligatoires sauf indication contraire) :

	a.	En cliquant sur « ADD ADDITIONAL STYLING », vous pouvez spécifier n'importe quel nombre d'entrées de style de couche pour correspondre aux catégories de données/plage de valeurs dans votre couche de tuiles vectorielles. Chaque entrée de style de couche doit définir les propriétés suivantes :

	- *Name* – le nom de l'entrée de style dans la légende de la couche sur la carte.

	- *Color* – la couleur associée au nom spécifié dans la légende de la couche. Vous pouvez sélectionner une couleur en utilisant le sélecteur de couleur, ou en spécifiant une valeur de code couleur RGBA ou Hex.

	Vous pouvez également choisir optionnellement si l'étiquette de nom d'une entrée de style est masquée dans la légende de la couche sur la carte en cliquant sur l'icône ![](images/icons/hide.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} à côté de l'entrée de style. Pour les données catégorielles, les entrées de style de légende de couche doivent représenter les catégories discrètes et leur style de couleur associé que vous avez spécifié dans la section « Render layers ». Pour les données continues, les entrées de style de légende doivent représenter la plage de valeurs et leur dégradé de couleurs associé que vous avez spécifié dans la section « Render layers ».

	![](images/en/image30.png)

	![](images/en/image31.png)

7.	Une fois que toutes les métadonnées et propriétés de configuration ont été spécifiées, le bouton « SAVE AND VIEW DETAILS » s'allumera en bleu, à condition que toutes les informations saisies soient valides. Cliquez sur ce bouton pour configurer votre couche de tuiles vectorielles dans votre espace de travail. Voir [« Comment publier ma couche et la partager avec des utilisateurs externes ? »](#comment-publier-ma-couche-et-la-partager-avec-des-utilisateurs-externes) et [« Comment modifier mes couches ajoutées ? »](#comment-modifier-mes-couches-ajoutees) pour les étapes suivantes.

## Comment publier ma couche et la partager avec des utilisateurs externes ?

Pour rendre l'une de vos couches ajoutées découvrable et visible pour tous les utilisateurs de votre espace de travail (voir [« Comment visualiser les jeux de données dans mon espace de travail ? »](2_viewing.fr.md#comment-visualiser-les-jeux-de-donnees-dans-mon-espace-de-travail)), ainsi que rendre optionnellement votre couche visible pour les utilisateurs en dehors de votre espace de travail, effectuez les étapes suivantes :

1.	Naviguez vers la page de modification de couche pour la couche de votre choix. Lors de l'ajout d'une couche à votre espace de travail, vous serez automatiquement amené à cette page. Alternativement, cliquez sur le bouton ![](images/icons/edit.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} dans la liste des couches disponible après avoir navigué vers la page « Layers » dans votre interface d'administration.

	![](images/en/image32.png)

2.	Pour que votre jeu de données soit accessible dans la vue cartographique UNBL, vous devez publier le jeu de données en cliquant sur le bouton bascule « Published ». Les jeux de données non publiés restent dans l'interface d'administration jusqu'à ce que vous soyez prêt à les publier dans la vue cartographique UNBL.

3.	Si votre jeu de données est publié, un bouton bascule apparaîtra avec une option pour « Allow external access via link ». C'est une bascule optionnelle qui, si activée, rend votre couche accessible à quiconque avec l'URL de la vue cartographique, même les utilisateurs en dehors de votre espace de travail. Pour partager l'URL de votre couche, copiez le lien qui apparaît ou cliquez sur l'icône ![](images/icons/copy.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} pour copier automatiquement le lien dans votre presse-papiers.

4.	Cliquez sur le bouton bascule « Primary » pour marquer votre couche comme couche autonome et la rendre découvrable dans la barre de recherche « DATASETS » sur UNBL. Pour que vos couches d'espace de travail soient découvrables et visibles sur UNBL, vous devez toujours les publier et les marquer comme primaires. La seule exception pour publier une couche et ne pas la marquer comme primaire est lorsque vous créez des couches groupées (voir [« Comment créer des couches groupées ? »](#comment-creer-des-couches-groupees)).

	![](images/en/image33.png)

## Comment modifier mes couches ajoutées ?

Vous pouvez vouloir revenir et modifier vos couches ajoutées pour changer l'une des métadonnées associées, tester si votre couche se visualise sur UNBL, et modifier votre configuration de couche en conséquence si votre couche ne se visualise pas. Pour ce faire :

1.	Naviguez vers la page de modification de couche pour la couche de votre choix. Lors de l'ajout d'une couche à votre espace de travail, vous serez automatiquement amené à cette page. Alternativement, cliquez sur le bouton ![](images/icons/edit.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} dans la liste des couches disponible après avoir navigué vers la page « Layers » dans votre interface d'administration.

	![](images/en/image32.png)

2.	Pour tester si votre couche se visualise correctement dans la vue cartographique UNBL, cliquez sur le bouton « TEST LAYER » dans le coin inférieur droit de la page de modification de couche. Une coche verte apparaîtra à l'intérieur du bouton si la couche a été correctement téléchargée et/ou configurée. Sinon, une croix rouge apparaîtra avec un message d'erreur diagnostiquant le problème.

	!!!Note
		Si vous téléchargez un jeu de données régional (étendue non globale), il est possible que le test puisse signaler un échec même si la couche fonctionne, car le test peut demander des tuiles d'échantillon qui tombent en dehors de l'étendue spatiale de votre jeu de données. La meilleure pratique est de double-vérifier le diagnostic du test de couche en vérifiant manuellement si votre couche se visualise dans la vue cartographique UNBL.

	![](images/en/image34.png)

3.	Si vous voulez naviguer directement vers votre couche dans la vue cartographique UNBL, cliquez sur le bouton « VIEW ON MAP ». Si vous voulez supprimer votre couche de votre espace de travail, cliquez sur le bouton « DELETE LAYER ».

4.	Cliquez sur le bouton « EDIT » pour l'une des sections de métadonnées/configuration de couche pour modifier les informations et paramètres de cette section.

	![](images/en/image35.png)

## Comment créer des couches groupées ?

Toutes les couches que vous ajoutez à votre espace de travail UNBL peuvent être regroupées ensemble pour organiser des données multi-années ou multi-catégories. Chaque année ou catégorie est similaire à une bande raster individuelle. Les couches groupées sont créées dans une nouvelle couche séparée (appelée *couche parent* sur UNBL) des couches composantes. Par exemple, un raster d'occupation du sol couvrant trois années nécessiterait quatre couches à créer : chaque année comme sa propre couche, ainsi qu'une quatrième couche parent à partir de laquelle elles seront toutes accessibles. Dans ce cas, chaque couche individuelle d'année/catégorie doit être publiée et **non** marquée comme primaire pour être découvrable dans la vue cartographique exclusivement via une couche groupée. La couche groupée/parent est une couche d'affichage supplémentaire avec une configuration de couche fixe qui référence toutes les couches individuelles d'années/catégories. Elle est publiée et marquée comme primaire. Lorsque la couche groupée est visualisée sur UNBL, une seule légende de couche apparaît à partir de laquelle vous pouvez sélectionner l'une de vos couches composantes incluses pour être visualisée dans la vue cartographique.

!!!Note
	Si les couches individuelles d'années/catégories que vous liez via une couche groupée sont également marquées comme primaires, en plus d'être publiées, ces couches seront découvrables comme entrées individuelles dans la barre de recherche « DATASETS », dupliquant ainsi les entrées avec la couche groupée publiée.

Pour configurer une couche groupée :

1.	Publiez toutes les couches composantes à inclure dans la couche groupée, et ne les marquez **pas** comme primaires. La fonctionnalité d'URL publique fonctionne de la même manière que pour les couches autonomes (voir [« Comment publier ma couche et la partager avec des utilisateurs externes ? »](#comment-publier-ma-couche-et-la-partager-avec-des-utilisateurs-externes)).

2.	Créez une couche séparée en utilisant le bouton « CREATE NEW LAYER » dans la page « Layers » de l'interface d'administration de votre espace de travail. Ce sera votre couche groupée désignée.

3.	Entrez un titre de couche, un slug de couche, une catégorie de couche, une étiquette de recherche et une description de couche qui sont représentatifs du jeu de données représenté par votre collection de couches individuelles groupées. Notez que la description de couche pour les couches composantes est redondante – vous n'avez qu'à remplir la description de couche pour la couche groupée qui contient vos couches composantes. Pour plus d'informations sur le remplissage des métadonnées pour les couches, voir [« Quels paramètres et métadonnées dois-je remplir lors de la création d'une couche ? »](#quels-parametres-et-metadonnees-dois-je-remplir-lors-de-la-creation-dune-couche).

4.	*Layer type* : Sélectionnez « group ».

5.	*Grouped layers* : Dans le menu déroulant, sélectionnez toutes les couches composantes que vous souhaitez inclure dans votre couche groupée. Les couches disponibles pour inclusion sont toutes les couches ajoutées dans votre espace de travail.

6.	*Layer selector* : Dans le menu déroulant, sélectionnez soit « Dropdown » soit « Radio Button ». Ces options influencent la façon dont l'interface utilisateur du sélecteur de couche apparaît dans la légende de la couche groupée sur UNBL. L'option dropdown est recommandée pour les couches groupées avec plus de trois couches composantes. L'option radio button est recommandée pour les couches groupées avec trois couches composantes ou moins, ou lorsque les couches groupées représentent les mêmes données avec un style différent.

	![](images/en/image36.png)

	![](images/en/image37.png)

7.	Cliquez sur le bouton « SAVE AND VIEW DETAILS » pour ajouter la couche groupée à votre espace de travail.
