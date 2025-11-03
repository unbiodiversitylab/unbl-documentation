# Anexo 2: Camadas de Dados

Camadas de dados usadas para o projeto de Planejamento Espacial Integrado para apoiar a implementação do KMGBF.

!!! note
    A lista de camadas de dados de entrada pode diferir entre países dependendo da resolução nativa dos dados de entrada -- em relação ao país e tamanho da unidade de planejamento -- bem como metas políticas prioritárias.

## Características de Planejamento

As tabelas a seguir detalham todas as características de planejamento usadas na análise ELSA, organizadas por tema e objetivo do KMGBF:

### Características de Planejamento de Biodiversidade

| Nome da Camada | Objetivo KMGBF | Fonte | Visualização do mapa UNBL |
|----------------|----------------|-------|---------------------------|
| Ecossistemas Intactos | Objetivo 1 | Beyer et al., 2020 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=ecological-intactness-index_100) |
| Florestas de Alta Integridade | Objetivo 1 | Hansen et al., 2019; Grantham et al., 2020 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=forest-landscape-integrity-index_100,forest-integrity-project-forest-structural-integrity-index-fsii_100) |
| Índice de Habitat de Biodiversidade | Objetivo 1 | Harwood et al., 2022 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=biodiversity-habitat-index-2000-2020-v2-30s-global-time-series_100) |
| Índice de Integridade da Biodiversidade | Objetivo 1 | Tim Newbold et al., 2016 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=UNBL.layer.biodiversity-intactness-index_100) |
| Corredores de Conectividade Crítica | Objetivo 2 | Strassburg et al., 2020 | N/A |
| Potencial de Restauração de Biodiversidade | Objetivo 2 | Newbold et al., 2016; UNEP-WCMC, 2020 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=species-richness_100,biodiversity-intactness-index_100) |
| Áreas Agrícolas de Importância Global para Restauração | Objetivo 2 | Bernardo et al., 2020 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=areas-of-global-significance-for-restoration_100) |
| Ecossistemas Ameaçados para Restauração | Objetivo 2 | Beyer et al., 2020; Keith et al., 2022 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=19.4460586,-6.1953856,2&layers=ecological-intactness-index_42,iucn-global-ecosystem-typology-rivers-and-streams-biome-f1_100,iucn-global-ecosystem-typology-subterranean-tidal-biome-sm1_100,iucn-global-ecosystem-typology-deserts-and-semi-deserts-biome-t5_100,iucn-global-ecosystem-typology-savannas-and-grasslands-biome-t4_100,iucn-global-ecosystem-typology-supralittoral-coastal-biome-mt2_100,iucn-global-ecosystem-typology-deep-sea-floors-biome-m3_100,iucn-global-ecosystem-typology-lakes-biome-f2_100,iucn-global-ecosystem-typology-palustrine-wetlands-biome-tf1_100,iucn-global-ecosystem-typology-subterranean-freshwaters-biome-sf1_100,iucn-global-ecosystem-typology-polaralpine-cryogenic-biome-t6_100,iucn-global-ecosystem-typology-shrublands-and-shrubby-woodlands-biome-t3_100,iucn-global-ecosystem-typology-tropical-subtropical-forests-biome-t1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-freshwaters-biome-sf2_100,iucn-global-ecosystem-typology-pelagic-ocean-waters-biome-m2_100,iucn-global-ecosystem-typology-semi-confined-transitional-waters-biome-fm1_100,iucn-global-ecosystem-typology-intensive-land-use-biome-t7_100,iucn-global-ecosystem-typology-artificial-wetlands-biome-f3_100,iucn-global-ecosystem-typology-shorelines-biome-mt1_100,iucn-global-ecosystem-typology-marine-shelf-biome-m1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-voids-biome-s2_100,iucn-global-ecosystem-typology-temperate-boreal-forests-and-woodlands-biome-t2_100,iucn-global-ecosystem-typology-anthropogenic-marine-biome-m4_100,iucn-global-ecosystem-typology-anthropogenic-shorelines-biome-mt3_100,iucn-global-ecosystem-typology-brackish-tidal-biome-mft1_100,iucn-global-ecosystem-typology-subterranean-lithic-biome-s1_100) |
| Ecossistemas Sub-representados | Objetivo 3 | Beyer et al., 2020; Keith et al., 2022; UNEP-WCMC & IUCN, 2022 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=18.9480406,-5.8438231,2&layers=wdpa-protected-areas_100,iucn-global-ecosystem-typology-rivers-and-streams-biome-f1_100,iucn-global-ecosystem-typology-subterranean-tidal-biome-sm1_100,iucn-global-ecosystem-typology-deserts-and-semi-deserts-biome-t5_100,iucn-global-ecosystem-typology-savannas-and-grasslands-biome-t4_100,iucn-global-ecosystem-typology-supralittoral-coastal-biome-mt2_100,iucn-global-ecosystem-typology-deep-sea-floors-biome-m3_100,iucn-global-ecosystem-typology-lakes-biome-f2_100,iucn-global-ecosystem-typology-palustrine-wetlands-biome-tf1_100,iucn-global-ecosystem-typology-subterranean-freshwaters-biome-sf1_100,iucn-global-ecosystem-typology-polaralpine-cryogenic-biome-t6_100,iucn-global-ecosystem-typology-shrublands-and-shrubby-woodlands-biome-t3_100,iucn-global-ecosystem-typology-tropical-subtropical-forests-biome-t1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-freshwaters-biome-sf2_100,iucn-global-ecosystem-typology-pelagic-ocean-waters-biome-m2_100,iucn-global-ecosystem-typology-semi-confined-transitional-waters-biome-fm1_100,iucn-global-ecosystem-typology-intensive-land-use-biome-t7_100,iucn-global-ecosystem-typology-artificial-wetlands-biome-f3_100,iucn-global-ecosystem-typology-shorelines-biome-mt1_100,iucn-global-ecosystem-typology-marine-shelf-biome-m1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-voids-biome-s2_100,iucn-global-ecosystem-typology-temperate-boreal-forests-and-woodlands-biome-t2_100,iucn-global-ecosystem-typology-anthropogenic-marine-biome-m4_100,iucn-global-ecosystem-typology-anthropogenic-shorelines-biome-mt3_100,iucn-global-ecosystem-typology-brackish-tidal-biome-mft1_100,iucn-global-ecosystem-typology-subterranean-lithic-biome-s1_100) |
| Ecossistemas Ameaçados para Proteção | Objetivo 3 | Beyer et al., 2020; Keith et al., 2022 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=19.4460586,-6.1953856,2&layers=ecological-intactness-index_42,iucn-global-ecosystem-typology-rivers-and-streams-biome-f1_100,iucn-global-ecosystem-typology-subterranean-tidal-biome-sm1_100,iucn-global-ecosystem-typology-deserts-and-semi-deserts-biome-t5_100,iucn-global-ecosystem-typology-savannas-and-grasslands-biome-t4_100,iucn-global-ecosystem-typology-supralittoral-coastal-biome-mt2_100,iucn-global-ecosystem-typology-deep-sea-floors-biome-m3_100,iucn-global-ecosystem-typology-lakes-biome-f2_100,iucn-global-ecosystem-typology-palustrine-wetlands-biome-tf1_100,iucn-global-ecosystem-typology-subterranean-freshwaters-biome-sf1_100,iucn-global-ecosystem-typology-polaralpine-cryogenic-biome-t6_100,iucn-global-ecosystem-typology-shrublands-and-shrubby-woodlands-biome-t3_100,iucn-global-ecosystem-typology-tropical-subtropical-forests-biome-t1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-freshwaters-biome-sf2_100,iucn-global-ecosystem-typology-pelagic-ocean-waters-biome-m2_100,iucn-global-ecosystem-typology-semi-confined-transitional-waters-biome-fm1_100,iucn-global-ecosystem-typology-intensive-land-use-biome-t7_100,iucn-global-ecosystem-typology-artificial-wetlands-biome-f3_100,iucn-global-ecosystem-typology-shorelines-biome-mt1_100,iucn-global-ecosystem-typology-marine-shelf-biome-m1_100,iucn-global-ecosystem-typology-anthropogenic-subterranean-voids-biome-s2_100,iucn-global-ecosystem-typology-temperate-boreal-forests-and-woodlands-biome-t2_100,iucn-global-ecosystem-typology-anthropogenic-marine-biome-m4_100,iucn-global-ecosystem-typology-anthropogenic-shorelines-biome-mt3_100,iucn-global-ecosystem-typology-brackish-tidal-biome-mft1_100,iucn-global-ecosystem-typology-subterranean-lithic-biome-s1_100) |
| Áreas-Chave de Biodiversidade | Objetivo 3 | Birdlife International, 2021 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=key-biodiversity-areas-raster_100) |
| Sites da Aliança para Extinção Zero | Objetivo 4 | Birdlife International, 2021 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=key-biodiversity-areas-raster_100) |
| Riqueza de Espécies Ameaçadas | Objetivo 4 | UNEP-WCMC, 2020 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=threatened-species-richness_100) |
| Riqueza Ponderada por Raridade | Objetivo 4 | UNEP-WCMC, 2020 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=rarity-weighted-richness_100) |
| Risco de Pesticidas | Objetivo 7 | Tang et al., 2021 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=10.5455813,-1.3879024,2&layers=risk-of-pesticide-pollution-at-the-global-scale_100) |

