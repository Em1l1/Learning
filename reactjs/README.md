<h1>React.js</h1>
<h4>Richard Kaufman</h4>

# Tabla de contenido
- [1. Introducción a React.js](#1-Introducción-a-React-js)
  - [¿Qué es React.js?](#¿Qué-es-React-js?)
  - [Pre-requisitos](#Pre-requisitos)
  - [Herramientas que usaremos](#Herramientas-que-usaremos)
  - [Create-react-app](#Create-react-app)
- [2. Fundamentos](#2-Fundamentos)
  - [Clonar el código de GitHub](#Clonar-el-código-de-GitHub)
  - [ReactDOM.render](#ReactDOM-render)
  - [JSX](#JSX)
  - [Creación y diseño de componentes](#Creación-y-diseño-de-componentes)
  - [¿Qué es un componente?](#¿Qué-es-un-componente?)
  - [Qué es y cómo funciona un componente en React.js](#Qué-es-y-cómo-funciona-un-componente-en-React-js)
  - [Nuestro primer componente](#Nuestro-primer-componente)
  - [Cómo aplicar estilos](#Cómo-aplicar-estilos)
  - [Props](#Props)
  - [Nuestra primera página](#Nuestra-primera-página)
  - [Enlazando eventos](#Enlazando-eventos)
  - [Manejo de estado](#Manejo-de-estado)
  - [Levantamiento del estado](#Levantamiento-del-estado)
  - [Listas de componentes](#Listas-de-componentes)
- [3. React Router](#3-React-Router)
  - [Introducción a React Router](#Introducción-a-React-Router)
  - [División de la aplicación en rutas](#División-de-la-aplicación-en-rutas)
  - [Mejorando la User Interface con un Layout](#Mejorando-la-User-Interface-con-un-Layout)
- [4. Component Lifecycle](#4-Component-Lifecycle)
  - [Introducción del ciclo de vida de un componente](#Introducción-del-ciclo-de-vida-de-un-componente)
  - [Práctica del ciclo de vida](#Práctica-del-ciclo-de-vida)
- [5. Llamadas a un API](#5-Llamadas-a-un-API)
  - [Introducción llamadas a un API](#Introducción-llamadas-a-un-API)
  - [React.js: Cómo traer datos de un API en React](#React-js-Cómo-traer-datos-de-un-API-en-React)
  - [Solicitando datos (GET)](#Solicitando-datos-GET)
  - [Mejorando la Experiencia de Usuario durante una petición](#Mejorando-la-Experiencia-de-Usuario-durante-una-petición)
  - [Enviando datos (POST)](#Enviando-datos-POST)
  - [Manejando los estados de la petición durante el POST](#Manejando-los-estados-de-la-petición-durante-el-POST)
  - [Actualizando datos (PUT)](#Actualizando-datos-PUT)
  - [Actualizaciones automáticas](#Actualizaciones-automáticas)
  - [6. Mejorando la UI](#6-Mejorando-la-UI)
  - [Los detalles de un Badge](#Los-detalles-de-un-Badge)
  - [UI Components y Container Components](#UI-Components-y-Container-Components)
  - [Portales](#Portales)
  - [Modales](#Modales)
  - [Hooks](#Hooks)
  - [Search filter](#Search-filter)
- [7. Conclusion](#7-Conclusion)
  - [Conclusión](#Conclusión)
  

## 1. Introducción a React.js

### ¿Qué es React.js?

**
** cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un _Framework_ aunque las convenciones de cómo debe ser organizado todo no son estrictas.
En este curso aprenderás las prácticas que la comunidad ha decidido que son buenas.

**React es declarativo**, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

**JSX** es HTML dentro de Javascript, esto se verá más adelante en detalle.

React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

- []()

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
npm uninstall -g create-react-app.
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

### ReactDOM.render

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