# Приложение 2: Слои данных

Слои данных, используемые для проекта комплексного пространственного планирования для поддержки реализации KMGBF.

!!! note
    Список слоев входных данных может отличаться между странами в зависимости от исходного разрешения входных данных -- по отношению к стране и размеру единицы планирования -- а также приоритетных политических целей.

## Характеристики планирования

Следующие таблицы подробно описывают все характеристики планирования, используемые в анализе ELSA, организованные по теме и цели KMGBF:

### Характеристики планирования биоразнообразия

| Название слоя | Цель KMGBF | Источник | Просмотр карты UNBL |
|---------------|------------|----------|---------------------|
| Нетронутые экосистемы | Цель 1 | Beyer et al., 2020 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=ecological-intactness-index_100) |
| Леса высокой целостности | Цель 1 | Hansen et al., 2019; Grantham et al., 2020 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=forest-landscape-integrity-index_100,forest-integrity-project-forest-structural-integrity-index-fsii_100) |
| Индекс среды обитания биоразнообразия | Цель 1 | Harwood et al., 2022 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=biodiversity-habitat-index-2000-2020-v2-30s-global-time-series_100) |
| Индекс целостности биоразнообразия | Цель 1 | Tim Newbold et al., 2016 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=UNBL.layer.biodiversity-intactness-index_100) |
| Критические коридоры связности | Цель 2 | Strassburg et al., 2020 | N/A |
| Потенциал восстановления биоразнообразия | Цель 2 | Newbold et al., 2016; UNEP-WCMC, 2020 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=species-richness_100,biodiversity-intactness-index_100) |
| Сельскохозяйственные области глобального значения для восстановления | Цель 2 | Bernardo et al., 2020 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=areas-of-global-significance-for-restoration_100) |
| Находящиеся под угрозой экосистемы для восстановления | Цель 2 | Beyer et al., 2020; Keith et al., 2022 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=19.4460586,-6.1953856,2&layers=ecological-intactness-index_42,iucn-global-ecosystem-typology-rivers-and-streams-biome-f1_100,iucn-global-ecosystem-typology-subterranean-tidal-biome-sm1_100,iucn-global-ecosystem-typology-deserts-and-semi-deserts-biome-t5_100,iucn-global-ecosystem-typology-savannas-and-grasslands-biome-t4_100,iucn-global-ecosystem-typology-supralittoral-coastal-biome-mt2_100,iucn-global-ecosystem-typology-deep-sea-floors-biome-m3_100,iucn-global-ecosystem-typology-lakes-biome-f2_100,iucn-global-ecosystem-typology-palustrine-wetlands-biome-tf1_100,iucn-global-ecosystem-typology-subterranean-freshwaters-biome-sf1_100,iucn-global-ecosystem-typology-polaralpine-cryogenic-biome-t6_100,iucn-global-ecosystem-typology-shrublands-and-shrubby-woodlands-biome-t3_100,iucn-global-ecosystem-typology-tropical-subtropical-forests-biome-t1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-freshwaters-biome-sf2_100,iucn-global-ecosystem-typology-pelagic-ocean-waters-biome-m2_100,iucn-global-ecosystem-typology-semi-confined-transitional-waters-biome-fm1_100,iucn-global-ecosystem-typology-intensive-land-use-biome-t7_100,iucn-global-ecosystem-typology-artificial-wetlands-biome-f3_100,iucn-global-ecosystem-typology-shorelines-biome-mt1_100,iucn-global-ecosystem-typology-marine-shelf-biome-m1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-voids-biome-s2_100,iucn-global-ecosystem-typology-temperate-boreal-forests-and-woodlands-biome-t2_100,iucn-global-ecosystem-typology-anthropogenic-marine-biome-m4_100,iucn-global-ecosystem-typology-anthropogenic-shorelines-biome-mt3_100,iucn-global-ecosystem-typology-brackish-tidal-biome-mft1_100,iucn-global-ecosystem-typology-subterranean-lithic-biome-s1_100) |
| Недостаточно представленные экосистемы | Цель 3 | Beyer et al., 2020; Keith et al., 2022; UNEP-WCMC & IUCN, 2022 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=18.9480406,-5.8438231,2&layers=wdpa-protected-areas_100,iucn-global-ecosystem-typology-rivers-and-streams-biome-f1_100,iucn-global-ecosystem-typology-subterranean-tidal-biome-sm1_100,iucn-global-ecosystem-typology-deserts-and-semi-deserts-biome-t5_100,iucn-global-ecosystem-typology-savannas-and-grasslands-biome-t4_100,iucn-global-ecosystem-typology-supralittoral-coastal-biome-mt2_100,iucn-global-ecosystem-typology-deep-sea-floors-biome-m3_100,iucn-global-ecosystem-typology-lakes-biome-f2_100,iucn-global-ecosystem-typology-palustrine-wetlands-biome-tf1_100,iucn-global-ecosystem-typology-subterranean-freshwaters-biome-sf1_100,iucn-global-ecosystem-typology-polaralpine-cryogenic-biome-t6_100,iucn-global-ecosystem-typology-shrublands-and-shrubby-woodlands-biome-t3_100,iucn-global-ecosystem-typology-tropical-subtropical-forests-biome-t1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-freshwaters-biome-sf2_100,iucn-global-ecosystem-typology-pelagic-ocean-waters-biome-m2_100,iucn-global-ecosystem-typology-semi-confined-transitional-waters-biome-fm1_100,iucn-global-ecosystem-typology-intensive-land-use-biome-t7_100,iucn-global-ecosystem-typology-artificial-wetlands-biome-f3_100,iucn-global-ecosystem-typology-shorelines-biome-mt1_100,iucn-global-ecosystem-typology-marine-shelf-biome-m1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-voids-biome-s2_100,iucn-global-ecosystem-typology-temperate-boreal-forests-and-woodlands-biome-t2_100,iucn-global-ecosystem-typology-anthropogenic-marine-biome-m4_100,iucn-global-ecosystem-typology-anthropogenic-shorelines-biome-mt3_100,iucn-global-ecosystem-typology-brackish-tidal-biome-mft1_100,iucn-global-ecosystem-typology-subterranean-lithic-biome-s1_100) |
| Находящиеся под угрозой экосистемы для охраны | Цель 3 | Beyer et al., 2020; Keith et al., 2022 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=19.4460586,-6.1953856,2&layers=ecological-intactness-index_42,iucn-global-ecosystem-typology-rivers-and-streams-biome-f1_100,iucn-global-ecosystem-typology-subterranean-tidal-biome-sm1_100,iucn-global-ecosystem-typology-deserts-and-semi-deserts-biome-t5_100,iucn-global-ecosystem-typology-savannas-and-grasslands-biome-t4_100,iucn-global-ecosystem-typology-supralittoral-coastal-biome-mt2_100,iucn-global-ecosystem-typology-deep-sea-floors-biome-m3_100,iucn-global-ecosystem-typology-lakes-biome-f2_100,iucn-global-ecosystem-typology-palustrine-wetlands-biome-tf1_100,iucn-global-ecosystem-typology-subterranean-freshwaters-biome-sf1_100,iucn-global-ecosystem-typology-polaralpine-cryogenic-biome-t6_100,iucn-global-ecosystem-typology-shrublands-and-shrubby-woodlands-biome-t3_100,iucn-global-ecosystem-typology-tropical-subtropical-forests-biome-t1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-freshwaters-biome-sf2_100,iucn-global-ecosystem-typology-pelagic-ocean-waters-biome-m2_100,iucn-global-ecosystem-typology-semi-confined-transitional-waters-biome-fm1_100,iucn-global-ecosystem-typology-intensive-land-use-biome-t7_100,iucn-global-ecosystem-typology-artificial-wetlands-biome-f3_100,iucn-global-ecosystem-typology-shorelines-biome-mt1_100,iucn-global-ecosystem-typology-marine-shelf-biome-m1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-voids-biome-s2_100,iucn-global-ecosystem-typology-temperate-boreal-forests-and-woodlands-biome-t2_100,iucn-global-ecosystem-typology-anthropogenic-marine-biome-m4_100,iucn-global-ecosystem-typology-anthropogenic-shorelines-biome-mt3_100,iucn-global-ecosystem-typology-brackish-tidal-biome-mft1_100,iucn-global-ecosystem-typology-subterranean-lithic-biome-s1_100) |
| Ключевые области биоразнообразия | Цель 3 | Birdlife International, 2021 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=key-biodiversity-areas-raster_100) |
| Места Альянса за нулевое вымирание | Цель 4 | Birdlife International, 2021 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=key-biodiversity-areas-raster_100) |
| Богатство находящихся под угрозой видов | Цель 4 | UNEP-WCMC, 2020 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=threatened-species-richness_100) |
| Богатство, взвешенное по редкости | Цель 4 | UNEP-WCMC, 2020 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=rarity-weighted-richness_100) |
| Риск пестицидов | Цель 7 | Tang et al., 2021 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=10.5455813,-1.3879024,2&layers=risk-of-pesticide-pollution-at-the-global-scale_100) |

