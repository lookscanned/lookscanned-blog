---
date: "2026-04-05T14:00:00+08:00"
draft: false
title: "Cómo eliminar los metadatos de un PDF antes de compartirlo"
summary: "Tu PDF puede contener metadatos ocultos que revelan quién eres, qué software usaste y cuándo trabajaste en él. Esto es lo que debes revisar, cómo eliminarlo y cuándo convertirlo a un PDF con apariencia de escaneo hace el trabajo de forma más completa que cualquier editor de metadatos."
description: "Tu PDF puede contener metadatos ocultos que revelan quién eres, qué software usaste y cuándo trabajaste en él. Esto es lo que debes revisar, cómo eliminarlo y cuándo convertirlo a un PDF con apariencia de escaneo hace el trabajo de forma más completa que cualquier editor de metadatos."
tags: ["pdf", "privacidad", "metadatos", "seguridad documental", "documentos sensibles"]
keywords:
  - "cómo eliminar metadatos de pdf"
  - "riesgo de privacidad metadatos pdf"
  - "eliminar metadatos pdf antes de compartir"
  - "revisar metadatos pdf"
  - "datos ocultos en pdf"
  - "herramienta para eliminar metadatos pdf"
---

La semana pasada revisé los metadatos de un PDF que estaba a punto de enviar. Todavía contenía mi nombre completo, la ruta interna de archivos de mi empresa y la marca de tiempo exacta de cada revisión que había hecho durante el último mes.

La página se veía limpia. El archivo no lo estaba.

La mayoría de las personas nunca abren el panel de propiedades de un PDF antes de compartirlo. El contenido visible se lleva toda la atención. Pero el archivo en sí puede decir mucho más de lo que está impreso en la página, y esa capa oculta es de lo que trata esta publicación.

## La respuesta corta

Los metadatos de un PDF pueden incluir tu nombre, el software que usaste, marcas de tiempo de creación y modificación, historial de revisiones, comentarios e incluso coordenadas GPS de imágenes incrustadas.

Para eliminarlos, tienes varias opciones:

- usar un editor de metadatos o herramienta de saneamiento para eliminar campos específicos
- usar una herramienta de línea de comandos como exiftool para tener control total
- convertir el PDF a un archivo basado en imágenes con apariencia de escaneo, lo que reemplaza toda la estructura del documento y elimina todos los datos ocultos de una vez

Si el documento es definitivo y va a salir de tu organización, esa última opción es el paso individual más completo que puedes dar.

## Qué contienen realmente los metadatos de un PDF

Un PDF puede llevar tres capas de información más allá de lo que ves en la página.

La primera capa son las **propiedades del documento**. Estos son los metadatos en los que la mayoría de la gente piensa: nombre del autor, título, asunto, fecha de creación, fecha de modificación y el software que produjo el archivo. Abre cualquier PDF en un visor, revisa Archivo > Propiedades, y probablemente verás campos como "Autor: Juan García" y "Productor: Microsoft Word 2021". Esa información viaja con el archivo a donde sea que vaya.

La segunda capa son los **metadatos XMP e incrustados**. Es menos visible pero a menudo más reveladora. Si tu PDF contiene imágenes incrustadas, esas imágenes pueden aún llevar sus datos EXIF originales, incluyendo modelo de cámara, marcas de tiempo y coordenadas GPS. Los metadatos XMP también pueden incluir historial de edición, etiquetas personalizadas e información de licencias de fuentes. La mayoría de la gente no sabe que esta capa existe porque los visores estándar de PDF no la muestran.

La tercera capa son los **datos estructurales ocultos**. Dependiendo de cómo se creó y editó el PDF, el archivo puede contener historial de revisiones, texto eliminado pero recuperable, comentarios, anotaciones, valores predeterminados de campos de formulario, capas ocultas, JavaScript y archivos adjuntos incrustados. Esta es la capa que causa más daño cuando se filtra, porque puede incluir contenido que el autor pensó que había eliminado.

Si ya has pensado en este tipo de datos ocultos en el contexto de subir archivos a herramientas web, [¿Es seguro usar herramientas PDF en línea para documentos sensibles?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) cubre el modelo de confianza más amplio.

