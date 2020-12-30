numeros = [1, 2, 3, 4, 5]     # lista -> mutable
print(numeros)                # Accedemos a traves de su indece

numeros.append('Hola')

numeros2 = [6, 7, 8, 9]

lista_final = numeros + numeros2
print(lista_final)

print(numeros * 5)


######################################################

mi_tupla = (1, 2, 3, 4, 5)      # Tupla -> no se pueden modificar | inmutables.
print(mi_tupla)

for numero in mi_tupla:
  print(numero)