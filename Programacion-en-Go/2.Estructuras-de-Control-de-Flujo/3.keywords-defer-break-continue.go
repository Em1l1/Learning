package main

import "fmt"

func main() {
	// defer -> un defer por funcion
	defer fmt.Println("Hola")
	fmt.Println("Mundo")

	// Continue y break
	for i:= 0; i < 10; i++ {
		fmt.Println(i)

		// continue
		if i == 2 {
			fmt.Println("Es 2")
			continue
		}

		// Breack
		if i == 8 {
			fmt.Println("Break")
			break
		}
	}
}