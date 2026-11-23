---
source_rev: c3032f159853c012bf525d2ddafda22f41d814cd
translation_status: machine
---
# Acceder a los datos de UNBL en ArcGIS Pro (STAC)

UN Biodiversity Lab (UNBL) publica sus conjuntos de datos ráster a través de una API STAC. Si usted es miembro de un espacio de trabajo UNBL, puede conectar ArcGIS Pro a esta API, buscar en el catálogo y añadir rásteres de UNBL a su mapa sin descargarlos primero.

Esta página explica cómo configurar la conexión y qué esperar de las capas que añada.

## ¿Qué necesito antes de empezar?

- **Una cuenta de UNBL que pertenezca a un espacio de trabajo.** Cualquier persona puede buscar en el catálogo, pero solo los miembros de un espacio de trabajo pueden abrir los datos. Para solicitar un espacio de trabajo, consulte [¿Cómo solicito un espacio de trabajo UNBL?](1_basics.es.md#como-solicito-un-espacio-de-trabajo-unbl)
- **Una credencial** que indique a UNBL quién es usted: un token de API o una clave de API (consulte la sección siguiente).
- **ArcGIS Pro 3.5.3, o 3.6 o posterior.** Las versiones 3.x anteriores tienen un error conocido de STAC (Esri BUG-000164564) que impide cargar las capas y muestra el mensaje *Failed to add data: Unknown error*.

!!! note
    Se necesita una credencial para todos los conjuntos de datos, incluidos los marcados como públicos. Si solo necesita una copia de un conjunto de datos global, consulte [¿Cómo descargo conjuntos de datos globales sin recortar?](../unbl-public-platform/16_download_global_data.es.md)

## ¿Cómo obtengo una credencial?

Puede usar cualquiera de estas dos credenciales:

| Credencial | Duración | Recomendada para |
|---|---|---|
| **Clave de API** (API key) | No caduca | ArcGIS Pro y otros programas SIG de escritorio |
| **Token de API** (API token) | Aproximadamente una hora | Probar la conexión una vez o tareas breves |

Recomendamos una clave de API para ArcGIS Pro: se introduce una sola vez y no hay que sustituirla cada hora.

### Para solicitar una clave de API

1. Envíe un correo electrónico a <support@unbiodiversitylab.org> y solicite una clave de API STAC para ArcGIS Pro.
2. Indique la dirección de correo electrónico de su cuenta de UNBL y el nombre de su espacio de trabajo.
3. Mantenga en privado la clave que reciba. Cualquier persona que la tenga puede abrir los datos que su espacio de trabajo puede ver.

### Para obtener un token de API

1. Vaya al STAC Browser de UNBL en <https://stac.unbiodiversitylab.org>.
2. Haga clic en **Login** (Iniciar sesión) e inicie sesión con su cuenta de UNBL. Si aún no tiene una cuenta, haga clic en **Login** y luego en **Sign up** (Registrarse), y confirme su cuenta con el enlace del correo electrónico que reciba.
3. Haga clic en **API token** (token de API), en la misma fila de botones que **Login**.
4. En el panel que se abre, compruebe que su cuenta tiene acceso a un espacio de trabajo. Si no es así, los datos no se abrirán en ArcGIS Pro.
5. Copie el token. El panel también muestra cuándo caduca.

Para obtener más detalles técnicos, incluido el acceso desde Python y GDAL, consulte la [página de acceso a la API de UNBL](https://stac.unbiodiversitylab.org/api-access.html) (en inglés).

## ¿Cómo conecto ArcGIS Pro al STAC de UNBL?

1. En ArcGIS Pro, en la pestaña **Insert** (Insertar), haga clic en **Connections** (Conexiones), luego en **STAC Connection** (Conexión STAC) y después en **New STAC Connection** (Nueva conexión STAC).
2. En **Connection** (Conexión), introduzca `https://stac.api.unbiodiversitylab.org/`
3. Deje vacío **STAC API Authentication** (Autenticación de la API STAC). ArcGIS Pro solo ofrece aquí el inicio de sesión de Microsoft Azure, que UNBL no utiliza.
4. En **Custom Headers** (Encabezados personalizados), añada un encabezado:
    - Con una **clave de API**: clave `X-API-Key`, valor: su clave de API.
    - Con un **token de API**: clave `Authorization`, valor: `Bearer`, un espacio y, a continuación, su token (por ejemplo, `Bearer eyJhbGci...`).
5. Deje vacío **Cloud Storage Connections** (Conexiones de almacenamiento en la nube).
6. Haga clic en **OK** (Aceptar) para guardar la conexión.

!!! tip
    Copie y pegue su credencial directamente en el cuadro de diálogo de ArcGIS Pro. Un token de API es muy largo (unos 5700 caracteres) y algunos programas, como una ventana de terminal, cortan el texto largo sin avisar al pegarlo. Un token recortado produce el mismo error que uno caducado.

!!! warning
    Mantenga **una sola** conexión STAC de UNBL en ArcGIS Pro. Una copia antigua de la conexión puede quedar seleccionada y seguir enviando una credencial caducada. Si necesita un token nuevo, edite la conexión existente en lugar de crear una segunda.

## ¿Cómo añado capas de UNBL a mi mapa?

1. Abra el panel **Explore STAC** (Explorar STAC) y elija la conexión de UNBL en la lista desplegable.
2. En la pestaña **Parameters** (Parámetros), elija la colección que desee.
3. Haga clic en **Select assets** (Seleccionar recursos) junto a la colección y marque los recursos (archivos) que desee añadir.
4. Ejecute la búsqueda.
5. En los resultados, añada al mapa los elementos que desee.

!!! note
    ArcGIS Pro fija los recursos elegidos en el momento de ejecutar la búsqueda. Si cambia los recursos, vuelva a ejecutar la búsqueda.

## ¿Cuánto duran las capas?

Las capas añadidas desde el STAC de UNBL son **temporales**. Cada capa se abre mediante un enlace seguro que caduca unas **dos horas** después de que UNBL lo emita (en la práctica, entre aproximadamente 1 hora y 45 minutos y 2 horas y 15 minutos después de añadirla). Usar una clave de API no cambia esto.

| Tarea | ¿Se necesita una credencial? |
|---|---|
| Buscar en el catálogo | No |
| Añadir un resultado de búsqueda al mapa | Sí |
| Volver a dibujar una capa añadida hace menos de dos horas | No |
| Volver a abrir una capa guardada en un proyecto de ArcGIS Pro | No es posible: vuelva a buscar y añada el elemento de nuevo |

Cuando el enlace caduca, la capa deja de dibujarse. Para seguir trabajando, vuelva a buscar y añada el elemento de nuevo.

!!! tip
    Para conservar un conjunto de datos durante más tiempo, descargue el archivo GeoTIFF mientras el enlace siga siendo válido y añádalo a ArcGIS Pro como ráster local.

## ¿Qué significan estos mensajes de error?

| Mensaje de error | Causa probable | Qué hacer |
|---|---|---|
| `401 Invalid token` o `401 Token expired` | El token se cortó, se escribió mal o ha caducado | Obtenga un token nuevo y péguelo directamente en la conexión |
| `401 Invalid API key` | La clave de API es incorrecta o se ha desactivado | Compruebe el valor de `X-API-Key` o escriba a <support@unbiodiversitylab.org> |
| `HTTP error code : 404` en una ruta que empieza por `/vsiaz/` | No llegó ninguna credencial a UNBL | Compruebe la entrada de **Custom Headers** de la conexión |
| `403` en una dirección que contiene `blob.core.windows.net` | El enlace seguro de la capa ha caducado | Vuelva a buscar y añada el elemento de nuevo |
| `unsupported data type` con la mención `StacItemHref` | Hay seleccionada una conexión antigua o duplicada | Mantenga una sola conexión de UNBL y selecciónela en **Explore STAC** |
| `Failed to add data: Unknown error` | Un error conocido de ArcGIS Pro (BUG-000164564) | Actualice a ArcGIS Pro 3.5.3, o 3.6 o posterior |
| Las rutas siguen empezando por `/vsiaz/` después de iniciar sesión | Su cuenta no pertenece a ningún espacio de trabajo | [Solicite un espacio de trabajo UNBL](1_basics.es.md#como-solicito-un-espacio-de-trabajo-unbl) o pida al administrador de su espacio de trabajo que le añada |

Para otros problemas, escríbanos a <support@unbiodiversitylab.org>.

## Más información

- [Acceso a la API de UNBL](https://stac.unbiodiversitylab.org/api-access.html) (en inglés)
- [Crear una conexión STAC](https://doc.esri.com/en/arcgis-pro/latest/help/data/imagery/create-a-stac-connection.html) (Esri, en inglés)
- [Seleccionar recursos STAC](https://pro.arcgis.com/en/pro-app/3.4/help/data/imagery/selecting-stac-assets.htm) (Esri, en inglés)
