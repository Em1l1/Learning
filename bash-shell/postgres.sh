! /bin/bash
 
op=0
flag=0

while :
do
  if [ $flag == 0 ]; then
      for ((i=0;i<4;i++))
        do
        clear

        echo "█ █ █ █ █ █ █ █ █ █ █ █ █ █"
        echo " █ █      CARGANDO     █ █ "
        echo "█ █       PROGRAMA      █ █"
        echo " █ █ █ █ █ █ █ █ █ █ █ █ █ " 

        sleep 0.4
        clear

        echo " █ █ █ █ █ █ █ █ █ █ █ █ █ "
        echo "█ █       CARGANDO      █ █"
        echo " █ █      PROGRAMA     █ █ "
        echo "█ █ █ █ █ █ █ █ █ █ █ █ █ █" 

        sleep 0.4
        clear
      done
      echo "Acción : YYYY/MM/DD - HH:mm -> usuario" >> log.txt
      flag=1
    else
        clear
        echo "████████████████████████████████████████"
        echo "█ █ █ █ █ █  MENU PRINCIPAL  █ █ █ █ █ █"
        echo "████████████████████████████████████████"
        echo "█1. Instlar Postgres                   █"
        echo "█2. Desintalar Postgres                █"
        echo "█3. Sacar un respaldo                  █"
        echo "█4. Restaurar respaldo                 █"
        echo "█5. Salir                              █"
        echo "████████████████████████████████████████"
        echo ""
        read -n1 -p "Ingrese una opcion [1-5]: " op

        echo -e "\n"
        
        case $op in
            1)
              #mensaje de la accion
              clear
              echo " Instalando ."  
              sleep 0.5
              clear
              echo " Instalando .."
              sleep 0.5
              clear
              echo " Instalando ..."
              sleep 0.5
              clear

              #escribiendo informacion en log
              echo "Instalación : $(date +'%Y/%m/%d - %H:%M') -> $(whoami)" >> log.txt
              ;;
            2)
              #mensaje de la accion
              clear
              echo " Desinstalando ."  
              sleep 0.5
              clear
              echo " Desinstalando .."
              sleep 0.5
              clear
              echo " Desinstalando ..."
              sleep 0.5
              clear

              #escribiendo informacion en log
              echo "Desintalación : $(date +'%Y/%m/%d - %H:%M') -> $(whoami)" >> log.txt
              ;;
            3)
              #mensaje de la accion
              clear
              echo " Respaldando ."  
              sleep 0.5
              clear
              echo " Respaldando .."
              sleep 0.5
              clear
              echo " Respaldando ..."
              sleep 0.5
              clear

              #escribiendo informacion en log
              echo "Respaldando : $(date +'%Y/%m/%d - %H:%M') -> $(whoami)" >> log.txt
              ;;
            4)
              #mensaje de la accion
              clear
              echo " Restaurando ."  
              sleep 0.5
              clear
              echo " Restaurando .."
              sleep 0.5
              clear
              echo " Restaurando ..."
              sleep 0.5
              clear

              #escribiendo informacion en log
              echo "Restaurando : $(date +'%Y/%m/%d - %H:%M') -> $(whoami)" >> log.txt
              ;;
            5)
              echo "    Hasta Luego"
              sleep 2
              break;
              ;;
        esac
    fi
done