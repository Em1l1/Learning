# !/bin/bash
# Programa para ejemplificar el uso de Senttencias case
# Autor: Victoriano

opcion=""

echo "Ejemplo Sentencia Case"
read -p "Ingrese una opcion de la A - Z:" opcion
echo -e "\n"

case $opcion in 
  "A") echo -e "\nOperacion Guardar Archivo";;
  "B") echo "Operacion Eliminar Archivo";;
  [C-E]) echo "No esta implementada la oepracion";;
  "*") "Operacion Incorrecta"
esac

echo "Ud selecciono la opcion: $opcion"