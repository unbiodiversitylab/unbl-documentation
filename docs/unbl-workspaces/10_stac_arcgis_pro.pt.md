---
source_rev: c3032f159853c012bf525d2ddafda22f41d814cd
translation_status: machine
---
# Aceder aos dados do UNBL no ArcGIS Pro (STAC)

O UN Biodiversity Lab (UNBL) publica os seus conjuntos de dados raster através de uma API STAC. Os membros de um espaço de trabalho UNBL podem ligar o ArcGIS Pro a esta API, pesquisar o catálogo e adicionar rasters do UNBL ao mapa sem os descarregar primeiro.

Esta página explica como configurar a ligação e o que esperar das camadas adicionadas.

## O que é necessário antes de começar?

- **Uma conta UNBL que pertença a um espaço de trabalho.** Qualquer pessoa pode pesquisar o catálogo, mas apenas os membros de um espaço de trabalho podem abrir os dados. Para solicitar um espaço de trabalho, consulte [Como solicito um espaço de trabalho UNBL?](1_basics.pt.md#como-solicito-um-espaco-de-trabalho-unbl)
- **Uma credencial** que identifique o utilizador perante o UNBL: um token de API ou uma chave de API (consulte a secção seguinte).
- **ArcGIS Pro 3.5.3, ou 3.6 ou posterior.** As versões 3.x anteriores têm um erro conhecido de STAC (Esri BUG-000164564) que impede o carregamento das camadas e mostra a mensagem *Failed to add data: Unknown error*.

!!! note
    É necessária uma credencial para todos os conjuntos de dados, incluindo os marcados como públicos. Se precisar apenas de uma cópia de um conjunto de dados global, consulte [Como posso descarregar conjuntos de dados globais não recortados?](../unbl-public-platform/16_download_global_data.pt.md)

## Como obtenho uma credencial?

Pode utilizar qualquer uma destas duas credenciais:

| Credencial | Validade | Mais indicada para |
|---|---|---|
| **Chave de API** (API key) | Não expira | ArcGIS Pro e outro software SIG de ambiente de trabalho |
| **Token de API** (API token) | Cerca de uma hora | Testar a ligação uma vez, ou tarefas curtas |

Recomendamos uma chave de API para o ArcGIS Pro: é introduzida uma única vez e não tem de ser substituída a cada hora.

### Para solicitar uma chave de API

1. Envie um e-mail para <support@unbiodiversitylab.org> a solicitar uma chave de API STAC para o ArcGIS Pro.
2. Indique o endereço de e-mail da sua conta UNBL e o nome do seu espaço de trabalho.
3. Mantenha a chave recebida privada. Qualquer pessoa que a tenha pode abrir os dados a que o seu espaço de trabalho tem acesso.

### Para obter um token de API

1. Aceda ao STAC Browser do UNBL em <https://stac.unbiodiversitylab.org>.
2. Clique em **Login** (Iniciar sessão) e inicie sessão com a sua conta UNBL. Se ainda não tiver conta, clique em **Login** e depois em **Sign up** (Registar), e confirme a conta através da ligação no e-mail recebido.
3. Clique em **API token** (token de API), na mesma fila de botões que **Login**.
4. No painel que se abre, confirme que a conta tem acesso a um espaço de trabalho. Caso contrário, os dados não abrirão no ArcGIS Pro.
5. Copie o token. O painel mostra também quando expira.

Para mais detalhes técnicos, incluindo o acesso a partir de Python e GDAL, consulte a [página de acesso à API do UNBL](https://stac.unbiodiversitylab.org/api-access.html) (em inglês).

## Como ligo o ArcGIS Pro ao STAC do UNBL?

1. No ArcGIS Pro, no separador **Insert** (Inserir), clique em **Connections** (Ligações), depois em **STAC Connection** (Ligação STAC) e, por fim, em **New STAC Connection** (Nova ligação STAC).
2. Em **Connection** (Ligação), introduza `https://stac.api.unbiodiversitylab.org/`
3. Deixe **STAC API Authentication** (Autenticação da API STAC) vazio. Aqui, o ArcGIS Pro oferece apenas o início de sessão do Microsoft Azure, que o UNBL não utiliza.
4. Em **Custom Headers** (Cabeçalhos personalizados), adicione um cabeçalho:
    - Com uma **chave de API**: chave `X-API-Key`, valor: a sua chave de API.
    - Com um **token de API**: chave `Authorization`, valor: `Bearer`, um espaço e, em seguida, o seu token (por exemplo, `Bearer eyJhbGci...`).
5. Deixe **Cloud Storage Connections** (Ligações de armazenamento na nuvem) vazio.
6. Clique em **OK** para guardar a ligação.

!!! tip
    Copie e cole a credencial diretamente na caixa de diálogo do ArcGIS Pro. Um token de API é muito longo (cerca de 5700 caracteres) e alguns programas, como uma janela de terminal, cortam texto longo sem aviso ao colar. Um token cortado produz o mesmo erro que um token expirado.

!!! warning
    Mantenha **apenas uma** ligação STAC do UNBL no ArcGIS Pro. Uma cópia antiga da ligação pode ficar selecionada e continuar a enviar uma credencial expirada. Se precisar de um novo token, edite a ligação existente em vez de criar uma segunda.

## Como adiciono camadas do UNBL ao meu mapa?

1. Abra o painel **Explore STAC** (Explorar STAC) e escolha a ligação do UNBL na lista pendente.
2. No separador **Parameters** (Parâmetros), escolha a coleção pretendida.
3. Clique em **Select assets** (Selecionar recursos) junto à coleção e assinale os recursos (ficheiros) a adicionar.
4. Execute a pesquisa.
5. Nos resultados, adicione ao mapa os itens pretendidos.

!!! note
    O ArcGIS Pro fixa a escolha de recursos no momento em que a pesquisa é executada. Se alterar os recursos, execute a pesquisa novamente.

## Quanto tempo duram as camadas?

As camadas adicionadas a partir do STAC do UNBL são **temporárias**. Cada camada abre através de uma ligação segura que expira cerca de **duas horas** depois de o UNBL a emitir (na prática, entre cerca de 1 hora e 45 minutos e 2 horas e 15 minutos depois de a adicionar). A utilização de uma chave de API não altera isto.

| Tarefa | É necessária uma credencial? |
|---|---|
| Pesquisar o catálogo | Não |
| Adicionar um resultado da pesquisa ao mapa | Sim |
| Voltar a desenhar uma camada adicionada há menos de duas horas | Não |
| Reabrir uma camada guardada num projeto do ArcGIS Pro | Não é possível: pesquise novamente e volte a adicionar o item |

Quando a ligação expira, a camada deixa de ser desenhada. Para continuar a trabalhar, pesquise novamente e volte a adicionar o item.

!!! tip
    Para guardar um conjunto de dados durante mais tempo, descarregue o ficheiro GeoTIFF enquanto a ligação for válida e adicione-o ao ArcGIS Pro como raster local.

## O que significam estas mensagens de erro?

| Mensagem de erro | Causa provável | O que fazer |
|---|---|---|
| `401 Invalid token` ou `401 Token expired` | O token foi cortado, mal escrito ou expirou | Obtenha um novo token e cole-o diretamente na ligação |
| `401 Invalid API key` | A chave de API está errada ou foi desativada | Verifique o valor de `X-API-Key` ou contacte <support@unbiodiversitylab.org> |
| `HTTP error code : 404` num caminho que começa por `/vsiaz/` | Nenhuma credencial chegou ao UNBL | Verifique a entrada **Custom Headers** da ligação |
| `403` num endereço que contém `blob.core.windows.net` | A ligação segura da camada expirou | Pesquise novamente e volte a adicionar o item |
| `unsupported data type` com a menção `StacItemHref` | Está selecionada uma ligação antiga ou duplicada | Mantenha apenas uma ligação do UNBL e selecione-a em **Explore STAC** |
| `Failed to add data: Unknown error` | Um erro conhecido do ArcGIS Pro (BUG-000164564) | Atualize para o ArcGIS Pro 3.5.3, ou 3.6 ou posterior |
| Os caminhos continuam a começar por `/vsiaz/` depois de iniciar sessão | A conta não pertence a nenhum espaço de trabalho | [Solicite um espaço de trabalho UNBL](1_basics.pt.md#como-solicito-um-espaco-de-trabalho-unbl) ou peça ao administrador do seu espaço de trabalho que o adicione |

Para outros problemas, contacte-nos através de <support@unbiodiversitylab.org>.

## Mais informações

- [Acesso à API do UNBL](https://stac.unbiodiversitylab.org/api-access.html) (em inglês)
- [Criar uma ligação STAC](https://doc.esri.com/en/arcgis-pro/latest/help/data/imagery/create-a-stac-connection.html) (Esri, em inglês)
- [Selecionar recursos STAC](https://pro.arcgis.com/en/pro-app/3.4/help/data/imagery/selecting-stac-assets.htm) (Esri, em inglês)
