# Accesibilidad Web
#### Juliana Gomez

# Tabla de Contenido
- [Accesibilidad](#Accesibilidad)
- [¿Por qué accesibilidad?](#¿Por-qué-accesibilidad?)
  - [Historia de WCAG](#Historia-de-WCAG)
  - [¿Qué es WCAG?](#¿Qué-es-WCAG?)
- [Los cuatro principio](#Los-cuatro-principio)
- [Tecnologías asistivas](#Tecnologías-asistivas)
- [3. Evaluar la accessibilidad de sitios web](3.-Evaluar-la-accessibilidad-de-sitios-web)
- [Pruebas con simuladores de discapacidades visuales](#Pruebas-con-simuladores-de-discapacidades-visuales)
- [Pruebas manuales con tu teclado](#Pruebas-manuales-con-tu-teclado)
- [Pruebas manuales con tu teclado](#Pruebas-manuales-con-tu-teclado)
- [Pruebas manuales con lectores de pantalla](#Pruebas-manuales-con-lectores-de-pantalla)
- [Pruebas manuales con VoiceOver](#Pruebas-manuales-con-VoiceOver)
- [4. Refactorizar HTML para ser mas accessible](#4.-Refactorizar-HTML-para-ser-mas-accessible)
  - [¿Qué es el HTML semántico y por qué es importante?](#¿Qué-es-el-HTML-semántico-y-por-qué-es-importante?)
  - [Usando HTML semántico en el header de nuestro sitio](#Usando-HTML-semántico-en-el-header-de-nuestro-sitio)
  - [](#)
  - [](#)


  ## Accesibilidad 
La pr&aacute;ctica continua de asegurarnos que todo lo que creamos para la web se puede usar, interpretar y operar por una variedad de personas en una variedad de situaciones **a11y** -> numer&oacute;nimo de accesibilidad.

## ¿Por qué accesibilidad?

  * Para incluir a personas en situaciones de discapacidad.
 
  * Para mejorar la usabilidad de nuestros proyectos.
   
  * Porque en algunos lugares es la ley.

### ¿Qué es WCAG? 

En inglés son las Web Content Accessibility Guidelines o en español las Pautas de Accesibilidad para el Contenido Web. Un rango de recomendaciones para crear contenido web más accesible.

### Historia de WCAG

W3C - World Wide Web Consortium : Creadores de los estándares que usamos para construir la web.

WAI - Web Accessibility Initiative : Iniciativa dentro de W3C cuya meta es asegurar la accesibilidad web.

[Introducción a las Pautas de Accesibilidad para el Contenido Web (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/es)

[Accessibility Inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector)

 ***Los 3 niveles son:***

  A - nivel basico

  AA - nivel intermedio

  AAA - nivel avanzado al cual debemos apuntar si trabajamos en servicios del gobierno, universidades o servicios esenciales de la vida cotidiana.

  ## **Los cuatro principio:**

| Perceptieble | Operables | Comprensible | Robusto |
|-----|:------:|:-----:|--------|
|1. Tratar de que todos los usuarios de una manera sencilla y fácil puedan percibir nuestro sitio.| 2. Tratar que nuestra sitio se pueda utilizar con otras herramientas que no sean el mouse o teclado.| 3.  Tratar de que nuestra sitio sea el usuario pueda entenderlo fácilmente.| 4. Que nuestro sitio puedo utilizar de mejor posible las herramientas (performance).|

 ## **Tecnologías asistivas:**

  **Visuales**

  - Lectores de pantallas
  - Extensiones que manipulan el CSS.

  **Motoras**

  - Varilla bucal
  - Switch

# 3. Evaluar la accessibilidad de sitios web

  ## Pruebas con simuladores de discapacidades visuales


  **Discapacidades visuales**

  - Visi&oacute;n borrosa
  - Protanopia
  - Deuteranopia
  - Acromatopsia

   Extensions google-chrome [NoCoffe](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)

  ![](img/acc.webp)

  ## Pruebas manuales con tu teclado
  El teclado es muy importante en la accesibilidad web porque las tecnologías asistivas tienden a conectarse con el teclado para darle a sus usuarios diferentes maneras de navegar cuando no tienen acceso a un mouse o un teclado como nosotros.

Los elementos que reciben foco de teclado son elementos interacctivos:

  Enlaces: nos llevan a otra página, son para la navegación.
  Botones: nos ayudan a interactuar con la página de alguna manera.
  Formularios: requieren nuestra interacción para llenar nuestros datos.

Los div no reciben foco porque son un elemento presentacional, no esperan ninguna interacción a menos de que tú lo programes.

## Pruebas manuales con lectores de pantalla

Lectores de Pantalla: Software que mapea las páginas que usamos y las lee en voz alta.

Combinaciones de lectores de pantalla y navegadores:

NVDA - Mozilla Firefox
JAWS - Internet Explorer
VoiceOver - Safari
ChromeVox - Google Chrome
Apartado de Chorme DevTools → En Elements → Accessibility → Accessibility Tree

## Prueba manuales con VoiceOver

**Comando para ChromeVox:**

ChromeVox modifier key = Search

Turn on braille captions = Search + A, B

Show ChromeVox Menus = Search + Period

Next heading = Search + H

Previous heading = Search + Shift + H

Enter Learn Mode = Search + O, K

Next group = Search + Ctrl + Down

Next object = Search + Right

Next line = Search + Down

Next word = Search + Shift + Ctrl + Right

Next character = Search + Shift + Right

# 4. Refactorizar HTML para ser mas accessible

  ## ¿Qué es el HTML semántico y por qué es importante?

  El HTML semántico nos ayuda con algunos aspectos de presentación y le agrega significado a nuestro contenido en el navegador.

  ![](img/-html.webp)

  Html semántico es saber usar las etiquetas Html y no solo usar `<div>` para todo.

**Utilizar código semántico ofrece varias ventajas:**

- Posicionamiento en buscadores.
- Accesibilidad.
- Practicidad.
- Reusabilidad.

## Usando HTML semántico en el header de nuestro sitio

`<headers></headers>` Es la parte superior de nuestra pagina Lo primero que ve el usuario en cuanto orden.

`<img>` Es la etiqueta para poner imágenes, y tiene el atributo alt="El lector de pantalla lee lo que esta aqui.

`<nav></nav>` Es para colocar un menú de navegación.

`<ul></ul>` Es para poner una lista que no tiene un orden especifico.

`<li></li>` Un elemento de lista.

> *Consejo:* Para cambiar la etiqueta de apertura y cierre al mismo tiempo presiona F2 al lado del nombre de la etiqueta de apertura o cierre.

## ARIA - Accessible Rich Internet Applications

ARIA ( Accessible Rich Internet Applications ): Un conjunto de atributos especiales para accesibilidad que pueden añadirse a cualquier etiqueta, pero especialmente adaptado a HTML.

Fue creado por la W3C, lo crearon para que podamos comunicar cambios especiales en nuestras aplicaciones.

* [ARIA]: Accessible Rich Internet Applications
* [W3C]: World Wide Web Consortium


**Atributos de ARIA:**

  - Roles
  - Propiedades
  - Estados
