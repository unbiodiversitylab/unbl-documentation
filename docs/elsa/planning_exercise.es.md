---
source_rev: bb4fcb9fbf090a2f79f72b5f2e2d6126feaaf8ef
translation_status: machine
---
# Pruébelo primero: un ejercicio práctico de planificación

La herramienta ELSA le pide que establezca metas basadas en el área, ponderaciones y un factor de penalización de los límites. Después, una computadora calcula dónde debe ir cada acción. En esta página puede tomar usted mismo el mismo tipo de decisión, en una cuadrícula pequeña, antes de usar la herramienta con datos nacionales. Lleva unos diez minutos. Nada de lo que haga aquí se guarda ni se envía a ningún sitio.

!!! note "Créditos"
    Este ejercicio está adaptado del *Conservation Planning Exercise* (Ejercicio de planificación de la conservación) creado por Trevor Wiens, Apropos Information Systems Inc., y alojado por PacMARA y The University of Queensland en [marxansolutions.org](https://marxansolutions.org/getting-started/). Los datos de esta página son inventados para practicar.

<!-- Cuando se reciban los permisos indicados en elsa-planning-exercise/PERMISSIONS.md, añada «Utilizado y adaptado con permiso.» a los créditos, en los cinco idiomas. -->

## Dos maneras de plantear la pregunta de planificación {#two-questions}

Las herramientas de planificación espacial responden a una de estas dos preguntas:

| | Menor costo | Máximo valor en el área disponible |
|---|---|---|
| **La pregunta** | ¿Cuál es el conjunto de lugares más barato que cumple todas las metas de representación? | Con una cantidad fija de tierra para cada acción, ¿dónde podemos asegurar el máximo valor? |
| **Usted establece** | Una meta de representación para cada característica de planificación | Una meta basada en el área para cada acción y una ponderación para cada característica de planificación |
| **Lo utilizan** | Marxan y el objetivo de conjunto mínimo (minimum set) de prioritizr | La herramienta ELSA (el objetivo de máxima utilidad (maximum utility) de prioritizr) |

La primera pestaña de abajo es el rompecabezas clásico con el que aprenden muchos planificadores. La segunda es una versión pequeña del problema que la herramienta ELSA resuelve para su país.

## El ejercicio {#exercise}

=== "Menor costo"

    Cada cuadrado es una [unidad de planificación](12_annex1.md#planning-units). Cada unidad de planificación tiene un costo y una cantidad de tres características de planificación: A, B y C.

    1. En **Mostrar en el mapa**, elija lo que muestra la cuadrícula: el costo o la cantidad de una característica.
    2. Haga clic en las unidades de planificación para seleccionarlas, o use las teclas de flecha y la barra espaciadora. Haga clic de nuevo en una unidad de planificación seleccionada para quitarla.
    3. Cumpla todas las metas de representación de la tabla con la puntuación más baja que pueda.
    4. Elija **Buscar con la computadora** y **Mostrar la mejor respuesta** para comparar su respuesta con la de la computadora.
    5. Cambie el **Factor de penalización de los límites (BPF)** y vuelva a intentarlo. Un BPF más alto favorece los grupos compactos de unidades de planificación.

    <div class="planning-exercise" data-mode="mincost" markdown>
    *Este ejercicio necesita JavaScript. Si no puede verlo, vuelva a cargar la página o pruebe con otro navegador.*
    </div>

    La puntuación suma tres elementos. Cuanto más baja, mejor.

    - **Costo**: el costo total de las unidades de planificación seleccionadas.
    - **Penalización de los límites**: el BPF multiplicado por la longitud del borde exterior de su selección. Cada lado de una unidad de planificación mide 10. Los lados compartidos por dos unidades de planificación seleccionadas no cuentan.
    - **Penalización por déficit**: 100 por cada unidad que falte para cumplir una meta de representación.

    !!! tip "Qué significa esto en ELSA"
        La herramienta ELSA usa el mismo [factor de penalización de los límites](05_editing_analysis.md#fig-adjust-bpf) para que las zonas de acción sean más compactas. Pero no busca el menor costo. La segunda pestaña muestra lo que hace en su lugar.

=== "Al estilo de ELSA"

    Aquí cada unidad de planificación puede recibir una de tres acciones: **Proteger**, **Restaurar** o **Gestionar**. Cada acción tiene una [meta basada en el área](12_annex1.md#area-based-target): el número máximo de unidades de planificación que puede abarcar. Su objetivo es asegurar el mayor valor ponderado posible para cuatro características de planificación: biodiversidad, almacenamiento de carbono, suministro de agua y medios de vida.

    1. Elija una acción en **Acción que aplicar** y, después, haga clic en las unidades de planificación para asignarles esa acción. Haga clic de nuevo en una unidad de planificación para quitarle la acción.
    2. En **Mostrar en el mapa**, elija **Tipo de terreno**. Cada acción solo está permitida en algunos tipos de terreno, como las [zonas de acción](12_annex1.md#action-zones) de ELSA. No se permite ninguna acción en las zonas urbanas, y Proteger solo se permite en terreno intacto o degradado.
    3. El área protegida existente (contorno discontinuo) está [bloqueada](12_annex1.md#lock-in-features) para Proteger. Puede desactivar el bloqueo.
    4. Elija **Mapa de calor (valor ponderado)** para ver dónde es más alto el valor ponderado, como en los [mapas de calor](07_viewing_heatmaps.md) de ELSA.
    5. Abra **Configuración** para cambiar las metas basadas en el área y las [ponderaciones](12_annex1.md#weights); luego deje que la computadora vuelva a buscar y observe cómo cambia su mapa.
    6. Compare su mapa con la búsqueda por computadora y con la mejor respuesta.

    <div class="planning-exercise" data-mode="elsa" markdown>
    *Este ejercicio necesita JavaScript. Si no puede verlo, vuelva a cargar la página o pruebe con otro navegador.*
    </div>

    Cada acción asegura una parte distinta de cada característica. Por ejemplo, Proteger asegura todo el valor de biodiversidad de una unidad de planificación, pero poco de su valor para los medios de vida, y Gestionar hace lo contrario. La puntuación es el valor ponderado asegurado menos la penalización de los límites. Cuanto más alta, mejor.

    !!! tip "Qué significa esto en ELSA"
        Cada ajuste de aquí corresponde a un ajuste de la herramienta ELSA: metas basadas en el área, bloqueo, ponderaciones y factor de penalización de los límites (consulte [Edición de una ejecución de análisis](05_editing_analysis.md)). La herramienta ELSA resuelve el mismo tipo de problema para cada unidad de planificación de su país, con cuatro acciones y muchas más características de planificación.

## Por qué lo hace una computadora {#why-a-computer}

Una cuadrícula de 100 unidades de planificación se puede seleccionar de 2^100^ maneras diferentes, aproximadamente un quintillón (un 1 seguido de 30 ceros). Nadie podría comprobarlas una por una. Un país en la herramienta ELSA tiene decenas de miles de unidades de planificación.

- La **búsqueda por computadora** utiliza el recocido simulado (simulated annealing), el método que utiliza Marxan. Hace muchos pequeños cambios al azar y conserva la mayoría de los cambios que mejoran la puntuación. Encuentra buenas respuestas rápidamente, pero cada ejecución da una respuesta ligeramente distinta y no puede saber a qué distancia está de la mejor respuesta.
- La **mejor respuesta** se calculó con prioritizr, el software en el que se basa la herramienta ELSA, utilizando un solucionador exacto. En una cuadrícula tan pequeña, es la mejor respuesta posible para esos ajustes. Para un país entero, la herramienta ELSA se detiene cuando su respuesta está a menos del 5 % de la mejor respuesta posible, de modo que un análisis tarde minutos en lugar de días.

Ejecute la búsqueda por computadora varias veces y compare sus respuestas con la mejor respuesta.

## Próximos pasos {#next-steps}

- Use la herramienta ELSA con sus datos nacionales: consulte [Crear una nueva ejecución de análisis](04_creating_analysis.md) y [Edición de una ejecución de análisis](05_editing_analysis.md).
- Obtenga más información sobre la planificación sistemática de la conservación en el [Curso autodidáctico de planificación espacial integrada](https://www.learningfornature.org/en/courses/integrated-spatial-planning-2).
- Encuentre el *Conservation Planning Exercise* original y los materiales de formación sobre Marxan en [marxansolutions.org](https://marxansolutions.org/getting-started/).
- Obtenga más información sobre prioritizr en [prioritizr.net](https://prioritizr.net).
