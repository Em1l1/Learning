# Fundamentos de JavaScript
### Sacha Lifszyc

# Tabla de Contenido

- [1. Introducción al curso](#1.-Introducción-al-curso)
  - [Bienvenidos al Curso de Fundamentos de JavaScript](#Bienvenidos-al-Curso-de-Fundamentos-de-JavaScript)
  - [Repositorio del curso](#Repositorio-del-curso)
- [2. Primeros pasos en JavaScript](#2.-Primeros-pasos-en-JavaScript)
  - [Variables](#Variables)
  - [Variables: Strings](#Variables-Strings)
  - [Variables: Números](#Variables-Números)
  - [Funciones](#Funciones)
  - [El alcance de las funciones](#El-alcance-de-las-funciones)
  - [Objetos](#Objetos)
  - [Desestructurar objetos](#Desestructurar-objetos)
  - [Parámetros como referencia o como valor](#Parámetros-como-referencia-o-como-valor)
  - [Comparaciones en JavaScript](#Comparaciones-en-JavaScript)
- [3. Estructuras de Control y Funciones](#3.-Estructuras-de-Control-y-Funciones)
  - [Condicionales](#Condicionales)
  - [Funciones que retornan valores](#Funciones-que-retornan-valores)
  - [Arrow functions](#Arrow-functions)
  - [Estructuras repetitivas: for](#Estructuras-repetitivas-for)
  - [Estructuras repetitivas: while](#Estructuras-repetitivas-while)
  - [Estructuras repetitivas: do-while](#Estructuras-repetitivas-do-while)
  - [Condicional múltiple: switch](#Condicional-múltiple-switch)
- [4. Arrays](#4.-Arrays)
  - [Introducción a arrays](#Introducción-a-arrays)
  - [Filtrar un array](#Filtrar-un-array)
  - [Transformar un array](#Transformar-un-array)
  - [Reducir un array a un valor](#Reducir-un-array-a-un-valor)
- [5. Programación Orientada a Objetos en JavaScript](#5.-Programación-Orientada-a-Objetos-en-JavaScript)
  - [Cómo funcionan las clases en JavaScript](#Cómo-funcionan-las-clases-en-JavaScript)
  - [Modificando un prototipo](#Modificando-un-prototipo)
  - [El contexto de las funciones: quién es this](#El-contexto-de-las-funciones-quién-es-this)
  - [La verdad oculta sobre las clases en JavaScript](#La-verdad-oculta-sobre-las-clases-en-JavaScript)
  - [Clases en JavaScript](#Clases-en-JavaScript)
- [6. Asincronismo](#6.-Asincronismo)
  - [Funciones como parámetros](#Funciones-como-parámetros)
  - [Cómo funciona el asincronismo en JavaScript](#Cómo-funciona-el-asincronismo-en-JavaScript)
  - [Cómo funciona el tiempo en JavaScript](#Cómo-funciona-el-tiempo-en-JavaScript)
  - [¿Qué pasó con swapi.co?](#¿Qué-pasó-con-swapi-co?)
  - [Callbacks](#Callbacks)
  - [Haciendo múltiples requests](#Haciendo-múltiples-requests)
  - [Manejando el Orden y el Asincronismo en JavaScript](#Manejando-el-Orden-y-el-Asincronismo-en-JavaScript)
  - [Manejo de errores con callbacks](#Manejo-de-errores-con-callbacks)
  - [Promesas](#Promesas)
  - [Promesas Encadenadas](#Promesas-Encadenadas)
  - [Múltiples promesas en paralelo](#Múltiples-promesas-en-paralelo)
  - [Async-await: lo último en asincronismo](#Async-await-lo-último-en-asincronismo)
- [7. Juego de HTML](#7.-Juego-de-HTML)
  - [Comenzando el juego](#Comenzando-el-juego)
  - [Generando una secuencia de números](#Generando-una-secuencia-de-números)
  - [Iluminando la secuencia de colores](#Iluminando-la-secuencia-de-colores)
  - [Obteniendo el input del usuario](#Obteniendo-el-input-del-usuario)
  - [Agregando la verificación del color elegido](#Agregando-la-verificación-del-color-elegido)
  - [Agregando los estados finales del juego](#Agregando-los-estados-finales-del-juego)
  - [Conclusiones del curso](#Conclusiones-del-curso)
- [8. Complementos](#8.-Complementos)
  - [Diferencias entre var, let y const](#Diferencias-entre-var-let-y-const)
  - [Memoización: ahorrando cómputo](#Memoización-ahorrando-cómputo)
  - [¿Hace cuántos días naciste?](#¿Hace-cuántos-días-naciste?)
  - [Funciones recursivas](#Funciones-recursivas)
  - [Entiende los closures de JavaScript](#Entiende-los-closures-de-JavaScript)
  - [Estructuras de datos inmutables](#Estructuras-de-datos-inmutables)
  - [Cambiando de contexto al llamar a una función](#Cambiando-de-contexto-al-llamar-a-una-función)
  - [¿Cuándo hace falta poner el punto y coma al final de la línea?](#¿Cuándo-hace-falta-poner-el-punto-y-coma-al-final-de-la-línea?)

---

# 1. Introducción al curso
  ## Bienvenidos al Curso de Fundamentos de JavaScript

A lo largo del curso aprenderemos las bases sólidas para dominar el lenguaje JavaScript. Veremos desde lo más básico como: variables, tipos de datos y operadores, e iremos avanzando con los condicionales y las estructuras de control. Luego veremos los conceptos relacionados con asincronismo, uno de los aspectos fundamentales de JavaScript, usando callbacks, promesas y async await. Y finalmente crearemos un juego de Simón dice en el que pondremos en práctica todo lo aprendido.

- [Fundamentos JavaScript.pd](https://drive.google.com/file/d/1lG6idKTkkWGgK1aOKMHxuxepN0t3py-W/view?usp=sharing)
  ## Repositorio del curso

Bienvenidos de nuevo al curso.

En este material van a encontrar el enlace directo al repositorio que el profesor va a estar mencionando y utilizando a lo largo de todo el curso.

Están todos los archivos de los que se hará mención. En caso de que tengan alguna duda, usen el sistema de discusiones y estaremos respondiendo a la brevedad.

- [Repositorio del curos de JavaScript | GitHub](https://github.com/platzi/FundamentosJSCurso)

# 2. Primeros pasos en JavaScript
  ## Variables

En este curso utilizaremos la consola de Google Chrome y el editor de texto Atom. También, crearemos una carpeta llamada fundamentos_js.

Para crear un archivo independiente del html utiliza la etiqueta.

**Diferencias entre LET vs VAR**

let permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. Lo anterior diferencia la expresión let de la palabra reservada var, la cual define una variable global o local en una función sin importar el ámbito del bloque.

Cuando usamos let dentro de un bloque, podemos limitar el alcance de la variable a dicho bloque. Notemos la diferencia a con var, cuyo alcance reside dentro de la función donde ha sido declarada la variable.

```javascript
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1
```

  - **var =** Una varible global
  - **const =** Una varible en la cual no se puede cambiar su contenido
  - **let =** Varible que permite declarar variables limitando su alcance

  ## Variables: Strings

**camelCase**

Sabes por que las variables y funciones comienzan en minúscula pero al agregarle una nueva palabra se comienza en mayúscula ?

Una buena practica es que las variables o funciones sean descriptivas.

Y como las haces mas descriptivas, agregándole mas información a tu variable o función, pero

JS no permite declarar variables con espacios entre las palabras

Por lo que se debes declarar la información de forma unida

Por esto la comunidad a tomado la sintaxis camelCase por convención en JS

- **camelCase:** es un tipo de escritura donde las palabras están compuestas y cada palabra agregada comienza en mayúscula.

Para extender un poco el aporte, definire un par de funciones como ilustracion, el camelCase se divide en dos:

- **lowerCamelCase:** Es donde la primer palabra es en minuscula y en las nuevas palabras se comienza con la primer letra en mayuscula.

Ejemplo

```javascript
miFuncion() {
console.log(‘lowerCamelCase’)
}

upperCamelCase*: Es donde la primer letra de cada palabra es en mayuscula
Ejemplo
MiFuncion() {
console.log(‘upperCamelCase’)
}
```

```javascript
var nombre = 'Victor', apellido = 'Juarez'; // Declaracion de variables

var nombreEnMayusculas = nombre.toUpperCase(); // Palabra en mayuscula
var apellidoEnMinusculas = apellido.toLowerCase(); // La palabra en minuscula

var primeraLetraDelNombre = nombre.charAt(0) // Primer caracter de la palabra
var cantidadDeLetrasDellNombre = nombre.length // cantidad de caracteres de la palabra

var nombreCompleto = nombre + ' ' + apellido  // contatenar 

var apellidoCompleto = `${apellido.toUpperCase()} ${nombre}` // Interpolacion de variables

var str = nombre.charAt(1) + nombre.charAt(2) // Aceder a una sub varaible
var str1= nombre.substr(-1)  // Acceder a una sub clase de una variable
```

- [Convenciones de nombres en JavaScript](https://tutobasico.com/convenciones-javascript/)

  - **`UpperCamelCase`** (más conocido como PascalCase), cuando la primera letra de cada una de las palabras es mayúscula. Ejemplo: EjemploDeUpperCamelCase.
  - **`lowerCamelCase`** (o simplemente CamelCase), igual que la anterior con la excepción de que la primera letra es minúscula. Ejemplo: ejemploDeLowerCamelCase
  
## Variables: Números


En esta clase aprenderemos variables de tipo números y las operaciones más comunes en este tipo de variables.

En esta clase veremos operadores matemáticos como:

  - suma ( + )
  - resta ( - )
  - multiplicación
  - división

Recerda que en operaciones con decimales debemos realizar operaciones adicionales para conseguir un resultado preciso. Ej. `var total = ( precioDeVino * 100 * 3) / 100`

Para redondear una operación se utiliza la función: Math.round

```javascript
/* 
    Operadores con numeros:
    para sumar se usa +
    para restar se usa -
    para multiplicar se usa *
    para dividir se usa /
*/

var edad = 24

edad += 1 //lo que ya tenia edad mas 1 (edad vale 25)
edad ++ //lo que vale edad mas 1 (edad vale 26)
edad -= 1 //lo que ya tenia edad menos 1 (edad vale 25)
edad -- //lo que ya tenia edad menos 1 (edad vale 24)

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100 //redondear una cantidad con Math.round()
var totalStr = total.toFixed(2) //toFixed(n) para tomar en cuenta n cantidad de decimales que queremos
var total2 = parseFloat(totalStr) //parsear de un string a un float (convertir de texto a numero decimal)


var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / personas
```

  ## Funciones

Las funciones son fracciones de código reutilizable. En esta clase aprenderemos a definir e invocar nuestras funciones. Para definir una función utilizaremos la palabra reservada ““function””.

Delimitamos el cuerpo de la función usando llaves { }. Los parámetros de la función son variables que se pasan a la función escribíendolos entre paréntesis ()

Definir funciones nos sirve para reutilizar código. JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código sin importar si los parámetros que le pasemos a la función estén invertidos o incluso incompletos.

En general la **comilla invertida** nos permite mas eficiencia al tener que concatenar varias lineas de codigo o concatenar texto con variables.

Por ejemplo:

  - Comilla simple

```javascript
function imprimirEdad(n,e){
    console.log(n + ' tiene '+ e + ' años')
}
```

  - Comilla invertida

```javascript
function imprimirEdad(n,e){
    console.log(`${n} tiene ${e} años`)
}
```

Para agregar variables dentro de las comillas simplemente se utiliza la siguiente expresion `${variable}`

- [Tipos de datos y estructuras en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
  ## El alcance de las funciones

En esta clase hablaremos del alcance que tienen las funciones. Si una variable no está definida dentro del cuerpo de una función hablamos de una variable global. Por el contrario, una variable definida dentro de una función es una variable local.

Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.

Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.

Hace referencia a cuáles variables puede acceder una funcion y el valor que tienen al momento de invocar la funcion.

  - **Variable global:** Variable que no esta definida dentro de una funcion sino por fuera de ella.
Al hacer referencia directa a una variable global dentro de una funcion, podermos modificar su valor, esto se le denomina sideEfect, y esto lo vamos a querer evitar.

Para acceder a la variable global, hacemos referencia al objeto global, en este caso por estar en el browser accedemos con `window.nombre`

```javascript
var nombre = 'Cocosette'

function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas() 
```

El alcance de la siguiente funcion solo es para la variable local que le llega por parametro

```javascript
function imprimirNombreEnMayusculas1(n) {
    n = n.toLowerCase()
    console.log(n)
}

imprimirNombreEnMayusculas1(nombre)
```

El alcance de la siguiente funcion no modifica la varaible global. Utilizar `nombre` el la funcion, esta solo queda al alcance de la funcion.

```javascript
function imprimirNombreEnMayusculas1(nombre) {
    nombre = nombre.toLowerCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas1(nombre)
```

  ## Objetos

Los objetos se definen con `{} (llaves) `para asignarlo a una variable se hace de esta manera `var ejemplo = {}`

Los objetos se componen por propiedades y valores, se utiliza ’,' para separar cada propiedad.

```javascript
var miObjeto = {
	//propiedad: 'valor'
	direccion: 'Alguna direccion, caracas, venezuela',
	//key:	     'value' (en ingles)
	codigoPostal: '1020'
}
```

Los objectos pueden recibir como valor en sus propiedades, cadenas de texto (string), valores numericos (int) y booleanos. Tambien puedes realizar operaciones dentro de los valores.

Ejemplo:

```javascript
let objeto2 = {
	'string' : 'Hola soy una cadena de texto',
	'int': 123,
	'boolTrue': true,
	'boolFalse': false,
	'sumar': 5+5,
	'minuscula': 'TEXTO'.toLowerCase()
}
```

Los objetos se pueden enviar por para parámetro a alguna función de esta manera:

```javascript
function suma({n1,n2}){
	var operacion = n1 + n2
	console.log(operacion)
}

var miSuma = {
	n1: 5,
	n2: 10
}

suma(miSuma) // Salida ->15
suma({n1:100, n2: 100 + 50}) // Salida -> 250
suma({n1: 100 - 1, n2: (200 * 2) + 1  }) // Salida -> 500
```

  ## Desestructurar objetos

En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. Ej var{nombre} = persona

Reto: resolver la función que está comentada al final del ejercicio.

```javascript
var obj1 = {
	obj2 : {
		nombre: 'victor',
		edad: 19
	}
}

function saludar(obj){
	var {nombre, edad} = obj.obj2
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
saludar(obj1) // Salida ->  Hola me llamo victor y tengo 19 años
```

```javascript
function saludar({ obj2: { nombre, edad } }){
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
```

  ## Parámetros como referencia o como valor

Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

Ejemplo: Cambiar el objeto o hacer una referencia del objeto. Conservando ambos objetos sin modificar y modificado.

- Modificando los parametros establecidos al objeto

```javascript
function happyYear(persona) {
  persona.edad += 1
}
```

- Crear un de referenca, conservando las nuevas modificaciones.

```javascript
function happyYear(persona) {
  return {
    ...persona, 
    edad: persona.edad + 1
  }
}
```

  ## Comparaciones en JavaScript

Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a `X` un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual `(==)`. Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual `(===)`. Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

  - `Boolean`
  - `Null`
  - `Undefined`
  - `Number`
  - `String`

  ```javascript
  Boolean:  // false/true
  Null:  // nulo o "vacío"
  Undefined: // Cuando una variable es declarada pero aún no tiene un valor   asignado 
  Number: // 383839
  String:  // "esto es una string"
  ```

# 3. Estructuras de Control y Funciones
  ## Condicionales

En esta clase empezaremos a trabajar con estructuras de control, éstas nos permiten decidir el flujo de nuestro código.

Empezaremos con los condicionales. Los condicionales nos permiten decidir si un código se ejecuta o no. También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso o verdadero. Mediante un condicional `(if)` decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.

  - Nos permite interpolar variables

```javascript
  `${}`= template.string  
```

Ejemplo:

```javascript
ar victor = {
  nombre: 'Victor',
  apellido: 'Juarez',
  edad: 15,
}

function imprimirEdad(persona) {
  console.log(`$(persona.edad) es: `)

  if (persona.edad >= 18){
    console.log('Es mayor de edad')
  } else {
    console.log('Es menor de edad');
  }
}

imprimirEdad(victor)
```
  ## Funciones que retornan valores

En esta clase seguiremos trabajando con condicionales para desglosar las funciones en funciones más pequeñas que retornen un valor.

Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. Para ello utilizamos los símbolos `>=`.

Return detiene la ejecución de una función y devuelve el valor de esa función.

Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o minúsculas. Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.

  -  Para indinicar constantes se usa const. Es una buena practica nombrarla con mayusculas 😄

Ya casi no se usa el var, es mejor usar let, por que esta ultima respeta el scope de las funciones 😄

 el scope es el alcance que tienen las variables dependiendo de donde esten declaradas. Ejemplo:

  -Aqui la variable i solo existe dentro del bloque for:

```javascript
for(let i = 0; i < 10; i++) {
	// Algo de codigo
	// Si en vez de let, la variable usara var... La variable i seria usable desde cualquier punto del codigo!
}
```

  - Aqui la variable nombre esta disponible solamente dentro de la funcion:

```javascript
function saludar(nombre) {
	// Algo de codigo
}
```

  - Aqui la variable esta definida al inicio del archivo, asi que esta disponible desde cualquier punto del codigo

```javascript
let nombreCool = 'TuNombre'
```

```javascript
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD //18  Magic numver
}


function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(victor)
```

  ## Arrow functions

En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.

Ejempls de arrow function

```javascript
var MAYORIA_DE_EDAD = 18;

var camilo = {
    nombre: "Camilo",
    edad: 12,
};

var daniel = {
    nombre: "Daniel",
    edad: 22,
};


const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;


const imprimirSiEsMayorDeEdad = persona => esMayorDeEdad(persona)?
console.log(`${persona.nombre} es mayor de edad`) : 
console.log(`${persona.nombre} es menor de edad`);


const permitirAcceso = perosna => !esMayorDeEdad(perosna)? 
console.log(`ACCESO DENEGADO`) :
console.log(`PERMITIR ACCESO`);
```

- [Operador condicional | ternario](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

  ## Estructuras repetitivas: for

En esta clase estudiaremos una de las estructuras básicas de control. El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. `for( ){ }`. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro las llaves irán las instrucciones que se deben repetir.

En este ejemplo la variable i la utilizamos como contador.

  ## Estructuras repetitivas: while

En esta clase estudiaremos otra estructura repetitiva llamada while. While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos. En caso de que quieras verificar tu código, debes utilizar un debugger. El código se detiene cada vez que lee esta palabra.

```js
while (condición) {
    // Este código se va a ejecutar siempre a menos que la condicion cambie
}
```

  ## Estructuras repetitivas: do-while

Otra estructura repetitiva es el do-while. A diferencia de la instrucción while, un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.

Desafío:

```js
var contador = 0;

var llueve = () => Math.random()>0.25;

do{
  contador++;
}while(!llueve());

var frecuencia = contador===1 ? "vez":"veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);
```

  ## Condicional múltiple: switch

Una ultima estructura de control se llama switch. Switch se utiliza para realizar diferentes acciones basadas en múltiples condiciones.

Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.

Break, sirve para que el browser se salte un bucle.

```js
// Objeto que guarda los horoscopos, se imprimen los horoscopos no importando como se escriba May/Min
const horoscopos = {
    aries: '21 marzo - 19 abril',
    tauro: '20 abril - 20 mayo',
    geminis: '21 mayo - 20 junio',
    cancer: '21 junio - 22 julio',
    leo: '23 julio - 22 agosto',
    virgo: '23 agosto - 22 septiembre',
    libra:'23 septiembre - 22 octubre',
    escorpion: '23 octubre - 21 noviembre',
    sagitario: '22 noviembre - 21 diciembre',
    capricornio: '22 diciember - 19 enero',
    acuario: '20 enero - 18 febrero',
    piscis: '19 febrero - 20 marzo'
};

// Evalua el signo y regresa el horóscopo
const calcularSigno = function(signo){
    switch(signo.toLowerCase()){
        case 'aries':
            console.log(horoscopos.aries);
            break;
        case 'tauro':
            console.log(horoscopos.tauro);
            break;
        case 'geminis':
        case 'géminis':
            console.log(horoscopos.geminis);
            break;
        case 'cancer':
        case 'cáncer':
            console.log(horoscopos.cancer);
            break;
        case 'leo':
            console.log(horoscopos.leo);
            break;
        case 'virgo':
            console.log(horoscopos.virgo);
            break;
        case 'libra':
            console.log(horoscopos.libra);
            break;
        case 'escorpion':
        case 'escorpión':
            console.log(horoscopos.escorpion);
            break;
        case 'sagitario':
            console.log(horoscopos.sagitario);
            break;
        case 'capricornio':
            console.log(horoscopos.capricornio);
            break;
        case 'acuario':
            console.log(horoscopos.acuario);
            break;
        case 'piscis':
            console.log(horoscopos.piscis);
            break;
        default:
            console.log('Ese signo no existe');
            break;
    }
};

// Arrow function que sirve para seguir preguntando el signo que quieres ver hasta que se escriba la palabra "salir"
var preguntarSigno = () => signoZodiacal = prompt('¿Cuál es tu signo? escribe salir para que no vuelva a preguntar.');

// Asigna valor a la variable signoZodiacal para entrar al while
preguntarSigno();

// Se ejecuta mientras el usuario no escriba la palabra "salir"
while(signoZodiacal.toLowerCase() !== 'salir'){
    calcularSigno(signoZodiacal);
    preguntarSigno();
}
```

# 4. Arrays
  ## Introducción a arrays

Los arrays son estructuras que nos permiten organizar elementos dentro de una collección. Estos elementos pueden ser números, strings, booleanos, objetos, etc.

**Arrays** 
son estructuras de datos que nos permiten agrupar datos dentro de una colección.

Para indicar que algo es un array utilizamos el símbolo `"[ ]"`
`var personas = []`

Dentro de los corchetes introducimos las variables que deseamos que contenga nuestro array, las variables pueden ser:

  - Números
  - Strings
  - Objetos
  - Funciones

Incluso podemos mezclar diferentes tipos de datos.

Si queremos acceder al 1er elemento de un array , escribimos el nombre del array seguido de los corchetes y el índice 0:

```js 
personas[0]
```

Si queremos acceder a los atributos de alguno de los elementos después del índice del elemento se agrega un “.” seguido del atributo:

```js 
personas[0].altura
```

Otra forma de acceder a los atributos es utilizando corchetes y el atributo pasarlo como un string:

```js 
personas[0].[‘altura’]
```

Se debe tomar en cuenta que estamos utilizando objetos, no colecciones, pero podemos acceder a los atributos.

Los arrays como los strings tienen la propiedad `length`, indicándonos cuantos elementos contiene.

- [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

  ## Filtrar un array

**Prolijo:** Que se lleva a cabo con detenimiento en los más pequeños detalles.

En esta clase aprenderemos como filtrar los arrays. Para filtrar siempre necesitamos establecer una condición. En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

El método `filter ( )` crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

Reto: escribe el filtrado de personas bajas.
  ## Transformar un array

En esta clase veremos cómo transformar un array. El método `map()` itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.

### Las diferencia entre filter() y map() radica en sus callbacks, o sea en lo que retornan.

- **filter():** retornará 1 subconjunto de un Array.

- **map():** retornará un nuevo Array basándose en otro de referencia.

  ## Reducir un array a un valor

El método `reduce()` nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.

```js
const reducer = (acum, { cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.table(`En total todos tienen ${totalDeLibros} libros`)
```

# 5. Programación Orientada a Objetos en JavaScript
  ## Cómo funcionan las clases en JavaScript

  Las clases son funciones cuya sintaxis tiene dos componentes:

  - expresiones
  - declaraciones

En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.

  - Hablar de objetos en javascript es hablar de prototipos.
  - `this` hace referencia al nuevo objeto que se acaba de crear.
  - La función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
  - La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.

  ```js
  function persona(nombre, altura) {
  this.nombre = nombre
  this.altura = altura
  }
  
  persona.prototype.soyAlto = function () {
    console.log(`${this.nombre} ${this.altura >= 1.8 ? 'es una persona' : 'no   es una persona'} alta`);
  }
  
  var sacha = new persona('sacha', 1.88)
  var arturo = new persona('arturo', 1.75)
  ```

  ## Modificando un prototipo

**El prototipo es un objeto más de JS** , a partir de que lo modifiquemos, éste va a quedar modificado.

Es de mucha importancia donde **colocamos las funciones que va a tener el prototipo**. Estos se deben de colocar juntos, ya que con ellos se va creando el prototipo del objeto, y deseamos que tenga juntas todas sus funciones.

**Por ello definimos los prototipos arriba, y los utilizamos a lo largo del código.**

- Cuando tenemos un error en JS, éste no se sigue ejecutando, se corta ahí la ejecución del código.

  ## El contexto de las funciones: quién es this

En esta clase explicamos por qué al introducir el arrow function salió un error. El error del contexto de this en JavaScript es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.

`Window` es el objeto global dentro del navegador.

Cuando this no es lo que esperamos, este es el principal error en JS.

En las **Arrow functions**, se asigna la función , pero cambia el this dentro de la función , ya que trata de tomar el this global, es decir, el que está fuera de la Arrow function.

Para comprobarlo en consola:

```js
this === window
```

  ## La verdad oculta sobre las clases en JavaScript

Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

  ## Clases en JavaScript

Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

  - **Las funciones prototipo se convierten en clases**

```js
 class Persona{}
```

  - Y la herencia se genera usando la palabra reservada extends

```js
class Desarrollador extends Persona{}
```

  - Lo importante es que al crear la herencia, el constructor hijo debe llamar al constructor superior es decir usar la función super() pasandole los parámetros que sean necesarios para la clase padre.

```js
class Desarrollador extends Persona{
	constructor(nombre,apellido,altura)
	super(nombre,apellido,altura)
}
```

  - Las funciones ahora van dentro de la clase y no llevan la palabra clave function

```js
 class Persona{
	//constructor

	saludar(){
		//console.log("hola")
	}
}
```

# 6. Asincronismo
  ## Funciones como parámetros

  En JavaScript, los parámetros de funciones son por defecto undefined. 
  De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.


  ## Cómo funciona el asincronismo en JavaScript

JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia se llama EventLoop.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas al ser completadas. Estas funciones se llaman callbacks, y una vez que el navegador ha regresado con la respuesta, el callback asociado pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando procesos muy pesados, el EventLoop quedará bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.

```js
while(true){
console.warn(' NO VOY A BLOQUEAR EL EVENTLOOP')
}
```

  ## Cómo funciona el tiempo en JavaScript

En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

> No voy a bloquear el Event Loop’ 😄

  ## ¿Qué pasó con swapi.co?

  ### [SWAPI.co](https://swapi.io) ha desaparecido
Desafortunadamente, swapi.co ya no se mantiene y el servicio está actualmente inactivo. El autor del proyecto, Paul Hallett, quien creó y le dio mantenimiento ha desactivado desde hace tiempo esta API que muchos utilizamos en nuestros proyectos de JavaScript para aprender a integrar un backend a un frontend.

### [SWAPI.dev](https://swapi.dev) una nueva solución
Juriy Bura, junto a otros desarrolladores, han publicado una versión idéntica a la API utilizada por Swapi.io, la cual está disponible desde el dominio swapi.dev. Por lo tanto, de ahora en adelante, para continuar el curso sin problemas solo debes reemplazar swapi.io, la URL obliterada (la que ya no funciona), por la nueva versión que sí está disponible: swapi.dev.

Este proyecto es mantenido por la comunidad y gracias a la filosofía del código libre es posible tener una nueva versión de la API para nuestros proyectos.

Crea tu propia API de Star Wars
¿Quieres tener tu propia versión de SWAPI?

El código fuente del proyecto está disponible en GitHub, lo que te permite crear tu propia versión con solo realizar un Fork y subirlo a un servidor o consumirla en tu localhost.
Este es el repositorio del proyecto original: https://github.com/phalt/swapi.

¡Compártenos en los comentarios en link a tu repositorio fork de la API de Star Wars y qué cambios hiciste o planeas hacer en tu versión de este proyecto!

  ## Callbacks
  
En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.

Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción.

- [jQuery CDN](https://code.jquery.com)
- [jQuery](https://jquery.com)
- [The Star Wars API](https://swapi.dev)
  
  ## Haciendo múltiples requests

En esta clase accederemos a múltiples datos al mismo tiempo. Continuaremos trabajando con los jQuery y swapi.

**Requests en Paralelo**

Creamos una nueva función y modificamos levemente el código para hacer el callback ingresando solamente el id:

```js
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}
const onPeopleResponse = function(person){
    console.log(person.name)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}
```
Dado este código.
En qué orden nos llegarán las respuestas?

```js
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//  3
//  2
//  1
```

En este request el resultado llegó en el orden inverso en el que los pedimos.
Por qué sucede esto?
Por el asincronismo de JS.
No sabemos en qué orden nos llegarán las respuestas, esto depende del servidor y de cada uno de los requests.
Iniciamos los requests en un determinado orden pero no sabemos en qué orden van a llegar.

  ## Manejando el Orden y el Asincronismo en JavaScript

  Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. 
  Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.

  - [CallBacks, Promesas, Async/Await](https://medium.com/@jmz12/callbacks-promesas-y-async-await-que-alguien-me-explique-514137cb57e2)

  ## Manejo de errores con callbacks

  Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().

  ## Promesas

En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:

  - pending
  - fullfilled
  - rejected

Las promesas se invocan de la siguiente forma:

```js
new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )
```

No olvides ver el material adjunto de esta clase.

- [Promesas js](https://drive.google.com/file/d/1sI1ZaJK80XmRo4qVRA6Ka9m_GznvObbp/view?usp=sharing)

  ## Promesas Encadenadas

A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.

  ## Múltiples promesas en paralelo

Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a `Promise.all( arregloDePromesas )`, con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.

  ### Multiples Requests en Paralelo

Con promises podemos hacer los requests en paralelo sin alterar el orden de los objetos, lo que mejoraría mucho nuestro código y performance.

Generamos un array con los ids de los personajes que queremos obtener. Y a partir de este vamos a generar otro array con múltiples promesas, donde cada elemento sea una promesa, la promesa de obtener un personaje con su id.

Con el método `map()` vamos a recorrer el array ids y por cada elemento de este vamos a generar uno nuevo que va a ser una _promesa_.

Estas promesas las guardamos en una variable ‘promesas’. A partir de cada objeto del array ids (de cada id) obtenemos una nueva promesa con la función _obtenerPersonaje(id)_.

```js
var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(function(id){
    return obtenerPersonaje(id)
})
```

  #### Expresado en arrow function

```js
var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map( id => obtenerPersonaje(id) )

// (7) [Promise, Promise, Promise, Promise, Promise, Promise, Promise]
```

Cómo obtenemos los valores de estas promesas cuando se resuelvan?
Para esto podemos llamar a un método que tiene la clase de promesas llamado `Promise.all()`

A este le pasamos el array ‘promesas’, le encadenamos el .then() que nos entrega los objetos y depués encadenamos el .catch() que se va a ejecutar si cualquiera de las promesas que tenemos en el array falla.

```js
Promise
    .all(promesas)
    .then( personajes => console.log(personajes))
    .catch(onError)

// (7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
//Si lo desglosamos tenemos en orden las respuestas de cauda una de las promesas.
```

Las promesas tienen un gran potencial por sobre los `callBakc`.
El código queda mucho más prolijo y a demás podemos realizar promesas en paralelo.

Código completo:

```js
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
}

var ids = []
for (let i = 1; i <= 10; i++) {
    ids.push(i)
}
console.log(ids.length)
var promesas = ids.map( id => obtenerPersonaje(id) )

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
```

  ## Async-await: lo último en asincronismo
  
`Async-await` es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a `Promises.all()` dentro de un bloque `try …catch`.

# 7. JueCódigo completo:go de HTML
  ## Comenzando el juego

  Crearemos el juego Simon (Simón dice), en el que se van iluminando una secuencia de botones que el jugador tendrá que ir repitiendo, si se equivoca volverá a comenzar. 
  El juego tendrá 10 niveles de dificultad, que deberán ser superados para ganar.

  ## Generando una secuencia de números

Para generar la secuencia del juego usaremos un array con números aleatorios, que representarán el color del botón que se iluminará cada vez. 
Usamos `new Array()` para crear el arreglo de manera dinámica, y llamamos al método fill para rellenar ese array con ceros y poder luego iterar sobre éste con `map()`

- [Array.prototype.fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [Hacks for Creating JavaScript Arrays](https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/)

  ## Iluminando la secuencia de colores

En esta clase se observa la diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta el alcance de la variable dentro de un ciclo for.
Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.

Siempre que sea posible debemos usar `const` sobre `let`, y `let` sobre `var`.

  ## Obteniendo el input del usuario

Para obtener el input del usuario agregamos un manejador para el evento click del mouse usando addEventListener para cada uno de los colores del juego. Utilizando la propiedad target devuelta por el evento click podemos identificar cuál es el botón que ha sido presionado.

- [This en diferentes situaciones y su comportamiento](https://filisantillan.com/blog/this-en-diferentes-situaciones-y-su-comportamiento/)

  ## Agregando la verificación del color elegido

Para agregar atributos al objeto principal en el que está nuestro código, basta con usar this, haciendo referencia al contexto de la clase, 
y agregar los atributos con un punto: `this.atributo = valor`

La verificación del color elegido la haremos creando y removiendo los eventos del click al pasar el juego a cada nuevo nivel.

- [Code | alanzzant/SimonColors](https://github.com/alanzzant/SimonColors)
- [Simon Colors](https://alanzzant.github.io/SimonColors/)

  ## Agregando los estados finales del juego

Incluiremos una librería de mensajes con estilos mucho más agradables que el mensaje básico de javascript para mostrar los estados finales del juego al usuario.

- [SweetAlert | Js](https://sweetalert.js.org)
- [<cdnjs>](https://cdnjs.com/libraries/sweetalert)

  ## Conclusiones del curso

Felicitaciones, ya tienes unas bases sólidas para continuar aprendiendo frameworks más avanzados basados en JavaScript.

# 8. Complementos
  ## Diferencias entre var, let y const

`var` es la manera más antigua de declarar variables. No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma, dichas variables podrán ser accedidas, e incluso modificadas, tanto dentro como fuera de los bloques internos en una función.
Con `let` por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque la variable no existe.
Una vez declarada la variable con let, no se puede volver a declarar con en ninguna otra parte de la función.

`const` al igual que `let` se define en el contexto o alcance de un bloque, a diferencia de `let` y `var`, las variables definidas como constantes `(const)`,
ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras sea posible.



  ## Memoización: ahorrando cómputo

  ## ¿Hace cuántos días naciste?

  ## Funciones recursivas

  ## Entiende los closures de JavaScript

  ## Estructuras de datos inmutables

  ## Cambiando de contexto al llamar a una función

  ## ¿Cuándo hace falta poner el punto y coma al final de la línea?
