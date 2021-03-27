# ECMAScript 6+

### Oscar Barajas

- [1. Bienvenida al curso](#1-Bienvenida-al-curso)
  - [Bienvenida al curso y qué es ECMAScript](#Bienvenida-al-curso-y-qué-es-ECMAScript)
- [2. ¿Qué se implementó en ES6?](#2-¿Qué-se-implementó-en-ES6?)
  - [Default Params y Concatenación](#Default-Params-y-Concatenación)
  - [LET y CONST, Multilínea, Spread Operator y Desestructuración](#LET-y-CONST-Multilínea-Spread-Operator-y-Desestructuración)
  - [Arrow Functions, Promesas y Parámetros en objetos](#Arrow-Functions-Promesas-y-Parámetros-en-objetos)
  - [Clases, Módulos y Generadores](#Clases-Módulos-y-Generadores)
- [3. ¿Qué se implementó en ES7?](#3-¿Qué-se-implementó-en-ES7?)
  - [¿Qué se implementó en ES7?](#¿Qué-se-implementó-en-ES7?)
- [4. ¿Qué se implementó en ES8?](#4-¿Qué-se-implementó-en-ES8?)
  - [¿Qué se implementó en ES8?](#¿Qué-se-implementó-en-ES8?)
  - [Async Await](#Async-Await)
- [5. Actualidad y próximos pasos de ECMAScript](#5-Actualidad-y-próximos-pasos-de-ECMAScript)
  - [¿Qué se implementó en ES9?](#¿Qué-se-implementó-en-ES9?)
  - [¿Qué se implementó en ES10?](#¿Qué-se-implementó-en-ES10?)
  - [TC39 y Cierre del curso](#TC39-y-Cierre-del-curso)

---

## 1. Bienvenida al curso

### Bienvenida al curso y qué es ECMAScript

- [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

## 2. ¿Qué se implementó en ES6?

### Default Params y Concatenación

- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

- [Specifying JavaScript](https://tc39.es)

### LET y CONST, Multilínea, Spread Operator y Desestructuración

- `Var`: tiene un Scope de función
- `Let` y `Const`: tienen un Scope de bloque

- [La diferencia entre let y var en Javascript](https://platzi.com/blog/la-diferencia-entre-let-y-var/)


### Arrow Functions, Promesas y Parámetros en objetos

- [Difference between regular functions and arrow functions in JavaScript](https://www.tutorialspoint.com/difference-between-regular-functions-and-arrow-functions-in-javascript)

```js
composicion - newPromise()
resolve() - comportamiento al cumplir la promesa
reject() - comportamiento al fallar la promesa
.then (⇒) - obtener el valor del resolve
.error(⇒) - obtener el valor del reject()
```

### Clases, Módulos y Generadores

```js
/ module
// import const hello = () => 'hello';
import { hello } from './module'

hello();

// generator
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
```
## 3. ¿Qué se implementó en ES7?

### ¿Qué se implementó en ES7?

```js
let numbers = [1,2,3,4,7,8];

if (numbers.includes(7)) {
  console.log('Si se encuentra el valor 7');
} else {
  console.log('No se encuentra.')
}

let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result)
```

## 4. ¿Qué se implementó en ES8?

## ¿Qué se implementó en ES8?

ES8

- [async / await](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/await)

- Object.entries: convertir un objeto a un matriz donde los propiedades de objeto clave, valor se transformarán en un arreglo [clave,valor](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)

- Object.values: :devuelve los valores de un objeto convertidos en un arreglo.
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/values

- “texto”.padStart() | “texto”.padEnd()
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/padStart
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd

## Async Await

- [Las promesas y async await lógicamente no son iguales](https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/)

## 5. Actualidad y próximos pasos de ECMAScript

### ¿Qué se implementó en ES9?

- [Promise.prototype.finally()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

### ¿Qué se implementó en ES10?

- **`Array.prototype.flat(nivel_de_profundidad):`** un nuevo método que nos permite aplanar arreglos.
- **`Array.prototype.flatMap()`** lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
- **`String.prototype.trimStart() | String.prototype.trimEnd()`** permite quitar los espacios al inicio o al final dependiendo de la funciona.
- **`try/catch`**: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
- **`Object.fromEntries()`** lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
- **`Symbol.prototype.description:`** permite regresar el descripcion opcional del [Symbol](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)

### TC39 y Cierre del curso

- [Specifying JavaScript](https://tc39.es)
