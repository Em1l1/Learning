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

**Explicación**:

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


Para crear las promesas usamos la clase Promise. El constructor de Promise recibe un sólo argumento, un callback con dos parámetros, `resolve` y `reject`. resolve es la función a ejecutar cuando se `resuelve` y `reject` cuando se rechaza.

El `async/await` es sólo syntax sugar de una promesa, por debajo es exactamente lo mismo.

La clase Promise tiene algunos métodos estáticos bastante útiles:

  - `Promise.all.` Da error si una de las promesas es rechazada.
  - `Promise.race.` Regresa sólo la promesa que se resuelva primero.

<img src="https://i.ibb.co/d0Vq68v/promesas.jpg" alt="promesas" border="0">

[API Docs](https://developers.themoviedb.org/3/getting-started/authentication)

## Getters y setters

Los getters y setters son funciones que podemos usar en un objeto para tener propiedades virtuales. Se usan los keywords `set` y `get` para crear estas propiedades.

Estas propiedades al ser funciones pueden llevar una validación de por medio y ser usadas con el operador de asignación como si fueran una variable más dentro del objeto.

<img src="https://i.ibb.co/nwWN3RT/getter-y-setters.jpg" alt="getter-y-setters" border="0">

# 5. Fundamentos Avanzados

## Proxy

El proxy sirve para interceptar la lectura de propiedades de un objeto (los get, y set) entre muchas otras funciones. Así, antes de que la llamada llegue al objeto podemos manipularla con una lógica que nosotros definamos.

<img src="https://i.ibb.co/9gRZXBX/proxy.jpg" alt="proxy" border="0">

- [GitHub - hiddentao/fast-levenshtein: Efficient Javascript implementation of Levenshtein algorithm with locale-specific collator support.](https://github.com/hiddentao/fast-levenshtein)

- [Proxy - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy)

## Generators

Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

Algunas de sus características:

  - Los generadores regresan una función.
  - Empiezan suspendidos y se tiene que llamar next para que ejecuten.
  - Regresan un value y un boolean done que define si ya terminaron.
  - yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.

<img src="https://i.ibb.co/3k3HkR5/geberatirs.jpg" alt="geberatirs" border="0">

# 6. APIs del DOM

## Fetch - Cómo cancelar peticiones

La peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función fetch para esto.

Con fetch tenemos algo llamado AbortController que nos permite enviar una señal a una petición en plena ejecución para detenerla.

<img src="https://i.ibb.co/SQKWjh5/fetch.jpg" alt="fetch" border="0">

## IntersectionObserver

Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.

El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.

<img src="https://i.ibb.co/crhvFqX/Ibtersection-Observer.jpg" alt="Ibtersection-Observer" border="0">

## VisibilityChange

El `visibilityChange` forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

Otros casos de uso para utilizar la [API Page Visibility:](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)


  - Un sitio tiene un carrusel de imágenes que no debería avanzar a la siguiente diapositiva a no ser que el usuario esté viendo la página.

  - Una aplicación que muestra un panel de información y no se quiere que se actualice la información del servidor cuando la página no está visible.

  - Una página quiere detectar cuando se está precargando para poder mantener un recuento preciso de las vistas de página.

  - Un sitio desea desactivar los sonidos cuando el dispositivo está en modo de espera (el usuario presiona el botón de encendido para apagar la pantalla).

<img src="https://i.ibb.co/0qz9PPF/Visibilitychange.jpg" alt="Visibilitychange" border="0">

## Service Workers

Sirven para hacer que nuestras aplicaciones `funcionen Offline`.

Muy usados en las `Progressive Web Apps (PWA)` los ServiceWorkers son una capa que vive entre el navegador y el Internet.

Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.

Un service worker es un servicio intermedio entre nuestro navegador e internet que actúa a modo de proxy y que intercepta toda la comunicación que se produce entre el dispositivo y la red. De este modo, podremos efectuar otras acciones antes de dejar pasar una petición a internet

- [Recomiendo este articulo sobre Service Workers:](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)

# 7. TypeScript

## Introducción

TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.

> Hola gente de 2021 Hay un problema con la version 1.12.4 de Parcel por lo que si intentas hacerlo tal como sale en el video no te va a funcionar, asi qeu debes instalar la version anterior. Para hacerlo ejecuta los siguientes comandos en tu terminal:
>
> ```bash
> # Desinstalar parcel o no lo instalas
> npm uninstall parcel-bundler
> # Instalar parcel en version anterior
> npm i --save-dev parcel-bundler@1.12.3
> ```



- [Parcel](https://parceljs.org)

## Tipos básicos
<img src="https://i.ibb.co/k55x3Gj/JS-25.jpg" alt="JS-25" border="0">

- [Basic Types · TypeScript](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Funciones

En Typescript podemos ser explícitos con el tipo de los argumentos y el tipo de retorno de una función.

<img src="https://i.ibb.co/p2WVFkc/JS-26.jpg" alt="JS-26" border="0">



## Interfaces

Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

<img src="https://i.ibb.co/7ky69Qs/interface.jpg" alt="interface" border="0">

## Clases

En las clases en TypeScript sí existen las propiedades privadas.

Un error, **regenerator.runtime is not defined.**
		Lo solucioné borrando el cache del navegador, borrando la carpeta dist y cache y volviendo a lanzar el servidor de parcel.

En javascript pronto existirán oficialmente variables privadas, por ahora está en stage 3 [una fase antes de ser del standard EcmaScript]([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

## Convertir el proyecto a TypeScript



# 8. Patrones de Diseño

## Qué es un patrón de diseño

Un patrón de diseño resulta ser una solución a un problema de diseño. Para que una solución sea considerada un patrón debe poseer ciertas características.

1. Una de ellas es que debe haber comprobado su efectividad resolviendo problemas similares en ocasiones anteriores.
2. Otra es que debe ser reutilizable, lo que significa que es aplicable a diferentes problemas de diseño en distintas circunstancias

Son soluciones generales ya probadas dentro de un contexto que las limita a problemas frecuentes que nos encontramos en el desarrollo de software.

Son recetas que resuelven problemas que nos enfrentamos frecuentemente en el diseno de software.

Una solucion para un problema dentro de un contexto.

- El contexto es la situacion donde el patron aplica.
- Esta situacion debe ser recuerrente.
- Se refiere a la meta que esta tratando de alcanzar dentro del contexto
- El problema incluye todas las limitaciones que existen dentro de ese contexto.
- Un diseno generico que alcanza la meta dentro del ccontexto

**Beneficios**

- Los patrones de diseno son una caja de herramientas de soluciones bien probadas a problemas comunes en diseno de software
- Te proveen un lenguaje comun que permite comunicarse de forma especifica y eficiente

**Critica**

- Los patrones de diseno son una forma de complejidad
- Son soluciones a las limitaciones de lenguaje de programacion
- “Cuando todo lo que tienes es un martillo, todo te parece un clavo”
- HAY QUE EVITARLOS, USALOS CUANDO ES NECESARIO

**Conclusion**

- Siempre busca pensar en terminos de diseno, no de patrones
- Usa un patron cuando hay una necesidad natural para usarlos
- Si existe una alternativa mas simple, prefierela

**Paginas**
https://every-layout.dev/
https://mediaqueri.es/

## Categorías de patrones de diseño

**Creacionales**. Proveen diferentes mecanismos para crear objetos.

**Estructurales**. Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.

**De Comportamiento**. Gestionan algoritmos y responsabilidades entre objetos.

➡️**Creacionales**
Proveen diferentes mecanismos para crear objetos.

- Abstract Factory

- Builder

- Factory Method

- Prototype

- Singleton

  

  ➡️**Estructurales**
  Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.

- Adapter

- Bridge

- Composite

- Decorator

- Facade

- Flyweight

- Proxy
  
  ➡️**Comportamiento**
  Gestionan algoritmos y responsabilidades entre objetos.

- Chain of Responsibility

- Command

- Interpreter

- Iterator

- Mediator

- Memento

- Observer

- State

- Strategy

- Template Method

- Visitor

  [Design Patterns](https://refactoring.guru/design-patterns)

## Patrón Singleton y Casos de Uso

Es un patrón que te asegura que una clase solo tiene una instancia. Esta única instancia puede ser consumida por cualquier otro objeto.

> “Single” en inglés es “sencillo” (o soltero ¬w¬) así que se puede recordar si se asocia con su significado “Singleton” vendría a ser un objeto o instancia “solterona”.

- **UML** (forma gráfica de representación de un sistema basado en Clases).

- Que **“método”** es como se denomina a una función definida dentro de una clase.

- El término **estático** (que significa que la propiedad o el método no pertenece a las instancias, si no a la clase y es único).
- Qué implica la **visibilidad** (públicos o privados) de los elementos. Cuando algo es público puede ser accedido desde cualquier parte del programa, si es privado sólo la propia clase puede accederlo o usarlo.

<img src="https://i.ibb.co/0Gc93qs/Singleton-UML-class-diagram-svg.png" alt="Singleton-UML-class-diagram-svg" border="0">

PRO TIP: Cuando hacemos un `export`, el mismo se cachea, por lo que cuando lo importamos en otros archivos, siempre devuelve lo mismo.

Mongoose hace uso de esto como alternativa del Patrón de Diseño Singleton.

<img src="https://i.ibb.co/WHF2ZDD/singlenton.jpg" alt="singlenton" border="0">

## Implementación del patrón Singleton

## Singlenton con TS

Uno de los patrones de diseño de creación más populares es el patrón Singleton que restringe la creación de instancias de una clase a un objeto.

En esta publicación, le mostraré cómo usar el patrón junto con TypeScript.

------

## Es genial con TS

La biblia de los patrones de diseño, a saber, el libro de Gang of Four (GoF), presenta la aplicación de patrones utilizando el lenguaje C ++, un lenguaje estáticamente tipado.

**TypeScript permite implementar el patrón Singleton gracias a las siguientes características:**

- **soporte para modificadores de acceso (privado, protegido, público),**
- **soporte para métodos estáticos,**
- **siendo un lenguaje estáticamente escrito.**

------

## Patrón Singleton

En el siguiente ejemplo, *creo la* clase *ActionsBus* que se supone que se instancia solo una vez, ya que debería haber un único punto para enviar una acción. Además, debe ser notificado sobre cada acción en el sistema simplemente suscribiéndose en un lugar.

```typescript
import { BehaviorSubject } from 'rxjs';

interface Action {
  type: string;
}

class ActionsBus {
  private static instance: ActionsBus;
  private actionsSubject = new BehaviorSubject<Action>(null);

  get actions$() {
    return this.actionsSubject.asObservable();
  }

  private constructor() {
  }

  static getInstance(): ActionsBus {
    if (!ActionsBus.instance) {
      ActionsBus.instance = new ActionsBus();
    }

    return ActionsBus.instance;
  }

  dispatch(action: Action) {
    this.actionsSubject.next(action);
  }
}
```

**Los puntos clave son:**

- ***constructor\* con un modificador de acceso privado, para que no sea accesible fuera del cuerpo de la clase,**
- ***instancia\* estática archivada que se supone que hace referencia a la instancia única de la clase,**
- **Método \*getInstance\* estático que se encarga de devolver la instancia de la clase. Además, sigue una estrategia de evaluación perezosa, por lo tanto, debe crear la instancia cuando se llama por primera vez.**

------

## Singleton en acción

Veamos si la clase *ActionsBus* es un singleton, es decir, si solo hay una instancia de la clase.

```js
//illegal since the constructor is private
const illegalActionsBus = new ActionsBus();

const firstActionsBus = ActionsBus.getInstance();
const secondActionsBus = ActionsBus.getInstance();

//both constants reference the same object
console.log(firstActionsBus === secondActionsBus);

firstActionsBus.actions$.subscribe(console.log);
secondActionsBus.dispatch({ type: 'Fetch news' })

//console output
//{type: "Fetch news"}
```

Es ilegal crear la instancia de clase de forma tradicional fuera del cuerpo de la clase. **Para obtener una referencia a la instancia única de \*ActionsBus\* , debe llamar al método estático \*getInstance\* .** Ambas constantes ( *primer / segundo ActionsBus* ) hacen referencia al mismo objeto, por lo tanto, la comparación lógica produce *verdadero* . Por último, pero no menos importante, si se suscribe a la *acción $* stream con la ayuda de la referencia *firstActionsBus* , recibirá una acción enviada utilizando la referencia *secondActionsBus* . Definitivamente confirma que solo hay una instancia de la clase *ActionsBus* en el sistema.

------

## Conclusiones

Espero que les haya gustado la publicación y hayan aprendido algo nuevo. El patrón Singleton es uno de los patrones más fáciles de entender, por lo tanto, es un buen punto de partida para familiarizarse con los patrones. Recuerdo que cuando me uní al mundo de JavaScript, estaba un poco molesto porque, debido a la falta de tipeo, el conocimiento sobre los patrones de diseño no sería tan útil como en Java o C ++. Afortunadamente, TypeScript al rescate!

Un concepto que creo que es importante y no se ha tratado en el curso que ayuda a entender el ejercicio son los métodos estáticos.
Estos nos permiten acceder a ellos sin la necesidad de instanciar la clase a la que pertenecen, por eso es que podemos hacer :

```typescript
Singleton.getInstance();
```

Sin la necesidad de haber instanciado la clase Singleton, es como un tipo de método público por decirlo así.

>  “Los métodos estáticos son llamados sin instanciar su clase. Son habitualmente utilizados para crear funciones para una aplicación.”

## ¿Cómo funciona el Patrón Observer?

En esta clase Richard Kaufman, tu profesor en el Curso profesional de JavaScript, nos explica el funcionamiento del patrón observer y como implementarlo.

El patrón observer se compone de un sujeto que ofrece mecanismos de suscripción y desuscripción a múltiples observadores que quieren ser notificados de los cambios en dicho sujeto. Cada observador expone un método de update que es usado por el sujeto para notificar cualquier cambio a todos los suscritos.

Es uno de los patrones más utilizados, algunos ejemplos típicos son:

- Newsletter
- Sockets
- Listeners en páginas web

***En definitiva, normalmente, se usará el patrón observador cuando un elemento quiere estar pendiente de otro, sin tener que estar comprobando de forma continua si ha cambiado o no.***

**Observer** es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.

> **De comportamiento**: Nos ayuda a resolver problemas relacionados con el comportamiento de la aplicación. Ofrece soluciones respecto a la interacción y responsabilidad entre objetos y clases. Por ejemplo:

> **Observer** (Observador) La definición que provee Wikipedia es bastante entendible y real, dice “Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambie de estado se notifique y actualicen automáticamente todos los objetos que dependen de él.”

## Implementación del patrón Observer

```tsx
interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}


// va a recibir los cambios del precio del BC y les va a informar a sus observadores
class BitcoinPrice implements Subject {
    observers: Observer[] = []

    constructor(){
        const el: HTMLInputElement = document.querySelector("#value")
        el.addEventListener("input", () => {
            this.notify(el.value) // cuando cambie el input notificamos al los observadores
        })
    }

    subscribe (observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex((obs) => {
            return obs === observer
        })
        this.observers.splice(index, 1)
    }

    // cuando el precio cambie queremos notificar a los observadores 
    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement

    constructor(){
        this.el = document.querySelector("#price")
    }

    // cada vez que el sujeto notifica a este observador modificamos el valor
    update(data: any) {
        this.el.innerText = data
    }
}

// instancias para suscribirnos al sujeto
const value = new BitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display) // display esta suscrito a todos los cambios que notifica el sujeto (input)
setTimeout(
    () => value.unsubscribe(display),
    5000
)
```

Básicamente en este patrón todo interactúa entre si, tenemos la clase **Bitcoin Price** que tiene un array **observers**, un constructor con el elemento HTML de donde se tomaran los valores, en el mismo constructor tenemos un evento que activara el método **notify()** en cuando este cambie.

El método **notify** pasara al constructor **PriceDisplay**, quien sera el encargado de actualizar el elemento HTML (el observador).

En el momento que hacemos lo siguiente:

```tsx
const value = new BitcoinPrice();
const display = new PriceDisplay();
value.subscribe(display);
```

Hacemos que surja la conexión, entre el **input** y el elemento HTML que mostrara la actualización.

[![observerjavascript.jpg](https://i.postimg.cc/hjGWcmrV/observerjavascript.jpg)](https://postimg.cc/McgrYvgG)



[![observer-sequence.png](https://i.postimg.cc/0Q43vBrq/observer-sequence.png)](https://postimg.cc/47zwbwz8)

## Casos de Uso del patrón Observer: Redux

https://nodejs.org/api/events.html

Redux es un contenedor predecible del estado de aplicaciones JavaScript.

Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. Además de eso, provee una gran experiencia de desarrollo, gracias a [edición en vivo combinado con un depurador sobre una línea de tiempo](https://github.com/gaearon/redux-devtools).

Puedes usar Redux combinado con [React](https://facebook.github.io/react/), o cual cualquier otra librería de vistas. Es muy pequeño (2kB) y no tiene dependencias.

## Conceptos básicos

Redux de por si es muy simple.

Imagine que el estado de su aplicación se describe como un simble objeto. Por ejemplo, el estado de una aplicación de tareas (TODO List) puede tener el siguiente aspecto:

```js
{
  todos: [{
    text: 'Comer',
    completed: true
  }, {
    text: 'Hacer ejercicio',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

Este objeto es como un “modelo” excepto que no hay *setters*. Esto es así para que diferentes partes del código no puedan cambiar el estado arbitrariamente, causando errores difíciles de reproducir.

Para cambiar algo en el estado, es necesario enviar una acción. Una acción es un simple objeto en JavaScript (observe cómo no introducimos ninguna magia) que describe lo que sucedió. A continuación mostramos algunos ejemplos de acciones:

```js
{ type: 'ADD_TODO', text: 'Ir a nadar a la piscina' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Hacer valer que cada cambio sea descrito como una acción nos permite tener una claro entendimiento de lo que está pasando en la aplicación. Si algo cambió, sabemos por qué cambió. Las acciones son como migas de pan (el rastro) de lo que ha sucedido. Finalmente, para juntar el estado y las acciones entre si, escribimos una función llamada reductor (reducer). Una vez más, nada de magia sobre él asunto, es sólo una función que toma el estado y la acción como argumentos y devuelve el siguiente estado de la aplicación. Sería difícil escribir tal función para una aplicación grande, por lo que escribimos funciones más pequeñas que gestionan partes del estado:

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([{ text: action.text, completed: false }]);
  case 'TOGGLE_TODO':
    return state.map((todo, index) =>
      action.index === index ?
        { text: todo.text, completed: !todo.completed } :
        todo
   )
  default:
    return state;
  }
}
```

Y escribimos otro reductor que gestiona el estado completo de nuestra aplicación llamando a esos dos reductores por sus respectivas *state keys*:

```js
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}
```

Esto es básicamente toda la idea de Redux. Tenga en cuenta que no hemos utilizado ninguna API de Redux. Ya se incluyen algunas utilidades para facilitar este patrón, pero la idea principal es que usted describe cómo su estado se actualiza con el tiempo en respuesta a los objetos de acción, y el 90% del código que se escribe es simplemente JavaScript, sin uso de Redux en si mismo, sus APIs, o cualquier magia.

## Patrón Decorator y Casos de Uso

Añade nuevas responsabilidades a un objeto de forma dinámica permitiendo así extender su funcionalidad sin tener que usar subclases.

## Decorator (patrón de diseño)

El [patrón](https://es.wikipedia.org/wiki/Patrón_de_diseño) **Decorator** responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto. Esto nos permite no tener que crear sucesivas clases que hereden de la primera incorporando la nueva funcionalidad, sino otras que la implementan y se asocian a la primera.

## Motivación

Un ejemplo para poder ver la aplicabilidad del patrón decorador podría ser el siguiente:

- Disponemos de una herramienta para crear interfaces gráﬁcas, que permite añadir funcionalidades como bordes o barras de desplazamiento a cualquier componente de la interfaz.
- Una posible solución sería utilizar la herencia para extender las responsabilidades de la clase. Si optamos por esta solución, estaríamos haciendo un diseño inflexible (estático), ya que el cliente no puede controlar cuándo y cómo decorar el componente con esa propiedad.
- La solución está en encapsular dentro de otro objeto, llamado Decorador, las nuevas responsabilidades. El decorador redirige las peticiones al componente y, además, puede realizar acciones adicionales antes y después de la redirección. De este modo, se pueden añadir decoradores con cualidades añadidas recursivamente.

[![Decorador-Concreto-F.jpg](https://i.postimg.cc/3xCxwggq/Decorador-Concreto-F.jpg)](https://postimg.cc/Js0L6HY3)

- En este diagrama de clases, podemos ver que la interfaz decorador implementa la interfaz del componente, redirigiendo todos los métodos al componente visual que encapsula.
- Las subclases decoradoras refinan los métodos del componente, añadiendo responsabilidades.
- También se puede ver que el cliente no necesita hacer distinción entre los componentes visuales decorados y los sin decorar.

[![Secuencia-F.jpg](https://i.postimg.cc/J72qTXHS/Secuencia-F.jpg)](https://postimg.cc/hhVTvfr0)

## Aplicabilidad

- Añadir responsabilidades a objetos individuales de forma dinámica y transparente
- Responsabilidades de un objeto pueden ser retiradas
- Cuando la extensión mediante la herencia no es viable
- Hay una necesidad de extender la funcionalidad de una clase, pero no hay razones para extenderlo a través de la herencia.
- Existe la necesidad de extender dinámicamente la funcionalidad de un objeto y quizás quitar la funcionalidad extendida.

## Estructura

[![Decorador-Generico2.jpg](https://i.postimg.cc/zvVsRRVK/Decorador-Generico2.jpg)](https://postimg.cc/D43j90Qw)

## Participantes

- **Componente**

Deﬁne la interfaz para los objetos que pueden tener responsabilidades añadidas.

- **Componente Concreto**

Deﬁne un objeto al cual se le pueden agregar responsabilidades adicionales.

- **Decorador**

Mantiene una referencia al componente asociado. Implementa la interfaz de la superclase Componente delegando en el componente asociado.

- **Decorador Concreto**

Añade responsabilidades al componente.

## Colaboraciones

- El decorador redirige las peticiones al componente asociado.
- Opcionalmente puede realizar tareas adicionales antes y después de redirigir la petición.

## Consecuencias

- Más flexible que la herencia. Al utilizar este patrón, se pueden añadir y eliminar responsabilidades en tiempo de ejecución. Además, evita la utilización de la herencia con muchas clases y también, en algunos casos, la herencia múltiple.
- Evita la aparición de clases con muchas responsabilidades en las clases superiores de la jerarquía. Este patrón nos permite ir incorporando de manera incremental responsabilidades.
- Genera gran cantidad de objetos pequeños. El uso de decoradores da como resultado sistemas formados por muchos objetos pequeños y parecidos.
- Puede haber problemas con la identidad de los objetos. Un decorador se comporta como un envoltorio transparente. Pero desde el punto de vista de la identidad de objetos, estos no son idénticos, por lo tanto no deberíamos apoyarnos en la identidad cuando estamos usando decoradores.

## Implementación

El patrón **Decorator** soluciona este problema de una manera mucho más sencilla y extensible.

Se crea a partir de *Ventana* la subclase abstracta *VentanaDecorator* y, heredando de ella, *BordeDecorator* y *BotonDeAyudaDecorator*. *VentanaDecorator* encapsula el comportamiento de *Ventana* y utiliza composición recursiva para que sea posible añadir tantas “capas” de Decorators como se desee. Podemos crear tantos Decorators como queramos heredando de *VentanaDecorator*.

SOLID: los 5 principios que te ayudarán a desarrollar software de calidad

S – Single Responsibility Principle (SRP)
		O – Open/Closed Principle (OCP)
		L – Liskov Substitution Principle (LSP)
		I – Interface Segregation Principle (ISP)
		D – Dependency Inversion Principle (DIP)



## Implementación del patrón Decorator

El patrón decorator está diseñado para solucionar problemas donde la jerarquía con subclasificación no puede ser aplicada, o se requiere de un gran impacto en todas las clases de la jerarquía con el fin de poder lograr el comportamiento esperado. Decorator permite al usuario añadir nuevas funcionalidades a un objeto existente sin alterar su estructura, mediante la adición de nuevas clases que envuelven a la anterior dándole funcionamiento extra.

Estructura del patrón Decorator.

En la imagen podemos apreciar los distintos componentes que conforman el patrón de diseño Decorator los cuales se explican a continuación:

- **IComponent:** Interface que define la estructura minina del componente o componentes que pueden ser decorados.
- **ConcreteComponent:** Implementación de IComponent y define un objeto concreto que puede ser decorado.
- **ComponentDecorator:** Por lo general es una clase abstracta que define la estructura mínima de un Decorador, el cual mínimamente deben de heredar de IComponent y contener alguna subclase de IComponent al cual decorarán.
- **ComponentDecoratorImpl:** Representan todos los decoradores concretos que heredan de ComponentDecorator.

Diagrama de secuencia del patrón Decorator.

1. El *Cliente* realiza una operación sobre el *DecoratorA*.
2. El *DecoratorA* realiza la misma operación sobre *DecoradorB*.
3. El *decoradorB* realiza una acción sobre *ConcreteComponente*.
4. El *DecoradorB* ejecuta una operación de decoración.
5. El *DecoradorA* ejecuta una operación de decoración.
6. El *Cliente* recibe como resultado un objeto decorado por todos los Decoradores, los cuales encapsularon el *Component* en varias capas.

## EJEMPLO DEL MUNDO REAL

Mediante la implementación del patrón de diseño *Decorator* crearemos una aplicación que nos permite procesar un mensaje en capas, donde cada capa se encargará de procesar un mensaje a diferente nivel. primero convertiremos un Objeto en XML, seguido, lo envolveremos en un mensaje SOAP para después encriptar el mensaje, finalmente obtendremos un mensaje SOAP totalmente encriptado, el cual podrá ser enviado de forma segura a un destinatario. Cada capa de procesamiento será implementada con un decorador, y cada decorador podrá cambiar de posición para obtener un resultado diferente, de la misma manera, podrá ser agregados nuevos decoradores en medio de cualquier paso.

***código antes de comenzar***

**`Index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decorator</title>
</head>
<body>
    <a href="/ejercicios/">Go back</a>

    <div style="margin-top: 3rem;">
        <label for="email">Email</label>
        <input id="email">
    </div>
    <script src="/ejercicios/decorator/index.ts"></script>
</body>
</html>
```

**`index.ts`**

```tsx
class Field{
    errors : string[]
    input: HTMLInputElement

    constructor(input:HTMLInputElement){
        this.input=input
        this.errors=[]

        let errorMessage = document.createElement('p')
        errorMessage.className='text-danger'
        this.input.parentNode.insertBefore(errorMessage,this.input.nextSibling)

        this.input.addEventListener('input',()=>{
            this.errors=[]
            this.validate()
            errorMessage.innerText=this.errors[0]||''
        })
    }
    validate(){}
}

function RequiredFieldDecorator(field:Field){
    return field
}

let field = new Field(document.querySelector('#email'))
RequiredFieldDecorator(field)
```

>  WithMemory = Nos va a permitir especificar la cantidad de memoria. Añade nuevas responsabilidades de forma dinámica , permitiendo así extender su funcionalidad sin tener que usar subClases.

> **Decorator** permite al usuario añadir nuevas funcionalidades a un objeto existente sin alterar su estructura, mediante la adición de nuevas clases que envuelven a la anterior dándole funcionamiento extra.

# 9. Proyecto: MediaPlayer

## Implementación de plugin de Ads: Desplegando en consola



## Implementación de plugin de Ads: Desplegando en pantalla



## Publicar en npm



# 10. Conclusiones

## Conclusionesl
