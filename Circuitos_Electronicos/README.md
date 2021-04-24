<h1>Básico de Circuitos Electrónicos</h1>

<h3>Ricardo Celis</h3>


<h1>Tabla de Contenido</h1>

- [1. Leer Diagramas Electrónicos o Esquemáticos](#1-leer-diagramas-electrónicos-o-esquemáticos)
  - [Bienvenida al curso](#bienvenida-al-curso)
  - [Esquemático](#esquemático)
  - [Simbología básica](#simbología-básica)
  - [Flujo de trabajo profesional para dominar la electrónica](#flujo-de-trabajo-profesional-para-dominar-la-electrónica)
  - [Hojas de datos o data sheets: conociendo un regulador de voltaje](#hojas-de-datos-o-data-sheets-conociendo-un-regulador-de-voltaje)
- [2. Crear un divisor de voltaje](#2-crear-un-divisor-de-voltaje)
  - [¿Qué es un divisor de voltaje y su importancia?](#qué-es-un-divisor-de-voltaje-y-su-importancia)
  - [Práctica: Creando nuestro divisor de voltaje](#práctica-creando-nuestro-divisor-de-voltaje)
  - [Esquemático y análisis de nuestro divisor de voltaje](#esquemático-y-análisis-de-nuestro-divisor-de-voltaje)
    - [2.1 Circuito](#21-circuito)
    - [2.2 Ecuación](#22-ecuación)
      - [Simplificaciones](#simplificaciones)
- [3. Utilizar Capacitores para filtrar, generar carga](#3-utilizar-capacitores-para-filtrar-generar-carga)
  - [Tipos de capacitores y sus aplicaciones](#tipos-de-capacitores-y-sus-aplicaciones)
  - [Capacitores a detalle](#capacitores-a-detalle)
  - [Cálculo de capacitancio](#cálculo-de-capacitancio)
- [4. Uso de Diodos y bobinas](#4-uso-de-diodos-y-bobinas)
  - [Qué son los diodos](#qué-son-los-diodos)
  - [Qué son las bobinas](#qué-son-las-bobinas)
  - [Uso práctico de un relevador](#uso-práctico-de-un-relevador)
  - [¿Qué es el electromagnetismo?](#qué-es-el-electromagnetismo)
- [5. Entender las Señales eléctricas](#5-entender-las-señales-eléctricas)
  - [Tipos de señales eléctricas](#tipos-de-señales-eléctricas)
  - [Definiendo una frecuencia](#definiendo-una-frecuencia)
  - [Práctica: Creando un flash](#práctica-creando-un-flash)
- [6. Entender qué es un transistor](#6-entender-qué-es-un-transistor)
  - [¿Qué es un transistor?](#qué-es-un-transistor)
- [7. Aplica todos tus conocimientos juntos](#7-aplica-todos-tus-conocimientos-juntos)
  - [Proyecto final ¿qué haremos?](#proyecto-final-qué-haremos)
  - [Proyecto final: Chasis y componentes](#proyecto-final-chasis-y-componentes)
  - [Proyecto final: Esquemático y data sheets](#proyecto-final-esquemático-y-data-sheets)
  - [Proyecto final: Circuitos básicos del sistema](#proyecto-final-circuitos-básicos-del-sistema)
  - [Proyecto final: Conexión de componentes](#proyecto-final-conexión-de-componentes)
  - [Proyecto final: Terminando las conexiones y ensamble](#proyecto-final-terminando-las-conexiones-y-ensamble)
  - [Proyecto final: Demo y desafío con fotoresistencias](#proyecto-final-demo-y-desafío-con-fotoresistencias)
  - [Cierre del curso y ¿qué sigue?](#cierre-del-curso-y-qué-sigue)
  

# 1. Leer Diagramas Electrónicos o Esquemáticos

## Bienvenida al curso

En este curso aprenderás las bases de los circuitos electrónicos, sus componentes más utilizados y cómo leer y entender un esquemático. Aplicarás todo esto y más en un proyecto 100% real.

## Esquemático

Es un diagrama electrónico que define los componentes a usar y sus conexiones entre sí en determinado circuito.

Toma en cuenta que es una abstracción de los componentes físicos y sus interconexiones, ya que las líneas no definen la forma del circuito ni el largo de las conexiones.

Puedes pensar en el esquemático como una receta de cocina para crear nuestros circuitos electrónicos. Y al ser una receta existen muchas ya creadas que puedes hacer con simplemente seguir los pasos, por ejemplo:

  - Pequeños vehículos autónomos con el uso de motores.
  - Alarmas que se activan con algún tipo de sensor.
  - Bajar las cortinas de la casa con un comando de voz.

Te recomendamos usar software especializado del tipo **EDA (Electronic Design Automation)** para crear tus propios esquemáticos. Uno de los más populares es *KiCad* y puedes encontrar el enlace en la sección de Archivos y Enlaces.

- [KiCad EDA](http://kicad-pcb.org/)

Para entender el tema de circuitos y dispositivos electrónicos debes dominar muy bien el tema de analisis de circuitos eléctricos.
- Les recomiendo el libro: “principios de circuitos electricos - floyd, 8va edición” va desde lo mas básico hasta lo mas avanzado
- Para el caso de circuitos y dispositivos electrónicos les recomiendo ¨Dispositivos electrónicos - Thomas L. Floyd¨ tambien va desde lo básico hasta lo mas avanzado, busquenlo en PDF

## Simbología básica

Para que tengas un proceso de aprendizaje más fluido, te recomiendo tener estas tablas de simbología a la mano. ¿conoces algún símbolo adicional? compartelo en la sección de comentarios.

![](https://i.ibb.co/2YzqwCQ/sm1.webp)

![](https://i.ibb.co/k3KRm5S/sm1.jpg)

![](https://i.ibb.co/8x3mxh3/sm2.jpg)

## Flujo de trabajo profesional para dominar la electrónica

- [Farnell | Electronic Component Distributors](https://www.farnell.com/)

- [mouser electronic](https://co.mouser.com/Electronic-Components/?InStock=True)

## Hojas de datos o data sheets: conociendo un regulador de voltaje

Todo componente tiene un Data Sheet con información muy detallada entre la que podemos encontrar:

  - Cómo se compone internamente.
  - Rangos de temperatura de operación.
  - Qué voltaje y corriente usa.
  - Diagramas de casos de uso típicos.

Recuerda siempre buscar el Data Sheet **específico del fabricante** que compraste, ya que pueden variar entre ellos.

El **“Data sheets”** es como la documentación en un lenguaje de programación o tecnología. Data Sheets o tambien llamado como hojas de datos te da a conocer toda la información referente a funciones, caracteristicas y tanto de V max como V min para un componente al igual que brinda la funcionalidad.

Te muestra:

  - Como usarlo
  - Representación y símbolos para identificar
  - Especificaciones
  - Requisitos o recomendaciones
  - Limites o máximo que se puede hacer

# 2. Crear un divisor de voltaje

## ¿Qué es un divisor de voltaje y su importancia?


Es un circuito que permite tomar un voltaje (tensión) que se le suministra a dos resistencias en serie y dividirlo para obtener una fracción del mismo.

> Nunca uses un divisor de tensión como regulador de voltaje.

  **Voltaje:** es la potencia de la carga al fluir la diferencia de potencia que existe en un circuito

  **Potenciometro:** es un tipo de resitencia que equilibra cuanto se manejara la resistencia, tiene como tres dientes, 1.- resistividad una terminal 2.- salida de la variable cambia valor a resistir 3.- maximo de resistividad

  **Fotoresistencia:** son resistencias que reaccionan a luz que reciben, mayor luz menor valor resistivo.
 
## Práctica: Creando nuestro divisor de voltaje

![](https://i.ibb.co/zN0BWTT/divisor.jpg)

- Simulador llamado “proteus”

## Esquemático y análisis de nuestro divisor de voltaje

Un divisor de voltaje es un circuito simple que reparte la tensión de una fuente entre una o más impedancias conectadas. Con sólo dos resistencias en serie y un voltaje de entrada, se puede obtener un voltaje de salida equivalente a una fracción del de entrada. Los divisores de voltaje son uno de los circuitos más fundamentales en la electrónica.

A continuación, se presentarán dos temas importantes de un divisor de voltaje: el circuito y la ecuación.

### 2.1 Circuito

Un divisor de voltaje requiere que se conecte una fuente de voltaje a través de dos resistencias en serie. Es posible que el divisor de voltaje sea dibujado de distintas maneras, pero siempre debe ser esencialmente el mismo circuito.

![](https://i.ibb.co/PcQyWHp/1.jpg)

Ejemplos esquemáticos de divisores de voltaje.

Llamamos a la resistencia más cercana al voltaje de entrada (Vin) R1 y a la resistencia más cercana a tierra R2. La caída de voltaje en R2 es nuestro voltaje de salida (Vout), este es el voltaje resultante de nuestro circuito, que como ya se mencionó es una fracción de nuestro voltaje de entrada.

### 2.2 Ecuación

La ecuación del divisor de voltaje supone que se conocen tres valores del circuito anterior: el voltaje de entrada (Vin), y ambos valores de resistencia (R1 y R2). Teniendo en cuenta estos valores, podemos usar esta ecuación para encontrar el voltaje de salida (Vout):

![](https://i.ibb.co/zJw5q6X/2.jpg)

Esta ecuación establece que el voltaje de salida es directamente proporcional al voltaje de entrada conforme a la relación de R1 y R2.

#### Simplificaciones

Hay algunas generalidades que se deben tener en cuenta al utilizar los divisores de voltaje. Estas son simplificaciones que hacen que la evaluación de un circuito divisor de voltaje sea un poco más fácil.

En primer lugar, si R2 y R1 son iguales, entonces el voltaje de salida es la mitad del de la entrada. Esto es así independientemente de los valores de las resistencias.

![](https://i.ibb.co/RYZnhRm/3.jpg)

Si R2 es mucho mayor que R1, entonces el voltaje de salida será muy cercano al de la entrada. Habrá muy poco voltaje a través de R1.

![](https://i.ibb.co/xjQjFcM/4.jpg)

Por otro lado, si R2 es mucho más pequeño que R1, el voltaje de salida será muy pequeño en comparación con el de la entrada. La mayor parte del voltaje de entrada estará a través de R1.

![](https://i.ibb.co/hZmG6sF/5.jpg)

# 3. Utilizar Capacitores para filtrar, generar carga

## Tipos de capacitores y sus aplicaciones

Existen tres elementos básicos encontrados en la mayoría de circuitos, y son:

  - Resistor
  - Inductor
  - Capacitor
   
El capacitor, o también conocido como condensador, permite almacenar una carga eléctrica dada y sirven para recuperarnos de las caídas de tensión manteniendo un voltaje estable en nuestros circuitos.

La unidad de medida que usan es el faradio, el cual se define como la capacidad de un capacitor entre cuyas placas existe una diferencia de potencial eléctrico de 1 voltio (1V) cuando está cargado de una cantidad de electricidad igual a un culombio (1C).

Tipos de capacitores:

  - **Capacitor Electrolítico.** Es de los más comunes y se mide en microfaradios.
  - **Capacitor Cerámico.** Almacenan una menor carga y se miden en picofaradios.
  - **Super Capacitores.** Se usa en circuitos de alto consumo como en los sistemas de sonido profesionales de un coche. Se miden en faradios.

Unidades de los faradios:

![](https://i.ibb.co/sF9wMcD/simbolos.jpg)

> La diferencia entre una batería y un Capacitor, es que la batería puede almacenar la energía por mucho tiempo, en cambio el capacitor se descarga en cuestión de segundos o milisegundos, según sea la carga que puede almacenar.

## Capacitores a detalle

Los capacitores electrolíticos necesitan que el flujo de corriente lleve una dirección, es decir tiene polaridad. En cambio, los capacitores cerámicos no la tienen.

Toma esto siempre en consideración ya que si conectas mal un capacitor puede dañarte el circuito entero. Otro aspecto a considerar es que con el tiempo los capacitores mueren, es importante verificar el “endurance” en su data sheet.

- [data-sheet-capacitor.pdf](https://drive.google.com/file/d/1VTGKZ-RhjCqQP0D_PaqytXDjTzmHoFJM/view?usp=sharing)

> RoHS quiere decir Restriction of Hazardous Substances y es una marca de conformidad de estándares Europeos. Básicamente, si tus componentes tienen esta marca, se supone que están libres de plomo y mercurio, principalmente

Un capacitor electrolítico se puede estallar por dos razones
1. Por exceder el voltaje aplicado que recomienda el fabricante.
2. Por inversión de la polaridad de la tensión aplicada al mismo.

## Cálculo de capacitancio

Un capacitor de gran tamaño puede almacenar más carga que un capacitor de menor tamaño.

Sobre la base de estas observaciones se puede predecir que la capacidad de un condensador será directamente proporcional al área de las placas e inversamente proporcional a su separación.

La relación exacta puede determinarse considerando la intensidad del campo eléctrico entre las placas del condensador.

La intensidad del campo eléctrico entre las placas del condensador cargado que aparece en la figura puede determinarse con base en la ecuación

![](https://i.ibb.co/BK3YSZF/1.jpg)

![](https://i.ibb.co/HqdXnss/2.jpg)


# 4. Uso de Diodos y bobinas

## Qué son los diodos

Los diodos son un filtro que nos sirve para mantener nuestras señales limpias ya que solo permite el flujo de corriente en una dirección.

## Qué son las bobinas



## Uso práctico de un relevador



## ¿Qué es el electromagnetismo?



# 5. Entender las Señales eléctricas

## Tipos de señales eléctricas



## Definiendo una frecuencia



## Práctica: Creando un flash



# 6. Entender qué es un transistor

## ¿Qué es un transistor?


# 7. Aplica todos tus conocimientos juntos

## Proyecto final ¿qué haremos?



## Proyecto final: Chasis y componentes



## Proyecto final: Esquemático y data sheets



## Proyecto final: Circuitos básicos del sistema



## Proyecto final: Conexión de componentes



## Proyecto final: Terminando las conexiones y ensamble



## Proyecto final: Demo y desafío con fotoresistencias



## Cierre del curso y ¿qué sigue?




