#! /bin/bash

## Form 1, enter input

#echo "Enter name : "
#read name1 name2 name3
#echo "Names : $name1 , $name2, $name3"
#echo "Enter name : $name"

## form 2, Enter input

#read -p 'username : ' user_var
#read -sp 'password : ' pass_var
#echo
#echo "username : $user_var"
#echo "password : $pass_var"

echo "Enter names : "
#read -a names
#echo "Names : ${names[0]}, ${names[1]}"
read
echo "Name : $REPLY"
