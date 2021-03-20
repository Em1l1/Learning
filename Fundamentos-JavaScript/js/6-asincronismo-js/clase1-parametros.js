class Persona {
  constructor(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  }

  saludar(fn) {
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido, null)
    }
  }

  soyAlto() {
    return this.altura >= 1.7
  }
}

// extension => extends
class Desarrollador extends Persona {
constructor(nombre, apellido, altura) {
  super(nombre, apellido, altura)
  }

  saludar(fn) {

    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`)

  if(esDev){
    console.log(`Ah mira, no sabia que eras desarrollador/a`)
  }
}

var victor = new Persona('Victor', 'Juarez', 1.70)
var victor = new Desarrollador('Victor', 'Juarez', 1.70)
var erika = new Persona('Erika', 'Luna', 1.65)
var erika = new Desarrollador('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.80)
var arturo = new Persona('Arturo', 'Martinez', 1.80)

victor.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
