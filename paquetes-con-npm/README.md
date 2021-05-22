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

### Actualizar paquetes

Revisar que paquetes disponen de nuevas versiones

```bash
npm outdate
```
Para ver un output más detallado

```bash
npm outdate --dd
```
Actualizar los paquetes que no están en la ultima versión

```bash
npm update
```
Actualizar un paquete especifico

```bash
npm install json-server@latest
```
### Eliminar paquetes

Eliminar un paquete de node_modules y del archivo `package.json`

```bash
npm uninstall json-server
```
Desinstalar un paquete de todo node_modules pero no del archivo `package.json`

```bash
npm uninstall webpack --no-save
```

<img src="https://i.ibb.co/vHwdtNs/npmjs.jpg" alt="npmjs" border="0">

- [npm - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)

## Package lock y el uso los símbolos ^ y ~

<img src="https://i.ibb.co/DwkD6gV/wheelbarrel-no-tilde-caret-white-bg.webp" alt="wheelbarrel-no-tilde-caret-white-bg" border="0">

Símbolos, también tenemos:

```js
< : Versión menor a la indicada.
<= : Versión menor o igual a la indicada.
> : Versión mayor a la indicada.
>= : Versión mayor o igual a la indicada.
Los cuales se utilizan así:

"dependencies": {
    "json-server": ">0.15.1",
    "moment": ">=2.26.0",
    "date-fns": "<2.14.0",
     "react": "<=16.12.0"
}
```

`^ =` Si mantenemos el caret dentro de la configuración de nuestro package estamos garantizando que cuando realicemos una actualización o tengamos un cambio que podamos realizar, vamos a hacer actualización de los cambios menores y de los parches o bug fixes.
Para quedarnos en una sola versión eliminamos el caret.

`~ =` Establece que vamos a recibir actualizaciones o cambios solamente de los cambios que son parches o bug fixes.

Nombre en español de los símbolos utilizados

  - `^` Acento circunflejo
  - `~` Virgulilla

## Ejecutar tareas

Los scripts NPM: Son comandos que podemos establecer para poder ejecutar desde la consola. Estos nos van a dar una serie de salidas según sea el caso.

Podemos crear la cantidad de scripts que necesitemos. Estos scripts van a poder correr de forma nativa dentro de nuestra terminal.

Crear tres scripts.

```js
"dev": "webpack-dev-server --mode development",
"build": "webpack --mode production",
"start": "serve ./dist -s -l 8080"
```

- `dev:` Modo desarrollo.
- `build:` Compila todo y me crea un directorio dist.
- `start:` Toma el directorio dist y lanzo un servidor en modo producción.

### Los scripts

Los scripts npm son comandos que npm ejecutará cuando se le llame con los argumentos adecuados. El poder y la sensación de esto es NO instalar los paquetes npm de manera global contaminando su entorno.

La diferencia entre las secuencias de comandos pre-reconocidas y personalizadas se basa en la palabra de run entre las etiquetas, las secuencias de comandos custom deberán run entre npm y el nombre de la secuencia de comandos

En función de esto, podemos diferenciar y crear diferentes tareas o scripts para ejecutar con npm.

Dado el siguiente ejemplo en el archivo package.json :

```js
{
  "name": "MyApp",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "mocha --recursive ./tests/",
    "test:watch": "npm run test -- -w",
    "start": "nodemon --inspect ./app.js",
    "build": "rm -rf ./dist/ && gulp build"
  }
}
```
Podemos ver diferentes tareas a ejecutar:

- `npm test` bien ya que es un script pre-reconocido
- `npm run test` bien y`a que es una forma válida de ejecutar un script npm
npm run test:watch también funcionaría, y se llama prueba de ejecución de npm dentro de sí mismo
- `npm run build` Antes de ejecutar gulp build elimine la carpeta dist que se encuentra en el directorio (suponiendo que esté en Linux o que se reconozca el comando `rm` )

## Solución de problemas

Cuando estés trabajando con proyectos que están usando NPM te vas a topar con una gran cantidad de posibles errores que vas a tener. Estos errores pueden ser desde la configuración, pueden ser desde el sistema operativo, espacios, no haber configurado correctamente tu GitHub, no haber establecido bien los datos del package, haber dejado un typo u algún elemento extraño dentro de esta configuración así como una serie de errores que pueden generarse, que no están ligados directamente a NPM.

- Para poder activar la opción de verbose (es decir que nos muestre mayor información de lo que esta haciendo el comando)

```bash
npm run [comando] --dd
```

- Cuando npm nos lance algún error es recomendable ir al archivo de logs que nos muestra

<img src="https://i.ibb.co/D45phVC/nodeerror.webp" alt="nodeerror" border="0">

En caso de que nuestros archivos de node_module no estén bien instalados o tengamos una versión anterior lo que podemos hacer es lo siguiente:

```bash
npm cache clear --force
```
Para verificar que verdaderamente se borro podemos usar

```bash
npm cache verify
```

Uno de los errores que podemos tener es tener algún valor corrupto en node_module, o tambien que la instalación no este completa de los paquetes que hemos instalado, para ello podemos eliminar el paquete con el siguiente comando:

```bash
rm -rf node_modules  #este comando eliminar la carpeta 
```

Otra alternativa para eliminar de forma segura una carpeta es instalando el siguiente paquete:

```bash
sudo npm install -g rimraf
```

Ahora podemos ejecutar el siguiente comando para eliminar node_module

```bash
rimraf node_modules 
```

Ahora podemos volver a instalar nuestro paquetes

```bash
npm install
```


## Seguridad

> Recomendable primero intentar solucionar con npm audit fix y lo que no se solucione lo actualizamos de a uno.

Podemos revisar las vulnerabilidades de nuestro proyecto con:

```bash
npm audit
```

En caso de tener vulverabilidades, se recomienda usar el comando:

```bash
npm audit fix
```

Y en caso de que esto no lo solucione, podemos ir actualizandolos de uno en uno.

---

La importancia de la seguridad en nuestro poryecto es por nuestra parte. No debe de incluir ningun software malisioso.

Cuando descargamos algo tenemos que analizar lo que contiene, NPM nos ayuda con una herramienta para hacer esto. Con el ya visto:

```bash
npm installl
```

Nos marcara y actualizara todos los paquetes para verificar que todo este instalado correctamente. Pero tenemos otro comando para poder auditar nuestro proyecto con:

```bash
npm audit
```

Donde podremos ver las vulnerabilidades que tendremos en nuestros paquetes.

Podemos generar un documento JSON con las informacion de esta auditoria mas detallada con:

```bash
npm audit --json
```

Para poder instalar o darle un update a una dependecia que tiene un problema critico podemos utilizar

```bash
npm update Paquete --depth 2
```

Donde actualizara los paquetes para solucionar estas vulnerabilidades. Para poder solucionar TODOS LOS DETALLES sera con:

```bash
npm audit fix
```

Esto solucionara las mayoria de las vulnerabilidades.

> Find and fix security vulnerabilites [Develop Fast. Stay Secure.](https://snyk.io/)

# 4. Publicar un paquete

## Crear un paquete para NPM

Ejecutar el comando para saber donde estoy ubicado

```bash
pwd
mkdir random-messages
cd random-messages/
git init
npm init
```

Se crea el archivo `index.js` en la carpeta src

```js
// Se declara el arreglo
const messages = [
    "David",
    "Diana",
    "Ana Maria",
    "Isabela",
    "Antonio",
    "Norma"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

// Exportar como un módulo

module.exports = { randomMsg }
```

Se debe crear una carpeta bin donde se crea el archivo `global.js` (Configuración que se necesita)

```js
#!/usr/bin/env node
// se va ejecutar dentro de bash

//Variable que llama la funcion que exportamos
let random = require('../src/index.js')

//Ejecuto la funcion
random.randomMsg()
```

Modifico el `package.json` y coloco la configuración de bin que necesito

```json
  "license": "MIT",
  "bin": {
    "random-msg": "./bin/global.js"
  },
  "preferGlobal": true
```
## Publicar un paquete en NPM

**Publicar paquete**

```bash
- npm link
```

Nos crea una referencia a este paquete en la carpeta global (`.npm-global`), hacia los servidores de npm de forma natural.

```bash
- random-msg
```

ejecutamos nuestro paquete, que este se encuentra de forma global

```bash
- npm install -g /mnt/c/Users/USUARIO/Documents/Projects/random-messages
```

Nos ayudara a instalar las actualizaciones que hagamos en el proyecto hasta npm

```bash
- npm adduser
```

Hacer login en la terminal para conectarme a npm

```bash
- npm publish
```

Nos permite leer la configuración del `package.json` y con ello establecer las configuración a npmjs

Solución al error “403 Forbidden - PUT http://registry.npmjs.org/random-messages - You do not have permission to publish “random-messages”. Are you logged in as the correct user?”

En el archivo `package.json` cambiar el atributo `name` a un nombre original, puesto que el profe ya subió su repositorio con el nombre de `random-messages`, por lo que no podemos tener nosotros un proyecto del mismo nombre en NPM 😉

- [Packages and modules | npm Documentation](https://docs.npmjs.com/packages-and-modules/)
- [npm | build amazing things](https://www.npmjs.com/)

## Paquetes privados

[README.md](https://gist.github.com/gndx/1b2c8482049c6d3b521dffcf33337558)


Para poder enviar el comando:

```bash
npm version patch/minor/major
```

Deben primero dejar limpio el working directory de git, es decir deben hacer un commit de los cambios que se realizaron o revertir cambios.

Este error puede ocurrir cuando se añade en el `package.json` el repositorio de git, como se modifica el archivo es necesario hacerle commit antes de enviar el version patch.

---

Ya quedó disponible el paquete en el repositorio para que cualquier persona lo utilice. Pero se debe cumplir un estándar.

Contar con un `README.md` Preferiblemente en inglés.
Cambiar la descripcion del `package.json` 

```json
"description": "I don't know what to write for the first commit."
```

Colocar las pruebas para la revion del paquete. 

```jsco
"test": "echo \"Error: no test specified\" && exit 1". 
```

Colocar más pruebas y se recomienda este curso https://platzi.com/cursos/jest/.
Adicionar mi repositorio a GitHub

git remote add origin https://github.com/DavidBaezDbz/Estudio/tree/master/GestionDeDependenciasYPaquetesConNPM/random-messages

Podría ser necesario inicializar el repositorio
```bash
git init
```
Volver a ejecutar npm init y aparecerá en el repositorio.

```json
"repository": {
    "type": "git",
    "url": "git+https://github.com/DavidBaezDbz/Estudio/tree/master/GestionDeDependenciasYPaquetesConNPM/random-messages.git"
  },
  "bugs": {
    "url": "https://github.com/DavidBaezDbz/Estudio/tree/master/GestionDeDependenciasYPaquetesConNPM/random-messages/issues"
  },
  "homepage": "https://github.com/DavidBaezDbz/Estudio/tree/master/GestionDeDependenciasYPaquetesConNPM/random-messages#readme"
```

Se va a modificar la version https://docs.npmjs.com/cli/version

Cambio mayor 

```bash
npm version major
```

Cambio menor 

```bash
npm version minor
```

Parche a nuestro paquete 

```bash
npm version patch
```

Como nuestro cambio es solo un parche en el paquete se ejecuta 

```bash
npm version patch
```

Se debe volver a publicar el paquete 

```bash
npm publish
```

Acuérdense que hay un repositorio para empresas en NPM y poder colaborar remotamente. Hay que revisar por qué ya NPM es parte de GitHub.

- [funny-commit - npm](https://www.npmjs.com/package/funny-commit)
- [Curso de Unit Testing con Jest en React](https://platzi.com/cursos/jest/)

## Cierre del curso