# Dos papeles · publicación editorial de ejemplo

Esta web presenta **exactamente dos temas** como dos hojas digitales. En un móvil se pasa de una a otra deslizando horizontalmente; cada hoja se lee desplazándola verticalmente. En escritorio también se puede usar la barra inferior, las flechas izquierda y derecha del teclado o un gesto horizontal de trackpad. El diseño busca una lectura tranquila, sin dependencias ni compilación.

Todo el contenido actual está marcado como **ejemplo**. Antes de publicarlo como material académico, sustituye los textos, citas y referencias ficticias.

## Archivos

```text
index.html          Estructura y contenido de ambos temas
styles.css          Colores, tipografía, medidas y diseño responsive
script.js           Sincronización de controles y teclado
README.md           Este manual
assets/images/      Imágenes futuras
assets/videos/      Vídeos y portadas futuras
```

Si solo vas a actualizar textos, imágenes, enlaces o vídeos, edita `index.html` y añade los archivos multimedia a `assets/`. No necesitas modificar `script.js`. Las rutas son relativas para que funcionen también cuando GitHub Pages publique el proyecto dentro de un subdirectorio.

## Escribir y ampliar el contenido

Abre `index.html` con un editor de texto. Cada tema está entre comentarios fáciles de localizar:

```html
<!-- INICIO DEL CONTENIDO DEL TEMA 1 -->
<article class="paper paper--sage" id="tema-1" aria-labelledby="titulo-tema-1" tabindex="-1">
  <!-- Aquí está el contenido editable del primer tema. -->
</article>
<!-- FIN DEL CONTENIDO DEL TEMA 1 -->
```

El segundo está entre los comentarios equivalentes del **TEMA 2**. Mantén los dos elementos `<article>`, sus `id` (`tema-1` y `tema-2`) y los identificadores de sus títulos (`titulo-tema-1` y `titulo-tema-2`): los controles los utilizan. Dentro de cada artículo puedes añadir tantos párrafos, secciones y figuras como necesites.

### Título y entradilla

El título principal está en `<h1>` y la entradilla en el párrafo con clase `paper__lead`. Por ejemplo, en el primer tema:

```html
<h1 id="titulo-tema-1">Un nuevo título</h1>
<p class="paper__lead">Una frase breve que presenta el tema.</p>
```

`<h1>` indica el título principal y `<p>` un párrafo. Conserva el `id` del título. También puedes cambiar el texto de los enlaces de la barra inferior en sus atributos `aria-label` para que el nombre accesible coincida con el nuevo título.

### Párrafos, secciones y énfasis

Escribe cada párrafo entre una etiqueta de apertura `<p>` y una de cierre `</p>`:

```html
<p>Este es un párrafo nuevo que continúa la explicación.</p>
```

Para añadir un apartado, copia una sección existente dentro del mismo artículo y cambia su encabezado y su `id`. El valor de `aria-labelledby` debe ser idéntico al `id` del `<h2>` correspondiente. Cada `id` debe ser único en toda la página:

```html
<section class="prose" aria-labelledby="tema-1-metodos">
  <p class="section-number">04 — Método</p>
  <h2 id="tema-1-metodos">Métodos de estudio</h2>
  <p>Aquí empieza el contenido del nuevo apartado.</p>
  <p>Aquí continúa con otro párrafo.</p>
</section>
```

`<section>` agrupa el apartado, `<h2>` es su título y `section-number` muestra una etiqueta pequeña. La numeración es visual: puedes cambiarla o eliminarla. Coloca la nueva sección antes de «Fuentes y enlaces» o donde tenga sentido en el artículo. No es necesario cambiar el CSS ni el JavaScript.

Usa `<strong>` para una idea importante y `<em>` para énfasis o títulos de obras:

```html
<p>Esta idea es <strong>especialmente importante</strong> y este término va en <em>cursiva</em>.</p>
```

Para incluir una cita con su autor, edita el texto del `<p>` y del `<footer class="quote-author">` dentro del mismo `<blockquote>`:

```html
<blockquote>
  <p>“Texto de la cita.”</p>
  <footer class="quote-author">— Nombre de la autora o del autor</footer>
</blockquote>
```

`<blockquote>` agrupa una cita extensa, `<p>` contiene las palabras citadas y `<footer>` muestra su atribución. Si conoces la obra o la página de origen, añádela también en «Fuentes y enlaces» para que la cita pueda verificarse.

### Imágenes y pies

Guarda la imagen en `assets/images/`. En la figura correspondiente, sustituye el bloque `<div class="image-placeholder">...</div>` por una imagen. Conserva `<figure>` y `<figcaption>`:

