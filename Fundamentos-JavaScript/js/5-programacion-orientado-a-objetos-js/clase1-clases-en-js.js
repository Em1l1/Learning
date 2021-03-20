function Persona(nombre, apellido, altura) {
  this.nombre = nombre 
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () { 
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  console.log(`${this.nombre} ${this.altura >= 1.8 ? 'es una persona' : 'no es una persona'} alta`);
}

var victor = new Persona('Victor', 'Juarez', 1.7)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Persona('Arturo', 'Martines', 1.8)

victor.saludar()
victor.soyAlto()