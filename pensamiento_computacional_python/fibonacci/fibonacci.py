def fibonacci(n):
  if n == 0 or n == 1:
    return 1
  return fibonacci(n - 1) + fibonacci(n - 2)

n = int(input("Escribe el mes que deseas conocer: "))
print(f'En el mes numero {n} habran {fibonacci(n)} conejos')

# def fibonacci(n, i=0, j=1):
#   print(i+j)
#   # if n == 0 or n == 1:
#     # return 1
#   return fibonacci(n - 1, i+j, i) if n > 1else0

# if __name__ == '__main__':

#   fibonacci(int(input('Cuantos numeros de la serie dese imprimir?: ')))

#   return fibonacci(n - 1) + fibonacci(n - 2)

# print(fibonacci(n))
