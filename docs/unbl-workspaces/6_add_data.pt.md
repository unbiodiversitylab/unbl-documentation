# Adicionar os seus próprios dados geoespaciais ao seu espaço de trabalho

Os espaços de trabalho UNBL suportam o carregamento de dados raster geoespaciais no seguinte formato de ficheiro:

- GeoTIFF (Formato de ficheiro de imagem etiquetado georreferenciado)

Os espaços de trabalho UNBL também suportam a ligação a dados geoespaciais externos através de qualquer um dos seguintes fornecedores de serviços de tiles externos:

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- Google Earth Engine (GEE)

- Spatiotemporal Asset Catalog (STAC)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Serviços de tiles vetoriais (servidos como pg_tileserv ou Martin)

Os dados geoespaciais podem ser carregados e/ou ligados dentro do seu espaço de trabalho, dando assim a todos os membros do seu espaço de trabalho a capacidade de ver os seus dados no UNBL sem precisar de experiência prévia em SIG. A segurança do UNBL garante que os conjuntos de dados dentro do seu espaço de trabalho são **apenas** visíveis para os membros do seu espaço de trabalho. No entanto, se quiser que os conjuntos de dados dentro do seu espaço de trabalho sejam visíveis por qualquer pessoa fora do seu espaço de trabalho, pode ativar isto usando uma opção de URL de camada pública. Apenas pessoas com acesso a este URL poderão ver a sua camada.

Importantemente, quaisquer conjuntos de dados no seu espaço de trabalho também podem ser vistos em conjunto com conjuntos de dados globais publicados na plataforma pública do UNBL.

!!!Note
	Os termos *conjunto de dados* e *camada* são usados de forma intercambiável daqui em diante. Um conjunto de dados refere-se a uma coleção de dados espaciais composta por uma ou mais camadas. No UNBL, um único carregamento ou configuração de dados geoespaciais é realizado através de *'criar uma camada'*. Múltiplas entradas de camadas podem ser combinadas e visualizadas no UNBL como um conjunto de dados. Camadas individuais também podem ser visualizadas independentemente no UNBL.

## Que parâmetros e metadados preencho ao criar uma camada?

Para começar a criar uma camada e preencher os metadados relevantes para a camada:

1.	Abra o menu suspenso 'Home' na interface de administração do seu espaço de trabalho e clique em 'Layers'.

2.	Clique no botão 'CREATE NEW LAYER'.

	![](images/en/image22.png)

