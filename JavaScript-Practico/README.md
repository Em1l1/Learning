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

- h1-h6
  Representa los títulos que se puede colocar en nuestro documento html
- header
  El “header” representa un encabezado o sección del documento. El elemento de encabezado se usa típicamente para agrupar un conjunto de elementos h1 – h6 para marcar el título de una página con su subtítulo o lema. Sin embargo, los elementos de encabezado pueden contener más que solo los encabezados y subtítulos de la sección, por ejemplo, información del historial de versiones o fecha de publicación, menús entre otro.
- section
  Representa un documento genérico o una sección de aplicación. En este contexto, una sección es una agrupación temática de contenido, normalmente con un encabezado, posiblemente con un pie de página. Los ejemplos incluyen capítulos de un libro, las distintas páginas con pestañas en un cuadro de diálogo con pestañas o las secciones numeradas de una tesis. La página de inicio de un sitio web se puede dividir en secciones para una introducción, noticias e información de contacto
- form
  El elemento form son formularios son elementos que representa una colección de elementos asociados al este mismo, algunos de los cuales pueden representar valores editables que pueden enviarse a un servidor para su procesamiento.

Al crear un botón dentro de un formulario se recarga la página automáticamente debido a que los botones son de tipo submit por defecto. Este tipo de botón envía la información de los formularios.

- input
  El elemento input, es un elemento de entrada representa un campo de datos escrito, generalmente con un control de formulario para permitir al usuario editar los datos.

```html
<input
	class="input"
	type="number"
	id="input_respCuadradoPerimetro"
	name="input_respCuadradoPerimetro"
	placeholder="Valor del Perímetro"
/>
```

Los siguientes atributos se le pueden aplicar

class, es aplicar estilos de css.
type, define el tipo datos que recibirá.
id, define un identificador para el elemento html
name, define un identificador y se puede asociar a un grupo de elementos

- button
  El elemento botón representa un botón. Si el elemento no está deshabilitado, entonces el agente de usuario debe permitir que el usuario active el botón

```html
<button
	class="button"
	type="button"
	onclick="fn_calcularCuadradoArea()"
>
```

Los siguientes atributos se le pueden aplicar

class, es aplicar estilos de css.
type, define el tipo de botón. en los formularios por defecto de tipo submit.
onclick, define la ejecución del evento click. Esto puede ser la llamada de una función javascript

#### Elementos javascript asociado a html

- Para asociar elementos html con javascript se utiliza el método `document.getElementById('id_elemento_html')` y luego lo asignamos a una variable o constante javascript

```javascript
const  input_cuadradoLado  =  document.getElementById('input_cuadradoLado');
```

- Para enviar valores de los elementos html hacia javascript, se utiliza `document.getElementById('id_elemento_html').value` . Otra forma es asignar el elemento html y luego obtener el valor

```javascript
const  input_cuadradoLado  =  document.getElementById('input_cuadradoLado');
const  cuadradoLado  =  parseFloat(input_cuadradoLado.value);
```

Ejemplo de obteniendo/enviados valores desde javascript a html

```html
<!-- Cuadrado -->
<section class="cuadrado-container">
	<h2>Calcula el área y perímetro de un cuadrado</h2>
	<form class="form">
		<label for="input_cuadradoLado">
			Escribe cuánto mide cada lado de tu cuadrado:
		</label>
		<input
			class="input"
			type="number"
			id="input_cuadradoLado"
			name="input_cuadradoLado"
		/>
		<br />
		<button
			class="button"
			type="button"
			onclick="fn_calcularCuadradoPerimetro()"
		>
			Calcular el perímetro
		</button>

		<button
			class="button"
			type="button"
			onclick="fn_calcularCuadradoArea()"
		>
			Calcular el área
		</button>
		<br />

		<label for="input_respCuadradoPerimetro">
			Respuestas del perímetro del cuadrado:
		</label>
		<input
			class="input"
			type="number"
			id="input_respCuadradoPerimetro"
			name="input_respCuadradoPerimetro"
			placeholder="Valor del Perímetro"
		/>
		<br />

		<label for="input_respCuadradoArea">
			Respuestas del área del cuadrado:
		</label>
		<input
			class="input"
			type="number"
			id="input_respCuadradoArea"
			name="input_respCuadradoArea"
			placeholder="Valor del área"
		/>
	</form>
</section>

```

