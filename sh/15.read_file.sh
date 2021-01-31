#! /bin/bash
#while loops

#cat README.md | 
while IFS=' ' read -r line # p
do
	echo $line		#$p
done < README.md
