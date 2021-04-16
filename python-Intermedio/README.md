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
## List comprehensions
## Dictionary comprehensions
# 4. Conceptos avanzados de funciones
## Funciones anónimas: lambda
## High order functions: filter, map y reduce
## Proyecto: filtrando datos
# 5. Manejo de errores
## Los errores en el código
## Debugging
## Manejo de excepciones
## Poniendo a prueba el manejo de excepciones
## Assert statements
# 6. Manejo de archivos
## ¿Cómo trabajar con archivos?
## Trabajando con archivos de texto en Python
# 7. Conclusión
## Reto final: Juego del Ahorcado o Hangman Game
## Continúa tu camino profesional con Python