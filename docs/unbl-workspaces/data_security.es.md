# Hoja informativa: Almacenamiento de datos nacionales añadidos a espacios de trabajo en UN Biodiversity Lab

## Control de acceso general para su espacio de trabajo UNBL

**Conceptos básicos de los espacios de trabajo seguros de UNBL**

Los espacios de trabajo de UNBL proporcionan un área de trabajo segura donde se pueden añadir datos nacionales o subnacionales y compartirlos con un conjunto de usuarios especificados. Ofrecen a los usuarios con cualquier nivel de experiencia en SIG la capacidad de colaborar en proyectos de datos espaciales utilizando sus propios datos y lugares. Los usuarios no comerciales de UNBL pueden [solicitar un espacio de trabajo de UNBL para](https://unbiodiversitylab.org/en/unbl-workspaces/):

- Invitar a una comunidad de usuarios relevantes para colaborar y utilizar datos espaciales nacionales y globales;

- Conectarse a repositorios de datos espaciales nacionales existentes, permitiendo que todos los datos relevantes se consoliden en una ubicación y garantizando actualizaciones automáticas desde la fuente original;

- Cargar conjuntos de datos nacionales/subnacionales y áreas de interés;

- Etiquetar datos nacionales para identificar claramente los objetivos de política o proyectos relevantes que se utilizarán para apoyar;

- Visualizar conjuntos de datos nacionales/subnacionales junto con cualquiera de las capas de datos globales disponibles en UNBL; y

- Calcular cualquier métrica de UNBL utilizando la capa de límite nacional oficial o capas de límites subnacionales oficiales.

**Acceso a un espacio de trabajo seguro de UNBL**

Cuando solicite un espacio de trabajo de UNBL, se le asignará como propietario del espacio de trabajo. Puede asignar roles a individuos o grupos de usuarios para determinar su nivel de acceso. Estos roles incluyen:

- *Propietarios*: Designados por el país para tomar el control del espacio de trabajo. Los propietarios serán responsables de invitar y otorgar acceso a otros usuarios, así como de añadir otros administradores.

- *Administradores*: Pueden añadir y gestionar usuarios, asignar roles a usuarios como editores y visualizadores, gestionar los activos del espacio de trabajo a través de la herramienta de administración y ver todos los activos del espacio de trabajo en la vista de mapa.

- *Editores*: Pueden gestionar los activos del espacio de trabajo a través de la herramienta de administración y ver todos los activos del espacio de trabajo en la vista de mapa. Los editores deben tener experiencia en el uso de software SIG para poder cargar y editar capas de datos.

- *Visualizadores*: Pueden ver todos los activos del espacio de trabajo en la vista de mapa. Los visualizadores no pueden acceder a la herramienta de administración.

Ningún usuario fuera de los que usted asigne podrá acceder a su espacio de trabajo.

Los administradores de la plataforma UNBL en PNUD y UNEP-WCMC pueden crear/eliminar espacios de trabajo seguros de UNBL y añadir/eliminar usuarios a un espacio de trabajo seguro dado. Los administradores de la plataforma UNBL solo harán esto a petición expresa del propietario de un espacio de trabajo.

## Detalles de almacenamiento de datos para capas añadidas a su espacio de trabajo UNBL

**Conceptos básicos para añadir una 'capa' a un espacio de trabajo seguro en UNBL**

Los datos geoespaciales pueden cargarse y/o vincularse dentro de un espacio de trabajo seguro de UNBL, dando así a todos los miembros del espacio de trabajo la capacidad de ver estos datos en UNBL sin necesidad de ninguna experiencia previa en SIG.

Los espacios de trabajo de UNBL admiten la carga de datos ráster geoespaciales en el siguiente formato de archivo:

- GeoTIFF (Georeferenced Tagged Image File Format)

Los espacios de trabajo de UNBL también admiten la conexión a datos geoespaciales externos a través de cualquiera de los siguientes proveedores de servicios de teselas externos:

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Vector Tile Services (servidos como pg_tileserv o Martin)

Los conjuntos de datos dentro de un espacio de trabajo solo son descubribles por los miembros del espacio de trabajo. Sin embargo, si un usuario con el rol de administrador del espacio de trabajo quiere que un conjunto de datos particular dentro de su espacio de trabajo sea descubrible por cualquier persona fuera de su espacio de trabajo, puede habilitar esto usando una opción de URL de capa pública. Los usuarios con estado de administrador pueden revocar este permiso en cualquier momento.

Importante destacar que cualquier conjunto de datos en un espacio de trabajo de UNBL también puede visualizarse junto con conjuntos de datos globales publicados en la plataforma pública de UNBL.

**Almacenamiento de datos para capas cargadas (GeoTIFF)**

Los archivos GeoTIFF cargados en espacios de trabajo de UNBL se almacenarán en un contenedor de blob de almacenamiento privado seguro designado de Microsoft Azure.

- Cuando los usuarios eliminan la capa, los archivos correspondientes se eliminan automáticamente del almacenamiento.

- El contenedor de almacenamiento está alojado en el Centro de Datos de **Europa del Norte** de Azure, que se encuentra en Irlanda.

- Los usuarios no pueden acceder al contenedor de almacenamiento directamente. Los usuarios solo pueden cargar y eliminar archivos a través de la interfaz de usuario del espacio de trabajo.

**Almacenamiento de datos para conjuntos de datos creados usando datos geoespaciales externos**

Los datos relacionados con los conjuntos de datos creados por los datos geoespaciales alojados en los siguientes servicios no están alojados dentro de UNBL. La seguridad de los datos de estos conjuntos de datos puede depender del servicio externo respectivo.

- WMS (Web Map Service)

- WMTS (Web Map Tile Service)

- XYZ Tile Service

- Mapbox

- Esri ArcGIS API Map Service

- Vector Tile Services (servidos como pg_tileserv o Martin)

## Detalles de almacenamiento de datos para lugares añadidos a su espacio de trabajo UNBL

**Conceptos básicos para cargar un 'lugar' en un espacio de trabajo seguro en UNBL**

Los espacios de trabajo seguros de UNBL permiten a los usuarios cargar lugares en un entorno seguro. Añadir un nuevo lugar proporciona a los usuarios la capacidad de utilizar todas las funcionalidades de UNBL para un área de interés subnacional, nacional o transfronteriza. Una vez que el lugar se ha añadido a un espacio de trabajo de UNBL, los usuarios pueden: (1) mostrar métricas dinámicas para esta ubicación; y (2) recortar cualquier capa ráster de la plataforma pública de UNBL (solo datos con licencia de acceso abierto) a esta ubicación y descargarla para trabajar más en un software SIG de escritorio. Añadir un lugar implica cargar un archivo vectorial a UNBL.

Los espacios de trabajo de UNBL admiten la carga de lugares utilizando los siguientes tipos de archivos: GeoJSON (.geojson), GeoJSON Lines (.geojsonl), archivos de Google Earth (.kml, .kmz) o ESRI Shapefiles (.zip que contiene archivos .shp, .dbf, .shx, .prj).

**Seguridad de datos para 'lugares' cargados**

- Todos los archivos que no sean geojson se convertirán en .geojson antes de cargarse en el backend de UNBL.

- Los archivos .geojson cargados se almacenan en la base de datos Mongo de UNBL (Mongo DB).

- Cuando el usuario elimina el lugar, los datos se eliminan de la Mongo DB activa de UNBL.

- La Mongo DB de UNBL está alojada en el **Centro de Datos de Europa del Norte**, que se encuentra en Irlanda.