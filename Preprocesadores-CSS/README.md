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

En esta clase vemos cómo anidar elementos dentro de otros en PUG y cómo trabajar con textos de múltiples lineas.

> Definicion de Pug: es un motor de plantillas de NodeJS, el cual brinda la posibilidad de preprocesar código HTML de una forma más rápida y amigable. Nos otorga una sintaxis menos compleja y muy poderosa en la que se incluyen nuevas características tales como ciclos, variables, mixins, entre otros.

Existe otra forma de usar una etiqueta dentro de otra etiqueta

```html
p este es un #[span ejemplo].
```
Así se puede usar la notación de punto para manejar las etiquetas y no repetir el | en cada una de las líneas.

<img src="https://i.ibb.co/vZwfCnx/interpolacion.gif" alt="interpolacion" border="0">

## Variables

Las variables no vienen de forma nativa en HTML pero con PUG podemos usarlas. En ellas almacenamos datos y los reutilizarlos en todo nuestro archivo HTML evitándonos tener que escribir lo mismo una y otra vez.

sintaxis para declarar una variable en pug.

```html
-var titulo = "Subtítulo Principal"
-var titulos = ["Título Principal", "Subtitulo 1", "Subtitulo 2", "Subtitulo 3"]
```

formas de llamar a las variables y los arreglos

<img src="https://i.ibb.co/qxj9dBJ/varialbles.jpg" alt="varialbles" border="0">

Cuando renderizamos las variables, tenemos que colocar un
igual, el cual debe esta pegado al nombre de la etiqueta. Ejemplo:

``` html
h1= titulo

// Otra forma
h2 #{titulo}
```

## Condicionales y Loops

Un condicional nos permite evaluar cierta condición y bifurcar entre dos caminos dependiendo de si se cumple o no.

Un loop es un fragmento de código que va a ejecutar de forma repetitiva hasta que cumpla una condición.

**Loop:**

```html
ul
  each title in titles
    li=title
```

**Condicionales:**

```html
if user
  a Hello #{user}
else
  a.boton Registry
```

## Mixins

Su finalidad es ofrecer una funcionalidad que pueda ser reutilizada en otras clases pero que no está pensada para usarse de forma autónoma. Nos permite crear bloques reusables de código que cambian su resultado dependiendo del parámetro que enviemos.

Con los mixin logramos escribir menos código, produciendo un código más claro, más expresivo y sobre todo más fácil de mantener.

**Declarando Mixin**
<img src="https://i.ibb.co/9Yxgc1j/1.jpg" alt="1" border="0">

**Llamando Mixin**
<img src="https://i.ibb.co/djT8sY0/2.jpg" alt="2" border="0">

## Includes y Extends

Pug funciona como un generador de plantillas, dos de sus principales características para lograrlo son Includes y Extends.

Los **includes** sirven para incluir un archivo de extensión *.pug dentro de otro.

Los **extends** te permiten adicionar bloques de código a una página.

