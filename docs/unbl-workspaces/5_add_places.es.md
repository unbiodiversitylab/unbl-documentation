---
source_rev: 7d0c639514079856284ffd6d269b0caf62a4ac8f
translation_status: machine
---
# Agregar lugares a su espacio de trabajo y visualizar métricas dinámicas

## ¿Cómo agrego lugares?

Agregar un nuevo lugar a su espacio de trabajo le proporciona la capacidad de utilizar todas las funcionalidades de UNBL para cualquier área de interés (área protegida, nivel administrativo subnacional, área transfronteriza, límite de comunidad indígena, etc.). Una vez que el lugar ha sido agregado a su espacio de trabajo UNBL, podrá: (1) mostrar las métricas dinámicas estándar de UNBL para esta área de interés; (2) mostrar sus propias métricas personalizadas (como estadísticas zonales) para esta área de interés; y (3) recortar cualquier capa ráster publicada en la plataforma pública UNBL (con una licencia de acceso abierto) a esta área de interés y luego descargarla como un archivo GeoTIFF para trabajo adicional en un software SIG de escritorio. Agregar un lugar implica cargar un archivo vectorial (polígono o multipolígono) a UNBL. Para obtener más información sobre la privacidad de los datos cargados, consulte nuestra [hoja informativa sobre seguridad de datos](data_security.es.md).

Para agregar un nuevo lugar:

1.	Navegue a la página 'Lugares' desde el menú desplegable en el lado izquierdo de la interfaz de administración.

2.	Haga clic en el botón 'CREAR NUEVO LUGAR'.

	![Página 'Lugares' de la interfaz de administración con el menú 'Lugares' y el botón 'CREAR NUEVO LUGAR' resaltados](images/add-places-01.png)

3.	En la página 'Nuevo lugar' que aparece, complete la siguiente información:

	a.	*Título*: Inserte el nombre del lugar. Recomendamos mantenerlos cortos y claros. Actualmente, no se permiten caracteres especiales.

	b.	*Tipo de lugar*: Seleccione la clase apropiada del menú desplegable. Esto será útil para filtrar sus búsquedas más tarde. Puede elegir entre *Biome or Ecosystem, Community and Indigenous Area, Country, Cross-Boundary Area, Marine, Other Jurisdiction, Protected Area, Species Range* o *Study Area*.

	!!! note
		Al elegir el tipo *Country*, se le pedirá que introduzca, de forma opcional, un código de país ISO3/M49 para su país. Esto permitirá mostrar para su área de interés las métricas dinámicas y los indicadores principales que solo están disponibles para lugares a nivel de país.

	c.	*Slug*: Inserte un identificador único para el lugar que contenga solo letras minúsculas, números y guiones. No se pueden usar espacios. Esto identificará de manera única su lugar de todos los demás dentro del sistema UNBL. Recomendamos usar el botón 'GENERA UN NOMBRE DEL SLUG' para ayudarle a generar un slug apropiado.

	d.	*Archivo de forma*: Cargue un archivo de polígono (o multipolígono) para definir su lugar. Los formatos soportados son GeoJSON (.geojson, .geojsonl), archivos de Google Earth (.kml, .kmz) o Shapefiles de ESRI (.zip que contenga archivos .shp, .dbf, .shx, .prj). Si usa un GeoJSON, el tamaño del archivo no debe ser mayor de 6MB. El sistema permite cargas de hasta 6MB, pero recomendamos encarecidamente usar archivos de no más de 2MB para un renderizado óptimo y cálculos de métricas. Si usa archivos de Google Earth o Shapefiles de ESRI, asegúrese de que el sistema de referencia de coordenadas sea WGS-84, también conocido como EPSG: 4326.

	En lugar de cargar un archivo, puede dibujar el lugar directamente en el mapa. Seleccione la pestaña *Dibujar en el mapa* (*Draw on Map*), haga clic en el botón de edición y, a continuación, haga clic en el mapa para agregar los vértices de su polígono. Puede:

	- dibujar varios polígonos, o polígonos con huecos;
	- mover un vértice arrastrándolo, o agregar un vértice haciendo clic cerca de uno existente;
	- eliminar un polígono y deshacer sus cambios recientes;
	- cambiar el nombre de una forma haciendo doble clic en su nombre, escribiendo el nuevo nombre y presionando Intro.

	Mientras dibuja, puede usar los controles del mapa para cambiar al mapa base satelital y mostrar etiquetas, carreteras o el globo 3D, lo que facilita trazar costas, ríos y otros elementos. También puede usar la pestaña *Dibujar en el mapa* en la página de edición de un lugar para cambiar la forma de un lugar existente.

	e.	Si toda la información ingresada es válida, el botón 'GUARDAR Y VER DETALLES' se iluminará en azul. Haga clic en este botón para cargar su lugar a UNBL.

	![Formulario 'Nuevo lugar' con Título, Slug, Tipo de lugar, carga del archivo de forma y 'GUARDAR Y VER DETALLES'](images/add-places-02.png)

4.	Una vez que guarde su nuevo lugar, será llevado a la página de edición del lugar. Para que su lugar sea descubrible y visible en la vista del mapa, debe publicar el lugar haciendo clic en el botón de activación 'Publicado'. Los lugares no publicados permanecen en la interfaz de administración hasta que esté listo para publicarlos en la vista del mapa UNBL.

	![Página de edición de un parque nacional con el botón de activación 'Publicado' resaltado](images/add-places-03.png)

## ¿Cómo edito lugares?

