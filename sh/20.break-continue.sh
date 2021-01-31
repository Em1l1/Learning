#!/bin/bash

for (( i=1 ; i<=10 ; i++ ))
do
#	if [ $i -gt 5]
	if [ $i -eq 3 -o $i -eq 6 ]
	then
		#break
		continue
	fi
	echo "$i"
done
