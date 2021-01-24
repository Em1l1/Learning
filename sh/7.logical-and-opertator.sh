#! /bin/bash

age=13

# logical and
#if [[ "$age" -gt 18 && "$age" -lt 30 ]]
#then
#	echo "valid age"
#else
#echo "age not valid"
#fi

#Logical or
#if [[ "$age" -eq 18 || "$age" -eq 30 ]]
if [ "$age" -eq 18 ] || [ "$age" -eq 30 ]
then
	echo "valid age"
else
	echo "age not valid"
fi
