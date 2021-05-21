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

Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado:

```js
let fruit = "apple";
fruit = "banana";

console.log(fruit); // banana
```

Las variables escritas con la palabra clave const no pueden ser redeclaradas o reasignadas, ya que const quiere decir que su valor será constante, es decir que no va a cambiar.

Creo que hay un error de significado. SI se puede reasignar let, lo que no se puede es redeclarar.

Reasignar:

```js
let a = 1;
a = 2 // correcto
```

Redeclarar:

```js
let a = 1;
let a = 2; //incorrecto
```

var se puede tanto reasignar como redeclarar, y const no se puede ninguna de las dos

- [VAR vs LET vs CONST: TODAS LAS DIFERENCIAS](https://www.youtube.com/watch?v=ojrvxYcKeYg)

# 3. Closure
## ¿Qué es un closure?

Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.

Cuando declaramos una función dentro de nuestro global scope, estamos usando un closure.

```js
var myVar = 'hi';
function myFunction() {
	console.log(myVar);
}
myFuntion(); // hi
```

Los closures son basicamente cuando aprovechamos la habilidad de Javascript de usar las variables que están en el scope padre de nuestro bloque de código, por eso el global scope es un closure grandote; el bloque myFunction puede usar TODAS las variables que están disponibles en el bloque inmediato anterior.

Usando el ejemplo del profesor:
Si tu declaras la variable saveCoins en el global scope, estarías usando el mismo principio que si usas la segunda función que escribe el profesor porque estás usando las variables que están en el scope padre.

```js
var saveCoins = 0;

const moneyBox = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
}

moneyBox(5); //5
moneyBox(10); //15
```

Pero está mal visto modificar variables globales, por eso es que quieres crear variables dentro de un scope cerrado y que interactuen entre ellas, entonces declaras las variables que vas a usar dentro del scope padre del bloque que las va a modificar para que siempre pueda acceder a ellas. Para eso creas un nuevo “global scope” ficticio que va a conservar todas las variables que tú quieras monitorear:

Ahora mira las similitudes entre el codigo de arriba y el que está justo abajo de aquí…

```js
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }
    return countCoins;
}

let myMoneyBox = moneyBox()
myMoneyBox(4)
myMoneyBox(10)
myMoneyBox(6)
```

Si remueves " `const moneyBox = () => {} `" serían exactamente las mismas lineas de código!

```js
//const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }
   // return countCoins; 
//}
```

Lo que estás haciendo es simplemente bajar un nivel tu scope. Quieres que la funcion moneyBox regrese una funcion que estuvo declarada dentro de sí misma porque esa función tiene acceso a ese Scope que ya no va a existir para que alguien más lo use, solamente lo podrá usar la función countCoins. Al guardar el resultado de moneyBox (countCoins) en otra variable estás creando el ámbito léxico que menciona el profesor, necesario para no dejar morir ese scope.

## Ámbito léxico en closures

¿Por qué si le mandamos como parámetro inicial 1, al momento de llamar el closure por primera vez me imprime 1 si lo estoy incrementando?
Bueno, pues yo te lo explico.

Si vemos la estructura de la función

```js
const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    }
    return displayCount;
};
```

Podemos notar que el `console.log()` está de de la siguiente manera

```js
console.log(count++);
```

Y como ves, aparece `count++,` lo que quiere decir que estamos incrementando en 1 el valor de count, pero de la manera que está escrita, primero va a imprimir el count con el valor antes de incrementarlo
Esto se debe a que count++ es lo equivalente a decir` count = count + 1` pero el momento en el que se hará ese incremento, está dado por la posición del `++`, en éste caso, se hará después.
Si quisieramos que se muestre el valor de count después de hacerle el incremento, podríamos hacer ésto:

```js
count++;
console.log(count);
```

O, de una manera más elegante, y aprendiendo como funciona el `++`, así:

```js
console.log(++count);
```

Espero haberte ayudado y suerte en el camino a la maestría 😉

El ámbito léxico es cuando las funciones se ejecutan utilizando la cadena del alcance donde estaban vigente en su momento.

Esto significa que podemos acceder al valor “count” dentro de la función porque es el alcance donde está asignado.

Podemos tener varias formas de manejar la constante “buildCount”, significa que la podemos asignar a myCount y myOtherCount. Trabajaremos con el scope(alcance) que tiene esta variable, poder ejecutarla y empezar a contar desde donde necesitemos.

```js
const buildCount = i => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

const myCount = buildCount(1);
myCount(); // 1
myCount(); // 2
myCount(); // 3

const myOtherCount = buildCount(10);
myOtherCount(); // 10
myOtherCount(); // 11
```

## Cómo crear variables privadas con closures

Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

```js
const person = () => {
  let saveName = "Name";
  return {
    getName: () => saveName,
    setName: (name) => {
      saveName = name;
    },
  };
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Edward');
console.log(newPerson.getName());
```

## Loops

Podemos crear Closures de diferentes formas y también de forma involuntaria, esto significa que no tenemos control de lo que estamos creando, tenemos que tener cuidado con nuestras asignaciones o bloques de código que de alguna manera nosotros no controlemos muchas veces sucede porque no establecimos nuestros elementos correctamente.

Con el uso del Scope y los Closures podemos optimizar nuestros proyectos sin ningún problema.

>  En un loop nunca ocupes var, siempre utiliza let para valores que irán cambiando dentro de la ejecución del scope.

# 4. Hoisting

## ¿Qué es el hoisting?

El ‘levantamiento’ del que hablan es mas a fines didácticos y está bien, pero no es tan así, no es que FISICAMENTE levanta las declaraciones y las pone al principio como muchos explican. Lo que se hace en realidad es tomar ‘registros’ en memoria de donde está cada declaración(todo esto previo a que se ejecute el código en sí) y depende si es var, let, const o una función, JS va a asignarle referencias a cada una.
Si es:

- `var :` asigna la referencia undefined (si de acá viene el famoso undefined)

- `let/const:` asigna la referencia uninitialized(declarado pero no inicializado)

- `función:` guarda un registro con la función entera(por eso la podemos llamar antes de que este creada)

> `Hoisting:` Eleva las declaraciones, esto pasa en el momento en que se compila nuestro código antes de ser interpretado por el navegador. De esta forma podemos asignar nuestros valores o acceder a un valor que previamente no ha sido declarado dentro de esta estructura.

# 5. Debugging

## Debugging

```js
var a = 'Hello';

function hello () {
    let b = 'Hello world';
    const c = 'Hello world!!';
    if (true) {
        let d = '¡¡Hello world!!';
        debugger;
    }
}

hello();
```

> Nada le gana al poderosísimo console.log para debugging jajaja, no en serio, siempre que puedan usen debugger, les será de mucha ayuda ^^

Podemos ver de una forma distinta gracias a Chrome con las Chrome Dev Tools. Si en nuestro programa queremos pausar nuestro codigo en una parte, podemos usar la palabra reservada “debugger”.

Al ejecutar un programa con este programa, Chrome entra al debugger gracias a nuestra declaracion y podemos ver todo lo que esta pasando, el Scope de nuestras variables, la globales . Tambien podemos ver la Call Stack, nuestras asignaciones, agregar breakpoints para saber que esta pasando en cualquier linea de codigo.

# 6. Cierre

## Conclusiones

> Nunca pares de Aprender!