<h1>Python Intermedio</h1>

<h3>Facundo García Martoni</h3>

<h1>Tabla de Contenido</h1>

- [1. Preparación antes de empezar](#1-preparación-antes-de-empezar)
  - [Bienvenida al curso](#bienvenida-al-curso)
  - [El Zen de Python](#el-zen-de-python)
  - [¿Qué es la documentación?](#qué-es-la-documentación)
- [2. Entorno virtual](#2-entorno-virtual)
  - [¿Qué es un entorno virtual?](#qué-es-un-entorno-virtual)
  - [El primer paso profesional: creación de un entorno virtual](#el-primer-paso-profesional-creación-de-un-entorno-virtual)
  - [Instalación de dependencias con pip](#instalación-de-dependencias-con-pip)
  - [Una alternativa: Anaconda](#una-alternativa-anaconda)
- [3. Alternativa a los ciclos: comprehensions](#3-alternativa-a-los-ciclos-comprehensions)
  - [Listas y diccionarios anidados](#listas-y-diccionarios-anidados)
  - [List comprehensions](#list-comprehensions)
  - [Dictionary comprehensions](#dictionary-comprehensions)
- [4. Conceptos avanzados de funciones](#4-conceptos-avanzados-de-funciones)
  - [Funciones anónimas: lambda](#funciones-anónimas-lambda)
  - [High order functions: filter, map y reduce](#high-order-functions-filter-map-y-reduce)
  - [Proyecto: filtrando datos](#proyecto-filtrando-datos)
- [5. Manejo de errores](#5-manejo-de-errores)
  - [Los errores en el código](#los-errores-en-el-código)
  - [Debugging](#debugging)
  - [Manejo de excepciones](#manejo-de-excepciones)
  - [Poniendo a prueba el manejo de excepciones](#poniendo-a-prueba-el-manejo-de-excepciones)
  - [Assert statements](#assert-statements)
- [6. Manejo de archivos](#6-manejo-de-archivos)
  - [¿Cómo trabajar con archivos?](#cómo-trabajar-con-archivos)
  - [Trabajando con archivos de texto en Python](#trabajando-con-archivos-de-texto-en-python)
- [7. Conclusión](#7-conclusión)
  - [Reto final: Juego del Ahorcado o Hangman Game](#reto-final-juego-del-ahorcado-o-hangman-game)
  - [Continúa tu camino profesional con Python](#continúa-tu-camino-profesional-con-python)


# 1. Preparación antes de empezar

## Bienvenida al curso

- [slides-del-curso-de-python-intermedio.pdf](https://drive.google.com/file/d/1wMMYGQuYSOOi5eMlIKyB7uFe6m8Gg8wq/view?usp=sharing)

## El Zen de Python

El Zen de Python 🧘🏼‍♂️
Una excelente filosofía que les comparto en una imagen para llevar 😄

- **Bello es mejor que feo:**
Pyhton es estéticamente superior a cualquier otro lenguaje de programación. Al momento de escribir código, es mejor que sea de manera limpia y estética.

- **Explícito es mejor que implícito:**
Hacer más fácil que las otras personas entiendan el código.

- **Simple es mejor que complejo:**
Es mejor tener una implementación simple, que ocupe pocas lineas de código y sea entendible, a que sea una larga y complicada.

- **Complejo es mejor que complicado:**
Si tenemos que extendernos en la implementación y hacerla más compleja para que el código si se entienda, esto es mejor que hacerlo simple y mal.

- **Plano es mejor que anidado:**
El anidamiento es cuando tenemos un bloque de código dentro de otro bloque de código (dependiendo de este). Esto se nota en Python por la identación, nos quedarían estos bloques muy corridos a la derecha.
Es mejor evitar el anidamiento, y hacer las cosas de manera plana.

- **Espaciado es mejor que denso:**
Por la identación de Python (sus sangrías), este principio se nos hace imposible de esquivar. El código inevitablemente es espaciado.

- **La legibilidad es importante:**
Es importante que otros programadores puedan entender lo que estamos escribiendo. Esto hace más fáciles las cosas cuando trabajemos con otros en los proyectos.

- **Los casos especiales no son lo suficientemente especiales cpmo para romper las reglas (sin embargo, la practicidad le gana a la pureza):**
Siempre que podamos respetar estas reglas que nos plantea Python, es mejor así. Sin embargo, si por el hecho de hacer un código muy puro o muy ‘Pythonista’, este pierde legibilidad, es mejor ser más prácticos y romper o saltearnos algunas de estas reglas para que el código sea más eficiente. Por lo tanto, llegado el momento debermos decidir si es mejor hacer las cosas de manera pura o práctica.

- **Los errores nunca deberían pasar silenciosamente (a menos que se silencien explícitamente):**
Manejar los erroes es fundamental. Cada error nos dice algo y hay que prestarle atención. A menos que seas capaz de silenciar un error explícitamente, aunque para esto hay que tener criterio.

- **Frente a la ambiguedad, evitar la tentación de adivinar:**
Nuestro código debería solamente tener una interpretación. Si en un contexto significa algo, y en otro otra cosa, es mejor que lo revisemos y busquemos una solución.

- **Debería haber una, y preferiblemente sola, una manera obvia de hacerlo. (A pesar de que esa manera no sea obvia a menos que seas holandés):**
Esto hace referencia al creador de Python ''Guido van Rossum", que de manera muy inteligente encontrar las soluciones precisas a los problemas, y deberíamos imitarlo.

- **Ahora es mejor que nunca:**
Es mejor desarrollar nuestra solución cuánto antes, no dejarlo para mañana o para mas adelante.

- **A pesar de que nunca es muchas veces mejor que ahora mismo:**
Si por hacer las cosas ya y tenemos poco tiempo, si es mejor dejarlo para después y no hacerlo apurado y mal.

- **Si la implementación es díficil de explicar, es una mala idea, y si es fácil de explicar, es una buena idea:**
Si somos capaces de explicar nuestra implementación a otros desarrolladores paso a paso, es una buena idea. En cambio si no podemos hacerlo, significa que ni nosotros entendemos la implementación y deberíamos repensar nuestra forma de encarar la solución.

- **Los espacios de nombres son una gran idea, ¡Tengamos más de esos! (namespaces):**
Es el nombre que se ha indicado luego de la palabra import, es decir la ruta (namespace) del módulo. (Lo veremos a profundidad más adelante).

- [PEP 20 -- The Zen of Python](https://www.python.org/dev/peps/pep-0020/)

## ¿Qué es la documentación?

La documentación es la biblia de cualquier programador.

No puedes aspirar a aprender un lenguaje si no lees documentación. Sé que muchas personas se saltan eso porque piensan “ufff, es mucho texto, se ve feo”, etc. Pero es la documentación quien nos va a decir exactamente cómo funciona el lenguaje (y cualquier tecnología). No hay un solo desarrollador profesional que no lea documentación.

¡Y claro!, con esto no quiero decir que tengas que estar metido en la documentación siempre, pero quiero que sepas que la vas a consultar muchas veces cuando tengas problemas ❤️.

En ese paso de programador novato a programador profesional se encuentra aprender a consultar documentación, da el paso, no le temas a la documentación, es tu mejor amiga 😄.

❗Top 🔟 Beneficios de leer la documentacion de python📝

1. Consultar informacion clara y directa
2. Tener ejemplo de los mismos desarrolladores
3. Referencias de todas las caracteristicas y funcionalidades en un solo lugar
4. Conocer los nuevos features de nuevas actualizaciones
5. Conocer el modo de empleo de versiones anteriores
6. Aprender a manejar correctamente las herramientas
7. Que contienen los modulos integrados dentro de python
8. Como manejar los modulos
9. Manejo y uso de frameworks
10. Ser autodidacta

- [Python 3.9.4 documentation](https://docs.python.org/3/)
- [PEP 8 -- Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/)
  

# 2. Entorno virtual

## ¿Qué es un entorno virtual?

Un paso más para crear proyectos maravillosos 👑

Los entornos virtuales tan simples y a veces, tanto dolor de cabeza que dan, ayudan mucho a aislar el entorno donde desarrollamos nuestros proyectos. También pueden utilizar [`Pyenv`](https://github.com/pyenv/pyenv) para manejar los ambientes virtuales y versiones de Python.

Los entornos virtuales son de mucha utilidad ya que nos ayudan a tener versiones especificas de librerías o módulos a un proyecto sin afectar a otros. De esta forma en el mismo equipo pueden coexistir distintos proyectos con distintas versiones de la misma librería o modulo.

Sin usar entorno virtual

![](https://i.ibb.co/4ZQP2qY/virtual1.webp)

Con entornos virtuales

![](https://i.ibb.co/9qgcf1j/virtual2.webp)

## El primer paso profesional: creación de un entorno virtual

Creando un ambiente virtual con VENV
Creación de ambiente Virtual:

```bash
python3 -m venv nombre_venv
```

Usualmente el nombre del ambiente virtual es venv.
Activación del ambiente virtual:

Windows:

```bash
.\venv\Scripts\activate
```

Unix o MacOS:

```bash
source venv/bin/activate
```

Desactivar el ambiente virtual:

```bash
# Desactivar el entorno virtual
deactivate

# Crear un alias en linux/mac:

alias nombre-alias="comando"

alias avenv=“source venv/bin/activate”
```


**Alias de inicio en terminal**

Aquí les dejo los pasos para crear un alias en Linux Ubuntu:

Para hacerlo en este sistema operativo, necesitamos que cada que la terminal cargue, el alias sea leído, para ello, la terminal tiene un archivo llamado `.bashrc` que contiene la configuración inicial, y usualmente se encuentra en nuestro` home`, por lo que hacemos lo siguiente:

```bash
# Ejecutar 
sudo nano ~/.bashrc
```

Si estas usando zsh en el primer paso utiliza:
```bash
sudo nano ~/.zshrc
```

**Ir al final del archivo**

Agregar el comando: 

```bash
alias avenv='source venv/bin/activate'
```

Guardar presionando ctrl + o y luego salir con ctrl + x
Reejecutar la configuración de la terminal: 

```bash
source ~/.bashrc
```
Activar el entorno vitual avenv

De esa forma persistirá siempre, ya que el alias se guarda dentro del archivo de configuración de la termial 😄


Para aquellos que trabajan con Ubuntu y obtienen el siguiente error al momento de activar el entorno virtual:

```bash
#bash: 
source venv/bin/activate  #: No such file or directory
```

Esto ocurre porque al crear el entorno virtual este se crea de manera incompleta. La manera de resolverlo es instalar el manejador de paquetes para python PIP mediante:

```bash
sudo apt install python-pip
```


Posteriormente se instala el paquete para entornos virtuales:

```bash
pip install virtualenv
```

Despues reinstalamos la dependencia de entornos virtuales de Python para Ubuntu:

```bash
sudo apt-get install python3-venv
```

Finalmente volvemos a crear el entorno virtual mediante:

```bash
python3 -m venv venv
```

Cuando estuve buscando la solucion a este problema encontre formas mas simples para resolver esta misma situacion como crear el entorno virtual sin PIP mediante:

```bash
python3 -m venv --without-pip venv
```

O simplemente borrar la carpeta venv (con todos sus archivos) y volver a crearla.

Sin embargo, considero que la primera solucion nos ayuda a prevenir problemas con esta y otras dependencias, paquetes y librerias en el futuro.


## Instalación de dependencias con pip

Básicamente, `pip` es como el `npm` de JavaScript, y el archivo requeriments.txt es como el package.json de JavaScript.

Es importante recordar que esto se debe correr con el entorno virtual activado `(avenv)`, de esta manera todas las dependencias que instalemos se guardaran para este entorno virtual (de lo contrario se guardarían de manera global, que es justo lo que no queremos).

Algo importante, si estás manejando git, es bueno siempre ignorar la carpeta `venv`, esto porque realmente no nos importa subir todo eso al repositorio, puedes mirarlo como que `venv` es el `node_modules` de JavaScript, a fin de cuentas, cualquier otro programador que trabaje con nuestro código creará su propio entorno virtual e instalará las dependencias que dejamos en nuestro `requeriments.txt`.

Y un dato curioso es que, el operador > en la terminal es algo especial de UNIX, ya que este operador lo que hace es redirigir la salida de cualquier comando hacia donde lo mandes, por defecto la salida es en la terminal, pero al usar > le dijimos a la terminal que, en lugar de que la salida sea en la terminal, que se redirija al archivo `requeriments.txt` 👀. Si quieren jugar con ello, pueden hacerlo con este ejemplo: `ls -al > test.txt`, eso creará un archivo llamado test.txt, y si lo abren verán cómo es que ese comando funciona 😄

Es un manejador de dependencias, es decir un paquete que nos permite instalar otros paquetes dentro de nuestro entorno virtual (o de manera global si prefieres

- Para instalar un paquete usamos el comando `pip install <nombre_paquete>`
- Para conocer las dependencias instaladas en el ambiente virtual usamos el comando `pip freeze`
- Puesto que necesitamos compartir las versiones de los paquetes que estamos utilizando en el proyecto (trabajo colaborativo) guardamos las versiones de los paquetes a un archivo txt: `pip freeze > <archivo.txt>` (normalmente requirements)
Para instalar las dependencias desde un archivo de texto usamos el modificacor `-r (read)`: `pip install -r <archivo.txt>`

Instalar las dependencias:

```bash
pip install -r requeriments.txt
```

**Módulos por funciones:**

- **Requests y BeatifulSoup4:** Web Scrapping
- **Pandas y Numpy:** Utilizados en DS para usar los datos, llevarlos a Python, limpiarlos, manejarlos, acomodarlos de la forma en que necesitemos para poder trabajar.
- **Pytest:** Testing

> 🔖Nota: como todo comando recordemos que pip cuanta con su seccion de ayuda la cual podemos ver usando pip -h*
 
- [Managing Multiple Python Versions With pyenv](https://realpython.com/intro-to-pyenv/)

## Una alternativa: Anaconda

Crear entorno virtual

```bash
conda create --name venv
```

Instalar modulos

```bash
conda install pandas
```

o también mediante un archivo requirements.txt

```bash
conda install --file requirements.txt
```

y para crear el archivo requirements.txt parecido al freeze en python se usa
```bash
conda list --export > requirements.txt
```

Para activar el entorno virtual se utiliza el comando

```bash
conda activate venv
```

y para desactivarlo

```bash
conda deactivate
```

además para ver los entornos virtuales instalados se usa

```bash
conda env list
```

- [ANACONDA](https://www.anaconda.com/products/individual)

Es una interfaz gráfica que nos permite manejar entornos virtuales y sus respectivas dependencias

Está pensado más para la rama del Data Science y es una herramienta útil para esta, sin embargo para otras ramas de la programación podría no ser muy útil

# 3. Alternativa a los ciclos: comprehensions

## Listas y diccionarios anidados

![](https://i.ibb.co/1KXb43T/lis-dic.webp)

![](https://i.ibb.co/bKHXys7/resultado.webp)

## List comprehensions

![](https://i.ibb.co/nqXqd7v/list.png)

- [5.1.3. List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

- [All About Python List Comprehension](https://towardsdatascience.com/all-about-python-list-comprehension-14dd979ec0d1)

**List comprehensions**

![](https://i.ibb.co/j8h9dgL/List-comprehensions.webp)

![](https://i.ibb.co/gMjfBJB/List-comprehensions2.webp)

## Dictionary comprehensions

```python
import math

def run():
    square ={i: math.sqrt(i) for i in range(1, 1001)}
    print(square)
if __name__ == '__main__':
    run()
```

![](https://i.ibb.co/kgt5jZn/math.jpg)

# 4. Conceptos avanzados de funciones

## Funciones anónimas: lambda

![](https://i.ibb.co/XjwH2x8/lambda.webp)

![](https://i.ibb.co/kqM2FyZ/python-lambda-functions-new.png)

- [Lambda Expressions](https://docs.python.org/3/tutorial/controlflow.html?highlight=lambda#lambda-expressions)


## High order functions: filter, map y reduce

**La diferencia entre filter y map:**

- **`filter`** devuelve True or False según el valor esté dentro de los criterios buscados o no. En caso de que no cumpla con la condición, no será devuelto y la lista se verá reducida por este filtro.

  - **`filter`** → recibe una función filtro (anónima) y un iterable (lista, tupla, etc) devolviendonos un iterador: objeto optimizado recorrer elemento a elemento (iterar) por lo que no lo podemos inprimir de manera directa (para ello lo convertimos a una lista), su sintaxis es: 

  ```py
  filter(<funcion filtro>, <iterable>)
  ```
  
- **`Map`** funciona muy parecido, pero su diferencia radica en que no puede eliminar valores de la lista del array entregado. Es decir, el output tiene la misma cantidad de valores que el input.

  - `map` → al igual que filter recibe una función anónima y un iterable como parámetros pero en este caso map ejecuta la función sobre cada uno de los elementos del iterable, sintaxis: 

  ```py
  map(<funcion>, <iterable>)
  ```

**Cómo funciona reduce:**

- **`Reduce`** toma 2 valores entregados como parámetros y el iterador como otro parámetro. Realiza la función con estos 2 valores, y luego con el resultado de esto y el valor que le sigue en el array. Y así hasta pasar por todos los valores de la lista.

  - `reduce` → tenemos que importar esta función desde functools para poder usarla, tiene los mismos argumentos que las anteriores funciones, reduce el iterable por medio de la función anonima, su sintaxis es: 
  
  ```py
  reduce(<funcion reduccion>, <iterable>)
  ```

  la función de reducción necesita de dos parámetros, uno que almacena el resultado (o el primer valor del iterable) y otro que opera con el siguiente valor del iterable: 

  ```py
  lambda a,b: <expresión>
  ```

```py
from functools import reduce
def main():

    #Filter
    myList = [1,4,5,7,9,13,19,21]

    odd = list(filter(lambda x: x % 2 != 0, myList))
    print(odd)

    #Map
    myList2 = [1, 2, 3, 4, 5]

    squares = list(map(lambda x: x**2, myList2))
    print(squares)

    myList3 = [2, 2, 2, 2, 2]
    
    allMultiplied = reduce(lambda a, b: a * b, myList3)
    print(allMultiplied)

if __name__ == '__main__':
    main()
```

## Proyecto: filtrando datos

**Un tip:**
Pueden colocar DATA en un archivo aparte y luego importarlo en el archivo donde van a trabajar:

```py
from data_filtering_db import DATA
```

- [Not yet on Python 3.5, but want a single expression](https://stackoverflow.com/questions/38987/how-do-i-merge-two-dictionaries-in-a-single-expression-taking-union-of-dictiona)

# 5. Manejo de errores

## Los errores en el código

El manejo de errores es muy importante y los mejores trucos como ya lo dijo Facundo son:

  1. Leer el error (Conozco programadores y hasta yo en un inicio trataba de revisar el código sin revisar el traceback)
  2. Leer el traceback de abajo hacia arriba

Dejo un artículo aquí para complementar e intentar satisfacer su apetito feroz por entender y aprender Python

**Errores en el código**
Cuando python nos avisa que tenemos un error en el código nos avienta un mensaje que conocemos como traceback, puesde ser debido a:

- Errores de Sintaxis (SyntaxError) → escribimos mal alguna palabra clave (typo), el programa no se ejecuta.
- Excepciones (Exeption) → Producen un colapso o interrupción de la lógica del programa en alguna línea en específico por ejemplo (todas las líneas anteriores se ejecutan), pueden ser de varios tipos, generalmente aparecen cuando no existe un componente clave en la ejecución o hay alguna imposibilidad lógica (matemática) para efectuar la instrucción, tambipen pueden generarse dentro del código o fuera de el (elevar una excepción)

**Lectura de un traceback**

- La manera correcta de leer un traceback es iniciar por el final, en el caso de un error de sintaxis nos indicará en qué línea se encuentra dicho error.
- En el caso de excepciones la última línea nos indicará el tipo de exepcion que se generó (generalmente son autoexplicativas pero si no entienedes que paso puedes buscar este error)
- La penúltima línea nos indicará dende se encuentra el error (archivo y línea)
- La antepenúltima línea nos muestra “most recent call last” lo que significa que la llamada más reciente es la última (el programa se cerró después de esa llamada, se genero un error)

**Elevar una excepción**

- Cuando tenemos una excepción en python lo que sucede es que se crea un objeto de tipo exception que se va moviendo a través de los bloques de código hasta llegar al bloque principal si es que no se maneja dicha excepción en algún bloque intermedio el programa se interrumpe y genera el traceback


![](https://i.ibb.co/qW33jQH/error.webp)

  - **`Keyboard Interrupt:`** ocurre cuando pulsamos Ctrl + C en la consola interactiva de Python y esto detiene el flujo de ejecución del programa.
  - `KeyError:` cuando intentamos acceder a una llave (key) que no existe en un diccionario.
  - `IndexError:` causada cuando estamos trabajando con listas e intentamos acceder a un index (índice) de esa lista que no existe.
  - `FileNotFoundError:` se origina al intentar abrir un archivo que no existe.
  - `ZeroDivisionError:` se genera este error cuando intentamos dividir un número entre cero.
  - `ImportError:` cuando queremos importar un módulo y hay algún error en ese módulo.

Obtenemos información del error a través del traceback. Lo correcto es leer desde el final hasta el principio.

Ejemplo del tipo de información que arroja el traceback.

![](https://i.ibb.co/6vYhtJ0/Zero-Division-Error.webp)

La última línea dice el nombre del error, en este caso `ZeroDivisionError`. 
La penúltima línea dice: 

1. el nombre del archivo en el que se produce el error. Este nombre aparece entre `<>` . En esta ocasión dice stdin debido a que este ejemplo se corrió desde la consola y no desde el archivo en el editor de texto, por ejemplo, VSC (Visual Studio Code). 
2. Luego nos dice la línea en la que sucede el error, línea 1.
3. Finalmente, muestra el módulo en el que se produjo el error, ya que el archivo pertenece a un módulo de Python en todo momento. Por último, nos dice el `Traceback (traza o huella del error), es decir, de donde parte el error`.

- [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

## Debugging

Debugging:

- depuración es una herramienta que traen varios editores de código con el objetivo de solucionar nuestros errores de lógica. Revisemos la herramienta debugging de VSCode

  - En este entorno podemos acceder a funcionalidades como:

    - pause → permite pausar la ejecución del programa
    - step over → permite avanazr un solo paso en el programa
    - step in → igresamos a un bloque secundario del programa (funciones)
    - step out → salimos del bloque secundario
    - restart → reinicia el programa
    - stop → detiene el programa

  Además podemos generar breakpoints, que son puntos en los que el programa se detendrá para ayudarnos a depurar el código

  Nota:

Existen herramientas de debugging propias de python como el módulo pdb o los breakpoints (a partir de python 3.7)

## Manejo de excepciones

Algo que aparece casi al final de la lectura recomendada en el documentación de Python es que se puede agregar un “else” al `try-except`.

  - **TRY:** En el try se coloca código que esperamos que pueda lanzar algún error.


![](https://i.ibb.co/djBMJTq/try.webp)

![](https://i.ibb.co/VNtVd8L/try1.webp)


  - **EXCEPT:** En el except se maneja el error, es decir, si ocurre un error dentro del bloque de código del try, se deja de ejecutar el código del try y se ejecuta lo que se haya definido en el Except.

  ![](https://i.ibb.co/yffbQ28/excep.webp)

  ![](https://i.ibb.co/C9QYQFp/else.webp)


  - **ELSE:** El else se ejecuta sólo si no hubo ninguna excepción lanzada desde el try
  - **FINALLY:** Se ejecuta SIEMPRE, haya sido lanzada la excepción o no haya sido lanzada.

  ![](https://i.ibb.co/SnfjNbK/exception.webp)

- [8.2. Exceptions](https://docs.python.org/3/tutorial/errors.html#exceptions)

## Poniendo a prueba el manejo de excepciones

Try except le puedes poner: “Debes ingresar un número entero”, porque ValueError también aparece cuando se ingresa un número con decimales.

````py
 def run():
    divisors = lambda num: [x for x in range(1, num + 1) if num % x == 0]

    try:
        num = int(input('Ingresa un numero: '))
        if num < 0:
            raise ValueError('Solo ingresa numeros positivos')
        print(divisors(num))
        print("Termino")
    except ValueError:
        print('Solo Ingrese Numeros Positivos :|')

if __name__ == '__main__':
    run()
  ```

- [8.2. Exceptions](https://docs.python.org/3/tutorial/errors.html#exceptions)

## Assert statements

- Es una manera poco usual de manejar los errores en python
- Evalúa una condicional, si esta se cumple continuamos con el flujo normal del python, si no se cumple eleva un error del tipo AssertionError y nos muestra un mensaje.

Su sintaxis es:

```py
assert <condicion>, <"mensaje">
<código>
```

Uso el assert para los errores de negativos, y try-except para los string.

<h3>Reto: uso del assert para detectar números negativos</h3>

```py
def divisors(num):
  divisors = []
  for i in range(1, num + 1):
    if num%i == 0:
      divisors.append(i)
  return divisors

def run():
  try:      
    num = int(input('Ingrese un número: '))
    assert num>0, 'Debes ingresar un número positivo'
    print(divisors(num))
    print('El programa terminó')
  except ValueError:
    print("Debes ingresar un número")

if __name__ == '__main__':
  run()
```

- [7.3. The assert statement](https://docs.python.org/3/reference/simple_stmts.html#the-assert-statement)

# 6. Manejo de archivos

## ¿Cómo trabajar con archivos?



## Trabajando con archivos de texto en Python


# 7. Conclusión

## Reto final: Juego del Ahorcado o Hangman Game


## Continúa tu camino profesional con Python
