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

// Reto imprimier
//  Hola soy ___ y tengo ____ year.+
//function imprimirNombreEnMayusculas({ nombre }) {
function imprimirNombreEnMayusculas(persona) {
  /* var nombre = persona.nombre.toUpperCase() */
  // var nombre = persona.nombre
  var { nombre, edad } = persona
  console.log('Hola, me llamo ' + nombre.toUpperCase() + ' tengo ' + edad)
}

imprimirNombreEnMayusculas(victor)
imprimirNombreEnMayusculas(daniel)
//imprimirNombreEnMayusculas({ nombre: 'Pepito'})


// Reto

function imprimirNombreYEdad(persona){
  var {nombre, edad} = persona
  console.log(`Hola soy ${nombre} y tengo ${edad} years`)
  
}

imprimirNombreYEdad(victor)
imprimirNombreYEdad(daniel)