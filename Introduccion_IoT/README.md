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

  - Alimentación

  - AC (corriente alterna) / DC (corriente directa) => IoT

**Tipo**

  - Inductivo (electromagnetismo)
  - Rotativo (motores)
  - Sonido/luz (generadores de sonido y luz)

Para escoger tus actuadores piensa en el verbo a ejecutar (girar, brillar, sonar, cerrar, etc).

- [tipos-de-actuadores.pdf](https://drive.google.com/file/d/1QerBfpBfMtoDf75R19Mp7IQNg9BDdTDL/view?usp=sharing)

## Voltaje y corriente necesarios para el funcionamiento de un actuador

Para medir el **voltaje**, hazlo en paralelo a tu fuente. Y empieza desde el voltaje más pequeño, gradualmente.

Para medir la **corriente**, hazlo en serie. Debes romper el circuito y luego unir tu multímetro al circuito.

Recuerda que si no hay referencia (datasheet), realizamos la prueba de alimentación de nuestro actuador.

> Los marranitos se llaman “adaptadores de voltaje”

- [voltaje-y-corriente-necesarios-para-el-funcionamiento-de-un-actuador.pdf](https://drive.google.com/file/d/1uzG_7cBfLPUVqZdmhD54yDT7PeGvAaDw/view?usp=sharing)

## Tipos de controladores y sus características

Los PLC´s por lo general se usan en la industria, ya que el coste es algo elevado, un promedio de 500USD mas/menos. hay PLC´s escalables, quiere decir que puedes aumentar las entradas y salidas, ponerle módulos de comunicación rs232, rs485, tarjetas para comunicación ethernet, puedes crear una red conectando varios PLC´s, una red `Ethernet TC/IP, Profinet, RS-link`, dependiendo de la marca, los más comerciales, creo, son siemens, Allen-Bradley, Mitsubishi, omron, aunque hay muchos más.

Con un `PLC` (Programmable Logic Controller) podemos programar todas las tareas que realiza la máquina.

Características:

  - Robusto
  - SCL
  - Usado en grandes máquinas y procesos"

Los `RTU` (Remote Terminal Unit):

  - Cuentan con microcontroladores
  - Son conectados directamente con los PLC de control

El concepto maestro - esclavo habla de esta interacción entre un PLC y un RTU. Entonces los RTU son nuestros esclavos que son controlados por un PLC maestro.

`SBC` (Single Board Computer) es un computador que está en una board pequeña con características limitadas pero poderosas.

  - Cuenta con I/O listas para conexión
  - Memoria
  - Procesador
  - Comunicaciones

- [tipos-de-controladores-y-sus-caracteristicas.pdf](https://drive.google.com/file/d/1QfKzVO68uyIbjI1iaJXyLcy9FttEbVwk/view?usp=sharing)
- [Raspberry Pi — Teach, Learn, and Make with Raspberry Pi](https://www.raspberrypi.org/)
- [electronica.asi](https://www.facebook.com/electronica.asi/)

## Los super poderes de la Pi

- Es importante que nuestra Raspberry Pi tenga un disipador.
- Ten cuidado con la estática, manipúlala desde la parte plástica.
- Tiene varias entradas para nuestro periféricos más comunes.

Tips:

  - Compra una Raspberry Pi de 16 GB de memoria.
  - Revisa muy bien los puertos.
  - Agrega un base de acrílico.

- [Raspberry Pi — Teach, Learn, and Make with Raspberry Pi](https://www.raspberrypi.org/)
- [Raspberry Pi 3 Model B - Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)
- [Raspberry Pi GPIO Pinout](https://pinout.xyz/)

## Instalación del sistema operativo

Vamos a instalar el sistema operativo (SO) de nuestra Raspberry Pi, por favor sigue estos pasos para asegurar su correcto funcionamiento.

Nota: Algunos proveedores te permiten comprar tu Pi con una SD pre-instalada, si este es el caso solo debes insertar la SD en el puerto alojado a un extremo de la Pi (apóyate de la imagen), luego debes conectarle un monitor HDMI, mouse, teclado y por último conectarla a energía. Ahí podrás saltar al paso 6 para continuar con el setup.

Si compraste tu SD (Clase 10) y tu Pi por aparte, vamos a hacer lo siguiente:

1. Descargar el NOOBS.zip desde la siguiente página, clic en Download ZIP: https://www.raspberrypi.org/downloads/noobs/


![](https://i.ibb.co/Syj1r3t/1pi.jpg)

2. Descomprime la carpeta en una nueva carpeta, donde puedas ver todos los archivos que este contiene

3. Formatear tu SD en formato FAT32, vamos a ver la manera recomendada para cada formato:

  - Windows: Te recomiendo usar la herramienta sdcard.org, que descargas, instalas, das permisos y abres con la SD dentro, le das un nombre ‘BOOT’ y click en Format.

  - Mac OS: Esta herramienta sdcard.org, también está disponible para este SO, así que la descargas, instalas y abres con la SD dentro, le das un nombre ‘BOOT’ y click en Format.

  - Linux: Las instrucciones detalladas fueron desarrolladas por Norman Dunbar y puedes consultarlas en el siguiente link: http://qdosmsq.dunbar-it.co.uk/blog/2013/06/noobs-for-raspberry-pi

4. Ya con la SD limpia y lista en su formato, podemos copiar los contenidos de la carpeta del paso 2 dentro de la SD, recuerda que debes copiar el contenido (todos los archivos) y no la carpeta. Todos los archivos deben estar en la raíz de la SD.

5. Cuando termine de copiar, podremos expulsar correctamente la SD de nuestro computador e insertarla en la Pi, recuerda hacer esto con la Pi sin energía, totalmente apagada y desconectada de la fuente principal, luego de insertarla podremos prender/conectar la fuente de energía de nuevo.

6. Al iniciar nuestra Pi nos encontraremos con la siguiente pantalla, aquí contamos con todas estas opciones:

  - Raspbian: SO basado en Debian y optimizado para el hardware de la Pi

  - LibreELEC: Basado en Kodi, optimizado para el stream de vídeo

  - OSMC: Basado en Linux y Kodi, te permite estar conectado y ser tu media center

  - Recalbox: Te permite jugar varios tipos videojuegos y plataformas en tu Pi

  - Lakka: Distribución de bajo peso para correr todos los juegos que quieras, es una retro consola muy poderosa

  - RISC OS: Es un SO britanico, diseñado para procesadores ARM

  - Screenly OSE: Liviano e ideal para planeación

  - Windows 10 IoT Core: Windows en tus manos

  - TLXOS: Es un SO Australiano, diseñado, tiene licencia de pago luego de 30 días de periodo de prueba

Cada uno tiene un objetivo y puedes escoger el que necesites, pero para nuestro proyecto seleccionaremos Raspbian , luego damos click en Install (i) y esperamos un buen rato.

![](https://i.ibb.co/0tPspqM/2pi.jpg)

7. Cuando termine la instalación te pedirá que la reinicies y le darás OK, luego iniciará el sistema operativo.

8. Cuando inicie veremos el escritorio de la Pi, se abrirá una pestaña de configuración, que completamos con la información de tu localización y tipo de teclado.

Ahora contamos con nuestra Pi lista para trabajar. En la siguiente clase vamos a configurar la BIOS de nuestra Pi.


## Configuración inicial de la Pi, comandos útiles de la consola de Linux

| Comando |	Función |       |
| -------| :------: | ----- |
| sudo |  shutdown -h now	| Apaga |
| sudo |  reboot -h now	| Reinicia |
| sudo |  raspi-config	| Abre la configuración |
| ls | 	Muestra una lista del directorio donde estoy |
| cd | 	Cambiar de directorio |
| cd .. | 	Cambiar de directorio (ir al anterior) |
| cat | 	Muestra lo que hay adentro del archivo |
| nano | 	Abre un director de texto directamente en la consola |

- [Essencial-command-pi.pdf](https://drive.google.com/file/d/16ZbPJXhTZWeea7A-s7hEWMXPV1EABOQq/view?usp=sharing)

## Conecta tu Pi a internet

| Comando |	Función |
|-------|-------|
| Sudo apt-get update	| Actualiza los paquetes y versiones |
| Sudo apt-get upgrade |	Instala los nuevas nuevas versiones de los paquetes.|

```bash
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

sudo nano /etc/wpa_supplicant/wpa_supplicant.config

# dentro del editor creamos el siguiente scrip

network ={
ssid = "nombre de la red"
psk = "clave de acceso"
key_mgmt = WPA-PSK
}
```

## Conexión por SSH

```bash
sudo raspbeyrypi-config
# Configurar ssh
# yes activade / enable
# local tzdata
# hostname =>  raspberrypi
# password 
# finalizar 
sudo reboot now
```

Conectase a la ip

```bash
hostname

# direccion ip
iconfig

# conecion ssh
ssh pi@192.168.10.52
```

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

