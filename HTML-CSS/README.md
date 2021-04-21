<h1>HTML Y CSS</h1>

<h3>Rulótico González</h3>

<h1>Tabla de Contenido</h1>

- [1. Internet](#1-internet)
  - [¡Bienvenido al Curso!](#bienvenido-al-curso)
    - [Frontend ---- Backend](#frontend------backend)
    - [HTML - CSS - JS](#html---css---js)
  - [¿Qué conocimientos me recomiendan para tomar este curso?](#qué-conocimientos-me-recomiendan-para-tomar-este-curso)
  - [¿Cómo se construye la tecnología web?](#cómo-se-construye-la-tecnología-web)
  - [¿Cómo instalar ATOM?](#cómo-instalar-atom)
  - [Comprendamos Internet](#comprendamos-internet)
- [2. Los básicos del web](#2-los-básicos-del-web)
  - [¿Cómo funciona HTML?](#cómo-funciona-html)
  - [Etiquetas y sus atributos](#etiquetas-y-sus-atributos)
  - [Reto 1: crea tu fiesta de gifs](#reto-1-crea-tu-fiesta-de-gifs)
  - [¿Cómo funciona CSS?](#cómo-funciona-css)
  - [¿Cómo funciona JavaScript?](#cómo-funciona-javascript)
  - [Hola mundo y estructura del proyecto](#hola-mundo-y-estructura-del-proyecto)
  - [Listado de las etiquetas más usadas](#listado-de-las-etiquetas-más-usadas)
- [3. Construcción de un producto digital](#3-construcción-de-un-producto-digital)
  - [Paper wireframe](#paper-wireframe)
  - [¿Cómo instalar XD?](#cómo-instalar-xd)
  - [Diseño de interfaces](#diseño-de-interfaces)
  - [Maquetación de la NavBar](#maquetación-de-la-navbar)
  - [Maquetación de main_section y agregando estilos CSS](#maquetación-de-main_section-y-agregando-estilos-css)
  - [Maquetación de tarjetas de producto](#maquetación-de-tarjetas-de-producto)
  - [Fuentes personalizadas y variables de CSS](#fuentes-personalizadas-y-variables-de-css)
  - [Categorizando etiquetas según nuestra estructura en HTML](#categorizando-etiquetas-según-nuestra-estructura-en-html)
  - [Reto 2: Maquetar el home del producto digital](#reto-2-maquetar-el-home-del-producto-digital)
  - [Reglas responsive](#reglas-responsive)
  - [Animaciones y transiciones](#animaciones-y-transiciones)
- [4. Integrando otras herramientas](#4-integrando-otras-herramientas)
  - [Atributos especiales de las etiquetas para mejorar el funcionamiento de nuestros formularios](#atributos-especiales-de-las-etiquetas-para-mejorar-el-funcionamiento-de-nuestros-formularios)
  - [Librería vs Framework](#librería-vs-framework)
  - [Sistema de Grillas](#sistema-de-grillas)
  - [Completando el Sistema de Grillas](#completando-el-sistema-de-grillas)
  - [Reto 3: implementación del sistema de grillas](#reto-3-implementación-del-sistema-de-grillas)
  - [Maquetación del formulario](#maquetación-del-formulario)
  - [Creación de formulario: inputs](#creación-de-formulario-inputs)
  - [Creación de formulario: botones](#creación-de-formulario-botones)
  - [¿Cómo crear tu cuenta en Paypal?](#cómo-crear-tu-cuenta-en-paypal)
  - [Configuración del botón de pago con Paypal](#configuración-del-botón-de-pago-con-paypal)
  - [Autofill del formulario de PayPal](#autofill-del-formulario-de-paypal)
  - [Maquetación de pantalla de éxito y error](#maquetación-de-pantalla-de-éxito-y-error)
- [5. Deploy](#5-deploy)
  - [Testing con el Navegador](#testing-con-el-navegador)
  - [Cómo crear tu cuenta en Github](#cómo-crear-tu-cuenta-en-github)
  - [Subiendo nuestro proyecto a Internet con Github](#subiendo-nuestro-proyecto-a-internet-con-github)
- [6. Conclusión](#6-conclusión)
  - [Conclusiones](#conclusiones)
- [7. Bonus](#7-bonus)
  - [Librería vs Framework](#librería-vs-framework-1)

---

# 1. Internet

  ## ¡Bienvenido al Curso!

En este curso vamos a aprender a diseñar y programar productos digitales, vamos a utilizar Adobe XD como herramienta de diseño y Paypal para soportar pagos en línea. En esta ocasión nos acompaña Rulótico González, diseñador y programador al mismo tiempo en SABLE STUDIO.

  ### Frontend ---- Backend

**Frontend:** la parte visual e interactiva de un sitio o un web app para el usuario.

**Backend:** funciones básicas; CRUD - Create, Read, Update, Delete
funcionalidad, bases de datos, host. Podemos decir el motor. Conexiones entre back y front.

  ### HTML - CSS - JS

**HTML:** Hyper Text Markup Language - Estructura del sitio - Partes, etiquetas, etc.

**CSS:** Cascading Style Sheet - Estilo del sitio, colores, tamaños, espaciados, animaciones.

**JS:** JavaScript - Interacción dinámica con el usuario, como manejo de variables de datos de usuario, modificación de DOM (o elementos en la estructura HTML), animaciones complejas, manipulación de APIs, etc.

  ## ¿Qué conocimientos me recomiendan para tomar este curso?

Estamos felices de que quieras fortalecer tus destrezas como desarrollador Frontend. Si quieres crear una página web, aprender a bocetarla, maquetarla y darle estilo este curso es para ti.

Antes de comenzar con las primeras clases quiero hacerte algunas recomendaciones de algunos conocimientos previos o paralelos que podrías repasar para aprovechar mucho mejor los ejercicios prácticos que nuestro profesor Raúl “Rulótico” González realiza a lo largo de todos los módulos del curso.

**Curso de desarrollo web online:**

Este curso te explicará de manera detallada todas las bases conceptuales para entender el proceso y uso de HTML.

**Curso de Responsive Design:**

Este curso te permitirá entender los procesos detrás de las buenas prácticas para hacer tu producto digital responsivo.

**Curso de CSS Grid Layout:**

Nuestro profesor usa el framework Bootstrap en varias clases de este curso. Aunque es una gran forma de resolver la maquetación de las Grids o grillas de tu página web, es importante que comprendas el origen de este proceso.

¿Quieres comenzar las clases de nuestro curso de HTML y CSS sin ver estos cursos? Claro que puedes hacerlo, varios estudiantes lo han hecho y han logrado llegar hasta el final. Estas recomendaciones están especialmente diseñadas para aquellos que están comenzando en el maravilloso mundo de la programación frontend.

  ## ¿Cómo se construye la tecnología web?

El **Frontend** es la parte del software que interactúa con los usuarios, en cambio, el **Backend** es la parte que no puedes ver, esta oculta porque contiene la información privada o sensible de nuestros usuarios.

HTML nos permite crear la estructura de la página: títulos, párrafos, menús, etc. CSS nos permite configurar los estilos del HTML, los colores, formas, posiciones, etc. Además, JavaScript (JS) se encarga de la parte funcional, nos permite conectarnos con otros servicios (como PayPal) y nos ayuda a hacer las interacciones mucho más fluidas.

Los **Compiladores** nos ayudan a construir el frontend de nuestras páginas web de forma mucho más rápida y sencilla. En vez de escribir el mismo código una y otra vez, vamos a utilizar estas herramientas para obtener estos mismos resultados de forma automatizada.

El trabajo y las operaciones del backend se pueden resumir con las siglas **CRUD:** Create, Read, Update y Delete. Cuando el frontend se comunica con el backend, debe indicar el tipo de operación y los datos necesarios para que todo funcione correctamente.

Por ejemplo: cuando registramos un usuario, el frontend debe mandar los nombres y contraseña de este usuario para que, el backend, pueda guardar esta información en la base de datos y podamos consultarla más adelante.

- [Desarrollo de páginas web](https://platzi.com/blog/como-hacer-desarrollo-de-paginas-web/)

  ## ¿Cómo instalar ATOM?

Para editar código y crear proyectos super cool necesitas un editor de texto, hay varios que puedes utilizar como:

- [Sublime](https://www.sublimetext.com/)
- [Atom](https://atom.io/)
- [Visual Studio](https://visualstudio.microsoft.com/es/?rr=https%3A%2F%2Fwww.google.com%2F)

Estos son los más populares, sin embargo para crear el proyecto de nuestro Curso Profesional de Desarrollo Web usaremos Atom.

Para la instalación de Atom seguiremos los siguiente pasos:
Para la instalación de Atom seguiremos los siguiente pasos:


1. Ingresa a https://atom.io/

![](https://i.ibb.co/tm3myv8/atom.jpg "Editor de texto")

2. Descarga e instala la versión de ATOM de acuerdo a tu sistema operativo.

3. Esta es la primera sección que vas a ver cuando abras ATOM, da click en el botón Install a package.

![](https://i.ibb.co/z2qXDQ2/package.webp)

4. En la sección Install a package busca: emmet y agrégalo a tu editor de texto. Esta herramienta nos ayudará a escribir código de manera más rápida.

![](https://i.ibb.co/Pt3htr2/emmet.jpg)

5. Te recomiendo que no instales otros paquetes, por ahora. Pues algunos pueden generar conflicto si no tienes claridad sobre su función.

  ## Comprendamos Internet

Internet es un conjunto descentralizado de redes de comunicación interconectadas, en otras palabras, son dos (o más) computadoras que se conectan entre sí. Los Protocolos son un conjunto de reglas que hacen posible la comunicación entre diferentes elementos que forman parte de un sistema.

La **World Wide Web** es un sistema de distribución de documentos (de hipertexto o hipermedia) interconectados y accesibles vía internet, mientras que, 
los **Hipertextos** son textos que contienen enlaces a otros textos.

**FTP** es el protocolo de transferencia de archivos entre sistemas conectados a una red, así es cómo diferentes personas podemos compartir documentos entre nosotros.

Hay algunas computadoras que solo utilizamos para entregar documentos los conocemos como servidores, en cambio, las computadoras que solo leen y reciben estos documentos los conocemos como **clientes**. 
También existe el protocolo de comunicación **P2P** (Peer to Peer) donde una misma computadora trabaja como servidor y cliente al mismo tiempo.

La **tecnología de la la información** es la aplicación de ordenadores y equipos de telecomunicación para almacenar, recuperar, transmitir y manipular datos, con frecuencia, utilizado en el contexto de negocios o empresas.

La **Comunicación Síncrona** es comunicación en tiempo real, por ejemplo, en aplicaciones de mensajería y video-chat. Sin embargo, también existe la 
**Comunicación Asíncrona**, comunicación en tiempo NO real, así funciona Gmail, puede pasar que recibamos un nuevo correo pero no lo leemos inmediatamente lo envían, por eso es comunicación asíncrona.

# 2. Los básicos del web

  ## ¿Cómo funciona HTML?

  **Estructura Basica html5**

![](https://i.ibb.co/0cfh2fZ/html.jpg "Estructura Basica HTML5")

```html
<html>
  <head>
    <meta>
  </head>
  <body>
    <h1>Hola</h1>
    <h2>Hola soy un h2</h2>
    <p>Hola soy parrafo.</p>
    <h3>Hola soyun h3</h3>
    <footer>

    </footer>
  </body>
</html>
```

  ## Etiquetas y sus atributos

Las Etiquetas son fragmentos de texto rodeados por corchetes angulares `(< y >)` con funciones y usos específicos:

```html
<html>Contenido</html>
```

Los Atributos afectan a los elementos por su presencia o enriquecen la definición de la misma. Por ejemplo, el atributo lang en la etiqueta html indica que el contenido de esta página esta en un idioma específico:

```html
<html lang=""es"">Contenido en Español</html>
```

Las etiquetas meta (meta tags) son etiquetas que se incorporan en el encabezado de una página web y son invisibles para los usuarios normales, sin embargo, son de gran utilidad para navegadores u otros programas que pueden valerse de esta información:

```html
<head>
  <meta name=""description"" content=""Descripción de nuestra página"">
</head>
```

```html
Metadatos del documento

<base>
<head>
<link>
<meta>
<style>
<title>

Seccionamiento del contenido

<address>
<article>
<aside>
<footer>
<header>
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>
<hgroup>
<main>
<nav>
<section>

Organizar bloques o secciones de contenido(Es importante para la accessibility y el SEO)


<blockquote>
<dd>
<dir>
<div>
<dl>
<dt>
<figcaption>
<figure>
<hr>
<li>
<main>
<ol>
<p>
<pre>
<ul>
```

También encontramos etiquetas comunes como `<footer>` para agrupar el contenido del pie de página, <span> para guardar texto genérico y sin reglas de espaciado o tamaño predeterminadas, `<img src=""imagen-url.png"">` para incluir imágenes, entre otras.

  ## Reto 1: crea tu fiesta de gifs

¡Bienvenido a tu primer reto!

Ahora que sabes incluir elementos dentro de una web, te invito a que apliques lo aprendido creando una fiesta de gifs.

Descarga algunos gifs bailarines en https://giphy.com/ sobre todo échale un ojo a la sección de stickers. Cuando tengas un conjunto de gifs bailarines ponlos dentro de la carpeta donde esté tu index.

Tip: Trata de escoger los gifs que no tengan fondo, esto te ayudará a que no se vean cortados.

Ahora que ya tienes una colección de gifs utiliza la estructura de las etiquetas para hacer una fiesta de gifs dentro de tu documento. Usa la etiqueta img para lograrlo.

  ## ¿Cómo funciona CSS?

El CSS son las hojas de estilo en cascada que definen la apariencia de nuestros documentos en HTML.

Para que nuestros estilos CSS se apliquen correctamente a nuestras páginas web, debemos utilizar la etiqueta link con el atributo href y la ruta a nuestro archivo .css:

```html
<html>
        <head>
                <link rel=""stylesheet"" href=""estilos.css"">
        </head>
        <body>
                ... etc ... etc....
        </body>
</html>
```

Los Selectores nos permiten conectar las etiquetas de HTML con sus respectivos estilos en CSS.

Existen muchos tipos de selectores, por ejemplo, los selectores de clase buscan el contenido que tenga un cierto valor en su atributo class:

CSS (con punto antes del nombre de la clase):

```css
.caja { color: red; }
```

HTML:

```html
<div class=""caja"">Contenido</div>
```

También tenemos selectores de tipo ID (estos selectores solo pueden aplicar a un elemento, no va a funcionar si escribimos dos o más etiquetas con el mismo ID):

CSS (con `#` antes del nombre del ID):

```css
#caja { color: red; }
```

HTML:

```html
<div id=""caja"">Contenido</div>
```

En CSS utilizamos atributos para definir los estilos de nuestros elementos, podemos modificar el color de la letra, tamaño, color de fondo, espaciado, entre otras:

```css
.caja {
        color: red;
        background: yellow;
        font-size: 10px;
        padding: 20px;
}
```

Juego para familiarizarse con los [selectores CSS](https://flukeout.github.io/)

  ## ¿Cómo funciona JavaScript?

JavaScript es un lenguaje de programación que nos permite realizar actividades complejas en nuestras páginas web: almacenar valores en variables o realizar operaciones.

Para incluir JavaScript en nuestro HTML debemos utilizar la etiqueta `script:`

```js
<html>
    <head>
        <script src=""script.js"">
        </script>
    </head>
</html>
```

  ## Hola mundo y estructura del proyecto

- Crear una carpeta por cada elemento:

  - `css`
    - `archivo.css`
  - `js`
    - `index.js`
  - `img`
    - imagenes


  ## Listado de las etiquetas más usadas

En esta clase veremos algunas de las etiquetas más utilizadas y para qué sirven. Esta lista te será muy útil en el proceso de realización de nuestro proyecto.

```html
<!doctype html>
```

Define que el documento está bajo el estándar de HTML.

```html
<head>
```

Representa una colección de metadatos acerca del documento, incluyendo enlaces a, o definiciones de, scripts y hojas de estilo.

```html
<title>
```

Define el título del documento, el cual se muestra en la barra de título del navegador o en las pestañas de página. Solamente puede contener texto y cualquier otra etiqueta contenida no será interpretada.

```html
<base>
```

Define la URL base para las URLs relativas en la página.

```html
<link>
```

Usada para enlazar JavaScript y CSS externos con el documento HTML actual.

```html
<meta>
```

Define los metadatos que no pueden ser definidos usando otro elemento HTML.

```html
<style>
```

Etiqueta de estilo usada para escribir CSS en línea.

```html
<body>
```

Representa el contenido principal de un documento HTML. Solo hay un elemento <body> en un documento.

```html
<section>
```

Define una sección en un documento.

```html
<nav>
```

Define una sección que solamente contiene enlaces de navegación

```html
<article>
```

Define contenido autónomo que podría existir independientemente del resto del contenido.

```html
<aside>
```

Define algunos contenidos vagamente relacionados con el resto del contenido de la página. Si es removido, el contenido restante seguirá teniendo sentido

```html
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>
```

Los elemento de cabecera implementan seis niveles de cabeceras de documentos; `<h1>` es la de mayor jerarquía y `<h6>` es la de menor importancia. Un elemento de cabecera describe brevemente el tema de la sección que introduce

```html
<header>
```

Usualmente contiene un logotipo, el título del sitio Web y una tabla de navegación de contenidos.

```html
<footer>
```

Define el pie de una página o sección. Usualmente contiene un mensaje de derechos de autoría, algunos enlaces a información legal o direcciones para dar información de retroalimentación.

```html
<address>
```

Define una sección que contiene información de contacto.

```html
<main>
```

Define el contenido principal o importante en el documento. Solamente existe un elemento <main> en el documento.

```html
<form>
```

Representa un formulario, con atributos de controles que puede ser enviado a un servidor para procesamiento.

```html
<img>
```

Representa una imagen.

```html
<iframe>
```

Representa un contexto anidado de navegación, es decir, un documento HTML embebido.

```html
<a>
```

Representa un hiperenlace, enlazando a otro recurso.

```html
<em>
```

Representa un texto enfatizado, como un acento de intensidad.

```html
<strong>
```

Representa un texto especialmente importante .

```html
<small>
```


El elemento p (párrafo) es el apropiado para distribuir el texto en párrafos.

```html
<p></p>
```

Representa un comentario aparte, es decir, textos secundarios como un descargo de responsabilidad o una nota de derechos de autoría, que no son esenciales para la comprensión del documento.

- [Lista de Elementos HTML5](https://developer.mozilla.org/es/docs/conflicting/Web/HTML/Element)

# 3. Construcción de un producto digital

  ## Paper wireframe

Un documento esquemático para un perfil personal creado usando Balsamiq.

Un wireframe para un sitio web, también conocido como un esquema de página o plano de pantalla, es una guía visual que representa el esqueleto o estructura visual de un sitio web.

  - El wireframe esquematiza el diseño de página u ordenamiento del contenido del sitio web, incluyendo elementos de la interfaz y sistemas de navegación, y cómo funcionan en conjunto.
  - Usualmente este esquema carece de estilo tipográfico, color o aplicaciones gráficas, ya que su principal objetivo reside en la funcionalidad, comportamiento y jerarquía de contenidos.
  - En otras palabras, se enfoca en “qué hace la pantalla, no cómo se ve”.
  - Los esquemas pueden ser dibujados con lápiz y papel o esquemas en una pizarra, o pueden ser producidos con medios de diseño de aplicaciones de software libre o comerciales.

Los wireframes se enfocan en 5:

  - Los tipos de información que será mostrada
  - La cantidad de las funciones disponibles
  - Las prioridades relativas de la información y las funciones
  - Las reglas para mostrar ciertos tipos de información
  - El efecto de los distintos escenarios en la pantalla

El wireframe del sitio web conecta la estructura conceptual, o arquitectura de la información, con la superficie, o diseño visual del sitio web.2 Los wireframes ayudan a establecer funcionalidad, y las relaciones entre las diferentes plantillas de pantallas de un sitio web. Un proceso iterativo de creación de wireframes es una forma efectiva de hacer prototipos de páginas rápidos, mientras se mide la practicidad de un concepto de diseño. Típicamente, la esquematización comienza entre “diagramas de flujo de estructuras de trabajo de alto nivel o mapas de sitio y diseños de pantallas.”3 Dentro del proceso de construcción de un sitio web, el dibujo de un wireframe es donde el concepto se vuelve tangible.

**¿Qué es y para qué sirve una landing page?**

Una landing page es una página web preliminar o pagina de aterrizaje donde queremos destacar algo en especial, ya sea un producto, o alguna novedad o promoción de un producto. Se utilizan para todo lo que es SEM (search engine marketing), más conocido como los anuncios de Google Adwords.

**¿Qué es el footer de una página web?**

El footer es la parte inferior de una estructura web en la que generalmente se incluyen links de navegación, enlaces de interés, copyright o botones a las redes sociales del site. El footer suele estar claramente diferenciada de alguna forma del resto de la página web.

![Paper wireframe](https://i.ibb.co/VL3RyBG/brand.webp)

  - **Sitio**

![](https://i.ibb.co/n18V85h/Brand-cats.webp)

  ## ¿Cómo instalar XD?

Ya que tienes los conceptos básicos sobre la creación de un producto digital, vamos a comenzar con el proceso de diseño visual y la definición de la estructura. Para esto vamos a instalar el software XD de Adobe, con este podremos crear nuestras propias interfaces.

1. Entra a: https://www.adobe.com/es/products/xd.html

2. Da click en el botón de descarga

![](https://i.ibb.co/LRbYZnm/adobe.webp)

3. Inicia sesión con Facebook o Google.

![](https://i.ibb.co/99GPQpp/adobe1.webp)

4. Después de haber iniciado sesión en tu computadora se instalará Adobe Creative Cloud. Este software te permite gestionar los programas de Adobe.

5. Da click en “Open Creative Cloud Desktop App".

![](https://i.ibb.co/nnzCYvS/adobe2.webp)

6. Al instalar Adobe Creative Cloud verás esta ventana donde se pueden gestionar todos los programas de Adobe.

![](https://i.ibb.co/2MG8gQn/adobe3.webp)

7. Para nuestro curso solo debemos seleccionar la descarga de Adobe XD. Al finalizar el proceso de descarga, estás listo para usar Adobe XD.

![](https://i.ibb.co/3cm7jFF/adobe4.webp)

Por último quiero recordarte que Adobe XD tiene una versión gratuita y una versión paga.

La versión paga te permite publicar todos los prototipos y diseños que hagas. Si te quedas con la versión gratuita podrás diseñar todo lo que haremos en el curso, pero la publicación de los diseños solo podrás hacerla una vez.

  ## Diseño de interfaces

**Modelos que puedes crear con Adobe XD :**

![](https://i.ibb.co/cYDBzGd/web-gatos.webp)

![](https://i.ibb.co/xsJ3Mtz/web-example.webp)

- [Colormind](http://colormind.io)
- [Color Hunt](https://colorhunt.co)
- [fontpair](https://www.fontpair.co)

  ## Maquetación de la NavBar

Que hay un método secreto nunca antes visto para simplificar código (o al menos yo no sabía).
Que es mas fácil maquetar cuando ya tenemos el diseño hecho, porque no le inventamos.
Se ve mas pro (personalmente) el código con un letrero hecho en ascii generator.
Repaso de HTML y CSS.
Aprovechar el UI kit y los assets.

Comentario

```html
<!-- Aquí empieza el navbar -->
```

Es buena practica cuando se está en un equipo de programadores!!!.

```html  
<!-- start nav bar -->
  <nav>
    <div class="brand_image">
      <img src="" alt="">
    </div>
    <div class="nav_options">
      <ul>
        <li><a href="#"></a>Faqs</li>
        <li><a href="#"></a>Producto y description</li>
      </ul>
    </div>
  </nav>
  <!-- finish nav bar -->
```

  ## Maquetación de main_section y agregando estilos CSS

Vamos a trabajar la primera parte de nuestra página web.

En el diseño podemos ver que utilizamos la imagen curve.png por debajo de los productos, para esto debemos añadir la imagen en nuestro CSS en vez de en el HTML, así podremos posicionarla utilizando la propiedad 

```css
background-image: url(""../images/curve.png"");
```

Padding

![](https://i.ibb.co/ry064RR/padding.webp)



  ## Maquetación de tarjetas de producto

Vamos a utilizar el atributo `margin-top` de CSS para darle espacio a nuestros elementos de producto, entre más grande sea el valor que configuremos en este atributo, más grande será el espaciado entre estos elementos y los de arriba, además, podemos utilizar valores negativos `(margin-top: -50px)` para disminuir este espaciado y conseguir el efecto que diseñamos.

También vamos a añadir sombras a nuestros elementos utilizando el atributo `box-shadow: 0 0 2px black;` de CSS. Si quieres configurar el color y dirección de estas sombras, puedes hacer click derecho en tus elementos, seleccionar ““Inspector de Elementos”” y configurar las sombras como mas te gusten, recuerda copiar y pegar tus modificaciones porque, por defecto, no se guardan cuando refresques la página.

  ## Fuentes personalizadas y variables de CSS

Las Variables de CSS nos permiten centralizar los valores repetitivos por todo nuestro CSS, vamos a utilizar estas funcionalidades para ahorrarnos mucho si queremos cambiar el valor de algún color o tamaño de nuestra página.

También vamos a utilizar fuentes personalizadas, para esto debemos ir a [Google Fonts](https://fonts.google.com) y elegir la que mejor se acomode a nuestro diseño, en este caso es la fuente Open Sans.

```css
Sintaxis de variables

	:root{
		—green-1: green;
		—green-2: #454345;
		—width-1: 100px;
		—width-2: 200px;
	 }
	body {
		background: var(—green-1);
```

- [Uso de propiedades personalizadas (variables) en CSS](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties)
- [Everything you need to know about CSS Variables](https://www.freecodecamp.org/news/everything-you-need-to-know-about-css-variables-c74d922ea855/)
- [Evita usar @import para cargar CSS](https://www.googleessimple.com/wiki/pagespeed/evita-usar-import/)
  ## Categorizando etiquetas según nuestra estructura en HTML

Para estructurar nuestro proyecto, necesitamos ordenar nuestra definición de etiquetas con CSS. La conexión entre nuestra estructura HTML y CSS da como resultado una página web. A continuación veremos las reglas de nomenclatura que dan orden a nuestra definición de CSS.

Para darle nombre a los estilos podemos utilizar diferentes métodos, aunque es recomendable seguir estos pasos:

- No utilizar palabras en español: la mayoría de los lenguajes no aceptan ñ o tildes, es por eso que evitamos esta característica.

- Para los espacios utilizamos guión medio o guión bajo, recuerda usar solo uno de los dos caracteres.

- Describir el nombre de manera general a particular, por ejemplo: home_bar

También podemos definir las siguientes etiquetas, las cuales nos permiten crear secciones dentro de HTML y evitamos un concepto llamado divismo.

- `<section>` Lo usamos para dividir secciones
- `<footer>` Define el footer ya sea de toda la página o solo de un componente.
- `<iframe>` Nos ayuda a incrustar otra página en nuestro html
- `<video>` Nos ayuda a incrustar video dentro de nuestra web

Ahora que ya sabemos esto continuaremos en las próximas clases construyendo con HTML y CSS.

  ## Reto 2: Maquetar el home del producto digital

Ya vimos juntos el proceso de maquetación de la sección principal, ahora es el momento de ponerte a prueba, te reto a que continues construyendo este fantástico sitio.

Aquí encontrarás todo lo que necesitas para resolver este reto: https://xd.adobe.com/spec/2c9c033b-9245-42a1-495d-4ed75543bc3f-5aad/screen/7fbda2b3-9f60-4357-9fdc-99b738bb98e9/Home/


![](https://i.ibb.co/XsG4SLp/reto2.webp)

En esta imagen tienes dos secciones, te recomiendo dividirlas y maquetarlas una por una, no intentes hacer las dos al mismo tiempo.

![](https://i.ibb.co/cr4GphK/reto2-1.webp)

Utiliza las etiquetas correctas: podemos notar que usaremos `img`, `h3` y `p`

![](https://i.ibb.co/8D8b8Yn/reto2-2.webp)

Esta sección parece más compleja, te recomiendo primero realizar la estructura base.

Cuando logres realizar los dos pasos anteriores incluye algo de contenido, comienza por la imagen o el texto.

![](https://i.ibb.co/syMW3nH/reto2-3.webp)

La imagen es un reto que tienes que resolver. Este componente es diferente pues no tiene márgenes.

![](https://i.ibb.co/rMv8ZKY/reto2-4.webp)

- [Animate.css](https://animate.style)

  ## Reglas responsive

**Responsive Design** consiste en crear estilos que se adapten a cualquier tamaño y posición de nuestros dispositivos electrónicos. Para esto, la mayoría de elementos organizados horizontalmente deben pasar a organizarse verticalmente.

La forma de añadir código CSS que se ejecute para tamaños de pantalla específicos es la siguiente:

```css
@media (max-width: 600px) { /* 600px es solo un ejemplo */
        /* Todos nuestros estilos responsive */
}
```

- [Responsive Web Design Is…](https://responsivedesign.is)

  ## Animaciones y transiciones

Las animaciones nos permiten cambiar los estilos de nuestros elementos durante un tiempo. Para esto debemos configurar nuestra animación con algunos estilos iniciales y finales para aplicarla a alguno de nuestros selectores de CSS:

```css
@keyframe fadeIn {
        from {
                opacity: 0;
        }
        to {
                opacity: 1;
        }
}

.fadeIn {
        animation-name: fadeIn;
        animation-duration: 4s;
        animation-fill-mode: 4s;
}
```

No olvides repetir los atributos de animación o transiciones utilizando el prefijo -webkit-:

```css
.fadeIn {
        animation-name: fadeIn;
        -webkit-animation-name: fadeIn;
        animation-duration: 4s;
        -webkit-animation-duration: 4s;
        animation-fill-mode: 4s;
        -webkit-animation-fill-mode: 4s;
}
```

**[Normalize.css](http://necolas.github.io/normalize.css/)**

<h4>Animaciones</h4>

Las animaciones CSS3 permiten animar la transición entre un estilo y otro, y constan de dos componentes:

  1. Un estilo que describe la animación CSS
  2. Un conjunto de fotogramas que indican su estado inicial y final.
  
  <h4>Animaciones CSS vs JavaScript</h4>

Las animaciones CSS tienen tres ventajas sobre las animación basadas en scripts:

1. Son muy fáciles de usar para animaciones sencillas, puedes hacerlo incluso sin tener conocimientos de Javascript.
2. La animación se muestra correctamente, incluso en equipos poco potentes. Animaciones simples realizadas en Javascript pueden verse mal (a menos que estén muy bien hechas). El motor de renderizado puede usar técnicas de optimización como el “frame-skipping” u otras técnicas para que la ejecución de la animación se vea tan suave como sea posible.
3. Al ser el navegador quien controle la secuencia de la animación, permitimos que optimice el rendimiento y eficiencia de la misma, por ejemplo, reduciendo la frecuencia de actualización de la animación ejecutándola en pestañas que no estén visibles.

<h4>Propiedades de “animation”</h4>

Las subpropiedades de animation son:

`animation-delay`

Tiempo de retardo entre el momento en que el elemento se carga y el comienzo de la secuencia de la animación.

`animation-direction:`

Indica si la animación debe retroceder hasta el fotograma de inicio al finalizar la secuencia o si debe comenzar desde el principio al llegar al final.

`animation-duration`

La propiedad CSS `animation-duration` indica la cantidad de tiempo que la animación tarda en completar un ciclo (duración).

`animation-iteration-count:`

El número de veces que se repite. Podemos indicar infinite para repetir la animación indefinidamente.

`animation-name:`

La propiedad CSS `animation-name` especifica una lista de animaciones que se deben aplicar al elemento seleccionado. Cada nombre indica un @keyframes esta regla define los valores de las propiedades de la secuencia de animación.

`@keyframes:`

La regla arroba `@keyframes` permite controlar los pasos intermedios en una secuencia de animación CSS mediante el establecimiento de keyframes (o puntos de trayectoria) a lo largo de la secuencia de animación que debe ser alcanzado por determinados puntos durante la animación.

`animation-play:`

La propiedad CSS `animation-play-state` determina si una animación está en ejecución o en pausa. Puede ser consultada para determinar si la animación se está ejecutando. Además, su valor se puede establecer para pausar y reanudar una animación.

`animation-timing-function:`

La propiedad CSS `animation-timing-function` especifica cómo una animación CSS debe avanzar sobre la duración de cada ciclo. Los posibles valores son una o varias.

`animation-fill-mode`

Especifica qué valores tendrán las propiedades después de finalizar la animación (los de antes de ejecutarla, los del último fotograma de la animación o ambos).

- [CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

# 4. Integrando otras herramientas

  ## Atributos especiales de las etiquetas para mejorar el funcionamiento de nuestros formularios

Los formularios de nuestras páginas web se componen principalmente de labels para indicarle a los usuarios qué datos van a llenar, los inputs son los espacios donde pueden llenar estos datos y los botones son para enviar el formulario (o cualquier otra cosa, por ejemplo hacer reset).

¿Te has preguntado por qué usamos labels y no cualquier otra etiqueta? ¿Que tienen de especial los labels?

Los labels no son como otras etiquetas que solo guardan y muestran el texto con los diferentes estilos que definamos en el CSS. Los labels están especialmente preparados y optimizados para que nuestros formularios funcionen correctamente.

<h4>Atributos para asociar labels a sus respectivos inputs</h4>

Seguramente has llenado miles de formularios desde tu computadora sin problemas. Pero la probabilidad de que tengas un mal rato cuando te encuentras con un formulario desde tu celular es muy alta. Por ser dispositivos mucho más pequeños es mucho más difícil atinarle al input correcto para empezar a escribir los datos que nos pide el formulario.

De hecho, suele pasar que, debido a todos estos problemas, terminamos abandonando esa página web y nos olvidamos de ella para siempre. Nuestra tarea es evitar este tipo de problemas a toda costa.

Solucionar esto es muy fácil. Vamos a crear la funcionalidad de que, al tocar el label que corresponde a cada input, la página reaccione como si hubiéramos hecho click directamente en el input.

Hay dos formas de hacerlo:

**Primera forma:** Podemos encerrar nuestros inputs dentro de sus respectivos labels:

```html
<label>
Nombre:
<input type=”text” />
</label>

<label>
Edad:
<input type=”number” />
</label>
```

**Segunda forma:** Sólo debemos añadir un par de atributos a los elementos de nuestro formulario:

  - Añadimos el atributo id en la etiqueta input y le damos un valor, recuerda que el valor de nuestros IDs deben ser únicos e irrepetibles para evitar problemas en nuestra página web.

  - Añadimos el atributo for en la etiqueta label con el valor del id del input que queremos enlazar.

```html
<label for=”nombre”>Nombre:</label>
<input type=”text” id=”nombre” />

<label for=”edad”>Edad:</label>
<input type=”number” id=”edad” />
```

<h4>Atributos para enviar los datos de nuestros formularios</h4>

El objetivo de los formularios es enviar y almacenar los datos de nuestros usuarios en algún sitio, ¿verdad?

La forma de hacerlo es mucho más fácil de lo que crees. Solo debemos añadir algunos atributos en la etiqueta `<form>` y en los `inputs` y `botones` de nuestro formulario.

  - `Action:` Este atributo de la etiqueta `<form>` nos permite establecer el lugar o URL donde los datos de los usuarios deben ser enviados una vez ellos terminen de llenar el formulario.
  - `Name:` Este atributo de las etiquetas `<input>` nos permite que los datos que los usuarios hayan escrito se envíen correctamente cuando han terminado de llenar el formulario. El valor de esta etiqueta debe indicar el nombre con el cual queremos almacenar o interactuar con esta información en el futuro.
  - `Type:` El atributo `type=”submit”` le permite a los usuarios indicar que han terminado de llenar el formulario y lo pueden enviar para almacenar la información. También podemos usar este atributo en inputs para que estos pasen a tener el rol de botón de envío del formulario.
  

```html
<form action=”URL_DONDE_QUIERO_ENVIAR_LO_DATOS”>
  <label for=”nombre”>Nombre:</label>
  <input type=”text” id=”nombre” name=”user_name” />

  <label for=“edad“>Edad:</label>
  <input type=”number” id=”edad” name=”user_age” />

  <button type=”submit”>Enviar mis datos</button>
</form>
```

Si pruebas este mismo formulario vas a ver que, al enviarlo, la página se dirige a la URL que indicaste en el atributo action de la etiqueta form. Pero es no es todo, fijate bien en la URL y veras que los datos de tus usuarios están escondidos por ahí:

```js
?user_name=JUAN&user_age=123
```

Si tienes este mismo resultado significa que has tenido éxito!

Recuerda que si quieres almacenar estos datos en algún lugar como una base de datos puedes aprender un poco de Backend, APIs REST, CRUD y hacer todas las configuraciones necesarias.

Si tienes alguna duda puedes dejarla en los comentarios.

  ## Librería vs Framework

En esta clase vamos a aprender qué son los frameworks y librerías, entenderás cómo el uso de estos dos elementos de programación te ayudarán a encontrar soluciones.

Cada lenguaje de programación tiene sus propios frameworks y librerías, por ejemplo, JavaScript tiene frameworks como Angular.js y librerías como React.js para simplificar problemas de visualización de contenido. ¡Las librerías y frameworks existen para optimizar tu tiempo!

Los **`Frameworks`** son un marco o base de trabajo basados en una metodología para hacer nuestro trabajo mas rápido. En cambio, las Librerías son un conjunto de rutinas y funciones que tienen un objetivo.

Por ejemplo, [`Bootstrap`](https://getbootstrap.com) es un framework que nos ayuda a crear estilos para nuestras páginas y nos permite extender o modificar el trabajo que ya hizo por nosotros. También existen muy buenas alternativas como [`Foundation`](https://get.foundation/frameworks-docs.html) que utilizan otras metodologías pero también nos ayudan a crear páginas web más rápido. Ten en cuenta que muchos productos digitales utilizan estos frameworks y puede ser más difícil destacarnos con diseños originales.

Normalmente, si necesito algo rapido pos utilizo este tipo de herramientas, sino, hago todo yo mismo a mano 💪.

<h5>FRAMEWORK</h5>

Como su nombre lo dice es un marco o entorno de trabajo que a su vez contiene librerías y otras herramientas que nos dan un amplio margen de resolución de problemas, pero no sólo eso, sino que otro de sus objetivos es el de unificar todos los componentes de un proyecto.

Ahora si buscas algo más técnico podemos decir que un framework es un conjunto de herramientas que nos facilitan el desarrollo de software; para poder lograrlo incluyen implementos como estos:

  - APIs.
  - Librerías.
  - Herramientas de depuración.
  - Edición.
  - Prototipado.
  - Programas de soporte.

<h5>LIBRERÍAS</h5>

Una librería es una sección de código que resuelve o brinda soporte para detalles específicos en nuestros programas o proyecto.

Ahora de forma más particular encontramos que las librerías son un conjunto de elementos, por ejemplo: funciones, clases, tipos predefinidos, constantes, variables globales y macros, etc.

  ## Sistema de Grillas

Los sistemas de grillas nos ayudan a configurar el espacio y tamaño de nuestros elementos. En este caso, vamos a separar nuestra grilla en 12 posibles tamaños, así que debemos realizar la operación 100/12 y multiplicar el resultado por cada posible tamaño de nuestra grilla.

```css
.col-1 {
        width: 8.3333333333%;
}
.col-2 {
        width: 16.6666666666%;
}
.col-3 {
        width: 24.9999999999%;
}
...
```

Si en CSS a la la clase `.row` le cambiamos el display de `flex` a `grid` basta con indicar que quieres 6 columnas en tu grilla y que sean de una fracción `grid-template-columns: repeat(6, 1fr)` para lograr el mismo resultado que el profesor:

```css
.row {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}
```

También es importante mencionar que es de mucha ayuda entender como es que Rulótico diseñó la grilla desde cero ya que así es la metodologia de Bootstrap de las 12 columnas y entendiendo ésta manera de hacer la grilla se comprende con más facilidad y mayor rapidez Bootstrap.
De mi parte prefiero utilizar CSS Grid ya que es una especificación directa para layout, en el curso de “CSS Grid” Leonidas enseña a usar la grilla de CSS, está muy bueno el curso y no es largo.

  ## Completando el Sistema de Grillas

```css
.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12
```

Para evitar copiar todo el código de manera repetida, podemos utilizar este selector de atributos:

```css
[class*="col-"] { /* selecciona los atributos class cuyos valores tenga una subcadena col-*/
  padding: 10px;
}
```

  ## Reto 3: implementación del sistema de grillas

¡Bienvenido al tercer reto!

En esta ocasión aprendiste cómo funciona un sistema de columnas, con este conocimiento vamos a maquetar la sección de productos.

Aquí encontrarás los recursos necesarios para resolver este reto: https://xd.adobe.com/spec/2c9c033b-9245-42a1-495d-4ed75543bc3f-5aad/screen/92d69c70-3e3d-4c6e-ae7d-5b4fe57f8293/Home-3/

![](https://i.ibb.co/B4ckhqf/r1.webp)

Como puedes notar, cada producto está dentro de un contenedor y esto permite que no llegue al borde de los extremos, ahora usa los números de columnas para distribuir los elementos de forma indicada.

![](https://i.ibb.co/jLTztCq/r2.webp)

Por ejemplo por aquí podemos ver una columna 4 y una de 8 , recuerda que siempre tienes que lograr las doce columnas. 8+4=12

Y cuando está al revés, invertimos los números, primero la columna de 8 y luego la columna de 4.

![](https://i.ibb.co/NWQjj0v/r3.webp)

¡Ahora ya sabes maquetar con columnas!

Comparte el resultado de tu reto en la sección de discusiones.

  ## Maquetación del formulario

Para reutilizarlo puedes copiar y pegar la estructura HTML y los estilos CSS y listos. Pero obviamente no es lo más optimo. Cómo reutilizar las secciones de tus aplicaciones depende mucho de las herramientas que estés usando. A mí me gusta mucho React.js, y si lo conoces sabrás que por naturaleza cada componente es reutilizable desde el principio.

  ## Creación de formulario: inputs

Para que el elemento label se asocie con el input el atributo for debe coincidir con el atributo id del input no con el name

- [Atributos](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/label#Atributos)

```html
<label for="name">Nombre</label>
<input type="text" id="name">
```

  ## Creación de formulario: botones

Botón submit fuera del form, en otro row, pero se linkea con un ID en el form y el atributo form=“nombreDeId” en el input.

```html
<form id="createForm" action="">
<input type="submit" value="Continuar con el pago" name="submit" form="createForm" class="pago_boton">
```

![](https://i.ibb.co/pwHH758/formulario.jpg)

  ## ¿Cómo crear tu cuenta en Paypal?

Importante:

Crea tu cuenta con tu nombre real, no utilices apodos ni palabras que no correspondan al nombre que aparece en tu identificación, esta recomendación te la hago porque si necesitas sacar dinero de una cuenta que no tiene tu nombre como se muestra en tu ID, no podrás obtener o transferir este dinero a tu cuenta bancaria

Ahora estás listo para crear tu cuenta de PayPal. Es un proceso sencillo, solo sigue estos pasos:

1. Entra a este link https://www.paypal.com/

2. Da click en “sign up” o en “abrir cuenta”

![](https://i.ibb.co/k8Mm3Hk/pypal.webp)

3. Define el tipo de cuenta quieres crear

![](https://i.ibb.co/Kjx7t3S/pypal1.jpg)

La diferencia más notoria entre la cuenta de negocios y la personal es que la cuenta de negocios está especializada en recibir pagos, entonces seleccionaremos la opción de Paypal para negocios.

Cada país tiene diferentes configuraciones y lo más probable es que de una u otra manera te pidan confirmar tu identidad, ya sea con tu pasaporte o el ID de tu país, pasando estos procesos no tendrás problemas en vender en todo el mundo y comprar con tu cuenta. Este proceso se puede dar al inicio de creación de cuenta o cuando quieras transferir dinero a una cuenta personal.

4. Después de seleccionar el tipo de cuenta que necesitas, ingresa tus datos (recuerda el tip que te di al inicio de la lectura)

![](https://i.ibb.co/NN8Xt7C/pypal2.jpg)

5. Completando los datos que te solicita Paypal ya tendrás una cuenta, sin embargo te preguntará algunas cosas de configuración como :

- Dirección

![](https://i.ibb.co/Kz6ptCY/pypal3.jpg)

El uso que le darás a tu cuenta de Paypal:

![](https://i.ibb.co/PzhSSbG/pypal4.jpg)

- Tarjeta de crédito que quieras agregar (Este paso lo puedes omitir)

![](https://i.ibb.co/6tvGKFW/pypal5.jpg)

6. Por último confirma tu cuenta con el mail que te mandarán a tu cuenta de correo.

![](https://i.ibb.co/GcVXHPy/pypal6.jpg)

Después de seguir estos pasos tendrás tu cuenta en Paypal. Podrás empezar a comprar y vender con diferentes métodos de pago.

Si tienes algún problema con la creación de tu cuenta en Paypal deja tus comentarios al finalizar esta clase y entre todos te ayudaremos.

  ## Configuración del botón de pago con Paypal

El botón de pago es una herramienta de PayPal que ayuda a configurar la cantidad y el método de pago para que nuestro usuarios paguen por nuestros productos o servicios de forma fácil y rápida.

Cuando configuremos nuestro botón, vamos a copiar la URL que generamos con PayPal y la vamos a pegar en el atributo `action` de nuestro formulario, además debemos añadir el atributo `method=""POST""` para que nuestro formulario funcione correctamente.

- [Websites using PayPal Button](https://trends.builtwith.com/websitelist/PayPal-Button)
- [The Sad State of Payment Buttons](https://uxplanet.org/the-sad-state-of-payment-buttons-4d5cef3b9578)
- [Less is more: reducing thousands of PayPal buttons into a single iframe, using zoid](https://bluepnume.medium.com/less-is-more-reducing-thousands-of-paypal-buttons-into-a-single-iframe-using-xcomponent-d902d71d8875)
- [Let’s button up your business](https://www.paypal.com/us/webapps/mpp/logos-buttons)
- [PayPal Donate Vs. PayPal.me Option: The Beginners Guide to Medium #6](https://writingcooperative.com/paypal-donations-vs-paypal-me-option-the-beginners-guide-to-medium-6-a2d35a9c8fe1)

  ## Autofill del formulario de PayPal

Que bueno que has llegado hasta aquí. En esta clase aprenderemos algunas cosas extras pero muy importantes sobre PAYPAL y el formulario que acabamos de hacer, lo más importante ahora es que seguro tienes dudas y una de ellas puede ser ¿qué pasa con las variables que envías por el formulario?¿cómo las recibe Paypal en su sistema y para qué nos sirve?

Vamos por pasos:

**Variables**

Las variables que nosotros enviamos en el código tal como name, phone e email Paypal las recibe para poder completar su formulario por ejemplo cuando nosotros no enviamos ninguna variable en el POST del formulario, la pantalla de Paypal será:

![](https://i.ibb.co/JmFBQBk/pypal-1-1.jpg)

Al recibir data del formulario de PayPal cambia la pantalla por algo como esto:

![](https://i.ibb.co/pbcbXR9/pypal1-2.jpg)

Esto sucede porque las variables que enviamos por el formulario, después viajan por el URL y llegan a PayPal, son las mismas variables que utiliza para llenar su formulario y así el usuario no tiene que ingresar 2 veces la misma información.

Tu código debe tener estas variables para que la opción de autollenado funcione

![](https://i.ibb.co/pdF8qV6/pypal-1-3.jpg)

Con esto puedes notar que tienes muchas opciones para tu formulario lo importante es que sigas el mismo formato que tiene paypal para pasar las variables.

Te dejo también un ejemplo más amplio de variables para los forms:

![](https://i.ibb.co/zFF5nCT/pypal-1-4.jpg)

Toda la documentación de la función de autollenado la encuentras en este enlace:
https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/formbasics/#auto-fill-forms-with-html-variables

Y las variables que pueden enviar para el auto llenado del formulario son :
https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/#paypal-checkout-page-variables

  ## Maquetación de pantalla de éxito y error

**Imagen de Exito**

![](https://i.ibb.co/hc01WgS/exit.jpg)

**Imagen de Error.**

![](https://i.ibb.co/drtxn3w/exit-1.jpg)

# 5. Deploy

  ## Testing con el Navegador

  - `Inspector:` control + shift + i
  - `element:` inspecciona el html en la parte superior inspecciona el css en la parte inferior
  - `console:` inspecciona el código javascript
  - `sources:` explora carpetas y archivos donde esta alojada nuestra web
  - `network:` testea la velocidad de carga de los elementos de nuestra meyerweb

  ## Cómo crear tu cuenta en Github

Sigue estos pasos para crear tu cuenta de Github.

1. Entra a https://github.com/ y da click el botón signup

![](https://i.ibb.co/C7wjF37/git.webp)

2. Completa la información de registro

3. Después vas a seleccionar el tipo de cuenta que quieres, en este caso vamos a seleccionar la cuenta gratuita sin check de ninguna opción.

![](https://i.ibb.co/rGdnk8r/git1.webp)

4. Por último debes diligenciar una encuesta para finalizar el proceso.

![](https://i.ibb.co/ChvvdLT/git2.webp)

5. Ahora que ya tienes una cuenta podrías crear un repositorio, pero en la próxima clase vamos a crear uno con un software que nos facilitará esto.

![](https://i.ibb.co/fHMNX73/git3.webp)

  ## Subiendo nuestro proyecto a Internet con Github

Para subir nuestro proyecto a internet vamos a utilizar Github Pages, una herramienta que se conecta con nuestros repositorios de Github.

Antes de utilizar esta herramienta vamos a descargar Github Desktop, una herramienta que nos facilita la comunicación con la plataforma de Github. Vamos a utilizarla para subir nuestro proyecto a Github y, más adelante, subirla a internet con Github Pages.

- [cristinafsanz | melies-hugo](https://github.com/cristinafsanz/melies-hugo)
- [Ilusionismo con Github Pages](https://www.youtube.com/watch?v=VBKQIiTl8Bc)

# 6. Conclusión

  ## Conclusiones

¡Felicitaciones por terminar el Curso Profesional de Desarrollo Web!

Ahora sabes cómo planear, diseñar y programar productos digitales, todos estos conocimientos van a ser muy útiles para continuar con tu carrera profesional.

> “Cambia el mundo del internet, tú estás haciendo los productos del futuro.”

# 7. Bonus

  ## Librería vs Framework

Framework:

  - Contiene librerías y herramientas que ayudan a construir más rápido.
  - Garantiza la calidad debido a metodología de trabajo y estructura, bien definidas.

- Librería: fragmento de código que ayuda a resolver un problema específico, con un propósito concreto.

**Su importancia:**

- En programación suelen haber problemas similares constantemente y un framework o librería puede que ya lo hayan resuelto.

