#!/bin/bash
# Programa para revisar como ejecutar comandos dentro de un programa y almacenar una variable para us posterior utilizarcion
# Autor: Victor Juarez

ubicacionActual=`pwd`
infoKernel=$(uname -a)

echo "La ubicacion actual es la siguiente: $ubicacionActual"
echo "Informacion del Kernel: $infoKernel"

