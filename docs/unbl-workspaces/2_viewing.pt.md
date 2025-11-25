# Visualizar o seu espaço de trabalho UNBL

## Como acedo ao(s) meu(s) espaço(s) de trabalho?

Se é um utilizador registado a quem foi concedido acesso a um ou múltiplos espaços de trabalho UNBL, por favor siga estes passos:

1.	Inicie sessão na sua conta e lance a aplicação de dados UNBL.

2.	Clique no botão 'WORKSPACES' no canto superior esquerdo. Isto mostrará os espaços de trabalho aos quais pertence.

3.	Pode ver os recursos (lugares e conjuntos de dados) de cada espaço de trabalho independentemente, ou ao mesmo tempo se for membro de mais de um espaço de trabalho. Prima o botão de alternância para os espaços de trabalho que deseja incluir na sua vista do mapa.

	!!!Note
		Pode alternar/desalternar todos os espaços de trabalho de uma vez usando o botão de alternância 'Map View' no topo.

4.	Desalterne os espaços de trabalho que não deseja ver. Também pode desalternar o espaço de trabalho *UNBL* no topo da lista, o que lhe permitirá ver apenas os recursos exclusivos do(s) seu(s) espaço(s) de trabalho seguro(s) UNBL e filtrar todos os recursos na plataforma pública UNBL. Por favor note que desalternar o espaço de trabalho *UNBL* removerá o acesso a todas as camadas globais públicas e métricas do painel de controlo para todas as áreas, incluindo áreas no seu espaço de trabalho seguro.

![](images/en/image2.png)

## Como visualizo lugares no meu espaço de trabalho UNBL?

Uma vez selecionado(s) o(s) seu(s) espaço(s) de trabalho preferido(s), pode usar o separador 'PLACES' para pesquisar e selecionar um lugar, bem como para ver as suas métricas dinâmicas associadas. Os lugares também são conhecidos como *áreas de interesse* ou *localizações*. Apenas os lugares adicionados nos seus espaços de trabalho alternados estarão disponíveis. Se tiver o seu espaço de trabalho assim como o espaço de trabalho UNBL selecionados, então todos os lugares na plataforma pública estarão disponíveis juntamente com os lugares personalizados que adicionou ao seu próprio espaço de trabalho.

