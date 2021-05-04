import random
import time

contador = 0


def busqueda_binaria(lista, comienzo, final, objetivo):
    global contador
    if comienzo > final:
        return False

    medio = (comienzo + final) // 2
    print(f'Buscando {objetivo} entre {lista[comienzo]} y {lista[final - 1]}')
    if lista[medio] == objetivo:
        contador = contador + 1
        return True

    elif lista[medio] <= objetivo:
        contador = contador + 1
        return busqueda_binaria(lista, medio + 1, final, objetivo)

    elif lista[medio] >= objetivo:
        contador = contador + 1
        return busqueda_binaria(lista, comienzo, medio - 1, objetivo)


if __name__ == "__main__":

    tamano_de_lista = int(input('De que tamano sera la lista? : '))
    objetivo = int(input('que numero quieres encontrar? : '))

    contador = 0
    lista = sorted([random.randint(0, 100) for i in range(tamano_de_lista)])

    inicio = time.time()
    encontrado = busqueda_binaria(lista, 0, len(lista), objetivo)
    final = time.time()

    print(lista)
    print(
        f'El elemento {objetivo} {"esta" if encontrado else "no esta"} en la lista')
    print(f'La cantidad de pasos son: {contador + 1}')
    print(f'Se encontró en un tiempo de {(final - inicio)} ')
