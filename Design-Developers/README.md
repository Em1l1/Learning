# Sistemas de Diseño para Desarrolladores

#### Rulótico González

# Tabla de Contenido

- [Introducción](#Introducción)
  - [Introducción y presentación](#Introducción-y-presentación)
  - [Conoce Sistemas de Diseño populares](#Conoce-Sistemas-de-Diseño-populares)
- [Instalación y flujos de trabajo](#Instalación-y-flujos-de-trabajo)
  - [Bonus: Personalizando la Terminal](#Bonus-Personalizando-la-Terminal)
  - [Instalación y flujos de trabajo](#Instalación-y-flujos-de-trabajo)
  - [Instalación de Node / Express desde 0](#Instalación-de-Node-Express-desde-0)
  - [Bonus: html, css, js](#Bonus-html-css-js)
- [Automatización](#utomatización)
  - [Automatización (Pre procesadores)](#Automatización-Pre-procesadores)
  - [Continuando con la automatización](#Continuando-con-la-automatización)
- [Paradigmas](#Paradigmas)
  - [SMACSS: Arquitectura de CSS escalable y modular](#SMACSS-Arquitectura-de-CSS-escalable-y-modular)
  - [OCSS: Orientación de objetos en CSS](#OCSS-Orientación-de-objetos-en-CSS)
  - [BEM](#BEM)
  - [Bonus: Bootstrap](#Bonus-Bootstrap)
- [Naming](#Naming)
  - [Naming](#Naming)
- [Qué son los tokens](#Qué-son-los-tokens)
  - [¿Qué son los tokens?](#¿Qué-son-los-tokens?)
- [Espaciado](#Espaciado)
  - [Espaciado](#Espaciado)
- [Grillas](#Grillas)
  - [Grillas](#Grillas)
  - [Bonus: Animando en CSS](#Bonus-Animando-en-CSS)
- [Mi primer componente](#Mi-primer-componente)
  - [Mi primer componente](#Mi-primer-componente)
- [Documentación](#Documentación)
  - [Documentación](#Documentación)
- [Testing](#Testing)
  - [Testing](#Testing)
  - [Bonus: Debug en el navegador](#Bonus-Debug-en-el-navegador)
- [Deploy y versionamiento](#Deploy-y-versionamiento)
  - [Cómo empezar en Github](#Cómo-empezar-en-Github)
  - [Deploy y versionamiento](#Deploy-y-versionamiento)
- [Design review](#Design-review)
  - [Design review](#Design-review)
  - [Cierre](#Cierre)

## Introducción

### Introducción y presentación

¡Bienvenido al curso de Sistemas de Diseño!

En este curso aprenderás a crear sistemas de diseño desde cero así como todas las herramientas que tienes para dialogar y trabajar junto con otros equipos a la hora de crear o iterar productos de software.

Nuestro profesor Rulótico González es un diseñador interactivo, en otras palabras, se especializa en diseñar las interfaces del futuro. Además, es diseñador y programador al mismo tiempo. Como diseñador y programador transitó en el diálogo y los conflictos entre estas profesiones, fue así como encontró los sistemas de diseño, creando mejores procesos y estructuras para dialogar.

- [Airbnb Design – A behind-the-scenes look at our design culture, process, learnings, and storytelling. Inspired by work, travel, and the creatives we serendipitously meet along the way](https://airbnb.design/designing-for-crisis/)

### Conoce Sistemas de Diseño populares

Conocer otros sistemas de diseño te permite tener referencias a la hora de pensar cómo empezar el tuyo. Muchos están documentados y puedes ver sus aprendizajes paso a paso en el proceso de construirlo.

El sistema de diseño se basa en ayudar de manera estandarizada y óptima los procesos de creación de funcionalidades, flujos y componentes del producto.

Es por eso que podemos definir diferentes puntos a tener en cuenta ahora que construyamos nuestro sistema de diseño:

  - **Flujo del equipo**
  - **Sistema de versionamiento y alta de documentos y pantallas**
  - **Documentación**
  - **Construcción y distribución**
  - **Revisión y deploy**

Como haremos la revisión de los archivos de construcción y mantendremos sano nuestro sistema, o las conexiones a nuestro sistema.

Además te permite vislumbrar todo lo que vamos a construir a lo largo de este curso, y determinar qué aspectos de tu Sistema de Diseño son necesarios o prescindibles.

> Un sistema de diseño busca sobre todo **mejorar el flujo de trabajo de equipo** permitiéndole aprender e iterar mucho más rápido y eficiente.

## Instalación y flujos de trabajo

### Bonus: Personalizando la Terminal

- [iTerm2](https://iterm2.com)
- [oh my zsh](https://ohmyz.sh)

### Instalación y flujos de trabajo

El Sistema de Diseño es como una “API del diseño”, que te servirá para comunicar tu sistema a nivel código.

Estos son los pasos que tendremos en cuenta:

Empezaremos por crear una URL que centralice los elementos principales de tu Sistema de Diseño.
Instalaremos Node y Express para poder construir tu web de manera muy visual rápidamente.

- [Express Infraestructura web rápida, minimalista y flexible para Node.js](https://expressjs.com/es/)
- [nodejs](https://nodejs.org/es/)

  - Instalar Node desde la pagina
  - Instalar Express con `npm install express-generator -g`
  - Abrir Bash en la carpeta del proyecto
  - Crear la base del proyecto con `express --view=pug Platzi_DeditoSudado`
  - Entrar a la carpeta del proyecto desde Bash
  - `npm install` para que nos permita instalar herramientas chidas
  - Escribir `npm start`
  - En el navegador escribir `localhost:3000`
  - Cerrar con ctrl+c
  - Para abrir el proyecto con VSC es code .

- [Express application generator](https://expressjs.com/en/starter/generator.html)

### Instalación de Node / Express desde 0

Para instalar NODE necesitaremos:

  - Muchas ganas
  - Pocas muecas
  - Tus manitas
  - Entrar al siguiente link → https://nodejs.org/en/download/

Ahí hay mucha información pero a ti lo único que te va importar son estos botones:

![](https://i.ibb.co/XW2Gsnk/node.jpg)

Elige dependiendo del sistema operativo que uses y con eso comenzará la descarga:

![](https://i.ibb.co/brvm2t9/node1.jpg)

Cuando abras ese archivo te informará que instalará dos cosas: Node y npm:

![](https://i.ibb.co/QvPg5N8/node2.jpg)

Ahora para probar que se haya instalado ingresa a la terminal y coloca estos comandos:

  - `node --version`
  - `npm --version`

Nos responderá con las respectivas versiones y sabremos que ya está instalado n_n

A veces la primera vez no es tan simple, y puede que la respuesta que obtengas no sea tan feliz, te cuento un par de errores posibles para que tengas en cuenta:

- Para que Node se instale bien, tienes que instalarlo estando en la carpeta correcta. Verifica que estás en la que tiene “package.json” antes de ejecutar el comando npm install. - Si aún no sabes cómo moverte entre carpetas en la terminal, es un gran momento para revisar el curso de Introducción a la Terminal y Línea de Comandos
- Si ya tienes node pero no está actualizado, puede que te salgan errores extraños. Ejecuta primero npm install y luego npm start, así se actualiza antes.
- Si estás en iOS o Mac, es probable que necesites ejecutar el comando sudo npm install , que te pedirá tu clave de administrador y luego te permitirá instalarlo sin problemas.
- Si te sale algún otro error loco que no logras solucionar, tienes algunas alternativas:
Avísanos respondiendo a este tutorial, alguien de la comunidad puede ayudarte
- **No temas:** miles de personas sufrieron miles de errores instalando Node antes que tú. Algunos de ellos aprendieron en el camino y devuelven su amor en forma de tutoriales o discusiones en Stackoverflow o las profundidades de la internet. Sumérgete en sus respuestas googleando el tipo de error que te sale, seguramente serás capaz de resolverlo muy pronto.

### Bonus: html, css, js

**`Pug`** nos permite utilizar una sintaxis un poco diferente al HTML común y corriente, pero es más amigable, en vez de encerrar las etiquetas dentro de otras etiquetas podemos simplemente tabular (dejar espacios) y automáticamente nuestro html funcionara a la perfección, también podemos utilizar las funciones extends y block para definir layouts o templates que podemos modificar cuando necesitemos:

```pug
html
	head
		link(rel="stylesheet" href="...") // los atributos van entre ()
		// al tabular obtenemos un resultado másomenos así:
		// <html>
		// 		<head>
		// 		 <link ...etc />
		// 		</head>
		// </html>
	body
		block content // cuando utilicemos este template podemos definr el contenido de aquí :o
```

- [Prepros](https://prepros.io)

- [Proyecto | GitHub | Platzi_DS](https://github.com/rulotico/Platzi_DS)

## Automatización

### Automatización (Pre procesadores)

- Instalamos `gulp-cli` mediante `npm install --global gulp-cli` de manera global.
- Instalamos gulp mediante `npm install --save-dev gulp` guardándola en el entrono de desarrollo

Dentro de nuestro proyecto vamos a instalar otras dos dependencias `npm install gulp` y `npm install scss`

#### ¿Qué es gulp?

Gulp es una herramienta para poder automatizar procesos por medio de pipelines, o sea flujos , digamos que le decimos primero haz esto y luego haz esto con tan solo un comando, justo lo que necesitamos.

#### ¿Qué es SCSS?

Como CSS requiere de muchos caracteres pues SCSS lo hace más fácil donde utilizamos el poder de la programación para definir variables y construir de manera modular CSS, esto nos mantiene óptimos y sobre todo podemos asegurar la consistencia de nuestro sistema. Comenzamos a instalar las funciones que necesitas para potenciar tu SCSS y terminaremos de hacerlo en la siguiente clase.

### Continuando con la automatización

Continuamos la instalación de las funciones que necesitamos de gulp, y una vez instalados ahora vamos crear los siguientes archivos y funciones:

  > Dentro de la carpeta de SCSS crearemos una estructura atómica

- Fundations
- Atomos
- Moléculas
- Organismos
- Páginas
- Templates

  > En gulp vamos a crear las siguientes funciones:

- Compilador de SCSS a main.css

Instalar minify-css

```bash
sudo npm install gulp-minify-css
```

  - Ejecutar minify
  
  ```bash
  gulp style_main
  ```

- Instalar gulp contac

```bash
sudo npm install gulp-concat
```

  - Ejecutar watch

  ```bash
  gulp watch
  ```

## Paradigmas

### SMACSS: Arquitectura de CSS escalable y modular

Existen diferentes paradigmas y vamos a revisar algunos de ellos en las próximas clases para definir el mejor para nuestro sistema pues depende mucho de las necesidades de cada proyecto.

En esta clase analizaremos el paradigma SMACSS o Scalable and Modular Architecture for CSS (Arquitectura en CSS Escalable y Modular).

SMACSS se trata de una manera de construcción para los estilos de tu sistema. Es un paradigma basado en las siguientes categorías, que analizaremos en profundidad en esta clase:

  - Base
  - Layout
  - Module
  - State
  - Theme

  ![](https://i.ibb.co/1r0xJxL/smacss.jpg)

Scalable and Modular Architecture for CSS. ¿En qué se basa este paradigma?

  - **`base:`** toma las etiquetas primordiales de html
  - **`layout:`** las etiquetas que segmentan la página
  - **`module:`** es más específico e interioriza en el layout
  - **`state:`** muestra el estado de un elemento
  - **`theme:`** aquí creamos archivos específicos por tema

Recuerda que tú vas a definir las reglas que mejor se adapten a tu producto y que hagan que mejore el flujo de trabajo.

- [SUIT CSS](http://suitcss.github.io)
- [Methods to Organize CSS](https://css-tricks.com/methods-organize-css/)
- [Clean-css](https://github.com/jakubpawlowicz/clean-css)

### OCSS: Orientación de objetos en CSS

OCSS o Object-Oriented CSS (Orientación de objetos en CSS).

Este se trata de un paradigma basado en la creación de objetos, que son básicamente lo que también se llama modulo o componente en otros paradigmas.

Este paradigma puede no incluir la estructura base del html Aprende a construir tu librería OCSS en esta clase.

- [OOCSS - The Future of Writing CSS](https://www.keycdn.com/blog/oocss)

### BEM

BEM es un paradigma que anticipa modificadores de un componente.
En esta metodología categorizamos o dividimos las clases de la siguiente manera:

Block (Bloque)
Los bloques consideran contenedores de los componentes que nos sirven para englobarlos tipo objetos.

Elements (Elementos)
Los elementos que van dentro de estos contenedores

Modifiers (modificadores)
Son clases de lo más geniales, nos permiten modificar el comportamiento o estilo de un componente.

- [How to organize your CSS with OOCSS, BEM & SMACSS](https://intelygenz.medium.com/how-to-organize-your-css-with-oocss-bem-smacss-a2317fa083a7)

### Bonus: Bootstrap

- [Bootstrap](https://getbootstrap.com)

![](https://i.ibb.co/PFJN9GJ/tech.png)

## Naming

### Naming


## Qué son los tokens
### ¿Qué son los tokens?
## Espaciado
### Espaciado
## Grillas
Grillas
Bonus: Animando en CSS
- Mi primer componente
Mi primer componente
- Documentación
Documentación
Testing
Testing
Bonus: Debug en el navegador
- Deploy y versionamiento
Cómo empezar en Github
Deploy y versionamiento
- Design review
Design review
Cierre