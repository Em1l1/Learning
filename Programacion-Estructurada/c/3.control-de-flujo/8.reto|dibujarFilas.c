#include <stdio.h>
#include <stdlib.h>

int main()
{
  // Declaracion de variable (iterador)
  int filas = 5;

  // Imprimir # en 5 filas con while
  while (filas > 0)
  {
    printf("\n#");
    filas--;
  }

  return 0;
}