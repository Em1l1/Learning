def divide_elementos_de_lista(lista, divisor):
  try:
    return [i / divisor for i in lista]
  except ZeroDivisionError as e:
    print(e)
    return lista

# def divide_elemento_de_lista(lista, divisor):
#   return [i / divisor for i in lista]

lista = list(range(10))
divisor = 0


print(divide_elementos_de_lista(lista, divisor))