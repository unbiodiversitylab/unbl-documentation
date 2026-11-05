---
source_rev: f7ed26d551a11a56e738091eda936cbdb44f5979
translation_status: machine
---

# Anexo 3: Registo de Alterações das Camadas de Dados

Esta página regista as alterações às **camadas de dados predefinidas** utilizadas pela Ferramenta de Planeamento Espacial Integrado ELSA. As camadas de dados predefinidas são as características de planeamento, as restrições de bloqueio (lock-in) e as restrições de zonamento que o ELSA fornece para uma nova análise. O conjunto atual está listado no [Anexo 2 - Camadas de Dados](13_annex2.md).

Este registo abrange apenas estas camadas globais predefinidas. As camadas nacionais ou outras camadas específicas de um país que são adicionadas à configuração ELSA desse país não são aqui incluídas.

As camadas de dados mudam ao longo do tempo: os conjuntos de dados de origem são atualizados pelas instituições que os produzem, ficam disponíveis conjuntos de dados melhores e a forma como os dados são preparados para o ELSA evolui. Este registo de alterações permite aos utilizadores ver que camadas mudaram, quando mudaram e porquê, de modo que os resultados produzidos em momentos diferentes possam ser comparados, interpretados e citados corretamente.

!!! note
    As alterações listadas aqui **não são aplicadas automaticamente** às configurações de país existentes. Os dados de entrada de cada configuração (a sua pilha de dados) têm de ser atualizados antes de as novas análises utilizarem as camadas alteradas. As análises que já foram executadas mantêm as camadas de dados com as quais foram executadas, e os respetivos resultados não são recalculados. Para saber se uma configuração utiliza as camadas atualizadas, consulte [Apoio e Contacto](11_support.md).

## Como ler este registo de alterações

Cada entrada descreve uma alteração a uma camada de dados predefinida, usando um dos seguintes tipos de alteração.

| Tipo de alteração | Significado |
|-------------------|-------------|
| Adicionada | Foi introduzida uma nova camada predefinida. |
| Atualizada | O mesmo conjunto de dados foi substituído por uma versão ou edição mais recente da mesma fonte. |
| Substituída | A camada foi substituída por um conjunto de dados diferente, da mesma fonte ou de outra. |
| Reprocessada | O conjunto de dados subjacente não mudou, mas mudou a forma como é preparado para o ELSA (por exemplo, reamostragem, reescalonamento ou mascaramento). |
| Renomeada | Apenas mudou o nome da camada apresentado na ferramenta; os dados subjacentes são os mesmos. |
| Removida | A camada deixou de ser utilizada por predefinição. |

## Alterações planeadas

Alterações esperadas, mas ainda não aplicadas. As datas são indicativas e podem mudar.

De momento, não estão previstas alterações.

<!--
MODELO DE ALTERAÇÕES PLANEADAS: substitua a frase acima por esta tabela quando estiver prevista uma alteração.

| Data prevista | Camada | Tipo de alteração | Descrição | Situação |
|---------------|--------|-------------------|-----------|----------|
| Mês AAAA | Nome da camada | Atualizada | Breve descrição. | Em análise |
-->

## Histórico de alterações {#change-history}

As alterações são listadas da mais recente para a mais antiga.

<!--
MODELO DE ENTRADA — copie o bloco abaixo para adicionar uma nova entrada com
data, e traduza-a para as versões en, es, fr e ru desta página.

### AAAA-MM-DD

| Camada | Tipo de alteração | Fonte anterior | Nova fonte | Motivo da alteração |
|--------|-------------------|----------------|------------|---------------------|
| Nome da camada | Atualizada | Autor et al., ANO | Autor et al., ANO | Breve explicação. |

**Efeito nas análises:** Como esta alteração afeta os resultados do ELSA (por
exemplo, quais metas do KMGBF ou zonas de ação são afetadas).
-->

Não foram registadas alterações desde o início deste registo, em novembro de 2026. As alterações anteriores não estão registadas.

## Dúvidas sobre uma camada específica

Para dúvidas sobre uma camada de dados específica, a sua fonte ou a forma como uma alteração afeta uma análise existente, consulte [Apoio e Contacto](11_support.md).
