#!/usr/bin/env bash

# Programa para enviar los tipos de operadores
# Autor: Victor Juarez - @victorianojuarez

numA=10
numB=4

echo "Operadores Aritmeticos"
echo "Numeros A=$numA y B=$numB"
echo "Sumar A + B =" $(( numA + numB ))
echo "Resta A - B =" $(( numA - numB ))
echo "Multiplicacion A * B =" $(( numA * numB ))
echo "Division A / B =" $(( numA / numB ))
echo "Residuo  A % B =" $(( numA % numB ))

echo -e "\nOperadores Relaciones"
echo "Numeros: A=$numA y B=numB"
echo "A < B =" $(( numA < numB ))
echo "A > B =" $(( numA > numB ))
echo "A <= B =" $(( numA <= numB ))
echo "A >= B =" $(( numA >= numB ))
echo "A == B =" $(( numA == numB ))
echo "A != B =" $(( numA != numB ))


echo -e "\nOperadores de Asignacion"
echo "Numero: A=$numA y B=numB"
echo "Sumar A += B" $(( numA += numB ))
echo "Restar A -= B" $(( numA -= numB ))
echo "Multiplicacion A *= B" $(( numA *= numB ))
echo "Dividur A /= B" $(( numA /= numB ))
echo "Residuo A %= B" $(( numA %= numB ))