```html
<figure class="editorial-figure">
  <img src="assets/images/archivo-historico.jpg"
       alt="Detalle de tres documentos manuscritos sobre una mesa"
       width="1200" height="800" loading="lazy">
  <figcaption>Figura 1. Documentos del archivo local, 1950. Fotografía: nombre de la autora.</figcaption>
</figure>
```

`src` es la ruta relativa al archivo. `alt` describe lo relevante de la imagen para quien no puede verla; evita escribir solo «imagen» o repetir el pie. Si la figura aporta datos, descríbelos. `figcaption` es el pie visible y puede incluir fecha, fuente y crédito. `width` y `height` indican las dimensiones reales del archivo y ayudan a evitar saltos de página; el CSS adapta la imagen al ancho disponible y conserva su proporción. `loading="lazy"` retrasa la carga de imágenes que todavía no se ven. Si añades más imágenes, repite el bloque `<figure>`.

### Fuentes y enlaces externos

Las referencias están dentro de la sección `sources`, en una lista `<ul>`. Cada `<li>` es una entrada. `<cite>` sirve para el título de una obra:

```html
<ul>
  <li>García, Ana. <cite>Historia de un lugar</cite>. Editorial Ejemplo, 2022.</li>
  <li><a href="https://sitio-ejemplo.org/recurso" target="_blank" rel="noopener noreferrer">Consultar el recurso</a>. Institución responsable, 2023.</li>
</ul>
```

`href` contiene la dirección de destino. Si el enlace abre una pestaña nueva con `target="_blank"`, conserva `rel="noopener noreferrer"`. Reemplaza todas las referencias y direcciones de ejemplo por fuentes reales y verificadas.

## Insertar los vídeos

Cada tema termina con una sección `video-section`. Hoy muestra el bloque `video-empty` y contiene un `<video>` nativo oculto, sin archivo asignado. Así se evita mostrar un reproductor roto. Para activar un vídeo:

1. Prepara un archivo optimizado para web. Si es largo, comprímelo antes de subirlo.
2. Usa preferiblemente un contenedor **MP4** con vídeo **H.264** y audio **AAC**, una combinación ampliamente compatible. El nombre `.mp4` por sí solo no garantiza la compatibilidad del códec.
3. Guarda el archivo en `assets/videos/`, por ejemplo `assets/videos/tema-1.mp4`.
4. En `index.html`, dentro de la sección del tema correspondiente, elimina el bloque `<div class="video-empty">...</div>`. Sustituye el `<video>` oculto por el ejemplo siguiente, sin el atributo `hidden`.
5. Si quieres una portada, guarda una imagen en `assets/images/` y escribe su ruta en `poster`. Si no quieres portada, elimina ese atributo.
6. Abre la web, inicia la reproducción, comprueba el sonido, los controles táctiles y la pantalla completa. Prueba también en un teléfono real si dispones de uno.
7. Sube el MP4, la portada y el HTML actualizado al repositorio de GitHub Pages. Comprueba la versión publicada.

Ejemplo completo para el primer tema:

```html
<section class="video-section" aria-labelledby="video-1">
  <p class="section-number">05 — Audiovisual</p>
  <h2 id="video-1">Vídeo del tema</h2>
  <video class="topic-video" controls playsinline preload="none"
         poster="assets/images/portada-tema-1.jpg">
    <source src="assets/videos/tema-1.mp4" type="video/mp4">
    Tu navegador no puede reproducir este vídeo.
    <a href="assets/videos/tema-1.mp4">Descarga el archivo MP4</a>.
  </video>
</section>
```

`controls` muestra los controles nativos; `playsinline` permite la reproducción dentro de la página en móviles compatibles; `preload="none"` evita descargar el vídeo antes de que la persona lo solicite. No hay reproducción automática. El vídeo se adapta al ancho de la hoja y puede abrirse a pantalla completa mediante los controles del navegador. Sus interacciones no tienen manejadores de gestos propios de esta web.

GitHub advierte al subir archivos de más de **50 MiB** con Git y bloquea los de más de **100 MiB**; la carga desde el navegador tiene un máximo de **25 MiB por archivo**. El sitio publicado en GitHub Pages tampoco puede superar **1 GB** y tiene un límite flexible de transferencia mensual. [Consulta los límites de archivos](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github) y [los de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) antes de subir vídeos grandes. Git LFS no sirve para alojar los vídeos de un sitio Pages ([documentación](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage)). Además, un vídeo grande hace más lenta la descarga y consume ancho de banda.

