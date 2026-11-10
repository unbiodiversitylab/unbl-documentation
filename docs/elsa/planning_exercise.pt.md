---
source_rev: bb4fcb9fbf090a2f79f72b5f2e2d6126feaaf8ef
translation_status: machine
---

# Experimente primeiro: um exercício prático de planeamento

A ferramenta ELSA pede ao utilizador que defina metas baseadas em área, pesos e um fator de penalização de fronteira. Em seguida, um computador determina onde deve ficar cada ação. Nesta página, pode tomar o mesmo tipo de decisão por si próprio, numa pequena grelha, antes de utilizar a ferramenta com dados nacionais. O exercício demora cerca de dez minutos. Nada do que fizer aqui é guardado ou enviado para qualquer lado.

!!! note "Créditos"
    Este exercício é uma adaptação do *Conservation Planning Exercise* (Exercício de Planeamento da Conservação), criado por Trevor Wiens, Apropos Information Systems Inc., e alojado pela PacMARA e pela The University of Queensland em [marxansolutions.org](https://marxansolutions.org/getting-started/). Os dados desta página são fictícios e servem apenas para praticar.

<!-- Quando forem recebidas as autorizações indicadas em elsa-planning-exercise/PERMISSIONS.md, acrescentar "Utilizado e adaptado com autorização." aos créditos, nas cinco línguas. -->

## Duas formas de colocar a questão de planeamento {#two-questions}

As ferramentas de planeamento espacial respondem a uma de duas questões:

| | Custo mais baixo | Mais valor na área disponível |
|---|---|---|
| **A questão** | Qual é o conjunto de locais mais barato que atinge todos os alvos? | Com uma quantidade fixa de terreno para cada ação, onde podemos garantir o máximo? |
| **O utilizador define** | Um alvo para cada característica de planeamento | Uma meta baseada em área para cada ação e um peso para cada característica de planeamento |
| **Utilizado por** | Marxan e o objetivo de conjunto mínimo do prioritizr | A ferramenta ELSA (o objetivo de utilidade máxima do prioritizr) |

O primeiro separador abaixo apresenta o problema clássico com que muitos planeadores aprendem. O segundo é uma versão reduzida do problema que a ferramenta ELSA resolve para o seu país.

## O exercício {#exercise}

=== "Custo mais baixo"

    Cada quadrado é uma [unidade de planeamento](12_annex1.md#planning-units). Cada unidade de planeamento tem um custo e uma quantidade de três características de planeamento: A, B e C.

    1. Em **Mostrar no mapa**, escolha o que a grelha mostra: o custo ou a quantidade de uma característica.
    2. Clique nas unidades de planeamento para as selecionar, ou utilize as teclas de seta e a barra de espaço. Clique novamente numa unidade de planeamento selecionada para a retirar.
    3. Atinja todos os alvos da tabela com a pontuação mais baixa possível.
    4. Escolha **Deixar o computador pesquisar** e **Mostrar a melhor resposta** para comparar a sua resposta com a do computador.
    5. Altere o **Fator de penalização de fronteira (BPF)** e tente novamente. Um BPF mais elevado favorece grupos compactos de unidades de planeamento.

    <div class="planning-exercise" data-mode="mincost" markdown>
    *Este exercício precisa de JavaScript. Se não o conseguir ver, volte a carregar a página ou experimente outro navegador.*
    </div>

    A pontuação soma três parcelas. Quanto mais baixa, melhor.

    - **Custo**: o custo total das unidades de planeamento selecionadas.
    - **Penalização de fronteira**: o BPF multiplicado pelo comprimento do limite exterior da sua seleção. Cada lado de uma unidade de planeamento mede 10. Os lados partilhados por duas unidades de planeamento selecionadas não contam.
    - **Penalização por défice**: 100 por cada unidade de um alvo que não seja atingida.

    !!! tip "O que isto significa na ELSA"
        A ferramenta ELSA utiliza o mesmo [fator de penalização de fronteira](05_editing_analysis.md#fig-adjust-bpf) para tornar as zonas de ação mais compactas. No entanto, não procura o custo mais baixo. O segundo separador mostra o que faz em vez disso.

=== "Estilo ELSA"

    Aqui, cada unidade de planeamento pode receber uma de três ações: **Proteger**, **Restaurar** ou **Gerir**. Cada ação tem uma [meta baseada em área](12_annex1.md#area-based-target): o número máximo de unidades de planeamento que pode abranger. O objetivo é garantir o máximo de valor ponderado possível para quatro características de planeamento: biodiversidade, armazenamento de carbono, abastecimento de água e meios de subsistência.

    1. Escolha uma ação em **Ação a aplicar** e, em seguida, clique nas unidades de planeamento para lhes atribuir essa ação. Clique novamente numa unidade de planeamento para retirar a respetiva ação.
    2. Em **Mostrar no mapa**, escolha **Tipo de terreno**. Cada ação só é permitida em alguns tipos de terreno, tal como nas [zonas de ação](12_annex1.md#action-zones) da ELSA. Nenhuma ação é permitida em áreas urbanas, e Proteger só é permitido em terreno intacto ou degradado.
    3. A área protegida existente (contorno tracejado) está [bloqueada](12_annex1.md#lock-in-features) para Proteger. Pode desativar o bloqueio.
    4. Escolha **Mapa de calor (valor ponderado)** para ver onde o valor ponderado é mais elevado, tal como nos [mapas de calor](07_viewing_heatmaps.md) da ELSA.
    5. Abra **Definições** para alterar as metas baseadas em área e os [pesos](12_annex1.md#weights) e, em seguida, deixe o computador pesquisar novamente e veja como o mapa dele se altera.
    6. Compare o seu mapa com o resultado da pesquisa do computador e com a melhor resposta.

    <div class="planning-exercise" data-mode="elsa" markdown>
    *Este exercício precisa de JavaScript. Se não o conseguir ver, volte a carregar a página ou experimente outro navegador.*
    </div>

    Cada ação garante uma parte diferente de cada característica. Por exemplo, Proteger garante todo o valor de biodiversidade de uma unidade de planeamento, mas pouco do seu valor para os meios de subsistência, e Gerir faz o contrário. A pontuação é o valor ponderado garantido menos a penalização de fronteira. Quanto mais alta, melhor.

    !!! tip "O que isto significa na ELSA"
        Cada definição aqui corresponde a uma definição da ferramenta ELSA: metas baseadas em área, bloqueio, pesos e o fator de penalização de fronteira (consulte [Editar uma análise](05_editing_analysis.md)). A ferramenta ELSA resolve o mesmo tipo de problema para todas as unidades de planeamento do seu país, com quatro ações e muitas mais características de planeamento.

## Porque é que um computador faz isto {#why-a-computer}

Uma grelha de 100 unidades de planeamento pode ser selecionada de 2^100^ formas diferentes, cerca de um milhão de milhões de milhões de milhões de milhões. Ninguém as conseguiria verificar uma a uma. Um país na ferramenta ELSA tem dezenas de milhares de unidades de planeamento.

- A **pesquisa do computador** utiliza o recozimento simulado (*simulated annealing*), o método utilizado pelo Marxan. Faz muitas pequenas alterações aleatórias e mantém a maior parte das alterações que melhoram a pontuação. Encontra boas respostas rapidamente, mas cada execução dá uma resposta ligeiramente diferente, e não consegue saber a que distância está da melhor resposta.
- A **melhor resposta** foi calculada com o prioritizr, o software em que assenta a ferramenta ELSA, utilizando um solver exato. Numa grelha tão pequena, é a melhor resposta possível para essas definições. Para um país inteiro, a ferramenta ELSA para quando a sua resposta está a menos de 5% da melhor resposta possível, para que uma análise demore minutos e não dias.

Execute a pesquisa do computador algumas vezes e compare as respostas obtidas com a melhor resposta.

## Próximos passos {#next-steps}

- Utilize a ferramenta ELSA com os seus dados nacionais: consulte [Criar uma nova análise](04_creating_analysis.md) e [Editar uma análise](05_editing_analysis.md).
- Saiba mais sobre o planeamento sistemático da conservação no [curso autónomo de Planeamento Espacial Integrado](https://www.learningfornature.org/en/courses/integrated-spatial-planning-2).
- Encontre o *Conservation Planning Exercise* original e os materiais de formação do Marxan em [marxansolutions.org](https://marxansolutions.org/getting-started/).
- Saiba mais sobre o prioritizr em [prioritizr.net](https://prioritizr.net).
