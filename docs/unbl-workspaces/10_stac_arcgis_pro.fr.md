---
source_rev: c3032f159853c012bf525d2ddafda22f41d814cd
translation_status: machine
---
# Accéder aux données UNBL dans ArcGIS Pro (STAC)

UN Biodiversity Lab (UNBL) publie ses ensembles de données raster au moyen d'une API STAC. Si vous êtes membre d'un espace de travail UNBL, vous pouvez connecter ArcGIS Pro à cette API, effectuer des recherches dans le catalogue et ajouter des rasters UNBL à votre carte sans les télécharger au préalable.

Cette page explique comment configurer la connexion et à quoi vous attendre des couches que vous ajoutez.

## De quoi ai-je besoin avant de commencer ?

- **Un compte UNBL rattaché à un espace de travail.** Tout le monde peut effectuer des recherches dans le catalogue, mais seuls les membres d'un espace de travail peuvent ouvrir les données elles-mêmes. Pour demander un espace de travail, consultez [Comment demander un espace de travail UNBL ?](1_basics.fr.md#comment-demander-un-espace-de-travail-unbl)
- **Un identifiant d'accès** qui indique à UNBL qui vous êtes : un jeton d'API ou une clé d'API (voir la section suivante).
- **ArcGIS Pro 3.5.3, ou 3.6 ou version ultérieure.** Les versions 3.x antérieures présentent un bogue STAC connu (Esri BUG-000164564) qui empêche le chargement des couches, avec le message *Failed to add data: Unknown error*.

!!! note
    Un identifiant d'accès est nécessaire pour tous les ensembles de données, y compris ceux indiqués comme publics. Si vous avez seulement besoin d'une copie d'un ensemble de données mondial, consultez [Comment télécharger des ensembles de données mondiaux non découpés ?](../unbl-public-platform/16_download_global_data.fr.md)

## Comment obtenir un identifiant d'accès ?

Vous pouvez utiliser l'un de ces deux identifiants :

| Identifiant | Durée de validité | Recommandé pour |
|---|---|---|
| **Clé d'API** (API key) | N'expire pas | ArcGIS Pro et autres logiciels SIG de bureau |
| **Jeton d'API** (API token) | Environ une heure | Tester la connexion une fois, ou des tâches courtes |

Nous recommandons une clé d'API pour ArcGIS Pro : vous la saisissez une seule fois et vous n'avez pas besoin de la remplacer toutes les heures.

### Pour demander une clé d'API

1. Envoyez un courriel à <support@unbiodiversitylab.org> pour demander une clé d'API STAC pour ArcGIS Pro.
2. Indiquez l'adresse électronique de votre compte UNBL et le nom de votre espace de travail.
3. Gardez la clé reçue confidentielle. Toute personne qui la détient peut ouvrir les données auxquelles votre espace de travail a accès.

### Pour obtenir un jeton d'API

