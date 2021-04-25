<h1>Terminal y Línea de Comandos 2018</h1>

<h3>Alberto Alcocer</h3>

<h1>Tabla de Contenido</h1>

- [1.Terminal y Línea de Comandos](#1terminal-y-línea-de-comandos)
  - [Qué es la terminal y para qué sirve](#qué-es-la-terminal-y-para-qué-sirve)
  - [Árbol de directorios y navegación](#árbol-de-directorios-y-navegación)
    - [Navegar entre directorios](#navegar-entre-directorios)
  - [Manipulación y modificación del árbol de directorios](#manipulación-y-modificación-del-árbol-de-directorios)
  - [Herramientas básicas](#herramientas-básicas)
  - [Variables y entorno](#variables-y-entorno)
  - [Streams](#streams)
  - [Procesos desde la terminal](#procesos-desde-la-terminal)
  - [Power Tools: Comandos poderosos de búsqueda](#power-tools-comandos-poderosos-de-búsqueda)
  - [Power Tools: curl, zip y tar](#power-tools-curl-zip-y-tar)
  - [Pipe](#pipe)
  - [Crontab: Una herramienta para automatizar tareas desde la terminal](#crontab-una-herramienta-para-automatizar-tareas-desde-la-terminal)
  - [Links](#links)
  - [Usuarios y Permisos](#usuarios-y-permisos)
  - [Qué sigue después de aprender a usar la terminal](#qué-sigue-después-de-aprender-a-usar-la-terminal)

# 1.Terminal y Línea de Comandos

## Qué es la terminal y para qué sirve

Bienvenido al curso de terminal y línea de comandos. En este curso aprenderás una serie de tips y hacks que te van a ayudar a manejar la terminal como si no existiera una interfaz gráfica. La línea de comandos te permite hacer de todo: configuraciones, editar texto, compilar código y utilizar las herramientas que existen dentro de tu sistema operativo.

En el curso estaremos utilizando la terminal de UNIX. Windows cada vez se acerca más a la capacidad de esta terminal, aunque todavía hay diferencias. Todos los comandos que se ejecuten aquí puedes buscarlos con el comando man y ver cuáles son los correspondientes, si estás utilizando Windows.

Aprender a utilizar la línea de comandos te ayuda a ahorrar un montón de tiempo y memoria, pues puedes hacer más sencillo tu trabajo y hacerlo más liviano sin ningún tipo de interfaz gráfica.

En la siguiente clase vamos a ver cómo navegar y conocer nuestro árbol de directorios desde la terminal.

```bash
ubuntu> sudo apt install imagemagick

# Ejecutas la aplicacion
cd /tmp/cats
find -E . -regex '.*(jpg|jpeg)' -exec convert "{}" -colorspace Gray "{}" \;
```

```bash
$ ls /usr/bin | wc -l
```

- [MineiToshio | CursosPlatzi](https://github.com/MineiToshio/CursosPlatzi/tree/master/Introducci%C3%B3n%20a%20Terminal%20y%20L%C3%ADnea%20de%20Comandos#uso-del-disco)

- [linea_de_comandos_Platzi.pdf](https://drive.google.com/file/d/14E5OjiFwT9_9GCJTQdKQNIiSd4qJw_zN/view?usp=sharing)

## Árbol de directorios y navegación

Lo principal que hacemos en la terminal es ejecutar comandos que con el tiempo iremos aprendiendo más de estos.
Con ls puedes listar un directorio, y ls tiene unas banderas que te permiten listar de ciertas formas: con l puedes listar hacia abajo y con lh listar de manera humana.

En UNIX es sencillo tener archivos que no salgan a la vista tan fácilmente. Si empezamos un archivo con un punto ls no lo va a mostrar. Para encontrar esos archivos podemos usar ls -lha, donde a quiere decir all (todos).

Para movernos podemos utilizar el comando cd, que significa change directory (cambiar directorio), que nos permitirá navegar entre archivos.

Recuerda que con … te vas al directorio padre, desde donde estés ubicado, y con ~ te vas al home.

**Tip:** Para limpiar la pantalla puedes hacer command l, o utilizar el comando clear.

### Navegar entre directorios

`ls` nos en lista normal
`ls -l` nos lista hacia abajo

```bash

ls -lt
ls -ltr
ls -lh
ls -lhS
ll -hSr

ls -lh
```
 escribe de forma que sea leible para el humano.

`pwd`: working directory
`cd`: cambiar entre directorios.
`ls -lha` listamente todo el contenido del directorio en una lista hacia abajo de una manera humana. Y si hay un archivo oculto que lo pueda ver.
`cd …` me pasa al nodo padre.
`cd ~`: regreso a mi home.

**ls – List**

listo en directorio actuales

`ls`

`ls -l `en forma de lista larga

`h` es legible humanamente
`l` listado largo

`-a` todos los archivos, incluso los que comienzan con punto (.).

`-A` Lista todos los ficheros en los directorios, excepto los que comienzan con punto . (.) y los que comienzan con doble punto (…).

`-F` indica tipo: / directorio, * ejecutable, @ enlace simbólico.

`-h` indicará el tamaño en KB, MB, etc.

`-l` listado en formato largo (o detallado).

`-S` clasifica los contenidos de los directorios por tamaños, con los ficheros más grandes en primer lugar.

`-r` invierte el orden de la salida.

`-R` Lista recursivamente los subdirectorios encontrados.

`-t` ordenar por fecha de última modificación.

`-u` ordenar por fecha de último acceso.

`-x` presenta los ficheros por columnas.

`-i` precede la salida con el número de i-node


## Manipulación y modificación del árbol de directorios

Ya vimos cómo navegar dentro del árbol de directorios. En esta clase vamos a ver cómo crearlos y modificarlos.

  - `mkdir:` crea un directorio
  - `touch:` crea un archivo. Si no existe el archivo lo va a crear, y si existe le cambia la fecha de modificación
  - `mv:` mueve un archivo, te ayuda a modificarlo
  - `rm:` elimina archivos o links, no funciona para eliminar un directorio, para esto necesitas un poco más
  - `rm -rf:` elimina un directorio recursivamente
  - `man:` es el manual de la terminal, puedes utilizarlo cuando tu quieras para entender qué hace un comando y sus banderas. Con espacio pasas una página, - con b te regresas una página y con q sales del manual.
  - `cp:` copia un archivo a otros directorios
  - `pushd y popd:` te permiten navegar entre dos directorios fácilmente.

**pushd y popd**

moverme rápido a un directorio especifico

pushd [directorio a guardar]
popd

- popd de me regresa a directorio guardado
ej.

```bash
pushd .
pushd /home/user/Downloads

popd
```

Pushd: Nos permite crear una listado con directorios, para luego poder navegar entre ellos de manera facil y rápida.

```bash
pushd Directorio1
pushd Directorio2
pushd Directorio3
```

Luego para ver la lista creada y numerada usaremos el comando `dirs -v`

Para acceder a uno de los directorios de la lista, se debe usar pushd y signo - seguido del Número de la lista. Ejemplo: `pushd -2`, en este caso nos llevará al Directorio2.

> La numeración de la lista avanza/cámbia, en cada acceso con pushd, por eso siempre debemos usar antes dirs -v para saber con exactitud al directorio al que queremos acceder).

**Popd:** Nos permite eliminar un directorio de la lista. popd -NúmeroLista ejemplo: `popd -2`. o para eliminar toda la lista podemos usar `dirs -c`.

## Herramientas básicas

En esta clase vamos a ver las herramientas que más se utilizan en la línea de comandos.

  - `more:` te da las primeras líneas de lo que hay en el archivo. Para ver la siguiente página hacemos lo mismo que con el man, utilizamos espacio para
  - `cat:` imprime todo el contenido de un archivo en pantalla.
  - `tail:` te muestra las últimas 10 líneas de un archivo. Puedes agregarle un número con el - y pedir más que 10 líneas.
   
Ya no solo navegamos en el árbol de nodos sino que podemos modificar y ver qué hay dentro de los archivos. En la siguiente clase veremos temas más técnicos como variables y algunas formas de utilizar de forma más cómoda la terminal.

## Variables y entorno

Cada vez que abrimos la terminal en realidad se está ejecutando un programa que se llama .bash_profile que es una serie de comandos que da de alta unas variables.

Todos los ejecutables tienen una serie de permisos. Cada vez que tengo un nuevo programa tengo que asegurarme

  - `alias:` ejecuta una serie de comandos que le pasas antes, funciona para crear variables.

## Streams

El diagrama que ves en pantalla consiste en un input y en un output. Nosotros pasamos unos datos que son procesados y que luego se devuelven de alguna forma. Cuando nosotros enviamos datos, eso es STDIN (standard input), después de eso se ejecuta un script y finalmente hay dos opciones de respuesta STDOUT (standard output) o STDERR (standard error). Es importante entender esto, sobre todo porque es fundamental saber cuándo estás teniendo un error dentro de un proceso.

En el ejercicio verás cómo corre un programa en php que identifica cuáles números son y no son múltiplos del número que ingresas. Ahí verás dos tipos de salida: STDOUT que arrojará los múltiplos y STDERR que arrojará los números que no son múltiplos del número que ingreses. Cada salida se podrá enviar a un archivo diferente y se podrá concatenar con las respuestas si ingresas un número nuevo. Además veremos cómo enviar los dos tipos de salida al mismo lugar.

Ejecutar el archivo `.php`

![](https://i.ibb.co/SvH3dHf/terminal.jpg)

Los streams son una forma de enviar datos a un comando y recibir un output de salida.

- `STDIN Standard Input.` Parametro de entrada.
- `STDOUT Standard Output.` Es la salida por defecto.
- `STDERR Standard Error.` Es la salida en caso suceda un error.

```php
<?php 
echo "número: ";
$d = trim(fread(STDIN, 100));
$i = 0;

while(true) {
  if(++$i % $d == 0) {
    fwrite(STDOUT, sprintf("El %d es múltiplo de %d.\n", $i, $d));
  } else {
    fwrite(STDERR,
    sprintf("Error, El %d NO es múltiplo de %d \n", $i, $d));
  }
  sleep(1);
}
?>
```

```bash
php 1-streams.php 1> salida 2>error
```

Se guarda la salida en un archivo salida y el error en un archivo error
Si se usa `>>` en vez de `>`, entonces el archivo se concatena en vez de sobreescribirse

```bash
php 1-streams.php 1> salida 2>&1
```

El error y el output aparecen en el mismo archivo

`ejecutable > archivo`: guarda las líneas en el archivo. En caso de existir previamente el archivo, borra todo el contenido y escribe las nuevas líneas.

`ejecutable 1> archivoA 2> archivoB` : el STDOUT se guarda en archivoA y el STDERR en archivoB

`ejecutable >> archivo` : concatena el Stream de salida con el contenido de archivo

`ejecutable > archivo 2>&1` : guarda el STDERR donde sea que esté guardando el STDOUT

`ejecutable < archivo` : envía el archivo al ejecutable.

## Procesos desde la terminal



## Power Tools: Comandos poderosos de búsqueda



## Power Tools: curl, zip y tar



## Pipe



## Crontab: Una herramienta para automatizar tareas desde la terminal



## Links



## Usuarios y Permisos



## Qué sigue después de aprender a usar la terminal


