<h1>Terminal y Línea de Comandos</h1>

<h3>Enrique Devars</h3>

<h1>Tabla de Contenido</h1>

- [1. Primeros pasos](#1-primeros-pasos)
  - [¿Qué es la terminal?](#qué-es-la-terminal)
  - [Aprendiendo a caminar en la terminal](#aprendiendo-a-caminar-en-la-terminal)
  - [Anatomía de un CLI o Command Line Interface](#anatomía-de-un-cli-o-command-line-interface)
  - [Manipulando archivos y directorios](#manipulando-archivos-y-directorios)
  - [Explorando el contenido de nuestros archivos](#explorando-el-contenido-de-nuestros-archivos)
  - [¿Qué es un comando?](#qué-es-un-comando)
  - [Wildcards](#wildcards)
- [2. Empezando a correr](#2-empezando-a-correr)
  - [Redirecciones: cómo funciona la shell](#redirecciones-cómo-funciona-la-shell)
  - [Redirecciones: pipe operator](#redirecciones-pipe-operator)
    - [Pipeline stdout a stdin](#pipeline-stdout-a-stdin)
  - [Encadenando comandos: operadores de control](#encadenando-comandos-operadores-de-control)
  - [Cómo se manejan los permisos](#cómo-se-manejan-los-permisos)
  - [Modificando permisos en la terminal](#modificando-permisos-en-la-terminal)
  - [Variables de entorno](#variables-de-entorno)
  - [Comandos de búsqueda](#comandos-de-búsqueda)
  - [Su majestad: grep](#su-majestad-grep)
- [3. Utilidades de la terminal](#3-utilidades-de-la-terminal)
  - [Utilidades de red](#utilidades-de-red)
  - [Comprimiendo archivos](#comprimiendo-archivos)
  - [Manejo de procesos](#manejo-de-procesos)
  - [Procesos en foreground y background](#procesos-en-foreground-y-background)
  - [Editores de texto en la terminal](#editores-de-texto-en-la-terminal)
  - [Personalizar la terminal de comandos](#personalizar-la-terminal-de-comandos)
- [4. Despedida](#4-despedida)
  - [Nunca pares de hackear](#nunca-pares-de-hackear)


# 1. Primeros pasos

## ¿Qué es la terminal?

La terminal es una herramienta indispensable que cualquier persona en la tecnología debe conocer 👀. Es importante porque:

  1. Te da flexibilidad 📏. Con unos pocos comandos, puedes hacer mucho.
  2. Es mucho más veloz que una interfaz 💻.
  3. Es tu única opción si no hay interfaz 😆, como para configurar un servidor remoto.
  4. Puedes invocar demonios 👿. Hay que tener cuidado con los comandos.


- Específicamente, la terminal es una interfaz gráfica muy sencilla que simula una línea de comandos:

  **1. Terminal:** Ventana que muestra el promt.
  **2. Shell** (línea de comandos): Programa que ejecuta los comandos. Hay varios tipos de shell, pero sirven para lo mismo. La más comunes son bash shell o Z shell. En este curso, usaremos la primera 🍎.

  - Es importante comenzar a usar Linux 😟.
  - Un comando es un programa que se puede ejecutar desde la terminal.

- [command-line-cheat-sheet.pdf](https://drive.google.com/file/d/1j19jtv_8-QZ80k3I2tt7LmLW2OmkTzm0/view?usp=sharing)
- [slides-introduccion-termina-linea-comandos.pdf](https://drive.google.com/file/d/1sL_BNB-uHyRDsI0atLq2SP0h2Y95wEXh/view?usp=sharing)

## Aprendiendo a caminar en la terminal

Comandos Basicos de la terminal:

Listar archivos:

```bash
ls
```

Listar archivos para ver su peso de una manera mas mas legible

```bash
ls -lh
```

Listar archivos ocultos:

```bash
ls -a
```

Identificar la ruta en la que estamos en nuestro sistema:

```bash
pwd
```

Movernos entre directorios:

```bash
cd
```

Crear un directorio:

```bash
mkdir
```

Copiar un archivo:

```bash
cp
```

Borrar un archivo:

```bash
rm
```

Mover un archivo:

```bash
mv
```

Borrar un directorio:

```bash
rmdir
```

Limpiar la terminal

```bash
clear
```

## Anatomía de un CLI o Command Line Interface

![](https://i.ibb.co/Dptw41X/terminal.webp)

- [Linux File Hierarchy Structure](https://www.geeksforgeeks.org/linux-file-hierarchy-structure/)

## Manipulando archivos y directorios

He visto por ahí cuando alguien pregunta por cómo eliminar una carpeta, el comando que más comparten es `r`m -rf carpeta1 sin saber exactamente qué es lo que hace, ahora ya saben que poner esa `“f”` como parámetro es muy peligroso. Con poner `“r”` basta, esto porque el borrado es recursivo básicamente recorrerá cada subcarperta/archivo y las irá borrando uno por uno.

```bash
rm -ri / home/tuUsuario/carpetaAEliminar/     #   Confirmar para eliminar el archivo
rm -rf / home/tuUsuario/carpetaAEliminar/       # Elimina todo sin preguntar
```

Mustra los directorios en el nivel 1

```bash
tree -L 1
```

## Explorando el contenido de nuestros archivos

Podemos explorar el contenido de archivos sin la necesidad de abrirlos, desde la terminal 🧐. Esto para archivos de texto.

`head <documento de texto>`: Nos muestra las primeras 10 líneas de un archivo de texto. Para especificar el número de líneas `head -n <numero de lineas> <archivo>`

`tail <documento>:` Nos muestra las últimas 10 líneas.

`less <archivo>:` Este es muy cool, es muy interactivo, nos permite hacer scroll, y nos permite hacer búsquedas haciendo `/<palabra a buscar>`. Para salir presionamos `q 🔍`.

`xdg-open <archivo>: `Para abrir un archivo desde la terminal. Usa las aplicaciones predeterminadas. Esto para linux, para mac, es open. Esto crea un proceso en la terminal que no nos dejará hacer nada mas. Para terminar el proceso ctrl+c.

nautilus nos permite abrir el explorador de archivos en una posición dada (en linux) `📁`.

![](https://i.ibb.co/mTqnVFf/Contenidodearchivos-Linux.jpg)

## ¿Qué es un comando?

Es un mensaje enviado al ordenador que va a provocar una respuesta en este. Los comandos son en realidad órdenes, pues indican al dispositivo informático que debe hacer según el comando que se le envíe.

Cada sistema operativo incorpora un determinado número de comandos básicos, que permiten ejecutar las tareas más simples con órdenes directas.

  - Un programa ejecutable: que se compilo en algun lenguaje de programación y se puede ejecutar

  - Un comando de utilidad de la shell.

  - Una función de shell

  - Un alias

Comandos

- `type `nos permite saber que clase es un comando. Por ejemplo type cd (es una funcion de shell), ls (es un alias)

- Para crear un alias: `alias ‘nombreDelAlias’ = ‘comandoQueInvoca’`. Por ejemploalias l=”ls -lh”. Temporales, por el momento.

- Con `–help o help`, puedes tener una ayuda sobre los comandos.

- `man ‘comando’ `: hace referencia al manual de usuario de un comando, otro similar es informático

- `whatis ‘comando’ `: nos da una descripcion muy corta de que hace ese comando. Pero no funciona con todos.

## Wildcards

Algo importante a aclarar es que el asterisco `*` significa cualquier STRING o cadena de texto, entonces si ponemos `ls *.txt` cualquier `archivo .txt` se listará.

Y el signo de interrogación `?` significa que ese último dato puede ser cualquier arbitrario, pero sólo ese último.

Entonces en resumen, el `*` se expande de 0 a más caracteres, mientras que `?` expande a uno exactamente.

Clases dentro de los Wildcards:

- `ls [:alnum:]` Coincide con cualquier carácter alfanumérico
- `ls [:alpha:]` Coincide con cualquier carácter alfabético
- `ls [:digit:]` Coincide con cualquier número
- `ls [:lower:]` Coincide con cualquier letra minúscula
- `ls [:upper:]` Coincide con cualquier letra mayúscula

- [command-line-cheat-sheet.pdf](https://drive.google.com/file/d/1j19jtv_8-QZ80k3I2tt7LmLW2OmkTzm0/view?usp=sharing)


# 2. Empezando a correr

## Redirecciones: cómo funciona la shell

Streams y redirecciones IO
💡 Los streams son flujos de información relacionadas con algún instrucción realizada, en proceso o terminada.
.
Definición

* Cuando se interactúa con la bash, hay tres flujos importantes:

stdin o standard input stream, el cual provee comandos de entrada, descritos con 0.

stdout o standard output stream, el cual muestra comandos de salida, descritos con 1.

stderr o standard error stream, el cual provee salidas de errores de los comandos, descritos con 2.*

Redirecciones de salida
Hay dos formas de redireccionar la salida a un archivo

`n>` Redirecciona la salida para con un archivo.

`n>>` Redirecciona la salida para con un archivo, concatenando contenido.

Considere que se deberá tener permisos de escritura en el destino del archivo.

Algunas veces, pudiera necesitar el redirigir el `stdout` y el `stderr` para con un archivo. Esto es a menudo hecho para automatizar procesos o trabajos en background, generando un log o registro. Por ello, usamos `&>` `&>>` donde indicamos el orden u el tipo de salida.

Cabe mencionar que el orden es importante, por ejemplo:

```bash
# 1
command 2> &1>output.txt
# 2
command >output.txt 2>&1
```

1. `stderr `es redirigido al actual localización del `stdout `y, luego, `stdout` es redirigido al `output.txt` pero esta segunda redirección, solamente afecta al stdout ignorando al `stderr`
2. `stderr `es redirigido a la actual localización del stdout que es el stdout

  - `stdin (0):` Entrada estándar.
  - `stdout (1):` Salida estándar.
  - `stderr (2):` Salida de errores.

Redirige el input de un comando hacia un archivo.

```bash
comando < archivo
```
Redirige la salida de un comando a un archivo. El mismo sobrescribe el contenido del archivo a donde se redirige la salida.

```bash
comando > archivo
```
Concatena la salida de un comando a un archivo. Si no existe el archivo lo crea.

```bash
comando >> archivo
```
Redirige la salida de error de un comando a un archivo.

```bash
comando 2> archivo
```
Redirige la salida de un comando, que se ejecuto satisfactoriamente o un comando que presento errores, a un archivo.

```bash
comando > archivo 2>&1
```

## Redirecciones: pipe operator

El pipe operator permite enviar la salida de un comando como entrada del siguiente. 

```bash
ls -lh ~/Documents/Learning_platzi | sort | tee learning.txt | less
```

Ver contenido en terminal intalar
- cowsay
- lolcat
  
- Los filtros son el procesos de tomar una entrada de flujo y, realizando una conversión, es mandado a la salida de otro stream.

__Definición__

- Un pipeline sirve en la construcción de comandos para generar filtros.

### Pipeline stdout a stdin

- Usamos el operado pipe | entre dos comando para direccionar el stdout del primero con el stdin del segundo. Cualquier comando, entre pipes, puede tener opciones o argumentos para construir filtros complejos.

- Una de las ventajas de los pipes, en Linux y UNIX, es de que pueden variar y generar salidas intermedias de diferentes procesos, generando todo un trace de flujo de información.


## Encadenando comandos: operadores de control

Los operadores de control permiten ejecutar más de un comando, encadenando los mismos.

- comandos sincronos

```bash
mkdir hola; cal; ls -lah

# terminal
➜  Terminal git:(IoT) ✗ mkdir hola; cal; ls -lah
      May 2021
Su Mo Tu We Th Fr Sa
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30 31
total 32K
drwx------  3 chronos users 4.0K May  1 09:24 .
drwxrwxrwx 15 chronos users 4.0K May  1 02:04 ..
drwxr-xr-x  2 chronos users 4.0K May  1 09:24 hola
-rw-r--r--  1 chronos users 1.3K May  1 09:11 learning.txt
-rw-r--r--  1 chronos users  554 May  1 09:10 output.txt
-rw-r--r--  1 chronos users  11K May  1 09:23 README.md
➜  Terminal git:(IoT) ✗
```

- Comandos Asincronos

```bash
➜  Terminal git:(IoT) ✗ date & ls -lah  & cal
[1] 4018
[2] 4019
      May 2021
Su Mo Tu We Th Fr Sa
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30 31
Sat May  1 09:27:29 AM CST 2021
[1]  - 4018 done       date
total 32K
drwx------  3 chronos users 4.0K May  1 09:24 .
drwxrwxrwx 15 chronos users 4.0K May  1 02:04 ..
drwxr-xr-x  2 chronos users 4.0K May  1 09:24 hola
-rw-r--r--  1 chronos users 1.3K May  1 09:11 learning.txt
-rw-r--r--  1 chronos users  554 May  1 09:10 output.txt
-rw-r--r--  1 chronos users  12K May  1 09:27 README.md
[2]  + 4019 done       ls -lah
➜  Terminal git:(IoT) ✗
```

- Comando condicional
  
```bash
➜  Terminal git:(IoT) ✗ mkdir test && cd test
➜  test git:(IoT) ✗
```

- Comando Condicional or

```bash
➜  Terminal git:(IoT) ✗ cp output.txt dev && "Archivo copiado exitosamente" || cd dev
Archivo copiado exitosamente
➜  dev git:(IoT) ✗ ls
output.txt
➜  dev git:(IoT) ✗

# Condicional or
cd fasfdsavre || touch archivo2.txt && echo "Archivo creado"
```

## Cómo se manejan los permisos

Cuando listamos con ls -l se muestran varias cosas. Los tipos de archivos:

  - `-` archivo normal.
  - `d` directorio.
  - `l` link simbólico.
  - `b` archivo de bloque especial.
  
Tipos de modos: `rwx` corresponde con read, write y execute. Se representan con 3 bits, y los podemos manejar a través de un modo octal, esto es, pasar de binario a número.

- `rwx` (1,1,1) dueño. En modo octal es 7.
- `r-x` (1,1,1) grupo. En modo octal es 5.
- `r-x` (1,0,1) world. Octal 5.
  
![](https://i.ibb.co/p1k3b62/simbolo.webp)

**Modo simbólico:** Esto es para asignar los permisos a los diferentes posibles usuarios.

  - `u` Solo para el usuario.
  - `g` Solo para el grupo.
  - `o` Solo para otros (world).
  - `a` Aplica para todos.

- [Linux permission generator](https://josenoriegaa.github.io/linux-file-system-permission-generator/index.html)
- [JoseNoriegaa | linux-file-system-permission-generator](https://github.com/JoseNoriegaa/linux-file-system-permission-generator)

## Modificando permisos en la terminal

El usuario root tiene el control absoluto de todo lo que ocurre en el sistema, accediendo a todas las funciones y configuraciones.

Existen diversos usuarios con permisos cada uno; el usuario root es especial y puede hacer de todo🚶🏽.

Puedes crear archivos de texto también con `> archivo.txt` y también podemos editarlo con `cat > archivo.txt 📜`

En un archivo, se muestran: `[tipo de archivo][rwx usuario][rwx grupo][rwx mundo]`, por ejemplo, `-rw-r--r-- mitexto.txt 👀.`

`chmod <permiso en octal para usuario><para grupo><para mundo> <archivo>` change mode nos sirve para cambiar los permisos de un archivo. Si hacemos por ejemplo `chmod 755 mitexto.txt` tendremos ahora `-rwxr-xr-x mitexto.txt`, esto no cambia para nada el contenido del archivo.

Para quitarle los permisos a alguien en particular, usamos el modo simbólico y usando laresta, por ejemplo quitando el permiso de lectura al usuario `chmod u-r mitexto.txt`. Para agregar, se usa la suma. 🧮

Podemos hacer configuraciones mas avanzadas, por ejemplo, podemos asignar varios permisos al mismo tiempo `chmod u-x,go=w mitexto.txt`.

`whoami` Para saber que usuario somos, y también podemos obtener el ID del usuario con `id`.

`su root` para cambiar de usuario hacía root, hay que tener cuidado al usar este usuario 😟. Su home es incluso distinto. Los archivos que crea root (o otro usuario) no se pueden eliminar por un usuario normal.

`sudo <comando>` nos otorga temporalmente los permisos de root para ejecutar algún comando que ocupe permisos especiales. Nunca dejes el usuario root por defecto, y ponle una contraseña distinta!!

- Cambiar password
  
  ```bash
  ➜  ✗ passwd   
  ```

## Variables de entorno

Las variables de entorno permiten pasar información de forma simple, de una aplicación a otra.

La termina tiene una configuración con diferentes valores, que se pueden acceder con las variables de entorno. Estas son muy importantes para la configuración general del sistema 🚒.

Podemos guardar alias para que se queden de manera permanente con esto 😉.
`ln -s <ruta> <Nombre>` Esto para hacer link simbólicos, que son un tipo de archivo que hacen referencia a otro lugar, básicamente es un acceso directo desde terminal 📁.

`printenv` nos muestra todas las variables de entorno que tenemos configuradas 📔.

`echo $<variables>` esto nos sirve para imprimir una variable en particular.

Algunas variables son:

- `HOME` es nuestro HOME de usuario 😆.
- `PATH` tiene todas las rutas donde se encuentran los binarios en los que se ejecuta nuestro sistema. 🛣️ Hay varios manejadores de paquetes para binarios, pero no todas las veces se agregan a PATH, y se deben agregar a mano.
- 
En HOME, existe un archivo que se llama .bashrc que es donde está nuestra configuración de Bash. Lo podemos abrir con VS Code para modificarlo. En este archivo podemos crear alias.

- `alias <nombre>="comando" `para crear un alias útil 👀.
- `code <archivo>` para abrir un archivo de texto en VS Code desde la terminal.

Para modificar o crear una variable de entorno, se hace, por ejemplo `PLATZI_MESSAGE='Hola amigos"`.

Para agregar una ruta a la variable PATH ponemos en `.bashrc` `PATH=$PATH:<ruta>`, guardamos, cargamos bash en la terminal, y listo 😄.
Es muuuy importante tener cuidado con los alias, nunca hay que nombrar un alias como un comando ya existente 😟.


## Comandos de búsqueda

Es una de las partes mas interesantes de la terminal, ya que nos permite buscar archivos de manera eficiente y específica 💫.

`which <programa>` Busca en todas las rutas del PATH para encontrar donde está alojado algún archivo binario 🔢.

```bash
find <ruta inicial> -name <archivo>
``` 
Nos permite encontrar un archivo a partir de una ruta inicial, y dentro de todas las carpetas que surjan de ese inicio 🌲.

Algo muy cool es que podemos usar wildcards para hacer mas eficiente la búsqueda 🔍.

```bash
find <ruta inicial> -type <tipo> -name <nombre> 
```
podemos especificar el tipo de archivo, d → directorio, f → documento.

```bash
find <ruta inicial> -size <tamaño><unidad>
```
 podemos buscar tamaños mayores a un determinado tamaño, por ejemplo, de 20M (megas).

Solución al reto: 

```bash
find ./ -name *.txt -type f -size 1M > mis_archivos_texto.txt | echo "archivos guardadados exitosamente"
```

- [Bash VS Zsh: Differences and Comparison](https://linuxhint.com/differences_between_bash_zsh/)

## Su majestad: grep

El comando grep nos permite encontrar texto que contenga un patrón dentro de uno o varios archivos de manera rápida.

```bash
# Buscar la palabra the en el archivo movies.csv
➜  Terminal git:(IoT) ✗ grep -i the movies.csv | less

# Contar el numero de veces que aparece the
➜  Terminal git:(IoT) ✗ grep -c the movies.csv
1013

# ommite los maysuscula
➜  Terminal git:(IoT) ✗ grep -ci the movies.csv
2912

# Busca todas las peliculas que no tienen towers
➜  Terminal git:(IoT) ✗ grep -vi towers movies.csv

# Guardamos la busqueda en un archivo .txt
➜  Terminal git:(IoT) ✗ grep -vi towers movies.csv > sintowers.txt
```

`grep` es un comando con muchas utilidades, la verdad es que tiene muchos casos de uso, aquí te dejo algunos que a mí me han sido de utilidad:

Buscar algún paquete en específico que tengas instalado:

```bash
dpkg --get-selections | grep nombreDelPaquete
dpkg --get-selections te dirá todos tus paquetes instalados
```

`grep` filtrará esa lista con el paquete que te interesa
Filtrar algún archivo en específico después de un `ls`:

```bash
ls -al | grep myFile.txt
```

`ls` te dará la lista de todos tus archivos
`grep` filtrará todos y te mostrará únicamente el que deseas
Buscar algún contenido en específico dentro de algún archivo:

```bash
cat unArchivoLargo.txt | grep "La línea que busco"
```

`cat` Te listará todo el contenido de ese archivo
`grep` te filtrará únicamente lo que quieres ver

Buscar una línea en específico en diferentes archivos por medio de un patrón:
```bash
grep "string" archivo_*
```
`grep` buscará la palabra "string" en todos los archivos que comienzen por "archivo_" y te los mostrará.

Buscar usando expresiones regulares (te recomiendo aprender expresiones regulares, son MUY poderosas 👀):
Imagina que tienes un archivo llamado `test.txt` y adentro contiene la siguiente frase:

> Imagina que quieres buscar algo

Entonces, podemos usar grep así:

```bash
grep "Imagina .* algo" test.txt
``` 

`grep` buscará alguna coincidencia, la expresion `.*` indica que ahí dentro puede haber una o más letras, cualquier que sea, así que podrías leerla como: `Imagina (cualquier cosa) algo.`
Esto encontrará justo la frase que quieres:

> Imagina que quieres buscar algo

Hay muchos más casos de uso para grep, te dejo este blog que habla de algunos cuantos casos de uso más 👀👇:

[15 Practical Grep Command Examples In Linux / UNIX](https://www.thegeekstuff.com/2009/03/15-practical-unix-grep-command-examples/)


# 3. Utilidades de la terminal

## Utilidades de red




## Comprimiendo archivos




## Manejo de procesos




## Procesos en foreground y background




## Editores de texto en la terminal




## Personalizar la terminal de comandos





# 4. Despedida

## Nunca pares de hackear