Para vídeos voluminosos, considera alojarlos en una plataforma de vídeo o en un servicio de archivos y enlazarlos desde la página. Si el servicio permite incrustarlos, puedes reemplazar `<video>` por un `<iframe>` con `title` descriptivo, `loading="lazy"` y permisos de pantalla completa. En ese caso dependerás del servicio externo, su disponibilidad y sus condiciones de privacidad. Los archivos locales MP4 son la opción principal de este proyecto.

## Personalizar el estilo

Al principio de `styles.css` están las variables principales:

```css
:root {
  --paper-sage: #a4ab84;
  --paper-terracotta: #e8ae9d;
  --ivory: #faf8f0;
  --ink: #2b302a;
  --reading-width: 43rem;
  --side-space: clamp(1.4rem, 6vw, 4rem);
}
```

Cambia los colores ahí para actualizar ambos temas. Mantén suficiente contraste entre texto y fondo. `--reading-width` limita la longitud de línea en escritorio y `--side-space` controla los márgenes laterales. El tamaño del texto general se define en `--body-size`; los títulos y la entradilla usan `clamp()` en sus propias reglas para adaptarse al ancho de pantalla. Las familias tipográficas se definen en las reglas de `body` (Arial) y de `h1, h2, .paper__lead, blockquote` (Georgia). No se cargan fuentes externas.

## Cómo funciona la navegación

`styles.css` coloca las dos hojas lado a lado dentro de `.papers`. El navegador gestiona el gesto horizontal y `scroll-snap` encaja la hoja al soltarlo. Cada `.paper` tiene su propio desplazamiento vertical. No hay un detector táctil que transforme los movimientos diagonales o los gestos de lectura en cambios de tema.

`script.js` observa la posición horizontal, marca el enlace activo, actualiza las flechas y permite usar el teclado. Los enlaces de la barra apuntan a `#tema-1` y `#tema-2`: incluso sin JavaScript siguen permitiendo acceder a ambos artículos. Si se prefiere menos movimiento, se evita la transición programada.

## Probar la web

Puedes abrir `index.html` directamente. Para probarla como sitio web local, entra en la carpeta del proyecto desde una terminal y ejecuta:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000/` en el navegador. Para verla desde un teléfono conectado a la **misma red**, averigua la dirección IP local de tu ordenador y abre `http://DIRECCION_IP:8000/` en el teléfono. El cortafuegos debe permitir el puerto 8000 y el servidor debe estar escuchando en la interfaz de red adecuada. Comprueba el gesto horizontal, la lectura vertical, los enlaces, el teclado, el zoom y la orientación de pantalla. Detén el servidor con `Ctrl+C`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y coloca en su raíz `index.html`, `styles.css`, `script.js`, `README.md` y la carpeta `assets/`.
2. Sube los archivos mediante la interfaz de GitHub o mediante Git y confirma los cambios en la rama que utilizarás para publicar.
3. En el repositorio, entra en **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**. Selecciona la rama (habitualmente `main`) y la carpeta **/(root)**. Guarda los cambios.
5. Espera a que GitHub muestre la dirección publicada y ábrela. Si el repositorio no es el sitio principal de la cuenta, la URL incluirá el nombre del repositorio como subdirectorio; las rutas relativas de este proyecto ya están preparadas para ello.
6. Para actualizar la web, edita los archivos, confirma y sube los cambios a la misma rama. GitHub Pages volverá a publicar la versión nueva. Puede tardar unos minutos en aparecer; recarga la página si ves contenido anterior.

No hay instalación de paquetes, proceso de compilación ni configuración especial de GitHub Actions.

## Problemas habituales

| Síntoma | Qué comprobar |
| --- | --- |
| Una imagen no aparece | Comprueba `src`, la carpeta `assets/images/`, la extensión y que el archivo se haya subido a GitHub. |
| Un vídeo no se reproduce | Comprueba que el `<video>` ya no tenga `hidden`, que haya un `<source>` con la ruta correcta y que el archivo use un códec compatible. |
| Funciona en local, pero no en Pages | Las rutas distinguen mayúsculas y minúsculas: `Foto.jpg` y `foto.jpg` son nombres distintos. Usa rutas relativas, sin `/` inicial. |
| Un archivo tarda mucho o GitHub rechaza la subida | Revisa su tamaño; reduce imágenes y vídeos o aloja los vídeos grandes fuera del repositorio. |
| El enlace lleva a otro lugar | Comprueba que cada `href="#tema-1"` o `href="#tema-2"` coincida con el `id` del artículo correspondiente. |

Si cambias una ruta, revisa también los enlaces de descarga o la portada que dependan de ese archivo.
