var hello = "Hello";
var hello = "Hello++";
let world = 'hello workd';
// let world = 'hello workd +';
const helloWorld1 = 'Hello World Linux';

console.log(hello);

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld1);
}

anotherFunction();

//  Reasugbar una function => Mala practica
const helloWorld = () => {
  globalVar = 'i am global'
}

helloWorld();
console.log(globalVar)



const anotherFunction1 = () => {
  var localVar = global1Var = 'Im Global'
}

anotherFunction1();
console.log(global1Var)