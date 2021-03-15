# GitLab

#### David Aroesti

<p align="center"><a href="" target="blank" alt=""><img src="https://i.ibb.co/CwSKMPT/gitlab-logo-gray-stacked-rgb.jpg" width="700"></a></p>

# Tabla de Contenido
- [1. Introducción](#1.-Introducción)
  - [Introducción al curso](#Introducción-al-curso)
  - [¿Qué es Devops?](#¿Qué-es-Devops?)
  - [El ciclo de vida del Devops](#El-ciclo-de-vida-del-Devops)
  - [Introducción a Gitlab](#Introducción-a-Gitlab)
  - [Gitlab vs Github](#Gitlab-vs-Github)
- [2. Administración](#2.-Administración)
  - [Autenticación](#Autenticación)
  - [Grupos](#Grupos)
  - [Autorización](#Autorización)
  - [Auditoría](#Auditoría)
  - [Proyectos](#Proyectos)
- [3. Planificación](#3.-Planificación)
  - [Tipos de desarrollo](#Tipos-de-desarrollo)
  - [Planificación en Gitlab-Issues](#Planificación-en-Gitlab-Issues)
  - [Planificación en Gitlab-Etiquetas](#Planificación-en-Gitlab-Etiquetas)
  - [Planificación en Gitlab-Pesos](#Planificación-en-Gitlab-Pesos)
  - [Planificación en Gitlab-Milestones](#Planificación-en-Gitlab-Milestones)
  - [Planificación en Gitlab-Boards](#Planificación-en-Gitlab-Boards)
  - [Planificación en Gitlab-Service Desk](#Planificación-en-Gitlab-Service-Desk)
  - [Planificación en Gitlab-Quick actions](#Planificación-en-Gitlab-Quick-actions)
- [4. Verificación](#4.-Verificación)
  - [Inicialización del repositorio](#Inicialización-del-repositorio)
  - [Merge requests](#Merge-requests)
  - [Profundizando en Merge requests](#Profundizando-en-Merge-requests)
  - [Continuous Integration-CI](#Continuous-Integration-CI)
  - [Gitlab CI](#Gitlab-CI)
  - [Automatizacion con GitLab Cl](#Automatizacion-con-GitLab-Cl)
  - [Validacion de la configuracion con GitLab Cl](#Validacion-de-la-configuracion-con-GitLab-Cl)
  - [gitlab-ci.yml](#gitlab-ci-yml)
  - [Gitlab pages](#Gitlab-pages)
  - [Implementando Gitlab pages](#Implementando-Gitlab-pages)
  - [¿Qué es el Desarrollo Ágil?](#¿Qué-es-el-Desarrollo-Ágil?)
  - [Gitlab autodevops](#Gitlab-autodevops)
  - [Implementando GitLab autodevops](#Implementando-GitLab-autodevops)
  - [Habilitando autodevops](#Habilitando-autodevops)
- [5. Empaquetación](#5.-Empaquetación)
  - [Gitlab container registry](#Gitlab-container-registry)
  - [Introducción a contenedores](#Introducción-a-contenedores)
- [6. Seguridad](#6.-Seguridad)
  - [Introducción a DevSecOps](#Introducción-a-DevSecOps)
  - [Firmas de seguridad](#Firmas-de-seguridad)
  - [Pruebas estáticas de seguridad](#Pruebas-estáticas-de-seguridad)
  - [Escaneo de contenedores](#Escaneo-de-contenedores)
  - [Escaneo de dependencias](#Escaneo-de-dependencias)
  - [Pruebas dinámicas de seguridad](#Pruebas-dinámicas-de-seguridad)
  - [Gitlab security dashboard](#Gitlab-security-dashboard)
- [7. Distribución](#7.-Distribución)
  - [Continuous Delivery (CD)](#Continuous-Delivery-CD)
  - [Ambientes](#Ambientes)
  - [Review apps](#Review-apps)
  - [Estrategias de Distribución](#Estrategias-de-Distribución)
  - [Feature Flags](#Feature-Flags)
  - [Rollback](#Rollback)
- [8. Monitoreo](#8.-Monitoreo)
  - [¿Por qué monitorear?](#¿Por-qué-monitorear?)
  - [Métricas de desempeño (performance metrics)](#Métricas-de-desempeño-performance-metrics)
  - [Métricas de salud (health metrics)](#Métricas-de-salud-health-metrics)
  - [Metricas de equipo](#Metricas-de-equipo)
  - [Rastreo de errores](#Rastreo-de-errores)
- [9. Conclusiones](#9.-Conclusiones)
  - [¿Por qué desarrollar con Gitlab?](#¿Por-qué-desarrollar-con-Gitlab?)


# 1. Introducción

  ## Introducción al curso

Todas las computadores que tienes a tu alrededor corren software que nosotros como desarrolladores escribimos, sin embargo las prácticas tradicionales han hecho que tanto las entregas, seguridad, entre otras no sean óptimas o no podamos movernos a la velocidad que nos gustaría cuando automatizamos.

**DevOps** es una serie de prácticas culturales, pero también de herramientas que nos permiten llevar software de manera ágil a los usuarios. Cuentas con herramientas como manejo de repositorio(Github o Gitlab), CI o CD **(CircleCI, TravisCI o Gitlab)**, manejo de proyectos (Trello, Asana o Gitlab).

Gitlab es una herramienta que nos permite utilizar las buenas prácticas del **DevOps en un solo lugar**.

**DevOps** Automatización, mejoras en la cadena de valor. a través de una serie de prácticas culturales agiles.
Todo en un solo lugar.

  ## ¿Qué es Devops?

Si desarrollas software tú debes ser el encargado y el responsable de que ese programa corra muy bien en producción. No existe el ““corre en mi máquina””

<p align="center"><a href="https://aws.amazon.com/devops/what-is-devops/" target="blank" alt="What is DevOps?"><img src="https://i.ibb.co/YTRqf2n/1200px-Amazon-Web-Services-Logo-svg.png" width="200"></a></p>

<p align="center"><a href="" target="blank" alt=""><img src="" width=""></a></p>

Un **desarrollador** escribe el código que alimenta a la aplicación, se encarga de la seguridad y que no existan huecos de seguridad. También empaqueta el código mediante contenedores para correr en la infraestructura especificada.

Un **DevOps** se asegura de que el código corra configurando servidores, redes, infraestructura del internet y más. Se encarga de que las máquinas funcionen y puedan dar el servicio escrito por los desarrolladores.

Un DevOps es un superhéroe, se encarga que desde el momento en que se escribe el código hasta cuando corre en el dispositivo de nuestros clientes, todo el proceso sea seguro, automatizado y con prácticas de calidad.

  - **Código:** Escribre el código que alimenta a la aplicación.
  - **Seguridad:** Se encarga de que el código no tenga hoyos de seguridad.
  - **Empaqueta:** Construye el codigo para correr en la infraestructura especificada.
  - **Hardware y OS:** Provisiona la infraestructura en donde correra la aplicacion.
  - **Seguridad:** Asegura redes e infraestructura.
  - **Uptime:** Se encarga de que los servicios corran conforme a las especificaciones.

    - **Pruebas automatizadas:** Las unit test que deberías estar escribiendo.
    - **Continuous Integration:** Automatiza los procesos de calidad.
    - **Continuous Delivery:** Se trata de enviar continuamente código a nuestros cliente.
    - **Monitoreo y logging:** Es la forma de saber qué es lo que sucede dentro de nuestro programa y detectar problemas oportunamente.
    - **Microservicios:** Separa las funcionalidades de la aplicaciones en servicios independientes.
    - **Comunicación y colaboración:** Muy importante en la cultura DevOps.

- [Test-driv development TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas)
- [XSS y SQL Injection](https://blogs.imf-formacion.com/blog/tecnologia/xss-que-es-y-como-funciona-201805/)

  ## El ciclo de vida del Devops

El modelo de DevOps no es una receta de cocina donde sigues las instrucciones y obtendrás un resultado. Este modelo es iterativo, un infinite loop y si lo detenemos nuestra compañía muere.

El modelo de DevOps se entiende como un loop donde existen diferentes etapas y consideraciones que atienden algunas etapas en especifico.

  - **Plan:** Acá definimos las labores, los requerimientos que se necesitan para implementar en nuestra plataforma y para esto usamos herramientas como issues o boards.
  - **Create:** Es escribir el código necesario para resolver el problema de negocio que tenemos. Todo este código podemos tenerlo en un solo lugar para colaborar y se hace uso de repositorios, también branchs o tags.
  - **Verify:** Se corren nuestras pruebas automatizadas donde definimos las reglas a probar.
  - **Package:** Empaquetamos nuestro código para correr en una infraestructura determinada. Normalmente se hace en un contenedor de Docker.
  - **Release:** Una nueva versión de nuestro código y llega a producción.
  - **Configure:** Se puede cambiar nuestro cluster de kubernetes, mandar instrucciones para manejar el nuevo estado de nuestra aplicación.
  - **Monitor:** Cómo nuestro código esta funcionando, qué tipo de performance ocurre en los dispositivos de nuestros clientes.

    ![](https://i.ibb.co/xCzT87F/devops.webp "GitLab Devops")

    ![](https://i.ibb.co/vhzP0TX/devop.webp "Gitlab looper")

    **Beneficios del ciclo de vida de devops**

    - **Velocidad:** Es lento hacer las cosas manuales

    - **Rápida distribución:** Poder comparar cambios diariamente ayuda mucho

    - **Confiabilidad:** Cuando tenemos procesos manuales, nos podemos equivocar como humanos, al hacer bien nuestro trabajo de devops, bajamos ese error.

    - **Escala:** Al automatizar bajamos el tiempo y hace que podamos crecer nuestra infraestructura a una escala antes no imaginada

    - **Colaboración:** Al estar todo el equipo en comunicación se mejora la colaboración

    - **Seguridad:** Las máquinas se ponen a hacer revisones de seguridad constantes cada que realizamos un cambio.

  ## Introducción a Gitlab

**Gitlab** es una compañía que realiza un proyecto open source, un producto especializado en el ciclo de vidas del DevOps.

![](https://i.ibb.co/7pV21YT/Ds.jpg "gitlab para el proceso de devops")

**Verificación**

  - Pruebas automatizadas
  - Calidad del Código
  - Review apps
  - Code coverage

**Empaquetaci&oacute;n**

  - Container registry
  - Paquetes privados (NPM y Maven)

**Distribuci&oacute;n (release)**

  - Deployment strategies
  - Ambientes
  - GitLab pages
  - Feature flags

**Configuraci&oacute;n**

  - Auto Devops
  - Integraci&oacute;n  con kubernetes
  - Knative serverless
  - Manejo de secretos 
  - Chatops

**Monitore**

  - Prometheus
  - Jaeger
  - Sentry

**Seguridad**

  - Container scanninng
  - Dependency scanning
  - Dynamic security testing (DAST)
  - Static security testing (SAST)
  - Manejo de licencias
  - Security dashboard

**Defensa**

  - A paratir de 2019
  - Firewall
  - Theat Detection
  - Data loss prevention
  - Y mucho m&aacute;m ...


  - **Administración:** Nos da opciones de autenticación, autorización, analytics y self hosted gitlab.

  - **Planificación:** Nos da issues, milestones, burndown charts, discusiones, boards, service desk, to-dos, etc.
  - **Creación:** Generar proyectos, grupos, repositorios de código, merge request, integración y automatización.
  - **Verificación:** Correr pruebas automatizadas, calidad del código, review apps y code coverage.
Empaquetación: Container registry, paquetes privados.
  - **Distribución(release):** Deployment strategies, ambientes, Gitlab pages, feature flags.
  - **Configuración:** Existe la posibilidad de que debas cambiar la configuración de tu sistema. Auto DevOps, integración con Kubernetes, Knative serverless, manejo de secreto, chatops.
  - **Monitoreo:** Prometheus, Jaeger, Sentry.
  - **Seguridad:** Container scanning, dependency scanning, dynamic security testing, static security testing, manejo de licencias, security dashboard.
  - **Defensa:** Gitlab está trabajando en herramientas para esta etapa como Firewalls, threat detection, data loss prevention y más.

- [DevOps Tools Landscape](https://about.gitlab.com/devops-tools/)
- [Install self-managed | GitLab](https://about.gitlab.com/install/)

  ## Gitlab vs Github

**Github y Gitlab** son plataformas que comparten algunas funcionalidades aunque tienen objetivos diferentes.

![](https://i.ibb.co/c8cgnd9/gitlab-github.webp "GitHub vs GitLab")

**Github** nace como un repositorio en la nube colaborativo basado en Git para permitir participar en proyectos. En Github una persona fuera de una organización puedan colaborar en estos proyectos, es como una red social de programadores. Fue adquirido por Microsoft.

**Gitlab** nació como una versión open source de Github y a lo largo del tiempo ha encontrado un nicho en agregar herramientas y generar integraciones directamente al producto. Tiene una visión de que su cliente principal es alguien especializado en DevOps

  - [GitHub makes private repos free to teams](https://www.infoworld.com/article/3537642/github-makes-private-repos-free-to-teams.html)

- [GitLab vs GitHub](https://about.gitlab.com/devops-tools/github-vs-gitlab/)
- [GitHub vs GitLab | PlatziLive](https://www.youtube.com/watch?v=EscDe0jG6XM)

# 2. Administración

  ## Autenticación

  GItlab te ofrece varias formas de autenticación tales como:

  - Username y Password
  - Two factor authentication(2FA)
  - SSH Key

  * La ssk key dura hasta que tu la elimines de tu GitLab account
  * El codigo generado por google authentication cambia continuamente cada y dura 30 segundos
  * La U2F security key ttambien dura hasta que la elimines de GitLab

   + [Google authentication - Apps on Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=es) : Estándar en la industria para generar códigos OTP.
   + [Authy | Two-factor Authentication (2FA) App & Guides](https://authy.com) : Permite sincronización de equipos en caso de pérdida.
   + [Yubico | YubiKey Strong Two Factor Authentication for Business and Individual Use](https://www.yubico.com) : Códigos OTPs no se guardan en el celular.

**Linux Ubuntu**

**Crear llaves locale**

```shell
➜ ssh-keygen -t rsa -b 4096 -C "tu@email.com"
```

Verficiar que el servicio de llaves este arriba

```bash
➜ eval $(ssh-agent -s)
```

Agregar la llave al servicio local

```bash
➜ ssh-add ruta-donde-guardaste-tu-llave-privada

# run: 
ssh-add <PATH-TO-SSH-FILE>

# Agrega la llave al servicio local
ssh-add ~/.ssh/gitlab_rsa
```

**windos10**

**Generar una llave ssh**

```bash
➜ ssh-keygen -o -t rsa -b 4096 -C "tu.correo@mail.com"
```

Para copiar tu llave al porta papeles

**mac**

```shell
➜ pbcopy < ~/.ssh/id_rsa.pub
```

linux (previamente debemos instalar `xclip`)

**Ubuntu**

```bash
➜ apt-get install xclip -y

# Copia la llave publica

➜ xclip -sel clip < ~/.ssh/platzi_rsa.pub
```

windows (desde git bash)

```bash
➜ cat ~/.ssh/id_ed25519.pub | clip
```

- [GitLab and SSH keys](https://docs.gitlab.com/ee/ssh/README.html#generating-a-new-ssh-key-pair)

  ## Grupos

Los **grupos** te permiten compartir recursos entre varios miembros del equipo y organizar la forma en la que trabajas.

  - **Agrupar proyectos:** dónde va a vivir nuestro código y los recursos asociados.
  - **Otorgar permisos de acceso:** qué usuarios de qué equipo van a poder acceder a los recursos de la compañía.
  - **Compartir recursos:** Si tienes cluster de Kubernetes, templates o runners para correr el CI lo puedes compartir entre varios grupos.

    - **Subgrupos:** permiten modelar la forma en la que nuestra compañia está diseñada (2 equipos de Dev, 1 Diseñadores, 1 Directivos)

Los **grupos** se utilizan en Gitlab a través de los **Namespaces** que nos dan una url única para nuestro **usuario, grupo y subgrupo.**

Nombres reservados para los grupos, las palabras reservadas son: [Reserved project and group names](https://docs.gitlab.com/ee/user/reserved_names.html)

**3 tipos de visibilidad:**

  1. Pública: cualquier usuario puede ver los contenidos de ese grupo
  2. Interna: adentro de la instancia de GitLab **(usuarios logueados)** pueden tener acceso a ese grupo
  3. Privada: Proyectos y grupos sean accesibles a traves de los permisos que se asignan en GitLab

  ## Autorización

Existen diferentes formas de **autorizar** un usuario dentro de un grupo y estos mismos modelos se utilizan para los proyectos:

  - **Guest:** Es Read-only, solo tiene permisos de lecturas. No puede modificar código, crear o comentar issues.
  - **Reporter:** Solo puede crear y comentar en los issues. No puede añadir código.
  - **Developer:** Puede añadir código, también da acceso a los Pipelines de CI, branchs y más, pero no da la capacidad de agregar nuevos miembros.
  - **Owner / Maintainer:** Eres Owner cuando creas un proyecto y Maintainer cuando alguien más te da permisos para administrar ese proyecto.

  - [Permissions](https://docs.gitlab.com/ee/user/permissions.html)

  ## Auditoría

**Gitlab** nos permite generar rastro de auditoría cuando se realizan cambios que pueden modificar el grupo, el proyecto o la instancia.

  - [Audit Events](https://docs.gitlab.com/ee/administration/audit_events.html)

  ## Proyectos

Los proyectos tienen tres componentes fundamentales:

  - **Issue tracker:** No es uno genérico para cualquier compañía, es específico para equipos que desarrollan software y adentro encontrarás conceptos como milestone, estimados de tiempo y más.
  - **Code repository:** Es el lugar centrar que nos va a permitir compartir y colaborar alrededor del código.
  - **Gitlab CI:** Nos muestra la posibilidad de automatización con la inclusión de Continuous Integration.

    **Note:**
    - **Un grupo:** sería como la organización (Ejemplo: Gitlab)
    - **Subgrupo:** sería como un équipo dentro de gitlab (BackEnd, FrontEnd, DevOps, etc…)
    - **Proyecto:** se asigna a un subgrupo o grupo (proyecto: CI/CD, api-gitlab, etc…)

    - [Projects](https://docs.gitlab.com/ee/user/project/)

# 3. Planificación

  ## Tipos de desarrollo

Las principales diferencias entre Agile y Waterfall es que en el primero encontramos un proceso iterativo y en el segundo utilizamos un proceso previamente definido. En Agile estamos realizando sprints, pequeños esfuerzos de trabajo para al final tener un entregable y mandarlo a producción.

En Waterfall tenemos nuestro entregable hasta el final del proyecto, como crear una casa de manera modular.

![](https://i.ibb.co/Z2qWHFP/In.jpg "Project Management")

+ **Waterfall -->** Proceso previamente definido (se definen todos los requerimientos antes de programar)
+ **Agile -->** Proceso iterativo (al terminar la 4ta fase se regresa a la primera como un ciclo)

Waterfall es un proceso que toma bastante tiempo a diferencia de Agile.

  - **Agile,** Iterativo, entregables en c/sprint.
  - **Waterfall,** Secuencial, entregables al final del proyecto.
  - **Define** → Build →Test → Release

  ## Planificación en Gitlab-Issues

Los issues son el punto donde inicia una conversación sobre el código.

**Los issues permiten:**

  - Discutir la implementación de una nueva idea.
  - Sugerir propuestas de features.
  - Hacer preguntas.
  - Reportar bugs y fallos.
  - Obtener soporte.
  - Planear nuevas implementaciones de código.

![](https://i.ibb.co/GtYDmCK/specs.png "Specs")

Puedes añadir templates a tus issues para poder estandarizar la forma en la que se abren, podemos incluirlo de cualquier tipo. Debes crear un archivo o una estructura de carpeta como:

```bash
.gitlab/issue_templates/Bug.md
```

- [Issues | GitLab](https://docs.gitlab.com/ee/user/project/issues/)

- [issues | Project-V-Juarez](https://gitlab.com/V-Juarez/codigo-robotica/-/issues?scope=all&utf8=%E2%9C%93&state=closed)

  ## Planificación en Gitlab-Etiquetas

El siguiente paso es clasificar los **issues** basados en etiquetas, suele salirse de control la forma en la que se reportan y una manera sencilla de organizar es con etiquetas.

**Las etiquetas nos permiten:**

  - Categorizar issues o merge request con títulos descriptivos.
  - Filtrar y buscar en Gitlab
  - Seguir temas a través de notificaciones.

  ![](https://i.ibb.co/rKPrLBY/labels-prioritized-v13-5.png "Gitlab-Etiquetas")

  ## Planificación en Gitlab-Pesos

Uno de los puntos más complejos del desarrollo de Software es la estimación. En esta clase me gustaría abordar qué herramientas Gitlab nos ofrece para poder estimar la cantidad de trabajo que un issue requiere, qué ventajas tiene agregar pesos a los issues y algunas de las buenas prácticas relacionadas con este ejercicio.

Gitlab ofrece la funcionalidad de agregar pesos a los issues. Estos pesos se representan de manera numérica (con el límite de que los números deben poderse representar en 4-bytes). Los pesos aparecen en el menú derecho del Issue, junto al nombre del issue en la lista de issues y sirven para determinar la cantidad de trabajo ejecutado en los Burndown Charts de los Milestones.

![](https://i.ibb.co/2YvD36x/mill.webp "Gitlab-Pesos")

Ahora bien, estimar es algo difícil. Para los desarrolladores de software es una de las tareas –quizá la tarea más difícil– de nuestro trabajo. Se deben tomar en cuenta muchísimos factores, muchos de ellos desconocidos, para tomar decisiones que afectarán al resto del equipo y a la compañía misma. Por eso, muchos desarrolladores y product owners son reacios a estimar; pero hay que recordar que la estimación es tan solo eso: un estimado. No es un juramento de sangre ni una declaración solemne ante autoridad judicial. En pocas palabras, jamás trabajes fines de semana y vacaciones para cumplir un estimado.

No obstante lo anterior, existen un par de buenas prácticas que te ayudarán a ser más preciso y ayudar a los product owners a priorizar el trabajo pendiente.

El primer punto que debes tener en cuenta es que la estimación es un trabajo de equipo. Es importante que diversos equipos de trabajo colaboren en la estimación. Los Desarrolladores, Diseñadores, Product Managers, etc. tienen diversas perspectivas sobre lo que implica desarrollar una nueva funcionalidad. Cuando la estimación se realiza tomando en cuenta estas perspectivas existe una mayor probabilidad de que la estimación se acerque a la realidad.

Otro punto importante es que las estimaciones funcionan mejor cuando son relativas. Es decir es mejor encontrar un trabajo relativamente sencillo en el que todo el equipo se encuentre de acuerdo y estimar a partir de ese punto. Por ejemplo, si todo el equipo está de acuerdo en que añadir verificación a los campos de un formulario es un 2, entonces estimemos con base en ese acuerdo.

Es importante recordar que cuando estimamos, es buena práctica tener un sistema de estimación en el que el equipo esté de acuerdo. Un ejemplo muy usado en la industria son los puntos Fibonacci. Es decir, se utiliza la secuencia de Fibonacci para asignar **pesos a issues (1, 2, 3, 5, 8, 13, etc.)**. Otra forma, es utilizar **tallas de camisas (S, M, L, XL, XXL, etc.)**. En todo caso, lo importante es que el equipo entienda estos sistemas y los adopte en sus prácticas.

Por último, cuando incluímos a varios miembros del equipo en la estimación es importante que sus opiniones no se vean sesgadas por el resto de sus compañeros. Por eso, una práctica que me gusta mucho es la de jugar **“Estimation Poker”**. En esta modalidad de estimación, todo el equipo tiene barajas que representan los puntos y cuando se pone a discusión un issue, los miembros del equipo revelan su estimado con las barajas. Si todos están de acuerdo, perfecto. Pero si existen grandes discrepancias es momento de escuchar y de volver a evaluar con la nueva información que nos ha sido proporcionada. En todo caso, lo importante es mejorar con el paso de los sprints y que las estimaciones, quizá nunca perfectas, sean lo más realistas posibles.

  ## Planificación en Gitlab-Milestones

Los **Milestones** permiten agrupar issues para completarlos en un tiempo determinado.

  - Milestone como agile sprint
    + _Sprint 5_
  - Milestone como release
    + _V1.1.2_

**Brundown chart** nos permite determinar qué tan avazando vamos dentro de un sprint y nos permite tomar acciones cuando todavía es relevante.

- [Milestones | GitLab](https://docs.gitlab.com/ee/user/project/milestones/)

- [Import Jira project issues to GitLab](https://docs.gitlab.com/ee/user/project/import/jira.html)

Un **burndown chart** muestra la velocidad a la que se está completando los objetivos/requisitos. Permite extrapolar si [el Equipo podrá completar](https://proyectosagiles.org/equipo-team/) el trabajo en el tiempo estimado.

**Se pueden utilizan los siguientes burndown charts:**

- **Product burndown chart:** Son los días pendientes para completar los requisitos del producto o proyecto, realizado a partir del [Product Backlog](https://proyectosagiles.org/lista-requisitos-priorizada-product-backlog/) (lista de requisitos priorizada).
- **Sprint burndown chart:** Horas pendientes para completar las tareas de la iteración, realizado a partir del [Iteration Backlog](https://proyectosagiles.org/lista-tareas-iteracion-sprint-backlog/) (lista de tareas de la iteración).

Este tipo de gráfico permite realizar diversas simulaciones, ver cómo se aplazan las fechas de entrega si se le añaden requisitos, ver cómo se avanzan si se le quitan requisitos o se añade otro equipo, etc.

  ## Planificación en Gitlab-Boards

Los **boards** son una forma de visualizar los flujos de trabajo, de ver quién está trabajando en qué issues y son unas de las herramientas más importantes que existen dentro de Gitlab.

  - Se puede utilizar para **Kanban o Scrum**.
  - Une los mundos de los **issue tracking y Project managment**.

![](https://i.ibb.co/ySp6FBW/issue-boards-core-v13-6.png "Issues-Boards")


![](https://i.ibb.co/ssBy2pC/boards.webp "Planificación Issues-Boards")

[Issue Boards | GitLab](https://docs.gitlab.com/ee/user/project/issue_board.html)

  ## Planificación en Gitlab-Service Desk

El Service Desk es la capacidad que te da Gitlab de abrir issues a través de correo electrónico.

  - Permite dar soporte a través de email a tus clientes directamente desde Gitlab.
  - Permite que el equipo no técnico reporte bugs o abra issue sin necesidad de que tengan una cuenta de Gitlab.
  - Cuando se activa el servicio, se genera un email único para el proyecto.

  - [Service Desk | GitLab](https://docs.gitlab.com/ee/user/project/service_desk.html)

  ## Planificación en Gitlab-Quick actions

Las Quick Actions son atajos textuales para acciones comunes en issues, [epics](https://docs.gitlab.com/ee/user/group/epics/), merge request y commits que normalmente son ejecutadas a través de la UI de Gitlab. Los comandos se pueden agregar al momento de crear un issue o un merge request o en los comentarios de los mismos. Cada comando debe incluirse en una línea separada para que se detecten y ejecuten. Una vez ejecutados, los comandos se retiran del texto y no pueden verse en el comentario o descripción del issue.

![](https://i.ibb.co/qJZ12SF/act1.webp "Comentario del issue")

![](https://i.ibb.co/L68NKfk/act2.webp "Comentario del issue")

Estos son tan sólo unos ejemplos de los Quick Actions que Gitlab ofrece. Gitlab añade Quick Actions todo el tiempo, por lo que te recomiendo familiarizarte con la documentación y consultarla constantemente.

Lista completa:

  [GitLab Quick Actions](https://docs.gitlab.com/ee/user/project/quick_actions.html)

Extension [VCode](https://code.visualstudio.com/docs/languages/markdown)

# 4. Verificación

## Inicialización del repositorio

1. Instalar NodeJS y npm (gestor de paquetes y librerías)
2. Descargar versión LTS de [nodejs](https://nodejs.org/es/)
3. Instalar con aceptar y continuar.  Al terminar de instalar abrir una consola de cmd y escribir el comando

```bash
$ node –v $ npm –v

#Para descargar el cli y poder usar el comando ng, instalar angular
$ npm install –g @angular/cli

# Proyecto en angular
$ ng new platzi-devops
```

Durante la instalacion veremos:

```bash
➜  platzi-gitlab-live ng new platzi-devops            
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict Yes
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]

CREATE platzi-devops/README.md (1021 bytes)
CREATE platzi-devops/.editorconfig (274 bytes)
CREATE platzi-devops/.gitignore (631 bytes)
CREATE platzi-devops/angular.json (3761 bytes)
CREATE platzi-devops/package.json (1203 bytes)
...
CREATE platzi-devops/e2e/src/app.e2e-spec.ts (664 bytes)
CREATE platzi-devops/e2e/src/app.po.ts (274 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
➜  platzi-gitlab-live ls      
➜  platzi-devops git:(master) npm test

# Correr el servidor
➜  platzi-devops git:(master) ng serve
```

## Merge requests

Los **Merge Requests** son la puerta de entrada a nuestro código, es el momento en donde definimos que un cambio sugerido por otra persona será unido a nuestra rama master o rama principal. Para tomar esta decisión se necesita mucha información: si los cambios fueron correctos, resuelven el issue, si surgen problemas de seguridad, si mejora nuestro performance.

El título del merge requests tiene prefijado WIP que significa **Work in Progress**.

![](https://i.ibb.co/hFNQ3hx/1200px-Git-Lab-Merge-Request.png "Merge requests")

![](https://i.ibb.co/7Jb5DvN/merge.png "Meme Merge requests")

## Profundizando en Merge requests

Cherry-pick es para pasar solo commits especificos de una rama a otra, sin hacer un merge de un conjunto de commits

Por ejemplo si la rama de desarrollo tiene 3 commits nuevos y solo necesitamos pasas el commit intermedio a master, cherry-pick permite pasar solo este commit y dejar “pendiente” el resto

Seleccionando commits: [Cherry-pick](https://www.runroom.com/realworld/seleccionando-commits-cherry-pick)

Cherry-pick changes - [Gitlab](https://docs.gitlab.com/ee/user/project/merge_requests/cherry_pick_changes.html)

## Continuous Integration-CI

El **Continuous Integration** es una práctica en la que los desarrolladores envían sus cambios a un repositorio central, lo cual detona builds y pruebas automatizadas.

  - Ayuda a encontrar bugs de manera oportuna
  - Aumenta la velocidad de los releases
  - Automatiza el pipeline que lleva código desde la computadora del desarrollador hasta el dispositivo del cliente.

  - [Continuous Integration](https://www.atlassian.com/continuous-delivery/continuous-integration)

    **Los pilares de la cultura DevOps som CAMS:**

    + Culture
    + Automation - Automatiza todo lo que puedas
    + Measurement
    + Sharing

    - [DevOps movement](https://brunodelb.medium.com/the-cams-model-to-better-understand-the-devops-movement-ffe6713c3fd7)

## Gitlab CI

**Gitlab CI** es el hub central de automatización de Gitlab, es el pedazo que podemos configurar libremente para generar las automatizaciones necesarias para que nuestro flujo de trabajo requiera poca o ninguna interacción humana.

  + Continuamente construye, prueba y despliega cambios pequeños al código.
  + Se configura con el archivo `gitlab-ci.yml`

También nos permite realizar Continuous Delivery y Continuous Deployment.

![](https://i.ibb.co/bRZDFgv/gitlab.png "GitLab para CI y CD")

**1. Verificar**

  - Crear y probar automáticamente la aplicación con la integración continua.
  - Analizar la calidad del código con GitLab [Code Quality](https://docs.gitlab.com/ee/user/project/merge_requests/code_quality.html).
  - Determinar el impacto en el rendimiento de los cambios de código con las [Prueba de rendimiento en el navegador](https://docs.gitlab.com/ee/user/project/merge_requests/browser_performance_testing.html).
  - Realice una serie de pruebas, como [Escaneo de contenedores](https://docs.gitlab.com/ee/user/application_security/container_scanning/index.html), [Escaneo de dependencias](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/index.html), y [JUnit tests](https://docs.gitlab.com/ee/ci/unit_test_reports.html).
  - Implemente sus cambios con [Revisar aplicaciones](https://docs.gitlab.com/ee/ci/review_apps/index.html) para obtener una vista previa de los cambios de la aplicación en cada sucursal.

**2. Empaquetar**

  - Almacenar las imágenes de Docker con [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/index.html).
  - Almacene paquetes NPM con [NPM Registry](https://docs.gitlab.com/ee/user/packages/npm_registry/index.html).
  - Almacene los repositorios Maven con [Repositorio Maven](https://docs.gitlab.com/ee/user/packages/maven_repository/index.html).
  - Almacene Conan Repositories con [Conan Repository](https://docs.gitlab.com/ee/user/packages/conan_repository/index.html).

**3. Lanzar**

  - Continuous Deployment, implementando automáticamente la aplicación en producción.
  - Continuous Delivery, haga clic manualmente para implementar su aplicación en producción.
  - Implemente sitios web estáticos con [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/index.html).
  - Envíe funciones a solo una parte de sus pods y permita que un porcentaje de su base de usuarios visite la función implementada temporalmente con [Canary Deployments](https://docs.gitlab.com/ee/user/project/canary_deployments.html).
  - Implementación de funciones detrás de [Indicadores de funciones](https://docs.gitlab.com/ee/operations/feature_flags.html).
  - Agregue notas de lanzamiento a cualquier etiqueta de Git con [GitLab Releases](https://docs.gitlab.com/ee/user/project/releases/index.html).
  - Vista del estado actual y el estado de cada entorno de CI que se ejecuta en Kubernetes con [Deploy Boards](https://docs.gitlab.com/ee/user/project/deploy_boards.html).
  - Implementa tu aplicación en un entorno de producción en un clúster de Kubernetes con [Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/stages.html#auto-deploy).

  - [GitLab CI|CD](https://docs.gitlab.com/ee/ci/)
  - [Page Not Found | GitLab](https://gitlab.com/platzi-gitlab-live/platzi-devops/-/ci/lint)
  - [GitLav-devops](https://gitlab.com/platzi-gitlab-live/platzi-devops)

**.gitlab-ci.yml**

El archivo de configuración de GitLab CI funciona a traves de keywords. Cada una de estas keywords nos permiten configurar los trabajos.

Es un tipo de código declarativo, es decir que no necesitamos generar mucha lógica en el archivo, si se necesita incluir lógica adicional en el archivo, lo más conveniente es pasar esa lógica a otros archivos, de tal manera que gitlab-ci.yml nos especifique cuales son los trabajos de alto nivel.

  - **Image:** GitLab CI trabaja por medio de contenedores. Se debe declarar un contenedor al principio para poder definir el ambiente global en el cual vamos a trabajar, por ejemplo, si tenemos el proyecto bajo Angular el ambiente a escoger sería el de Node, pero si tenemos el proyecto en Flask el ambiente a escoger sería el de Python.

  - **Stages:** Son los pasos o fases específicos por los cuales va a pasar nuestro proceso de integración continua. Por lo general, se establecen 3 fases: build, test y deploy, pero se pueden incluir pasos adicionales como documentación.

  - **Jobs:** Se pueden nombrar los jobs como se considere. Cada Job va a pertenecer a un Stage, se le puede definir las Variables y los Scripts que es donde nosotros automatizamos.

**Variables**

  - **Trigger Variables:** Son variables automatizadas cuando se detona un nuevo build.
Project Variables (y Protected Variables): Son variables que se pueden definir para que sean expuestas únicamente en un proyecto específico o algunas ramas específicas.

  - **Group Variables:** Son variables que se pueden definir para que estén expuestas en un grupo específico.

YAML Job Level Variables and YAML Global Variables: Son variables que se pueden incluir en el archivo de configuración yaml.

  - **Deployment Variables:** Son variables enfocadas a almacenar información o credenciales para la integración con servicios externos, por ejemplo kubernetes, para hacer el deploy del proyecto.

  - **Pre Defined Variables:** Son variables predefinidas que se exponen por parte de GitLab en cada uno de los trabajos de automatización.


## Automatizacion con GitLab Cl

**Karma.conf.js que es para hacer test en JavaScript:**

  - CustomLauncer = lanzador personalizado
  - No se que es lo de NoSandbox si alguien me podría explicar
  - Se hace que el launcher sea: Chrome Headless por lo que leí es Chrome sin sin [interfaz gráfica](https://es.wikipedia.org/wiki/Navegador_sin_interfaz_gráfica) en package.json es un formato ligero de intercambio de datos:

  - se agrega la “opción” test:ci que ejecute ng test y el resto no lo entiendo muy bien, en .gitlab-ci.yml archivo para CI de GitLab:

  - Trabajar con node.11.1.0
  - Hay dos etapas: install y test
  - Para install ejecute “npm install” e incluya node_moudles/
  - Para test instale dependencias, por consola instale Chrome
y ejecute la opción test:ci que hicimos en package.json


- [Resolve "Generar integracion con Gitlab CI" (!2) · Merge Requests · platzi-gitlab-live / platzi-devops · GitLab](https://gitlab.com/platzi-gitlab-live/platzi-devops/-/merge_requests/2)

**configuracion**

**karmar.conf.js**

```JavaScript
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'], // chromeHeadless -> Agregado
    customLaumchers: {
      ChromeHeadlessNoSandbox:{
        base: 'ChomeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
```


**package.json**

```JavaScript
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "test:ci": "ng test --watch=false --browsers=ChromeHeadlessNoSandbox", // Agregado
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
```


**.gitlab-ci.yml**

```JavaScript
image: node:11.1.0
stages:
  - install
  - test

install-dependencies:
  stage: install
  script:
    - npm install
  artificts:
    expire_in: 1hr
    paths:
      - node_modules/
  cache:
    paths:
      - node_modules/

test-apps:
  stage: test
  dependencies:
    - install-dependencies
  before_script:
    - apt-get update && apt-get install -y apt-transport-https
    - wget -q -O -  https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
    - sh -c 'echo "deb https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/app/sources.list.d/google.list'
    - apt get update && apt-get install -y google-chrome-stable
    - npm test:ci
```

## Validacion de la configuracion con GitLab Cl

Visualizar en `-/ci/lint`

Enlace de nuestro repositorio `https://gitlab.com/V-Juarez/platzi-devops-live`, para visualizar le agregamos al enlace `/-/ci/lint`

```bash
https://gitlab.com/V-Juarez/platzi-devops-live/-/ci/lint
```

## gitlab-ci.yml

El archivo `.gitlab-ci.yml` sirve para configurar el comportamiento de Gitlab CI en cada proyecto. En el archivo define la estructura y el orden de los pipelines y determina qué ejecutar con el Gitlab runner y qué decisiones tomar cuando condiciones específicas se cumplen (como cuando un proceso falla o termina exitosamente).

El archivo tiene muchas opciones de configuración, pero aquí nos vamos a enfocar en tres: image, stages y jobs.

La primera opción de configuración es `image`. image nos sirve para determinar qué imagen de Docker vamos a utilizar para ejecutar el runner. Hay que recordar que, en su nivel más básico, los trabajos de CI son simplemente automatización de scripts. Con esto en mente, tenemos que determinar qué ambiente necesita nuestro script para correr de manera exitosa. ¿Necesitas instalar dependencias desde NPM y ejecutar scripts de `package.json`? Entonces es muy probable que la imagen de Node te sirva como base. Quizá necesitas correr pruebas unitarias de una aplicación de Python e instalar dependencias desde PyPi; entonces deberías instalar la imagen de Python.

Al final del día, el keyword `image` nos permite “preinstalar” los paquetes que nuestro script necesitará para correr: desde sistema operativo y lenguajes de programación, hasta software específico como bases de datos.

Un último punto, `image` puede utilizarse de manera global o por cada job que ejecutemos. Es decir, si nuestro proyecto lo requiere podemos utilizar una imagen de Node para un job y otra de Ruby para otro.

```JavaScript
# gitlab-ci.yml
image: node:11.1.0

# ó

job1:
  image: python:3.7
…
```

Por su parte, los stages nos permiten definir las etapas que atravesará nuestro pipeline cuando corra. Cada stage (etapa) puede contener uno o más jobs que correrán en paralelo. Los stages permiten agrupar los jobs que pertenezcan a una categoría y permiten crear diversas dependencias entre cada job. Un ejemplo de un pipeline multietapa sería el siguiente:

Install -> Test -> Build -> Deploy

Dicho pipeline lo podríamos configurar en `.gitlab-ci.yml` de la siguiente manera:

```JavaScript
# gitlab-ci.yml

stages:
  - install
  - test
  - build
  - deploy

job1:
  stage: install
…
```

Es importante recordar que para configurar nuestros pipelines de manera correcta, tenemos que declarar el nombre de nuestras etapas como una lista bajo el keyword `stages` y luego indicar en cada job a qué etapa pertenece con el keyword `stage`.

Por último, los jobs son los encargados de ejecutar los scripts de automatización en cada etapa. En este sentido, un job puede tener casi cualquier nombre (aunque siempre debes intentar nombrar de acuerdo a la función de lo que estás nombrando) y debe contener un `script` que se ejecutará. Los jobs se ejecutan por los runners cuando se encuentran disponibles. Gran parte de la configuración adicional de los jobs está relacionada con las condiciones sobre las cuales se debe ejecutar y que artefactos exporta para otros jobs en el pipeline.

```javascript
# gitlab-ci.yml

job1:
  script:
    - echo “Hello, world”
    - npm install
    - echo “etc.”

…
```

Recuerda que el archivo `.gitlab-ci.yml` es fundamental para configurar nuestro CI, pero nuestro IDE no posee las reglas para determinar si su estructura es válida. De hecho, si tienes el tiempo, crear un plugin de VS Code o de VIM para estos efectos sería una gran idea. Por esto, es importante validar nuestra configuración con la herramienta de linting de Gitlab. La puedes encontrar en cada uno de tus proyectos si configuras la siguiente URL con tus datos.

[`/-/ci/lint`](https://gitlab.com/V-Juarez/platzi-devops-live/-/ci/lint)

Las tres configuraciones más importantes son image, stages y jobs.

  - **image:** es como una configuración inicial de lo que necesitamos instalar para correr nuestros jobs.

imagen, se puede usar a nivel global o por cada job.

  - **Stages:** es una forma de agrupar jobs que pueden correr en paralelo.

  - **job:** es una automatización de un script en su nivel más bajo.
Un job puede exportar artefactos para otros jobs.

## Gitlab pages

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)

GITLAB , nos provee de un servicio de Hosting Estático, a traves de “GITLAB PAGES”.

Se puede configurar a traves de gitlab-ci.yml

Debemos agregar un JOB especifico de nombre “pages”

Debemos mover todos nuestros archivos a desplegar a una carpeta de nombre “./public”

Los posibles nombres serian:

```bash
https://**<nombre de usuario>**.gitlab.io/**<nombre del projecto>**/

https://**<nombre del grupo>**.gitlab.io/**<nombre del projecto>**/

https://**<nombre del grupo>**.gitlab.io/**<nombre del subgrupo>**/**<nombre del proyecto>**/

https://**<nombre de usuario>**.gitlab.io (el proyecto se debe llamar <nombre de usuario>.gitlab.io )

https://**<nombre del grupo>**.gitlab.io (el proyecto se debe llamar <nombre del grupo>.gitlab.io )
```

## Implementando Gitlab pages

Gitlab Pages nos otorga ciertas funcionalidades como:

  - Hosting estático para servir nuestro website.
  - Integración con Gitlab CI.
  - Dominios personalizados.

**Crear issue**

![](https://i.ibb.co/y5nBFph/gitlab-merge.png "Crear issues")

**Crear merge request**

![](https://i.ibb.co/8bNK7yz/gitlab-pages.png "Merge Request")

Configuracion en los siguientes archivos

**package.json**

```javascript
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --configuration=$BUILD_CONFIGURATION", // Agregado
    "test": "ng test",
```

**.gitlab-ci.yml**

```javascript
stages:
  - install
  - test
  - build
  - deploy
  ...

build-app:
  stage: build
  variables:
    BUILD_CONFIGURATION: 'production'
  dependencies:
    - install-dependencies
  script:
    - npm run build
  artifacts:
    expire_in: 1hr
    paths:
      - dist/

pages:
  stage: deploy
  dependencies:
    - build-app
  script:
    - mkdir public
    - mv ./dist/platzi-devops/*  ./public/
  artifacts:
    paths:
      - public
  environment:
    name: production
  only:
    - branches
```

**Verificamos Pipelines**

![](https://i.ibb.co/z5jJ6PV/gitlab-pages1.png "Pipelines")

## ¿Qué es el Desarrollo Ágil?

El Desarrollo ágil de software viene del concepto básico de agilidad, la capacidad de responder a cambios.

En el “Agile Manifest” la biblia del desarrollo ágil eligen el término por su adaptabilidad.

Pero… ¿qué es el desarrollo ágil?
El desarrollo ágil abarca todo un set de frameworks y prácticas basadas en los 12 principios del manifiesto ágil, en los que tú eliges cuáles de estos principios son los mejores para tu desarrollo.

1. Nuestra principal prioridad es satisfacer al cliente a través de la entrega temprana y continua de software de valor.
2. Son bienvenidos los requisitos cambiantes, incluso si llegan tarde al desarrollo. Los procesos ágiles se doblegan al cambio como ventaja competitiva para el cliente.
3. Entregar con frecuencia software que funcione, en periodos de un par de semanas hasta un par de meses, con preferencia en los periodos breves.
4. Las personas del negocio y los desarrolladores deben trabajar juntos de forma cotidiana a través del proyecto.
5. Construcción de proyectos en torno a individuos motivados, dándoles la oportunidad y el respaldo que necesitan y procurándoles confianza para que realicen la tarea.
6. La forma más eficiente y efectiva de comunicar información de ida y vuelta dentro de un equipo de desarrollo es mediante la conversación cara a cara.
7. El software que funciona es la principal medida del progreso.
8. Los procesos ágiles promueven el desarrollo sostenido. Los patrocinadores, desarrolladores y usuarios deben mantener un ritmo constante de forma indefinida.
9.  La atención continua a la excelencia técnica enaltece la agilidad.
10. La simplicidad como arte de maximizar la cantidad de trabajo que se hace, es esencial.
11. Las mejores arquitecturas, requisitos y diseños emergen de equipos que se autoorganizan.
12. En intervalos regulares, el equipo reflexiona sobre la forma de ser más efectivo y ajusta su conducta en consecuencia.

## Gitlab autodevops

**Gitlab autodevops** es una solución que te permite generar un flujo de devops inmediato con la creación del proyecto que incluye todas las mejores prácticas.

**Features:**

  - Auto build
  - Auto test
  - Auto Code Quality
  - Auto SAST
  - Auto dependency scanning
  - Auto container scanning
  - Auto review apps
  - Auto Dast
  - Auto Deploy
  - Auto performance
  - Auto testing

**Prerequisitos**

  - Gitlab Runner
  - Kubernetes
  - Base domain
  - Prometheus.

- [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/)
- [GitLab | Auto DevOps](https://about.gitlab.com/stages-devops-lifecycle/auto-devops/)

    + **SAST** - Static Application Security Testing
    + **DAST** - Dynamic Application Security Testing
    + **IAST** - Interactive Application Security Testing

## Implementando GitLab autodevops

  [GitLab | Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/)

  [Adding EKS clusters](https://docs.gitlab.com/ee/user/project/clusters/add_eks_clusters.html)


## Habilitando autodevops

* Habilitar Autodevops - Creaun pipeline


# 5. Empaquetación

  ## Gitlab container registry

Gitlab container registry permite almacenar imágenes de Docker para uso posterior. En un caso tradicional, cada vez que el CI tiene un build exitoso, una nueva imagen se envía al container registry

- Permite almacenar im&aacute;gen de docker para posterior uso.
- En un caso de uso tradicional, cada vez que el CI tiene un `build` exitosi, una nueva im&aacute;gen se env&iacute;a al `container registry`.

[GitLab Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/index.html)

  ## Introducción a contenedores

Uno de los conceptos que han modificado de manera radical la forma en que desarrollamos software son los contenedores. Estoy seguro que si te mueves en el mundo de la tecnología has escuchado de Docker y Kubernetes. En esta clase vamos a investigar un poco más qué son los contenedores, cómo se comparan con otras tecnologías (como las máquinas virtuales) y cuáles son algunas de las opciones que tenemos para comenzar a utilizarlos.

Tanto los contenedores como las máquinas virtuales tienen un objetivo común: aislar a la aplicación y sus dependencias en una unidad que pueda ejecutarse en cualquier lugar. Más aún, tanto los contenedores como las máquinas virtuales eliminan la necesidad de proveer a nuestros servicios con hardware físico. Esto significa que se pueden utilizar de manera más eficiente los recursos computacionales que tenemos a nuestra disposición. La gran diferencia entre ambos es el enfoque arquitectónico que toman.

Una máquina virtual es esencialmente una emulación de una computadora con la capacidad de ejecutar procesos y programas. Las máquinas virtuales requieren de un hypervisor para poderse ejecutar sobre una host machine o directamente sobre “el metal”.

El hypervisor es un componente de software o hardware que permite a la host machine compartir recursos (RAM y procesadores) entre varias máquinas virtuales. Esto es importante, porque si el sistema está corriendo una aplicación de cómputo intensivo, se le pueden asignar más recursos que otras aplicaciones corriendo en el mismo sistema.

En este sentido, la máquina virtual que corre sobre un hypervisor se le conoce como la guest machine (máquina invitada). Esta guest machine contiene todo lo necesario para correr la aplicación (por ejemplo, binarios y librerías de sistema). También contiene toda una pila de hardware virtualizado (adaptadores de redes, almacenamiento, CPU, etc.). Desde el interior, la guest machine se comporta exactamente como una unidad de cómputo. Desde afuera, sabemos que está utilizando recursos compartidos que le otorga la host machine.

![](https://i.ibb.co/LrzZsNT/vm.webp)

A diferencia de las máquinas virtuales –que proveen virtualización de hardware–, los contenedores proveen virtualización al nivel del sistema operativo (al abstraer el user space).

A primera vista, los contenedores se parecen mucho a las máquinas virtuales. Por ejemplo, tienen un espacio dedicado al procesamiento, pueden ejecutar comandos como root, tienen interfaces de red privadas y direcciones IP, permiten configurar reglas de ruteo y iptables, tienen la posibilidad de montar file systems, etc.

La gran diferencia es que los contenedores comparten el kernel de la host machine con otros contenedores.

![](https://i.ibb.co/SwWWpdq/as.webp)

El diagrama anterior muestra que los contenedores sólo empaquetan el user space, y no el kernel o hardware virtual como lo hace una máquina virtual. Podemos ver que toda la arquitectura del sistema operativo se comparte entre todos los contenedores. Lo único que se crea cada vez son la aplicación y las librerías y binarios. Esto es lo que hace a los contenedores tan ligeros.
Existen muchas tecnologías para crear contenedores, pero la más importante hoy en día es Docker. Docker es un proyecto open source que utiliza tecnologías de Linux para crear la abstracción de un contenedor. Sin embargo, esta no es la única tecnología en el mercado. Empresas como Google, llevan más de una década utilizando contenedores. Otros contendientes son: Solaris Zones, BSD jails, LXC, etc. Entonces, ¿qué fue lo que hizo que Docker tomara tanta relevancia?

Lo primero, es la facilidad de uso. Docker permite que cualquier usuario (desarrolladores, sysadmins, etc.), pueda empaquetar su aplicación rápidamente en su computadora personal y la misma aplicación puede correr ahora en cualquier nube pública, datacenter privado o directamente en hardware.

Una segunda ventaja es su velocidad. Los contenedores son bastante ligeros (comparados con las máquinas virtuales), pues son simplemente ambientes contenidos corriendo en el kernel. Las imágenes de Docker se crean en segundos, mientras que las máquinas virtuales toman más tiempo pues necesitan inicializar un sistema operativo completo cada vez.

Por último, Docker cuenta con el Docker Hub lo que permite compartir imágenes con mucha facilidad. Docker Hub tiene miles de imágenes públicas que han sido creadas por la comunidad para satisfacer casi cualquier necesidad. Puedes escoger entre decenas de sistemas operativos, lenguajes de programación y librerías para utilizar como base en tu aplicación.

Los contenedores son importantes en el mundo de Gitlab pues nos permiten aprovechar integraciones con clusters de Kubernetes y Gitlab Container Registry, y utilizar AutoDevOps para crear flujos inmediatos de DevOps que podrían tomarnos semanas si hiciéramos una integración ad hoc. Estas herramientas asumen que utilizas Docker y contenedores para empaquetar tu aplicación.

**Aprender Docker**

# 6. Seguridad

  ## Introducción a DevSecOps

En el pasado, el equipo de Seguridad actuaba aislado y actuaba únicamente al final del proceso de desarrollo, un flujo de waterfall. Esto funcionaba porque eran ciclos de desarrollo que llevaban meses o años.

DevSecOps significa pensar en la seguridad de la aplicación a lo largo del proceso, desde el principio. Se trata de automatizar la seguridad e incluirla en el ciclo de vida de la aplicación (no más seguridad externa y en perímetros)

[What is DevSecOps?](https://www.redhat.com/en/topics/devops/what-is-devsecops)

- En el pasado, el equipo de Seguridad actuaba aislado y ejecutaba únicamente al final del proceso de desarrollo.
- No había problema, pues los ciclos de desarrollo duraban meses o años.
- DevSecOps significa pensar en la seguridad de la aplicación y la infraestructura desde el principio-
- DevSecOps se trata de automatizar la seguridad e incluirla en el ciclo de vida de la aplicación (no más seguridad externa y en perímetros)

**Herramientas gratuitas para la ejecución de pruebas de seguridad en mis pipelines, ya las he podido implementar con éxito en CI Tools como Gitlab CI, Jenkins y Azure DevOps:**

- Análisis de dependencias: OWASP Dependency Check
- Análisis estático de seguridad: Shift Left Scan
- Análisis de infraestructura de contenedores: Clair
- Análisis dinámico de seguridad: OWASP ZAP

  ## Firmas de seguridad

Permite identificar, sin lugar a dudas, de quién proviene un commit

  **GPG permite identificar**, sin lugar a dudas, de quién proviene un commit; añade una capa adicional de seguridad a Git para prevenir **““caballos de troya””**.

Gitlab despliega un **banner** junto a los commits para mostrar que dichos commits están 
verificados.

  **Generando la llave**

  ```bash
  #!/bin/bash

  # Generar la llave
  gpg --full-gen-key

  gpg --list-secret-keys --keyid-format LONG <your_email>

  # Exportar
  gpg --armor --export key_id # La linea con los iguientes parametros es la key_id ssb   /1F3233AABE#

  # Configura git
  git config --global user.signigkey key_id # 1F3233AABE#
  git config --global gpg.program gpg
  # o el programa que utilices
  ```

  ## Pruebas estáticas de seguridad

Las pruebas estáticas de seguridad analizan nuestros archivos buscando patrones inseguros de código.
  + Corre an&aacute;lisis est&aacute;tico en el c&oacute;digo.
  + Verifica que no eistan problemas potenciales de segurida en el c&oacute;digo de la aplicaci&oacute;n
  + Verifica que no existen secretos "hardcodeados".
  + Crean un reporte que es añadido como widget al merque request
  + Utilizan la imagen de Docker SAST de Gitlab
  Tipos de vulnerabilidades

- **Critical:** Existe un falla de código que da acceso de root o a los sistemas sin necesidad de ingeniería social. Debes atenderla de inmediato.
- **High:** Si se explota este tipo de vulnerabilidad estamos en riesgo de perder datos. Es difícil de explotar.
- **Medium:** El hacker va a tener que realizar trabajo adicional para obtener el acceso deseado.
- **Low:** No representan un riesgo de pérdida de datos.
- **Unknow:** No han sido clasificadas todavía y debes evaluarlas una por una.

  - [sast](https://gitlab.com/gitlab-org/security-products/sast)

  **GitLab sast .yml**

  ```javascript
  docker run \
  --interactive --tty --rm \
  --volume "$PWD":/code \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  registry.gitlab.com/gitlab-org/security-products/sast:${VERSION:-latest} /app/bin/run /code     
  ```

  ## Escaneo de contenedores

Utiliza `Clair` y `clair-scanner` para verificar los contenedores.

Si deseas omitir vulnerabilidades, las puredes incluir en el archivo `clair-whitelist.yml`.

Verificar que los paquetes instalados a nivel contenedor no tenga vulneraviilidades de seguridad.

**gitlab-ci.yml**

```javascript
iclude:
  template: Container-Scanning.gitlab-ci.yml
```

  - [10+ top open-source tools for Docker security](https://techbeacon.com/security/10-top-open-source-tools-docker-security)

  - [GitHub | Coreos/clair: Vulnerability Static Analysis for Container](https://github.com/quay/clair)

  - [GitHub | Klar](https://github.com/optiopay/klar)
  - [Container-Scanning.gitlab-ci.ym](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Security/Container-Scanning.gitlab-ci.yml)

  ## Escaneo de dependencias

El **Dependency scanning** analiza estáticamente las dependencias del proyecto para encontrar vulnerabilidades. Puede generar un reporte que se añade al merge request y utiliza la imagen de Docker Dependency Scanning de Gitlab

[GitLab | Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/index.html)

  - Analiza estáticamente las dependencias del proyecto para encontrar vulnerabilidades.
  - Genera un reporte que se añade al merge request.
  - Utiliza la imagen de Docker Dependency    Scanning de GitLab.

  ![](https://i.ibb.co/tYgsdYC/library-unboxing.png)

  **gitlab-ci.yml**

  ```javascript
  include:
    template: Dependency-Scanning.gitlab-ci.yml
  ```

  ## Pruebas dinámicas de seguridad

**DAST**

Las **pruebas dinámicas de seguridad** asumen que es un atacante externo y la aplicación es un blackbox para así correrle ciertas pruebas.

- Corre escaneos de seguridad en una aplicaci&oacute;n que ya est&aacute; en runtime.
- Utiliza OWASP ZAP proxy y ZAP baseline.
- Corre an&aacute;lisis pasivo.
- Genera un reporte que puede ser verificado en el merge request.

- [OWASP Zed Attack Proxy Project - OWASP](https://owasp.org/www-project-zap/)

**gitlab-ci.yml**

```javascript
include:
  template: DAST.gitlab-ci.yml
```

+ [GitLab CI/CD include examples](https://docs.gitlab.com/ee/ci/yaml/includes.html)
- [Dynamic Application Security Testing (DAST)](https://docs.gitlab.com/ee/user/application_security/dast/)


  ## Gitlab security dashboard

Agurpa los reportes de seguridad del "Default branch" en una sola vista.

Permite acceder rápidamente a los riesgos detectados y aceptados para el ambiente de producción.

Permite marcar una volnerabilidad como inválida o no aplicable.

Genera víncula a los reportes de seguridad externos para entender mejor una volnerabiilidad.

>  “Nosotros, no nada mas tiramos código, no nada más manejamos infraestructura, nos encargamos de la seguridad también”

# 7. Distribución

  ## Continuous Delivery (CD)

![](https://i.ibb.co/k5tffWw/develop.jpg)

- [CI/CD concepts](https://docs.gitlab.com/ee/ci/introduction/)

![](https://i.ibb.co/QvqwgrG/auto-devops.png)

  ## Ambientes

Los **Ambientes** se suelen utilizar para determinar si el código escrito cumple con las expectativas del negocio y los requisitos impuestos con antelación para que así las personas puedan aprobarlos o no.

  - Permiten realizar pruebas en diferentes ambientes antes de enviar el código a nuestros usuarios.
  - Se integran con Gitlab CI para hacer realidad el Continuous Deployment.
  - Gitlab lleva el historial de todos los deployments que se han realizado a un ambiente específico.
  - Permiten verificar que el Deployment process se encuentre intacto y da la oportunidad de hacer QA

    **Tenemos algunos tipos como:**

    - Estáticos
    - Dinámicos
    - Protegidos

  - Podemos tener ambientes estáticos, como desarrollo o producción; dinámicos, como un ambiente para un branch; protegido, como producción.
  - Para definir una ambiente en gitlab se realiza a través del archivo .gitlab.yml y se agrega un keywork environment, url y si serán automáticos o manuales.

La variable de entorno REPLICAS, puede crear varias instancias (pod) en todos o en un ambiente específico.

**gitlab-ci.yml**

```javascript
deploy_production:
  stage: deploy
  environment:
    name: production
    url: https://production.com
  when: manual
```

- [Specifying variables when running manual jobs](https://docs.gitlab.com/ee/ci/jobs/index.html#specifying-variables-when-running-manual-jobs)

  ## Review apps

  - Las **Reviews apps** permiten ver los cambios de un feature branch al activar un ambiente para ejecutar el código con cada merge request.

  ![](https://i.ibb.co/Lzv30B5/deploy-review-apps.png)

  - Los diseñadores y los product managers pueden ver los cambios sin necesidad de levantar un ambiente local en sus computadoras
  - Cuando el merge request se aprueba y el feature branch se borra, se detiene el review app y se destruye la infraestructura
  - Completamente integrado con GitlabCI y merge request.

  ![](https://i.ibb.co/yh1bd3K/dev.png)

  * Las review apps generar un ambiente completo por cada branch.
  * Para generar las review apps se hace a través de dos jobs en `.gitlab.yml`, un job donde creamos y deployamos los ambientes y otro donde destruimos el ambiente.
  *Las review apps nos sirven para pruebas y también nos sirven para mostrar nuestro avance.

- [Review Apps | GitLab](https://docs.gitlab.com/ee/ci/review_apps/)

**gitlab-ci.yml**

```javascript
review:
  stage: review
  script: 
    - # script para crear el ambiente y jacer deploy environment.
    name: review/SCI_BUILD_REF_NAME
    url: http://SCI_BUILD_REF_SLUG.$APP$_DOMAIN
    on_stop: stop_review
  only: 
    - branches
  except:
    - master  

stop_review:
  stage: review
  script:
    - # script para destuir el ambiente 
  variables:
    GIT_STRATEGY: none
  when: manual
  environment:
    name: review/$CI_BUILD_REF_NAME
    action: stop
```

  ## Estrategias de Distribución

Uno de los temas que más ha cambiado en los últimos años en el mundo de la Ingeniería de Software es la velocidad a la que se distribuyen cambios en nuestros aplicaciones. Los equipos de desarrolladores distribuyen cambios más temprano y más rápido que antes. Mientras que antes los ciclos naturales tomaban meses o años, hoy en día los cambios suceden varias veces al día. Los beneficios son claros:

  + El tiempo requerido para comercializar productos o servicios se disminuye drásticamente.
  + Los clientes obtienen el valor del producto en menos tiempo.
  + La retroalimentación de los clientes también fluye a velocidades aceleradas, lo que permite al equipo de desarrollo iterar de manera más rápida.
  + La moral del equipo aumenta, pues pueden ver el fruto de su trabajo en producción.

Sin embargo, no todo es felicidad. Con este tipo de estrategias aceleradas, existe un mayor riesgo de introducir cambios que pueden afectar negativamente la experiencia del usuario; o peor aún, traer downtime a nuestro sistema. Por eso, es importante incluir prácticas que permitan minimizar el riesgo de que lo anterior se materialice.

**Big bang deployment**

Como lo sugiere su nombre, los despliegues de Big Bang, actualizan todas las partes del sistema en una sola barrida. Esta estrategia encuentra sus orígenes en los días en que el software se distribuía en medios físicos y el cliente lo instalaba manualmente en su máquina.

Este tipo de despliegues requieren que el negocio ejecute una enorme cantidad de pruebas durante una fase específica del desarrollo, antes de aprobar el despliegue. Este tipo de pruebas, normalmente se asocian con el modelo waterfall en el que el desarrollo se ejecuta en etapas secuenciales.

Las aplicaciones modernas tienen la ventaja de poderse actualizar automáticamente, en el cliente o el servidor, por lo que este tipo de estrategias han sido casi completamente abandonadas por equipos que siguen las metodologías ágiles.

**Rolling deployment**

Los **rolling deployments**, o despliegue en fases, tienen la ventaja de mitigar algunas de las desventajas de los big bang deployments. Esto es así, porque disminuye el riesgo de downtime al desplegar la aplicación a lo largo del tiempo.

Es importante resaltar que el despliegue consiste en reemplazar una versión de la aplicación con otra en fases; de tal manera que existe un tiempo en el que ambas aplicaciones pueden existir. En el caso de un despliegue a Kubernetes, por ejemplo, el reemplazo consiste en destruir el contenedor con la versión anterior y descargar la última versión de la imagen desde el container registry en el cual la alojemos.

Y es aquí donde se alcanza a ver otra ventaja de contenerizar nuestra aplicación: que los rollbacks resultan ser muy sencillos, cuando antes (en el modelo del Big Bang) resultaban imposibles. Hacer rollback es tan sólo destruir de nueva cuenta el pod, y descargar la versión previa (o cualquier otra versión que queramos) desde nuestro container registry.

**Blue Green deployment**

Esta estrategia, también conocida como A/B deployment, consiste en tener dos ambientes de producción paralelos (uno llamado blue y el otro llamado green) en el cual se despliegan las nuevas versiones de las aplicaciones de manera alternativa. Es decir, si blue tiene instalada la V1 de nuestra aplicación, entonces green tendrá instalada la V2, y cuando se despliegue se la siguiente versión (V3) se utilizará el ambiente blue, nuevamente. ¿Dónde se desplegará el ambiente V4? En green, por supuesto; y la secuencia alternativa continúa indefinidamente.

Una de las ventajas de esta estrategia es que facilita realizar un rollback a la versión anterior, de manera sencilla, cuando nuestra aplicación no se encuentra habilitada para trabajar dentro de contenedores. En caso de que exista una falla en la nueva versión, simplemente se rutea al ambiente previo.

Es importante mencionar, que únicamente el ambiente de la capa de la aplicación se replica. Las bases de datos, al igual que el almacenamiento de archivos binarios (fotos, imágenes, vídeos, por ejemplo), son compartidas por ambos ambientes.

Existe otra modalidad de los despliegues blue green que se conoce como canary deployment. El canary deployment en lugar de rutear todo el tráfico de inmediato, se utiliza una aproximación incremental. Es decir, se comienza a rutear a la nueva versión progresivamente. Por ejemplo, 25% 50% 75% 100% ó 33% 66% 100%, etc.

Una de las ventajas de adoptar esta estrategia es que se puede probar la nueva versión con un subconjunto de los usuarios para determinar si se encuentra estable, y en caso de confirmarse, se rutea todo el tráfico al ambiente green o blue.

**Distribución en Gitlab**

En Gitlab, cuando utilizamos AutoDevOps, podemos configurar nuestra estrategia de despliegue a través de opciones predeterminadas en el UI o a través de variables de ambiente de Gitlab CI.

Las variables que podemos configurar son las siguientes:

  - **STAGING_ENABLED** activa el ambiente staging cuando se le asigna el valor 1.
  - **CANARY_ENABLED** activa el ambiente canary cuando se le asigna el valor 1.
  - **INCREMENTAL_ROLLOUT_MODE** define la forma en el que el despliegue incremental se realizará.
Acepta los valores `manual` y `timed`.

Este es el resultado de la algunas combinaciones de configuración:

Sin la declaración de `INCREMENTAL_ROLLOUT_MODE ni STAGING_ENABLED`.

![](https://i.ibb.co/fMbvyLF/sta.webp)

Sin la declaración de `INCREMENTAL_ROLLOUT_MODE`, pero con `STAGING_ENABLED` asignado el valor de `1`.

![](https://i.ibb.co/nPx0NMy/sta1.webp)

Con `INCREMENTAL_ROLLOUT_MODE` en modo manual, y sin `STAGING_ENABLED.`

![](https://i.ibb.co/XtLcSfp/sta2.webp)

Con `INCREMENTAL_ROLLOUT_MODE` en modo manual, y `STAGING_ENABLED` asignado el valor de `1…`

![](https://i.ibb.co/V9907TJ/sta3.webp)

  Para modificar la opción de despliegue a través de la UI, navega a `Settings > CI/CD > Auto DevOps` y selecciona una de la siguientes opciones:

  - **Continuous deployment to production:**

    Habilita el despliegue continuo del branch master al ambiente de producción.

  - **Continuous deployment to production using timed incremental rollout:**

    Asigna el valor timed a la variable de Gitlab CI `INCREMENTAL_ROLLOUT_MODE`. Esto significa que el despliegue se realizará cada vez que existe un cambio en el branch master, pero de manera incremental en lapsos de 5 minutos.

  - **Automatic deployment to staging, manual deployment to production:**

    Asigna el valor de 1 a la variable `STAGING_ENABLED` y el valor de `manual` a la variable `INCREMENTAL_ROLLOUT_MODE`. El resultado es que la rama master se despliega de manera continua al ambiente de staging, y se activan las acciones manuales para el despliegue a producción.

  ## Feature Flags

Los feature flags son una técnica poderosa, que permite a los equipos modificar el comportamiento de su sistema sin necesidad de modificar código o realizar un despliegue. Esto aumenta la velocidad del equipo sin sacrificar la estabilidad del sistema.

Sin embargo, no todo es color rosa: los feature flags introducen gran complejidad a nuestro sistema, y si no somos cuidadosos, podemos construir un sistema en el cual sea imposible escribir pruebas unitarias (por la explosión combinatoria de posibilidades que los feature flags introducen). Por eso, como regla general, debemos mantener los feature flags en un mínimo.

Ahora sí, a entrarle de lleno. Para trabajar correctamente con los feature flags, es indispensable reconocer que existen diversas categorías, y el tratamiento que le damos a cada una debe ser distinto.

**Tipos de Feature Flags**

**La primera categoria se conoce como Release Flags**. Este tipo de bandera nos permite implementar una estrategia de Continuous Delivery, dónde los diferentes features se activan de manera manual e independiente. Este tipo de estrategia es importante cuando se requiere lanzar una funcionalidad compleja que requiere estar concluida al 100% para ser lanzada o cuando se necesita coordinar un evento externo junto con el despliegue de la funcionalidad (por ejemplo, cuando el feature se lanza en coordinación con una campaña de marketing).

**La segunda categoría son los Experiment Flags**. Este tipo de flag se utiliza cuando nuestra aplicación permite la realización de experimentos A/B. Cada usuario de la aplicación es segmentado en cohortes y se muestran diferentes funcionalidades dependiendo del cohorte al que pertenezcan. Este tipo de flags tiene un periodo de vida muy corto, pues una vez que se ha determinado el resultado del experimento, se opta por una u otra versión, y se estandariza el uso en el sistema. También, es importante tener duraciones cortas porque cuando se corren diversos experimentos A/B de manera simultánea, existen altas posibilidades que los experimentos interfieran el uno con el otro, eliminando así la validez estadística del resultado.

Por su parte, los **Ops Flags**, permiten crear switches que facilitan controlar el comportamiento del sistema en runtime. Existen ocasiones, por ejemplo, en el que los sistemas reciben cargas inusuales y es necesario optimizar los recursos que tenemos disponibles para servir nuestra aplicación. En este caso, a través de feature flags es posible deshabilitar temporalmente servicios no críticos (como quizá un proceso que utiliza mucha memoria o procesamiento), para después habilitarlos una vez que la carga se haya normalizado.

Por último, los **Permission Flags** nos permiten habilitar funcionalidades para usuarios específicos de nuestra aplicación. Un ejemplo de lo anterior acontece cuando una compañía decide hacer dogfooding para probar internamente funcionalidades antes de habilitarlas para todos los clientes. En este caso, se puede utilizar una lista de Ids de usuarios para determinar si es necesario mostrar la funcionalidad o no.

**Feature Flags en Gitlab**

Gitlab ofrece la funncionalidad de manejar feature flags directamente desde la interfaz del proyecto. Detrás de bambalinas, Gitlab utiliza el proyecto open source Unleash. Unleash tiene dos componentes: un servidor (que permite definir y administrar feature flags), y librerías para el cliente para que pueda consultar el estado de un flag específico. Gitlab implementa el servidor, y deja que los desarrolladores implementen la parte del cliente, según su lenguaje de programación.

Para crear un feature flag, es necesario realizar lo siguientes pasos:

Navega al menú **Operations > Feature Flags**
Da click en el botón que dice **New Feature Flag**
Escoge un nombre y una descripción para tu feature flag
Y da click en el botón **Create feature flag**

![](https://i.ibb.co/j4Gzxjp/flag.webp)

Un punto importante son los Environment Specs, los cuales permiten activar el feature en diferentes ambientes (por ejemplo, staging y producción). También se puede habilitar el ambiente `*` que aplica para todos los ambientes. Gitlab toma por default el ambiente más específico.

![](https://i.ibb.co/zP3XvYc/flag1.webp)

Por último, para generar la integración del lado del cliente es necesario utilizar una de las múltiples librerías que ofrece Unleash. Para configurarlo, es necesario obtener los datos de configuración desde la interfaz de Gitlab y añadirlos al momento de inicializar nuestra librería. Para eso, navega a **Operations > Feature Flags** y da click en el botón Configure. En ese momento aparecerá un popup con la información que necesitas.

![](https://i.ibb.co/5vnzYHV/flag4.webp)


[Feature Flags | GitLab](https://docs.gitlab.com/ee/operations/feature_flags.html)

  ## Rollback

**Rollback** es un mecanismo que nos permite regresar a la versión anterior o donde estés seguro de que la aplicación sigue funcionando. Esto con tan solo un click.

  - Gitlab ofrece la funcionalidad de ““re deploy”” para correr cualquier pipeline que haya sido ligado a ambiente.
  - Permite automatizar el regreso a ambientes libres de bugs.
  - Permite que los devops podamos dormir.

  - [Environments and deployments](https://docs.gitlab.com/ee/ci/environments/index.html)

  - [Track, version, and deploy database changes](https://www.liquibase.org)

# 8. Monitoreo

## ¿Por qué monitorear?

Cuando el codebase era relativamente estático, operations no se preocupaba mucho del monitoreo, pero ahora con la llegada de DevOps y con cambios muy frecuentes al ambiente, el monitoreo se vuelve indispensable.

Verificar los logs individuales, cuando existen tantas piezas móviles, no es una estrategia operacional efectiva.

**Best practices:**

  - Monitorea todos los ambientes(incluyendo review apps).
  - Familiarizate con las métricas ““normales”” de tu aplicación.
  - Automatiza el monitoreo.
  - Comparte los datos con el resto de la organización.
    – Reportes.
    – Accesos privilegiados.
  - Monitorea aplicación, infraestructura y equipo. 

  [How devops changes monitoring](https://www.infoworld.com/article/3231666/how-devops-changes-monitoring.html)

  > Los seres humanos ajustamos nuestro comportamiento basado en las métricas que nos miden. cualquier cosas que midas va a incentivar a la persona a maximizar la puntuación en dicha métrica. Lo que mides es lo que obtienes. Punto - Daniel Ariely

## Métricas de desempeño (performance metrics)

Las **métricas de desempeño** nos pueden dar una idea de qué tanto está creciendo la infraestructura y la capacidad de respuesta para nuestros clientes.

Nos ayudan a medir el rendimiento.
Nos dan una idea de cómo afinar un workload a una query.

  - Las métricas de desempeño, nos dan una idea de cuales son los cuellos de botella que tenemos en la aplicación y cual es desempeño actual que tiene la aplicación con la infraestructura actual.
  - Cuando Gitlab esta integrado con prometheus, estas métricas se muestran en Operations/ metrics.


    - [Prometheus](https://prometheus.io/docs/prometheus/latest/installation/)
    - [Monitoring GitLab with Prometheus](https://docs.gitlab.com/ee/administration/monitoring/prometheus/)

## Métricas de salud (health metrics)

- Las métricas de salud nos permiten entender si nuestros dispositivos o infraestructura están a punto de fallar. 
- Nos ayuda a decidir si debemos aumentar o disminuir nuestros recursos

## Metricas de equipo

- Cycle analytics.
- Lenguajes de programación utilizados
- Commits por día del mes, de la semana y hora
- Pipelines exitosas, fallidas y tiempo de ejecución
- Contribuciones por persona
- Git timeline

![](https://i.ibb.co/zQQFMJn/metrica.png)

## Rastreo de errores

- [SENTRY](https://sentry.io/welcome/)

![](https://i.ibb.co/xzM86jP/root.png "Rastreo de errores")

# 9. Conclusiones

  ## ¿Por qué desarrollar con Gitlab?

  ¡Felicidades por haber llegado hasta aquí!

Has podido entender cómo la automatización del proceso de desarrollo te da una ventaja competitiva en un mercado difícil, entendiste por qué devops es una filosofía y una sería de herramientas que te permiten crecer.

**Nunca pares de aprender.**