3.	Na página da nova camada, preencha a seguinte informação:

	a.	*Layer title*: O nome da sua camada. Isto deve ser conciso (recomendamos que seja menos de 100 caracteres) e descritivo dos seus dados.

	b.	*Layer slug*: Um slug é um identificador único para a camada dentro do seu espaço de trabalho. Não pode ter múltiplas camadas dentro do seu espaço de trabalho com o mesmo slug. Deve conter apenas letras, dígitos e hífens ("-"). Pode usar o botão 'GENERATE SLUG NAME' para gerar um identificador único baseado no título da camada fornecido.

	c.	*Layer category (opcional)*: Pode selecionar uma ou mais categorias para a camada da lista de opções no menu suspenso. Uma ampla gama de categorias socioeconómicas, baseadas na natureza e relacionadas com políticas do KMGBF estão disponíveis. Mais de uma categoria pode ser selecionada para a mesma camada. Estas categorias correspondem aos filtros de categoria de conjunto de dados na vista do mapa. Selecionar uma categoria significará que a sua camada aparecerá na lista de conjuntos de dados filtrados quando o filtro de categoria de conjunto de dados correspondente for aplicado.

	d.	*Tag (opcional)*: Pode especificar uma ou mais etiquetas para a sua camada. As etiquetas correspondem ao filtro de etiquetas de conjunto de dados na vista do mapa. Especificar uma etiqueta para a sua camada significará que a camada aparecerá na lista de camadas filtradas quando o filtro de etiqueta de conjunto de dados correspondente for aplicado no mapa. Ao contrário das categorias de camada, as etiquetas podem ser qualquer cadeia de texto da sua escolha, tornando esta funcionalidade útil se precisar de diferenciar claramente as camadas do seu espaço de trabalho dos conjuntos de dados da plataforma pública e ser capaz de aplicar filtros mais eficazes ao pesquisar os seus conjuntos de dados na vista do mapa. Por exemplo, poderia usar uma etiqueta para identificar a meta na sua estratégia e plano de ação nacional para a biodiversidade (EPANB) para a qual a camada de dados é relevante.

	e.	*Layer description (opcional)*: No campo de descrição, pode especificar o texto que aparecerá na caixa pop-up de informação da camada. Aqui, pode inserir a maior parte dos metadados da sua camada, como uma descrição geral, citação do artigo científico/conjunto de dados, links externos para o artigo científico/conjunto de dados, especificações de licença, etc.

	!!!Note
		Para camadas individuais que fazem parte de uma camada de grupo principal, o texto pop-up de informação da camada mostrará sempre a descrição da camada de grupo principal e portanto o campo de descrição é redundante (veja ['Como crio camadas agrupadas?'](#como-crio-camadas-agrupadas)).

	![](images/en/image23.png)

4.	Uma vez que tenha preenchido os metadados relevantes para documentar esta nova camada, agora precisa de especificar o formato ou padrão de serviço web geoespacial dos seus dados geoespaciais e configurar a camada em conformidade. As secções seguintes detalham como configurar a sua camada com base no formato dos seus dados geoespaciais.

## Como carrego camadas raster em formato GeoTIFF?

Atualmente, pode carregar manualmente dados geoespaciais para o seu espaço de trabalho UNBL apenas se estiverem disponíveis num formato raster GeoTIFF. Uma camada raster constitui uma grelha de células (ou pixels) onde cada célula tem um valor representando informação sobre um tópico ou fenómeno específico. Atualmente só podemos aceitar GeoTIFFs com uma única banda. Se tiver um GeoTIFF com mais de uma banda, divida-o antecipadamente em diferentes ficheiros. As camadas raster GeoTIFF são adicionadas ao seu espaço de trabalho UNBL através de um carregamento direto para um repositório de dados SIG UNBL seguro e compatível com RGPD no Azure. Para mais informação, por favor veja a nossa folha de visão geral sobre segurança de dados *(em breve - aguarde!)*.

!!!Note
	Os dados geoespaciais noutros formatos de camadas raster e vetoriais podem ser configurados no UNBL através de ligação a um recurso externo. Veja ['Como configuro camadas raster usando serviços de tiles externos?'](#como-configuro-camadas-raster-usando-servicos-de-tiles-externos-wmswmts) e ['Como configuro camadas vetoriais usando serviços de tiles externos?'](#como-configuro-camadas-vetoriais-usando-servicos-de-tiles-externos) para formatos de serviços Web OGC interoperáveis com UNBL e guias para ligar a eles.

Para carregar um ficheiro GeoTIFF:

1.	Navegue até à página da nova camada e preencha os metadados relevantes (Veja ['Que parâmetros e metadados preencho ao criar uma camada?'](#que-parametros-e-metadados-preencho-ao-criar-uma-camada)).

2.	Na secção 'Layer Config':

	a.	*Layer type*: Selecione 'raster'.

	b.	*Layer provider*: Selecione 'GeoTIFF File Upload'.

	c.	*GeoTIFF file*: Clique no botão 'Choose File' para carregar uma camada raster GeoTIFF válida do seu sistema de ficheiros local. Os ficheiros carregados devem ser um raster de banda única e devem ter menos de 1000MB de tamanho. Será notificado se selecionar um ficheiro inválido.

	d.	*Data type*: Especifique se o raster contém dados 'categorical' ou 'continuous'. Os dados categóricos representam classes ou categorias discretas onde cada valor de pixel representa um tipo ou classe distinto (por exemplo, classes de uso do solo). Os conjuntos de dados contínuos representam dados onde os valores podem cair em qualquer lugar dentro de uma gama de valores especificada (por exemplo, temperatura média anual).

	e.	*Minimum/Maximum value*: Se o seu raster contém dados contínuos, então deve fornecer a gama de valores nos dados especificando os valores mínimo e máximo da gama.

	f.	*Minimum/Maximum zoom level (opcional)*: A gama de nível de zoom por defeito está definida de 0 a 14. Pode opcionalmente especificar os níveis de zoom para a camada se o ficheiro raster apenas contém dados em certos níveis de zoom. Note que o UNBL suporta um nível de zoom máximo de 14.

	g.	*Layer styling*: O estilo da camada determina como a camada é exibida no mapa. Clicando em 'ADD ADDITIONAL STYLING' pode especificar qualquer número de entradas de estilo de camada para corresponder aos valores no seu raster. Cada entrada de estilo de camada deve definir as seguintes propriedades:

	- *Value* - o valor de pixel nos dados para o qual definir o estilo.

	- *Name* – o nome da entrada de estilo na legenda da camada no mapa.

	- *Color* – a cor dos pixels com o valor especificado no mapa. Pode definir uma cor através do seletor de cor manual, ou introduzindo um valor RGBA ou Hexadecimal. Opcionalmente, pode definir a opacidade da cor numa gama de 0 a 100%, onde 0% é totalmente transparente e 100% é totalmente opaco.

	Também pode opcionalmente escolher se a etiqueta de nome de uma entrada de estilo está oculta na legenda da camada no mapa clicando no ícone ![](images/icons/hide.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} ao lado da entrada de estilo. Para camadas categóricas, as entradas de valor de estilo de camada devem mapear para os valores de cada categoria/classe dentro da fonte de dados raster. Para camadas contínuas, as entradas de valor de estilo de camada devem mapear para a gama de valores dentro do seu ficheiro raster que deseja renderizar no mapa. Pode especificar quaisquer pontos ao longo da gama de valores entre os valores mínimo e máximo -- será gerado um gradiente de cores entre cada um destes valores.

	![](images/en/image24.png)

3.	Uma vez que todos os metadados e parâmetros tenham sido especificados, o botão 'SAVE AND VIEW DETAILS' acenderá em azul, desde que toda a informação introduzida seja válida. Clique neste botão para carregar o seu ficheiro GeoTIFF para o seu espaço de trabalho. O ficheiro será armazenado num repositório privado seguro e dedicado no Azure. Isto pode levar alguns segundos dependendo do tamanho do ficheiro e da velocidade da sua ligação de banda larga à internet, portanto após clicar no botão deve esperar até ser redirecionado para a página de edição da camada. Veja ['Como publico a minha camada e partilho-a com utilizadores externos?'](#como-publico-a-minha-camada-e-partilho-a-com-utilizadores-externos) e ['Como edito as minhas camadas adicionadas?'](#como-edito-as-minhas-camadas-adicionadas) para os próximos passos.

## Como configuro camadas raster usando serviços de tiles externos WMS/WMTS?

O UNBL suporta a configuração de camadas de imagem raster para o seu espaço de trabalho através de ligação a fornecedores de serviços de tiles externos. Para adicionar dados geoespaciais ao seu espaço de trabalho usando este método:

1.	Navegue até à página da nova camada e preencha os metadados relevantes (Veja ['Que parâmetros e metadados preencho ao criar uma camada?'](#que-parametros-e-metadados-preencho-ao-criar-uma-camada)).

2.	Na secção 'Layer Config':

	a.	*Layer type*: Selecione 'raster'.

	b.	*Layer provider*: Selecione 'External Tile Service (WMS, WMTS, etc.)'.

	c.	*Tiles URL*: Aqui, pode ligar-se a um serviço de tiles externo que usa os protocolos Web Map Service (WMS), Web Map Tile Service (WMTS) ou XYZ Tile Service. Para configurar camadas usando estes fornecedores, deve fornecer um URL de tile válido, que deve conter ou os marcadores de posição `{z}{x}{y}` ou o marcador de posição `{bbox-epsg-3857}`.

	Por exemplo, o URL WMS de exemplo abaixo **não** funcionará:

	```
	https://wms.server.net/mapserv?request=getmap&service=wms&BBOX=-90,-180,90,360&crs=EPSG:4326&format=image/jpeg&layers=layer_latest&width=1200&height=600
	```

	pois contém um formato de parâmetro de caixa delimitadora (BBOX) incorreto. O URL pode ser ajustado alterando o parâmetro `BBOX` para corresponder ao marcador de posição, bem como o parâmetro do sistema de referência de coordenadas (`crs`) para refletir o sistema de coordenadas Web Mercator (EPSG: 3857). Um URL configurável seria:

	```
	https://wms.server.net/mapserv?request=getmap&service=wms&BBOX={bbox-epsg-3857}&crs=EPSG:3857&format=image/jpeg&layers=layer_latest&width=1200&height=600
	```

	!!!Note "Os seguintes marcadores de posição foram ajustados para permitir a configuração UNBL:"
		- `-90,-180,90,360` alterado para `{bbox-epsg-3857}`
		- `EPSG:4326` alterado para `EPSG:3857`

	d.	*Data type*: Especifique se a imagem raster contém dados 'categorical' ou 'continuous'. Os dados categóricos representam classes ou categorias discretas onde cada valor de pixel representa um tipo ou classe distinto. Os conjuntos de dados contínuos representam dados onde os valores podem cair em qualquer lugar dentro de uma gama de valores especificada.

	e.	*Minimum/Maximum zoom level (opcional)*: A gama de nível de zoom por defeito está definida de 0 a 14. Pode opcionalmente especificar os níveis de zoom para a camada se a imagem raster apenas contém dados em certos níveis de zoom. Note que o UNBL suporta um nível de zoom máximo de 14.

	f.	*Layer styling*: O estilo da camada determina como a legenda da imagem raster é exibida no mapa. Clicando em 'ADD ADDITIONAL STYLING' pode especificar qualquer número de entradas de estilo de camada para corresponder aos valores na imagem raster. Cada entrada de estilo de camada deve definir as seguintes propriedades:

	- *Name* – o nome da entrada de estilo na legenda da camada no mapa.

	- *Color* – a cor associada ao nome especificado na legenda da camada. Pode selecionar uma cor usando o seletor de cor, ou especificando um valor de código de cor RGBA ou Hex.

	Também pode opcionalmente escolher se a etiqueta de nome de uma entrada de estilo está oculta na legenda da camada no mapa clicando no ícone ![](images/icons/hide.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} ao lado da entrada de estilo. Para imagens raster categóricas, as entradas de estilo de legenda de camada devem representar os valores de cada categoria/classe dentro da fonte de dados raster. Para imagens raster contínuas, as entradas de estilo de legenda devem representar a gama de valores visualizados na imagem raster. Pode especificar quaisquer pontos ao longo da gama de valores entre os valores mínimo e máximo - será gerado um gradiente de cores entre cada um destes valores.

	![](images/en/image25.png)

3. Uma vez que todos os metadados e propriedades de configuração tenham sido especificados, o botão 'SAVE AND VIEW DETAILS' acenderá em azul, desde que toda a informação introduzida seja válida. Clique neste botão para configurar a sua imagem raster no seu espaço de trabalho. Veja ['Como publico a minha camada e partilho-a com utilizadores externos?'](#como-publico-a-minha-camada-e-partilho-a-com-utilizadores-externos) e ['Como edito as minhas camadas adicionadas?'](#como-edito-as-minhas-camadas-adicionadas) para os próximos passos.

## Como configuro camadas raster usando Google Earth Engine (GEE)?

Se quiser exibir recursos GEE no seu espaço de trabalho UNBL da sua própria conta ou de uma conta pública, pode fazê-lo configurando um recurso raster de banda única GEE. Atualmente, não suportamos a configuração de rasters multi-banda ou dados vetoriais do GEE. Para configurar recursos raster de banda única GEE:

1. Se estiver a configurar um recurso do seu projeto Cloud pessoal, assegure-se de que a caixa 'Anyone can read' está marcada para este recurso.

	![](images/en/draft2-image1.png)

	![](images/en/draft2-image2.png)

2. Navegue até à página da nova camada na interface de administração UNBL e preencha os metadados relevantes (Veja ['Que parâmetros e metadados preencho ao criar uma camada?'](#que-parametros-e-metadados-preencho-ao-criar-uma-camada)).

3. Na secção *Layer Config*:

	a.	*Layer type*: Selecione 'raster'.

	b.	*Layer provider*: Selecione 'Google Earth Engine'.

	c.	*Asset Path*: Copie e cole o ID da imagem do seu recurso GEE. Qualquer ID de imagem pode ser configurado no UNBL, desde que seja uma imagem raster de banda única. Pode ser um ID de imagem do seu projeto Cloud GEE pessoal, ou qualquer outro projeto Cloud GEE partilhado ou conjunto de dados GEE disponível publicamente, como um do catálogo público [awesome-gee-community-catalog](https://gee-community-catalog.org/), que fornece acesso a mais de 4.000 recursos GEE públicos.

	![](images/en/draft2-image3.png)

	d.	*Data type*: Especifique se a imagem raster contém dados 'categorical' ou 'continuous'. Os dados categóricos representam classes ou categorias discretas onde cada valor de pixel representa um tipo ou classe distinto. Os conjuntos de dados contínuos representam dados onde os valores podem cair em qualquer lugar dentro de uma gama de valores especificada.

	e.	*Minimum/Maximum zoom level (opcional)*: A gama de nível de zoom por defeito está definida de 0 a 14. Pode opcionalmente especificar os níveis de zoom para a camada se a imagem raster apenas contém dados em certos níveis de zoom. Note que o UNBL suporta um nível de zoom máximo de 14.

	![](images/en/draft2-image4.png)

	f.	*Layer styling*: O estilo da camada determina como a legenda do recurso GEE é exibida no mapa. Clicando em 'ADD ADDITIONAL STYLING' pode especificar qualquer número de entradas de estilo de camada (também conhecidas como *classes* ou *limiares*) para corresponder aos valores na imagem raster. Cada entrada de estilo de camada deve definir as seguintes propriedades:

	- *Value* - o valor de pixel nos dados para o qual definir o estilo.

	- *Name* – o nome da classe ou gama na legenda da camada no mapa.

	- *Color* – a cor dos pixels com o valor especificado no mapa. Pode definir uma cor através do seletor de cor manual, ou introduzindo um valor RGBA ou Hexadecimal. Opcionalmente, pode definir a opacidade da cor numa gama de 0 a 100%, onde 0% é totalmente transparente e 100% é totalmente opaco.

	Também pode opcionalmente escolher se a etiqueta de nome de uma entrada de estilo está oculta na legenda da camada no mapa clicando no ícone ![](images/icons/hide.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} ao lado da entrada de estilo. Para camadas categóricas, as entradas de valor de estilo de camada devem mapear para os valores de cada categoria/classe dentro da fonte de dados raster. Para camadas contínuas, as entradas de valor de estilo de camada devem mapear para a gama de valores dentro do seu ficheiro raster que deseja renderizar no mapa. Pode especificar quaisquer pontos ao longo da gama de valores entre os valores mínimo e máximo -- será gerado um gradiente de cores entre cada um destes valores. É importante notar que os valores de pixel mínimo e máximo, e portanto a gama de valores, podem ser derivados diretamente visualizando o separador 'BANDS' na caixa de informação 'Asset details' do seu recurso no GEE. O exemplo de estilo de camada abaixo cria uma paleta de cores contínua para concentração de stock de carbono.

	![](images/en/draft2-image5.png)

	![](images/en/draft2-image6.png)

	Para camadas raster categóricas, cada valor de pixel especificado mapeia para exatamente uma classe ou categoria discreta. O exemplo de estilo de camada abaixo cria uma paleta de cores discreta que mapeia classes de cobertura do solo.

	![](images/en/draft2-image7.png)

	g.	*Styled Layer Description (SLD)*: Clique no botão 'GENERATE GEE SLD' para gerar automaticamente um SLD para configurar o estilo do seu recurso GEE no UNBL, com base nos parâmetros que definiu para o *Layer styling* no passo f. Enquanto o estilo da camada determina o estilo da legenda da camada, o SLD determinará o estilo dos pixels reais nos seus dados. Com base nos exemplos fornecidos no passo f, a configuração SLD para um esquema de cores contínuo para concentração de stock de carbono seria assim:

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

	Para o raster categórico de cobertura do solo, a configuração SLD seria assim:

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

	Onde cada cor ColorMapEntry e quantidade de pixel associada corresponde exatamente a uma linha de entrada de estilo de camada do passo f.

	![](images/en/draft2-image8.png)

4. Uma vez que todos os metadados e propriedades de configuração tenham sido especificados, o botão 'SAVE AND VIEW DETAILS' acenderá em azul, desde que toda a informação introduzida seja válida. Clique neste botão para configurar a sua imagem raster no seu espaço de trabalho. Veja ['Como publico a minha camada e partilho-a com utilizadores externos?'](#como-publico-a-minha-camada-e-partilho-a-com-utilizadores-externos) e ['Como edito as minhas camadas adicionadas?'](#como-edito-as-minhas-camadas-adicionadas) para os próximos passos.

## Como configuro camadas raster usando Spatiotemporal Asset Catalog (STAC)?

A funcionalidade de configuração STAC está atualmente em teste e está sujeita a atualizações futuras. Se quiser configurar uma nova camada vinda de um Catálogo STAC externo no seu espaço de trabalho UNBL, por favor contacte-nos em <support@unbiodiversitylab.org> para que possamos compreender o caso de uso para esta funcionalidade.

## Como configuro camadas vetoriais usando serviços de tiles externos?

O UNBL suporta a configuração de camadas de tiles vetoriais para o seu espaço de trabalho através de ligação a fornecedores de serviços de tiles externos. As camadas vetoriais são formas geométricas discretas, como pontos e polígonos. Para adicionar dados geoespaciais ao seu espaço de trabalho usando este método:

1.	Navegue até à página de edição de camada e preencha os metadados relevantes (Veja ['Que parâmetros e metadados preencho ao criar uma camada?'](#que-parametros-e-metadados-preencho-ao-criar-uma-camada)).

2. Na secção 'Layer Config' (todos os campos são obrigatórios a menos que especificado em contrário):

	a.	*Layer type*: Selecione 'vector'.

	b.	*Layer provider*: Selecione 'External Tile Service (Mapbox, ESRI, pg_tileserv, Martin, etc.)'.

	c.	*Tiles URL*: Aqui, pode ligar-se a um fornecedor de serviço de tiles vetoriais externo que aloja os seus dados geoespaciais, como Mapbox, Esri, pg_tileserv, Martin e outros. Para configurar camadas usando estes fornecedores, deve fornecer um URL de tile válido, que deve conter ou os marcadores de posição `{z}{x}{y}` ou o marcador de posição `{bbox-epsg-3857}`. Por exemplo, um URL de camada configurável para um conjunto de dados de cobertura florestal alojado no Martin seria assim:

	```

	https://example-tileserv.org/martin/forest_cover/{z}/{x}/{y}
	```

	d.	*Data type*: Especifique se os tiles vetoriais contêm dados 'categorical' ou 'continuous'. Os dados categóricos representam classes ou categorias discretas. Os conjuntos de dados contínuos representam dados onde os valores podem cair em qualquer lugar dentro de uma gama de valores especificada. Enquanto os tiles vetoriais podem armazenar múltiplos atributos de dados, só pode escolher um atributo de dados para estilo de legenda de camada no UNBL. Deve especificar o tipo de dados com base na legenda provisória de camada da sua camada adicionada no UNBL.

	![](images/en/image26.png)

3.	A secção 'Render layers' especifica os atributos de dados da fonte de dados vetoriais que devem ser exibidos no mapa. Nesta secção:

	a.	*Source layer*: Especifique o nome do conjunto de dados que está a alojar no servidor de tiles vetoriais. Por exemplo, a camada fonte para o URL de exemplo do passo 2c é `forest_cover`. Clique no ícone ![](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} para esta propriedade para ver documentação detalhada sobre referenciação de camada fonte.

	b.	*Type*: Especifique o tipo de geometria que o seu conjunto de dados representa. As opções disponíveis são *fill, line, symbol, circle, heatmap* e *fill-extrusion*. Na maioria dos casos, o tipo de geometria será *fill* (polígonos com uma rampa de cor de preenchimento). Clique no ícone ![](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} para esta propriedade para ver documentação detalhada sobre opções de tipo de geometria.

	c.	*Paint (opcional)*: Aqui, pode especificar o estilo de camada para o seu conjunto de dados no UNBL usando uma configuração de estilo .json. Clique no ícone ![](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} para esta propriedade para ver documentação detalhada para configurar estilo de camada. Para os tipos de geometria mais comuns de tipo *fill*, a configuração paint segue um modelo definido. Para configurar estilo de camada para conjuntos de dados categóricos, use o seguinte modelo:

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

	d.	*Filter (opcional)*: Pode opcionalmente especificar um subconjunto de categorias de dados, ou gama específica de valores, que deve ser usado para estilizar o mapa. Quaisquer categorias de dados ou gama de valores fora do filtro especificado não serão considerados no estilo de camada. Clique no ícone ![](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} para esta propriedade para ver documentação detalhada para configurar opções de filtro. Como exemplo, se quisesse filtrar a categoria "Mixed forest" do atributo de dados `forest_cover_2023`, usaria o seguinte modelo:

	```

	["!=", ["get", "forest_cover_2023"], "Mixed forest"]
	```

	onde `!=` especifica uma expressão de exclusão condicional.

	![](images/en/image27.png)

	e.	*ADD LAYER CONFIG (opcional)*: Em alguns casos, pode desejar configurar estilo para mais de um atributo de dados no seu conjunto de dados vetorial. Clicando neste botão, pode especificar mais expressões de estilo. Note que quaisquer atributos de dados, categorias de dados ou gamas de valores que se sobreponham entre expressões de estilo ou estejam contidos nos mesmos polígonos nos seus dados e não sejam filtrados em conformidade, levarão a uma visualização de camada confusa.

4.	A secção 'Interaction config' especifica os atributos de dados no conjunto de dados vetorial que devem ser exibidos no popup ao clicar nos polígonos da camada vetorial no mapa. Clique em 'ADD ADDITIONAL OPTION' para especificar um atributo de dados que deve ser exibido no popup. Esta é uma secção opcional – pode ser deixada em branco se não for necessária. Para cada entrada de Interaction config:

	a.	*Column*: O nome do atributo de dados que será exibido (sensível a maiúsculas/minúsculas). Por exemplo, para a camada fonte `forest_cover`, o atributo de dados poderia ser `forest_cover_2023` ou `canopy_height_2023`.

	b.	*Type*: Escolha tipo *string*, *date* ou *number*, dependendo do formato do seu atributo de dados.

	c.	*Format (opcional)*: Se o seu atributo de dados for do tipo *date* ou *number*, pode especificar a formatação aqui (ex. `dd/mm/yyyy` para data).

	d.	*Property (opcional)*: Aqui, pode especificar a etiqueta do atributo de dados exibida na tabela popup.

	e.	*Prefix (opcional)*: Pode especificar um prefixo que será exibido antes do valor/categoria do atributo de dados.
	Note que isto será exibido após a etiqueta de propriedade.

	f.	*Suffix (opcional)*: Pode especificar um sufixo que será exibido após o valor/categoria do atributo de dados (ex. unidades).

	g.	Clique no ícone ![](images/icons/delete.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} para remover uma entrada de Interaction config.

	![](images/en/image28.png)

	![](images/en/image29.png)

5.	Especifique os níveis de zoom para os seus tiles vetoriais. A gama de nível de zoom por defeito está definida de 0 a 20. Pode opcionalmente especificar os níveis de zoom para a camada se os tiles vetoriais apenas forem visíveis numa resolução menor/maior. Note que o UNBL suporta um nível de zoom máximo de 20 para tiles vetoriais.

6.	Especifique o estilo de legenda para a sua camada de tiles vetoriais na secção 'Legend Config'. Nesta secção (todos os campos são obrigatórios a menos que especificado em contrário):

	a.	Clicando em 'ADD ADDITIONAL STYLING' pode especificar qualquer número de entradas de estilo de camada para corresponder às categorias de dados/gama de valores na sua camada de tiles vetoriais. Cada entrada de estilo de camada deve definir as seguintes propriedades:

	- *Name* – o nome da entrada de estilo na legenda da camada no mapa.

	- *Color* – a cor associada ao nome especificado na legenda da camada. Pode selecionar uma cor usando o seletor de cor, ou especificando um valor de código de cor RGBA ou Hex.

	Também pode opcionalmente escolher se a etiqueta de nome de uma entrada de estilo está oculta na legenda da camada no mapa clicando no ícone ![](images/icons/hide.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} ao lado da entrada de estilo. Para dados categóricos, as entradas de estilo de legenda de camada devem representar as categorias discretas e o seu estilo de cor associado que especificou na secção 'Render layers'. Para dados contínuos, as entradas de estilo de legenda devem representar a gama de valores e o seu gradiente de cor associado que especificou na secção 'Render layers'.

	![](images/en/image30.png)

	![](images/en/image31.png)

7.	Uma vez que todos os metadados e propriedades de configuração tenham sido especificados, o botão 'SAVE AND VIEW DETAILS' acenderá em azul, desde que toda a informação introduzida seja válida. Clique neste botão para configurar a sua camada de tiles vetoriais no seu espaço de trabalho. Veja ['Como publico a minha camada e partilho-a com utilizadores externos?'](#como-publico-a-minha-camada-e-partilho-a-com-utilizadores-externos) e ['Como edito as minhas camadas adicionadas?'](#como-edito-as-minhas-camadas-adicionadas) para os próximos passos.

## Como publico a minha camada e partilho-a com utilizadores externos?

Para tornar qualquer uma das suas camadas adicionadas descobrível e visível para todos os utilizadores do seu espaço de trabalho (veja ['Como visualizo conjuntos de dados no meu espaço de trabalho?'](2_viewing.pt.md#como-visualizo-conjuntos-de-dados-no-meu-espaco-de-trabalho)), bem como opcionalmente tornar a sua camada visível para utilizadores fora do seu espaço de trabalho, realize os seguintes passos:

1.	Navegue até à página de edição de camada para a camada da sua escolha. Ao adicionar uma camada ao seu espaço de trabalho, será automaticamente levado para esta página. Alternativamente, clique no botão ![](images/icons/edit.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} na lista de camadas disponível após navegar até à página 'Layers' na sua interface de administração.

	![](images/en/image32.png)

2.	Para que o seu conjunto de dados seja acessível na vista do mapa UNBL, deve publicar o conjunto de dados clicando no botão de alternância 'Published'. Os conjuntos de dados não publicados permanecem na interface de administração até que esteja pronto para publicá-los na vista do mapa UNBL.

3.	Se o seu conjunto de dados estiver publicado, aparecerá um botão de alternância com uma opção para 'Allow external access via link'. Esta é uma alternância opcional que, se ativada, torna a sua camada acessível a qualquer pessoa com o URL da vista do mapa, mesmo utilizadores fora do seu espaço de trabalho. Para partilhar o URL da sua camada, copie o link que aparece ou clique no ícone ![](images/icons/copy.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} para copiar automaticamente o link para a sua área de transferência.

4.	Clique no botão de alternância 'Primary' para marcar a sua camada como uma camada autónoma e torná-la descobrível na barra de pesquisa 'DATASETS' no UNBL. Para que as camadas do seu espaço de trabalho sejam descobríveis e visíveis no UNBL, deve sempre publicá-las e marcá-las como primárias. A única exceção para publicar uma camada e não marcá-la como primária é quando está a criar camadas agrupadas (Veja ['Como crio camadas agrupadas?'](#como-crio-camadas-agrupadas)).

	![](images/en/image33.png)

## Como edito as minhas camadas adicionadas?

Pode querer voltar e editar as suas camadas adicionadas para alterar qualquer um dos metadados associados, testar se a sua camada está a visualizar no UNBL, e editar a sua configuração de camada em conformidade se a sua camada não estiver a visualizar. Para fazer isto:

1.	Navegue até à página de edição de camada para a camada da sua escolha. Ao adicionar uma camada ao seu espaço de trabalho, será automaticamente levado para esta página. Alternativamente, clique no botão ![](images/icons/edit.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} na lista de camadas disponível após navegar até à página 'Layers' na sua interface de administração.

	![](images/en/image32.png)

2.	Para testar se a sua camada está a visualizar corretamente na vista do mapa UNBL, clique no botão 'TEST LAYER' no canto inferior direito da página de edição de camada. Um visto verde aparecerá dentro do botão se a camada foi corretamente carregada e/ou configurada. Caso contrário, uma cruz vermelha aparecerá com uma mensagem de erro diagnosticando o problema.

	!!!Note
		Se estiver a carregar um conjunto de dados regional (extensão não global), é possível que o teste reporte uma falha mesmo se a camada estiver a funcionar, pois o teste pode solicitar tiles de amostra que caem fora da extensão areal do seu conjunto de dados. A melhor prática é verificar duas vezes o diagnóstico do teste de camada verificando manualmente se a sua camada está a visualizar na vista do mapa UNBL.

	![](images/en/image34.png)

3.	Se quiser navegar diretamente para a sua camada na vista do mapa UNBL, clique no botão 'VIEW ON MAP'. Se quiser eliminar a sua camada do seu espaço de trabalho, clique no botão 'DELETE LAYER'.

4.	Clique no botão 'EDIT' para qualquer uma das secções de metadados/configuração de camada para editar informação e parâmetros para essa secção.

	![](images/en/image35.png)

## Como crio camadas agrupadas?

Quaisquer camadas que adicione ao seu espaço de trabalho UNBL podem ser agrupadas juntas para organizar dados multi-ano ou multi-categoria. Cada ano ou categoria é semelhante a uma banda raster individual. As camadas agrupadas são criadas numa nova camada separada (denominada *camada principal* no UNBL) das camadas componentes. Por exemplo, um raster de cobertura do solo abrangendo três anos exigiria que quatro camadas fossem criadas: cada ano como a sua própria camada, bem como uma quarta camada principal a partir da qual todas serão acessíveis. Neste caso, cada camada individual de ano/categoria deve ser publicada e **não** marcada como primária para ser descobrível na vista do mapa exclusivamente através de uma camada agrupada. A camada agrupada/principal é uma camada de exibição adicional com uma configuração de camada fixa que referencia todas as camadas individuais de anos/categorias. É publicada e marcada como primária. Quando a camada agrupada é vista no UNBL, aparece uma única legenda de camada a partir da qual pode selecionar qualquer uma das suas camadas componentes incluídas para ser visualizada na vista do mapa.

!!!Note
	Se as camadas individuais de anos/categorias que está a ligar através de uma camada agrupada também estiverem marcadas como primárias, além de estarem publicadas, estas camadas serão descobríveis como entradas individuais na barra de pesquisa 'DATASETS', duplicando assim entradas com a camada agrupada publicada.

Para configurar uma camada agrupada:

1.	Publique todas as camadas componentes a incluir na camada agrupada, e **não** as marque como primárias. A funcionalidade de URL pública funciona da mesma forma que para camadas autónomas (veja ['Como publico a minha camada e partilho-a com utilizadores externos?'](#como-publico-a-minha-camada-e-partilho-a-com-utilizadores-externos)).

2.	Crie uma camada separada usando o botão 'CREATE NEW LAYER' na página 'Layers' da interface de administração do seu espaço de trabalho. Esta será a sua camada agrupada designada.

3.	Introduza um título de camada, slug de camada, categoria de camada, etiqueta de pesquisa e uma descrição de camada que seja representativa do conjunto de dados representado pela sua coleção de camadas individuais agrupadas. Note que a descrição de camada para camadas componentes é redundante – só precisa de preencher a descrição de camada para a camada agrupada que contém as suas camadas componentes. Para mais informação sobre preenchimento de metadados para camadas, veja ['Que parâmetros e metadados preencho ao criar uma camada?'](#que-parametros-e-metadados-preencho-ao-criar-uma-camada).

4.	*Layer type*: Selecione 'group'.

5.	*Grouped layers*: Do menu suspenso, selecione todas as camadas componentes que deseja incluir na sua camada agrupada. As camadas disponíveis para inclusão são todas as camadas adicionadas no seu espaço de trabalho.

6.	*Layer selector*: Do menu suspenso, selecione ou 'Dropdown' ou 'Radio Button'. Estas opções influenciam como a UI do seletor de camada aparece na legenda da camada agrupada no UNBL. A opção dropdown é recomendada para camadas agrupadas com mais de três camadas componentes. A opção radio button é recomendada para camadas agrupadas com três ou menos camadas componentes, ou quando as camadas agrupadas representam os mesmos dados com estilo diferente.

	![](images/en/image36.png)

	![](images/en/image37.png)

7.	Clique no botão 'SAVE AND VIEW DETAILS' para adicionar a camada agrupada ao seu espaço de trabalho.