### Características de Planejamento Climático

| Nome da Camada | Objetivo KMGBF | Fonte | Visualização do mapa UNBL |
|----------------|----------------|-------|---------------------------|
| Refúgios Climáticos - Índice de Resiliência de Ecossistemas Bioclimáticos | Objetivo 8 | Harwood et al., 2022 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=bioclimatic-ecosystem-resilience-index-2000-2020-v2_100) |
| Densidade de Carbono de Biomassa | Objetivo 8 | García-Rangel, S. et al. Em preparação. | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=biomass-carbon-density_100) |
| Carbono Irrecuperável | Objetivo 8 | Noon et al., 2022 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=irrecoverable-carbon_100) |
| Densidade de Carbono Orgânico do Solo Vulnerável | Objetivo 8 | García-Rangel, S. et al. Em preparação. | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=25.0623917,31.0304451,1&layers=vulnerable-soil-carbon-density_100) |
| Aumento Potencial de COS em Terras Cultivadas | Objetivo 8 | Zomer et al., 2017 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=25.0623917,31.0304451,1&layers=increase-in-soc-on-croplands-after-20-years_100) |
| Oportunidades de Redução de Secas | Objetivo 11 | Carrão et al., 2016 | N/A |
| Oportunidades de Redução de Inundações | Objetivo 11 | Tellman et al., 2021; Didan & Kamel, 2015; Linke et al., 2019 | N/A |

