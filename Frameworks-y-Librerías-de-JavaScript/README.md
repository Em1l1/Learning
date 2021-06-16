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


## Manejo del estado en React


## Qué es Angular y cómo se construyó


## Cómo usar Angular


## Qué es Vue y cómo se construyó


## Cómo usar Vue.js


## Qué es Svelte y cómo se construyó


## Cómo usar Svelte

# 3. Estilos con CSS, preprocesadores y CSS-in-JS

## Qué es CSS-in-JS


## Componentes en Angular con CSS


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
