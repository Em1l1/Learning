<h1>JavaScript Profesional</h1>

<h3>Richard B. Kaufman López</h3>

<h1>Tabla de contenido</h1>

- [1. Introducción](#1-introducción)
  - [¿Qué significa ser un profesional de JavaScript?](#qué-significa-ser-un-profesional-de-javascript)
  - [Aspectos que destacan a un profesional](#aspectos-que-destacan-a-un-profesional)
  - [Inicio del proyecto](#inicio-del-proyecto)
- [2. Repaso de Conceptos Fundamentales](#2-repaso-de-conceptos-fundamentales)
  - [Cómo llega un script al navegador](#cómo-llega-un-script-al-navegador)
  - [Scope](#scope)
    - [Global Scope](#global-scope)
    - [Function Scope](#function-scope)
    - [Block Scope](#block-scope)
    - [Module Scope](#module-scope)
  - [Closures](#closures)
  - [El primer plugin](#el-primer-plugin)
  - [this](#this)
  - [Los métodos call, apply y bind](#los-métodos-call-apply-y-bind)
  - [Prototype](#prototype)
  - [Herencia Prototipal](#herencia-prototipal)
- [3. Cómo funciona JavaScript](#3-cómo-funciona-javascript)
  - [Parsers y el Abstract Syntax Tree](#parsers-y-el-abstract-syntax-tree)
  - [Abstract Syntax Tree en Práctica](#abstract-syntax-tree-en-práctica)
  - [Cómo funciona el JavaScript Engine](#cómo-funciona-el-javascript-engine)
  - [Event Loop](#event-loop)
- [4. Fundamentos Intermedios](#4-fundamentos-intermedios)
  - [Promesas](#promesas)
  - [Getters y setters](#getters-y-setters)
- [5. Fundamentos Avanzados](#5-fundamentos-avanzados)
  - [Proxy](#proxy)
  - [Generators](#generators)
- [6. APIs del DOM](#6-apis-del-dom)
  - [Fetch - Cómo cancelar peticiones](#fetch---cómo-cancelar-peticiones)
  - [IntersectionObserver](#intersectionobserver)
  - [VisibilityChange](#visibilitychange)
  - [Service Workers](#service-workers)
- [7. TypeScript](#7-typescript)
  - [Introducción](#introducción)
  - [Tipos básicos](#tipos-básicos)
  - [Funciones](#funciones)
  - [Interfaces](#interfaces)
  - [Clases](#clases)
  - [Convertir el proyecto a TypeScript](#convertir-el-proyecto-a-typescript)
- [8. Patrones de Diseño](#8-patrones-de-diseño)
  - [Qué es un patrón de diseño](#qué-es-un-patrón-de-diseño)
  - [Categorías de patrones de diseño](#categorías-de-patrones-de-diseño)
  - [Patrón Singleton y Casos de Uso](#patrón-singleton-y-casos-de-uso)
  - [Implementación del patrón Singleton](#implementación-del-patrón-singleton)
  - [¿Cómo funciona el Patrón Observer?](#cómo-funciona-el-patrón-observer)
  - [Implementación del patrón Observer](#implementación-del-patrón-observer)
  - [Casos de Uso del patrón Observer: Redux](#casos-de-uso-del-patrón-observer-redux)
  - [Patrón Decorator y Casos de Uso](#patrón-decorator-y-casos-de-uso)
  - [Implementación del patrón Decorator](#implementación-del-patrón-decorator)
- [9. Proyecto: MediaPlayer](#9-proyecto-mediaplayer)
  - [Implementación de plugin de Ads: Desplegando en consola](#implementación-de-plugin-de-ads-desplegando-en-consola)
  - [Implementación de plugin de Ads: Desplegando en pantalla](#implementación-de-plugin-de-ads-desplegando-en-pantalla)
  - [Publicar en npm](#publicar-en-npm)
- [10. Conclusiones](#10-conclusiones)
  - [Conclusiones](#conclusiones)


---

# 1. Introducción

## ¿Qué significa ser un profesional de JavaScript?

Richard Kaufman trabaja para KickAss Partners como Senior Front End Engineer y es organizador de la comunidad de Javascript en Ciudad De México. Richard será tu profesor en este curso, él te va a enseñar Javascript puro, repasando los fundamentos clave del lenguaje, explorando APIs del DOM, implementando TypeScript y aplicando las mejores prácticas con Patrones de Diseño.

Vamos a necesitar:

Editor de textos Visual Studio Code.
Navegador Web Google Chrome.
Una CLI (terminal de linea de comandos)…
Es recomendable tener conocimientos en:

- HTML
- CSS
- Básicos de Javascript

En la pestaña de Archivos y Enlaces encontrarás todos los cursos necesarios que forman parte de la EscuelaJS.

En este curso es el primer paso para convertirte en un profesional de Javascript que cumple con lo siguiente:

- Conocimiento profundo del lenguaje, conocer sus particularidades y cómo funciona internamente.
- Conocer los entornos de programación para Javascript.
- Siempre aplicar las mejores prácticas.
- Ser versado en código, leer código de otras personas.
- Tener un set de herramientas que dominas.
- Ética / Profesionalismo
- Experiencia.

Y recuerda que puedes encontrar a tu profesor en twitter como @sparragus.

El camino para llegar a ser profesional es largo y duro, no es fácil. Todos necesitamos que nos guíen para saber qué hacer y qué no. Este camino es conocido como la ruta de pasar de Junior a Senior, este es un duro camino lleno de experiencia.

‌

**¿Qué forma a un profesional?**
‌

Te presento una lista de estas cosas que lo forman:

  - ‌Conocimiento del lenguaje.
  - Conocimiento de entornos de programación.
  - Mejores prácticas.
  - Versado en código.
  - Herramientas.
  - Ética / Profesionalismo.
  - Experiencia.


**El lenguaje: JavaScript**
‌
Debemos tener muy claro cuales son los fundamentos de JavaScript antes de comenzar con esto. Existen features muy raros y hay que estudiarlos. Tenemos que saber cómo funcionan las cosas en JavaScript.

‌**No fundamentos**
‌
Los no fundamentos" representan las siguientes características del lenguaje:


**Promesas (nivel pro).**

  - Getters, setters: son formas de obtener valor de una variable sin tener que poner this.name.
  - Proxies: es un feature muy raro, pero que más adelante veremos a profundidad. Sirve para interceptar a una función antes de que se ejecute.
  - Generadores: esto es raro, pero vamos a ver que sí es eficiente.

**¿Cómo funciona?**
‌
Este lenguaje corre sobre un motor. JavaScript no contiene clases como otros lenguajes de programación, esto es algo que vuela mucho la cabeza, es muy difícil de entender. Otro feature muy cool que vamos a aprender es event loop, es lo que permite que pueda correr muchos procesos a la vez.

**Entornos de programación**
‌
Cuando estamos desarrollando lo hacemos para la WEB, para un celular, para seguidores. Existen diferentes entornos que nos ofrecen APIS, tenemos que conocer todo esto. V

‌**Versado en código**
‌
Esto quiere decir que tenemos que leer mucho código, un lugar hermoso para ponernos a leer código es GitHub. Debemos leer mucho y hacerlo de forma muy constante.

**Mejores prácticas**
‌
No vamos a reinventar la rueda, hay muchas personas que ya han solucionado los problemas más comunes, tenemos que usar estas soluciones, a estas soluciones se les llama: patrones de diseño.

‌**Ética**
‌
Esta es la parte más importante de ser un profesional. Un buen profesional cumple con los siguientes valores:

‌**Es responsable.**

- Entrega a tiempo sus trabajos.
- Sabe decir que no.
- No hace daño.

**Experiencia**
‌
La experiencia no es algo que se pueda enseñar, tenemos que encontrarla nosotros mismos en el camino a ser profesionales. Todo está en nosotros, tenemos que estudiar y practicar mucho.

- [Slider-JavaScript-pProfesiona.pdf](https://drive.google.com/file/d/1aguACbpRXk84uLBOrcsvBsWjBcGcRN5O/view?usp=sharing)

## Aspectos que destacan a un profesional

<img src="https://i.ibb.co/S7VyP6J/Inforgafia-Profesional-Javascript.jpg" alt="Inforgafia-Profesional-Javascript" border="0">

## Inicio del proyecto

Trabajaremos en el proyecto PlatziVideo, una plataforma de vídeo.

Esta es la base de nuestro proyecto y nos vamos a enfocar en el MediaPlayer. Durante el curso se desarrollarán plugins de forma modular para extender la funcionalidad del MediaPlayer.

En este curso vamos a estar desarrollando una aplicación llamada: Platzi Video. En toda plataforma de video hay un componente especial en el desarrollo, tenemos que saber implementar el MediPlayer, en este curso vamos a estar desarrollando este feature de forma modular, esto quiere decir que vamos a desarrollar plugins que vamos a implementar a nuestro reproductor, extendiéndole sus funcionalidades. Vamos a comenzar con un poco de CSS y HTML ya escrito.

**Primer paso**

Crearemos nuestros primeros archivos usando `npm init -y`, donde `-y` es una bandera que le dicta a npm que le diga sí a todas las preguntas que haga.

```bash
npm init -y
```
Esto nos creará un archivo package.json que lo sustituiremos por el siguiente:

```json
{
"name": "platzi-media-player",
"version": "1.0.0",
"description": "Proyecto del Curso Profesional de JavaScript de la Escuela de JavaScript de Platzi.",
"license": "MIT",
"author": "César Augusto Barco <augustopayza@gmail.com>",
"keywords": [
                "platzi"
        ],
"scripts": {
                "start": "live-server"
        },
"devDependencies": {
        "live-server": "^1.2.1"
    }
}
```

Una vez tengamos todo esto listo vamos a proceder a instalar nuestro live-server para empezar a trabajar. Para instalar esto vamos a usar el siguiente `comando npm i -D` live-server donde i significa install y la bandera -D development, esto quiere decir que no lo vamos a usar en producción.

Una vez instalado ya lo podremos usar con el package.json que dejé arriba. Lo usaremos con el comando start que llamará a su vez a live-server.

Antes de ejecutar este vamos a implementar varios archivos. Estos serán los siguientes:

```js
{% file src="../.gitbook/assets/index.html" caption="HTML" %}

{% file src="../.gitbook/assets/index.css" caption="CSS" %}
```

También cualquier video que tengamos en nuestra PC. Nuestras carpetas tienen que quedar de la siguiente forma:

<img src="https://i.ibb.co/vc6RsKB/3.png" alt="3" border="0">

Ahora sí vamos a ejecutar nuestro pequeña aplicación.

```bash
npm start
```

Nuestra pequeña aplicación andará en la IP que nos muestre la terminal.

<img src="https://i.ibb.co/pjFfn1z/4.png" alt="4" border="0">

**¿Qué sigue?**
‌
Tenemos un botón que no funciona, lo vamos a poner a funcionar con un `media query.` Abrimos nuestras etiquetas de script.

Tenemos un vídeo que debemos manipular, lo vamos a hacer con `querySelector(""),` a este tenemos que pasarlo un elemento, en este caso será video, es el único elemento video en nuestro `HTML`. Tambien debemos traer nuestro botón con `querySelector`.

``` JS
const  video = document.querySelector("video");
const  button = document.querySelector("button");
```

Cuando le demos click a nuestro botón queremos que el vídeo se reproduzca. Lo hacemos de la siguiente manera:

``` JS
button.onclick = ()=>  video.play()
```

El `video.play()` se saca de la API que trae el navegador, todos los elementos del DOM traen un API. Para saber cuales son las opciones de esta API podemos ir a MDN a ver toda la documentación. No podemos darle play de una vez a penas se entre en la página, esto pasa por que los navegadores tienen una seguridad que no permite que esto pase, solo se puede dar play si el usuario tiene la libertad de hacerlo.

Ahora nuestro código no es muy extensible, vamos a lograr esto usando prototipado. Para hacerlo extensible se pueden usar clases, pero en este caso usaremos `protitype`, usaremos el siguiente código para lograrlo.

``` JS
const  video = document.querySelector("video");

const  button = document.querySelector("button");

function  MediaPlayer(){}

MediaPlayer.prototype.play = function() {

 video.play()

}

const  player = new  MediaPlayer()

button.onclick = () =>  player.play();
```

Explicación:

‌
Creamos una función llamada mediaPlayer que nos servirá como prototipo.

A mediaPlayer le asignamos una función llamada play usando prototype. Esta función le dará inicio al video.

Luego con el botón se acciona una función llamada player que es una instancia del prototipo mediaPlayer que creamos. La instancia se crea usando la palabra new.

Hagámoslo más reutilizable
‌
Para que nuestro código sea más reutilizable debemos hacerlo de esta manera:

``` JS
const  video = document.querySelector("video");
const  button = document.querySelector("button");

function  MediaPlayer(config) {
 this.media = config.el;
}

MediaPlayer.prototype.play = function() {
 this.media.play();
};

const  player = new  MediaPlayer({ el:  video });
button.onclick = () =>  player.play();
```
‌
**Explicación:**

A nuestra función madre o prototipo le pasamos una configuración. Esta configuración lo que va a tener es el elemento video original. Le asignamos a this.media el elemento video.

A la función extendida le asignamos `play()` a this.media para que se ejecute cuando presionemos el botón.

En nuestra función especial player es una instancia del prototipo le asignaremos el valor de video para que lo reciba en configuración. Esto lo haremos con destructuración de objetos.


Acá no podemos usar arrow function por que el valor de this es global. Más adelante se verá con más detalle.

Para agregarle la funcionalidad de pausa y play con el mismo botón, debemos condicionar la función play de MediaPlayer de la siguiente manera:

```js
MediaPlayer.prototype.play = function() {
 if(this.media.paused){
	 this.media.play();
 } else {
	 this.media.pause()
 }

 // o podemos usar lo siguiente:

 // this.media.paused ? this.media.play() : this.media.pause()

};
```

- [BigBuckBunny](https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4)

# 2. Repaso de Conceptos Fundamentales

## Cómo llega un script al navegador

El **DOM** es la representación que hace el navegador de un documento HTML.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento DOMContentLoaded lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

Tanto con`asyn` como`defe` podemos hacer llamados asíncronos pero tiene sus diferencias:

  - `async.` Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
  - `defer.` La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.

Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.

<img src="https://i.ibb.co/8BVhw6K/JS.jpg" alt="JS" border="0">

## Scope

El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

### Global Scope

Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página y se declaran fuera de una función o bloque. Aquí hay mucho riesgo de sobreescritura.

### Function Scope

Variables declaradas dentro de una función utilizando var sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

### Block Scope

Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

### Module Scope

Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.

> En la consola puedes leer las variables locales con la palabra window.nombre-de-la-variable.

<img src="https://i.ibb.co/27SLRbb/JS-2.jpg" alt="JS-2" border="0">

<img src="https://i.ibb.co/31ytWgJ/screencapture-notion-so-Scope-ff8f854f1bb742198248a1acc8bfac19-2020-07-22-02-59-47-10d17fe3-2acd-4bb.jpg" alt="screencapture-notion-so-Scope-ff8f854f1bb742198248a1acc8bfac19-2020-07-22-02-59-47-10d17fe3-2acd-4bb" border="0">

## Closures

Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

<img src="https://i.ibb.co/NpGVP1z/closures.jpg" alt="closures" border="0">

## El primer plugin

``` JS
MediaPlayer.prototype.toggleMute = function() {
  this.media.muted = !this.media.muted
}
```

Reto botón de mute:

`index.js`
``` JS
const muteButton = document.querySelector('#btn-mute');
muteButton.onclick = () => player.toggleMute();
```

`MediaPlayer.js`
```js
MediaPlayer.prototype.toggleMute = function () {
  this.media.muted ? this.unmute() : this.mute()
}
```

## this

this se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a `this` directamente y este depende de en que scope nos encontramos:

  - Cuando llamamos a this en `el Global Scope o Function Scope`, se hace referencia al objeto window. A excepción de cuando estamos en strict mode que nos regresará undefined.
  - Cuando llamamos a this desde una función que está contenida en un objeto, this se hace referencia a ese objeto.
  - Cuando llamamos a this desde una `“clase”`, se hace referencia a la instancia generada por el constructor.

<img src="https://i.ibb.co/c1qkk6Z/this.jpg" alt="this" border="0">

## Los métodos call, apply y bind

Estas funciones nos sirven para establecer el valor de this, es decir cambiar el contexto que se va usar cuando la función sea llamada.

Las funciones call, apply y bind son parte del prototipo Function. Toda función usa este prototipo y por lo tanto tiene estas tres funciones.

  - `functionName.call().` Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
  - `functionName.apply().` Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
  - `functionName.bind().` Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.

<img src="https://i.ibb.co/7rm9Sf9/call-apply.jpg" alt="call-apply" border="0">

## Prototype

En Javascript todo son objetos, no tenemos clases, no tenemos ese plano para crear objetos.

Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la `prototype chain`.

La keyword new crea un nuevo objeto que “hereda” todas las propiedades del prototype de otro objeto. No confundir prototype con proto que es sólo una propiedad en cada instancía que apunta al prototipo del que hereda.

<img src="https://i.ibb.co/P1WkLDr/prototype.jpg" alt="prototype" border="0">

## Herencia Prototipal

Por default los objetos en JavaScript tienen cómo prototipo a `Object` que es el punto de partida de todos los objetos, es el prototipo padre. Object es la raíz de todo, por lo tanto tiene un prototipo padre undefined.

Cuando se llama a una función o variable que no se encuentra en el mismo objeto que la llamó, se busca en toda la prototype chain hasta encontrarla o regresar undefined.

La función `hasOwnProperty` sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain.

<img src="https://i.ibb.co/sQKR7kV/herencia-prototipal.jpg" alt="herencia-prototipal" border="0">

# 3. Cómo funciona JavaScript

## Parsers y el Abstract Syntax Tree

El JS Engine recibe el código fuente y lo procesa de la siguiente manera:

  - El `parser` descompone y crea tokens que integran el AST.
  - Se compila a `bytecode` y se ejecuta.
  - Lo que se pueda se `optimiza a machine` code y se reemplaza el código base.

Un `SyntaxError` es lanzado cuando el motor JavaScript encuentra partes que no forman parte de la sintaxis del lenguaje y esto lo logra gracias a que se tiene un AST generado por el parser.

El parser es del 15% al 20% del proceso de ejecución por lo que hay que usar parser del código justo en el momento que lo necesitamos y no antes de saber si se va a usar o no.

<img src="https://i.ibb.co/7J4ZHQP/parsers.png" alt="parsers" border="0">

<img src="https://i.ibb.co/44nYYFD/Js-Parsers.jpg" alt="Js-Parsers" border="0">

- [Esprima](https://esprima.org)
- [AST explorer](https://astexplorer.net/)

## Abstract Syntax Tree en Práctica

- [ESLint - Pluggable JavaScript linter](https://eslint.org/)
- [AST explorer](https://astexplorer.net/#/gist/16fc27fc420f705455f2b42b6c804aa1/d9cc7988c2c743d7edfbb3c3b1abed866c975ee4)


Vamos a usar el AST para crear una regla de eslint, este analizará estéticamente nuestro código a ver si hay que levantar un warning por violar la sintaxis. Muchas de estas reglas ya viene con e eslint, pero podemos agregar nuestras propias reglas. Vamos a usar la herramienta [AST | Explorer](https://astexplorer.net/#/gist/16fc27fc420f705455f2b42b6c804aa1/d9cc7988c2c743d7edfbb3c3b1abed866c975ee4) para experimentar. Usaremos la configuración por defecto, veremos en la parte superior izquierda el código que vamos a ingresar, a la derecha el tree creado, en la parte inferior izquierda las funciones de las reglas y a la derecha de eso la salida de nuestro código.

[leonardomso | 33-js-concepts](https://github.com/leonardomso/33-js-concepts)‌

**Test**
‌

En el link de AST Explorer ya tenemos un código escrito. Donde el la primera entrada tenemos las tareas que debe cumplir nuestro fixer.

``` JS
//JavaScript
const pi = 3.1415;
const half_pi = 1.57075;
// variable constantes
// variables que guarden un numero

// El nombre de la variable tiene que estar en UPPERCASE
```


A la derecha tenemos el árbol completo de todas estas declaraciones y gracias a el podemos manipular, detectar errores o interpretar lo que escribamos. Luego implementamos una función que recibe la declaración de la variable y accedemos a los datos que nos ofrece el AST para lograr cumplir con los requerimientos de nuestro solucionador.

``` JS

export default function(context) {
  return {
    VariableDeclaration(node) {
        // tipo de variable const
          if (node.kind === "const") {
          const declaration = node.declarations[0];

          // asegurarnos que el valor es un numero
          if (typeof declaration.init.value === "number") {
            if (declaration.id.name !== declaration.id.name.toUpperCase()) {
              context.report({
                node: declaration.id,
                message: "El nombre de la constante debe estar en mayúsculas",
                fix: function(fixer) {
                  return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())
                }
              })
            }
          }
        }
    }
  };
};
```

Con `context.report()` podemos mandar un warning y además podemos solucionar el problema que se haya presentado.

## Cómo funciona el JavaScript Engine

Una vez tenemos el AST ahora hay que convertirlo a Bytecode.

`Bytecode` es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador.

`Machine code` es el más bajo nivel, es código binario que va directo al procesador.

`El profiler` se sitúa en medio del bytecode y el optimizador

Cada máquina virtual tiene sus particularidades, por ejemplo V8 tiene algo llamado Hot Functions.

Cuando una sentencia función es ejecutada muy frecuentemente, V8 la denomina como una hot function y hace una optimización que consiste en convertirla a machine code para no tener que interpretarla de nuevo y agilizar su ejecución.

Cada navegador tiene su implementación de JavaScript Engine:

  - SpiderMonkey - Firefox
  - Chackra - Edge
  - JavaScriptCore - Safari
  - V8 - Chrome

El script se carga como un **flujo de bytes UTF-16**, ya sea para la **red**, la caché o un **trabajador**, y se pasa a un **decodificador de flujo de bytes.**

<img src="https://i.ibb.co/M7LxhnJ/1.gif" alt="1" border="0">

El decodificador de flujo de bytes decodifica los bytes en `tokens`. Los tokens se envían al `analizador`.

<img src="https://i.ibb.co/ZdmTrq8/2.gif" alt="2" border="0">

El analizador genera **nodos **basados en los tokens, y crea un `Abstract Syntax Tree`.

<img src="https://i.ibb.co/cDnNYVq/3.gif" alt="3" border="0">

El intérprete camina a través de la `AST` y genera `byte code`.

<img src="https://i.ibb.co/YW63WWH/4.gif" alt="4" border="0">

El `byte code` y el `feedback type` se envían al optimizing compiler, que genera `código de máquina` altamente optimizado.

<img src="https://i.ibb.co/ckHfbkB/5.gif" alt="5" border="0">

<img src="https://i.ibb.co/r2ZLNcf/JS-13.jpg" alt="JS-13" border="0">

## Event Loop

El **Event Loop** hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos:

  - **Stack.** Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
  - **Memory Heap.** De forma desorganizada se guarda información de las variables y del scope.
Schedule Tasks. Aquí se agregan a la cola, las tareas programadas para su ejecución.
  - **Task Queue.** Aquí se agregan las tares que ya están listas para pasar al stack y - ser   **ejecutadas.** El stack debe estar vacío para que esto suceda.
  - **MicroTask Queue.** Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.

El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.

> Si la vida fuera tan simple como eso, pero obvio puede ser más complicado te presento  las promesas by: Richard B. Kaufman López

Las funciones son empujadas al call stack cuando son invocadas y se sacan cuando devuelven un valor.

<img src="https://i.ibb.co/Yy2ZZM5/1.gif" alt="1" border="0">

`setTimeOut` es proveído por el navegador, la `Web API` se encarga del `callback` que le pasemos.

<img src="https://i.ibb.co/Wv42mFt/2.gif" alt="2" border="0">

Cuando el timer ha terminado (1000ms en este caso), el `callback` se pasa al `callback queue`

<img src="https://i.ibb.co/sJ5FCQx/3.gif" alt="3" border="0">

El `Event Loop` mira hacia el `callback queue` y al call stack. Si el `call stack` está vacío, este empuja el primer elemento de la cola en el stack.

<img src="https://i.ibb.co/FzbKVYJ/4.gif" alt="4" border="0">

El callback es añadido al call stack para luego ser ejecutado. Una vez retorna un valor, este es sacado de call stack.

<img src="https://i.ibb.co/P42Cbt9/5.gif" alt="5" border="0">

- [✨♻️ JavaScript Visualized: Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
- [Philip Roberts: ¿Que diablos es el "event loop" (bucle de eventos) de todos modos? | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

# 4. Fundamentos Intermedios

## Promesas



## Getters y setters



# 5. Fundamentos Avanzados

## Proxy



## Generators



# 6. APIs del DOM

## Fetch - Cómo cancelar peticiones



## IntersectionObserver



## VisibilityChange



## Service Workers



# 7. TypeScript

## Introducción



## Tipos básicos



## Funciones



## Interfaces



## Clases



## Convertir el proyecto a TypeScript



# 8. Patrones de Diseño

## Qué es un patrón de diseño



## Categorías de patrones de diseño



## Patrón Singleton y Casos de Uso



## Implementación del patrón Singleton



## ¿Cómo funciona el Patrón Observer?



## Implementación del patrón Observer



## Casos de Uso del patrón Observer: Redux



## Patrón Decorator y Casos de Uso



## Implementación del patrón Decorator



# 9. Proyecto: MediaPlayer

## Implementación de plugin de Ads: Desplegando en consola



## Implementación de plugin de Ads: Desplegando en pantalla



## Publicar en npm



# 10. Conclusiones

## Conclusiones
