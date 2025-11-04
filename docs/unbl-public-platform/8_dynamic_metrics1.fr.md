# Quelles métriques dynamiques sont disponibles pour mon pays/zone d'intérêt ?

UNBL offre des métriques instantanées basées sur les meilleurs ensembles de données spatiales mondiales disponibles. Ces métriques peuvent être utilisées pour rapporter sur l'état de la nature et du développement humain pour les lieux disponibles sur la plateforme publique UNBL et/ou ceux que vous avez téléchargés dans votre espace de travail (voir notre [guide d'espace de travail](../unbl-workspaces/index.md) pour plus d'informations à ce sujet). Les métriques standard disponibles incluent :

- Couverture terrestre mondiale (2022)
- Changement de couverture terrestre (1992-2022)
- Aires protégées (2025)
- Perte de couverture arborée (2001-2024)
- Activité incendiaire mensuelle (2023)
- Indice d'intégrité de la biodiversité (2015)
- Densité de carbone terrestre (2010)
- Indice de végétation amélioré (2001-2022)
- Indice industriel humain terrestre (2000, 2013)

Le Laboratoire de Biodiversité des Nations Unies offre en outre deux indicateurs phares qui sont disponibles comme indiqué dans les métadonnées d'indicateurs associées au Cadre de surveillance du Cadre mondial de la biodiversité de Kunming-Montréal ([CBD/DEC/COP/15/5](https://www.cbd.int/doc/decisions/cop-15/cop-15-dec-05-en.pdf) ; [CBD/DEC/COP/16/31](https://www.cbd.int/doc/decisions/cop-16/cop-16-dec-31-en.pdf)), qui est disponible sur le [site web des indicateurs du Cadre mondial de la biodiversité de Kunming-Montréal](https://gbf-indicators.org/) et dans [CBD/COP/16/INF/3/Rev.1](https://www.cbd.int/doc/c/ea34/8414/8c5e6797d291af15f33d6e40/cop-16-inf-03-rev1-en.pdf) :

- Agriculture durable (Indicateur phare 10.1)
- Gestion forestière durable (Indicateur phare 10.2)

Il est important de noter que huit des métriques standard peuvent être affichées pour des lieux de tout type (pays, zones administratives de toute échelle, zones géographiques, etc.), alors que les deux métriques d'indicateurs phares et la métrique des Aires protégées ne peuvent être affichées que pour des lieux à l'échelle d'un pays. Pour en savoir plus sur les ensembles de données sous-jacents à chacune de ces métriques et comment les métriques peuvent être utilisées pour le suivi et le rapportage, veuillez consulter le tableau ci-dessous.

*Tableau 1 : Informations sur les neuf métriques standard et les deux métriques d'indicateurs phares offertes sur UNBL*

