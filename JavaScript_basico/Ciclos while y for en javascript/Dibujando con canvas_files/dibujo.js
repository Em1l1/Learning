var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var yf, xi;
var yi, xi;
var yf, xf;
var colorcito = "#FAA";

for(l=0; l < lineas; l++)
//while(l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  yf = 10 * l;
  xi = 10 * (l +1);
  yi = 10 * l;
  xi = 10 * (l + 1);
  yf = 10 * l;
  xf = 10 * (l +1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  dibujarLinea(colorcito, yf, 0, 300, xi);
  dibujarLinea(colorcito, 3, yi, 300, xi);
  dibujarLinea(colorcito, yf, 0, xf, 0);
  console.log("Linea " + l);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xincial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
