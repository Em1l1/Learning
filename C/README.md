<h1>Introducción a C</h1>

<h3>Ricardo Celis</h3>


<h1>Tabla de Contenido</h1>


- [1. Introducción al lenguaje C](#1-introducción-al-lenguaje-c)
  - [Introducción al curso](#introducción-al-curso)
  - [¿Qué es el lenguaje C?](#qué-es-el-lenguaje-c)
  - [¿Cómo funcionan las computadoras?](#cómo-funcionan-las-computadoras)
  - [¿Por qué aprender C?](#por-qué-aprender-c)
  - [Instalando C en Windows](#instalando-c-en-windows)
  - [Instalando C en Linux](#instalando-c-en-linux)
- [2. Estructura de un programa C](#2-estructura-de-un-programa-c)
  - [Estructura de un programa C](#estructura-de-un-programa-c)
- [3. Tipos de Datos en el lenguaje C](#3-tipos-de-datos-en-el-lenguaje-c)
  - [Tipos de datos](#tipos-de-datos)
  - [Tipo de dato void](#tipo-de-dato-void)
  - [Tipo de dato Enum](#tipo-de-dato-enum)
  - [Tipo de dato char](#tipo-de-dato-char)
- [4. Variables en el lenguaje C](#4-variables-en-el-lenguaje-c)
  - [Declaración de variables](#declaración-de-variables)
  - [Declaración avanzada de variables](#declaración-avanzada-de-variables)
  - [Declaración de constantes](#declaración-de-constantes)
  - [Preprocessor directives: Define](#preprocessor-directives-define)
- [5. Conclusiones](#5-conclusiones)
  - [Conclusiones](#conclusiones)


# 1. Introducción al lenguaje C

## Introducción al curso

- [presentacion-curso-de-introduccion-a-c.pdf](https://drive.google.com/file/d/1FnYmicifCBcofOV1pjujQwZOgvWSoWt3/view?usp=sharing)

## ¿Qué es el lenguaje C?

El lenguaje C es un tipo de lenguaje estructurado. Se ocupan en software de aplicacion, drivers, computadoras para realizar operaciones matematicas super veloces y en sistemas embebidos.

Fue creado por Denis Ritchie quien lo desarrollo en los años 1972 y 1973, lo que queria es hacer un lenguaje mas comprendible. C es un lenguaje Compilado asi tambien es un lenguaje de Nivel Intermedio.

El lenguaje C es un lenguaje de propósito general, compilado y de nivel intermedio.
- `Propósito general :` Esto quiere decir que no está pensado para resolver un problema en específico, sino que cualquier problema que puede resolverse con algún programa de computadora puede escribirse utilizando lenguaje C
- `Compilado :` Se analiza todo el texto del programa, se genera un archivo binario y luego se procede a ejecutar.
- `Nivel intermedio :` Donde algunas cosas podemos olvidarnos, como el manejo más básico del hardware, otras no tanto como el manejo de la memoria.
El creador del lenguaje C es Dennis Ritchie.

- [tuvtran | project-based-learning](https://github.com/tuvtran/project-based-learning#cc)

## ¿Cómo funcionan las computadoras?

Las computadoras nos ayudan a trabajar con mayor velocidad y eficiencia porque pueden generar un resultado para resolver nuestras operaciones a partir de un conjunto de instrucciones previamente definidas. Además, así como en las películas, las computadoras tienen millones de dispositivos electrónicos que conocemos como transistores y se encargan de convertir la electricidad en bits: el sistema binario de ceros y unos, la menor expresión de información de las computadoras.

Las computadoras nacen a partir de la necesidad del ser humano para acelerar sus procesos. Los datos entran al computador se almacenan, son procesados y nos generan un resultado de salida. Las señales que entran son binarias las cuales tiene dos estados un 0 para false y un 1 como un true. Estos son la unidad mínima de información.

  - Sistema decimal
  - Sistema binario
  - Código AsccII.
  - Un archivo, imagen, audio, vídeo. Son datos binarios.

Input --> CPU–> Memoria --> Salida de datos.

Las computadoras nacen de la necesidad de hacer nuestra vida mas fácil
En un principio las computadoras nos ayudaban a trabajar con números mas fácil
Hoy en día las computadoras nos han ayudado a muchas mas cosas
Dentro de una computadora todo funciona con Binario

Transistores almacenan 0 y 1 (Bits)
Los cables dentro de un circuito llevan la informacion de un lado a otro
La base que se utiliza para mostrar todo en una computadora es Binario

El software son las series de instrucciones para que esta pueda hacer los procesos

El flujo que todo programa va a seguir: El input, CPU, memoria, Resultado final

## ¿Por qué aprender C?

Stack overflow es cuando tratas de usar más memoria de la que hay, nótese el logo de StackOverflow

[![stack.jpg](https://i.postimg.cc/9MN60Vh8/stack.jpg)](https://postimg.cc/VrnGZx5n)

Si quieres motivarte aún más a aprender C, te dejo estos puntos bastante interesantes que encontré en un foro acerca del por qué aprender C, además de los expuestos en esta clase. ❤️

- Por Educación de mejores prácticas de código, C es un lenguaje muy sensible, si su código no es legible o tiene errores de lógica, no compilará, en comparación con Python o JavaScript, si aprenden la lógica de programar en C ganan la lógica de aprender cualquier lenguaje, es como aprender un lenguaje romance y poder entender los demás romances, es como ver la Matrix de la estructura de un código bien escrito. Si una persona empieza por aprender lenguajes como JavaScript cometerá muchos errores de sintaxis y la mayor parte de las veces creará código no legible o que ocasione problemas para sus compañeros en proyectos más grandes (de hecho por eso se inventó el lenguaje de TypeScript).

- C es un lenguaje bastante rápido en tiempo de ejecución y muy potente, quizás lo obvian porque casi no se ve reflejado visualmente, pero si miran los microcontroladores o microprocesadores se fundamentan sobre este. Los sistemas embebidos que se encuentran en circuitos integrados, usan este tipo de lenguaje. Actualmente se utiliza mucho para programar hardware bien sea de Atmel o Microchip, de hecho es lenguaje más utilizado en programación de circuitos embebidos.

- El lenguaje C ayuda a entender los fundamentos de teoría de computación. Esto debido a que con C tienes que escribir mucho desde CERO porque dispone de pocas librerias.

- Por eso me puse a estudiar C, por que es la base de todos los lenguajes, es muy importante aprender las bases, estar cimentado para poder crecer, por que si una casa no tiene una base firme después se cae.

## Instalando C en Windows

- [Dev-C++ download | SourceForge.net](https://sourceforge.net/projects/orwelldevcpp/)
- [Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)

## Instalando C en Linux

Por si les sirve como información:

GCC es:

- `G`NU
- `C`ompiler
- `C`ollection

Son las siglas del compilador que estamos usando para C.
Lo que hace es recibir tu código escrito en C y genera un ejecutable binario que tu máquina (Linux, Windows) la pueda entender y ejecutar.

helloLinux.c

```c
#include <stdio.h>

int main() {
  printf("Hello Linux \n");
  return 0;
}
```


Compilamos y ejecutamos el codigo

```bash
➜  C git:(IoT) ✗ ls
helloLinux.c  helloworld  helloworld.c
#Compilamos el codigo
➜  C git:(IoT) ✗ gcc helloLinux.c -o hellolinux
➜  C git:(IoT) ✗ ./hellolinux
Hello Linux
```

- [FAQ de C - Errores comunes de programación](http://xina.uoc.es/prestatgeries/PV00_75009_00197/mcomplement/faqcerrc.html)

# 2. Estructura de un programa C

## Estructura de un programa C

la estructura esencial de cualquier programa en C consta de:

- Directivas de Pre-Compilador (librerías)
- Función main
- Código dentro de la función main
- Finalizacion de la función main (return)

Puedes incluir la libreria que deseas con la keyword

```c
#include <nombre_libreria.h>
```

# 3. Tipos de Datos en el lenguaje C

## Tipos de datos

Tipos de datos.

C es tipado, siempre se declara que tipo de dato se usará.

Saber siempre los rangos minimos & máximos de los valores del programa para asignarle un tipo de dato.

```c
Basic Types:

Valores numéricos enteros(integer)
  short        2 bytes.    -32,767 to 32,767
  unsigned int 2 bytes.    0 to 65,535

  int          4 bytes.   -2,147,483,684 to -2,147,483,684
  unsigned int 4 bytes.   0 to 4,294,967,295

  long 8 bytes.
  unsigned long 8 bytes.



Valores numéricos decimales (float)
  float 4 bytes.        6 lugares decimales 
  double 8 bytes.       15 lugareces decimales
  long double 10 bytes. 19 lugares decimales
```


- [¿Qué es E10? 💫 Portal Multimedia Científica Y Popular. 2020](https://es.science19.com/what-is-e10-11567)

## Tipo de dato void

Al Void también se la conoce como palabra reservada de no atribución, la cuál no retorna valores, pero no debemos asociarla con NULL que es totalmente diferente.

  - void: Especifica que no hay valor disponible, se usa en tres escenarios
  - Función retorna un tipo de dato void: `void foo(){}`
  - Función tiene argumento(s) de tipo void: `int foo(void){}`
  - Puntero hacia una dirección en memoria de un objeto, sin importar su tipo dato.

## Tipo de dato Enum

`enum :` Es un tipo de dato que asigna valores a una lista de constantes 

- [Enumeration (or enum) in C](https://www.geeksforgeeks.org/enumeration-enum-c/)

## Tipo de dato char




# 4. Variables en el lenguaje C
## Declaración de variables
## Declaración avanzada de variables
## Declaración de constantes
## Preprocessor directives: Define

# 5. Conclusiones
## Conclusiones