#!/bin/bash

var=31
readonly var

var=50

echo "var => $var"

hello() {
	echo "Hello world"
}

hello

readonly -f hello

hello() {
	echo "Hello world again"
}

readonly -f hello
readonly -f

