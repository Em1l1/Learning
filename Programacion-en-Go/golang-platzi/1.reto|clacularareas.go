package main

import (
	"fmt"
	"math"
)

func main()  {
	// Rectangle
	var high = 5
	var width = 6
	var result = high * width
	fmt.Println("Rectangle area is:", result)
	// Trapezoid
	var baseA = 38.0
	var baseB = 18.0
	var high2 = 7.0
	var result2 = ((baseA + baseB) / 2.0) * high2
	fmt.Println("Trapezoid area is:", result2)
	// Circle
	var radio = 7.0
	var result3 = math.Pi * math.Pow(radio, 2)
	fmt.Println("Circle area is:", result3)
}