### Характеристики климатического планирования

| Название слоя | Цель KMGBF | Источник | Просмотр карты UNBL |
|---------------|------------|----------|---------------------|
| Климатические убежища - Индекс устойчивости биоклиматических экосистем | Цель 8 | Harwood et al., 2022 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=bioclimatic-ecosystem-resilience-index-2000-2020-v2_100) |
| Плотность углерода биомассы | Цель 8 | García-Rangel, S. et al. В подготовке. | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=biomass-carbon-density_100) |
| Невосстановимый углерод | Цель 8 | Noon et al., 2022 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=irrecoverable-carbon_100) |
| Плотность уязвимого органического углерода почвы | Цель 8 | García-Rangel, S. et al. В подготовке. | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=25.0623917,31.0304451,1&layers=vulnerable-soil-carbon-density_100) |
| Потенциальное увеличение ОУП на пахотных землях | Цель 8 | Zomer et al., 2017 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=25.0623917,31.0304451,1&layers=increase-in-soc-on-croplands-after-20-years_100) |
| Возможности смягчения засухи | Цель 11 | Carrão et al., 2016 | N/A |
| Возможности смягчения наводнений | Цель 11 | Tellman et al., 2021; Didan & Kamel, 2015; Linke et al., 2019 | N/A |

### Характеристики планирования благополучия человека

