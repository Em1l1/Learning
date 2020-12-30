objeto = ['Hola', 1, 2, 4, 5, True]
print(objeto)

objeto.append(False)
objeto.append(5)
objeto.append('Nada') #agregar mas objetos a la lista -> se utiliza el comando .append

objeto.pop(1) # Elimina un elemento de la lista

for elemento in objeto: # Funcion en lista
  print(elemento)
