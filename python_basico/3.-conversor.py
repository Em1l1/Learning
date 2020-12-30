# Configuracion de cambio
def conversor(tipo_pesos, valor_dolar):
  pesos = input("Cuantos pesos " + tipo_pesos + "tienes 💵?: " )
  pesos = float(pesos)
  #valor_dolar = 3875
  dolares = pesos / valor_dolar
  dolares = round(dolares, 2)
  dolares = str(dolares)
  print("Tienes $" + dolares + " dolares")

# Opciones a elegir
menu = """
Bienvenido al conversor de monedas 💵

1 - Pesos colombianos
2 - Pesos argentinos
3 - Pesos mexicanos
4 - Pesos guatemalteco

Elige una opcion: """


#Inicio de menu
opcion = int(input(menu))

if opcion == 1:
  conversor("colombianos", 3875)
elif opcion == 2:
  conversor("argentinos", 65)
elif opcion == 3:
  conversor("mexicanos", 24)
elif opcion == 4:
  conversor("guatemaltecos", 7.80)
else:
  print('Ingresa una opcion correcta por favor')