!!!Note
	Primeiro precisa de adicionar lugares ao seu espaço de trabalho seguro para poder vê-los no UNBL. Veja ['Como adiciono lugares?'](5_add_places.pt.md#como-adiciono-lugares)

Para pesquisar um lugar, pode:

1.	Clicar no botão 'PLACES', escrever o nome do país ou jurisdição que deseja ver na caixa de pesquisa, e selecionar o resultado desejado na lista de resultados de pesquisa.

	**OU**

2.	Clicar no botão 'PLACES', clicar para expandir a caixa de filtros, e selecionar o seu filtro de interesse. Pode então selecionar o lugar desejado da lista de resultados de pesquisa.

!!!Note
	Os lugares são filtrados por tipo *Country* por defeito ao abrir a vista do mapa UNBL. Se o seu lugar for de uma categoria diferente, como *Protected Area* ou *Cross-Boundary Area* e não tipo *Country*, então precisa de clicar no botão 'CLEAR' para limpar todos os filtros, ou expandir o menu suspenso 'FILTERS' e desmarcar a caixa de país e selecionar o seu filtro de interesse para encontrar o seu lugar.

![](images/en/image3.png)

## Como descarrego um conjunto de dados para a minha área de interesse?

Pode recortar conjuntos de dados selecionados da plataforma pública UNBL para um lugar adicionado no seu próprio espaço de trabalho e descarregá-los para uso num software SIG de desktop. Esta função permite aos utilizadores aceder aos dados subjacentes disponíveis na nossa plataforma enquanto evitam a largura de banda e armazenamento necessários para descarregar e trabalhar com uma camada de dados global.

Para recortar um conjunto de dados para a sua área de interesse e descarregar:

1.	Clique no botão 'PLACES' e selecione o seu lugar de interesse.

2.	Clique no ícone ![](images/icons/ellipsis.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} à direita do nome do lugar e clique em 'Clip and Export Layers'.

	![](images/en/image4.png)

3.	Escreva o nome ou selecione o conjunto de dados que deseja descarregar. Se os dados contêm camadas cobrindo múltiplos anos/categorias, selecione o ano/categoria que deseja descarregar. Tem a opção de descarregar camadas recortadas em formato raster GeoTIFF ou formato de ficheiro de imagem PNG.

4.	Clique em 'DOWNLOAD'.

	a.	A camada selecionada será recortada para a caixa delimitadora da área de interesse.

	b.	É adicionado um pequeno buffer à caixa delimitadora, o que aumentará ligeiramente a área do raster recortado. Isto ajuda a garantir que quaisquer incongruências entre o limite da área de interesse usado no UNBL e o ficheiro de limite oficial que possa desejar usar não resultem em perda de dados. Isto assume que as diferenças são potencialmente pequenas. Se este não for o caso, por favor contacte-nos em <support@unbiodiversitylab.org> para assistência.

	c.	*Nota*: no caso de descarregar GeoTIFFs, estes são dados brutos e não incluirão informação de estilo.

	![](images/en/image5.png)

5.	Os dados GeoTIFF descarregados podem ser abertos em qualquer software SIG para análise adicional.

## Como visualizo conjuntos de dados no meu espaço de trabalho?

O seu espaço de trabalho UNBL oferece-lhe a capacidade de visualizar quaisquer dados adicionados aos seus espaços de trabalho UNBL com quaisquer dados globais no UNBL dentro do espaço de trabalho UNBL.

!!!Note
	Primeiro precisa de criar camadas no seu espaço de trabalho para poder vê-las no UNBL. Veja ['Adicionar os seus próprios dados geoespaciais ao seu espaço de trabalho'](6_add_data.pt.md#adicionar-os-seus-proprios-dados-geoespaciais-ao-seu-espaco-de-trabalho).

Para pesquisar conjuntos de dados disponíveis:

1.	Clique no botão 'DATASETS'. As camadas de dados dos espaços de trabalho que selecionou preencherão este separador automaticamente.

2.	Para pesquisar um conjunto de dados, pode:

	a.	Escrever o nome do conjunto de dados que deseja ver na caixa de pesquisa e selecionar o resultado desejado na lista de resultados de pesquisa (*a sua pesquisa deve incluir pelo menos 3 caracteres*).

	**OU**

	b.	Clicar para expandir a caixa 'FILTERS' e selecionar o seu filtro de interesse. Pode então selecionar o resultado desejado na lista de resultados de pesquisa.

	**OU**

	c.	Clicar para expandir o menu suspenso 'Dataset tags' e selecionar a sua etiqueta de interesse. Pode então selecionar o resultado desejado na lista de resultados de pesquisa.

3.	Clique no botão de alternância à direita do nome do conjunto de dados para carregar este conjunto de dados na vista do mapa.

4.	Clique no botão de alternância novamente ou clique no ícone ![](images/icons/cross.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} na legenda da camada para remover este conjunto de dados.

!!!Note
	Se tiver o espaço de trabalho *UNBL* e o seu próprio espaço de trabalho ativados, a sua pesquisa terá de ser específica para encontrar conjuntos de dados que carregou no seu próprio espaço de trabalho que não fazem parte da plataforma pública. A forma mais fácil de fazer isto é criar uma etiqueta reconhecível para a sua camada adicionada – veja o passo 2d em ['Que parâmetros e metadados preencho ao criar uma camada?'](6_add_data.pt.md#que-parametros-e-metadados-preencho-ao-criar-uma-camada)

![](images/en/image6.png)
