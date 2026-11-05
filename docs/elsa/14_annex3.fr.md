---
source_rev: f7ed26d551a11a56e738091eda936cbdb44f5979
translation_status: machine
---

# Annexe 3 : Journal des modifications des couches de données

Cette page recense les modifications apportées aux **couches de données par défaut** utilisées par l'Outil de Planification Spatiale Intégrée ELSA. Les couches de données par défaut sont les caractéristiques de planification, les restrictions de verrouillage (lock-in) et les contraintes de zonage que l'outil ELSA fournit pour une nouvelle analyse. L'ensemble actuel est présenté dans l'[Annexe 2 - Couches de données](13_annex2.md).

Ce journal ne couvre que ces couches mondiales par défaut. Les couches nationales ou autres couches propres à un pays qui sont ajoutées à la configuration ELSA de ce pays n'y figurent pas.

Les couches de données évoluent au fil du temps : les jeux de données sources sont mis à jour par les institutions qui les produisent, de meilleurs jeux de données deviennent disponibles et la manière dont les données sont préparées pour ELSA évolue. Ce journal des modifications permet aux utilisateurs de savoir quelles couches ont changé, quand et pourquoi, afin que les résultats produits à différentes dates puissent être comparés, interprétés et cités correctement.

!!! note
    Les modifications répertoriées ici **ne sont pas appliquées automatiquement** aux configurations de pays existantes. Les données d'entrée de chaque configuration (sa pile de données) doivent être mises à jour avant que les nouvelles analyses n'utilisent les couches modifiées. Les analyses déjà exécutées conservent les couches de données avec lesquelles elles ont été exécutées, et leurs résultats ne sont pas recalculés. Pour savoir si une configuration utilise les couches mises à jour, consultez [Assistance et Contact](11_support.md).

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

Aucune modification n'est prévue pour le moment.

<!--
MODÈLE DE MODIFICATIONS PRÉVUES : remplacez la phrase ci-dessus par ce tableau lorsqu'une modification est prévue.

| Date prévue | Couche | Type de modification | Description | Statut |
|-------------|--------|----------------------|-------------|--------|
| Mois AAAA | Nom de la couche | Mise à jour | Brève description. | En cours d'examen |
-->

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

Aucune modification n'a été enregistrée depuis la création de ce journal en novembre 2026. Les modifications antérieures ne sont pas consignées.

## Questions concernant une couche spécifique

Pour toute question sur une couche de données particulière, sa source ou la façon dont une modification affecte une analyse existante, consultez [Assistance et Contact](11_support.md).
