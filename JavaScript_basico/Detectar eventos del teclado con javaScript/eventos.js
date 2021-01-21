var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
  //console.log("Tecla oprimida");
  //console.log(evento.keyCode);
  if(evento.keyCode == teclas.UP)
  {
    console.log("vamos pa riba");
  }
  //if(evento.keyCode == teclas.DOWN) { console.log("vamos pa ABAJO"); }
//}

switch(evento.keyCode)
{
  case teclas.UP:
    console.log("arriba");
    break;
  case teclas.DOWN:
      console.log("abajo");
    break;
  default:
  console.log("otra tecla");
  break;
}
}