### Características de Planejamento de Bem-estar Humano

| Nome da Camada | Objetivo KMGBF | Fonte | Visualização do mapa UNBL |
|----------------|----------------|-------|---------------------------|
| Áreas de Fornecimento de Água Limpa Realizado | Objetivo 7 | Mulligan, 2019 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=34.2547215,29.3202932,2&layers=realised-clean-water-provision_100) |
| Lacuna de Rendimento Agrícola | Objetivo 10 | Mueller et al., 2012 | N/A |
| Estresse Climático Agrícola | Objetivo 10 | Zabel et al., 2014 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=crop-suitability-change-1981-to-2100_100) |
| Florestas Gerenciadas Produtivas | Objetivo 10 | Lesiv et al., 2020; Running et al., 2019 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=human-impact-on-forests_81,modis-net-primary-production-npp_100) |
| Zonas Úmidas e Sites Ramsar | Objetivo 11 | Gumbricht et al., 2017; Wetlands International/Ramsar, 2022 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=ramsar-centroids_100,ramsar-boundaries_100,iucn-global-ecosystem-typology-palustrine-wetlands-biome-tf1_100,iucn-global-ecosystem-typology-artificial-wetlands-biome-f3_100,global-wetlands-tropical-and-subtropical-wetlands-distribution_100) |
| Manguezais | Objetivo 11 | Bunting et al., 2018 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-1.1583748,-46.1500586,8&layers=gmw-mangrove-forests-parent_100) |
| Fornecimento Potencial de Água Limpa | Objetivo 11 | Mulligan, 2019 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=potential-clean-water-provision_100) |
| Oportunidades de Reverdecimento Urbano | Objetivo 12 | Karra K et al., 2021; Didan & Kamel, 2015; Tuholske et al., 2021 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=esri-sentinel-2-10-meter-land-use-land-cover_100) |

## Camadas de Bloqueio e Zoneamento

### Restrições de Bloqueio

| Nome da Camada | Propósito | Fonte | Visualização do mapa UNBL |
|----------------|-----------|-------|---------------------------|
| Áreas Protegidas Existentes | Bloqueio para zonas de proteção | UNEP-WCMC & IUCN, 2025 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=20,0,2&layers=UNBL.layer.wdpa-protected-areas_100) |

### Restrições de Zoneamento

| Nome da Camada | Propósito | Fonte | Visualização do mapa UNBL |
|----------------|-----------|-------|---------------------------|
| Pegada Humana | Determinar elegibilidade da zona de ação | Williams et al., 2020 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=17.7685598,-30.6573615,1&layers=UNBL.layer.human-industrial-index-2017-2023-preview_100) |
| Florestas Gerenciadas | Definir limites da zona de gestão | Lesiv et al., 2020; Running et al., 2024 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=-4.2646553,-13.2191915,2&layers=human-impact-on-forests_81,modis-net-primary-production-npp_100) |
| Áreas agrícolas | Excluir de zonas de proteção | Esri, 2024 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=17.7685598,-30.6573615,1&layers=UNBL.layer.esri-sentinel-2-10-meter-land-use-land-cover_100) |
| Pastagens | Definir áreas elegíveis para restauração | Parente et al., 2024 | N/A |
| Áreas urbanas | Definir oportunidades de reverdecimento urbano | Esri, 2024 | [Ver](https://map.unbiodiversitylab.org/earth?basemap=grayscale&coordinates=17.7685598,-30.6573615,1&layers=UNBL.layer.esri-sentinel-2-10-mer-land-use-land-cover_100) |
