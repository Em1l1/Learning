<h1>JavaScript Engine (V8) y el Navegador</h1>

<h2>Diego De Granda</h2>

![](https://i.ibb.co/jk1jmsR/js1.jpg)

<h1>Tabla de Contenido</h1>

- [1. Introducción al curso](#1-introducción-al-curso)
  - [Requisitos antes de empezar](#requisitos-antes-de-empezar)
  - [Historia de JavaScript](#historia-de-javascript)
- [2. JavaScript Engine](#2-javascript-engine)
  - [¿Cómo funciona el JavaScript Engine?](#cómo-funciona-el-javascript-engine)
  - [V8, el JavaScript Engine de Chrome](#v8-el-javascript-engine-de-chrome)
    - [¿Qué es V8?](#qué-es-v8)
  - [Profundizando en el Engine](#profundizando-en-el-engine)
  - [Ejemplo de Objeto global y hoisting](#ejemplo-de-objeto-global-y-hoisting)
- [3. Código de Ejecución](#3-código-de-ejecución)
  - [Memory Heap](#memory-heap)
  - [Memory Heap](#memory-heap-1)
  - [Call Stack](#call-stack)
  - [Garbage Collection](#garbage-collection)
  - [Stack overflow](#stack-overflow)
  - [JavaScript Runtime](#javascript-runtime)
  - [Asincronía](#asincronía)
  - [Recapitulación](#recapitulación)

# 1. Introducción al curso

## Requisitos antes de empezar

¡Oh V8 es a Node lo que la cocina es a un cocinero!

De hecho no deben usar otro navegador que no sea Chrome, según el Curso Profesional de JavaScript, los otros navegadores NO trabajan con V8, ellos tienen sus propios motores de JavaScript, así que para este curso lo mejor es que trabajen con Chrome o con NodeJS que son los que se basan en V8

## Historia de JavaScript

![](https://i.ibb.co/pxthHtT/js.jpg)

Existe una pagina llamada “Evolución de la web”. En esta pagina podremos ver en una linea del tiempo una pequeña historia sobre la evolución que a tenido la web en cuanto a la creación de herramientas.

En el momento que nace la web, todas las paginas eran estáticas y era muy difícil encontrar algunas paginas, ya que no existía algún buscador que te proporcionara las paginas, a todavía había que acceder de forma directa. Justamente estas paginas eran feas, ya que solo tenían texto, imágenes y muy pocos estilos. En ese momento los usuarios pedían una evolución en la web y de ahi nace JavaScript. Su creador fue Brendan Eich. Este fue el primer desarrollador en generar JS. Pero antes de esto creo el lenguaje de programación Mocha. Este lenguaje era solo para navegador de NetScape, este evoluciono a LiveScript y a finales del 95, nace JavaScript Nombre que fue elegido solo por marketing, ya que Java estaba haciendo mucho ruido en su momento.

Después de esto, Microsoft aplico ingeniería inversa para sacar un nuevo lenguaje de programación llamado JScript, este funcionaba con Internet Explorer.

En 1997 ECMA pone en orden las cosas para que no surgieran nuevos lenguajes especializados para navegador y ellos mismos hicieron los estándares. ECMAScript Es una especificación estandarizada por ECMA. Fue creado para estandarizar JS y para ayudar a fomentar multiples implementaciones independientes.

En el 2008 se crea V8 que es un Engine. En 2009 por base a V8 se crea Node.JS

En 2010 se empezaron a crear los Frameworks para este lenguaje y en 2015 se creo el ES6 que es ECMA6 que son actualizaciones del lenguaje.

- [JavaScript | Instagram](https://www.instagram.com/p/B4nPBx4BNFt/)
- [The Evolution of the Web](http://www.evolutionoftheweb.com/)
- [JavasScript potcast | history](https://www.redhat.com/en/command-line-heroes/season-3/creating-javascript)

Cinco preguntas de examen en cuatro lineas:
JavaScript es un lenguaje de programación que se utiliza principalmente para 

  ✅ crear páginas web dinámicas; Fue desarrollado originalmente por 
  ✅ Brendan Eich de 
  ✅ Netscape con el nombre de 
  ✅ Mocha, el cual fue renombrado posteriormente a LiveScript, para finalmente quedar como 
  ✅ JavaScript en el año 1995.


# 2. JavaScript Engine

## ¿Cómo funciona el JavaScript Engine?

JavaScript Engine: Es el motor de JS, siempre corre en el navegador.
Su función es interpretar el código JavaScript y convertirlo a Machine Code para que la máquina pueda entenderlo.

  - Just in time compiler: Es la compilación en tiempo real que sucede en el proceso del Engine.

![](https://i.ibb.co/Gch19Jz/1.gif)

![](https://i.ibb.co/Xz2SfrV/2.gif)

![](https://i.ibb.co/x3MXXW3/3.gif)

![](https://i.ibb.co/k8kvb7p/4.gif)


## V8, el JavaScript Engine de Chrome

### ¿Qué es V8?

V8 es un motor open-source escrito en C++ para compilar JavaScript y WebAssembly en código máquina. Esto quiere decir que traduce JavasScript a un código puramente digital capaz de ser interpretado por la CPU donde se ejecuta.

Este motor fue desarrollado por Google para Google Chrome y su primera versión vio la luz en 2008 junto con la primera versión del navegador.

El motor de JavaScript va a funcionar como un interprete en el navegador, para que cuando le llegue código JavaScript sea capaz de leer ese código, interpretarlo, y traducírselo a nuestra computadora para que realice la función que programamos.

Este proceso se lo conoce como just in time compiler. Es una técnica para mejorar el rendimiento de sistemas de programación que compilan a bytecode, consistente en traducir el bytecode a código máquina nativo en tiempo de ejecución.

V8 Engine es el motor de JavaScript de Chrome, utilizado tambien en Node. Es el que mas se esta utilizando hoy en dia por su velocidad, estabilidad y evolucion. Antes cada navegador tenia su propio motor, pero como V8 es muy bueno, los navegadores lo estan empezando a optar.

La razón del nombre “motor V8” y el logo se debe a la identificación con los motores V8 de los automóviles.

Un motor V8 en el automovilismo es un motor montado en el cárter con dos bancos de cuatro cilindros, que comparten cigüeñal, formando una “V”.

Es usado en muchas categorías de competición automovilística, especialmente en Estados Unidos, este tipo de motores incluso es ocupado en grandes competiciones de autos,

**Nombre de los otros motores:**

- Mozilla - Spidermonkey
- Microsoft edge - Chakra
- Safari - JavascriptCore
- Google Chrome - V8

- [ECMAscript](https://kangax.github.io/compat-table/es6/)

## Profundizando en el Engine

![](https://i.ibb.co/DkQVnx8/bycode.jpg)

- `Global Environment:` Entorno Global
- `Global Object:` Objeto Global
- `This:` Variable que depende del contexto
- `Outer environment:` Entorno Externo
- `Execution Context:` Contexto de Ejecución para las tareas

![](https://i.ibb.co/FbyjwXS/engine.jpg)

- Una vez el motor recibe un archivo JS genera un Global enviroment
- En el Global enviroment se genera un Global object que es igual a window
- También se genera una variable this
- this depende del contexto, en el entorno global this es igual al objeto global
- Ya despues de generado el entorno global, comienza a correr nuestro código en el contexto de ejecucion, a través de un stack de tareas apiladas
- Una vez que el motor comienza a interactuar con el navegador, genera un parseo del documento completo, para encontrar las keywords y las pasa al AST (abstract syntax tree)

[AST Explorer](https://astexplorer.net)

- Una vez se tiene el AST, el motor lo pasa al interpreter para retornar bytecode puede ser entendido por la máquina
Si en la interpretación del AST ve mucho código que se repite y que se puede optimizar entra el profiler o monitor, y optimiza el codigo y lo regresa compilado como bytecode para que la máquina lo pueda comprender. Es justo en este paso donde aparece el hoisting, donde el motor en su función de optimizacion reinterpreta el código de una mejor forma y se pueden presentar errores de programacón.
- El hoisting solo sucede con variables y funciones que se mandan a llamar.

![](https://i.ibb.co/SPxJGVk/hoisting.jpg)

- [Parse - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Parse)

## Ejemplo de Objeto global y hoisting

Hoisting

- Si llamamos una variable antes de ser declarada, el compiler crea la variable en la memory heap y la inicializa como undefined
- En el caso de las funciones es distinto, primero mandamos a llamar a las funciones antes de ejecutarlas.
- El hoisting a veces funciona pero no tenemos control de las variables que se van a cambiar
- Si llamamos a una constante (const) antes de inicializar retorna un error de tipo: Uncaught ReferenceError, que corresponde a variables que son referenciadas pero no pudieron ser capturadas

```js
console.log(nombre);
apellido();

var nombre = "Diego";

function apellido(){
	console.log("De Grada");
}
```

Como el motor de JavaScript lo interpreta:

```js
var nombre = undefined;
function apellido(){
	console.log("De Grada");
}

console.log(nombre);
apellido();
nombre = "Diego";
```

Si te preguntas cuál pone más arriba, ¿Las variables o las funciones?
La respuesta es las variables. Probemos esto:

```js
var nombre;
function nombre(){}
typeof nombre; // Output: "function"
```

¿Y si ponemos primero la función y luego la variable?

```js
function nombre(){}
var nombre;

typeof nombre; // Output: "function"
```

Pero, si declaras una variable y le asignas un valor en la misma linea el resultado es diferente:

```js
var nombre = "Platzi";
function nombre(){}

typeof nombre; // Output: "string"
```

Esto es porque JavaScript hace hoisting solo de la declaración de la variable. JavaScript trata la declaración y asignación en una sola linea como dos pasos, por lo que si escribimos:

```js
var nombre = "Platzi";
```
El motor lo interpreta así:


```js
var nombre = undefined;
nombre = "Plazi";
```

Así que cuando escribimos:

```js
var nombre = "Platzi";
function nombre(){}

typeof nombre; // Output: "string"
```

Como lo interpreta el motor de JavaScript es así:

```js
var nombre = undefined;
function nombre(){}

nombre = "Platzi";

typeof nombre; // Output: "string"
```

Es decir que “se deja atrás” la asignación.
Obviamente ningún desarrollador debería de escribir código así de confuso, esto es solo para saber como funciona JavaScript y su engine, ese conocimiento te hace un mejor desarrollador y te destaca de entre otros.

[Esprima](https://esprima.org/)


[AST explorer](https://astexplorer.net/)


[Hoisting - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)


[Parsers y el Abstract Syntax Tree en Curso Profesional de JavaScript](https://platzi.com/clases/1642-javascript-profesional/22166-parsers-y-el-abstract-syntax-tree/)


[Parse - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Parse)

# 3. Código de Ejecución

## Memory Heap

Los objetos en JS (objetos, arrays, funciones y básicamente todo lo que no sea un valor primitivo) se almacenan en la parte de memoria que de llama Memory Heap. Los valores primitivos son almacenados en el Call Stack, dentro del Scope (Contexto de Ejecución de la función que tenga acceso a esa variable). Acceder al Call Stack es mucho más rápido que al Heap. Además, en el Call Stack también se guardan las referencias, “como si fueran valores primitivos”. Cuando se asigna una variable a otra y esta apunta a un objeto, se copia la referencia, como si fuera un valor primitivo. 

Si el objeto tiene atributos como un número por ejemplo, este se guarda en la posición de memoria reservada para ese objeto. Los objetos también pueden tener más objetos dentro. En ese caso, dentro de la posición de memoria de ese objeto se va a guardar una referencia a otra posición de memoria.

Memory Heap
--

- Donde se almacena los valores de las variables y las funciones
- Se destina un espacio en memoria para las variables.
- La información en el memory heap, No se guarda de manera lineal

- [Esprima](https://esprima.org/)
- [AST explorer](https://astexplorer.net/)
- [Hoisting - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Parsers y el Abstract Syntax Tree en Curso Profesional de JavaScript](https://platzi.com/clases/1642-javascript-profesional/2166-parsers-y-el-abstract-syntax-tree/)

## Call Stack


El Call Stack es un mecanismo para que un intérprete realice un seguimiento de su lugar en un script que llama a múltiples funciones: qué función se está ejecutando actualmente y qué funciones se invocan desde esa función, etc.

Cuando un script llama a una función, el intérprete la agrega a la pila de llamadas y luego comienza a llevar a cabo la función. Cualquier función llamada por esa función se agrega a la pila de llamadas más arriba y se ejecuta donde se alcanzan sus llamadas. Cuando finaliza la función actual, el intérprete la quita de la pila y reanuda la ejecución donde la dejó en la última lista de códigos. Si la pila ocupa más espacio del que le había asignado, se produce un error de “desbordamiento de pila”.

- Como se mandan a llamar las variables y las funciones
- Las tareas en el callstack se apilan de abajo hacia arriba.
- Se llaman de la última que mandamos a llamar hacia abajo
- En la base de la pila reposa el Global Object
- Si una función llama a otra, la pone encima de la pila.
- Se ejecuta una tarea a la vez (sincronía)
- Una vez que se van ejecutando las tareas se van retirando de la pila
- Al ejecutar todas las tareas se retira el Global object.

![](https://i.ibb.co/cksHN5j/call-stack.gif)

`Call Stack` es un mecanismo para que un intérprete (como el intérprete de JavaScript en un navegador web) realice un seguimiento de su lugar en un script que llama a múltiples funciones : qué función se está ejecutando actualmente y qué funciones se invocan desde esa función, etc. .

- Cuando un script llama a una función, el intérprete la agrega a la pila de llamadas y luego comienza a llevar a cabo la función.

- Cualquier función llamada por esa función se agrega a la pila de llamadas más arriba y se ejecuta donde se alcanzan sus llamadas.

- Cuando finaliza la función actual, el intérprete la quita de la pila y reanuda la ejecución donde la dejó en la última lista de códigos.

- Si la pila ocupa más espacio del que le había asignado, se produce un error de “desbordamiento de pila”.

By: https://mzl.la/33S28jQ

[Estructura de datos Stack: “LIFO”](https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm)

## Garbage Collection

En lenguajes de alto nivel como Java y JavaScript, los programadores no necesitan asignar o liberar memoria explícitamente. La memoria JavaScript se asigna cuando se crean cosas (objetos, cadenas, etc.) y se libera automáticamente cuando ya no se usan. Este proceso se llama Garbage Collection.

❤️
![](https://i.ibb.co/WBtkHgB/garbage.gif)

El Garbage Collection: Durante el proceso de ejecución de javascript en nuestro navegador, habrá un algorimo que estará pendiente del estado del memory heap cuyo trabajo sera buscar y eliminar datos no necesarios y asi liberarar espacio para la memoria, esto es muy util para que una variable pueda ser renombrada con una dato mucho mas nuevo. El garbage collection es muy importante debido a que con ella podemos recolectar o almacenar datos que el navegador no usa pero que a futuro podamos usarlo para nuestro fin.

- `Garbage collecction` es el proceso de rastrear los “desechos” y limpiar la memoria(Mark and Sweep) para evitar un overstack.
- `Mark and sweep` es el proceso en el que marca(mark) los espacios de memoria no utilizados en el heap y los elimina(sweep).

[Garbage Collection JavaScript](https://dev.to/abhilashiam/garbage-collection-in-javascript-126a)

## Stack overflow

El stack overflow se genera cuando el call stack se llena completamente (pila de tareas). Esto pasa cuando se genera o se trabaja con bucles infinitos, recurcividad y funciones. Entonces este entra en stack overflow, tenemos que tener cuidado de ocacionar estos stack!!!

![](https://i.ibb.co/58MTQNf/stack.jpg)

Chrome nos manda un mensaje: “OYE, TRANQUILO VIEJO!”

![](https://i.ibb.co/RhvKxm4/stack.gif)

Tenemos nuestro Call Stack donde tenemos nuestra lista de tareas, empezando por el Global Object, se va agregando a la pila todo el código nuestro. Puede pasar que tengamos alguna función que haga que desbordemos esa pila del Call Stack, a esto se le llama Stack overflow, y se crasheará el navegador. En versiones anteriores de Chrome se cerraba por completo el navegador, ahora detectan ese desbordamiento y lo bloquean para evitar que se bloqueé todo el navegador.

```js
function overflow() {
	overflow();
}

overflow(); // Uncaught RangeError: Maximum call stack size exceeded
```

## JavaScript Runtime

![](https://i.ibb.co/dpy5LDn/runtime.png)

Que bueno saber como funciona todo lo de JavaScript en los navegadores, ya entiendo mejor todo lo que pasa detras de lo que hacemos.

![](https://i.ibb.co/XFTbPYY/runtime.gif)

```js
console.log("taco 1");
console.log("taco 2");
console.log("torta");
console.log("taco 3");
```

JavaScript es síncrono. Aunque con el event loop podemos simular procesos multi-hilo

JavaScript es síncrono, hace una tarea a la vez. Esto hace que se vea lento o que el tiempo de espera sea bastante lento.

Ya que tengamos la variable podemos agregarla al CallStack y con esto ya le podemos dar interacción con los elementos del navegador.

Un ejemplo de esto es que si nos entran 4 tareas, una de 1 segundo, una de 2 segundos, una de 10 segundos y otra de 3 segundos. Quiere decir que se irán haciendo con forma de pila pero se tendrán que esperar la ultima a que termine totalmente de hacer la tarea larga, ya que solo puede hacer una tarea al mismo tiempo.

- [JavaScript — Cómo funciona el Runtime Environment — JRE](https://mauriciogc.medium.com/javascript-c%C3%B3mo-funciona-el-runtime-environment-jre-8ebceafdc938)
- [Tacos al Pastor](https://www.mexicoenmicocina.com/receta-tacos-al-pastor/)
- [Runtime](http://latentflip.com/loupe/)
- [conceptos runtime](https://medium.com/@olinations/the-javascript-runtime-environment-d58fa2e60dd0)

## Asincronía

Por default corre una tarea a la vez – Sincronismo
Ahora veremos que es el asincronismo
Memory Heap: Espacio donde se guardan funciones y variables
Call Stack: Donde se apilan todas las tareas que tenemos que hacer con Javascript
Web API´s (Ofrecidas por el navegador para manipular lo siguiente)

  - `Dom(document)`
  - `AJAX(XMLHttpRequest)`
  - `Timeout(setTimeout)`
  - `Call Back Queue:` El orden en que se van a ejecutar a funciones
Al momento de usar asincronismo sacamos funciones del Call Back Queue que no serán ejecutadas por javascript y serán ejecutadas por el navegador despues
Ejemplo

```js
console.log('taco 1')
console.log('taco 2')
console.log('taco 3')
setTimeout(()=>{
    console.log('torta 1')
},1000)
console.log('taco 4')
setTimeout(()=>{
    console.log('torta 2')
},500)
setTimeout(()=>{
    console.log('torta 3')
},0)
```

Cuando hablamos del asincronismo hablamos del siguiente proceso →

En el JS runtime enviroment se comienza a ejecutar nuestro codigo haciendo uso del Memory Heap y el Call Stack.
Pero haciendo uso del Timer una de nuastras Web API’s (API’s del V8 de chrome). Podemos “delegar” codigo que el browser va a ir preparando simultaneamente pero sin ejecutarse todavia. Los resultados de este codigo solo entraran en escena cuando sea autorizado por el Event Loop.

El codigo delegado debe ser guardado bajo el method setTimeout(), este lo pasara por la API Timer. Que organizara el codigo en un `Callback Queue`

El orden en que se van a ejecutar estas acciones se ubica en el `Callback Queue`.

Este codigo “delegado”, listo para ejectutarse segun el `Callback Queue` solo se ejecutara cuando las tareas en el Call Stack esten hechas.

El event loop se encarga de verificar iterativamente si el Call Stack esta vacio, para luego permitir la ejecucion de las acciones en el `Callback Queue`

Taquería DeGranda presenta a:

- call stack : el taquero (órdenes rápidas)
- web APIs : la cocina
- callback queue : las órdenes preparadas
- event loop : el mesero

a que quedó súper claro el JS Runtime y cómo funciona el asincronismo!? 🤪

[Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API)

## Recapitulación

El funcionamiento del motor V8 de JavaScript y muchos temas que tienen relación con el mismo.
Me parecieron claras las explicaciones del profe. El ejemplo de los tacos es muy sencillo y práctico para entender este tema.