También puede hacer ediciones a lugares existentes y ver su lugar en un mapa base para inspeccionar visualmente que el archivo está correctamente orientado en la vista del mapa. Para hacer esto:

1.	Navegue a la página 'Lugares' desde el menú desplegable en el lado izquierdo de la interfaz de administración.

2.	Seleccione el lugar que le interesa de la lista de lugares haciendo clic en el icono ![Editar (lápiz)](images/icons/edit.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} en el lado más a la izquierda de la entrada del lugar.

	![Lista de 'Lugares' de la interfaz de administración con el icono de lápiz para editar un lugar resaltado](images/add-places-04.png)

3.	Haga clic en el botón 'VER Y CARGAR FORMA' cerca de la esquina superior derecha de la ventana del mapa base para ver información geoespacial básica sobre su lugar – incluyendo coordenadas del cuadro delimitador (extensión), área del lugar en hectáreas y las coordenadas del punto de origen – y cargar cualquier nueva versión del lugar que pueda tener en el futuro.

	![Página de edición del lugar con el botón 'VER Y CARGAR FORMA' sobre el mapa resaltado](images/add-places-05.png)

4.	Use el botón 'Elegir archivo' para cargar nuevos archivos para su lugar actualizado. Haga clic en 'ACTUALIZAR FORMA' para guardar sus cambios. También puede descargar su versión actual de este lugar a su computadora local como un GeoJSON haciendo clic en el botón 'Download GeoJSON' (debajo de la vista del mapa).

	![Panel de forma con 'Download GeoJSON', 'Elegir archivo' y 'ACTUALIZAR FORMA' resaltados junto a los datos de área](images/add-places-06.png)

## ¿Cómo muestro métricas para mis lugares agregados?

Las métricas dinámicas estándar de UNBL se vuelven automáticamente disponibles para su lugar tan pronto como lo carga en UNBL. Para mostrar métricas dinámicas para lugares dentro de su espacio de trabajo UNBL:

1.	a) Haga clic en el botón 'VER EN EL MAPA' en la parte inferior de la página de edición del lugar.

	![Parte inferior de la página de edición del lugar, debajo de las métricas del lugar, con 'VER EN EL MAPA' resaltado](images/add-places-07.png)

	**O**

	b) Navegue a la vista del mapa UNBL haciendo clic en el nombre de su espacio de trabajo en la interfaz de administración del espacio de trabajo en la esquina superior izquierda, y luego haga clic en 'Map View'.

	![Menú del nombre del espacio de trabajo abierto en la interfaz de administración, con una flecha hacia 'Vista del mapa'](images/add-places-08.png)

	En la pestaña 'LUGARES', busque y seleccione un lugar cargado en su espacio de trabajo UNBL.

	!!! note
		Los lugares se filtran por tipo *País* por defecto al abrir la vista del mapa UNBL. Si su lugar es de una categoría diferente, como Protected Area o Área transfronteriza y no de tipo *País*, entonces necesita hacer clic en el botón 'BORRAR' para quitar todos los filtros, o expandir el menú desplegable 'FILTERS' y desmarcar la casilla de país y seleccionar su filtro de interés para encontrar su lugar.

2.	Al seleccionar un lugar, las métricas dinámicas se mostrarán automáticamente en el panel izquierdo. Elija entre una lista de las diez métricas dinámicas estándar, la métrica marina o dos indicadores principales haciendo clic en el botón 'Metrics' (Métricas), 'Marine metrics' (Métricas marinas) o 'Headline indicators' (Indicadores principales).

	!!! note
		Las métricas de indicadores principales y la métrica de Protected Area solo están disponibles para lugares de tipo *País* con un código de país ISO3/M49 especificado. Por lo tanto, los lugares que no son de tipo *País* no tendrán la opción de elegir indicadores principales.

	![Panel del lugar Albania con el menú 'Tablero' abierto: 'Métricas', 'Indicadores de Cabecera' o 'Métricas marinas'](images/add-places-09.png)

3.	Haga clic en el botón de activación junto a cualquier métrica específica si desea ver este conjunto de datos en el mapa. Haga clic en el botón de alternancia de nuevo o en el icono ![Cerrar](images/icons/cross.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} en la leyenda de la capa para eliminar este conjunto de datos de la vista del mapa. También puede hacer clic en el icono de flecha hacia arriba para ocultar la métrica de la vista en la pestaña de métricas disponibles, y viceversa.

	![Botón de activación y flecha de plegado de la métrica Global Land Cover e icono de cierre de la leyenda resaltados, con la capa en el mapa](images/add-places-10.png)

4.	Haga clic en el icono ![Información](images/icons/info.png){style="display: inline; width: 1em; height: 2em; width: 2em;"} en el widget de métricas o en la leyenda de la capa (si tiene un conjunto de datos activado) para ver la información de la capa. Las páginas de información proporcionan una breve descripción de los datos, artículos relacionados para leer, datos sin procesar para descargar (si están disponibles gratuitamente) y especificaciones de licencia.

	![Icono de información de la métrica Global Land Cover resaltado, que abre la ventana de información de la capa](images/add-places-11.png)

5.	Para descargar datos de resumen para la métrica en formato .csv, .tsv o .json, haga clic en el icono ![Descargar](images/icons/download.png){style="display: inline; width: 1em; height: 2em; width: 2em;"}. Luego puede elegir si descargar datos de resumen a su directorio local en formato de valores separados por comas, valores separados por tabulaciones o formato .json. También puede descargar los datos desde enlaces de fuente en las páginas de información de la capa.

	![Icono de descarga de una métrica resaltado, con un menú que ofrece CSV, TSV y JSON](images/add-places-12.png)
