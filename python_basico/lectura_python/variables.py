nombre = input("Escribe tu nombre: ")
edad = 24 # Numero entero (integer)
precio = 112.45 # Numero  de punto Flotante (float)
titulo = 'Aprendo Python desde cero' # Cadena de texto (String)
test = True #boolean

_mi_nombre = 'Victor ' # Cadena de texto con comilla simple
mi_nombre = " Victor's" #Cadena de texto con  comilla doble -> Apora caracteres especiales
_frase = """ Aprende python 
	para ser un buen desarrollador
	y no pares de aprender!!! """ #Tiples comillas

x = 3.5
type(x)

print('Hola!!! ' + nombre + ' Tu edad es: ' + str(edad) + 
' El precio a pagar es la cantidad de:  ' + str(float(precio)) + 
' El titulo del curso es: ' + titulo)
print(test)
print(x)
print(_mi_nombre + mi_nombre + _frase)

