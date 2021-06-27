#!/usr/bin/env bash

#  Program para revisar la declaracion e la version

opcion=0
nombre=Marco

echo "Opcion: $opcion y Nombre: $nombre"

# Exportar la variable nombre para que este disponible a los demas procesos
export nombre

# Llamar script, para recupear variable
./3-variables_2.sh

