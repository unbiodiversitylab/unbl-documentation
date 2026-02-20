# Folha informativa: Armazenamento de dados nacionais adicionados a espaços de trabalho no UN Biodiversity Lab

## Controle geral de acesso para o seu espaço de trabalho UNBL

**Noções básicas de espaços de trabalho seguros do UNBL**

Os espaços de trabalho do UNBL fornecem uma área de trabalho segura onde dados nacionais ou subnacionais podem ser adicionados e compartilhados com um conjunto de usuários especificados. Eles oferecem aos usuários com qualquer nível de experiência em SIG a capacidade de colaborar em projetos de dados espaciais usando seus próprios dados e locais. Os usuários não comerciais do UNBL podem [solicitar um espaço de trabalho do UNBL para](https://unbiodiversitylab.org/en/unbl-workspaces/):

- Convidar uma comunidade de usuários relevantes para colaborar e usar dados espaciais nacionais e globais;

- Conectar-se a repositórios de dados espaciais nacionais existentes, permitindo que todos os dados relevantes sejam consolidados em um local e garantindo atualizações automáticas da fonte original;

- Carregar conjuntos de dados nacionais/subnacionais e áreas de interesse;

- Etiquetar dados nacionais para identificar claramente as metas políticas ou projetos relevantes que serão usados para apoiar;

- Visualizar conjuntos de dados nacionais/subnacionais juntamente com qualquer uma das camadas de dados globais disponíveis no UNBL; e

- Calcular quaisquer métricas do UNBL usando a camada de limite nacional oficial ou camadas de limites subnacionais oficiais.

**Acesso a um espaço de trabalho seguro do UNBL**

Quando você solicitar um espaço de trabalho do UNBL, você será designado como proprietário do espaço de trabalho. Você pode atribuir funções a indivíduos ou grupos de usuários para determinar seu nível de acesso. Essas funções incluem:

- *Proprietários*: Nomeados pelo país para assumir o controle do espaço de trabalho. Os proprietários serão responsáveis por convidar e conceder acesso a outros usuários, bem como adicionar outros administradores.

- *Administradores*: Podem adicionar e gerenciar usuários, atribuir funções aos usuários como editores e visualizadores, gerenciar ativos do espaço de trabalho através da ferramenta de administração e visualizar todos os ativos do espaço de trabalho na visualização do mapa.

- *Editores*: Podem gerenciar ativos do espaço de trabalho através da ferramenta de administração e visualizar todos os ativos do espaço de trabalho na visualização do mapa. Os editores devem ter experiência no uso de software SIG para poderem carregar e editar camadas de dados.

- *Visualizadores*: Podem visualizar todos os ativos do espaço de trabalho na visualização do mapa. Os visualizadores não podem acessar a ferramenta de administração.

Nenhum usuário fora daqueles que você atribuir poderá acessar seu espaço de trabalho.

Os administradores da plataforma UNBL no PNUD e UNEP-WCMC podem criar/excluir espaços de trabalho seguros do UNBL e adicionar/remover usuários a um determinado espaço de trabalho seguro. Os administradores da plataforma UNBL só farão isso mediante solicitação expressa do proprietário de um espaço de trabalho.

## Detalhes de armazenamento de dados para camadas adicionadas ao seu espaço de trabalho UNBL

**Noções básicas de adição de uma 'camada' a um espaço de trabalho seguro no UNBL**

Os dados geoespaciais podem ser carregados e/ou vinculados dentro de um espaço de trabalho seguro do UNBL, dando assim a todos os membros do espaço de trabalho a capacidade de visualizar esses dados no UNBL sem precisar de qualquer experiência prévia em SIG.

Os espaços de trabalho do UNBL suportam o upload de dados raster geoespaciais no seguinte formato de arquivo:

- GeoTIFF (Georeferenced Tagged Image File Format)

Os espaços de trabalho do UNBL também suportam a conexão a dados geoespaciais externos através de qualquer um dos seguintes provedores de serviços de tiles externos:

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Vector Tile Services (servidos como pg_tileserv ou Martin)

Os conjuntos de dados dentro de um espaço de trabalho só são descobertos pelos membros do espaço de trabalho. No entanto, se um usuário com a função de administrador do espaço de trabalho quiser que um conjunto de dados específico dentro de seu espaço de trabalho seja descoberto por qualquer pessoa fora de seu espaço de trabalho, ele pode habilitar isso usando uma opção de URL de camada pública. Os usuários com status de administrador podem revogar essa permissão a qualquer momento.

É importante destacar que quaisquer conjuntos de dados em um espaço de trabalho do UNBL também podem ser visualizados juntamente com conjuntos de dados globais publicados na plataforma pública do UNBL.

**Armazenamento de dados para camadas carregadas (GeoTIFF)**

Os arquivos GeoTIFF carregados em espaços de trabalho do UNBL serão armazenados em um contêiner de blob de armazenamento privado seguro designado do Microsoft Azure.

- Quando os usuários excluem a camada, quaisquer arquivos correspondentes são automaticamente excluídos do armazenamento.

- O contêiner de armazenamento está hospedado no Centro de Dados da **Europa do Norte** do Azure, que fica na Irlanda.

- Os usuários não podem acessar o contêiner de armazenamento diretamente. Os usuários só podem carregar e excluir arquivos através da interface do usuário do espaço de trabalho.

**Armazenamento de dados para conjuntos de dados criados usando dados geoespaciais externos**

Os dados relacionados aos conjuntos de dados criados pelos dados geoespaciais hospedados nos seguintes serviços não são hospedados dentro do UNBL. A segurança dos dados desses conjuntos de dados pode depender do respectivo serviço externo.

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Vector Tile Services (servidos como pg_tileserv ou Martin)

## Detalhes de armazenamento de dados para locais adicionados ao seu espaço de trabalho UNBL

**Noções básicas de upload de um 'local' para um espaço de trabalho seguro no UNBL**

Os espaços de trabalho seguros do UNBL permitem que os usuários carreguem locais em um ambiente seguro. Adicionar um novo local fornece aos usuários a capacidade de utilizar todas as funcionalidades do UNBL para uma área de interesse subnacional, nacional ou transfronteiriça. Uma vez que o local tenha sido adicionado a um espaço de trabalho do UNBL, os usuários podem: (1) exibir métricas dinâmicas para esta localização; e (2) recortar qualquer camada raster da plataforma pública do UNBL (apenas dados com licença de acesso aberto) para esta localização e baixá-la para trabalho adicional em um software SIG de desktop. Adicionar um local envolve o upload de um arquivo vetorial para o UNBL.

Os espaços de trabalho do UNBL suportam o upload de locais usando os seguintes tipos de arquivos: GeoJSON (.geojson), GeoJSON Lines (.geojsonl), arquivos do Google Earth (.kml, .kmz) ou ESRI Shapefiles (.zip contendo arquivos .shp, .dbf, .shx, .prj).

**Segurança de dados para 'locais' carregados**

- Todos os arquivos que não são geojson serão convertidos em .geojson antes de serem carregados no backend do UNBL.

- Os arquivos .geojson carregados são armazenados no banco de dados Mongo do UNBL (Mongo DB).

- Quando o usuário remove o local, os dados são excluídos do Mongo DB ativo do UNBL.

- O Mongo DB do UNBL está hospedado no **Centro de Dados da Europa do Norte**, que fica na Irlanda.