## Por qué esto importa más de lo que la gente cree

Las filtraciones de metadatos no son dramáticas. Son silenciosas, específicas y difíciles de deshacer una vez que el archivo ha sido compartido.

**Identificación del autor cuando la anonimidad importa.** Si el PDF fue creado por una persona específica, el campo de autor o la ruta interna del archivo pueden vincular a esa persona. Esto importa para denunciantes, informes anónimos, documentos filtrados o cualquier situación donde se supone que la identidad del remitente no debe estar en el archivo.

**El historial de revisiones expone la estrategia de negociación.** Un PDF de contrato que aún contiene cambios rastreados o metadatos de revisión puede revelar tu posición inicial, lo que eliminaste y lo que suavizaste antes de enviar la versión final. La otra parte no necesita ser técnica para encontrar esto. Algunos visores de PDF muestran automáticamente los datos de revisión.

**Las marcas de tiempo revelan momentos sensibles.** Las fechas de creación y modificación le dicen a alguien cuándo se inició el documento, cuándo se cambió por última vez y cuántas veces se modificó. En contextos legales, de cumplimiento normativo o competitivos, ese tipo de información temporal puede importar más que el contenido en sí.

**Coordenadas GPS de imágenes incrustadas.** Si pegaste una foto en el PDF y esa foto aún lleva datos de ubicación EXIF, las coordenadas GPS de donde se tomó la imagen ahora están incrustadas en el archivo. La mayoría de la gente no piensa en esto porque los metadatos viven dentro del objeto de imagen, no en el panel de propiedades del PDF.

**Las versiones de software revelan herramientas internas.** Campos como "Productor: Adobe Acrobat Pro DC 24.1.30225" o "Creador: Microsoft Word para Microsoft 365" le dicen a alguien qué herramientas y versiones usa tu organización. Para la mayoría de los documentos esto es trivial. Para contextos sensibles, es una fuga de información innecesaria.

Nada de esto es hipotético. Son las filtraciones de metadatos aburridas que realmente ocurren.

## Cómo verificar qué metadatos contiene tu PDF

Antes de eliminar nada, mira lo que realmente hay en el archivo.

**Diálogo de propiedades del visor de PDF.** En la mayoría de los lectores de PDF, Archivo > Propiedades o Propiedades del documento muestra los campos básicos: autor, título, asunto, fecha de creación, fecha de modificación y aplicación productora. Esto captura la primera capa pero no detecta casi nada más.

**exiftool en la línea de comandos.** Ejecutar `exiftool documento.pdf` te mostrará todo: propiedades del documento, datos XMP, EXIF de imágenes incrustadas y campos personalizados. Este es el método de inspección más completo, pero requiere comodidad con una terminal. Si nunca lo has usado antes, vale la pena instalarlo solo para ver lo que un solo PDF puede contener.

**Visores de metadatos en línea.** Algunos sitios web te permiten subir un PDF para inspeccionar sus metadatos. Si la razón por la que estás revisando los metadatos es la privacidad, subir el archivo a un servicio de terceros para inspeccionarlo es una decisión cuestionable. Estás tratando de averiguar si el archivo filtra información, y el primer paso es enviarlo a un desconocido.

Una vez que sabes lo que hay en el archivo, la pregunta es cómo eliminarlo.

## Métodos para eliminar los metadatos de un PDF

No existe un único método perfecto. La elección correcta depende de lo que necesitas conservar y de qué tan exhaustivo necesitas ser.

### Adobe Acrobat (Sanear documento)

Acrobat Pro incluye las funciones "Eliminar información oculta" y "Sanear documento" que pueden eliminar metadatos, texto oculto, comentarios, datos de formularios, archivos adjuntos y otro contenido no visible. Este es uno de los enfoques más completos si necesitas mantener la capa de texto intacta y el archivo con búsqueda habilitada.

La limitación es que requiere una licencia de pago de Acrobat Pro. Si ya la tienes, es una opción sólida. Si no, este no es el tipo de problema que justifica la suscripción por sí solo.

### exiftool y otras herramientas CLI

exiftool puede eliminar quirúrgicamente campos de metadatos específicos o eliminar todo de un PDF en un solo comando. Es gratuito, funciona en cualquier plataforma y da control preciso sobre exactamente lo que se elimina.

