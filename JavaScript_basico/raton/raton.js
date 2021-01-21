var d = document.getElementById("areaDeDibujo");
var lienzo = d.getContext("2d");
var dibujando = false;
var x, y;
d.addEventListener("mousedown", e => {
  dibujando = true;
  x = e.clientX;
  y = e.clientY;
});
d.addEventListener("mouseup", e => {
  dibujando = false;
});
d.addEventListener("mousemove", e => {
  if(dibujando){
    dibujarLinea("red", x, y, e.clientX, e.clientY);
    x = e.clientX;
    y = e.clientY;
  }
});

function dibujarLinea(color, xi, yi, xf, yf){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
