const helloWorld = () => {
  const hello = 'Hellow World';
  console.log(hello);
}

helloWorld();

// Ejemplo 2 de variable local

var scope = "i am global";

const functionScope = () => {
  var scope = "i am just a local";
  const func = () => {
    return scope
  }
  console.log(func());
};

functionScope();
console.log(scope)