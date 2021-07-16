<h1>Programación en Go</h1>

<h3>Osmandi Gómez</h3

<h1>Tabla de Contenido</h1>

- [1. Hola mundo en Go](#1-hola-mundo-en-go)
  - [Introducción al Curso de Golang](#introducción-al-curso-de-golang)
  - [¿Qué es, por qué y quienes utilizan Go?](#qué-es-por-qué-y-quienes-utilizan-go)
  - [Instalar Go en Linux](#instalar-go-en-linux)
  - [Instalar Go en Windows](#instalar-go-en-windows)
    - [Descarga de Go](#descarga-de-go)
    - [Instalación](#instalación)
    - [Pasos finales](#pasos-finales)
  - [Instalar Go en Mac](#instalar-go-en-mac)
    - [Instalar Go en Mac](#instalar-go-en-mac-1)
    - [Instalación](#instalación-1)
    - [Pasos Finales](#pasos-finales-1)
  - [Nuestras primeras líneas de código en Go](#nuestras-primeras-líneas-de-código-en-go)
- [2. Variables, funciones y documentación](#2-variables-funciones-y-documentación)
  - [Variables, constantes y zero values](#variables-constantes-y-zero-values)
  - [Operadores aritméticos](#operadores-aritméticos)
  - [Tipos de datos primitivos](#tipos-de-datos-primitivos)
  - [Paquete fmt: algo más que imprimir en consola](#paquete-fmt-algo-más-que-imprimir-en-consola)
    - [Tipos de Print:](#tipos-de-print)
    - [Imprimir el tipo de dato:](#imprimir-el-tipo-de-dato)
  - [Uso de funciones](#uso-de-funciones)
  - [Go doc: La forma de ver documentación](#go-doc-la-forma-de-ver-documentación)
- [3. Estructuras de control de flujo y condicionales](#3-estructuras-de-control-de-flujo-y-condicionales)
  - [El poder de los ciclos en Golang: for, for while y for forever](#el-poder-de-los-ciclos-en-golang-for-for-while-y-for-forever)
  - [Operadores lógicos y de comparación](#operadores-lógicos-y-de-comparación)
  - [El condicional if](#el-condicional-if)
  - [Múltiple condiciones anidadas con Switch](#múltiple-condiciones-anidadas-con-switch)
  - [El uso de los keywords defer, break y continue](#el-uso-de-los-keywords-defer-break-y-continue)
- [4. Estructuras de datos básicas](#4-estructuras-de-datos-básicas)
  - [Arrays y Slices](#arrays-y-slices)
  - [Recorrido de Slices con Range](#recorrido-de-slices-con-range)
  - [Llave valor con Maps](#llave-valor-con-maps)
  - [Structs: La forma de hacer clases en Go](#structs-la-forma-de-hacer-clases-en-go)
  - [Modificadores de acceso en funciones y Structs](#modificadores-de-acceso-en-funciones-y-structs)
- [5. Métodos e interfaces](#5-métodos-e-interfaces)
  - [Structs y Punteros](#structs-y-punteros)
  - [Stringers: personalizar el output de Structs](#stringers-personalizar-el-output-de-structs)
  - [Interfaces y listas de interfaces](#interfaces-y-listas-de-interfaces)
- [6. Concurrencia y Channels](#6-concurrencia-y-channels)
  - [¿Qué es la concurrencia?](#qué-es-la-concurrencia)
  - [Primer contacto con las Goroutines](#primer-contacto-con-las-goroutines)
  - [Channels: La forma de organizar las goroutines](#channels-la-forma-de-organizar-las-goroutines)
  - [Range, Close y Select en channels](#range-close-y-select-en-channels)
- [7. Manejo de paquetes y Go Modules](#7-manejo-de-paquetes-y-go-modules)
  - [Go get: El manejador de paquetes](#go-get-el-manejador-de-paquetes)
  - [Go modules: Ir más allá del GoPath con Echo](#go-modules-ir-más-allá-del-gopath-con-echo)
  - [Modificando módulos con Go](#modificando-módulos-con-go)
- [8. Despedida del curso](#8-despedida-del-curso)
  - [Despedida](#despedida)
- [9. Bonus](#9-bonus)
  - [Cheat Sheet Go](#cheat-sheet-go)
  - [Data Science con Go](#data-science-con-go)
  - [Librerías para desarrollo web con Go](#librerías-para-desarrollo-web-con-go)

# 1. Hola mundo en Go

## Introducción al Curso de Golang

- [slides-programacion-go.pdf](https://drive.google.com/file/d/1OIblB8MM3oDtWsY0w2aYTxU-oxt_4wXK/view?usp=sharing)

## ¿Qué es, por qué y quienes utilizan Go?

**Qué es?**

  - Lenguaje compilado (se recopilan los códigos) y estáticamente tipado (se debe indicar el tipo de variable o constante para que guarde algún valor en él)
  - Maneja procesos pesados, es potente, pero amigable.
  - Se utiliza Go/Goland para nombrarlo.
  - Los programadores de este lenguaje se hacen llamar gophers.

**¿Porqué Go/Goland?**

  - Es veloz
  - Tiene alto rendimiento para tareas pesadas
  - Maneja soporte nativo por concurrencia
  - Un Gopher puede ganar $74k al año
  - Facilita ajustar sintaxis de forma nativa
  - Comunidad receptiva, contribuye y apoya.

**Go / Golang:**

  - Compilado y tipado estático
  - Potencia de C y sintaxis amigable como Python.
  - Gran velocidad de compilación.
  - Alto rendimiento (utiliza todos los cores)
  - Soporte nativo para concurrencia.

**¿Dónde se usa?**

  - Mercado Libre
  - Twich
  - Twitter
  - Uber
  - Docker y Kubernetes

- [Gopherize.me - A Gopher pic that's as unique as you](https://gopherize.me/)
- [Go's New Brand - The Go Blog](https://blog.golang.org/go-brand)
- [Go logo design process - YouTube](https://youtu.be/V4t-ymImW6c)
- [Stack Overflow Developer Survey 2020](https://insights.stackoverflow.com/survey/2020)
- [GoUsers · golang/go Wiki · GitHub](https://github.com/golang/go/wiki/GoUsers)

## Instalar Go en Linux


- [Downloads - The Go Programming Language](https://golang.org/dl/)

colocar o en el `.bashrc` o el `.zshrc` pero si no quieres complicarte lo puedes hacer en el `.profile`

``` GO
# Go Path
export GOPATH=$HOME/go
export GOBIN=$GOPATH/bin
export GOROOT=/usr/local/go

export PATH=$PATH:$GOBIN:$GOROOT/bin
```

**Resumen**

1. Descargar la ultima versión de go desde su pagina oficial https://golang.org/dl/

2. Descomprimir el archivo `tar.gz `en el directorio `/usr/local`

3. En home modificar el archivo `.bashrc` con visual studio code o cualquier otro editor de texto. Añadiremos las siguientes líneas al final del archivo:

``` GO
export GOPATH=$HOME/go
export GOBIN=$GOPATH/bin
export GOROOT=/usr/local/go

export PATH=$PATH:$GOBIN:$GOROOT/bin
```

  nota: `$HOME= /home/nombre-del-usuario`

4. para ejecutar los cambios realizados usa `. .bashrc` en el home o también funciona abrir una nueva terminal

5. verificar que go este funcionando correctamente con `go version`

6. en nuestro home crear la carpeta go y dentro de estas las subcarpetas `bin pkg src`

## Instalar Go en Windows

Para desarrollo de Go en Windows te recomendaría que uses WSL (Windows Subsystem Linux) ya que Go tiene un mejor desempeño en Linux que en el mismo Windows. El proceso de instalación son los mismos pasos que en el de Linux.

Sin embargo, igualmente te compartiré cómo instalarlo en este Windows.

### Descarga de Go

El primer paso es descargar Go para windows desde este [enlace](https://golang.org/dl/)eligiendo la opción Microsoft Windows.

### Instalación

Al archivo que descargaste, solo debes ejecutarlo e iniciar la instalación. Por defecto, éste se instalaría en C:\Go.

Una vez instalado, entra a la carpeta donde instalaste Go y dentro crea las siguientes tres carpetas: bin, pkg y src

El paso siguiente es crear las variables de entorno GOPATH y GOBIN.

En cuanto al GOBIN, debes agregarlo también al Path para que así cuando instales CLIs (Command Line Interface) de Go éstas puedan ejecutarse en cualquier parte de la terminal.

### Pasos finales

Una vez hayas ejecutado los pasos anteriores, solo debes abrir la consola de tu Windows, puede ser CMD o PowerShell. Y colocal el siguiente comando: go version

Si imprime la versión de Go, significa que la instalación ha sido exitosa.

El paso final es que instales tu editor de código favorito, en el curso estaremos usando [VS Code](https://code.visualstudio.com/).

¡Y listo! Ya estamos listos(as) para empezar.

## Instalar Go en Mac

### Instalar Go en Mac
El proceso de instalación de Go en Mac es muy similar al proceso de instalación en Linux. Pero, a diferencia que en Linux, en Mac el paquete Go suele estar muy actualizado respecto a la última versión estable.

### Instalación

**Método 1:**

Para este caso, usaremos el manejador de paquetes 

```bash
brew
```
 que es muy popular para la programación en macOS.

Para instalar Go, solo debes ingresar en la terminal el siguiente comando 

``` BASH
brew install golang
```

**Método 2:**

Debes irte a la página de [descarga de Go](https://golang.org/dl/), y seleccionar macOS.

Una vez descargado el paquete, debes abrirlo y luedo de seguir los pasos del asistente instalarás Go en tu mac que por defecto se instalará en la siguiente ruta `/usr/local/go`

Si todo ha salido bien, al abrir una terminal y ejecutar 

``` BASH
go version 
```

debería imprimirte en consola la versión de Go que acabas de instalar.

### Pasos Finales

Una vez tengas instalado Go, el paso siguiente es crear la carpeta go, preferiblemente en tu $HOME.

Una vez creada, debes igualmente crear dentro de ella las siguientes tres carpetas: pkg, src y bin.

Para finalizar, el paso siguiente es crear las variables de entorno. Esto dependerá mucho de cuál shell estés utilizando. En el curso estaremos usando Bash Shell, en este caso abrimos el archivo `~/.bash_profile` y allí escribimos lo siguiente al final del archivo:

``` GO
export GOPATH=$HOME/go
export GOBIN=$GOPATH/bin
export PATH=$PATH:$GOBIN
```

El paso final es que instales tu editor de código favorito, en el curso estaremos usando VS Code.

¡Y listo! Ya estamos listos(as) para empezar.

## Nuestras primeras líneas de código en Go

```Go
package main    // NOmbre del archivo de la carpeta main.

import "fmt"

func main() {
	fmt.Println("Hello, World")
}
```

Compilar el codigo
```BASH
go build src/main.go
```

Ejecutar sin Compilar
```BASH
go run src.main.go
```

- [GitHub - osmandi/curso_golang_platzi: Código del Curso de programación básica en Go en Platzi](https://github.com/osmandi/curso_golang_platzi)

# 2. Variables, funciones y documentación

## Variables, constantes y zero values

```Go
// Go
func main() {
	//Declaracion de constantes
	const pi float64 = 3.14
	const pi2 = 3.16

	fmt.Println("Pi:", pi)
	fmt.Println("Pi2:", pi2)

	//Declaracion de varaibles
	base := 12          //Primera forma
	var altura int = 14 //Segunda forma
	var area int        //Go no compila si las variables no son usadas

	fmt.Println(base, altura, area)

	//Zero values
	//Go asigna vaalores a variables vacías
	var a int
	var b float64
	var c string
	var d bool

	fmt.Println(a, b, c, d)

	//Ejercicio
	//Calcular el áera del cuadrado
	const baseCuadrado = 10
	areaCuadrado := baseCuadrado * baseCuadrado

	fmt.Println("El área del cuadrado es:", areaCuadrado)
}
```

Zero values: valores por defecto que toman las variables al ser declaradas pero sin asignación de valor inicial.

```bash
int: 0
float: 0
string: “” (empty string)
bool: false
```

constants
const <name> <type> = <value>

variables
var <name> <type> = <value>
or
<name> <type> := <value>

Zero values
Default values, not null, when no values assigned to variables nor constants.

## Operadores aritméticos

```Go
// Go
package main

import "fmt"

func main()  {

	/* Retos
	Calcular el área de:
	Rectángulo
	Trapecio
	Círculo
	*/

	/* Aŕea del Rectángulo
		Fórmula = b*h
	*/
	baseRectangulo := 6
	alturaRectangulo := 10

	fmt.Println("Área Rectángulo:",baseRectangulo*alturaRectangulo)

	/* Aŕea del Trapecio
		Fórmula = h * a+b/2
	*/
	alturaTrapecio := 5
	aTrapecio := 3
	bTrapecio := 8
	areaTrapecio := alturaTrapecio * (aTrapecio+bTrapecio)/2
	fmt.Println("Área Trapecio:",areaTrapecio)

	/* Aŕea del Círculo 
		Fórmula = pi * r**2
	*/
	pi := 3.1416
	radioCirculo := 2
	areaCirculo := pi * (float64(radioCirculo)*float64(radioCirculo))
	fmt.Println("Área Círculo:",areaCirculo)
}
```

## Tipos de datos primitivos

  - `int8/16/32/64:` indica el tipo de dato “int” con signo, y además el tamaño del dato.
  - `uint8/16/32/64:` indica el tipo de dato “int” pero sin signo(solo positivos) y además el tamaño máximo del dato
  - `int / uint :` toma el tamaño de bits en el que está basado el procesador (con signo / sin signo)
  - `float32:` 32 bits con signo
  - `float64:` 64 bits con signo
  - `string:` se deben declarar con comillas dobles “”
  - `bool:` true o false
WOW
  - `complex64:` números complejos (real e imaginario float32)
  - `complex128:` números complejos (real e imaginario float64)

Ejemplo de implementación de la mayoría de tipos:

```Go
// Go
//Data Types
	var shortInt int8 = 3
	var longInt int64 = 2313212113234256876
	var shortFloat float32 = 3.1
	var longFloat float64 = 3.153465212456432145668723312
	var text string = "string"
	var boolean bool = true
	var complex complex128 = 10 + 8i
```

## Paquete fmt: algo más que imprimir en consola


**fmt**
El paquete fmt es el que se encarga de administrar los inputs y outputs de la terminal.

### Tipos de Print:

- `Println:` Es un print normal con un salto de linea al final. Ejemplo:

``` Go
fmt.Println("Hola Mundo")
```

- `Printf:` Es un print al cual le puedes especificar el tipo de objeto que le vas a dar. Ejemplo:

``` Go
fmt.Printf("%s tiene más de %d cursos\n", nombre, cursos)
```

- `Sprintf:` No imprime nada en consola, simplemente lo guarda como un String. Ejemplo de uso:

``` Go
var message string = fmt.Sprintf("%v tiene más de %v cursos\n", nombre, cursos)

fmt.Println(message)
```
### Imprimir el tipo de dato:

Con este paquete podemos imprimir en consola el tipo de dato de variables o constantes. Ejemplo de uso:

``` GO
package main

import "fmt"

func main() {

	const nombre string = "UltiRequiem"

	fmt.Printf("La variable 'nombre' es de tipo : %T\n", nombre)
}
```
- [fmt - The Go Programming Language](https://golang.org/pkg/fmt/)

## Uso de funciones

Ejemplo de funciones:
```Go

package main

import "fmt"

func firstFunction(message string) {
	fmt.Println(message)
}

func threeArguments(first, second int, third string) {
	fmt.Printf("Two numbers: %d and %d. One string: %s\n", first, second, third)
}

func returningFunction(number int) int {
	return number * 2
}

func doubleReturn(number int) (c, d int) {
	return number, number * 2
}

func main() {
	fmt.Println("Function program initialized!")

	message := "First message in a function example"
	firstFunction(message)

	threeArguments(15, 7, "String!")

	fmt.Println(returningFunction(4))

	num, twiceNum := doubleReturn(2)
	fmt.Printf("%d multiplied by 2 is: %d\n", num, twiceNum)

	_, twiceEight := doubleReturn(8)
	fmt.Printf("8 multiplied by 2 is: %d\n", twiceEight)
}
```


## Go doc: La forma de ver documentación

- [Packages - The Go Programming Language](https://golang.org/pkg/)
- [Home · pkg.go.dev](https://godoc.org/)

# 3. Estructuras de control de flujo y condicionales

## El poder de los ciclos en Golang: for, for while y for forever

CODIGO:

```go
package main import "fmt" func main() { 	// for contrario 	for i := 10; i > 0; i-- { 		fmt.Println(i) 	} }
```

RESULTADO:

```bash
10
9
8
7
6
5
4
3
2
1
```

```go
package main

import "fmt"

func main() {

	// For condicional
	for i := 0; i < 11; i++ {
		fmt.Println(i)
	}

	fmt.Printf("\n")

	// For while
	counter := 0
	for counter < 10 {
		fmt.Println(counter)
		counter++
	}

	// For forever
	counterForever := 0
	for {
		fmt.Println(counterForever)
		counterForever++
	}
}
```

## Operadores lógicos y de comparación

Son operadores que nos permiten hacer una comparación de condiciones y en caso de cumplirse como sino ejecutarán un código determinado. Si se cumple es VERDADERO/TRUE y si no se cumple son FALSO/FALSE.

Empecemos con los operadores de comparación:

## Operadores de comparación

Son aquellos que retornan TRUE o FALSE en caso de cumplirse o no una expresión. Son los siguientes:

- *valor1 == valor2*: Retorna TRUE si valor1 y valor2 son exactamente iguales.
- *valor1 != valor2*: Retorna TRUE si valor1 es diferente de valor2.
- *valor1 < valor2*: Retorna TRUE si valor1 es menor que valor2
- *valor1 > valor2*: Retorna TRUE si valor1 es mayor que valor2
- *valor1 >= valor2*: Retorna TRUE si valor1 es igual o mayor que valor2
- *valor1 <= valor2*: Retorna TRUE si valor1 es menor o igual que valor2.

## Operadores lógicos

Son aquellos que retorna TRUE o FALSE si cumplen o no una condición utilizando [puertas lógicas](https://platzi.com/clases/1050-programacion-basica/15968-que-son-tablas-de-verdad-y-compuertas-logicas/).

### Operador AND:

Este operador indica que todas las condiciones declaradas deben cumplirse para poderse marcar como TRUE. En Go, se utiliza este símbolo `&&`.

Ejemplo1: `1>0 && 2 >0` Esto retornará TRUE porque tanto la primera como la segunda condición son verdaderas.

Ejemplo2: `2<0 && 1 > 0` Esto retornará FALSE porque una de las condiciones no es verdadera.

### Operador OR:

Este operador indica que al menos una de las condiciones debe cumplirse para marcarse como TRUE. En Go, se representa con el símbolo `||`.

Ejemplo: `2<0 || 1 > 0` Esto retornará TRUE porque la segunda condición se cumple, a pesar que la primera no.

### Operador NOT:

Este operador retornará el opuesto al boleano que está dentro de la variable. Ejemplo:

```Go
myBool :=  true
fmt.Println(!myBool) // Esto retornará false
```

------

Una vez ya estudiado la teoría, en la siguiente clase vamos a ver cómo utilizarlo con más detalles en Go.

## El condicional if

Reto 1, escribiendo input desde consola

```go
var number int

	fmt.Println("Write any number")
	fmt.Scan(&number)

	numberType := number % 2

	if numberType == 0 {
		fmt.Printf("%d is even", number)
	} else {
		fmt.Printf("%d is odd", number)
	}
```

Reto 2, ingresando datos desde consola

```go
defaultUser := "admin"
	defaultPassword := "12345"
	var inputUser string
	var inputPassword string

	fmt.Print("Username: ")
	fmt.Scanln(&inputUser)
	fmt.Print("Password: ")
	fmt.Scanln(&inputPassword)

	if inputUser == defaultUser && inputPassword == defaultPassword {
		fmt.Print("Success login")
	} else {
		fmt.Print("Failed login")
	}
```

![img](https://www.google.com/s2/favicons?domain=https://static.platzi.com/media/favicons/platzi_favicon.png)[strconv - The Go Programming Language](https://golang.org/pkg/strconv/)

## Múltiple condiciones anidadas con Switch

```go
package main

import "fmt"

func parOImpar(num int) string{
	switch modulo := num % 2; modulo {
	case 0:
		return "Es par"
	default:
		return "Es impar"
	}
}

func main() {
	valor1 := 1

	if valor1 == 1 {
		fmt.Println("Es 1")
	} else {
		fmt.Println("No es 1")
	}

	queEs := parOImpar(24)
	fmt.Println(queEs)

	value := 50
	switch {
	case value > 100:
		fmt.Println("Es mayor que 100")
	case value < 0:
		fmt.Println("Es menor a 0")
	default:
		fmt.Println("No condicion")
	}
}
```

### Switch

```go
package main

import "fmt"

func main() {

	switch modulo := 5 % 2; modulo {
	case 0:
		fmt.Println("Es par")
	default:
		fmt.Println("Es impar")
	}

	// Sin condicion
	value := 200
	switch {
	case value > 100:
		fmt.Println("Es mayor a 100")
	case value < 0:
		fmt.Println("Es menor a 0")
	default:
		fmt.Println("No condicion")
	}
}
```



## El uso de los keywords defer, break y continue

Defer:

```go
package main

import "fmt"

func main() {
	defer fmt.Println("Ejecutado al final pese a estar al comienzo gracias a 'Defer'.")
	fmt.Println("Hola Mundo")
}
```

Continue:

```go
package main

import "fmt"

func main() {
	var i uint8 = 0
	for i < 10 {
		fmt.Println(i)
		i++

		// Continue
		if i == 2 {
			fmt.Println("¡El número que sigue es par!")
			continue
		}

	}
}
```

Break:

```go
package main

import "fmt"

func main() {
	var i uint8 = 0
	for i < 10 {
		fmt.Println(i)
		i++

		// Break
		if i == 8 {
			fmt.Println("¡Break!")
			break
		}

	}
}
```

# 4. Estructuras de datos básicas

## Arrays y Slices

>  En Go, los arrays poseen un tamaño fijo y son inmutables, mientras que en los slices su tamaño es dinámico y los puedes modificar.

La diferencia principal entre los arrays es que estos tienen una longitud fija e invariable y deben declarase especifiandola

```go
x := [5]int{0, 1 ,2, 3, 4}
```

mientras que los Slices tienen una longitud variable y no hay que especificarla en la declaración

```go
var x [ ]float64
```

en este caso se crea un Slice con una longitud de cero
Si queremos crear un slice deberiamos usar la funcion make:

```go
x := make([]float64, 5)
```

esto crea un Slice asociado a un array subjacente de longitud 5.
Los Slices siempre están asociados a un array y aunque nunca pueden ser mas largos que el aray, pueden ser mas cortos.
La función make también permite un tercer parámetro, que representa la capacidad del array, por lo que

```go
x := make([]float64, 5, 10)
```

representa un Slice de longitud 5 y capacidad de 10

## Recorrido de Slices con Range

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	isPalindromo("Ama")
	isPalindromo("Amor a Roma")
}

func isPalindromo(text string) {
	var textReverse string

	for i := len(text) - 1; i >= 0; i-- {
		textReverse += string(text[i])
	}

	if strings.ToLower(text) == strings.ToLower(textReverse) {
		fmt.Println("Es palindromo")
	} else {
		fmt.Println("No es un palindromo")
	}
}
```

Solucion del reto

```go
func isPalindromo(text string) {
	var textReverse string
	text = strings.ToLower(text)// pasamos a minúsculas para que no genere error si se ingresan mayúsculas
	text = strings.ReplaceAll(text, " ", "") // quitamos espacios para usar palíndromos con espacios y no genere error
	for i := len(text) - 1; i >= 0; i-- {
		textReverse += string(text[i])
	}

	if text == textReverse {
		fmt.Println("Es Palindromo")
	} else {
		fmt.Println("No es un Palindromo")
	}
}

func main()  {	
	isPalindromo("Amita lava la tina") //No es un Palindromo
	isPalindromo("Anita Lava la tina") //Es Palindromo
}
```

![img](https://www.google.com/s2/favicons?domain=https://static.platzi.com/media/favicons/platzi_favicon.png)[strings · pkg.go.dev](https://godoc.org/strings)

## Llave valor con Maps

La estructura de datos MAP son más eficientes que los Array o Slices, ya que usan de forma nativa concurrencia para ejecutar las operaciones.

```go
package main

import "fmt"

func main() {
	m := make(map[string]int)

	m["Jose"] = 14
	m["Pepito"] = 20

	fmt.Println(m)


	// Recorrer un map
	for i, v := range m {
		fmt.Printf("%s tiene %d años\n", i, v)
	}

	// Encontrar un valor
	value, ok := m["Jose"]
	fmt.Println(value, ok)
}
```



![img](https://www.google.com/s2/favicons?domain=https://static.platzi.com/media/favicons/platzi_favicon.png)[maps · pkg.go.dev](https://godoc.org/github.com/ross-oreto/go-list-map)


## Structs: La forma de hacer clases en Go


## Modificadores de acceso en funciones y Structs

# 5. Métodos e interfaces


## Structs y Punteros


## Stringers: personalizar el output de Structs


## Interfaces y listas de interfaces

# 6. Concurrencia y Channels


## ¿Qué es la concurrencia?


## Primer contacto con las Goroutines


## Channels: La forma de organizar las goroutines


## Range, Close y Select en channels

# 7. Manejo de paquetes y Go Modules


## Go get: El manejador de paquetes


## Go modules: Ir más allá del GoPath con Echo


## Modificando módulos con Go

# 8. Despedida del curso


## Despedida

# 9. Bonus


## Cheat Sheet Go


## Data Science con Go


## Librerías para desarrollo web con Go