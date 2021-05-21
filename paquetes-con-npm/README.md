<h1>Gestión de Dependencias y Paquetes con NPM</h1>

<h3>Oscar Barajas Tavares</h3>

<h1>Tabla de Contenido</h1>



# 1. Introducción a NPM

## Acerca de NPM, paquetes y módulos

¿Qué es NPM (node package manager) ? Es un gestor de paquetes, el más popular que tiene JavaScript, donde encontrarás una gran cantidad de recursos para poder implementar en tus proyectos. También vas a poder crear tus propios paquetes y compartirlos con toda la comunidad.

- `npm` significa node package manager

- [npm | build amazing things](https://www.npmjs.com/)
- [npm | build amazing things](https://www.npmjs.com/)
- [GitHub - platzi/curso-npm: Repositorio del curso de NPM](https://github.com/platzi/curso-npm)

# 2. Instalación

## Windows

### Comprobar version de Node y NPM

Una vez descargado y instalado nodejs, comprueba si se ha instalado correctamente ejecutando en una terminal (en Windows pulsa Control + R y escribe cmd ) el comando:

```bash
node -v
```

Si la salida del comando es la versión de nodejs es que se ha instalado correctamente, comprueba también que tienes npm ejecutando:

```bash
npm -v
```

### Cómo actualizar NPM

Si quieres actualizar NPM a la última versión simplemente tienes que lanzar este comando:

```bash
npm install -g npm
```

O si quieres actualizar NPM en MAC:

```bash
sudo npm install -g npm
```

También puedes actualizar NPM usando tu gestor de paquetes de la distribución de Linux si lo has instalado así.

- [Node.js](https://nodejs.org/es/)

## Mac

Para instalar en Mac

Debes de ir a [Node.js](https://nodejs.org/es/)
Descargar la última versión de Node.

Para comprobar que está instalado

Abre la terminal y escribe

```bash
npm -v
```

Esto nos da la versión que tenemos.

Para instalar la última versión

```bash
sudo npm install npm@latest -g
```

# 3. Configuración

## Iniciar un proyecto

Primero abrimos nuestra terminal y nos posicionamos donde guardamos nuestros archivos.
Podemos crear una carpeta para nuestro proyecto con el comando

`mkdir project_name` nos movemos dentro de la carpeta con `cd project_name` ya dentro de la carpeta podemos iniciar:

Primeros pasos
--
- `git init:` Para tener el control de cambios y versiones en nuestro proyecto
- `npm init:` con este comando vamos a crear nuestro archivo de configuración del proyecto, el `package.json`
- 
Luego nos saldrá lo siguiente

- `package name:` el nombre de nuestro proyecto, generalmente es el nombre de la carpeta
- `version:` version con la que iniciaremos el proyecto, generalmente aparece 1.0.0
- `description:` descripcion breve del proyecto
- `entry point:` punto de acceso a nuestro proyecto
- `test command:` comando para gestionar los test
- `git repository:` repositorio de github u otro servicio
- `keywords:` palabras claves del proyecto
- `author:` `nombre del autor y < correo > **license`: licencia que tendrá el proyecto

2da opción (para hacer package rápido)
--

Escribimos 

```bash
npm init -y 
```

Generará un `package.json` vacio para que lo configuremos más adelante.

3ra opción (configuramos algunos elementos)
-- 

Escribimos en nuestra terminal

```bash
npm set init.author.email "your@email"
npm set init.author.name "your name"
npm set init.license "license name"
npm init -y
```

Crea un `package.json` con los datos que seleccionamos.

- [package.json en el sitio de npm](https://docs.npmjs.com/files/package.json.html)
- [Licencia de software - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Licencia_de_software)

## Instalación de dependencias

`Carpeta node_modules:` Aquí es donde se van a instalar los módulos que tú estás agregando a tu proyecto. Esta carpeta es importante para que tu proyecto funcione, pero no debe de ser enviada a ningún repositorio y debemos ignorarla apenas se crea.
Para ignorarla se crea un archivo .gitignore y escribimos: node_modules/
Versión resumida para instalar:

```bash
npm i date-nfs -D
```

Demonio: Servicio que corre en segundo plano en el sistema

`-–save | -S :` Este documento que vas a instalar dentro del proyecto es necesario para vivir en producción. Hay que tener cuidado con los paquetes que instalamos, cuando es a producción y cuando no lo es.

`-–save-dev | -D :` Este documento que vamos a instalar solo es necesario en nuestro entorno local o en el de desarrollo. Es importante no mandar dependencias a producción ni omitir algunas que deban de estar en producción.

Listar paquetes instalados de forma global

```bash
npm list -g --depth 0
```

```bash
# Instalar el apaquet
npm install moment

# Instalar como  desarrollado 
npm install date-fns --save-dev

# Abreviacion de commnand install = -i | --save = -S | --save-dev = -D
npm i date-fns -D
npm i moment -S

# listar los paquetes

npm list -g --depth 0


npm install eslint -D

# link para colaborar con los creadores
npm fund
```

Requerimos que se registre la versión exacta en el `package.json`

```bash
npm i -D -E moment
```

## Instalación de dependencias con force

Cuando queremos ver el output de una dependencia sin proceder con su instalación ejecutamos.

```bash
npm install name_package --dry-run
```

Instalar la última versión y desde los servidores de npm:

```bash
# Instalacion forzada
npm install webpack -f

npm install webpack --force

# Como reinstalar todos los paquetes y dependencias
# Este comando toma el archivo package.json e intala todo lo que tiene en el.
npm install

# Instalar una versión exacta de un paquete:
# Instalacion de una version en particular
npm install json-server@0.15.0
```
Al momento que instalamos el primer paquete se nos creara una carpeta `node_modules` se instalan lo modulos a nuestro proyecto y sera necesaria para que este funcione, pero no debe ser enviada a ningun repositorio ni a nuestro proyecto a produccion y por eso debemos ignorarla al nos mas se cree y para ello creamos un archivo `.gitignore` en la carpeta raiz y dentro de este escribimos

```js
// Ignora los modulos
node_modules
```


- [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

## Actualizar y eliminar paquetes


## Package lock y el uso los símbolos ^ y ~


## Ejecutar tareas


## Solución de problemas


## Seguridad

# 4. Publicar un paquete

## Crear un paquete para NPM


## Publicar un paquete en NPM


## Paquetes privados


## Cierre del curso