```js
//===========================
//      ==Cuadrado==
//===========================

const input_cuadradoLado = document.getElementById('input_cuadradoLado');
const input_respCuadradoArea = document.getElementById(
	'input_respCuadradoArea'
);
const input_respCuadradoPerimetro = document.getElementById(
	'input_respCuadradoPerimetro'
);

function fn_cuadradoPerimetro(p_cuadradoLado) {
	return p_cuadradoLado * 4;
}

function fn_cuadradoArea(p_cuadradoLado) {
	return p_cuadradoLado * p_cuadradoLado;
}

function fn_calcularCuadradoPerimetro() {
	const cuadradoLado = parseFloat(input_cuadradoLado.value);
	const cuadradoPerimetro = fn_cuadradoPerimetro(cuadradoLado);

	input_respCuadradoPerimetro.value = cuadradoPerimetro;

	console.group('Cuadrado');
	console.log('Los lados del cuadro mide : ' + cuadradoLado + 'cm');
	console.log('El perímetro del cuadro mide : ' + cuadradoPerimetro + 'cm');
}

function fn_calcularCuadradoArea() {
	const cuadradoLado = parseFloat(input_cuadradoLado.value);
	const cuadradoArea = fn_cuadradoArea(cuadradoLado);

	input_respCuadradoArea.value = cuadradoArea;

	console.log('El área del cuadro mide : ' + cuadradoArea + 'cm^2');
	console.groupEnd();
}
```



## Reto: matemáticas con JavaScript

Durante este taller aprendimos a calcular el área y perímetro de un triángulo conociendo la longitud de sus 3 lados y también su altura.

En este ejercicio debes crear una función para **calcular la altura de un triángulo isósceles**.

- La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
- La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
- La función debe retornar la altura del triángulo.

> Pista: la función [Math.sqrt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) de JavaScript puede ayudarte a calcular raíces cuadradas.

Vamos paso por paso solucionando todos los requerimientos de nuestro ejercicio:

- **La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.**

```js
function alturaTriangulo(ladoA, ladoB, ladoBase) {
    // ...
}
```

- **La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.**

```js
function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase) {
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        // ...
    }
}
```

- **La función debe retornar la altura del triángulo.**

Para calcular la altura de un triángulo isósceles vamos a dividir nuestro triángulo en dos. Así tendremos dos triángulos iguales, uno de sus nuevos lados tendrá la misma longitud que la altura del triángulo original y calculando la longitud de este lado habremos calculado también la altura.

<img src="https://i.ibb.co/x6Qh9x9/JS-POO-random-thoughts.jpg" alt="JS-POO-random-thoughts" border="0">

En total vamos a resultar con 3 triángulos, pero como los dos triángulo chiquitos son exactamente iguales, es suficiente si trabajamos con solo 2 triángulos (`trianguloGrande` y `trianguloPequeno`).

<img src="https://i.ibb.co/hBhbQR1/JS-POO-random.jpg" alt="JS-POO-random" border="0">

Creemos estos dos triángulos en JavaScript:

```js
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        let trianguloPequenoLadoA; // PENDIENTE
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        // ...

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
```

