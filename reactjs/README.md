<h1>React.js</h1>
<h4>Richard Kaufman</h4>

# Tabla de contenido
- [Tabla de contenido](#tabla-de-contenido)
  - [1. Introducción a React.js](#1-introducción-a-reactjs)
    - [¿Qué es React.js?](#qué-es-reactjs)
    - [Pre-requisitos](#pre-requisitos)
    - [Herramientas que usaremos](#herramientas-que-usaremos)
    - [Create-react-app](#create-react-app)
  - [2. Fundamentos](#2-fundamentos)
    - [Clonar el código de GitHub](#clonar-el-código-de-github)
    - [ReactDOM.render](#reactdomrender)
    - [JSX](#jsx)
    - [Creación y diseño de componentes](#creación-y-diseño-de-componentes)
    - [¿Qué es un componente?](#qué-es-un-componente)
    - [Qué es y cómo funciona un componente en React.js](#qué-es-y-cómo-funciona-un-componente-en-reactjs)
    - [Nuestro primer componente](#nuestro-primer-componente)
    - [Cómo aplicar estilos](#cómo-aplicar-estilos)
    - [Props](#props)
    - [Nuestra primera página](#nuestra-primera-página)
    - [Enlazando eventos](#enlazando-eventos)
    - [Manejo de estado](#manejo-de-estado)
    - [Levantamiento del estado](#levantamiento-del-estado)
    - [Listas de componentes](#listas-de-componentes)
  - [3. React Router](#3-react-router)
    - [Introducción a React Router](#introducción-a-react-router)
    - [División de la aplicación en rutas](#división-de-la-aplicación-en-rutas)
    - [Mejorando la User Interface con un Layout](#mejorando-la-user-interface-con-un-layout)
  - [4. Component Lifecycle](#4-component-lifecycle)
    - [Introducción del ciclo de vida de un componente](#introducción-del-ciclo-de-vida-de-un-componente)
    - [Práctica del ciclo de vida](#práctica-del-ciclo-de-vida)
  - [5. Llamadas a un API](#5-llamadas-a-un-api)
    - [Introducción llamadas a un API](#introducción-llamadas-a-un-api)
    - [React.js: Cómo traer datos de un API en React](#reactjs-cómo-traer-datos-de-un-api-en-react)
    - [Solicitando datos (GET)](#solicitando-datos-get)
    - [Mejorando la Experiencia de Usuario durante una petición](#mejorando-la-experiencia-de-usuario-durante-una-petición)
    - [Enviando datos (POST)](#enviando-datos-post)
    - [Manejando los estados de la petición durante el POST](#manejando-los-estados-de-la-petición-durante-el-post)
    - [Actualizando datos (PUT)](#actualizando-datos-put)
    - [Actualizaciones automáticas](#actualizaciones-automáticas)
  - [6. Mejorando la UI](#6-mejorando-la-ui)
    - [Los detalles de un Badge](#los-detalles-de-un-badge)
    - [UI Components y Container Components](#ui-components-y-container-components)
    - [Portales](#portales)
    - [Modales](#modales)
    - [Hooks](#hooks)
    - [Search filter](#search-filter)
  - [7. Conclusion](#7-conclusion)
    - [Conclusión](#conclusión)
  

## 1. Introducción a React.js

### ¿Qué es React.js?

**React** cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un _Framework_ aunque las convenciones de cómo debe ser organizado todo no son estrictas.
En este curso aprenderás las prácticas que la comunidad ha decidido que son buenas.

**React es declarativo**, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

**JSX** es HTML dentro de Javascript, esto se verá más adelante en detalle.

React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

- [ReactJs.ppx](https://drive.google.com/file/d/1Mdol_kHV0kzpoOpPIBL9eiunuipOJsVe/view?usp=sharing)

### Pre-requisitos

Estos son los conocimientos que deberás tener antes de comenzar con este curso:

  - **Desarrollo web online:** Esto implica tener familiaridad y fortaleza en el uso de HTML y CSS.
  - **Javascript:** React es Javascript. Es importante saber usar Javascript en el navegador. Es deseable conocer JQuery y saber sobre promesas, clases y tener conocimientos sobre asincronía.
  - **Terminal:** La línea de comandos es indispensable para instalar herramientas, correr servidores y hacer diversas tareas.


### Herramientas que usaremos

Estas son las herramientas que usaremos en el curso:

**Navegador:** Especialmente Chrome ya que cuenta con óptimas herramientas de desarrollo.
**React Developer Tools:** Es una herramienta Open Source creada por Facebook y tiene instalación para Chrome o Firefox. Nos dejará ver el código de React inspeccionando elementos.
**Editor de texto:** Puedes usar cualquiera, en este curso sugerimos Visual Studio Code. Tiene muchos plugins útiles para el desarrollo.
**Prettier:** Es un plugin que hace que el código se vea bien sin importar cómo esta escrito.

- [Introduciendo las nuevas React DevTools – React Blog](https://es.reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-new-devtools)


### Create-react-app

**Create-react-app** es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo.

Pasos para obtenerlo:
Se debe instalar desde la línea de comando usando

```bash
npm install -g create-react-app
```

<h2>Cambio en el comando npm</h2>

Para todos los que estan siguiendo el tutorial al pie de la letra. 
Les cuento que el comando `npm install -g create-react-app` ya fue sustituido por npx. Asi que lo que tiene que hacer es lo siguiente. 
En caso de haber instalado previamente `create-react-app` se debe desinstalar:

```bash
npm uninstall -g create-react-app
```

Y luego usar el comando 

```bash
npx create-react-app hello-react
```

En caso de no tener instalado npx. Sencillamente instalarlo con:

```bash
npm install -g npx
```

Una vez instalado se crea la carpeta del proyecto con

```bash
create-react-app -nombre del proyecto-
```

En este punto se estará instalando React y otras herramientas, también se configurará el entorno usando Webpack.

Una vez se instala todo entra a la carpeta src donde estará todo el código fuente de la aplicación, siendo el más importante index.js que es el punto de entrada a la aplicación.

Finalmente para correr la aplicación se usa el comando

```bash
npm run start
```

Otras herramientas:

  - **Babel:** Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
  - **Eslint:** Lee el código y avisa de errores.

[Getting Started | Reactjs](https://create-react-app.dev/docs/getting-started/)

## 2. Fundamentos

### Clonar el código de GitHub

En esta clase vamos a comenzar clonando el código del proyecto del repositorio en GitHub.

Es importante que tú y yo tengamos un punto de partida en común. Así vamos a poder asegurarnos que cada cambio que yo haga en el código, tú también lo recibas.

Para hacer esto, en la terminal ve a una carpeta donde quieras que exista el proyecto. Entonces escribes lo siguiente:

```bash
$ git clone https://github.com/Sparragus/platzi-badges.git
```

Eso va a clonar el repositorio del curso a una carpeta llamada 
platzi-badges.

Ahora es necesario que te muevas a esa carpeta.

```bash
$ cd platzi-badges
```

Ahora necesitamos instalar todas las dependencias necesarias para poder correr el proyecto. Lo haremos utilizando npm.

```bash
$ npm install
```

Este proceso puede tardar un poco. Lo que esta haciendo es descargando todas las bibliotecas de código que el proyecto necesita.

Una vez haya concluido, estamos listos para echar a correr el servidor. Lo hacemos con el comando

```bash
$ npm run start
```

Cuando el servidor comience, automáticamente va a abrir una pantalla en el navegador con la aplicación.

Si todo salió bien, vas a ver una pantalla que dice “Hello, Platzi Badges”.

En la próxima clase vas a aprender como fue que “Hello, Platzi Badges” llegó desde el código hasta la pantalla de tu navegador.

[Sparragus | platzi-badges](https://github.com/sparragus/platzi-badges)


**Configuracion adicional**

El primer paso es clonarlo como hiciste, que lo que hace es traerte el proyecto con la rama master, luego tenes que traerte la rama 1.ReactDOM.render del repositorio remoto a tu repo local. Para traer dicha rama tenes que ejecutar dentro de la carpeta del proyecto:

```bash
# Traer una rama en especifico
git fetch origin 1.ReactDOM.render:1.ReactDOM.render

# Movernos a la rama
git checkout 1.ReactDOM.render
```

Luego de tener descargada la carpeta, entramos a la carpeta desde la terminal, luego escribimos lo siguiente para ver cuales dependencias se han actualizado:

```bash
$ npx npm-check-updates -u
```
  
  - Luego escribir el 

  ```bash 
  # Instalamos las dependencias
  $ npm install

  # Iniciamos el proyecto
  $ npm run start
  ```

Esto fue lo que me funciono a mi

Listo, ya con eso vas a estar trabajando sobre la rama correspondiente a la siguiente clase.

Para elevantar el stack de reactj

```bash
# utilizar yarn para la instalacion, y funciona
$ yarn install

# Iniciar el proyecto
$ yarn start
```

### ReactDOM.render

React y ReactDOM trabajarán en conjunto.

  - React como análogo a `createElement`
  - `ReactDOM` a appendChild
  - `ReactDOM.render()` toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.

Siempre que escribas JSX es requisito importar React.

  - **JSX:** Es lo que me permite hacer esto utilizando etiquetas HTML. ES un híbrido entre JS y HTML. (Es requisito importar React para utilizar JSX)
  - **ReactDOM** es el análogo a AppendChild en JS. (se renderiza en alguna parte del DOM.)
React es el análogo a createElement en JS.(Creo el elemento HTML).

![](https://i.ibb.co/xFPKMk6/react-dom.png)

Insersión de un elemento con React

Primero se importan las librerías

Seguidamente, se crea una constante que contendrá el elemento, esta vez el elemento puede ir con todo y contenido, pues react soporta cualquier html dentro de una variable

```js
const element = <h1> Hello Platzi </h1>;
```


ahora se escribe el contenedor

```js
const container = document.getElementById('app');
```

una vez seleccionado el div con id App, toca unirlos con la función “render” de la librería “ReactDOM”, esta pasa dos parámetros,

  1. El elemento a insertar
  2. El elemento que recibirá la insersión


```js
ReactDOM.render(element, container);
```

Listo. Ya con esto está realizada la insersión del h1 dentro del div con id “app”.

### JSX

### Creación y diseño de componentes

### ¿Qué es un componente?

### Qué es y cómo funciona un componente en React.js

### Nuestro primer componente

### Cómo aplicar estilos

### Props

### Nuestra primera página

### Enlazando eventos

### Manejo de estado

### Levantamiento del estado

### Listas de componentes

## 3. React Router
### Introducción a React Router
### División de la aplicación en rutas
### Mejorando la User Interface con un Layout
## 4. Component Lifecycle
### Introducción del ciclo de vida de un componente
### Práctica del ciclo de vida
## 5. Llamadas a un API
### Introducción llamadas a un API
### React.js: Cómo traer datos de un API en React
### Solicitando datos (GET)
### Mejorando la Experiencia de Usuario durante una petición
### Enviando datos (POST)
### Manejando los estados de la petición durante el POST
### Actualizando datos (PUT)
### Actualizaciones automáticas
## 6. Mejorando la UI
### Los detalles de un Badge
### UI Components y Container Components
### Portales
### Modales
### Hooks
### Search filter
## 7. Conclusion
### Conclusión