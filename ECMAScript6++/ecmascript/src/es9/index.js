const obj = {
  name: 'Victor',
  age: 32,
  country: 'GT'
};

let {name, ...all } = obj;
console.log(name, all)

const obj1 = {
  name: 'Victor',
  age: 32
};

const obj2 = {
  ...obj1,
  country: 'GT'
}

console.log(obj2)

// promise

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      // ? resolve('Hello World')
      ? setTimeout (() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  });
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))


// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-03-27')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)