#include <stdio.h>

char textoPublico[] = {"Texto en una variable Global. \n"};

void comprobar() {
  printf("\n\n-- imprimir desde la funcion: comprobar --\n\n");
  printf("Variable global: ");
  printf("%s", textoPublico);

  //Provoca error, no puede compilar porque no encuentra la variable: textoPrivado.
  //Hay que coomentar la linea para que el programa compile.
  printf("Variable local: \n");
  //    puts(textoPrivado);
}

int main() {
  printf("\n Variables publicas y privadas. \n");
  printf("\n\n-- Imprimir desde la funcion: main --\n\n");

  char textoPrivado[] = {"Texto en una variable local.\n"};
  
  printf("Variable global: ");
  printf("%s", textoPublico);

  printf("Variable local: ");
  printf("%s", textoPrivado);
  
  comprobar();

  printf("\n");
  return 0;
}