package main 

import  "fmt"

func normalFunction() {
	fmt.Println("hola")
}

func normalFunctionstring(message string) {
	fmt.Println(message)
}

// Funcion con varios argumentos
func tripleArgumento(a, b int, c string) {
	fmt.Println(a, b, c)
}

// retorna una operacion
func returnValue(a int) int {
	return a * 2
}

// Doble return
func doubleReturn(a int) (c, d int) {
	return a, a*2
}

func main() {
	normalFunction()
	normalFunctionstring("Hola mundo")
	tripleArgumento(1, 2, "Hola")
	value := returnValue(2)
	fmt.Println("Value: ", value)

	// Retornando varios valores
	value1, value2 := doubleReturn(2)
	fmt.Println("Value 1: ", value1, "Value2: ", value2)

	// Omitir una variable
	value2, _ = doubleReturn(2)
	fmt.Println("Value2: ", value2)
}