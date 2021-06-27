
#!/bin/bash
# Programa para ejemplifcar como capturar la informacion del usuario utilizando el comando echo, read y $REPLY
# Autor: Victor Juarez @V-Juarez

option=0
backupName-""

echo "Programa Uitilidades Postgres"
read -p "Ingresa una opcion: " option
read -p "Ingresa el nombre del archivo del backup:" backupName
echo "Opcion:$option, backupName:$backupName"
