# 🎙️🥸 POO y Algoritmos con Python 🌋⌨️
#### David Aroesti

[![](img/python.jpg "Curso POO y Algoritmos con Python")](https://platzi.com/clases/poo-python/)


# Tabla de contenido
 
- [1. Programación Orientada a Objetos](#1.-Programación-Orientada-a-Objetos)
    - [Introducción al curso](#Introducción-al-curso)
    - [Programación Orientada a Objetos](#Programación-Orientada-a-Objetos)
    - [Tipos de datos abstractos y clases, Instancias](#Tipos-de-datos-abstractos-y-clases-Instancias)
    - [Decomposición](#Decomposición)
    - [Abstracción](#Abstracción)
    - [Funciones: base de los decoradores](#Funciones-base-de-los-decoradores)
    - [Setters, getters y decorador property](#Setters-getters-y-decorador-property)
    - [Encapsulación, getters and setters](#Encapsulación-getters-and-setters)
    - [Herencia](#Herencia)
    - [Polimorfismo](#Polimorfismo)
- [2. Complejidad algorítmica](#2.-Complejidad-algorítmica)
    - [Introducción a la complejidad algorítmica](#Introducción-a-la-complejidad-algorítmica)
    - [Conteo abstracto de operación](#Conteo-abstracto-de-operación)
    - [Notación asintótica](#Notación-asintótica)
    - [Clases de complejidad algorítmica](#Clases-de-complejidad-algorítmica)
- [3. Algoritmos de búsqueda y ordenación](#3.-Algoritmos-de-búsqueda-y-ordenación)
    - [Búsqueda lineal](#Búsqueda-lineal)
    - [Búsqueda binaria](#Búsqueda-binaria)
    - [Ordenamiento de burbuja](#Ordenamiento-de-burbuja)
    - [Ordenamiento por inserción](#Ordenamiento-por-inserción)
    - [Ordenamiento por mezcla](#Ordenamiento-por-mezcla)
- [4. Ambientes virtuales](#4.-Ambientes-virtuales)
    - [Ambientes virtuales](#Ambientes-virtuales)
- [5. Graficado](#5.-Graficado)
    - [¿Por qué graficar?](#¿Por-qué-graficar?)
    - [Graficado simple](#Graficado-simple)
- [6. Algoritmos de optimización](#6.-Algoritmos-de-optimización)
    - [Introducción a la optimización](#Introducción-a-la-optimización)
    - [El problema del morral](#El-problema-del-morral)
    - [Conclusiones](#Conclusiones)

# 1. Programación Orientada a Objetos

## Introducción al curso

  * Entender cómo funciona la Programación Orientado a Objetos
  * Entender cómo medir la eficiencia temporal y espacial de nuestro algoritmo.
  * Entender cómo y por qué grafica.
  * Aprender a resolver problemas de búsqueda, ordenación y optimización.

## Programación Orientada a Objetos

Uno de los elementos más importantes de los lenguajes de programación
es la utilización de clases para organizar programas en módulos y abstracciones
de datos.

Las clases se pueden utilizar de muchas diversas maneras. Pero en este artículo
hablaremos de cómo utilizarlas en el contexto de la programación orientada a objetos.
La clave para entender la programación orientada a objetos es pensar en objetos
como agrupaciones de datos y los métodos que operan en dichos datos.

Por ejemplo, podemos representar a una persona con propiedades como nombre,
edad, género, etc. y los comportamientos de dicha persona como caminar, cantar,
comer, etc. De la misma manera podemos representar unos audífonos con propiedades
como su marca, tamaño, color, etc. y sus comportamientos como reproducir música,
pausar y avanzar a la siguiente canción.

Puesto de otra manera, la programación orientada a objetos nos permite modelar
cosas reales y concretas del mundo y sus relaciones con otros objetos.

Las ideas detrás de la programación orientada a objetos tienen más de 50 años
y han sido ampliamente aceptadas y practicadas en los últimos treinta. A
mediados de la década de los setenta se comenzaron a escribir artículos académicos
explicando los beneficios de esta aproximación a la programación. También durante
esos años se comenzaron a escribir los primeros lenguajes de programación que
incorporaban estas ideas (como Smalltalk y CLU). Pero no fue hasta la llegada
de Java y C++ que la idea consiguió un número importante de seguidores.

Hasta ahora, en el curso previo de esta serie
hemos utilizado programación orientada a objetos de manera implícita. Cuando
decimos "Los objetos son las principales cosas que un programa de Python
manipula. Cada objeto tiene un tipo que define qué cosas puede realizar un
programa con dicho objeto.", nos estamos refiriendo a las ideas principales
de la programación orientada a objetos. Hemos utilizado los tipos lista y
diccionario, entre muchos otros, así como los métodos asociados a dichos tipos.
Así como los creadores de un lenguaje de programación sólo pueden diseñar una
fracción muy pequeña de todas las funciones útiles ```(como abs, float, type,
etc.)```, también pueden escribir una fracción muy pequeña de los tipos útiles
```(int, str, dict, list, etc.)```. Ya sabemos los mecanismos que nos
permiten crear funciones, ahora veremos los mecanismos que nos permiten crear
nuevos tipos (o clases).

**Clases**

Las estructuras primitivas con las que hemos trabajado hasta ahora nos permiten
definir cosas sencillas, como el costo de algo, el nombre de un usuario, las
veces que debe correr un bucle, etc. Sin embargo, existen ocasiones cuando
necesitamos definir estructuras más complejas, por ejemplo un hotel. Podríamos
utilizar dos listas: una para definir los cuartos y una segunda para definir
si el cuarto se encuentra ocupado o no.

```python 
cuartos_de_hotel = [101, 102, 103, 201, 202, 203]
cuarto_ocupado = [True, False, False, True, True, False]
```

Sin embargo, este tipo de organización rápidamente se sale de control. ¿Qué
tal que quisieramos añadir más propiedades, cómo si el cuarto ya fue aseado o
no? ¿Si el cuarto tiene cama doble o sencilla? Esto nos lleva a una falta fuerte
de organización y es justamente el punto que justifica la existencia de clases.

Las clases nos permiten crear nuevos tipos que contiene información arbitraria
sobre un objeto. En el caso del hotel, podríamos crear dos `clases Hotel()` y
`Cuarto()` que nos permitiera dar seguimiento a las propiedades como número de
cuartos, ocupación, aseo, tipo de habitación, etc.

Es importante resaltar que las clases sólo proveen estructura. Son un molde con
el cual podemos construir objetos específicos. La clase señala las propiedades
que los hoteles que modelemos tendrán, pero no es ningún hotel específico. Para
eso necesitamos las instancias.

**Instancias**

Mientras que las clases proveen la estructura, las instancias son los objetos
reales que creamos en nuestro programa: un hotel llamado PlatziHotel o Hilton.
Otra forma de pensarlo es que las clases son como un formulario y una vez que
se llena cada copia del formulario tenemos las instancias que pertenecen a
dicha clase. Cada copia puede tener datos distintos, al igual que cada instancia
es distinta de las demás (aunque todas pertenecen a una misma clase).

Para definir una clase, simplemente utilizamos el keyword class. Por ejemplo:

```python
class Hotel:
    pass
```
Una vez que tenemos una clase llamada Hotel podemos generar una instancia
llamando al constructor de la clase.

```python
hotle = Hotel()
```

**Atributos de la instancia**

Todas las clases crean objetos y todos los objetos tienen atributos. Utilizamos
el método especial __init__ para definir el estado inicial de nuestra instancia.
Recibe como primer parámetro obligatorio `self (que es simplemente una referencia a la instancia)`.

```python
class Hotel:
    
    def __init__(self, numero_maximo_de_huespedes, lugares_de_estacionamiento):
        self.numero_maximo_de_huespedes = numero_maximo_de_huespedes
        self.lugares_de_estacionamiento = lugares_de_estacionamiento
        self.huespedes = 0


hotel = Hotel(numero_maximo_de_huespedes=50, lugares_de_estacionamiento=20)
print(hotel.lugares_de_estacionamiento) # 20
```

**Métodos de instancia**

Mientras que los atributos de la instancia describen lo que representa el
objeto, los métodos de instancia nos indican qué podemos hacer con las
instancias de dicha clase y normalmente operan en los mencionados atributos.
Los métodos son equivalentes a funciones dentro de la definición de la clase,
pero todos reciben self como primer argumento.

```python
class Hotel:

    ...

    def anadir_huespedes(self, cantidad_de_huespedes):
        self.huespedes += cantidad_de_huespedes

    def checkout(self, cantidad_de_huespedes):
        self.huespedes -= cantidad_de_huespedes

    def ocupacion_total(self):
        return self.huespedes


hotel = Hotel(50, 20)
hotel.anadir_huespedes(3)
hotel.checkout(1)
hotel.ocupacion_total() # 2
```

Ahora que ya sabemos qué son las clases y cómo las podemos utilizar en nuestros
programas, platícanos qué clases te serían útiles para modelar en uno de tus
programas.

## Tipos de datos abstractos y clases, Instancias


**Tipos de datos abstractos**

* En Python todo es un objeto y tine un tipo.
    * Representaci&iacute;n de datos y formas de interactuar con ello.

* Formas de interactuar con un objeto:
    * Creaci&oacute;n
    * Manipulaci&oacute;n
    * Destrucci&oacute;n

```Python
# definicion de clase 

class <nombre_de_la_clase>(<super_clase>):


    def __init__(self, <params>):
        <expresion>
    
    
    def <nombre_del_metodo>(self, <params>):
        <expresion>
```

```python
# Definicion
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saluda(self, otra_persona):
        return f'Hola {otra_persona.nombre}, me llammo {self.nombre}'

# uso

>>> david = Persona('David', 35)
>>> erika = Persona('erika', 32)

>>> david.saluda(erika)
'Hola Erika, me llamo David'
```
## Instancias

* Mientras que la clase es un molde, a los objetos creados se le conocen como instancias.
* Cuando se crea una instancia, se ejecuta el m&eacute;todo ```__init__```
* Todos los m&eacute;todos de una clase reciben impl&iacute;citamente como primer par&aacute;metro ```self```.

* Los atributos de clase nos permiten:
    * Representar datos
    * Procedimientos para interactuar con los mismos (m&eacute;todos)
    * Mecanismos para esconder la representaci&oacute;n interna.

* Se accede a los atributos con la notaci&oacute;n de punto.
* Puede tener atributos privados. Por convenci&oacute; comienzan con ```_```

## Decomposición
## Abstracción
## Funciones: base de los decoradores
## Setters, getters y decorador property
## Encapsulación, getters and setters
## Herencia
## Polimorfismo
# 2. Complejidad algorítmica
## Introducción a la complejidad algorítmica
## Conteo abstracto de operación
## Notación asintótica
## Clases de complejidad algorítmica
# 3. Algoritmos de búsqueda y ordenación
## Búsqueda lineal
## Búsqueda binaria
## Ordenamiento de burbuja
## Ordenamiento por inserción
## Ordenamiento por mezcla
# 4. Ambientes virtuales
## Ambientes virtuales
# 5. Graficado
# ¿Por qué graficar?
# Graficado simple
# 6. Algoritmos de optimización
## Introducción a la optimización
## El problema del morral
## Conclusiones