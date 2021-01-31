#! /bin/bash
# while loops

n=1

while [ $n -le 2 ]
do
	echo "$n"
	(( n++ ))
	gnome-terminal &
done
