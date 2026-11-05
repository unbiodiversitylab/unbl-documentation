---
source_rev: f7ed26d551a11a56e738091eda936cbdb44f5979
translation_status: machine
---

# Anexo 3: Registro de Cambios de las Capas de Datos

Esta página registra los cambios en las **capas de datos predeterminadas** utilizadas por la Herramienta de Planificación Espacial Integrada ELSA. Las capas de datos predeterminadas son las características de planificación, las restricciones de bloqueo (lock-in) y las restricciones de zonificación que ELSA proporciona para un nuevo análisis. El conjunto actual se detalla en el [Anexo 2 - Capas de datos](13_annex2.md).

Este registro solo abarca estas capas globales predeterminadas. Las capas nacionales u otras capas específicas de un país que se añaden a la configuración de ELSA de ese país no se incluyen aquí.

Las capas de datos cambian con el tiempo: las instituciones que producen los conjuntos de datos de origen los actualizan, aparecen conjuntos de datos mejores y la forma de preparar los datos para ELSA evoluciona. Este registro de cambios permite a los usuarios ver qué capas cambiaron, cuándo cambiaron y por qué, de modo que los resultados producidos en momentos distintos puedan compararse, interpretarse y citarse correctamente.

!!! note
    Los cambios enumerados aquí **no se aplican automáticamente** a las configuraciones de país existentes. Los datos de entrada de cada configuración (su pila de datos) deben actualizarse antes de que los nuevos análisis utilicen las capas modificadas. Los análisis que ya se han ejecutado conservan las capas de datos con las que se ejecutaron y sus resultados no se vuelven a calcular. Para saber si una configuración utiliza las capas actualizadas, consulte [Soporte y Contacto](11_support.md).

## Cómo leer este registro de cambios

Cada entrada describe un cambio en una capa de datos predeterminada, utilizando uno de los siguientes tipos de cambio.

| Tipo de cambio | Significado |
|----------------|-------------|
| Añadida | Se introdujo una nueva capa predeterminada. |
| Actualizada | El mismo conjunto de datos se sustituyó por una versión o edición más reciente de la misma fuente. |
| Sustituida | La capa se sustituyó por un conjunto de datos diferente, de la misma fuente o de otra distinta. |
| Reprocesada | El conjunto de datos subyacente no cambió, pero sí la forma en que se prepara para ELSA (por ejemplo, remuestreo, reescalado o enmascaramiento). |
| Renombrada | Solo cambió el nombre de la capa que se muestra en la herramienta; los datos subyacentes son los mismos. |
| Eliminada | La capa ya no se utiliza de forma predeterminada. |

## Cambios previstos

Cambios que se esperan pero que aún no se han aplicado. Las fechas son indicativas y pueden cambiar.

No hay cambios previstos por el momento.

<!--
PLANTILLA DE CAMBIOS PREVISTOS: sustituya la frase anterior por esta tabla cuando haya un cambio previsto.

| Fecha prevista | Capa | Tipo de cambio | Descripción | Estado |
|----------------|------|----------------|-------------|--------|
| Mes AAAA | Nombre de la capa | Actualizada | Descripción breve. | En revisión |
-->

## Historial de cambios {#change-history}

Los cambios se enumeran comenzando por el más reciente.

<!--
PLANTILLA DE ENTRADA — copie el bloque siguiente para añadir una nueva entrada
con fecha, y tradúzcala en las versiones en, fr, pt y ru de esta página.

### AAAA-MM-DD

| Capa | Tipo de cambio | Fuente anterior | Nueva fuente | Motivo del cambio |
|------|----------------|-----------------|--------------|-------------------|
| Nombre de la capa | Actualizada | Autor et al., AÑO | Autor et al., AÑO | Explicación breve. |

**Efecto en los análisis:** Cómo afecta este cambio a los resultados de ELSA (por
ejemplo, qué Metas del MMB-KM o zonas de acción se ven afectadas).
-->

No se ha registrado ningún cambio desde que se inició este registro en noviembre de 2026. Los cambios anteriores no están registrados.

## Preguntas sobre una capa específica

Para preguntas sobre una capa de datos concreta, su fuente o cómo un cambio afecta a un análisis existente, consulte [Soporte y Contacto](11_support.md).