La limitación es la barrera técnica. También se enfoca en campos de metadatos en lugar de datos estructurales ocultos. Si el PDF contiene historial de revisiones, capas ocultas u objetos incrustados, exiftool no los detectará. Es excelente en lo que hace, pero no cubre todas las capas.

### Herramientas de eliminación de metadatos en línea

Varios sitios web te permiten subir un PDF, eliminar los metadatos y descargar la versión limpia. El flujo de trabajo es simple y no requiere instalación de software.

La limitación debería ser obvia. Estás subiendo un documento a un servidor de terceros para resolver un problema de privacidad. Es un poco como entregarle tu diario a un desconocido para que arranque la página con tu dirección.

Si el archivo es de bajo riesgo, eso puede ser un intercambio aceptable. Si estás eliminando metadatos porque el documento es sensible, este enfoque introduce exactamente el tipo de exposición que estás tratando de evitar. Para más información sobre ese intercambio, [¿Es seguro usar herramientas PDF en línea para documentos sensibles?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) lo cubre en detalle.

### Imprimir a PDF

Reimprimir un PDF a través de una impresora virtual crea un nuevo archivo que a menudo elimina algunos metadatos y aplana ciertos elementos. Es gratuito y está integrado en la mayoría de los sistemas operativos.

Los resultados son inconsistentes. Algunas impresoras virtuales inyectan sus propios metadatos en la salida. Algunas eliminan datos XMP, otras no. Los datos EXIF de imágenes incrustadas pueden o no sobrevivir al proceso. Si usas este método, siempre verifica el resultado en lugar de asumir que está limpio.

### Conversión a un PDF con apariencia de escaneo

Este enfoque convierte cada página del PDF en una imagen, luego envuelve esas imágenes en un nuevo PDF. Debido a que toda la estructura del documento se reemplaza, todos los datos ocultos se eliminan: metadatos, capas de texto, comentarios, historial de revisiones, archivos incrustados, campos de formulario, JavaScript, todo. La salida es un nuevo PDF que contiene solo imágenes renderizadas de las páginas.

La contrapartida es que el archivo ya no permite búsqueda de texto. Se comporta como una imagen de cada página. Para documentos que son definitivos y van a salir de tu organización, esa contrapartida a menudo vale la pena. Para documentos que aún necesitan ser buscados, citados o editados posteriormente, no lo vale.

