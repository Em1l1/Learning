var victor = {
  nombre: 'Victor',
  apellido: 'Juarez',
  edad: 25,
  peso: 75 
}

console.log(`Al inicio del year ${victor.nombre} pesa ${victor.peso}kg`)

const INCREMENTO_PESO = 0.5
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO // Parentesis opcionales
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = victor.peso - 3
var dias = 0

while (victor.peso > META) {
  // debugger
  if (comeMucho()) {
    // aumentarDePeso
    aumentarDePeso(victor)
  } if (realizaDeporte()) {
    //  adelgazar
    adelgazar(victor)
  }
  dias += 1
}
console.log(`Pasaron ${dias} dias hasta que ${victor.nombre} adelgazo 3kg`)
console.log(`Al final del year ${victor.nombre} pesa ${victor.peso.toFixed(1)}kg`)