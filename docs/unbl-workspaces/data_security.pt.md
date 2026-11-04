---
source_rev: 53460b803b028ef12fcc7414d7ca32889e3a1010
translation_status: machine
---

# Folha informativa: Armazenamento de dados nacionais adicionados a espaços de trabalho no UN Biodiversity Lab

## Controlo geral de acesso ao seu espaço de trabalho UNBL

**Noções básicas dos espaços de trabalho seguros do UNBL**

Os espaços de trabalho do UNBL fornecem uma área de trabalho segura onde dados nacionais ou subnacionais podem ser adicionados e partilhados com um conjunto de utilizadores especificados. Oferecem a utilizadores com qualquer nível de experiência em SIG a capacidade de colaborar em projetos de dados espaciais com os seus próprios dados e locais. Os utilizadores não comerciais do UNBL podem [solicitar um espaço de trabalho do UNBL para](https://unbiodiversitylab.org/en/unbl-workspaces/):

- Convidar uma comunidade de utilizadores relevantes para colaborar e usar dados espaciais nacionais e globais;

- Ligar-se a repositórios de dados espaciais nacionais existentes, permitindo que todos os dados relevantes sejam consolidados num único local e garantindo atualizações automáticas a partir da fonte original;

- Carregar conjuntos de dados nacionais/subnacionais e áreas de interesse;

- Etiquetar dados nacionais para identificar claramente as metas políticas ou os projetos relevantes que esses dados irão apoiar;

- Visualizar conjuntos de dados nacionais/subnacionais juntamente com qualquer uma das camadas de dados globais disponíveis no UNBL; e

- Calcular quaisquer métricas do UNBL com a camada oficial de limites nacionais ou camadas oficiais de limites subnacionais.

**Acesso a um espaço de trabalho seguro do UNBL**

Quando solicitar um espaço de trabalho do UNBL, será designado como proprietário do espaço de trabalho. Pode atribuir funções a indivíduos ou grupos de utilizadores para determinar o respetivo nível de acesso. Essas funções incluem:

- *Proprietários*: Nomeados pelo país para assumir o controlo do espaço de trabalho. Os proprietários serão responsáveis por convidar outros utilizadores e conceder-lhes acesso, bem como por adicionar outros administradores.

- *Administradores*: Podem adicionar e gerir utilizadores, atribuir funções aos utilizadores como editores e visualizadores, gerir os recursos do espaço de trabalho através da ferramenta de administração e visualizar todos os recursos do espaço de trabalho na vista do mapa.

- *Editores*: Podem gerir os recursos do espaço de trabalho através da ferramenta de administração e visualizar todos os recursos do espaço de trabalho na vista do mapa. Os editores devem ter experiência na utilização de software SIG para poderem carregar e editar camadas de dados.

- *Visualizadores*: Podem visualizar todos os recursos do espaço de trabalho na vista do mapa. Os visualizadores não podem aceder à ferramenta de administração.

Nenhum utilizador além daqueles que atribuir poderá aceder ao seu espaço de trabalho.

Os administradores da plataforma UNBL no PNUD e no UNEP-WCMC podem criar/eliminar espaços de trabalho seguros do UNBL e adicionar/remover utilizadores de um determinado espaço de trabalho seguro. Os administradores da plataforma UNBL só o farão a pedido expresso do proprietário de um espaço de trabalho.

## Detalhes de armazenamento de dados para camadas adicionadas ao seu espaço de trabalho UNBL

**Noções básicas sobre a adição de uma 'camada' a um espaço de trabalho seguro no UNBL**

Os dados geoespaciais podem ser carregados e/ou ligados dentro de um espaço de trabalho seguro do UNBL, dando assim a todos os membros do espaço de trabalho a capacidade de visualizar esses dados no UNBL sem precisarem de qualquer experiência prévia em SIG.

Os espaços de trabalho do UNBL suportam o carregamento de dados raster geoespaciais no seguinte formato de ficheiro:

- GeoTIFF (Georeferenced Tagged Image File Format)

Os espaços de trabalho do UNBL também suportam a ligação a dados geoespaciais externos através de qualquer um dos seguintes fornecedores de serviços de tiles externos:

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Vector Tile Services (servidos como pg_tileserv ou Martin)

Os conjuntos de dados dentro de um espaço de trabalho só podem ser encontrados pelos membros do espaço de trabalho. No entanto, se um utilizador com a função de administrador do espaço de trabalho quiser que um determinado conjunto de dados do seu espaço de trabalho possa ser encontrado por qualquer pessoa fora do espaço de trabalho, pode ativar esta possibilidade através de uma opção de URL de camada pública. Os utilizadores com estatuto de administrador podem revogar essa permissão a qualquer momento.

É importante referir que quaisquer conjuntos de dados num espaço de trabalho do UNBL também podem ser visualizados juntamente com os conjuntos de dados globais publicados na plataforma pública do UNBL.

**Armazenamento de dados para camadas carregadas (GeoTIFF)**

Os ficheiros GeoTIFF carregados em espaços de trabalho do UNBL serão armazenados num contentor de blobs de armazenamento privado e seguro designado do Microsoft Azure.

- Quando os utilizadores eliminam a camada, quaisquer ficheiros correspondentes são automaticamente eliminados do armazenamento.

- O contentor de armazenamento está alojado no Centro de Dados do **Norte da Europa** do Azure, que fica na Irlanda.

- Os utilizadores não podem aceder diretamente ao contentor de armazenamento. Os utilizadores só podem carregar e eliminar ficheiros através da interface de utilizador do espaço de trabalho.

**Armazenamento de dados para conjuntos de dados criados com dados geoespaciais externos**

Os dados relativos aos conjuntos de dados criados a partir de dados geoespaciais alojados nos seguintes serviços não são alojados no UNBL. A segurança dos dados destes conjuntos de dados pode depender do respetivo serviço externo.

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Vector Tile Services (servidos como pg_tileserv ou Martin)

## Detalhes de armazenamento de dados para locais adicionados ao seu espaço de trabalho UNBL

**Noções básicas sobre o carregamento de um 'local' para um espaço de trabalho seguro no UNBL**

Os espaços de trabalho seguros do UNBL permitem que os utilizadores carreguem locais num ambiente seguro. Adicionar um novo local dá aos utilizadores a capacidade de utilizar todas as funcionalidades do UNBL para uma área de interesse subnacional, nacional ou transfronteiriça. Depois de o local ter sido adicionado a um espaço de trabalho do UNBL, os utilizadores podem: (1) exibir métricas dinâmicas para esta localização; e (2) recortar qualquer camada raster da plataforma pública do UNBL (apenas dados com licença de acesso aberto) para esta localização e descarregá-la para trabalho adicional num software SIG de desktop. Adicionar um local implica carregar um ficheiro vetorial para o UNBL.

Os espaços de trabalho do UNBL suportam o carregamento de locais nos seguintes tipos de ficheiro: GeoJSON (.geojson), GeoJSON Lines (.geojsonl), ficheiros do Google Earth (.kml, .kmz) ou ESRI Shapefiles (.zip que contenha ficheiros .shp, .dbf, .shx, .prj).

**Segurança de dados para 'locais' carregados**

- Todos os ficheiros que não sejam geojson serão convertidos em .geojson antes de serem carregados para o backend do UNBL.

- Os ficheiros .geojson carregados são armazenados na base de dados Mongo do UNBL (Mongo DB).

- Quando o utilizador remove o local, os dados são eliminados da Mongo DB ativa do UNBL.

- A Mongo DB do UNBL está alojada no **Centro de Dados do Norte da Europa**, que fica na Irlanda.