¡Muy bien! Ahora solo debemos seguir la fórmula para hallar la longitud de un lado del triángulo a partir de dos de sus lados (esto en el mundo de las matemáticas es lo que conocemos como [teorema de Pitágoras](https://www.google.com/search?q=teorema+pitagoras&oq=teorema+pitagoras&ie=UTF-8)): `aˆ2 + bˆ2 = cˆ2`.

<img src="https://i.ibb.co/TRLdDQS/formulajs.jpg" alt="formulajs" border="0">

Pero la fórmula aún no es exactamente lo que necesitamos. No necesitamos encontrar `ladoBase` a partir de `ladoA` y `ladoB`, sino encontrar `ladoA` a partir de `ladoBase` y `ladoB`.

Para esto debemos “despejar” ladoA, es decir, “mover de lado” cualquier número o variable que esté modificando a ladoA en la fórmula.

> Recuerda que lo que en un lado estaba sumando, pasa al otro restando; lo que estaba a un lado restando, pasa al otro sumando; lo que estaba a un lado multiplicando, pasa al otro dividiendo; lo que a un lado estaba dividiendo, pasa al otro multiplicando; lo que estaba a un lado elevando; pasa al otro radicando, y lo que estaba a un lado radicando, pasa al otro lado elevando.

<img src="https://i.ibb.co/3cBmLGP/formulajs1.jpg" alt="formulajs1" border="0">

¡Muy bien! ¡Ya casi terminamos!

Ahora solo nos falta traducir esta fórmula a JavaScript (recuerda la pista que te di, podemos calcular las raíces cuadradas con la función `Math.sqrt` de JavaScript):

```js
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
```

__

¡Si llegaste hasta aquí sin hacer trampa, te felicito! Te graduaste casi oficialmente de este primer taller. Ahora tienes mi bendición para pasar a la siguiente clase y empezar el segundo taller.

En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

#### Pasos a ejecutar

- La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
- La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
- La función debe retornar la altura del triángulo.

> Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

Referencia:

- [Encontrar un lado de un triángulo](https://www.youtube.com/watch?v=7zWtpaz_yl0)
- [Math.sqrt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

**Lo resolví de esta manera:**

```js
function formulaAlturaIsosceles (sides, base) {
    const altura = Math.sqrt(Math.pow(sides, 2) - (Math.pow(base, 2) / 4))
    return altura
}

function calcularAlturaIsosceles() {
  const sides = document.getElementById('sides')
  const base = document.getElementById('baseIso')
  
  const valueSides = parseInt(sides.value)
  const valueBase = parseInt(base.value)

  if(valueSides > valueBase) {
    const total = formulaAlturaIsosceles(valueSides, valueBase)
    alert(`La altura del triángulo isósceles es: ${total}`)
  } else {
    alert('No es un triángulo isósceles :(')
  }
}
```

# 3. Taller #2: precios y descuentos

## Análisis: cómo calcular porcentajes y descuentos

### ¿Cómo obtener el descuento con solo una multiplicación?

.
Woow, al ver esta clase me confundí, muchas operaciones. Lo mas importante que tienes que saber es que si hay un 25% de descuento, tu puedes multiplicar el precio original por 0.75 y así vas a obtener el precio después del descuento.
.
Esto funciona porque al multiplicar por 0.75, le estamos restando el 25% al valor inicial, sin embargo, necesitamos decirle a JavaScript que haga eso. Eso lo hacemos de la siguiente manera.

```js
var descuentoPorcentaje = 25; // Medido en %
var precioInicial = 4827; // Precio antes del descuento


var decimal = descuentoPorcentaje / 100; //0.25
var precioDespuesDescuento = precioInicial * (1 - decimal);
```

En la variable `descuentoPorcentaje` por cualquier numero que quieras y siempre va a funcionar.

### **Ejemplo practico** 😃

¿Cuánto es el 12% de 333?

Solo debes hacer lo siguiente multiplicas el valor total por el porcentaje que te dieron en termino de decimales.

```
333 * 0.12 = 39.96
```

En este caso para la operación el 12% equivale lo mismo que multiplicar por 0.12

Y simplemente restas ese valor de la operación al valor inicial.

```js
333 - 39.96 = 293.04  
**293…04** seria el valor si un producto que vale 333 tienen un descuento del 12%. Y asi mismo con cualquier otro valor y porcentajes que te den.
```

En este taller se creará un programa que realiza descuento a productos a facturar.

## Análisis para realizar programa de porcentajes y descuentos

- Primer paso: definir las fórmulas de los porcentajes y descuentos
- Segundo paso: implementar la fórmula en JavaScript
- Tercer paso: crear funciones
- Cuarto paso: integrar JS con HTML

#### Definiendo fórmulas de porcentajes y descuento

La formula para hacerlo escalable, es decir para cualquier precio y cualquier descuento es:

```javascript
const _PORCENTAJE_TOTAL_ = 100;
const _PORCENTAJE_DESCUENTO_ = 15;

let precio_producto = 100;
let precio_con_descuento = 0;

precio_con_descuento =
	(precio_producto * (_PORCENTAJE_TOTAL_ - _PORCENTAJE_DESCUENTO_)) / 100;

console.log(`${precio_producto}`);
console.log(`${precio_con_descuento}`);
```

<img src="https://i.ibb.co/xq34Xkm/programa-calcular-descuento.jpg" alt="programa-calcular-descuento" border="0">

## Crea una página web para calcular descuentos

Este es el primer ejercicio

```js
const originalPrice = 100
const discount = 15

const priceWithDiscount = originalPrice - (originalPrice*(discount/100))

console.log({
    originalPrice,
    discount,
    priceWithDiscount,
})
```

Y este es el segundo de como simplifique el codigo con arrow functions:

```js
const calculateDiscount = (price, discount) => price - (price*(discount/100))
console.log(`El precio final a pagar con el descuento es de ${calculateDiscount(100, 15)} dolarucos`)
```

El resultado de este es: “El precio final a pagar con el descuento es de 85 dolarucos”

Precion con descuento en `function`

```js
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}
```

## Escribiendo HTML desde JavaScript

<img src="https://i.ibb.co/28sDTHD/inner-HTML-vs-inner-Text.jpg" alt="inner-HTML-vs-inner-Text" border="0">

 propiedad `innerText`

innerHTML es una función que se comporta como una propiedad que sirve para enviar u obtener contenido de un elemento html. Pero este lo conservabando el formato html

```html
<!DOCTYPE html>
<html>
	<body>
		<p id="demo" onclick="myFunction()">
			Click me to change my HTML content (innerHTML).
		</p>

		<script>
			function myFunction() {
				document.getElementById('demo').innerHTML =
					'Paragraph changed!';
			}
		</script>
	</body>
</html>
 
```

Referencia:

- [innerHTML developer.mozilla](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
- [innerHTML en w3schools](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

#### innerText innerHTML

Es una función que se comporta como propiedad que sirve para enviar o recuperar contenido en formato texto de un elemento html

```html
<!DOCTYPE html>
<html>
	<body>
		<p>Click the button get the text content of the button element.</p>

		<button onclick="myFunction()" id="myBtn">Try it</button>

		<p>
			<strong>Note:</strong> The innerText property is not supported in
			Internet Explorer 9 and earlier.
		</p>

		<p id="demo"></p>

		<script>
			function myFunction() {
				var x = document.getElementById('myBtn').innerText;
				document.getElementById('demo').innerHTML = x;
			}
		</script>
	</body>
</html>
```

Referencia:

- [innerTEXT en w3school](https://www.w3schools.com/jsref/prop_node_innertext.asp)

#### Diferencia entre innerText vs innerHTML

##### innerHTML

- Obtiene y manda contenido en el formato HTML.
- Podemos insertar etiquetas HTML.
- Considera los espacios-
- Devuelve la etiqueta con una etiqueta de su interior.

##### innerText

- Obtiene y manda el contenido en texto plano.
- No podemos insertar etiquetas HTML, solo texto.
- ignora los espacios.
- Devuelve solamente el texto sin la etiqueta que lo contiene

## Reto: funciones más inteligentes

Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: **implementar descuentos con cupones**.

Déjame tu solución en los comentarios y luego, sí, evalúa mis 3 propuestas.

## Solución #1: arrays y switch

Analicemos el problema y nuestra propuesta de solución:

- Crearemos un array con cada uno de nuestros cupones.
- Cambiaremos el input de descuento en HTML por un input de cupones.
- Usaremos un condicional switch para aplicar cierto porcentaje de descuento en nuestros productos dependiendo del cupón que se haya elegido al presionar el botón del formulario.

Vamos paso a paso:

- **Crear un array de cupones**

```js
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];
```

- **Cambiar el input de descuento por uno de cupones**

Cambiemos los IDs en HTML:

```html
<label for="InputCoupon">Escribe el cupón de descuento para tu producto:</label>
<input id="InputCoupon" type="number" />
```

Y actualicemos nuestras referencias en el código JavaScript:

```js
const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;
```

- **Crear una variable descuento y asignarle un valor distinto con un switch**

```js
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

  switch(couponValue) {
    case "JuanDC_es_Batman":
      descuento = 15;
    break;
    case "pero_no_le_digas_a_nadie":
      descuento = 30;
    break;
    case "es_un_secreto":
      descuento = 25;
    break;
  }


  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
```

## Solución #2: legibilidad, error first y muerte al switch

**Legibilidad** es la facilidad que ofrece nuestro código para entenderlo sin tropiezos cuando lo leemos. Mejorar la legibilidad es mucho más importante que reducir la cantidad de líneas de código.

Además, **error-first** es un patrón de programación donde atrapamos los errores antes de escribir el resto de la lógica de nuestros programas. Aplicar error-first nos puede ayudar a mejorar la legibilidad de nuestro código (es completamente válido tener otra opinión, no te preocupes, cuéntame en los comentarios).

- **Error first con array.includes**

La función `array.includes()` nos permite validar si un elemento ha sido almacenado en el array. Vamos a usar esta función para ejecutar un error si el cupón de los usuarios es inválido (no fue guardado en el array `coupons`):

```js
if (!coupons.includes(userCouponValue)) {
    alert("El cupón " + couponValue + "no es válido");
}
```

Ya que estamos usando un condicional `if`, podemos reescribir el resto del condicional `switch`, pero en este caso usaremos condicionales `else if`:

```js
if (!coupons.includes(couponValue)) {
   alert("El cupón " + couponValue + "no es válido");
} else if (couponValue === "JuanDC_es_Batman") {
   descuento = 15;
} else if (couponValue === "pero_no_le_digas_a_nadie") {
   descuento = 30;
} else if (couponValue === "es_un_secreto") {
   descuento = 25;
}
```

## Solución #3: arrays y condicionales mucho más inteligentes

Ya usamos uno de los muchos métodos de los arrays para aplicar error first. Pero podemos usar algunos más para simplificar aún más nuestro código.

> 💡 Recuerda que mejorar la legibilidad no (necesariamente) significa reducir líneas de código.

- **Array de cupones 2.0: ahora también con los descuentos**

Por ahora tenemos muy separada la lógica de nuestros cupones. Por un lado tenemos la lista de cupones, pero en otro lugar distinto definimos el descuento de cada cupón.

Vamos a cambiar eso convirtiendo nuestro array de strings en un array de objetos (con el nombre y descuento de cada cupón en el mismo lugar):

```js
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];
```

Ahora la función `array.includes` dejó de funcionar, pero podemos reemplazarla por la función `array.find()` para validar si el cupón que escribió el usuario está guardado en la propiedad `name` de alguno de los objetos en la lista de cupones.

Vamos a crear una variable `isUserCouponValueValid` con una función que valide si su parámetro `coupon` es igual a nuestra variable `userCouponValue`. Y esta variable la vamos a enviar como parámetro a nuestra función `array.find()`.

```js
const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
}
```

¡Muy bien!

Pero fíjate que ya tenemos nuestro cupón (con nombre y **descuento**) disponible en la nueva variable `userCoupon`.

Podemos aprovechar esta variable para eliminar todos nuestros condicionales `else if` y cambiarlos por un condicional `else` que nos proporcione el porcentaje de descuento automáticamente, sin importar el cupón (válido) que estén usando nuestros usuarios.

```js
if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
```

De esta forma, no solo logramos reducir las líneas de código de nuestro programa, sino también mejorar su legibilidad.

# 4. Taller #3: promedio, moda y mediana

## Qué es promedio, moda y mediana

**Media o promedio aritmético**: Consiste en sumar cada numero y dividirlo por la cantidad de numero que hay.

- (20 + 30 + 40) = 90 / 3 = 30

Este no es tan optimo ya que si ingresa algo a lo que se le llama “dato atípico” los resultados no serian muy acertados.

**Mediana:** Este consiste en tener un numero de elementos numéricos, lo primero que debes de hacer es ordenarlos en forma ascendente:

- Si el numero de datos que hay en el “arreglo” es impar escogemos el numero de la mitad: Si fueran 15 posiciones escogemos la posición 8
- Si el numero de datos que hay en el “arreglo” es par escogemos el valor de las dos posiciones del centro y las dividimos en dos: Si fuera 16 escogemos la posición 8 y 9 y la dividimos entre 2

Este proceso es mucho mas optimo que la media ya que los datos atípicos no afectaran demasiado el valor final.
.
**Moda:** Este es el dato que mas se repite en un conjunto de datos si tenemos el siguiente arreglo [10,9,8,10,8,10,8,7,9] y vemos que dos números se repiten la misma cantidad de veces, simplemente se ponen los dos [8,10].
Este tipo de proceso es muy funcional cuando no solo queremos hablar de tipos de datos numéricos, tambien pueden ser cadenas de texto y demás.

 😃

- **Moda:** “Lo que está a la moda, entonces es lo que más se repite”
- **Mediana:** “Entre la moda, mediana y media; mediana es la que está en la mitad, por lo tanto es el dato que está en la mitad”
- **Media:** “Es la que sobra entonces es el promedio”

<img src="https://i.ibb.co/qMKVVqZ/diferencias-entre-moda-media-y-mediana.jpg" alt="diferencias-entre-moda-media-y-mediana" border="0">

## Calculando el promedio en JavaScript

En esta clase pasamos a código la operación de la media aritmética (promedio). La manera de hacerlo es con un array de números, y con un ciclo `for` vamos sumando cada una de las cantidades que hay en el mencionado array. Al final dividimos la suma con la cantidad de números que hay en el array.

```js
//Array y variable de suma
var array = [10, 89, 82, 91, 2, 127, 1982];
var suma = 0;

// Ciclo for
for(let i = 0; i < array.length; i++){
  suma += array[i];
}

//División para obtener el promedio
console.log(`El promedio es: ${suma / array.length}`);
```

#### Método reduce

El ciclo for es la manera “tradicional” de hacer esta operacion, sin embargo, para trabajar con una gran cantidad de numero, lo mejor es utilizar el metodo reduce

```js
//Array y variable de suma
var myArray = [12, 45, 27, 98, 27]
var suma = 0;

//Realización de la suma
var suma = myArray.reduce(function(suma, valorActual){
  return suma + valorActual;
})

//División para obtener el promedio
console.log(`El promedio es: ${suma / myArray.length}`);
```

#### Pasarlo a una función

Al final lo que se hizo fue pasar las operaciones a una función, esto con la finalidad de usar cualquier array de números que van a ser pasados como parámetro

```js
function obtenerPromedio(array){
  //variable de suma
  let suma = 0;

  //Realizar la suma con ciclo for
  for(let i = 0; i < array.length; i++){
    suma += array[i]
  }

  //Division para obtener el promedio
  console.log(`El promedio es: ${suma / array.length}`)
}

//Llamando a la funcion con cualquier array
obtenerPromedio([23, 87, 94, 23, 76, 128]);
```

Array.prototype.reduce()
El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

### Descripción

El método reduce() ejecuta callback una vez por cada elemento presente en el array, excluyendo los huecos del mismo, recibe cuatro argumentos:

- `valorAnterior`

- `valorActual`

- `indiceActua`

- `array`

La primera vez que se llama la función, valorAnterior y valorActual pueden tener uno de dos valores. Si se proveyó un valorInicial al llamar a reduce, entonces valorAnterior será igual al valorInicial y valorActual será igual al primer elemento del array. Si no se proveyó un valorInicial, entonces valorAnterior será igual al primer valor en el array y valorActual será el segundo.

Si el array está vacío y no se proveyó un valorInicial lanzará un TypeError (en-US). Si el array tiene un sólo elemento (sin importar la posición) y no se proveyó un valorInicial, o si se proveyó un valorInicial pero el arreglo está vacío, se retornará ese único valor sin llamar a la función.

Suponga que ocurre el siguiente uso de reduce:

```js
[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
});

// Primera llamada
valorAnterior = 0, valorActual = 1, indice = 1

// Segunda llamada
valorAnterior = 1, valorActual = 2, indice = 2

// Tercera llamada
valorAnterior = 3, valorActual = 3, indice = 3

// Cuarta llamada
valorAnterior = 6, valorActual = 4, indice = 4

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 10
```

Y si proporcionas un valorInicial, el resultado sería como este:

```js
[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
}, 10);

// Primera llamada
valorAnterior = 10, valorActual = 0, indice = 0

// Segunda llamada
valorAnterior = 10, valorActual = 1, indice = 1

// Tercera llamada
valorAnterior = 11, valorActual = 2, indice = 2

// Cuarta llamada
valorAnterior = 13, valorActual = 3, indice = 3

// Quinta llamada
valorAnterior = 16, valorActual = 4, indice = 4

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20
```

<img src="https://i.ibb.co/7JZMkcX/promedio.gif" alt="promedio" border="0">
<img src="https://i.ibb.co/0MyGtzv/array-methods.jpg" alt="array-methods" border="0">@RUKIkaf1

## Calculando la mediana en Javascript

El método .sort de los arrays nos permite ordenar listas de letras o números en JavaScript. Pero por defecto tiene algunos problemillas, como que el 1 millón queda ordenado antes que un 2 porque empieza por 1.

En la próxima clase vamos a utilizar el método .sort enviando como argumento una función anónima que le indique a JavaScript cómo ordenar nuestra lista de números (ya no solo por sus primeros números, sino por sus valores reales).

Pero antes te reto a que descubras cómo hacerlo artesanalmente y por tu cuenta. Esta [documentación podrá ayudarte](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort.)

Lo que se hizo en esta clase fue calcular la mediana, sin embargo, no se ordenaron los números antes de empezar a calcularla, eso es un reto para nosotros.
.
Lo primero que se hizo fue saber si el array es par o impar, esto con el fin de saber el numero que esta en medio. En caso de que el array sea par, se toman los dos numero de en medio y se les saca su promedio.

```js
//Array de ejemplo
var myArray = [129, 87, 98, 23, 98, 76];

//Funcion que parte nos imprime la mediana en la consola
function getMediana(array){  

  if(array.length % 2 === 0){
    var firstValue = array[(array.length / 2) - 1];
    var secondValue = array[array.length / 2];
    var mediana = (firstValue + secondValue) / 2;
    console.log(`The median is ${mediana}`)
  }else{
    console.log(`The median is ${array[Math.floor(array.length / 2)]}`)
  }
}

getMediana(myArray)
```

## Calculando la moda en Javascript

reducido 👇

```javascript
const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

functionmode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS)); //5
```

Como reducir el codigo: creas un filtro por el cual haces arrays de números iguales

```js
arr.filter(v => v===a)
```

y le pones el length para ver cual se repite mas

```js
arr.filter(v => v===a).length
```

y con la función compare( que es la función que se utiliza para ordenar en sort())

```js
// a= primer numero comparado que en este casos sera la
//cantidad de elementos de los arrays de de elementos
//iguales

// b= segundo numero comparado en este casos sera la
//cantidad de elementos de los arrays de de elementos
//iguales

(a,b) =>{
	a-b
}
```

vemos cual tiene mas repetidos y por ultimo haces un .pop para poner el ultimo numero que es el que mas se repitió

## Reto: calcula otros tipos de promedio

En las clases prácticas de este taller aprendimos a calcular el promedio (media aritmética), la mediana y la moda con JavaScript. En este reto debes encontrar la fórmula de algún otro tipo de promedio, trabajar con alguno de sus casos de uso útiles y traducirlo a código JavaScript.

Responde las siguientes preguntas en los comentarios:

- ¿Cuál tipo de promedio elegiste para trabajar?
- ¿Qué casos de uso tiene tu tipo de promedio?
- ¿Cómo traduces su fórmula a código JavaScript?

Espero tu solución en la sección de aportes.

## Solución al promedio ponderado

Elegí trabajar con la media aritmética ponderada. Este es un promedio muy similar a la media aritmética, pero nos permite definir también el peso, importancia o relevancia de cada elemento en nuestro conjunto de números.

Un caso de uso de la media ponderada es el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes “créditos”.

Esta es su fórmula:

<img src="https://i.ibb.co/KFkTCPJ/random.jpg" alt="random" border="0">

En español: multiplicar cada número del conjunto por su respectivo crédito, sumar todos los resultados y dividirlo entre la suma de todos los créditos.

> Recuerda que no tienen que ser únicamente 3 números, pueden ser lo que desees, esto solo fue un ejemplo.

Ahora sí, vamos paso a paso implementando el promedio ponderado en JavaScript:

- **Definir el conjunto de números junto al peso de cada elemento**

Para esto vamos a crear un array de objetos llamado `notes`. Cada objeto tendrá tres valores: `course` con el nombre de la materia (aunque en realidad no lo utilizaremos 😅), `note` con la nota de la materia y `credit` con los créditos de la materia.

```js
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
```

Ahora vamos paso a paso construyendo nuestra máquina para sacar promedios ponderados.

- **Multiplicar cada número de la lista por su peso**

Vamos a usar de nuevo el método `map` de los arrays. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.

```js
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});
```

- **Sumar todos los elementos del arreglo de elementos multiplicados por su peso**

Vamos a usar de nuevo el método `reduce` de los arrays.

Crearemos una nueva variable `notesWithCredit` que tenga como resultado la suma de todos los elementos del arreglo `sumOfNotesWithCredit`. Recuerda que la función `reduce` recibe una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0) y el nuevo elemento de los arrays.

```js
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
```

- **Sumar todos los pesos (créditos)**

Sí, otra vez `map` y `reduce`. Vamos a crear un nuevo arreglo `credits` únicamente con los créditos de cada materia y otra nueva variable `sumOfCredits` que recorra el arreglo `credits` y sume sus elementos.

```js
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
```

- **Hacer la división entre ambas “sumas”**

Lo último que nos falta es dividir nuestra variable `sumOfNotesWithCredit` sobre la variable `sumOfCredits`.

```js
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
```

En este caso, el promedio ponderado de una nota de 10 con créditos de 2, otra nota de 8 con un crédito de 5 y una última nota de 7 con créditos de 5 nos da como resultado `7.916`.

La media aritmética sin tener en cuenta el peso de cada nota habría sido `8.333`.

------

Espero que este último ejercicio te haya ayudado a interiorizar un poco más el uso de los métodos de los arrays para obtener diferentes resultados con ellos.

#### Ejemplo de solucion

Así hice el cálculo de la media armónica

```js
<code> const calcularMediaArmonica = (lista1) =>{
    const listaOrdenada = lista1.sort((a,b)=> a-b);
    const cantidadTotal = listaOrdenada.length;
    const valoresInvertidos = listaOrdenada.map((elemento) => 1/elemento);
    const sumaValoresInvertidos = valoresInvertidos.reduce((acc, cur)=> acc + cur);
    const mediaArmonica = cantidadTotal/sumaValoresInvertidos
    console.log(`La Media armónica es ${mediaArmonica}`);
}
```

Por si quieran interiorizar más en los métodos de los arrays, les dejo un enlace a la documentación oficial.

- [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#)

Demás de un sinfín de videos en YouTube.

- [Métodos de los arrays](https://www.youtube.com/results?search_query=metodos+de+arrays+javascript)

# 5. Taller #4: análisis salarial

## Análisis: cómo analizar salarios

Objecto = | Name | Salary |

| Total | Promedio | Mediana | Analisis |
| :---: | :------: | :-----: | :------: |

Calcular la mediana de salarios de los siguentes aspectos:

- General
- Top 10% 

## Calculando la mediana de salarios

Archivo [salarios.js](https://github.com/juandc/platzi-curso-practico-javascript/blob/main/salarios.js) 👇

```javascript
const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});
```

## Calculando el top 10% de salarios

**Ejemplo de calcular el tip 10% de salarios**: cunado estaba recien aprendiendo javascript tomaba los metodos de los arrays y objetos como una herramiento util, los anotaba, y luego decia, bueno si los necesito, reviso mis apuntes y ya…
Pero ahora veo la importancia de concer los metodos mas importate de memoria. Estos nos ayudan a tener mas opciones al momento de analizar y resolver problemas.

Es como querer clavar un clavo, y ya sabes que tienes el martillo, en cambio si solo lo anotas por ahi, es como si tuvieras que ir a la caja de herramientas a ver cual es la que mas te sirve

dejo mi codigo por si a alguien le sirve

```js
const sueldosChile = chile.map((persona) => {
    return persona.sueldo
})

const sueldosOrdenados = sueldosChile.sort((a, b) => a - b)

function par(numero){
    return (numero % 2 === 0)
}

const promedio = (a, b) => {
    const suma = a + b / 2
    console.log(`la mediana de sueldos en chile es ${suma}`)
}

const medianaSueldos = (listaSueldos) => {
    const mitad = parseInt(listaSueldos.length / 2)
    if(par(listaSueldos.length)){
        const personaMitad1 = listaSueldos[mitad - 1]
        const personaMitad2 = listaSueldos[mitad]
        promedio(personaMitad1,personaMitad2)
    }
    else{
        const personaMitad = listaSueldos[mitad]
        console.log(`la mediana de sueldos en chile es ${personaMitad}`)
    }
}

const sueldoGeneral = medianaSueldos(sueldosOrdenados)


const spliceStart = (sueldosOrdenados.length * 90) / 100
const spliceCount = sueldosOrdenados.length - spliceStart
const sueldos10 = sueldosOrdenados.splice(spliceStart, spliceCount)
const sueldoTop10 = medianaSueldos(sueldos10)
```

los principales métodos para arrays.

[MAP, FILTER y REDUCE EN JAVASCRIPT](https://www.youtube.com/watch?v=tP8JiVUiyDo)

<img src="https://i.ibb.co/drvrRGz/10.jpg" alt="10" border="0">

## Reto: simulación de estudio de salarios

En este módulo pusimos en práctica todo lo que aprendimos en los talleres pasados para calcular la mediana de salarios de tu país (aunque por ahora son solo datos ficticios).

Para completar el reto de este último taller solo debes dejar volar tu imaginación y usar todas las herramientas que aprendiste para **expandir tu análisis salarial**.

## ¿Cómo? Como quieras

Puedes calcular la mediana de ingresos no fijos, capacidad de ahorro, capacidad de endeudamiento, recolección de impuestos, diferencia salarial, relación entre formalidad/informalidad y pobreza/riqueza…

El reto es de tema libre. Escoge la pregunta que prefieras, incluso mejor si has vivido una situación parecida alguna vez, resuélvela y muéstranos tu solución en los comentarios.

Para lograrlo solo debes seguir los siguientes pasos:

- Plantea muy detalladamente el problema/análisis/cálculo/hipótesis que quieres resolver.
- Encuentra las fórmulas necesarias para resolver el dilema que seleccionaste.
- Define las variables y funciones para resolver tus fórmulas.
- Presenta los resultados de tu informe en una página web dinámica usando HTML, CSS y JavaScript.
- Organiza y documenta tu código para que sea más fácil de leer y entender.
- Publícalo en tu repositorio de GitHub y muéstranos el link en la sección de comentarios.

Te recomiendo que inicies con una pregunta sencilla. Pon un tiempo límite generoso, desarrolla tu proyecto hasta el final y publica tus resultados en la sección de comentarios.

Luego vuelve a empezar con una pregunta más compleja. Y así sucesivamente hasta que tu estudio de salarios sea el proyecto del que más orgullosa te puedas sentir.

> Estoy seguro de que los siguientes Platzi Lives serán una gran fuente de inspiración:
>
> - [Qué está pasando en Colombia y por qué hay protestas](https://www.youtube.com/watch?v=1oiTB_4tcx0)
> - [Qué está pasando en Colombia en el 2021](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
> - [Por qué hay protestas en Chile](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
> - [Qué es la Economía Naranja (y qué no)](https://www.youtube.com/watch?v=fs31Woz8f80)
> - [La economía de un programador](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
> - [Cuánto ganarán los programadores en el 2020 y 2021](https://www.youtube.com/watch?v=sauDgFSUmsM)
> - [Los próximos 4 años de la industria Tech en Latinoamérica](https://www.youtube.com/watch?v=UKNv_z5OvCY)
> - [¿Eres de izquierda o de derecha?](https://www.youtube.com/watch?v=NE0di4Aqa_Q)
> - [Qué es la Bolsa de Valores](https://www.youtube.com/watch?v=WQFXlJTU1To)
> - [Cómo prepararte para una recesión económica](https://www.youtube.com/watch?v=JCMYjez93pk)
> - [Por qué hay crisis económica y en qué invertir](https://www.youtube.com/watch?v=ZrYD4aLqo7w)

## Complementos

Si sigues adelante con la [Escuela de Desarrollo Web](https://platzi.com/web), vas a aprender muchas más herramientas de JavaScript para consultar datos desde el backend y manipular el DOM aún más intensamente.

También puedes complementar tu ruta de aprendizaje con la [Escuela de Data Science](https://platzi.com/datos). Ahí aprenderás a muchísima, muchísima más profundidad cómo limpiar, consultar y presentar informes a partir de un análisis de datos.

Además, en la [Escuela de Finanzas e Inversiones](https://platzi.com/finanzas) puedes iniciar tu educación, planeación y evaluación financiera para todo tipo de proyectos, ya sea con fines personales, emprendedores o incluso inversionistas.

------

Espero ver tus retos en la sección de comentarios. En la próxima clase, como premio a todo tu esfuerzo, publicaremos nuestros proyectos en internet con ayuda de una plataforma llamada GitHub Pages. 💚

# 6. Próximos pasos

## Deploy con GitHub Pages

### ¿Cómo subir tu repositorio a GitHub pages?

- Paso 1: Haces commit desde la consola hacia GitHub
- Una vez en GitHub, te vas a settings > pages
- Le dices a GitHub la rama que quieres publicar y le das al boton de `Save`
- Compartes el link a todos tus contactos (solo que sin hacer spam)

## ¿Qué más puedes aprender de JavaScript?

Nunca pares de Aprender! 

<img src="https://i.ibb.co/5YpbcBW/js.jpg" alt="js" border="0">