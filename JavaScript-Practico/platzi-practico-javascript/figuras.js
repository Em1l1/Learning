// Codigo del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + "cm");


// // Perimetro cuadrado
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro cuadrado del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// perimetroCuadrado(8);
// Area del cuadrado
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

// Codigo del triangulo
console.group("Traingulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//   "Los lados del Triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo1 +
//     "cm, " + "y la base del triangulo es: " +
//     baseTriangulo +
//     "cm "
// );
// console.log("La altura del Triangulo es: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Codigo circulo
console.group("Circulo");

// radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");


// diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + " cm")
function diametroCirculo(radio) {
  return radio * 2;
}


// pi
// const PI = 3.1415;
const PI = Math.PI;
console.log("PI es: " + PI)


// circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm")
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + " cm^2")
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();
