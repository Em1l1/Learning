#!/bin/bash
# Programa para ejemplifcar como capturar la informacion del usuario utilizando el comando echo, read y $REPLY
# Autor: Victor Juarez @V-Juarez

option=0
backupName=""

echo "Programa Utilidaes Postgres"
echo -n "Ingrese una opcion:"
read
option=$REPLY
echo -n "Ingrese el nombre del archivo del backup:"
read
backupName=$REPLY
echo "Opcion:$option, backupName:$backupName"

