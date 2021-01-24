#! /bin/bash

echo -e "Enter the name of the file : \c"
read file_name

# -e documents
# -d directory

if [ -e $file_name ]
then 
	echo "$file_name not empty"
#elif [-d  $file_name]
#	echo "$file_naem found"
else
	echo "$file_name empy"
fi
