# Configuración de Entorno de Desarrollo en macOS

#### Ricardo Celis


- [Configuración de Entorno de Desarrollo en macOS](#configuración-de-entorno-de-desarrollo-en-macos)
      - [Ricardo Celis](#ricardo-celis)
  - [Herramientas para la web](#herramientas-para-la-web)
    - [Bienvenida](#bienvenida)
    - [¿Qué es el navegador?](#qué-es-el-navegador)
    - [Instalando el navegador y sus DevTools](#instalando-el-navegador-y-sus-devtools)
  - [Editor de texto](#editor-de-texto)
    - [Instalando nuestro editor de texto](#instalando-nuestro-editor-de-texto)
    - [Extensiones y personalización de VSCode](#extensiones-y-personalización-de-vscode)
    - [Uso de Live Server en proyectos reales de HTML y CSS](#uso-de-live-server-en-proyectos-reales-de-html-y-css)
  - [Entorno de desarrollo con Node.j](#entorno-de-desarrollo-con-nodej)
    - [Instalación de Homebrew y Node.js](#instalación-de-homebrew-y-nodejs)
    - [Comandos básicos de la terminal](#comandos-básicos-de-la-terminal)
    - [Primer proyecto con React.js](#primer-proyecto-con-reactjs)
  - [Git y Github](#git-y-github)
    - [¿Qué es Git y Github?](#qué-es-git-y-github)
    - [Manejo de repositorios con SSH y HTTPS](#manejo-de-repositorios-con-ssh-y-https)
    - [Subiendo nuestro primer repositorio](#subiendo-nuestro-primer-repositorio)
    - [¿Qué es lo que sigue](#qué-es-lo-que-sigue)

## Herramientas para la web

### Bienvenida

- [Prework: Configuration developer macOS](https://drive.google.com/file/d/17aTFbFzz3pAylALro7QzJjZDib7SYabo/view?usp=sharing)
### ¿Qué es el navegador?

Los navegadores funcionan con un protocolo que define como se realiza la transferencia de datos a través de internet. Es llamado:

  - HTTP: Hypertext Transfer Protocol (Protocolo de Transferencia de Hipertexto)
  - HTTPS: Hypertext Transfer Protocol Secure (Protocolo de Transferencia de Hipertexto Seguro)

En la actualidad la manera de escribir, leer e interpretar los datos transferidos a través de 3 lenguajes que todos los navegadores pueden entender. Estos son:

  - HTML: HyperText Markup Language

  - CSS: Cascade Style Sheet

  - Javascript: Es el lenguaje que le da interacción a las paginas Google Chrome es uno de los navegadores más modernos y más utilizado, el cual tiene 3 versiones:

  - Google Stable: Versión que todos usamos

  - Google Dev: Versión para desarrolladores que contiene las nuevas funcionalidades y el navegador se actualiza semanalmente

  - Google Canary: Versión para desarrolladores que contiene las nuevas funcionalidades y el navegador se actualiza diariamente

Otro navegador muy común es Firefox que también cuenta con 2 versiones:
  - Firefox: Versión normal
  - Firefox Dev: Versión para desarrolladores
### Instalando el navegador y sus DevTools

✨ Chrome DevTools es un conjunto de herramientas que nos permiten hacer depuración en el desarrollo de aplicaciones Web. Este se encuentra en Chrome y en navegadores basados en Chromium.
## Editor de texto

### Instalando nuestro editor de texto

- [Visual Studio Code](https://visualstudio.microsoft.com/es/)
- [WebStorm](https://www.jetbrains.com/es-es/webstorm/)
- [Atom](https://atom.io)
### Extensiones y personalización de VSCode

- Prettier
- Live Server
- Color Highlinght
- Path Intellisense
- CodeStream
- Auto Rename Tag
- Material Icon Theme
- vscode-icons

[Marktplace](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

- Prettier - Code formater
Mejora la forma en que se visualiza el código
(agrega espacios en donde haga falta, ayuda a reacomodar el codigo, etc).

- Color Highlight
Agregar un recuadro alrededor del código hexadecimal en CSS el cual
muestra el color del mismo (previsualizacion).

- Live Server
Actualiza automáticamente en el navegador los cambios guardados.

- Path Intellisense
Autocompleta las rutas (esos significa ‘path’ en informática)…

- Auto Rename Tag
Si haces un cambio en alguna pareja de tags, esta extensión autompleta los
cambios en el otro tag por ti.

- Material Icon Theme
Agrega íconos a los archivos según su extensión, lo cual lo hace más visual.

- SynthWave '84
Este es un tema que recomiendo mucho por su estética retro.

1. Auto Close Tag: Esta extensión escribirá automáticamente la etiqueta de cierre cuando tú escribas una etiqueta de apertura dentro de HTML.
2. Ayu: Esta es una extensión que le agregará más temas a tu Visual Studio Code, recomiendo probarla, ya que tiene temas geniales.
3. Bookmarks: Esta es una extensión que te servirá para cuando trabajes con archivos largos, te sirve para dejar una marca en tu código (como lo harías en un libro al poner un separador de página). De esta forma puedes irte a cualquier otra parte de tu código y cuando quieras regresar simplemente presionas la combinación de teclas necesaria y automáticamente te llevará a donde dejaste esa marca 😄.
4. Bracket Pair Colorizer: Esta te servirá para cuando estés trabajando con lenguajes de programación, ya que te va a resaltar de diferentes colores los paréntesis y las llaves, de esa forma no tienes que estar buscando cuál es el paréntesis o llave de cierre por cada llave o paréntesis de apertura que tengas, simplemente te basas en los colores 😄
5. html tag wrapper: Te sirve para que, cuando selecciones un bloque de código, simplemente presionas cmd + i y automáticamente encerrará todo ese código en una etiqueta nueva (cuando serpas de HTML sabrás a lo que me refiero)
6. IntelliSense for CSS class names in HTML: Esta extensión va a leer todos tus archivos de CSS y va a detectar todas tus clases para que, cuando estés escribiendo clases dentro de HTML, te haga sugerencias con base en las clases que tienes escritas en CSS, muy útil cuando empieces a usar frameworks como Bootstrap o Tailwind 😄.
7. Project Manager: Esta es una de las mejores extensiones, en los cursos te van a enseñar a arrastrar la carpeta de tu proyecto a Visual Studio Code, pero con Project Manager tú puedes asociar varios proyectos a tu editor de ćódigo y simplemente seleccionas en cuál quieres trabajar, lo genial de esta extensión es que conserva las tabs que tenías abiertas por cada proyecto. Así puedes cambiar fácilmente entre proyectos y continuar en las tabs donde te quedaste 😄.

[10 Plugins esenciales de VSCode para Frontends](https://platzi.com/blog/10-plugins-esenciales-para-vscode/)
### Uso de Live Server en proyectos reales de HTML y CSS

Para los que quieran cambiar el navegador por defecto de Safari a Google Chrome u otro navegador, es tan simple como:

- Ir a Code -> Preferences -> Settings.
- Buscar “Live Server Custom Browser”.
- Seleccionar “chrome” o el navegador que más les acomode.
- Listo!

✨ Live Server nos permite ver cambios, sin la necesidad de actualizar la aplicación Web. Esto nos permite optimizar nuestro tiempo a la hora de ver cambios.
## Entorno de desarrollo con Node.j

### Instalación de Homebrew y Node.js

- [Hombebre](https://brew.sh/index_es)

Homebrew es el más usado para macOS, pero aquí te pongo otros ejemplos de manejadores de paquetes que existen:

- **`apt:`** El manejador de paquetes de Linux (Debian y Ubuntu)
- **`npm:`** El manejador de paquetes de JavaScript
- **`yarn:`** Una alternativa a NPM
- **`composer:`** El manejador de paquetes de PHP
- **`pip:`** El manejador de paquetes de Python

📌 Los manejador de paquetes permiten automatizar el proceso de instalación, actualización, configuración y eliminación de programas de un computador de forma coherente.

node

```bash
brew install node
```

actulizar

```bash
brew update
```

version de node

```bash
node -v
```

version de npm

```bash
npm -v
```
### Comandos básicos de la terminal

`cd:` (Change Directory): Moverte entre las carpetas de tu mac

`ls: (List):` Lista todas las carpetas y archivos que hay dentro de tu carpeta actual

`code:` Puedes usarlo para abrir un archivo en Visual Studio Code

`open:` Abre un archivo con el programa predeterminado

`sudo:` Permite ejecutar cualquier comando como super administrador

`clear:` Manda para arriba todos los comandos anteriores para que de la impresión de que se limpió la pantalla

`reset:` Esta síresetea la terminal

`ctrl + c:` Mata cualquier proceso que se esté ejecutando en este momento en tu terminal

`ln -s archivo link:` crea un enlace simbólico (acceso directo) para un archivo (sustituir la variable archivo por nombre del archivo y el enlace con el nombre que tendrá el acceso directo)

**Administración de procesos**

- `ps:` muestra los procesos de usuario activos en tiempo real
- `top:` muestra todos los procesos que se ejecutan en tiempo real
- `kill pid:` mata un proceso específico por el número ID (sustituir pid por el número de proceso)
- `killall proc:` mata todos los procesos con el nombre especificado (sustituir proc por el nombre del proceso)
- `bg:` lista de trabajos parados o en segundo plano
- `fg:` trae el trabajo más reciente a primer plano
- `fg trab:` trae el trabajo “trab” a primer plano (reemplazar trab por el nombre del proceso)

**Comandos para búsquedas**

- `grep secuencia archivos:` búsqueda de la secuencia de los archivos (sustituir la secuencia y archivos por los valores correspondientes a la investigación)
- **`grep-r secuencia dir:`** búsqueda de forma recursiva por la secuencia en el directorio dir
- `comando | grep secuencia:` busca por la secuencia en la salida del comando (sustituir comando y secuencia de acuerdo con los valores a ser buscados)
- `locate archivo:` encuentra todas las instancias de un archivo (sustituir la variable archivo por el nombre del archivo)

**Información del sistema**

- `date:` muestra la fecha y la hora actual
- `cal:` muestra un calendario del mes actual
- `uptime:` muestra el tiempo de actividad del sistema
- `w:` muestra quién está en línea
- `whoami:` muestra quién está conectado
- `finger usuario:` muestra la información del usuario
- `uname -a:` muestra la información de núcleos
- `cat /porc/cpuinfo:` muestra la información de la CPU
- `cat /proc/meminfo:` muestra la información de la memoria
- `man comando:` abre el manual del comando especificado (sustituir la variable comando por el nombre del comando que se quiere conocer)
- `df:` muestra el uso del disco
- `du:` muestra el uso del espacio en un directorio
- `free:` muestra el uso de la memoria y swap
- `whereis aplicación:` muestra las posibles ubicaciones de la aplicación (reemplazar aplicación por el nombre del programa)
- `which aplicación:` muestra qué aplicación se ejecutará por defecto (reemplazar aplicación por el nombre del programa)

**Compresión de archivos**

- `tar cf paquete.tar archivos:` crea un paquete TAR (nombrado paquete.tar) con los archivos especificados (sustituir la variable archivos por el nombre del archivo)
- `tar xf paquete.tar:` extrae los archivos de paquete.tar (reemplazar la variable paquete.tar por el nombre del archivo)
- `tar czf pacote.tar.gz archivos:` crea un paquete TAR (nombrado pacote.tar.gz) con la compresión GZip
- `tar xzf pacote.tar.gz:` extrae un paquete TAR (nombrado pacote.tar.gz) con la compresión GZip
- `tar cjf paquete.tar.bz2:` crea un paquete TAR (nombrado paquete.tar.bz2) con la compresión BZip2
- `tar xjf paquete.tar.bz2:` extrae un paquete TAR con la compresión BZip2
- `gzip archivo:` comprime un archivo y el nombre a archivo.gz (sustituir la variable archivo por el nombre del archivo)
- `gzip -d archivo.gz:` descomprime archivo.gz a un archivo (sustituir la variable archivo.gz por el nombre del archivo)
### Primer proyecto con React.js
!
📌 `npx` nos permite probar un paquete específico, sin la necesidad de instalar la dependencia del paquete.

- [Readc | Biblioteca de JavaScript para oconstruir interfacesde usuario](https://es.reactjs.org)

## Git y Github

### ¿Qué es Git y Github?

✨ Linus Torvalds uno de los más grandes contribuyentes a la industria del software. Git es una herramienta indispensable en el desarrollo de software.

git es una herramienta que te permite manejar todo el versionado de tu código, ya no existe eso de “Version final”, “Version final final”, “Version final final esta sí”.

Ahora con git puedes llevar un control de versiones donde puedes organizar todos los features nuevos que vayas agregando a tu aplicación.

Con git puedes crear ramas (un universo paralelo de tu proyecto), puedes juntar esas ramas, puedes ver quién tuvo la culpa de qué en cada línea de código, puedes volver atrás en el tiempo, etc. 👀

Y con GitHub puedes alojar todo ese código y sus cambios en un servidor en la nube, así como ver el código de otras personas que tienen sus repositorios públicos 👀. GitHub es como tu portafolio de proyectos como programador.

- [RetaxMaster | GitGHu](https://github.com/RetaxMaster)
  
### Manejo de repositorios con SSH y HTTPS

✨ Podemos generar llaves cuantas veces las necesitemos, cuando necesitemos cambiarlas por opciones de seguridad.

**SSH** nos permite enviar información al servidor y que esta viaje encriptada, evitando su uso indebido.

![](https://i.ibb.co/QbQVbCJ/ssh.webp)

- [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

![](https://asciinema.org/connect/f78f0327-beea-47f1-a2ed-a649621639b7)
### Subiendo nuestro primer repositorio


### ¿Qué es lo que sigue

