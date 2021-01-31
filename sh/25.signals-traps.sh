#!/bin/bash
# Signals and Traps


#trap "echo Exit command is detected" SIGKILL

file=/home/Documents/Learning_Platzi/Bash_sell/base.txt
trap "rm -f $file && file delete; exit" 0 2 15
 
echo "pid is $$"
while (( COUNT < 10 ))
do
	sleep 10
	(( COUNT ++ ))
	echo $COUNT
done
exit 0



echo "Hello World"

exit 0
