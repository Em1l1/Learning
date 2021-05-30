<h1>Maquetación en CSS</h11>

<h3>Diego de Granada</h3>

<h1>Tabla de Contenido</h1>

- [1. Introducción](#1-introducción)
  - [Introducción del curso](#introducción-del-curso)
  - [Chrome Devtools](#chrome-devtools)
- [2. Análisis y creación del proyecto](#2-análisis-y-creación-del-proyecto)
  - [Diseño del proyecto](#diseño-del-proyecto)
  - [Setup del proyecto](#setup-del-proyecto)
- [3. Creando la página principal](#3-creando-la-página-principal)
  - [Arquitectura del header en HTML](#arquitectura-del-header-en-html)
  - [Etiquetas semánticas HTML](#etiquetas-semánticas-html)
  - [¿Porqué es importante el buen uso de las etiquetas semánticas dentro de HTML?](#porqué-es-importante-el-buen-uso-de-las-etiquetas-semánticas-dentro-de-html)
  - [¿Cómo hacer uso correcto de la semántica HTML?](#cómo-hacer-uso-correcto-de-la-semántica-html)
  - [CCS](#ccs)
  - [DevTools](#devtools)
  - [Semántica](#semántica)
  - [Estilos en el header](#estilos-en-el-header)
  - [Agregando íconos](#agregando-íconos)
  - [Agregando imágenes al header](#agregando-imágenes-al-header)
  - [Manejo de Grid para posicionar contenedores](#manejo-de-grid-para-posicionar-contenedores)
  - [Manejo de imágenes de Background](#manejo-de-imágenes-de-background)
  - [Agregando fuentes](#agregando-fuentes)
  - [Terminando el Home](#terminando-el-home)
- [4. Creando página de Blogs](#4-creando-página-de-blogs)
  - [Blog page](#blog-page)
  - [Manejo de clases](#manejo-de-clases)
  - [Estilos en blogs html](#estilos-en-blogs-html)
  - [Agregando imagen](#agregando-imagen)
  - [Estilos del botón](#estilos-del-botón)
  - [Trabajando la sección de post](#trabajando-la-sección-de-post)
  - [Grid Container](#grid-container)
- [5. Creando página de Blog](#5-creando-página-de-blog)
  - [Crear la pantalla de blog](#crear-la-pantalla-de-blog)
  - [Agregando estilos a la página de blog](#agregando-estilos-a-la-página-de-blog)
- [6. Creando página de perfil](#6-creando-página-de-perfil)
  - [Sección de contacto](#sección-de-contacto)
  - [Maquetando perfil HTML](#maquetando-perfil-html)
  - [Manejando estilos en la página de perfil](#manejando-estilos-en-la-página-de-perfil)
- [7. Blog responsivo](#7-blog-responsivo)
  - [Media Queries](#media-queries)
- [8. Cierre](#8-cierre)
  - [Cierre del curso](#cierre-del-curso)

---

# 1. Introducción

## Introducción del curso

- [GitHub - degranda/Platzi-blog: Proyecto terminado del curso Practico de HTML y CSS, clase por clase.](https://github.com/degranda/Platzi-blog)

## Chrome Devtools

CCS

No es un lenguaje de programación, es un lenguaje que me permite dar estilos a lo que maquetamos en HTML.
Usamos selectores de etiquetas solo por la palabra, selectores de clase mediante .nombredeClase, y por ID mediante #nombreId

DevTools:

Es una serie de herramientas que facilitan el proceso de desarrollo. Podemos ver en tiempo real que estamos haciendo con CSS,JS, podemos ver peticiones, imágenes y demás. Incluso podemos hacer debuggin para hallar problemas al momento de renderizarse.

# 2. Análisis y creación del proyecto

## Diseño del proyecto

- [proyecto](https://www.dropbox.com/sh/skwiu9gqkr2j6yb/AABmvWbUcTgDnr1m0U1RlcLBa?dl=0)

- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://cssreference.io/css-grid/
- https://developer.mozilla.org/en-US/docs/Web/CSS/grid
- https://www.w3schools.com/css/default.asp

> Apreciar el trabajo de los demás" eso siempre es valioso. Muy bonito diseño 💻

## Setup del proyecto

Todo proyecto web posee unas jerarquías de trabajo. Por buenas prácticas el orden es primordial para que el proyecto sea legible y fácil de trabajar. index, main, partes del html que se repiten a lo largo de los archivos y así. Podría resumirse cómo, entre más ordenado seas mejor será tu resultado.

[degranada | GitHub](https://github.com/degranda/Platzi-blog)

Vamos a crear los siguientes archivos dentro de nuestra carpeta de proyecto:

  1. index.html
  2. blog.html
  3. blogs.html
  4. perfil.html
  
Luego crearemos dos carpetas:

1. assets, y dentro de una una carpeta llamada img
2. css, y dentro un archivo llamado main.css

# 3. Creando la página principal

## Arquitectura del header en HTML

Recuerden que la semántica al momento de crear nuestro sitio web es súper importante más adelante con fines de SEO.

[![ceo.gif](https://i.postimg.cc/LXdZYvcz/ceo.gif)](https://postimg.cc/gwD01ykJ)


Etiquetas semánticas HTML
--
Semántica se refiere a todo aquello que tiene que ver con el significado de una palabra u expresión. En HTML, existen etiquetas con significado semántico, etiquetas que por si mismas brindan un poco de información sobre que tipo de contenido hay dentro de ellas.

El correcto etiquetado del contenido, con los tags que brindan una descripción de lo que hay entre la etiqueta de apertura y la etiqueta de cierre, permite dar información rápida sobre el contenido de cada etiqueta semántica, mediante el nombre de la propia etiqueta.

¿Porqué es importante el buen uso de las etiquetas semánticas dentro de HTML?
--
🔶Permite una mejor legibilidad del contenido de un documento HTML, tanto para el desarrollador, como para un indexador de contenido.
🔶Al mejorar la legibilidad para los motores de búsqueda mejorará su posicionamiento.
🔶Permite el desarrollo de contenido escalable.
🔶Contenido ordenado y estructurado.

¿Cómo hacer uso correcto de la semántica HTML?
--
Selecciona la etiqueta que describa el significado del contenido que deseas marcar, gracias a que existe una gran variedad de etiquetas para poder usar, esto no será muy complicado.

Etiquetas no semánticas `<div>` y `<span>` No describen nada sobre su contenido.

Etiquetas semánticas `<table>` y `<p>` Describen claramente su contenido.

Algunas etiquetas semánticas: 
- `p:` Define un parrafo.
- `form:` Define un formulario.
- `table:` Define una tabla.
- `style:` Define estilos para el documento.
- `header:` Define la típica sección de encabezado que normalmente contiene el logo y el menu de navegación .
- `nav:` Elemento que contiene los lincks de navegación.
- `section:` Define una sección en concreto del documento.
- `footer:` Define el píe de página de un documento o seccón.
- `main:` Define el contenido principal de un documento.
- `aside:` Define contenido relacionado con el contenido principal, pero que no forma parte de manera relevante para él.

CCS
--
No es un lenguaje de programación, es un lenguaje que me permite dar estilos a lo que maquetamos en HTML.

Usamos selectores de etiquetas solo por la palabra, selectores de clase mediante `.nombredeClase`, y por `ID` mediante #nombreId

DevTools
--
Es una serie de herramientas que facilitan el proceso de desarrollo. Podemos ver en tiempo real que estamos haciendo con CSS,JS, podemos ver peticiones, imágenes y demás. Incluso podemos hacer debuggin para hallar problemas al momento de renderizarse.

Semántica
--
se refiere a todo aquello que tiene que ver con el significado de una palabra u expresión. En HTML, existen etiquetas con significado semántico, etiquetas que por si mismas brindan un poco de información sobre que tipo de contenido hay dentro de ellas. El correcto etiquetado del contenido, con los tags que brindan una descripción de lo que hay entre la etiqueta de apertura y la etiqueta de cierre, permite dar información rápida sobre el contenido de cada etiqueta semántica, mediante el nombre de la propia etiqueta.

## Estilos en el header

Arquitectura BEM (Bloques, Elementos y Modificadores) y sus beneficios:
💡Se enfoca en la reutilización de código , es decir, permite tener un mejor entendimiento sobre la estructura de nuestro proyecto.

  - Permite especificidad : Puedes usar un selector único para cada regla, es decir, te permite permite hacer menos repeticiones.
  - Hay mayor independencia : Cada bloque se puede mover a cualquier parte del documento, sin afectar el estilo.
  - Mayor simplicidad : El entendimiento en la lectura del código y la lógica es simple, de esta forma al momento de crear las clases tienes un mejor control absoluto hacia dónde haces referencia dentro la estructura de tu proyecto.

- [preprocesadores](https://platzi.com/clases/1665-preprocesadores/22297-introduccion-a-bem/)

## Agregando íconos

[fontawesome](https://youtu.be/w7OSE1-8F8s)

- [Free vector icons - SVG, PSD, PNG, EPS & Icon Font - Thousands of free icons](https://www.flaticon.com/)
- [GitHub - degranda/Platzi-blog: Proyecto terminado del curso Practico de HTML y CSS, clase por clase.](https://github.com/degranda/Platzi-blog)
- [Social media Icon Pack | Circular | 16 .SVG Icons](https://www.flaticon.com/packs/social-media-86)

## Agregando imágenes al header

[![blogs.jpg](https://i.postimg.cc/gkh3r2HQ/blogs.jpg)](https://postimg.cc/KRZ1HFVD)

## Manejo de Grid para posicionar contenedores

[![blogs.jpg](https://i.postimg.cc/gkh3r2HQ/blogs.jpg)](https://postimg.cc/KRZ1HFVD)

## Manejo de imágenes de Background

``` CSS
.home-main {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
  background-image: url('../assets/img/Cover.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```


## Agregando fuentes

- [FontsGoogle](https://fonts.google.com/)

## Terminando el Home

del elemento`<button>` con el elemento `<a>`, y quise validarlos en WHATWG y en W3C , que son dos grandes herramientas para poder validar el markup de los html y seguir buenas practicas, y en ambas me mostro un ERROR : El elemento a no debe aparecer como descendiente de un elemento button.
Con esto quisiera aclarar dos cosas: El elemento `<a>` representa un hipervinculo hacia una pagina de destino o hacia una sección dentro de la pagina agregando el atributo HREF. Mientras que `<button>` es un poco mas especifico para acciones como validar o resetear un formulario o mostrar un modal, etc.

Pueden probarlo ustedes mismos! Dejo los link de los Markup Validation Service

https://validator.w3.org/
https://html5.validator.nu/

Finalmente quisiera decir que siempre es bueno averiguar mas allá de los videos, tutoriales, y otros recursos en general que encuentres en internet, eso es lo que al final te hace un developer diferente al resto!

# 4. Creando página de Blogs

## Blog page



## Manejo de clases

Metodología BEM
Son una serie de normas que buscan tener nuestro código CSS bien organizado. Existen muchas metodologías, pero BEM es de las más populares. Cubre la necesidad de tener proyectos complejos bien estructurados para evitar confusiones o redundancia.

BEM es una abreviación de las palabras “Block”, “Element” y “Modifier” (Bloque, elemento y modificador en español), esto es por la forma en la que trataremos cada elemento de nuestra página web.
Bloque: Es un elemento que existe por si mismo, es completamente independiente. En el proyecto de este clase, el bloque bien podría ser la sección de Noticias.
Elemento: Son las partes que componen el bloque; cuadros de texto, imagenes, títulos, botones, etc.
Modificadores: Son las distintas versiones de un elemento; el mejor ejemplo es cuando tienes el mismo boton en varios bloques, pero con colores distintos.

Frecuentemente las clases se llaman con el siguiente formato: 

```html
class="bloque__elemento--modificador"
```

siendo el modificador opcional.

Las metodologías nos permite reciclar código y conocerlas también nos va a nos facilitará integrarnos a un equipo de trabajo.

Puedes encontrar más información sobre [BEM](http://getbem.com/)
**Con ayuda de las abreviaturas de Emmet**

1er Section: `section>(div>h3+div>img)+(div>h2+p+a)`
2do Section: `section>div>h3+(article.post-container>img+p*2+a)*6`

## Estilos en blogs html

```css
Grid-template-column: 2fr 1fr;
```

Y efectivamente expone en el navegador sus dos columnas. Pero en:

```css
Grid-template-rows: 2fr;
```

¿Porque la rejilla queda con 4 celdas? No debería poner dos filas en el comando `Grid-template-rows`:

`grid-columns: 1,` se generan las cuatro rejillas debido al grid auto, como solamente hay dos columnas este por defecto brinca a la siguente línea generando otro `“grid-template-columns”` en la parte de abajo.

Lo que se puede hacer igual es escribir `grid-row: 2` y este genera el mismo efecto de las cuatro rejillas pero creo que se entiende mejor 😄

## Agregando imagen

Agregar clase a body `home-body`:
```css
.home-body {
    margin: 0;
    padding: 0;
    position: initial;
    font-family: 'Roboto mono', monospace;
}
```

- [GitHub - degranda/Platzi-blog: Proyecto terminado del curso Practico de HTML y CSS, clase por clase](https://github.com/degranda/Platzi-blog)

## Estilos del botón

agregar un hover para mejorar el diseño: `style buttom`
```css
.blogs-button:hover {
	border: 1px solid white;
	color: white;
	background-color: #48CFAD;
}
```

- Información acerca de web componentes, podemos crear nuestros propios elementos e [insertarlos dinámicamente en nuestros proyectos](https://www.webcomponents.org/)

- [HTML to CSS autocompletion](https://marketplace.visualstudio.com/items?itemName=solnurkarim.html-to-css-autocompletion)

## Trabajando la sección de post

Otra forma de hacer esta sección es haciendo uso del display grid, ya que de esto iría el curso.
En resumen, para lograr el mismo resultado debemos modificar un poco el html y hacer el uso de:

```css
display: grid;
grid-template-columns: repeat(auto-fill, 300px);
grid-gap: 10px;
```

## Grid Container

Mantener alineados y centrados, para un monitor grande/

``` CSS
.grid-container {
  max-width: 980px;
  margin: auto;
}
```


# 5. Creando página de Blog

## Crear la pantalla de blog



## Agregando estilos a la página de blog



# 6. Creando página de perfil

## Sección de contacto



## Maquetando perfil HTML



## Manejando estilos en la página de perfil



# 7. Blog responsivo

## Media Queries



# 8. Cierre

## Cierre del curso
