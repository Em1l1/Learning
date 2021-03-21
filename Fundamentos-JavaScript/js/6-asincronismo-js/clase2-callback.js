const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

// callback
/* $.get(lukeUrl, opts, function (luke) {
  console.log(`Hola yo soy ${luke.name}`)
}) */

// const onPeopleResponse = function (persona) {
  // console.log(`Hola, yo soy ${persona.name}`)
// }

/* function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  
  $
  .get(url, opts, callback)
  .fail( () => {
    console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
  })
} */

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedio un errror al obtener el personaje ${id}`)
}

//  clase 38
// var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* var promesas = ids.map(function (id) {
  return obtenerPersonaje(id)
}) */

// clase 39

async function obtenerPersonajes() {
  var ids = []
  for (let i = 1; i <= 10; i++) {
    ids.push(i)
  }
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    var personajes = await Promise.all(promesas)
      console.table(personajes)
  } catch (id) {
    onError(id)
  }
}
  

obtenerPersonajes()
/*   Promise
    .all(promesas)
    .then(personajes => console.table(personajes))
    .catch(onError)
} */

// clse 38
/* var promesas = ids.map(id => obtenerPersonaje(id))
Promise
  .all(promesas)
  .then(personajes => console.table(personajes))
  .catch(onError) */

// clase 36 - 37
// Callback
/* obtenerPersonaje(1)
  .then(personaje1 => {
    console.log(`El personaje 1 es ${personaje1.name}`)
    // Retornar los demas personjes
    return obtenerPersonaje(2)
  })
  .then(personaje2 => {
    console.log(`El personaje 2 es ${personaje2.name}`)
    // Retornar los demas personjes
    return obtenerPersonaje(3)
  })
  .then(personaje3 => {
    console.log(`El personaje 3 es ${personaje3.name}`)
    // Retornar los demas personjes
    return obtenerPersonaje(4)
  })
  .then(personaje4 => {
    console.log(`El personaje 4 es ${personaje4.name}`)
    // Retornar los demas personjes
    return obtenerPersonaje(5)
  })
  .then(personaje5 => {
    console.log(`El personaje 5 es ${personaje5.name}`)
    // Retornar los demas personjes
    return obtenerPersonaje(6)
  })
  .catch(function (id) {
    onError(onError)
  })
 */
/* // obtenerPersonaje(1, function (persona) {
//   console.log(`Hola, yo soy ${persona.name}`)     
// }) */