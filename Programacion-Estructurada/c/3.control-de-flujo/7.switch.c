#include <stdio.h>
#include <stdlib.h>

int main() {

  printf("Condicional switch \n");

  int option;

  printf("Ingresa la opccion: ");
  scanf("%d", &option);

  switch(option) {
    case 1: printf("\nElegiste el numero uno.\n\n");
    break;
    case 2: printf("\nElegiste el numero dos.\n\n");
    break;
    case 3: printf("\nElegiste el numero tres.\n\n");
    break;
    default: printf("\nElegiste una opcion sin valor.\n\n");
    break;
  }

  return 0;
}