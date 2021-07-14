<h1>Maquetación y Animaciones con CSS</h1>

<h3>Estefany Aguilar</h3>

<h1>Tabla de Contenido</h1>

- [1. Visión general y requisitos del curso](#1-visión-general-y-requisitos-del-curso)
  - [Hagamos un landing con super poderes CSS](#hagamos-un-landing-con-super-poderes-css)
  - [Estructura del proyecto](#estructura-del-proyecto)
- [2. Maquetación y animaciones con CSS](#2-maquetación-y-animaciones-con-css)
  - [Maquetación del loader](#maquetación-del-loader)
  - [Layout con CSS Grid](#layout-con-css-grid)
  - [Navbar](#navbar)
  - [Contenido principal](#contenido-principal)
  - [Contenido lateral](#contenido-lateral)
  - [Footer](#footer)
- [3. Maquetación con JavaScript](#3-maquetación-con-javascript)
  - [Cómo acceder al DOM con JavaScript](#cómo-acceder-al-dom-con-javascript)
  - [Modal: evento click con JavaScript](#modal-evento-click-con-javascript)
  - [Slider](#slider)
- [4. Continúa aprendiendo](#4-continúa-aprendiendo)
  - [¿Quieres aprender animaciones con JavaScript?](#quieres-aprender-animaciones-con-javascript)

# 1. Visión general y requisitos del curso

## Hagamos un landing con super poderes CSS

Landing page con legos.

[![hero.png](https://i.postimg.cc/Y0zVhktT/hero.png)](https://postimg.cc/ct6Tbpgc)

## Estructura del proyecto

Teniendo la frase en el diseño: “Diseña tu Súper Héroe!” con distintos estilos, no haria la separación en el html como hizo la profe de:

```html
<p>Diseña tu</p>
<h1>Súper Héroe!</h1>
```

Porque para el navegador estaríamos hablando de 2 sentencias distintas, y además jerarquizándolas. Me parece una mejor idea, plantear la frase en un mismo elemento y separarlas dentro y con estilos solo darle la jerarquización que buscamos. Por ejemplo, se me ocurre:

```html
<h1><span>Diseña tu</span> Súper Héroe!</h1>
```

De este modo, semánticamente es toda una misma frase, pero visualmente la podemos acomodar como el diseño indique. Así no quedan como dos frases que por si solas no tienen ningún sentido.

# 2. Maquetación y animaciones con CSS

## Maquetación del loader

```css

/* animaciones  */
.loader div {
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;

  transform: scale(0);

  animation: scaling 2s ease-in-out infinite;
}

.loader div:nth-child(1) {
  animation-delay: 0.4s;
}
.loader div:nth-child(2) {
  animation-delay: 0.6s;
}
.loader div:nth-child(3) {
  animation-delay: 0.8s;
}

@keyframes scaling {
  0%, 100% {
    transform: scale(0.2);
  }
  40% {
    transform: scale(1);
  }
  50% {
    transform: scale(1);
  }
}
```



## Layout con CSS Grid

### **Fuente Lato** 😃

Por aquí les dejo las líneas de código que debemos agregar a nuestro proyecto para las fuentes.
Import link:

```css
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;700&display=swap" rel="stylesheet"> 
```

Import Style:

```css
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;700&display=swap');
</style>
```

Aplicacion en CSS

```css
font-family: 'Lato', sans-serif;
```



![img](https://www.google.com/s2/favicons?domain=https://www.google.com/images/icons/product/chrome_web_store-32.png)ColorZilla - Chrome Web Storehttps://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp

![img](https://www.google.com/s2/favicons?domain=https://addons.cdn.mozilla.net/favicon.ico?v=2)[ColorZilla – Get this Extension for 🦊 Firefox (en-US)](https://addons.mozilla.org/en-US/firefox/addon/colorzilla/)

![img](https://www.google.com/s2/favicons?domain=https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg)[Google Fonts](https://fonts.google.com/)


## Navbar


## Contenido principal


## Contenido lateral


## Footer

# 3. Maquetación con JavaScript

## Cómo acceder al DOM con JavaScript


## Modal: evento click con JavaScript


## Slider

# 4. Continúa aprendiendo

## ¿Quieres aprender animaciones con JavaScript?