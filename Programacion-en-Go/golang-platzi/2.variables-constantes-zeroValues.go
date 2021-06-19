package main

import "fmt"

func main() {
	// Declaracion de Constantes
	const pi float64 = 3.14
	const pi2 = 3.15

	fmt.Println("pi", pi)
	fmt.Println("pi2", pi2)

	// Declaracion de Variables enteras
	base := 12									// Declaramos la varialbe y especificamos  el tipo de dato
	var altura int = 14					// Declaraomos la variable  con valor
	var area int 								// Declaramos la varaible sin valor

	fmt.Println(base, altura, area)

	// Zero values
	var a int
	var b float64
	var c string
	var d bool

	fmt.Println(a, b, c, d)
	
	// Area cuadrado

	const baseCuadrado = 10
	areaCuadrado := baseCuadrado * baseCuadrado

	fmt.Println("El area del cuadrado es: ", areaCuadrado)
}