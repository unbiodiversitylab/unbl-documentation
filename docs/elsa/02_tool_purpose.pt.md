# Para que serve a ferramenta ELSA?

A Ferramenta ELSA permite que diversas partes interessadas avaliem colaborativamente as prioridades nacionais para o KMGBF, explorem compensações e sinergias, e desenvolvam planos espaciais para apoiar a implementação nacional dos Objetivos 1, 2 e 3. A Ferramenta ELSA produz mapas de priorização espacial que identificam áreas para proteção, restauração, gestão e reverdecimento urbano que terão o maior impacto para alcançar os Objetivos 1-12 do KMGBF. Usuários com um [espaço de trabalho UNBL](https://unbiodiversitylab.org/en/unbl-workspaces/) podem usar a Ferramenta ELSA para executar uma priorização espacial nacional personalizada como parte de um processo participativo de planejamento espacial. Eles podem:

  - Exibir camadas de entrada (também conhecidas como características de planejamento) usadas para mapear os objetivos do KMGBF.
  - Criar e executar novas execuções de análise ELSA com diferentes grupos de partes interessadas. Os usuários podem modificar e editar execuções de análise ELSA das seguintes maneiras:
    - Modificar a porcentagem do território nacional alocado para cada zona de ação baseada na natureza, incluindo proteção (Objetivo 3 do KMGBF), restauração (Objetivo 2 do KMGBF), gestão (Objetivo 10 do KMGBF) e/ou reverdecimento urbano (Objetivo 12 do KMGBF). Essas configurações podem ser adaptadas aos objetivos políticos do país para conservação, restauração e proteção, entre outros;
    - Escolher se deve bloquear Áreas Protegidas existentes para proteção, garantindo que as Áreas Protegidas existentes sejam selecionadas no mapa de solução;
    - Editar pesos de cada uma das camadas de entrada (características de planejamento) com base na importância nacional da característica mapeada e confiança nos dados de entrada; e
    - Editar o parâmetro de fator de penalidade de fronteira para ajustar a coesão espacial do mapa de ação.
  - Visualizar e baixar mapas de calor e mapas de ação resultantes.
  - Baixar mapas de calor e mapas de ação resultantes em formato raster, que podem ser usados para análise adicional de acordo com as necessidades das partes interessadas em software de Sistemas de Informação Geográfica (SIG) de desktop.
  - Baixar resultados e parâmetros de uma execução de análise ELSA existente como uma tabela de resumo, disponível nos formatos .xlsx, .csv e .json.

A Ferramenta ELSA **não pode** ser usada para:

  - Adicionar camadas de dados adicionais para inclusão como características de planejamento ou como restrições de zoneamento.
  - Substituir diretamente camadas de entrada por outras camadas de entrada.
  - Adicionar características de bloqueio adicionais.

Essas modificações, bem como o desenvolvimento de análises personalizadas adicionais para atender às necessidades nacionais, estão disponíveis mediante recuperação de custos da equipe UNBL. Para saber mais e explorar opções, entre em contato com support@unbiodiversitylab.org.

A Ferramenta ELSA usa o pacote *prioritizr* no backend como uma ferramenta de otimização espacial para executar uma análise ELSA. *prioritizr* suporta uma ampla gama de objetivos, restrições e penalidades para criar uma análise personalizada. As otimizações podem ser executadas rapidamente na UNBL (frequentemente em 3-5 minutos). Portanto, pode ser usado para gerar e refinar planos de conservação em tempo real durante reuniões de partes interessadas, e contribuir para um processo de tomada de decisão mais transparente, inclusivo e participativo para identificar áreas prioritárias para apoiar a implementação dos Objetivos 1, 2 e 3 do KMGBF, com poderosos co-benefícios para os Objetivos 4-12.

!!! note
    Definições da terminologia técnica mencionada no guia podem ser encontradas no [Anexo 1](12_annex1.md).

![Interface inicial da Ferramenta ELSA na UNBL](images/image001.png)
