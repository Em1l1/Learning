# CSS Grid Layout

### Estefany Aguilar

# Tabla de Contenido

- [1. Lleva tus conocimientos de CSS a otro nivel](#1-Lleva-tus-conocimientos-de-CSS-a-otro-nivel)
  - [Tips para llevar tu conocimiento de CSS a otro nivel + Quices](#Tips-para-llevar-tu-conocimiento-de-CSS-a-otro-nivel-Quices)
- [2. ¿De dónde venimos y en dónde estamos?](#2-¿De-dónde-venimos-y-en-dónde-estamos?)
  - [¿Cómo fue pensado CSS cuando se creó?](#¿Cómo-fue-pensado-CSS-cuando-se-creó?)
  - [Limitaciones de CSS y el problema de los elementos flotantes](#Limitaciones-de-CSS-y-el-problema-de-los-elementos-flotantes)
  - [Herramientas que nos han facilitado el camino](#Herramientas-que-nos-han-facilitado-el-camino)
- [3. ¿Cómo se llegó al concepto de CSS Grid?](#3-¿Cómo-se-llegó-al-concepto-de-CSS-Grid?)
  - [¿CSS Grid es una idea nueva? La evolución de la especificación](#¿CSS-Grid-es-una-idea-nueva?-La-evolución-de-la-especificación)
  - [¿Qué significa Grid para CSS?](#¿Qué-significa-Grid-para-CSS?)
- [4. Control de alineamiento](#4-Control-de-alineamiento)
  - [Técnicas de alineamiento antes de CSS Grid: margin y line-height](#Técnicas-de-alineamiento-antes-de-CSS-Grid-margin-y-line-height)
  - [Técnicas de alineamiento antes de CSS Grid: table-cell y positions](#Técnicas-de-alineamiento-antes-de-CSS-Grid-table-cell-y-positions)
  - [Técnicas de alineamiento de CSS Grid: pros y contras](#Técnicas-de-alineamiento-de-CSS-Grid-pros-y-contras)
  - [Modos de escritura y ejes de alineamiento + Reto](#Modos-de-escritura-y-ejes-de-alineamiento-Reto)
  - [Propiedades físicas y lógicas en CSS + Quiz](#Propiedades-físicas-y-lógicas-en-CSS-Quiz)
  - [Técnicas de alineamiento con Flexbox](#Técnicas-de-alineamiento-con-Flexbox)
  - [Dibujemos con CSS + Reto](#Dibujemos-con-CSS-Reto)
- [5. Conceptos generales para comenzar a trabajar con CSS Grid](#5-Conceptos-generales-para-comenzar-a-trabajar-con-CSS-Grid)
  - [Grid y las relaciones padre e hijos inmediatos + Quíz](#Grid-y-las-relaciones-padre-e-hijos-inmediatos-Quíz)
  - [Lines, tracks, cell, area, gutters, grid axis, grid row, grid column + Reto](#Lines-tracks-cell-area-gutters-grid-axis-grid-row-grid-column-Reto)
  - [¡Iniciemos nuestro proyecto! Fase de creatividad e identificación de elementos](#¡Iniciemos-nuestro-proyecto!-Fase-de-creatividad-e-identificación-de-elementos)
- [6. Propiedades y valores para el elemento padre](#6-Propiedades-y-valores-para-el-elemento-padre)
  - [Creando nuestro contenedor: ¿display: grid o display: inline-grid?](#Creando-nuestro-contenedor-¿display-grid-o-display-inline-grid?)
  - [Creando filas, columnas y espaciado + Reto](#Creando-filas-columnas-y-espaciado-Reto)
  - [Alineamiento en el elemento contenedor + Quiz](#Alineamiento-en-el-elemento-contenedor-Quiz)
  - [Generación automática de tracks + Quíz](#Generación-automática-de-tracks-Quíz)
  - [Funciones: repeat(), minmax() y fit-content() + Quíz](#Funciones-repeat-minmax-y-fit-contentQuíz)
- [7. Propiedades y valores para los elementos hijos](#7-Propiedades-y-valores-para-los-elementos-hijos)
  - [¡Manos al código! Fase de construcción de la grid principal de nuestro proyecto](#¡Manos-al-código!-Fase-de-construcción-de-la-grid-principal-de-nuestro-proyecto)
  - [Ubicación + Reto](#Ubicación-Reto)
  - [Alineamiento en los elementos hijos + Quiz](#Alineamiento-en-los-elementos-hijos-Quiz)
  - [¡Manos al código! Fase de ubicación y alineamiento](#¡Manos-al-código!-Fase-de-ubicación-y-alineamiento)
  - [Continuando con la fase de ubicación y alineamiento](#Continuando-con-la-fase-de-ubicación-y-alineamiento)
- [8. Lo que podemos lograr adicionalmente con CSS Grid](#8-Lo-que-podemos-lograr-adicionalmente-con-CSS-Grid)
  - [Responsive y CSS Grid](#Responsive-y-CSS-Grid)
  - [Continúa con el Curso de Diseño Web con CSS Grid y Flexbox](#Continúa-con-el-Curso-de-Diseño-Web-con-CSS-Grid-y-Flexbox)

***

# 1. Lleva tus conocimientos de CSS a otro nivel
## Tips para llevar tu conocimiento de CSS a otro nivel + Quices

- [CSS2020](https://github.com/platzi/CSS2020)
- [CSS a otro nivel](https://www.canva.com/design/DAEQFfekgdU/0jutcPgG2ibsiVm_JON5yg/view?utm_content=DAEQFfekgdU&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)
- [CSS a otroo nivel](https://drive.google.com/file/d/1BhluciAPvg-QMUQqLLpZKMA8ymqijlyx/view?usp=sharing)

  - **Tip 1:** No es necesario memorizar todas las propiedades y valores, lo importante es practicar.
  - **Tip 2:** Conoce los conceptos fundamentales de css: Esto es un tema amplio, lo importante es conocer los conceptos fundamentales de css como: layout, selectores, responsive, flujo normal, modelo de caja, herencia y cascada, Formatting Contexts.
  - **Tip 3:** Usar DevTools para encontrar errores y hacer pruebas rápidas, lo importante es ir al devtools y inspeccionar y buscar el error.
  - **Tip 4:** Saber qué herramientas te sirven para aprender y que herramientas nos te sirven para aprender, los resumenes nos son una buena forma de aprender, la mejor manera es hacer cursos, leer libros, leer documentación oficial.

# 2. ¿De dónde venimos y en dónde estamos?
  ## ¿Cómo fue pensado CSS cuando se creó?

Tim Berners Lee creó WWW y HTML en 1991:

(el tenía un hoja de estilos NO CSS, pero no quería compartirlo ya que pensaba que un feature así tenia que ser NATIVO).
1993:

  - **Viola(navegador),** tenía su propio lenguaje de estilos y queria convertirlo en un lenguaje estandara para la web.
1994:
  - **NSCA Mosaic(navegador),** tenía a Marc Andreessen como co-creador, les dijo a los desarrolladores que no había forma de trabajar con algo así(CSS).
  - **håkon wium lie:** sacó una propuesta para algo así CHSS .
Se dió a la luz presentando dicha propuesta inicial. debatiendo si cualquier usuario pudiera manipular los estilos.
1995:
  - **håkon y Bert Bos:** se unen y responder al 1er borrador en la conf de WWW en 1995.(algó que término siendo muy importante fue que sacarón la “H” y término siendo CSS)
Se siguió debatiendo el control del usuario sobre los estílos, esta idea término siendo rechazada.
  - **W3C:** saca una junta, ya que era de su interés.
**1996:**
**EL NACIMIENTO DE CSS:** La cual término naciendo por recomendación de W3C.

  Primeros navegadores Compatibles:

  - Internet Explorer 3
  - NETSCAPE
  - OPERA

**CSS 2:** nace en 1998, con correcciones con las limitaciones y el problema de los elementos FLOTANTES.

  ## Limitaciones de CSS y el problema de los elementos flotantes

- [Flexbox | CSS Grid](https://www.canva.com/design/DAEQKtu0pgw/0_OUYnbKV5OCsD7Tek97bw/view?utm_content=DAEQKtu0pgw&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton#11)

columnas falsas es una técnica que hace una ilusión cuando una columna es más pequeña que otra se la rellena de un background de tipo imagen

**Apuntes**

- Los primeros diseños de CSS eran una mezcla entre elementos flotantes y posicionados

  - Haciendo que se tengan limitaciones de control
  - Provocando que la información no se vea uniforme

Existía una frustración por la falta de columnas de altura completa

  - Para solucionarlo se creó una técnica de columnas falsas

Se empieza hablar de Diseño Responsivo

  - Ethan Marcotte ⇒ Tecnica de diseño responsivo

```css
@media screen and (max-width: 400px) {
.figure,
li#f-mycroft {
  margin-right: 3.317535545023696682%;    /* 21px / 633px */
  width: 48.341232227488151658%;          /* 306px / 633px */
}  li#f-watson,
li#f-moriarty {
  margin-right: 0;
}
}
```

Se empieza a trabajar con elementos flotantes

  - El problema está que solo funciona cuando se calcula con precisión el ancho y si el contenido tiene la misma altura
  - La solución fue que se comenzó a trabajar con columnas a través de contenedores para cada una y no con elementos independientes
  - Tambien se comienza a usar display: table que también se pueden utilizar para elementos que no son elementos de tablas

Existen una gran cantidad de técnicas que son simplemente trucos

  - Por ello CSS se ha visto difícil y frágil porque no había herramientas de diseño

En el principio usar CSS implicaba usar trucos, comenzando desde las columnas, columnas de tamaño completo, el diseño responsivo, etc. Era de esta manera debido a que no se tenían muchas herramientas.

  ## Herramientas que nos han facilitado el camino

**herramientas principales son:**

  - **Arquitecturas.**

    Cuando hacemos css tenemos una metodología de trabajo, que nos facilita el  programar.
  
  - **Pre y post procesadores**

    Agregar prefijos y propiedades de acuerdo en que navegador estemos trabajando. Aunque siempre hay que verificar sus pros y contras.
  
  - **Diseño de componentes.**

    Trabajar con componentes, a partir del elemento mas pequeño.
  
  - **Frameworks.**

    Modelos de trabajo que nos facilita crear diseños web.
  
  - **Performance**

    Verificar el rendimiento de nuestro código.
  
  - **Accesibilidad**

    Lograr que todas las personas puedan acceder a nuestros sitios web.

  - **Los Evergreen browsers** 
  
    Son navegadores que se actualizan constantemente a futuras versiones que existen.

# 3. ¿Cómo se llegó al concepto de CSS Grid?
  ## ¿CSS Grid es una idea nueva? La evolución de la especificación

  - **Rachel Andrew :**
  
    Fue una de las mujeres que empezó a contribuir para la comunidad de CSS alrededor del año 2012

  - **Jen Simmons :**
  
    Al igual que Rachel Andrew fue una mujer muy importante en esta comunidad, ya que coloco demasiadas contribuciones para css de Grid en la web

**CSS comenzó como algo muy simple.**

Era solo una forma de crear una vista de un documento en una pantalla pequeña muy simple en ese momento.

Hace veinte años, las pantallas eran muy pequeñas. Entonces, cuando vimos que podíamos hacer una hoja de estilo para documentos.

Cuando comenzaron en CSS pensaron tomar un diseño similar a las revistas

  - Las imágenes, textos, pie de páginas tenían ciertos lugares
  - Todo el documento tenía un sentido

Se tenía la idea de un sistema de layout

  - Microsoft necesitaba urgentemente una herramienta de diseño robusto y flexible para la web si la web iba a ser una opción para el desarrollo de aplicaciones nativas en windows

**Hubo 3 ideas fundamentales**

  - Idea de Microsoft
  - Diseño avanzado de Bos
  - Adición de líneas de cuadricula de Linss

Antes de que una recomendación candidata (Borrador Final) pueda convertirse en una recomendación propuesta, la W3C necesita ver al menos dos implementaciones independiendientes e interoperables

Hubo un cambio fundamental con CSS Grid

  - Jen Simmons ⇒ Colocó muchas demostraciones que creó para CSS Grid en la web

Sin el entusiasmo de los desarrolladores, proveedores de navegadores son reacios a gastar dinero para ver si la idea gana terreno

Los navegadores empezaron a sacar su compatible con los navegadores

  - La adopción de CSS Grid fue progresiva, fue algo que se tenía la idea de crear un layout de este tipo. Gracias al gran recibimiento que tuvo los proveedores de navegadores decidieron invertir en esta característica.

  ## ¿Qué significa Grid para CSS?

- [CSS3 Generator](https://css3generator.com)
- [Learn css brid](https://learncssgrid.com)
- [GRID GARDEN](https://cssgridgarden.com/#es)
- [cssreference.io](https://cssreference.io)
- [CSS-TRICKS](https://css-tricks.com/snippets/css/complete-guide-grid/)

  - CSS Grid requiera una forma completamente de pensar sobre el diseño en CSS.
  - Es una de las herramientas de diseño más poderosa inventada para CSS.
  - Es una alternativa más simple a diferencia de técnicas del pasado.

# 4. Control de alineamiento
  ## Técnicas de alineamiento antes de CSS Grid: margin y line-height

**Margin Collapse**

El colapso de márgenes ocurre cuando el margen top y bottom de 2 elementos colindan y el margen final es el que sea mayor. Es decir, si un elemento tiene margin-bottom: 20px y el otro elemento margin-top: 10px, el margen final entre ambos elementos no será de 30px, si no que será de solo 20px.
Cabe aclarar que esto ocurre cuando usamos el display por defecto block.

- [CodePen Home Alignment techniques · line-height · initial](https://codepen.io/teffcode_/pen/JjREaVK?editors=1100)
- [Entendiendo el colapso de margen](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [El caso del colapso de márgenes en CSS](https://cybmeta.com/colapso-de-margenes-en-css)
- [Live Sass Compiler](https://www.youtube.com/watch?v=A1tyKkkziTc)

Margin auto:
Para explicarlo en palabras sencillas se necesita comprender que:
1. Cuando se establece el margin: 0 auto; lo que hace el navegador es establecer el tamaño de los márgenes izquierdo y derecho por igual, además de que el superior e inferior tendrán 0 de margen, así:

```css
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
```

2. Por lo tanto como en este caso, el contenedor padre tiene un width: 180px; (espacio celeste) y el elemento del padre un width: 60px; (espacio rosado o celeste-claro), DETERMINARÁ que hay 120px de espacio libre para compartir entre `margin-left y margin-right`:

Si se representaría de forma lógica en javascript:

```javascript
var espacioLibre = 180 - 60; // 120
var porcionEquilibrada = espacioLibre / 2; // 2 porque se aplica hacia el eje x (izquierda y derecha)
```

Lo que daría:

```js
margin-left: 60px;
margin-right: 60px;
Y para el contenedor que va hacía la derecha (margin: 0 0 0 auto;), sería:

var espacioLibre = 180 - 60; // 120
var porcionEquilibrada = espacioLibre / 1 //esto porque solo se aplica hacía la izquierda (margin-left)
y quedaría:

margin-left: 120px;
```
  ## Técnicas de alineamiento antes de CSS Grid: table-cell y positions

- [Course · CSS Grid (Clase 8)](https://www.canva.com/design/DAEPv-8YXhU/f-h1db2rteK-JrSBlWQCmQ/view?utm_content=DAEPv-8YXhU&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton#13)
- [Centering in CSS: A Complete Guid](https://css-tricks.com/centering-css-complete-guide/)


- [Alignment techniques · positions · initial](https://codepen.io/teffcode_/pen/bGwgxXm)
  ## Técnicas de alineamiento de CSS Grid: pros y contras

- [Pros y Contras de las tecnicas de alineamiento antes de css Grid](https://www.canva.com/design/DAEPx_rxzag/bZs1WSOkdrs4i9brspUiTA/view?utm_content=DAEPx_rxzag&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)
- [wextensible](https://www.wextensible.com/temas/css3-alinear/block.html)

  ## Modos de escritura y ejes de alineamiento + Reto

- [Writing modes](https://www.canva.com/design/DAEPwdLmsWI/GfZVmQN4tivhrfzEMRSjkw/view?utm_content=DAEPwdLmsWI&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

![](https://i.ibb.co/47tZ52v/writing.png)

Un cuadro resumen de como se vería cada propiedad writing mode aplicada.

### [overflow (excedente)](https://developer.mozilla.org/es/docs/Web/CSS/overflow)

  - **visible**

Valor por defecto. El contenido no es recortado, podría ser dibujado fuera de la caja contenedora.
  - **hidden**

El contenido es recortado y no se muestran barras de posición.
  - **scroll**

El contenido es recortado y el navegador web usa las barras de desplazamiento, se haya recortado contenido o no. Esto previene cualquier problema con las barras de desplazamiento apareciendo o desapareciendo en un entorno dinámico. Puede que las impresoras impriman contenido excedente.
  - **auto**

Depende del agente de usuario. Navegadores de escritorio como Firefox proveen barras de desplazamiento si hay contenido excedente.
  ## Propiedades físicas y lógicas en CSS + Quiz

[CSS Logical Properties](https://www.canva.com/design/DAEPwadrvmg/ldmhPG0L9qzRRhjTaYO9KQ/view?utm_content=DAEPwadrvmg&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

### MODELOS DE CAJA (Físicas - Lógicas)

#### Propiedades físicas

```css
MARGIN: margin-top | Margin-left | Margin-right | Margin-bottom

PADDING: padding-top | paddding-left | padding-right | padding-bottom

BORDER (-size-style-color): border-top | border-left | border-right | border-bottom

POSITIONS top | left | right | bottom.
```
#### Propiedades Lógicas

```css
MARGIN: Margin-block-start | Margin-inline-start | Margin-inline-end | Margin-block-end

PADDING padding-block-start | paddding-inline-start | padding-inline-end | padding-block-end

BORDER(-size-style-color): border-block-start | border-inline-start | border-inline-end | border-block-end.

POSITIONS: inset-block-start | inset-inline-start | inset-inline-end | inset-block-end
```

- [Caniuse | Compatibilidad en navegadores](https://caniuse.com)
  ## Técnicas de alineamiento con Flexbox

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Tecnica de alineamiento con flexbox](https://www.canva.com/design/DAEPwlhbCcE/TI_WagM_hIe6RoURIJOJeA/view?utm_content=DAEPwlhbCcE&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

- [Alignment techniques · Flexbox · final](https://codepen.io/teffcode_/pen/dypNgoR)

- [Guia definitiva de flexbox (1) - Main Axis y Cross Axis](https://www.youtube.com/watch?v=_YUJ37FARrU)

  ## Dibujemos con CSS + Reto
  
- [DIBUJEMOS CON CSS + RETO](https://www.canva.com/design/DAEPwqvMuoM/HEntrkxBUyi9yl8ALkuiNQ/view?utm_content=DAEPwqvMuoM&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)
- [Single div](https://a.singlediv.com)
- [DotCSS | Make CSS you secret super drawing tool](https://www.youtube.com/watch?v=Y0_FMCji3iE)
- [Dotconferences](https://www.youtube.com/channel/UCSRhwaM00ay0fasnsw6EXKA)
- [No tengas miedo a dibujar con CSS](https://dev.to/raulmar/no-tengas-miedo-a-dibujar-con-css-1ck)
- [gigantic](https://gigantic.store/gigantic-flat-design-illustration-bundle-2/)

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="container">
       <div class="head">
        <div class="cuello"></div>
        <div class="eye-left"></div>
        <div class="eye-right"></div>
        <div class="barba"></div>
        <div class="sonrisa"></div>
        <div class="dientes"></div>
        <div class="negro"></div>
        <div class="ceja"></div>
        <div class="nariz"></div>
        <div class="ear-left"></div>
        <div class="ear-right"></div>
        <div class="point-eye-left"></div>
        <div class="point-eye-right"></div>
        </div> 
    </div>
</body>
</html>
```

**CSS**

```
:root{
    --skin: #f6c09c;
    --background: #ed4842;
    --red: #ed2850;
    --dark-red: #680254;
    --black: #00243a;
    --white: #fff;

}

body{
    margin: 0;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.head{
    width: 100px;
    height: 180px;
    background-color: var(--skin);
    border-radius: 50px;
    position: relative;
}

.ceja{
    width: 100%;
    height: 10px;
    background-color: var(--skin);
    position: absolute;
    top: 54px;
}

.eye-left{
    width: 20px;
    height: 20px;
    background-color: var(--white);
    position: absolute;
    top: 60px;
    border-radius: 50%;
    left: 32px;
}


.eye-right{
    width: 20px;
    height: 20px;
    background-color: var(--white);
    position: absolute;
    top: 60px;
    border-radius: 50%;
    left: 52px;
}

.nariz{
    width: 25px;
    height: 25px;
    background-color: var(--skin);
    position: absolute;
    border-radius: 15px;
    top: 80px;
    left: 40px;
}

.barba{
    width: 100px;
    height: 100px;
    background-color: var(--black);
    position: absolute;
    top: 90px;
    border-radius: 30px;
}

.cuello{
    width: 55px;
    height: 35px;
    background-color: var(--skin);
    opacity: 0.7;
    position: absolute;
    left: 23px;
    top: 180px;
}

.sonrisa{
    width: 45px;
    height: 28px;
    background-color: var(--red);
    position: absolute;
    border-radius: 20px;
    left: 28px;
    top: 110px;
}

.dientes{
    width: 30px;
    height: 8px;
    background-color: var(--white);
    position: absolute;
    left: 28px;
    top: 117px;
}

.negro{
    width: 50px;
    height: 8px;
    background-color: var(--black);
    position: absolute;
    left: 30px;
    top: 109px;
}

.ear-left{
    width: 15px;
    height: 15px;
    background-color: var(--skin);
    position: absolute;
    border-radius: 20px;
    left: -10px;
    top: 80px;
}

.ear-right{
    width: 15px;
    height: 15px;
    background-color: var(--skin);
    position: absolute;
    border-radius: 20px;
    left: 94px;
    top: 80px;
}

.point-eye-left{
    width: 5px;
    height: 5px;
    background-color: var(--black);
    position: absolute;
    border-radius: 20px;
    left: 40px;
    top: 68px;
}

.point-eye-right{
    width: 5px;
    height: 5px;
    background-color: var(--black);
    position: absolute;
    border-radius: 20px;
    left: 60px;
    top: 68px;
}
```

# 5. Conceptos generales para comenzar a trabajar con CSS Grid

  ## Grid y las relaciones padre e hijos inmediatos + Quíz

- [Grid ylas relaciones padre e hijos inmediatos](https://www.canva.com/design/DAEW0j7Iqqk/4wH6BM4jurjRl9rba-spuQ/view?utm_content=DAEW0j7Iqqk&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

  ## Lines, tracks, cell, area, gutters, grid axis, grid row, grid column + Reto

- [Lines, tracks...](https://www.canva.com/design/DAEW0pSs00Q/MnL5x4rrSaC7U5F_-1fWQQ/view)

  ## ¡Iniciemos nuestro proyecto! Fase de creatividad e identificación de elementos

- [Fase de creatividad e identificaci&oacute;n de elementos](https://www.canva.com/design/DAEQWdX-R6U/UNyZt4I2GoerlNT43617rA/watch?utm_content=DAEQWdX-R6U&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

**Im&aacute;genes libres**

- [Pixabay](https://pixabay.com/es/)
- [freepik](https://www.freepik.es)
- [Pexels](https://www.pexels.com)

**Tipogr&aacute;fia**

- [GoogleFonts](https://fonts.google.com)

**Paleta de colores**

- [Palette](https://www.materialpalette.com)

# 6. Propiedades y valores para el elemento padre

## Creando nuestro contenedor: ¿display: grid o display: inline-grid?

![](https://i.ibb.co/fvYQZgN/diferencias.webp)

- Display ⇒ Desplegar, colocar a la vista, exhibir, lucir, Mostar, presentar

- Outer ⇒ Denota cómo se comporta un elemento en relación a los otros

- Inner ⇒ como se comportan los hijos directos del elemento.

  - Display ⇒ Define el tipo de visualización de un elemento
    
    - Valores:
      - Inner
      - Outer

    - Los valores block e inline definen dos cosas
      - Valor externo (Outer)
      - Valor interno (Inner)

    - Cuando usamos `display: grid;` estamos diciendo `display: block grid`;
      - Es decir que su comportamiento externo sera de tipo bloque

    - Un elemento que tenga los atributos de bloque puede tener:
      - Margin y padding
      - width
      - height

    - Si pensamos en `display: inline-flex;` su relación con otros elementos no sera de bloque sino de línea
    - Siempre volvemos al flujo normal del documento

  - La diferencia entre grid e inline-grid es el comportamiento externo que tienen con otros elementos, usando grid sera de tipo bloque y usando inline-grid sera de tipo inline.

- [Dislplay: grid | inline-grid](https://www.canva.com/design/DAEPfFLZaPQ/KCwKnf-IVl5Rinrh1eGSCA/view?utm_content=DAEPfFLZaPQ&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)
- [Los Elementos Block Y Elementos Inline](https://www.psdahtmlpasoapaso.com/blog/los-elementos-block-y-elementos-inline-fundamental/)

## Creando filas, columnas y espaciado + Reto

```css
.container {
    display: grid;
    grid-template: repeat(4, 20px) / repeat(4, 20px);
}
```
![](https://i.ibb.co/B3Q8CZs/www.webp)

- Para poder crear columnas debemos usar grid-template-columns
- Para crear filas debemos usar grid-template-rows
- Para crear una grid debemos escribir en el CSS

- [Columnas | Filas CSS Grid](https://www.canva.com/design/DAEPC3ca3BQ/Dldv9zjYSIE0LBb-BzEQng/view?utm_content=DAEPC3ca3BQ&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton#2)

```css
.container {
	display: grid;
	grid-template-columns: 20px 20px 20px;
	grid-template-rows: 20px 20px 20px;
}
```

- Pero si deseamos acortar esta forma podemos usar repeat

```css
.container {
	display: grid;
	grid-template-columns: repeat(3, 20px);
	grid-template-rows: repeat(3, 20px);
}
```

- Además, que grid cuenta con un shorthand

```css
.container {
	display: grid;
	grid-template: repeat(3, 20px);
}
```

Si deseamos tener un espacio interno podemos usar la propiedad gap

  - Existen varias maneras de implementarlo

    - Antigua

```csss
.container {
	display: grid;
	grid-template: repeat(3, 20px);
	grid-column-gap: 5px;
	grid-row-gap: 5px;
}
```

- Antigua corta

```css
.container {
	display: grid;
	grid-template: repeat(3, 20px);
	grid-gap: 5px 5px;
}
```

- Standard

```css
.container {
	display: grid;
	grid-template: repeat(3, 20px);
	column-gap: 5px;
	row-gap: 5px;
}
```

- Standard corta

```css
.container {
	display: grid;
	grid-template: repeat(3, 20px);
	gap: 5px 5px;
}
```

- Tenemos el areas, para poder ubicar elementos de una manera más sencilla

```css
.container {
	display: grid;
	grid-template: repeat(5, 20px) / repeat(5, 20px);
	grid-template-areas: 
		"header header header header header"
		"header header header header header"
		"main main . sidebar sidebar"
		"main main . sidebar sidebar"
		"footer footer footer footer sidebar"
}
```

![](https://i.ibb.co/cQxNZ3x/www1.webp)

## Alineamiento en el elemento contenedor + Quiz

- [Alineamiento](https://www.canva.com/design/DAEPfCLFLTM/wthWMlp0-8TWRlSbb_hhlg/watch?utm_content=DAEPfCLFLTM&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

## Generación automática de tracks + Quíz

## Funciones: repeat(), minmax() y fit-content() + Quíz

7. Propiedades y valores para los elementos hijos
¡Manos al código! Fase de construcción de la grid principal de nuestro proyecto
Ubicación + Reto
Alineamiento en los elementos hijos + Quiz
¡Manos al código! Fase de ubicación y alineamiento
Continuando con la fase de ubicación y alineamiento
8. Lo que podemos lograr adicionalmente con CSS Grid
Responsive y CSS Grid
Continúa con el Curso de Diseño Web con CSS Grid y Flexbox
