<h1>Fundamentos de Desarrollo de Hardware con Arduino</h1>

<h3>Ricardo Celis</h3>


<h1>Tabla de Contenido</h1>

- [1. Bienvenida al curso](#1-bienvenida-al-curso)
  - [Enlaces del taller IoT](#enlaces-del-taller-iot)
  - [Bienvenidos al curso](#bienvenidos-al-curso)
- [2. Introducción al hardware libre](#2-introducción-al-hardware-libre)
  - [¿Qué es Arduino y qué placas hay?](#qué-es-arduino-y-qué-placas-hay)
  - [¿Cómo se desarrolla el Hardware?](#cómo-se-desarrolla-el-hardware)
  - [¿Cuál es el software para diseño mecánico?](#cuál-es-el-software-para-diseño-mecánico)
  - [Elección del software a utilizar](#elección-del-software-a-utilizar)
  - [Limitaciones de Arduino y qué es el hardware libre](#limitaciones-de-arduino-y-qué-es-el-hardware-libre)
  - [Reto 1: Para un proyecto de IoT, ¿Cuál tarjeta Arduino utilizarías?](#reto-1-para-un-proyecto-de-iot-cuál-tarjeta-arduino-utilizarías)
  - [¿Cómo funciona el Curso de Desarrollo de Hardware con Arduino?](#cómo-funciona-el-curso-de-desarrollo-de-hardware-con-arduino)
  - [Lista de Materiales o Componentes a Utilizar](#lista-de-materiales-o-componentes-a-utilizar)
- [3. Sensores, Actuadores y Procesadores](#3-sensores-actuadores-y-procesadores)
  - [Sensores, actuadores y procesadores](#sensores-actuadores-y-procesadores)
  - [Diferentes tipos de sensores según la salida](#diferentes-tipos-de-sensores-según-la-salida)
  - [Diferentes tipos de sensores según la aplicación](#diferentes-tipos-de-sensores-según-la-aplicación)
  - [Diferentes tipos de actuadores](#diferentes-tipos-de-actuadores)
- [4. Introducción a la electrónica](#4-introducción-a-la-electrónica)
  - [Diferencias entre electricidad y electrónica](#diferencias-entre-electricidad-y-electrónica)
  - [Tipo componentes electrónicos](#tipo-componentes-electrónicos)
  - [Más tipos de componentes electrónicos](#más-tipos-de-componentes-electrónicos)
  - [Limitando la corriente para evitar quemar un led](#limitando-la-corriente-para-evitar-quemar-un-led)
- [5. Manos a la obra](#5-manos-a-la-obra)
  - [Puertos de un arduino y sus funciones](#puertos-de-un-arduino-y-sus-funciones)
  - [Qué es un protoboard](#qué-es-un-protoboard)
  - [Estructura general de un programa en Arduino y hello world con un LED](#estructura-general-de-un-programa-en-arduino-y-hello-world-con-un-led)
  - [Variables y Constantes Globales](#variables-y-constantes-globales)
  - [Manejo de librerías y funciones](#manejo-de-librerías-y-funciones)
  - [Manejo de valores analógicos: uso del potenciómetro](#manejo-de-valores-analógicos-uso-del-potenciómetro)
  - [Uso del monitor serial](#uso-del-monitor-serial)
  - [PWM y señales analógicas](#pwm-y-señales-analógicas)
- [Un control de color RGB e intensidad lumínica para una lampara de mesa](#un-control-de-color-rgb-e-intensidad-lumínica-para-una-lampara-de-mesa)
  - [Uso de push buttons](#uso-de-push-buttons)
  - [Monitor de temperatura con Arduino (uso de LM35 y un lcd 16x2)](#monitor-de-temperatura-con-arduino-uso-de-lm35-y-un-lcd-16x2)
  - [Continuando con el monitor de temperatura con Arduino](#continuando-con-el-monitor-de-temperatura-con-arduino)
  - [Finalizando con el monitor de temperatura con Arduino](#finalizando-con-el-monitor-de-temperatura-con-arduino)
  - [Reto: Crea tu semáforo con Arduino](#reto-crea-tu-semáforo-con-arduino)
- [6. Automatización de procesos](#6-automatización-de-procesos)
  - [Cómo generar movimiento y uso de motores](#cómo-generar-movimiento-y-uso-de-motores)
  - [Cómo generar movimiento y servomotores](#cómo-generar-movimiento-y-servomotores)
  - [Agregando un potenciométro para controlar la posición del Servomotor](#agregando-un-potenciométro-para-controlar-la-posición-del-servomotor)
  - [Robot evasor de obstáculos](#robot-evasor-de-obstáculos)
  - [Continuando con el Robot evasor de obstáculos](#continuando-con-el-robot-evasor-de-obstáculos)
  - [Terminando con el Robot evasor de obstáculos](#terminando-con-el-robot-evasor-de-obstáculos)

# 1. Bienvenida al curso
## Enlaces del taller IoT
## Bienvenidos al curso

# 2. Introducción al hardware libre
## ¿Qué es Arduino y qué placas hay?
## ¿Cómo se desarrolla el Hardware?
## ¿Cuál es el software para diseño mecánico?
## Elección del software a utilizar
## Limitaciones de Arduino y qué es el hardware libre
## Reto 1: Para un proyecto de IoT, ¿Cuál tarjeta Arduino utilizarías?
## ¿Cómo funciona el Curso de Desarrollo de Hardware con Arduino?
## Lista de Materiales o Componentes a Utilizar

# 3. Sensores, Actuadores y Procesadores
## Sensores, actuadores y procesadores
## Diferentes tipos de sensores según la salida
## Diferentes tipos de sensores según la aplicación
## Diferentes tipos de actuadores

# 4. Introducción a la electrónica
## Diferencias entre electricidad y electrónica
## Tipo componentes electrónicos
## Más tipos de componentes electrónicos
## Limitando la corriente para evitar quemar un led

# 5. Manos a la obra
## Puertos de un arduino y sus funciones
## Qué es un protoboard
## Estructura general de un programa en Arduino y hello world con un LED
## Variables y Constantes Globales
## Manejo de librerías y funciones
## Manejo de valores analógicos: uso del potenciómetro
## Uso del monitor serial
## PWM y señales analógicas
# Un control de color RGB e intensidad lumínica para una lampara de mesa
## Uso de push buttons
## Monitor de temperatura con Arduino (uso de LM35 y un lcd 16x2)
## Continuando con el monitor de temperatura con Arduino
## Finalizando con el monitor de temperatura con Arduino
## Reto: Crea tu semáforo con Arduino

# 6. Automatización de procesos
## Cómo generar movimiento y uso de motores
## Cómo generar movimiento y servomotores
## Agregando un potenciométro para controlar la posición del Servomotor
## Robot evasor de obstáculos
## Continuando con el Robot evasor de obstáculos
## Terminando con el Robot evasor de obstáculos

