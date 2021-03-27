let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))

// trimstart
let hello = '       hello   wordl';
console.log(hello);
console.log(hello.trimStart());

// trimEnd
let hello1 = 'hello world       ';
console.log(hello1);
console.log(hello1.trimEnd());

// catch
try {

} catch {
  error
}

// fromEntries

let entries = [["name", "Victor"], ["age", 32]];
console.log(Object.fromEntries(entries));

// Symbol.prototype.description
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);