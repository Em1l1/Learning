# CSS Grid Layout

### Estefany Aguilar

# Tabla de Contenido

- [1. Lleva tus conocimientos de CSS a otro nivel](#1.-Lleva-tus-conocimientos-de-CSS-a-otro-nivel)
  - [Tips para llevar tu conocimiento de CSS a otro nivel + Quices](#Tips-para-llevar-tu-conocimiento-de-CSS-a-otro-nivel-Quices)
- [2. ¿De dónde venimos y en dónde estamos?](#2.-¿De-dónde-venimos-y-en-dónde-estamos?)
  - [¿Cómo fue pensado CSS cuando se creó?](#¿Cómo-fue-pensado-CSS-cuando-se-creó?)
  - [Limitaciones de CSS y el problema de los elementos flotantes](#Limitaciones-de-CSS-y-el-problema-de-los-elementos-flotantes)
  - [Herramientas que nos han facilitado el camino](#Herramientas-que-nos-han-facilitado-el-camino)
- [3. ¿Cómo se llegó al concepto de CSS Grid?](#3.-¿Cómo-se-llegó-al-concepto-de-CSS-Grid?)
  - [¿CSS Grid es una idea nueva? La evolución de la especificación](#¿CSS-Grid-es-una-idea-nueva?-La-evolución-de-la-especificación)
  - [¿Qué significa Grid para CSS?](#¿Qué-significa-Grid-para-CSS?)
- [4. Control de alineamiento](#4.-Control-de-alineamiento)
  - [Técnicas de alineamiento antes de CSS Grid: margin y line-height](#Técnicas-de-alineamiento-antes-de-CSS-Grid-margin-y-line-height)
  - [Técnicas de alineamiento antes de CSS Grid: table-cell y positions](#Técnicas-de-alineamiento-antes-de-CSS-Grid-table-cell-y-positions)
  - [Técnicas de alineamiento de CSS Grid: pros y contras](#Técnicas-de-alineamiento-de-CSS-Grid-pros-y-contras)
  - [Modos de escritura y ejes de alineamiento + Reto](#Modos-de-escritura-y-ejes-de-alineamiento-Reto)
  - [Propiedades físicas y lógicas en CSS + Quiz](#Propiedades-físicas-y-lógicas-en-CSS-Quiz)
  - [Técnicas de alineamiento con Flexbox](#Técnicas-de-alineamiento-con-Flexbox)
  - [Dibujemos con CSS + Reto](#Dibujemos-con-CSS-Reto)
- [5. Conceptos generales para comenzar a trabajar con CSS Grid](#5.-Conceptos-generales-para-comenzar-a-trabajar-con-CSS-Grid)
  - [Grid y las relaciones padre e hijos inmediatos + Quíz](#Grid-y-las-relaciones-padre-e-hijos-inmediatos-Quíz)
  - [Lines, tracks, cell, area, gutters, grid axis, grid row, grid column + Reto](#Lines-tracks-cell-area-gutters-grid-axis-grid-row-grid-column-Reto)
  - [¡Iniciemos nuestro proyecto! Fase de creatividad e identificación de elementos](#¡Iniciemos-nuestro-proyecto!-Fase-de-creatividad-e-identificación-de-elementos)
- [6. Propiedades y valores para el elemento padre](#6.-Propiedades-y-valores-para-el-elemento-padre)
  - [Creando nuestro contenedor: ¿display: grid o display: inline-grid?](#Creando-nuestro-contenedor-¿display-grid-o-display-inline-grid?)
  - [Creando filas, columnas y espaciado + Reto](#Creando-filas-columnas-y-espaciado-Reto)
  - [Alineamiento en el elemento contenedor + Quiz](#Alineamiento-en-el-elemento-contenedor-Quiz)
  - [Generación automática de tracks + Quíz](#Generación-automática-de-tracks-Quíz)
  - [Funciones: repeat(), minmax() y fit-content() + Quíz](#Funciones-repeat-minmax-y-fit-contentQuíz)
- [7. Propiedades y valores para los elementos hijos](#7.-Propiedades-y-valores-para-los-elementos-hijos)
  - [¡Manos al código! Fase de construcción de la grid principal de nuestro proyecto](#¡Manos-al-código!-Fase-de-construcción-de-la-grid-principal-de-nuestro-proyecto)
  - [Ubicación + Reto](#Ubicación-Reto)
  - [Alineamiento en los elementos hijos + Quiz](#Alineamiento-en-los-elementos-hijos-Quiz)
  - [¡Manos al código! Fase de ubicación y alineamiento](#¡Manos-al-código!-Fase-de-ubicación-y-alineamiento)
  - [Continuando con la fase de ubicación y alineamiento](#Continuando-con-la-fase-de-ubicación-y-alineamiento)
- [8. Lo que podemos lograr adicionalmente con CSS Grid](#8.-Lo-que-podemos-lograr-adicionalmente-con-CSS-Grid)
  - [Responsive y CSS Grid](#Responsive-y-CSS-Grid)
  - [Continúa con el Curso de Diseño Web con CSS Grid y Flexbox](#Continúa-con-el-Curso-de-Diseño-Web-con-CSS-Grid-y-Flexbox)

***

# 1. Lleva tus conocimientos de CSS a otro nivel
## Tips para llevar tu conocimiento de CSS a otro nivel + Quices

- [CSS2020](https://github.com/platzi/CSS2020)
- [CSS a otro nivel](https://www.canva.com/design/DAEQFfekgdU/0jutcPgG2ibsiVm_JON5yg/view?utm_content=DAEQFfekgdU&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)
- [CSS a toro nivel](doc/)

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

**CSS 2:**** nace en 1998, con correcciones con las limitaciones y el problema de los elementos FLOTANTES.

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

RESUMEN: En el principio usar CSS implicaba usar trucos, comenzando desde las columnas, columnas de tamaño completo, el diseño responsivo, etc. Era de esta manera debido a que no se tenían muchas herramientas.

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

  ## Técnicas de alineamiento antes de CSS Grid: table-cell y positions



  ## Técnicas de alineamiento de CSS Grid: pros y contras



  ## Modos de escritura y ejes de alineamiento + Reto



  ## Propiedades físicas y lógicas en CSS + Quiz



  ## Técnicas de alineamiento con Flexbox



  ## Dibujemos con CSS + Reto



5. Conceptos generales para comenzar a trabajar con CSS Grid
Grid y las relaciones padre e hijos inmediatos + Quíz
Lines, tracks, cell, area, gutters, grid axis, grid row, grid column + Reto
¡Iniciemos nuestro proyecto! Fase de creatividad e identificación de elementos
6. Propiedades y valores para el elemento padre
Creando nuestro contenedor: ¿display: grid o display: inline-grid?
Creando filas, columnas y espaciado + Reto
Alineamiento en el elemento contenedor + Quiz
Generación automática de tracks + Quíz
Funciones: repeat(), minmax() y fit-content() + Quíz
7. Propiedades y valores para los elementos hijos
¡Manos al código! Fase de construcción de la grid principal de nuestro proyecto
Ubicación + Reto
Alineamiento en los elementos hijos + Quiz
¡Manos al código! Fase de ubicación y alineamiento
Continuando con la fase de ubicación y alineamiento
8. Lo que podemos lograr adicionalmente con CSS Grid
Responsive y CSS Grid
Continúa con el Curso de Diseño Web con CSS Grid y Flexbox