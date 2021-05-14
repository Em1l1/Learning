<h1>Básico de Algoritmos y Pensamiento Lógico</h1>

<h3>Ana Belisa Martínez</h3>

<h1>Tabla de Contenido</h1>

- [1. Introducción a los algoritmos](#1-introducción-a-los-algoritmos)
  - [La importancia de entrenar tu pensamiento lógico](#la-importancia-de-entrenar-tu-pensamiento-lógico)
  - [¿Qué entiende una computadora?](#qué-entiende-una-computadora)
    - [¿Para quién hacemos los programas?](#para-quién-hacemos-los-programas)
    - [¿Qué pasa dentro de una computadora?](#qué-pasa-dentro-de-una-computadora)
    - [¿Cómo representamos las letras?](#cómo-representamos-las-letras)
    - [¿Cómo representamos las imágenes?](#cómo-representamos-las-imágenes)
  - [¿Qué es el sistema binario?](#qué-es-el-sistema-binario)
  - [Metodología para construir un algoritmo: requerimientos y proceso mental](#metodología-para-construir-un-algoritmo-requerimientos-y-proceso-mental)
- [2. Tipos de datos y operadores lógicos](#2-tipos-de-datos-y-operadores-lógicos)
  - [¿Qué son Bits y Bytes?](#qué-son-bits-y-bytes)
  - [¿Qué son variables, constantes y tipos de datos?](#qué-son-variables-constantes-y-tipos-de-datos)
  - [Identifica las variables según los requerimientos de negocio](#identifica-las-variables-según-los-requerimientos-de-negocio)
  - [Strings (texto) y concatenación](#strings-texto-y-concatenación)
  - [Números y operaciones matemáticas básicas](#números-y-operaciones-matemáticas-básicas)
  - [Operaciones matemáticas compuestas: paréntesis y orden de evaluación](#operaciones-matemáticas-compuestas-paréntesis-y-orden-de-evaluación)
  - [True y false: booleanos y tablas de la verdad](#true-y-false-booleanos-y-tablas-de-la-verdad)
  - [Arrays y funciones sobre arrays](#arrays-y-funciones-sobre-arrays)
  - [¿Cómo diseñar algoritmos con diagramas de flujo?](#cómo-diseñar-algoritmos-con-diagramas-de-flujo)
  - [Define el tipo de dato según los requerimientos de negocio](#define-el-tipo-de-dato-según-los-requerimientos-de-negocio)
- [3. Estructuras de control](#3-estructuras-de-control)
  - [If y Else: condicionales y comparaciones para proteger tus algoritmos](#if-y-else-condicionales-y-comparaciones-para-proteger-tus-algoritmos)
  - [Switch y Case: condicionales en forma de casos](#switch-y-case-condicionales-en-forma-de-casos)
  - [Excepciones y errores: Throw y Try Catch](#excepciones-y-errores-throw-y-try-catch)
  - [¿Qué es un ciclo? While, For y Do While](#qué-es-un-ciclo-while-for-y-do-while)
  - [Diagrama de flujo con condicionales](#diagrama-de-flujo-con-condicionales)
  - [Diagrama de flujo con ciclos](#diagrama-de-flujo-con-ciclos)
  - [Tutorial de algoritmos de programación](#tutorial-de-algoritmos-de-programación)
  - [Diseña algoritmos para resolver problemas de tu vida diaria](#diseña-algoritmos-para-resolver-problemas-de-tu-vida-diaria)
- [4. Encapsula tu código en funciones](#4-encapsula-tu-código-en-funciones)
  - [¿Qué es una función?](#qué-es-una-función)
  - [Modularización de código](#modularización-de-código)
  - [Flujo de funciones para encapsular algoritmos](#flujo-de-funciones-para-encapsular-algoritmos)
  - [Nomenclaturas de programación: camelCase, PascalCase, snake_case](#nomenclaturas-de-programación-camelcase-pascalcase-snake_case)
  - [¿Qué es recursividad? Funciones que se llaman a sí mismas](#qué-es-recursividad-funciones-que-se-llaman-a-sí-mismas)
  - [Convierte algoritmos con ciclos a funciones recursivas](#convierte-algoritmos-con-ciclos-a-funciones-recursivas)
  - [¿Cómo desarrollar tu lógica de programación?](#cómo-desarrollar-tu-lógica-de-programación)
  - [Resolviendo acertijos](#resolviendo-acertijos)
- [5. Traduce tus algoritmos a lenguajes de programación](#5-traduce-tus-algoritmos-a-lenguajes-de-programación)
  - [Diferencias entre lenguajes de programación](#diferencias-entre-lenguajes-de-programación)
  - [Cómo escribir código en cualquier lenguaje de programación](#cómo-escribir-código-en-cualquier-lenguaje-de-programación)
  - [Cómo programar en JavaScript, Python y PHP](#cómo-programar-en-javascript-python-y-php)
  - [Introducción al ejercicio en JavaScript](#introducción-al-ejercicio-en-javascript)
  - [Programando en JavaScript](#programando-en-javascript)
  - [Introducción al ejercicio en Python](#introducción-al-ejercicio-en-python)
  - [Programando en Python](#programando-en-python)
  - [Introducción al ejercicio en PHP](#introducción-al-ejercicio-en-php)
  - [Programando en PHP](#programando-en-php)
  - [Cómo programar en Java y Lenguaje C](#cómo-programar-en-java-y-lenguaje-c)
  - [Introducción al ejercicio en Java](#introducción-al-ejercicio-en-java)
  - [Programando en Java](#programando-en-java)
  - [Introducción al ejercicio en C](#introducción-al-ejercicio-en-c)
  - [Programando en Lenguaje C](#programando-en-lenguaje-c)
  - [Traduce diagramas de flujo a código en lenguajes de programación](#traduce-diagramas-de-flujo-a-código-en-lenguajes-de-programación)
- [6. Conclusiones](#6-conclusiones)
  - [Próximos pasos para aprender programación](#próximos-pasos-para-aprender-programación)

# 1. Introducción a los algoritmos

## La importancia de entrenar tu pensamiento lógico

El **Pensamiento Lógico** es fundamental a la hora de programar, nos permite reconocer el problema que vamos a **solucionar**, **buscar** una solución que podamos programar y analizar las salidas que tenemos para llegar a conclusiones.

  > Curso fundamental para los que inician en la programación, también apto para reforzar conocimientos.
>
  > ✨ Entrenar nuestro pensamiento lógico, nos permite crear soluciones optimas cada vez mejores. Es importante no descuidarlo con el tiempo.

  Los algoritmos son la base fundamental de la programación, por lo que entender este curso es aprender a programar, de hecho, programar no es más que escribir algoritmos en cierto lenguaje de programación, mucha suerte a todos los que lleguen aquí, ustedes pueden!!!

- [slides-de-algoritmos-y-pensamiento-logico.pdf](https://drive.google.com/file/d/1Lylhz3WrtuIdq5I1qZ33m8bLQxSL3aNG/view?usp=sharing)

## ¿Qué entiende una computadora?

Recuerda, una computadora no es más que un aparato realmente poderoso, pero a la vez “tonto” porque tienes que decirle paso a paso las cosas que tiene que hacer por medio de algortimos 😄

### ¿Para quién hacemos los programas?

Para las computadoras puesto que, estas nacen de una necesidad humana que nos ayudara a realizar tareas mucho mas fácil.

### ¿Qué pasa dentro de una computadora?

En la computadora se habla mucho unos y ceros o numero binarios, estas son señales eléctricas que podemos pensar como que cuando encendemos un interruptor para a ser uno y mientras que este apagado estará en 0.

![](https://i.ibb.co/60MXtsM/1.webp)

Dentro de una computadora tenemos millones de dispositivos electrónicos conocidos como transistores que almacenan los unos y ceros mencionados anteriormente, el bit también llamado como la unidad mínima de información.

### ¿Cómo representamos las letras?

Existen diferentes convenciones pero una de las mas famosas y utilizadas es ASCII que tiene una representación en numero decimal como el siguiente ejemplo.

![](https://i.ibb.co/BTpLjPF/2.webp)

La representación decimal de la T mayúscula es 84 y esta en binario se da de la siguiente manera:

![](https://i.ibb.co/JtjBLdD/3.jpg)

### ¿Cómo representamos las imágenes?

Las imágenes se representan en pixeles, cada pixel es información en binario. Por ejemplo lo que la mayoría de nosotros conoce como RGB, un pixel puede dividirse en tres subcategorías (Red, Green y Blue) Este podría ser un ejemplo el color (255,255,20)

La representación de ese solo pixel en binario queda de la siguiente manera:

![](https://i.ibb.co/fXYfZ70/4.jpg)

Imagínense para los millones de pixeles que tiene una imagen.

### ¿Cómo representamos esto en software?

Es una serie de instrucciones para llevar a cabo los procesos que se da de la siguiente manera:

![](https://i.ibb.co/BnqN2Dn/5.webp)

Basándose esta en la arquitectura de Neumann dada hace muchos años.

## ¿Qué es el sistema binario?

### Suma

Para sumar debes tener en cuenta 4 arreglos posibles: `0 + 0 = 0; 0 + 1 = 1; 1 + 0 = 1; 1 + 1 = 10`. Por lo tanto, el resultado de sumar `1 0 0 1 1 0 0 0 y 0 0 0 1 0 1 0 1 es 1 0 1 0 1 1 0 1`

### Resta

Para llevar a cabo una resta también hay 4 combinaciones posibles: `0 - 0 = 0; 1 - 0 = 1; 1 - 1 = 0; 10 - 1 = 1`. Si restas los mismos números que usamos para la suma quedaría de la siguiente forma: `1 0 0 1 1 0 0 0 - 0 0 0 1 0 1 0 1 = 1 0 0 0 0 0 1 `

### Acarreo

Si lo notaste, hay dos casos especiales en los que utilizamos más de un dígito: `1 + 1 = 1 0 y 1 0 - 1 = 1`. Esto se debe al acarreo y es algo que ya conoces del sistema decimal, la diferencia es que en el sistema binario también se puede acarrear de forma negativa.


La resta de `0 - 1` no es posible, es por esto que el 0 pide la ayuda de su compañero de la izquierda y le quita un 1 que le permite operar. Entonces, el `0` se convierte en `1 0` y al restarle 1 nos da como resultado `1 0 - 1 = 1`. Si el compañero que cedió es un `0`, hará el mismo proceso de pedir valores a la izquierda, en cambio, si es un `1`, entonces se va a convertir en `0`.

### Multiplicación y división

Funcionan bajo las mismas condiciones que en el sistema decimal, todo número multiplicado por `0` es igual a `0` y solo es `1` cuando se multiplica por `1`.

Hay varias formas de convertir números decimales a binarios, la técnica de la división es buena, aunque una forma un poco más fácil e intuitiva es cuando pones una lista descendiente de números decimales, multiplicados por dos:

```bash
32 - 16 - 8 - 4 - 2 - 1 
```

Y si quieres encontrar un valor en binario, por ejemplo. el 32, simplemente pones un “1” en el lugar en que sí vas a ocupar dicho número, y pones un “0” en donde no vas a ocupar:

```bash
32 - 16 - 8 - 4 - 2 - 1 
1 -- 0 -- 0 - 0 - 0 - 0
```

Así sabemos que el 32 es binario es “100000”, ahora, pongamos un ejemplo más complejo, el año 2021:

```bash
1024 - 512 - 256 - 128 - 64 - 32 - 16 - 8 - 4 - 2 - 1 
- 1 --- 1 --- 1 --- 1 -- 1 -- 1 -- 0  - 0 - 1 - 0 - 1
```

Simplemente sumamos los números que sí usamos y nos dará 2021, por lo que 2021 en binario sería: 11111100101 😄

## Metodología para construir un algoritmo: requerimientos y proceso mental

Ejemplo:

Les tengo un algoritmo mucho mejor que el de las quesadillas, un algoritmo para escribir un algoritmo.

  1. Define un problema
  2. Analiza el problema
  3. Diseña el algoritmo
  4. Prueba de escritorio

Aunque no parezca, esta es una serie de pasos que debemos seguir al diseñar un algoritmo, así que prácticamente, también es un algoritmo 😄

Bueno, aquí va el de las quesadillas:

  1. Poner la tortilla en un plato
  2. Poner el jamón sobre la tortilla
  3. Poner el queso sobre el jamón **(SÍ LLEVAN QUESO)**
  4. Doblar a la mitad la tortilla
  5. Calentar al gusto
  6. Comer

# 2. Tipos de datos y operadores lógicos

## ¿Qué son Bits y Bytes?

## ¿Qué son variables, constantes y tipos de datos?

## Identifica las variables según los requerimientos de negocio

## Strings (texto) y concatenación

## Números y operaciones matemáticas básicas


## Operaciones matemáticas compuestas: paréntesis y orden de evaluación


## True y false: booleanos y tablas de la verdad


## Arrays y funciones sobre arrays


## ¿Cómo diseñar algoritmos con diagramas de flujo?


## Define el tipo de dato según los requerimientos de negocio

# 3. Estructuras de control

## If y Else: condicionales y comparaciones para proteger tus algoritmos


## Switch y Case: condicionales en forma de casos


## Excepciones y errores: Throw y Try Catch


## ¿Qué es un ciclo? While, For y Do While


## Diagrama de flujo con condicionales


## Diagrama de flujo con ciclos


## Tutorial de algoritmos de programación


## Diseña algoritmos para resolver problemas de tu vida diaria

# 4. Encapsula tu código en funciones

## ¿Qué es una función?


## Modularización de código


## Flujo de funciones para encapsular algoritmos


## Nomenclaturas de programación: camelCase, PascalCase, snake_case


## ¿Qué es recursividad? Funciones que se llaman a sí mismas


## Convierte algoritmos con ciclos a funciones recursivas


## ¿Cómo desarrollar tu lógica de programación?


## Resolviendo acertijos

# 5. Traduce tus algoritmos a lenguajes de programación

## Diferencias entre lenguajes de programación


## Cómo escribir código en cualquier lenguaje de programación


## Cómo programar en JavaScript, Python y PHP


## Introducción al ejercicio en JavaScript


## Programando en JavaScript


## Introducción al ejercicio en Python


## Programando en Python


## Introducción al ejercicio en PHP


## Programando en PHP


## Cómo programar en Java y Lenguaje C


## Introducción al ejercicio en Java


## Programando en Java


## Introducción al ejercicio en C


## Programando en Lenguaje C


## Traduce diagramas de flujo a código en lenguajes de programación

# 6. Conclusiones

## Próximos pasos para aprender programación 