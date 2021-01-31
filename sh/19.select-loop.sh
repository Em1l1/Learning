#!/bin/bash
# select loop

#select varName in list
#do 
#	command1
#	command2
#	........
#	.......
#	commandN
#done

select name in mark john tom ben
do 
	#echo "$name selected"
	case $name in 
		mark)
			echo mark selected
			;;
		john)
			echo john selected
			;;
		tom)
			echo tom selected
			;;
		ben)
			echo ben selected
			;;
		*)
			echo "Error please provide the no between 1..4"
	esac
done
