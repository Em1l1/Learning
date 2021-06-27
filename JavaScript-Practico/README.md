<h1>Curso Práctico de JavaScript</h1>

<h3>Juan David Castro</h3>

<h1>Tabla de Contenido</h1>

- [1. Antes de empezar](#1-antes-de-empezar)
  - [¿Cuál es tu sueño con JavaScript?](#cuál-es-tu-sueño-con-javascript)
  - [Prueba de JavaScript](#prueba-de-javascript)
  - [Configuración del entorno de desarrollo](#configuración-del-entorno-de-desarrollo)
- [2. Taller #1: figuras geométricas](#2-taller-1-figuras-geométricas)
  - [Análisis: cómo calcular figuras geométricas](#análisis-cómo-calcular-figuras-geométricas)
  - [Cómo integrar JavaScript en HTML](#cómo-integrar-javascript-en-html)
  - [Calculando figuras geométricas en JavaScript](#calculando-figuras-geométricas-en-javascript)
  - [Encapsulando código en funciones](#encapsulando-código-en-funciones)
  - [Interactuando con JavaScript desde HTML](#interactuando-con-javascript-desde-html)
  - [Reto: matemáticas con JavaScript](#reto-matemáticas-con-javascript)
- [3. Taller #2: precios y descuentos](#3-taller-2-precios-y-descuentos)
  - [Análisis: cómo calcular porcentajes y descuentos](#análisis-cómo-calcular-porcentajes-y-descuentos)
  - [Crea una página web para calcular descuentos](#crea-una-página-web-para-calcular-descuentos)
  - [Escribiendo HTML desde JavaScript](#escribiendo-html-desde-javascript)
  - [Reto: funciones más inteligentes](#reto-funciones-más-inteligentes)
- [4. Taller #3: promedio, moda y mediana](#4-taller-3-promedio-moda-y-mediana)
  - [Qué es promedio, moda y mediana](#qué-es-promedio-moda-y-mediana)
  - [Calculando el promedio en JavaScript](#calculando-el-promedio-en-javascript)
  - [Calculando la mediana en Javascript](#calculando-la-mediana-en-javascript)
  - [Calculando la moda en Javascript](#calculando-la-moda-en-javascript)
  - [Reto: calcula otros tipos de promedio](#reto-calcula-otros-tipos-de-promedio)
- [5. Taller #4: análisis salarial](#5-taller-4-análisis-salarial)
  - [Análisis: cómo analizar salarios](#análisis-cómo-analizar-salarios)
  - [Calculando la mediana de salarios](#calculando-la-mediana-de-salarios)
  - [Calculando el top 10% de salarios](#calculando-el-top-10-de-salarios)
  - [Reto: simulación de estudio de salarios](#reto-simulación-de-estudio-de-salarios)
- [6. Próximos pasos](#6-próximos-pasos)
  - [Deploy con GitHub Pages](#deploy-con-github-pages)
  - [¿Qué más puedes aprender de JavaScript?](#qué-más-puedes-aprender-de-javascript)

# 1. Antes de empezar

## ¿Cuál es tu sueño con JavaScript?

- [slides-del-curso-practico-de-javascript.pdf](https://drive.google.com/file/d/1H3Slvg4xbxwTDHcmP2PAPakNHYqTY38X/view?usp=sharing)

## Prueba de JavaScript

**Variables y operaciones**
**1️. Responde las siguientes preguntas en la sección de comentarios:**

**- ¿Qué es una variable y para qué sirve?**

  Es un espacio en memoria y el valor que guarda es determinado en ese instante o puede ser modificado en el futuro, se inicializa para guardar informacion.

**- ¿Cuál es la diferencia entre declarar e inicializar una variable?**

  La diferencia es no asignar algun valor `[declarar] `y al iniciar si.

```js
  // Declarar
let variable;

// Inicializar 
variable = true;
```

**- ¿Cuál es la diferencia entre sumar números y concatenar strings?**

  La diferencia es: al sumar numeros se utiliza los operadores aritmeticos, y concatenar es añadir los datos en la misma linea.

**- ¿Cuál operador me permite sumar o concatenar?**

  El operador mas o suma `+`.

**2️. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:**

  - `const` Nombre = `string`,
  - `const` Apellido = `string`,
  - `let` Nombre de usuario en Platzi = `string`,
  - `let` Edad = `number`,
  - `const` Correo electrónico = `string`,
  - `let` Mayor de edad = `boolean`,
  - `let` Dinero ahorrado = `number`,
  - `let` Deudas = `number`,

**3️. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.**

```js
const object = {
  firtsname: 'Victor',
  lastname: 'Juarez',
  username: '@victor_',
  age: 25,
  email: 'victor_@gmail.com',
  adult: true,
  savedmoney: 1500,
  debt: 900,
}

```

**4️. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:**

```js
// Nombre completo (nombre y apellido)
const nameFull = object.firtsname + ' ' + object.lastname;
console.log(nameFull);

// Dinero real (dinero ahorrado menos deudas)
const realMoney = object.savedmoney - object.debt;
console.log(realMoney);
```

**Funciones**

**1️. Responde las siguientes preguntas en la sección de comentarios:**

**- ¿Qué es una función?**

  Un bloque de código o de sentencias que se pueden utilizar para generar acciones con los valores que ya se han guardado en variables. En resumen te permiten ahorrar código que se repite mucho.

```JS
//JavaScript
function sumar(a,b) {
  return a + b
}

sumar(4, 5);
```

**- ¿Cuándo me sirve usar una función en mi código?**

  Hay que utilizarlas cuando varias sentencias o algoritmos son iguales y solo cambian algunos parámetros, esto nos ayuda ahorrarnos mucho código.

**- ¿Cuál es la diferencia entre parámetros y argumentos de una función?**

  Los parámetros se definen en la función pueden ser la cantidad de parámetros que recibirá y los argumentos es la información que se la pasara a la función.

``` JS
  function parametros(p) { // La (p) representa los parámetros
    return p + ' solucionado'
  }

  console.log(parametros('argumento'));
  // Al declarar la función se le agregan los argumentos R: 'argumento solucionado'
  parametros('argumento');
```

**2️. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:**

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function presentation(name, lastname, nickname) {
  return f`Mi nombre es ${name} ${lastname}, y prefiero que me digas ${nickname}`
}

presentation()
// console.log(presentation())
```
**Condicionales**

**1️. Responde las siguientes preguntas en la sección de comentarios:**

**- ¿Qué es una condicional?**

  Una condicional indican si se cumple o no una condición.

```JS
//JavaScript
function adult(age) {
  if (age > 18) {
    return console.log('You are adult');
  } else if (age === 18) {
    return console.log('You are already an adult');
  } else {
    return console.log('You are not a adult')
  }
}

adult(17);
adult(18);
adult(20);
```


**- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**

  if elseif else, switch, Operador Ternario, Todos hacen lo mismo al comprobar si es true o false pero es diferente la sintaxis y la aplicación

**- ¿Puedo combinar funciones y condicionales?**

  Sí y es lo mas común

**2️. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando `if`, `else` y `else` `if`:**

```js
const tipoDeSuscripcion = "basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "Free":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```JS
//JavaScript
function tipoDeSuscripcion(s) {
  if (s == 'Free') {
      return console.log("Solo puedes tomar los cursos gratis");
  } else if(s == 'Basic') {
      return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  }
    else if(s == 'Expert') {
      return console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  }
    else if(s == 'Expert +') {
      return console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  } else {
      return console.log('Que esperas para adquirir tu suscripción');
  }
}


tipoDeSuscripcion('Expert +');

tipoDeSuscripcion('no tengo');
```

**3️. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).**

```JS
//JavaScript
function tipoDeSuscripcionSinIfElse(tipoDeSuscripcion){
    if(tipoDeSuscripcion == 'free' || tipoDeSuscripcion == 'Free'){
        console.log("Solo puedes tomar los cursos gratis") 
    }
    if  (tipoDeSuscripcion == 'basic' || tipoDeSuscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if  (tipoDeSuscripcion == 'expert' || tipoDeSuscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
    }
    if (tipoDeSuscripcion == 'expert +'|| tipoDeSuscripcion == 'Expert +'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
    }
    
}
```

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```JS
//JavaScript
const tipoDeSuscripcion = "Free";

const Suscripciones= ["Free","Basic","Expert","Expert+"];
const Respuestas=["Solo puedes tomar los cursos gratis",
                  "Puedes tomar casi todos los cursos de Platzi durante un mes",
                  "Puedes tomar casi todos los cursos de Platzi durante un año",
                  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

index=Suscripciones.indexOf(tipoDeSuscripcion);
if (index==-1){
    console.error("No exisite este plan u.u");
}
else{
    console.log(Respuestas[index]);
}
```


**Ciclos**

**1️. Responde las siguientes preguntas en la sección de comentarios:**

**¿Qué es un ciclo?**

  Un bloque de codigo que se repite n veces

**¿Qué tipos de ciclos existen en JavaScript?**

  for, for of, for in, while, do-while

**¿Qué es un ciclo infinito y por qué es un problema?**

  Es un ciclo que nunca se va a detener, puede causar que nuestro ordenador se apague por exceso consumo de memoria en el navegador

**¿Puedo mezclar ciclos y condicionales?**

  Si se puede

**2️. Replica el comportamiento de los siguientes ciclos for utilizando ciclos `while`:**

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

Ciclos

```JS
let i = 0;
while (i < 5) {
	console.log("El valor de i es: " + i);
	i++;
}

i = 10;
while (i >= 2) {
	console.log("El valor de i es: " + i);
	i--;
}
```

**3️. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.**

```JS
 function juego() {
    let resultado;
    do {
      resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
    } while ( resultado !== 4 );
    if (resultado === 4);
    return console.log('¡Eres un GENIO!');
  }
  juego();
```

Pista: puedes usar la función [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) de JavaScript.

**Listas**

**1️. Responde las siguientes preguntas en la sección de comentarios:**

**- ¿Qué es un array?**

Un array es un tipo de datos objetos, puedes guardar distintos valores como si fuera una lista y se encuentran seguidos en memoria.

```js
 let lista = ['hola', 'como', 'estas']
```

**- ¿Qué es un objeto?**

Un objeto es una colección de propiedades. Un objeto te permite guardar datos con claves y valores 

```js
const objetoCarro = {
    marca: 'Bugatti',
    modelo: 'Chiron',
    precio: '1 USD'
  }
```

**- ¿Cuándo es mejor usar objetos o arrays?**

 Depende mucho, pero algo que ahorita se me viene a la cabeza, es mejor utilizar un objeto cuando tienes que guardar datos que son repetitivos como un usuario que siempre va a tener las mismas claves y solo cambian los valores.

**- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**

Si se pueden mezclar

**2️. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.**

```js
 function array(a) {
    return console.log(a[0]);
  }
```

**3️. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).**

```js
 for (const value of lista) {
    console.log(value);
  }
```

**4️. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)**

```JS
const unaFuncion = (array) => {
  console.log(array[0]);
};

// punto 3
let frutas = ['Pera', 'Manzana', 'Sandia'];
const unaFuncion = (array) => {
  array.forEach((elem) => {
    console.log(elem);
  });
};

unaFuncion(frutas);

// Punto 4
let persona = {
  nombre: 'Oscar',
  apellido: 'Aguilar',
  edad: 21
}
const unaFuncion = (objeto) => {
  Object.values(objeto).forEach((elem) => {
    console.log(elem);
  });
};

unaFuncion(persona);
// otra manera

  for (const property in objetoCarro) {
    if (Object.hasOwnProperty.call(objetoCarro, property)) {
      const element = objetoCarro[property];
      console.log(element);
    }
  }
```

¿Cómo te fue? 🏆
¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final. No importa cuánto tiempo te tome. Yo sé que tú puedes y tú deberías de saberlo también. Mira todo lo que lograste con esta prueba. 🏆

¡Te espero en la siguiente clase para comenzar!

## Configuración del entorno de desarrollo

Es un software de control de versiones para administrar proyectos en el área de software. Su función principal es: guardar el histórico de los cambios de múltiples archivos o carpetas. Esto lo hace de forma atómica, en una base de datos interna que tiene git. Esta ventaja permite: fusionar cambios, confirmar cambios, crear ramas verificar quién y cuándo se realizaron ciertos cambios.

¿Qué es github?
Es una plataforma web de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git

comandos útiles:
Abrir carpeta actual reusando la misma ventana

```BASH
code ./ -r
```
Agregar todos los cambios al staging área (add)

```BASH
git add .
```
Realizar confirmar un cambio en la base de datos de git (commit)

```BASH
git commit -m "mensaje del commit"
```
subir cambios a github

```BASH
git push
```
  - Objetivos de la clase
  - Crear una cuenta en github
  - Crear un repositorio en github para el curso
  - Clonar el proyecto de github en visual studio code

  La extensión de Visual Studio Code para darle colorsitoss diferentes a cada proyecto donde trabajamos se llama Peacock (de John Papa).

Además, aquí puedes ver los atajos de teclado para VSCode:

- [Windows:](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [macOS:](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Linux:](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

- [Comunidad Platzi · GitHub](https://github.com/platzi/)
- [juandc (Juan David astro) · GitHub](https://github.com/juandc/)
- [Protege tu código usando Licencias de Software - YouTube](https://www.youtube.com/watch?v=eWtjgfzpt6Y)
- [Licensing a repository - GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository)
- [What you need to know to choose an open source license. · GitHub](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633)

# 2. Taller #1: figuras geométricas

## Análisis: cómo calcular figuras geométricas

**Por que el area de un triangulo es b_a/2?**

Es simple, todo triangulo no equilatero puede ponerse adyacente de la siguiente manera a un triangulo identico al inicial:

<a href="https://ibb.co/tQVgL3M"><img src="https://i.ibb.co/S5FbfJX/1-lesson.gif" alt="1-lesson" border="0"></a>

de manera que calculamos el area de un rectangulo que contiene dos de nuestros triangulos, por lo cual aplicamos la formula del area de un rectangulo, con lo que nos queda 2A = B_A lo que nos lleva a A = b*a/2.

En el caso de un triangulo equilatero, solo tienes que partir el triangulo de la siguiente manera :

<a href="https://ibb.co/JrFV03F"><img src="https://i.ibb.co/GC3yBH3/2-area-triangulo-equilatero.jpg" alt="2-area-triangulo-equilatero" border="0"></a>

con lo que podemos aplicar nuestro truco de poner adyacente el mismo triangulo, con lo que nos queda un rectangulo con un lado = a y otro lado = b/2 de manera que multiplicando A = b*a/2

**Por que el area de un circulo es pi*r^2?**

Mira la siguiente imagen

<a href="https://ibb.co/W2GdBXR"><img src="https://i.ibb.co/KrbQVg8/3-area-circle.jpg" alt="3-area-circle" border="0"></a>

Calcular perímetro y área de las siguientes figuras geométricas

**Cuadrado**

  - Perímetro = Lado +Lado +Lado + Lado , es lo mismo decir que: Lado * 4
  - área = Lado * Lado, es lo mismo decir que: Lado Elevado al cuadrado 2

**Triángulo**

  - Perímetro = Lado + Lado + Lado;
  - área = (Base * Altura)/2

**Círculo**

  - diámetro = (radio * 2)
  - perímetro = diámetro * PI
  -   área = ( radio ^ 2 ) * PI

> coeficiente que multiplicado 3.1415… veces por su diámetro nos indica la longitud de la circunferencia. Míralo en este video **[¿Que es PI?](https://www.youtube.com/watch?v=EWWvnoQlsas)**

## Cómo integrar JavaScript en HTML

Vinculoa el archivo.js al html con la etiqueta `<script>`. Eso es lo que la mayoria de desarrolladores hacen, ya que el `archivo.js` es enorme. A veces incluso tienen que hacer una carpeta llena de archivos js, ya que las lineas de código rebasan las 5 mil.

Sin embargo, cuando vas a usar poquito código JavaScript, es cuando se recomienda escribir el código en el archivo html, de la siguiente manera:

```js
<script>
  @code
</script>
```

## Calculando figuras geométricas en JavaScript

Encapsula los console 😃

``` JS
#Abres
console.group("nombre que desees");
#Cierras
console.groupEnd();
```

Template Strings o Template Literals

se puede incluir variables en el texto usando estas comillas `` y agregando la variable de este manera ${ladoCuadrado}

``` JS
const ladoCuadrado = 5;
console.log(`los lados de cuadrado miden ${ladoCuadrado}`)
```

<a href="https://ibb.co/Mhgw8Ch"><img src="https://i.ibb.co/cvyfbrv/areasfiguras.jpg" alt="areasfiguras" border="0"></a>

- [Turbo Console Log](:https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)

## Encapsulando código en funciones

Codigo 

``` JS
//Codigo del Cuadrado

console.group("cuadrados");

perimetroCuadrado = (lado) => {
    return lado * 4;
}
perimetroCuadrado();

areaCuadrado = (lado) => {
    return lado * lado;
}
areaCuadrado();
console.groupEnd();



//Codigo del Triàngulo

console.group("triangulos");


    perimetroTriangulo = (lado1, lado2, base) => {
        return lado1 + lado2 + base;
    }
    perimetroTriangulo();
    

    areaTriangulo = (base, altura) => {
        return (base * altura) / 2;
    }

    console.groupEnd();



    //Codigo del Cìrculo

console.group("Cìrculos");

// Diàmetro
diametroCirculo = (radio) => {
    return radio * 2;
}
diametroCirculo();


// PI
const PI = Math.PI;
console.log ("El PI es: " + PI + "cm");


// Circuferencia
perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
perimetroCirculo();


// Àrea
areaCirculo = (radio) => {
    return (radio * radio) * PI;
}
areaCirculo();


console.groupEnd();
```

## Interactuando con JavaScript desde HTML


## Reto: matemáticas con JavaScript

# 3. Taller #2: precios y descuentos

## Análisis: cómo calcular porcentajes y descuentos


## Crea una página web para calcular descuentos


## Escribiendo HTML desde JavaScript


## Reto: funciones más inteligentes

# 4. Taller #3: promedio, moda y mediana

## Qué es promedio, moda y mediana


## Calculando el promedio en JavaScript


## Calculando la mediana en Javascript


## Calculando la moda en Javascript


## Reto: calcula otros tipos de promedio

# 5. Taller #4: análisis salarial

## Análisis: cómo analizar salarios


## Calculando la mediana de salarios


## Calculando el top 10% de salarios


## Reto: simulación de estudio de salarios

# 6. Próximos pasos

## Deploy con GitHub Pages


## ¿Qué más puedes aprender de JavaScript?