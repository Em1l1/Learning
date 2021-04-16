<h1>Fundamentos de Electricidad y Electrónica</h1>

<h3>Ricardo Celis</h3>


<h1>Tabla de Contenido</h1>

- [1. Entender los fundamentos de la electricidad](#1-entender-los-fundamentos-de-la-electricidad)
  - [Bienvenida al curso](#bienvenida-al-curso)
  - [Lista de componentes para el curso](#lista-de-componentes-para-el-curso)
  - [¿Qué es la electricidad? Carga Eléctrica, conductores y aislantes](#qué-es-la-electricidad-carga-eléctrica-conductores-y-aislantes)
  - [¿Qué es el voltaje y la corriente?](#qué-es-el-voltaje-y-la-corriente)
  - [Potencia eléctrica](#potencia-eléctrica)
  - [Campos de aplicación de la electricidad](#campos-de-aplicación-de-la-electricidad)
  - [Resistencia y la ley de Ohm](#resistencia-y-la-ley-de-ohm)
- [2. Usar el multímetro para medir Voltaje, Corriente y Resistencia](#2-usar-el-multímetro-para-medir-voltaje-corriente-y-resistencia)
  - [¿Qué es un multímetro?](#qué-es-un-multímetro)
  - [¿Qué es un circuito? Conceptos básicos de circuitos eléctricos](#qué-es-un-circuito-conceptos-básicos-de-circuitos-eléctricos)
- [3. Entender las distintas fuentes de poder y saber elegir la mejor según tu proyecto](#3-entender-las-distintas-fuentes-de-poder-y-saber-elegir-la-mejor-según-tu-proyecto)
  - [Fuentes de alimentación](#fuentes-de-alimentación)
  - [¿Qué es la tierra eléctrica?](#qué-es-la-tierra-eléctrica)
- [4. Construír circuitos básicos](#4-construír-circuitos-básicos)
  - [Práctica: muerte a un led, por la ciencia.](#práctica-muerte-a-un-led-por-la-ciencia)
  - [Protoboard](#protoboard)
  - [Creación de un circuito básico](#creación-de-un-circuito-básico)
- [5. Resistencia: concepto y teoría](#5-resistencia-concepto-y-teoría)
  - [Resistencias](#resistencias)
  - [Potenciometros](#potenciometros)
  - [Fotoresistencias](#fotoresistencias)
  - [Demostrando el uso de una fotoresistencia](#demostrando-el-uso-de-una-fotoresistencia)
  - [Controlando el brillo de nuestro led con un potenciómetro](#controlando-el-brillo-de-nuestro-led-con-un-potenciómetro)
  - [Cierre del curso](#cierre-del-curso)

# 1. Entender los fundamentos de la electricidad

## Bienvenida al curso

- [curso-de-electricidad-y-electronica.pdf](https://drive.google.com/file/d/1PPCykZ5btBS8L-csZgThgb-vuahvk4ZD/view?usp=sharing)

## Lista de componentes para el curso

- Multímetro
- Tarjeta de prototipado o Protoboard
- 5 resistencias de: 1k, 5k, 10k, 220, 330, 470 ohms
- Variable o Potenciómetro de 1k, 5k, 10k
- Fotorresistor de 5 mm o de 10 mm
- Leds, los que tu quieras, nunca sobran
- Botón normalmente abierto, el que encuentres.

- [lista-de-materiales-curso-fundamentos-de-electricidad.pdf](https://drive.google.com/file/d/10qkUuiwC8OpeG9lQINyGtMJTIriMtCq_/view?usp=sharing)

## ¿Qué es la electricidad? Carga Eléctrica, conductores y aislantes

La **electricidad** es un conjunto de fenómenos producidos por el movimiento e interacción entre las cargas eléctricas positivas y negativas de los cuerpos físicos.

  - **Electrón:** Carga eléctrica negativa. Cuando tiene más electrones que protones
  - **Protón:** Carga eléctrica positiva. Cuando tiene menos electrones que protones
  - **Neutrón:** Carga eléctrica neutra. Cuando tiene igual de número de electrones y protones

La **carga eléctrica** es una propiedad física intrínseca de algunas partículas subatómicas que se manifiesta mediante fuerzas de atracción y repulsión entre ellas a través de campos electromagnéticos.

<h3>¿Qué es la electricidad?</h3>

Este es un concepto bastante abstracto pero que está en todos lados, así que lo vas a entender fácilmente. La electricidad es un conjunto de fenómenos producidos por el movimiento e interacción entre las cargas eléctricas positivas y negativas de los cuerpos físicos. ¿Qué quiere decir esto? Esta en todos lados, en tu casa no es la excepción. Cuando presionas el botón de encender la luz permites que haya un flujo de electrones, una carga moviéndose en el circuito de tu casa, lo que hace que encienda la luz. Otro ejemplo son los vehículos eléctricos, ellos tienen una batería y un motor, la batería le proporciona energía al motor y el se encarga de convertirla en fuera física mecánica que se transfiere a las llantas y hace que se impulse. En tu dispositivo también hay un flujo de carga eléctrica que hace que funciona. Este fenómenos invisible que sucede en la interacción de las cargas positivas y negativas está en todos lados.

<h3>Cargas eléctricas</h3>

Acá está la imagen de un átomo:
El átomo se divide en tres partículas subatómicas elementales. Estas son:

![](https://i.ibb.co/jvcbfvV/electron.png)

1. **Electrón:** con una carga negativa.
2. **Protón:** con una carga positiva.
3. **Neutrón:** con una carga neutra.

<h3>Nuestras carga serán</h3>

1. **Negativa:** si tienen más electrones que protones.
2. **Positiva:** si tienes más protones que electrones.
3. **Neutra:** si tienes una equivalencia en cantidad entre protones y electrones.

<h3>Carga eléctrica</h3>

Es una propiedad física intrínseca de algunas partículas subatómicas que se manifiestan mediante fuerzas de atracción y repulsión entre ellas a través de campos electromagnéticos.
Una fuerza de atracción conocida es la gravedad, la que permite el funcionamiento de los grandes cuerpos como los planetas, permitiendo que nos mantengamos en el suelo y que existan las órbitas. La electricidad también tiene esta propiedad, pero además tiene la de repulsión. La siguiente imagen lo explica:

![](https://i.ibb.co/GR6NPLk/ele.png)

- Cargas negativas de repelen.
- Cargas negativas y positivas se atraen.
- Cargas positivas se repelen.

<h3>Materiales</h3>

Ahora hablemos del flujo de los electrones a través de los materiales. Tenemos los elementos cargados en nuestro electrón, el electrón se encuentra en los anillos externos del átomo, es lo que nos permite crear lo que llamamos electricidad. La electricidad fluye de negativo a positivo.

- **Los materiales conductores** como el cobre se encuentra en todas las instalaciones de electricidad, esto es por que es uno de los materiales conductores más abundantes. Es de los mejores que hay ya que tiene los electrones muy poco unidos al núcleo, o sea que están listo para hacer el flujo eléctrico. Cuando se junta con el átomo de al lado es capaz de recibir toda esta energía.
- **Los materiales aislantes** tienen los electrones muy unidos al núcleo, por lo tanto va a ser muy difícil que los electrones fluyan.
- **Los materiales semiconductores** tienen la particularidad de que podemos hacerlos cambiar para que los electrones se encuentren más cerca o lejos del núcleo.

> Los materiales como el plástico pueden tener electrones, ¿Por qué no ceden? por que tienen los electrones muy unidos, pero si reciben una gran cantidad de energía si van a ceder, por esto fallan algunos aislantes, si se hace una instalación eléctrica muy grande usan materiales preparados para este tipo de energías.

## ¿Qué es el voltaje y la corriente?

La **corriente eléctrica** es la cantidad de carga que fluye en un instante dado.

**Potencia** es la presión que se aplica a la corriente.


El **voltaje** es la potencia de la carga al fluir.

Son dos conceptos importantes que nos permitirá saber de la potencia eléctrica.

**¿Qué es la corriente?** Es la cantidad de carga que está fluyendo en un instante dado, la cantidad de electrones que fluye en un circuito eléctrico.
¿Qué es el voltaje? Es la potencia con la que esta carga fluye, se analiza como si fuera un río, el ancho del río es la cantidad de corriente de agua, pero sin importar la cantidad de agua que esté en el río, si no hay corriente este no será un río, será un lago, algo como las baterías que almacenan carga que no se mueve. Si le hacemos una salida a ese lago va a empezar a caer, y si está en una pendiente lo va a hacer con mucha más rapidez, esto es el voltaje.

![](https://i.ibb.co/Ssrdprv/vip.png)

![](https://i.ibb.co/ZxxBQTm/vip1.png)

## Potencia eléctrica

La **potencia** es la cantidad de corriente multiplicada por el voltaje para obtener una nueva magnitud y esta nos sirve para definir la fuerza eléctrica. Utiliza la unidad W.

Básicamente es la cantidad de corriente que multiplicamos por el voltaje para obtener una nueva magnitud, nos sirve para definir la fuerza eléctrica que tiene nuestro circuito, lo llamamos potencia representado por W que es el Watt, nos sirve para medir en una unidad de tiempo, cuanta energía estamos consumiendo. La analogía más fácil de entender esto es la bombilla. Los focos incandescentes, “los ahorradores” consumían 70 watts/hora. Hoy en día puedes adquirir un foco led que consume 10 wats/hora. Esto no es más que una pequeña ecuación que nos indica que durante una hora a 110 volts vamos a consumir la cantidad de corriente eléctrica, carga eléctrica para iluminarte que necesitas al multiplicar: 110 * x = 10 wats/hora.

Aquí tenemos que hacer una división, despejando x, tendríamos que… para saber cual es el consumo que tendría mi foco led a 10 wats/hora sería dividir 10 entre 100, nos daría a 0.1 ampere. ¡No te preocupes! Más adelante veremos estas formulas a detalles para entenderlas mejor.

> Dato: un foco led consume mucho menos, ¡úsalos!

## Campos de aplicación de la electricidad

- **Eléctrica:** Este campo se encarga de estudiar todo lo que ocurre desde el enchufe de tu casa hasta la represa de energía o esa fuente de energía que ocurre en tu país.

![](https://i.ibb.co/LPP2Q2j/luz.jpg)

- **Electrónica:** Es el campo que usaremos en la carrera de IoT. Usamos voltajes pequeños de corriente directa que nos servirán para darle un uso lógico a la misma.

![](https://i.ibb.co/L0yN7HF/luz1.jpg)

- **Computación:** Acá logramos que las computadoras pudieran resolver problemas matemáticos por nosotros. La lógica controlada en los circuitos nos ayudará.


## Resistencia y la ley de Ohm

La resistencia no es más que la oposición al flujo de la corriente eléctrica de un circuito. Nos sirve para limitar la cantidad de corriente que pasamos por un circuito. La unidad de medida es el Ohm.

V = I * R
Voltaje = Intensidad x Resistencia

La resistencia no es otra cosa más que la oposición al flujo de la corriente eléctrica en un circuito. Un material aislante está hecho molecularmente para resistir al flujo de la corriente, en cambio un material conductor está hecho para permitir que el flujo de la corriente sea el más eficiente de todos. Los superconductores tienden a tener la resistencia en 0.

![](https://i.ibb.co/9GnD6dh/luz3.png)

La resistencia nos va a servir para limitar la cantidad de corriente que estamos pasando en un circuito.

La unidad de medida que usamos para medir la resistividad en un circuito eléctrico es el Ohm, que se obtiene usando la ley del señor Ohm. Nos sirve para calcular la resistencia en un circuito, la corriente que vamos a tener o hasta el voltaje.

![](https://i.ibb.co/0GRmgsm/luz2.png)

Es una simple, ecuación que dice que el voltaje(V) va a ser igual a la intensidad(I) de un circuito por la resistencia®.

# 2. Usar el multímetro para medir Voltaje, Corriente y Resistencia

## ¿Qué es un multímetro?

Los multímetros básicos tienen puntos malos como: la precisión al medir el circuito, medir capacitancia y otras funcionalidades que probablemente no tengan. Sin embargo, son suficiente para comenzar.

Los multímetros deben decirte que tan seguros son de usar con altos voltajes.

**Rangos**

Los multímetros vienen en diferentes costos. Los más baratos pueden salir hasta en 4 dólares, comprar este tipo de multímetros compromete la precisión al medir los circuitos, medir capacitancia o funcionalidades extras que se usarán, puede que no las tenga.
Tenemos el rango intermedio que te permitirán medir las siguientes
unidades:

  - Voltaje.
  - Continuidad.
  - Auntorango: hace que se ajuste y te dé la lectura correcta.
  - Hold: te permite guardar un valor.
  - Backlighting: te permite trabajar en lugares donde carezca la luz.
  - Iodos.
  - Resistencia.
  - Capacitancia.
  - Frecuencia.
  - Temperatura.
  - Amperaje.

Los multímetros además tienen que decirte que tan seguro son de usar con altos voltajes. Uno de calidad media soporta hasta 1.000 Volts en mediciones de voltajes. En la parte inferior del multímetro muestra donde conectar los cables de mediciones para captar lo que deseemos y obtener el resultado que queremos.

**Recomendación**

Si deseas dedicarte a esto seriamente, a la electricidad y a la electrónica, es mejor que adquieras un multímetro industrial o profesional para tener mediciones más amplias y precisas. Pueden salir muy costosos pero son inversiones a muy largo plazo. Esto solo si de verdad quieres dedicarte únicamente a esto.

**Tipos de multímetros**
**Gama baja**

![](https://i.ibb.co/SyYNHXp/m1.jpg)

**Gama media**

![](https://i.ibb.co/T2qRQdc/m2.jpg)

**Gama alta**

![](https://i.ibb.co/GpmDpzv/m3.jpg)

## ¿Qué es un circuito? Conceptos básicos de circuitos eléctricos

Un circuito eléctrico es darle un flujo o sentido al voltaje para que haga lo que quieres que haga.

Ahora veamos cómo hacer que la corriente nos sirva para algo. Los circuitos eléctricos no es otra cosa que darle sentido al uso del voltaje.
Acá tenemos un circuito eléctrico básico:

![](https://i.ibb.co/mThyQfm/1.png)

Sabemos que la electricidad se mueve de negativo a positivo, eso sería lo correcto:

![](https://i.ibb.co/99SdHyX/2.png)

Pero por tradición y por confusión de hace años, el concepto se quedó mostrando que la electricidad se mueve de positivo a negativo. Esto es algo confuso pero es así como se quedó, por convenio.

![](https://i.ibb.co/5rxQ8gB/3.png)

Quizá esto no tenga sentido pero así se definió y así se hace.

**Diodo**
Este elemento que se muestra en la gráfica se llama diodo emisor se luz. Esta sería su simbología.

![](https://i.ibb.co/T8qrXwS/4.png)

En este circuito estamos trabajando con corriente directa (D.C) es el tipo de voltaje que se usa en todo circuito electrónico. Su comportamiento es lineal.

![](https://i.ibb.co/kJMCpLp/5.png)

Suponiendo que en nuestro circuito tenemos una batería o fuente de poder de 2.7v y que tenemos un swicth que interrumpe el flujo o que evita que se cierre, se vería de la siguiente forma con su simbología.

![](https://i.ibb.co/fxBqYJ0/6.png)

Su función es hacer que el flujo de electrones llegue a su destino. Cuando el circuito está interrumpido se le llama circuito abierto, esto lo que provoca es que el circuito no tenga ninguna utilidad. Para que un circuito funcione, necesitamos hacerlo del tipo cerrado.

![](https://i.ibb.co/ncHdQR1/7.png)

Al hacer que nuestro flujo de electrones llegue a su destino haría que nuestro led se encienda. Simple y sencillamente nos indicaría que hay un flujo de energía. Solo existen dos tipos de circuito:
 
1. **Abierto:** cuando el flujo está interrumpido.
2. **Cerrado:** cuando el flujo de electrones llega a su destino.

**Circuito en serie y paralelo**
La siguiente imagen nos ayudará a ilustrar que son estos dos tipos de circuitos.

![](https://i.ibb.co/6WJv5gF/8.png)

En este caso tenemos nuestra batería de 9v y 1A. Los v serían la tensión y el A la corriente. Presta atención a la primera imagen.

**En serie**

Allí tenemos dos focos conectadas en series, es decir, una está conectada después de la otra. Las lamparas serían L1 y L2. ¿Qué sucede cuando hacemos este tipo de circuito? El voltaje será la suma de el voltaje individual de cada componente, es decir, que la suma de cada componente se irá restando al voltaje de la fuente de poder: 9v-(5v+4v…)

![](https://i.ibb.co/XbnTP0K/9.png)

Esto daría como resultado que cada lampara añadida al circuito en serie tendría disponible menos voltaje y por ende iluminaría menos.

**En paralelo**

Ahora veamos como funciona este circuito. Se le llama paralelo por que sus componente están colocados paralelamente y no en serie.

![](https://i.ibb.co/HDcmpCk/10.png)



![](https://i.ibb.co/vvyzwbL/11.png)

# 3. Entender las distintas fuentes de poder y saber elegir la mejor según tu proyecto
## Fuentes de alimentación
## ¿Qué es la tierra eléctrica?
# 4. Construír circuitos básicos
## Práctica: muerte a un led, por la ciencia.
## Protoboard
## Creación de un circuito básico
# 5. Resistencia: concepto y teoría
## Resistencias
## Potenciometros
## Fotoresistencias
## Demostrando el uso de una fotoresistencia
## Controlando el brillo de nuestro led con un potenciómetro
## Cierre del curso
