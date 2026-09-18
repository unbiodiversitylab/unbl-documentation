# Annexe 3 : Journal des modifications des couches de données

Cette page recense les modifications apportées aux **couches de données par défaut** utilisées par l'Outil de Planification Spatiale Intégrée ELSA. Les couches de données par défaut sont les caractéristiques de planification, les restrictions de verrouillage (lock-in) et les contraintes de zonage que l'outil ELSA fournit pour une nouvelle analyse. L'ensemble actuel est présenté dans l'[Annexe 2 - Couches de données](13_annex2.md).

Les couches de données évoluent au fil du temps : les jeux de données sources sont mis à jour par les institutions qui les produisent, de meilleurs jeux de données deviennent disponibles et la manière dont les données sont préparées pour ELSA évolue. Ce journal des modifications permet aux utilisateurs de savoir quelles couches ont changé, quand et pourquoi, afin que les résultats produits à différentes dates puissent être comparés, interprétés et cités correctement.

!!! note
    Les modifications répertoriées ici s'appliquent aux **nouvelles analyses** créées après la date de la modification. Les analyses déjà exécutées conservent les couches de données avec lesquelles elles ont été exécutées et leurs résultats ne sont pas recalculés. Pour utiliser des couches mises à jour, créez une nouvelle analyse.

## Comment lire ce journal des modifications

Chaque entrée décrit une modification apportée à une couche de données par défaut, selon l'un des types de modification suivants.

| Type de modification | Signification |
|----------------------|---------------|
| Ajoutée | Une nouvelle couche par défaut a été introduite. |
| Mise à jour | Le même jeu de données a été remplacé par une version ou une édition plus récente provenant de la même source. |
| Remplacée | La couche a été remplacée par un jeu de données différent, de la même source ou d'une autre source. |
| Retraitée | Le jeu de données sous-jacent n'a pas changé, mais la manière dont il est préparé pour ELSA a changé (par exemple, rééchantillonnage, remise à l'échelle ou masquage). |
| Renommée | Seul le nom de la couche affiché dans l'outil a changé ; les données sous-jacentes sont identiques. |
| Supprimée | La couche n'est plus utilisée par défaut. |

## Modifications prévues

Modifications attendues mais pas encore appliquées. Les dates sont indicatives et peuvent changer.

| Date prévue | Couche | Type de modification | Description | Statut |
|-------------|--------|----------------------|-------------|--------|
| *À confirmer* | *À confirmer* | *À confirmer* | *À confirmer* | *En cours d'examen* |

## Historique des modifications {#change-history}

Les modifications sont présentées de la plus récente à la plus ancienne.

<!--
MODÈLE D'ENTRÉE — copiez le bloc ci-dessous pour ajouter une nouvelle entrée
datée, et traduisez-la dans les versions en, es, pt et ru de cette page.

### AAAA-MM-JJ

| Couche | Type de modification | Source précédente | Nouvelle source | Motif de la modification |
|--------|----------------------|-------------------|-----------------|--------------------------|
| Nom de la couche | Mise à jour | Auteur et al., ANNÉE | Auteur et al., ANNÉE | Brève explication. |

**Effet sur les analyses :** Comment cette modification affecte les résultats d'ELSA
(par exemple, quelles cibles du KMGBF ou zones d'action sont concernées).
-->

### AAAA-MM-JJ

| Couche | Type de modification | Source précédente | Nouvelle source | Motif de la modification |
|--------|----------------------|-------------------|-----------------|--------------------------|
| *Nom de la couche* | *Ajoutée / Mise à jour / Remplacée / Retraitée / Renommée / Supprimée* | *Auteur, année, ou sans objet* | *Auteur, année, ou sans objet* | *Brève explication de la raison du changement de la couche.* |

**Effet sur les analyses :** *Décrivez comment cette modification affecte les résultats d'ELSA, par exemple quelles cibles du KMGBF ou zones d'action sont concernées.*

## Modifications effectuées avant ce journal

Les modifications apportées aux couches de données par défaut avant la création de ce journal sont en cours de compilation. Elles seront ajoutées à l'[Historique des modifications](#change-history) ci-dessus au fur et à mesure de leur confirmation.

## Questions concernant une couche spécifique

Pour toute question sur une couche de données particulière, sa source ou la façon dont une modification affecte une analyse existante, consultez [Assistance et Contact](11_support.md).
