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

3. Estructuras de Control y Funciones
Condicionales
Funciones que retornan valores
Arrow functions
Estructuras repetitivas: for
Estructuras repetitivas: while
Estructuras repetitivas: do-while
Condicional múltiple: switch
4. Arrays
Introducción a arrays
Filtrar un array
Transformar un array
Reducir un array a un valor
5. Programación Orientada a Objetos en JavaScript
Cómo funcionan las clases en JavaScript
Modificando un prototipo
El contexto de las funciones: quién es this
La verdad oculta sobre las clases en JavaScript
Clases en JavaScript
6. Asincronismo
Funciones como parámetros
Cómo funciona el asincronismo en JavaScript
Cómo funciona el tiempo en JavaScript
¿Qué pasó con swapi.co?
Callbacks
Haciendo múltiples requests
Manejando el Orden y el Asincronismo en JavaScript
Manejo de errores con callbacks
Promesas
Promesas Encadenadas
Múltiples promesas en paralelo
Async-await: lo último en asincronismo
7. Juego de HTML
Comenzando el juego
Generando una secuencia de números
Iluminando la secuencia de colores
Obteniendo el input del usuario
Agregando la verificación del color elegido
Agregando los estados finales del juego
Conclusiones del curso
8. Complementos
Diferencias entre var, let y const
Memoización: ahorrando cómputo
¿Hace cuántos días naciste?
Funciones recursivas
Entiende los closures de JavaScript
Estructuras de datos inmutables
Cambiando de contexto al llamar a una función
¿Cuándo hace falta poner el punto y coma al final de la línea?
Play
Mute
