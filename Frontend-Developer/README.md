# Fronted Developer

### Estefany Aguilar

# Tabla de Contenido

- [1. Introducción al curso](#1.-Introducción-al-curso)
  - [Presentación y bienvenida al curso de Frontend Developer](#Presentación-y-bienvenida-al-curso-de-Frontend-Developer)
  - [HTML y CSS: definición y usos](#HTML-y-CSS-definición-y-usos)
  - [¿Qué son y para qué nos sirven HTML y CSS?](#¿Qué-son-y-para-qué-nos-sirven-HTML-y-CSS?)
  - [DOM, CSSOM, Render Tree y el proceso de renderizado de la Web](#DOM-CSSOM-Render-Tree-y-el-proceso-de-renderizado-de-la-Web)
  - [5 tips para aprender CSS](#5-tips-para-aprender-CSS)
- [2. Conceptos iniciales de HTML](#2.-Conceptos-iniciales-de-HTML)
  - [Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos](#Anatomía-de-un-Elemento-HTML-Atributos-Anidamiento-y-Elementos-vacíos)
  - [Anatomía de un Documento HTML: DOCTYPE, html, head y body](#Anatomía-de-un-Documento-HTML-DOCTYPE-html-head-y-body)
  - [Funciones de las etiquetas HTML más importantes](#Funciones-de-las-etiquetas-HTML-más-importantes)
  - [La importancia del código semántico](#La-importancia-del-código-semántico)
  - [Tipos de errores en HTML, debugging y servicio de validación de etiquetas](#Tipos-de-errores-en-HTML-debugging-y-servicio-de-validación-de-etiquetas)
  - [Reto 1: Organiza el siguiente bloque de código de forma semántica](#Reto-1-Organiza-el-siguiente-bloque-de-código-de-forma-semántica)
- [3. Conceptos iniciales de CSS](#3.-Conceptos-iniciales-de-CSS)
  - [Anatomía de una declaración CSS: Selectores, Propiedades y Valores](#Anatomía-de-una-declaración-CSS-Selectores-Propiedades-y-Valores)
  - [Tipos de selectores, pseudo-clases y pseudo-elementos](#Tipos-de-selectores-pseudo-clases-y-pseudo-elementos)
  - [Modelo de caja](#Modelo-de-caja)
  - [Valores relativos y absolutos](#Valores-relativos-y-absolutos)
  - [Displays en CSS](#Displays-en-CSS)
  - [Funciones de las propiedades CSS más usadas](#Funciones-de-las-propiedades-CSS-más-usadas)
  - [Posicionamiento en CSS](#Posicionamiento-en-CSS)
- [4. Arquitectura CSS](#4.-Arquitectura-CSS)
  - [¿Qué son y para qué nos sirven las arquitecturas CSS?](#¿Qué-son-y-para-qué-nos-sirven-las-arquitecturas-CSS?)
  - [OOCSS, BEM, SMACSS, ITCSS y Atomic Design](#OOCSS-BEM-SMACSS-ITCSS-y-Atomic-Design)
  - [Reto 2: Identifica el error de arquitectura del siguiente bloque de código](#Reto-2-Identifica-el-error-de-arquitectura-del-siguiente-bloque-de-código)
- [5. Construcción de componentes](#5.-Construcción-de-componentes)
  - [¿Qué es un componente? Analicemos nuestros diseños](#¿Qué-es-un-componente?-Analicemos-nuestros-diseños)
  - [Estructura con HTML y BEM de un menú desplegable](#Estructura-con-HTML-y-BEM-de-un-menú-desplegable)
  - [Estilizando nuestro menú desplegable con CSS](#Estilizando-nuestro-menú-desplegable-con-CSS)
  - [Creación de un buscador](#Creación-de-un-buscador)
  - [Creación de un carousel de imágenes con CSS: Estructura principal](#Creación-de-un-carousel-de-imágenes-con-CSS-Estructura-principal)
  - [Creación de un carousel de imágenes con CSS: Detalle de cada item](#Creación-de-un-carousel-de-imágenes-con-CSS-Detalle-de-cada-item)
- [6. Maquetación y diseño responsivo](#6.-Maquetación-y-diseño-responsivo)
  - [Flexbox](#Flexbox)
  - [Nuestro nuevo sistema de layout: CSS Grid](#Nuestro-nuevo-sistema-de-layout-CSS-Grid)
  - [Maquetación de la pantalla de login: Estructura HTML](#Maquetación-de-la-pantalla-de-login-Estructura-HTML)
  - [Maquetación de la pantalla de login: Estilización con CSS](#Maquetación-de-la-pantalla-de-login-Estilización-con-CSS)
  - [Estilización de inputs y footer en la pantalla de login](#Estilización-de-inputs-y-footer-en-la-pantalla-de-login)
  - [Media queries](#Media-queries)
  - [Maquetación de la pantalla principal](#Maquetación-de-la-pantalla-principal)
  - [Reto 3: Maquetación de la pantalla de Not Found](#Reto-3-Maquetación-de-la-pantalla-de-Not-Found)
- [7. Preprocesadores](#7.-Preprocesadores)
  - [¿Qué es un preprocesador, cuáles existen y cuáles son sus diferencias?](#¿Qué-es-un-preprocesador-cuáles-existen-y-cuáles-son-sus-diferencias?)
  - [Instalación de SASS y configuración inicial](#Instalación-de-SASS-y-configuración-inicial)
  - [Hablemos de variables, herencia, anidamiento, operadores y más](#Hablemos-de-variables-herencia-anidamiento-operadores-y-más)
- [8. Accesibilidad](#8.-Accesibilidad)
  - [La accesibilidad y nuestra responsabilidad como desarrolladores](#La-accesibilidad-y-nuestra-responsabilidad-como-desarrolladores)
  - [Mejorando la accesibilidad de nuestra página de inicio](#Mejorando-la-accesibilidad-de-nuestra-página-de-inicio)
- [9. Conclusión](#9.-Conclusión)
  - [Conclusión del curso y paso siguiente](#Conclusión-del-curso-y-paso-siguiente)
- [10. Bonus](#10.-Bonus)
  - [Visualización de un botón usando storybook para HTML](#Visualización-de-un-botón-usando-storybook-para-HTML)
  - [Flexbox](#Flexbox)

***

# 1. Introducción al curso
## Presentación y bienvenida al curso de Frontend Developer

+ [document Fornted Developer.pdf](doc/frontend-developer-slides.pdf)

## HTML y CSS: definición y usos

Internet: Interconnected y Network
Red de computadoras conectadas en todo el mundo.

Tim Berners-Lee Invento World Wide Web.
Fundo el consorcio W3C para estandarizar el desarrollo de las tecnologías base Internet

  - HTTP Hyper Text Transfer Protocol 😕/ (Permite la comunicación de datos entre dispositivos)
  - URL Uniform Resource Locator: (Dirección de un sitio web)
  - HTML Hyper Text Markup Language (Lenguaje para describir la estructura de una sitio web)

En 1994 apareció CSS Cascade Style Sheets.

## ¿Qué son y para qué nos sirven HTML y CSS?

  - **HTML:** es un lenguaje de marcado de Hipertexto que nos permite estructurar las páginas web, nos permite estructurar la información para que el navegador pueda leerla y mostrarla.
HTML Reference
  - **CSS:** es un lenguaje de hojas de estilo, que nos permite estilizar las paginas web, es todo el diseño que se le da a la web.

- [htmlreference.io](https://htmlreference.io/lists/)
- [cssreference.io](https://cssreference.io)
- [Youttube](https://www.youtube.com)

- [all The Tags](https://allthetags.com)
- [Lista de elementos HTML5](https://developer.mozilla.org/es/docs/conflicting/Web/HTML/Element)

## DOM, CSSOM, Render Tree y el proceso de renderizado de la Web

  - **DOM:** Document Object Model. Es una transformación del código HTML escrito por nosotros a objetos entendibles para el navegador.

  - **CSSOM:** así como el DOM para el HTML, EL CSSOM es una representación de objetos de nuestros estilos en CSS.

Render Tree: es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

Pasos que sigue el navegador para construir las páginas web:

  1. Procesa el HTML para construir el DOM.
  2. Procesa el CSS para construir el CSSOM.
  3. El DOM se une con el CSSOM para crear el Render Tree.
  4. Se aplican los estilos CSS en el Render Tree.
  5. Se ““pintan”” los nodos en la pantalla para que los usuarios vean el contenido de la página web.

## 5 tips para aprender CSS
![JavaScript](img/javascript.webp)

# 2. Conceptos iniciales de HTML
  ## Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos

Nuestros elementos HTML se componen de:

Etiqueta de apertura: el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor. Por ejemplo: `<h1>`.
Contenido: dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como anidamiento.
Etiqueta de cierre: son casi iguales que las etiquetas de apertura, pero también necesitan un slash `(/)` antes del nombre de la etiqueta. Por ejemplo: `</h1>`.
Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos:

```html
<etiqueta atributo="valor del atributo">
```

Por ejemplo: 

```html
<h1 class="saludo">
```

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo:

```html
<img src="puppy.png" alt="mi mascota">
```

![](img/a-css.webp)

  ## Anatomía de un Documento HTML: DOCTYPE, html, head y body

![](img/a-html.webp)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    <h1>Esta es mi primera etiqueta html</h1>
  <div>
    <p>Este es es la etiqueta parrafo</p>
  </div>
</body>
</html>
```

- [VSCode](https://code.visualstudio.com)


  ## Funciones de las etiquetas HTML más importantes

Al hacer en nuestro editor de código html:5 vemos que nos aparece la siguiente estructura:

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Veamos la descripción de estos elementos:

![](img/f-html1.webp)

Si por ejemplo queremos añadir en nuestro documento estilos o JavaScript, lo hacemos con las etiquetas `<style>` y `<script>` respectivamente, que `a` su vez deben ir dentro de la etiqueta raíz `<html>`, algo así:

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<style>
    /* Aquí iría nuestro CSS */
</style>
<script>
    // Aquí debería ir nuestro JavaScript
</script>
<body>
  
</body>
</html>
```

Descripción de algunos elementos vacíos:

![](img/f-html2.webp)

Descripción de las etiquetas semánticas para la estructura base de nuestra página:

![](img/f-html3.webp)

Descripción de otras etiquetas muy usadas:

![](img/f-html4.webp)

  ## La importancia del código semántico

Es importante que como desarrolladores tengamos claro el significado de escribir código. Debes ser consciente de que la manera en la que codeas tenga sentido.

La semántica HTML no es más que darle sentido y estructura a lo que estas escribiendo. Muy importante para el navegador. No todos los elementos deberían ser un div.

**Beneficios significativos del HTML semántico son:**

  - Los motores de búsqueda considerarán tu contenido como palabras clave importantes para influir en los rankings de búsqueda de la página **(SEO)**.
  -  lectores de pantalla pueden usarlo como una señal para ayudar a los usuarios con discapacidad visual a navegar por una página **(Accesibilidad)**.

  ## Tipos de errores en HTML, debugging y servicio de validación de etiquetas

  - **Errores sintácticos:** Son errores de escritura en el código y evitan que el programa funcione. Pueden ser errores de tipado.

  - **Errores lógicos:** En estos la sintaxis es correcta, pero el código no hace lo que debería. El programa funciona, pero de forma incorrecta.

  - [Extension code | HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)

> Ser desarrollador consiste en 80% leer codigo y debuggear errores y 10% escribir codigo.

[Markuip Valiation Service | W3C](https://validator.w3.org)

  ## Reto 1: Organiza el siguiente bloque de código de forma semántica

Hola !

Ya conocimos la importancia de hacer nuestro HTML de forma semántica. Así que, aquí tengo un reto para ti.

A continuación te mostraré un código HTML y la idea es que tu lo organices de forma semántica, es decir, que uses las etiquetas más adecuadas.

![](img/reto1.webp)

**Solucion del reto**

```html
<!DOCTYPE html>
<htmllang="es">
<head>
    <metacharset="UTF-8">
    <metahttp-equiv="X-UA-Compatible"content="IE=edge">
    <metaname="viewport"content="width=device-width, initial-scale=1.0">
    <title>Platzi Video</title>
</head>
<body>
    <h1style="color:#98CA3F">Platzi Video</h1>
    <div>
        <h3style="color: #59c959;font-style: oblique;">  Sección Principal</h3>
    </div>
    <div>
        <ul>
            <li>Cuenta</li>
            <li>Cerrar Sesión</li>
        </ul>
    </div>
    <br>
    <div>
        <p>Contáctanos</p> 
    </div>
    <Footer>
           <p>
               <ahref="ulrejemplo.com">Terminos y condiciones</a><br>
               <ahref="ulrejemplo.com">Política de privacidad</a> 
           </p>
    </Footer>
        

</body>
</html>
```

# 3. Conceptos iniciales de CSS
  ## Anatomía de una declaración CSS: Selectores, Propiedades y Valores

Nuestros estilos con CSS se componen de:

Selector: son la referencia a los elementos HTML que queremos estilizar. Los nombres de estas etiquetas van seguidas de una llave de apertura y otra de cierre `({})`. Por ejemplo: h1 `{}`.
Propiedades: son el tipo de estilo que queremos darle a nuestros elementos. Van seguidas de dos puntos `(:)`. Las propiedades deben estar dentro de las llaves del selector que definimos anteriormente. Podemos escribir diferentes propiedades en un mismo selector. 

Por ejemplo: 

```css
h1 { color: }
```

Valores: son el estilo que queremos que tomen nuestros elementos HTML con respecto a una propiedad. Van seguidas de un punto y coma `(;)`. 

Por ejemplo: 

```css
h1 { color: red; }.
h1 {
  color: red;
}
```

  ## Tipos de selectores, pseudo-clases y pseudo-elementos

  - ***(asterisco)** Es el selector universal. Las propiedades se aplicaran a todos los elementos de nuestro HTML.

  - **Tipo:** Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplicaran a la etiqueta que queremos, por ejemplo p, body, html, div, etc.

  - **Clase:** Si nuestras etiqueta de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento.

  - **ID:** Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar solo ese elemento.

Las Pseudo-clases y Pseudo-elementos nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estilos.

Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase que queremos estilizar (por ejemplo: p:first-child). En el caso de los pseudo-elementos debemos usar el dos puntos 2 veces `(p::first-letter)`.

```css
/* Asterisco (universal) */
* {
  margin: 0;
}

/* Tipo */
h1 {
  color: red;
}

/* Clase */
.saludo {
  font-size: 2em;
}

/* ID */
#id {
  border-radius: 20px;
}

/* Pseudo-clases */
p:first-child {
  color: white;
}

p:last-child {
  color: purple;
}

p:nth-child(2n) {
  color: red;
}
```

![](img/p-css.webp)

[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

[Pseudo-elemnto](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

[Emoji keyboard](https://coolsymbol.com/emojis/emoji-for-copy-and-paste.html)

  ## Modelo de caja

Todos los elementos de HTML tienen un modelo de caja y esta compuesto por cuatro elementos: contenido, padding, border, margin.

Las propiedades de margin, padding, se asignan en dirección a las manecillas del reloj, como bien dicen en la clase. En caso de no poner todos los valores.

![](img/margin.webp)

No olvidemos el outline, que también hace parte del modelo de caja.

![](img/outline.webp)

**Ejemplo**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
body {
  margin: 0;
}

  .caja {
    background-color: black;
    width: 20px;
    height: 20px;
    padding: 20px;
    border: 2px solid red;
    border-radius: 50%;
    margin: 10px 30px 35px 50px;
  }

  .caja1 {
    background-color: pink;
    width: 10px;
    height: 10px;
    padding: 20px;
    border: 2px solid blue;
    border-radius: 50%;
    margin-bottom: 10px;

  }
</style>
<body>
  <div class="caja"></div>
  <div class="caja1"></div>
</body>
</html>
```

- [Pecular | color](https://picular.co/Video)
- [paletton | color](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)
- [coolors](https://coolors.co/001514-fbfffe-6b0504-a3320b-e6af2e)

  ## Valores relativos y absolutos

Los v**alores absolutos** son, por ejemplo, centímetros, milímetros, pixeles y pulgadas. Se llaman de esta forma porque no tienen en cuenta a nadie más, no depende de la medida de otra unidad.

Los **valores relativas**, llevan este nombre porque depende de otra unidad de medida o elemento. Por ejemplo, porcentajes, vmx, em, entre otros.

Recuerda que podemos darle estilos a etiquetas HTML muy específicas indicando dónde se van a encontrar. Por ejemplo: si queremos darle estilos únicamente a la imagen que está dentro del header, podemos usar el selector css `header img { ... }`.

No olvides resolver el desafío: crear tu propio header con las etiquetas y estilos que más te gusten para compartirlo en la sección de discusiones.

[Grabient | Backgrounds](https://cssgradient.io/gradient-backgrounds/)

**Medidas**

Las medidas en CSS es lo que nos permitirá establecer tamaños a fuentes, contenedores, iconos, imágenes, etcétera… Existen 2 tipos de medidas:

  - **Absolutas:** Es una medida que no cambia en ningún momento, se usan los pixeles.

  - **Relativas:** Son valores que sí cambian y son relativas a otros elementos.
Medidas EM

Em es un acrónimo de elemento y lo que hace es que toma el tamaño de fuente de su padre directo. Si un parrafo está encerrado en un div que tiene un tamaño fuente de 16px, entonces:

  - 1em → 16px
  - 2em → 32px
  - 1.5em → 24px

No es de las mejores medidas porque puede generar conflicto entre medidas ya que siempre toma la de su padre más cercano y esto puede cambiar el tamaño de los elementos sin que nos demos cuenta.

**Medidas REM**

*La etiqueta HTML tiene 16px de fuente por defecto

REM hace referencia a la etiqueta root de nuestro archivo HTML, la cual es la etiqueta `<html>`. Por lo tanto 1rem siempre será igual a 16px a no ser que cambiemos el tamaño de font-size del html. REM puede ser confuso de calcular y para esto existe un truco, el cual consiste en establecer el tamaño de fuente del html en 62.5% de esta forma:

  - 1rem → 10px
  - 1.6rem → 16px
  - 2rem → 20px

  ## Displays en CSS

Todos los elementos en CSS son cuadrados o rectángulos y aparte de eso, estos elementos tienen un comportamiento que se define a través de la propiedad display. Los display más comunes y usados son: block, inline, inline-block, none, table, flex y grid. Veamos de qué se tratan:

![](img/display.webp)

  ## Funciones de las propiedades CSS más usadas

**width:** Define el ancho de un elemento. Por ejemplo: `width: 20px;`.

**height:** Define el alto de un elemento. Por ejemplo: `height: 20px;`.

**background:** Puede definir el color de fondo o la url de fondo de un elemento. Por ejemplo: `background: url(';puppy.png';);`.

**background-color:** Define el color de fondo de un elemento. Por ejemplo: `background-color: red;`.

**color:** Define el color de nuestros textos. Estos colores los podemos escribir de 3 formas en CSS:

  - Con los **nombres de los colores.** Por ejemplo: `black, red, green`.
  - **Sistema hexadecimal:** Donde blanco se define como `#FFFFFF` y negro como #000000. Una página que me gusta mucho para sacar colores en hexadecimal es colorhunt.co.
  - **RGB:** Donde la R significa Red, G significa Green y B significa Blue; por lo que escribimos `rgb(red, green, blue)` y cada uno de ellos es un valor de 0 a 255 que describe la intensidad de ese color. Por ejemplo, para denotar el color verde, escribimos: `rgb(0, 255, 0)`. También a estos valores se les puede agregar una opacidad (transparencia) que va de 0 a 1, por ejemplo: `rgba(0, 255, 0, 0.5)` lo que quiere decir que el color verde lo queremos con una transparencia del 50%.

**border:** Define el tamaño, estilo y color del borde de un elemento. Por ejemplo: `border: 2px solid yellow;`.

**border-radius:** Define qué tan redondeado quiero mi elemento. Por ejemplo: `border-radius: 20px;`.

**margin:** Define la margen de un elemento. Por ejemplo: margin: `2px (lo que quiere decir que mi elemento tendrá márgenes en todos sus lados de 2px).

Si quiero que mi elemento tenga margen superior de 2px, margen inferior de 4px, margen derecha de 3px y margen izquierda de 5px, lo escribiría de la siguiente forma: `margin: 2px 3px 4px 5px;`. El primer valor es la margen superior y siempre va en sentido de las manecillas del reloj.

Si solo quiero que mi elemento tenga una margen a la derecha de 10px, escribiría `margin-right: 10px;`. Y para los demás valores sería `margin-top: 10px;` para la margen superior, `margin-bottom: 10px;` para la margen inferior y `margin-left: 10px;` para la margen izquierda.

**padding:** Define la distancia del borde de un elemento hasta su contenido. Por ejemplo: `padding: 2px` (lo que quiere decir que mi elemento tendrá un “margen interno” en todos sus lados de 2px).

Si quiero que mi elemento tenga padding superior de 2px, padding inferior de 4px, padding a la derecha de 3px y un padding a la izquierda de 5px, lo escribiría de la siguiente forma: `padding: 2px 3px 4px 5px`. El primer valor es la padding superior y siempre va en sentido de las manecillas del reloj al igual que con las márgenes.

Si solo quiero que mi elemento tenga un padding a la derecha de 10px, escribiría: `padding-right: 10px;`. Y para los demás valores sería `padding-top: 10px;` para la margen superior, `padding-bottom: 10px;` para la margen inferior y `padding-left: 10px;` para la margen izquierda.

**font-size:** Define el tamaño de la fuente. Por ejemplo: `font-size: 20px;`.

**font-family:** Define la familia tipográfica de la fuente. Por ejemplo: `font-family: 'Roboto', sans-serif;`.

Una página de fuentes que me gusta mucho es [fonts.google.com]().

**opacity:** Determina la transparencia del elemento. Tiene valores entre 0 y 1, que pueden verse como un porcentaje. Por ejemplo, si quiero que mi elemento se vea con una transparencia del 50%, escribiría: `opacity: 0.5;`.

**outline:** Un término algo desconocido es el esquema de los elementos HTML. Un esquema es una línea (por defecto, de color azúl) que se dibuja alrededor de los elementos que hace que “se destaquen”.

Lo anterior sucede mucho en elementos como los `<input>`s y los `<button>`s. Si no queremos ver esa línea, lo que hacemos es `outline: none;`. Aunque también podemos decirle que tenga determinado estilo, color, tamaño, entre otras. Por ejemplo:

```css
outline-style: solid;
outline-color: red;
outline-width: 5px;
```

**box-sizing:** Cuando trabajamos con paddings, por ejemplo, veremos que el tamaño de nuestro elemento crece. Es decir, si tengo:

```css
div {
   background: pink;
   width: 20px;
   height: 20px;
}
```

Y luego le agrego un padding de 20px, veré en el navegador que mi `div` ya no tiene un ancho y un alto de `20px`, sino de `40px` cada uno. Lo que quiere decir que el padding hizo que creciera mi elemento. Sin embargo, si yo no quiero que el padding afecte los 20px originales, le agrego la propiedad `box-sizing` para que el tamaño total del elemento incluya el padding también y no se vea afectado por él.

**transition:** Las transiciones CSS le permiten cambiar los valores de las propiedades sin problemas durante una duración determinada. Debemos tener presente que una transición NO es una animación. Una transición va de un punto A a un punto B sin interrupciones o saltos en medio.

Te comparto la siguiente documentación para que puedas visualizar las propiedades y valores que puedes utilizar:

  - [CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)
  - [Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
  - [CSS-TRICKS](https://css-tricks.com/almanac/properties/t/transition/)

**Animation:** Esta propiedad permite que animemos nuestros elementos.

Te comparto la siguiente documentación para que puedas visualizar las propiedades y valores que puedes utilizar:

  - [CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)
  - [Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
  - [CSS-TRICKS](https://css-tricks.com/almanac/properties/t/transition/)

  ## Posicionamiento en CSS

El posicionamiento en CSS es una de las cosas más importantes, pues establece cómo van a estar ubicados nuestros elementos en la pantalla.

En CSS los elementos se posicionan utilizando las propiedades top (superior), bottom (inferior), left (izquierda) y right (derecha), pero sólo funcionarán si la propiedad position está establecida. Esto quiere decir que si quiero que mi elemento div esté completamente a la derecha, debo escribir en mi CSS lo siguiente:

```bash
div { position: absolute: right: 0px; }
```

La propiedad `position` tiene 7 valores diferentes: relative, absolute, fixed, sticky, static, initial e inherit. Veremos de qué se tratan:

  ![](img/posi-css.webp)

  - [CSS Layout - The position Property](https://www.w3schools.com/css/css_positioning.asp)

# 4. Arquitectura CSS
  ## ¿Qué son y para qué nos sirven las arquitecturas CSS?

**Los objetivos son:**

  - **Predecible >** Escribir reglas claras.
  - **Reutilizable >** No escribir codigo redundante.
  - **Mantenible >** Que sea facil de leer y adaptarnos a los estandares.
  - **Escalable >** Que pueda crecer facilmente pero sin afectar el rendimiento.

**Buenas practicas**

  - Establecer reglas para que el equipo se entienda.
  - Explicar la estructura base o dar los fundamentos del proyecto a un nuevo integrante.
  - Evitar hojas de estilo muy extensas
  - Tener una buena documentación explicando ciertos aspectos del codigo.

  > estas cuatro características de una arquitectura óptima de CSS tienen una estrecha relación entre sí. La experiencia y la práctica te acercarán progresivamente a ellas permitiéndote a ti (y a los que hagan uso de tu código en un futuro) trabajar de forma más cómoda sobre una estructura eficiente y estable.
  
  ## OOCSS, BEM, SMACSS, ITCSS y Atomic Design

**OOCSS**

css orientado a objetos. Separa el diseño del contenido, así podemos reutilizar nuestro código.

```css
// ejemplo, en vez de para cada elemento una clase.
.globalWidth {
	width: 100%;
}
```

**BEM**

Block Element Modifier. Separa los elementos y los modificadores.

```css
.header {}  // bloque
.header__button--red {} // block, element, modifier
```

**SMACSS**

Scalable and Modular Arquitecture for CSS. Arquitectura de css escalable y modular. PAra eso se realizan cinco pasos.
  
  1. Dividir nuestro css en componentes base
  2. Definir Layout. Elementos que se utilizan solo una vez. ej. Footer, Header
  3. Definir Modulos. Componentes que se usan mas de una vez
  4. Definir Estados. Estos estados definen los cambios que existen en nuestros elementos/componentes. ej. Cambio de color cuando hacen hover
  5. Definir Temas. Separar los temas y sus cambios. Si tuvieras temas

**ITCSS**

Inverted Triangle CSS. Triangulo Invertido de CSS. Lo que nos indica esta metodologia es poder dividir todos nuestros archivos de css en ciertas partes para que no se mezclen.

Triangulo invertido, desde arriba hacia abajo:

  - Ajustes
  - Herramientas
  - Generico
  - Elementos
  - Objetos
  - Componentes
  - Utilidades

Especificidad: elementos o clases con mayor peso que otros.

  - Magnitud
  - Claridad

**Atomic Design**

Basados en la quimica.
Atomos < Moleculas < Organismos < Templates < Paginas

La eleccion de la metodologia depende del proyecto y del equipo

Anotacion: No es buena practica usar !important

- [An Introduction To Object Oriented CSS (OOCSS)](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
- [Get BEM](http://getbem.com/introduction/)
- [Scalable and Modular Architecture for CSS](http://smacss.com)
- [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
  
  ## Reto 2: Identifica el error de arquitectura del siguiente bloque de código

Una de las metodologías que podemos utilizar para organizar nuestro código es BEM (Bloque, Elemento, Modificador).

A continuación, te mostraré 3 bloques de código. Identifica cuál bloque de código es el indicado para usar esta metodología.

![](img/reto2-1.webp)

![](img/reto2-2.webp)

![](img/reto2-3.webp)

La ultima ya que podemos identificar

**Bloques:** main
**Elementos:** main__form
**Modificador:** main__form–input
# 5. Construcción de componentes
  ## ¿Qué es un componente? Analicemos nuestros diseños

Un componente, tanto en diseño como desarrollo web, es un elemento muy pequeño que tiene la capacidad de ser reutilizado en diferentes partes de una aplicación. Por ejemplo: botones, iconos, cards, entre otras. Puedes apreciarlos en las plataformas que visitas todos los días: Twitter, Facebook, Platzi, YouTube y muchas más.

- [Flexbox vs CSS Grid:¿Cuál es la diferencia?](https://platzi.com/blog/flexbox-vs-css-grid-cual-es-la-diferencia/)

- [Introduction to Storybook for React](https://storybook.js.org/docs/react/get-started/introduction)
- [Adding Storybook Style Guide to a Create React App](https://www.youtube.com/watch?v=va-JzrmaiUM)
  ## Estructura con HTML y BEM de un menú desplegable

- [Hrramientas de Design](https://iconos8.es)
- [IconMoon](https://icomoon.io)
- [Fontawesome](https://fontawesome.com)
  ## Estilizando nuestro menú desplegable con CSS

**Menu desplegable**

```html
<details>
  <summary>Label</summary>
  <ul>
  	<li>Item</li>
    <li>Item</li>
  </ul>
</details>
```

- [Fonts Google](https://fonts.google.com)
- [Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  ## Creación de un buscador

  - **Backround-image :** Con esto añadimos nuestra imagen, cómo parámetro en url() le pasaremos la ruta de nuestro icono.
  - **Backround-size:** Con esto le damos el tamaño a nuestro icono.
Backroung-repeat: Aquí le decimos que no se repita, por que si no lo hacemos nuestro icono hará un patrón por todo nuestro input; Prueba no colocandolo para que veas la magia.
  - **Backround-position-y:** Con esto vamos a centrar nuestro icono verticalmente
  - **background-position-x:** Con número positivos se moverá a la derecha, con negativos se moverá a la izquierda, es justo como un plano cartesiano 😉

Por si se quedaron con la duda de cómo colocar el título y el buscador al centro solo tienen que agregar esto al .main del css:

```css
/* maind */
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
```
  ## Creación de un carousel de imágenes con CSS: Estructura principal

Carrusel sin es croll:

```css
::-webkit-scrollbar {
      display: none;
}
```

Firefox, se le pone `scrollbar-width: none` al selector de nuestro carousel.

- [Pexels](https://www.pexels.com)
- [PostCSS sorting](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-postcss-sorting)
- []()
## Creación de un carousel de imágenes con CSS: Detalle de cada item

El selector ~ de CSS nos permite dar estilos a todos que cumplan los requisitos y sean “hermanos directos”, es decir, que tengan el mismo elemento padre.
Por ejemplo:

```css
.PrimerTitulo ~ h2 {
  background-color: red;
}
```

```html
<article class="ContenedorPadre">
  <h2 class="PrimerTitulo">Este es el primer elemento H2</h2>
  <!-- Este título tendrá color de fondo rojo -->
  <h2>Este es el segundo elemento H2</h2>
  <div class="ElementoPadreDiferente">
      <!-- Este título NO tendrá color de fondo rojo porque su padre es diferente -->
    <h2>Este es el tercer elemento H2</h2>
  </div>
  <!-- Este título también tendrá color de fondo rojo -->
  <h2>Este es el cuarto elemento H2</h2>
</article>
```

También existe el selector +. Solo aplica los estilos al primer hermano directo de nuestros elementos.
Por ejemplo:

```css
.PrimerTitulo + h2 {
  background-color: blue;
}
```

```html
<article class="ContenedorPadre">
  <h2 class="PrimerTitulo">Este es el primer elemento H2</h2>
  <!-- Este título SÍ tendrá color de fondo azul -->
  <h2>Este es el segundo elemento H2</h2>
  <div class="ElementoPadreDiferente">
      <!-- Este título NO tendrá color de fondo azul -->
    <h2>Este es el tercer elemento H2</h2>
  </div>
  <!-- Este título no tendrá color de fondo azul -->
  <h2>Este es el cuarto elemento H2</h2>
</article>
```
---

Si alguien necesita poner imágenes sin descargarlas puede usar la unsplash, dejo la documentación de su API y un ejemplo, es muy simple de usar:

[Unsplash Source](https://source.unsplash.com)

```bash
https://source.unsplash.com/random
```

Y si quieren diferentes que cada una pueden pasarle un parametro como término de busqueda

```bash
https://source.unsplash.com/random?movie
https://source.unsplash.com/random?people
```

---

Reto - Configurar el titulo, icons y opacidad

```css
  .carousel-item__details img {
    height: 15px;
  }
  .carousel-item__details p {
    margin: 0px
  }
  .carousel-item__details:hover {
    opacity: 1;
    color: white;
  }
```

# 6. Maquetación y diseño responsivo
  ## Flexbox


  
  ## Nuestro nuevo sistema de layout: CSS Grid


  
  ## Maquetación de la pantalla de login: Estructura HTML


  
  ## Maquetación de la pantalla de login: Estilización con CSS


  
  ## Estilización de inputs y footer en la pantalla de login


  
  ## Media queries


  
  ## Maquetación de la pantalla principal


  
  ## Reto 3: Maquetación de la pantalla de Not Found


  
7. Preprocesadores
¿Qué es un preprocesador, cuáles existen y cuáles son sus diferencias?
Instalación de SASS y configuración inicial
Hablemos de variables, herencia, anidamiento, operadores y más
8. Accesibilidad
La accesibilidad y nuestra responsabilidad como desarrolladores
Mejorando la accesibilidad de nuestra página de inicio
9. Conclusión
Conclusión del curso y paso siguiente
10. Bonus
Visualización de un botón usando storybook para HTML
Flexbox


