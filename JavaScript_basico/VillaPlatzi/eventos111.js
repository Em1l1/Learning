var vp = document.getElementById ("villaplatzi");
var papel = vp.getContext ("2d");

var fondo = {
  url: "tile.png",
  cargaOK: falso
}
var vaca = {
  url: "vaca.png",
  cargaOK: falso
};

var cantidad = aleatorio (1, 10);

fondo.imagen = nueva imagen ();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener ("load", cargarFondo);

vaca.imagen = nueva imagen ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener ("cargar", cargarVacas);

función cargarFondo ()
{
  fondo.cargaOK = verdadero;
  Dibujar ();
}
función cargarVacas ()
{
  vaca.cargaOK = verdadero;
  Dibujar ();
}

función dibujar ()
{
  si (fondo.cargaOK)
  {
    papel.drawImage (fondo.imagen, 0, 0);
  }
  si (vaca.cargaOK)
  {
    console.log (Cantidad);
    para (var v = 0; v <cantidad; v ++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage (vaca.imagen, x, y);
    }
  }
}
función aleatorio (min, maxi)
{
  var resultado;
  resultado = Math.floor (Math.random () * (maxi - min + 1)) + min;
  devolver resultado;
}
