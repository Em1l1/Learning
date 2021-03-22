/* var nombreVictor =  'Victor';
var nombreDaniel =  'Daniel';

/* function imprimirNombreEnMayusculas() {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas() */

/* function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombreVictor);
imprimirNombreEnMayusculas(nombreDaniel);  */

/* trabajando con objetos */

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

function imprimirNombreEnMayusculas({ nombre }) {
  /* var nombre = persona.nombre.toUpperCase() */
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(victor)
imprimirNombreEnMayusculas(daniel)
imprimirNombreEnMayusculas({ nombre: 'Pepito'})
