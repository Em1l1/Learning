var victor = {
  nombre: 'Victor',
  apellido: 'Juarez',
  edad: 25,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: true,
  drone: false
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 15
}

const MAYORIA_DE_EDAD = 18

/* var esMayorDeEdad = function (persona) { // function anonnima
  return persona.edad >= MAYORIA_DE_EDAD //18  Magic numver
} */


// Arrow function  | destructurar la function ({})
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

const imprimirSiEsMayorDeEdad = persona => esMayorDeEdad(persona)?
console.log(`${persona.nombre} es mayor de edad`) : 
console.log(`${persona.nombre} es menor de edad`);

/* function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
 */
imprimirSiEsMayorDeEdad(victor)

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCES0 DENEGADO')
  }
}