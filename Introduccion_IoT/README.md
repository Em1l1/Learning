<h1>Introducción al IoT</h1>

<h3>Karolina Ladino</h3>


<h1>Tabla de Contenido</h1>

- [1. Introducción al IoT](#1-introducción-al-iot)
  - [¿Qué es el IoT? y El IoT de consumo personal](#qué-es-el-iot-y-el-iot-de-consumo-personal)
    - [Tipo consumidor](#tipo-consumidor)
    - [Sectores comerciales.](#sectores-comerciales)
  - [IoT en industria e infraestructura](#iot-en-industria-e-infraestructura)
    - [Tipo industrial](#tipo-industrial)
    - [ROS](#ros)
  - [Lo necesario para tu proyecto IoT](#lo-necesario-para-tu-proyecto-iot)
  - [Materiales y herramientas necesarias](#materiales-y-herramientas-necesarias)
  - [El impacto de mi proyecto IoT](#el-impacto-de-mi-proyecto-iot)
- [2. Hardware a utilizar en proyectos de IoT](#2-hardware-a-utilizar-en-proyectos-de-iot)
  - [Tipos de sensores](#tipos-de-sensores)
  - [Conexión física de sensores](#conexión-física-de-sensores)
  - [Tipos de actuadores](#tipos-de-actuadores)
  - [Voltaje y corriente necesarios para el funcionamiento de un actuador](#voltaje-y-corriente-necesarios-para-el-funcionamiento-de-un-actuador)
  - [Tipos de controladores y sus características](#tipos-de-controladores-y-sus-características)
  - [Los super poderes de la Pi](#los-super-poderes-de-la-pi)
  - [Instalación del sistema operativo](#instalación-del-sistema-operativo)
  - [Configuración inicial de la Pi, comandos útiles de la consola de Linux](#configuración-inicial-de-la-pi-comandos-útiles-de-la-consola-de-linux)
  - [Conecta tu Pi a internet](#conecta-tu-pi-a-internet)
  - [Conexión por SSH](#conexión-por-ssh)
  - [Arduino o Raspberry Pi ¿Cuál escoger?](#arduino-o-raspberry-pi-cuál-escoger)
  - [Tipos de comunicaciones básicas entre dispositivos](#tipos-de-comunicaciones-básicas-entre-dispositivos)
- [3. Proyecto del Curso](#3-proyecto-del-curso)
  - [Contexto del problema ¿Cómo lo solucionamos?](#contexto-del-problema-cómo-lo-solucionamos)
  - [Materiales que necesitas](#materiales-que-necesitas)
  - [Planeemos el circuito y conectemos sensores](#planeemos-el-circuito-y-conectemos-sensores)
  - [Escribamos el código](#escribamos-el-código)
  - [Subir código y asegurar comunicaciones](#subir-código-y-asegurar-comunicaciones)
  - [Archivos para preparar Bot.py y Upgrade.sh](#archivos-para-preparar-botpy-y-upgradesh)
  - [Trámite de ingreso a la API de Twitter y configuración de Tweetpy](#trámite-de-ingreso-a-la-api-de-twitter-y-configuración-de-tweetpy)
  - [¡Probemos!](#probemos)
- [4. Cierre](#4-cierre)
  - [Conclusiones](#conclusiones)
  - [Resuelve tus dudas sobre IoT en esta Expert Session](#resuelve-tus-dudas-sobre-iot-en-esta-expert-session)
  - [Glosario de términos del curso](#glosario-de-términos-del-curso)

# 1. Introducción al IoT

## ¿Qué es el IoT? y El IoT de consumo personal

En este curso la profesora Karolina Ladino te mostrará los elementos principales y los asombrosos usos que le puedes dar al “IoT” (internet de las cosas).

Desde cosas básicas como tu teléfono, reloj o ropa hasta vehículos, transporte público o construcción estamos rodeados por el internet de las cosas. Por medio de actuadores (luces, sonidos, alarmas, etc) podemos tomar decisiones importantes.

Desde el año 1982 con dispensadores de Coca Cola, pasando por RFID (Radio-frequency identification) en 1999 y llegando a asistentes personales (Amazon Alexa) en los recientes años, el IoT no ha parado de evolucionar.

### Tipo consumidor

Personas usando el IoT en su vida.

En hogares y oficinas (Consumo inteligente)
Wearables (Monitoreo de adultos mayores)
Tipo comercial

### Sectores comerciales.

Cuidado médico (medición rápida y más precisa)
Transporte (parqueo inteligente)
Construcción y automatización de hogares (Control de consumo energético)

- [Que-es-el-iot-y-el-iot-de-consumo-personal.pdf](https://drive.google.com/file/d/18HdfjIImHjdQa3B_AqtcLDVue4zt-ect/view?usp=sharing)

## IoT en industria e infraestructura

### Tipo industrial

Soluciones de impacto macro, manejo de muchísimos datos.

Manufactura, Optimización en cadena de suministros
Agricultura, Predicción de cosechas
Tipo infraestructura

Soluciones en operaciones en relación directa con humanos.

Ciudades, mejora del tráfico
Manejo de energía, Smart grid
Monitoreo ambiental, predicción de desastres

- [Iot-en-industria-e-infraestructura.pdf](https://drive.google.com/file/d/1euJj0RrDRRv3vnqsdUut3Dkpiwd4SlEs/view?usp=sharing)

 ### ROS

Desde pequeños juguetes en los estantes de los supermercados hasta transportistas de materiales del tamaño de un edificio, los robots de hoy en día tienen todas las formas y tamaños. Y gracias a una variedad de avances en sus componentes y tecnologías, también se están volviendo más capaces y rentables.

Los robots pueden ser el mejor dispositivo de borde inteligente. Un robot necesita observar el mundo usando muchos sensores y razonar sobre lo que ha observado para desarrollar un plan de acción. Luego debe realizar esas acciones de forma rápida y segura, a menudo con conectividad a Internet limitada.

Uno de los marcos más populares para construir esa funcionalidad compleja es el Sistema Operativo Robot (ROS) mantenido por Open Robotics , un marco robótico maduro y de código abierto utilizado en todo el mundo para aplicaciones comerciales y de investigación. La interoperabilidad, el cuerpo de muestras y la comunidad de ROS lo hacen valioso para construir una solución automatizada.
## Lo necesario para tu proyecto IoT

  - Bases necesarias
  - Identificar las situaciones
  - Planear los materiales
  - Elegir el controlador a usar
Es crucial encontrar el mejor contexto para usar tu proyecto IoT. Si tienes que monitorear a un gato, ¿es mejor usar un rastreador o un sistema de cámaras?

Tener siempre presente: Hardware (controladores), software(código) y periféricos (Sensores y actuadores).

- [lo-necesario-para-tu-proyecto-iot.pdf](https://drive.google.com/file/d/1BCfMXogJ3_KeSP0m0TsO_F878eCYIYjQ/view?usp=sharing)

## Materiales y herramientas necesarias

- Pinzas (punta de cocodrilo, con cortafríos)
- Cortafríos
- Tercera mano
- Destornilladores
- Soldador electrónico
- Soldadura
- Crema para soldar
- Jump wire (jumper)
- Multímetro

> Me gustaria resaltar que la pasta para soldar “Flux” no se usa para limpiar superficie a soldar, se usa como una forma de distribuir el calor en el estaño “Aleacion de plomo, estaño y demas metales” Y a su vez eliminando el oxido de este, es buena idea utilizarlo en la punta del cautin de vez en cuando para eliminar la escoria de previas soldaduras, y tambien el estaño debe tener un porcentaje de flux y estaño en el cual permita su facil manejo, esto es el equivalente a en metalurgia utilizar borax al momento de unir dos piezas mediante golpe de martillo.

- [materiales-y-herramientas-necesarias.pdf](https://drive.google.com/file/d/1m_RDu-52B9tAx2ODZ6qyOMSv3wQr_C7q/view?usp=sharing)

## El impacto de mi proyecto IoT

Tu proyecto está aportando a hacer más inteligente tu hogar, oficina, ciudad, etc.

Define un objetivo `claro`. Saber qué necesitas y qué harás durante un determinado tiempo.

La data es lo` principal`. La adquisición de datos (tiempo o frecuencias), almacenamiento, visualización o tratamiento. Teniendo en cuenta esto, puedes saber el número de dispositivos(sensores o actuadores) en nuestro proyecto.


# 2. Hardware a utilizar en proyectos de IoT

## Tipos de sensores

En esta clase la profesora Karolina Ladino nos explica que es un sensor y sus clasificaciones para usarlos perfectamente en tus proyectos.

Un sensor es un dispositivo electrónico que puede tomar una entrada física y después de un fenómeno de conversión nos va a entregar una salida eléctrica.

El internet de las cosas nos rodea a todos. Desde un reloj hasta un sistema de transporte, el IoT será cada vez más relevante para nuestras vidas. No seas solo un espectador, usa el internet de las cosas a tu favor, ¡transforma tu entorno y crea proyectos asombrosos!

+ Clasificación 1

  - Activo
    
    - Necesita ser energizado

  + Pasivo
    
    + No necesita ser alimentado

  - Clasificación 2

    - Detección eléctrica
    - Detección Biológica
    - Detección química
    - Detección de radioactividad
    - Conversión fotoeléctrica
    - Conversión termoeléctrica
    - Conversión electroquímica
    - Conversión termo-óptica ,etc
  
  - Clasificación 3

    - Analógica
    
      - Antes pensaba que lo analógico era lo viejito , ahora podría definir que lo analógico tiene muchos valores y no se pude saber con exactitud cuantos datos tienen que ser y si llegaron bien o no. Son señálales infinitas en el tiempo.

    - Digital
    
      - Son paquetes de datos 0 y 1 y estos paquetes si están contados y el sistema sabe que faltan datos y por eso el reproductor de video se para.

- [Tipos-de-sensores.pdf](https://drive.google.com/file/d/11eRPaA8GHSeykTb_fEyyMULxSfhtZ0xn/view?usp=sharing)

## Conexión física de sensores

Al comprar un sensor ten presente siempre su referencia.

Pines:
  - VSS/ 5V/ PWR (power)
  - GND (tierra)
  - Out / Output
Busca la especificación técnica de cada sensor para poder comparar sus requerimientos. La idea del datasheet es que acompañe siempre el desarrollo de tu proyecto (desde antes de comprar los sensores)


- [conexion-fisica-de-sensores.pdf](https://drive.google.com/file/d/1KY4TX012jEBqx2vYTCR5WBTp8Swri0yS/view?usp=sharing)
- [DHT22](https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf)
- [SEenso](https://www.olimex.com/Products/Components/Sensors/Gas/SNS-MQ135/resources/SNS-MQ135.pdf)

## Tipos de actuadores

Los actuadores toman órdenes que el hardware ya procesó por medio de los sensores.
En otras palabras después de que nosotros decidamos que hacer con los datos recopilados y procesados, los actuadores empiezan su trabajo.

Depende de la acción que necesitemos realizar. Puede ser una bombilla, una sirena, un motor, etc.

**Clasificación**

Alimentación

AC (corriente alterna) / DC (corriente directa) => IoT

**Tipo**

Inductivo (electromagnetismo)
Rotativo (motores)
Sonido/luz (generadores de sonido y luz)

Para escoger tus actuadores piensa en el verbo a ejecutar (girar, brillar, sonar, cerrar, etc).

- [tipos-de-actuadores.pdf](https://drive.google.com/file/d/1QerBfpBfMtoDf75R19Mp7IQNg9BDdTDL/view?usp=sharing)

## Voltaje y corriente necesarios para el funcionamiento de un actuador



## Tipos de controladores y sus características



## Los super poderes de la Pi



## Instalación del sistema operativo



## Configuración inicial de la Pi, comandos útiles de la consola de Linux



## Conecta tu Pi a internet



## Conexión por SSH



## Arduino o Raspberry Pi ¿Cuál escoger?



## Tipos de comunicaciones básicas entre dispositivos




# 3. Proyecto del Curso
## Contexto del problema ¿Cómo lo solucionamos?
## Materiales que necesitas
## Planeemos el circuito y conectemos sensores
## Escribamos el código
## Subir código y asegurar comunicaciones
## Archivos para preparar Bot.py y Upgrade.sh
## Trámite de ingreso a la API de Twitter y configuración de Tweetpy
## ¡Probemos!

# 4. Cierre
## Conclusiones
## Resuelve tus dudas sobre IoT en esta Expert Session
## Glosario de términos del curso

