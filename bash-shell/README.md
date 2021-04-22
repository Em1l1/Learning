# Programación en Bash Shell

### Marco Antonio Toscano Freire

# Tabla de Contenido

- [1. Bienvenida e Introducción](#1-Bienvenida-e-Introducción)
  - [Introducción y Bienvenida al curso](#Introducción-y-Bienvenida-al-curso)
  - [Componentes de Linux, Tipos de Shell y Comandos de información](#Componentes-de-Linux-Tipos-de-Shell-y-Comandos-de-información)
  - [Bash scripting](#Bash-scripting)
  - [Crear nuestro primer Script](#Crear-nuestro-primer-Script)
  - [Ejecutar nuestro script con un nombre único](#Ejecutar-nuestro-script-con-un-nombre-único)
- [2. Programación Shell Básica](#2-Programación-Shell-Básica)
  - [Declaración de Variables y Alcance en Bash Shell](#Declaración-de-Variables-y-Alcance-en-Bash-Shell)
  - [Tipos de Operadores](#Tipos-de-Operadores)
  - [Script con Argumentos](#Script-con-Argumentos)
  - [Sustitución de Comandos en variables](#Sustitución-de-Comandos-en-variables)
  - [Debug en Script](#Debug-en-Script)
  - [Reto 1](#Reto-1)
- [3. Script Interactivos](#3-Script-Interactivos)
  - [Capturar información usuario](#Capturar-información-usuario)
  - [Expresiones Regulares](#Expresiones-Regulares)
  - [Validar información](#Validar-información)
  - [Paso de parámetros y opciones](#Paso-de-parámetros-y-opciones)
  - [Descargar información de Internet](#Descargar-información-de-Internet)
  - [Reto 2](#Reto-2)
- [4. Condicionales](#4-Condicionales)
  - [Sentencias If/Else](#Sentencias-If-Else)
  - [If Anidados](#If-Anidados)
  - [Expresiones Condicionales](#Expresiones-Condicionales)
  - [Sentencias Case](#Sentencias-Case)
  - [Reto 3](#Reto-3)
- [5. Iteración](#5-Iteración)
  - [Arreglos](#Arreglos)
  - [Sentencia for loop](#Sentencia-for-loop)
  - [Sentencia while loop](#Sentencia-while-loop)
  - [Loop Anidados](#Loop-Anidados)
  - [Break y continue](#Break-y-continue)
  - [Menú de Opciones](#Menú-de-Opciones)
  - [Reto 4](#Reto-4)
- [6. Archivos](#6-Archivos)
  - [Archivos y Directorios](#Archivos-y-Directorios)
  - [Escribir dentro de archivos](#Escribir-dentro-de-archivos)
  - [Leer Archivos](#Leer-Archivos)
  - [Operaciones Archivos](#Operaciones-Archivos)
  - [Reto 5](#Reto-5)
- [7. Empaquetamiento](#7-Empaquetamiento)
  - [Empaquetamiento TAR, GZIP y PBZIP 2](#Empaquetamiento-TAR-GZIP-y-PBZIP-2)
  - [Respaldo Empaquetado con clave](#Respaldo-Empaquetado-con-clave)
  - [Transferir información red](#Transferir-información-red)
  - [Reto 6](#Reto-6)
- [8. Funciones](#8-Funciones)
  - [Crear funciones y Paso de Argumentos](#Crear-funciones-y-Paso-de-Argumentos)
  - [Funciones de instalar y desinstalar postgres](#Funciones-de-instalar-y-desinstalar-postgres)
  - [Funciones sacar y restaurar respaldos en postgres](#Funciones-sacar-y-restaurar-respaldos-en-postgres)
  - [Reto 7](#Reto-7)
- [9. Cierre del curso](#9-Cierre-del-curso)
  - [Cierre](#Cierre)

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



## Paso de parámetros y opciones



## Descargar información de Internet



## Reto 2



#  4. Condicionales
## Sentencias If/Else
## If Anidados
## Expresiones Condicionales
## Sentencias Case
## Reto 3
#  5. Iteración
## Arreglos
## Sentencia for loop
## Sentencia while loop
## Loop Anidados
## Break y continue
## Menú de Opciones
## Reto 4
#  6. Archivos
## Archivos y Directorios
## Escribir dentro de archivos
## Leer Archivos
## Operaciones Archivos
## Reto 5
#  7. Empaquetamiento
## Empaquetamiento TAR, GZIP y PBZIP 2
## Respaldo Empaquetado con clave
## Transferir información red
## Reto 6
#  8. Funciones
## Crear funciones y Paso de Argumentos
## Funciones de instalar y desinstalar postgres
## Funciones sacar y restaurar respaldos en postgres
## Reto 7
#  9. Cierre del curso
# Cierre
