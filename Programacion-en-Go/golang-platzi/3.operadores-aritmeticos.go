package main

import "fmt"

func main() {
		const baseCuadrado = 10
	areaCuadrado := baseCuadrado * baseCuadrado

	fmt.Println("El area del cuadrado es: ", areaCuadrado)

	x := 10
	y := 50

	// suma
	result := x + y
	fmt.Println("La suma es: ", result)

	// Resta
	result = y - x
	fmt.Println("La resta es: ", result)

	// Multiplicacion
	result = x * y
	fmt.Println("La multiplicacion es: ", result)

	// Division
	result = y / x
	fmt.Println("La division es: ", result)

	// Modulo
	result = y % x
	fmt.Println("El Modulo es: ", result)

	// Incremental 
	x++
	fmt.Println("Incremento es: ", x)

	// Decremento
	x--
	fmt.Println("Decremento: ", x)

	// Reto 
	// Calcular el area de un triangulo y trapecio. Y el radio de un circulo
}