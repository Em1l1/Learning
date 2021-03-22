var x = 4, y = '4'

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

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }
  if (persona.dj) {
    console.log('Dj')
  }
  else {
    console.log('No es dj')
  }
  if (persona.guitarrista) {
    console.log('Guitarrista')
  }
  if (persona.drone) {
    console.log('Piloto de Drone')
  }
}

imprimirProfesiones(victor)

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD //18  Magic numver
}


function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(victor)