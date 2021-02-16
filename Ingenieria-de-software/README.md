# Fundamentos de Ingeniería de Software

#### Freddy Vega

1. Computación, procesadores y memoria
Cómo funcionan las computadoras y los teléfonos móviles
Qué son Bits y Bytes
Cómo funcionan los circuitos electrónicos
Procesadores y arquitecturas de CPU
Qué es un system on a chip
Qué es la memoria RAM y cómo funcionan los discos duros
GPUs, tarjetas de video y sonido
Periféricos y sistemas de entrada de información
Arquitectura de la computación
2. Cómo funciona Internet
Introducción a las redes, protocolos e Internet
Puertos y protocolos de red
Qué es una dirección IP y el protocolo de Internet
Cables submarinos, antenas y satelites en Internet
Qué es un dominio, DNS o Domain Name System
Cómo los ISP hacen Quality of Service o QoS
Cómo funciona la velocidad en internet
Qué es el Modelo Cliente/Servidor
Cómo funciona realmente un sitio web
Internet es más grande de lo que crees
3. Sistemas operativos
Diferencias entre Windows, Linux, Mac, iOS y Android
Permisos, niveles de procesos y privilegios de ejecución
Fundamentos de sistemas operativos móviles
Sistemas operativos embebidos e Internet of Things
4. Archivos y estructuras de datos
Cómo funciona .zip: Árboles binarios
Metadatos, cabeceras y extensiones de archivos
Cómo funciona el formato JPG
Videos, contenedores, codecs y protocolos
5. Contenido Bonus
Qué es una red neuronal
¿Qué es SQL y NoSQL?
Qué es un algoritmo
El poder de un Raspberry Pi


# 1. Computación, procesadores y memoria

  ## Cómo funcionan las computadoras y los teléfonos móviles

  Aprende cómo es el proceso de enviar un email, todo su recorrido desde tu computadora, servidores y notificaciones hasta que llega al destinatario.

![](img/email.webp "Enviar un email")
  
  ## Qué son Bits y Bytes

  Conoce la diferencia entre los Bits y Bytes, su historia, construcción y adaptación a la computación y su uso universal.

  ![](img/bits-bytes.webp "Diferencia entre los Bits y Bytes")

**Nota**

4 bytes = 32 bits por ser una dirección **ipv4**

  ## Cómo funcionan los circuitos electrónicos

La electricidad es un flujo constante de electrones que se mide en voltaje y amperaje.

Empezando a ver circuitos pensar o asimilar que la corriente es agua, el voltaje es la presion a la que se transmite el agua y la resistencia es el tamaño del tuvo entre mas resistencia mas pequeño el tuvo … en consecuencia menos corriente deja pasar.

![](img/elec.webp "Circuitos electrónicos")

**Ley de Ohm:** `V=R*I`

**V (voltaje)** = Es la diferencia de potencial en un circuito, se puede pensar como la fuerza que hace que los electrones se muevan a través del circuito. En analogía con una tubería, representaría moto-bomba de agua que impulsa el agua. Su medida internacinal son los voltios (V).

**R (resistencia)** = La resistencia en un circuito es un dispositivo, que mediante el material del cual esta hecho, se opone al flujo de los electrones, y perdiendo dicha energía en forma de calor. Siguiendo con la analogía, la resistencia es equivalente a las piedras de un río, entre más piedras y más grandes, la corriente del río disminuye. En el sistema internacional sus unidades son Ohmios (Ω).

**R (corriente)** = La corriente eléctrica no es más que el flujo de electrones a través de un material conductor, entre dos puntos con una diferencia de potencial. En nuestra analogía, simplemente es el agua. Sus unidades internacionales son los Amperios `(A)`.

Por lo tanto la ley expresa que la diferencia de potencial en un circuito, es directamente proporcional a la corriente `( I )` y directamente proporcional a la resistencia `( R )`.

![](img/5e1v.jpg "Circuitos electrónicos")

  ## Procesadores y arquitecturas de CPU

Vivimos en un mundo donde todo es un computador, como celulares, tablets, televisores, etc.

Existe una arquitectura para computadores de escritorio y laptops, estos internamente tienen:

  - **CPUs:** su velocidad de mide en GHz y tienen Cores que son el número de instrucciones en paralelo que pueden hacer.

En este momento se hacen las CPUs en silicio y estas se calientan de acuerdo a la cantidad de procesos.

  - **BIOS,** es un pequeño sistema que arranca el computador y comprueba la conexión del hardware.

  - **Disco duro,** es donde se almacena el sistema operativo y los archivos que guardamos.

  - **Memoria RAM,** los datos del sistema operativo se envían a la memoria que sirve como intermediario con la CPU, debido a que es una memoria de acceso rápido. Esta memoria solo funciona cuando hay electricidad.

  - **GPU,** puede procesar en paralelo los pixeles de la pantalla y enviarlo en tiempo real para representarlos.

  ![](img/arq.png)

  ## Qué es un system on a chip