Ese es el trabajo que hace [Look Scanned](https://lookscanned.io). Convierte el PDF a una versión con apariencia de escaneo localmente en tu navegador, así que el archivo nunca sale de tu dispositivo. El resultado es un PDF limpio basado en imágenes sin datos ocultos, sin capas de texto, sin metadatos del original y sin procesamiento del lado del servidor del que preocuparse.

## Comparación

| Método | Elimina propiedades del documento | Elimina capas ocultas | Elimina EXIF de imágenes | Mantiene búsqueda de texto | Requiere subida | Costo |
| --- | --- | --- | --- | --- | --- | --- |
| Adobe Acrobat (Sanear) | Sí | Sí | Depende de la configuración | Sí | No | De pago |
| exiftool / CLI | Sí | Parcial | Sí | Sí | No | Gratis |
| Herramientas de metadatos en línea | Generalmente | Generalmente no | A veces | Sí | Sí | Gratis |
| Imprimir a PDF | Parcialmente | Parcialmente | A veces | Generalmente | No | Gratis |
| Conversión a escaneo (ej. Look Scanned) | Sí | Sí | Sí | No | No (navegador local) | Gratis |

Ninguna fila es perfecta para todas las situaciones. La pregunta siempre es qué contrapartidas importan para este archivo específico.

## Cuándo tiene sentido cada enfoque

**El documento aún está en proceso.** Elimina los metadatos con Acrobat o exiftool. Mantén la capa de texto. La eliminación de metadatos en esta etapa es mantenimiento, no el evento principal.

**El documento es definitivo y va a salir de tu organización.** Si la capacidad de búsqueda no es crítica, una conversión a apariencia de escaneo es el paso individual más completo. Elimina todo en una sola pasada. Si el archivo aún necesita ser buscable, usa la función Sanear de Acrobat en su lugar, y verifica el resultado.

**El documento es altamente sensible.** Combina enfoques. Encárgate primero de la redacción adecuada, luego de la limpieza de metadatos, y luego una conversión final a apariencia de escaneo. Cada paso cubre una capa diferente. Si la redacción es parte de tu flujo de trabajo, [Las barras negras no son redacción](../black-bars-arent-redaction-pdf-redaction-checklist/) explica por qué el enmascaramiento visual no es suficiente.

**No estás seguro de lo que hay en el archivo.** Revisa primero con exiftool o el panel de propiedades. Luego decide según lo que encuentres y a dónde va el archivo. Elegir un método de eliminación antes de entender lo que necesita ser eliminado lleva a exagerar o a dejar datos sin detectar.

Si estás evaluando si un PDF con apariencia de escaneo es el formato correcto para tu situación, [PDF escaneado vs PDF editable: ¿cuál deberías enviar?](../scanned-pdf-vs-editable-pdf/) cubre esa decisión de forma más amplia.

## El flujo de trabajo que realmente uso

1. Terminar primero el contenido del documento. No limpiar metadatos de un archivo que aún está cambiando.
2. Revisar los metadatos en la exportación final. Archivo > Propiedades como mínimo. exiftool si es importante.
3. Eliminar o sanear según lo que encontré y qué tan sensible es el destino.
4. Si el archivo va a salir y no necesita ser buscable, lo convierto a un PDF con apariencia de escaneo. [Look Scanned](https://lookscanned.io) maneja ese paso en el navegador sin subir el archivo.
5. Abrir el resultado en un visor nuevo y verificar. Revisar propiedades, intentar seleccionar texto, buscar términos que deberían haber desaparecido.

Ese último paso detecta más datos residuales de lo que la gente espera.

Si aplanar es suficiente para tu situación y no necesitas la conversión completa a apariencia de escaneo, [Cómo aplanar un PDF antes de enviarlo](../how-to-flatten-a-pdf-before-sending/) cubre ese punto intermedio.

## Preguntas frecuentes

### ¿Convertir a un PDF escaneado elimina todos los metadatos?

Sí. Convertir a un PDF basado en imágenes reemplaza toda la estructura del archivo. El resultado no contiene capa de texto, ni objetos ocultos, ni propiedades del documento del original, ni metadatos de archivos incrustados. La salida es un nuevo PDF que contiene solo imágenes renderizadas de las páginas.

### ¿Puede alguien recuperar los metadatos de un PDF con apariencia de escaneo?

No del PDF en sí. La estructura original ha desaparecido. Los únicos metadatos en el nuevo archivo son los que la herramienta de conversión escribe, como su propia etiqueta de productor. Si la conversión ocurre localmente en el navegador, tampoco existe una copia del lado del servidor.

### ¿Eliminar metadatos es lo mismo que redactar?

No. La eliminación de metadatos elimina propiedades ocultas y datos a nivel de documento. La redacción elimina contenido visible de la página. Si necesitas eliminar nombres, números o texto de la página en sí, ese es un paso separado que debe ocurrir antes de la limpieza de metadatos. [Las barras negras no son redacción](../black-bars-arent-redaction-pdf-redaction-checklist/) explica por qué el enmascaramiento visual solo no es suficiente.

### ¿Debería eliminar los metadatos de cada PDF que envío?

No necesariamente. Para documentos rutinarios que ya son públicos o de bajo riesgo, los metadatos son inofensivos. La pregunta se vuelve importante cuando el documento es sensible, el destinatario es externo o se supone que la identidad del autor no debe estar en el archivo.

## Reflexión final

La mayoría de las personas nunca revisan lo que su PDF dice sobre ellas antes de enviarlo.

El archivo podría estar limpio. O podría contener tu nombre, tu historial de revisiones y las coordenadas GPS de la cafetería donde lo editaste el martes pasado.

Si el documento importa lo suficiente como para compartirlo con cuidado, importa lo suficiente como para revisarlo. Y si la revisión revela más de lo que esperabas, hay formas sencillas de solucionarlo antes de hacer clic en enviar.
