# Programación en Bash Shell

### Marco Antonio Toscano Freire

# Tabla de Contenido

- [1. Bienvenida e Introducción](#1.-Bienvenida-e-Introducción)
  - [Introducción y Bienvenida al curso](#Introducción-y-Bienvenida-al-curso)
  - [Componentes de Linux, Tipos de Shell y Comandos de información](#Componentes-de-Linux-Tipos-de-Shell-y-Comandos-de-información)
  - [Bash scripting](#Bash-scripting)
  - [Crear nuestro primer Script](#Crear-nuestro-primer-Script)
  - [Ejecutar nuestro script con un nombre único](#Ejecutar-nuestro-script-con-un-nombre-único)
- [2. Programación Shell Básica](#2.-Programación-Shell-Básica)
  - [Declaración de Variables y Alcance en Bash Shell](#Declaración-de-Variables-y-Alcance-en-Bash-Shell)
  - [Tipos de Operadores](#Tipos-de-Operadores)
  - [Script con Argumentos](#Script-con-Argumentos)
  - [Sustitución de Comandos en variables](#Sustitución-de-Comandos-en-variables)
  - [Debug en Script](#Debug-en-Script)
  - [Reto 1](#Reto-1)
- [3. Script Interactivos](#3.-Script-Interactivos)
  - [Capturar información usuario](#Capturar-información-usuario)
  - [Expresiones Regulares](#Expresiones-Regulares)
  - [Validar información](#Validar-información)
  - [Paso de parámetros y opciones](#Paso-de-parámetros-y-opciones)
  - [Descargar información de Internet](#Descargar-información-de-Internet)
  - [Reto 2](#Reto-2)
- [4. Condicionales](#4.-Condicionales)
  - [Sentencias If/Else](#Sentencias-If-Else)
  - [If Anidados](#If-Anidados)
  - [Expresiones Condicionales](#Expresiones-Condicionales)
  - [Sentencias Case](#Sentencias-Case)
  - [Reto 3](#Reto-3)
- [5. Iteración](#5.-Iteración)
  - [Arreglos](#Arreglos)
  - [Sentencia for loop](#Sentencia-for-loop)
  - [Sentencia while loop](#Sentencia-while-loop)
  - [Loop Anidados](#Loop-Anidados)
  - [Break y continue](#Break-y-continue)
  - [Menú de Opciones](#Menú-de-Opciones)
  - [Reto 4](#Reto-4)
- [6. Archivos](#6.-Archivos)
  - [Archivos y Directorios](#Archivos-y-Directorios)
  - [Escribir dentro de archivos](#Escribir-dentro-de-archivos)
  - [Leer Archivos](#Leer-Archivos)
  - [Operaciones Archivos](#Operaciones-Archivos)
  - [Reto 5](#Reto-5)
- [7. Empaquetamiento](#7.-Empaquetamiento)
  - [Empaquetamiento TAR, GZIP y PBZIP 2](#Empaquetamiento-TAR-GZIP-y-PBZIP-2)
  - [Respaldo Empaquetado con clave](#Respaldo-Empaquetado-con-clave)
  - [Transferir información red](#Transferir-información-red)
  - [Reto 6](#Reto-6)
- [8. Funciones](#8.-Funciones)
  - [Crear funciones y Paso de Argumentos](#Crear-funciones-y-Paso-de-Argumentos)
  - [Funciones de instalar y desinstalar postgres](#Funciones-de-instalar-y-desinstalar-postgres)
  - [Funciones sacar y restaurar respaldos en postgres](#Funciones-sacar-y-restaurar-respaldos-en-postgres)
  - [Reto 7](#Reto-7)
- [9. Cierre del curso](#9.-Cierre-del-curso)
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
  ## Bash scripting



  ## Crear nuestro primer Script



  ## Ejecutar nuestro script con un nombre único



# 2. Programación Shell Básica
  ## Declaración de Variables y Alcance en Bash Shell



  ## Tipos de Operadores



  ## Script con Argumentos



  ## Sustitución de Comandos en variables



  ## Debug en Script



  ## Reto 1



3. Script Interactivos
Capturar información usuario
Expresiones Regulares
Validar información
Paso de parámetros y opciones
Descargar información de Internet
Reto 2
4. Condicionales
Sentencias If/Else
If Anidados
Expresiones Condicionales
Sentencias Case
Reto 3
5. Iteración
Arreglos
Sentencia for loop
Sentencia while loop
Loop Anidados
Break y continue
Menú de Opciones
Reto 4
6. Archivos
Archivos y Directorios
Escribir dentro de archivos
Leer Archivos
Operaciones Archivos
Reto 5
7. Empaquetamiento
Empaquetamiento TAR, GZIP y PBZIP 2
Respaldo Empaquetado con clave
Transferir información red
Reto 6
8. Funciones
Crear funciones y Paso de Argumentos
Funciones de instalar y desinstalar postgres
Funciones sacar y restaurar respaldos en postgres
Reto 7
9. Cierre del curso
Cierre
