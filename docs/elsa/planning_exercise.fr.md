---
source_rev: bb4fcb9fbf090a2f79f72b5f2e2d6126feaaf8ef
translation_status: machine
---

# Essayez d'abord : un exercice pratique de planification

L'outil ELSA vous demande de définir des objectifs basés sur les zones, des pondérations et un facteur de pénalité de limites. Un ordinateur détermine ensuite où chaque action doit être placée. Sur cette page, vous pouvez prendre vous-même le même type de décision, sur une petite grille, avant d'utiliser l'outil avec des données nationales. Cela prend environ dix minutes. Rien de ce que vous faites ici n'est enregistré ni envoyé.

!!! note "Crédits"
    Cet exercice est adapté du *Conservation Planning Exercise* (exercice de planification de la conservation) créé par Trevor Wiens, Apropos Information Systems Inc., et hébergé par PacMARA et The University of Queensland sur [marxansolutions.org](https://marxansolutions.org/getting-started/). Les données de cette page sont fictives et servent uniquement à l'entraînement.

<!-- Lorsque les autorisations listées dans elsa-planning-exercise/PERMISSIONS.md auront été reçues, ajouter « Utilisé et adapté avec autorisation. » aux crédits, dans les cinq langues. -->

## Deux façons de poser la question de planification {#two-questions}

Les outils de planification spatiale répondent à l'une de ces deux questions :

| | Coût le plus bas | Valeur maximale dans la superficie disponible |
|---|---|---|
| **La question** | Quel est l'ensemble de lieux le moins coûteux qui atteint toutes les cibles ? | Avec une superficie fixe pour chaque action, où pouvons-nous obtenir le plus de valeur ? |
| **Vous définissez** | Une cible pour chaque caractéristique de planification | Un objectif basé sur les zones pour chaque action, et une pondération pour chaque caractéristique de planification |
| **Utilisé par** | Marxan, et l'objectif d'ensemble minimal (*minimum set*) de prioritizr | L'outil ELSA (l'objectif d'utilité maximale (*maximum utility*) de prioritizr) |

Le premier onglet ci-dessous présente le problème classique avec lequel de nombreux planificateurs apprennent. Le second est une version réduite du problème que l'outil ELSA résout pour votre pays.

## L'exercice {#exercise}

=== "Coût le plus bas"

    Chaque carré est une [unité de planification](12_annex1.md#planning-units). Chaque unité de planification a un coût et contient une certaine quantité de trois caractéristiques de planification : A, B et C.

    1. Sous **Afficher sur la carte**, choisissez ce que la grille affiche : le coût, ou la quantité d'une caractéristique.
    2. Cliquez sur des unités de planification pour les sélectionner, ou utilisez les touches fléchées et la barre d'espace. Cliquez à nouveau sur une unité de planification sélectionnée pour la retirer.
    3. Atteignez toutes les cibles du tableau, avec le score le plus bas possible.
    4. Choisissez **Laisser l'ordinateur chercher** puis **Afficher la meilleure solution** pour comparer votre solution avec celle de l'ordinateur.
    5. Modifiez le **Facteur de pénalité de limites (BPF)** et réessayez. Un BPF plus élevé favorise les groupes compacts d'unités de planification.

    <div class="planning-exercise" data-mode="mincost" markdown>
    *Cet exercice nécessite JavaScript. S'il ne s'affiche pas, rechargez la page ou essayez un autre navigateur.*
    </div>

    Le score additionne trois éléments. Plus il est bas, mieux c'est.

    - **Coût** : le coût total des unités de planification sélectionnées.
    - **Pénalité de limites** : le BPF multiplié par la longueur du contour extérieur de votre sélection. Chaque côté d'une unité de planification mesure 10. Les côtés communs à deux unités de planification sélectionnées ne comptent pas.
    - **Pénalité de déficit** : 100 pour chaque unité manquante d'une cible non atteinte.

    !!! tip "Ce que cela signifie dans ELSA"
        L'outil ELSA utilise le même [facteur de pénalité de limites](05_editing_analysis.md#fig-adjust-bpf) pour rendre les zones d'action plus compactes. Mais il ne cherche pas le coût le plus bas. Le second onglet montre ce qu'il fait à la place.

=== "Comme dans ELSA"

    Ici, chaque unité de planification peut recevoir l'une de trois actions : **Protéger**, **Restaurer** ou **Gérer**. Chaque action a un [objectif basé sur les zones](12_annex1.md#area-based-target) : le nombre maximal d'unités de planification qu'elle peut couvrir. Votre but est d'obtenir la plus grande valeur pondérée possible pour quatre caractéristiques de planification : la biodiversité, le stockage du carbone, l'approvisionnement en eau et les moyens de subsistance.

    1. Choisissez une action sous **Action à appliquer**, puis cliquez sur des unités de planification pour leur attribuer cette action. Cliquez à nouveau sur une unité de planification pour retirer son action.
    2. Sous **Afficher sur la carte**, choisissez **Type de terres**. Chaque action n'est autorisée que sur certains types de terres, comme les [zones d'action](12_annex1.md#action-zones) dans ELSA. Aucune action n'est autorisée dans les zones urbaines, et Protéger n'est autorisé que sur les terres intactes ou dégradées.
    3. L'aire protégée existante (contour en pointillés) est [verrouillée](12_annex1.md#lock-in-features) pour Protéger. Vous pouvez désactiver le verrouillage.
    4. Choisissez **Carte de chaleur (valeur pondérée)** pour voir où la valeur pondérée est la plus élevée, comme les [cartes de chaleur](07_viewing_heatmaps.md) dans ELSA.
    5. Ouvrez **Paramètres** pour modifier les objectifs basés sur les zones et les [pondérations](12_annex1.md#weights), puis laissez l'ordinateur chercher à nouveau et observez comment sa carte change.
    6. Comparez votre carte avec la recherche de l'ordinateur et avec la meilleure solution.

    <div class="planning-exercise" data-mode="elsa" markdown>
    *Cet exercice nécessite JavaScript. S'il ne s'affiche pas, rechargez la page ou essayez un autre navigateur.*
    </div>

    Chaque action obtient une part différente de chaque caractéristique. Par exemple, Protéger obtient toute la valeur de biodiversité d'une unité de planification mais peu de sa valeur pour les moyens de subsistance, et Gérer fait l'inverse. Le score correspond à la valeur pondérée obtenue moins la pénalité de limites. Plus il est élevé, mieux c'est.

    !!! tip "Ce que cela signifie dans ELSA"
        Chaque paramètre ici correspond à un paramètre de l'outil ELSA : objectifs basés sur les zones, verrouillage, pondérations et facteur de pénalité de limites (voir [Modification d'une analyse](05_editing_analysis.md)). L'outil ELSA résout le même type de problème pour chaque unité de planification de votre pays, avec quatre actions et beaucoup plus de caractéristiques de planification.

## Pourquoi un ordinateur s'en charge {#why-a-computer}

Une grille de 100 unités de planification peut être sélectionnée de 2^100^ façons différentes, soit environ un million de millions de millions de millions de millions. Personne ne pourrait les vérifier une par une. Dans l'outil ELSA, un pays compte des dizaines de milliers d'unités de planification.

- La **recherche par ordinateur** utilise le recuit simulé, la méthode utilisée par Marxan. Elle apporte de nombreuses petites modifications aléatoires et conserve la plupart de celles qui améliorent le score. Elle trouve rapidement de bonnes solutions, mais chaque exécution donne une solution légèrement différente, et elle ne peut pas savoir à quelle distance elle se trouve de la meilleure solution.
- La **meilleure solution** a été calculée avec prioritizr, le logiciel sur lequel repose l'outil ELSA, à l'aide d'un solveur exact. Sur une grille aussi petite, c'est la meilleure solution possible pour ces paramètres. Pour un pays entier, l'outil ELSA s'arrête lorsque sa solution se trouve à moins de 5 % de la meilleure solution possible, afin qu'une analyse prenne quelques minutes plutôt que plusieurs jours.

Lancez la recherche par ordinateur plusieurs fois et comparez ses solutions avec la meilleure solution.

## Étapes suivantes {#next-steps}

- Utilisez l'outil ELSA avec vos données nationales : consultez [Création d'une nouvelle analyse](04_creating_analysis.md) et [Modification d'une analyse](05_editing_analysis.md).
- Pour en savoir plus sur la planification systématique de la conservation, suivez le [cours en autoformation sur la planification spatiale intégrée](https://www.learningfornature.org/en/courses/integrated-spatial-planning-2).
- Retrouvez le *Conservation Planning Exercise* original et les supports de formation Marxan sur [marxansolutions.org](https://marxansolutions.org/getting-started/).
- Pour en savoir plus sur prioritizr, consultez [prioritizr.net](https://prioritizr.net).
