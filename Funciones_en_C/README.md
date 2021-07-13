<h1>Funciones en C</h1>

<h3>Ricardo Celis</h3>


<h1>Tabla de Contenido</h1>

- [1. Introducción a las funciones en C](#1-introducción-a-las-funciones-en-c)
  - [Bienvenida](#bienvenida)
  - [¿Qué es una función?](#qué-es-una-función)
  - [Cómo usar las funciones](#cómo-usar-las-funciones)
  - [Tipos de retorno en funciones](#tipos-de-retorno-en-funciones)
- [2. Manejo de funciones en C](#2-manejo-de-funciones-en-c)
  - [Implementación de funciones](#implementación-de-funciones)
  - [Parámetros por valor](#parámetros-por-valor)
- [3. Bibliotecas estándar de funciones](#3-bibliotecas-estándar-de-funciones)
  - [Principales Bibliotecas de C](#principales-bibliotecas-de-c)
  - [Math.h](#mathh)
  - [String.h](#stringh)
  - [Time.h](#timeh)
  - [Stdlib.h](#stdlibh)
- [4. Cierre](#4-cierre)
  - [Conclusiones](#conclusiones)

# 1. Introducción a las funciones en C
## Bienvenida

Bienvenido al Curso

[

- [https://www.hackerrank.com/domains/c](http://kerrank.com/domains/c)

## ¿Qué es una función?

Una **función**, es un trozo de código que hace una tarea específica. Esta tarea se puede llamar en varias ocasiones en nuestro código, sin necesidad de repetir código.

Elementos: El retorno, el nombre de la función y argumentos.
El retorno debe corresponder a un tipo concreto. Y es lo que la función debe retornar. Puede darse el caso de que la función no devuelva un valor y entonces se declara de tipo `void`.
El nombre de la función es la manera de identificar esta función para poderla llamar.
Los argumentos pueden ser `void`, que no tiene o de un tipo de concreto que será utilizado en la función.

## Cómo usar las funciones

Ejemplo del código de 4 funciones:

1. función **putchar** que escribe una letra, enviada por argumento
2. función **putstr** que escribe un array de letras, enviado por argumento
3. función **power** que calcula la potencia de un número, enviando un argumento base y un argumento exponente.
4. función **main** donde se ejecuta el programa principal.

Notas:

- no utilicé printf, de la libreria stdio.h
- no utilicé bucle for sino bucle while
- separo las declaraciones de las inicializaciones

```c
#include <unistd.h>

void	putchar(char a)
{
	write(1, &a, 1);
}

void	putstr(char *a)
{
	int i;

	i = 0;
	while(a[i] != '\0')
	{
		putchar(a[i]);
		i++;
	}
}

int		power (int base, int n)
{
	int i;
	int resultado;

	i = 0;
	resultado = 1;
	while (i++ < n)
	{
		resultado *= base;
	}
	return (resultado);
}

int		main (void)
{
	int i;

	i = 0;
	while(i < 4)
	{
		putstr("i = ");
		putchar('0' + i);
		putstr(" resultado de la potencia = ");
		putchar('0' + power(2,i));
		putchar('\n');
		i++;
	}
	return (0);
}
```

resultado

```bash
i = 0 resultado de la potencia = 1
i = 1 resultado de la potencia = 2
i = 2 resultado de la potencia = 4
i = 3 resultado de la potencia = 8
```

## Tipos de retorno en funciones

**Tipos de retorno en funciones** 😄

```c
// <1. Funciones sin argumentos y sin valor de retorno

void functionName(); //Declarando la function.
functionName(); //Invocando o ejecutando a la function
void functionName()// definicion de la function
{
  //logica
}

// 2. Funciones con argumentos, pero sin valor de retorno

void functionName(float); //Declarando la function.
functionName(float); //Invocando o ejecutando a la function
void functionName(float) // definicion de la function
{
  //logica
}

// 3. Funciones sin argumentos, pero con valor de retorno

int functionName();

// 4. Funciones que tienen argumentos y valor de retorno

int functionName(int, float);
// >
```



**caso de uso** *donde la función no necesita que devuelva nada*

- Una función que imprime por la salida estándar una letra. (En este caso la salida estándar es la pantalla)

```c
#include <unistd.h>

void	putchar(char a)
{
	write(1, &a, 1);
}
```

Con el paso de parámetros, estamos viendo como diversas partes del programa se comunican entre sí:

- Funciones que no reciben argumentos ni retornan valores
- Funciones que reciben argumentos, pero que no retornan valores
- Funciones que reciben argumentos, y retornan valores
- Programas que llaman a otros programas sin paso de argumentos
- Programas que llaman a otros programas , con paso de argumentos(usando sockets).

# 2. Manejo de funciones en C

## Implementación de funciones

**Funciones sin argumentos y sin valor de retorno** 😄

```c
void demo();

int main()
{
  demo();

  return 0;
}

void()
{
 int a, b, suma;
 a = 100;
 b = 100;
 printf("El resultado es %i", suma);
}

```

**Funciones con argumentos, pero sin valor de retorno**

```c
int a, b;

void sum(int a, int b);

int main()
{
  sum(100, 100);

  return 0;
}

void sum(int a, int b)
{
 int sum;
 sum = a + b;
 printf("El resultado es %i", sum);
}
>
```

**Funciones que tienen argumentos y valor de retorno**

```c
int a, b;

int sum(int a, int b);

int main()
{
  sum(100, 100);
  printf("El resultado es %i", sum(100, 100));
  return 0;
}

int sum(int a, int b)
{
 int sum;
 sum = a + b;
 return sum;
}

```

## Parámetros por valor

La funcion power tiene dos argumentos base y n, en el método main, no se sabe que es n, pero si se conoce i, quizás quedaría más claro en la salida que se imprime por printf indicar el nombre de la variable i, que es la que itera en el bucle.

En la segunda parte ya se cambia y en main se declara n quitando i, ahí se entiende mejor, la salida por pantalla.

Las funciones deberían ser un poco como cajas negras, es decir que no necesitamos conocer como están implementadas para poder llamarlas, por lo que si pasamos como argumento una variable no tiene porque necesariamente llamarse igual.

En la llamada a power que haces en main utilizas un literal 2, y una variable n con valor literal 3.

- pasar un argumento por referencia, se modifica porque recibe la posición de memoria donde está el valor.
- pasar un argumento por valor, no se modifica porque es una copia, es decir es una posición de memoria diferente.

Un **Puntero** es un argumento por referencia. 🐱

# 3. Bibliotecas estándar de funciones
## Principales Bibliotecas de C

- Las funciones declaradas en **stdio.h** pueden clasificarse en dos categorías: funciones de manipulación de ficheros y funciones de manipulación de entradas y salidas. [fuente](https://es.wikipedia.org/wiki/Stdio.h#:~:text=h%2C que significa "standard input,y salida%2C así como la)
- - Las funciones que pertenecen a **conio.h** declara varias funciones útiles para mejorar el rendimiento de la «entrada y salida por consola» [fuente](https://es.wikipedia.org/wiki/Conio.h#:~:text=a la búsqueda-,conio.,de E%2FS por consola.)
- Las funciones que pertenecen a **stdlib.h** pueden clasificarse en las siguientes categorías: conversión, memoria, control de procesos, ordenación y búsqueda, matemáticas. [fuente](https://es.wikipedia.org/wiki/Stdlib.h#:~:text=a la búsqueda-,stdlib.,control de procesos y otras.)
- **string.h** es un archivo de la Biblioteca estándar del lenguaje de programación C que contiene la definición de macros, constantes, funciones y tipos y algunas operaciones de manipulación de memoria.
  [fuente](https://es.wikipedia.org/wiki/String.h)
- **math.h** es un archivo de cabecera de la …biblioteca estándar del lenguaje de programación C diseñado para operaciones matemáticas básicas. [fuente](https://es.wikipedia.org/wiki/Math.h)
- **time.h** relacionado con formato de hora y fecha es un archivo de cabecera de la biblioteca estándar del lenguaje de programación C que contiene funciones para manipular y formatear la fecha y hora del sistema. [fuente] (https://es.wikipedia.org/wiki/Time.h)
- **ctype.h** es un archivo de cabecera de la biblioteca estándar del lenguaje de programación C diseñado para operaciones básicas con caracteres. [fuente](https://es.wikipedia.org/wiki/Ctype.h)
- **signal.h** es un archivo de cabecera definido en la Biblioteca estándar de C para especificar como un programa maneja señales mientras se ejecuta. [fuente](https://es.wikipedia.org/wiki/Signal.h)
- **locale.h** [fuente](https://es.cppreference.com/w/c/locale/LC_categories)
- **errno.h** [fuente](https://es.cppreference.com/w/cpp/header/cerrno)
- **assert.h** proporcionar una definicion de la macro assert, que imprime un mensaje de error y aborta el [programa fuente](https://es.wikipedia.org/wiki/Assert.h)

Tabla de codificación [ASCII](https://ascii.cl/es/)

## Math.h
## String.h
## Time.h
## Stdlib.h

# 4. Cierre
## Conclusiones