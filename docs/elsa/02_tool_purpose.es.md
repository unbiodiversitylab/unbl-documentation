# ¿Para qué sirve la herramienta ELSA?

La Herramienta ELSA permite a diversas partes interesadas evaluar de manera colaborativa las prioridades nacionales para el KMGBF, explorar compensaciones y sinergias, y desarrollar planes espaciales para apoyar la implementación nacional de los Objetivos 1, 2 y 3. La Herramienta ELSA produce mapas de priorización espacial que identifican áreas para protección, restauración, gestión y revegetación urbana que tendrán el mayor impacto hacia el logro de los Objetivos 1-12 del KMGBF. Los usuarios con un [espacio de trabajo UNBL](https://unbiodiversitylab.org/en/unbl-workspaces/) pueden usar la Herramienta ELSA para ejecutar una priorización espacial nacional personalizada como parte de un proceso participativo de planificación espacial. Pueden:

  - Mostrar capas de entrada (también conocidas como características de planificación) utilizadas para mapear los objetivos del KMGBF.
  - Crear y ejecutar nuevas ejecuciones de análisis ELSA con diferentes grupos de partes interesadas. Los usuarios pueden modificar y editar ejecuciones de análisis ELSA de las siguientes maneras:
    - Modificar el porcentaje del territorio nacional asignado para cada zona de acción basada en la naturaleza, incluyendo protección (Objetivo 3 del KMGBF), restauración (Objetivo 2 del KMGBF), gestión (Objetivo 10 del KMGBF) y/o revegetación urbana (Objetivo 12 del KMGBF). Estas configuraciones pueden adaptarse a los objetivos de política del país para conservación, restauración y protección, entre otros;
    - Elegir si se deben bloquear las Áreas Protegidas existentes para protección, asegurando que las Áreas Protegidas existentes sean seleccionadas dentro del mapa de solución;
    - Editar los pesos de cada una de las capas de entrada (características de planificación) en función de la importancia nacional de la característica mapeada y la confianza en los datos de entrada; y
    - Editar el parámetro de factor de penalización de límites para ajustar la cohesión espacial del mapa de acción.
  - Ver y descargar los mapas de calor y mapas de acción resultantes.
  - Descargar los mapas de calor y mapas de acción resultantes en formato ráster, que pueden utilizarse para análisis adicionales según las necesidades de las partes interesadas en software de Sistemas de Información Geográfica (SIG) de escritorio.
  - Descargar resultados y parámetros de una ejecución de análisis ELSA existente como una tabla de resumen, que está disponible en formatos .xlsx, .csv y .json.

La Herramienta ELSA **no puede** utilizarse para:

  - Agregar capas de datos adicionales para su inclusión como características de planificación o como restricciones de zonificación.
  - Reemplazar directamente las capas de entrada con otras capas de entrada.
  - Agregar características de bloqueo adicionales.

Estas modificaciones, así como el desarrollo de análisis personalizados adicionales para satisfacer las necesidades nacionales, están disponibles mediante recuperación de costos del equipo de UNBL. Para obtener más información y explorar opciones, comuníquese con support@unbiodiversitylab.org.

La Herramienta ELSA utiliza el paquete *prioritizr* en el backend como herramienta de optimización espacial para ejecutar un análisis ELSA. *prioritizr* admite una amplia gama de objetivos, restricciones y penalizaciones para crear un análisis personalizado. Las optimizaciones pueden ejecutarse rápidamente en UNBL (a menudo en 3-5 minutos). Por lo tanto, puede utilizarse para generar y refinar planes de conservación en tiempo real durante reuniones de partes interesadas, y contribuir a un proceso de toma de decisiones más transparente, inclusivo y participativo para identificar áreas prioritarias para apoyar la implementación de los Objetivos 1, 2 y 3 del KMGBF, con poderosos co-beneficios para los Objetivos 4-12.

!!! note
    Las definiciones de la terminología técnica mencionada en la guía se pueden encontrar en el [Anexo 1](12_annex1.md).

![Interfaz inicial de la Herramienta ELSA en UNBL](images/image001.png)
