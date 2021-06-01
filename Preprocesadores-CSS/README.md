<h1>Preprocesadores CSS</h1>

<h3>Wilson Sánchez</h3>

<h1>Tabla de Contenido</h1>

- [1. Introducción](#1-introducción)
  - [Bienvenida al curso](#bienvenida-al-curso)
  - [Conceptos básicos de CSS](#conceptos-básicos-de-css)
  - [Selectores de CSS](#selectores-de-css)
- [2. Evolución de las Tecnologías de Front-End](#2-evolución-de-las-tecnologías-de-front-end)
  - [Introducción a los Preprocesadores](#introducción-a-los-preprocesadores)
  - [Metodologías para estructurar código](#metodologías-para-estructurar-código)
  - [Introducción a BEM](#introducción-a-bem)
    - [Ventajas de BEM](#ventajas-de-bem)
  - [Guías para creación y mantenimiento de código](#guías-para-creación-y-mantenimiento-de-código)
  - [Instalación de herramientas de compilación](#instalación-de-herramientas-de-compilación)
- [3. Preprocesadores para HTML](#3-preprocesadores-para-html)
  - [Introducción a Pug](#introducción-a-pug)
  - [Sintaxis](#sintaxis)
  - [Interpolación](#interpolación)
  - [Variables](#variables)
  - [Condicionales y Loops](#condicionales-y-loops)
  - [Mixins](#mixins)
  - [Includes y Extends](#includes-y-extends)
  - [Finalizando ejercicio de Landing Page](#finalizando-ejercicio-de-landing-page)
- [4. Less](#4-less)
  - [Introducción a Less](#introducción-a-less)
  - [Anidamiento e imports](#anidamiento-e-imports)
  - [Variables](#variables-1)
  - [Funciones](#funciones)
  - [Mixins](#mixins-1)
  - [Finalizando ejercicio de página de artículos](#finalizando-ejercicio-de-página-de-artículos)
- [5. Sass](#5-sass)
  - [Introducción a Sass](#introducción-a-sass)
  - [Variables](#variables-2)
  - [Imports y Extends](#imports-y-extends)
  - [Mixins](#mixins-2)
  - [Funciones](#funciones-1)
  - [Condicionales y Loops](#condicionales-y-loops-1)
  - [Finalizando ejercicio de perfil de usuario](#finalizando-ejercicio-de-perfil-de-usuario)
- [6. Stylus](#6-stylus)
  - [Introducción a Stylus](#introducción-a-stylus)
  - [Variables](#variables-3)
  - [Mixins](#mixins-3)
  - [Funciones](#funciones-2)
  - [Condicionales y Loops](#condicionales-y-loops-2)
- [7. Desarrollo del proyecto Platzi Games](#7-desarrollo-del-proyecto-platzi-games)
  - [Introducción al proyecto](#introducción-al-proyecto)
  - [Plantillas modulares con PUG: Header](#plantillas-modulares-con-pug-header)
  - [Plantillas modulares con PUG: Footer](#plantillas-modulares-con-pug-footer)
  - [Grid System con Sass](#grid-system-con-sass)
  - [Mixins para manejo de fuentes responsivas](#mixins-para-manejo-de-fuentes-responsivas)
  - [Funciones para media queries](#funciones-para-media-queries)
  - [Finalizando el proyecto](#finalizando-el-proyecto)
- [8. Conclusiones y Cierre](#8-conclusiones-y-cierre)
  - [Conclusiones y Cierre](#conclusiones-y-cierre)

# 1. Introducción

## Bienvenida al curso

Tu profesor Wilson Sánchez trabaja como User Experience Lead en Laureate Education y tiene más de 15 años de experiencia desarrollando productos digitales.

Tanto HTML como CSS no han evolucionado de la mejor manera y aunque sirven para proyectos pequeños, suelen se difíciles de mantener en proyectos grandes.

Para solventar sus debilidades han surgido los preprocesadores como `PUG` para HTML o Stylus, Less y Sass para CSS.

En este curso podrás optar por ver el módulo de Stylus, Less o Sass pero recomendamos los veas todos para que puedas aprobar el examen final. En el proyecto final vamos a integrar todos tus conocimientos en Platzi Games un portal de noticias sobre videojuegos.

> Utilizar HTML y CSS sirve para proyectos pequeños, en el momento en que vamos a escalar a proyectos muy grandes lo ideal es utilizar PREPROCESADORES.

## Conceptos básicos de CSS

CSS significa Cascading Style Sheets o su traducción al español Hojas de Estilo en Cascada.

Asignar reglas CSS a un documento HTML se puede hacer de varias formas:

  - Colocando las reglas en un documento *.css y relacionarlo al HTML usando la etiqueta 
  - Colocando en el atributo `style` de cada elemento HTML las reglas para cada etiqueta
  - Colocando los estilos dentro de una etiqueta `style` dentro del `head` del documento.

Como su nombre lo dice siempre lee en cascada de arriba hacia abajo sobrescribiendo valores excepto los dados por el atributo `style`.

Un estilo CSS está formado por: `selector`, `declaración`, `propiedad` y `valor`.

[![ccs.jpg](https://i.postimg.cc/Pxy5NbMm/ccs.jpg)](https://postimg.cc/dk7Yxyp1)

## Selectores de CSS

Los selectores nos sirven para seleccionar los diferentes elementos en una página web y aplicar estilos

Existen los siguientes tipos de selectores:

- `Selector universal *` Sirve para agregar estilos a todos los elementos de la página. Normalmente se utiliza para hacer “reset” de estilos.
- `Selector etiqueta`. Aplica estilos a todos los elementos de ese tipo `(p, h1, header etc.)`
- `Selector id`. Aplica estilos a un elemento único con ese Id, se recomienda hacer buen uso de este selector.
- `Selector clase.` Aplica estilos a todos los elementos con esa clase (el que más vas a usar).
- `Selector anidado`. Aplica estilos a un elementos descendientes de otros elementos (no necesario que sea hijo directo).
- `Selector hijo >.` Aplica estilos a los elementos que sean hijos directos de otros.
- `Selector adyacente +`. Aplica estilos al elemento adyacente.
- `Selector de atributo input[type=“number”]`. Aplica estilos al elemento con el atributo especificado.

La prioridad de un selector se determina por la suma de su contenido:

  - ID = 100
  - Clase = 10
  - Etiqueta = 1
A mayor la suma, mayor prioridad.

!important es un valor especial tiene un valor de un millón, nunca lo uses a menos que sea tu única opción como cuando no tienes acceso al código fuente.

``` CSS
/* Selector universal */
* {
  margin: 0;
  padding: 0;
}

/* Selector de etiqueta */
p {
  color: blue;
}
h1,h2,h3,h4,h5 {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
}

/* Selector anidado (Para especificar selectores dentro de otros)*/
span {
  color: black;
}
p span {
  color: red;
}

/* Selector de ID (Debe ser único en HTML, no se puede repetir)*/
#verde {
  color: green;
}

/* Selector de clase (Puede estar presente en varios elementos HTML, es el más usado) */
.verde {
  color: green;
}

/* Selector de hijos (Se aplica para hijos directos) */
p > span {
  color: red;
}
span {
  color: green;
}

/* Selector adyacente (Se aplica si esta seguido del elemento especificado, en este caso se aplica el color rojo al elemento h2 si está después de otro elemento h2 y así sucesivamente se puede sumar más elementos) */
h2 {
  color: black;
}
h2 + h2 {
  color: red;
}

/* Selector de aributos */
input[type='number'] {
  border: black;
}
input[type='email'] {
  border: red;
}
```

```css
/*
!important = 1000000
ID = 100 puntos
Clase = 10 puntos
Etiqueta = 1 punto
Los puntajes son acumulables
*/


span {
  color: black;
} /* 1 punto*/
h2.especial span {
  color: red;
} /* 12 puntos */
h2#superespecial span {
  color: green;
} /* 102 puntos */


h2.special span {
  color: red;
} /* 12 puntos (Gana) */
.especial span {
  color: black;
} /* 11 puntos */

span {
  color: black !important;
} /* 1000000 puntos (Por buenas prácticas no es recomendable usarlo ya que es muy difícil sobrescribirlo, solo se usa en caso que no se tenga acceso al código CSS y se necesite sobrescribir un valor. "Por cada uso de !important muere un oso en el ártico :(")*/
```

> Algo muy importante que aprendí con @wakos es que el !important debíera ser usado en caso extremo. Y siempre debes considerar que un !important es por que seguramente estas haciendo algo mal.

# 2. Evolución de las Tecnologías de Front-End

## Introducción a los Preprocesadores

Un preprocesador es una herramienta que nos permite escribir pseudocódigo de forma modular, más fácil de rehusar, leer, y mantener. pseudocódigo que después será convertido a CSS o HTML estándar que el navegador entiende.

Gracias a los preprocesadores podemos extender las características de CSS y HTML al nivel de otros lenguajes de programación, permitiéndonos usar características como variables, funciones y mixins.

Un `preprocesador` es una herramienta que nos permite escribir pseudocódigo que luego será convertido a CSS o HTML standard, en pocas palabras, extiende el poder de CSS y HTML al nivel de un lenguaje de programación más potente con características tales como variables, funciones y mixins.

- `Variable,` pedazo de memoria reservado para almacenar un valor, correspondiente a un tipo de dato. Es donde se guardan (y se recuperan) datos que se utilizan en un programa.

- `Función`, tiene la posibilidad de tener parámetros o argumentos, que son variables que modifican su comportamiento.

- `Mixin`, es una clase cuya finalidad es ofrecer una funcionalidad que pueda ser reutilizada en otras clases, pero ue no está pensada para usarse de forma autónoma.

¿Por qué utilizarlos?

  - Te salva tiempo y dinero al tener la opción de rehusar código.
  - Tener un código más sencillo de mantener y editar.
  - Modularizar nuestros proyectos de una forma lógica y sencilla.

> “No quieres que tu página luzca como una piñata”

## Metodologías para estructurar código

Las metodologías para estructurar código son sistemas preestablecidos, formales y bien documentados, que te ayudan a escribir y organizar código mantenible y escalable en sistemas grandes y complejos.

`BEM` (bloque, elemento, modificador) Esta “nomenclatura” permite dar mayor organización y disminuir lineas de código.

Hay muchas naming conventions que puedes utilizar para nombrar a tus elementos y evitar la especificidad, la más popular es BEM, pero a continuación anexo algunos otros para que elijan

[![technologies-methodologies-tools-section-overview.png](https://i.postimg.cc/7L2Vv9kY/technologies-methodologies-tools-section-overview.png)](https://postimg.cc/mcTMCQk0)

**Metodologías para estructurar tu HTML+CSS (con naming conventions):**

  - [BEM](https://webdesign.tutsplus.com/es/articles/an-introduction-to-the-bem-methodology--cms-19403) (Bloque, elemento, modificador)
  - [BEMIT](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) (BEM + Triángulo invertido)
  - [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/) (Atomic BEM)
  - [ITCSS](https://programacion.net/articulo/introduccion_a_itcss_para_desarrolladores_web_1545) (CSS de triángulo invertido)
  - [SMACSS](http://smacss.com/)
  - [ACSS](https://acss.io) (Atomic CSS)
  - [OOCSS](https://blog.interactius.com/metodología-css-object-oriented-css-oocss-b58118935d3e) (CSS orientado a objetos)
  - [AMCSS](https://amcss.github.io/) (Atribute Model CSS)
  - [SUIT](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) CSS naming conventions

## Introducción a BEM

BEM es la metodología que vamos a usar a lo largo del curso. El objetivo de BEM es dividir lógicamente las piezas de las que se compone una web.

BEM establece que debemos usar clases para nuestro selectores, clases que se dividen en:

  - **`Bloques`**. Los bloques son nuestros contenedores más grandes que a su vez contienen elementos u otros bloques.
  - **`Elementos`**. Los elementos siempre forman parte de un bloque, normalmente son los botones, textos, imágenes etc.
  - **`Modificadores`**. Los modificadores se usan para establecer estilos diferentes a un mismo bloque o elemento.

[![BEM.png](https://i.postimg.cc/4NrqSsnr/BEM.png)](https://postimg.cc/hf12JFLr)

BEM es la metodología que vamos a usar a lo largo del curso. El objetivo de BEM es dividir lógicamente las piezas de las que se compone una web.

BEM establece que debemos usar clases para nuestro selectores, clases que se dividen en:

```css
.bloque__element--modificador{}
```

Bloques. Los bloques son nuestros contenedores más grandes que a su vez contienen elementos u otros bloques.

```css
.bloque{}
.galeria{}
```

Elementos. Los elementos siempre forman parte de un bloque, normalmente son los botones, textos, imágenes etc.

```css
.bloque__elemento{}
.galeria__foto{}
```

Modificadores. Los modificadores se usan para establecer estilos diferentes a un mismo bloque o elemento.

```css
.bloque--modificador{}
.galeria__foto--circular{}
```

### Ventajas de BEM

  - Menos repetición
  - Los bloques tienen Independencia absoluta
  - Mejoría en la herencia multiple
  - Evitar la especificidad (no se sentirá la necesidad de usar !important nunca más)

[![ben.png](https://i.postimg.cc/B6KMD1Bb/ben.png)](https://postimg.cc/dkJ2c3Xc)

## Guías para creación y mantenimiento de código

La meta de tener una guía de código es hacer que luzca como si una sola persona lo haya escrito para que se entendible por todo el equipo.

Para nuestro proyecto PlatziGames vamos a tener una guía en la que definimos:

  - Ser consistentes con la indentación.
  - Consistencia con espacios, corchetes, puntos y comas.
  - Consistencia de números, de selectores y divisiones.
  - Agrupaciones de propiedades.
  - Uso de ID’s y clases.

+ [Shopify Polaris](https://polaris.shopify.com)
+ [Lightning Design System](https://lightningdesignsystem.com)
+ [Atlassian Design](https://atlassian.design)

[guia-de-codigo-platzi-games.pdf](https://drive.google.com/file/d/17byYD1OJosmv2KeEhseat9n1Yc6NgFzr/view?usp=sharing)

## Instalación de herramientas de compilación

- [CodeKit - THE Mac App for Web Developers](https://codekitapp.com)
- [Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)
- [Compile Sass, Less, Jade, CoffeeScript on Mac, Windows & Linux with Live Browser Reload](https://prepros.io/)

# 3. Preprocesadores para HTML

## Introducción a Pug

Pug es un generador de templates implementado con Javascript que nos permite escribir un pseudocódigo limpio y fácil de leer que será compilado a HTML.

  Pug es un motor de plantillas enfocado en hacer mas rápida la codificación de Html. Ha sido implementado con Javascript para trabajar con nodeJs principalmente.

[![platzi.png](https://i.postimg.cc/nrFfr8Xc/platzi.png)](https://postimg.cc/34ccfcjP)

- [GitHub - daywalkerhn/platzi-games-pug-publico](https://github.com/daywalkerhn/platzi-games-pug-publico)

- [Getting Started – Pug](https://pugjs.org/api/getting-started.html)

## Sintaxis

**Pug excelente herramienta para el desarrollo.**
Las ventajas:

  - Cambios en tiempo real
  - Escanear el código QR y verlo desde mi dispositivo móvil con cambios en tiempo real literalmente es “MAGIA”, lo veo bastante útil para metodología “Mobile First”
  - Ahorramos tiempo y fácilmente tenemos una buena semántica en HTML

La versión actual de PUG, no tiene ningún problema con diferenciar tab y espacios. Puedes usar ambos, sin ningún problema.

Pug trabaja por indentación; es Html con una sintaxis “sencilla”

  - Sólo tienes que poner la etiqueta un espacio y su contenido.

  - Los atributos se escriben entre paréntesis. Si quieres poner varios atributos tienen que ir separados con una (,).

  - Para incluir una clase, la etiqueta va seguida de un (.) y el nombre de la clase; y si queremos agregar un id en lugar de punto se pone un (#).

  - Para anidar, tenemos que empezar en una nueva linea y dar un espacio con el tabulador.

  - Anidación en una linea `div: p: span Hola!`

Si quieres utilizar pug sin prepros y por terminal debes:

Instalarlo

```bash
npm i pug-cli -g
```

Compilar

```bash
pug -w --pretty landing.pug
```

comandos para compilar de pug a html con node:

```bash
pug nombreArchivo.pug --pretty

pug nombreArchivo.pug -w --pretty

pug nombreArchivo.pug -o rutaSalida/archivoSalida.html -w --pretty

```

## Interpolación


## Variables


## Condicionales y Loops


## Mixins


## Includes y Extends


## Finalizando ejercicio de Landing Page

# 4. Less

## Introducción a Less


## Anidamiento e imports


## Variables


## Funciones


## Mixins


## Finalizando ejercicio de página de artículos

# 5. Sass

## Introducción a Sass


## Variables


## Imports y Extends


## Mixins


## Funciones


## Condicionales y Loops


## Finalizando ejercicio de perfil de usuario

# 6. Stylus

## Introducción a Stylus


## Variables


## Mixins


## Funciones


## Condicionales y Loops

# 7. Desarrollo del proyecto Platzi Games

## Introducción al proyecto


## Plantillas modulares con PUG: Header


## Plantillas modulares con PUG: Footer


## Grid System con Sass


## Mixins para manejo de fuentes responsivas


## Funciones para media queries


## Finalizando el proyecto

# 8. Conclusiones y Cierre

## Conclusiones y Cierre
