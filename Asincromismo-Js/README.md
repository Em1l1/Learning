<h1>Asincronismo con JavaScript</h1>

<h3>Oscar Barajas</h3>

<h1>Tabla de contenido</h1>


- [1. Apropiar los conceptos de asincronismo](#1-apropiar-los-conceptos-de-asincronismo)
  - [Bienvenida al curso](#bienvenida-al-curso)
  - [Introducción al asincronismo](#introducción-al-asincronismo)
  - [API](#api)
  - [Concurrencia](#concurrencia)
  - [Paralelismo](#paralelismo)
  - [Bloqueante](#bloqueante)
  - [Síncrono](#síncrono)
  - [Asíncrono](#asíncrono)
  - [Call Stack](#call-stack)
  - [Heap](#heap)
  - [Cola o Queue](#cola-o-queue)
  - [Eventloop o Loop de eventos](#eventloop-o-loop-de-eventos)
  - [DOM](#dom)
  - [XML](#xml)
  - [Events](#events)
  - [Transpilar](#transpilar)
  - [Presentación del reto](#presentación-del-reto)
- [2. Desarrollar soluciones utilizando asicronismo](#2-desarrollar-soluciones-utilizando-asicronismo)
  - [Definición Estructura Callback](#definición-estructura-callback)
  - [Comandos NPM usados](#comandos-npm-usados)
  - [¿Qué es un Callback?](#qué-es-un-callback)
  - [Peticiones a APIs usando Callbacks](#peticiones-a-apis-usando-callbacks)
  - [Múltiples Peticiones a un API con Callbacks](#múltiples-peticiones-a-un-api-con-callbacks)
      - [console.log vs console.error](#consolelog-vs-consoleerror)
  - [Implementando Promesas](#implementando-promesas)
  - [Resolver problema con Promesas](#resolver-problema-con-promesas)
  - [Function](#function)
  - [Peticiones](#peticiones)
  - [Conociendo Async/await](#conociendo-asyncawait)
  - [Resolver problema con Async/Await](#resolver-problema-con-asyncawait)
- [3. Comprender las diferencias entre las estructuras asíncronas](#3-comprender-las-diferencias-entre-las-estructuras-asíncronas)
  - [Callbacks Vs Promesas Vs Async/Await](#callbacks-vs-promesas-vs-asyncawait)
  - [Conclusiones](#conclusiones)

# 1. Apropiar los conceptos de asincronismo

## Bienvenida al curso

¡En este curso vamos a aprender sobre callbacks, promesas, async y await!

## Introducción al asincronismo


API
--

Interfaz de programación de aplicaciones (Application Programming Interface). Es un conjunto de
rutinas que provee acceso a funciones de un determinado software.

Concurrencia
--

Cuando dos o más tareas progresan simultáneamente.

Paralelismo
--

Cuando dos o más tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.

Bloqueante
--

Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha
completado. Por tanto el thread queda bloqueado en estado de espera.

Síncrono
--

Es frecuente emplear ‘bloqueante’ y ‘síncrono’ como sinónimos, dando a entender que toda la
operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que
se complete para procesar el resultado.

Asíncrono
--

La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico
como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta
sea procesada en diferido.

Call Stack
--

La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en
que punto del programa estamos, por donde vamos.

Heap
--

Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de
objetos. Es compartida por todo el programa y controlada por un recolector de basura que se
encarga de liberar aquello que no se necesita.

Cola o Queue
--

Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al
de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su
callback correspondiente.

Eventloop o Loop de eventos
--

Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se
procesan los mensajes de la cola. Con cada ‘tick’ del bucle de eventos, se procesa un nuevo
mensaje.
Hoisting
Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del
código en tiempo de compilación.

DOM
--

DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De
hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.

XML
--

Lenguaje de marcado creado para la transferencia de información, legible tanto para seres
humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida
sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del
primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
XML.

Events
--

Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar
una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.
Compilar
Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como
la máquina virtual de Java.

Transpilar
--

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un
programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
original.

- [Aseincronsmoo-JavaScript.pdf](https://drive.google.com/file/d/1YPXXiCmyaIGwVpwaQ6nEWUBmTCEOoQNs/view?usp=sharing)
- [Cómo funciona el asincronismo en JavaScript - YouTube](https://www.youtube.com/watch?v=bWvnWhVCHAc)

## Presentación del reto

1. Consumir la API y obtener cuántos personajes hay en total.
2. Obtener el nombre de cada personaje.
3. Obtener el nombre de la Dimensión a la cual pertenece cada personaje.

- [The Rick and Morty API](https://rickandmortyapi.com)
- [Marvel | API](https://developer.marvel.com/)

# 2. Desarrollar soluciones utilizando asicronismo

## Definición Estructura Callback

> “Es una función que al crearla le pasamos como parámetro una segunda función”

Según lo que entiendo, eso no haría referencia directamente al callback, sino a la función que recibe como parámetro otra función.
Una función que recibe otra función como parámetro se le denomina función de orden superior (higher-order function).
El callback en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe.

Comandos NPM usados
---

- `mkdir`: Crea un carpeta
- `cd`: Movernos a otra carpeta
- `git init`: Establece un repositorio local
- `npm init`: Establece que es el proyecto y lo que se trabaja en el.
- `code .`: Abre VSCode desde la carpeta del proyecto.
- `clear`: Limpia la terminal
- `npm rum callback`: Ejecuta el script creado.
Javascript

- `setTimeOut:` llama a una función o evalúa una expresión después de un
úmero específico de milisegundos.

¿Qué es un Callback?
---
 
"Es una función que al crearla le pasamos como parámetro una segunda función.
 

Al momento de hacer una petición o algún llamado asíncrono ésta se ejecuta después de este llamado.
 
De esta forma es como JavaScript ha implementado el asincronismo"

## Peticiones a APIs usando Callbacks

Una API es una interfaz de programación de aplicaciones (del inglés API: Application Programming Interface).

En simples palabras nos permite consumir contenido de internet, como los personajes de la serie animada o también hay APIs preparadas para guardar información, actualizar o eliminar (CRUD).

1. XMLHttpRequest es la forma antigua de hacer llamados, como el profesor lo menciona usa ese y no Fetch que es el actual, por que no conocemos aùn las promesas y fecth es con promesas, para saber por que el profesor uso OPEN y todas esas funciones aqui està la forma de usar XMLHttpRequest : https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

2. "new Error" que el profesor crea, es una nueva instancia de la clase Error que tiene Javascript, son clases ya implicitas que tiene javascript en este caso es para monstrar bien un mensaje de error podemos usarla, màs informaciòn aqui : https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error.

3. Para los que son fron-end y están aprendiendo de Back, el profesor uso GET por que hace parte de los método http, en este caso necesitamos pedir información a las url ,màs información: https://developer.mozilla.org/es/docs/Web/HTTP/Methods

3. Por ultimo recomiendo una escucha atenta a lo que dice el profesor por que el explica el por que de cada cosa que hace y si no la conoces recomiendo buscarlas en Internet y asì avanzas en el curso.

Los estados de un request de acuerdo a la documentacion:
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

Los Métodos de petición HTTP son los siguientes:

- GET
- HEAD
- POST
- PUT
- DELETE
- CONNECT
- OPTIONS
- TRACE
- PATCH

- [API | star wars](https://swapi.dev/api/)
- [API | rich and morty](https://rickandmortyapi.com/api/character/)


- [Postman | The Collaboration Platform for API Development](https://www.getpostman.com/)


- [AJAX XMLHttpRequest Server Response](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)

## Múltiples Peticiones a un API con Callbacks

#### console.log vs console.error

existen varios tipos de console

```js
console.info("info");
console.error("error");
console.warn("warn");
console.log("log");
generando dos ventajas
```

`Callbacks anidados` que provocan que el código se vuelva difícil de leer y ‘debuggear’; ésta es la principal razón por la cual se debe evitar.

`CallBacks hell`: Son mala práctica y una solución a esto usar promesas

algunos navegadores lo imprimen de diferente color.
permite filtrar mensajes específicos.

- [10 Plugins esenciales de VSCode para Frontends](https://platzi.com/blog/10-plugins-esenciales-para-vscode)

- [Code Spell Checker - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Implementando Promesas

Métodos de las promesas

`Promise.all(iterable)`
Devuelve una de dos promesas:

  - Una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas,

  - o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada.

Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable.

Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

`Promise.race(iterable)`
Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

`Promise.reject(reason)`
Devuelve un objeto Promise que es rechazado con la razón dada.

Las promesas puden suceder:

  - Ahora
  - En el futuro
  - Nunca
  - 
Muy buena definición 😄

Si en el Promise.all pasamos varias promesas por ejemplo pasamos dos promesas con resultado `resolve()` se va imprimir el mensaje de las dos.

Si pasamos las dos promesas con resultado `reject()` solo va imprimir en el navegador un solo reject.

Si colocamos un `resolve()` y un `reject()` va predominar el `reject()` osea solo va imprimir el reject.

## Resolver problema con Promesas

[Metodologia del patito de Hulle](https://www.youtube.com/watch?v=TinCWH9uuQ0)

[Patito de Hule](https://keepcoding.io/blog/oluciona-los-bugs-de-tu-codigo-con-un-pato-de-goma/)

![](https://i.ibb.co/GChHmdn/pato.webp)

👩🏾‍💻 Ponlo en el escritorio y explícale que vas a repasar un bloque de código con él, si no le importa.

👩🏾‍💻 Explícale al pato lo que tu código debe hacer y cuéntaselo en detalle, línea por línea.

👩🏾‍💻 En algún momento, le dirás al pato lo que el siguiente paso debe hacer y entonces te darás cuentas de que no es lo que está haciendo en realidad. El pato permanecerá sentado tranquilamente, feliz de saber que te ha ayudado en tu camino.
Utilizar la metodología del patito de hule, interesante! 🤘

Ayuda mucho para entender los problemas que nos bloquean!

Function
--

```js
// modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// funcion principal
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // instanciamos la conexion
    const xhttp = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open('GET', url_api, true);
    // validacion del llamado
    xhttp.onreadystatechange = (() => {
      // comparamos el 4 porque eso indica que se completo la peticion
      if(xhttp.readyState === 4){
        // verificamos que el status este en 200, 200 es que es correcto
        xhttp.status === 200
          // si esta en 200
          ? resolve(JSON.parse(xhttp.responseText))
          // si no esta en 200
          : reject(new Error('Error ' + url_api))
      }
    });
    // por ultimo enviamos la peticion
    xhttp.send();
  });
}

// exportamos la funcion
module.exports = fetchData;
```

Peticiones
--

```js
// importamos la funcion
const fetchData = require('./../utils/fetchData');
// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then(data => {
    // imprimimos el numero de personajes
    console.log(data.info.count);
    // volvemos a hacer la promesa de pedir algo, en este caso el personaje 1: Rick
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then(data => {
    // esperamos la promesa anterior y vemos el nombre de rick
    console.log(data.name);
    // volvemos a hacer la promesa, pero esta es sobre la dimension de Rick
    return fetchData(data.origin.url)
  })
  .then(data => {
    // vemos la dimension de rick
    console.log(data.dimension);
  })
  // si hay error
  .catch(err => {
    console.log(err);
  })
```

## Conociendo Async/await

Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navagador: “Espera a que la promesa se resuleva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto.

Mas que azucar sintactica, en algunos casos, depende de lo que estemos haciendo es cuando async/await es mucho mas util que utilizar solamente Promises.
Por ejemplo, cuando necesitamos que el contenido de una promesa resuelta esté disponible en diferentes scopes, ya que la respuesta solo estará disponible dentro del scope de las funciones de la respuesta y una vez se resuelva, esta se “destruye” por decirlo de algun modo.

## Resolver problema con Async/Await

Creamos una función async con su estructura `try()catch`. Dentro de `catch()` pedimos que ejecuten tres peticiones. Para acceder a ellas colocamos la palabra reservada await y llamando nuestro fetchData indicamos dentro de sus parámetros la ruta que se debe tomar para acceder a la información que queremos imprimir en cada una de nuestras constantes.
⠀⠀
Después imprimimos los resultados. En `catch()` colocamos que código que queremos imprimir en caso de que no se cumpla la petición de `try()` . Ya por último llamamos la `función anotherFunction();` para ejecutarla.

```js
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch(error) {
    console.error(error)
  }
}

console.log('Before')
anotherFunction(API)
console.log('After')
```

codigo comentado

```js
// traemos nuestra funcion que llamara a la API
const fetchData = require('../utils/fechtData');
// el link de la API
const API = 'https://rickandmortyapi.com/api/character/';

// nuestra funcion asíncrona, le devemos pasar la api
const anotherFunction = async (url_api) => {
  // el TryCatch, para que se maneje de manera sincrónica
  try {
    // esperamos que se aga la primera llamada
    const data = await fetchData(url_api);

    // esperamos que se aga la segunda llamada
    const character = await fetchData(`${API}${data.results[0].id}`)

    // esperamos que se aga la tercera llamada
    const origin = await fetchData(character.origin.url);

    // imprimimos las datos de la api
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);

  } catch (error) {
    // si hay algun error lo mostramos
    console.error(error);
  }
}

console.log('before');
// mandamos a llamar nuestra api
anotherFunction(API);
console.log('After');
```

# 3. Comprender las diferencias entre las estructuras asíncronas

## Callbacks Vs Promesas Vs Async/Await

- [ventajas-y-desventajas.pdf](https://drive.google.com/file/d/1mDrK2zeTak93w1Iz50TuSnEKmUYt15Uk/view?usp=sharing)

## Conclusiones


Ventajas y Desventajas

Callbacks
  - V = Es simple una función que recibe otra función
  - V = Son universales
  - D = Composición tosca
  - D = Callbacks Hell
  - D = Flujo poco intuitivo
  - D = Debemos pensar que estamos haciendo código para humanos y debe ser facil de leer
  - D = if FecthData, if FecthData, if FecthData y se vuelve tedioso y no se maneja excepciones

Promise
  - V = Fácilmente enlazable then y return, then y return y asi
  - V = Es poderoso // es muy recomendado para desarrolladores
  - D = NO maneja excepciones si no maneja un catch al final y seremos propensos a errores
  - D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

Async Await
  - V = El tradicional try - catch y manejar las excepciones de manera mas fluida
  - V = Mas fáciles de leer que sucedera que va a suceder
  - D = Ese poder que podemos decir es decir si queremos algo debemos esperar que algo suceda
  - D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

Nunca pares de Aprender