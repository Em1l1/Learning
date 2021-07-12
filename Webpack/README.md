<h1>Webpack</h1> 

![Curso de Webpack](https://static.platzi.com/media/achievements/badge-webpack-3e3867f2-5bcf-4a7e-9af2-cf735850a791.png) 



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
    - [¿Qué Rayos es Babel?](#qué-rayos-es-babel)
  - [HTML en Webpack](#html-en-webpack)
  - [Loaders para CSS y preprocesadores de CSS](#loaders-para-css-y-preprocesadores-de-css)
  - [Copia de archivos con Webpack](#copia-de-archivos-con-webpack)
    - [Resolve o Join path](#resolve-o-join-path)
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

### ¿Qué Rayos es Babel?

Es un transcompilador de JavaScript que agarra el código ECMAScript 2015 en adelante y lo transforma en una versión que todos los navegadores anteriores lo puedan usar
En la pagina de Babel pueden ingresar código moderno se lo transpira a código viejo en tiempo real

Babel te permite hacer que tu código JavaScript sea compatible con todos los navegadores
Debes agregar a tu proyecto las siguientes dependencias

NPM

```bash
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
```

Yarn

```bash
yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
```

  - `babel-loader` nos permite usar babel con webpack
  - `@babel/core` es babel en general
  - `@babel/preset-env` trae y te permite usar las ultimas características de JavaScript
  - `@babel/plugin-transform-runtime` te permite trabajar con todo el tema de asincronismo como ser async y await

Debes crear el archivo de configuración de babel el cual tiene como nombre `.babelrc`

```json
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```

Para comenzar a utilizar webpack debemos agregar la siguiente configuración en webpack.config.js

```json
{
...,
module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.js$/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: "babel-loader"
        },
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/
      }
    ]
  }
}
```

RESUMEN: Babel te ayuda a transpilar el código JavaScript, a un resultado el cual todos los navegadores lo puedan entender y ejecutar. Trae “extensiones” o plugins las cuales nos permiten tener características más allá del JavaScript común

- [babel-loader | webpack](https://webpack.js.org/loaders/babel-loader/)
- [ECMAScript Modules | webpack](https://webpack.js.org/guides/ecma-script-modules/)


``` json
const path = require('path')

module.exports = {
    mode: 'production', // LE INDICO EL MODO EXPLICITAMENTE
    entry: './src/index.js', // el punto de entrada de mi aplicación
    output: { // Esta es la salida de mi bundle
        path: path.resolve(__dirname, 'public_html/js'),
        // resolve lo que hace es darnos la ruta absoluta de el S.O hasta nuestro archivo
        // para no tener conflictos entre Linux, Windows, etc
        filename: 'main.js', 
        // EL NOMBRE DEL ARCHIVO FINAL,
    },
    resolve: {
        extensions: ['.js'] // LOS ARCHIVOS QUE WEBPACK VA A LEER
    },
    module: {
        // REGLAS PARA TRABAJAR CON WEBPACK
        rules : [
            {
                test: /\.m?js$/, // LEE LOS ARCHIVOS CON EXTENSION .JS,
                exclude: /node_modules/, // IGNORA LOS MODULOS DE LA CARPETA
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```

## HTML en Webpack

HtmlWebpackPlugin
Es un plugin para inyectar javascript, css, favicons, y nos facilita la tarea de enlazar los bundles a nuestro template HTML.

**Instalación**

  - npm

``` bash
npm i html-webpack-plugin -D
```

  - yarn

``` bash
yarn add html-webpack-plugin -D
```
Al webpack config queda asi

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production', // LE INDICO EL MODO EXPLICITAMENTE
    entry: './src/index.js', // el punto de entrada de mi aplicación
    output: { // Esta es la salida de mi bundle
        path: path.resolve(__dirname, 'dist'),
        // resolve lo que hace es darnos la ruta absoluta de el S.O hasta nuestro archivo
        // para no tener conflictos entre Linux, Windows, etc
        filename: 'main.js', 
        // EL NOMBRE DEL ARCHIVO FINAL,
    },
    resolve: {
        extensions: ['.js'] // LOS ARCHIVOS QUE WEBPACK VA A LEER
    },
    module: {
        // REGLAS PARA TRABAJAR CON WEBPACK
        rules : [
            {
                test: /\.m?js$/, // LEE LOS ARCHIVOS CON EXTENSION .JS,
                exclude: /node_modules/, // IGNORA LOS MODULOS DE LA CARPETA
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    // SECCION DE PLUGINS
    plugins: [
        new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
            inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML
            template: './public/index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
        })
    ]
}
```

agregamos otro script para ejecutar mas facil nuestros comando

``` json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production",
    "dev": "webpack --mode development"

  },
```

- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

## Loaders para CSS y preprocesadores de CSS

**Loaders**

Fuera de contexto, webpack solamente entiende JavaScript y JSON. Los loaders nos permite procesar archivos de otros tipos para convertirnos en módulos válidos que serán consumidos por nuestras aplicaciones y agregadas como dependencias.

En alto nivel, los loaders poseen 2 configuraciones principales:

  1. `test` - propiedad que identifica cuáles archivos deberán ser transformados
  2. `use` - propiedad que identifica el loader que será usado para transformar a dichos archivos

**Plugins**

Mientras los loaders transforman ciertos tipos de módulos, los plugins _son utilizados para extender tareas específicas, como la optimización de paquetes, la gestión de activos y la inyección de variables de entorno.

Una vez importado el plugin, podemos desear el personalizarlos a través de opciones.

Un preprocesador CSS es un programa que te permite generar CSS a partir de la syntax única del preprocesador. Existen varios preprocesadores CSS de los cuales escoger, sin embargo, la mayoría de preprocesadores CSS añadirán algunas características que no existen en CSS puro, como variable, mixins, selectores anidados, entre otros. Estas características hacen la estructura de CSS más legible y fácil de mantener.

post procesadores son herramientas que procesan el CSS y lo transforman en una nueva hoja de CSS que le permiten optimizar y automatizar los estilos para los navegadores actuales.

<h4>Apuntes</h4>

Para dar soporte a CSS en webpack debes instalar los siguientes paquetes
Con npm

```bash
npm i mini-css-extract-plugin css-loader -D

# Stylyu
npm install stylus stylus-loader -D
```

Con yarn

```bash
yarn add mini-css-extract-plugin css-loader -D
```

  - `css-loader` ⇒ Loader para reconocer CSS
  - `mini-css-extract-plugin` ⇒ Extrae el CSS en archivos

Para comenzar debemos agregar las configuraciones de webpack

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	...,
	module: {
    rules: [
      {
        test: /\.(css|styl)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ]
      }
    ]
  },
  plugins: [
		...
    new MiniCssExtractPlugin(),
  ]
}
```

  - Si deseamos posteriormente podemos agregar herramientas poderosas de CSS como ser:
    
    - **pre procesadores**
      -   Sass
      -   Less
      -   Stylus

    - **post** **procesadores**
      - Post CSS

RESUMEN: Puedes dar soporte a CSS en webpack mediante loaders y plugins, además que puedes dar superpoderes al mismo con las nuevas herramientas conocidas como pre procesadores y post procesadores

- [css-loader | webpack](https://webpack.js.org/loaders/css-loader/)
- [style-loader | webpack](https://webpack.js.org/loaders/style-loader/)
- [MiniCssExtractPlugin | webpack](https://webpack.js.org/plugins/mini-css-extract-plugin/)
- [Live Server - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

**Para sass**

```bash
npm i -D node-sass sass-loader
```

Añadimos el loader al arreglo de loaders y modificamos un poco la expresion regular

```js
{
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"]
      },
```

## Copia de archivos con Webpack

- Si tienes la necesidad de mover un archivo o directorio a tu proyecto final podemos usar un plugin llamado `“copy-webpack-plugin”`
- Para instalarlo debemos ejecutar el comando

- NPM

```BASH
npm i copy-webpack-plugin -D
```

- YARN

```BASH
yarn add copy-webpack-plugin -D
```

- Para poder comenzar a usarlo debemos agregar estas configuraciones a `webpack.config.js`

``` JS
//JavaScript
...
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	...
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    }),
  ]
}
```

Es importante las propiedades from y to
  - `From` ⇒ que recurso (archivo o directorio) deseamos copiar al directorio final
  - `To` ⇒ en que ruta dentro de la carpeta final terminara los recursos

### Resolve o Join path

Cuando trabajamos en entorno de Node, habrán ocasiones que deberamos describir, mediante una dirección absoluta, el directorio de trabajo. En Node, tenemos una libreía nativa `path` para resolver este caso.

Abrán veces que necesitmeos resolver o unir directorios de trabajos. Donde, con una simple declaración, podriamos caer en un sencillo `copy` & `paste` sin entender sus efectos (que pudiesen ser similares).

Cuando deseen estructurar un directorio de trabajo a partir de una dirección absoluta, sin importar el SO, se utiliza `path.resolve([...paths])` por ello, si queremos utilizar nuestro directorio de trabajo como una referencia, utilizamos `__dirname` y de ahí, resolverá el conjunto de paths que le anexemos:

```js
/*
En nuestro ejemplo, resolverá nuestro path en /user/path/to/workdirectory/ + src + assets/images
quedando algo similar a /users/path/to/js-portfolio/src/assets/images
*/
path.resolve(__dirname, 'src', 'assets/images')
Se tendrá que ser cuidadoso en el proceso de construcción porque cada forma de escribir el path, generará en un path diferente:

path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// Returns: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
```
[CopyWebpackPlugin | webpack](https://webpack.js.org/plugins/copy-webpack-plugin/)

## Loaders de imágenes

- Puedes usar una forma de importar las imágenes haciendo un import de las mismas y generando una variable
- No es necesario instalar ninguna dependencia, webpack ya lo tiene incluido debemos agregar la siguiente configuración

```jsx
module.exports = {
	...
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset/resource"
      }
    ]
  },
}
```

- Para empezar a usar esta configuración debemos importar la imagen de la siguiente forma

```jsx
import github from '../assets/images/github.png';
```

- Para incluirlo en el HTML debes hacer lo siguiente

```jsx
// Ejemplo en Vanilla JS
const imagen = `<img src=`${github}` />`;
// Ejemplo en React
<img src={${github}} />

// Ejercicio de clase
<a href="https://github.com/gndx">
	<img src="${github}" />
</a>a
```

Implementando la siguiente configuración adicional podemos gestionar el directorio de salida:

```jsx
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]',
        },
      },
```

## Loaders de fuentes

- Cuando utilizamos fuentes externas una buena práctica es descargarlas a nuestro proyecto
  - Debido a que no hara un llamado a otros sitios
- Por ello es importante usarlo dentro de webpack
- Para esta tarea instalaras y usaras “file-loader” y “url-loader”

instalación con NPM

```bash
npm install url-loader file-loader -D
```

instalación con YARN

```bash
yarn add url-loader file-loader -D
```

- Para aplicar esta configuración debes agregar la siguiente información

```jsx
module.exports = {
	...
  module: {
    rules: [
			...
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            // limit => limite de tamaño
            limit: 10000,
            // Mimetype => tipo de dato
            mimetype: "application/font-woff",
            // name => nombre de salida
            name: "[name].[ext]",
            // outputPath => donde se va a guardar en la carpeta final
            outputPath: "./assets/fonts/",
            publicPath: "./assets/fonts/",
            esModule: false,
          }
        }
      }
    ]
  },
	...
}
```

- Es importante que dentro de los estilos agregues @font-face

```jsx
@font-face {
	font-family: "Ubuntu";
	src: url("../assets/fonts/ubuntu-regular.woff2") format('woff2'),
			 url("../assets/fonts/ubuntu-regular.woff") format('woff');
	font-weight: 400;
	font-style: normal;
}
```



[google webfonts helper](http://google-webfonts-helper.herokuapp.com/fonts/ubuntu?subsets=cyrillic,latin)

![img](https://www.google.com/s2/favicons?domain=https://webpack.js.org/guides/asset-management/#loading-fonts/favicon.f326220248556af65f41.ico)A[sset Management | webpack](https://webpack.js.org/guides/asset-management/#loading-fonts)

## Optimización: hashes, compresión y minificación de archivos

Los recursos que se guardan en memoria cache suceden cuando el navegador entra a un sitio por primera vez detecta los recursos y los guarda. Por ello la siguiente vez sera mucho más rápido porque estarán en memoria

- La desventaja esta cuando sacamos una nueva versión, porque tendrán un mismo nombre evitando que se descargue los nuevos cambios, por lo tanto, el usuario no recibirá los nuevos cambios
- Para que no haya conflictos con la cache una vez que tengamos nuestro proyecto en producción es importante darles un hash para cada nueva versión

- Unos de las razones por que utilizamos webpack es porque nos permite optimizar y comprimir nuestro proyecto
- Debes utilizar los siguientes paquetes
  - **css-minimizer-webpack-plugin** ⇒ Nos ayuda a comprimir nuestros archivos finales CSS
  - **terser-webpack-plugin** ⇒ Permite minificar de una mejor forma
- Instalación

NPM

```jsx
npm i css-minimizer-webpack-plugin terser-webpack-plugin -D
```

YARN

```jsx
yarn add css-minimizer-webpack-plugin terser-webpack-plugin -D
```

- Una vez instalado el plugin debemos agregar la siguiente configuración

```jsx
...
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	...
	optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
}
```

- Cuando nombremos en la configuración de webpack es importante usar `[contenthash]` para evitar problemas con la cache

**CssMinimizerPlugin**
Es un plugin que nos permite **minificar** y **optimizar** los archivos CSS, por dentro del plugin utiliza una herramienta llamada [cssnano](https://cssnano.co/)
[Documentación](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) de CssMinimizer
**TerserWebpackPlugin**
Es otro plugin que nos **minifica** nuestro javascript
[Documentación](https://webpack.js.org/plugins/terser-webpack-plugin/) de TerserPlugin

![img](https://www.google.com/s2/favicons?domain=https://webpack.js.org/plugins/compression-webpack-plugin//favicon.f326220248556af65f41.ico)[CompressionWebpackPlugin | webpack](https://webpack.js.org/plugins/compression-webpack-plugin/)

![img](https://www.google.com/s2/favicons?domain=https://webpack.js.org/plugins/html-minimizer-webpack-plugin//favicon.f326220248556af65f41.ico)[HtmlMinimizerWebpackPlugin | webpack](https://webpack.js.org/plugins/html-minimizer-webpack-plugin/)

![img](https://www.google.com/s2/favicons?domain=https://webpack.js.org/plugins/css-minimizer-webpack-plugin//favicon.f326220248556af65f41.ico)[CssMinimizerWebpackPlugin | webpack](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)

![img](https://www.google.com/s2/favicons?domain=https://webpack.js.org/configuration/optimization//favicon.f326220248556af65f41.ico)[Optimization | webpack](https://webpack.js.org/configuration/optimization/)

## Webpack Alias

- Alias ⇒ nos permiten otorgar nombres paths específicos evitando los paths largos
- Para crear un alias debes agregar la siguiente configuración a webpack

```jsx
module.exports = {
	...
	resolve: {
		...
    alias: {
      '@nombreDeAlias': path.resolve(__dirname, 'src/<directorio>'),
    },
	}
}
```

- Puedes usarlo en los imports de la siguiente manera

```jsx
import modulo from "@ejemplo/archivo.js";
```

### Alias

Una de las mejores configuraciones de Webpack, es poder crear Alias, para los pads que utilizamos e identificar la forma en la que traeremos los elementos dentro de los archivos.
⠀⠀
Esta solución es debido a que aveces tenemos que llamar archivos con una ruta de acceso muy larga, esto se volvía unneedled hard.
⠀⠀
Vamos a nuestro objeto *module.exports* y en nuestro objeto *resolve* agregamos.
⠀⠀

```jsx
resolve: {
    extensions: [".js"],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@images': path.resolve(__dirname, 'src/assets/images')
    }
  },
```

⠀⠀
Ahora podremos trabajar con alias. Esto vuelve más legible nuestro código.
⠀⠀

```jsx
import getData from "@utils/getData.js";
import github from "@images/github.png";
import twitter from "@images/twitter.png";
import instagram from "@images/instagram.png";
```

No olvides comentar que **`alias`** forma parte del objeto **[resolve](https://webpack.js.org/configuration/resolve/#resolve)** el cual nos permite configurar la forma en que webpack resolverá los módulos incorporados.
En nuestro camino, tenemos dos:

- **resolve.alias** - para crear atajos que optimizan el tiempo de búsqueda e incorporación de módulos (commonJS o ES6)
- **resolve.extensions** - para darle prioridad en resolución para con las extensiones donde si hay archivos nombrados igualmente, pero con diferentes extensiones, webpack resolverá conforme están listados.

![img](https://www.google.com/s2/favicons?domain=https://webpack.js.org/configuration/resolve/#resolvealias/favicon.f326220248556af65f41.ico)[Resolve | webpack](https://webpack.js.org/configuration/resolve/#resolvealias)

# 4. Deploy del proyecto

## Variables de entorno

- Es importante considerar las variables de entorno va a ser un espacio seguro donde podemos guardar datos sensibles
  - Por ejemplo, subir llaves al repositorio no es buena idea cuando tienes un proyecto open source
- Para instalar debemos correr el comando

NPM

```jsx
npm install -D dotenv-webpack
```

YARN

```jsx
yarn add -D dotenv-webpack
```

- Posteriormente debemos crear un archivo `.env` donde estarán la clave para acceder a la misma y el valor que contendrán

  ```jsx
  # Ejemplo
  API=https://randomuser.me/api/
  ```

  - Es buena idea tener un archivo de ejemplo donde, el mismo si se pueda subir al repositorio como muestra de que campos van a ir

- Una vez creado el archivo `.env` debemos agregar la siguiente configuración en `webpack.config.js`

```jsx
...
const Dotenv = require('dotenv-webpack');
module.exports = {
	...
	plugins: [
		new Dotenv()
  ],
}
```

- dotenv-webpack ⇒ Leera el archivo `.env` por defecto y lo agregar a nuestro proyecto
- Para usarlas debes hacer lo siguiente

```jsx
const nombre = process.env.NOMBRE_VARIABLE;
```

- Toda la configuración se podrá acceder desde `process.env`

Es importante saber que las variables de entorno (NODE js),

```bash
.env
```

por convencion se escriben en Mayuscula y con formato SNAKE_CASE

```bash
process.env.API_APP
```

Las variables de **entorno** son variables externas a nuestra aplicación que residen en el sistema operativo o en el contenedor de la aplicación que se está ejecutando. Una variable de entorno es simplemente un nombre asignado a un valor como una variable es cualquier lenguaje de programación.
Aquí te dejo esta [lectura](https://www.victorvr.com/tutorial/variables-de-entorno-con-nodejs) super genial de **variables de entorno**

![img](https://www.google.com/s2/favicons?domain=https://static.platzi.com/media/favicons/platzi_favicon.png)[https://randomuser.me/api](https://randomuser.me/api)

![img](https://www.google.com/s2/favicons?domain=https://webpack.js.org/guides/environment-variables//favicon.f326220248556af65f41.ico)[Environment Variables | webpack](https://webpack.js.org/guides/environment-variables/)

![img](https://www.google.com/s2/favicons?domain=https://webpack.js.org/plugins/environment-plugin//favicon.f326220248556af65f41.ico)[EnvironmentPlugin | webpack](https://webpack.js.org/plugins/environment-plugin/)

## Webpack en modo desarrollo

Lectura que habla de los diferentes modos de webpack y que implican ciertas configuraciones

- [webpack 4: mode and optimization](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a)

- Creamos un nuevo archivo:
  **webpack.config.dev.js**
- Copiamos todo lo de **webpack.config.js** a el archivo que acabamos de crear.
- Borramos o comentamos el siguiente código, ya que no necesitamos optimizar para el modo de desarrollo (Queremos ver cuando funcionan las cosas).

```js
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
```

También borramos o comentamos por la misma razón:

```js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
```

- Seguido del atributo output añadimos:

```js
output: {
},
mode: 'development',
```

- En package.json:

```json
"dev": "webpack --config webpack.config.dev.js" 
```

- y ejecutamos **npm run dev**

## Webpack en modo producción

- Actualmente tenemos el problema de tener varios archivos repetidos los cuales se fueron acumulando por compilaciones anteriores

- Para ello puedes limpiar la carpeta cada vez que hacemos un build, usando

   

  clean-webpack-plugin

  - Cabe recalcar que esta característica es mucho más util para la configuración de producción

- Para instalarlo debes correr el siguiente comando:

NPM

```jsx
npm install -D clean-webpack-plugin
```

YARN

```jsx
yarn add -D clean-webpack-plugin
```

- Para agregarlo a nuestra configuración de webpack agregamos los siguientes cambios a webpack.config.js

```jsx
...
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	...
	plugins: [
		...
		new CleanWebpackPlugin()
	]
}
```

## Webpack Watch

- El modo watch hace que nuestro proyecto se compile de forma automática
  - Es decir que está atento a cambios
- Para habilitarlo debemos agregar lo siguiente en la configuración de webpack

```jsx
module.exports = {
	...
	watch: true
}
```

- Cada vez que haya un cambio hara un build automático
- Otra manera es mandar la opción mediante parámetros de consola en `package.json`

```json
{
	"scripts": {
		"dev:watch": "webpack --config webpack.config.dev.js --watch"
	}
}
```

- Vale la pena recordar que si aplicamos en modo producción se tomara más tiempo porque se optimizaran los recursos

  - Por ello en modo desarrollo se salta ese paso y es más rápido la compilación.

  ### Otra Opcion

  La forma más común en la que el `watch` se suele usar dentro de un archivo `package.json` es esta:

  ```json
  "dev": "webpack --config webpack.config.dev.js",
  "watch": "npm run dev --watch"
  ```

  Simplemente se ejecuta el script `dev`, pero con el flag `watch` 👀

## Deploy a Netlify

creamos un archivo netlify.toml

y dentro de el creamos una configuracion

```js
[build]

  publish = "dist"
  command = "npm run build"
```


despues vamos a crear un script que nos ayudara a crear las variables de entorno en nuestro servidor

primero creamos una carpeta que se llame scripts
y un archivo que se llamara create-env.js
y dentro de el colocamos el siguiente codigo

```js
const fs = require('fs');

	fs.writeFileSync('./.env',`API=${process.env.API}\n`)
```

despues vamos a la pagina de netlify a la seccion de build & deploy

vamos a la sección que dice enviroment, y le damos en edit variables, y alli colocamos las variables que en este caso solo es la variable API y con su valor que es https://randomuser.me/api/

![img](https://www.google.com/s2/favicons?domain=https://www.netlify.com//v3/static/favicon/apple-touch-icon.png)[Netlify: Develop & deploy the best web experiences in record time](https://www.netlify.com/)

![img](https://www.google.com/s2/favicons?domain=https://github.com/fluidicon.png)[GitHub - carloscuesta/gitmoji: An emoji guide for your commit messages. 😜](https://github.com/carloscuesta/gitmoji)

![img](https://www.google.com/s2/favicons?domain=https://github.com/fluidicon.png)[GitHub - carloscuesta/gitmoji-cli: A gitmoji interactive command line tool for using emojis on commits. 💻](https://github.com/carloscuesta/gitmoji-cli)

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
