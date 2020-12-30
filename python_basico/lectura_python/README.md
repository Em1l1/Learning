# Aprendiendo Python

* Identacion en python es de 4 espacios

* Comentarios en Python se utiliza el caracter has #

```  # Soy un comentario en python ```

## Funcionamiento de python

> Analizar (parse en inglés) el código comprobando que formato y la sintaxis es correcta, es decir,
que cumplen las normas establecidas para el lenguaje de progamación.

> Traducir el código a bytecode (instrucciones que nuestra máquina puede ejecutar)

> Enviar el código para su ejecución a la Python Virtual Machine(PVM), donde el código es
ejecutado.

## Variables y tipos de datos

__**Las variables permiten almacenar datos del programa**__

``` 
nombre = 'Amaia' # cadena de texto
edad = 30 # número entero
```
> El nombre de una variable se conoce como identificador, y deberá cumplir las siguientes reglas:

• Comenzar con una letra o un guión bajo.

• El resto del nombre estará formado por letras, números o guiones bajos.

• Los nombres de las variables son case sensitive, es decir, no es lo mismo que una variable se
llame resultado que RESULTADO .
• Existen una serie de palabras reservadas que no se pueden utilizar (def, global, return, if, for,
...)

Numero entero (integer) ``` >>> edad = 24 ```

Numero  de punto flotante (float) ``` >>>precio = 112.9 ```
Cadena de texto (String) ``` >>> test = True ```

## Lectura de datos en python

La funcion de input() permite introducir datos al usuario 
```python
>>> nombre = input()
>>> print(nombre) 
```
