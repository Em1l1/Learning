#include <stdio.h>

int main() {

  printf("iterador while. \n\n");

  int limite;
  printf("Hasta que umero quieres imprimir? ");
  scanf("%d", &limite);

  int i = 1;
  while(i <= limite) {
    printf("Numero: %d \n", i);
    i++;
  }

  return 0;
}