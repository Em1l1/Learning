#! /bin/bash

os=('ubuntu' 'windows' 'kali')
os[3]='mac'   # Agrega un nuevo elemento a index al que se le asegna.

unset os[2] # elimina el elemento especificado.
echo "${os[@]}"
echo "${os[1]}"
echo "${!os[@]}" # Nuestra el index
echo "${#os[@]}" # Nuestra numericamente cuantos elementos.

string=asdfasdjfklsd
#echo"{string[@]}"
echo"{string[0]}"
#echo"{string[1]}"

#echo"{string[@]}"



