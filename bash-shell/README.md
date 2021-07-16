<h1>Programación en Bash Shell</h1>

<h3>Marco Antonio Toscano Freire</h3>

<h1>Tabla de Contenido</h1>

- [1. Bienvenida e Introducción](#1-bienvenida-e-introducción)
  - [Introducción y Bienvenida al curso](#introducción-y-bienvenida-al-curso)
  - [Componentes de Linux, Tipos de Shell y Comandos de información](#componentes-de-linux-tipos-de-shell-y-comandos-de-información)
  - [Bash scripting](#bash-scripting)
  - [Crear nuestro primer Script](#crear-nuestro-primer-script)
  - [Ejecutar nuestro script con un nombre único](#ejecutar-nuestro-script-con-un-nombre-único)
- [2. Programación Shell Básica](#2-programación-shell-básica)
  - [Declaración de Variables y Alcance en Bash Shell](#declaración-de-variables-y-alcance-en-bash-shell)
  - [Tipos de Operadores](#tipos-de-operadores)
  - [Script con Argumentos](#script-con-argumentos)
  - [Sustitución de Comandos en variables](#sustitución-de-comandos-en-variables)
  - [Debug en Script](#debug-en-script)
  - [Reto 1](#reto-1)
- [3. Script Interactivos](#3-script-interactivos)
  - [Capturar información usuario](#capturar-información-usuario)
  - [Expresiones Regulares](#expresiones-regulares)
  - [Validar información](#validar-información)
  - [Paso de parámetros y opciones](#paso-de-parámetros-y-opciones)
  - [Descargar información de Internet](#descargar-información-de-internet)
  - [Reto 2](#reto-2)
- [4. Condicionales](#4-condicionales)
  - [Sentencias If/Else](#sentencias-ifelse)
  - [If Anidados](#if-anidados)
  - [Expresiones Condicionales](#expresiones-condicionales)
  - [Sentencias Case](#sentencias-case)
  - [Reto 3](#reto-3)
- [5. Iteración](#5-iteración)
  - [Arreglos](#arreglos)
  - [Sentencia for loop](#sentencia-for-loop)
  - [Sentencia while loop](#sentencia-while-loop)
  - [Loop Anidados](#loop-anidados)
  - [Break y continue](#break-y-continue)
  - [Menú de Opciones](#menú-de-opciones)
  - [Reto 4](#reto-4)
- [6. Archivos](#6-archivos)
  - [Archivos y Directorios](#archivos-y-directorios)
  - [Escribir dentro de archivos](#escribir-dentro-de-archivos)
  - [Leer Archivos](#leer-archivos)
  - [Operaciones Archivos](#operaciones-archivos)
  - [Reto 5](#reto-5)
- [7. Empaquetamiento](#7-empaquetamiento)
  - [Empaquetamiento TAR, GZIP y PBZIP 2](#empaquetamiento-tar-gzip-y-pbzip-2)
  - [Respaldo Empaquetado con clave](#respaldo-empaquetado-con-clave)
  - [Transferir información red](#transferir-información-red)
  - [Reto 6](#reto-6)
- [8. Funciones](#8-funciones)
  - [Crear funciones y Paso de Argumentos](#crear-funciones-y-paso-de-argumentos)
  - [Funciones de instalar y desinstalar postgres](#funciones-de-instalar-y-desinstalar-postgres)
  - [Funciones sacar y restaurar respaldos en postgres](#funciones-sacar-y-restaurar-respaldos-en-postgres)
  - [Reto 7](#reto-7)
- [9. Cierre del curso](#9-cierre-del-curso)
- [Cierre](#cierre)

***

# 1. Bienvenida e Introducción

  ## Introducción y Bienvenida al curso

  - [MATOOSFE](https://www.matoosfe.com/)
  - [matoosfe | youtube](https://www.youtube.com/user/matoosfe)

  ## Componentes de Linux, Tipos de Shell y Comandos de información

Linux tiene 3 partes principales:

  Kernel: Es el núcleo del Sistema Operativo y se gestionan los recursos de hardware como la memoria, el procesamiento y los dispositivos periféricos conectados al computador.
  Shell: Es el interprete, un programa con una interfaz de usuario permitiendo ejecutar las aplicaciones en un lenguaje de alto nivel y procesarlas en un lenguaje de bajo nivel para manipular y controlar aplicaciones y programas como nuestro proyecto.
  Aplicaciones: Son las aplicaciones con las que interactuamos día a día.

Tipos de Shells:

  1. SH
  2. KSH
  3. CSH
  4. BASH

    **1. SH:** También conocida como Shell Bourne, es la primera shell creada para un sistema operativo linux, se puede utilizar actualmente, pero se perderían funcionalidades como autocompletar archivos o el historial de comandos.
    **2. KSH:** Escriba por el programador David Korn. Intenta combinar las características de la CSH, TCSH y SH.
    **3. CSH:** En una shell diseñada para que los usuarios puedan escribir programas de scripting de shell con una sintaxis muy simiar a la de C. En muchas sistemas como Red Hat, csh es tcsh, una versión mejorada de csh.
    **4. BASH:** También conocida como Shell Bourne-Again, es una versión actualizada de SH creada por la Free Software Fundation. Es una de la shell más utilizada y conocida en el mundo. Incorpora alguna de las funcionalidades más avanzadas de KSH, CSH, SH y TCSH. Una de la funcionalidades más destacables de esta shell es la opción de ejecutar múltiples programas en segundo plano a la vez.
    **5. ZSH:** Potente intérprete de comandos que puede funcionar como shell interactiva y como intérprete de lenguaje de scripting. aún siendo compatible con Bash.
    
    - [Tipos de shells](https://www.taringa.net/+linux/tipos-de-shells_wpzwm)

Algunos comandos para conocer información sobre el resto de comandos:

```bash
  man [comando]
  info [comando]
```

El comando `sudo`

`Sudo` viene de `switch user do` y permite a los usuarios ejecutar acciones con los privilegios de seguridad del root, de manera segura. Se instala por defecto en /usr/bin.

Por defecto Ubuntu trae desactivada la cuenta del `root`, por seguridad y para administrar el sistema existe un grupo de usuarios denominado “sudoers users” (administradores o admin), los cuales pueden obtener permisos de root, mediante la utilización de `sudo`.

  ## Bash scripting

La idea básica de generar programas en bash es poder ejecutar múltiples comandos de forma secuencial en muchas ocasiones para automatizar una tarea en especifico. Estos comandos son colocados en un archivo de textos de manera secuencial para poder ejecutarlos a posterioridad.

Un archivo `.vimrc` podremos configurar de mejor manera nuestro editor VIM.

- Presionamos `I` para poder escribir en nuestro editor.
- Presionamos `ESC` para salir del modo edición, luego escribimos `:wq` para salir y guardar nuestro archivo.

  ## Crear nuestro primer Script

la cabecera `!/bin/bash` a un archivo, que a su vez has dado permisos de ejecución `--x--x`, estás indicando al sistema operativo cuál será la aplicación que se encargará de hacer dicha ejecución … 
De esta manera pudieras colocarle incluso cualquier extensión al archivo ya que al ejecutarlo con la instrucción de la terminal >`./archivo.ext`, sería esta cabecera la que definirá su comportamiento.

  ## Ejecutar nuestro script con un nombre único

Como menciona el profesor, el comando `chmod +x` es la forma rápida de dejar un archivo con permisos de ejecución. 
Si tienes problemas de memoria quizás sea el opción más fácil, en lugar de usar el típico `chmod 7XX` o similar.

**Tipo de Permiso**

[ugoa] + [rwx]

Primero va el grupo `u = user, g = group, o = others, a = all`

Segundo los permisos: `r = Read, w = write, x = execute`.

fuente: `man chmod` (leer mas, ver menos videos)

Permisos sobre los archivos:

```bash
4 - permisos de lectura
2 - permisos de escritura
1 - permisos de ejecución
```

- 7 = 4 + 2 + 1, por lo tanto se tendrían permisos de lectura, escritura y ejecución.

- 6 = 4 + 2, permisos de lectura y ejecición

- 4 = 4 , permisos de lectura

Ejemplo de permisos de un archivo.
`-rw-rw-r--` significa que en un archivo el owner tiene permisos de lectura y escritura, el grupo tiene permisos de lectura y escritura, y los demás usuarios tienen permisos de lectura.

Si querémos darles permisos de ejecución al owner de ese archivo

```bash
chmod 764 <filename>
```

- Agregar permisos de lectura: `chmod +r`
- Agregar permisos de escritura: `chmod +w archivo`

- Quitar permisos de lectura: `chmod -r archivo`
- Quitar permisos de escritura: `chmod -w archivo`
- Quitar permisos de ejecución: `chmod -x archivo`

En caso de querer cambiar los permisos del grupo y otros ( el comando es similar al ejemplo anterior, sin embargo esta vez se agregar una `g` para grupo o una “o” para otros)

```bash
chmod g+w archivo
chmod g-wx archivo
chmod o+w archivo
chmod o-wx archivo
```

Por último para cambiar para todos: `chmod ugo+rwx` (dará permisos de lectura, escritura y ejecucón a todos) , esto es equivalente a `chmod 777`

# 2. Programación Shell Básica

  ## Declaración de Variables y Alcance en Bash Shell

En esta clase el profesor nos explica sobre la declaración y alcance de variables dentro de un programa Bash.

La programación Bash Shell es muy importante al momento de crear scripts que nos permitan automatizar procesos en cualquier sistema operativo UNIX como GNU/Linux, uno de los más usados en servidores.

Intalar el paquete de autocompletado

```bash
sudo apt-get install bash-completion
```

Editar el siguiente archivo `etc/profile` configurar el script:

```bash
# Variable de Entorno S.O
COURSE_NAME=Programacion Bash
export COURSE_NAME
```

**File 1: `2-variables.sh`**

```bash
#!/usr/bin/env bash

#  Program para revisar la declaracion e la version

opcion=0
nombre=Marco

echo "Opcion: $opcion y Nombre: $nombre"

# Exportar la variable nombre para que este disponible a los demas procesos
export nombre

# Llamar script, para recupear variable
./3-variables_2.sh
```

**File 2: `3-variable_2.sh`**

```bash
#!/usr/bin/env bash
#  Program para revisar la declaracion e la version

echo "Opcion nombre pasada del script anterior: $nombre"
```

Saltos de linea en BASH:

```bash
echo -e "Opcion: $opcion\nNombre: $nombre"
```

con el \n se hace salto de linea, con el \t se hace un tab y hay muchos otros como el \r

  ## Tipos de Operadores

```vim
# Programa para enviar los tipos de operadores
# Autor: Victor Juarez - @victorianojuarez

numA=10
numB=4
echo "Operadores Aritmeticos"
echo "Numeros A=$numA y B=$numB"
echo "Sumar A + B =" $(( numA + numB ))
echo "Resta A - B =" $(( numA - numB ))
echo "Multiplicacion A * B =" $(( numA * numB ))
echo "Division A / B =" $(( numA / numB ))
echo "Residuo  A % B =" $(( numA % numB ))

  echo -e "\nOperadores Relaciones"
echo "Numeros: A=$numA y B=numB"
echo "A < B =" $(( numA < numB ))
echo "A > B =" $(( numA > numB ))
echo "A <= B =" $(( numA <= numB ))
echo "A >= B =" $(( numA >= numB ))
echo "A == B =" $(( numA == numB ))
echo "A != B =" $(( numA != numB ))

   echo -e "\nOperadores de Asignacion"

echo "Numero: A=$numA y B=numB"
echo "Sumar A += B" $(( numA += numB ))
echo "Restar A -= B" $(( numA -= numB ))
echo "Multiplicacion A *= B" $(( numA *= numB ))
echo "Dividur A /= B" $(( numA /= numB ))
echo "Residuo A %= B" $(( numA %= numB ))
```

  ## Script con Argumentos

Hay algunos identificadores para cuando ejecutamos un script con argumentos

**`$0:`** Se refiere al nombre del Script, Nombre del Script
**`$1 al ${10}`:** Se refiere al número de argumento. Si es más de uno lo colocamos dentro de llaves. El numero de argumento. Si es mas de un dígito se pone entre llaves.
**`$#:`** Es útil para conocer el número de argumentos enviados. Contador de argumentos
**`$*:`** Con este podemos conocer todos los argumentos enviados. Refiere a todos los argumentos

```bash
# ! /bin/bash
# Programa para ejemplificar el paso de argumentos
# Autor: Marco Toscano Freire - @martosfre

nombreCurso=$1
horarioCurso=$2

echo "El nombre del curso es: $nombreCurso dictado en el horario de $horarioCurso"
echo "El número de parámetros enviados es: $#"
echo "Los parámetros enviados son: $*"
```

Al ejecutar el archivo agregar los parametros:

```sh
./argumentos.sh "Curso de Prgamacion Bash" "20:00 23:00"
```

![](https://i.ibb.co/pwY78rZ/argumentos-Bash.gif)

  ## Sustitución de Comandos en variables

Para la sustitución de comandos es importante tener en cuenta que el resultado servirá para realizar otras tareas de otras sentencias de nuestro programa.

Las dos maneras de hacerlo:

Usando el backtick caracter. `(`)`
Usando el signo de dólar con el formato `$(comando)`

cuando se definen las variables no debe haber espacios alrededor del signo igual

asi funciona:

```sh
ubicacionActual=`pwd`
infoKernel=$(uname -a)
```

asi no:

```sh
ubicacionActual = `pwd`
infoKernel = $(uname -a)
```
  ## Debug en Script

Para realizar debugging en un script tenemos dos opciones en el comando de bash:

`-v:` Utilizado para ver el resultado detallado de nuestro script, evaluado línea por línea.


```bash
➜  ShellCourse git:(DevOps) ✗ bash -v 6-substitucionComand.sh
#!/bin/bash
# Programa para revisar como ejecutar comandos dentro de un programa y almacenar una variable para us posterior utilizarcion
# Autor: Victor Juarez

ubicacionActual=`pwd`
infoKernel=$(uname -a)

echo "La ubicacion actual es la siguiente: $ubicacionActual"
La ubicacion actual es la siguiente: /home/game/Documents/Learning_platzi/DevOps/bash-shell/ShellCourse
echo "Informacion del Kernel: $infoKernel"
Informacion del Kernel: Linux chess 5.8.0-33-generic #36-Ubuntu SMP Wed Dec 9 09:14:40 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

`-x:` Utilizado para desplegar la información de los comandos que son usados, capturando el comando y su salida.


```sh
➜  ShellCourse git:(DevOps) ✗ bash -x 6-substitucionComand.sh
++ pwd
+ ubicacionActual=/home/game/Documents/Learning_platzi/DevOps/bash-shell/ShellCourse
++ uname -a
+ infoKernel='Linux chess 5.8.0-33-generic #36-Ubuntu SMP Wed Dec 9 09:14:40 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux'
+ echo 'La ubicacion actual es la siguiente: /home/game/Documents/Learning_platzi/DevOps/bash-shell/ShellCourse'
La ubicacion actual es la siguiente: /home/game/Documents/Learning_platzi/DevOps/bash-shell/ShellCourse
+ echo 'Informacion del Kernel: Linux chess 5.8.0-33-generic #36-Ubuntu SMP Wed Dec 9 09:14:40 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux'
Informacion del Kernel: Linux chess 5.8.0-33-generic #36-Ubuntu SMP Wed Dec 9 09:14:40 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

  ## Reto 1

Desarrollar un programa llamado `utilityHost.sh`, dentro de él vamos a declarar dos variables una llamada option, otra llamada result, vamos a inicializarles e imprimir sus valores.

#  3. Script Interactivos

## Capturar información usuario

Para poder capturar información tenemos dos formas dentro de un programa Bash.

  - Utilizando en conjunto con el comando `echo`
  - Utilizando directamente el comando `read`

Unas de las opciones más utilizadas para Read

- `p:` Permite ingresar una frase o prompt antes de pedir el dato.
- `s:` Modo Sigiloso. No muestra ningún caracter en la terminal, util para contraseñas o información sensible.
- `n [num]:` Permite leer como máximo n caracteres.
- `r:` Toma el botón de retroceso o backspace como un caracter y no borra ningun otro caracter previamente escrito.

- `Script interactivos:` Es un script retroalimentado por el usuario
- `echo -n:` Imprimir información sin el caracter “\n” al final, es decir sin el salto de línea
- El comando `“read”` es para leer o capturar información del standard input
- La variable `“$REPLY”` es donde se almacenará esa información del standard input

Script con `read`

```sh
nombre=""
read -p "Introduce tu nombre: " nombre
echo $nombre
```

## Expresiones Regulares

Cuando se solicita ingresar información través de un programa por parte del usuario que está utilizando el programa, independientemente el lenguaje que esté realizado; es importante considerar la validación de la información no solo en su tamaño sino también en los tipos de datos, formatos soportados lo cual nos permite asegurar la calidad de la información que recibimos, almacenamos y procesamos.

Dentro de este contexto en la programación bash para cumplir con este objetivo se utiliza expresiones regulares, las cuales son básicamente cadenas de caracteres que definen un patrón de búsqueda que se valida frente a una información específica para asegurar que cumple la validación definida.

Se necesita conocer ciertos criterios utilizados en las expresiones regulares que son los siguientes:

  - ^.- Caracter que representa el inicio de la expresión regular.
  - $.- Caracter que representa el final de la expresión regular.
  - *.- Caracter que representa cero o más ocurrencias de la expresión
  - +.- Caracter que representa una o más ocurrencias de la expresión.
  - {n}.- Representa n veces de una expresión.
  - [ ] .- Representa un conjunto de caracteres, por ejemplo: [a-z] representa las letras del abecedario de la a a la z.

Tomando en cuenta estos criterios se realizará un programa que valida la siguiente información:
Número de Identificación de un tamaño de 10 números. Ejemplo: 1717836520
País de Origen denotado por dos letras en un rango específico. Ejemplo: EC, CO, US
Fecha de Nacimiento en el formato yyyyMMDD. Ejemplo: 20181222

Primero se definirá las expresiones regulares y se solicitará la información del usuario:

![](https://i.ibb.co/vV9cGg7/bash.webp)

Luego se validará cada expresión regular comenzando con la identificación, para lo cual para cada validación se utilizará la sentencia condicional if y para comparar la expresión se debe utilizar el siguiente formato especial `if [[ $variable =~ $expresionRegular ]]` como se muestra a continuación.

![](https://i.ibb.co/7GxPCdt/bash1.webp)

Se realizará la ejecución de la aplicación con los dos escenarios el correcto y el incorrecto como se muestra a continuación:

![](https://i.ibb.co/KN99SGY/bash2.webp)

Finalmente el código fuente lo pueden encontrar en el repositorio de GitHub en el branch 7.ValidarInformacion

## Validar información

Para el proceso de validación de información tenemos dos maneras de hacerlo:

- Para validar tamaños se utiliza el siguiente comando: `read -n <numero_caracteres>`
- Para validar el tipo de datos se utilizan las expresiones regulares

`read -s` -> Oculta la información entrante por propio usuario.

`read -n[1,2,3,4…]` -> Mantiene la linea de ejecución, la misma linea en la que estamos hasta que llegue al numero de carácteres definido.

`read -p` -> Indica que hay que dejar la informacion ingresada en la variable siguiente.

`read -n:` Acepta una cantidad de caracteres específica en el standard input
`read -s:` Esconde los caracteres al momento de ingresar el standard input

## Paso de parámetros y opciones

```bash
#  Parametros y opcionesecho "Programa Opciones"
echo "Opción 1 enviada: $1"
echo "Opción 2 enviada: $2"
echo "Opciones enviadas: $*"
echo -e "\n"
echo "Recuperar los valores"
while [ -n "$1" ]
do
case "$1" in
-a) echo "-a opcion utilizada.";;
-b) echo "-b opcion utilizada.";;
-c) echo "-c opcion utilizada.";;
*) echo "$! no es una opcion.";;
esac
shift
done
```


- [Scripting de Bash en Linux Parte 3 – Parámetros y opciones](https://likegeeks.com/es/scripting-de-bash-parametros-y-opciones/)

## Descargar información de Internet

- Para archivos pequeños ~> `wget`
- Para comunicarse con un servicio (por ejemplo, una API Restful) ~> `curl`
- Para archivos de tamaño considerable ~> `aria2`

`aria2` es genial porque soporta multiples protocolos como BitTorrent y FTP, además de soportar descargas en paralelo.

## Reto 2

Solicitar la información de cada uno de ustedes como nombres, apellidos, edad, dirección y números telefónicos; y posterior imprima toda la información.

#  4. Condicionales

## Sentencias If/Else

OPERADORES RELACIONALES
- `-eq:` is equal to // Igual a
- `-ne:` is not equal to // No es igual a
- `-gt:` is greater than // Mayor a
- `-ge:` is greater than or equal to // Mayor o igual a
- `-lt:` is less than // Menor a
- `-le:` is less than or equal to // Menor o igual a

## If Anidados

Doble parentesis (( )) o corchetes simples [ ] cumplen la misma funciòn, sin embargo corchetes simples parece ser la màs utilizada, supongo que por su simplicidad.

## Expresiones Condicionales

Las expresiones condicionales ya las hemos visto en clases anteriores, pero en qué corresponde y cómo se forman las veremos en esta clase. Estás son las siguientes

  - Utilizada en decisión, iteración.
  - Formada por una o más condiciones
  - Condiciones con tipos de datos diferentes
  - Utiliza los operadores relacionales y condicionales
  - [What is the difference between test](http://mywiki.wooledge.org/BashFAQ/031) 

**Operador Verdad (TRUE) si:**
  - `-d` fichero fichero existe y es un directorio
  - `-e` fichero fichero existe
  - `-f` fichero fichero existe y es un fichero regular (no un
directorio, u otro tipo de fichero especial)
  - `-r` en este caso te permite saber si el archivo tiene permiso de lectura
  - `-s` con esta opción puedes saber si el tamaño del archivo es mayor que cero. Es decir, que no se trata de un archivo vacío
  - `-w` te permitirá identificar si el archivo tienen permisos de escritura
  - `-x` lo mismo que en el caso anterior pero para el caso de permisos de ejecución.

**[]**

es un alias del comando test, nos permite averiguar si un comando existe o un número es igual a otro, se ocupan los operadores: Ver lista de operadores

**[[]]**

es una mejora posterior al comando test, nos permite hacer todo lo mismo que con el comando test y además probar patrones(?)

**(())**

Nos permite hacer comprobaciones aritméticas, da soporte a la mayor parte de los operadores aritméticos

**()**

Nos permite correr un comando en un subshell, retornando el codigo de salida para que se actúe respecto a ello
comando
Los comandos por lo general siempre retornan un comando de salida 0 o 1

## Sentencias Case

En la sentencia Case el objetivo principal es validar una expresión simple, puede ser un número, una cadena o un rango de valores

## Reto 3

Solicitar que se ingrese un valor del 1 al 5. Según el valor ingresado valor a validarlo utilizando las condicionales e imprimir según el valor ingresado. Construir expresiones de validaciòn númericas, cadenas y archivos según la opción ingresada.

#  5. Iteración

## Arreglos

Los Arreglos son un tipo de variables que puede contener N cantidad de valores ya sean cadenas de texto, numéricos, etc. Estos siempre empiezan desde la posición número 0.

Los Arreglos son un tipo de variables que puede contener N cantidad de valores ya sean cadenas de texto, numéricos, etc. Estos siempre empiezan desde la posición número 0.

- Se declaran entre paréntesis y cada elemento se separa por un espacio.
- En caso de texto se separa por una coma.
- Un elemento puede ser una cadena de elementos que forman un rango y se declara entre llaves: {A…J} {10…20}. Escribir estos rangos juntos genera una operación distinta, que es iterar cada elemento del primer rango con cada elementos del segundo rango.
- Para añadir valores: arregloNombre[posicion]=valor
- Para quitar algún elemento: unset arregloNombre[posición]
- Para imprimir todos los valores: echo “ ${arregloNombre[*]} ”
- Para imprimir el tamaño: echo “ ${#arregloNombre[*]} ”
- Para imprimir el valor en X posición: echo “ ${arregloNombre[X]} ”

Para cambiar el color en vim ingresar :colorscheme y el nombre del esquema de color. Por ejemplo

```bash
:colorscheme desert
```

Para obtener la lista de esquemas de color instalador, ingresar :colorscheme, espacio y Ctrl + D.

Para establecer el esquema de color por defecto , editar el archivo .vimrc y agregar una linea `colorscheme desert`.

esquema de colores de Atom para vim:
https://github.com/joshdick/onedark.vim

Si quieren poder autocompletado:
https://github.com/ycm-core/YouCompleteMe

Y para manejar plugins con facilidad:
https://github.com/VundleVim/Vundle.vim

## Sentencia for loop

La sentencia For es esa que se suele utilizar mucho cuando se quiere recorrer o iterar sobre una lista de valores. En Bash también soporta el For loop expression el cual tiene tres bloques, tanto de inicialización, condición e iteración.

Codigo un poco modulado, con opciones:

```bash
# ! /bin/bash
# Programa para ejemplificar el uso de la sentencia de iteración for
# Autor: Marco Toscano Freire - @martosfre
function iterarListaNumeros   {
  arregloNumeros=(1 2 3 4 5 6)
  echo "Iterar en la Lista de Números"
  for num in ${arregloNumeros[*]}
  do
      echo "Número: $num"
  done
}

function iterarCadena {

  echo "Iterar en la lista de Cadenas"
  for nom in "Marco" "Pedro" "Luis" "Daniela"
  do
    echo "Nombre : $nom"
  done
}

function iterarArchivos {
  echo "Iterar en Archivos"
  for fil in *
  do
      echo "Nombre archivo: $fil"
  done
}

function iterarComando {
  echo "Iterar utilizando un comando"
  for fil in $(ls)
  do
      echo "Nombre archivo: $fil"
  done
}

function iteracionTradicional {
  echo "Iterar utilizando el formato tradcional"

  for ((i=1; i<10; i++))
  do
      echo "Número: $i"
  done
}

option=0

echo -e "\n elija una opcion
  1 iterar lista de numeros 
  2 iterar lista de cadenas
  3 iterar en Archivos
  4 iterar utilizando comando
  5 iteracion tradicional"

read -n1 option
echo -e "\n"

case $option in
  1) iterarListaNumeros ;;
  2) iterarCadena ;;
  3) iterarArchivos ;;
  4) iterarComando ;;
  5) iteracionTradicional;;
  *) echo "opcion desconocida";;
esac
```

## Sentencia while loop

El While itera una lista de valores basada en una condición lógica mientras esta sea verdadera.

**Codigo:**

```c
# ! /bin/bash
# Programa para ejemplificar el uso de la sentencia de iteración while
# Autor: Jose Suarez

numero=1

while [ $numero -ne 10 ]
do
    echo "Imprimiendo $numero veces"
    numero=$(( numero + 1 ))
done
```

**Resultado:**

```bash
Imprimiendo 1 veces
Imprimiendo 2 veces
Imprimiendo 3 veces
Imprimiendo 4 veces
Imprimiendo 5 veces
Imprimiendo 6 veces
Imprimiendo 7 veces
Imprimiendo 8 veces
Imprimiendo 9 veces
```

**Codigo 2**

```bash
#!/bin/bash

number=1

while [ $number -ne 10 ]
do
    echo "Printing $number times"
    number=$(( number + 1 ))
done
```

## Loop Anidados

**Codigo:**

```bash
# ! /bin/bash
# Programa para ejemplificar el uso de los loops anidados
# Autor: Jose Suarez

echo "Loops Anidados"
for fil in $(ls)
do
    for nombre in {1..4}
    do
        echo "Nombre Archivo: $fil _ $nombre"
    done
done
```

**Script**

```bash
# ! /bin/bash
# Programa para uso de loops anidados
# Author Diego Beltran histagram @diegodevelops

echo "Loops anidados"
for fil in $(ls)
do
    for nombre in {1..4}
    do
        echo "nombre del archivo es:$fil y cuenta del anidado es $nombre"
    done
done

# Termianl
Saludos
```

## Break y continue

- Break se utiliza para salir de la ejecución de los ciclos for y while.
- Continue se utiliza para continuar con la siguiente ejecución.

- Que en el intérprete de comandos lee todo el **if** por que esta dentro de un bucle **for** y el **break** de este *‘if’* termina el bucle.
- Pero hay un **elsif** que está anidado y su condición es que, si detecta algún $file que empiece con 4 entonces **continue** pero esta función pasa por alto dicho archivo ocultándolo, por lo tanto el bucle termina cuando llega al 10_download.sh
- En resumidas cuentas la orden del **break** significa cuando finaliza y el **continue** lo oculta iterando hasta su condición principal y como estas condiciones están dentro del bucle **for**

```bash
#!/bin/bash
# Programa para utilizar Break y Continue
# DBZ


echo "Sentencias break y continue"
for fil in $(ls)
do
    for nombre in {1..3}
    do
        if [ $fil = "10_download.sh" ]; then
            echo "Se encontro el archivo $fil y por eso se termian el bucle interno"
            echo "************************************************************"
            break;
        elif [[ $fil == 4* ]]; then
            echo "Se encontro el archivo $fil y continua"
            echo "************************************************************"
            continue;
        else
            echo "Nombre archivo:$fil _ $nombre"
        fi
    done
done
```

```shell
# !/bin/bash
# Programa sobre el uso de break y continue
# Autor: Luber Cueva

echo "SENTENCIAS BREAK Y CONTINUE"

for file in $(ls)  
do
    for name in {1..4}
    do
        echo "Hola"
        if [ $file = "10_download.sh" ]; then
            break;
        elif [[ $file == 4* ]]; then
            continue;
        else           
            echo "File archivo: $file _ $name"
        fi

        echo "Chao"
    done
done
```

El efecto de break es que solo llega a imprimir un “hola” y termina el for de adentro. Luego pasará al for de afuera, o sea que tendrá otro archivo (11_ …).

```shell
SENTENCIAS BREAK Y CONTINUE
Hola
Hola
File archivo: 11_ifElseIfElse.sh _ 1
Chao
```

En cambio con continue, imprime varios “Hola” y ya no los “Chao” y es por que a partir del continue ya no ejecuta lo que está a delante, sino que pasa a la siguiente iteración (continua con el archivo 4_ …).

```bash
Hola
File archivo: 3_tipoOperadores.sh _ 3
Chao
Hola
File archivo: 3_tipoOperadores.sh _ 4
Chao
Hola
Hola
Hola
Hola
Hola
File archivo: 5_substitutionCommand.sh _ 1
Chao
Hola
File archivo: 5_substitutionCommand.sh _ 2
Chao
```

## Menú de Opciones

Respuesta a:

# Menú de Opciones



**Menu de opciones con una pequeña introduccion animada **

```shell
 # !/bin/bash
# Owner @freddymm fixed version by @jordam

option=0
ini=0
while :
 do
    if [ $ini == 0 ]; then
    for ((i=0;i<3;i++))
      do
        clear
        echo"███████████████████████████"
        echo"███████▀▀▀░░░░░░░▀▀▀███████"
        echo"████▀░░░░░░░░░░░░░░░░░▀████"
        echo"███│░░░░░░░░░░░░░░░░░░░│███"
        echo"██▌│░░░░░░░░░░░░░░░░░░░│▐██"
        echo"██░└┐░░░░░░░░░░░░░░░░░┌┘░██"
        echo"██░░└┐░░░░░░░░░░░░░░░┌┘░░██"
        echo"██░░┌┘     ░░░░░     └┐░░██"
        echo"██▌░│       ░░░       │░▐██"
        echo"███░│      ░░ ░░      │░███"
        echo"██▀─┘░░░░░░░   ░░░░░░░└─▀██"
        echo"██▄░░░    ░░   ░░    ░░░▄██"
        echo"████▄─┘   ░░░░░░░   └─▄████"
        echo"█████░░  ─┬┬┬┬┬┬┬─  ░░█████"
        echo"████▌░░░ ┬┼┼┼┼┼┼┼  ░░░▐████"
        echo"█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████"
        echo"███████▄░░░░░░░░░░░▄███████"
        echo"██████████▄▄▄▄▄▄▄██████████"
        echo"███████████████████████████"
        echo"LOADING...LOADING...LOADING"
        sleep 0.3
        clear
        echo"███████████████████████████"
        echo"███████▀▀▀░░░░░░░▀▀▀███████"
        echo"████▀░░░░░░░░░░░░░░░░░▀████"
        echo"███│░░░░░░░░░░░░░░░░░░░│███"
        echo"██▌│░░░░░░░░░░░░░░░░░░░│▐██"
        echo"██░└┐░░░░░░░░░░░░░░░░░┌┘░██"
        echo"██░░└┐░░░░░░░░░░░░░░░┌┘░░██"
        echo"██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██"
        echo"██▌░│██████▌░░░▐██████│░▐██"
        echo"███░│▐███▀▀░░▄░░▀▀███▌│░███"
        echo"██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██"
        echo"██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██"
        echo"████▄─┘██▌░░░░░░░▐██└─▄████"
        echo"█████░░▐█─┬┬┬┬┬┬┬─█▌░░█████"
        echo"████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████"
        echo"█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████"
        echo"███████▄░░░░░░░░░░░▄███████"
        echo"██████████▄▄▄▄▄▄▄██████████"
        echo"███████████████████████████"
        echo".....LOADING.....LOADING..."
        sleep 0.3
        clear
    done
    ini=1
    else
    clear
    echo"_________________________________________"
    echo"PGUTIL - Programa de Utilidad de Postgres"
    echo"_________________________________________"
    echo"             MENU PRINCIPAL              "
    echo"_________________________________________"
    echo"1. Instlar Postgres"
    echo"2. Desintalar Postgres"
    echo"3. Sacar un respaldo"
    echo"4. Restaurar respaldo"
    echo"5. Salir"
    read -n1 -p "Ingrese una opcion [1-5]:    " option

    echo-e"\n\n"

    case$optionin
            1)
                echo-e"Instalando"
                sleep 2
                ;;
            2)
                echo"Desintalando"
                sleep 2
                ;;
            3)
                echo"Respaldando"
                sleep 2
                ;;
            4)
                echo"Restaurando"
                sleep 2
                ;;
            5)
                echo"Saliendo"
                exit 0
                ;;
        esac
    fi
done
```

## Reto 4

Crear un menú con las siguientes opciones:

1. Procesos Actuales,
2. Memoria Disponible,
3. Espacio en Disco,
4. Información de Red,
5. Variables de Entorno Configuradas,
6. Información Programa
7. Backup información
8. Ingrese una opción.

Posterior a esto vamos  a recuperar la opción ingresada, validarla e imprimir la opción y el título de acuerdo a lo ingresado

```shell
#!/bin/bash
#Programa para validar procesos, memoria, recursos, variables.
#by: devp
echo ""
echo "**** PROGRAMA VALIDACIÓN RECURSOS ****"
echo ""
opcion=0

while :
do
        #Limpiar Pantalla
        clear
        echo " * Menú Principal * "
        echo ""
        echo "1)Proceso Actuales "
        echo "2)Memoria Disponible "
        echo "3)Espacio en disco "
        echo "4)Informacion Red"
        echo "5)Variables de entorno configuradas "
        echo "6)Información Programa "
        echo "7)Comprimir Arcivos SH"
        echo "8)Salir "
        echo ""
        #Leer datos de usuario
        read -n1 -p "Ingrese la opción a seleccionar (1 - 8): " opcion
        #Validar opción ingresada
        case $opcion in
                1)
                        echo -e "\n..Procesos Actuales.."
                        ps axu
                        sleep 3
                        ;;
                2)
                        echo -e "\n..Memoria Disponible.."
                        free
                        sleep 3
                        ;;
                3)
                        echo -e "\n..Espacion en disco.."
                        df -h
                        sleep 3
                        ;;
                4)
                        echo -e "\n..Información Red.."
                        ifconfig -a
                        sleep 3
                        ;;
                5)
                        echo -e "\n..Variables de Entorno Configuradas.."
                        #printenv
                        env -u VAR
                        sleep 3
                        ;;
                6)
                        echo -e "\n..Información Programa.."
                        dpkg -l | more
                        sleep 3
                        ;;
                7)
                        echo -e "\n..Comprimiedo Archivos.."
                        tar -czvf archivosCompresos.tar.gz *
                        echo -e "\n SUCESS!!"
                        sleep 3
                        ;;
                8)
                        echo -e "\n..Saliendo, ¡¡Gracias!!"
                        exit 0
                        ;;
        esac
done
```

#  6. Archivos
## Archivos y Directorios

- Para crear directorios utilizamos el comando **mkdir** seguido del nombre que queremos colocar.
- Para crear archivos utilizamos el comando **touch** seguido del nombre que queremos colocar.

**Ejercicio**

```sh
# ! /bin/bash
# Programa para crear archivos y directorios
# Author Diego Beltran histagram @diegodevelops

echo "Archivos Ditrectorios"

if [ $1 = "d" ]; then
    mkdir -m 755 $2
    echo "Directorio creado correctamente"
    ls -la $3
elif [ $1 = "f" ]; then
    touch $2
    echo "Archivo creado correctamente"
    ls -la $3
else
    echo "No existe esa opción: $1"
fi
```

Método para crear un archivo sin modificar sus tiempos de acceso (lo que realmente hace `touch`. La creación de un archivo es un side-effect):

```sh
([ -e $file ] && echo "El archivo ya existe") || (touch $file && echo "El archivo fue creado")
```

Método para crear un directorio sí y solo sí, el mismo no existe:

```sh
mkdir -p $dir
```

**operadores:**

```sh
-gt mayor
-lt menor
-ge mayor o igual
-le menor o igual
-eq igual
-ne distinto
```

[Condicionales en bash](https://www.atareao.es/tutorial/scripts-en-bash/condicionales-en-bash/#)

## Escribir dentro de archivos

[<< EOM/EOF](https://superuser.com/questions/1003760/what-does-eof-do)

- **EOM**: End Of Message
- **EOF**: End Of File

Para escribir en un archivo podemos utilizar `>>` y `>`
**`>>`**, si no existe el archivo, se creará, si existe, se agregara al final del archivo.
**`>`**, si no existe el archivo, se creara, si existe, será reemplazado

## Leer Archivos

[IFS](https://bash.cyberciti.biz/guide/$IFS)

```sh
#!/bin/bash

# Reading a file
cat $1

# Saving the read response in a variable
cat_response=`cat $1`
echo "$cat_response"

# Reading a file line by line with IFS to read also the blank spaces
while IFS= read line
do
    echo "$line"
done < $1
```



## Operaciones Archivos

```sh
#!/bin/bash

# Copy files
mkdir -m 755 backup_scripts
cp *.* backup_scripts/
ls -la backup_scripts

# Move files
mv backup_scripts $HOME

# Remove files
rm *.txt
```

## Reto 5

Modificar el archivo [utilityHost.sh](http://utilityhost.sh/) para escribir la información solicitada a un archivo de log cuyo nombre será log donde yyyy representa el año, MM el mes, DD el día, HH la hora, mm los minutos y SS los segundos

[UtilityHost.sh](http://utilityhost.sh/) lo creamos en las primeras clases
Simplemente imprime el valor de unas variables.

```shell
#!/bin/bash
#Reto 1

option=2
result=4

echo"El valor de option es: $option"
echo"El valor de result es: $result"
```

El objetivo del reto es agarrar esas variables y agregar su valor dentro de un archivo que vas a crear en el script. El nombre de este archivo será: **log** AÑO MES DIA hora minutos segundos.txt

Ejemplo:

```bash
log20200812211806.txt
```

#  7. Empaquetamiento
## Empaquetamiento TAR, GZIP y PBZIP 2

El empaquetamiento es un tema interesante para manejar respaldos u otro tipo de archivos para poder reducir el tamaño de uno o varios archivos para luego distribuirlos a través de la red u otra ubicación dentro del equipo.

- `tar`: permite empaqueta múltiples archivos
- `gzip`: Este solo nos permite empaquetar un único archivo, pero nos permite optimizar el tamaño del empaquetado. Suele usarse en conjunto con `tar`
- `pbzip2`: Este comando permite soporta el multicore, multiprocesador. Solo podemos empaquetar un solo archivo.

El ratio hace referencia a la relación del tamaño resultante del archivo comprimido con respecto a su tamaño original. En resumen no es más que una medida de proporción entre la entrada y salida.

Dejo un link que me sirvio para entender mejor el tema, en él comparan diferentes herramientas que podemos usar para comprimir archivos: [gzip-vs-bzip2-vs-xz-performance-comparison](https://www.rootusers.com/gzip-vs-bzip2-vs-xz-performance-comparison/)

RATIO es el nivel de compresión del archivo.
Por ejemplo: si un archivo pesa 100 Mb.
Sí seleccionas un RATIO de 1, el archivo pesara 90 Mb, pero será rápido el proceso.
Sí seleccionas un RATIO de 5., el archivo pesara 50 MB, pero será mas lento el proceso de compresión.

Hay que tener muy en claro que `tar` solamente agrupa multiples archivos en uno sólo, no comprime al menos que tu se lo especifiques.

Si quisieramos agrupar y comprimir archivos en un sólo movimiento, hariamos lo siguiente:

```shell
$ tar czf shellCourse.tgz *.sh
```

## Respaldo Empaquetado con clave

> *tip* de seguridad para ofuscar los programas que desarrollemos en BASH Shell. Aquí les dejo en link. [Ofuscar Bash](https://blog.desdelinux.net/como-ofuscar-u-ocultar-codigo-de-nuestros-scripts-bash/)

```sh
#!/bin/bash

zip -e shell_course.zip *.sh
```

Para verificar si tienen instalado el comando zip en su sistema el comando type les puede ser útil, tecleen en su terminal así:
**type zip**.
Y si está instalado les devolverá donde están los archivos binarios del comando

> Agregar contraseñas a un archivo comprimida, no es una práctica segura. Se recomienda usar:
>
> ```sh
> openssl enc -aes-256-cbc -e -in foo.tar.gz -out bar.tar.gz.enc
> openssl aes-256-cbc -d -in out.tar.gz.enc -out decrypted.tar.gz
> ```

## Transferir información red

Más información sobre el comando [rsync](https://www.atareao.es/software-linux/sincronizacion-a-fondo-con-rsync/)

```shell
# ! /bin/bash
# Programa para ejemplificar la forma de como transferir por la red utilizando las opciones de empaquetamiento para optimizar la velocidad de transferencia
# Autor: Jose Suarez

echo "Empaquetar todos los scripts de la carpeta ShellCourses y transferirlos a otro equipo utilizando el comando rsync"


host=""
usuario=""

read -p "Ingrese el Host: " host
read -p "Ingrese el Usuario: " usuario
echo -e "\n En este momento se procederá a empaquetar la carpeta y transferir según los datos ingresados"

rsync -avz $(pwd) $usuario@$host:/home/platzi
```

NOTA: En ambos host deben instalar anteriormente rsync con el siguiente comando:

```shell
sudo apt install rsync
```

Para los interesados en seguridad, este comando de forma invertida es decir: 

```shell
$ rsync -avz user@host/directory .
```

 trae los archivos del host destino al nuestro.

## Reto 6

Modificar programa utilityHost. sh para empaquetar los logs generados utilizando algún formato de compresión, colocarle una clave y pasarlo a otra máquina a través de SSH, cuando se seleccione la opción 7. Backup de Información.

```shell
# !/bin/bash
# Programa que muestra algunas funcionalidades basicas del sistema

option=0
usuario=$(logname)
fechaArchivo=$(date +"%F")
fechaAcceso=$(date +"%Y-%m-%d %H:%M:%S")
archivoPath=~/Backup
archivoName=log-$fechaArchivo.log

if [ -d $archivoPath ]; then
    if [ -f $archivoPath/$archivoName ]; then
        echo -e "\nAccedió el usuario: $usuario el día: $fechaAcceso" >> $archivoPath/$archivoName
    else
        touch $archivoPath/$archivoName
        echo -e "\nAccedió el usuario: $usuario el día: $fechaAcceso" >> $archivoPath/$archivoName
    echo -e "\n  Operaciones realizadas:\n" >> $archivoPath/$archivoName
    fi
else
    mkdir $archivoPath
    touch $archivoPath/$archivoName
    echo -e "\nAccedió el usuario: $usuario el día: $fechaAcceso" >> $archivoPath/$archivoName
    echo -e "\n  Operaciones realizadas:\n" >> $archivoPath/$archivoName
fi

#Impresion del menú
while :
do
    clear
    echo "------------------------------------------------"
    echo "-------------- Menú Principal ------------------"
    echo "------------------------------------------------"
    echo "-    1.- Procesos Actuales                     -"
    echo "-    2.- Memoria Disponible                    -"
    echo "-    3.- Espacio en Disco                      -"
    echo "-    4.- Información de Red                    -"
    echo "-    5.- Variables de entorno Configuradas     -"
    echo "-    6.- Información del Programa              -"
    echo "-    7.- Backup Información                    -"
    echo "-    8.- Salir                                 -"
    echo "------------------------------------------------"
    
    read -n1 -p "Ingrese la opción deseada [1-8]:  " option

    case $option in
    1) clear
        echo -e "\n\tProcesos Actuales\n"
        echo -e "\n\tProcesos Actuales\n" >> $archivoPath/$archivoName
        ps aux
        ps aux >> $archivoPath/$archivoName
        echo -e "\n"
        read -n1 -p "Presione una tecla para continuar..."
        ;;
    2) clear
        echo -e "\n\tMemoria Disponible\n" 
        echo -e "\n\tMemoria Disponible\n" >> $archivoPath/$archivoName
        free -h
        free -h >> $archivoPath/$archivoName
        echo -e "\n"
        read -n1 -p "Presione una tecla para continuar..."
        ;;
    3) clear
        echo -e "\n\tMemoria en disco\n" 
        echo -e "\n\tMemoria en disco\n" >> $archivoPath/$archivoName
        du -h
        du -h >> $archivoPath/$archivoName
        echo -e "\n"
        read -n1 -p "Presione una tecla para continuar..."
        ;;
    4) clear
        echo -e "\n\tInformación de Red\n" 
        echo -e "\n\tInformación de Red\n" >> $archivoPath/$archivoName
        ifconfig
        ifconfig >> $archivoPath/$archivoName
        echo -e "\n"
        read -n1 -p "Presione una tecla para continuar..."
        ;;
    5) clear
        echo -e "\n\tVariables de entorno configuradas\n"
        echo -e "\n\tVariables de entorno configuradas\n" >> $archivoPath/$archivoName
        printenv
        printenv >> $archivoPath/$archivoName
        echo -e "\n"
        read -n1 -p "Presione una tecla para continuar..."
        ;;
    6) clear
        echo -e "\n\tInformación del Sistema\n"
        echo -e "\n\tInformación del Sistema\n" >> $archivoPath/$archivoName
        echo -e "\tPrograma que realiza funcionalidades basicas del OS"
        echo -e "\tAutor: Adan Galicia"
        echo -e "\tInformacón de contacto: algo9854@gmail.com"
        echo -e "\n"
        read -n1 -p "Presione una tecla para continuar..."
        ;;
    7) clear
        echo -e "\n\tBackup Información\n"
        echo -e "\n\tRealizacion de Backup\n" >> $archivoPath/$archivoName
        read -p "Ingrese el host: " host
        read -p "Ingrese el usuario: " user
        read -p "Ingrese la ruta en donde quiera hacer el backup: " ruta
        
        zip -e backup-$fechaArchivo.zip $archivoPath/*.log
        rsync -avz backup-$fechaArchivo.zip $user@$host:$ruta
        ;;
    8) clear
        echo -e "\n\tAdios!\n"
        exit
        ;;
    *) clear
        echo -e "\n\tOpción no encontrada\n"
        read -n1 -p "Presione una tecla para continuar..."
        ;;
    esac
done
```

#  8. Funciones
## Crear funciones y Paso de Argumentos

Las funciones son bloques de código que realizan algo en especifico y que ayudan a organizar el código de nuestro programa.

```shell
#!/bin/bash

option=0
backup_directory=""
restore_directory=""

install_postgresql () {
    echo -e "\nInstalling PostgreSQL..."
}

uninstall_postgresql () {
    echo -e "\nUninstalling PostgreSQL..."
}

backup () {
    echo -e "\nBackuping..."
    echo -e "\nBackup directory: $1"
}

restore_backup () {
    echo -e "\nRestoring backup..."
    echo -e "\nRestore directory: $1"
}

while :
do
    clear
    echo "-------------------------------------"
    echo "PGUTIL - PostgreSQL utilities program"
    echo "-------------------------------------"
    echo "              MAIN MENU              "
    echo "-------------------------------------"
    echo "1. Install PostgreSQL"
    echo "2. Uninstall PostgreSQL"
    echo "3. Backup"
    echo "4. Restore Backup"
    echo "5. Exit"

    read -n1 -p "Enter an option [1-5]: " option

    case $option in
    1)
        install_postgresql
        sleep 3
        ;;
    2)
        uninstall_postgresql
        sleep 3
        ;;
    3)
        echo -e "\n"
        read -p "Enter the backup directory: " backup_directory
        backup $backup_directory
        sleep 3
        ;;
    4)
        echo -e "\n"
        read -p "Enter the backup restore directory: " restore_directory 
        restore_backup $restore_directory
        sleep 3
        ;;
    5)
        echo -e "\nExiting..."
        exit 0
        ;;
    esac
done
```



## Funciones de instalar y desinstalar postgres

**Ejecutar un comando con sudo desde un bash-script**

```sh
read -s -p "Ingresar cotraseña sudo" password
echo "$password" | sudo comando
```

**Me parecio interesante este dato como tambien el resto del curso en general.**

En bash tenemos algunas variables especiales, entre ellas aquí estamos utilizando **$?** esta variable guarda el código de salida del ultimo comando pipe utilizado. El cual está relacionado al hecho de si se pudo conectar los comandos o no con el pipe.

En otras palabras si la conexión fue exitosa se almacena un numero 0 en caso contrario se almacena un numero 1, esto con relación a la última conexión entre comandos utilizados.

Por esa razón en la función de instalar_postgres primero se ejecuta el comando **which psql** y el resultado de ese comando se conecta a la creación de una variable que se puede entender como un segundo comando en este caso si resulta exitosa esa conexión la variable **$?** guardara un numero 0 en caso contrario guardara un numero 1 y de ahí su importancia para validar procesos con un condicional **if**

Para aplicaciones más complejas donde se necesita saber el código de salida de varias conexiones con pipe, no solamente de la última ejecutada, en algunas distribuciones de linux existe una matriz de códigos de salidas llamada **PIPESTATUS** en la cual utilizamos en índice del arreglo para buscar el código del pipe que estamos buscando

```sh
#!/bin/bash

option=0
backup_directory=""
restore_directory=""

install_postgresql () {
    echo -e "\nVerifying PostgreSQL installation..."
    is_pg_installed=$(which psql)
    
    if [ $? -eq 0 ]; then
        echo -e "\nPostgreSQL is already installed on this server."
    else
        echo -e "\n"
        read -s -p "Enter the sudo password: " password
        echo -e "\n"
        read -s -p "Enter the new PostgreSQL password: " postgresql_password

        echo "$password" | sudo -S apt update
        echo "$password" | sudo -S apt install postgresql postgresql-contrib -y
        echo -e "\nInstalling PostgreSQL..."
        
        sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD '{postgresql_password}';"
        
        echo "$password" | sudo -S service postgresql enable
        echo "$password" | sudo -S service postgresql start
    fi

    echo -e "\n"
    read -n1 -s -r -p "Press [ENTER] to continue..."
}

uninstall_postgresql () {
    echo -e "\n"
    read -s -p "Enter the sudo password: " password

    echo -e "\nUninstalling PostgreSQL..."
    
    echo "$password" | sudo -S service postgresql stop
    echo "$password" | sudo -S apt remove postgresql\* --purge -y
    echo "$password" | sudo -S rm -rf /etc/postgresql
    echo "$password" | sudo -S rm -rf /etc/postgresql-common
    echo "$password" | sudo -S rm -rf /var/lib/postgresql
    echo "$password" | sudo -S userdel -r postgres
    echo "$password" | sudo -S groupdel postgresql

    echo -e "\n"
    read -n1 -s -r -p "Press [ENTER] to continue..."
}

backup () {
    echo -e "\nBackuping..."
    echo -e "\nBackup directory: $1"
}

restore_backup () {
    echo -e "\nRestoring backup..."
    echo -e "\nRestore directory: $1"
}

while :
do
    clear
    echo "-------------------------------------"
    echo "PGUTIL - PostgreSQL utilities program"
    echo "-------------------------------------"
    echo "              MAIN MENU              "
    echo "-------------------------------------"
    echo "1. Install PostgreSQL"
    echo "2. Uninstall PostgreSQL"
    echo "3. Backup"
    echo "4. Restore Backup"
    echo "5. Exit"

    read -n1 -p "Enter an option [1-5]: " option

    case $option in
    1)
        install_postgresql
        sleep 3
        ;;
    2)
        uninstall_postgresql
        sleep 3
        ;;
    3)
        echo -e "\n"
        read -p "Enter the backup directory: " backup_directory
        backup $backup_directory
        sleep 3
        ;;
    4)
        echo -e "\n"
        read -p "Enter the backup restore directory: " restore_directory 
        restore_backup $restore_directory
        sleep 3
        ;;
    5)
        echo -e "\nExiting..."
        exit 0
        ;;
    esac
done
```



## Funciones sacar y restaurar respaldos en postgres

1. Al momento de crear un respaldo si el directorio de Respaldo ingresado por el
   usuario no se encuentra se pregunta al Usuario si desea crear un directorio con
   el nombre inicial ingresado.
2. En el modulo de Restaurar, cambie el orden de los condicionales ya que este
   orden no era el mas optimo. Si el usuario ingresa un Respaldo a Restaurar que no
   se encuentra el programa igual crea la BD en Postgres inclusive si no utiliza el
   respaldo que por supuesto NO fue encontrado lo cual no deberia suceder.
3. Tambien agregue lineas de codigo para verificar si el directorio donde estan
   los .bak que es ingresado por el usuario existe. De ser asi entonces se listan
   los archivos .bak que alli se encuentran y de ese modo podemos escoger el .bak
   que deseamos restaurar.
4. Por ultimo agregue al menu la opcion de listar BD en postgres para asi
   facilmente poder consultar sin tener que ir al terminal.

```sh
# ! /bin/bash
# Programa para ejemplificar el uso del Break y Continue
#Arnoldo Alvarez

opcion=0
fechaActual=`date +%Y%m%d`

#Esta es la funcion instalar PostGres
instalar_postgres () {
 echo -e "\nVerificar si tenemos instalado PostGress..."
 sleep 3
 verifyInstall=$(which psql)
 if [ $? -eq 0 ]; then
     echo "PostGres ya se encuentra instalado en el equipo "
 else
      read -s -p "Introduzca password de administrador " password
      read -s -p "Introduzca password a utilizar en PostGres " passwordPostgres
      echo "$password" | sudo -S apt update
      echo "$password" | sudo -S apt-get -y install postgresql postgresql-contrib
      sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD '{$passwordPostgres}';"
      echo "$password" | sudo -S systemctl enable postgresql.service
      echo "$password" | sudo -S systemctl start postgresql.service
 fi

 read -n 1 -s -r -p "Presione [ENTER] para continuar..."

}

#Esta es la funcion desinstalar PostGres
desinstalar_postgres () {
    echo -e "\nVerificando si ya esta Desinstalado Postgres..."
    verifyInstall=$(which psql)
    if [ $? -eq 1 ]; then
        echo " PostGres NO se encuentra instalado en el Equipo "
    else
        read -s -p "Introduzca password de administrador " password
        echo -e "\n"
        echo "$password" | sudo -S systemctl stop postgresql.service
        echo "$password" | sudo -S apt-get -y --purge remove postgresql\*
        echo "$password" | sudo -S rm -r /etc/postgresql
        echo "$password" | sudo -S rm -r /etc/postgresql-common
        echo "$password" | sudo -S rm -r /var/lib/postgresql
        echo "$password" | sudo -S userdel -r postgres
        echo "$password" | sudo -S groupdel postgresql
fi

read -n 1 -s -r -p "Presione [ENTER] para continuar..."

}

#Esta es la funcion Sacar Respaldo
sacar_respaldo () {
echo "Listar las bases de datos..."
sudo -u postgres psql -c "\l"
read -p "Elegir la BD a respaldar: " bddRespaldo
echo -e "\n"
        if [ -d "$1" ]; then
                echo "Establecer permisos directorio"
                echo "$password" | sudo -S chmod 755 $1
                echo "Realizando respaldo..."
                sudo -u postgres pg_dump -Fc $bddRespaldo > "$1/bddRespaldo$fechaActual.bak"
                echo "Respaldo realizado Correctamente en la ubicacion: $1/bddRespaldo$fechaActual.bak"
        else
                echo -e  "\nEl directorio $1 No Existe"
                echo -e "\n"
                read -n1 -p "Desea crear el directorio $1 (s/n)" respbdd
                if [ $respbdd = "s" ]; then
                        sudo mkdir $1
                        echo "$password" | sudo -S chmod 755 $1
                        echo -e "\nRealizando respaldo..."
                        sleep 3
                        sudo -u postgres pg_dump -Fc $bddRespaldo > "$1/bddRespaldo$fechaActual.bak"
                        echo "Respaldo realizado Correctamente en la ubicacion: $1/bddRespaldo$fechaActual.bak"
                else
                        echo -e "\nSaliendo sin realizar Respaldo..."
                        sleep 3
                fi

                fi

read -n 1 -s -r -p "Presione [ENTER] para continuar..."

}

#Esta es la funcion Restaurar Respaldo
restaurar_respaldo () {
read -p "Ingresar el directorio donde se encuentran los respaldos   " directorioBackup
if [ -d $directorioBackup ]; then

echo "Listando los archivos de Respaldos..."
sleep 3
ls -la $directorioBackup
read -p "Ingresar el archivo .bak a restaurar:  " respaldoRestaurar
#echo -e "\n"
if [ -f "$directorioBackup/$respaldoRestaurar" ]; then

        read -p "Ingresar nombre BD destino:  " bdDestino
        verifyBdd= $(sudo -u postgres psql -lqt | cut -d \| -f 1 | grep -wq $bdDestino)
        if [ $? -eq 0 ]; then
                  echo "Restaurando en la Base de Datos destino...$bdDestino"
                  sudo -u postgres pg_restore -Fc -d $bdDestino "$directorioBackup/$respaldoRestaurar"
                  echo "Listar Bases de datos..."
                  sudo -u postgres psql -c "\l"
           else
                  echo  "La BD destino no se encuentra..."
                  echo  "Creando Base de Datos destino..."
                  sleep 4
                  sudo -u postgres psql -c "CREATE DATABASE $bdDestino"
                  sudo -u postgres pg_restore -Fc -d $bdDestino "$directorioBackup/$respaldoRestaurar"
                  echo "Listar Bases de datos..."
                  sudo -u postgres psql -c "\l"
          fi

else
        echo "No se encuentra el archivo de Respaldo Ingresado"
        echo "Verifique nuevamente el nombre y vuelva a intentarlo..."
fi
else
        echo "No se encuentra el directorio de Respaldos ingresado..."
        echo "Verifique nuevamente el nombre y vuelva a intentarlo..."
fi

read -n 1 -s -r -p "Presione [ENTER] para continuar..."

}

lista_de_BD(){

echo -e  "\Las Bases de Datos Actuales: "
sudo -u postgres psql -c "\l"
read -n 1 -s -r -p "Presione [ENTER] para continuar..."
}

while :
do
    #Limpiar la pantalla
    clear
    #Desplegar el menu de opciones
    echo "----------------------------------------"
    echo "PGUTIL - Programa de Utilidades PostGres"
    echo "----------------------------------------"
    echo "           MENU PRINCIPAL               "
    echo "----------------------------------------"
    echo "1.Instalar Postgres                     "
    echo "2.Desinstalar Postgres                  "
    echo "3.Hacer un respaldo                     "
    echo "4.Restaurar respaldo                    "
    echo "5.Listar Bases de Datos Actuales        "
    echo "6.Salir                                 " 

    #Leer los datos del Usuario - Capturar  Opcion
    read -n1 -p "Ingrese una opcion [1-5]: " opcion

    #Validar la opcion ingresada
    case $opcion in

        1) instalar_postgres

          #sleep 3
            ;;

        2) desinstalar_postgres

           #sleep 3
            ;;

        3)  echo -e "\n"
            read -p "Indique Directorio: " directorioBackup
            sacar_respaldo $directorioBackup


            ;;

        4)  echo -e "\n"
            #read -p "Indique Directorio de Respaldos " directorioRespaldos
            restaurar_respaldo $directorioRespaldos


            ;;

        5) lista_de_BD
            ;;

        6) echo -e "\nSaliendo del programa...."
            exit 0
            ;;
    esac
done
```

## Reto 7

Modificar nuestro programa [utiliyHost.sh](http://utiliyhost.sh/) para crear cinco funciones de acuerdo al menú creado anteriormente y completarlo con lo visto en clases.

**Loading**

```sh
        echo"███████████████████████████"
        echo"███████▀▀▀░░░░░░░▀▀▀███████"
        echo"████▀░░░░░░░░░░░░░░░░░▀████"
        echo"███│░░░░░░░░░░░░░░░░░░░│███"
        echo"██▌│░░░░░░░░░░░░░░░░░░░│▐██"
        echo"██░└┐░░░░░░░░░░░░░░░░░┌┘░██"
        echo"██░░└┐░░░░░░░░░░░░░░░┌┘░░██"
        echo"██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██"
        echo"██▌░│██████▌░░░▐██████│░▐██"
        echo"███░│▐███▀▀░░▄░░▀▀███▌│░███"
        echo"██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██"
        echo"██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██"
        echo"████▄─┘██▌░░░░░░░▐██└─▄████"
        echo"█████░░▐█─┬┬┬┬┬┬┬─█▌░░█████"
        echo"████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████"
        echo"█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████"
        echo"███████▄░░░░░░░░░░░▄███████"
        echo"██████████▄▄▄▄▄▄▄██████████"
        echo"███████████████████████████"
        echo".....LOADING.....LOADING......CARGANDO"
```

**Reto 7**

```sh
# ! /bin/bash
 # Programa para cumplir con el reto#3
 #Arnoldo Alvarez
 
 opcion=""
 numA=0
 numB=0
 numC=0
 #telRegex= '^\(?([0-9]{3})\)?([0-9]{3})[.]?([0-9]{4})$' #Solo acepta el formato telefonico (xxx)xxx.xxxx Ej:(706)612.4602
 telRegex2='^\([0-9]\{3\}\)\([0-9]\{3\}\)\([0-9]*\)/(\1) \2 . \3/$'
 pathArchivo=""
 aritmetica=""
 funcion=""
 phone=""
 respTel=""
 respBackup=""
 FILE=log.txt
 FILE2=Zip.zip
 DATE=`date +%y%m%d`
 TIME=`date +%H%M%S`
 
 coronavirus_guidelines() {
 
          echo -e "\nLo que debes hacer es lo siguiente:
               a) Lavarse las manos frecuentemente.
               b) Toser o estornudar al interior de  tu codo.
               c) No tocarse la cara.
               d) Mantener cierta distancia social.
               e) Quedarse voluntariamente en casa."
 
               echo "$DATE-$TIME --- Guidelines de CoronaVirus consultadas" >> logs_reto7/$NEWFILE
 
      read -n 1 -s -r -p "Presione [ENTER] para continuar..."
  }
Math_Function () {
 
  echo    "Funciones Aritmeticas disponibles
                      1.- Sumar
                      2.- Multiplicar
                      3.- Dividir"
           echo -e "\n"
           read -p "Escoja la funcion Aritmetica: " aritmetica
 
           case $aritmetica in
 
                "1")  funcion="suma"
                      numC=$((numA + numB));;
                "2")  funcion="Multiplicacion"
                     numC=$((numA * numB));;
                "3")  funcion="Division"
                      numC=$((numA / numB));;
                  *)  funcion="Funcion No definida"
                      echo "$DATE-$TIME --- Opcion No encontrada,Funcion Matematica NO realizada"   >> logs_reto6/$NEWFILE
                      echo "Opcion incorrecta";;
           esac
 
              echo "Resultado Matematico de la $funcion: $numC "
              echo "$DATE-$TIME --- Usuario realiza funcion matematica $funcion:$numC" >> logs_reto7/$NEWFILE
 
      read -n 1 -s -r -p "Presione [ENTER] para continuar..."
 
 }
Phone_Format () {
 
      echo "$DATE-$TIME --- Usuario escoge chequear formato de numero telefonico" >> logs_reto7/$NEWFILE
              read -p "Ingrese numero telefonico: " telefono
 
              if [[ $telefono =~ $telRegex2 ]]; then
                  echo "Formato correcto dentro de los EEUU"
              else
              phone=$telefono
              plainPhone=$(echo $phone | sed "s/[()-.]//g")
              echo "Formato Incorrecto dentro de los EEUU"
              read -n1 -p "Convertir al formato (123)456.7890 s/n:  "  respTel
              echo  -e "\n"
               if [ $respTel = "s" ]; then
                formatedPhone2=$(echo $plainPhone | sed "s/\([0-9]\{3\}\)\([0-9]\{3\}\)\([0-9]*\)/(\1) \2 . \3/")
                echo "Numero convertido: $formatedPhone2 "
                echo "$DATE-$TIME --- Usuario cambia formato del Numero Telefonico $telefono" >> logs_reto7/$NEWFILE
               else
 
                   echo "$DATE-$TIME --- Usuario responde NO para cambiar formato de  $telefono" >> logs_reto7/$NEWFILE
                   echo "Volviendo al Menu Principal..."
               fi
              fi
 
      read -n 1 -s -r -p "Presione [ENTER] para continuar..."
 }
Directory_Search () {
 
      if [[ -d $dirPath  ]]; then
 
                  echo "$DATE-$TIME --- Usuario consulta satisfactoriamente el directorio $dirPath" >> logs_reto7/$NEWFILE
                  echo "El directorio $dirPath SI Existe"
 
                  else
                      echo "El directorio NO Existe o NO es un directorio"
                      echo "$DATE-$TIME --- Usuario No encuentra $dirPath" >> logs_reto7/$NEWFILE
              fi
 
      read -n 1 -s -r -p "Presione [ENTER] para continuar..."
 }
 
 File_Search () {
 
     if [[ -e $filePath  ]]; then
               echo "$DATE-$TIME --- Usuario consulta el archivo $filePath" >> logs_reto7/$NEWFILE
               cat $filePath
           else
               echo "No se encuentra el archivo o Nombre de archivo Incorrecto"
               echo "$DATE-$TIME --- Usuario No encuentra $filePath" >> logs_reto7/$NEWFILE
           fi
 
      read -n 1 -s -r -p "Presione [ENTER] para continuar..."
 
 }
Backup_Shit () {
 
     if [[ $respBackup = "s" ]]; then
               echo -e  "\ncreando archivo tar..."
               sleep 2
               tar -cvf logs_reto7/backup_`date +%Y%m%d`_`date +%H%M%S`.tar logs_reto7/
 
               echo -e "\nCreando archivo ZIP..."
               echo "Debera introducir una Clave de Seguridad..."
               sleep 2
               zip -e logs_reto7/zip_`date +%Y%m%d`_`date +%H%M%S`.zip /shellCourse/logs_reto7/*.tar
 
               echo "Transfieriendo archivo ZIP..."
               echo "Clave de Administrador para Transferencias"
               sleep 2
               rsync -avz /shellCourse/logs_reto7/*.zip a2419@192.168.1.9:/$HOME/backup_logs_reto7/
               echo "$DATE-$TIME --- Usuario ejecutando proceso de Respaldo" >> logs_reto7/$NEWFILE
               sleep 3
               echo -e  "\nBackup Realizado con Exito..."
           else
 
               echo "$DATE-$TIME --- Usuario cancela proceso de Respaldo " >> logs_reto7/$NEWFILE
               echo -e "\nSaliendo del modulo de Respaldos..."
               sleep 3
           fi
  }
 #Se crea un archivo .log con fecha y hora y se mueve a un directorio de logs_reto5
 NEWFILE=${FILE%.*}_`date +%Y%m%d`_`date +%H%M%S`.${FILE#*.}
 touch $NEWFILE
 mv $NEWFILE logs_reto6/
  #echo "El archivo $NEWFILE fue creado con exito"
 
 
 while :
 do
     clear
     echo "archivo: $NEWFILE"
 echo "Las opciones son las siguientes\n
         1.- Para Saber como evitar CoronaVirus
         2.- Realizar funciones numericas
         3.- Para verificar formato de numero telefonico
         4.- Para verificar un directorio
         5.- Ver contenido de un Archivo
         6.- Hacer Respaldo de Logs
         7.- salir"
 
 echo -e "\n"
 read -n1  -p "Introduzca su Opcion: " opcion
case $opcion in
 
     "1") coronavirus_guidelines
 
          ;;
 
     "2") echo -e "\nIntroduzca el numero A: "
          read
          numA=$REPLY
          echo -e "Introduzca el numero B: "
          read
          numB=$REPLY
          Math_Function $numA $numB
 
          ;;
 
 
      "3")   echo -e "\n"
             Phone_Format
             ;;
"4") echo -e "\n"
          read -p "Ingrese la ruta de un directorio: " dirPath
          Directory_Search $dirPath
         ;;
 
      "5")echo -e "\n"
          read -p "Ingrese la ruta del archivo: " filePath
          File_Search $filePath
          ;;
 
      "6")echo -e "\n"
          read -n1 -p "Desea hacer Backup del Directorio logs_reto7 s/n: " respBackup
          Backup_Shit $respBackup
 
          ;;
 
      "7")   echo -e "\n"
             echo -e "Saliendo..."
             echo "$DATE-$TIME --- Usuario sale de la aplicacion" >> logs_reto7/$NEWFILE
             exit 0
 
             ;;
 
       *) echo "Opcion Incorrecta, Lo sentimos"
 
 
       esac
 done

```

#  9. Cierre del curso
## Cierre

 [CheatSheet](https://devhints.io/bash) commands y extras del
