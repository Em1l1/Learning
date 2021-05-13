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
  - [¿Cómo elegir gráficos en movimiento?](#cómo-elegir-gráficos-en-movimiento)
  - [Gráficos en movimiento](#gráficos-en-movimiento)
  - [Como elegir:](#como-elegir)
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

Debemos diseñar nuestro software para que sea amigable con el usuario. Este diseño se centra en los usuarios y en la usabilidad.
El diseño UX tiene varias etapas:

1. Investigacion ⇒ Recopilar informacion para conocer que ocupan los usuarios principalmente. Es bueno apoyarse de aplicaciones ya existentes para crear un buen diseño UX
2. Analisis ⇒ Una vez recopilada la informacion se analiza y se obtienen los puntos importantes que debemos tener en cuenta al momento de crear el diseño
3. Diseño ⇒ Se crean prototipos o sketches para visualizar el resultado
4. Pruebas de usuario ⇒ Por lo general se llevan a cabo en los sketches para poder realizar ajustes antes de llevar el diseño a codigo

> “Si queremos que a nuestros usuarios les guste nuestro software, deberíamos diseñarlo para que se comporte como una buena persona: respetuoso, generoso y colaborador.”Alan Cooper, Software Engineer and Designer.

## Diagramas de flujo

Primer paso de nuestro diseño UX son los diagramas de flujo.
Pasamos los elementos de nuestro BRIEF a elementos tangibles.
El primer diagrama se llama SITEMAP Y es un mapa completo de nuestro sitio. Aquí definimos cuales son las secciones principales, las secciones secundarias y las paginas externas a nuestro sitio.

El siguiente es el [`USER FLOW`](https://www.youtube.com/watch?v=TIV1y11xz7k). Estos nos permiten hacer un diagrama de todos los pasos que hace un usuario para completar una tarea. Con este flujo podemos saber cuántas pantallas o componentes tenemos para realizar una acción de usuario.
No hay un número definido de pantallas o componentes que vamos a diseñar para un trabajo en particular.

> Los diagramas de flujo nos permitirán traducir los objetivos a elementos tangibles.

Los diagramas de flujo son importantes y una gran herramienta, nos ayudan a planear y estructurar la información y los objetivos de nuestro proyecto, nos ayuda a estructurar los pasos que se deben de seguir para complementar una tarea y nos facilita a la hora de hacer código.

El primer paso del diseño UX son los diagramas de flujo, lo que hacemos es traducir nuestro brief a elementos tangibles
Ejemplo con el brief anterior del local de hamburguesas:

![](https://i.ibb.co/HdF0SZR/requerimientos.png)

Existe un tipo de Diagrama de flujo llamado SITEMAP, este nos permite ver un mapa de todas las secciones de nuestro sitio web.
Ejemplo:

![](https://i.ibb.co/5x50wW3/requerimientos1.png)

Los USERFLOW son diagramas un poco más complejos que muestran todos los pasos que tiene que hacer el usuario para completar una tarea. Es clave para saber cuantos páginas vamos a tener en total.

![](https://i.ibb.co/0J2whPB/requerimientos2.png)


Notas:

- Siempre tener en cuenta la pantalla de error o confirmación
- No hay un número definido de flujos para armar nuestros diagramas

## Wireframes y componentes

¿Qué es un WIREFRAMES? Es el plano de nuestra aplicación. En ellos hacemos nuestros bocetos en papel de todos los componentes y pantallas que nos salieron en los flujos que hemos creado antes.

Los WIREFRAMES dibujados a mano se consideran de baja calidad, pero con ellos podemos empezar a hacer pruebas de usuarios.
Podemos hacer estas pruebas de muchas formas. Lo importante es ver la usabilidad de los componentes y pantallas, si son muy complejos para los usuarios finales.
Los WIREFRAMES de alta fidelidad son los creados con programas de diseño.
Esta parte es importante en diseño y también en desarrollo, porque en esta etapa los desarrolladores van a ver el tamaño de la aplicación final, y poder hacer estimaciones, además de decidir con que herramientas lo va a programar.

También es importante que lo vea el cliente para que se haga una idea de que secciones va a tener su producto.
En esta etapa no se usan las paletas de colores. Solo es un boceto en blanco y negro o grises.

Los wirefremes es simplemente llevar nuestra idea de la aplicación al PAPEL ahí especificamos que componentes tendrá o que pantallas. No es necesario usar un software ya que es nuestro primer boceto. Una vez que ya tengamos el boceto recién usamos un software de diseño para recrear los componentes o las pantallas. OJO no es necesario usar colores o tipografía de eso se encarga el diseño UI.

Ejemplo de `wireframes`

![](https://i.ibb.co/R9809xF/1.jpg)

![](https://i.ibb.co/hW9y0q3/2.jpg)

![](https://i.ibb.co/Q8bfVD3/3.jpg)

![](https://i.ibb.co/y5zGfdk/4.jpg)

![](https://i.ibb.co/nmMQj16/5.jpg)

![](https://i.ibb.co/N6sh4SV/6.jpg)


# 4. Aprender sobre Diseño de interfaz de usuario

## Definición de diseño UI

`UX:` La experiencia de usuario, o User Experience es, como su nombre indica, la experiencia que tiene cualquier usuario cuando está interactuando con una plataforma digital, un dispositivo o cualquier otro entorno.

`UI:` Es el medio a través del cual el usuario se comunica con un sistema. Te pongo ejemplos, cuando consulta el tiempo en su teléfono inteligente, cuando programa el microondas para calentar la comida, cuando le pide al gps del coche que le lleve a una dirección concreta, etc…

Es el momento de ponerle color a los bocetos.

El diseño UI es el diseño que se enfoca en la capa de estilos visuales que va por encima de la estructura de contenido.
Se diferencia del UX en que este último se enfoca en la investigación, prototipado y arquitectura de la información.
De que se encarga cada diseño:

• UX:

- Diseño de interacción.
- Prototipado.
- Arquitectura de la información
- Investigación y pruebas de usuario

• UI:

- Diseño visual.
- Colores.
- Layouts.
- Tipografías.
Cuando trabajamos con los dos diseños al mismo tiempo garantizamos que nuestra aplicación va a ser bonita, agradable y va a ser funcional para todos los usuarios. No debemos quitarle importancia a ninguno de los dos.

> La interfaz de usuario permite establecer estilos visuales de la aplicación.

![](https://i.ibb.co/X8Tn33Z/ui.png)

> Recomendación: Cuando comiencen en su diseño (UI), deben de platicar mucho con su desarrollador. Habrá diseños muy hermosos, pero, tal vez muy complejos de desarrollar en código. Además, pensar en el peso e rapidez del sitio o app.

## Moodboard y línea gráfica

¿Qué es un MOODBOARD? Es un documento o tablero donde pondremos referencias visuales que se usan como inspiración para un diseño. No hay ninguna regla para crearlo.

Moodboard Su traducción literal es mapa de inspiración, Un moodboard es una colección de referencias visuales, una herramienta creativa que consiste en una visualización rápida de imágenes y palabras en un mismo soporte.
Estas imágenes y palabras pueden ser tanto físicas, con recortes de revistas o páginas impresas, como en formato digital. Un ejemplo de moodboard digital muy reconocible podría ser un muro de `Pinterest`, donde bajo un tema común se aglutinan imágenes y palabras que nos gustan.

El moodboard que arme… En lo personal, ame la hamburguesita con cara de osito 😁

![](https://i.ibb.co/T8yZnzb/hamburguesa.jpg)

- [Dribbble - Discover the World’s Top Designers & Creative Professionals](https://dribbble.com/)
- [Behance](https://www.behance.net/search)
- [21 Best Steam Burger images in 2020 | Restaurant menu design, Restaurant design, Burger restaurant](https://www.pinterest.com/zzamanta/steam-burger/)

# Teoría del color

Para saber que colores son los adecuados a un diseño aplicamos la teoría del color.

Psicología del color. Es un área de estudio que investiga la forma en la que el cerebro percibe los colores y los asocia a conceptos y sentimientos.
Los colores se asocian a ciertos sentimientos:

- Rojo: Pasión, deportes, comida, entretenimiento.
- Naranja: Diversión, arte, comida, eventos.
- Amarillo: Felicidad, comida, compras, ocio.
- Verde claro: Armonía, ambiente, comida, educación.
- Verde oscuro: Seguridad. Agro, bancos, inmobiliarias.
- Azul claro (celeste): Sabiduría, productos de niños, salud, tecnología.
- Azul oscuro: Confianza, finanzas, salud, seguros.
- Malva: Misterio, religión, productos alternativos.
- Rosa: Amor, belleza, moda, productos niños.
- Marrón (café): Estabilidad, agro, legal, construcción.
- Gris: Neutral, todas las industrias.
- Negro: Elegancia, todas las industrias.
- 
La idea es que uses la teoría del color para elegir los colores de tu aplicación según el problema que resuelve.
Otros tips para seleccionar los colores:

- Utiliza color RGB y hexadecimales.
- Crea un código de color consistente. Que todos los componentes de la misma categoría tengan el mismo color.
- Menos es más. No satures de colores el sitio.
- Asegura que el color elegido es accesible.
- Define una paleta de color. Esto es un grupo de colores que vamos a usar en toda nuestra aplicación.

![](https://i.ibb.co/rv2VTyW/color.webp)

![](https://i.ibb.co/n6645V5/color.jpg)

- [Adove Color](https://color.adobe.com/create/color-wheel)

## Paletas de color

Para construir una paleta de color, tenemos que tener claro que tipo de colores existen:

- **Colores primarios:** Amarillo, azul y rojo.
- **Colores secundarios:** Son los que resultan de la combinación de los colores primarios.
- **Colores terciarios:** Son los colores intermedios que hay entre un color primario y un color secundario.

Tipos de paletas:

- **Combinación monocromática:** Diferentes tonos de un mismo color. (diferente opacidad).
- **Combinación análoga:** Resulta de combinar un color primario con uno secundario y uno terciario que estén seguidos en el circulo cromático.
- **Combinación complementaria:** Consiste en combinar un color primario con un color secundario que no estén seguidos en el circulo cromático. Estos colores estan opuestos en el circulo.
- **Combinación triádica:** Se trata de combinar tres colores que estén en el circulo cromático de forma que forman un triángulo dentro del circulo.
- **Combinación tétrada:** Combinamos 4 colores elegidos al formar un rectángulo dentro del circulo cromático. Se eligen dos primarios y dos secundarios.

![](https://i.ibb.co/qnG8Fjk/cool.jpg)

- [ColorHunt](https://colorhunt.co/palettes/green)
- [Palettes](https://coolors.co/palettes/trending)

## Tipografía

[Google Fonts](https://fonts.google.com/)

Cosas esenciales en una aplicación es el tipo de letra.

Tips para el uso eficiente de tipografías:

- No uses demasiados tipos de letras.
- Usa fuentes estándar.
- Limita la cantidad de texto. No son libros. Mucho texto echa a los usuarios de la página.
- Selecciona tipos de textos legibles en diferentes tamaños.
- Mantén las líneas separadas unas de otras. Los altos de línea que sean adecuados.
- Que tengan suficiente contraste el texto con el fondo.
- Evitar las animaciones intermitentes en los textos.

Reglas de combinación de tipografía:

Las fuentes tienen personalidad.
- Serif: tradicional, sofisticada, confiable, práctica, formal… Se puede combinar con Sans Serif, scripts, display… y se suele usar en logos, textos de párrafos, títulos, impresos.
- Sans Serif: Moderna, limpia, humanista, geométrica, universal. Se combina con serif, script y slab serif. Sus usos son: logos, textos de párrafos, títulos y textos pequeños.
- Script o fuente cursiva: Elegante, clásica, formal, sofisticada y estilizada. Combina con serif y sans serif. Se usa en logos, títulos e invitaciones. También textos cortos que queramos destacar.

## Layout y sistemas de grillas

¿Qué es una grilla?
Es un sistema de columnas creado por nosotros de acuerdo a las necesidades para ajustar nuestros elementos y componentes.

La mejor herramienta de CSS para crear una grilla es Grid.
Sass es un pre-procesador de CSS te ayuda a escribir CSS de una manera más rápida y más fácil.

`Mixin` es una clase que tiene dentro del pre-procesador, que te ayuda a manejar mejor los Breakpoints.

Tenemos que configurar nuestros BreakPoints (Tipos de pantalla).
- `$xs: 360px`. Para móviles pequeños.
- `$s: 440px`. Para móviles con la pantalla más grande.
- `$m: 768px`. Para tablets.
- `$l: 1280px`. Para Ordenadores pantalla normal.
- `$xl: 1440px`. Monitores de alta calidad.

Podemos usar un Mixin para manejar los distintos breakpoints más fácilmente.
Después vamos a configurar nuestras variables dependiendo de los breakpoints.

- `–columns`. Es el número de columnas que vamos a poner.
- `–column-gap` es el espacio entre las columnas.

Creamos después una clase Grid para configurar cada uno de los elementos contenedores donde vamos a incluir nuestros componentes.
Finalmente le añadimos un display grid, que nos permite que toda esta configuración surta efecto. Y definimos un grip-column-gap para la distancia entre columnas y un grid-template-column que nos permite tener esta estructura.

Para definir el tamaño de un componente, se pone grid-column: 1/5, donde uno es la columna donde empieza, y 5 es la columna donde termina.

> Un sistema de grillas esta conformada por líneas verticales y horizontales que se interceptan, esto permite colocar y alinear contenido de modo que la aplicación no luzca desordenada.
>
> Grilla: Sistema de columnas creado por nosotros de acuerdo a las necesidades para ajustar nuestros elementos y componentes.

## Sistemas de componentes UI

Una de las metodologías que podemos usar es separar la funcionalidad por componentes.

Un sistema de componentes es un conjunto de componentes que vamos a usar par crear nuestra aplicación. Esos componentes funcionan como una librería.
Puedes usar cualquier tecnología que prefieras. Lo importante es encapsular las funcionalidades en componentes. Cada componente tendrá su propio css y funcionalidad dentro de su propia función.

Así podremos importar esas características a cualquier pantalla de nuestra aplicación, reutilizando el código y haciendo más eficiente nuestra aplicación.

En la clase de Wireframe creamos unos bocetos de unos componentes, que luego dividimos en unidades de funcionalidad.
La idea es crear a partir del wireframe todos los componentes y funcionalidades, y después le añadimos la capa visual.

Ejemplos de componentes

- Botones
- Cards
- Banners
- Títulos
- Párrafos
- Menus

- [Material Design](https://material.io/design)

## Themes y customizaciones

¿Qué es un themes? Es una capa de color y estilos que se añade por encima de nuestra aplicación y nos permite tener distintas variaciones sin hacer cambios drásticos en nuestro código. En otras palabras, theme es un archivo donde tenemos configurado la presentación visual de toda la aplicación.

Teniendo dos o más theme podremos tener dos o más presentaciones visuales.
Para hacer los themes fácilmente podemos hacerlo por medio de variables de css o variables de Sass. Las variables de Sass son más sencillas.

Para tener varios themes, se crean un archivo de css por cada theme, pudiéndose intercambiar una por otra desde una archivo donde se configuran todos los archivos importados, sin tener que cambiar toda la programación de la aplicación. Simplemente con cambiar el nombre de un archivo por otro se realiza el cambio de theme.

![](https://i.ibb.co/nzqJ4Dx/desing.jpg)

## Imágenes para web

Imágenes para Web

  - `JPG:` Imágenes con degradados (ligero pero sin tanta calidad)
  - `PNG:` Fondo transparente
  - `SVG:` Vectores, usados en iconos y animaciones
  - `GIF:` En movimiento, es pesado

Como elegir:

  - Aporten al contenido
  - Dirigido al cliente
  - Consistente con la paleta de colores
  - 👀 Licencias

Rendimiento y accesibilidad

  - Evitar texto en las imágenes
  - Exportar al tamaño del contenedor final
  - Lazy loading: Cargando dinámico
  - Texto alternativo

Las imágenes y videos y otros elementos decorativos nos ayudan a reforzar el mensaje que queremos dar en nuestra página.

¿Cómo elegir las imágenes para la web?

Lo primero es tener claro los formatos de imágenes que podemos usar:
- `JPG:` indicado para imágenes con degradados. Recomendado sobre PNG pues pesa menos.
- `PNG:` Indicado para imágenes con fondo transparente.
- `SVG:` Indicado para iconos y animaciones de baja complejidad. Es vectorial y se puede pasar a código, permitiendo editar sus propiedades con CSS.
- `GIF:` No recomendado para animaciones largas pues pesa mucho.

¿qué imágenes podemos elegir?

- Que aporten algo al contenido.
- Usa imágenes en la que el publico objetivo se vea reflejado.
- Elige las imágenes que se adecuen a la paleta de colores que seleccionaste.
- Cuidado con las imágenes con licencia.
Otras consideraciones importantes de rendimiento y accesibilidad:
- No exportes imágenes con texto incrustado. No las puede leer el lector de pantallas.

- Poner imágenes del tamaño del contenedor. Cuando tenemos que modificar una imagen para que se adapte al contenedor, esta normalmente se estropea y no se ve correctamente. Y cuando son imágenes muy grandes, se agranda el tiempo de carga innecesariamente.
- Considera el uso del “lazy loading”. Esta estrategia consiste en que las imágenes se van cargando a medida que hacemos scrool, minimizando el tiempo de carga de nuestro sitio.
- Asegúrate de añadir ALT Text a las imágenes que tengan un fin comunicativo


Imágenes libres de copyright para tus páginas y aplicaciones

- https://pixabay.com/
- https://morguefile.com/photos
- https://picjumbo.com/
- https://www.pexels.com/es-es/
- https://www.freepik.es/

> El alt text también es importante para el SEO

## Gráficos en movimiento para web

Formatos de gráficos en movimiento:
- `CSS animado:` Indicado para animaciones sencillas y transiciones.
- `SVG animado:` Indicado para animaciones de elementos vectoriales.
- `JS (Canvas, WebGL):` Indicado para animaciones complejas como animaciones de datos o 3D. Hay librerías en JS que sirven para este tipo de animaciones.
- `Videos:` Indicado para filmaciones o animaciones de alta complejidad y corta duración. Siempre preguntarnos: ¿realmente necesito este video? Pues son pesados y ralentizan la carga del sitio.

¿Cómo elegir gráficos en movimiento?
--

- Elegir animaciones que aporten al contenido. No sobrecargar con muchas animaciones.
- Procurar que no se reproduzcan automáticamente y si lo hacen, que no tengan sonido.
- Evita que tus animaciones tengan flashes. Los brillos continuos molestan y pueden ser dañinas.
- Si tus animaciones aportan contenido, añade subtítulos o transcripciones para que las pueda leer el lector de pantalla.
- Evita que las animaciones bloqueen la lectura básica del contenido. Es molesto una animación a la hora de leer, además de que el lector de pantallas no podrá acceder a ese contenido.
- Recuerda que las animaciones y los videos ralentizan la carga de la página. Se aplica nuevamente el menos es más.

> Personalmente para insertar video en sitios web, en términos generales, prefiero insertar usando youtube, al insertar en nuestros propios servidores, los tiempos de carga son mucho mayores que si estuvieran en youtube.

Gráficos en movimiento
--

  - `CSS animado:` Sencillas y transiciones
  - `SVG animado:` Elementos con vectores
  - `JS y Canvas:` Animaciones complejas
  - `Videos:` Alta complejidad y corta duración

Como elegir:
--

  - Animaciones que aporten
  - No se reproduzcan automáticamente
    – ○ De hacerse, sin sonido
  - Sin flash
  - Usar subtítulos y transcripciones
  - Animaciones no bloqueen el contenido
  - Recordar que estas afectan el rendimiento de la pagina

  > ✨ Una pagina que tarda en cargar, constantemente pierde usuarios. La importancia de no sobrecargar contenido.

- [LottieFiles](https://lottiefiles.com)

## Resultado final

**Pasos del diseño**

1. Crear el brief para tener claor los objetivos
2. Crear siteMap para definir la estructura de la app basado en los objetivos del brief
3. Crear User flow para mapear las tareas mas comunes del usuraio (pasos que tiene que hacer un usuario para realizar una tarea) se pueden crear tantos como sea necesario
5. Dibujar wireframes de baja fidelidad a mano para modificarlos rápidamente
6. Crear wireframes de alta fidelidad (dektop, mobile, etc.)
7. Probar nuestro diseño con colores, tipografías etc. (con ayuda de nuestro Style Guide)
8. Crear los componentes (en módulos separados para facilitar la reutilización y con variables CSS para cambiar la paleta de colores fácilmente)

>  El diseño es importante, este es el primer contacto que tendrá el usuario con la aplicación.

# 5. Conclusiones

## Conclusiones del curso

Nunca pares de Aprender !!!!!

![](https://i.ibb.co/0fKjXqk/creatividad.png)

# 6. Mentoría Expert

## Diseño para programadores



