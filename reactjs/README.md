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
  - [3. Creación y diseño de componentes](#3-creación-y-diseño-de-componentes)
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
  - [4. React Router](#4-react-router)
    - [Introducción a React Router](#introducción-a-react-router)
    - [División de la aplicación en rutas](#división-de-la-aplicación-en-rutas)
    - [Mejorando la User Interface con un Layout](#mejorando-la-user-interface-con-un-layout)
  - [5. Component Lifecycle](#5-component-lifecycle)
    - [Introducción del ciclo de vida de un componente](#introducción-del-ciclo-de-vida-de-un-componente)
    - [Práctica del ciclo de vida](#práctica-del-ciclo-de-vida)
  - [6. Llamadas a un API](#6-llamadas-a-un-api)
    - [Introducción llamadas a un API](#introducción-llamadas-a-un-api)
    - [React.js: Cómo traer datos de un API en React](#reactjs-cómo-traer-datos-de-un-api-en-react)
    - [Solicitando datos (GET)](#solicitando-datos-get)
    - [Mejorando la Experiencia de Usuario durante una petición](#mejorando-la-experiencia-de-usuario-durante-una-petición)
    - [Enviando datos (POST)](#enviando-datos-post)
    - [Manejando los estados de la petición durante el POST](#manejando-los-estados-de-la-petición-durante-el-post)
    - [Actualizando datos (PUT)](#actualizando-datos-put)
    - [Actualizaciones automáticas](#actualizaciones-automáticas)
  - [7. Mejorando la UI](#7-mejorando-la-ui)
    - [Los detalles de un Badge](#los-detalles-de-un-badge)
    - [UI Components y Container Components](#ui-components-y-container-components)
    - [Portales](#portales)
    - [Modales](#modales)
    - [Hooks](#hooks)
    - [Search filter](#search-filter)
  - [8. Conclusion](#8-conclusion)
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

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es `React.createElement` pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

`React.createElement` recibe 3 argumentos:

1. El tipo de elemento que estamos creando
2. Sus atributos o props
3. y el children que es el contenido.
   
Ejemplo

```js
React.createElement('a', { href: 'https://platzi.com' }, 'Ir a Platzi');
```

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.

## 3. Creación y diseño de componentes

### ¿Qué es un componente?

Los componentes en React son **bloques de construcción**.
Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

”Componente” vs “elemento
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

Identificación de componentes
Para identificarlos debes hacerte las siguientes preguntas:

- ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
- ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.


Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

![](https://i.ibb.co/KmN9Jdr/React-components-blog-image.jpg)


**¿Qué es un componente?**

Los componentes en React son bloques de construcción.
Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

**”Componente” vs “elemento**

Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

**Identificación de componentes**

Para identificarlos debes hacerte las siguientes preguntas:

¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.
Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

### Qué es y cómo funciona un componente en React.js

En esta clase aprenderás acerca del ciclo de vida de los componentes en React para crear aplicaciones dinámicas. Desde la importancia del montaje cuando los usuarios llegan por primera vez a nuestra aplicación, hasta la actualización y desaparición de los componentes.

![](https://i.ibb.co/LQ6Vyj5/diagrama-ciclo-de-vida.png)

Los componentes en React tienen vida; nacen, crecen y desaparecen .

El ciclo de vida de los componentes tiene 3 fases :
1. El Montaje es cuando los usuarios llegan a nuestra aplicación, cuando tienen su 1era interacción con él.
2. La Actualización , es cuando se ejecuta el render, generando el nuevo DOM, es cuando React manda una señal de actualización componentDidUpdate() .
3. Eliminación de los componentes, al entrar a otra página, varios componentes no estarán en ella, React manda la señal componentWIllUnmount(), seguido de la eliminación del código en el DOM.

- [🤔 Entendiendo los ciclos de vida en React](https://medium.com/@jmz12/entendiendo-los-ciclos-de-vida-8a70abb3b51a)

![](https://i.ibb.co/z56TLn8/ciclo.webp)

### Nuestro primer componente

- Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
- Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
- El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.
  
Configuracion de auotocompletdoo de codigo JSX, agregar el siguiente al archivo `asettingjson`.

```js
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true
```

### Cómo aplicar estilos

Para los estilos crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.

Para usar los estilos es necesario importarlos con `import`

React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino `className`

Es posible utilizar Bootstrap con React, sólo debe ser instalado con `npm install bootstrap` o `yarn install bootstrap` luego `yarn add boots`y debe ser importado en el `index.js`

Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el `index.js`

- [Get BEM](http://getbem.com/naming/)

### Props

Los **props** que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.

Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

example

```js
class Badge extends React.Component {
  render() {
    const {
	firstName,
	lastName,
	avatarUrl,
	jobTitle,
	twitter
    } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={avatarUrl}
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}
```

Lo que se conoce como atributos en HTML, se llama propiedades en JSX. Los atributos son los que ayudan a personalizar las etiquetas HMTL mediante cierta información adicional llamada atributo, existen diferentes tipos de atributos, como lo son:

  - Atributos básicos: Se pueden utilizar prácticamente en todas las etiquetas HTML. Los atributos básicos son: id, class, style y title.

  - Atributos para internacionalización: Son utilizados por las paginas que muestran su contenido en varios idiomas. lang, xml:lang y dir.

  - Atributos de eventos: Sólo se utilizan en las paginas web dinamicas en donde su hace uso de JavaScript. Algunos de estos atributos son: onchange, onclick, onfocus, onkeypress.

  - Atributos de focos: Relacionado principalmente con la accecibilidad de los sitios web, estoso son: accesskey, tabindex y onfocus.

### Nuestra primera página

Las páginas en React son componentes y conseguir distinguirlas nos servirá para saber que es un componente que adentro lleva otros componentes.

  - Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre.

  - [Proyecto curso react js.sketch - Google Drive](https://drive.google.com/file/d/1rPcpfiDOh8gk7WM4ain1bNYE7qN0CyM8/view?usp=sharing)
  
### Enlazando eventos

- React dispone de **eventos.** Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase this.handleChange

- Los elementos button también tienen un evento que es **onClick.**

- Cuando hay un botón dentro de un formulario, este automáticamente será de tipo **submit.** Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo desde el formulario cuando ocurre el evento onSubmit.

### Manejo de estado

Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

- Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.
- Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.

### Levantamiento del estado

**Levantar el estado** es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

### Listas de componentes

- [Sparragus | platzi-badges](https://github.com/Sparragus/platzi-badges)

## 4. React Router

### Introducción a React Router

Las aplicaciones que se trabajan en React son llamadas **single page apps.** Esto es posible gracias a **React Router** que es una librería Open Source. 

**Multi Page Apps:** Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

**Single Page Apps (SPA):** Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

**React Router (v4):** Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

- BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
- Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
- Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
- Link: Toma el lugar del elemento `<a>`, evita que se recargue la página completamente y actualiza la URL.

<h5>React Router tiene 4 componentes principales:</h5>

- Browser Router. Es necesario colocar el componente en la parte superior de la aplicación, lo que esté dentro de este va a servir como una Single Page App y les va a permitir al resto de las herramientas funcionar. Ya que fuera de él NO Funciona.
- Route. Representa una dirección de Internet, el path es donde va a renderizar el componente y el componente es el componente que va a renderizar, usualmente es un a página.
- Switch. Componente que nos sirve para representar 1 sola ruta de varias que podemos poner dentro del componente.
- Link. Toma el lugar del elemento ancla, evita que se recargue completamente la página, actualiza la URL sin recargar la página completa.

  - MPA => Vieja Escuela (Sitios Web Tradicionales)

    - Multi Page Apps: Se hace una petición al servidor cada que se cambia de pagina

  - SPA => Nueva Escuela (Sitios Actuales)

    - Sigle Page Apps: Se pide una sola vez el html y cuando cambia solo se piden los datos necesarios para la actualización

### División de la aplicación en rutas

Para instalar **React Router** lo hacemos desde la terminal con npm install react-router-dom. Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.

  - **Link** internamente tiene un elemento `<a>`b pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.

Si quieren instalar la versión del profesor pueden ejecutar:

```bash
# npm
$ npm install -E react-router-dom@4.3.1

# En caso de exista problemas con dependencias de npm utiliar
$ yarn add -E react-router-dom
```

Con el flag -E además le diremos que queremos esa versión en específico así no tenemos que estar retirando el símbolo ^ de nuestro package.json

### Mejorando la User Interface con un Layout

React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un `div` o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que `React.Fragment` no se renderiza en el navegador.

El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.

Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:


```js
import { Redirect, Route } from "react-router-dom";

<Route path="/404" component={MiComponente404} />
<Redirect from="*" to="/404" />
```

Como podemos observar llamamos a nuestro componente 404 y luego utilizamos `Redirect`, el cual es un componente de React Router para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a `MiComponente404`.

- [Proyecto-curso-reactjs.pdf](https://drive.google.com/file/d/1auOlH--UYoDDbowA2VdV2TsxWaqDktbQ/view?usp=sharing)

## 5. Component Lifecycle

### Introducción del ciclo de vida de un componente

Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

**Montaje:**

  - Representa el momento donde se inserta el código del componente en el DOM.
  - Se llaman tres métodos: _constructor, render, componentDidMount._

**Actualización:**

  - Ocurre cuando los props o el estado del componente cambian.
  - Se llaman dos métodos: _render, componentDidUpdate._

**Desmontaje:**

  - Nos da la oportunidad de hacer limpieza de nuestro componente.
  - Se llama un método: _componentWillUnmount_.

  ![](https://i.ibb.co/8DRPf4B/diagrama-ciclo-de-vida.png)

### Práctica del ciclo de vida

**Constructor(props)**{
	/*Este método se ejecuta cuando se instancia un componente. Nos permite definir el estado inicial del 		componente, hacer bind de métodos y definir propiedades internas en las que podemos guardar muchos datos diferente*/
}

**componentWillMonunt()**{
	/*Este método se ejecuta cuando el componente se está por renderizar. En este punto es posible modificar el estado del componente sin causar una actualización (y por lo tanto no renderizar dos veces el componente).*/
}

**render()**{
	/*En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente*/
}

**componentDidMount()** {
	/*Este último método de la fase de montado se ejecuta una vez el componente se renderizó en el navegador y nos permite interactuar con el DOM o las otras APIs del navegador (geolocation, navigator, notificaciones, etc.).*/
}

**componentWillReceiveProps(nextProps)**{
	/*Este método se ejecuta inmediatamente después que el componente reciba nuevas propiedades. En este punto es posible actualizar el estado para que refleje el cambio de propiedades, ya sea reiniciando su valor inicial o cambiándolo por uno nuevo.*/
}

**shouldComponentUpdate(nextProps, nextState)**{
	/*Este método (el cual debe ser puro) se ejecuta antes de empezar a actualizar un componente, cuando llegan las nuevas propiedades (nextProps) y el nuevo estado (nextState). Acá es posible validar que estos datos sean diferentes de los anteriores `(this.props y this.state)` y devolver true o false dependiendo de si queremos volver a renderizar o no el componente.*/
}

**componentWillUpdate(nextProps, nextState)**{
	/*Una vez el método anterior devolvió true se ejecuta este método, acá es posible realizar cualquier tipo de preparación antes de que se actualice de la UI*/
  }

![](https://i.ibb.co/26CFnb4/react-prac.webp)


- [Ciclo de vida de un componente de React.js](https://platzi.com/blog/ciclo-de-vida-de-un-componente-de-reactjs/)

## 6. Llamadas a un API

### Introducción llamadas a un API

Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

![](https://i.ibb.co/MRnzpCc/tres.webp)

  - **Loading:** cuando la petición se envía y estamos esperando.
  - **Error:** se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
  - **Data:** los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

Para proveer una buena experiencia de usuario (UX) es necesario proveer un indicador de dicho proceso. Así el usuario no se va a sentir perdido.

Una llamada a una API tiene tres estados

Una promesa

1. Loading

    =>

  1. Error
  
    ||


    2. Data
    
    1. Without data {}

    ||

    2. With data {…}

  - Es vital indicar que se está cargando para que el usuario tenga paz
  - Si no hay data es vital hacer un CTA para introducir data


- [slides-curso-reactjs-platzi.pptx](https://drive.google.com/file/d/1tIQKJFijbkC1ZsHiY5GjnMf2ar1uS-Du/view?usp=sharing)

### React.js: Cómo traer datos de un API en React

Una llamada a una **API** es un proceso asíncrono, es decir que lo comenzamos pero no sabemos cuándo acabará. Por lo mismo la función a escribir debe ser asíncrona.
La llamada se hará usando fetch que es una función de JavaScript que al pasarle una dirección de internet, hará una petición **GET** y lo que sea que exista ahí será devuelto.

- [dvtng | react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)

### Solicitando datos (GET)

![](https://i.ibb.co/NTVpdS1/api.jpg "Peticion de una api")

### Mejorando la Experiencia de Usuario durante una petición

- [storyset](https://storyset.com/search?q=503%20Error%20Service%20Unavailable)

- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)

### Enviando datos (POST)

MD5 es una pequeña librería a la cual se le da un texto y ella regresa un `hash`.

Podremos hacer pruebas para cifrar nuestros textos a md5 en el siguiente sitio [MD5 Online](https://www.md5online.org/md5-encrypt.html)

Hola Platzi = d3bfb9302fb1007c0f996b41cba2818c

- Para solucionar el problema del reto final simplemente importamos el componente Gravatar en BadgesList.js

```js
import Gravatar from './Gravatar'
````

Y cambiamos la etiqueta img por el componente Gravatar

```js
class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          />
...
export default BadgesList;
```

### Manejando los estados de la petición durante el POST

De la misma manera en la que se manejan los estados cuando se solicitan datos, deben ser manejados cuando los datos son enviados.

Existe un tiempo entre que se da clic y los datos son enviados. Ese tiempo de espera es necesario visualizarlo. Igual hay que mostrar mensajes de error cuando no funcionan las cosas.


### Actualizando datos (PUT)

Para incorpor fontawesome basicamente hice lo siguiente:

Si te estas preguntando ¿Por qué en la página de Badge Edit no podemos sencillamente recibir los datos desde la lista, sino que tenemos que volverlos a pedir al servidor?, lo cual en la práctica es ineficiente. Existen muchas soluciones, alguna que pueden ser complicadas como pasar con propiedades y state de componentes de orden superior, u otras poco elegantes como pasar por query string en la dirección.

Para lo anterior les aconsejo revisar el curso de Redux que potencia un montón el desarrollo en React y permite manejar de manera centralizada el state de toda la app. Ej.: al dar clic en un elemento de la lista este manda a actualizar el state de la app y la página de edit automáticamente carga lo que se encuentre en el state evitando tener que llamar al servidor.

- Instalación:

```bash
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-fontawesome
```

- Importación:

```js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
```

- Implementación:

```js
<FontAwesomeIcon icon={faUser} />
```

Podrá encontrar más información en la documentación que proporcioné, espero que le haya servido 😄

<h3>Actualizando datos (PUT)</h3>

- Nos queda un tipo de formulario por hacer que es el de editar los datos, este es muy parecido al de BadgeNew pero vamos a creare una nueva pagina que se va a llamar “badgeEdit”, si vamos a “App.js” podemos notar que no esta la rutra en nuestro BrowserRouter
Para ello vamos a app.js y agregamos justo debajo de BadgeNew nuestro BadgeEdit

```js
  <Route exact path="/badges/edit" component={BadgeEdit}/>
```

- Pero hay un detalle en esto y es que debemos agregarle lo siguiente;

```js
  <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
```

- Para ello vamos a trabajar con badges en especifico por lo que dben tener un id y aca en esta línea estamos declarando “:badgeId” como una variable que nos definira el Id de un badge al momento de editarlo, va a ser un valor que si va a estar definido en la Url pero va a ser genérico, puede ser el 1 el 2 el 3, eso no importa mucho.

- Cuando eso ocurra queremos presentar el componenete BadgeEdit. Procedemos a declarar el import y luego como el new y el edit se parecen, usaremos el new como pnto de partida para crear nuestro BadgeEdit, pero lo que haremos sera cambiar las referencias a BadgeNew por BadgeEdit por lo que lo haremos tanto en las clases para el constructor como en nuestras className para los estilos y por ultimo en el export y por ultimo en este paso, copiamos el archivo css de BadgeNew y le colocamos el nombre de BadgeEdit para trabajarlos de manera separada y obviamente reemplazamos los nombres de las clases en ccs para dejar nuestro punto de partida realizado.

- Nuestro siguiente paso sera que en la lista de badges cada uno de los badges que allí aparecen nos lleven a esa pagina por lo que para ello vamos a badgesList y en badgeslist donde hacemos el map para renderizar la lista de componentes;


```js
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link to={`/badges/${badge.id/edit}`}>
                <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
```
Crearemos un Link en nuestro código de los badges en el cual vamos a colocar dentro los elementos del maping para que cuando les demos cick a cada uno de los badges estos pasen a la pagina BadgeEdit para hacer las modificaciones, pero luego de esto vamos a tener un pequeño problema y es que nuestros badges se verán color azul y serán un hypertexto, por lo que vamos a aplicar una clase de bootStrap para arreglar esto

```js
   return (
     <div className="BadgesList">
       <ul className="list-unstyled">
         {this.props.badges.map(badge => {
           return (
             <li key={badge.id}>
               <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
               <BadgesListItem badge={badge} />
               </Link>
             </li>
           );
         })}
       </ul>
     </div>
   );
```

- Listo con esto todo arreglado, ahora llegados a este punto, cuando lleguemos al edit, necesitamos pedir información de el badge que vamos a editar por lo que haremos una llamada de datos a datos que ya existen;

```js
 state = {
    loading:true,
    error: null,

    form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }};
```

- Lo primero que vamos a hacer sera cargfar nuestro loading state a true porque necesitaremos cargar los datos existente y siguiente es crear el método componentDidMount que indicara que cuando este ocurra, comenzaremos a cargar los datos;

```js
    componentDidMount(){
        this.fetchData()
    }
```

- Y definiremos la función declarada dentro de el mismo;

```js
 fetchData =async () =>{
        this.setState({ loading:true, error:null})

        try{    
            const data = await api.badges.read()
        } catch(error){

        }
    }
```

- Explicando por partes aca iniciaremos con nuestra función asíncrona como en otras ocasiones, nuestro setState inicial con nuestro loading verdadero y nuestro error nulo, para luego pasar a nuestro TryCatch, “try” con la constante de data que esperara la carga de datod de la api.badges y usaremos el método read que esto lo que hará sera tomar el ID del badge que nos interesa.
Luego de eso usaremos uno de los props que ReactRouter le pasa a sus componentes que es this.props.match, cada una de esas variables que insertamos en el path que declaramos en la ruta lo podemos acceder dentro del objeto params y dijimos que se iba a llamar badgeId
De manera que;

```js
 fetchData =async () =>{
        this.setState({ loading:true, error:null})

        try{    
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
        } 
    }
```

- Luego de esto;

```js
  fetchData =async () =>{
        this.setState({ loading:true, error:null})

        try{    
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, form: data })
        } catch(error){
            this.setState({ loading:false, error: error })
        }
    }
```

- Aca básicamente hacemos lo mismo de siempre que es en cxaso de que todo vaya bien, vamos a guardar la información en data porque es lo que buscamos a l hacer este edit por lo que el form se guardara en los datos como especificamos mas abajo y luego de esto vamos a crear nuestro Catch para que en caso de que haya un error este mismo quedara guardado en error, para asi tener nuestro errorState de esta función.

- Que sigue? Probar que esto funciona y si efectivamente realiza el match y vemos nuestro código, luego editamos un poco la pagina porque nuestro titulo nos dice New attendant pero aca lo que haremos sera un edit por lo que debemos colocar el `<h1>` en el sitio correspondiente en cada uno de los lugares tabto en `badgeNew` como en `badgeEdit` por lo que eliminaremos el `<h1>` de nuestro badgeForm.

- Ahora en badgeEdit nuestra api no creara sino que lo que hará sera editar la data que estaremos solicitando por lo que nos dirigiremos a nuestro código y editaremos la parte en la que esta nuestro hadleSubmiot y este ya no sera créate sino update.

```js
  handleSubmit = async e =>{
        e.preventDefault();
        this.setState({ loading: true, error: null })   

        try{
            await api.badges.update(this.state.form);
            this.setState({loading: false});

            this.props.history.push('/badges')

        } catch(error){
            this.setState({loading: false, error: error});
        }
    };
```

- Update recibe un badgeId y la información que queremos actualizar asi que el badge id aprendimos a obtenerlo de this.props.params asi que en update ese es el primer argumento y el segundo va a ser y como sacamos el id de this.props.params.badgeId este va a ser nuestro primer argumento en update por lo que quedaría asi;

```js
handleSubmit = async e =>{
        e.preventDefault();
        this.setState({ loading: true, error: null })   

        try{
            await api.badges.update( this.props.match.params.badgeId, this.state.form);
            this.setState({loading: false});

            this.props.history.push('/badges')

        } catch(error){
            this.setState({loading: false, error: error});
        }
    };
```

- Luego de esto realizaremos el cambio y por el código ya escrito de nuestro método de history, cuando acabe volveremos a la lista de badges a ver si se actualizo la información. Nuestro put fue exitoso.

### Actualizaciones automáticas


## 7. Mejorando la UI

### Los detalles de un Badge


### UI Components y Container Components


### Portales


### Modales


### Hooks


### Search filter


## 8. Conclusion

### Conclusión


