#include <stdio.h>

int main() {
  // printf("Operadores Aritmeticos P1 \n\n");

  int rSum;
  float rRes;
  float rDiv;
  float rMul;
  int rMod;

  rSum = 7 + 3;
  rRes = 7.1 - 3.1;
  rDiv = 7.0 / 3.0;
  rMul = 7 * 3;
  rMod = 7 % 3;

  // printf("Resultado de la suma: %i \n", rSum);
  // printf("Resultado de la resta: %f \n", rRes);
  // printf("Resultado de la division: %f \n", rDiv);
  // printf("Resultado de la multiplicacion: %f \n", rMul);
  // printf("Resultado de la modulo: %i \n", rMod);

  printf("Resultado de la suma:\t\t %d \n", rSum);
  printf("Resultado de la resta:\t\t %f \n", rRes);
  printf("Resultado de la division:\t %f \n", rDiv);
  printf("Resultado de la multiplicacion:\t %f \n", rMul);
  printf("Resultado del modulo:\t\t %d \n", rMod);
}