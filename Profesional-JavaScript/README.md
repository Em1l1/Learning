<h1>JavaScript Profesional</h1>

<h3>Richard B. Kaufman López</h3>

<h1>Tabla de contenido</h1>

- [1. Introducción](#1-introducción)
  - [¿Qué significa ser un profesional de JavaScript?](#qué-significa-ser-un-profesional-de-javascript)
  - [Aspectos que destacan a un profesional](#aspectos-que-destacan-a-un-profesional)
  - [Inicio del proyecto](#inicio-del-proyecto)
- [2. Repaso de Conceptos Fundamentales](#2-repaso-de-conceptos-fundamentales)
  - [Cómo llega un script al navegador](#cómo-llega-un-script-al-navegador)
  - [Scope](#scope)
  - [Closures](#closures)
  - [El primer plugin](#el-primer-plugin)
  - [this](#this)
  - [Los métodos call, apply y bind](#los-métodos-call-apply-y-bind)
  - [Prototype](#prototype)
  - [Herencia Prototipal](#herencia-prototipal)
- [3. Cómo funciona JavaScript](#3-cómo-funciona-javascript)
  - [Parsers y el Abstract Syntax Tree](#parsers-y-el-abstract-syntax-tree)
  - [Abstract Syntax Tree en Práctica](#abstract-syntax-tree-en-práctica)
  - [Cómo funciona el JavaScript Engine](#cómo-funciona-el-javascript-engine)
  - [Event Loop](#event-loop)
- [4. Fundamentos Intermedios](#4-fundamentos-intermedios)
  - [Promesas](#promesas)
  - [Getters y setters](#getters-y-setters)
- [5. Fundamentos Avanzados](#5-fundamentos-avanzados)
  - [Proxy](#proxy)
  - [Generators](#generators)
- [6. APIs del DOM](#6-apis-del-dom)
  - [Fetch - Cómo cancelar peticiones](#fetch---cómo-cancelar-peticiones)
  - [IntersectionObserver](#intersectionobserver)
  - [VisibilityChange](#visibilitychange)
  - [Service Workers](#service-workers)
- [7. TypeScript](#7-typescript)
  - [Introducción](#introducción)
  - [Tipos básicos](#tipos-básicos)
  - [Funciones](#funciones)
  - [Interfaces](#interfaces)
  - [Clases](#clases)
  - [Convertir el proyecto a TypeScript](#convertir-el-proyecto-a-typescript)
- [8. Patrones de Diseño](#8-patrones-de-diseño)
  - [Qué es un patrón de diseño](#qué-es-un-patrón-de-diseño)
  - [Categorías de patrones de diseño](#categorías-de-patrones-de-diseño)
  - [Patrón Singleton y Casos de Uso](#patrón-singleton-y-casos-de-uso)
  - [Implementación del patrón Singleton](#implementación-del-patrón-singleton)
  - [¿Cómo funciona el Patrón Observer?](#cómo-funciona-el-patrón-observer)
  - [Implementación del patrón Observer](#implementación-del-patrón-observer)
  - [Casos de Uso del patrón Observer: Redux](#casos-de-uso-del-patrón-observer-redux)
  - [Patrón Decorator y Casos de Uso](#patrón-decorator-y-casos-de-uso)
  - [Implementación del patrón Decorator](#implementación-del-patrón-decorator)
- [9. Proyecto: MediaPlayer](#9-proyecto-mediaplayer)
  - [Implementación de plugin de Ads: Desplegando en consola](#implementación-de-plugin-de-ads-desplegando-en-consola)
  - [Implementación de plugin de Ads: Desplegando en pantalla](#implementación-de-plugin-de-ads-desplegando-en-pantalla)
  - [Publicar en npm](#publicar-en-npm)
- [10. Conclusiones](#10-conclusiones)
  - [Conclusiones](#conclusiones)


---

# 1. Introducción

## ¿Qué significa ser un profesional de JavaScript?

Richard Kaufman trabaja para KickAss Partners como Senior Front End Engineer y es organizador de la comunidad de Javascript en Ciudad De México. Richard será tu profesor en este curso, él te va a enseñar Javascript puro, repasando los fundamentos clave del lenguaje, explorando APIs del DOM, implementando TypeScript y aplicando las mejores prácticas con Patrones de Diseño.

Vamos a necesitar:

Editor de textos Visual Studio Code.
Navegador Web Google Chrome.
Una CLI (terminal de linea de comandos)…
Es recomendable tener conocimientos en:

- HTML
- CSS
- Básicos de Javascript

En la pestaña de Archivos y Enlaces encontrarás todos los cursos necesarios que forman parte de la EscuelaJS.

En este curso es el primer paso para convertirte en un profesional de Javascript que cumple con lo siguiente:

- Conocimiento profundo del lenguaje, conocer sus particularidades y cómo funciona internamente.
- Conocer los entornos de programación para Javascript.
- Siempre aplicar las mejores prácticas.
- Ser versado en código, leer código de otras personas.
- Tener un set de herramientas que dominas.
- Ética / Profesionalismo
- Experiencia.

Y recuerda que puedes encontrar a tu profesor en twitter como @sparragus.

El camino para llegar a ser profesional es largo y duro, no es fácil. Todos necesitamos que nos guíen para saber qué hacer y qué no. Este camino es conocido como la ruta de pasar de Junior a Senior, este es un duro camino lleno de experiencia.

‌

**¿Qué forma a un profesional?**
‌

Te presento una lista de estas cosas que lo forman:

  - ‌Conocimiento del lenguaje.
  - Conocimiento de entornos de programación.
  - Mejores prácticas.
  - Versado en código.
  - Herramientas.
  - Ética / Profesionalismo.
  - Experiencia.


**El lenguaje: JavaScript**
‌
Debemos tener muy claro cuales son los fundamentos de JavaScript antes de comenzar con esto. Existen features muy raros y hay que estudiarlos. Tenemos que saber cómo funcionan las cosas en JavaScript.

‌**No fundamentos**
‌
Los no fundamentos" representan las siguientes características del lenguaje:


**Promesas (nivel pro).**

  - Getters, setters: son formas de obtener valor de una variable sin tener que poner this.name.
  - Proxies: es un feature muy raro, pero que más adelante veremos a profundidad. Sirve para interceptar a una función antes de que se ejecute.
  - Generadores: esto es raro, pero vamos a ver que sí es eficiente.

**¿Cómo funciona?**
‌
Este lenguaje corre sobre un motor. JavaScript no contiene clases como otros lenguajes de programación, esto es algo que vuela mucho la cabeza, es muy difícil de entender. Otro feature muy cool que vamos a aprender es event loop, es lo que permite que pueda correr muchos procesos a la vez.

**Entornos de programación**
‌
Cuando estamos desarrollando lo hacemos para la WEB, para un celular, para seguidores. Existen diferentes entornos que nos ofrecen APIS, tenemos que conocer todo esto. V

‌**Versado en código**
‌
Esto quiere decir que tenemos que leer mucho código, un lugar hermoso para ponernos a leer código es GitHub. Debemos leer mucho y hacerlo de forma muy constante.

**Mejores prácticas**
‌
No vamos a reinventar la rueda, hay muchas personas que ya han solucionado los problemas más comunes, tenemos que usar estas soluciones, a estas soluciones se les llama: patrones de diseño.

‌**Ética**
‌
Esta es la parte más importante de ser un profesional. Un buen profesional cumple con los siguientes valores:

‌**Es responsable.**

- Entrega a tiempo sus trabajos.
- Sabe decir que no.
- No hace daño.

**Experiencia**
‌
La experiencia no es algo que se pueda enseñar, tenemos que encontrarla nosotros mismos en el camino a ser profesionales. Todo está en nosotros, tenemos que estudiar y practicar mucho.

- [Slider-JavaScript-pProfesiona.pdf](https://drive.google.com/file/d/1aguACbpRXk84uLBOrcsvBsWjBcGcRN5O/view?usp=sharing)

## Aspectos que destacan a un profesional

<img src="https://i.ibb.co/S7VyP6J/Inforgafia-Profesional-Javascript.jpg" alt="Inforgafia-Profesional-Javascript" border="0">

## Inicio del proyecto

Trabajaremos en el proyecto PlatziVideo, una plataforma de vídeo.

Esta es la base de nuestro proyecto y nos vamos a enfocar en el MediaPlayer. Durante el curso se desarrollarán plugins de forma modular para extender la funcionalidad del MediaPlayer.

En este curso vamos a estar desarrollando una aplicación llamada: Platzi Video. En toda plataforma de video hay un componente especial en el desarrollo, tenemos que saber implementar el MediPlayer, en este curso vamos a estar desarrollando este feature de forma modular, esto quiere decir que vamos a desarrollar plugins que vamos a implementar a nuestro reproductor, extendiéndole sus funcionalidades. Vamos a comenzar con un poco de CSS y HTML ya escrito.

**Primer paso**

Crearemos nuestros primeros archivos usando `npm init -y`, donde `-y` es una bandera que le dicta a npm que le diga sí a todas las preguntas que haga.

```bash
npm init -y
```
Esto nos creará un archivo package.json que lo sustituiremos por el siguiente:

```json
{
"name": "platzi-media-player",
"version": "1.0.0",
"description": "Proyecto del Curso Profesional de JavaScript de la Escuela de JavaScript de Platzi.",
"license": "MIT",
"author": "César Augusto Barco <augustopayza@gmail.com>",
"keywords": [
                "platzi"
        ],
"scripts": {
                "start": "live-server"
        },
"devDependencies": {
        "live-server": "^1.2.1"
    }
}
```

Una vez tengamos todo esto listo vamos a proceder a instalar nuestro live-server para empezar a trabajar. Para instalar esto vamos a usar el siguiente `comando npm i -D` live-server donde i significa install y la bandera -D development, esto quiere decir que no lo vamos a usar en producción.

Una vez instalado ya lo podremos usar con el package.json que dejé arriba. Lo usaremos con el comando start que llamará a su vez a live-server.

Antes de ejecutar este vamos a implementar varios archivos. Estos serán los siguientes:

```js
{% file src="../.gitbook/assets/index.html" caption="HTML" %}

{% file src="../.gitbook/assets/index.css" caption="CSS" %}
```

También cualquier video que tengamos en nuestra PC. Nuestras carpetas tienen que quedar de la siguiente forma:

<img src="https://i.ibb.co/vc6RsKB/3.png" alt="3" border="0">

Ahora sí vamos a ejecutar nuestro pequeña aplicación.

```bash
npm start
```

Nuestra pequeña aplicación andará en la IP que nos muestre la terminal.

<img src="https://i.ibb.co/pjFfn1z/4.png" alt="4" border="0">

**¿Qué sigue?**
‌
Tenemos un botón que no funciona, lo vamos a poner a funcionar con un `media query.` Abrimos nuestras etiquetas de script.

Tenemos un vídeo que debemos manipular, lo vamos a hacer con `querySelector(""),` a este tenemos que pasarlo un elemento, en este caso será video, es el único elemento video en nuestro `HTML`. Tambien debemos traer nuestro botón con `querySelector`.

``` JS
const  video = document.querySelector("video");
const  button = document.querySelector("button");
```

Cuando le demos click a nuestro botón queremos que el vídeo se reproduzca. Lo hacemos de la siguiente manera:

``` JS
button.onclick = ()=>  video.play()
```

El `video.play()` se saca de la API que trae el navegador, todos los elementos del DOM traen un API. Para saber cuales son las opciones de esta API podemos ir a MDN a ver toda la documentación. No podemos darle play de una vez a penas se entre en la página, esto pasa por que los navegadores tienen una seguridad que no permite que esto pase, solo se puede dar play si el usuario tiene la libertad de hacerlo.

Ahora nuestro código no es muy extensible, vamos a lograr esto usando prototipado. Para hacerlo extensible se pueden usar clases, pero en este caso usaremos `protitype`, usaremos el siguiente código para lograrlo.

``` JS
const  video = document.querySelector("video");

const  button = document.querySelector("button");

function  MediaPlayer(){}

MediaPlayer.prototype.play = function() {

 video.play()

}

const  player = new  MediaPlayer()

button.onclick = () =>  player.play();
```

Explicación:

‌
Creamos una función llamada mediaPlayer que nos servirá como prototipo.

A mediaPlayer le asignamos una función llamada play usando prototype. Esta función le dará inicio al video.

Luego con el botón se acciona una función llamada player que es una instancia del prototipo mediaPlayer que creamos. La instancia se crea usando la palabra new.

Hagámoslo más reutilizable
‌
Para que nuestro código sea más reutilizable debemos hacerlo de esta manera:

``` JS
const  video = document.querySelector("video");
const  button = document.querySelector("button");

function  MediaPlayer(config) {
 this.media = config.el;
}

MediaPlayer.prototype.play = function() {
 this.media.play();
};

const  player = new  MediaPlayer({ el:  video });
button.onclick = () =>  player.play();
```
‌
**Explicación:**

A nuestra función madre o prototipo le pasamos una configuración. Esta configuración lo que va a tener es el elemento video original. Le asignamos a this.media el elemento video.

A la función extendida le asignamos `play()` a this.media para que se ejecute cuando presionemos el botón.

En nuestra función especial player es una instancia del prototipo le asignaremos el valor de video para que lo reciba en configuración. Esto lo haremos con destructuración de objetos.


Acá no podemos usar arrow function por que el valor de this es global. Más adelante se verá con más detalle.

Para agregarle la funcionalidad de pausa y play con el mismo botón, debemos condicionar la función play de MediaPlayer de la siguiente manera:

```js
MediaPlayer.prototype.play = function() {
 if(this.media.paused){
	 this.media.play();
 } else {
	 this.media.pause()
 }

 // o podemos usar lo siguiente:

 // this.media.paused ? this.media.play() : this.media.pause()

};
```

- [BigBuckBunny](https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4)

# 2. Repaso de Conceptos Fundamentales

## Cómo llega un script al navegador



## Scope



## Closures



## El primer plugin



## this



## Los métodos call, apply y bind



## Prototype



## Herencia Prototipal



# 3. Cómo funciona JavaScript

## Parsers y el Abstract Syntax Tree



## Abstract Syntax Tree en Práctica



## Cómo funciona el JavaScript Engine



## Event Loop



# 4. Fundamentos Intermedios

## Promesas



## Getters y setters



# 5. Fundamentos Avanzados

## Proxy



## Generators



# 6. APIs del DOM

## Fetch - Cómo cancelar peticiones



## IntersectionObserver



## VisibilityChange



## Service Workers



# 7. TypeScript

## Introducción



## Tipos básicos



## Funciones



## Interfaces



## Clases



## Convertir el proyecto a TypeScript



# 8. Patrones de Diseño

## Qué es un patrón de diseño



## Categorías de patrones de diseño



## Patrón Singleton y Casos de Uso



## Implementación del patrón Singleton



## ¿Cómo funciona el Patrón Observer?



## Implementación del patrón Observer



## Casos de Uso del patrón Observer: Redux



## Patrón Decorator y Casos de Uso



## Implementación del patrón Decorator



# 9. Proyecto: MediaPlayer

## Implementación de plugin de Ads: Desplegando en consola



## Implementación de plugin de Ads: Desplegando en pantalla



## Publicar en npm



# 10. Conclusiones

## Conclusiones
