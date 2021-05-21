<h1> Closures y Scope en JavaScript</h1>

<h3>Oscar Barajas Tavares</h3>

<h1>Tabal de Contenido</h1>

- [1. Bienvenida](#1-bienvenida)
  - [Introducción y bienvenida al curso](#introducción-y-bienvenida-al-curso)
- [2. Scope](#2-scope)
  - [Qué es el Scope y cómo funciona el Global Scope](#qué-es-el-scope-y-cómo-funciona-el-global-scope)
  - [Local Scope](#local-scope)
  - [Function Scope](#function-scope)
  - [Block Scope](#block-scope)
- [3. Closure](#3-closure)
  - [¿Qué es un closure?](#qué-es-un-closure)
  - [Ámbito léxico en closures](#ámbito-léxico-en-closures)
  - [Cómo crear variables privadas con closures](#cómo-crear-variables-privadas-con-closures)
  - [Loops](#loops)
- [4. Hoisting](#4-hoisting)
  - [¿Qué es el hoisting?](#qué-es-el-hoisting)
- [5. Debugging](#5-debugging)
  - [Debugging](#debugging)
- [6. Cierre](#6-cierre)
  - [Conclusiones](#conclusiones)


# 1. Bienvenida

## Introducción y bienvenida al curso

- [GitHub - platzi/curso-scope-closure](https://github.com/platzi/curso-scope-closure/tree/master)

# 2. Scope

## Qué es el Scope y cómo funciona el Global Scope

- `Scope:` Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable.

- `Global Scope :` No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

Con var podemos re-asignar una variable pero es una mala práctica.

Con let y const no podemos, aparecerá un error.

Es una mala práctica crear una variable sin las palabras reservadas: `var`, `let` y `const`.
Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.

La doble asignación de una variable también es una mala práctica.

Al declarar la variable con var podemos declarar nuevamente la variable.

```js
// Esto no causa error
var hVar = 'hVar'
var hVar = 'hVar...'
```

No así cuando se utiliza `let` o `const`.

```js
// Esto genera un SyntaxError debido a que la variable hlet se intenta declarar por segunda vez.
let hlet = 'hlet'
let hlet = 'hlet...'
```

Pero si podemos asignar un nuevo valor

```js
let hlet = 'hlet'
hlet = 'hlet_update'
```

Con `const` no podemos declarar la variable nuevamente y tampoco podemos asignar valor por segunda vez

```js
// error
const hconst = 'hlet'
const hconst = 'hlet'
// error
const hconst = 'hlet' 
hconst = 'hlet'
```

- [Download Visual Studio Code - Mac, Linux, Windows](https://code.visualstudio.com/download)
- [Code Runner - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

## Local Scope

Lexical Scope / Ámbito Léxico: El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.

El scope se puede definir como el alcance que puede tener una variable en tu codigo.

El Local Scope: se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

El ambito lexico: se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.

El `scope local` nos permite acceder una variable en un bloque de código o estructura, como las funciones. Por lo tanto el scope global no puede acceder a las variables dentro de un bloque de código.

Si se anida una `función` dentro de otra, las variables de la primera función van a poder ser accedidas dentro de la segunda.

## Function Scope

Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

Las variables escritas con la palabra clave `let` no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado:

```js
let fruit = "apple";
fruit = "banana";

console.log(fruit); // banana
```

Las variables escritas con la palabra clave const no pueden ser redeclaradas o reasignadas, ya que const quiere decir que su valor será constante, es decir que no va a cambiar.

## Block Scope

# 3. Closure

## ¿Qué es un closure?


## Ámbito léxico en closures


## Cómo crear variables privadas con closures


## Loops

# 4. Hoisting

## ¿Qué es el hoisting?



# 5. Debugging

## Debugging



# 6. Cierre

## Conclusiones