| Название слоя | Цель KMGBF | Источник | Просмотр карты UNBL |
|---------------|------------|----------|---------------------|
| Реализованные области обеспечения чистой водой | Цель 7 | Mulligan, 2019 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=34.2547215,29.3202932,2&layers=realised-clean-water-provision_100) |
| Разрыв в урожайности сельского хозяйства | Цель 10 | Mueller et al., 2012 | N/A |
| Климатический стресс сельского хозяйства | Цель 10 | Zabel et al., 2014 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=crop-suitability-change-1981-to-2100_100) |
| Продуктивные управляемые леса | Цель 10 | Lesiv et al., 2020; Running et al., 2019 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=human-impact-on-forests_81,modis-net-primary-production-npp_100) |
| Водно-болотные угодья и объекты Рамсар | Цель 11 | Gumbricht et al., 2017; Wetlands International/Ramsar, 2022 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=ramsar-centroids_100,ramsar-boundaries_100,iucn-global-ecosystem-typology-palustrine-wetlands-biome-tf1_100,iucn-global-ecosystem-typology-artificial-wetlands-biome-f3_100,global-wetlands-tropical-and-subtropical-wetlands-distribution_100) |
| Мангровые заросли | Цель 11 | Bunting et al., 2018 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-1.1583748,-46.1500586,8&layers=gmw-mangrove-forests-parent_100) |
| Потенциальное обеспечение чистой водой | Цель 11 | Mulligan, 2019 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=potential-clean-water-provision_100) |
| Возможности озеленения городов | Цель 12 | Karra K et al., 2021; Didan & Kamel, 2015; Tuholske et al., 2021 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=esri-sentinel-2-10-meter-land-use-land-cover_100) |

## Слои закрепления и зонирования

### Ограничения закрепления

| Название слоя | Цель | Источник | Просмотр карты UNBL |
|---------------|------|----------|---------------------|
| Существующие охраняемые территории | Закрепление для зон охраны | UNEP-WCMC & IUCN, 2025 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=UNBL.layer.wdpa-protected-areas_100) |

### Ограничения зонирования

| Название слоя | Цель | Источник | Просмотр карты UNBL |
|---------------|------|----------|---------------------|
| След человека | Определение пригодности зоны действий | Williams et al., 2020 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=17.7685598,-30.6573615,1&layers=UNBL.layer.human-industrial-index-2017-2023-preview_100) |
| Управляемые леса | Определение границ зоны управления | Lesiv et al., 2020; Running et al., 2024 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=human-impact-on-forests_81,modis-net-primary-production-npp_100) |
| Сельскохозяйственные области | Исключить из зон охраны | Esri, 2024 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=17.7685598,-30.6573615,1&layers=UNBL.layer.esri-sentinel-2-10-meter-land-use-land-cover_100) |
| Пастбищные земли | Определение пригодных областей для восстановления | Parente et al., 2024 | N/A |
| Городские области | Определение возможностей озеленения городов | Esri, 2024 | [Просмотр](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=17.7685598,-30.6573615,1&layers=UNBL.layer.esri-sentinel-2-10-mer-land-use-land-cover_100) |
