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
  - [Directorio telefónico:](#directorio-telefónico)
  - [Generando facturas](#generando-facturas)
  - [Control de paso vehicular](#control-de-paso-vehicular)
  - [Agenda personal](#agenda-personal)
  - [Sistema de parqueadero:](#sistema-de-parqueadero)
- [3. Estructuras de control](#3-estructuras-de-control)
  - [If y Else: condicionales y comparaciones para proteger tus algoritmos](#if-y-else-condicionales-y-comparaciones-para-proteger-tus-algoritmos)
  - [`if/else:`](#ifelse)
  - [Switch y Case: condicionales en forma de casos](#switch-y-case-condicionales-en-forma-de-casos)
  - [Algo curioso, ¿qué pasa si seme olvida el break?](#algo-curioso-qué-pasa-si-seme-olvida-el-break)
  - [Excepciones y errores: Throw y Try Catch](#excepciones-y-errores-throw-y-try-catch)
  - [¿Qué es un ciclo? While, For y Do While](#qué-es-un-ciclo-while-for-y-do-while)
  - [Diagrama de flujo con condicionales](#diagrama-de-flujo-con-condicionales)
  - [Diagrama de flujo con ciclos](#diagrama-de-flujo-con-ciclos)
  - [Tutorial de algoritmos de programación](#tutorial-de-algoritmos-de-programación)
  - [Diseña algoritmos para resolver problemas de tu vida diaria](#diseña-algoritmos-para-resolver-problemas-de-tu-vida-diaria)
    - [Desplazamiento entre dos puntos](#desplazamiento-entre-dos-puntos)
    - [Pedir comida a domicilio](#pedir-comida-a-domicilio)
    - [Hacer mercado](#hacer-mercado)
    - [Poner a cargar tu celular](#poner-a-cargar-tu-celular)
    - [Cocinar arroz](#cocinar-arroz)
- [4. Encapsula tu código en funciones](#4-encapsula-tu-código-en-funciones)
  - [¿Qué es una función?](#qué-es-una-función)
  - [Modularización de código](#modularización-de-código)
  - [Flujo de funciones para encapsular algoritmos](#flujo-de-funciones-para-encapsular-algoritmos)
    - [Venta de](#venta-de)
    - [Pagar en una tienda](#pagar-en-una-tienda)
    - [Envío de correos](#envío-de-correos)
    - [Toma de pedidos](#toma-de-pedidos)
    - [Locker para bicicletas](#locker-para-bicicletas)
  - [Nomenclaturas de programación: camelCase, PascalCase, snake_case](#nomenclaturas-de-programación-camelcase-pascalcase-snake_case)
    - [camelCase o CamelCase](#camelcase-o-camelcase)
    - [PascalCase](#pascalcase)
    - [snake_case](#snake_case)
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

Herramientas sobre las cuales se construye un algoritmo. Nos ayudan a construir el flujo de nuestras tareas.

`if/else:`
--
Si se cumple determinada condición se ejecuta acción/código anidada en el if, si no es así se ejecutará la anidada en el else. Esta es muy usada para valida información.


![](https://i.postimg.cc/Pf4wb1Q5/ifelse.webp)

`If-Else` es una estructura de control, que nos permite determinar que acciones tomar dada o no cierta condición.

![](https://i.postimg.cc/j2Gv4Nyc/ifElse.webp)

## Switch y Case: condicionales en forma de casos

El switch/case es una estructura un poco… controversial… Algunos la aman, otros la odian, pero lo importante es saber cuándo es que tenemos que usar esta estructura, ya que si realmente soluciona el problema sin que afecte nuestra legibilidad entonces está bien usado 😄

El switch/case viene a arreglar uno de los problemas que podemos llegar a tener con el if cuando evaluamos muchos casos… el if hell:

![](https://i.postimg.cc/y8tjq2xd/hell.jpg)

Como pueden ver, el código empieza a ser menos legible y más hacia la derecha, por eso el switch/case es importante 😄

Algo curioso, ¿qué pasa si seme olvida el break?
--

Descuida, tu computadora no va a explotar ni nada por el estilo, lo único que pasará es que cuando termine de ejecutar un caso, si no se encuentra ningún break; entonces también ejecutará el siguiente caso y así hasta que encuentre un break; o hasta que se acabe el switch/case 😄

 > witch y Case es una estructura de control, que nos permite evaluar múltiples casos que puede llegar a cumplir una variable y realizar una acción en esa situaciones.

```py
switch (variable){
	caso 1: // intrucciones
		break;
	caso 2: // intrucciones
		break;
	caso 3: // intrucciones
		break;
	deafult: // instrucciones
}
```

## Excepciones y errores: Throw y Try Catch

Al momento de capturar errores o cuando vayas a realizar excepciones en tu código.

`Excepciones`: Son eventos anormales que ocurren durante la ejecución (no funciona como un `else`).

`throw :` Es una herramienta que podemos invocar en cualquier punto nos permite capturar si funciona o no lo que se ejecutó**.**

`try ... catch` Intenta hacer X pero si falla haz Y.

`finally` Sucede después del try y catch.

Estas estructuras son solo para errores de ejecución, no de lógica.

El funcionamiento de un try…catch que esta clásica imagen, lo explica todo por sí sola y es una excelente filosofía de vida:

![](https://i.postimg.cc/bvLvSfnY/try.webp)

> ✨ Una excepción es un error que ocurre en tiempo de ejecución, es decir cuando esta funcionando.

## ¿Qué es un ciclo? While, For y Do While

- `For :` Cuando sabes (o puedes saber) las veces repetirás el ciclo: “5 veces”, “la cantidad de elementos que tiene un arreglo”.

- `While :` Cuando no sabes las veces que se repetirá un ciclo: “reintentar conectarme a una base de datos si falló al hacerlo”

- `Do While :` Cuando no sabes las veces que se repetirá un ciclo y necesitas que se realice por lo menos una vez: “Conectarme a la base de datos, si falló, repetir hasta que me pueda conectar”

El ciclo for también es conocido como un ciclo cuyo final es definido porque siempre sabes cuándo es que el ciclo va a terminar, es decir, tu le pasas un valor, un parámetro, etc. Y el ciclo siempre va a saber cuando tiene que terminar, es muy útil para recorrer arreglos en algunos casos, les dejo un ejemplo de un ciclo for:

```js
for(x = 0; x < 100; x++) {
	Caminar un paso
}
```
Este por ejemplo, me permitirá caminar cien pasos!

Los ciclos while y do…while son conocidos como ciclos interminados porque en muchas ocasiones no sabes cuándo van a acabar, es decir, el ciclo puede terminar en la primera iteración o puede terminar después de 1000 iteraciones, este es un ejemplo de ellos:

```js
x = Escribe un número! Si quieres salir escribe 0

while (x != 0) {
	Has escrito el número x!
}
```

En este caso, podemos ver que se le pide a un usuario que escriba un número y eso se guarda en la variable “x”, y hasta que el usuario no escriba “0” el ciclo no va a parar, por eso es indeterminado, no sabes cuándo el usuario escribirá 0

Para el do…while tengo un ejemplo muy bueno en donde podemos generar números de series aleatorios únicos en nuestra base de datos que no se repitan;

```py
do {
	Genera un número de serie
	Busca si ya existe en la base de datos
} while (existe en la base de datos)
```

De primeras, sabemos que el do…while se va a ejecutar por lo menos una vez, en esa primera vez hago la generación de ese número de serie y luego hago la búsqueda en la base de datos para ver si ya existe, si ya existe entonces volvemos a repetir el ciclo y generamos otro número de serie, y así hasta que encontremos uno que no exista, pero por lo menos se generó una vez 😄

> Los ciclos o bucles, estos nos permiten repetir una o varias instrucciones cuantas veces lo necesitemos. Los mas comunes son: `For`, `While` y `Do While`.

## Diagrama de flujo con condicionales

Tabla que representa muchas de las simbologías que se pueden usar en un diagrama de flujo 

![](https://i.postimg.cc/h43f0mGL/simbolos-diagrama-de-flujo.webp)

Proceso para realizar el encendido de una lampara, utilizando solo If.

![](https://i.postimg.cc/NfHm9Dx9/lamp.webp)

![](https://i.postimg.cc/Z5z3rNff/lamp1.webp)

- [Creately](https://app.creately.com/diagram/KdJJSQTzgN4/edit)

## Diagrama de flujo con ciclos

Mostrando los 50 primeros números pares utilizando el ciclo For.

![](https://i.postimg.cc/PJW4ZkGx/50.jpg)

![](https://i.postimg.cc/QxBNXx3h/for.webp)

## Tutorial de algoritmos de programación

> ✨ Encontrando más motivación para aprender y mejorar habilidades de programación.

![](https://i.postimg.cc/RhpDqBwH/Ciclos-pokemon.jpg)

## Diseña algoritmos para resolver problemas de tu vida diaria

Los algoritmos nos permiten hacer todo de la manera más optimizada, rápida y tomar decisiones ante diferentes situaciones de nuestra vida. Diseña un algoritmo para cada situación planteada en los siguientes ejercicios. Ten en cuenta las variables, las decisiones y las condiciones que harán de tu algoritmo la mejor solución:

### Desplazamiento entre dos puntos

Realiza un algoritmo que te permita ir de tu casa al supermercado más lejano en tu ciudad, ten en cuenta en qué vehículo irás, si hay semáforos, tiempo de ruta y cuál sería la más óptima para llegar en cuanto a tiempo y recursos.

[![dos-puntos.webp](https://i.postimg.cc/0QBr9VVy/dos-puntos.webp)](https://postimg.cc/wyD9VQKC)

### Pedir comida a domicilio

Realiza un algoritmo para pedir comida a domicilio, ten en cuenta que debes buscar primero el medio de contacto hacia el lugar donde deseas ordenar.

[![comida-adomicilio.webp](https://i.postimg.cc/GhkYj1MP/comida-adomicilio.webp)](https://postimg.cc/fJRJw1Qk)

### Hacer mercado

Realiza un algoritmo para ir a realizar el mercado que falta en tu casa, ten en cuenta primero determinar qué elementos te faltan, qué debes hacer paso a paso para llegar al supermercado, seleccionarlos, pagar y volver.

[![mercado.webp](https://i.postimg.cc/9f4QJdm3/mercado.webp)](https://postimg.cc/WDvV4JqS)

### Poner a cargar tu celular

Realiza un algoritmo para cargar tu celular, ten en cuenta si estás cerca de la energía, si tienes el cargador cerca y si tu celular necesita carga o no.

[![cargar-celular.webp](https://i.postimg.cc/TwJM91DM/cargar-celular.webp)](https://postimg.cc/62qm69cY)

### Cocinar arroz

Realiza un algoritmo para cocinar arroz, ten en cuenta la receta, los ingredientes, tiempo de cocción, uso de los elementos en la cocina y demás factores que implican preparar esta comida.

[![arroz.webp](https://i.postimg.cc/v8KXKMLp/arroz.webp)](https://postimg.cc/vDWW1JKz)

# 4. Encapsula tu código en funciones

## ¿Qué es una función?

Yo sé que es difícil entender este tema sin ningún ejemplo gráfico, aquí les pongo un ejemplo:

Imaginemos a la declaración de la función como la creación de una plantilla de código que podrás usar después, declarar una función no es más que simplemente escribir que va a hacer:

```js
function decirHola() {
    imprime "Hola!!"
}
```

Listo, ya tenemos la función declarada, sin embargo, ese código por sí solo no hace nada, tenemos que decirle que haga algo, ¿cómo lo hacemos? ¡Mandándola a llamar!, para mandar a llamarla simplemente escribimos su nombre con un par de paréntesis:

```js
decirHola()
```

¡Listo!, la mandamos a llamar, esto va a imprimir “Hola!!”, ahora, ¿que pasaría si la mandamos a llamar dos veces?

```js
decirHola()
decirHola()
```

Si dijiste que va a imprimir dos veces “Hola!!” estás en lo correcto! Usando funciones podemos empezar a escribir código una sola vez y usarlo cuantas veces lo necesitemos, por eso se dice que las funciones nos permiten reutilizar código, el tema de las funciones es más amplio ya que también podemos retornar valores, por ejemplo:

```js
function suma() {
    retorna 1 + 1;
}

variable x = suma()

```

En este caso, podemos ver que la función se está mandando a llamar justo al lado de una varaible, recuerda que al usar variables es como tener cajitas o canastas, cualquier cosa que devuelva suma() se va a guardar ahí dentro de esa “x”, sin embargo, aquí la palabra clave es ese “retorna” que está dentro de la declaración función, porque eso es lo que especifica que se tiene que devolver algo, en este caso, una suma, por tanto podemos intuir que “x” va a contener el valor del resultado de 1 + 1 😄

También podemos pasar parámetros:

```js
function suma(x, y) {
    retorna x + y;
}

variable x = suma(2, 1)
```

Y seguramente ya estás intuyendo que “x” equivale a 2 y “y” equivale a 1 y así es, los argumentos se pasan dependiendo de la posición en la que los parámetros fueron escritos, es decir, si el primer argumento es “2” entonces ese valor le correponde a “x”, si el segundo algumento es “1” entonces ese valor le corresponde a “y” y así sucesivamente 😄

> Una función nos permite crear un conjunto de líneas de código que realizen una tarea en concreto, y puede retornar o no un valor.
>>
> `Parámetros:` Es el valor que recibirá la función dentro de sus paréntesis y se opera dentro de su bloque de código
>>
> `Argumentos:` Son los valores asignados que serán enviados a los parámetros

## Modularización de código

La modularización permite subdividir una aplicación en partes más pequeñas (llamadas módulos)

☑️ Necesitas tener tu código modularizado te ayudara a armar estructuras en tu Código y tendrás mayor optimización de tu aplicación.

☑️ Deja que cada bloque haga una tarea particular.

☑️ La modularización permitirá que nuestro código sea escalable

☑️ Reutiliza y dinamiza, Nos permite reutilizar valores que podemos utilizar en

diferentes contextos.

☑️ A nivel de funciones y archivos (también podemos modularizar archivos)

Ejemplo :

¿Se acuerdan de estos antiguos estéreos llamados “estéreo modular”?

Ahí está la base de la modularización, estos estéreos eran llamados así porque permitían tener todo por separado, tenías la bocina por un lado, el reproductor por otro lado, etc. Todo estaba bien organizado y cada cosa cumplía una función específica. Lo mismo se aplica a la programación y a los algoritmos, hacer que cada función cumpla con una cosa específica 😄

[![modular.jpg](https://i.postimg.cc/FsFKqdNK/modular.jpg)](https://postimg.cc/py7x5d9N)

## Flujo de funciones para encapsular algoritmos

Ahora que ya has aprendido cómo se crean las funciones, te reto a resolver los siguientes ejercicios donde encontrarás requerimientos muy puntuales para que los conviertas en algoritmos y los pases a funciones que realicen la actividad.

¡Déjame tus resultados en los comentarios! Estaré encantada de ver tu crecimiento.

### Venta de 

En una empresa de viajes se requiere realizar la venta de tiquetes teniendo en cuenta las siguientes consideraciones:

Cada tiquete incluye ciudad de origen, ciudad de destino, fecha, hora, cantidad de puestos y datos del pasajero.

Cada autobús o avión tiene una capacidad máxima de pasajeros, debo avisar cuando se hayan llenado los cupos.

Debes asignar los puestos de cada medio de transporte conforme al orden de compra.

### Pagar en una tienda

En una tienda de ropa se necesita registrar el precio de cada prenda seleccionada y almacenarlo en una única cuenta de cobro por cliente.

  - Cada cuenta de cobro debe indicar:
  - Nombre del cliente
  - Cantidad de prendas
  - Tipo de prenda
  - Valor unitario
  - Valor total (valor unitario de la prenda multiplicado por la cantidad escogida)

Valor total a pagar

### Envío de correos

Debes crear un sistema que permita enviar correos electrónicos masivamente, necesita recibir la lista de destinatarios, el asunto y cuerpo del mensaje; al finalizar el envío, debe mostrar un mensaje de confirmación si todo se ejecutó correctamente.

### Toma de pedidos

Se desea automatizar la toma de pedidos en un restaurante. El pedido debe llegar a la cocina indicando la información de la mesa a la que se le tomó el pedido, el nombre del cliente, los productos que solicitó, la cantidad y la fecha y hora. Cada pedido debe ser despachado en el orden en que fue tomado.

### Locker para bicicletas

En un sistema de locker donde puedes guardar tu bicicleta de manera segura, debes crear un sistema que registre el nombre del usuario, el número de casillero donde se guardó la bicicleta, la fecha y hora de entrada, la fecha y hora de salida y el valor por día de almacenamiento o por horas; al final, debe mostrar el monto a pagar por el tiempo que estuvo guardada en el casillero y notificar la liberación de este espacio.

## Nomenclaturas de programación: camelCase, PascalCase, snake_case

Las nomenclaturas son formas de llamar a elementos, sentencias o acciones más específicas. En programación tenemos diferentes formas que a veces son aplicadas como “reglas” sobre las cuales llevamos uniformidad en el código y un estándar de trabajo especialmente dentro de equipos de desarrollo de software.

### camelCase o CamelCase

Es una práctica de escritura que consiste en la unión de dos o más palabras sin espacios entre ellas, pero las diferencian una letra mayúscula inicial a partir de la segunda palabra, por ejemplo: miNombreEs.

Este nombre está dado porque forman con las letras mayúsculas iniciales la estructura de un camello que sube cuando hay un inicio de palabra y baja durante su definición.

### PascalCase

Es similar a camelCase con una variación bastante simple: desde la primera letra de la frase se inicia con mayúscula cada palabra, sin embargo se mantiene la práctica de no tener espacios entre palabras y cada palabra siempre empieza con su primera letra mayúscula. Por ejemplo: MiNombreEs.

### snake_case

La nomenclatura “serpiente” es definida de esta forma porque siempre la usamos sobre el piso, esto quiere decir que las letras siempre las minúsculas y las diferentes palabras que compongan el nombre o la definición que se desea dar están separadas por un guion bajo de esta forma: mi_nombre_es.

1. 🐫 `camelCase:` Camel Case se suele usar mucho en lenguajes como JavaScript, al declarar nombres de variables o funciones
2. 🗿 `PascalCase:` Esta nomenclatura en más común verla en nombres de clases (concepto que aprenderás en algún futuro 👀)
3. 🐍 `snake_case:` (en lo personal mi favorita porque es más legible) Esta nomenclatura es muy común encontrarla en lenguajes como… ¿adivinas cuál? 👀 Así es, Python, raro sería que Python no usara Snake Case jaja, aunque a mi también me gusta usarla en PHP 😄

- [Case Styles: Camel, Pascal, Snake, and Kebab Case](https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)

## ¿Qué es recursividad? Funciones que se llaman a sí mismas

Para ponerlos en contexto, puedes decirle que camine y que se apague y eso lo podemos hacer mediante código, en este caso, para declarar una función en Karel lo hacemos con la palabra define-nueva-instruccion, para este caso le puse de nombre: caminar, la función hará que el robotito camine solamente si frente-libre, es decir, va a caminar hasta que se tope con un muro, como podemos ver, en el mundo hay un muro que detendrá a Karel:

[![karel.gif](https://i.postimg.cc/4x1ffXP3/karel.gif)](https://postimg.cc/VJdQ4Q3y)

Entonces, puedes ver cómo dentro de la función `caminar` justamente dentro de la condición `si` se manda a llamar de nuevo a la función `caminar`, es decir, se está mandando a llamar así misma, y por cada llamada se ejecuta el código, puedes ver qué parte del código se va ejecutando en este gif.

Coo logras apreciar, eso es recursividad, cuando una función se manda a llamar a si misma, y la recursividad acaba cuando la condición deja de cumplirse, en este caso puedes ver que cuando la condición es falsa está la instrucción `apagate` que es básicamente el fin del programa 😄

> la recursividad, vemos como una imagen se llama a sí mismo dentro de la imagen. Lo mismo aplicaría en las funciones cuando la misma función se llama así misma

[![recursividad.gif](https://i.postimg.cc/7LfZmp1Y/recursividad.gif)](https://postimg.cc/gwbp0tBf)

## Convierte algoritmos con ciclos a funciones recursivas

Ya conoces cómo operan las funciones recursivas, no olvides tener en cuenta una condición bajo la cual podrás detener o permitir el flujo sobre el cual se va a ejecutar ella misma.

A continuación te dejo ejercicios para que conviertas tus algoritmos en funciones recursivas:

### Ejercicio 1

Escribe una función recursiva para un timer que cada 5 minutos se agregue 10 minutos más a su cuenta total.

```js
let ss = 0;
let hh = 0;
let mm = 0;
let time = 0;
function timer(){
    if(ss === 60){
        mm += 1;
        ss = 0;
    }
    if(mm === 60){
        hh += 1;
        mm = 0;
    }
    console.log(`Tiempo actual: ${hh}:${mm}:${ss}`);
    ss += 1;
    time += 1;
    if(time === 300 ){
        mm += 10;
        time = 0
        console.log(`Hora actualizada`)
    }
    setTimeout(timer,1000); 
}
```

### Ejercicio 2

Escribe una función recursiva para encontrar el número mayor de un array.

```js
const miArray = [];
let max = 0;
let min;
    
function llenar(){
    for (let i = 0; i < 10; i++)
    miArray.push(Math.floor(Math.random() * (101 - 1)) + 1);
    console.log(miArray);
}

function numeroMayor(i=0){
    if(miArray==""){
        llenar();
        let max=0;
        min = miArray[0];
    }
    
    if(max < miArray[i]){
        max = miArray[i];
    }
    if(min > miArray[i]){
        min = miArray[i];
    }
    if(i === miArray.length){
        console.log(`El numero mayor de este array es: ${max}`)
        console.log(`El numero menor de este array es: ${min}`)
        return;
    }else{
        i++;
        numeroMayor(i);
    }

}
```

### Ejercicio 3

Escribe una función recursiva para convertir de minúscula a mayúscula el primer y último carácter de un string.

```js
let text = "que funcion tan curiosa";
let first, last, text2;
function mayus(i=0){
    if(i == 0){
        first = text[i].toUpperCase();
    }
    if ( i == text.length-1){
        last = text[i].toUpperCase();
        text2 = first+text.slice(1,text.length-1)+last;
        console.log(`Cadena modificada: ${text2}`);
        return;
    }
    i++;
    mayus(i);
}
```

### Ejercicio 4

Escribe una función recursiva para escribir la serie Fibonacci hasta su décima iteración.

```js
let aux = 0;
let aux2 = 1;
let serie;
function Fibonacci(i=2){
  if(aux == 0 && aux2 == 1 ){
    console.log(aux);
    console.log(aux2);
  }
  serie = aux + aux2;
  aux = aux2;
  aux2 = serie;
  console.log(serie);
  if(i<9){
    i++;
    Fibonacci(i);
  }else{
    return;
  }
}
```

### Ejercicio 5

Escribe una función recursiva para generar un password aleatorio con 20 caracteres combinando letras-números-símbolos-números-letras-día-new-año.

```js
const caracteres = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    ["0","1","2","3","4","5","6","7","8","9"],
    ["!","#","$","&","/","(",")","*","+","-",".","_",","]
]
let pass="";
function ramdom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function newPassword(cont=0){
    let i = ramdom(0,caracteres.length)
    let character = caracteres[i][ramdom(0,caracteres[i].length)]
    pass += character;
    cont++;
    if(cont === 20){
        console.log(`Su nueva contraseña es: ${pass}`);
        return
    }
    newPassword(cont);
}
```

## ¿Cómo desarrollar tu lógica de programación?

> Programar es un arte más complejo que solo seguir instrucciones

Muchas personas piensan que aprender programación es tan simple como seguir una receta para preparar platillos de cocina, pero no se trata de seguir instrucciones y listo. ¡Es mucho más! ¡Creaste una nueva aplicación!

En la programación es muy raro que uno haga esto, luego aquello y ya está todo funcionando. En esta carrera es necesario inspirarnos, ser muy creativos y desarrollar ideas para encontrar una solución funcional.

Al trabajar en la resolución de un algoritmo desconocido será muy complicado encontrar una solución a la primera sin antes analizar el problema, lo que te llevará a inventar ese código que dará la solución al algoritmo que antes era desconocido para ti… pero ya no lo es más.

En este punto tal vez piensas que eso va a ser imposible para ti. Respira profundo, eso no pasa de la noche a la mañana. La lógica de programación es una habilidad que puedes desarrollar y entrenar.

### ¿Cómo se desarrolla la lógica de programación?

Puedes realizar juegos mentales, acertijos, resolver puzzles… hasta aprender matemáticas, sí, las matemáticas que no te gustaron en la secundaria (o el tan odiado -por algunos- libro de Álgebra de Baldor) son herramientas que te ayudarán con esta tarea.

Creo que apenas mencioné matemáticas te dejo de gustar la idea. Pero siempre hay formas más amigables como lo es resolver puzzles ¿No sabes cuáles o dónde encontrarlas? Si tienes un celular en la tienda de aplicación de tu teléfono, te aseguro que encontrarás muchísimas opciones.

En lo personal yo te sugeriría que buscarás algún Sudoku, pero si los números no son lo tuyo, te sugiero que pruebes Nonogram. Esta aplicación tiene varios tableros de rompecabezas y en ellos lo que tienes que hacer es colorear las celdas correctas de una cuadrícula, de acuerdo con los números a los lados de la misma, todo esto con el fin de revelar una imagen oculta.

¿Conoces más aplicaciones? ¿Cuál es tu favorita? Compártela en los comentarios de esta clase para que podamos conocer más y quizás descubrir nuestro siguiente juego de lógica favorito.

Si tienes algún otro método con el que disfrutes de desarrollar esta habilidad llamada lógica, también compártelo en los comentarios, nos encantaría saber cómo lo haces tú.

> El método que utilicé para desarrollar mi lógica, simplemente fue realizar todos los ejercicios propuestos de algoritmos que encontré dando soluciones alternas. La practica desde mi punto de vista es indispensable.

- [omegaUp](https://omegaup.com/problem/collection/problemLevelBasicKarel/)

## Resolviendo acertijos

Tu lógica de programación también se puede entrenar con acertijos, así que te dejaré cinco acertijos clásicos para que pienses un poco en ellos y te diviertas resolviéndolos antes de pasar a la siguiente clase donde verás cómo traducir tus algoritmos a diferentes lenguajes de programación.

¡No olvides resolver cada acertijo antes de ver su solución!

Acertijos
1. El camino del monje
Un monje parte al amanecer de su monasterio hasta la cima de una montaña, donde llega tras un camino de varias horas. Se queda a descansar, dormir y sale por la mañana de la montaña a la misma hora para regresar a su monasterio.

Es posible que no tardara lo mismo en ir que en volver y da igual que su velocidad no fuera constante o cuándo/cuántas veces pare a descansar: el monje pasó por algún punto del camino exactamente a la misma hora, pero con un día de diferencia. ¿Por qué?

2. La sucesión más difícil
¿Qué número sigue en esta sucesión numérica: 1 - 2 - 4 - 5 - 8 - 1000…

3. La puerta infernal
Estás encerrada o encerrado en una habitación con dos puertas vigiladas por dos centinelas. Una lleva a la libertad, pero la otra a la muerte segura. Puedes elegir una puerta y antes puedes hacer una pregunta a uno de los centinelas. Hay un problema: uno de ellos siempre dice la verdad, pero el otro siempre miente. ¿Qué pregunta harías para salvar tu vida?

4. Los sombreros
En una mesa hay tres sombreros negros y dos blancos. Tres personas se ponen un sombrero al azar sin mirar el color y se colocan en fila india (es una fiesta un poco rara). El tercero ve el color de los dos que tiene delante y se le pregunta si sabría decir cuál es el color de su sombrero. Contesta que no. El segundo solo puede ver el sombrero del primero. Se le hace la misma pregunta y contesta que no. El primero no ve ningún sombrero, pero sabe perfectamente de qué color es el suyo. ¿Qué lógica siguió?

5. Las manzanas
Tienes una frutería y te han repartido tres cajas: una tiene solo manzanas; otra solo naranjas; la tercera, manzanas y naranjas. Cada caja tiene una etiqueta: “manzanas”, “naranjas” y “manzanas y naranjas”. Ninguna de las cajas tiene la etiqueta que le corresponde. ¿Cómo puedes saber la fruta que contiene cada una de las cajas sacando una sola pieza de una sola de ellas?

Soluciones
1. El camino del monje
Imaginemos que se trata de dos monjes que salen a la misma hora de puntos opuestos: si siguen el mismo camino, en algún momento se tendrán que cruzar.

2. La sucesión más difícil
–> 1001 <-- Es el siguiente número que en castellano se escribe sin e.

3. La puerta infernal
“¿Qué diría el otro centinela si le pregunto cuál es la puerta segura?”.

Si mi centinela miente y el otro dice la verdad, mi centinela me dirá cuál es la puerta que lleva a la muerte. Si mi centinela dice la verdad y el otro miente, también me dirá cuál es esa puerta, ya que es la que el otro me diría. Solo hay que escoger la opuesta a la que me contesten.

4. Los sombreros
Si el último no sabe de qué color es su sombrero, eso significa que los otros dos no son blancos, porque si no, sabría que el suyo es negro. Así que hay uno blanco o los dos son negros.

El segundo ha deducido esto mismo al oír lo que dice el primero, así que si no sabe de qué color es su sombrero es porque el primero es negro. Si el del primero fuera blanco, sabría que el suyo es negro porque los dos no pueden ser blancos.

Por tanto, el primero sabe que su sombrero es negro.

5. Las manzanas
Has de coger una pieza de la caja que dice “manzanas y naranjas”. Como todas están mal etiquetadas, incluida esta, no necesitas saber más.

Si es una manzana, esta es la caja de las manzanas. Las naranjas están en la etiquetada como “manzanas” y la caja que queda, la de “naranjas”, contiene naranjas y manzanas.

Si es una naranja, tienes la caja de las naranjas. La etiquetada como “naranjas” contiene manzanas. Y la que tiene la etiqueta “manzanas” guarda naranjas y manzanas.

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