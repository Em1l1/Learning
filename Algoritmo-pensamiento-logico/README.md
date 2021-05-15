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
    - [¿Cómo representamos esto en software?](#cómo-representamos-esto-en-software)
  - [¿Qué es el sistema binario?](#qué-es-el-sistema-binario)
    - [Suma](#suma)
    - [Resta](#resta)
    - [Acarreo](#acarreo)
    - [Multiplicación y división](#multiplicación-y-división)
  - [Metodología para construir un algoritmo: requerimientos y proceso mental](#metodología-para-construir-un-algoritmo-requerimientos-y-proceso-mental)
- [2. Tipos de datos y operadores lógicos](#2-tipos-de-datos-y-operadores-lógicos)
  - [¿Qué son Bits y Bytes?](#qué-son-bits-y-bytes)
    - [¿Qué es un bit?](#qué-es-un-bit)
    - [¿Qué son bytes?](#qué-son-bytes)
  - [¿Qué son variables, constantes y tipos de datos?](#qué-son-variables-constantes-y-tipos-de-datos)
    - [Constantes](#constantes)
    - [Variables](#variables)
    - [Tipos de datos](#tipos-de-datos)
  - [Identifica las variables según los requerimientos de negocio](#identifica-las-variables-según-los-requerimientos-de-negocio)
    - [Cajero electrónico](#cajero-electrónico)
    - [Usar un chat](#usar-un-chat)
    - [Pagar con tarjeta de crédito](#pagar-con-tarjeta-de-crédito)
    - [Lavar la ropa](#lavar-la-ropa)
    - [Hablar por teléfono](#hablar-por-teléfono)
  - [Strings (texto) y concatenación](#strings-texto-y-concatenación)
  - [Números y operaciones matemáticas básicas](#números-y-operaciones-matemáticas-básicas)
  - [Operaciones matemáticas compuestas: paréntesis y orden de evaluación](#operaciones-matemáticas-compuestas-paréntesis-y-orden-de-evaluación)
  - [True y false: booleanos y tablas de la verdad](#true-y-false-booleanos-y-tablas-de-la-verdad)
  - [Arrays y funciones sobre arrays](#arrays-y-funciones-sobre-arrays)
  - [¿Cómo diseñar algoritmos con diagramas de flujo?](#cómo-diseñar-algoritmos-con-diagramas-de-flujo)
  - [Define el tipo de dato según los requerimientos de negocio](#define-el-tipo-de-dato-según-los-requerimientos-de-negocio)
    - [Ejercicio 1: Directorio telefónico](#ejercicio-1-directorio-telefónico)
    - [Ejercicio 2: Generando facturas](#ejercicio-2-generando-facturas)
    - [Ejercicio 3: Control de paso vehicular](#ejercicio-3-control-de-paso-vehicular)
    - [Ejercicio 4: Agenda personal](#ejercicio-4-agenda-personal)
    - [Ejercicio 5: Sistema de parqueadero](#ejercicio-5-sistema-de-parqueadero)
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

En el día a día solemos referirnos a la velocidad de internet, tamaños de archivos, capacidad de dispositivos de almacenamiento, dispositivos móviles y muchos elementos tecnológicos que están dados en términos de bits, bytes, gigabytes, megabytes, etc. Pero, ¿sabemos en realidad a qué estamos haciendo referencia?

Estos términos hacen referencia a medidas de almacenamiento de datos y parten inicialmente de un “bit”, que es la unidad de información más pequeña de una computadora que puede tener solo un estado: 1 o 0. De ahí en adelante seguimos hablando de bits, pero, en mayor medida, con mayor capacidad y mayor magnitud.

### ¿Qué es un bit?

En la clase de sistema binario estudiamos sobre verdaderos y falsos, cuando hay carga y cuando no hay carga, y aprendimos que esto lo representamos con 1 y 0.

En realidad, el término “bit” es el acrónimo de “binary digit”, que hace referencia a los dígitos binarios que le indican a nuestro ordenador que hay o no carga de corriente. Sin embargo, este es solo el punto de partida porque desde aquí, pero en cargas mayores, empezamos a expresar otras medidas más grandes e incluso más comunes.

### ¿Qué son bytes?

La definición de bytes concluye que un byte son el conjunto de 8 bits y que a su vez representan el valor de una letra. Sin embargo su valor y significado va más allá de eso, porque de estos 8 bits, 7 son de información y uno adicional es de control.

De esta manera, cuando hablamos de velocidad de internet, por ejemplo, podemos referirnos a 200 kilobits, pero hablar de 200 kilobytes será más adecuado porque esta última cantidad es 8 veces mayor a los primeros 200 kilobits.

![](https://i.ibb.co/r5DwpbS/bite1.jpg)

> Un bit permite representar verdadero y falso, 1 y 0 respectivamente. En cambio un byte equivale a 8 bits, esto nos permite representar letras, números, símbolos.

![](https://i.ibb.co/xCgWMTs/bit.webp)

![](https://i.ibb.co/1fnR5wh/bit-byte.webp)



## ¿Qué son variables, constantes y tipos de datos?

Una variable es aquella que puede cambiar su valor, en cambio una constante es donde persiste el valor. Las variables pueden tener valores numéricos, textos o lógicos.

### Constantes

Una constante es un valor que no puede ser alterado durante la ejecución de un programa. Las constantes se definen en el código de un programa o aplicación y es el único sitio donde pueden ser modificadas.

Por ejemplo, si queremos que el tamaño de todos los botones de una aplicación sea 50, bastaría con definir una constante TamanoBoton y asignarle el valor 50. Así, cada vez que quisiéramos crear un botón nuevo, le asignaríamos como valor de tamaño nuestra constante TamanoBoton. En caso de que quisiéramos modificar el tamaño de todos los botones una vez escrito todos el programa, simplemente tendríamos que modificar el valor de TamanoBoton.

### Variables

Una variable es similar a una constante, salvo que su contenido se puede modificar durante la ejecución de un programa o aplicación. Esto nos permite utilizar valores que introduce el usuario para modificar la ejecución del programa.

Por ejemplo, podríamos definir una variable NombreUsuario, en la que se almacenará el dato que corresponde con el nombre de un usuario que ha introducido al iniciar una aplicación. Este valor se mantendrá hasta que otro usuario inicie la aplicación de nuevo e introduzca su nombre.

### Tipos de datos

![](https://i.ibb.co/8dXr4D4/tipos-de-datos.jpg)

- Entero: `5, 2, 4, 5, 3`
- Decimales: `3.2 , 6,5`
- Cadenas: `“Hola”, “hey”, “si”`
- Lógica: `“True” , “False”`


## Identifica las variables según los requerimientos de negocio

Es momento de identificar qué variables necesitarás para resolver las siguientes situaciones.

### Cajero electrónico

Qué variables necesito para llevar a cabo el funcionamiento de un cajero automático en el cual solo realizaré la acción de sacar dinero en efectivo.

### Usar un chat

Qué variables debo tener en cuenta para hablar con un amigo a través de una aplicación de mensajería instantánea, teniendo en cuenta que solo le puedo enviar mensajes si está conectado a la aplicación.

### Pagar con tarjeta de crédito

Estás en la caja de un supermercado y necesitas realizar el pago de tus productos usando una tarjeta de crédito porque es el único medio de pago que reciben. ¿Qué variables necesitas?

### Lavar la ropa

Necesitas lavar tu ropa, pero debes tener en cuenta los diferentes factores que necesitarás para llevar a cabo esta tarea. ¿Tienes lavadora? ¿Lo harás a mano? ¿Qué necesitas?

### Hablar por teléfono

Es momento de llamar a un amigo por teléfono, debes tener en cuenta varios puntos importantes: ¿Tienes teléfono? ¿Está tu amigo disponible? ¿Qué necesitas para realizar esta llamada?

![](https://i.ibb.co/HXsNds4/Cajero-Automatico.jpg)

## Strings (texto) y concatenación

Conociendo strings:

Bien, si lo traducimos a español sería algo como “cadena”, sin embargo, su verdadero nombre o traducción es “cadena de caracteres”. Si le damos un poco de interpretación a esta traducción podemos deducir que se trata de un carácter ligado a otro y así de forma consecutiva, ¡Sí!, son caracteres singulares que están pegados los unos a los otros y en conjunto forman una cadena, de ahí su nombre string.

Para entenderlo mejor, un caracter no es más que un simple símbolo o una simple letra, es decir, la letra “b” sería un carácter.

En algunos lenguajes como C++ no existe como tal un tipo de dato String, ahí lo más que existe son caracteres, es decir, en C solo puedes guardar un caracter.

Esto lleva a que en C, por ejemplo, usemos trucos como declarar un arreglo (es una especie de variable que puede guardar muchos valores dentro) de caracteres para formar un string, que repito, es básicamente una cadena de caracteres.

Es por eso que se les suele llamar strings en el ámbito de programación en general 😄

 C, el tipo de dato más pequeño es el char, y, ¿qué significa “char”?

¡Exacto! Char es caracter, por ende la única diferencia es la manera en que lo utilizamos, ya sea al imprimirlo si le decimos que es de tipo número nos imprimirá el valor de dicho número, pero si le decimos que lo interprete como caracter entonces veremos en pantalla el caracter que pertenece a ese numero.

```c
#include<stdio.h>

intmain(){
	unsignedchar caracter = 72;
	printf("%d", caracter); // 72
	printf("%c", caracter); // H
	return0;
}
```

## Números y operaciones matemáticas básicas

Existen los siguiente tipos de datos

  - `Int`
  - `Float`
  - `Short`
  - `Long`
  
Los enteros son los que no tienen decimales como por ejemplo el 3, 5, 10, 12.
Los float son lo contrario estos mas bien si tienen un numero decimal como por ejemplo 2.4, 5.3…

Los short y los longs se basan en el tamaña que pueden almacenar
  - Short - Manejan 2 bytes
  - Long - Manejan 8 bytes

Operadores para operaciones matemáticas

  - (+) Para realizar sumas
  - (-) Para realizar restas
  - (*) Para realizar multiplicaciones
  - (/) Para realizar divisiones
  
Debemos tener cuidado con el tipo de dato y las operaciones por que podemos obtener resultados distintos. Debemos hacer una correcta conversión.

![](https://i.ibb.co/CBsKZS1/Valores-de-las-tipos-de-datos.webp)

![](https://i.ibb.co/myc2Nv2/mate.webp)

## Operaciones matemáticas compuestas: paréntesis y orden de evaluación

La inmensa mayoría de lenguajes de programación obedecen la jerarquía de opearicones matemáticas, también se les llama orden de precedencia, les dejo esta imagen donde se explica cuál es la precedencia más importante que se suele resolver primero 😄 Recordemos que todo lo que está entre paréntesis será lo que se resuelva primero.

![](https://i.ibb.co/1zCMWz2/jerarquia-de-operaciones.jpg)

Utilizar la técnica pemdas ( Con sus siglas en ingles) Donde nos explica perfecto el orden jerárquico para realizar una operación matemática compuesta.

  - Parenthesis
  - Exponents
  - Multiplication, Division
  - Addition, subtraction

![](https://i.ibb.co/XbRjK60/pemdas.jpg)

## True y false: booleanos y tablas de la verdad

Pero lo más importante es, no tienes que aprenderte todas las tablas de memoria, de hecho, no te sirve de nada apredertelas de memoria, tienes que aprender a cómo funcionan para que tu puedas generar tus porpias tablas, esa es la manera en la que realmente puedes sacarle provecho a las tabals de verdad porque, más adelante, empezarás a tener comparaciones, de 3, 4, 5 o muchos más valores, comprenderlas es la mejor manera de asegurar que sabes dominarlas 😄

![](https://i.ibb.co/p4xBRd1/tablas-de-verdad.webp)

Las tablas de verdad nos permiten analizar expresiones matemáticas y determinar su valor de verdad, es decir si nuestro razonamiento es válido o no.

- [Qué son tablas de verdad y compuertas lógicas | PlatziLive - YouTube](https://www.youtube.com/watch?v=Pfyuv5ZnNNw)

## Arrays y funciones sobre arrays

✨ Los vectores(arrays) permite guardar un conjunto de datos. Para acceder a cada elemento del vector se utiliza el índice, podemos tener vectores mutables e inmutables dependiendo del lenguaje de programación.

![](https://i.ibb.co/9hFQGgY/array.gif)

 `Mutabilidad`

  - Que puede cambiar su tamaño, cantidad de elementos

 `Inmutabilidad`

  - No puede cambiar su tamaño, cantidad de elementos.


- [Qué es un arreglo en programación | Curso de Fundamentos de C# con .NetCore - YouTube](https://youtu.be/ySVfms45Qkg)

## ¿Cómo diseñar algoritmos con diagramas de flujo?

![](https://i.postimg.cc/Cxj3NXt0/Diagram.webp)
- [Flowchart Maker & Online Diagram Software](http://draw.io/)

## Define el tipo de dato según los requerimientos de negocio

Es momento de aplicar lo aprendido y que identifiques cuántas variables y qué tipo de datos necesitarás para cada uno de los siguientes casos.

### Ejercicio 1: Directorio telefónico

Necesitas almacenar tus contactos en una aplicación, para cada uno necesitas: nombre, número telefónico y correo electrónico.

### Ejercicio 2: Generando facturas

En tu negocio necesitas emitir facturas que indiquen el nombre del cliente, número de identificación, teléfono, dirección, nombre del producto o servicio, cantidad, valor unitario, valor total por cada producto y valor total a pagar.

### Ejercicio 3: Control de paso vehicular

En la carretera necesitas controlar el paso de vehículos por una zona determinada. La condición es el pago del servicio; si este se realizó puede pasar, en caso contrario no podrá continuar.

### Ejercicio 4: Agenda personal

Debes controlar tus compromisos de cada día, para esto realiza una agenda digital que permita mostrar tus espacios de tiempo disponibles y al seleccionar un espacio disponible se solicita nombre, correo electrónico y motivo del agendamiento.

### Ejercicio 5: Sistema de parqueadero

En un parqueadero de bicicletas debes validar si un espacio está vacío, en caso que sea verdadero debes permitir parquear tu bicicleta y almacenar la fecha y hora en la cual fue parqueada para así generar el cobro por minutos. Al finalizar el uso del espacio, debes tomar la fecha y hora nuevamente para calcular cuánto pagarás, teniendo en cuenta que cada minuto que estuvo parqueada costó $1.

Directorio telefónico:
--
  - nombre: String
  - Número telefónico: String (sí, string, es más fácil guardarlos en una cadena, además de l “+” del código de país)
  - Correo electrónico.: String

Generando facturas
--
  - nombre del cliente: String
  - número de identificación: String
  - Teléfono: String
  - dirección: String
  - nombre del producto o servicio: String
  - cantidad: Integer
  - Valor unitario: Float
  - valor total por cada producto: Float
  - valor total a pagar: Float

Control de paso vehicular
--
  - pago del servicio: Lógico/Booleano
  
Agenda personal
--
  - nombre: String
  - correo electrónico: String
  - motivo del agendamiento: String … Aunque en una base de datos sería Text 🤔 (just chilling jaja)

Sistema de parqueadero:
--
  - Espacio vacio: Lógico/Boolean
  - fecha y hora: String
  - Tiempo parqueada: Integer
  - Tarifa por minuto: Integer

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