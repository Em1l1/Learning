const data = {
  frontend: 'Victor',
  backend: 'Lucia',
  design: 'Felipe',
}


const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

// Object values

const data1 = {
  frontend: 'Victor',
  backend: 'Lucia',
  design: 'Felipe',
}

const values = Object.values(data1);
console.log(values)
console.log(values.length)

// padding

const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12, ' ____'))
console.log('food'.padEnd(12, ' _________ '))

// comas
/* const obj = {
  name: 'Victor',
  apellido: 24
} */

// aysync await

const hellWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync()

const anotherFunction = async () => {
  try {
    const hello = await helloWorld;
    console.log(hello);
  } catch (error) {
    console.log(error)
  }
}

anotherFunction()