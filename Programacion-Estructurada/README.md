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

Se llama placeholder o marcador de posición, a una etiqueta que le dice al compilador que información debería aparecer en ese espacio. Son usados para presentar en pantalla el contenido de una variable (según su tipo de dato y formato deseado).

![](https://i.ibb.co/VS5kVdB/placeholders.jpg)

Adicionalmente, existe una propiedad de los placeholders llamada truncamiento, la cual permite definir la cantidad de digitos presentados

![](https://i.ibb.co/58GqGgr/ejemplo-truncamiento.jpg)

## Operadores aritméticos


## Operadores de asignación, de incremento y decremento


## Recapitulación: Conceptos Básicos

# 3. Control de flujo


## Condicional if e if - else


## Operadores relacionales y lógicos


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