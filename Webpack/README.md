<h1>Webpack</h1>

<h3>Oscar Barajas Tavares</h3>

<h1>Tabla de Contenido</h3>

- [1. Introducción a Webpack](#1-introducción-a-webpack)
  - [¿Qué es Webpack?](#qué-es-webpack)
    - [Ideas/conceptos claves](#ideasconceptos-claves)
  - [Conceptos básicos](#conceptos-básicos)
- [2. Proyecto inicial](#2-proyecto-inicial)
  - [Tu primer build con Webpack](#tu-primer-build-con-webpack)
  - [Instalación de Webpack y construcción del proyecto](#instalación-de-webpack-y-construcción-del-proyecto)
  - [Configuración de webpack.config.js](#configuración-de-webpackconfigjs)
- [3. Loaders y Plugins en Webpack](#3-loaders-y-plugins-en-webpack)
  - [Babel Loader para JavaScript](#babel-loader-para-javascript)
  - [HTML en Webpack](#html-en-webpack)
  - [Loaders para CSS y preprocesadores de CSS](#loaders-para-css-y-preprocesadores-de-css)
  - [Copia de archivos con Webpack](#copia-de-archivos-con-webpack)
  - [Loaders de imágenes](#loaders-de-imágenes)
  - [Loaders de fuentes](#loaders-de-fuentes)
  - [Optimización: hashes, compresión y minificación de archivos](#optimización-hashes-compresión-y-minificación-de-archivos)
  - [Webpack Alias](#webpack-alias)
- [4. Deploy del proyecto](#4-deploy-del-proyecto)
  - [Variables de entorno](#variables-de-entorno)
  - [Webpack en modo desarrollo](#webpack-en-modo-desarrollo)
  - [Webpack en modo producción](#webpack-en-modo-producción)
  - [Webpack Watch](#webpack-watch)
  - [Deploy a Netlify](#deploy-a-netlify)
- [5. Herramientas de desarrollo complementarias](#5-herramientas-de-desarrollo-complementarias)
  - [Webpack Dev Server](#webpack-dev-server)
  - [Webpack Bundle Analyzer](#webpack-bundle-analyzer)
  - [Webpack DevTools](#webpack-devtools)
- [6. Integración básica de React.js](#6-integración-básica-de-reactjs)
  - [Instalación y configuración de React](#instalación-y-configuración-de-react)
  - [Configuración de Webpack 5 para React.js](#configuración-de-webpack-5-para-reactjs)
  - [Configuración de plugins y loaders para React](#configuración-de-plugins-y-loaders-para-react)
  - [Configuración de Webpack para CSS en React](#configuración-de-webpack-para-css-en-react)
  - [Optimización de Webpack para React](#optimización-de-webpack-para-react)
  - [Deploy del proyecto con React.js](#deploy-del-proyecto-con-reactjs)
- [7. Próximos pasos](#7-próximos-pasos)
  - [Continúa con el Curso Práctico de Webpack](#continúa-con-el-curso-práctico-de-webpack)

# 1. Introducción a Webpack

## ¿Qué es Webpack?

###  Ideas/conceptos claves

Module bundlers son herramientas de frontend que nos permiten usar archivos con módulos JavaScript, entre otras características y convertiros a un JavaScript el cual el navegador pueda entender

- Webpack es una herramienta que nos permite preparar nuestro código para llevarlo a producción (module bundler)
- Webpack nos permite trabajar con
  - HTML
  - CSS
  - JavaScript
  - Archivos estáticos
  - Imágenes
  - Fuentes

- Tambien nos permite tener un modo en desarrollo para nuestros proyectos para hacer pruebas
- Nacio en el 2012, desde ese entonces varias empresas lo usan como ser
  - Twitter
  - Instagram
  - PayPal
- También nos permite
  - Gestionar dependencias
  - Ejecutar tareas
  - Conversión de archivos
- Nos permite trabajar en módulos
  - Permitiéndonos tener un código separado en desarrollo, pero en producción en una fuente
  - Webpack permite tener módulos de JS en formato
    - AMD
    - Common JS
    - ES15

RESUMEN: Webpack es un `module bundler` que nos permite trabajar con una variedad de tecnologías web empezando desde HTML y terminando con JS. Además de tener soporte para archivos estáticos

**¿Qué es Webpack?**

básicamente webpack es un paquete de módulos y esto lo que hace es que nuestra aplicación puede tener archivos JavaScript o jsx, archivos sass, imágenes y empaquetarlos como si fuera una caja (todo en uno)

<img src="https://i.ibb.co/yfkQSrB/webpack.gif" alt="webpack" border="0">

**Webpack** se puede configurar desde la terminal usando un `CLI` o un archivo de configuración **especia** llamado `webpack.config.js`

- [What is module bundler and how does it work?](https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2)
- [webpack](https://webpack.js.org)

## Conceptos básicos

Ideas/conceptos claves
Webpack es un paquete de módulos estáticos para aplicaciones de JS modernas

Loader Te permite hacer un bundle de cualquier recurso estático más allá de JavaScript

Plugins Extienden recursos para añadir configuraciones y particularidades de recursos externos

- Webpack construye un gráfico de dependencias que mapea cada módulo para con verlo en uno o más módulos
- Desde webpack 4 ya no dependemos de tener un archivo de configuración, pero si debemos tener un punto de entrada
- Tambien tendremos que tener un punto de salida
  - En este punto se creará nuestro proyecto una vez esté preparado
  - Normalmente es la carpeta dist ⇒ Distribution
- Tambien contamos con diferentes modos
  - Modo de desarrollo
  - Modo de producción
  - Modos de performance
    - Donde tu añades
      - Configuraciones de minificación
      - Donde se va enviar
      - Carpeta de destino
  - Modos de desarrollo local
    - Donde puedes
    - Crear puertos específicos para tu proyecto
    - Ver cambios en tiempo real
- Dispone de loader y plugins permitiéndonos preparar particularidades de nuestro proyecto

> Webpack es un paquete de módulos estáticos para aplicaciones de JS modernas.

**Conceptos Básicos Webpack**

`**Entry (punto de entrada):**` este le indica a webpack cual modulo de JavaScript debe de usar para empezar a crear una salida.
Ejemplo : index.js. también podemos tener múltiples puntos de entrada pero eso es otra historia.

`**Output (punto de salida):**` Este archivo es el bundle o nuestro archivo de salida, seria nuestra caja donde empaquetamos toda nuestra aplicación, normalmente este archivo final se crea en una carpeta llamada dist

`**Loader (transformador):**` Los loaders lo que hacen es decirle a webpack como tiene que transformar el código de un modulo en concreto. Ejemplo : Los loaders pueden transformar ficheros a JavaScript, o cargar CSS directamente en archivos JS, (si usas reactjs ya sabrás como)

`**Plugins (complementos):**` Nos van a ayudar a extender las funcionalidades con los loaders, añadir otras configuraciones.
**Ejemplo :** hay un modulo llamado HTMLWebpackPlugin que este se encarga de crear un HTML personalizado que le inyecta todos los bundles finales que compilamos.

- [Concepts | webpack](https://webpack.js.org/concepts/)

# 2. Proyecto inicial

## Tu primer build con Webpack

La creamos desde la terminal con mkdir y luego entramos a ella con cd

```bash
mkdir curso-webpack
cd curso-webpack
```

una vez que entres a la carpeta inicializamos nuestro repositorio con git

```bash
git init
```

El paso que sigue es inicializar nuestro proyecto con npm y si no sabes de npm aqui esta el curso del profesor

```bash
npm init -y
```

o si les da error “Invalid Name” usen para personalizar la configuración

```bash
npm init
```

y para abrir el proyecto como flash es poner en la terminal y les abre el editor ( si usas VS CODE)

code .
La carpeta SRC es el source de todo el proyecto ( index.js , imágenes, utils, assets, helpers, database, etc).

** Instalación de Webpack**
si no quieres escribir ese comando también puedes usar este
la i de install

```bash
npm i webpack webpack-cli -D
```

o si usas yarn usa

```bash
yarn add webpack webpack-cli -D
```

Y luego ejecutamos webpack
npx lo que hace es ejecutar paquetes directamente de npm, este viene instalado de npm

```bash
npx webpack
```

Al hacer esto webpack creo una carpeta llamada dist, esto lo hace por defecto webpack sin preguntarnos.
Modo de desarrollo
Por defecto webpack al compilar nuestro proyecto setea el modo “production” implícitamente pero podemos definirle el modo explícitamente corriendo:

```bash
# Modo desarrollo
npx webpack --mode development

# Modo Production
npx webpack --mode production
```

La diferencia radica que el modo development deja el código mas legible para los desarrolladores pero con comentarios, el modo production deja el código comprimido y mas limpio para usarse.

## Instalación de Webpack y construcción del proyecto

Entendimos las bases de webpack pero ahora vamos a crear un proyecto que nos va a permitir trabajar con todas las particularidades que nos brinda webpack y preprarlo para mandarlo a produccion

  - CSS
  - Imágenes
  - fonts
  - optimización de código

El proyecto que realizaremos será un pequeño portafolio en el que podremos ver nuestra foto y nuestro nombre y redes sociales.

Lo clonamos de aqui y hacemos uso de los assets que previamente nos prepararon

[gndx/js-portfolio](https://github.com/gndx/js-portfolio)

Luego de ello instalaremos webpack para configurar nuestro proyecto

utilizamos el comando para poder ver webpack en mod production

```bash
npx webpack --mode production
```

Pasos de la clase

  1. Clonar el proyecto
  ```bash
  git clone https://github.com/gndx/js-portfolio.git
  ```

  2. Instalar webpack con npm
  ```bash
  npm install webpack webpack-cli -D 
  ```

  con Yarn
  ```bash
  yarn add webpack webpack-cli -D
  ```

**Portafolio**
- [GitHub - gndx/js-portfolio](https://github.com/gndx/js-portfolio)

**Webpack**
- [Getting Started | webpack](https://webpack.js.org/guides/getting-started/#basic-setup)

## Configuración de webpack.config.js

- El archivo de configuración nos va ayudar a poder establecer la configuración y elementos que vamos a utilizar
- Para poder crear el archivo de configuración en la raíz del proyecto creamos un archivo llamado `webpack.config.js`
- En el mismo debemos decir
  - El punto de entrada
  - Hacia a donde a enviar la configuración de nuestro proyecto
  - Las extensiones que vamos usar

```js
const path = require('path');

module.exports = {
  // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: "./src/index.js",
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, "dist"),
    // filename le pone el nombre al archivo final
    filename: "main.js"
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js"]
  },
}
```

El flag `—config` indica donde estará nuestro archivo de configuración

```bash
npx webpack --mode production --config webpack.config.js
``` 

Para poder hacerlo más amigable el comando puedes crear un script en `package.json`

```json
"scripts": {
		...
    "build": "webpack --mode production --config webpack.config.js"
  },
```

RESUMEN: Puedes crear un archivo webpack.config.js en el cual estarán las configuraciones con las cuales webpack trabajara, entre ellas están los puntos de entrada y salida, extensiones de archivos, entre otras características que se verán próximamente en él curso.

Si queremos añadir el autocompletado para nuestro archivo de webpack, podemos añadir el siguiente código antes del module.exports

```js
@type {import('webpack').Configuration} 
```

[Getting Started | webpack](https://webpack.js.org/guides/getting-started/#using-a-configuration)

# 3. Loaders y Plugins en Webpack


## Babel Loader para JavaScript


## HTML en Webpack


## Loaders para CSS y preprocesadores de CSS


## Copia de archivos con Webpack


## Loaders de imágenes


## Loaders de fuentes


## Optimización: hashes, compresión y minificación de archivos


## Webpack Alias

# 4. Deploy del proyecto


## Variables de entorno


## Webpack en modo desarrollo


## Webpack en modo producción


## Webpack Watch


## Deploy a Netlify

# 5. Herramientas de desarrollo complementarias


## Webpack Dev Server


## Webpack Bundle Analyzer


## Webpack DevTools

# 6. Integración básica de React.js


## Instalación y configuración de React


## Configuración de Webpack 5 para React.js


## Configuración de plugins y loaders para React


## Configuración de Webpack para CSS en React


## Optimización de Webpack para React


## Deploy del proyecto con React.js

# 7. Próximos pasos


## Continúa con el Curso Práctico de Webpack
