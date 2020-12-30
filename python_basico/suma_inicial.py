#suma calculadora
#def operador(numero_1, numero_2):
#	numero = input("En que numero pienzas " + numero_1 + "tienes un numero?: ")
#	numero = input("Dame el segundo numero " + numero_2 )
#	numero = float(numero)
#	numero = numero  + numero_1
#	Print("El resultado es" + numero)
#def operador(numero_1, numero_2):

#Operaciones
menu = """ Bienvenido al operador de numeros 

1 - suma
2 - resta
3 - multiplicacion
4 - division

Elige una opcion: """

numero_1 = int(input('Escribe un numero: '))
numero_2 = int(input('Escribe otro numero: '))



opcion = int(input(menu))

if opcion == 1:
	resultado = numero_1 + numero_2
	print('El resultado de la suma es: ' + str(resultado)) 
elif opcion == 2:
	resultado = numero_1 - numero_2
	print('El resulado de la resta es: ' + str(resultado))
elif opcion == 3:
	resultado = numero_1 * numero_2
	print('El resultado de la multiplicacion es: ' + str(resultado))
elif opcion == 4:
	resultado = numero_1 / numero_2
	print('El resultado de la division es: ' + str(resultado))
else:
	print('Ingresa una opcion correcta por favor')
