#!/bin/bash
# for loops

#for command in ls pwd date
#do 
#	echo $command
#done

for command in ls pwd date
do
	echo "-----------$command--------------------"
	$command
	echo "---------------------------------------"
	echo
done

for item in *
do
	if [ -f $item ] # -d
	then
		echo $item
	fi
	done
