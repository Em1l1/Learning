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

**Switch** es una estructura de control para agilizar el flujo del programa en opciones múltiples.

Se tiene una condición que se puede cumplir dependiendo de diferentes casos, cada caso nos lleva a un bloque de cumplimiento de la condición y ese bloque nos lleva a continuar el programa.

> Switch es una estructura de control para agilizar el flujo del programa en opciones múltiples. Se obtiene una condición que se puede cumplir dependiendo de diferentes casos, cada caso nos lleva a un bloque de cumplimiento de la condición y ese bloque nos lleva a continuar el programa.

RETO
```C
/* C */

#include <iostream>

using namespace std;

int main()
{
  string name;
  char decision;

  cout << "Hola, para iniciar, ingresa tu nombre: " << endl;
  cin >> name;
  cout << "Bien, " << name << " haremos un juego, tienes tres opciones" << endl;
  cout << "Escribe \"a\" para elegir ser un gatito" << endl;
  cout << "Escribe \"b\" para elegir ser un pandita" << endl;
  cout << "Escribe \"c\" para elegir ser un perrito" << endl;
  cin >> decision;

  switch (decision)
  {
  case 'a':
      cout << "Eres un gatito muy tierno, actor de las mejores películas de gatitos" << endl;
      break;
  
  case 'b':
      cout << "Eres un pandita al que le encantan comer dulces de bambú, tu sueño es tener una isla llena de bambú" << endl;
      break;

  case 'c':
      cout << "Eres un perrito con super poderes, defiendes a todos los animalitos de abusos, tu identidad es secreta." << endl;
      break;
  
  default:
      cout << "Está opción es invalida" << endl;
      break;
  }
  
  return 0;
}
```

Determina que lenguaje de programación debes aprender para realizar aplicaciones.

```C
/* C */

import 'dart:io';

void main(List<String> arguments){
  int option;

  print('''
  Elige una opción para determinar que lenguaje de programación 
  aprender para el desarrollo:
  1. Web
  2. Movil
  3. Escritorio
  4. Multiplataforma
  ''');
  option = int.parse(stdin.readLineSync());

  switch(option){
    case 1:
      print('JavaScript');
      break;
    case 2:
      print('Swift y Kotlin');
      break;
    case 3:
      print('Swift, C#, C y C++');
      break;
    case 4:
      print('Dart');
      break;
  }
}
```

## ¿Qué es un iterador? - Ciclo While

Un iterador o loop como se conoce en ingles es una estructura iterativa que permite repetir un bloque de instrucciones. Esta repetición es controlada por una condición booleana (una condición no es mas que algo que puede devolver verdadero o falso).

Un iterador es utilizado por un algoritmo para recorrer elementos almacenados en un contenedor. Dado que los distintos algoritmos necesitan recorrer los contenedores de diversas maneras para realizar distintas operaciones, y los contenedores deben ser accedidos de formas diferentes, existen otros tipos de iteradores (en este caso estamos conociendo como funciona el ciclo while).

**¿Que es un algoritmo?**
un algoritmo es una secuencia de instrucciones para llegar a una solución.

**While - mientra**
Es una estructura de control que ejecuta repetidamente un bloque de código siempre y cuando una condición sea verdadera.

```c
Sintaxis:
while (/* condition /)
{
/ code */
}
```

Un **loop** es una estructura iterativa que permite repetir un bloque de instrucciones. Esta repetición es controlada por una condición booleana.

Un iterador es utilizado por un algoritmo para recorrer los elementos almacenados en un contenedor. Dado que los distintos algoritmos necesitan recorrer los contenedores de diversas maneras para realizar diversas operaciones, y los contenedores deben ser accedidos de formas distintas, existen diferentes tipos de iteradores.

**While**

Es una estructura de control en la que la repetición se realizará tantas veces como se indique mientras se cumpla una condición.

reto:

```C
/* C */
#include <stdio.h>

int main(){
  int iterator = 0;
 
  while (iterator < 5){
    printf("#\n");
    iterator++;
  }
}
```


## Ciclo For

**El ciclo for** es una estructura de control que nos permite repetir un bloque de comandos un número de veces específico.

**Este ciclo se compone de tres partes:**
  1. Inicialización: Se inicializa una variable (generalmente ““i””) al asignarle el valor 0.

  2. Condición: Se indica la condición necesaria para que termine el ciclo.

  3. Incremento: También puede ser decremento; este va a indicar los pasos en los que se moverá el ciclo, este número siempre debe ser entero, para ir de uno en uno se utiliza el i++.

     

