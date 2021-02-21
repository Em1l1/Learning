# Fundamentos de Ingeniería de Software 🧸 🎮

#### Freddy Vega

- [1. Computación, procesadores y memoria](#1.-Computación-procesadores-y-memoria)
  + [Cómo funcionan las computadoras y los teléfonos móviles](#Cómo-funcionan-las-computadoras-y-los-teléfonos-móviles)
  + [Qué son Bits y Bytes](#Qué-son-Bits-y-Bytes)
  + [Cómo funcionan los circuitos electrónicos](#Cómo-funcionan-los-circuitos-electrónicos)
  + [Procesadores y arquitecturas de CPU](#Procesadores-y-arquitecturas-de-CPU)
  + [Qué es un system on a chip](#Qué-es-un-system-on-a-chip)
  + [Qué es la memoria RAM y cómo funcionan los discos duros](#Qué-es-la-memoria-RAM-y-cómo-funcionan-los-discos-duros)
  + [GPUs, tarjetas de video y sonido](#GPUs-tarjetas-de-video-y-sonido)
  + [Periféricos y sistemas de entrada de información](#Periféricos-y-sistemas-de-entrada-de-información)
  + [Arquitectura de la computación](#Arquitectura-de-la-computación)
- [2. Cómo funciona Internet](#2.-Cómo-funciona-Internet)
  - [Introducción a las redes, protocolos e Internet](#Introducción-a-las-redes-protocolos-e-Internet)
  - [Puertos y protocolos de red](#Puertos-y-protocolos-de-red)
  - [Qué es una dirección IP y el protocolo de Internet](#Qué-es-una-dirección-IP-y-el-protocolo-de-Internet)
  - [Cables submarinos, antenas y satelites en Internet](#Cables-submarinos-antenas-y-satelites-en-Internet)
  - [Qué es un dominio, DNS o Domain Name System](#Qué-es-un-dominio-DNS-o-Domain-Name-System)
  - [Cómo los ISP hacen Quality of Service o QoS](#Cómo-los-ISP-hacen-Quality-of-Service-o-QoS)
  - [Cómo funciona la velocidad en internet](#Cómo-funciona-la-velocidad-en-internet)
  - [Qué es el Modelo Cliente/Servidor](#Qué-es-el-Modelo-Cliente/Servidor)
  - [Cómo funciona realmente un sitio web](#Cómo-funciona-realmente-un-sitio-web)
  - [Internet es más grande de lo que crees](#Internet-es-más-grande-de-lo-que-crees)
- [3. Sistemas operativos](#3.-Sistemas-operativos)
  - [Diferencias entre Windows, Linux, Mac, iOS y Android](#Diferencias-entre-Windows-Linux-Mac-iOS-y-Android)
  - [Permisos, niveles de procesos y privilegios de ejecución](#Permisos-niveles-de-procesos-y-privilegios-de-ejecución)
  - [Fundamentos de sistemas operativos móviles](#Fundamentos-de-sistemas-operativos-móviles)
  - [Sistemas operativos embebidos e Internet of Things](#Sistemas-operativos-embebidos-e-Internet-of-Things)
- [4. Archivos y estructuras de datos](#4.-Archivos-y-estructuras-de-datos)
  - [Cómo funciona .zip: Árboles binarios](#Cómo-funciona-zip-Árboles-binarios)
  - [Metadatos, cabeceras y extensiones de archivos](#Metadatos-cabeceras-y-extensiones-de-archivos)
  - [Cómo funciona el formato JPG](#Cómo-funciona-el-formato-JPG)
  - [Videos, contenedores, codecs y protocolos](#Videos-contenedores-codecs-y-protocolos)
- [5. Contenido Bonus](#5.-Contenido-Bonus)
  - [Qué es una red neuronal](#Qué-es-una-red-neurona)
  - [¿Qué es SQL y NoSQL?](#¿Qué-es-SQL-y-NoSQL?)
  - [Qué es un algoritmo](#Qué-es-un-algoritmo)
  - [El poder de un Raspberry Pi](#El-poder-de-un-Raspberry-Pi)


# 1. Computación, procesadores y memoria

  ## Cómo funcionan las computadoras y los teléfonos móviles

  Aprende cómo es el proceso de enviar un email, todo su recorrido desde tu computadora, servidores y notificaciones hasta que llega al destinatario.

  Idea básica al escribir y enviar un mail:

Escribimos el mail XD

Apretamos enter para enviar el mail.

2.1. Al apretar enter estamos **enviando una señal eléctrica** desde el teclado.

2.2. Esta **señal es enviada a la motherboard**, la motherboard la envia al CPU.

2.3. La **CPU** recibe la señal del teclado y la envia al sistema operativo.

2.4. **El sistema operativo** (a través de drivers, que son softwares que interpretan las señales eléctricas de los periféricos) interpreta la señal eléctrica y la envía al navegador (pues sabe que nosotros queriamos enviarla ahí por donde apretamos el enter (mientras estabamos en el navegador)

2.5. Nosotros cuando estamos en una **pestaña de chrome en realidad estamos en un html**, un html posee uno o varios script, y ahí un script que esta preparado para hacer algo al momento de pulsar la tecla enter (al momento que ocurra el evento “Pulsar tecla enter”), el cual va a hacer pues hemos apretado a tecla enter.

2.6. **Javascript** entiende que al ocurrir el evento enter tiene que hacer algo con el mail que hemos escrito.

2.6.1. **AJAX** permite enviar datos al servidor (el mail en este caso) y que la pagina no se recargue. AJAX es un API (interfaz de programación), que, entre sus multiples funciones, encapsula los datos que deseamos enviar de una manera que luego el servidor comprendera. La forma de encapsular los datos se denomina formato. AJAX encapsula el mail en un formato llamado JSON

2.6.2 **AJAX envía** el mail en formato JSON a través del protocolo REST (es un conjunto de reglas de como se envían los datos a un servidor) a través de HTTP (esta incluido en REST).

2.6.3 **HTTP y HTTPS** son protocolos de transferencia de texto. HTTPS es más seguro porque permite que solo al servidor al cual estamos enviando los datos pueda interpretar la información, solo el receptor final podrá ver los datos que enviamos. De esta manera se evita que alguien se pueda meter en el medio de al transferencia y ver los datos. Los datos se envían a una dominio DNS, que es la dirección de un servidor

2.7 El **servidor** recibe los datos en forma de señales eléctricas, el sistema operativo del servidor (en general linux(muerte al capitalismo 😛 )) a través de ethernet, transforma los datos que están encapsulados según el protocolo TCP/IP. Este protocolo luego crea los datos hacia el protocolo `HTTP`, `HTTP` es recibido por un servidor de `HTTP` de linux.

2.8. El **servidor HTTP** ahora permite que los programas en el backend procesen la información recibida según corresponda. Los datos procesados son guardados en una base de datos para luego poder acceder a estos datos.

2.9. El **mail** ahora si es enviado al dominio que sigue al @.

2.10. El **mail** ahora va al servidor de mail del dominio que se envía, este lo envía a la base de datos del mail que corresponde (el que esta previo al @), es decir va a la bandeja del receptor.

2.11. La **bandeja** del receptor recibe una notificación.

2.12. La **bandeja envía** una notificación a un servidor de notificaciones, el servidor de notificación avisa a nuestro celular que se ha recibido un mail.

El mail fue **envía y el receptor** fue notificado a su celular.
Más claro échale agua 😛

**NOTA:** Los DNS es una base de datos que relaciona un nombre con un **IP**

![](https://i.ibb.co/fpqNp09/email.png "Enviar un email")
  
  ## Qué son Bits y Bytes

  Conoce la diferencia entre los Bits y Bytes, su historia, construcción y adaptación a la computación y su uso universal.

  ![](https://i.ibb.co/1M5y8mg/bits-bytes.png "Diferencia entre los Bits y Bytes")

**Nota**

4 bytes = 32 bits por ser una dirección **ipv4**

- **Binario:** 0-1
- **Decimal:** 0-9
- **Hexadecimal:** 0 1 2 3 4 5 6 7 8 9 A B C D E F

Puedes realizar conversiones de valores entre estos

- **1 Bit:** Es un 0 o un 1
- **1 Byte:** Son 8 Bit
- **1 Kilobyte:** Son 1024 Bytes
- **1 Megabyte:** Son 1024 Kilobytes
- **1 Gigabyte:** Son 1024 Megabytes
- **1 Terabyte:** Son 1024 Gigabytes


<p align="center"><a href="https://es.wikipedia.org/wiki/Tama%C3%B1o_de_archivo"><img src="https://i.ibb.co/6H20chY/wiki.png" width="100" alt="Tabla de Contenido"></a></p>

  ## Cómo funcionan los circuitos electrónicos

La electricidad es un flujo constante de electrones que se mide en voltaje y amperaje.

Empezando a ver circuitos pensar o asimilar que la corriente es agua, el voltaje es la presion a la que se transmite el agua y la resistencia es el tamaño del tuvo entre mas resistencia mas pequeño el tuvo … en consecuencia menos corriente deja pasar.

![](https://i.ibb.co/C5J1fPF/elec.png "Circuitos electrónicos")

**Ley de Ohm:** `V=R*I`

**V (voltaje)** = Es la diferencia de potencial en un circuito, se puede pensar como la fuerza que hace que los electrones se muevan a través del circuito. En analogía con una tubería, representaría moto-bomba de agua que impulsa el agua. Su medida internacinal son los voltios (V).

**R (resistencia)** = La resistencia en un circuito es un dispositivo, que mediante el material del cual esta hecho, se opone al flujo de los electrones, y perdiendo dicha energía en forma de calor. Siguiendo con la analogía, la resistencia es equivalente a las piedras de un río, entre más piedras y más grandes, la corriente del río disminuye. En el sistema internacional sus unidades son Ohmios (Ω).

**R (corriente)** = La corriente eléctrica no es más que el flujo de electrones a través de un material conductor, entre dos puntos con una diferencia de potencial. En nuestra analogía, simplemente es el agua. Sus unidades internacionales son los Amperios `(A)`.

Por lo tanto la ley expresa que la diferencia de potencial en un circuito, es directamente proporcional a la corriente `( I )` y directamente proporcional a la resistencia `( R )`.

![](https://i.ibb.co/qF4W08G/5e1v.jpg "Circuitos electrónicos")

  ## Procesadores y arquitecturas de CPU

Vivimos en un mundo donde todo es un computador, como celulares, tablets, televisores, etc.

Existe una arquitectura para computadores de escritorio y laptops, estos internamente tienen:

  - **CPUs:** su velocidad de mide en GHz y tienen Cores que son el número de instrucciones en paralelo que pueden hacer.

En este momento se hacen las CPUs en silicio y estas se calientan de acuerdo a la cantidad de procesos.

  - **BIOS,** es un pequeño sistema que arranca el computador y comprueba la conexión del hardware.

  - **Disco duro,** es donde se almacena el sistema operativo y los archivos que guardamos.

  - **Memoria RAM,** los datos del sistema operativo se envían a la memoria que sirve como intermediario con la CPU, debido a que es una memoria de acceso rápido. Esta memoria solo funciona cuando hay electricidad.

  - **GPU,** puede procesar en paralelo los pixeles de la pantalla y enviarlo en tiempo real para representarlos.

  ![](https://i.ibb.co/8rKzLZG/arq.png)

  ## Qué es un system on a chip

La arquitectura rápida y compleja en un sistema tradicional podemos hoy tenerlo en un disposivo pequeño gracias a un system on a chip

Un system on a chip es una CPU que también tiene una memoria RAM y un disco duro en un chip.

También incluye chips especializados que permiten realizar algunos procesos necesarios por un dispositivo móvil.

**System on a Chip** es todo el sistema de funcionamiento de un CPU normal de computadora, integrado en un Chip

![](https://i.ibb.co/8rKzLZG/arq.png)

  ## Qué es la memoria RAM y cómo funcionan los discos duros

Sabemos que los archivos se almacenan en el disco duro y la hora de abrirlo, se cargan en memoria RAM, pero… ¿Cómo exactamente funciona eso?

Los discos duros antiguos funcionan como los vinilos antiguos: tienen un cabezal que va leyendo los datos que pasan por debajo de ella a medida que el disco gira a una velocidad constante.

Los discos duros son lentos porque deben posicionarse donde está el archivo almacenado y esto puede implicar que el brazo mecánico que mueve el cabezal se tome mucho tiempo en encontrar todos los pedazos de datos del archivo.

La **memoria RAM** es más rápida ya que puede acceder a los datos almacenados de manera instantánea.

**Los discos duros** de estado sólido no tienen el cabezal ni los discos que giran, sino que son más parecidos a las memorias RAM: funcionan electrónicamente. A pesar de eso guardan los datos en memorias flash, que son un poco más lentas que las RAM.

**Los discos duros no son volátiles:** guardan la información de manera persistente aunque se les quite el suministro de energía.

Además almacenan los archivos de manera secuencial: para almacenar un archivo, éste se parte en varios pedacitos y se guarda la posición de cada uno de estos pedacitos y su ubicación en el disco para poder leerlos secuencialmente.

Los sistemas de archivos son convenciones internas de los sistemas operativos para poder acceder a los archivos almacenados.

  - En Linux existe ext3 o ext4
  - En Windows existía FAT16 o FAT32 (File Allocation Table), que fue reemplazado por NTFS (New Technology File System)
  - En Mac OSX el sistema de archivos se llamaba HFS (Hierarchical File System) pero ahora se llama AFS (Apple File System) en macOS Sierra.

Cuando abrimos un archivo, el CPU se lo pide al disco duro y luego lo lleva a la memoria RAM para leerlo.

En la RAM están todos los programas y archivos que están en ejecución. Si abrimos un archivo con el Bloc de Notas, por ejemplo, ambos deben estar cargados en la RAM. Y el CPU puede acceder a la memoria RAM a través de un índice compartido, es decir, un índice que indica en qué posiciones de memoria se encuentran qué partes de un archivo o proceso.

Los datos viajan a través de un conjunto de cables paralelos llamado bus de datos, que comunica el CPU con el disco duro y la RAM para permitir la transferencia de datos.

![](https://i.ibb.co/qyHnvtB/archivo.png "Memoria RAM")

![](https://i.ibb.co/TTgdJ1x/123.gif "ARchivo")

  ## GPUs, tarjetas de video y sonido

Sabemos cómo los archivos se cargan en memoria pero ¿Cómo veo en pantalla que el archivo se ha abierto?

Esto se logra gracias a la Graphic Processing Unit o GPU.

La CPU puede ejecutar cualquier proceso, incluido el dibujado en pantalla de ciertos datos. Pero no es ella quien se encarga, sino la GPU: **tarjetas especialmente fabricadas para realizar estas tareas**.

La comunicación entre la CPU y la GPU se realiza actualmente a través de un socket llamado PCI-Express.

Estas placas de vídeo tienen sus propias unidades o núcleos de procesamiento y su propia memoria RAM.

Lo que sucede es que la GPU divide la pantalla en una matriz y cada núcleo se encarga de dibujar una parte de esa matriz, para lograr una mejor performance.

Esto es mucho más rápido de lo que podría lograr la CPU sola ya que debería dibujar pixel por pixel ella sola.

- [GPU vs CPU](https://www.youtube.com/watch?v=-P28LKWTzrI)

![](https://i.ibb.co/qyHnvtB/archivo.png "Memoria RAM")

  ## Periféricos y sistemas de entrada de información

Los sistemas operativos normalmente tienen un núcleo llamado kernel, que es el principal elemento que los representa y es la primera parte del sistema operativo que se carga en la memoria RAM. El kernel del sistema operativo tiene acceso a todo en nuestra computadora: nuestros archivos, a nuestros periféricos, a los datos de las aplicaciones.

El kernel, inmediatamente después de ser cargado en RAM, se encarga de cargar los drivers: pequeñas piezas de software que permiten interpretar las señales eléctricas del hardware, para que el sistema operativo pueda comunicarse con ellos.

Luego tenemos otro set de drivers que pueden ser los controladores de arranque llamados drivers de aplicación. Cuanto más nos alejamos del kernel, menos privilegios tenemos. Los drivers de aplicación deben pedirle permisos a los drivers anteriores para poder acceder al hardware.

La última capa la representan las aplicaciones. Esta es la capa que menos permisos tiene, ya que las aplicaciones no deberían poder acceder al hardware directamente.

**Sistema operativo como anillos:**

  - **Primer anillo - Kernel:** El Kernel lo podemos entender como la capa mas profunda de nuestro S.O. por lo tanto tiene acceso completo a archivos, drivers, programas, etc…Igual que cualquier otro proceso, se carga en la RAM como la cualidad de que es lo primero en cargar.
  
  En esta capa también viven programas capaces de encriptar y desencriptar información, de tal forma que ninguna otra capa del S.O. tenga acceso a ellos.

  - **Segundo anillo - Drivers:** Como se ha dicho antes los drivers son código que se encargan de interpretar las señales de el hardware y establecer una comunicación con el software del PC. Estos primeros drivers pertenecen a piezas de hardware bastante importantes como la pantalla, el teclado, el mouse, etc…

    - Es importante indicar que entre el primer y el segundo anillo hay un indice de permisos donde estan almacenados qué permisos tiene cada app.

  - **Tercer anillo - Mas Drivers:** Otra capa de drivers carga en un tercer “puesto” en la RAM. Dado que están más alejados del Kernel, tienen menos permisos y privilegios que los drivers del segundo anillo. Dado que mediante los drivers de este anillo, se comunican en su mayoría las Apps, es necesario que primero los drivers del tercer anillo pidan permisos a los del segundo anillo para luego así comunicarse con el hardware.

  - **Cuarto anillo - Apps:** Finalmente en la última capa del modelo de anillos del S.O. nos encontramos con las apps, que se cargan en la RAM para ejecutar procesos. Sin embargo a diferencia de los otros anillos no tienen ningún tipo de acceso directo al hardware del PC. Es importante tener en cuenta que así debería ser, pues de lo contrario cualquier Software escrito por terceros tendría la capacidad de acceder casi por completo al PC y a sus piezas de Hardware.

![](https://i.ibb.co/GP1rQnQ/operating-rings.png "Operating rings")

  ## Arquitectura de la computación
En el inicio de la computación no existía un procesador y una memoria aparte. Las computadoras estaban más cerca de ser una máquina de escribir que una de las computadoras que conocemos ahora. Eran máquinas grandes y pesadas, que requerían ser trasladadas en aviones o camiones. El código binario se escribía en tarjetas perforadas: cuyas perforaciones (o falta de ellas) representaban los **1 y 0.**

Hoy en día tenemos computadoras en nuestros propios bolsillos y las cargamos a todos lados, tenemos laptops cuyos monitores se pueden desacoplar y funcionan como tablets, tenemos microchips que sirven como una computadora común y corriente.

Ese salto evolutivo en la computación ocurre gracias a la estandarización de la arquitectura de las computadoras: decidimos que un Byte son `8 bits`, que la CPU es la encargada de procesar, que la GPU representa datos visualmente, que `1024 Bytes` son un KiloByte, y que `1024 KB` son `1 MB`, que exista un puerto común como el USB que nos permite conectar otros dispositivos externos.

Estandarizamos la transferencia de datos y los protocolos de comunicación. Hay un formato definido para cada tipo de imágenes, hay una forma de escribir HTML para que el navegador lo interprete y pueda mostrarnos elementos visuales en la pantalla. Definimos una forma para comprimir un archivo.

**Esta evolución de almacenamiento más o menos se ha dado así:**

Tarjetas perforadas -> **Cintas Magnéticas** -> **Disquetes de 5’25"** -> Disquetes de 3’5" -> CD -> Discos Flash (usb) -> Discos duros portátiles -> Almacenamiento Cloud

# 2. Cómo funciona Internet

  ## Introducción a las redes, protocolos e Internet

Aprende cómo tu computador se conecta a internet, qué es un switch, un router, un modem, un ISP, cómo el router sabe cuál es tu computador y de ahi, conectarse a internet.

- [Redes - El protocolo ARP](https://geekytheory.com/redes-el-protocolo-arp)

Aprende cómo tu computador se conecta a Internet, qué es un switch, un router, un modem, un ISP, cómo el router sabe cuál es tu computador y de ahí, conectarse a Internet.

Es concepto de que Internet es un nube es erróneo. La manera simple de de definir Internet es decir que son ordenadores conectados. Si nos profundizamos en esa idea sencilla. Nos conectamos Internet a través de estos métodos.

Keywords:

- **Switch:** Conmutador (*switch*) es el dispositivo digital lógico de interconexión de equipos que opera en la capa de enlace de datos del modelo OSI. Su función es interconectar dos o más segmentos de red, de manera similar a los puentes de red, pasando datos de un segmento a otro de acuerdo con la dirección MAC de destino de las tramas en la red y eliminando la conexión una vez finalizada ésta.

- **Router:** Un *router* —también conocido como enrutador,1 2 o rúter3— es un dispositivo que proporciona conectividad a nivel de red o nivel tres en el modelo OSI. Su función principal consiste en enviar o encaminar paquetes de datos de una red a otra, es decir, interconectar subredes, entendiendo por subred un conjunto de máquinas IP que se pueden comunicar sin la intervención de un encaminador (mediante puentes de red o un switch), y que por tanto tienen prefijos de red distintos. Estos puedo o no tener WIFI.

- **IP list:** Dirección IP (Internet Protocol) es una matrícula identificativa que te define dentro de una red, ya sea esta interna o externa, de cara a Internet. Y una IP list no de ja de ser una lista donde se guarda IPs en un router.

- **DHCP:** DHCP (siglas en inglés de Dynamic Host Configuration Protocol, en español «protocolo de configuración dinámica de host») es un servidor que usa protocolo de red de tipo cliente/servidor en el que generalmente un servidor posee una lista de direcciones IP dinámicas y las va asignando a los clientes conforme éstas van quedando libres, sabiendo en todo momento quién ha estado en posesión de esa IP, cuánto tiempo la ha tenido y a quién se la ha asignado después. Así los clientes de una red IP pueden conseguir sus parámetros de configuración automáticamente.

- **MAC Address:** La dirección MAC (siglas en inglés de Media Access Control) es un identificador de 48 bits (6 bloques de dos caracteres hexadecimales (4 bits)) que corresponde de forma única a una tarjeta o dispositivo de red. Se la conoce también como dirección física, y es única para cada dispositivo. Está determinada y configurada por el [IEEE](https://es.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers)(los últimos 24 bits) y el fabricante (primeros 24 bits) utilizando el organizationally unique identifier. La mayoría de los protocolos que trabajan en la capa 2 del modelo OSI usan una de las tres numeraciones manejadas por el IEEE: MAC-48, EUI-48, y EUI-64, las cuales han sido diseñadas para ser identificadores globalmente únicos. No todos los protocolos de comunicación usan direcciones MAC, y no todos los protocolos requieren identificadores globalmente únicos.

- **Modem:** Un módem (del inglés modem, acrónimo de *modulator demodulator*; pl. módems)1 es un dispositivo que convierte las señales digitales en analógicas(modulación) y viceversa (desmodulación), y permite así la comunicación entre computadoras a través de la línea telefónica o del cablemódem. Sirve para enviar la señal moduladora mediante otra señal llamada portadora.

- **ISP:** internet services provider, tu provedor de internet. En el caso de México seria: megacable, Axtel, Telmex etc 😃

En redes viejitas donde solo había un switch las ip’s se asignaban manual o se tenía un servidor que las asignaba automáticamente conocido como servidor **DHCP (Dynamic Host Configuration Protocol)**

Hoy en día la mayoría de los proveedores de internet nos dan un Hardware que al mismo tiempo es un switch (pues puedes conectarte por cable) un Router (pues te conectas por wifi y nos asigna una IP) y nos provee de internet.

![](img/internet.png)

  ## Puertos y protocolos de red

En ocasiones se le denomina conjunto de protocolos TCP/IP, en referencia a los dos protocolos más importantes que la componen, que fueron de los primeros en definirse, y que son los dos más utilizados de la familia:

  - **TCP** (Transmission Control Protocol) Protocolo de Control de Transmisión.

  - **IP** (Internet Protocol) Protocolo de Internet.

Existen tantos protocolos en este conjunto que llegan a ser más de cien diferentes, entre ellos se encuentran:

  - **ARP** (Address Resolution Protocol), protocolo de resolución de direcciones, para encontrar la dirección física (MAC) correspondiente a una determinada IP.

  - **FTP** (File Transfer Protocol), Protocolo de Transferencia de Archivos, para transferencia de archivos o ficheros.

  - **HTTP** (HyperText Transfer Protocol), Protocolo de Transferencia de HiperTexto, que es popular porque se utiliza para acceder a las páginas web.

  - **POP** (Post Office Protocol), Protocolo de Oficina Postal, para correo electrónico.

  - **SMTP** (Simple Mail Transfer Protocol), Protocolo de Transferencia Simple de Correo, para correo electrónico.

  ![](img/ip.webp)

  **Internet**

  ![](img/internet.png)

  ![](img/ivp.jpeg)

  Las Ip privadas que es lo que mas comunmente estan restrinjidas para el uso exclusivos de IP privadas… estan son:

  - 10.0.0.0 hasta la 10.255.255.255.
  - 127.0.0.0 hasta la 127.255.255.255 y esta es solo para LOOPBACK.
  - 172.16.0.0 hasta la 172.31.255.255.
  - 192.168.0.0 hasta la 192.168.255.255
cualquier ip que este fuera de estos cuatro rangos se le considera una IP pública.

Las direcciones ip estan clasificadas como clase A, clase B, clase C, D y E
Esta clasificación es mas que todo para las IPv4


  ## Qué es una dirección IP y el protocolo de Internet

IP es la sigla de Internet Protocol y una dirección IP es un número único con el cual una computadora o un dispositivo se identifica cuando está conectada a una red con el protocolo IP.

Cada dirección IP está compuesta por 4 números separados por puntos y son una forma de comprender números más grandes y complejos. Las direcciones IP tienen una estructura que las convierten en privadas o públicas y que además hacen parte de la máscara de red y el getaway.

Las direcciones IP permiten que cada computador o dispositivo pueda conectarse al exterior, es decir a Internet, esto a través de tecnologías como NAT o Network Address Translation.

![](img/ips.webp "Una dirección IP y el protocolo de Internet")

la manera mas facil de ver si una ip es clase A, B o C es utilizando la mascara de red estandar y estas son:

```bash
  - 255.0.0.0 - clase A
  - 255.255.0.0 - clase B
  - 255.255.255.0 - clase C
```

Pero, tambien existe el metodo de mascara de subred variable, la cual es muy util para segmentar una red ip con mascara de red estandar.

Todo seccion representada por un 0 en la mascara de red va a ser destinada a host o clientes y las que estan representadas por 255 son la destinada a la red.

  - **IP:** es la sigla de Internet Protocol y una dirección IP es un número único con el cual una computadora o un dispositivo se identifica cuando está conectada a una red con el protocolo IP.

Cada dirección IP está compuesta por 4 números separados por puntos y son una forma de comprender números más grandes y complejos. Las direcciones IP tienen una estructura que las convierten en privadas o públicas y que además hacen parte de la máscara de red y el getaway.

Las direcciones IP permiten que cada computador o dispositivo pueda conectarse al exterior, es decir a Internet, esto a través de tecnologías como NAT o Network Address Translation.

  - **Mascara de red:** La máscara de red o redes es una combinación de bits que sirve para delimitar el ámbito de una red de ordenadores. Su función es indicar a los dispositivos qué parte de la dirección IP es el número de la red, incluyendo la subred, y qué parte es la correspondiente al host. Mediante la máscara de red, un sistema (ordenador, puerta de enlace, router, etc…) podrá saber si debe enviar un paquete dentro o fuera de la subred en la que está conectado. Por ejemplo, si el router tiene la `dirección IP 192.168.1.1 `y `máscara de red 255.255.255.0`, entiende que todo lo que se envía a una dirección IP con `formato 192.168.1.X`, se envía hacia la red local, mientras que direcciones con distinto formato de direcciones IP serán buscadas hacia afuera (internet, otra red local mayor, etc…).

  - **Gateway:** La pasarela (en inglés *gateway* ) o puerta de enlace es el dispositivo que actúa de interfaz de conexión entre aparatos o dispositivos, y también posibilita compartir recursos entre dos o más computadoras.

Su propósito es traducir la información del protocolo utilizado en una red inicial, al protocolo usado en la red de destino.

La pasarela es normalmente un equipo informático configurado para dotar a las máquinas de una red de área local (Local Area Network, LAN) conectadas a él de un acceso hacia una red exterior, generalmente realizando para ello operaciones de traducción de direcciones de red(Network Address Translation, NAT). Esta capacidad de traducción de direcciones permite aplicar una técnica llamada “enmascaramiento de IP” (IP Masquerading), usada muy a menudo para dar acceso a Internet a los equipos de una LAN compartiendo una única conexión a Internet, y por tanto, una única dirección IPexterna.

**NAT:** La traducción de direcciones de red o NAT (del inglés Network Address Translation) es un mecanismo utilizado por routers IP para intercambiar paquetes entre dos redes que asignan mutuamente direcciones incompatibles. Consiste en convertir, en tiempo real, las direcciones utilizadas en los paquetes transportados. También es necesario editar los paquetes para permitir la operación de protocolos que incluyen información de direcciones dentro de la conversación del protocolo.

  ## Cables submarinos, antenas y satelites en  Internet

La mayoría de personas imaginan que el acceso a Internet consiste en conexiones satelitales, lo cual es un error, pues los satélites están destinados sólo para áreas remotas. Internet funciona a partir de cables que atraviesan diferentes lugares del mundo.

Cuando usas tu computadora o dispositivo, este se conecta a un ISP o un prestador de servicios de Internet (ese a quién le pagas tu factura). De ahí, la conexión con diferentes puntos en el mundo a través de cables submarinos, que pueden ser de fibra óptica o cobre.

Estos cables pueden comenzar en una ciudad como Nueva York y terminar en Japón y aunque no parezca, la red de Internet un poco frágil pues los cables pueden romperse por diferentes causas, como las anclas de los barcos.

![](https://i.ibb.co/pnYSjSZ/susbmarine.png)

![](https://i.ibb.co/pZ4Y2vW/inter.png "Internet")

  ## Qué es un dominio, DNS o Domain Name System

Como funciona internet, desde los nodos cables submarinos hasta la ultima milla. Como los operadores ISP filtran o restringen la velocidad de algunos contenidos.
Adicional como los sitios web usan redes CDN para distribuir contenido.

Los DNS’s simplemente traducen una ip muy dificil de recordar a un nombre que sea sencillo de recordar.

Soluciones para problemas comunes de redes WLAN
Las redes inalámbricas LAN en las empresas siguen creciendo, lo cual plantea problemas de diseño, implementación y administración para el personal de TI. Este handbook ofrece soluciones para problemas comunes de redes e incluye consejos para la selección e implementación de redes WLAN.

**DNS:** El sistema de nombres de dominio1 (DNS, por sus siglas en inglés, Domain Name System) es un sistema de nomenclatura jerárquico descentralizado para dispositivos conectados a redes IP como Internet o una red privada. Este sistema asocia información variada con nombre de dominio asignado a cada uno de los participantes. Su función más importante es “traducir” nombres inteligibles para las personas en identificadores binarios asociados con los equipos conectados a la red, esto con el propósito de poder localizar y direccionar estos equipos mundialmente.

El servidor DNS utiliza una base de datos distribuida y jerárquica que almacena información asociada a nombres de dominio en redes como Internet. Aunque como base de datos el DNS es capaz de asociar diferentes tipos de información a cada nombre, los usos más comunes son la asignación de nombres de dominio a direcciones IP y la localización de los servidores de correo electrónico de cada dominio.

**Dominio:** Extensión o dominio de Internet es un nombre único que identifica a un sitio web en Internet.

El propósito principal de los nombres de dominio en Internet y del sistema de nombres de dominio (DNS), es traducir las direcciones IP de cada nodo activo en la red, a términos memorizables y fáciles de encontrar. Esta abstracción hace posible que cualquier servicio (de red) pueda moverse de un lugar geográfico a otro en la Internet, aun cuando el cambio implique que tendrá una dirección IP diferente.

**Registro MX:** Un registro MX (del inglés Mail eXchange record, en español “registro de intercambio de correo”) es un tipo de registro, un recurso DNS que especifica cómo debe ser encaminado un correo electrónico en internet. Los registros MX apuntan a los servidores a los cuales envían un correo electrónico, y a cuál de ellos debería ser enviado en primer lugar, por prioridad.

  ## Cómo los ISP hacen Quality of Service o QoS

**Cuando queremos conectarnos a puntos muy lejanos** por ejemplo el otro lado del mundo **para nuestro proveedor de internet es muy costoso** por lo tanto prioriza las conexiones usando un QoS (Quality of Service)

Cuando la conexión esta cerca nuestro proveedor de internet hace una **red MAN (Metropolitan Area Network)** y el costo de eso es casi nulo.

Hay un forma de burlar el QoS y simular una la conexión más cercana y esto es a través del **CDN (Content Delivery Network)** que funcionan solamente para mostrar contenido estático como imagenes, videos etc.

![](https://i.ibb.co/KNZHZrn/internet.png "Internet")

![](https://i.ibb.co/KGptWn7/mapa-viaje.png "Mapa de viaje")

  - Los proveedores de internet les pagan a los IXP para poder conectarse. Las conexiones son muy costosas.
Conexiones con redes locales.
  - Lo que hacen los ISP es QoS o Internet Shaping /Throttling. Regulan la velocidad según el servicio al quieres acceder.
  + Para hacer que la conexión sea más corta sirven los CDN **(content delivery network)**, cuando los datos no tienen que ser procesados **(archivos estáticos)** los replican por todo el planeta.

  ## Cómo funciona la velocidad en internet

La mayoría de los **ISPs (Internet Service Providers)** nos venden ancho de banda en Mb y debemos tener claro qué significa, ya que existe una importante diferencia entre Megabits y MegaBytes.

Otro aspecto importante en el funcionamiento del internet es la velocidad. A menudo confundimos la velocidad con el ancho de banda por eso debemos tener en claro que la velocidad del internet se mide obteniendo el tiempo que le toma a la información viajar a través de un punto a otro en milisegundos, a esto se le conoce como ping o latencia.

La velocidad de nuestro internet se mide en **la cantidad de bits no bytes que transmite por segundo**

La forma de medir **la velocidad de un ping** **es divididiendo la distancia entre un punto de conexión y otro entre la velocidad de la luz 300 km/ms**

**Distancia entre Mountain View y Madrid 9344 km**
(9344 km)/(300 km/ms) = 31.14 ms

![](https://i.ibb.co/FWbmHsg/ban.png "Velocidad de Internet")

Los proveedores de internet venden en Bits.
**Mbps = Mega bits por segundo.**

El ping dice la cantidad de segundos que le tomó al computador establecer la conexión. Es lo que tarda **1byte** (no un byte) en encontrar el servidor.

En la calidad de conexión a internet interviene dos factores: **velocidad y ancho de banda.**

Un Mega bit en encontrar el servidor.
Es decir, sí 1 MegaByte corresponde a 1024KB al dividirlo por 8 **(porque 1byte corresponde a 8bits)** sería 128 Kilobits

  + **Ping:** Tiempo que tarda una conexión en establecerse
  + **Megabits:** Es la capacidad que se tiene para transmitir la información

El ancho de banda es lo que nos venden los proveedores, la velocidad depende del lugar en el que se haga la petición y factores externos que puedan afectarla

  ## Qué es el Modelo Cliente/Servidor

Las tecnologías utilizadas en aplicaciones web son:

**Bases de datos**, MySQL es una base de datos relacionales y MongoDB es una base de datos no relacional

**Backend**, existen muchos lenguajes que puedes usar cómo Python, Ruby, JavaScript

**Servidores**, existen tecnologías como NGINX, Apache, Node

**Frontend**, son las tecnologías que corren en el navegador, HTML, CSS y JavaScript

A un grupo de tecnologías se les conoce como Stack

Recuerda:

  - Si tuvieras un código en el Frontend que se conectara a una base de datos, esta seria visible para todos.

**El proceso de un modelo Cliente/Servidor es así:**

  - **Cliente (Navegador que lee HTML, CSS y JS)**
  - Se envía una solicitud al **Backend (Python, Go, Node, Java, etc.)** a través de una URI
  - El Backend recibe la solicitud y toma decisiones en base a ella
  - El Backend consulta la **Base de Datos (MySQL, Oracle, MongoDB, etc.)** en caso de ser necesario
  - El Backend devuelve una respuesta que el navegador pueda leer,  muchas veces datos en **formato JSON**
  - El Cliente recibe los datos JSON y los parsea para mostrarlos en **HTML, información presentada muy linda.**

![](https://i.ibb.co/Mcp6ZCG/cliente.png "Modelo Cliente/Servidor")

  ## Cómo funciona realmente un sitio web

1.- Los protocolos se encargan de manejar todas las peticiones que hacen la páginas de internet desde tu navegador hacia los servidores DNS, éstos transforman la dirección de la página web en una dirección IP y tu navegador se conecta a esa IP.

2.- Una vez se tiene la dirección IP el navegador envía un HTTP request en donde envía información con las características del cliente y los requerimientos del mismo, es decir, Host requerido, página del sitio que necesita, tipo de navegador, versión del navegador, etc.

3.- El servidor envía los resultados por medio del mismo protocolo HTTP en forma de un HTTP Response en donde manda todo el HTML del sitio web así como otros datos que el navegador necesita.

4.- Por último se cargan los assets de nuestro sitio web y es aquí donde se descargan imágenes, sonidos, etc.

![](https://i.ibb.co/w7wJRHX/https.png "Funcion de un sitio web")

  1. El navegador le hace una petición al sistema operativo para ver si tiene una versión en caché.
  2. GET le pide al servidor los datos y se los envía a la IP del servidor.
  3. El servidor responde con un número, **como 200 (OK), 404 (No encontrado), 500 (error del servidor)**.

  - _En los estados de las conexiones, generalmente los mayores a 500 son errores en el servidor, los de 400 son problemas en la peticiones, los que están entre 300 indican redirecciones y los códigos 200 significan un response correcto_

  4. Assets request.

La cookies son datos guardados en variables y van en el request y en el response del servidor. Las cookies pesan, entonces es importante limitarlas para no afectar la velocidad de las peticiones.

  ## Internet es más grande de lo que crees

TCP/IP y UDP, Tipos de Wi-fi, Firewalls, Tethering, P2P, Redes Mesh, TOR, Multi-Wan, IPs fijas vs IPs dinámicas, VPNs, TTL, Paquetes, Syncs y Ack.
Todas estas son tecnologías que se utilizan día a día que debes conocer.

  - [UDP:](https://es.wikipedia.org/wiki/User_Datagram_Protocol)
  - [TCP](https://es.wikipedia.org/wiki/Protocolo_de_control_de_transmisión)
  - [Tipos de Wi-Fi](https://norfipc.com/redes/tipos-redes-estandares-wi-fi-diferencias.php)
  - [Firewalls](https://es.wikipedia.org/wiki/Cortafuegos_informática)
  - [Tethering](https://es.wikipedia.org/wiki/Tethering)
  - [P2P](https://www.aboutespanol.com/que-son-los-programas-p2p-y-como-funcionan-157981)
  - [Redes Mesh](https://www.maswifi.com/blog/2012/05/redes-mesh-que-son-y-como-funcionan/)
  - [TOR](https://es.wikipedia.org/wiki/Tor_red_de_anonimato)
  - [Multi-Wan](https://sites.google.com/a/terminuspro.com/internet/manuales/multiwan)
  - [IPs fijas vs IPs dinamicas](https://www.aboutespanol.com/diferencias-entre-ip-fija-y-dinamica-y-cual-es-mejor-3507893)
  - [VPNs](https://es.wikipedia.org/wiki/Red_privada_virtual)
  - [TTL](https://www.one.com/es/support/faq/que-es-ttl)
  - [Paquetes](https://paquetesinformaticoscuc1330241.wordpress.com/2016/10/27/que-son-los-paquetes-informaticos-para-que-sirven-cuales-son-sus-caracteristicas/)
  - [SYN](https://es.wikipedia.org/wiki/SYN)
  - [ACK](https://es.wikipedia.org/wiki/ACK)

# 3. Sistemas operativos

  ## Diferencias entre Windows, Linux, Mac, iOS y Android

  - **Windows** es el sistema operativo de propósito general más usado a nivel mundial, es un sistema operativo cerrado y se encuentra en la gran mayoría de computadoras para consumidores además utiliza un núcleo propietario perteneciente a Microsoft.

  - **Linux** es el sistema operativo más utilizado en servidores, es libre y su creador Linus Torvalds aún sigue desarrollando su núcleo destacado por su alto rendimiento y alta seguridad, tienen una licencia del tipo GNU-GPL que no solo permite redistribuir si no también garantiza que las personas que redistribuyen el código deban aportar a la licencia entre otras cosas.

  - **FreeBSD** es el sistema operativo en el que está basado Mac OS y muchos sistemas embebidos así como firewalls como pfsense y más, tiene una licencia del tipo BSD…

  ![](https://i.ibb.co/HKW3yGt/os.png "Sistemas operativos")

  ## Permisos, niveles de procesos y privilegios de ejecución

Permisos, niveles de procesos y privilegios de ejecución
En la administración de archivos la capacidad de utilizar permisos te permite definir entre las siguientes características, los permisos existen en todos los sistemas operativos de diversas formas y se crean con las siguientes opciones:

  - **Read ®:** permisos de lectura.
  - **Write (w):** permisos de escritura.
  - **Execute (x):** permisos de ejecución.

  ![](https://i.ibb.co/gg8T0LT/permiso.webp "Permiso segun su parametros")

  ![](https://i.ibb.co/VvP3vmV/permissions.png)

  - [Domina la Administracion de Usuario](https://platzi.com/blog/administracion-usuarios-servidores-linux/)

  ## Fundamentos de sistemas operativos móviles

Los sistemas operativos móviles difieren a los sistemas operativos normales en seguridad, el acceso y manejo de hardware especial para telecomunicaciones, y la forma en la que se aceptan y distribuyen sus aplicaciones.

![](https://i.ibb.co/GdLzdJP/mobil.png)

  ## Sistemas operativos embebidos e Internet of Things

Los sistemas embebidos son dispositivos que se encuentran en una gran variedad de lugares, estos son los sistemas de procesamiento que se utilizan en dispositivos diferentes a nuestros computadores, por ejemplo el microcontrolador que tiene programadas las secuencias de tu lavadora, el sistema embebido que tiene tu vehículo y que se encarga de coordinar tareas de seguridad básicas, entre otras cosas, el microcontrolador que tiene programadas las funciones de tu horno de microondas, el sistema de control de una estufa de inducción, la computadora embebida en un cajero automático, el sistema de navegación, estabilización y seguridad de un avión y muchos dispositivos más.

Los arduinos son una herramienta que permite crear prototipos de este tipo de sistemas, desde automatizar un horno antiguo hasta controlar una cámara por IoT, por esto son tan populares.

El Raspberry Pi es un dispositivo que contiene los mismos componentes que tiene un computador y cuesta sólo 35 USD, por esto y por sus entradas y salidas de propósito general (GPIO) es un sistema que vive y controla muchos proyectos desde sistemas retro de videojuegos hasta mini-clusters de cómputo, servidores multimedia DIY y más.

![](https://i.ibb.co/hZ4Kwjz/iot.png)

# 4. Archivos y estructuras de datos

  ## Cómo funciona .zip: Árboles binarios

¿Cómo funciona la compresión de un archivo sin perder ningún valor de ese archivo?

Los árboles binarios nos permiten comprimir sin perder información. En este caso, vamos a comprimir “amo leer panama papers”.

1. Debemos ver cuantas veces se repite cada letra.

```bash
a = 5
m = 2
r = 2
s = 1
o = 1
  = 3
p = 3
l = 1
e = e
n = 1
```

2. La letra con más frecuencia va a estar en el primer punto de la rama. Cuando se encuentra es 1, y cuando no se encuentra es cero

3. Con esto debemos volver a construir nuestro mensaje siguiendo el árbol, esto quedaría
`1 00001 0000001 01 00000001 001 001 000001 01 0001 1 0000000001 1 00001 1 01 0001 1 0001 001 000001 000000001`

Aunque en este ejemplo no se reduce drásticamente el tamaño. Imagina párrafos más grandes u otro tipo de archivos.

![](https://i.ibb.co/HxydTBp/zip.png "Árboles binarios")

  ## Metadatos, cabeceras y extensiones de archivos

Tu aprendiste que `.jpg` significa la extensión de archivos de imagen, históricamente windows tenia muy pocos bytes para la extensión, por esto la extensión normalmente era de 3 dígitos.

Existen muchas otras extensiones como `.html` para páginas `web`, `.mpg4` para vídeo.

Cuando abres los archivos vas a ver su codificación binaria o dependiendo del editor puedes verlo en hexadecimal.

Un sistema operativo lee los primeros bytes del archivo para entender a que archivo corresponde, esta información se llama cabecera.

Cada sistema operativo tiene una base de datos de que programa abre que tipo de archivo.

Cuando estas transmitiendo un archivo por Internet se especifica el tipo de archivo con mime types, el cual se transmite en la cabecera de un paquete `http`.

![](https://i.ibb.co/2qYVWQ5/file.png)

**Los metadatos** son datos altamente estructurados que describen información, describen el contenido, la calidad, la condición y otras características de los datos. Es “Información sobre información” o “datos sobre los datos”.

**Cabecera** es la información suplementaria situada al principio de un bloque de información que va a ser almacenada o transmitida y que contiene información necesaria para el correcto tratamiento del bloque de información.

**La extensión de archivo** conocida también como extensión de fichero permite identificar el tipo de aplicación con la que está asociado un documento. Un archivo está compuesto del un nombre seguido por el carácter de puntuación (.) mas la extensión del archivo.

Algunos sistemas de archivos limitan la longitud de la extensión, como es el caso de los **archivos FAT**, mientras que los archivos tipo NTFS permiten más de tres caracteres en la extensión.

**La extensión de archivo** determina qué programa se utiliza para abrir dicho archivo, así como qué icono se debe mostrar para representarlo. Por ejemplo, la extensión .txt indica que el archivo es un documento de texto, la extensión .doc indica que se trata de un documento de Microsoft Word, mientras que .psd se refiere a documentos Photoshop.

Las extensiones de archivo más comunes son: `.jpg, .gif, .mp3, .zip, .html y otros`.

  - La mayoría de extensiones son de tres caracteres porque en los inicios de la computación, solo era posible asignar **24 bits para la extensión (tipo) de archivo, y 64 bits** para el nombre. Sin embargo todo avanzo y ya no estamos limitados a usar solo tres caracteres para denotar el tipo de archivo.

  - Los Sistemas Operativos, tienen en una base de datos guardada la correspondencia de cada extensión de archivo. Es decir, en la base de datos dirá algo como: **jpg = imagen, mp3 = musica, html = pagina web y así…** En todo caso para llegar a esta base de datos y encontrar a que corresponde, es necesario primero identficar que tipo de archivo es. Para ello el **SO** lee los primeros bits de cada archivo hasta que encuentra cierto patron, esos bits de identificación se llaman la cabecera. Una vez identificado el patrón, el SO ya conoce que tipo de **archivo** es, con que programa se debe abrir y cómo se debe mostrar gracias a la base de datos.

  - Todo esto en la web funciona a través de un estandar denominado MIME TYPES **(Extensión para emails multiproposito)**. Eventualmente funcionaba solo con emails, pero hoy en día esta en la mayoria de protocolos de comunicación. La forma en que funciona es sencilla, en la cabecera del protocolo de comunicación **(independiente de si es http, ftp…)** se envían metadatos con la información del archivo. De tal forma que si es una pagina web, envía **text/html**, si es un video mp4 envía **video/mp4** y asi se logra la identificación de los archivos

  ## Cómo funciona el formato JPG

Asumamos que tenemos una foto de 600*800, si esto estuviera en un formato sin compresión, pesaría 840KB **(solo representando un color por pixel)**.

Para tener una calidad de 32 bit la imagen debe pesar casi 1.9MB, así que podemos comprimir las imágenes y usar formatos como jpeg.

jpg lo que hace es aproximar áreas de color, si un color esta en áreas continuas, solo se declara la zona y el color de esa zona, de esta forma se pueden tener imágenes que pesan mucho menos.

El formato PNG funciona diferente a JPG. Y hay mejoras sobre el algoritmo JPG como JPEG2000.

**Hay todo un mundo de formatos y estándares de compresión como:**

  - DivX en video
  - gzip en el prótocolo HTTP
  - AAC vs. MP3 en sonido
  - MKV como un metaformato contenedor de otros formatos
  - PSD como un formato cerrado gráfico

  ![](https://i.ibb.co/w6M5LP4/jpg.png)

  ## Videos, contenedores, codecs y protocolos

En un vídeo hay muchos factores para comprimir, un vídeo es si es una serie de fotos vistas muy rápido. por ejemplo si un vídeo tiene 100 frames a 24 frames/segundo y si cada frame pesara 1.9MB el vídeo pesaría más de 100MB por 4 segundos de vídeo.

**Por esto en los vídeos se utilizan varias formas de compresión**

  - **Contenedores:** es el formato es que se guarda el vídeo como .avi, .mp4, .flv, .mpg, .webm
  - **Codecs:** es un algoritmo que comprime un vídeo y lo descomprime como divx, h.264, ogg, vp9
  - **Protocolos:** es la forma de transmitir los vídeos como RTMP
  - **Keyframes:** cada cierta cantidad de frame existe un frame que vuelve a definir todo el área

  Estrictamente cuando hablamos de **audio** nos **referimos a señales eléctricas**, cuando hablamos de sonido nos referimos a ondas mecánicas.

Por ejemplo cuando hacemos un aplauso en el mundo “real”, se generan ondas mecánicas (sonido) que llegarían a un micrófono, dicho micrófono se conoce como transductor ya que convierte de un tipo de energía a otra. En éste caso se convierte de energía mecánica a eléctrica y solo después del micrófono es que se le puede llamar audio.

![](https://i.ibb.co/DtJ2h4D/video.png)

# 5. Contenido Bonus

  ## Qué es una red neuronal

¿Sabes qué es una red neuronal? son la base de la inteligencia artificial. Y aunque pueda parecer un concepto un poco complejo de entender, en realidad se trata de imitar por medio de software en un computador la forma en que funciona nuestro propio cerebro.

![](https://i.ibb.co/QbDjJxG/flag.png "Flag of Europe")

![](https://i.ibb.co/VvP3vmV/permissions.png "Neural Network")
  
  ## ¿Qué es SQL y NoSQL?

No todo en la vida es SQL. Hay bases de datos relacionales pero no siempre se necesita de tanto trabajo de fondo para ciertas tareas, así que hay bases de datos que no son relacionales… ¡y funcionan muy bien!

**Principales diferencias entre BB. DD. SQL y NoSQL**

![](https://i.ibb.co/sP2rvmg/sql.webp "Diferencia entre bases de datos SQL y NoSQL")

![](https://i.ibb.co/3kJT211/SQL.webp)
  
  ## Qué es un algoritmo

En matemáticas, lógica, ciencias de la computación y disciplinas relacionadas, un algoritmo ​ es un conjunto de instrucciones o reglas definidas y no-ambiguas, ordenadas y finitas que permite, típicamente, solucionar un problema, realizar un cómputo, procesar datos y llevar a cabo otras tareas o actividades.

![](https://i.ibb.co/TkjDF3k/1200px-Lamp-Flowchart-es-svg.png "Algoritmo")
  
  ## El poder de un Raspberry Pi

El Raspberry Pi, la revolucionaria computadora de 35 dólares que se lanzó hace 5 años, ha roto las barreras que le impedían a muchos desarrolladores, hobbistas y estudiantes realizar proyectos que involucran el uso de hardware. Pero ¿sabes qué es? ¿Por qué se volvió tan popular?

En este Platzi Live Ricardo Celis Santiago (@celismx), miembro del team Platzi, te explica para qué nace, cómo está hecho y además te muestra un par de proyectos increíbles hechos por usuarios de Raspberry Pi y que tú mismo podrías hacer. Cuéntanos en los comentarios si te interesa hacer algún proyecto y, de ser así, ¿cuál sería?

- [Newark](https://www.newark.com/buy-raspberry-pi?searchRef=SearchLookAhead)
  
![](https://i.ibb.co/sbv2hBZ/hipertextual-instalar-software-tu-raspberry-mas-facil-todavia-con-raspberry-pi-imager-2020444950.jpg "Raspberry Pi")