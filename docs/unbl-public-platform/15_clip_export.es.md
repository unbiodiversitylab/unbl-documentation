---
source_rev: 84de361b4bb37116d7f5388c69d43eb4d5bb4e9d
translation_status: machine
---
# ¿Cómo puedo recortar y exportar conjuntos de datos?

Los usuarios registrados en UN Biodiversity Lab pueden:

- Recortar conjuntos de datos ráster a un área de interés y descargarlos para utilizarlos en un software SIG de escritorio--esta función permite a los usuarios acceder a los datos subyacentes, evitando el ancho de banda y el almacenamiento necesarios para descargar y trabajar con un conjunto de datos global;

- Descargar el archivo de límites de una zona de interés en formato GeoJSON para utilizarlo en un programa de SIG de escritorio. 

<details class="unbl-video">
  <summary>▶️ ¿Prefieres el vídeo? ¡Haz clic aquí!</summary>

  <div class="video-wrapper">
    <iframe
      src="https://www.youtube-nocookie.com/embed/FQQag2Gd6rU"
      title="UNBL tutorial"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
</details>

Para ello:

1. Haga clic en el botón «LUGARES» y seleccione los lugares de su interés.

2. Haga clic en el icono ![Más opciones (tres puntos)](images/icons/ellipsis-icon.png){style="display: inline; width: 1em; height: 1em; width: 2em;"} situado a la derecha del nombre del país y seleccione «Descargar GeoJSON» para descargar el archivo de límites de la zona que le interese, o haga clic en «Recortar y exportar capas» si desea recortar y descargar un conjunto de datos específico. Si elige la segunda opción, siga los pasos adicionales 3 a 6 que se describen a continuación.

	![Menú del lugar Colombia abierto, con «Recortar y exportar capas» y «Descargar GeoJSON»](images/clip-export-01.png)

3. Escriba el nombre o seleccione los datos que desea descargar. Si los datos contienen capas de varios años, seleccione el año que desea descargar. Tiene la opción de descargar las capas recortadas en formato ráster GeoTIFF o en formato de archivo de imagen PNG.

4. Haga clic en «Descargar».

	- La fuente de datos seleccionada se recortará al cuadro delimitador que rodea al país.
	
	- Se añade un pequeño margen al cuadro delimitador, lo que ampliará ligeramente el área recortada. Esto ayuda a garantizar que cualquier incongruencia entre la frontera nacional utilizada en UNBL y el archivo oficial de fronteras nacionales que desee utilizar no provoque la pérdida de datos. Se parte de la base de que las diferencias son potencialmente pequeñas. Si no es así, póngase en contacto con nosotros en <support@unbiodiversitylab.org> para obtener ayuda.
	
	!!! note
		Si descarga GeoTIFFs, se trata de datos sin procesar y no incluirán información de estilo.

	![Panel de recorte y exportación con la selección de capa, el formato PNG o GeoTIFF y «Descargar» resaltados](images/clip-export-02.png)
	
5. Acceda al archivo comprimido .zip descargado en su carpeta de descargas una vez completada la descarga.

6. Los datos descargados se pueden abrir en cualquier software SIG para su posterior análisis.