#include <stdio.h>

int main() {
  printf("Condicion if. \n\n");

  float valA, valB, valC;
  valA = valB = 100;

  printf("Primer conicion. \n");
  if(valA == valB) {
    printf("Ambos son iguales \n");
    valC = valA + valB;
    printf("Ademas la suma de ambos numeros es: %f\n", valC);
  }

  return 0;
}