var victor = {
  nombre: 'Victor',
  apellido: 'Juarez',
  edad: 25,
  peso: 75 
}

console.log(`Al inicio del year ${victor.nombre} pesa ${victor.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO // Parentesis opcionales
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    // aumenta de peso
    aumentarDePeso(victor)
  } else if (random < 0.5) {
    // adelzagar
    adelgazar(victor)
  }
}

console.log(`Al final del year ${victor.nombre} pesa ${victor.peso.toFixed(1)}kg`)