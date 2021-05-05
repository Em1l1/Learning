<h1> 🎙️🥸 POO y Algoritmos con Python 🌋⌨️</h1>
<h3>David Aroesti</h3>

[![](img/python.jpg "Curso POO y Algoritmos con Python")](https://platzi.com/clases/poo-python/)


<h1>Tabla de contenido</h1>
 
- [1. Programación Orientada a Objetos](#1-programación-orientada-a-objetos)
  - [Introducción al curso](#introducción-al-curso)
  - [Programación Orientada a Objetos](#programación-orientada-a-objetos)
  - [Tipos de datos abstractos y clases, Instancias](#tipos-de-datos-abstractos-y-clases-instancias)
  - [Instancias](#instancias)
  - [Decomposición](#decomposición)
  - [Abstracción](#abstracción)
  - [Funciones: base de los decoradores](#funciones-base-de-los-decoradores)
    - [Recordando sobre funciones](#recordando-sobre-funciones)
    - [Funciones cómo objetos de primera-clase](#funciones-cómo-objetos-de-primera-clase)
    - [Funciones anidadas](#funciones-anidadas)
  - [Setters, getters y decorador property](#setters-getters-y-decorador-property)
    - [¿Qué son getters y setters?](#qué-son-getters-y-setters)
    - [Clases sin getters y setters](#clases-sin-getters-y-setters)
    - [Utilizando getters y setters](#utilizando-getters-y-setters)
    - [Decorador @property](#decorador-property)
  - [Encapsulación, getters and setters](#encapsulación-getters-and-setters)
    - [@property](#property)
  - [Herencia](#herencia)
  - [Polimorfismo](#polimorfismo)
- [2. Complejidad algorítmica](#2-complejidad-algorítmica)
  - [Introducción a la complejidad algorítmica](#introducción-a-la-complejidad-algorítmica)
    - [¿Como podríamos aplicar nuestra función `T(n)`?](#como-podríamos-aplicar-nuestra-función-tn)
  - [Conteo abstracto de operación](#conteo-abstracto-de-operación)
  - [Notación asintótica](#notación-asintótica)
  - [Clases de complejidad algorítmica](#clases-de-complejidad-algorítmica)
- [3. Algoritmos de búsqueda y ordenación](#3-algoritmos-de-búsqueda-y-ordenación)
  - [Búsqueda lineal](#búsqueda-lineal)
  - [Búsqueda binaria](#búsqueda-binaria)
  - [Ordenamiento de burbuja](#ordenamiento-de-burbuja)
  - [Ordenamiento por inserción](#ordenamiento-por-inserción)
  - [Ordenamiento por mezcla](#ordenamiento-por-mezcla)
- [4. Ambientes virtuales](#4-ambientes-virtuales)
  - [Ambientes virtuales](#ambientes-virtuales)
  - [comandos de pip:](#comandos-de-pip)
- [5. Graficado](#5-graficado)
- [¿Por qué graficar?](#por-qué-graficar)
- [Graficado simple](#graficado-simple)
- [6. Algoritmos de optimización](#6-algoritmos-de-optimización)
  - [Introducción a la optimización](#introducción-a-la-optimización)
  - [El problema del morral](#el-problema-del-morral)
  - [Conclusiones](#conclusiones)

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

La decomposición es un concepto simple pero poderoso que implica:

  - Dividir un problema en problemas más pequeños.
  - Las clases permiten crear mayores abstracciones en forma de componentes.
  - Cada clase se encarga de una parte del problema y el programa se vuelve más fácil de mantener.
  
Para realizar un ejemplo de decomposición modelaremos un automóvil.

```py
# Creamos la clase Automóvil.
class Automovil:

    # El constructor creara todas las características de la instancia.
    def __init__(self, modelo, marca, color):
        self.modelo = modelo
        self.marca = marca
        self.color = color
        self._estado = 'en_reposo'
        self._motor = Motor(cilindros=4) # Hacemos referencia a la clase Motor.


    # La clase automóvil tiene el método de acelerar.
    def acelerar(self, tipo='despacio'):
        if tipo == 'rapida':
            # De la clase Motor ejecuta el método inyecta_gasolina.
            self._motor.inyecta_gasolina(10)
        else:
            self._motor.inyecta_gasolina(3)

        self._estado = 'en_movimiento'


    def frenar(self):
        self._motor.inyecta_gasolina(0)
        self._estado = 'en_reposo'


# Creamos la clase Motor
class Motor:

    # Con el constructor definimos sus características.
    def __init__(self, cilindros, tipo='gasolina'):
        self.cilindros = cilindros
        self.tipo = tipo
        self._temperatura = 0


    # La clase motor tiene el método de inyecta_gasolina.
    def inyecta_gasolina(self, cantidad):
        pass
```

Copiar datos con xclip desde terminal

```bash
# cCopia
xclip -sel clip file_name

tail -n 30 logfile.log | xclip -sel clip

pandoc -t html file.md | xclip -sel clip

# Pegar
cltr + v = pegar
```

- [xclip](https://conpilar.es/como-copiar-pegar-la-salida-del-comando-usando-xclip-en-linux/)
## Abstracción

La abstracción es:

- Enfocarnos en la información relevante.
- Separar la información central de los detalles secundarios.
- Podemos utilizar variables y métodos (privados o públicos).

```py
# Creamos la clase Lavadora
class Lavadora:

    def __init__(self):
        pass

    # Tiene un método publico lavar que referencia a otros métodos
    def lavar(self, temperatura='caliente'):
        self._llenar_tanque_de_agua(temperatura)
        self._anadir_jabon()
        self._lavar()
        self._centrifugar()


    # Los métodos privados de la clase no son relevantes
    # para el uso desde afuera de la clase y por
    # convención se inicia con _

    def _llenar_tanque_de_agua(self, temperatura):
        print(f'Llenando el tanque con agua {temperatura}')


    def _anadir_jabon(self):
        print('Añadiendo jabón')


    def _lavar(self):
        print('Lavando la ropa')


    def _centrifugar(self):
        print('Centrifugando la ropa')


if __name__ == '__main__':
    lavadora = Lavadora()
    lavadora.lavar() # Ejecutamos el método publico de nuestra instancia.
```

![](https://i.ibb.co/BP6vzSF/flor.jpg)

Podemos observar su color, percibir el olor que emite, somos capaces de observar el número de pétalos.

En cambio, desconocemos cómo es que se genera el número exacto de pétalos que tendrá la flor, lo mismo con el color y el olor desconocemos el proceso preciso que sigue la flor para ser lo que es.
(Claro, si no eres experto en flores ಠ_ಠ )

## Funciones: base de los decoradores

El concepto de decorador en Python es algo que podríamos ubicar en un nivel “intermedio” en el manejo del lenguaje, por lo que es buena idea que tengas una base sólida del lenguaje, sobre todo en cuanto a funciones, al momento de profundizar e implementarlos.

Los decoradores son una forma sencilla de llamar funciones de orden mayor, es decir, funciones que toman otra función cómo parámetro y/o retornan otra función como resultado. De esta forma un decorador añade capacidades a una función sin modificarla.

Un ejemplo de esto son las llantas de un automóvil si les colocas cadenas para la nieve: aún puede andar y además extiende su funcionalidad para conducirse en otros terrenos.

### Recordando sobre funciones

Antes de abordar el tema de decoradores haremos un pequeño repaso por las funciones, las cuales retornan un valor ante la entrada de un argumento.

Analicemos este sencillo ejemplo donde una función que multiplica un número que se eleva a la tercer potencia:

```py
def elevar_cubo(numero):
	return numero * numero * numero
Si damos como argumento el número 3, entonces tendremos como salida el número 27 al ejecutar la función:

>>> elevar_cubo(3)
27
```

### Funciones cómo objetos de primera-clase

Otro concepto importante a tener en cuenta es que en Python las funciones son objetos de primera-clase, es decir, que pueden ser pasados y utilizados cómo argumentos al igual que cualquier otro objeto (strings, enteros, flotantes, listas, etc.).

Veamos un ejemplo donde definimos 3 diferentes funciones que utilizaremos de manera conjunta:

```py
def presentarse(nombre):
	return f"Me llamo {nombre}"

def estudiemos_juntos(nombre):
	return f"¡Hey {nombre}, aprendamos Python!"

def consume_funciones(funcion_entrante):
	return funcion_entrante("David")
```

Las primeras dos funciones son obvias en su resultado, donde nos mostrarán un mensaje con el valor de la variable nombre. La tercer función puede ser más compleja de predecir ya que toma una función cómo entrada y veamos que pasa cuando colocamos una función cómo atributo:

```py
>>> consume_funciones(presentarse)
'Me llamo David'

>>> consume_funciones(estudiemos_juntos)
'¡Hey David, aprendamos Python!'
```

Pongamos atención en cómo la función `consume_funciones()` se escribe con paréntesis para ser ejecutada, mientras que la función presentarse y `estudiemos_juntos` para solo hacer referencia a estas.

### Funciones anidadas

Al igual que los condicionales y bucles también puedes colocar funciones dentro de otra función.

Toma un minuto para analizar el siguiente código e inferir cual será el resultado de salida:

```py
def funcion_mayor():
	print("Esta es una función mayor y su mensaje de salida.")

	def librerias():
		print("Algunas librerías de Python son: Scikit-learn, NumPy y TensorFlow.")

	def frameworks():
		print("Algunos frameworks de Python son: Django, Dash y Flask.")

	frameworks()
	librerias()
```

Si llamamos a la función `funcion_mayor` tendremos la siguiente salida:

```py
>>> funcion_mayor()
Esta es una función mayor y su mensaje de salida.
Algunos frameworks de Python son: Django, Dash y Flask.
Algunas librerías de Python son: Scikit-learn, NumPy y TensorFlow.
```

Debemos considerar que las funciones anidadas dentro de funcion_mayor no se ejecutan sino hasta que se llama esta primera, siendo muestra del scope o alcance de las funciones y si las llamamos obtendremos un error.

En la siguiente lectura entraremos al concepto de decoradores, setters y getters , pues al entender mejor las funciones será más fácil asimilar su uso en la implementación del encapsulamiento.

## Setters, getters y decorador property

En este punto estamos comenzando a utilizar conceptos en Python que comienzan a ser más avanzados, por lo que es normal que puedan parecerte complejos o difíciles de asimilar, así que te animo a que los repases un par de veces.

Puedes tener la tranquilidad de que si bien, al inicio no los implementas en su totalidad, podrás seguir avanzando en el curso y poco a poco incorporarlos a tus proyectos donde lo más importante es que sepas que cuentas con estas herramientas.

Entendiendo el concepto de decorador
Antes de comenzar me gustaría que analices el siguiente código:

```py
def funcion_decoradora(funcion):
	def wrapper():
		print("Este es el último mensaje...")
		funcion()
		print("Este es el primer mensaje ;)")
	return wrapper()

def zumbido():
	print("Buzzzzzz")
```

`zumbido = funcion_decoradora(zumbido)`
¿Qué pasará si llamamos a la `función zumbido()`? si logras determinar el resultado de salida o entenderlo con detalle, entonces podemos seguir adelante.

Lo que sucede es lo siguiente:

```py
>>> zumbido()
Este es el último mensaje...
Buzzzzzz
Este es el primer mensaje ;)
```

Si no diste con el resultado no te preocupes, solo hay que analizarlo con detalle y el truco está en la línea `zumbido = funcion_decoradora(zumbido)`. Sucede que la `función wrapper() recibió la la función zumbido()` cómo parámetro y coloca su salida entre los otros dos prints.

Todo lo que sucede se conoce en programación como metaprogramación (metaprogramming), ya que una parte del programa trata de modificar a otra durante el tiempo de compilación. En tanto un decorador básicamente toma una función, le añade alguna funcionalidad y la retorna.

Mejorando la sintaxis
Definitivamente la forma en que decoramos la función es complejo, pero afortunadamente Python lo tiene en cuenta y podemos utilizar decoradores con el símbolo @. Volviendo al mismo ejemplo de `funcion_decoradora()`, podemos simplificarlo así:

```py
@funcion_decoradora
def zumbido():
	print("Buzzzzzz")
```

En solo tres líneas de código tenemos el mismo resultado que escribir `zumbido = funcion_decoradora(zumbido)`

### ¿Qué son getters y setters?

A diferencia de otros lenguajes de programación, en Python los getters y setters tienen el objetivo de asegurar el encapsulamiento de datos. Cómo habrás visto, si declaramos una variable privada en Python al colocar un guión bajo al inicio de esta `(_)` y normalmente son utilizados para: añadir lógica de validación al momento de obtener y definir un valor y, para evitar el acceso directo al campo de una clase.

La realidad es que en Python no existen variables netamente privadas, pues aunque se declaren con un guión bajo podemos seguir accediendo a estas. En Programación Orientada a Objetos esto es peligroso, pues podemos alterar el método de alguna clase y tener efectos colaterales que afecten la lógica de nuestra aplicación.

### Clases sin getters y setters

Veamos un ejemplo con una clase que almacena un dato de distancia recorrida en millas `(mi)` y lo convierte a kilómetros `(km)`:

```py
class Millas:
	def __init__(self, distancia = 0):
		self.distancia = distancia

	def convertir_a_kilometros(self):
		return (self.distancia * 1.609344)
```

Ahora creemos un objeto que haga referencia a un viaje:

```py
# Creamos un nuevo objeto
avion = Millas()

# Indicamos la distancia
avion.distancia = 200

# Obtenemos el atributo distancia
>>> print(avion.distancia)
200

# Obtenemos el método convertir_a_kilometros
>>> print(avion.convertir_a_kilometros())
321.8688
```

### Utilizando getters y setters


Incluyamos un par de métodos para obtener la distancia y otro para que no acepte valores inferiores a cero, pues no tendría sentido que un vehículo recorra una distancia negativa. Estos son métodos getters y setters:

```py
class Millas:
	def __init__(self, distancia = 0):
		self.distancia = distancia

	def convertir_a_kilometros(self):
		return (self.distancia * 1.609344)

	# Método getter
	def obtener_distancia(self):
		return self._distancia

	# Método setter
	def definir_distancia(self, valor):
		if valor < 0:
			raise ValueError("No es posible convertir distancias menores a 0.")
		self._distancia = valor
```

El método getter obtendrá el valor de la distancia que y el método setter se encargará de añadir una restricción. También debemos notar cómo distancia fue reemplazado por `_distancia`, denotando que es una variable privada.

Si probamos nuestro código funcionará, la desventaja es que cualquier aplicación que hayamos creado con una base similar deberá ser actualizado. Esto no es nada escalable si tenemos cientos o miles de líneas de código.

`Función property()`
Esta función está incluida en Python, en particular crea y retorna la propiedad de un objeto. La propiedad de un objeto posee los métodos `getter(), setter() y del()`.

En tanto la función tiene cuatro atributos: `property(fget, fset, fdel, fdoc) `:

- `fget :` trae el valor de un atributo.
- `fset :` define el valor de un atributo.
- `fdel :` elimina el valor de un atributo.
- `fdoc :` crea un docstring por atributo.

Veamos un ejemplo del mismo caso implementando la función property() :

```py
class Millas:
	def __init__(self):
		self._distancia = 0

	# Función para obtener el valor de _distancia
	def obtener_distancia(self):
		print("Llamada al método getter")
		return self._distancia

	# Función para definir el valor de _distancia
	def definir_distancia(self, recorrido):
		print("Llamada al método setter")
		self._distancia = recorrido

	# Función para eliminar el atributo _distancia
	def eliminar_distancia(self):
		del self._distancia

	distancia = property(obtener_distancia, definir_distancia, eliminar_distancia)

# Creamos un nuevo objeto 
avion = Millas()

# Indicamos la distancia
avion.distancia = 200

# Obtenemos su atributo distancia
>>> print(avion.distancia)
Llamada al método getter
Llamada al método setter
200
```

Aunque en este ejemplo hay una sola llamada a `print`, tenemos tres líneas como salida pues esta llama a los primeros dos métodos. Por lo que la propiedad distancia es una propiedad de objeto que ayuda a mantener el acceso de forma privada.

### Decorador @property
Este decorador es uno de varios con los que ya cuenta Python, el cual nos permite utilizar `getters` y `setters` para hacer más fácil la implementación de la programación orientada a objetos en Python cambiando los métodos o atributos de las clases de forma que no modifiquemos el código.

Pero mejor veamos un ejemplo en acción:

```py
class Millas:
	def __init__(self):
		self._distancia = 0

	# Función para obtener el valor de _distancia
	# Usando el decorador property
	@property
	def obtener_distancia(self):
		print("Llamada al método getter")
		return self._distancia

	# Función para definir el valor de _distancia
	@obtener_distancia.setter
	def definir_distancia(self, valor):
		if valor < 0:
			raise ValueError("No es posible convertir distancias menores a 0.")
		print("Llamada al método setter")
		self._distancia = valor

# Creamos un nuevo objeto 
avion = Millas()

# Indicamos la distancia
avion.distancia = 200

# Obtenemos su atributo distancia
>>> print(avion.distancia)
Llamada al método getter
Llamada al método setter
200
```

De esta manera usamos el decorador `@property` para utilizar getters y setters de una forma más prolija e incluimos una nueva funcionalidad a nuestro método `definir_distancia()` , al mismo tiempo protegemos el acceso a nuestras variables privadas y cumplimos con el principio de encapsulación.

## Encapsulación, getters and setters

![](https://i.ibb.co/3CSCc0b/decorator-comic-1.png)

**Un Decorator:** Usar ropa es un ejemplo del uso de decoradores en la vida real. Cuando tienes frío, te envuelves en un suéter. Si todavía tienes frío con un suéter, puedes usar una chaqueta en la parte superior. Si está lloviendo, puedes ponerte un impermeable. Todas estas prendas “amplían” tu comportamiento básico, pero no son parte de ti, y pueden quitarse fácilmente cuando no las necesites.

![](https://i.ibb.co/BTxDyGQ/decoratorconcept.png)

Un Decorator en código: No es más que un objeto que agrega nuevas funcionalidades al objeto original.

### @property

En Python, @property es uno de estos decorators. Es una función integrada a Python y devuelve un objeto de tipo property con los metodos Getters y Setters.

- [Decorator](https://refactoring.guru/design-patterns/decorator)
- [Python @property decorator](https://www.programiz.com/python-programming/property)

En la definición de la clase el atributo region es privado y está inicializado en None. Al ser privado no debería poder accederse a su valor desde fuera de la clase directamente, sino que debería hacerse** mediante un método** que retorne su valor. De la misma manera no debería poder modificarse su valor desde fuera, así que es necesario un método para eso.

El decorador @property le otorga funcionalidades al método region. En ese momento region puede ser:

  - `getter:` un método que retorne el valor del atributo privado.

  - `setter:` un método que asigne un valor al atributo

Entonces ahora puedo hacer @region.metodo, en este caso @region.setter y definir una método que me permita controlar que valor va a ser asignado a ese atributo. Si el valor no es el correcto entonces** se lanza una excepción** con raise ValueError indicando el error.

## Herencia

![](https://i.ibb.co/rwvQP5N/herencia.jpg)

- Permite modelar una jerarquía de clases.
- Permite compartir comportamiento común en la jerarquía.
- Al padre se le conoce como superclase y al hijo como subclase.
## Polimorfismo

Python permite la herencia multiple.

Si las clases tienen un método con el mismo nombre y número de parámetros, gana (por así decirlo) el método de la clase que está más a la izquierda en cuanto a su implementación.

El Polimorfismo es la base que nos permite crear verdaderas clases abstractas e interfaces

> Es la capacidad que tiene un objeto de presentar diferentes comportamientos al momento de realizar una acción, el polimorfismo se presenta cuando se aplica el principio de Herencia.

![](https://i.ibb.co/VwMFh5z/poli.jpg)

![](https://i.ibb.co/HnH5YZv/poly.png)
# 2. Complejidad algorítmica

## Introducción a la complejidad algorítmica

La complejidad algorítmica nos permite comparar la eficiencia de 2 algoritmos, esto a su vez va a predecir el tiempo que va a tomar resolver un problema. No solamente podemos analizar la complejidad desde la perspectiva temporal, también la podemos hacer desde la espacial, como por ejemplo cuanto espacio en memoria necesitamos.

La complejidad algorítmica temporal la podemos definir como `T(n)` el cual determinara el tiempo que demora en resolver nuestro algoritmo.

Aproximaciones

- Cronometrar el tiempo en el que corre un algoritmo
- Contar los pasos con una medida abstracta de operación
- Contar los pasos conforme nos aproximamos al infinito


### ¿Como podríamos aplicar nuestra función `T(n)`?

Cronometrar el tiempo en el que corre un algoritmo. Sin embargo no es una buena forma de medir los algoritmos, ya que no se puede predecir cuanto demorara a medida que crece nuestros pasos.

Contar los pasos con una medida abstracta de operación. Nos puede acercar a una medición ideal, sin embargo varia mucho de algoritmo en algoritmo y a medida que crece nuestro dataset existen muchos términos que llegan a ser irrelevantes.

Contar los pasos conforme nos aproximamos al infinito pero con una medida asintótica.

![](https://i.ibb.co/xq9tMMh/complejidad.webp)

pra gragficar con brokeh instalar los modulos con 

```bash
$ pip install brokeh
```

## Conteo abstracto de operación

Contamos todas las operaciones que realiza el código para tratar de determinar su complejidad.

- Todas las operaciones que no dependan del tamaño del input (expresiones simples, condicionales, bucles determinados, etc), tendrán un número determinado de pasos (constante)
- Los loops que dependan del tamaño del input tendrán un crecimiento lineal con respecto al input (a*x)
- Los loos anidados crecen de manera polinomial (sea n la cantidad de loops anidados → a*x^n) [`9-abstraccion-de-operaciones.py`](poo-orientado-objetos/9-abstraccion-de-operaciones.py)

## Notación asintótica

  - `Un loop` => crecimiento lineal.
  - `Un loop dentro de otro` => crecimiento cuadratico
  - `Llamadas recursivas` => crecimiento exponecncial.

Notacion asintótica

Big O notation.

Crecimiento asintótico

No importan las variaciones pequeñas.

El enfoque se centra en lo que pasa conforme el tamaño del problema se acerca al infinito

Mejor de los casos, promedio, peor de los casos.

Nada más importa el término de mayor tamaño.

Ejemplos:

```py
def f(n)
    for i in range(n):
        print(i)

    for i in range(n):
        print(i)

O(n) + O(n) = O(n+n) = O(2n) = O(n) //Crecimiento lineal
```
```py
def f(n)
    for i in range(n):
        print(i)

    for i in range(n * n):
        print(i)

O(n) + O(n*n) = O(n+n) = O(n + n^2) = O(n^2) //Crecimiento exponencial
```

```py
def f(n)
    for i in range(n):
        for j in range(n):
            print(i,j)

O(n) O(n) = O(nn) = O(n^2) //Crecimiento exponencial
```
```py
def fibonacci(n):
    if n == 0 or n ==1:
        return 1

     return fibonacci(n - 1) + fibonacci(n - 2)

O(2**n) //tiene varias llamadas recursivas y eso hace al algoritmo con un crecimiento exponencial
```

![](https://i.ibb.co/YQZJmGm/bigo.png)

Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.

- [Notación Big O: Guía para Principiantes](https://medium.com/@charlie_fuentes/notacion-big-0-para-principiantes-f9cbb4b6bec8)
## Clases de complejidad algorítmica

Clases de complejidad algorítmica
Existen distintos tipos de complejidad algorítmica:

- `O(1) Constante:` no importa la cantidad de input que reciba, siempre demorara el mismo tiempo.
- `O(n) Lineal:` la complejidad crecerá de forma proporcional a medida que crezca el input.
- `O(log n) Logarítmica:` nuestra función crecerá de forma logarítmica con respecto al input. Esto significa que en un inicio crecerá rápido, pero luego se estabilizara.
- `O(n log n) Log lineal:` crecerá de forma logarítmica pero junto con una constante.
- `O(n²) Polinomial:` crecen de forma cuadrática. No son recomendables a menos que el input de datos en pequeño.
- `O(2^n) Exponencial:` crecerá de forma exponencial, por lo que la carga es muy alta. Para nada recomendable en ningún caso, solo para análisis conceptual.
- `O(n!) Factorial:` crece de forma factorial, por lo que al igual que el exponencial su carga es muy alta, por lo que jamas utilizar algoritmos de este tipo.

![](https://i.ibb.co/QYKfBdj/BigO.jpg)

![](https://i.ibb.co/pWFXzV2/BigO1.jpg)
# 3. Algoritmos de búsqueda y ordenación

## Búsqueda lineal

La búsqueda lineal es un algoritmo muy sencillo. Consta en buscar si un elemento se encuentra dentro de una lista, array o un sistema ordenado o no ordenado para poder determinar si el elemento se encuentra en el o forma parte de el.

¿Cuál es el peor caso del siguiente código? Si nos fijamos existe un for loop que crece según el tamaño de la lista, por lo cual nuestro Big O es O(n).


```py
import random

def busqueda_lineal(lista, objetivo):
    match = False

    for elemento in lista: # O(n)
        if elemento == objetivo:
            match = True
            break

    return match


if __name__ == '__main__':
    tamano_de_lista = int(input('De que tamano sera la lista? '))
    objetivo = int(input('Que numero quieres encontrar? '))

    lista = [random.randint(0, 100) for i in range(tamano_de_lista)]

    encontrado = busqueda_lineal(lista, objetivo)
    print(lista)
    print(f'El elemento {objetivo} {"esta" if encontrado else "no esta"} en la lista')
```

- Una habilidad importante de un computer scientist es reducir cualquier problema a otros que ya sabemos resolver.
- La búsqueda lineal es sencilla, ya que busca en todos los elementos de manera secuencial.
- El peor caso es que el elemento se encuentre al final, por lo tanto tenemos `$O(n)$`.
- Podemos generar un if elsedirectamente en una sola línea de código, para ello la sintaxis es en general `(en un f-string)` 

```bash
{<operaciones> if <condiciones> else <operaciones>}
```

- [O(log n) types of Algorithms](https://riptutorial.com/algorithm/example/26648/o-log-n--types-of-algorithms)
## Búsqueda binaria

La búsqueda binaria toma una estrategia llamada “Divide y conquista”, la cual consiste en dividir el problema en 2 en cada iteración. Este algoritmo asume que la lista se encuentra ordenada, por lo que es necesario realizar este paso primero.

La búsqueda binaria es uno de los mejores algoritmos que se tienen hoy en día para búsqueda, ya que reduce significativamente el numero de pasos, y así disminuyendo nuestro Big O.

![](https://i.ibb.co/8m93tR3/binary-and-linear-search-animations.gif)

Para ver de forma practica haremos una búsqueda binaria a través de código. Lo primero que tenemos que realizar es ordenar nuestra lista antes de ejecutar la búsqueda.

## Ordenamiento de burbuja


[O(log n) types of Algorithms](https://riptutorial.com/algorithm/example/26648/o-log-n--types-of-algorithms)

El primer algoritmo de ordenamiento que veremos es el ordenamiento de burbuja. Es un algoritmo que recorre repetidamente una lista que necesita ordenarse. Compara elementos adyacentes y los intercambia si están en el orden incorrecto. Este procedimiento se repite hasta que no se requiere mas intercambios, lo que indica que la lista se encuentra ordenada.

![](https://i.ibb.co/L6HP0NG/bubble.gif)


## Ordenamiento por inserción

El ordenamiento por inserción es uno de los algoritmos más comunes que estudian
los Científicos del Cómputo. Es intuitivo y fácil de implementar, pero es muy
ineficiente para listas de gran tamaño.

Una de las características del ordenamiento por inserción es que ordena en “su
lugar.” Es decir, no requiere memoria adicional para realizar el ordenamiento
ya que simplemente modifican los valores en memoria.

La definición es simple:

Una lista es dividida entre una sublista ordenada y otra sublista desordenada.
Al principio, la sublista ordenada contiene un solo elemento, por lo que por
definición se encuentra ordenada.

A continuación se evalua el primer elemento dentro la sublista desordenada para
que podamos insertarlo en el lugar correcto dentro de la lista ordenada.

La inserción se realiza al mover todos los elementos mayores al elemento que
se está evaluando un lugar a la derecha.

Continua el proceso hasta que la sublista desordenada quede vacia y, por lo
tanto, la lista se encontrará ordenada.

Veamos un ejemplo:

Imagina que tienes la siguiente lista de números:

7, 3, 2, 9, 8

Primero añadimos 7 a la sublista ordenada:

7, 3, 2, 9, 8

Ahora vemos el primer elemento de la sublista desordenada y lo guardamos en
una variable para mantener el valor. A esa variable la llamaremos valor_actual.
Verificamos que 3 es menor que 7, por lo que movemos 7 un lugar a la derecha.

7, 7, 2, 9, 8 (valor_actual=3)

3 es menor que 7, por lo que insertamos el valor en la primera posición.

3, 7, 2, 9, 8

Ahora vemos el número 2. 2 es menor que 7 por lo que lo movemos un espacio a la
derecha y hacemos lo mismo con 3.

3, 3, 7, 9, 8 (valor_actual=2)

Ahora insertamos 2 en la primera posición.

2, 3, 7, 9, 8

9 es más grande que el valor más grande de nuestra sublista ordenada por lo que
lo insertamos directamente en su posición.

2, 3, 7, 9, 8

El último valor es 8. 9 es más grande que 8 por lo que lo movemos a la derecha:

2, 3, 7, 9, 9 (valor_actual=8)

8 es más grande que 7, por lo que procedemos a insertar nuestro valor_actual.

2, 3, 7, 8, 9

Ahora la lista se encuentra ordenada y no quedan más elementos en la sublista
desordenada.

Antes de ver la implementación en Python, trata de implementarlo por ti mismo
y compártenos tu algoritmo en la sección de comentarios.

Esta es una forma de implementar el algoritmo anterior:

```py
def ordenamiento_por_insercion(lista):

    for indice in range(1, len(lista)):
        valor_actual = lista[indice]
        posicion_actual = indice

        while posicion_actual > 0 and lista[posicion_actual - 1] > valor_actual:
            lista[posicion_actual] = lista[posicion_actual - 1]
            posicion_actual -= 1

        lista[posicion_actual] = valor_actual
```

![](https://i.ibb.co/pxr6QXz/insercion.webp)

- [ORDENAMIENTO BURBUJA](https://visualgo.net/es/sorting)

- [Python - Nivel 31 - Reto 5 - Ordenamiento por inserció](https://www.youtube.com/watch?v=P05_0zUxJTQ)

## Ordenamiento por mezcla

Ordenamiento por mezcla
El ordenamiento por mezcla creado por John von Neumann el cual aplica el concepto de “divide y conquista”. Primero divide una lista en partes iguales hasta que quedan sublistas de 1 o 0 elementos. Luego las recombina en forma ordenada.

![](https://i.ibb.co/L51mNFN/mezcla.gif)

- [Merge-sort with Transylvanian-saxon (German) folk dance](https://www.youtube.com/watch?v=XaqR3G_NVoo)
- [Merge Sort | Algoritmo de ordenamiento por mezcla | Python](https://www.youtube.com/watch?v=FjOwTbOy18M)
- [Merge Sort](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/)
# 4. Ambientes virtuales

## Ambientes virtuales

Los ambientes virtuales permiten aislar el ambiente para poder instalar diversas versiones de paquetes. A partir de python 3 se incluye en la librería estándar en el módulo `venv.` Ningún ingeniero profesional de Python trabaja sin ellos.

`Pip` permite descargar paquetes de terceros para utilizar en nuestro programa, también permite compartir nuestros paquetes con terceros y también podemos definir la versión del paquete que necesitamos.

Una practica muy útil es crear un archivo con el nombre de `requirements.txt` y colocar los paquetes que necesitemos uno debajo del otro

```py
boken
numpy
flask
```

Y luego usas

```bash
pip install -r requirements.txt
```

```bash
 mkdir graficado
 cd graficado
 python3.9 -m venv env
 source env/bin/activate
 pip install bokeh
```

comandos de pip:
--

- `search:` busca un paquete

```bash
pip search <package>
```

- `install:` instala un paquete

```bash
pip install <package>
```

- `show:` muestra detalles del paquete instalado

```bash
pip show <package>
```

- `uninstall:` eliminar un paquete

```bash
pip uninstall <package>
```

- `list:` retorna la lista de paquetes en el ambiente actual

```bash
pip list
```

- `freeze:` se utiliza para congelar los paquetes y su versión actual.

```bash
pip freeze
```


- [PyPI · The Python Package Index](https://pypi.org/)

# 5. Graficado

# ¿Por qué graficar?

Es importante que podamos traducir los datos que nos arrojan nuestro programa en un elemento visual, así podemos realizar reconocimientos de patrones, predicción de series, simplifica la interpretación y la conclusión acerca de los datos.

- Reconocimiento de patrones
- Predicion de una serie
- Simplifica la interpretacion y las conclusiones acerca de los datos
- Visualizar grandes cantidades de datos de manera sencilla.
- Fácil comparativa entre datos
- Permite tener una primera imagen global, rápida.
- Facilidad de modificación y filtros de los datos.

![](https://i.ibb.co/9NX9sNd/grafica.png)


# Graficado simple



# 6. Algoritmos de optimización

## Introducción a la optimización



## El problema del morral


## Conclusiones

