#!/bin/bash #-x
# Debug

# bash -x ./sh/26.debug.sh

set -x

file=/home/test/Desktop/file.txt

set +x
trap "rm -f $file && echo file deleted; exit" 0 2 15

echo "pid is $$"
while (( COUNT ))
do
	sleep 10
	(( COUNT ++ ))
	echo $COUNT
done 
exit 0
