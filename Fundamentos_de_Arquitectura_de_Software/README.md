# 🧑‍💻 Fundamentos de Arquitectura de Software 💻
#### Guido Contreras Woda

# Tabla de contenido
- [1. El proceso de desarrollo de software](#1.-El-proceso-de-desarrollo-de-software)
  - [Introducción al curso de Fundamentos de Arquitectura de Software](#Introducción-al-curso-de-Fundamentos-de-Arquitectura-de-Software)
  - [Etapas del proceso de desarrollo de software](#Etapas-del-proceso-de-desarrollo-de-software)
  - [Dificultades en el desarrollo de software](#Dificultades-en-el-desarrollo-de-software)
  - [Roles](#Roles)
- [2. Introducción a la arquitectura de software](#2.-Introducción-a-la-arquitectura-de-software)
  - [¿Qué es arquitectura de software?](#¿Qué-es-arquitectura-de-software?)
  - [La importancia de la comunicación - Ley de Conway](#La-importancia-de-la-comunicación---Ley-de-Conway)
  - [Objetivos del arquitecto](#Objetivos-del-arquitecto)
  - [Arquitectura y metodologías](#Arquitectura-y-metodologías)
- [3. Análisis de requerimientos](#3.-Análisis-de-requerimientos)
  - [Entender el problema](#Entender-el-problema)
  - [Requerimientos](#Requerimientos)
  - [Riesgos](#Riesgos)
  - [Restricciones](#Restricciones)
  - [Reto: Clasificación de requerimientos y análisis de riesgos](#Reto-Clasificación-de-requerimientos-y-análisis-de-riesgos)
- [4. Estilos de arquitectura](#4.-Estilos-de-arquitectura)
  - [Arquitectura, panorama y definición](#Arquitectura-panorama-y-definición)
  - [Estilos: Llamado y retorno](#Estilos-Llamado-y-retorno)
  - [Estilos: Flujo de datos](#stilos-Flujo-de-datos)
  - [Estilos: Centradas en datos](#Estilos-Centradas-en-datos)
  - [Estilos: Componentes independientes](#Estilos-Componentes-independientes)
  - [Comparando estilos: ¿Cómo elijo?](#Comparando-estilos-¿Cómo-elijo?)
  - [Reto: Un producto, muchos estilos](#Reto-Un-producto-muchos-estilos)
- [5. Desarrollo del proyecto](#5.-Desarrollo-del-proyecto)
[Desarrollo del proyecto: PlatziServicios Fase Startup](#Desarrollo-del-proyecto-PlatziServicios-Fase-Startup)
[Desarrollo del proyecto: PlatziServicios Fase Producto en crecimiento](#Desarrollo-del-proyecto-PlatziServicios-Fase-Producto-en-crecimiento)
[Desarrollo del proyecto: PlatziServicios Fase Escala global](#Desarrollo-del-proyecto-PlatziServicios-Fase-Escala-global)
[Conclusiones del curso](#Conclusiones-del-curso)

# 1. El proceso de desarrollo de software

  ## Introducción al curso de Fundamentos de Arquitectura de Software

  1. En la arquitectura del software se habla de:

  * Estructuras.
  * Modelos con diagramas.
  * Se suelen hablar de la comunicación entre diferentes sistemas o incluso entre diferentes módulos del sistema.

  2. En este curso va atravesar todo el camino para atender que es el proceso de desarrollo y como la arquitectura está involucrada en cada uno de los pasos del proceso de desarrollo del software.

  3. Entenderemos cuál es el rol del arquitecto y como el arquitecto puede ayudar al éxito o fracaso de un sistema.

  4. Este curso va hacer evidente decisiones que a veces son implícitas y nos va ayudar a ser consiente de cuando estamos tomando una decisión arquitectónica en un sistema y cómo hacer para tomar la mejor decisión posible en ese momento.

- [Fundamentos-de-software.pdf](https://drive.google.com/file/d/1NZ2T0bkUyxXDaWGw1Q3-Cu1YfkxDDHlu/view?usp=sharing)

  ## Etapas del proceso de desarrollo de software

El proceso de desarrollo tradicional tiene etapas muy marcadas, que tienen entradas, procesos y salidas que funcionan como entradas de la siguiente etapa.

**Análisis de requerimientos:** Todo nace de un disparador que nos crea la necesidad de crear un artefacto o un sistema. Necesitamos entender cuál es el problema que queremos resolver. Hay requerimientos de negocio, requerimientos funcionales, requerimientos no funcionales.

**Diseño de la solución:** Análisis profundo de los problemas para trabajar en conjunto y plantear posibles soluciones. El resultado de esto debe ser el detalle de la solución, a través de requerimientos, modelado, etc.

**Desarrollo y evolución:** Implementación de la solución, para garantizar que lo que se esta construyendo es lo que se espera. Al finalizar esta etapa tendremos un artefacto de software.

**Despliegue:** Aquí vamos a necesitar de infraestructura y de roles de operación para poder poner el artefacto a disponibilidad.

**Mantenimiento y evolución:** Desarrollo + despliegue + mantenimiento, en esta etapa estamos atentos a posible mejoras que se hacen al sistema. En esta etapa el software se mantiene hasta que el software ya deja de ser necesario.

- [FdAS - 1 - El proceso de desarrollo de software.pptx](https://drive.google.com/file/d/1ZwqqjpeXextjRYSu8UB4zijk_CKaZL_8/view?usp=sharing)
- [Infografia.Arquitectura-Software.pdf](https://drive.google.com/file/d/17Sz1QRzOZVtY-owSi1Mb0Fzi5xev_YC_/view?usp=sharing)

  ## Dificultades en el desarrollo de software

En la etapa de diseño y desarrollo estamos concentrados en encontrar cuáles son los problemas que queremos resolver. Estos problemas los podemos dividir en dos grandes tipos de problemas.

Esenciales: Los podemos dividir en 4.

  *   La complejidad, cuándo lo que tenemos que resolver es complejo en si mismo, por ejemplo calcular la mejor ruta entre ciudades.
  *   La conformidad.
  *   Tolerancia al cambio.
  *   Invisibilidad.

**Accidentales:** Está relacionado con la plataforma que vamos a implementar, tecnología, lenguajes, frameworks, integraciones, etc.

> “Concidero a la especificación, diseño y comprobación del **concepto** la parte difícil de hacer software. (…) Si esto es cierto, hacer software siempre será difícil. No existe la bala de plata.” - _Del libro **No Silver Bullet** (Frederick P. Brooks Jr., 1986)_

- [FdAS - 1 - El proceso de desarrollo de software](https://drive.google.com/file/d/1cPvko91V_cmfdr_HBmIMOPYvgo_L6gw8/view?usp=sharing)

## Roles

Es importante que diferenciemos el ROL del puesto de trabajo, hay roles que pueden ser desarrollados por la misma persona.

**Experto del dominio:** En una metodología tradicional, es la persona a la que acudimos para entender las necesidades del negocio. En metodologías Ágiles --> stakeholders.

**Analista:** funcional/de negocio, la persona responsable de definir los requerimientos que van a llevar al software a u buen puerto. En el caso de Ágiles el dueño del producto es quien arma las historias y que nos acompaña en el proceso de construcción del software.

**Administrador de sistemas / DevOps:** Es el rol de operaciones y desarrollo, son las personas responsables de la infraestructura que alojara nuestra aplicación.

**Equipo de desarrollo:** QA / Testing se encargan de la evaluación de nuestro software, comprobar que lo que se está haciendo es lo que se espera que se haga. Desarrolladores involucrados en la construcción del software. Arquitecto, diseña la solución y análisis de los requerimientos, es un papel más estratégico. La arquitectura emerja del trabajo de un equipo bien gestionado.

**Gestor del proyecto / facilitador:** Llevan al equipo a través del proceso iterativo e incremental, entender lo que pasa con el equipo y motivar el avance en el desarrollo del producto.

**Principios del Manifiesto Ágil**

  Nuestra mayor prioridad es satisfacer al cliente
  mediante la entrega temprana y continua de software
  con valor.

  Aceptamos que los requisitos cambien, incluso en etapas
  tardías del desarrollo. Los procesos Ágiles aprovechan
  el cambio para proporcionar ventaja competitiva al
  cliente.

  Entregamos software funcional frecuentemente, entre dos
  semanas y dos meses, con preferencia al periodo de
  tiempo más corto posible.

  Los responsables de negocio y los desarrolladores
  trabajamos juntos de forma cotidiana durante todo
  el proyecto.

  Los proyectos se desarrollan en torno a individuos
  motivados. Hay que darles el entorno y el apoyo que
  necesitan, y confiarles la ejecución del trabajo.

  El método más eficiente y efectivo de comunicar
  información al equipo de desarrollo y entre sus
  miembros es la conversación cara a cara.

  El software funcionando es la medida principal de
  progreso.

  Los procesos Ágiles promueven el desarrollo
  sostenible. Los promotores, desarrolladores y usuarios
  debemos ser capaces de mantener un ritmo constante
  de forma indefinida.

  La atención continua a la excelencia técnica y al
  buen diseño mejora la Agilidad.

  La simplicidad, o el arte de maximizar la cantidad de
  trabajo no realizado, es esencial.

  Las mejores arquitecturas, requisitos y diseños
  emergen de equipos auto-organizados.

  A intervalos regulares el equipo reflexiona sobre
  cómo ser más efectivo para a continuación ajustar y
  perfeccionar su comportamiento en consecuencia.


# 2. Introducción a la arquitectura de software

  ## ¿Qué es arquitectura de software?

  Arquitectura de Software es:

> “La estructura del sistema, compuesta por elementos de software, sus propiedades visibles y sus relaciones” - Software Architecture in Practice

> “El conjunto de decisiones principales de diseño tomadas para el sistema” - Software Architecture: Foundations, Theory and Practice

- [FdAS - 2 - Introducción a la Arquitectura de Software](https://drive.google.com/file/d/1GfaKsrV5ymyvjn6RCl7mZd22C4nlLV15/view?usp=sharing)

  ## La importancia de la comunicación - Ley de Conway

  > "Cualquier organización que diseñe un sistema producirá un diseño que copia la estructura de comunicación de dicha organización.”

Conway no dijo esta afirmación como una broma, sino con una justificación real por detrás. Este hecho es causado porque dos componentes software (p.e A y B), no pueden conectarse correctamente a menos que quien diseña y quien implementa el módulo A se comunique con quien diseñe e implemente el módulo B. Así, este problema en la forma de comunicación de la empresa se refleja en el software, ya que el desarrollo es una actividad intelectual que depende mucho de las propias personas que lo desarrollan.

> Ley de Conway - “Cualquier pieza de software refleja la estructura organizacional que la produjo.”

![](https://i.ibb.co/7xhgytT/arq.png)

  ## Objetivos del arquitecto

El arquitecto conecta los stakeholder con el sistema a construir. Cada uno de los roles que tienen los SH afectan de diferente forma el sistema.

Cada uno de los stakeholder tiene que ser conectado por el Arquitecto con sus requerimientos.
`Stakeholder -> Arquitecto -> Requerimientos = Implementaciónes en el Sistema`.

Los Requerimientos de cada stakeholder afectan de forma única el sistema.

  *  **Cliente:** Entrega a tiempo y dentro del presupuesto.
  *  **Manager:** Permite equipos independientes y comunicación clara.
  *  **Dev:** Que sea fácil de implementar y de mantener.
  *  **Usuario:** Es confiable y estará disponible cuando lo necesite.
  *  **QA:** Es fácil de comprobar.

La unión de todos estos requerimientos (funcionales o no funcionales) van a llevar al arquitecto a tomar decisiones que impacten sobre el sistema.



  ## Arquitectura y metodologías

  > En el contexto de método tradicional … Las decisiones de arquitectura es en la **ETAPA DEL DISEÑO**

En el contexto de Método ágil … Las decisiones de arquitectura es **EN CADA ITERACIÓN**

Una metodología de desarrollo de software es un conjunto de procedimientos, técnicas, herramientas y un soporte documental que ayuda a los desarrolladores a realizar nuevo software.

  + **TRADICIONAL** el objetivo es encontrar los problemas y diseñar una solución que ataque a estos problemas.(se da en una etapa de diseño)
en el modelo tradicional falta el feedback (no tenemos feedback sobre las decisiones si no hasta que se implementa y se despliega la solución)

  + **ÁGILES** el objetivo que la solución va ser evolutiva y se da paso a paso (se trata de momentos donde se puede evaluar nuestras decisiones)

  + **TRACER BULLETS**
esqueletos de solución, se plantea una prueba diciendo que la estructura que planteamos va a hacer algo, se implementa se mide y se evoluciona, sirve para hacer arquitectura iterativa mente


En las **ágiles,** existe una herramienta de modelado que es de mucha ayuda para los clientes/dueños del producto, estos son los MOCKUPS, que netamente son borradores de las pantallas que verá en el software a desarrollar, así como simular las acciones que estas tendrían. Lo anterior con el objetivo de que el usuario tenga la visión de como sería su desarrollo y tener un feedback inmediato.


![](https://i.ibb.co/yWxVxrn/metodologias-agiles.jpg)

![](https://i.ibb.co/x7txLd3/fas-mtvsma-df062264-37c3-48e8-a870-7c2017b54230.webp)

# 3. Análisis de requerimientos

  ##  Entender el problema

 **El problema:**

**El espacio del problema**
Detalla que es lo que se va a resolver sin entrar en detalles del “cómo”.

**El espacio de la solución**
Brinda el detalle del “cómo”, reflejando los detalles del problema detectado, evitando resolver problemas que no se quiere resolver.

**Entender el problema**

La parte más importante de entender el problema es: separar la comprensión del problema de la propuesta de solución, si no se entiende la diferencia entre estos dos puntos se tiende a solucionar problemas inexistentes y a hacer sobreingeniería.

![](https://i.ibb.co/9g7bzmZ/problem.webp)

**Problema:**

Detalla ¿que es lo que se va a resolver? (y qué no se va a resolver) sin entrar en detalles del “cómo” -> (analisis del problema).

El espacio del problema nos ayuda a entender que es lo que vamos a resolver y exactamente como imaginamos como esto va agregar un valor a nuestros usuarios sin entrar en detalle de cómo lo va a resolver el sistema.


 + **Idea: ¿Qué queremos resolver?**

    + **Criterios de éxito:** ¿Cómo identificamos si estamos resolviendo el problema?

    + **Historias de usuario:** Supuestos de historias de lo que va a ganar el usuario al utilizar la solución usando las características del problema a resolver.
  
  + **Solución:**

    - Brinda el detalle del ¿“cómo” se va a resolver?, reflejando los detalles del problema detectado y evitando resolver problemas que no se quiere o necesita resolver. --> (detalles técnicos)

    - Se refleja en el espacio del problema y trata de resolverlo teniendo en cuenta todos los detalles técnicos necesarios.

**Consta de:**

  + **Diseño**: todo lo referente a la planificacion del software, desde diseño UI, UX hasta diseño de sistemas
  + **Desarrollo:** escribir el codigo, configuraciones y contrataciones de servicios
  + **Evaluación:** medir la eficiencia y eficacia del software frente al problema
  + **Criterios de aceptación:** medir el impacto del software, no importa lo bueno que sea el problema si los usuarios no lo usan o no le ven uso
  + **Despliegue (deploy):** lanzar el software en ambientes productivos (mercado) y empezar a mejorar las caracteristicas con un feedback loop (crear, medir, aprender)

Reportar un problema
Riesgos

- [fdas 3 analisis de requerimientos.pdf](https://drive.google.com/file/d/1GuJ75dSe7UtcgnAoMrsOUyoZKBM2Qohi/view?usp=sharing)
- [fdas 3 analisis de requerimientos](https://drive.google.com/file/d/1drCr5POWMb25O0YfWCCOQulOE6-BALk6/view?usp=sharing)

  ###  Requerimientos

Una vez que entendemos el espacio del problema y el espacio de la solución, vamos a entrar a analizar los requerimientos de nuestro sistema.

Requerimientos de producto: Los podemos dividir en 3.
  _Capa de requerimientos de negocio, son reglas del negocio que alimentan los requerimientos del negocio._

  _Capa de usuario, tienen que ver en cómo el usuario se desenvuelve usando el sistema, qué atributos del sistema se deben poner por encima de otros._

  _Capa Funcional, se ven alimentados por requerimientos del sistema, ¿qué cosas tienen que pasar operativamente?_

  _Esta capa se ve afectada por las restricciones que pueden afectar operativamente a lo funcional._

**Requerimientos de proyecto:** Tienen que ver más con el rol de gestor de proyectos, se usan para dar prioridad a los requerimientos del producto.

Estos dos mundos de requerimientos hablan de las prioridades del equipo de trabajo del proyecto.

**Requerimientos de producto:**

  + **Requerimientos funcionales:** Tienen que ver con las historias de usuarios, que hablan sobre específicamente lo que hace el sistema, por ejemplo que usuario ingrese al sistema.

  + **Requerimientos no funcionales:** son aquellos que agregan cualidades al sistema, por ejemplo que el ingreso de ese usuario sea de manera segura.


  ###  Riesgos

Los riesgos son importantes para priorizarlos y atacarlos en orden y asegurar que las soluciones arquitectónicas que propongamos resuelvan los problemas más importantes.

Intenta tratar los riesgos con posibles escenarios de fracaso y que pasaría en caso de que ese riesgo se haga real.

_Veamos como identificar los riesgos:_

**En la toma de requerimientos** --> dificultad / complejidad
**En los atributos de calidad** --> incertidumbre, cuanto mas incertidumbra hay, mas alto es el riesgo.
**Conocimiento del dominio** --> Riesgo prototípico, son aquellos que podemos atacar de forma estándar.

Una vez que tenemos los riesgos identificados, debemos priorizarlos, recuerda que no es necesario mitigarlos todos, debemos siempre tener en cuenta y dar prioridad a aquellos riesgos que ponen en peligro la solución que se esta construyendo.


  ## Restricciones

Las restricciones en el contexto de un proceso de desarrollo de software se refiere a las restricciones que limitan las opciones de diseño o implementaciones disponibles al desarrollar.

Los SH nos pueden poner limitaciones relacionadas con su contexto de negocio, limitaciones legales.

También hay limitaciones técnicas relacionadas con integraciones con otros sistemas.

El ciclo de vida del producto va a agregar limitaciones al producto, por ejemplo a medida que avanza el proceso de implementación el modelo de datos va a ser más difícil de modificar.

El arquitecto debe balancear entre los requerimiento y las restricciones.

Los StakeHolders, nos pueden poner limitaciones relacionadas con su contexto de negocio, ejemplo:

+ Las limitaciones legales, la implementación de un producto podría tener restricciones en algún país, y esto seria una limitante a considerar para el desarrollo del producto.
+ Limitaciones técnicas, relacionadas con integraciones con otros sistemas.
+ El ciclo de vida del producto, agregará limitaciones al producto, por ejemplo a medida que avanza el proceso de implementación el modelo de datos va a ser más difícil de modificar.

**Nota:**
> El arquitecto debe balancear entre los requerimiento y las restricciones.

  ## Reto: Clasificación de requerimientos y análisis de riesgos

  El reto que tienes es tomar un sistema conocido (del trabajo, algún proyecto propio o un sistema que hayas usado del que conozcas su arquitectura).

Describir qué problemas resuelve y cuáles son sus requerimientos no funcionales.

Si tuvieras que hacer de este sistema un “producto reutilizable” en otros escenarios:

  + ¿Cómo cambiaría su arquitectura?
  + ¿En qué otro escenario debería repensarse completamente?
  + ¿En qué otros escenarios se mantendría?

compártenos en el sistema de discusiones.

# 4. Estilos de arquitectura

  ## Arquitectura, panorama y definición

  Un estilo de arquitectura es una colección de decisiones de diseño, aplicables en un contexto determinado, que restringen las decisiones arquitectónicas específicas en ese contexto y obtienen beneficios en cada sistema resultante.

 **Arquitectura, panorama y definición**

Panorama Arquitectónico
Hay muchas librerías, muchos frameworks, mucho conocimiento arquitectónico implícito entre las comunidades.

¿Qué es un estilo de arquitectura?
Cuando hablamos de estilo de arquitectura hablamos de algo genérico.

> Un estilo de arquitectura es una colección de decisiones de diseño, aplicables a un contexto determinado, que restringen las decisiones arquitectónicas específicas en ese contexto y obtienen beneficios en cada sistema resultante. _Software Architecture: Foundations, Theory and Practice (Taylor, 2010)_

- [Estilos de arquitectura](https://drive.google.com/file/d/19wdrQKH0BvU_BD-oF4ud4KhZEeMUkPa1/view?usp=sharing)

  ##  Estilos: Llamado y retorno

Cada uno de los componentes hacen invocaciones a los componentes externos y estos retornan información.

Cada componente hace un llamado y espera una respuesta

Programa y subrutinas --> Instrucciones secuenciales que el programa ejecutaba una por una. Luego se hacían instrucciones de salto, de aquí surgieron las funciones que son bloques de código que podemos invocar en cualquier momento.

Orientado a objetos --> la abstracción es mayor en comparación con el paradigma anterior, se usa para aplicaciones que ya sabemos que vamos a usar durante mucho tiempo. La abstracción ya no es la subrutina, ahora tenemos objetos que se hacen llamados entre si y esperan respuestas.


![](https://i.ibb.co/dmRjCc4/descomposicion.jpg)

![](https://i.ibb.co/SVH3Vpb/008.jpg)

![](https://i.ibb.co/gy1Hz2h/2-tier.gif)

  Arquitectura multinivel: Son diferentes componentes que se van a comunicar en un orden en especifico donde un componente principal crea el llamado a un componente inferior en algún momento, un ejemplo de esto son las aplicaciones cliente-servidor.


  ##  Estilos: Flujo de datos

No estamos preocupados por la secuencia de ejecución sino por como los datos van a ir de un lugar a otro.

**Flujo de datos:**

  + **Lote secuencial:** Lo importante es ejecutar una pieza de código y que el final de esa pieza ya procesada pase a una siguiente etapa.

  + **Tubos y filtros:** Se tiene un string o un flujo de datos continuo en donde cada aplicación recibe continuamente esos datos los procesa y los hace como salida a otra aplicación o al final de la ejecución.

**Nota:**

  > En el estilo de flujo de datos lo que se tiene son diferentes aplicaciones que van a estar conectadas en general en tiempo real por lo tanto ya no se necesita interacción con el usuario para decidir cuándo empieza un proceso o cuando termina otro.

**Cuando usamos el estilo de arquitectura de flujo de datos:**

+ Cuando tenemos un proceso que tiene que tener una salida clara pero que puede ser separado en partes en donde tenemos parte a parte lo que necesitamos hacer.
+ Cuando necesitamos un string de entrada parte a parte ir procesándolo y tener una salida al final del túnel.

![](https://i.ibb.co/dK1xPfG/tuvo.png)

**Flujo de datos**

Lote secuencial
Lo importante es ejecutar una pieza de código y que al final de esa pieza todo lo procesado pase a la siguiente pieza.
Tubos y filtros
Tenemos un flujo de datos continuo en dónde cada aplicación recibe continuamente esos datos, los procesa y le da salida a otra aplicación o al final de ésta.

**Programas utilizados en el ejemplo de tubos y filtros:**

  + **Grep:** Toma una expresión regular de la línea de comandos, lee la entrada estándar o una lista de archivos, e imprime las líneas que contengan coincidencias para la expresión regular.

  + **Sed:** Reemplaza texto dentro de una linea.

  + **WC:** Cuenta cantidad de palabras

  ##  ESTILOS: CENTRADAS EN DATOS.

Estilo de pizarrón, permite centralizar los datos en una sola base de datos, alimentada por varias partes involucradas, una vez que todas las partes interesadas ingresan los datos, el sistema centralizado genera una salida.

![](https://i.ibb.co/3YTbwwW/pizzaron.webp)

Estilo Centralizado, En este caso el sistema posee los datos centralizados en una base de datos, y hay dos (02) sistemas que comparten la misma base de datos.

+ **Centrado en datos:** Consiste en compartir información de una base datos y que varios componentes puedan acceder a la misma, es decir, distintos componentes comparten una misma base de datos.

![](https://i.ibb.co/YjF4zZY/centralizado.jpg)

+ **Estilo Experto**, En este caso el sistema que centraliza los datos, tiene la capacidad de entender los datos y consultas que realiza el cliente, generando salidas inteligentes. (inteligencia artificial).

![](https://i.ibb.co/D9cgs17/experto.jpg)

  ## COMPONENTE INDEPENDIENTES

  + **Invocación implícita:** Tiene que ver con que nuestra aplicación puedan mandar mensajes entre si, sin que sepa a quien le esta hablando.

  + **Invocación explícita:** Tiene que ver con el desarrollo de componentes que si se conocen entre si, pero que sean desarrollado independientemente.

  + **ARQUITECTURA ORIENTADAS A SERVICIOS:**
El Enterprise Services Busses, sabe que proceso tiene que llevar a cabo para lograr su cometido, dando a los componentes la información que éstos requieran. El ESB, es inteligente.

Es necesario tener en cuenta que cualquier actualización del sistema, mantiene conectado a los componentes que brindan servicios de consulta.

  ## Comparando estilos: ¿Cómo elijo?

  **Estilos Monolíticos:**

  + Es más fácil darle prioridad a la eficiencia de las comunicaciones.

  + Son más fáciles de probar.

  + Curva de aprendizaje son más fáciles, todas las piezas estan en el mismo lugar. (Los microservicios son fáciles de entender).

  + La capacidad de modificación es más fácil.

  + La modularización es más fácil de romper, por lo que es más fácil no garantizar esa separación a largo plazo.

  + En la usabilidad, es mas costoso, porque habría que respaldar toda la aplicación y no pequeños microservicios.

  + Puede ser un desafío para el despliegue, porque habría que garantizar que toda la aplicación o sistema se adapta a ese contexto específico.


**Estilos Distribuidos:**

  +  Es más fácil darle prioridad a la eficiencia de las comunicaciones.
  +  Para hacer una prueba de principio a fin hay que tener todos los componentes disponibles .
  +  La curva de aprendizaje es más difícil, porque habría que entender todas las piezas de los componentes.
  +  Al ser desplegadas independientemente, son versionadas independientemente, y esta variación de serviones hace mas complejo su modificación.
  +  La modularidad, es más fácil porque los componentes que son desplegados independiente.
  +  La disponibilidad se pueden tener multiples copias del sistema. por lo que este disponible es mas barato.
  +  La adaptabilidad es más fácil en el despliegue porque los componente se despliegan independientemente en múltiples contextos.


**Comparando estilos:** 

¿Cómo elijo?

**Estilos monolíticos.**

Estilos donde se despliegan un artefacto de software

  **Eficiencia:** Al tener un solo artefacto se puede ser optimizado de manera más personalizada. | En estilos distribuido, es un problema debido a los canales de comunicación, red, intenet que comunican los componentes.

  **Curva de aprendizaje:** El monolitico contiene toda la información allí. Un monolitico bien diseñado permite tener todas las piezas en el mismo lugar, por lo que se facilita la lectura y entendimiento. | El el caso distribuido hay que entender cada componente.Nota: Un componente interno en un distribuido puede ser visto como un monolítico. Es la base de los microservicios.

  **Capacidad de prueba:** Son más fáciles de probar una funcionalidad de principio a fin. | En distribuidos necesito tener todos lso componentes disponibles, incluyendo los BUS de eventos.

  **Capacidad de modificación:** Un cambio que se despliega todo junto garantiza menos estaddos intermedios. Las versiones nunca coexisten | En distribuidos diferentes compoentes tienen diferentes versiones, por lo que requiere de compatibilidad entre versiones. Una modificación en un distribuido es más difícile hacer llegar.

**Estilos distribuidos.**

Componentes que luego de ser desplegados se conectan de alguna forma.

  **Modularidad:** Es separar componentes que prestan servicios

  **Disponibilidad:** Es mayor que en monolítica, podemos tener multiples copias de un componente, que esté disponible significa que sea más barato, tener una copia entera de un monolitco es mucho más caro que copiar el componente distribuido que necesitamos que escale. Microservicios aprovecha recursos.

  **Uso de recursos:** Es más fácil gestionar los recursos del sistema

  **Adaptabilidad:** Al ser distribuido se puede detewctar mucho más fácil qué componente necesita ser adaptado del sistema y es más fácile realizar esa actualización | en monolítos puede ser mucho más complicado, como lanzar una app en un sistema operativo diferente.

**¿Como elijo qué necesito?**

Tener en cuenta los requisitos, los objetivos de negocio | arquitectura de software, atributos de calida | Estrategias de arquitectura, Escenarios/ Desiciones arquitectonicas. Con el fin de analizar que sacrificios, riesgos y no riesgos cuento y como impacta en mi proyecto

  ## Reto: Un producto, muchos estilos

  Esta vez el reto es que tomes un sistema conocido y haz lo siguiente:

  + Describe sus atributos de calidad percibidos.
  + ¿Estás de acuerdo con las decisiones tomadas?
  + Propón el énfasis en algún atributo de calidad.
  + Describe qué se vería favorecido
  + ¿Qué se vería afectado negativamente?

Recuerda contarnos en el sistema de discusiones.

# 5. Desarrollo del proyecto

  ## Desarrollo del proyecto: PlatziServicios Fase Startup

  **PlatziServicios**

**Situación/Problema:**

La bañera de nuestra casa está dañada debido a que se rompió nuestra cañería, es necesario los servicios de un plomero que me permita arreglar dicho problema y sea de nuestra confianza.

**Entonces se comienza con los requerimientos del sistema:**

  + **Criterio de éxito:** Conectar rápidamente a un cliente con un profesional de confianza. Garantizar el aumento del volúmen de trabajo al profesional.

  + **Idea:** Definición de una forma ideal de como se satisface una necesidad. Ejemplo: Tener una forma mucho más sencilla de solicitar un servicio de plomería que llegue a mi casa con un plomero que se conozca.

  + **Historias de usuarios:** Definir las experiencias que los usuarios han tenido respecto a la solución de su necesidad. Ejemplo:

    - **Experiencia de un cliente x:** quiero contactar a un profesional en el momento para reparar un problema en mi hogar.
    - **Experiencia de un cliente y:** quiero conocer la experiencia del profesional para decidir a quien contacto.
    - **Experiencia de un profesional x:** quiero cobrar mi trabajo realizado para seguir prestando el servicio.
    - **Experiencia de un profesional y:** necesito tener más repertorio de personas para ampliar mi currículo de trabajo y flujo del mismo.

**Requerimientos más técnicos:**

  + **Etapas de la prestación de servicio:** Solicitar, aceptar y finalizar una prestación de servicio de forma segura.

  + **Comunicación:** La forma en como el cliente solicita el servicio a su hogar.
  
  + **Evaluación:** Como se evalua los profesionales y clientes para futuros tiempos

**Riesgos**

Son referentes a historias de los usuarios.

**Ejemplo:**

  +  El cliente utiliza un servicio y no completa el pago en un tiempo determinado

  +  La persona que solicita el servicio no puede confirmar quien es la persona

**Restricciones**

Limites que tiene nuestro proyecto de acuerdo a variables.

**Ejemplo:**

  -  Recursos disponibles para el desarrollo: programadores, equipos de cómputo, energía, comida, lugar de trabajo, servicios públicos, etc.

  -  Registro de impuestos del profesional: Que el profesional cumpla con el pago de impuestos ante las instituciones.

  -  Antecedentes penales: que el profesional cuente con ser un ciudadano ejemplar dentro de la ley.

Teniendo en cuenta todas las restricciones y requerimientos que existe, lo más adecuado es montar una arquitectura cliente-servidor dentro de la web que permite de una manera mucho más sencilla la automatización de procesos.

![](https://i.ibb.co/pR0Fqjm/fas-di.jpg)

- [Proyecto platzi](https://drive.google.com/file/d/1fwGiM-64wy35qLXdjDtiKGXpILS_xBM5/view?usp=sharing)

  ### Desarrollo del proyecto: PlatziServicios Fase Producto en crecimiento

  Nuestro sistema está creciendo, con eso llegan nuevos requerimientos, riesgos, stakeholders y una visión más amplia de lo que podemos solucionar.

Primero: Reevaluamos nuestros criterios de éxito

- Brindar a las empresas cliente estabilidad y control de costos de las prestaciones de servicios que necesiten
- Brindar a las empresas prestadoras una visión de crecimiento de sus servicios.

**Las historias de Usuario que salen de esta nueva visión:**

- Como empresa cliente, necesito reportes de gastos en servicios para controlar y entender mis finanzas.
- Como empresa cliente, necesito generar listas de profesionales preferidos para nunca perder la disponibilidad del servicio
- Como empresa prestadora necesito medir el rendimiento de mis profesionales para comprender mi propio crecimiento.
- Como empresa prestadora necesito posicionarme como la mejor empresa del mercado para obtener más clientes.

**Requerimientos:**

**Reportes**

- De gastos por período y por tipo de servicio contratado
- De ingresos y horas trabajadas por profesional por periodo y tipo de servicio prestado

**Autorización**

- Gestión de Usuarios, roles y permisos asociados a acciones del sistema.

**Posicionamiento y comunicación**

- Ranking de prestadores por evaluación
- Lista priorizada de prestadores por tipo de prestación

**Riesgos:**

- Las empresas cliente no pueden extraer la información del sistema para integrar a sus aplicaciones existentes (normalmente ya existe un ecosistema de aplicaciones)
- Los indicadores de la empresa prestadora no son indicativos del trabajo realizado
- El proyecto podría recibir juicios de fraude por cobros injustificados.

**Restricciones:**

- Conformar estándares de auditoria profesional
- Garantizar la privacidad de los datos de consumo

**Estilo arquitectónico:** El requisito más fuerte arquitectónico que debemos tener en cuenta pasa por los reportes.
Ahora nuestra base de datos se separa. Por un lado, dejamos lo transaccional en una base de datos y en otra, la que que se utilizará para los reportes, a fin de evitar el costo de la lectura de los reportes sobre una misma base de datos (y poner en el peligro toda la estructura de servicios que tenemos en este momento)

  ## Desarrollo del proyecto: PlatziServicios Fase Escala global 

**Análisis de requerimientos**

**Criterios de exito:**

- Conectar a empresas locales y globales con los mejores prestadores de servicios
- Facilitar el crecimiento y la globalización de las empresas prestadoras.

**Historias de usuario:**

- Como cliente necesito entender el sistema en mi idioma para poder garantizar el buen uso del mismo
- Como cliente necesito acceder a servicios locales y globales para estandarizar los prestadores en mis diferentes localidades.
- Como usuario necesito acceder a los servicios en cualquier momento para no tener problemas dependientes del uso horario
- Como empresa prestadora necesito brindar mis servicios de forma global para ampliar mi alcance al mercado internacional.

**Requerimientos:**

- Internacionalización: Traducciones de contenido
Registro de prestadores globales y su capacidad de busqueda local o global.
- Disponibilidad de datos:
Cálculo de reportes en tiempo real

**Riesgos:**

- El crecimiento de la compañía hace difícil la transmisión de conocimiento y la productividad de nuestros equipos de desarrollo.
- Pérdida parcial o total de datos por fallas no previstas
- Un mercado específico no es accesible por diferencias de idioma.

**Restricciones:**

- Evitar procesos acoplados a un huso horario específico
- Empresas que no permiten que sus datos salgan del país de origen.


  - [Fundamentos de Arquitectura de software](https://drive.google.com/file/d/1NZ2T0bkUyxXDaWGw1Q3-Cu1YfkxDDHlu/view?usp=sharing)
  - [Introduccion a la Arquitectura de Softtware](https://drive.google.com/file/d/19OTJiSEhce4h4j4hKWgto1WaePWGuXYA/view?usp=sharing)
    