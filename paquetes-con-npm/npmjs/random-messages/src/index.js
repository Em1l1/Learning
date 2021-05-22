const messages = [
    "David",
    "Diana",
    "Ana Maria",
    "Isabela",
    "Antonio",
    "Norma",
    "Torres",
    "Huawi",
    "Nissan",
    "Scanor",
    "Carolina"
]

// declaracion de arreglo
const randomMsg = () => {
  const message = messages[Math.floor(Math.random() *
    messages.length)];
    console.log(message)
}

// Funcion para enviar aleatoriamente los nombres del arreglo


// Exportar como un modulo
module.exports = { randomMsg };