| Nom | Quelle métrique cela calcule-t-il ? | Quel ensemble de données est utilisé pour calculer cette métrique ? | Comment cela peut-il être utilisé pour le suivi ? |
|------|----------------------------------|-----------------------------------------------|-------------------------------------|
| Couverture terrestre mondiale | Pourcentage de classification de couverture terrestre représenté dans le lieu. | Cette métrique est dérivée de la couche de données de couverture terrestre mondiale (ESA), à une résolution de 300m, de l'année 2022. | Cette information peut être utilisée pour suivre la classification de la couverture terrestre. |
| Changement de couverture terrestre | Montre le changement du pourcentage de chaque classification de couverture terrestre représenté dans le lieu entre 1992-2022. | Cette métrique est dérivée de l'ensemble de données de couverture terrestre mondiale (ESA), à une résolution de 300m, pour les années 1992-2022. | Montre le changement du pourcentage de la surface totale classée comme anthropique ou naturelle. |
| Aires protégées | Pourcentage de la surface terrestre et marine totale qui est protégée. | Cette métrique utilise les données de la Base de données mondiale sur les aires protégées (UICN, PNUE-WCMC). Cette métrique est mise à jour mensuellement. | La WDPA est mise à jour mensuellement et peut être utilisée pour suivre les changements dans les aires légalement protégées ou, en conjonction avec d'autres ensembles de données, suivre l'activité dans et autour des aires protégées. |
| Perte de couverture arborée | Kilomètres carrés de perte de couverture arborée par an entre 2000-2024 pour un lieu donné. | Cette métrique est dérivée de l'ensemble de données de perte de couverture arborée annuelle accumulée de Global Forest Watch (UMD), à une résolution de 30m, de l'année 2000 à 2024. | Cette information peut aider à suivre quand et où la déforestation se produit, ainsi que si elle augmente ou diminue dans votre zone d'intérêt. |
| Activité incendiaire mensuelle | Kilomètres carrés mensuels de surface brûlée entre 2001 – 2023 pour un lieu donné. | Cette métrique est dérivée du produit de données de surface brûlée NASA MODIS Version 6, à une résolution de 500m, de l'année 2001 à 2023. | L'activité incendiaire mensuelle peut être analysée pour suivre les tendances saisonnières des incendies et rapporter les augmentations ou diminutions des incendies d'origine humaine et naturelle. |
| Indice d'intégrité de la biodiversité | Histogramme montrant la distribution des données de l'Indice d'intégrité de la biodiversité dans le lieu. | Cette métrique est dérivée de la couche de données de l'Indice d'intégrité de la biodiversité (PNUE-WCMC, NHML), à une résolution de 1km, de 2015. | Cette information illustre si l'habitat est devenu plus intact ou moins intact, affectant ainsi la biodiversité sur la zone d'intérêt. Cela peut donner un aperçu de la destruction, de la fragmentation ou de la restauration de l'habitat. |
| Densité de carbone terrestre | Masse totale de carbone stockée dans le sol et la biomasse et densité de carbone moyenne dans un lieu. | Cette métrique est dérivée de la couche de données de densité de carbone terrestre (NatureMap, PNUE-WCMC), à une résolution de 300m, de l'année 2010. | Une série chronologique de cet ensemble de données permet de suivre le carbone stocké grâce aux solutions basées sur la nature (végétation et sol). |
| Indice de végétation amélioré | Changement de la productivité végétale moyenne entre 2001-2022 pour un lieu donné. | Cette métrique est dérivée de l'ensemble de données de l'Indice de végétation amélioré (EVI) (NASA MODIS), mesurant la productivité végétale cumulative annuelle de 2000 à 2022. | L'EVI peut être utilisé pour suivre la santé végétative sur une zone comme indicateur de diverses conditions anormales telles que la sécheresse et les changements d'utilisation des terres. |
| Indice industriel humain terrestre | Montre le changement de distribution des scores de l'indice industriel humain pour un lieu donné entre 2000-2013, regroupé en catégories de 'hautement intact', 'écologiquement intact', 'converti', 'hautement converti' et 'entièrement converti'. | Cette métrique est dérivée de l'Indice industriel humain terrestre (WCS, UNBC) des années 2000, 2005, 2010 et 2013. | L'Indice industriel humain terrestre peut être utilisé pour suivre l'impact du développement et de l'infrastructure humaine sur les environnements environnants et les zones d'intérêt. |
| Agriculture durable | Montre les données rapportées par les pays pour l'indicateur phare 10.1 du KMGBF relatif aux progrès vers une agriculture productive et durable. | Cette métrique affiche les données fournies par chaque pays à la FAO. | Mesure la terre sous agriculture productive et durable, exprimée en proportion de la surface agricole du pays à travers 11 sous-indicateurs. |
| Gestion forestière durable | Montre les données rapportées par les pays pour l'indicateur phare 10.2 du KMGBF relatif aux progrès vers la gestion forestière durable. | Cette métrique affiche les données fournies par chaque pays à la FAO. | Mesure les progrès vers la gestion forestière durable à travers cinq sous-indicateurs, y compris le changement annuel de la surface forestière, la biomasse aérienne dans les forêts, la proportion de surface forestière dans des aires protégées légalement établies, la proportion de surface forestière avec un plan de gestion à long terme, et la surface forestière sous un schéma de certification de gestion forestière vérifié indépendamment. |

Pour visualiser ces métriques sur le Laboratoire de Biodiversité des Nations Unies :

1.	Sélectionnez un pays ou une zone d'intérêt spécifique dans l'onglet 'PLACES'.

2.	Consultez les métriques dans le panneau de gauche. Choisissez entre une liste des neuf métriques dynamiques ou deux métriques d'indicateurs phares en cliquant sur le bouton 'METRICS' ou 'HEADLINE INDICATORS'. Notez que les métriques d'indicateurs phares et la métrique standard des Aires protégées ne peuvent être affichées que pour les lieux de type pays.

3.	Cliquez sur le bouton à bascule à côté de toute métrique spécifique si vous souhaitez visualiser cet ensemble de données sur la carte. Cliquez à nouveau sur le bouton à bascule ou sur l'icône de suppression de l'ensemble de données dans la légende pour effacer l'écran.

	![](images/en/image035.png)

4.  Cliquez sur l'icône ![](images/icons/info-icon.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} pour afficher les informations sur l'ensemble de données. Les pages d'informations fournissent une brève description des données, un article connexe à lire, des données brutes à télécharger (si disponibles gratuitement) et les spécifications de licence.

5.	Pour télécharger les données récapitulatives de la métrique au format .csv ou .json, cliquez sur l'icône de flèche ![](images/icons/download-icon.png){style="display: inline; width: 1em; height: 2em; width: 2em;"}. Vous pouvez également télécharger les données à partir des liens sources sur les pages d'informations des ensembles de données.

	![](images/en/image041.png)
