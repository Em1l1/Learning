# HTML Y CSS

### 

# Tabla de Contenido

- [1. Internet](#1-Internet)
  - [¡Bienvenido al Curso!](#¡Bienvenido-al-Curso!)
  - [¿Qué conocimientos me recomiendan para tomar este curso?](#¿Qué-conocimientos-me-recomiendan-para-tomar-este-curso?)
  - [¿Cómo se construye la tecnología web?](#¿Cómo-se-construye-la-tecnología-web?)
  - [¿Cómo instalar ATOM?](#¿Cómo-instalar-ATOM?)
  - [Comprendamos Internet](#Comprendamos-Internet)
- [2. Los básicos del web](#2-Los-básicos-del-web)
  - [¿Cómo funciona HTML?](#¿Cómo-funciona-HTML?)
  - [Etiquetas y sus atributos](#Etiquetas-y-sus-atributos)
  - [Reto 1: crea tu fiesta de gifs](#Reto-1-crea-tu-fiesta-de-gifs)
  - [¿Cómo funciona CSS?](#¿Cómo-funciona-CSS?)
  - [¿Cómo funciona JavaScript?](#¿Cómo-funciona-JavaScript?)
  - [Hola mundo y estructura del proyecto](#Hola-mundo-y-estructura-del-proyecto)
  - [Listado de las etiquetas más usadas](#Listado-de-las-etiquetas-más-usadas)
- [3. Construcción de un producto digital](#3-Construcción-de-un-producto-digital)
  - [Paper wireframe](#Paper-wireframe)
  - [¿Cómo instalar XD?](#¿Cómo-instalar-XD?)
  - [Diseño de interfaces](#Diseño-de-interfaces)
  - [Maquetación de la NavBar](#Maquetación-de-la-NavBar)
  - [Maquetación de main_section y agregando estilos CSS](#Maquetación-de-main-section-y-agregando-estilos-CSS)
  - [Maquetación de tarjetas de producto](#Maquetación-de-tarjetas-de-producto)
  - [Fuentes personalizadas y variables de CSS](#Fuentes-personalizadas-y-variables-de-CSS)
  - [Categorizando etiquetas según nuestra estructura en HTML](#Categorizando-etiquetas-según-nuestra-estructura-en-HTML)
  - [Reto 2: Maquetar el home del producto digital](#Reto-2-Maquetar-el-home-del-producto-digital)
  - [Reglas responsive](#Reglas-responsive)
  - [Animaciones y transiciones](#Animaciones-y-transiciones)
- [4. Integrando otras herramientas](#4-Integrando-otras-herramientas)
  - [Atributos especiales de las etiquetas para mejorar el funcionamiento de nuestros formularios](#Atributos-especiales-de-las-etiquetas-para-mejorar-el-funcionamiento-de-nuestros-formularios)
  - [Librería vs Framework](#Librería-vs-Framework)
  - [Sistema de Grillas](#Sistema-de-Grillas)
  - [Completando el Sistema de Grillas](#Completando-el-Sistema-de-Grillas)
  - [Reto 3: implementación del sistema de grillas](#Reto-3-implementación-del-sistema-de-grillas)
  - [Maquetación del formulario](#Maquetación-del-formulario)
  - [Creación de formulario: inputs](#Creación-de-formulario-inputs)
  - [Creación de formulario: botones](#Creación-de-formulario-botones)
  - [¿Cómo crear tu cuenta en Paypal?](#¿Cómo-crear-tu-cuenta-en-Paypal?)
  - [Configuración del botón de pago con Paypal](#Configuración-del-botón-de-pago-con-Paypal)
  - [Autofill del formulario de PayPal](#Autofill-del-formulario-de-PayPal)
  - [Maquetación de pantalla de éxito y error](#Maquetación-de-pantalla-de-éxito-y-error)
- [5. Deploy](#5-Deploy)
  - [Testing con el Navegador](#Testing-con-el-Navegador)
  - [Cómo crear tu cuenta en Github](#Cómo-crear-tu-cuenta-en-Github)
  - [Subiendo nuestro proyecto a Internet con Github](#Subiendo-nuestro-proyecto-a-Internet-con-Github)
- [6. Conclusión](#6.-Conclusión)
  - [Conclusiones](#Conclusiones)
- [7. Bonus](#7-Bonus)
  - [Librería vs Framework](#Librería-vs-Framework)

---

# 1. Internet

  ## ¡Bienvenido al Curso!

En este curso vamos a aprender a diseñar y programar productos digitales, vamos a utilizar Adobe XD como herramienta de diseño y Paypal para soportar pagos en línea. En esta ocasión nos acompaña Rulótico González, diseñador y programador al mismo tiempo en SABLE STUDIO.

  ### Frontend ---- Backend
Frontend: la parte visual e interactiva de un sitio o un web app para el usuario.
Backend: funciones básicas; CRUD - Create, Read, Update, Delete
funcionalidad, bases de datos, host. Podemos decir el motor. Conexiones entre back y front.

  ### HTML - CSS - JS

**HTML:** Hyper Text Markup Language - Estructura del sitio - Partes, etiquetas, etc.
**CSS:** Cascading Style Sheet - Estilo del sitio, colores, tamaños, espaciados, animaciones.
**JS:** JavaScript - Interacción dinámica con el usuario, como manejo de variables de datos de usuario, modificación de DOM (o elementos en la estructura HTML), animaciones complejas, manipulación de APIs, etc.

  ## ¿Qué conocimientos me recomiendan para tomar este curso?

Estamos felices de que quieras fortalecer tus destrezas como desarrollador Frontend. Si quieres crear una página web, aprender a bocetarla, maquetarla y darle estilo este curso es para ti.

Antes de comenzar con las primeras clases quiero hacerte algunas recomendaciones de algunos conocimientos previos o paralelos que podrías repasar para aprovechar mucho mejor los ejercicios prácticos que nuestro profesor Raúl “Rulótico” González realiza a lo largo de todos los módulos del curso.

Curso de desarrollo web online:
Este curso te explicará de manera detallada todas las bases conceptuales para entender el proceso y uso de HTML.

Curso de Responsive Design:
Este curso te permitirá entender los procesos detrás de las buenas prácticas para hacer tu producto digital responsivo.

Curso de CSS Grid Layout:
Nuestro profesor usa el framework Bootstrap en varias clases de este curso. Aunque es una gran forma de resolver la maquetación de las Grids o grillas de tu página web, es importante que comprendas el origen de este proceso.

¿Quieres comenzar las clases de nuestro curso de HTML y CSS sin ver estos cursos? Claro que puedes hacerlo, varios estudiantes lo han hecho y han logrado llegar hasta el final. Estas recomendaciones están especialmente diseñadas para aquellos que están comenzando en el maravilloso mundo de la programación frontend.

  ## ¿Cómo se construye la tecnología web?

El **Frontend** es la parte del software que interactúa con los usuarios, en cambio, el **Backend** es la parte que no puedes ver, esta oculta porque contiene la información privada o sensible de nuestros usuarios.

HTML nos permite crear la estructura de la página: títulos, párrafos, menús, etc. CSS nos permite configurar los estilos del HTML, los colores, formas, posiciones, etc. Además, JavaScript (JS) se encarga de la parte funcional, nos permite conectarnos con otros servicios (como PayPal) y nos ayuda a hacer las interacciones mucho más fluidas.

Los **Compiladores** nos ayudan a construir el frontend de nuestras páginas web de forma mucho más rápida y sencilla. En vez de escribir el mismo código una y otra vez, vamos a utilizar estas herramientas para obtener estos mismos resultados de forma automatizada.

El trabajo y las operaciones del backend se pueden resumir con las siglas **CRUD:** Create, Read, Update y Delete. Cuando el frontend se comunica con el backend, debe indicar el tipo de operación y los datos necesarios para que todo funcione correctamente.

Por ejemplo: cuando registramos un usuario, el frontend debe mandar los nombres y contraseña de este usuario para que, el backend, pueda guardar esta información en la base de datos y podamos consultarla más adelante.

- [Desarrollo de páginas web](https://platzi.com/blog/como-hacer-desarrollo-de-paginas-web/)

  ## ¿Cómo instalar ATOM?

Para editar código y crear proyectos super cool necesitas un editor de texto, hay varios que puedes utilizar como:

- [Sublime](https://www.sublimetext.com/)
- [Atom](https://atom.io/)
- [Visual Studio](https://visualstudio.microsoft.com/es/?rr=https%3A%2F%2Fwww.google.com%2F)

Estos son los más populares, sin embargo para crear el proyecto de nuestro Curso Profesional de Desarrollo Web usaremos Atom.

Para la instalación de Atom seguiremos los siguiente pasos:
Para la instalación de Atom seguiremos los siguiente pasos:


1. Ingresa a https://atom.io/

![](img/atom.jpg "Editor de texto")

2. Descarga e instala la versión de ATOM de acuerdo a tu sistema operativo.

3. Esta es la primera sección que vas a ver cuando abras ATOM, da click en el botón Install a package.

![](img/package.webp)

4. En la sección Install a package busca: emmet y agrégalo a tu editor de texto. Esta herramienta nos ayudará a escribir código de manera más rápida.

![](img/emmet.jpg)

5. Te recomiendo que no instales otros paquetes, por ahora. Pues algunos pueden generar conflicto si no tienes claridad sobre su función.

  ## Comprendamos Internet



# 2. Los básicos del web

  ## ¿Cómo funciona HTML?



  ## Etiquetas y sus atributos



  ## Reto 1: crea tu fiesta de gifs



  ## ¿Cómo funciona CSS?



  ## ¿Cómo funciona JavaScript?



  ## Hola mundo y estructura del proyecto



  ## Listado de las etiquetas más usadas



# 3. Construcción de un producto digital

  ## Paper wireframe



  ## ¿Cómo instalar XD?



  ## Diseño de interfaces



  ## Maquetación de la NavBar



  ## Maquetación de main_section y agregando estilos CSS



  ## Maquetación de tarjetas de producto



  ## Fuentes personalizadas y variables de CSS



  ## Categorizando etiquetas según nuestra estructura en HTML



  ## Reto 2: Maquetar el home del producto digital



  ## Reglas responsive



  ## Animaciones y transiciones



# 4. Integrando otras herramientas

  ## Atributos especiales de las etiquetas para mejorar el funcionamiento de nuestros formularios



  ## Librería vs Framework



  ## Sistema de Grillas



  ## Completando el Sistema de Grillas



  ## Reto 3: implementación del sistema de grillas



  ## Maquetación del formulario



  ## Creación de formulario: inputs



  ## Creación de formulario: botones



  ## ¿Cómo crear tu cuenta en Paypal?



  ## Configuración del botón de pago con Paypal



  ## Autofill del formulario de PayPal



  ## Maquetación de pantalla de éxito y error



# 5. Deploy

  ## Testing con el Navegador



  ## Cómo crear tu cuenta en Github



  ## Subiendo nuestro proyecto a Internet con Github



# 6. Conclusión

  ## Conclusiones



# 7. Bonus

  ## Librería vs Framework



