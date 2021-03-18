var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = persona => !esAlta(persona)

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

// devuelve un objeto
const pasarAlturaCms = persona => ({
  // persona.altura = persona.altura * 100
  ...persona,
  altura: persona.altura * 100
  
})

var personasCms = personas.map(pasarAlturaCms)

console.table(personasCms)
console.table(personasAltas)
console.table(personasBajas)
