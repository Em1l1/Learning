const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

// callback
/* $.get(lukeUrl, opts, function (luke) {
  console.log(`Hola yo soy ${luke.name}`)
}) */

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}

function obtnerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

// $.get(lukeUrl, opts, onPeopleResponse)
obtnerPersonaje(1)
obtnerPersonaje(2)
obtnerPersonaje(4)
obtnerPersonaje(5)
obtnerPersonaje(6)
obtnerPersonaje(7)
obtnerPersonaje(8)