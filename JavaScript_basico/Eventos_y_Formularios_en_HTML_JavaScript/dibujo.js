var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xincial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xincial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  //var x = texto.value; obtener informacion
  //console.log(texto);
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var yf, xi;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  for(l=0; l < lineas; l++)
  //while(l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    yf = espacio * l;
    xi = espacio * (l +1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito, yf, 0, 300, xi);
    console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
}
