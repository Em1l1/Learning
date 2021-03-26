// Declaracion antes de ecmascript6++
function newFuntion(name, age, country) {
  var name = name || 'Victor';
  var age = age || 26;
  var country = country || 'GT';
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'Victor', age = 26, country = "GT") {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', 23, 'CO');

// Template 

let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// Multi-linea

let lorem = "Qui consequatr. Comodi. Ipsum vel duis yet minama \n"
+ "Otra frase epica que necesitamos.\n"
+ "Agregando otra forma"

// Multi-Linea es6
let lorem2 = `Otra frase epica que necesitamos
ahora es tora fase`;

console.log(lorem);
console.log(lorem2);

// Destructuracion de Elementos
let person = {
  'name': "Victor",
  'age': 26,
  'country': 'GT'
}

console.log(person.name, person.age);

let { name, age, country} = person;
console.log(name, age, country);

// Reduciendo lineas de codigo
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valearia', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education)

// Var = variable disponible de forma global, Let = variable disponible en el scope

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let"
  console.log(globalLet)
}

console.log(globalVar);
// console.log(globalLet);

// Const = Variable de no cambia o no se puede modificar su valor
const a = 'b';
a = 'a';
console.log(a);

// Crear nuevo objeto
let name = 'Victor'
let age = 26
