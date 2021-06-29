/* // boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 20
let resultado = numerador / denominador;
console.log('El resultado es: ', resultado )

// String
let nombre: string = 'Victor';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Rodigro', 'Clara'];
// people.push('9000')

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;
console.log(`Color favorito es ${colorFavorito;

let comodin: any = "Joker";
comodin = { type: 'Wildcard' }


// object
let someObject = { type: 'Wildcard' };

 */

// funciones
/* function add(a: number, b: number): number {
  return a + b;
}

const sum = add(2, 6);

sum();

function createAdder (a: number): (number) => number {
  return function (b: number) {
    return a + b;
  }
}


const addFour = createAdder(4)
const forPlus6 = addFour(6)


function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const richard = fullName('Richard', 'Kafman');
console.log(richard)

// Interfaces
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
}

interface Rectangulo {
  ancho: number
  alto: number
  color: Color;
}

let rect: Rectangulo = {
  ancho: 5,
  alto: 9,
  color: Color.Rojo,
}

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

// console.log(rect.toString());
rect.toString = function() {
  return this.color ? `un rectangulo ${this.color}` : `un rectangulo`;
}

console.log(rect.toString());
 */

// Patrones de Disegn
// Singleton
import Singleton from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('A es igual a B?', a === b)