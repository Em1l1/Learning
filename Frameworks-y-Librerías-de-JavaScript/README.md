<h1>Frameworks y Librerías de JavaScript</h1>

<h3>Juan David Castro</h3>

<h1>Tabla de Contenido</h1>

# 1. Fundamentos del Desarrollo Web Profesional

## Cuándo necesitas un framework de JavaScript

- **Websites (Sitios Web):** Son estáticos (iguales para todos los usuarios), y se pueden hacer únicamente con HTML y CSS.
- **Webapps (Aplicaciones Web);** Son dinámicas (interactivas con los usuarios) y para estas se necesita JS aparte de HTML y CSS, y algún framework para facilitar el desarrollo.
- **Framework (Entorno/Marco de trabajo​):** Contiene librerías y herramientas que nos ayudarán a construir algo más rápido, garantizando la calidad gracias a una metodología y estructura de trabajo bien definida.
- **Librería:** Es un fragmento de código que nos ayuda a resolver un problema específico y que tiene un propósito concreto.

- [2-slides-introduccion-frameworks-javascript.pdf]()

## Qué son los componentes

En un principio HTML, CSS y JS eran diferentes para cada navegador, hasta que se fueron volvieron estándares. Pero jQuery fue la tecnología que hacía que JS fuese compatible en todos los navegadores.

jQuery ya murió, es inútil.

JS está tan bien que ya empieza a reemplazar a HTML. Cada vez escribimos más JS que HTML.

Los componentes son aplicar un concepto muy parecido a las funciones pero para maquetar.

**Composición de componentes:** Es poder crear componentes que estén hechos de otros componentes.

No uses JQuery 😄 , usa un framework o libreria donde se puedan reutilizar los componentes como:

  - React
  - Angular
  - Vue
  - Svelte

## Cómo estructurar un componente

