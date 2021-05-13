<h1>Diseño para Programadores</h1>

<h3>Samanta Martínez</h3>

<h1>Tabla de Contenido</h1>

- [1. Introducción](#1-introducción)
  - [Bienvenida](#bienvenida)
- [2. Entender los Fundamentos del diseño](#2-entender-los-fundamentos-del-diseño)
  - [El proceso creativo](#el-proceso-creativo)
  - [Conceptos básicos de diseño](#conceptos-básicos-de-diseño)
  - [Diseño responsivo](#diseño-responsivo)
    - [¿Cómo se garantiza que el diseño de una aplicación es responsivo?](#cómo-se-garantiza-que-el-diseño-de-una-aplicación-es-responsivo)
    - [Metodología para realizar diseño responsivo](#metodología-para-realizar-diseño-responsivo)
    - [Mejora progresiva aplicada](#mejora-progresiva-aplicada)
    - [Por donde Empezar](#por-donde-empezar)
  - [Accesibilidad y diseño](#accesibilidad-y-diseño)
  - [Brief y requerimientos técnicos](#brief-y-requerimientos-técnicos)
- [3. Aprender sobre Diseño Experiencia de usuario](#3-aprender-sobre-diseño-experiencia-de-usuario)
  - [Definición de diseño UX](#definición-de-diseño-ux)
  - [Diagramas de flujo](#diagramas-de-flujo)
  - [Wireframes y componentes](#wireframes-y-componentes)
- [4. Aprender sobre Diseño de interfaz de usuario](#4-aprender-sobre-diseño-de-interfaz-de-usuario)
  - [Definición de diseño UI](#definición-de-diseño-ui)
  - [Moodboard y línea gráfica](#moodboard-y-línea-gráfica)
  - [Teoría del color](#teoría-del-color)
  - [Paletas de color](#paletas-de-color)
  - [Tipografía](#tipografía)
  - [Layout y sistemas de grillas](#layout-y-sistemas-de-grillas)
  - [Sistemas de componentes UI](#sistemas-de-componentes-ui)
  - [Themes y customizaciones](#themes-y-customizaciones)
  - [Imágenes para web](#imágenes-para-web)
  - [Gráficos en movimiento para web](#gráficos-en-movimiento-para-web)
  - [Resultado final](#resultado-final)
- [5. Conclusiones](#5-conclusiones)
  - [Conclusiones del curso](#conclusiones-del-curso)
- [6. Mentoría Expert](#6-mentoría-expert)
  - [Diseño para programadores](#diseño-para-programadores)

# 1. Introducción

## Bienvenida

- [Slides-Desing-programing.pdf](https://drive.google.com/file/d/15Gan-rXkzko3n1YtIwC0j8qbYLs7dtrS/view?usp=sharing)
- [Curso diseño para programadores](https://github.com/mssroboto/diseno-para-programadores)
- [twitter | mssroboto](https://twitter.com/mssroboto)
- [De Diseñadora Gráfica a Front end Developer. Entrevista y Mentoría Expert](https://platzi.com/blog/disenadora-grafica-front-end-developer/)

# 2. Entender los Fundamentos del diseño

## El proceso creativo

Los pasos del proceso creativo:

1. Preparación: Investigar, recopilar.
2. Incubación: Experimentar, sintetizar.
3. Iluminación: Idear, imaginar.
4. Evaluación: Criticar, replantear.
5. Implementación: Construir, trabajar.

![](https://i.ibb.co/Y2LNsc0/creatividad.jpg)

  1. Investigamos y recopilamos toda la información relativa a un problema o algo que queramos solucionar.
  2. Buscamos diferentes soluciones. Miramos como alguien ya lo soluciono.
  3. Aquí es donde se nos ocurre las ideas. Ideamos e imaginamos soluciones.
  4. Evaluamos si estas soluciones son prácticas, son viables. Vemos los fallos y si es necesario, replanteamos las soluciones.
  5. Construimos la idea hasta el producto final.
  
> “La creatividad es algo que se desarrolla”


![](https://i.ibb.co/m4r9P2x/creatividad1.png)

## Conceptos básicos de diseño

1. Balance: Posición de cada elemento está dada por su peso visual
  a. Simétrico
  b. Asimétrico
2. Contraste: Señalar un concepto marcado por la diferencia entre 2 elementos distintos (claro obscuro, grande pequeño)
3. Alineación: Crear rutas visuales
4. Proximidad: Agrupar elementos
5. Repetición: Concepto de marca
6. Espacio: Como hacerle uso

![](https://i.ibb.co/xLzLvwV/diseno.jpg)

[Contrast-ratio](https://contrast-ratio.com)

## Diseño responsivo

Metodología de diseño que nos permite crear diseños adaptables a diferentes pantallas y dispositivos

> El diseño responsivo permite adaptar el contenido según las dimensiones del dispositivo.

### ¿Cómo se garantiza que el diseño de una aplicación es responsivo?

Empieza por separar dispositivos móviles, esto para partir del contenido básico como base al contenido mas complejo

Separar las capas de contenido y funcionalidad, garantiza el acceso al usuario a todo el contenido en la pagina.

Usar un sistemas de grillas y columnas, para tener una referencia del layout total en la pagina y de esta manera adaptar los contenidos presentados.

### Metodología para realizar diseño responsivo

- Mejora progresiva (Progressive enhancement): Consiste en partir de una base solida a la que se le añade mejoras dependiendo de factores como tamaño de pantalla o sistema operativo (S.O.)

- Degradación agraciada (Graceful degradation): Consiste de partir de una versión completa a la cual se la van removiendo capas de complejidad para garantizar su funcionamiento en todos los tamaños de pantalla. ej. una aplicación de escritorio que es adaptada a un app movil

### Mejora progresiva aplicada

1. Parte del contenido - Datos
2. Maquetado básico de la aplicación- HTML
3. Estilos y fuentes- CSS
4. Interactividad y animaciones - Javascript

### Por donde Empezar

  1. **Mobile First ⇒** Es preferible empezar el diseño con orientacion a dispositivos moviles pues aqui es donde hay menos espacio para ordenar informacion y es la plataforma mas utilizada en general
  2. **Progressive Enhancement (Mejora Progresiva) ⇒** Se desarrolla una base donde se encuentran las funciones e informacion importante, luego, se van agregando los detalles secundarios que mejoraran la experiencia de usuario
  3. **Graceful Degradation (Degradacion Agraciada) ⇒** Totalmente inverso al progressive enhancement. Se toma una version finalizada del producto y se empiezan a remover aspectos. Es usado comumente cuando ya tiene el diseño desktop y se requiere un diseño mobile

![](https://i.ibb.co/mbzkQ4c/responsive.jpg)

- [Media-Queries](https://mediaqueri.es)

## Accesibilidad y diseño

Una parte importante del diseño es la accesibilidad. La accesibilidad es la posibilidad de que cualquier persona pueda acceder a la web, no importa la incapacidad que tenga. Esta accesibilidad es obligatoria en todas la Webs.

- Usar los encabezados correctos en cada lugar.
- Usar fuentes legibles y visibles fácilmente.
- Usar el contraste de colores adecuadamente.
- Garantizar que los colores no sean el único código para relacionar el contenido.
- Diseña teniendo en cuenta los eventos de la página. No quitar el focus o el active, y que estos sean diferentes.
- Añade títulos descriptivos a los campos de un formulario.
- Los ALT y descripciones de en la fotos y videos es vital.
- Evitar que las animaciones bloqueen el contenido.

La accesibilidad es necesaria para permitir que cualquier persona independientemente de sus capacidades pueda acceder a la informacion necesaria sin dificultades.

1. **HTML estructurado correctamente ⇒** Para que los lectores de pantalla puedan proporcionar un detalle acertado al usuario, la semantica en el HTML es importante, ademas, esto ayuda a la pagina en el SEO.
2. **Tamaños de fuente accesibles ⇒** Al utilizar tamaños de fuente demasiado pequeños evita que aquellos con problemas de vista accedan a toda la informacion de nuestra pagina
3. **Contrastes adecuados ⇒** Si se utilizan los colores incorrectos puede llevar a informacion, texto o imagenes a que estos no sean visibles por ciertas personas
4. **Evitar categorizacion unicamente por colores ⇒** Cuando se categorizan informacion por colores es bonito y facil para ciertas personas, pero si no se le agrega alguna alternativa extra como bordes o separaciones marcadas puede dificultar la comprension para cierta poblacion
5. **No dejar a un lado los estados “focus” y “active” (HTML) ⇒** Estos proporcionan una ayuda visual para que el usuario sepa en que parte de la pagina se encuentra.
6. **Agregar etiquetas y textos descriptivos** a campos de formularios, videos e imagenes
7. **Evitar animaciones que bloqueen contenido ⇒** Esto provoca que aquellos que no tengan acceso a un mouse no obtengan la misma cantidad de informacion que uno que si lo tiene.

- [Using ARIA: Roles, states, and properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

## Brief y requerimientos técnicos

El primer elemento que debemos tener claro para construir una aplicación es el BRIEF.

¿Qué es el BRIEF? Es la hoja de ruta para empezar a diseñar. Es lo que se habló en los pasos del proceso creativo: investigar y recopilar toda la información relativa con el proyecto, con el problema a solucionar. Es donde apuntamos esos datos que hemos recopilado.

Las secciones más comunes son:
- Descripción del cliente o producto.
- Objetivos o retos.
- El target o audiencia al que va destinado ese producto o servicio.
- La competencia que puede haber.
- Como será la distribución.
  
Es importante que este documento sea bonito, este organizado y podamos ver bien la jerarquía de contenidos.

Es importante que cualquier persona que lea el BRIEF sepa que está leyendo.
Los objetivos es la parte más importante, porque de ahí vamos a partir para crear nuestro producto.

También es bueno tener un cronograma donde vamos a poner las fechas de las entregas.

- [Brief.pdf](https://github.com/mssroboto/diseno-para-programadores/blob/master/1-brief/Brief..pdf)

- [Brief](https://drive.google.com/file/d/1GkJB6Avu53Cibxs_3SZdTajK1dClXpz7/view?usp=sharing)


El brief es como empezamos con la parte de preparación:

- Brief

Hoja de ruta para empezar a diseñar.
Resultado de las conversaciones con el cliente e incluye datos de un proyecto
Secciones:

  - Descripción del cliente
  - Objetivos o retos
  - Audiencia
  - Competencia
  - Distribución
  - Cronograma


# 3. Aprender sobre Diseño Experiencia de usuario

## Definición de diseño UX



## Diagramas de flujo



## Wireframes y componentes




# 4. Aprender sobre Diseño de interfaz de usuario

## Definición de diseño UI


## Moodboard y línea gráfica


## Teoría del color


## Paletas de color


## Tipografía


## Layout y sistemas de grillas


## Sistemas de componentes UI


## Themes y customizaciones


## Imágenes para web


## Gráficos en movimiento para web


## Resultado final

# 5. Conclusiones

## Conclusiones del curso




# 6. Mentoría Expert

## Diseño para programadores



