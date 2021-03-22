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

function imprimirEdad(persona) {
  console.log(`$(persona.edad) es: `)

  if (persona.edad >= 18){
    console.log('Es mayor de edad')
  } else {
    console.log('Es menor de edad');
  }
}

imprimirEdad(victor)