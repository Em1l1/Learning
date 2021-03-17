var contador = 0;

const llueve = () => Math.random() < 0.25

do {
  //
  contador++
} while (!llueve())

// console.log(`Fui a ver si llovia, y luego de ${contador} veces. Llovia`)

var frecuencia = contador === 1 ? "vez":"Veces";

console.log(`fui a ver si llovia y luego de ${contador} ${frecuencia}, empezo a llover.`)