Atomic Design es una metodología de diseño (y una forma de modelar nuestro pensamiento) para trabajar con componentes: [¿Por qué usar Atomic Design?](https://platzi.com/blog/por-que-atomic-design/)

<img src="https://i.ibb.co/hyjKWpC/atomic.jpg" alt="atomic" border="0">

Dividiría el header en 5 componentes:

  - logo
  - lista de items del navbar
  - buscador
  - select de planes
  - login button

## Qué es reactividad

Reactividad: Es un paradigma, una forma de pensar nuestras aplicaciociones. Deben seguir 2 reglas:

  1. Responsive, es decir, deben ser resilientes (siempre sabe qué hacer) y escalables (no importa con cuánta información debemos trabajar o cuántos usuarios entran a la aplicación, la aplicación debe poder seguir funcionando sin problemas).
  2. Message Driven (Arquitectura basada en mensajes). Deben de haber emisores y receptores de mensajes. Los mensajes se entregan de manera asíncrona.

Recuerda: La arquitectura no es ajena a la programación.

Estado: Es el lugar donde vamos a guardar la información reactiva de nuestros componentes. Son variables a las que nos suscribimos para recibir una notificación cada vez que cambian sus valores.

Render: o renderizado, es el proceso por el cual nuestro HTML, pasan a ser información visual en el DOM.

Estrategias de render: Virtual DOM y No Virtual DOM. Ninguna es mejor, depende del caso en particular.

Componente -> Estado -> Render -> Usuario (y vuelve a “Estado”)

- 1️⃣ Requerimiento general del producto (lo que el usuario debe ver)

  - La aplicación tiene una lista de elementos y un input de búsqueda
  - El usuario escribe su filtro / búsqueda
  - La aplicación muestra solo los elementos que cumplen con el filtro

- 2️⃣ Requerimiento detallado del producto (lo que en realidad debemos construir)

  - La aplicación tiene un estado / store global para guardar elementos

  - Diferentes elementos de la UI se suscriben al estado global para enviar o recibir actualizaciones
    – El input de búsqueda envía actualizaciones
    – La lista de elementos recibe actualizaciones

  - El usuario escribe su filtro / búsqueda en el input, el input envía el mensaje al estado, el estado cambia y se lo notifica a la lista de elementos, la lista de elementos cambia y el usuario obtiene su respuesta

> Dato curioso: Una opción al trabajar con el estado es hacerlo inmutable. En vez de actualizar directamente el estado, crear un “nuevo” estado cada vez que hacemos  una actualización. Y de esta forma podemos hacer cosas muy cool como viajar en el tiempo entre estados (muy útil para debugging).

**Reactividad**

Es un paradigma de programación y sigue dos reglas:

  1. **Responsive:** Saber reaccionar ante cualquier situación
  2. **Message Driven:** Arquitectura basada en mensajes.

<img src="https://i.ibb.co/Dkf5Q10/reactive-manifesto.jpg" alt="reactive-manifesto" border="0">

- [¿Qué es la reactividad? en Curso de Introducción a Vue.js 3](https://platzi.com/clases/2167-vuejs/35421-que-es-la-reactividad/)
- [Exploring the state of reactivity patterns in 2020 - JavaScript inDepth](https://indepth.dev/posts/1280/exploring-the-state-of-reactivity-patterns-in-2020)
- [Comparing reactivity models - React vs Vue vs Svelte vs MobX vs Solid vs Redux - DEV Community](https://dev.to/lloyds-digital/comparing-reactivity-models-react-vs-vue-vs-svelte-vs-mobx-vs-solid-29m8)
- [ReactiveX](http://reactivex.io/)
- [Shawn Swyx Wang - Why React is not Reactive - YouTube](https://www.youtube.com/watch?v=nyFHR0dDZo0)
- [Understanding Angular Ivy: Incremental DOM and Virtual DOM | by Victor Savkin | Nrwl](https://blog.nrwl.io/understanding-angular-ivy-incremental-dom-and-virtual-dom-243be844bf36)
- [Virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead)
- [Reactive programming, DAMN. It is not about ReactJS](https://samueleresca.net/reactive-programming-damn-it-is-not-about-reactjs/)

## Librerías vs. frameworks

**Librería:** Es un conjunto de piezas de código y herramientas para un fin en específico. Un ejemplo de esto sería una caja de destornilladores con diferentes tamaños y puntas.

**Framework:** Es un grupo mayor de librerías y herramientas para construir proyectos más complejos de forma efectiva. Ejemplo: una sala de herramientas con todo lo necesario para construir tu casa,

**Framework**

Es un conjunto de piezas de codigo que se centra en la elaboración o construción todo un proyecto a través de un conjunto de herramientas que nos brinda el framework (puede incluir librerías) como si de una receta se tratase.

**Librería**

Es una porción o pieza de codigo que nos ayuda a resolver un problema en específico como trabajar con HTMLmediaElement (video o audio) por ejemplo.

**Ejemplo:**

Usando el Basketball o baloncesto como base diría: un framework sería un jugador estandar que tenga en su paquete de habilidades todas las usadas o requeridas en el deporte (Rebotar, donqueo, defensa, tiro de media, tiro de larga distancia, tiro de 3puntos, etc…) aunque no sea el mejor en cada una de ellas, en cambio una librería sería un jugador enfocado en una sola de estas habilidades, ejemplo un jugador experto anotando desde la linea de 3, pero que no se le da también las demas habilidades.

## Ecosistema de frameworks y librerías JavaScript

  - Webpack construir sitios y aplicaciones web.
  - Rullup para construir librerias de javascript.

CSS-in-JS

- [Webpack and Rollup: the same but different | by Rich Harris | webpack | Medium](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
- [Taller de Creación de Router para Single Page App con JavaScript](https://platzi.com/cursos/singlepage-app/)
- [What is module bundler and how does it work? | Tan Li Hau](https://lihautan.com/what-is-module-bundler-and-how-does-it-work/)
- [¿Cuáles son los empaquetadores de JavaScript?](https://platzi.com/blog/empaquetadores-javascript/)

# 2. Contexto y funcionamiento de los Frameworks JavaScript

## Qué es React y cómo se construyó

ECMAScript es estándar en el que se basa JavaScript, es la especificación del lenguaje de programación JavaScript; y lo que conocemos como Javascript es la implementación que hace cada navegador de esta especificación.

En 2005 surgió ECMAScript for XML, un estándar para agregar soporte nativo de ECMAScript a XML. Era una alternativa a la forma en la que se trabaja con el DOM.

En 2010, inspirados en ECMAScript for XML, Facebook estaba trabajando en XHP, una “mejora” a PHP con la que pretendían crear componentes personalizados y reutilizables de HTML y lo integraron a su Stack.

En 2011, bajo la influencia de XHP y los problemas que tenía Facebook, se creó el prototipo de React JS. Una herramienta para desarrollar aplicaciones con la que pudieran mejorar la eficiencia del los desarrolladores y seguir ofreciendo una buena UX.

En 2012 React se volvió Open Source.

En 2014 llegaron las React Developer Tools, un conjunto de herramientas para depurar componentes de React.

En 2015 apareció React Native, y con él muchas empresas grandes empezaron a utilizar React.

### Objetivos de React

- **Declarativo:** Se refiere a que sea fácil de leer.
- **Basado en componentes:** Que todo este formado por componentes.
- **Multiplataforma:** Significa que podremos utilizar React en cualquier plataforma con solo pequeños cambios.

Existe un gran ecosistema de herramientas relacionadas con React, algunas desarrolladas por Facebook y otras por creadas por la comunidad. Por ejemplo:

- **React DOM:** Se utiliza para renderizar los componentes de React en el navegador.
- **React Native:** Usado generalmente para crear aplicaciones móviles.
- **Hay dos formas de crear componentes con React:** con una clase y con una función

Al crear componentes con una clase esta usa un función render y dentro una función return. Dentro de esta ultima se encuentra el código JSX para crear el componente. Además, React utiliza las llamadas props para presentar ciertas partes del componente de manera dinámica.

React también cuenta con el state, que nos sirve para cambiar el contenido de las variables dependiendo de la interacción del usuario. Este estado es un objeto donde podemos definir propiedades para después hacer uso de ellas. Cuando React detecta un cambio dentro del state automáticamente se vuelve a renderizar el componente mostrando los nuevos datos.

- [Qué es React.js - YouTube](https://www.youtube.com/watch?v=PBpl04hW-Ew)
- [React - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/React)
- [The History of React.js on a Timeline | @RisingStack](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/)
- [Cómo funciona React.js y cuál es su historia - YouTube](https://www.youtube.com/watch?v=O1CLgdMF45A)
- [¿Qué es y cómo funciona el Virtual DOM? en Curso Profesional de React con Redux 2016](https://platzi.com/clases/1079-react-2016/5820-que-es-y-como-funciona-el-virtual-dom/)

## Qué es un componente en React y cómo funciona

Los componentes y su ciclo de vida existen en los 3 grandes frameworks (en grandes rasgos todos nacen, cambian y mueren)

[**Vue 💚:**](https://es.vuejs.org/v2/guide/instance.html#Diagrama-del-Ciclo-de-vida)

<img src="https://i.ibb.co/68tMK7z/vue.jpg" alt="vue" border="0">

[**Svelte 🧡:**](https://svelte.dev/docs#Run_time)


[**Angular 💓:**](https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688)

<img src="https://i.ibb.co/BG2w2cZ/angular.jpg" alt="angular" border="0">

[**React 💙:**](https://es.reactjs.org/docs/state-and-lifecycle.html)

<img src="https://i.ibb.co/cbm3zK4/diagrama-ciclo-de-vida.jpg" alt="diagrama-ciclo-de-vida" border="0">

## Cómo usar React.js

``` JS
// RACT

Codigo de Form.js

import React from "react";

export default function Form(props) {
  const { movie } = props;
  return (
    <form>
      <h3>{movie.name}</h3>
      <button> - </button>0<button> + </button>
    </form>
  );
}

```


Codigo de App.js
``` JS
// REACT

import Form from "./Form";

const movies = [
  {
    name: "Avengers",
    available: 5
  },
  {
    name: "Terminator",
    available: "3"
  }
];

export default function App() {
  return (
    <div>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
```

Agregar esto a los botones del formulario para evitar que se recargue la página:
```html
<button type="button"> - </button> 0 <button type="button"> + </button>
```

¿Cómo evitar que todos los componentes vayan envueltos en etiquetas `<div>` y por ende el DOM se llene de divs innecesarios?
En vez de envolver todo el componente entre etiquetas `<div>` se puede usar la etiqueta de JSX `<React.Fragment> `(o su “shorthand”… <>):

``` js
<React.Fragment>
	<h2>Titulo</h2>
	<form>...</form>
</React.Fragment>
Lo cual sería equivalente a:

<>
	<h2>Titulo</h2>
	<form>...</form>
</>
```
¿Cómo hacer que la página no se recargue?
Se puede asociar una función que se ejecute onclick en cada botón, o como submit del form, cuya primera línea sea event.preventDefault().

[ReactSimple-PlatziIntroFrameworks - CodeSandbox](https://codesandbox.io/s/reactsimple-platziintroframeworks-zqenr?file=/src/App.js)

## Manejo del estado en React

``` JS
//JavaScript
<button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0} > - </button>     // Linitar el boton a ir mas boletos y no pasar a numeros negativos
      {quantity}
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity >= peli.available}     // interaccion de usuario aplicacion
      >
        +
</button>
```

## Qué es Angular y cómo se construyó

En el 2009 un grupo de amigos Desarrolladores inventaron una herramienta para que personas que no sabian programar pero si HTML pudieran hacer aplicaciones, esto no tuvo exito. Despues uno de ellos fue a trabajar a Google Feedback. Pero para esto necesitaron 17k lineas de codigo en frontend, usando un Google Web Toolkit, pero por esto apostaron que podian hacerlo en 2 semanas, pero logro hacerlo en 3 y con 1.5k lineas de codigo, y asi nacio Angular JS, que se volvio Open Source y patrocinado por google. Es como REACT pero FB depende totalmente de este, pero Google no depende de angular. Google solo lo patrocina.

Entre 2012 y 2014 Angular era bastante popular pero con el paso del tiempo empezo su decaida, y anunciaron que lo iban a hacer desde 0 y empezar a usar componente, pero los que iban a usar a angular no sabian que iba a pasar porque no iba a tener compatibilidad.

Es dificil convinar angualar con alguna libreria o algo que no se haya hecho especificamente para angular.

Angular tiene un sistema para crear componentes que se llaman Engine Modulos o Modulos de angular, que agrupan componentes y servicios a un mismo fin o a un mismo dominio. Los componentes son la logica y la interfaz de usuario para cada pedazo de la aplicacion.

Los componentes tienen dos partes, las logicas y las partes de UI, esto lo haremos con una clase en TS. Lo definimos con algo parecido a HTML.

Los servicios son agrupaciones de codigo. Agrupaciones de logica que podemos usar en varios componentes por toda la aplicaion. Esto lo inyectamos a los componentes que usamos Inyeccion de dependencias.

Angular tiene a Angular Ivy que se encarga de renderizar los componentes en angular con Incremental DOM. Como React usa JSX, Angular tiene su variacion de HTML que no es puro. Lo que hace Angular Ivy es convertir este HTML en un JS para renderizar los componentes en el DOM.

Angular explica que crear una copia de todo el DOM es innecesario, con el Incremental DOM cada componente se convierte en Instrucciones y estas hacen que se ejecute y renderice y actualice el componente, en ningun momento crea copia del DOM y ahorra memoria.

En angular 9 reescribieron el motor completamente. Antes habia que compilar muchas veces cada que cambiabamos componentes. Con Angular Ivy cambio la forma en la que se describe para que los componentes solo se afecten asi mismos y no a los demas.

<img src="https://i.ibb.co/CKmFjph/framework-librery.jpg" alt="framework-librery" border="0">

- [Angular | Document](https://angular.io/docs)

- [Understanding Angular Ivy: Incremental DOM and Virtual DOM | by Victor Savkin | Nrwl](https://blog.nrwl.io/understanding-angular-ivy-incremental-dom-and-virtual-dom-243be844bf36)
- [What is Angular Ivy? | Ninja Squad](https://blog.ninja-squad.com/2019/05/07/what-is-angular-ivy/)
- [An introduction to Angular 9 Ivy Compiler - DEV Community](https://dev.to/eugeniolentini/an-introduction-to-angular-9-ivy-compiler-177n)
- [Aprende Inyección de Dependencias: El camino de las buenas prácticas (Primera parte)](https://platzi.com/blog/inyeccion-de-dependencias-el-camino-de-las-buenas-practicas/)
- [Aprende Inyección de Dependencias: El código es poder (Segunda parte)](https://platzi.com/blog/inyeccion-de-dependencias-el-codigo-es-poder)

## Cómo usar Angular

``` JS
//JavaScript
<h2>Peliculas</h2>
<form *ngFor="let movie of movies">
  <h3>{{ movie.name }}</h3>
  <button
    type="button"
    [disabled]="movie.quantity <= 0"
    (click)="removeMovieQuantity(movie)"
  >-</button>
  {{ movie.quantity }}
  <button
    type="button"
    [disabled]="movie.quantity >= movie.available"
    (click)="addMovieQuantity(movie)">+</button>
</form>
```

## Qué es Vue y cómo se construyó

Se dice que Vue se copia todo de todos. Vue se define como un Framework Progresivo que no es abrumador como Angular pero no se le queda chiquito a ningun proyecto, puede seguir creciendo mediante los necesitemos. Es escalable pero Flexible porque si se integra con cualquier herramienta que querramos utilizar. VueJS es completamente REACTIVO, porque REACT no es completamente reactivo, llega al mismo lugar que ese paradigma pero lo hace de otra forma. Angular puede serlo pero no necesariamente.

VueJS si usa el virtual DOM, aqui se usa HTML al principio y JS cuando creces. Otra caracteristica que Vue dice tener es el mejor performance o rendimiento pero ninguna realmente tiene el mejor performance.

- [vuejs](https://vuejs.org/v2/guide/)
- [Vue.js: The Documentary - YouTube](https://www.youtube.com/watch?v=OrxmtDw4pVI)
- [Introducción a Vue.js en Curso Básico de Vue.js 2017](https://platzi.com/clases/1111-vuejs-2017/6674-introduccion-a-vuejs/)

## Cómo usar Vue.js

```HTML
<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <script src="https://unpkg.com/vue@3.0.5/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>Peliculas</h2>
      <form v-for="movie in movies">
        <h3>{{movie.name}}</h3>
        <button
          type="button"
          v-on:click="movie.quantity--"
          v-bind:disabled="movie.quantity <= 0"
        >
          -
        </button>
        {{movie.quantity}}
        <button
          type="button"
          v-on:click="movie.quantity++"
          v-bind:disabled="!(movie.quantity < movie.available)"
        >
          +
        </button>
      </form>
    </div>
    <script>
      const { createApp } = Vue;

      const app = createApp({
        data() {
          return {
            movies: [
              { name: "Avengers", available: 5, quantity: 0 },
              { name: "Wonder Woman", available: 15, quantity: 0 }
            ]
          };
        }
      });

      app.mount("#root");
    </script>
  </body>
</html>
```

- [VueSimple-PlatziIntroFrameworks - CodeSandbox](https://codesandbox.io/s/vuesimple-platziintroframeworks-uuco0)
- [https://unpkg.com/vue@3.0.5/dist/vue.global.js](https://unpkg.com/vue@3.0.5/dist/vue.global.js)

## Qué es Svelte y cómo se construyó

**Rich Harris** creó **SVELTE**

- La principal característica es que no crea intermediarios entre el código que se escribe en SVELTE y el DOM.
- A diferencia de React, SVELTE no usa el VirtualDOM.
- SVELTE es Espectacular para desarrollar sitios WEB
- SVELTE No es tan fuerte en Aplicaciones WEB

**ARQUITECTURA DE SVELTE:**
  - No hay un recurso oficial que nos explique como funciona SVELTE por dentro.
  - Dustin Deus: escribió un issue acerca de la Documentación:


  1. SVELTE es un Compilador, por tanto, necesita generar un AST(Abstract Syntax Tree), adjunto clase del curso profesional de JavaScript Acerca de ello.
  2. Para esto necesita 3 Parsers: HTML, CSS, y JavaScript
  
**COMBINA ESTOS 3 ARBOLES.**
  3. Envuelve como un envoltura de chocolate 😄, todos los componentes en FRAGMENTS, Una interfaz API del Navegador.
  4. Esa interfaz sirve para ENCAPSULAR: Nodos, y pedazos del DOM, esto no afecta la interfaz de la Página.
  5. Los FRAGMENTS es como un nodo imaginario(No es visible para los usuarios), pero si tiene todos las características de un nodo.(Crear, Actualizar, Borrar)

TheGuardian creo Reactive JS una libreria para desarrollar interfaces con componentes, una persona que trabajaba en este proyecto creo Svelte ya que se le hace que todos los demas son muy complicados y Svelte fuera sencillo. Svelte es espectacular para sitios web pero malo para aplicaciones web, ese no fue su objetivo. Svelt y su desarrollo no cuenta con tantas actualizaciones ya que no cuenta con una empresa.

No hay un recurso oficial que nos explique como funciona SVELTE por dentro. Dustin Deus escribio un issue acerca de la documentacion de Svelte.

Svelte es un compilador que necesita generar un AST. Para esta compilacion necesita 3 parsers, uno para HTML, CSS Y JS. En el momento de renderizado SVELTE envuelve todo el codigo en Fragment que no afecta a la interfaz de la pagina. No se transforman en algo que los usuarios puedan ver, es como un nodo imaginario que no se puede ver pero tiene todas las caracteristicas de un nodo.

- [Svelte 3: Rethinking reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity)
- [Svelte for Sites, React for Apps](https://www.swyx.io/svelte-sites-react-apps/)
- [React vs. Svelte: The War Between Virtual and Real DOM | by Keshav - Kumaresan | Bits and Pieces](https://blog.bitsrc.io/react-vs-sveltejs-the-war-between-virtual-and-real-dom-59cbebbab9e9)- 
- [Document the architecture behind Svelte · Issue #1011 · sveltejs/svelte · GitHub](https://github.com/sveltejs/svelte/issues/1011)

## Cómo usar Svelte

```HTML
<!-- HTML -->
<script>
  const movies = [
    { name: "Avengers", available: 5, quantity: 0 },
    { name: "Wonder Woman", available: 15, quantity: 0 }
  ];
</script>

{#each movies as movie}
<form>
	<h3>{movie.name}</h3>
	<button type="button" on:click={() => movie.quantity--} disabled={movie.quantity <= 0}>-</button>
	{movie.quantity}
	<button type="button" on:click={() => movie.quantity++} disabled={!(movie.quantity < movie.available)}>+</button>
</form>
{/each}
```

**Rollup**

Es un paquete de módulos para JavaScript que compila pequeños fragmentos de código en algo más grande y complejo, como una biblioteca o aplicación. Utiliza el nuevo formato estandarizado para módulos de código incluidos en la revisión ES6 de JavaScript, en lugar de soluciones idiosincrásicas anteriores como CommonJS y AMD. Los módulos ES le permiten combinar libremente y sin problemas las funciones individuales más útiles de sus bibliotecas favoritas. Esto eventualmente será posible de forma nativa en todas partes, pero Rollup te permite hacerlo hoy.

# 3. Estilos con CSS, preprocesadores y CSS-in-JS

## Qué es CSS-in-JS

CSS-in-JS es una técnica de diseño en la que se usa JavaScript para diseñar componentes. Cuando se analiza este JavaScript, se genera CSS y se adjunta al DOM. Permite abstraer CSS al nivel de componente en sí, usando JavaScript para describir estilos de una manera declarativa y mantenible.

- [El caso de CSS-in-JS | OCTUWEB](https://octuweb.com/css-in-js/)
- [What actually is CSS-in-JS?. CSS-in-JS refers to a collection of… | by Oleg Isonen | DailyJS | Medium](https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757)


## Componentes en Angular con CSS



- [CSS in JavaScript with Angular. For many years the frontend css styling… | by Kim T | Creative Technology Concepts & Code | Medium](https://medium.com/creative-technology-concepts-code/css-in-javascript-with-angular-61da79111804)

## Trabajando con Vue Components


## Vue Components con Preprocesadores de CSS


## Trabajando en React con Styled Components


## Estilos dinámicos con Styled Components en React


## Trabajando en Svelte con Emotion

# 4. Cómo escalar sitios o aplicaciones web

## Tipos de aplicaciones según su router: SPAs vs. SSR


## Frameworks sobre frameworks: Next.js


## Organización de archivos en el frontend


## Retos y análisis para elegir tu próximo stack de desarrollo frontend


## Cómo especializarte en Frameworks de 