1. Rendez-vous sur le STAC Browser d'UNBL à l'adresse <https://stac.unbiodiversitylab.org>.
2. Cliquez sur **Login** (Connexion) et connectez-vous avec votre compte UNBL. Si vous n'avez pas encore de compte, cliquez sur **Login**, puis sur **Sign up** (S'inscrire), et confirmez votre compte à l'aide du lien figurant dans le courriel que vous recevez.
3. Cliquez sur **API token** (jeton d'API), dans la même rangée de boutons que **Login**.
4. Dans le panneau qui s'ouvre, vérifiez que votre compte dispose d'un accès à un espace de travail. Si ce n'est pas le cas, les données ne s'ouvriront pas dans ArcGIS Pro.
5. Copiez le jeton. Le panneau indique également sa date d'expiration.

Pour plus de détails techniques, notamment l'accès depuis Python et GDAL, consultez la [page d'accès à l'API UNBL](https://stac.unbiodiversitylab.org/api-access.html) (en anglais).

## Comment connecter ArcGIS Pro au STAC d'UNBL ?

1. Dans ArcGIS Pro, dans l'onglet **Insert** (Insérer), cliquez sur **Connections** (Connexions), puis sur **STAC Connection** (Connexion STAC), puis sur **New STAC Connection** (Nouvelle connexion STAC).
2. Dans **Connection** (Connexion), saisissez `https://stac.api.unbiodiversitylab.org/`
3. Laissez **STAC API Authentication** (Authentification de l'API STAC) vide. ArcGIS Pro ne propose ici que la connexion Microsoft Azure, qu'UNBL n'utilise pas.
4. Sous **Custom Headers** (En-têtes personnalisés), ajoutez un en-tête :
    - Avec une **clé d'API** : clé `X-API-Key`, valeur : votre clé d'API.
    - Avec un **jeton d'API** : clé `Authorization`, valeur : `Bearer`, une espace, puis votre jeton (par exemple `Bearer eyJhbGci...`).
5. Laissez **Cloud Storage Connections** (Connexions au stockage cloud) vide.
6. Cliquez sur **OK** pour enregistrer la connexion.

!!! tip
    Copiez et collez votre identifiant directement dans la boîte de dialogue d'ArcGIS Pro. Un jeton d'API est très long (environ 5 700 caractères), et certains programmes, comme une fenêtre de terminal, tronquent sans avertissement un texte long lorsqu'on le colle. Un jeton tronqué produit la même erreur qu'un jeton expiré.

!!! warning
    Ne conservez qu'**une seule** connexion STAC UNBL dans ArcGIS Pro. Une ancienne copie de la connexion peut rester sélectionnée et continuer à envoyer un identifiant expiré. Si vous avez besoin d'un nouveau jeton, modifiez la connexion existante au lieu d'en créer une deuxième.

## Comment ajouter des couches UNBL à ma carte ?

1. Ouvrez le volet **Explore STAC** (Explorer STAC) et choisissez la connexion UNBL dans la liste déroulante.
2. Dans l'onglet **Parameters** (Paramètres), choisissez la collection souhaitée.
3. Cliquez sur **Select assets** (Sélectionner des ressources) à côté de la collection et cochez les ressources (fichiers) à ajouter.
4. Lancez la recherche.
5. Dans les résultats, ajoutez à la carte les éléments souhaités.

!!! note
    ArcGIS Pro fige votre choix de ressources au moment où vous lancez la recherche. Si vous modifiez les ressources, relancez la recherche.

## Combien de temps les couches restent-elles disponibles ?

Les couches ajoutées depuis le STAC d'UNBL sont **temporaires**. Chaque couche s'ouvre au moyen d'un lien sécurisé qui expire environ **deux heures** après son émission par UNBL (en pratique, entre environ 1 h 45 et 2 h 15 après l'ajout de la couche). L'utilisation d'une clé d'API ne change rien à cela.

| Tâche | Identifiant nécessaire ? |
|---|---|
| Effectuer une recherche dans le catalogue | Non |
| Ajouter un résultat de recherche à la carte | Oui |
| Réafficher une couche ajoutée il y a moins de deux heures | Non |
| Rouvrir une couche enregistrée dans un projet ArcGIS Pro | Impossible : relancez la recherche et ajoutez à nouveau l'élément |

Une fois le lien expiré, la couche ne s'affiche plus. Pour continuer à travailler, relancez la recherche et ajoutez à nouveau l'élément.

!!! tip
    Pour conserver un ensemble de données plus longtemps, téléchargez le fichier GeoTIFF tant que le lien est valide et ajoutez-le à ArcGIS Pro en tant que raster local.

## Que signifient ces messages d'erreur ?

| Message d'erreur | Cause probable | Que faire |
|---|---|---|
| `401 Invalid token` ou `401 Token expired` | Le jeton a été tronqué, mal saisi ou a expiré | Obtenez un nouveau jeton et collez-le directement dans la connexion |
| `401 Invalid API key` | La clé d'API est incorrecte ou a été désactivée | Vérifiez la valeur `X-API-Key` ou contactez <support@unbiodiversitylab.org> |
| `HTTP error code : 404` sur un chemin commençant par `/vsiaz/` | Aucun identifiant n'est parvenu à UNBL | Vérifiez l'entrée **Custom Headers** de la connexion |
| `403` sur une adresse contenant `blob.core.windows.net` | Le lien sécurisé de la couche a expiré | Relancez la recherche et ajoutez à nouveau l'élément |
| `unsupported data type` mentionnant `StacItemHref` | Une connexion ancienne ou en double est sélectionnée | Conservez une seule connexion UNBL et sélectionnez-la dans **Explore STAC** |
| `Failed to add data: Unknown error` | Un bogue connu d'ArcGIS Pro (BUG-000164564) | Passez à ArcGIS Pro 3.5.3, ou 3.6 ou version ultérieure |
| Les chemins commencent toujours par `/vsiaz/` après la connexion | Votre compte n'est rattaché à aucun espace de travail | [Demandez un espace de travail UNBL](1_basics.fr.md#comment-demander-un-espace-de-travail-unbl) ou demandez à l'administrateur de votre espace de travail de vous ajouter |

Pour tout autre problème, contactez-nous à l'adresse <support@unbiodiversitylab.org>.

## Pour en savoir plus

- [Accès à l'API UNBL](https://stac.unbiodiversitylab.org/api-access.html) (en anglais)
- [Créer une connexion STAC](https://doc.esri.com/en/arcgis-pro/latest/help/data/imagery/create-a-stac-connection.html) (Esri, en anglais)
- [Sélectionner des ressources STAC](https://pro.arcgis.com/en/pro-app/3.4/help/data/imagery/selecting-stac-assets.htm) (Esri, en anglais)
