<h1>Curso Práctico de JavaScript</h1>

<h3>Juan David Castro</h3>

<h1>Tabla de Contenido</h1>

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
**¿Qué tipos de ciclos existen en JavaScript?**
**¿Qué es un ciclo infinito y por qué es un problema?**
**¿Puedo mezclar ciclos y condicionales?**

**2️. Replica el comportamiento de los siguientes ciclos for utilizando ciclos `while`:**

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

**3️. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.**

Pista: puedes usar la función prompt de JavaScript.

**Listas**

**1️. Responde las siguientes preguntas en la sección de comentarios:**

**- ¿Qué es un array?**
**- ¿Qué es un objeto?**
**- ¿Cuándo es mejor usar objetos o arrays?**
**- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**

**2️. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.**

**3️. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).**

**4️. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)**

¿Cómo te fue? 🏆
¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final. No importa cuánto tiempo te tome. Yo sé que tú puedes y tú deberías de saberlo también. Mira todo lo que lograste con esta prueba. 🏆

¡Te espero en la siguiente clase para comenzar!

## Configuración del entorno de desarrollo

# 2. Taller #1: figuras geométricas

## Análisis: cómo calcular figuras geométricas


## Cómo integrar JavaScript en HTML


## Calculando figuras geométricas en JavaScript


## Encapsulando código en funciones


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