La arquitectura rápida y compleja en un sistema tradicional podemos hoy tenerlo en un disposivo pequeño gracias a un system on a chip

Un system on a chip es una CPU que también tiene una memoria RAM y un disco duro en un chip.

También incluye chips especializados que permiten realizar algunos procesos necesarios por un dispositivo móvil.

**System on a Chip** es todo el sistema de funcionamiento de un CPU normal de computadora, integrado en un Chip

![](img/arq.png)

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

![](img/archivo.png "Memoria RAM")

![](img/123.gif "ARchivo")

  ## GPUs, tarjetas de video y sonido

Sabemos cómo los archivos se cargan en memoria pero ¿Cómo veo en pantalla que el archivo se ha abierto?

Esto se logra gracias a la Graphic Processing Unit o GPU.

La CPU puede ejecutar cualquier proceso, incluido el dibujado en pantalla de ciertos datos. Pero no es ella quien se encarga, sino la GPU: **tarjetas especialmente fabricadas para realizar estas tareas**.

La comunicación entre la CPU y la GPU se realiza actualmente a través de un socket llamado PCI-Express.

Estas placas de vídeo tienen sus propias unidades o núcleos de procesamiento y su propia memoria RAM.

Lo que sucede es que la GPU divide la pantalla en una matriz y cada núcleo se encarga de dibujar una parte de esa matriz, para lograr una mejor performance.

Esto es mucho más rápido de lo que podría lograr la CPU sola ya que debería dibujar pixel por pixel ella sola.

- [GPU vs CPU](https://www.youtube.com/watch?v=-P28LKWTzrI)

![](img/archivo.png "Memoria RAM")

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

![](img/operating-rings.png "Operating rings")

  ## Arquitectura de la computación
En el inicio de la computación no existía un procesador y una memoria aparte. Las computadoras estaban más cerca de ser una máquina de escribir que una de las computadoras que conocemos ahora. Eran máquinas grandes y pesadas, que requerían ser trasladadas en aviones o camiones. El código binario se escribía en tarjetas perforadas: cuyas perforaciones (o falta de ellas) representaban los **1 y 0.**

Hoy en día tenemos computadoras en nuestros propios bolsillos y las cargamos a todos lados, tenemos laptops cuyos monitores se pueden desacoplar y funcionan como tablets, tenemos microchips que sirven como una computadora común y corriente.

Ese salto evolutivo en la computación ocurre gracias a la estandarización de la arquitectura de las computadoras: decidimos que un Byte son 8 bits, que la CPU es la encargada de procesar, que la GPU representa datos visualmente, que 1024 Bytes son un KiloByte, y que 1024 KB son 1 MB, que exista un puerto común como el USB que nos permite conectar otros dispositivos externos.

Estandarizamos la transferencia de datos y los protocolos de comunicación. Hay un formato definido para cada tipo de imágenes, hay una forma de escribir HTML para que el navegador lo interprete y pueda mostrarnos elementos visuales en la pantalla. Definimos una forma para comprimir un archivo.

**Esta evolución de almacenamiento más o menos se ha dado así:**

Tarjetas perforadas -> Cintas Magnéticas -> Disquetes de 5’25" -> Disquetes de 3’5" -> CD -> Discos Flash (usb) -> Discos duros portátiles -> Almacenamiento Cloud

# 2. Cómo funciona Internet
Introducción a las redes, protocolos e Internet
Puertos y protocolos de red
Qué es una dirección IP y el protocolo de Internet
Cables submarinos, antenas y satelites en Internet
Qué es un dominio, DNS o Domain Name System
Cómo los ISP hacen Quality of Service o QoS
Cómo funciona la velocidad en internet
Qué es el Modelo Cliente/Servidor
Cómo funciona realmente un sitio web
Internet es más grande de lo que crees
3. Sistemas operativos
Diferencias entre Windows, Linux, Mac, iOS y Android
Permisos, niveles de procesos y privilegios de ejecución
Fundamentos de sistemas operativos móviles
Sistemas operativos embebidos e Internet of Things
4. Archivos y estructuras de datos
Cómo funciona .zip: Árboles binarios
Metadatos, cabeceras y extensiones de archivos
Cómo funciona el formato JPG
Videos, contenedores, codecs y protocolos
5. Contenido Bonus
Qué es una red neuronal
¿Qué es SQL y NoSQL?
Qué es un algoritmo
El poder de un Raspberry Pi
