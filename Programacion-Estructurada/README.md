<h1>Programación Estructurada</h1>

<h3>Daniela Coyotzi</h3>

<h1>Tabla de Contenido</h1>

- [1. Introducción](#1-introducción)
  - [Introducción al curso](#introducción-al-curso)
- [2. Conceptos básicos](#2-conceptos-básicos)
  - [Set up de codeblocks y compilador](#set-up-de-codeblocks-y-compilador)
  - [¿Qué es un compilador?](#qué-es-un-compilador)
  - [¿Qué hace un compilador?](#qué-hace-un-compilador)
  - [¿Qué es codeblocks?](#qué-es-codeblocks)
  - [¿Qué es openSource?](#qué-es-opensource)
  - [Variables y tipos de datos (Asignación y clasificación)](#variables-y-tipos-de-datos-asignación-y-clasificación)
  - [Diseño de programas de software](#diseño-de-programas-de-software)
  - [Tipos de datos primitivos](#tipos-de-datos-primitivos)
  - [¿Qué es una variable?](#qué-es-una-variable)
  - [Entrada y salida de datos](#entrada-y-salida-de-datos)
  - [Operadores aritméticos](#operadores-aritméticos)
  - [Operadores de asignación, de incremento y decremento](#operadores-de-asignación-de-incremento-y-decremento)
  - [Recapitulación: Conceptos Básicos](#recapitulación-conceptos-básicos)
- [3. Control de flujo](#3-control-de-flujo)
  - [Condicional if e if - else](#condicional-if-e-if---else)
  - [Operadores relacionales y lógicos](#operadores-relacionales-y-lógicos)
  - [Switch](#switch)
  - [¿Qué es un iterador? - Ciclo While](#qué-es-un-iterador---ciclo-while)
  - [Ciclo For](#ciclo-for)
  - [Ciclo Do-While](#ciclo-do-while)
  - [Arreglos unidimensionales](#arreglos-unidimensionales)
  - [Arreglos bidimensionales](#arreglos-bidimensionales)
  - [Arreglos e iteradores unidimensionales](#arreglos-e-iteradores-unidimensionales)
  - [Arreglos e iteradores bidimensionales](#arreglos-e-iteradores-bidimensionales)
  - [Cadena de caracteres (string)](#cadena-de-caracteres-string)
  - [Recapitulación: Control de Flujo](#recapitulación-control-de-flujo)
- [4. Funciones](#4-funciones)
  - [Funciones: Divide y vencerás](#funciones-divide-y-vencerás)
  - [Variables locales y globales](#variables-locales-y-globales)
  - [Recapitulación: Funciones](#recapitulación-funciones)
- [5. Conceptos avanzados](#5-conceptos-avanzados)
  - [Recursividad](#recursividad)
  - [Apuntadores](#apuntadores)
  - [Struct y manejo de archivos](#struct-y-manejo-de-archivos)
  - [Escritura y lectura de archivos](#escritura-y-lectura-de-archivos)
  - [Manejo de librerías](#manejo-de-librerías)

# 1. Introducción

## Introducción al curso

La programación estructurada es una técnica para escribir programas orientados a mejorar la claridad, calidad y tiempo de desarrollo de un programa de computadora recurriendo únicamente a subrutinas y tres estructuras básicas: `secuencia`, `selección` `(if y switch)` e iteración `(bucles for y while)`

- [Programacion-estructurada.pdf](https://drive.google.com/file/d/1WJo5htqCD4GS782_rr95oamBR7-a6z84/view?usp=sharing)

Este curso es una excelente base, pues se estudia el paradigma de programación estructurada en lenguaje C.

¿Por que en C?

El lenguaje C es altamente portable, es decir, podemos trabajarlo desde muchos dispositivos.
Permite trabajar directamente en la memoria, mientras otros lenguajes tienen esta limitación. Lo que da gran libertad al programador.
Posee estructuras de datos fuertemente tipadas, facilitando la comprensión de las mismas.
Permite trabajar con código de bajo nive, logrando interacciones donde ortos lenguajes no llegan.
A final de cuentas, puedes conocer distintos lenguajes y optar por el que te haga sentir más cómodo 😉

# 2. Conceptos básicos

## Set up de codeblocks y compilador

Un entorno de desarrollo integrado o entorno de desarrollo interactivo, en inglés Integrated Development Environment (IDE), es una aplicación informática que proporciona servicios integrales para facilitarle al desarrollador o programador el desarrollo de software.

- `Code ::` Blocks es un IDE multiplataforma gratuito y de código abierto que admite múltiples compiladores, incluidos GCC, Clang y Visual C ++.

Se desarrolla en C ++ usando wxWidgets como el kit de herramientas GUI.

IDE (Entorno de desarrollo integrado) para escribir nuestro código.

¿Qué es un compilador?
--
Es el encargado de traducir el lenguaje de programación que utilizamos al lenguaje maquina (lenguaje binario), es decir ceros y unos.

¿Qué hace un compilador?
--

como lo dice su nombre se encarga de compilar, en este caso compila nuestros programas transmitiendolos a la maquina para que nuestro programa funcione.

¿Qué es codeblocks?
--
es un IDE openSource que nos servirá para programar en C y compilar.

¿Qué es openSource?
--
De código abierto”.

- [Code::Blocks](http://www.codeblocks.org/)

## Variables y tipos de datos (Asignación y clasificación)

Diseño de programas de software
--
  - Análisis
  - Diseño
  - Programación
  - Codificación
  - Prueba
  - Mantenimiento
  - Documentación
  
Un tipo de dato es una clasificación que el programador le da a la información almacenada para avisarle al compilador cómo va a ser interpretada.

Tipos de datos primitivos:

- Numéricos: `int` (números enteros), float (números decimales)
- Caracteres:  `char`
- Booleanos: `bool` (True or false)

```c
int entero; //-32768 a 32767
float decimales;//3.4E-38 a 3.4E+38
char caracteres;//-128 a 127
```

Una variable es un espacio reservado en memoria, definido por un tipo de dato y un nombre asignado, en el cual se puede guardar un valor y se puede modificar.

Un tipo de dato es:

  - una clasificación que el programador le da a la información almacenada para avisarle al compilador cómo va a ser interpretada.
  - un espació en memoria con restricciones.

![](https://i.ibb.co/ccL3dDD/variable.jpg)

¿Qué es un tipo de dato?

Es una clasificación que el programador le da a la información almacenada para avisarle al compilador cómo va a ser interpretada.

Un tipo de dato es, en esencia, un espacio en memoria con restricciones.

Tipos de datos primitivos
--


- Numérico: `int (52, -999, 1853), float (3.1416, 0.0001)`
- Caracteres: `char (‘P’ ‘L’ ‘A’ ‘T’ ‘Z’ ‘I’)`
- Booleanos: `bool (Representa algo que puede ser verdadero <TRUE> o falso <FALSE>)`

¿Qué es una variable?
--
Es un espacio reservado en memoria, definido por un tipo de dato y un nombre asignado, en el cual se puede guardar un valor y se puede modificar.

Declaración de una variable en C

```c
main()
}
int healthpoints;
}
```

Asignación de datos a una variable

```c
main()
}
int healthpoints;
healthpoints = 100;
}
```

Iniciailización de una variable

```c
main()
{
Int healthpoints = 100;
}
```

## Entrada y salida de datos

En un programa, los datos de entrada son los que la computadora va a procesar. Los datos de salida son datos derivados, es decir, obtenidos a partir de los datos de entrada. Por esta razón, a los datos de salida se les considera más significativos que a los datos de entrada. Ambos tipos de datos son información (textos, imágenes, sonidos, videos, …) que maneja la computadora. Sin embargo, en un sentido más filosófico, a los datos de entrada se les considera la materia prima de los datos de salida, considerados estos como la verdadera información.

Se llama placeholder o marcador de posición, a una etiqueta que le dice al compilador que información debería aparecer en ese espacio. Son usados para presentar en pantalla el contenido de una variable (según su tipo de dato y formato deseado).

![](https://i.ibb.co/VS5kVdB/placeholders.jpg)

Adicionalmente, existe una propiedad de los placeholders llamada truncamiento, la cual permite definir la cantidad de digitos presentados

![](https://i.ibb.co/58GqGgr/ejemplo-truncamiento.jpg)

## Operadores aritméticos

Los operadores los utilizamos para realizar operaciones aritméticas en nuestras funciones. Algunos operadores son:

  - Suma: +
  - Resta: -
  - Multiplicación: *
  - División: /
  - Módulo: %
  
La operación módulo obtiene el resto de la división entre dos números.

## Operadores de asignación, de incremento y decremento

El operador de asignación “=” asigna el valor del lado derecho del operador a la variable en el lado izquierdo.

Los operadores de asignación compuestos: realizan una operación y una asignación en una sola declaración.
Ejemplo:

```c
int x = 42;
x += 2; //Equivalente a x = x +2
x -= 6; //Equivalente a x = x - 6
```

Operadores de Incremento y decremento.
operador de incremento, por ejemplo:

```c
int miNumero = 7;
miNumero++;
//salida 8
```

El operador de decremento (- -) _funciona de la misma forma que el operador de incremento,pero en lugar de incrementar el valor, lo disminuye en uno.

El operador de incremento tiene dos formas prefijo y sufijo.

- x; prefijo
- x; sufijo

La variante de prefijo incrementa el valor y luego continua con la expresion.
La variante de sufijo evalua la expresion y luego ejecuta el incremento.
Ejemplo de prefijo:

```c
int x = 3;
int y = x++;
//x es 4, y es 4
```

Ejemplo de sufijo:

```c
int x = 3;
int y = x++;
// x es 3, y es 4
```
Conclusion: El ejemplo de prefijo incrementa el valor de “x” , y luego se lo asigna a “y”.
el ejemplo de sufijo asigna el valor de “x” a “y” y luego incrementa el valor de “x”.

> Los operadores de asignación, de incremento y decremento:
nos ayudan a simplificar “la escritura de nuestro código”.

Podemos declarar dos variables en una sola linea.

[![incremento.jpg](https://i.postimg.cc/2SQ7L81J/incremento.jpg)](https://postimg.cc/4Y39rGbb)

## Recapitulación: Conceptos Básicos

Como lo hablamos en el curso un tipo de dato es una clasificación que el programador le da a la información almacenada para avisarle al compilador cómo va a ser interpretada.

Los tipos de dato que vimos en el curso son:

  - `int` - Números enteros. p/e 0, -50, 1234
  - `float` - Números decimales. p/e -0.45, 12.5, 3.1416
  - `char` - Caracteres. p/e ‘C’ ‘a’ ‘z’
  - `bool` - Valor lógica binaria. p/e true y false
  
Estos tipos de dato que representan información pueden ser almacenados en la computadora, para esto utilizamos variables.

Las variables son un espacio reservado en memoria, definido por un tipo de dato y un nombre asignado, en el cual se puede guardar un valor y se puede modificar.

Siempre que nosotros queremos utilizar datos necesitamos reservar espacio en nuestra memoria. Aunque durante el curso usamos la palabra crear para explicar cómo utilizar una variable, en realidad el término correcto sería reservar, porque no estamos creando es espacio en la memoria, estamos reservando espacio para guardar ahí información.

Para reservar espacio en memoria para nuestros datos nosotros podemos declarar una variable, que signifca solo reservar el espacio o inicializar la variable que significa reservar el espacio y darle un valor inicial también.

La sintaxis para estos diferentes casos son:

[![variable.webp](https://i.postimg.cc/V678rNbz/variable.webp)](https://postimg.cc/47hMjs50)

Para inicializar una variable nosotros usamos un operador de asignación, este es el operador =, con este indicamos que a la variable anterior le estamos asignando un valor específico.

Otros operadores de asignación pueden ser:

  - +=
  - -=
  - *=
  - /=
  - %=

Que como vimos en el curso, teniendo en cuenta una variable a, son una versión abreviada de:

  - a += 3 ------ a = a + 3
  - a -= 3 ------ a = a - 3
  - a *= 3 ------ a = a * 3
  - a /= 3 ------ a = a / 3
  - a %= 3 ------ a = a % 3
  
Estos operadores nos sirven para abreviar una operación y asignar el valor dentro de la misma variable.

Otros operadores que podemos utilizar son los operadores numéricos, estos son:

  - (+) Suma
  - (-) Resta
  - (*) Multiplicación
  - (/) División
  - (%) Módulo
  
Estos los conocemos de matemáticas básicas y el único distinto es el operador de módulo.
Este operador realiza una división, pero en vez de darnos el resultado de la división nos da el residuo de la división.

# 3. Control de flujo

## Condicional if e if - else

Las condicionales son instrucciones que evalúan resultados booleanos (true or false), generalmente usados para alterar el flujo de un programa.

Una sentencia condicional es una instrucción o grupo de instrucciones que se pueden ejecutar o no en función del valor de una condición.

Ejemplo:

```c
main(){
        if (vidasExtras == 0){
                printf(""Game Over"");
        }
}
```

## Operadores relacionales y lógicos

Los operadores relacionales son:

  - Menor que (<)
  - Menor o igual que (<=)
  - Mayor que (>)
  - Mayor o igual que (>=)
  - Igual que (==) : Comparación
  - No igual que (!=) : Diferente

Los operadores lógicos son:

  - AND (&&) : Y
  - OR (||) : O
  - NOT (!) : No

## Switch


## ¿Qué es un iterador? - Ciclo While


## Ciclo For


## Ciclo Do-While


## Arreglos unidimensionales


## Arreglos bidimensionales


## Arreglos e iteradores unidimensionales


## Arreglos e iteradores bidimensionales


## Cadena de caracteres (string)


## Recapitulación: Control de Flujo

# 4. Funciones


## Funciones: Divide y vencerás


## Variables locales y globales


## Recapitulación: Funciones

# 5. Conceptos avanzados


## Recursividad


## Apuntadores


## Struct y manejo de archivos


## Escritura y lectura de archivos


## Manejo de librerías