[![cicloFor.jpg](https://i.postimg.cc/s2C1krFw/cicloFor.jpg)](https://postimg.cc/MntWBgpQ)

## Ciclo Do-While

El **Do - While** es una estructura de control donde la condición de continuación del ciclo se prueba al final del mismo.
Funciona de manera similar a la estructura while, la diferencia es que esta evalúa **al final**.

Diferencias entre For, While y Do-While:

**For**: Permite repetir un bloque de comandos un número de veces específico, tiene 3 partes: Inicialización, Condición y Cambio de la variable (Incremento o Decremento). Útil para recorrer arreglos.

**While**: Se repiten las instrucciones mientras la condición es verdadera (se detiene hasta que no se cumple, en el caso de que no sea verdad al principio, no entrará al bucle).

**Do**-**While**: Se ejecuta al menos una vez, primero hace el bloque de instrucciones y después evalúa la condición. Útil para hacer un Menú.

## Arreglos unidimensionales

Un **arreglo** es una serie de elementos, del mismo tipo de dato y son almacenados de manera consecutiva. En programación, la primera posición de los arreglos empieza en "“0"”.

Los arreglos son conjuntos de variables encapsuladas en un solo lugar. Los accedemos usando un indice.

Para crear un aray de 4 elements hacemos:
`int elementos = [50, 30, 70, 40];`

Si queremos acceder al primer elemento usamos:

```c
elementos[0];
```

Y todos los demas elementos tienen el `index 1, 2, 3` … etc.

## Arreglos bidimensionales

Los **arreglos bidimensionales** son también llamados tablas o **matrices**.
Tiene dos índices: el primero indica el número de **fila** y el segundo el número de **columna** en que se encuentra el elemento.

Los arreglos bidimensionales son también llamados tablas o matrices.
Tienen dos índices: el primero indica el número de **fila** y el segundo el número de **columna** en que se encuentra el elemento.

En el ejemplo de la clase (array 4x4) si lo representáramos gráficamente en una tabla, las posiciones quedarían así.

[![array4x4.jpg](https://i.postimg.cc/FRLhvh87/array4x4.jpg)](https://postimg.cc/Q9h2kZX3)

Recuerda que **la posicion de los arreglos empieza en “0”**.

## Arreglos e iteradores unidimensionales

**¿Por qué utilizar iteradores en arreglos unidimensionales?**

- Para manipular todos los elementos de un arreglo podemos utilizar una estructura repetitiva. La más usual es el ciclo for.
- Cuando se desea imprimir el contenido del arreglo
- Cuando se suman todos los elementos
- También cuando se va a inicializar el arreglo.

## Arreglos e iteradores bidimensionales

Para poder utilizar el iterador for junto con un arreglo bidimensional es necesario entender el concepto de un for anidado. Esto es un for dentro de un for, la sintaxis es la siguiente:

```c
for(i=0;i<2;i++){
        for(j=0;j<1;j++){
                printf(""%i,matriz[i][j]"");
        }
}
```

En esta estructura al iniciar el for, se recorre vuelta por vuelta ambos fors, iniciando por la primera vuelta del primer for y continuando con todas las vueltas del segundo for. Siguiendo con la siguiente vuelta del primer for y continuando con todas las vueltas del segundo for, y así sucesivamente.

Esto es muy útil para recorrer arreglos bidimensionales.

En C para obtener números aleatorios debemos primero incluir la librería **<time.h>** y esto nos permitirá usar la función **rand()**, como lo hice en la línea 21 del código, pero esta función utiliza siempre el mismo número semilla para genera la misma secuencia de números aleatorios para solucionar esto debemos usar la función **srand(time(0))** solo una vez al principio del programa y el parámetro **time(0)** nos devolverá la hora del sistema, con esto siempre obtendremos un nuevo número semilla para la función **rand()** y a su vez una secuencia de números aleatorios diferente cada vez. De resto:

**challenge accomplished**


```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int nRandom;
    int sumatoriaf0, sumatoriaf1, sumatoriaf2, sumatoriaf3, sumatoriaf4 = 0;
    int promediof0, promediof1, promediof2, promediof3, promediof4 = 0;
    int numeroMe = 6;
    int numeroMa = 10;
    srand (time(0));

    printf("Arreglos Bidimencionales + For\n\n\n");

    int arregloB[5][6];

    for(int i = 0; i <= 4; i++){ //for para cargar datos y hacer la sumatoria de las filas
        for(int j = 0; j <= 4; j++){
        nRandom = rand () % (numeroMa - numeroMe + 1) + numeroMe;
        arregloB[i][j] = nRandom;
        if(i == 0)
            sumatoriaf0 += arregloB[0][j];
        else if(i == 1)
            sumatoriaf1 += arregloB[1][j];
        else if(i == 2)
            sumatoriaf2 += arregloB[2][j];
        else if(i == 3)
            sumatoriaf3 += arregloB[3][j];
        else if(i == 4)
            sumatoriaf4 += arregloB[4][j];
        }
    }

    promediof0 = sumatoriaf0 / 5;
    promediof1 = sumatoriaf1 / 5;
    promediof2 = sumatoriaf2 / 5;
    promediof3 = sumatoriaf3 / 5;
    promediof4 = sumatoriaf4 / 5;

    arregloB[0][5] = promediof0;
    arregloB[1][5] = promediof1;
    arregloB[2][5] = promediof2;
    arregloB[3][5] = promediof3;
    arregloB[4][5] = promediof4;

    printf("La sumatoria de la fila 1 es: %i\nY el promedio es %i\n\n", sumatoriaf0, promediof0);
    printf("La sumatoria de la fila 2 es: %i\nY el promedio es %i\n\n", sumatoriaf1, promediof1);
    printf("La sumatoria de la fila 3 es: %i\nY el promedio es %i\n\n", sumatoriaf2, promediof2);
    printf("La sumatoria de la fila 4 es: %i\nY el promedio es %i\n\n", sumatoriaf3, promediof3);
    printf("La sumatoria de la fila 5 es: %i\nY el promedio es %i\n\n", sumatoriaf4, promediof4);

    return 0;
}
```

## Cadena de caracteres (string)

Generalmente se dice que es un arreglo de caracteres cuando lo que se almacenó son caracteres y no existe el carácter nulo al final.

Cuando el arreglo de caracteres termina con el carácter nulo se llama cadena de caracteres.

En lenguajes de programacion como C++ o C# un **string** es una cadena de caracteres.
Un string en esencia es un **arreglo de caracteres**.
Por lo tanto hay que tener en cuenta que en los lenguajes mas modernos ya no vamos a tener la necesidad de usar “cadenas de carácteres en su lugar usaremos **string**”

**gets** en C, es la funcion que nos permite leer una cadena de caracteres incluyendo espacios.

Para recoger información del stdin del usuario podemos usar **scanf()**, **gets()** y **fgets()**.

el problema de **scanf()** es que solo recoge información hasta que encuentra un espacio.

el problema de **gets()** es que si por ejemplo la información recogida tiene un tamaño 15 espacios en memoria y se guarda por ejemplo en un array de 5 espacios los 10 espacios restante los escribe en la memoria de igual manera y con esto podría reescribir una función importante del sistema haciendo colgar la computadora, para evitar eso se recomiendo usar:

**fgets()** ya que en esta función se le pasa como parámetro la variable donde se va a guardar la información, de donde se va a recibir la información y lo que corrige el problema de la anterior función que es el tamaño máximo de la información que puede recibir, quedando así: **fgets(varaible, 15, stdin);** donde “variable” es la variable donde se va a guardar la información, 15 es el tamaño máximo de la información que puede recoger y stdin es de donde se va recoger la información en este caso stdin es el teclado.

**RETO**

```c
#include <stdlib.h>
#include <stdio.h>

int main(){
    //declared var array
    char chain[50];
    int ziseChar;
    printf("escriba cadena\t");
    gets(chain);//obtiene todo lo digitado por el teclado hasta presionar enter
    ziseChar = strlen(chain);
    printf("\n********************************");
    printf("\nCadena digitada es:\t");
    puts(chain);//muestra todos los carecteres contenidos en la variable chain
    printf("La cadena Invertida es:");
    for(int i=ziseChar;i>=0;i--){
        printf("%c",chain[i]);
    }

    printf("\nlongitud de la Cadena digitada es: %i\n",ziseChar);

}
```

## Recapitulación: Control de Flujo

Recapitular los conceptos de control de flujo que aprendimos en el curso.

**IF**
Empezamos con condicionales o sentencias condicionales. Estas son instrucciones que evalúan resultados booleanos, esto quiere decir que evalúan una condición que va a tener como resultado algo verdadero o falso. Dependiendo del resultados nosotros podemos usar estas condiciones para controlar el flujo de nuestro programa y los resultados que nosotros queremos que tenga.

La estructura para escribir una condición es la siguiente:

<img src="https://i.ibb.co/1fTfbJD/1.jpg" alt="1" border="0">

Dentro del paréntesis después de la instrucción if, escribimos la operación que va a ser la condición a revisar. Si esta se cumple entra al bloque de cumplimiento de la condición y podemos ejecutar instrucciones. Si no se cumple la condición, el programa continua y no entra al bloque de cumplimiento de la condición.

**Operadores relacionales y lógicos**
Al utilizar condiciones, para ayudarnos a evaluar las operaciones nosotros podemos utilizar operadores relacionales y operadores lógicos.

Los operadores relacionales son:

- (<) Menor que
- (- <)= Menor o igual que
- (>) Mayor que
- (>)= Mayor o igual que
- (==) Igual (Utilizado como comparación y NO como asignación)
- (!=) Diferente/No igual que

Los operadores lógicos son:

- && Y/And
  Teniendo en cuenta más de una condición, el resultado será verdadero si ambas condiciones son verdaderas.
- || O/Or
  Teniendo en cuenta más de una condición, el resultado será verdadero si alguna o ambas condiciones son verdaderas, solo una necesita cumplirse.
  ! No/Not
  El resultado es inverso al operando.

**Switch**
Otra estructura de control de flujo que podemos utilizar es el switch. Esta es una estructura de control que nos permite agilizar el flujo es opciones múltiples.

Su estructura es la siguiente:

<img src="https://i.ibb.co/CnYks8S/2.jpg" alt="2" border="0">

En esta estructura se evalúa una expresión y se evalúa cada caso potencial de resultado con respecto a esa instrucción, o sea, si en la expresión se evalúa una variable de tipo int, en los casos se evalúan valores de tipo int. Si en la expresión se evalúan variables de tipo char, en los casos se evalúan valores de tipo char, por ejemplo:

<img src="https://i.ibb.co/8P04JyQ/3.jpg" alt="3" border="0">

**Loops**

Un loop es una estructura iterativa que permite repetir un bloque de instrucciones. Esta repetición es controlada por una condición booleana.

**Loops - While**

El iterador While es una estructura de control donde el bloque de instrucciones se repetirá siempre que la condición se cumpla.

La sintaxis es la siguiente:

<img src="https://i.ibb.co/ph599F5/4.jpg" alt="4" border="0">

Después de la instrucción while dentro de los paréntesis tenemos la condición, siempre que esta se cumpla el bloque al cumplimiento de la condición se repetirá. Dentro de los corchetes se encuentra el bloque al cumplimiento de la condición, este es una serie de instrucciones que queramos que se repita. Al dejar de cumplirse la condición o no cumplirse en lo absoluto, el flujo del programa seguirá después de los corchetes.

**Loops - For**

El iterador for es una estructura de control que nos permite repetir un bloque de instrucciones un número de veces especifico.

La sintaxis de un for es la siguiente:

<img src="https://i.ibb.co/52kLNHW/5.jpg" alt="5" border="0">

Después de la instrucción for, dentro de los paréntesis la estructura se divide en tres partes: inicialización, condición e incremento.

En la primera sección inicializamos una variable que utilizaremos para medir la cantidad de veces que se repetirá el bloque. En la condición definimos el número de veces que se repetirá, esta es una condición y siempre que se cumpla seguirá repitiendose el bloque, entonces utilizamos una variable de tipo int y revisamos en la condición siempre que ese número sea menor o mayor que alguna variable o número que hayamos definido con anticipación. Finalmente en el incremento, que también puede ser decremento, sucede después del bloque al cumplimiento de la condición y modificamos la variable para eventualmente incumplir la condición y salir del iterador.

**Loops - Do While**

Este iterador es similar al while, con la diferencia de que la condición se prueba al final de la misma, se evalúa al final.

Su sintaxis es la siguiente:

<img src="https://i.ibb.co/ftjjBkH/6.jpg" alt="6" border="0">

De manera similar el while, tenemos una condición y siempre que esta se cumpla un bloque se repetirá. La diferencia se encuentra con la instrucción do, en la que se cumplirá ese bloque antes de checar la condición y se repetirá.

**Arreglos**
Un arreglo es una serie de elementos del mismo tipo de dato y almacenados de manera consecutiva. Estos pueden tener de una a varias dimensiones, pero durante el curso vimos arreglos unidimensionales y bidimensionales, una y dos dimensiones respectivamente.

De la misma manera que una variable nosotros podemos declarar e inicializar un arreglo unidimensional, también llamados vectores, la sintaxis es la siguiente:

<img src="https://i.ibb.co/2hGX1pH/7.jpg" alt="7" border="0">

Para declarar un arreglo definimos al igual que una variable su tipo de dato y su nombre, seguido de esto dentro de corchetes cuadrados ingresamos el tamaño de nuestro arreglo. Con esto indicamos que va a ser un arreglo y su tamaño.

<img src="https://i.ibb.co/SVy9JZX/8.jpg" alt="8" border="0">

La estructura es similar a declarar una variable con la diferencia de que agregamos valores dentro del contenido del arreglo. Estos valores van dentro de corchetes separados por comas.

Los arreglos bidimensionales también llamados matrices son arreglos de dos dimensiones. Estos tienen dos índices, el primero indica el número de fila y el segundo el número de columna en que se encuentra el elemento.

La sintaxis para declarar e inicializar un arreglo bidimensional es la siguiente:

<img src="https://i.ibb.co/X4WLhk3/9.jpg" alt="9" border="0">

Para declarar dentro de la misma manera que unidimensional definimos el tipo de dato y nombre. Adicionalmente agregamos doble corchetes cuadrados, el primero para indicar el número de filas y el segundo para el número de columnas.

<img src="https://i.ibb.co/khzjnV0/10.jpg" alt="10" border="0">

Para inicializar el arreglo, agregamos de igual manera entre corchetes los valores, separando cada fila en corchetes independientes, separados por comas. Y dentro de estos corchetes agregamos los valores también separados por comas.

**Arreglos e iteradores**

Una par de estructuras comúnmente utilizadas conjuntamente son los arreglos e iteradores. ¿Por qué utilizamos estas estructuras de manera conjunta?:

- Para manipular todos los elementos de un arreglo podemos utilizar una estructura repetitiva. La más usual es el ciclo for.
- Cuando desea imprimir el contenido del arreglo.
- Cuando se suman todos los elementos.
- También cuando se va a inicializar.

Para poder utilizar el iterador for junto con un arreglo bidimensional es necesario entender el concepto de un for anidado. Esto es un for dentro de un for, la sintaxis es la siguiente:

<img src="https://i.ibb.co/NyZjfCj/11.jpg" alt="11" border="0">

En esta estructura al inicial el for, se recorre vuelta por vuelta ambos fors, iniciando por la primera vuelta del primer for y continuando con todas las vueltas del segundo for. Siguiendo con la siguiente vuelta del primer for y continuando con todas las vueltas del segundo for, y así sucesivamente.

Esto es muy útil para recorrer arreglos bidimensionales.

Espero que estas recapitulaciones te sean útiles para repasar conceptos y revisar estructuras, ¡nos vemos en la siguiente clase!

# 4. Funciones

## Funciones: Divide y vencerás

Las **funciones** son bloques de código que realizan alguna operación. Pueden aceptar datos de **entrada** (parámetros) y devolver un dato de **salida**.

Se pueden utilizar para:

- Encapsulamiento
- Reusabilidad de código
- Separar tareas
- Cambios a futuro

**Ejemplo**

**Reto1** Investigando recorde que, en C puede usar el método `pow()` para sacar potencia:

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int potencia(int base, int exp){
  int res = pow(base, exp);

  return res;
}

int main(void){
  int a = 0; 
  int b = 0;
  int op = 0;
  puts("Potencia");

  printf("Ingresa el numero\n");
  scanf("%i", &a)

  printf("Ingresa el exponente\n");
  scanf("%i", &b);

  op = potencia(a, b);
  printf("El resultado es: %i", op);
}
```

## Variables locales y globales

Las variables globales se declaran fuera de cualquier función y, según donde se declaren, varias funciones pueden tener acceso a ellas.

La única diferencia entre una variable local y una global es su ámbito de acción. **Variable local**: es aquella que sólo es utilizable dentro del código de la función. **Variable global**: es aquella cuyo ámbito es todo el programa, incluso dentro de una función

Ambito de las variables (local y global)
La recomendación general es definir como variables locales todas las variables que sean de uso exclusivo para realizar las tareas encargadas a cada función. Las variables globales se utilizan para compartir variables entre funciones de forma sencilla.

Realice este diagrama para entender este tema, por favor corrigirme si esta mal.

Las variables **x, y** son globales por lo que las funciones A, B y C pueden hacer uso de ellas.
La variable **w** que pertenece a la funcion ***A*** y solo funciona dentro de ella.
La variable **z** pertenece a la funcion ***B*** y solo funciona dentro de ella.
La variable **v** pertenece a la funcion ***C*** y solo funciona dentro de ella.

<img src="https://i.ibb.co/zSVt6m1/varibles-Globales.jpg" alt="varibles-Globales" border="0">

## Recapitulación: Funciones

En esta lectura vamos a hablar un poco sobre funciones y cómo utilizarlas.

Las funciones son bloques de código que realizan alguna operación o instrucciones. Estas al igual que en matemáticas pueden aceptar datos de entrada, a estos les llamamos parámetros o argumentos y datos de salida. La función ya creada que hemos estado utilizado hasta ahorita, es la función main(). La estructura sería similar a lo siguiente:

<img src="https://i.ibb.co/cyfBqDF/1-1.jpg" alt="1-1" border="0">

¿Con qué finalidad hacemos estas secciones de código?

- Encapsulamiento
- Reusabilidad
- Separar Tareas
- Cambios a futuro

La sintaxis para escribir una función es la siguiente:

<img src="https://i.ibb.co/0KX4Vqb/2-2.jpg" alt="2-2" border="0">

Primero se escribe el tipo de dato de la salida de datos, luego el nombre por el que se identificará la función y finalmente entre paréntesis los parámetros o entrada de datos.

<img src="https://i.ibb.co/BjgCbnn/3-3.jpg" alt="3-3" border="0">

Y entre paréntesis el bloque de instrucciones. No es necesario que una función tenga una entrada y salida de datos, puede tener una, otra, ambas o ninguna.
Pero si tiene salida de datos, el dato final necesita ser descrito con el comando return y el dato que vamos a regresar, que tiene que ser el mismo tipo de dato el cual indicamos inicialmente al crear la función. De la misma manera para los parámetros necesitamos declarar las variables dentro de los paréntesis que vayamos a necesitar, cada una es separada por una coma.

De no necesitar un dato de salida nuestra función puede ser de tipo void, esto quiere decir que no regresa ningún dato.

**Variables globales y locales**

Naturalmente al tener secciones de código, o sea funciones, creamos una necesidad de tener variables que puedan ser compartidas entre estas. Para esto creamos variables globales.

Hasta ahora las únicas variables que habíamos creado eran variables locales, esto quiere decir que son creadas dentro de una función y solo pueden ser utilizadas en esta función.

Para crear variables que usemos entre diferentes funciones lo hacemos con la misma sintaxis que hasta ahora hemos hecho, pero lo haremos fuera de cualquier función y lo haremos en la primera sección de nuestro código en la parte superior. Al hacerlo aquí nosotros estamos creando variables globales que podemos utilizar en cualquier función y será compartida.

# 5. Conceptos avanzados

## Recursividad

- En C, las funciones pueden llamarse a sí mismas.
- Si una expresión en el cuerpo de una función llama a la propia función, se dice que ésta es recursiva.
- La **recursividad** es el proceso de definir algo en términos de sí mismo y a veces se llama definición circular.

Un método recursivo es un método que se llama así mismo.
Una de las tareas clásicas que pueden ser resueltas fácilmente por recursión es el calculo del **factorial** de un numero.

En matemáticas, el termino **factorial** se refiere al producto de todos los enteros positivos que son menores o iguales que un número entero específico no negativo (n). El factorial de n se escribe como **n!**.

Por ejemplo:

```c
5! = 5 * 4 * 3 * 2 * 1 = 120
```

A pesar de que ejemplo de arriba es fácil de entender se están omitiendo algunos pasos que nuestro programa realiza para encontrar el factorial del número 5, dichos pasos son los siguientes:

```c
Factorial(5)

return 5 * Factorial(4)

return 5 * (return 4 * Factorial(3) )

Return 5 * (return 4 * (return 3 * Factorial(2) ) )

Return 5 * (return 4 * (return 3 * (return 2 * Factorial(1) ) ) )
```

…pero Fact(1) retorna 1, así que rastreamos hacia atrás…

```c
Return 5 * (return 4 * (return 3 * (return 2 * 1) ) )

Return 5 * (return 4 * (return 3 * (return 2) ) )

Return 5 * (return 4 * (return 3 * 2 ) )

Return 5 * (return 4 * return(6) )

Return 5 * (return 24)

Return 5 * 24

Return 120

120
```


Ahora supongamos que se nos pide encontrar el factorial del número 3, se podría pensar que la tarea a realizar solo seria: 

```c
Factorial(3) = 3 * Factorial(2) = 3 * 2 * Factorial(1) = 6.
```

En esta explicación estaríamos omitiendo algunos pasos que realmente el programa hace; por lo que explicación correcta seria:

```c
Factorial(3) = 3 * Factorial(2)
  Resolver para Factorial(2):
2 * Factorial(1)
Resolver para el Factorial (1) = 1
Entonces, Factorial(1) = 1

```


Entonces rastrearíamos hacia atrás:

```c
Factorial(2) = 2 * 1 = 2
Rastrear de nuevo:
Factorial(3) = 3 * 2 = 6
```

### Diferencias sutiles entre recursividad e iteración.

Algunas de ellas por ejemplo es que la iteración incluye, una inicialización, una condición y un incremento o decremento. La recursividad por sí misma sólo es un bucle que regresa siempre al caso base (condición), y es ahí cuando viene una segunda diferencia, en una iteración nosotros estamos *obligados* a poner una condición para que sea cumplida, en la recursividad no, la diferencia es que (aparte de que ya está definida [caso base]) si no la ponemos llegará a un bucle infinito, a lo que lleva a una tercera diferencia, la iteración hace que tu CPU cicle una y otra vez, la recursividad puede llegar a crashear totalmente tu computadora. La recursividad es más lenta en ejecución que la iteración, esta se comporta por medio de stacks, la iteración no, aparte las iteraciones hacen más largo tu código que la recursividad.

```c
1#include<stdio.h>
  2 
  3intn_factorial(int a){
  4if (a > 1){
  5returna *  n_factorial(a - 1); //aqui se esta llamando a si misma
  6   } else {
  7printf("Terminamos\n");//aqui termina el loop porque a = 1
  8return1;
  9   }
 10 }
```

Como te puedes dar cuenta, nosotros en el ejemplo tuvimos que introducir una condición, porque de lo contrario entraríamos en un bucle infinito, la condición en este caso comprende todas las líneas que componen a la función **n_factorial**, aunque bien simplemente pudimos haber dejado la función así. Otro asunto es que no tenemos tantas líneas de código como tendríamos si ese bucle lo introducimos dentro de una *main* por ejemplo. Otra diferencia evidente es que recursividad sólo se puede en funciones, no en condicionales.

Con el tema de los stacks, imagina que entra en la función, hace todo el recorrido y lleva ya una información, en este caso que es la que regresa **con return**, cuando llega a la línea donde se llama a sí misma, vuelve a entrar con esa información y sale con otra, a eso me refiero con stacks, así hasta que la condición nos ayude a salir de ese estaqueamiento (xD).

Ahora veamos uno de iteración:

```c
for (int i = 0; i < 10 ; i++);
```

En la segunda parte de ese for introducimos una condición que es obligatoria porque de lo contrario nuestro bucle for, no “jalaría”, digamos que ahora entramos en un bucle infinito:

```c
for (int i = 0; i <= 10; i--);
```

Ahí haríamos ciclar nuestro CPU una y otra vez entrando en esa iteración hasta que lo paremos con un control + C desde el teclado, ese bloque de iteración va forzosamente dentro de una función no pude ir afuera, no puede pasar eso:

```c
#include<stdio.h>

for (int i = 0; i > 0; i--) {
	printf("hola mundo \n");
}

intmain(){
	//eso no se puede xD
}
```

🤔 La **recursividad** o **recursión** permite que las **funciones** que se **llamen a sí mismas**, **evitando** el uso de **iteradores**.

> La recursividad al ser un tema abstracto pueden no encontrarse aplicaciones de forma inmediata, sino que requieren de un análisis más detallado. En estos casos sus aplicaciones están más orientadas a la ingeniería de datos para encontrar datos específicos o incluso en la inteligencia artificial.

## Apuntadores

Un **apuntador** es una variable que guarda la dirección de memoria de otra variable.

Las direcciones de memoria se suelen describir como números en hexadecimal. Un **apuntador** es una variable cuyo valor es la dirección de memoria de otra variable. Se dice que un apuntador “apunta” a la variable cuyo valor se almacena a partir de la dirección de memoria que contiene el apuntador.

- El operador de dirección (&) regresa la dirección de una variable.
- El operador de indirección (*) toma la dirección de una variable y regresa el dato que contiene esa dirección.

Apuntadores o Pointers

```c
int *p;
/*
estamos diciendo: compu dame un espacio en memoria en donde puedo almacenar una direccion de alguna variable de tipo integer
 */

int a = 5;
/*
Aqui decimos: compu crea un espacio en la memoria del tamaño de un integer y almacena el valor 5 en el
*/ 

p = a;
/*
Aqui decimos: compu haz que la direccion donde esta la variable llamada a se almacene en mi variable puntero p
*/

*p = 10;
/*
Aqui lo que decimos es: compu cambia el valor que se encuentra en la direccion que aparece en p y cambialo por el valor 10
*/

printf( "%i", &a );
/*
Aqui lo que decimos es: compu imprime en pantalla la direccion en memoria de mi variable llamada a
*/
```

**`Un apuntador es:`** una variable que puede contener números, pero a diferencia de una variable de tipo entero el puntero no puede contener un numero cualquiera solamente puede contener números que correspondan a una dirección de memoria.

En este caso la variable apVal apunta a la dirección de memoria de val, por eso cualquier numero que se asigne a apVal sera imprimido por la variable val.

- Uno de sus usos cuando queremos hacer referencias y crear memoria extra con variables. Es mas común en C.

```c
float *apVal
apVal=val
*apval = 114
val = 114.
```

📦 Los **apuntadores** permiten **dar claridad** y **simplicidad** a las **operaciones** a nivel de **memoria**.

## Struct y manejo de archivos

**Creación y apertura de archivos**
Parámetros para la función fopen():

- ““rb””: Abre un archivo en modo binario para lectura, el fichero debe existir.
- ““w””: Abrir un archivo en modo binario para escritura, se crea si no existe o se sobreescribe si existe.

```c
 1 #include <stdio.h>
  2 
  3 struct PersonalData {
  4   char first_name[20];
  5   char last_name[20];
  6   int age;
  7 };
  8 
  9 int main(){
 10   struct PersonalData me;
 11 
 12   printf("Vamos a leer los datos:\n");
 13   printf("Digita tu nombre:\n");
 14   gets(me.first_name);
 15   printf("Digita tu primer apellido\n");
 16   gets(me.last_name);
 17   printf("Finalmente digita tu edad\n");
 18   scanf("%i", &me.age);
 19 
 20   printf("Hola %s\n", me.first_name);
 21   printf("Tu apellido es %s\n", me.last_name);
 22   printf("Tu edad es %i\nAdios (: \n", me.age);
 23 }
```

Se llama Programación Orientada a Objetos, también existen las clases, tienen sutiles diferencias.

```c
  1 #include <stdio.h>
  2 
  3 int main(){
  4   FILE *archive;
  5 
  6   archive = fopen("prueba.dat", "w");
  7                   
  8   if (archive != NULL){
  9     printf("El archivo se ha creado exitosamente\n");
 10     fclose(archive);
 11   }else{
 12     printf("El archivo no se ha creado :(\n");
 13   }
 14 
 15 }
```

📑 El **manejar archivos** nos permitirá **crear** archivos, **escribir** y **leer** **información** dentro de los mismos.

- El estándar de C contiene varias funciones para la edición de ficheros, éstas están definidas en la cabecera stdio.h y por lo general empiezan con la letra f, haciendo referencia a file.

- Adicionalmente se agrega un tipo FILE, el cual se usará como apuntador a la información del fichero. La secuencia que usaremos para realizar operaciones será la siguiente: _

- Crear un apuntador del tipo FILE *
  Abrir el archivo utilizando la función fopen y asignándole el resultado de la llamada a nuestro apuntador.
  Hacer las diversas operaciones (lectura, escritura, etc).

- Cerrar el archivo utilizando la función fclose.

  

  **fopen**
  Esta función sirve para abrir y crear ficheros en disco.
  **fclose**
  Esta función sirve para poder cerrar un fichero que se ha abierto.

## Escritura y lectura de archivos

modos básicos en que podemos crear, escribir, leer y append información a un texto. Usando funciones como **fprintf, fgets, foef**, etc. Siento que es un poco más sencillo de esta forma

- [Writing files](https://www.youtube.com/watch?v=38I_AUMpKpQ)

- [Reading files](https://www.youtube.com/watch?v=8nIilb2kiSU)

- [Appending files](https://www.youtube.com/watch?v=Hxhbp1WSDJA&t=88s)

La función fwrite te permite escribir o sobre escribir en un archivo de extensión (.dat) o la extensión que requieras, en caso de no existir lo crea con el nombre que le asignes con esta estructura:

```c
fwrite(Apuntador, tamaño del apuntador, cantidad de archivos, nombre del archivo);
```

La función fread permite leer el archivo anteriormente creado ingresando una estructura similar a la función de escribir pero cambiando la función a fread.

```c
fread(Apuntador, tamaño del apuntador, cantidad de archivos, nombre del archivo);
```

Para las dos siempre debes indicar el nombre del archivo que quieres crear o abrir y su ubicación, en este caso está en la misma carpeta del script por tanto no es necesario indicar una ruta de donde se ubica. Se debe manejar la función fopen y la estructura:

```c
fopen(“Nombrearchivo.extensión”, “w”);–Escribe
fopen(“Nombrearchivo.extensión”, “rb”);–Lee
```

Espero haber ayudado. Saludos!

## Manejo de librerías

Una librería es código de programación ya escrito; un conjunto de funciones independientes para solucionar problemas concretos.

- [Repositorio de librerías](https://github.com/platzi/estructurada/tree/master/21-Librerias)
- [Repositorio de ejercicios](https://github.com/platzi/estructurada/tree/master/Ejercicios)

🤔 Las **librerías** permite **hacer** más **fácil** y **rápido** el **desarrollo** de ciertas **funciones** dentro de tu **aplicación**.

> Liberia: Una librería es código de programación ya escrito; un conjunto de funciones independientes para solucionar para solucionar problemas concretos.

Se denomina header file, en español fichero/archivo (de) cabecera, o include file, en español fichero de inclusión, en ciencias de computación, especialmente en el ámbito de los lenguajes de programación C y C++, al archivo, normalmente en forma de código fuente, que el compilador incluye de forma automática al procesar algún otro archivo fuente. Típicamente los programadores especifican la inclusión de los header files por medio de pragmas al comienzo (head o cabecera) de otro archivo fuente.

Un header file contiene, normalmente, una declaración directa de clases, subrutinas, variables u otros identificadores. Aquellos programadores que desean declarar identificadores estándares en más de un archivo fuente pueden colocar esos identificadores en un único header file, que se incluirá cuando el código que contiene sea requerido por otros archivos.

La biblioteca estándar de C y la biblioteca estándar de C++ tradicionalmente declaran sus funciones estándar en header files.