- [pug | Includes](https://pugjs.org/language/includes.html)
- [pug | Template Inheritance](ttps://pugjs.org/language/inheritance.html)

## Finalizando ejercicio de Landing Page

<img src="https://i.ibb.co/2FHJ2rW/Reto-Platzi-Game-Pug.jpg" alt="Reto-Platzi-Game-Pug" border="0">

# 4. Less

## Introducción a Less

Less es un preprocesador para CSS que nos permite trabajar hojas de estilo con funcionalidades de un lenguaje de programación.

Si lo quieren ejecutar desde la terminal lo pueden hacer de la siguiente manera:

```bash
npm install -g less

# Ejecutar  less
lessc styles.less styles.css
```

O el navegador: Importarlo al proyecto como cdn

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdn.jsdelivr.net/npm/less" ></script>
```

> El ampersand (&) es un selector en Less que sirve para referenciar la estructura completa hacia arriba, desde donde se utiliza. es un comodín para sustituir el elemento padre (pero no solo el elemento padre, sino el padre con todos sus padres).

- [GitHub - daywalkerhn/platzi-games-less-publico](https://github.com/daywalkerhn/platzi-games-less-publico)

  > Los preprocesadores son una fantastica herramienta para el desarrollo web.
A nivel profesional, los equipos de trabajo requieren de estas herramientas, debido al ahorro en tiempo que esto implica, la reutilización del código y la modularización de los componentes.

Los preprocesadores son una fantastica herramienta para el desarrollo web.
A nivel profesional, los equipos de trabajo requieren de estas herramientas, debido al ahorro en tiempo que esto implica, la reutilización del código y la modularización de los componentes.

## Anidamiento e imports

En Less el carácter “&” tiene la función de la palabra clave “this”, por lo que es posible escribir:

```css
.class1 {
    &.class2 {}
}
```

Por tanto, el archivo compilado de CSS generará un código como el siguiente:

```css
.class1.class2 {}
```

Creamos un archivo nuevo que contentra el estilo del intro, llamado `intros.less`

```css
.intro {
    width: 1340px;
    height: 650px;
    padding: 10px;
    margin: 0 auto;
    position: relative;
    
    // Aca se indica que esa clase esta dentro de intro
    /* .intro__imagen {
        width: 1320px;
        position: absolute;
    } */
    
    // Aca el signo & indica que la primera parte tiene la misma clase  en este caso intro

    &__imagen {
        width: 1320px;
        position: absolute;
        img{
            width: 100%;
            height: 624px;
            object-fit: cover;
        }
    }

    &__contenido{
        width: 50%;
        margin: 0 auto;
        position:absolute;
        top:156px;
        left: 0;
        right: 0;
        text-align: center;
        color: white;
    }
    &__categoria{
        font-family: 'Oswald',sans-serif;
        text-transform: uppercase;
    }

    &__titulo{
        font-family: 'Oswald',sans-serif;
        text-transform: uppercase;
        font-size: 50px;
    }

    &__autor{
        width: 150px;
        margin: 0 auto;
        position: absolute;
        top: 400px;
        left:0;
        right: 0;
        color: white;
        img{
            width: 60px;
            height: 50px;
            float: left;
            padding-right: 10px;
            border-radius: 10em;
        }
        span{
            display: inline-block;
        }
    }
}
```

Nuestro archivo `platzigames.less`

```css
@import "globales.css";
@import "intros.css";
```

## Variables

En las variables almacenamos datos que se puede reutilizar en todas nuestras hojas de estilos. Así evitamos tener que escribir lo mismo una y otra vez cuando se realiza algún cambio, ya que sólo vamos a modificar el valor de la variable y se aplicará a todos los lugares donde sea usada.

Comúnmente almacenamos en variables las guías de estilo de nuestro sitio, como pueden ser los colores y fuentes.

Las variables funcionan de forma similar a las constantes en los lenguajes de programación, permitiendo definir valores que podrán ser reutilizados en cualquier parte de la hoja de estilo, inclusive en otras hojas de estilo. Sintaxis:
`@variable: valor;`

```css
<!-- [> Las variables añadidas en esta clase: <] -->

@color-claro: #FFF;
@color-primario: #333;
@color-secundario: #8841da;
@color-variacion: #012179;
@Fuente1: 'Lato', sans-serif;
@Fuente2: 'Oswald', sans-serif;

/* Utilizar las variables: */
color: @color-claro;
font-family: @Fuente1;
```

## Funciones

La diferencia entre mixins y funciones es que las funciones por general hacen cálculos y regresan un resultado que es usado como valor de alguna propiedad.

Las funciones en Less ya están prediseñadas.

```css
/* Transparencia  */
color: fade(@color-claro, 50%);

/* Fuente */
line-height: @fuente-base + 10%;
```

- [less](https://lesscss.org/#)
- [Functions | less](https://lesscss.org/functions/)
- [calc() | developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/calc())

## Mixins

Su finalidad es ofrecer una funcionalidad que pueda ser reutilizada en otras clases pero que no está pensada para usarse de forma autónoma. Nos permite crear bloques reusables de código que cambian su resultado dependiendo del parámetro que enviemos.

Con los mixins logramos escribir menos código, produciendo un código más claro, más expresivo y sobre todo más fácil de mantener.

Un mixin es cuando tenemos estilo o propiedades que pueden ser utilizadas por diferentes elemenos en distintos partes.

```CSS
/* CSS */
//Esto es un mixins por que se utiliza varias veces
.sombra-caja {
    box-shadow: 0px 5px 15px 0px fade(@color-primario,50%);
}
```

## Finalizando ejercicio de página de artículos

<img src="https://i.ibb.co/x70ysxS/Platzi-Games.jpg" alt="Platzi-Games" border="0">

# 5. Sass

## Introducción a Sass

Sass (Syntactically Awesome StyleSheets) es una extensión de CSS que añade características muy potentes y elegantes a este lenguaje de estilos.

Sass es basado en Ruby a diferencia de Less y Stylus que se basan en Javascript.

Sass nos permite usar variables , reglas anidadas , mixins y funciones.
La razón de que en SASS usemos la extensión ‘.scss’ es porque esta nos permite usar una sintaxis muy parecida a css.
La otra opción es usar SASS con la extensión ‘.sass’ la única diferencia es que con esta extensión podremos omitir las llaves ‘{}’ y los punto y coma ‘;’ después de cada valor, esta sintaxis interpretará los atributos y valores por medio de la identación.

Para los que están acostumbrados a usar la terminal pueden hacer lo siguiente:

<h1>Instalar sass</h1>

```bash
npm install -g sass
```



<h1>Compilar de sass a css</h1>



```bash
sass --watch ejercicio-sass.scss ejercicio-sass.css
```

![img](https://www.google.com/s2/favicons?domain=https://github.githubassets.com/favicon.ico)[GitHub - daywalkerhn/platzi-games-sass-publico](https://github.com/daywalkerhn/platzi-games-sass-publico)

[GitHub - daywalkerhn/platzi-games-sass-publico](https://github.com/daywalkerhn/platzi-games-sass-publico)

## Introduccion

------

Sass (Syntactically Awesome StyleSheets) es una extensión de CSS que añade características muy potentes y elegantes a este lenguaje de estilos.

Sass es basado en Ruby a diferencia de Less y Stylus que se basan en Javascript.

- Creamos un archivo llamado **ejercicio-sass.scss.** Lo primero que trabajaremos es el anidamiento.

```scss
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    font-family: 'Lato',sans-serif;
}

main {
    display: flex;
    width: 100%;
    height: 100vh;
}

.perfil {
    width: 50%;
    padding-top: 50px;
		// el signo & indica que este elemento comienza con el mismo nombre de clase
		// es equivalente a escribir .perfil__avata
	 // Todo esta dentro de .pefil por que son estilos de elementos hijos de esa clase
	// Luego SASS cuando compila lo organiza 
    &__avatar{
        display: block;
        margin: 0 auto;
        border-radius: 50%;
    }
    &__nombre {
        text-transform: uppercase;
        text-align: center;
        font-size: 20px;
    }
    &__titulo{
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        font-size: 12px;
    }
    &__boton{
        display: block;
        width: 100px;
        height: 40px;
        margin: 15px auto;
        padding-top:15px;
        border-radius: 20px;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
    }
}
```



## Variables

En las variables almacenamos datos que se puede reutilizar en todas nuestras hojas de estilos. Así evitamos tener que escribir lo mismo una y otra vez cuando se realiza algún cambio, ya que sólo vamos a modificar el valor de la variable y se aplicará a todos los lugares donde sea usada.

Comúnmente almacenamos en variables las guías de estilo de nuestro sitio, como pueden ser los colores y fuentes.

- Variables Less = @

- Variables SASS = $

  ### Variables 

  ```scss
   // Asi se declaran variables
  $Fuente1:'Lato',sans-serif;
  $Fuente2:'Oswald',sans-serif;
  $color-primario:#333333;
  $color-claro:#FFFFFF;
  $color-secundario:#8841DA;
  $color-variacion:#3F579A;
  
  *{
      box-sizing: border-box;
  }
  
  body{
      margin: 0;
      font-family: $Fuente1; // Asi como se usan
  }
  ```

  Las variables en SASS empiezan con `$`
  Por ejemplo `$Fuente1: 'Lato', sans-serif;` y aplicando la variable a un selector:

  ```scss
  body {
  	margin: 0;
  	font-family: $Fuente1;
  	}
  ```

  ### Buenas practicas tomadas de esta clase

  - Antes de nombrar a un bloque de código, hay que pensar si ese bloque nos servirá para futuras ocasiones, como en el caso de “Seguidores” en nuestro proyecto de este curso. Si el bloque si nos servirá en futuras ocasiones, entonces no hay que nombrar con la metodología BEM, ya que eso puede romper ciertas partes de código en otros archivos html. Eso nos ayuda con la modularizarían y la reutilización de código.
  - Las variables deben ir hasta arriba
  - Los nombres de las variables tienen que ser genéricos, tales como `fuente1, color-primario`, etc. Esto es porque estas variables pueden cambiar. Y teniendo un nombre genérico, no nos vamos a confundir al momento de cambiar una variable.
  - enlaces útiles
    - https://sass-lang.com/documentation
    - https://sass-lang.com/guide

## Imports y Extends

**Import** nos permite escribir código modular separando en diferentes archivos para después importarlos todos en uno solo y tener una base código mucho más ordenada.

**Extends** sirve para insertar los estilos de un selector en otro.

Tip: al momento de usar *import* no es necesario colocar la extensión del archivo, con solo escribir el nombre funciona:

```css
@import "components/globales";
@import "components/perfiles";
@import "components/estadisticas";
@import "components/ubicaciones"
```

En el caso de que aún con el `_` Prepros siga compilando el archivo lo que hay que hacer es añadir el ` _` a la lista de archivos excluidos. en Prepros 5 la ruta es` App menu> Project defaults> Filters> Project Filters`.
Solo hay que colocar un `_` al final de la lista.

### @extend & @import en Sass

`@extend` funciona para que un elemento herede todas las propiedades y valores de una clase que le tenemos que especificar. Por ejemplo:

```scss
.class2{
  @extend .class1;
}
```

.
En el caso del `@import`, lo que hacemos es importar las propiedades de un archivo extension “scss”, aunque OJO, los archivos que van a ser importados deben tener un guion bajo al inicio. Esto le dice al preprocesador que ese archivo no tiene que ser compilado. Un ejemplo de un archivo a ser importado es: `_footer.scss`
@import se usa de la siguiente manera:

```scss
@import "./elementos/footer.scss"
```

Hay que tener en cuenta que no usamos una bandera de `url()` antes de escribir la dirección del archivo a importar y que el archivo en el documento que se compila ya no tiene el guion bajo.

## Mixins

Su finalidad es ofrecer una funcionalidad que pueda ser reutilizada en otras clases pero que no está pensada para usarse de forma autónoma. Nos permite crear bloques reusables de código que cambian su resultado dependiendo del parámetro que enviemos.

Con los mixin logramos escribir menos código, produciendo un código más claro, más expresivo y sobre todo más fácil de mantener.

color primario en el `box-shadow`, pero lo hace utilizando `@`. A mí me funcionó con el `$`.

```scss
@mixin caja {
    border-radius: 20px;
    box-shadow: 0px 20px 33px 0px rgba($color-primario, 0.5);
    color: $color-primario;
    background-color: $color-claro;
}
```

Declaracion

```scss
@mixin caja{
    color: $fuente1;
    background-color: #3f579a;
}
```

Llamado de mixin

```scss
@include caja;
```

## Funciones

La diferencia entre mixins y funciones es que las funciones por general hacen cálculos y regresan un resultado que es usado como valor de alguna propiedad.

Los **mixins **nos ayudan a reutilizar código en otras partes y evitar hacer código muy repetitivo.
Las **funciones **hacen un calculo y por lo general reciben un parametro y retornar un valor.

**Declaracion**

```scss
@function get-opacity($color,$nivel){
    @return rgba($color,$nivel);
}
```

**Llamado**

```scss
.perfil__minibo{
    color: get-opacity($color-primario, .20);
}
```

## Condicionales y Loops

Un **condicional** nos permite evaluar cierta condición y bifurcar entre dos caminos dependiendo de si se cumple o no.

Un **loop** es un fragmento de código que va a ejecutar de forma repetitiva hasta que cumpla una condición.

**Sass admite cuatro reglas de control de flujo:**

- **@if and @else:** Controla si se evalúa o no un bloque
- **@each:** evalúa un bloque para cada elemento de la lista o par en un mapa.
- **@for:** evalúa un bloque cierto numero de veces
- **@while:** evalúa un bloque hasta que se cumpla cierta condición.

- [Documentation | Sass](https://sass-lang.com/documentation/at-rules/control)

Declaraondo condicional

```scss
@each $header, $size in (h1: 30px, h2: 25px, h3: 20px) {
  #{$header} {
    font-size: $size;
    margin: 0;
  }
}
```

Declarando `@mixin titulos`

```scss
@mixin titulos($fuente) {
  @if $fuente==$Fuente1 {
    font-family: $Fuente1;
  } @else {
    font-family: $Fuente2;
    text-transform: uppercase;
  }
}
```

Llamando `@mixin titulos`

```scss
@include titulos($Fuente1);

