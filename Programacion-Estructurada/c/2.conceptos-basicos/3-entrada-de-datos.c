#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{
  printf("Salida de datos. Parte 1.\n\n");

  int enteroA;
  float flotanteA;
  double doubleA;
  char caracterA;

  //Imprimir en pantalla las variables
  // Ingresar datos desde teclado
  printf("Ingresa el vaolor del entero A: ");
  
  scanf("%i", &enteroA);
  

  printf("Ingresa el vaolor del flotante A: ");

  scanf("%f", &flotanteA);
  

  printf("Ingresa el vaolor del caracter A: ");

  scanf(" %c", &caracterA);
  
  printf("El entero A es: %i \n", enteroA);
  printf("El entero A es: %f \n", flotanteA);
  printf("El entero A es: %c \n", caracterA
  );

  return 0;
}