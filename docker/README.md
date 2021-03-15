# Fundamentos de Docker
##### Guido Vilariño

- [1. Introducción](#1.-Introducción)
  - [Bienvenida al curso](#Bienvenida-al-curso)
  - [Las tres áreas en el desarrollo de software profesional](#Las-tres-áreas-en-el-desarrollo-de-software-profesional)
  - [Virtualización](#Virtualización)
  - [Preparando tu entorno de trabajo](#Preparando-tu-entorno-de-trabajo)
  - [[Bonus] Play with Docker](#[Bonus]-Play-with-Docker)
  - [Qué es y cómo funciona Docker](#Qué-es-y-cómo-funciona-Docker)
- [2. Contenedores](#2.-Contenedores)
  - [Primeros pasos: hola mundo](#Primeros-pasos:-hola-mundo)
  - [Conceptos fundamentales de Docker: contenedores](#Conceptos-fundamentales-de-Docker:-contenedores)
  - [Comprendiendo el estado de Docker](#Comprendiendo-el-estado-de-Docker)
  - [El modo interactivo](#El-modo-interactivo)
  - [Ciclo de vida de un contenedor](#Ciclo-de-vida-de-un-contenedor)
  - [Exponiendo contenedores](#Exponiendo-contenedores)
- [3. Datos en Docker](#3.-Datos-en-Docker)
  - [Bind mounts](#Bind-mounts)
  - [Volúmenes](#Volúmenes)
  - [Insertar y extraer archivos de un contenedor](#Insertar-y-extraer-archivos-de-un-contenedor)
- [4. Imágenes](#4.-Imágenes)
  - [Conceptos fundamentales de Docker: imágenes](#Conceptos-fundamentales-de-Docker:-imágenes)
  - [Construyendo una imagen propia](#Construyendo-una-imagen-propia)
  - [El sistema de capas](#El-sistema-de-capas)
- [5. Docker como herramienta de desarrollo](#5.-Docker-como-herramienta-de-desarrollo)
  - [Usando Docker para desarrollar aplicaciones](#Usando-Docker-para-desarrollar-aplicaciones)
  - [Aprovechando el caché de capas para estructurar correctamente tus imágenes](#Aprovechando-el-caché-de-capas-para-estructurar-correctamente-tus-imágenes)
  - [Docker networking: colaboración entre contenedores](#Docker-networking:-colaboración-entre-contenedores)
- [6. Docker compose](#6.-Docker-compose)
  - [Docker Compose: la herramienta todo en uno](#Docker-Compose:-la-herramienta-todo-en-uno)
  - [Subcomandos de Docker Compose](#Subcomandos-de-Docker-Compose)
  - [Docker Compose como herramienta de desarrollo](#Docker-Compose-como-herramienta-de-desarrollo)
  - [Compose en equipo: override](#Compose-en-equipo:-override)
- [7. Docker Avanzado](#7.-Docker-Avanzado)
  - [Administrando tu ambiente de Docker](#Administrando-tu-ambiente-de-Docker)
  - [Deteniendo contenedores correctamente: SHELL vs. EXEC](#Deteniendo-contenedores-correctamente:-SHELL-vs.-EXEC)
  - [Contenedores ejecutables: ENTRYPOINT vs CMD](#Contenedores-ejecutables:-ENTRYPOINT-vs-CMD)
  - [El contexto de build](#El-contexto-de-build)
  - [Multi-stage build](#Multi-stage-build)
  - [Docker-in-Docker](#Docker-in-Docker)
- [8. Cierre](#8.-Cierre)
  - [Cierre del curso](#Cierre-del-curso)

# 1. Introducción

## Bienvenida al curso

  Docker empaqueta software en “contenedores” que incluyen en ellos todo lo necesario para que dicho software se ejecute, incluidas librerías. Con Docker se puede implementar y ajustar la escala de aplicaciones de una forma rápida en cualquier entorno con la garantía de que el código se ejecutará.

![](https://i.ibb.co/184m1jF/docker.png "Containerized Applications")

* **Cheatsheet Docker**

  ![](https://i.ibb.co/rmH5s26/docker-cli.webp)

## Las tres áreas en el desarrollo de software profesional

* Problemas de desarrollo
* Dependencias
* Entorno de Ejecuci&oacute;n
* Equivalencias con entorno productivo
* Servicios externos

  **Problems when building:**

* Development dependencies (packages)
* Runtime versions
* Equivalence of development environments (code sharing)
* Equivalence of production environments(go to production)
* Versions / compatibility(integration of other services e.g.: databases)

**Problems when distributing:**

  * Different build generations
  * Access to production servers
  * Native vs. distributed execution
  * Serverless

  **Problems when executing:**

  * Application dependencies
  * Operating System Compatibility
  * Availability of external services
  * Hardware Resources

  **Docker allows:**

* Build, distribute and run your code anywhere without worrying.

## Virtualización

  A diferencia de una máquina virtual, que es una abstracción del hardware y emula toda una computadora (o servidor), un contenedor es una abstracción del software y éste puede empaquetar el código, el runtime necesario y las dependencias de una aplicación

  ![](https://i.ibb.co/LxmfhMb/docker.png)    

  **Virtual Machines**

A virtual machine is a computer file or software that is created within a computing environment called the host. It is capable of running applications like a separate computer, creating operating system backups, and more. Some problems with VMs are the administration and maintaining cost, the weight of files, the repetition of a lot of files (Operating System).

  **Containers**

Docker mitigates the previous problems by the usage of containers. Containers refer to lightweight, executable package of a piece of software. It contains all the libraries, configuration files, dependencies, and other parts to operate the application. Docker is no more than a running process, with some added features that keep it isolated from the host and from other containers.

  **Containers and Virtual Machines**

A container shares the kernel of the host machine with other containers. It runs a discrete process, taking no more memory than any other executable. By contrast, a virtual machine runs a full operating system with virtual access to host resources through a hypervisor.

## Preparando tu entorno de trabajo

  **Descargar docker**

  [![](https://i.ibb.co/C6hJYxf/docker.png)](https://www.docker.com)

  ## [Bonus] Play with Docker

[![](https://i.ibb.co/Bjx1tg5/play.png)](https://labs.play-with-docker.com)


- Problemas con el [Hyper-v](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v) en Windows.

  ## Qué es y cómo funciona Docker

![](https://i.ibb.co/kc5B5SG/arc.png "Arquitectura de Docker")

**Componentes DENTRO del circulo de Docker:**

- **Docker daemon:** Es el centro de docker, el corazón que gracias a el, podemos comunicarnos con los servicios de docker.
- **REST API:** Como cualquier otra API, es la que nos permite visualizar docker de forma “gráfica”.
- **Cliente de docker:** Gracias a este componente, podemos comunicarnos con el corazón de docker (Docker Daemon) que por defecto es la línea de comandos.

**Dentro de la arquitectura de Docker encontramos:**

1. **Contenedores:** Es la razón de ser de Docker, es donde podemos encapsular nuestras imagenes para llevarlas a otra computadora, o servidor, etc.
2. **Imagenes:** Son las encapsulaciones de x contenedor. Podemos correr nuestra aplicación en Java por medio de una imagen, podemos utilizar Ubuntu para correr nuestro proyecto, etc.
3. **Volumenes de datos:** Podemos acceder con seguridad al sistema de archivos de nuestra máquina.
4. **Redes:** Son las que permiten la comunicación entre contenedores.

**Registros Docker**

Los registros Docker (Docker Registry) son los que almacenan imágenes Docker. El Docker Hub es un registro público que almacena múltiples imágenes, algunas de ellas certificadas por Docker.

**La arquitectura Docker** 

Es una arquitectura cliente-servidor, dónde el cliente habla con el servidor (que es un proceso daemon) mediante un API para poder gestionar el ciclo de vida de los contenedores y así poder construir, ejecutar y distribuir los contenedores.

El hecho de que el cliente se comunique con el servidor mediante el API hace que el cliente y servidor puedan estar en la misma máquina comunicándose mediante sockets de UNIX o bien en máquinas diferentes comunicándose mediante un end-point en la red.

![](https://i.ibb.co/3f0091j/host.webp "Arquitectura docker")

Docker está escrito en GO, aunque también se aprovecha de muchas de las capacidades del kernel Linux, como namespaces, cgroups, y el sistema de ficheros UnionFS.

Dentro de los elementos de la Arquitectura Docker encontramos dos, por un lado el elemento principal de la arquitectura Docker que es el Docker Engine y por otro el Registro Docker.

**Docker Engine**

El **Docker Engine** es la aplicación cliente-servidor que implementa Docker. Esta aplicación tiene tres componentes:

1. **Servidor**, es el proceso principal de Docker y que funciona como proceso demonio del sistema. Es el encargado de gestionar los objetos que hay en Docker como imágenes, contenedores, redes y volúmenes. Se representa mediante el comando dockerd.

2. **API Rest**, es un API Rest que nos permite acceder a las capacidades del servidor y ejecutar comandos sobre él. Podemos utilizar un simple curl para acceder a las capacidades del API de Docker.

3. **Cliente**, es la línea de comandos representada por el comando docker. El cliente habla vía el API Rest para poder ejecutar los comandos. Es lo que utilizaremos para poder ir gestionando el ciclo de vida de nuestras imágenes y contenedores.

# 2. Contenedores

  ## Primeros pasos: hola mundo

- [Docker Cheat Sheet](https://collectednotes.com/barckcode/docker-cheat-sheet)

```console
$ docker run hello-world
```
- **docker run** comadno para levantar un contenedor

- **hello-world** nombre del contenedor

**Nota** En caso de que el contenedor no exista en el docker local, lo buscará en el repositorio de docker, lo descargará y ejecutará

  ## Conceptos fundamentales de Docker: contenedores

**Que es un contenedor?**

- Es una agrupación de procesos.

- Es una entidad lógica, no tiene el limite estricto de las máquinas virtuales, emulación del sistema operativo simulado por otra más abajo.

- Ejecuta sus procesos de forma nativa.

- Los procesos que se ejecutan adentro de los contenedores ven su universo como el contenedor lo define, no pueden ver mas allá del contenedor, a pesar de estar corriendo en una maquina más grande.

- No tienen forma de consumir más recursos que los que se les permite. Si esta restringido en memoria ram por ejemplo, es la única que pueden usar.

- A fines prácticos los podemos imaginar cómo maquinas virtuales, pero NO lo son. Máquinas virtuales livianas.

- Docker corre de forma nativa solo en Linux.

- Sector del disco: Cuando un contenedor es ejecutado, el daemon de docker le dice, a partir de acá para arriba este disco es tuyo, pero no puedes subir mas arriba.

- Docker hace que los procesos adentro de un contenedor este aislados del resto del sistema, no le permite ver más allá.

- Cada contenedor tiene un ID único, también tiene un nombre.

  ## Comprendiendo el estado de Docker

![](https://i.ibb.co/8rgrRCX/coman-docker.webp "Comandos Docker")

  ## El modo interactivo

```bash
Comandos:
$ docker run ubuntu # (corre un ubuntu pero lo deja apagado)

$ docker ps -a # (lista todos los contenedores)

$ docker -it ubuntu # (lo corre y entro al shell de ubuntu)
# -i: interactivo
# -t: abre la consola

cat /etc/lsb-release # (veo la versión de Linux)
```

![](https://i.ibb.co/rcxNTx4/carbon.webp "Modo interactivo docker")

  ## Ciclo de vida de un contenedor

Salir de ejecuci&oacute;n de `docker run -it ubunut`, con `exit` apaga el proceso y el contenedor se detiene.

`docker run --name alwaysup -d ubuntu tail -f /dev/null` ejecuta docker.
`docker exec -it alwaysup bash` abre la shell.

`docker inspect --format '{{.State.Pid}}' alwaysup` detienen el contenedor.

Otra manera de detener el contenedor con: `docker stop alwaysup`

[![](https://i.ibb.co/Bjx1tg5/play.png)](https://labs.play-with-docker.com)

  ## Exponiendo contenedores

![](https://i.ibb.co/tQGdGgC/expo.webp "Cammand docker and nginx")

Al comando 
`docker run -d --name proxy -p 8080:80 nginx` no se le agrega los par&eacute;ntesis.

# 3. Datos en Docker

  ## Bind mounts

![](https://i.ibb.co/JsXd7mG/bind.webp "Bind Mounts")


**Matar el contenedor**

```bash
$ docker rm -f db 


# Bind mounts
➜  dockerdata docker run -d --name db -v ~/Documents/Learning_platzi/DevOps/docker/dockerdata/mongodata:/data/db mongo
```

  ## Volúmenes

![](https://i.ibb.co/D7hc0zV/volumen.webp "Volumen en docker")

**Crear un Volumen**

```bash
$ docker run -d --name db --mount src=dbdata,dst=/data/db mongo
```

```bash
#Crear un volumen:
docker volume create [nombre_del_volument]

#Listar los volúmenes
docker volume ls

# Montamos el contenedor especificándole el volumen entre la coma en src y dst no poner espacio. Puede que nos de un error docker: invalid refence format

docker run -d --name db --mount src=dbdata (que_queremos_montar),dst=(destino) /data/db mongo

# Entramo en el cliente de mongo
docker exec -it db bash

mongo

# Borramo el contenedor anteriormente creado
docker rm -f db

# Montamos otro contenedor con el mismo nombre, mismo lugar (src,dst)
docker run -d --name db --mount src=dbdata,dst=/data/db mongo

docker exec -it db bash

mongo
```
  ## Insertar y extraer archivos de un contenedor

![](https://i.ibb.co/v1XntHy/dockerarea.png "Host")

- **Host:** Donde Docker esta instalado.
- **Bind Mount:** Guarda los archivos en la maquina local persistiendo y visualizando estos datos (No seguro).
- **Volume:** Guarda los archivos en el area de Docker donde Docker los administra (Seguro).
- **TMPFS Mount:** Guarda los archivos temporalmente y persiste los datos en la memoria del contenedor, cuando muera sus datos mueren con el contenedor.

**Comandos:**

```bash
$ touch prueba.txt # (creo un archivo en mi máquina)

$ docker run -d --name copytest ubuntu tail -f /dev/null # (corron un ubuntu y le agrego el tail para que quede activo)

$ docker exec -it copytest bash # (entro al contenedor)

$ mkdir testing #(creo un directorio en el contenedor)

$ docker cp prueba.txt copytest:/testing/test.txt #(copio el archivo dentro del contenedor)

$ docker cp copytest:/testing localtesting #(copio el directorio de un contenedor a mi máquina) con “docker cp” no hace falta que el contenedor esté corriendo.

```

# 4. Imágenes

  ## Conceptos fundamentales de Docker: imágenes

**Profundizando en el concepto de imágen**

Es bueno profundizar un poco más en el concepto de una imágen en Docker para entender su función, para posteriormente poder realizar una por nuestra cuenta desde 0, cuando no haya una imágenque cumpla con nuestras necesidades.

**Imágen**
Una imágen contiene distintas capas de datos (distribución, diferente software, librerías y personalización).

Podemos llegar a la conslusión, que una imágen se conforma de distintas capas de personalización, en base a una capa inicial (base image), la dicha capa, es el más puro estado del SO.

La siguiente ilustración nos mostraría la representación gráfica, del concepto de una imágen en Docker.

![](https://i.ibb.co/ZxNbb4C/container.png "Imágen en Docker")

Si observamos, partimos desde la base del SO, y vamos agregando capas de personalización hasta obtener la imágen que necesitamos:

1. Distribución debian
2. Se agrega el editor emacs
3. Se agrega el servidor Apache
4. Se agregan los permisos de escritura para la carpeta `/var/www de Apache`

Hay que tener en cuenta, que todo parte del Kernel de Linux, en caso de utilizar alguna distrubución de Linux

Historico de una imágen
Podemos observar la historia de nuestra imágen, con el siguiente comando

```shell
$ docker history [imagen]
```

De esta manera podemos ver las capas de personalización que fuerón agregadas, para la construcción de la imágen que conocemos.

![](https://i.ibb.co/3WtcYwL/img.webp "Imagenes docker")

```bash
$ docker pull ubuntu:20.04
```

**carbon | Snapshot:** utilzar carbon para **snapshots** - c&oacute;digo en imágen para agregar en documentaci&oacute;n.

[![](https://i.ibb.co/HDgyHzb/carbon.png "Carbon")](https://carbon.now.sh)


- **Crear cuenta en dockerhub:**

[![](https://i.ibb.co/sK67Cdq/docker-hub-logo.png)](https://hub.docker.com)

  ## Construyendo una imagen propia

Se crea un directorio: `mkdir images`

se accede al directorio: `cd imagenes`
se crea un archivo llamado `Dockerfile`

```bash
touch Dockerfile
```

**Contenido del Dockerfile:**

```docker
FROM ubuntu:latest 
RUN touch /ust/src/hola-platzi.txt        # este comando se ejecutará en tiempo de build
```

Se crea una imágen, se le pasa el contexto de build:

```shell
docker build -t ubuntu:platzi
```

Iniciamos una conexión por terminal al contenedor de ubuntu:  

```bash
docker run -it ubuntu:platzi
```

para loguearse en docker hub, se ejecuta lo siguiente y se ponen las claves correspondientes:  `docker login`

Para poder publicar nuestro contenedor, es necesario cambiar el tag ubuntu, dado que el mismo ya existe como un contenedor oficial y no tenemos permisos para modificarlo.

```bash
docker tag ubuntu:platzi miusuario/ubuntu:platzi
```

Una vez hecho el cambio ya podremos subirlo a una cuenta de docker hub, comando para hacer la publicación de nuestra imágen en docker hub

```bash
docker push miusuario/ubuntu:platzi
```

![](https://i.ibb.co/sF38RKk/caps.webp)

![](https://i.ibb.co/pPkbyjR/retag.png)

  ## El sistema de capas

Lecutra Dockerfile de **Ubuntu:20.04**

[![](https://i.ibb.co/C6hJYxf/docker.png "Dockerfile")](https://github.com/tianon/docker-brew-ubuntu-core/blob/ec931883d8292935b62ac40757287491e6ff467e/groovy/Dockerfile)

**Comandos:**

```bash
$ docker history ubuntu:platzi #(veo la info de como se construyó cada capa)

$ dive ubuntu:platzi #(veo la info de la imagen con el programa dive)
```

Instalar **dive**

[![](https://i.ibb.co/x5Zv5LP/git.png "dive")](https://github.com/wagoodman/dive)

***Documentacion de docker commit***

[![](https://i.ibb.co/Bjx1tg5/play.png "docker commit")](https://docs.docker.com/engine/reference/commandline/commit/)

# 5. Docker como herramienta de desarrollo

  ## Usando Docker para desarrollar aplicaciones

**Comandos:**

```bash
$ git clone https://github.com/platzi/docker

$ docker build -t platziapp . #(creo la imagen local)

$ docker image ls #(listo las imagenes locales)

$ docker run --rm -p 3000:3000 platziapp #(creo el contenedor y cuando se detenga se borra, lo publica el puerto 3000)

$ docker ps #(veo los contenedores activos)
```

**Detener / eliminar el contenedor:**

**Abrir una nueva terminar :**

```bash
➜ docker ps -a

➜ docker stop #( pero me dejo indicando un proceso zombi) ?

➜ top #( busque el ID del proceso zombi = docker ) en la misma consola

➜ kill el N°ID del proceso.
```

**Explicación del Dockerfile**

![](https://i.ibb.co/TvndB6x/filedocker.webp)

**Comandos de la clase**

![](https://i.ibb.co/WGYvHdz/desarrollo.webp)

  ## Aprovechando el caché de capas para estructurar correctamente tus imágenes

  ![](https://i.ibb.co/02hSCNY/cache.webp)

```bash
docker run --rm -p 3000:3000 -v ~/Documents/Learning_platzi/DevOps/docker/imagenes/docker/index.js:/usr/src/index.js platziapp
```

  ## Docker networking: colaboración entre contenedores

  ![](https://i.ibb.co/bd2Vbwr/network.webp)


**Docker networking**

- Listar nuestras redes (host, bridge, none)

```bash
docker network ls
```

- Crear una red

```bash
docker network create  --attachable platzinet
```

- Inspeccionar la red que creamos

```shell
docker network inspect
```

- Creamos el contenedor de mongo

```bash
# Eliminamos el contenedor
docker rm -f db

# Creamos el contenedor
docker run -d --name db mongo
```

- Conectar contenedor de mongo a nuestra red creada

```bash
docker network connect platzinet db
```

- Correr nuestra aplicacion conectada a nuestra red

```bash
➜ nano Dockerfile

#####Dockerfile#####
FROM node:14

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.js"]
####################
```

```shell
docker build -t platziapp . # Carganos los archivos

docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test platziapp # Correr la aplicacion en localhost 3000

docker network connect platzinet app # Conectar a la red el contenedor app
```

# 6. Docker compose

  ## Docker Compose: la herramienta todo en uno

- [Install Docker Compose | Docker Cocumentation](https://docs.docker.com/compose/install/)

- [Laravel con Docker Compose | Ubuntu20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-20-04-es)

**Using Compose is basically a three-step process:**

- Define your app’s environment with a Dockerfile so it can be reproduced anywhere.

- Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.

- Run docker-compose up and Compose starts and runs your entire app.

**Estructura de docker-compose**

Docker compose nos ayuda utilizar docker con una estructura declarativa y facilita la gestión.

```bash
nano docker-compose.yml

######docker-compose.yml#######

version: "3.8"
services:
  app:
    image: platziapp
    environment:
      MONGO_URL: "mongodb://db:27017/test"
    depends_on:
      - db
    ports:
      - "3000:3000"

  db:
    image: mongo

###############################

docker-compose 

docker-compose up -d
```

En el apartado de networks pones el mismo nombre en todas las redes algo como esto

![](https://i.ibb.co/6gz5xpY/network1.png)

Con eso todos los docker compose van a usar la misma red de nombre Platzi

**Detener contenedores**

```shell

docker rm -f app

docker rm -f db
```

**Comandos utiles de docker-compose**

![](https://i.ibb.co/s9SBDyz/comand.webp)

  ## Subcomandos de Docker Compose

- listar contenedores con docker y docker-compose

```bash
docker ps
docker-compose ps -a
```

- Inspeccionamos la red creada por `docker-compose` (nombre fue creado por el nombre de tu carpeta donde estan tu archivo docker-compose.yml)

```bash
docker network inspect docker_default
```

- Ver los logs de todos los servicios

```bash
docker-compose logs
docker-compose logs app
docker-compose logs db
docker-compose logs -f app
docker-compose logs -f app db
```

- Correr un comando en un contenedor, ingresamos al modo interactivo

```bash
docker-compose exec app bash
```

- Limpiar, es decir eliminar contenedores, redes creadas

```bash
docker-compose down
```

  ## Docker Compose como herramienta de desarrollo

**C O M A N D O S**

![](https://i.ibb.co/s9SBDyz/comand.webp)

**Actualizacion de `docker-compose.yml`**

Compose nos permite crear imagenes a partir del los ficheros **dockerfile** que tengamos definidos.

**Fichero modificado**

```docker
version: "3.8"

services:
  app:
	# crea una imagen con los ficheros del directorio actual.
    build: .
    environment:
      MONGO_URL: "mongodb://db:27017/test"
    depends_on:
      - db
    ports:
      - "3000:3000"
	# Sección para definir los bindmount.
    volumes: 
			#<local path>:<container path> # el directorio "<.>" actual   se montará en "/usr/src" en el contenedor.
      - .:/usr/src
			# indica que ficheros debe ignorar
      - /usr/src/node_modules
	# Permite pasarle un comando a ejecutar al servicio app.
    command: npx nodemon  index.js

  db:
    image: mongo
```

**Comandos de clase**

```docker
docker-compose build  #" hace un build de los servicios en el directorio actual".
					 						## El nombre de la imagen suele ser <path>_<Service name>:latest
docker-compose build <service name> #" Vuelve a crear la imagen del servicio app"
docker-compose up -d # inicia los servicios, y crea una imagen nueva en caso de que detecte cambios
```

**Cómo crear tu aplicación con Django en contenedor de Docker**

[![](https://i.ibb.co/yPJCqVs/django.png)](https://platzi.com/blog/django-docker/)

  ## Compose en equipo: override

Problema en la colaboracion con docker-compose.override.yml, sirve para personalizar o hacer pequeños cambios propios para nuestro ambiente sobre el original sin alterar ese archivo.

```bash
touch docker-compose.override.yml   # Crear documento .ovirride.yml

nano docker-compose.override.yml
###### Editar docker-compose.override.yml######
```

```docker
version: "3.8"
services:
  app:
    build: .
    environment:
      UNA_VARIABLE: "Hola platzi"
```

- Editar docker-compose

```bash
nano docker-compose.yml
```

```docker
######docker-compose.yml######

version: "3.8"
services:
  app:
    image: platziapp
    environment:
      MONGO_URL: "mongodb://db:27017/test"
    depends_on:
      - db
    ports:
      - "3000:3000"
  db:
    image: mongo

#######################################
```

```bash
docker-compose up -d  #   Corremos el stack
```

- Crear dos instancias de app, es decir dos contenedores

```Docker
nano docker-compose.yml
######docker-compose.yml######

version: "3.8"
services:
  app:
    image: platziapp
    environment:
      MONGO_URL: "mongodb://db:27017/test"
    depends_on:
      - db
    ports:
      - "3000-3001:3000"
  db:
    image: mongo

#######################################
```

```shell
docker-compose up -d --scale app=2

docker-compose ps
```
- [Making sense of Docker Compose overrides](https://medium.com/it-dead-inside/making-sense-of-docker-compose-overrides-efb757460d64)

# 7. Docker Avanzado

  ## Administrando tu ambiente de Docker

**Comandos**

```bash
# Comandos:
$ docker ps -a # (veo todos los contenedores de mi máquina)

$ docker container prune # (borra todos los contenedores inactivos)

$ docker rm -f $(docker ps -aq) # (borra todos los contenedores que estén corriendo o apagados)

$ docker network ls # (lista todas las redes)

$ docker volume ls # (lista todos los volumes)

$ docker image ls # (lista todas las imágenes)

$ docker system prune #(borra todo lo que no se esté usando)

$ docker run -d --name app --memory 1g platziapp # (limito el uso de memoria)

$ docker stats # (veo cuantos recursos consume docker en mi sistema)

$ docker inspect app # (puedo ver si el proceso muere por falta de recursos)

$ docker rm -f app # Detiene el contendedor corriendo
```

![](https://i.ibb.co/9YypSjS/Addocker.webp)

  ## Deteniendo contenedores correctamente: SHELL vs. EXEC

**Comandos:**

```bash
$ docker build -t loop . # (construyo la imagen)

$ docker run -d --name looper loop # (corro el contenedor)

$ docker stop looper # (le envía la señal SIGTERM al contenedor)

$ docker ps -l # (muestra el ps del último proceso)

$ docker kill looper # (le envía la señal SIGKILL al contenedor)

$ docker exec looper ps -ef # (veo los procesos del contenedor)
```

![](https://i.ibb.co/b2RRTsY/detenerdocker.webp)

Archivo `docker/avanzado/Dockerfile`

```bash
# SHELL vs. EXEC
FROM ubuntu:trusty
COPY ["loop.sh", "/"]
CMD /loop.sh" # shell -> mata el contenedor de manera forzada, el cual crea errores

# EXEC
FROM ubuntu:trusty
COPY ["loop.sh", "/"]
CMD ["/loop.sh"]  # exec mata el contendor de la forma correcta
```

- [LF vs CRLF](https://qvault.io/2020/06/18/how-to-get-consistent-line-breaks-in-vs-code-lf-vs-crlf/#:~:text=At%20the%20bottom%20right%20of,has%20the%20correct%20line%20breaks.)

  ## Contenedores ejecutables: ENTRYPOINT vs CMD

Comandos:

```bash
$ docker buils -t ping . # (construyo la imagen)

$ docker run --name pinger ping <hostname> # (ahora le puedo pasar un parámetro, previamente tengo que agregar el ENTRYPOINT en el Dockerfile)

$ docker mr -f <contenedor>
```

Archivo `docker/avanzado/ping/Dockerfile`

```bash
# CMD
FROM ubuntu:trusty
CMD ["/bin/ping", "-c", "3", "localhost"]

# ENTRYPOINT
FROM ubuntu:trusty
ENTRYPOINT ["/bin/ping", "-c", "3"]
CMD ["localhost"]
```

- [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

There **can only be one CMD instruction in a Dockerfile**. If you list more than one CMD then only the last CMD will take effect.

The main purpose of a CMD is to **provide defaults for an executing container**. These defaults can include an executable, or they can omit the executable, in which case you must specify an **ENTRYPOINT** instruction as well.

If CMD is used to provide default arguments for the ENTRYPOINT instruction, both the CMD and ENTRYPOINT instructions **should be specified with the JSON array format**.

  ## El contexto de build

**Configurarcion**

```bash
cd platzi/docker

nano Dockerfile

########Dockerfile########
FROM node:14

COPY [".", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
##########################
docker build -t prueba .

npm install
```

- Archivo: **.dockerignore** para que agrege archivos carpetas que no quieres que se considere en el build

```bash
nano .dockerignore

########.dockerignore########
*.log
.dockerignore
.git
.gitignore
build/*
Dockerfile
node_modules
npm-debug.log*
README.md
##########################

docker build -t prueba .

docker run -d --rm --name app prueba

docker exec -it app bash

# ls -lac
```

```shell
Comandos:
$ docker build -t prueba . # (creo la imagen)

$ docker run -d --rm --name app prueba # (corro el contenedor)

# En el archivo .dockerignore puedo poner todo lo que no quiero que copie del contexto de build

$ docker exec -it app bash # (entro al contenedor y verifico que no se haya copiado lo que está en el .dockerignore)
```

- [.dockerignore file](https://docs.docker.com/engine/reference/builder/#dockerignore-file)

  ## Multi-stage build

- [¿Cuáles son las desventajas de usar Docker?](https://es.quora.com/Cu%C3%A1les-son-las-desventajas-de-usar-Docker?share=1)

```docker
# Define una "stage" o fase llamada builder accesible para la siguiente fase
FROM node:12 as builder
# copiamos solo los archivos necesarios
COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src
# Instalamos solo las dependencias para Pro definidas en package.json
RUN npm install --only=production

COPY [".", "/usr/src/"]
# instalamos dependencias de desarrollo
RUN npm install --only=development

# Pasamos los tests
RUN npm run test
## Esta imagen esta creada solo para pasar los tests.

# Productive image
FROM node:12

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src
# instar las dependencias de PRO
RUN npm install --only=production

# Copiar  el fichero de la imagen anterior.
# De cada stage se reutilizan las capas que son iguales.
COPY --from=builder ["/usr/src/index.js", "/usr/src/"]
# Pone accesible el puerto
EXPOSE 3000

CMD ["node", "index.js"]
### En tiempo de build en caso de que algún paso falle, el build se detendrá por completo.
```

```shell
docker build -t prodapp -f build/production.Dockerfile .

docker image ls

docker run -d --name prod prodapp 

docker exec -it prod bash

# ls -lac
# docker ps
# exit
```

- Experimentamos editando el archivo test/test.js para que falle, comprobamos que fallara el layer falla y se detiene el build

```bash
docker build -t prodapp -f build/production.Dockerfile .
```

  ## Docker-in-Docker

Un socket en sistemas Unix se utiliza para comunicación entre procesos. El docker deamon es el que tiene acceso a las imagenes y containers y este se comunica con la maquina host a traves del socket. Lo que estamos haciendo aquí es comunicar a un docker deamon en un contenedor a el docker deamon de la maquina host a traves del socket.
Sobre los usos de docker-in-docker… la verdad es que es recomendable no usarlo nunca porque trae problemas técnicos muy precisos que relaciona a como esta implementado docker. El responsable de docker-in-docker creo un articulo donde habla al respecto:

- [Docker-in-Docker for your CI or testing environment?](https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/#:~:text=The) 

primary purpose of Docker,into your Jenkins container instead.

Si quieres saber mas sobre como usar docker-in-docker y usar mejores alternativas te recomiendo este articulo:

- [Secure Docker-in-Docker with System Containers](https://blog.nestybox.com/2019/09/14/dind.html)

En resumen: Solo usa docker-in-docker como sandbox, para experimentar con contenedores e imágenes. Y si quieres algo parecido a docker-in-docker mejor usa sysbox.

Si queremos tener docker dentro de un contenedor, mas llamado docker-in-docker. Compartiendo el socket de nuestro local a nuestro contenedor que tendra docker.

```bash
docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock docker:19.03.12 
# docker ps
# docker run -d --name app prodapp
```

- Comprobamos desde otra terminal

```bash
docker ps
```

- Correr dive siendo un contenedor que explora el estado de docker.

```bash
docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -v $(which docker):/bin/docker wagoodman/dive:latest prodapp
```

# 8. Cierre
## Cierre del curso

![](https://i.ibb.co/v4RmtPS/fundamentos-de-docker.jpg)