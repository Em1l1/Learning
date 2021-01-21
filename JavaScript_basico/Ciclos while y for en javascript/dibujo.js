var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 50;
var l = 0;
var yi, xf;
var yf, xi;
var xf, yi;
var xi, yf;
var colorcito;

for(l=0; l < lineas; l++)
//while(l < lineas)
{
  yi = 20 * l;
  xf = 10 * (l + 1);
  yf = 20 * l;
  xi = 10 * (l +1);
  yi = 40 * l;
  xi = 10 * (l + 1);
  yf = 50 * l;
  xf = 10 * (l +1);
  dibujarLinea("red", 0, yi, xf, 500);
  dibujarLinea("Blue", yf, 0, 500, xi);
  dibujarLinea("pink",  yf, yi, 0, 500);
  dibujarLinea("Black", yf, yi, 500, 0);
  dibujarLinea("green", 0, 300, xf, xi);
  dibujarLinea(colorcito, 300, 0, xf, xi);
  dibujarLinea(colorcito,  yf, 300, xf, xi);
  dibujarLinea(colorcito, 300, yi, xf, xi);
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
