#!/bin/bash
# for loops

#for VARIABLE in 1 2 3 4 5 .. N
#do
#	command1
#	command2
#	commandN
#done
# or -------------------------------------

#for VARIABLE file1 file2 file3
#do
#	command1 on $VARIABLE
#	command2
#	commandN
#done
#OR----------------------------------------

#for OUTPUT in $(Linux-Or-Unix_Command_here)
#do
#	command1 on $OUTPUT
#	command2 on $OUTPUT
#	commandN
#done
#OR---------------------------------------
#for (( EXP1; EXP2; EXP3 ))
#do
#	command1
#	command2
#	command3
#done
echo ${BASH_VERSION}

#for i in {0..10..2}   # 1 2 3 4 5
for (( i=0; i<5; i++ ))
do
	echo $i
done
