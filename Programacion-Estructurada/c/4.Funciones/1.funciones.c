#include <stdio.h>

// Declarar la fucion calcularSuma() arriba de la funcio main(). main() no puede encontrar funciones o variables que sean declarados debajo de ella.

void calcularSuma() {
  int res = 8 + 8;
  printf("El resultado de la suma es: %d\n", res);
}

int main() {
  printf("Funciones - Calculadora parte 1. \n\n ");
  calcularSuma();
  
  return 0;
}