// llamando a 
@include titulos($Fuente2);
```



## Finalizando ejercicio de perfil de usuario

<img src="https://i.ibb.co/gm3CNb6/reto-sass.jpg" alt="reto-sass" border="0">

## Solucion:

**1.Crear el Mixin**

```scss
@mixin mode-background ($color) {
	@if $color == $color-primario {
			background-color: $color-primario;
			color: $color-claro;
			.perfil__nombre{
				color: $color-secundario;
				@include titulos($Fuente2);
			}

			.perfil__titulo{
				color: $color-variacion;
				@include titulos($Fuente2);
			}

			.perfil__boton {
				color: $color-claro;
				background-color: $color-variacion;
			}

	} @else  {
			background-color: $color-claro;
			color: $color-primario;
		.perfil__nombre{
			color: $color-secundario;
			@include titulos($Fuente2);
		}

		.perfil__titulo{
			color: $color-variacion;
			@include titulos($Fuente2);
		}

		.perfil__boton {
			color: $color-claro;
			background-color: $color-variacion;
		}
	}
}
```

**2. Agregar el mixin a _perfiles.scss**

```scss
.perfil {
	width: 40%;
	padding-top: 50px;
	color: $color-claro;
	background-color: $color-secundario;
	@include mode-background ($color-claro);
	&__avatar {
		display: block;
		margin: 0 auto;
		border-radius: 50em;
	} ...... //Continua parte del codifo hecho en las clases
```

**3. Agregar el Mixion en _articulos.scss**

```scss
.articulos {
	width: 60%;
	padding: 50px 0 0 50px;
	@include mode-background ($color-primario);
}
```

# 6. Stylus

## Introducción a Stylus

Es el preprocesador CSS más reciente de los tres. Fue creado por TJ Holowaychuk (ex programador de Node.js) y escrito en JADE y Node.js.

![img](https://www.google.com/s2/favicons?domain=https://github.githubassets.com/favicon.ico)[GitHub - daywalkerhn/platzi-games-stylus-publico](https://github.com/daywalkerhn/platzi-games-stylus-publico)


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
