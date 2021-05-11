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



## Call Stack



## Garbage Collection



## Stack overflow



## JavaScript Runtime



## Asincronía



## Recapitulación


