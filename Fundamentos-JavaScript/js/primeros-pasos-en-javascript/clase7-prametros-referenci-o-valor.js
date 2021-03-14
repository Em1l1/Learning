var victor = {
  nombre: 'Victor',
  apellido: 'Juarez',
  edad: 25,
}

var daniel = {
  nombre: 'Daniel',
  apellido: 'Susnisky',
  edad: 23,
}

/* clase 5 */

function imprimirNombreEnMayusculas(persona) {
  var { nombre, edad } = persona
  console.log('Hola, me llamo ' + nombre.toUpperCase() + ' tengo ' + edad)
}

imprimirNombreEnMayusculas(victor)
imprimirNombreEnMayusculas(daniel)

/* clase 6 */

function imprimirNombreYEdad(persona){
  var {nombre, edad} = persona
  console.log(`Hola soy ${nombre} y tengo ${edad} years`)
  
}

imprimirNombreYEdad(victor)
imprimirNombreYEdad(daniel)

/* clase 7 */

function happyYear(persona) {
  return {
    ...persona, 
    edad: persona.edad + 1
  }
  // persona.edad += 1
}