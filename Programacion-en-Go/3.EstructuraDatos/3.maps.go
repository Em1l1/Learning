package main

import "fmt"

func main() {
	m := make(map[string]int)

	m["Jose"] = 15
	m["Pepito"] = 20

	fmt.Println(m)

	// Recorrido
	for i, v := range m {
		fmt.Println(i, v)
	}
	
}