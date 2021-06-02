<h1>Selenium con Python</h1>

<h3>Héctor Vega</h3>

<h1>Tabla de Contenido</h1>

- [1. Conocer el ecosistema de Selenium](#1-conocer-el-ecosistema-de-selenium)
  - [Bienvenida al curso](#bienvenida-al-curso)
  - [Historia de Selenium](#historia-de-selenium)
    - [Selenium IDE](#selenium-ide)
  - [Otras herramientas de testing y automatización](#otras-herramientas-de-testing-y-automatización)
- [2. Preparar entorno de trabajo](#2-preparar-entorno-de-trabajo)
  - [Configurar entorno de trabajo](#configurar-entorno-de-trabajo)
  - [Compatibilidad con Python 3.9 y aprendiendo a utilizar múltiples versiones](#compatibilidad-con-python-39-y-aprendiendo-a-utilizar-múltiples-versiones)
    - [¿Por qué utilizar pyenv y entornos virtuales?](#por-qué-utilizar-pyenv-y-entornos-virtuales)
    - [¿Qué versión de Python tengo instalada y dónde?](#qué-versión-de-python-tengo-instalada-y-dónde)
    - [1. Instalando dependencias](#1-instalando-dependencias)
        - [macOS](#macos)
    - [Distribuciones Linux](#distribuciones-linux)
    - [2. Instalando pyenv y Python](#2-instalando-pyenv-y-python)
      - [Listar versiones de Python](#listar-versiones-de-python)
    - [Verificando versiones instaladas](#verificando-versiones-instaladas)
      - [Desinstalando versiones de Python](#desinstalando-versiones-de-python)
    - [3. Utilizando las nuevas versiones instaladas](#3-utilizando-las-nuevas-versiones-instaladas)
    - [4. Utiliza una versión de Python específica en un entorno virtual](#4-utiliza-una-versión-de-python-específica-en-un-entorno-virtual)
      - [Seleccionemos una versión de Python](#seleccionemos-una-versión-de-python)
    - [Creando el entorno virtual](#creando-el-entorno-virtual)
  - [¡Hola, mundo!](#hola-mundo)
    - [Unittest (pytest)](#unittest-pytest)
- [3. Utilizar comandos básicos](#3-utilizar-comandos-básicos)
  - [Encontrar elementos con find_element](#encontrar-elementos-con-find_element)
  - [Preparar assertions y test suites](#preparar-assertions-y-test-suites)
  - [Entender las clases WebDriver y WebElement](#entender-las-clases-webdriver-y-webelement)
- [4. Interactuar con elementos](#4-interactuar-con-elementos)
  - [Manejar form, textbox, checkbox y radio button](#manejar-form-textbox-checkbox-y-radio-button)
  - [Manejar dropdown y listas](#manejar-dropdown-y-listas)
  - [Manejar alert y pop-up](#manejar-alert-y-pop-up)
  - [Automatizar navegación](#automatizar-navegación)
- [5. incronizar pruebas](#5-incronizar-pruebas)
  - [Demora implícita y explícita](#demora-implícita-y-explícita)
  - [Condicionales esperadas](#condicionales-esperadas)
- [6. Retos](#6-retos)
  - [Agregar y eliminar elementos](#agregar-y-eliminar-elementos)
  - [Elementos dinámicos](#elementos-dinámicos)
  - [Controles dinámicos](#controles-dinámicos)
  - [Typos](#typos)
  - [Ordenar tablas](#ordenar-tablas)
- [7. Metodologías de Trabajo](#7-metodologías-de-trabajo)
  - [Data Driven Testing (DDT)](#data-driven-testing-ddt)
  - [Page Object Model (POM)](#page-object-model-pom)
- [8. Cierre del curso](#8-cierre-del-curso)
  - [Realizar una prueba técnica](#realizar-una-prueba-técnica)
  - [Conclusiones](#conclusiones)

# 1. Conocer el ecosistema de Selenium

## Bienvenida al curso

- [slides-curso-de-selenium-con-python.pdf](https://drive.google.com/file/d/1Fm70tCqy5bOnSsO45vt2bl6qTYlo8VNF/view?usp=sharing)

## Historia de Selenium

¿Qué es Selenium?
- Es una **UIT de herramientas** para la automatización de navegadores Web.
- El objetivo de Selenium NO fue para el Testing ni para el **Web Scraping** (aunque se puede usar para eso), por lo tanto, no es el más optimo para estas actividades.
- Protocolo: WebDriver, herramienta que se conecta a un API.
- **Selenium WebDriver** es la herramienta que utilizaremos en el curso.
- **Selenium** NO es un Software, ES una SUIT de Softwares.
- **DDT Data Drive Testing:** Ingresar datos para que realice varias pruebas (sin intervención humana).

### Selenium IDE

**Pros**

  - Excelente para iniciar
  - No requiere saber programar
  - Exporta scripts para Selenium RC y Selenium WebDriver
  - Genera reportes

**Contras**

  - Disponible para Google Chrome y FireFox
  - No soporta DDT. No permite colocar datos para múltiples pruebas.
  - Selenium RC

**Pros**

  - Soporte para
  - Varias plataformas, navegadores y lenguajes.
  - Operaciones lógicas y condicionales
  - DDT
  - Posee una API madura

**Contras**

  - Complejo de instalar
  - Necesita de un servidor corriendo.
  - Comandos redundantes en una API
  - Navegación no tan realista
  - Selenium Web Driven

**Pros**

  - Soporte para múltiples lenguajes
  - Facil de instalar.
  - Comunicación directa con el navegador.
  - Interacción más realista.

**Contra**

  - No soporta nuevos navegadores tan rápido.
  - No genera reportes o resultados de pruebas.
  - Requiere de saber programar.

## Otras herramientas de testing y automatización

Algunas herramientas de testing y automatización:

**[Puppeteer:](https://pptr.dev/)**

• PROS: Soporte por parte de Google, te brinda datos del Performance Analysis de Chrome y un mayor control de este navegador. No requiere archivos externos como lo hace Selenium con WebDriver.

• CONTRAS: Solo funciona para Google Chrome con JavaScript, tiene una comunidad pequeña así que el apoyo será poco.

**[Cypress.io:](https://www.cypress.io/)**

• PROS: Tiene una comunidad emergente y va creciendo a pasos acelerados, tiene muy buena documentación para implementar Cypress en los proyectos. Es muy ágil en pruebas E2E, está orientado a desarrolladores y tiene un excelente manejo del asincronismo, logrando que las esperas sean dinámicas y también se puedan manejar fácilmente.

• CONTRAS: Solo funciona en Google Chrome con JavaScript, se pueden realizar pruebas en paralelo únicamente en la versión de pago.

Factores a tomar encenta para escoger una herramienta de automatización:

- Lenguaje con el que estas más familiarizado.
- Que lenguaje de programación ocupa el equipo de trabajo.
- Sí el proyecto necesita llamadas de a sincronismo, o no.
- O solo hacer una automatización de una tarea repetitiva.

# 2. Preparar entorno de trabajo

## Configurar entorno de trabajo

Instalar python3 en su version 7 o superior.

``` bash
sudo pacman -S python
```

Instalar Selenium
``` BASH
pip install selenium
```

Instalar pyunitreport
``` BASH
pip3 install pyunitreport
```

## Compatibilidad con Python 3.9 y aprendiendo a utilizar múltiples versiones

Durante este curso utilizaremos Selenium 3, la cual de momento no es compatible con Python 3.9 y no será sino Selenium 4 que nos brindará esta compatibilidad cuando sea lanzado, ya que por ahora se encuentra en una versión alpha.

Lo recomendable es que durante el curso utilices Python en una versión entre 3.6 y 3.8, puede sonar un poco extraño trabajar con versiones anteriores a la más reciente y en esta clase te enseñaré a manejar distintas versiones de Python en tu equipo.

En caso de que tengas una versión de Python inferior a 3.9 compatible con Selenium 3 puedes omitir los siguientes pasos y continuar con el curso. Recuerda que como buena práctica todo lo que instales a través de pip debe ser en un entorno virtual.

### ¿Por qué utilizar pyenv y entornos virtuales?

Sí, puedes instalar una versión distinta directo en tu sistema, continuar con el curso (quizá lo termines sin problemas) y pretender que no ha sucedido nada. Sin embargo cuando instalas una versión de Python directo al sistema operativa esta funcionará de forma global y lo mismo con los módulos que instales a través de pip (a no ser que uses un entorno virtual).

Cuando instales paquetes de forma global en cada versión de Python en tu sistema, es probable que estos lleguen a ser de versiones distintas y es aquí cuando los problemas se pueden presentar. Por ello es mejor tener cada cosa en su lugar, separada y sin afectar otros entornos.

### ¿Qué versión de Python tengo instalada y dónde?

Utilizar distintas versiones de Python en tu equipo puede generar problemas cuando haces uso de pip para instalar paquetes, pues estos se instalan de forma global y al haber versiones distintas del mismo te expones a errores. Recuerda que como buena práctica lo mejor es instalar paquetes en entornos virtuales.

Para saber donde está instalado Python en tu equipo ejecutas el siguiente comando desde tu terminal:

```bash
which python
```

Te dará como resultado algo similar a esto:

```bash
/usr/local/bin/python3.9
```

Si quieres saber exactamente que versión de Python está instalada en tu sistema operativo, ejecuta el siguiente comando:

``` bash
python --version
```

Esto te mostrará exactamente la versión de tu sistema:

``` bash
Python 3.9.0
```

### 1. Instalando dependencias

Lo ideal es utilizar pyenv pues nos permite levantar Python desde su fuente, para lo cual debemos instalar ciertas dependencias de acuerdo a nuestro sistema operativo:

##### macOS

En caso de tener macOS Mojave o superior (+10.14) debes utilizar el siguiente comando con Homebrew instalado:

``` bash
sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /
```

Si es una versión inferior, será el siguiente comando:

``` bash
brew install openssl readline sqlite3 xz zlib.
```

### Distribuciones Linux

Según la distribución de tu equipo será el comando que utilizarás:

  - **Debian/Ubuntu**

``` bash
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl
```

  - **Fedora/CentOS/RHEL**

``` bash
sudo yum install zlib-devel bzip2 bzip2-devel readline-devel sqlite \
sqlite-devel openssl-devel xz xz-devel libffi-devel
```

  - **openSUSE**

``` bash
zypper in zlib-devel bzip2 libbz2-devel libffi-devel \
libopenssl-devel readline-devel sqlite3 sqlite3-devel xz xz-devel
```

  - **Windows**
  
Actualmente pyenv no cuenta con soporte para Windows, así que lo mejor será utilizar WSL (Windows Subsystem for Linux)

### 2. Instalando pyenv y Python

Instalar pyenv es muy sencillo, solo debes ejecutar este comando en tu terminal:

``` bash
curl https://pyenv.run | bash
```

Posterior a instalar pyenv reinicia tu terminal para continuar.

#### Listar versiones de Python

Lo ideal es instalar una versión de Python entre 3.6 y 3.8, puedes ver la lista disponible con este comando una vez instalado pyenv:

``` bash
pyenv install --list | grep " 3\.[678]"
```

Después solo debes elegir, por ejemplo acá elegimos Python 3.8.6:

``` bash
pyenv install -v 3.8.6
```

Con esto pyenv procederá a levantar la versión de Python desde su fuente indicada y realizar las descargas necesarias, por lo que puede tomar unos minutos.

### Verificando versiones instaladas

Puedes saber que versiones de Python has instalado mediante pyenv con este comando:

``` bash
ls ~/.pyenv/versions/
```

#### Desinstalando versiones de Python

Ok, esto será necesario en algún momento y es posible con un sencillo comando donde solo debes especificar la versión a remover:

``` bash
lpyenv uninstall 3.8.6
```

### 3. Utilizando las nuevas versiones instaladas

**¿En qué versión me encuentro?**

Ser consciente de que versión de Python es importante, así podemos utilizar las herramientas que son compatibles (como Selenium) y el comando indicado es el siguiente:

``` bash
pyenv versions
```

Esto mostrará tanto nuestra versión instalada en el sistema operativa, su ruta y las que instalamos con pyenv. Podrás ver que está marcado con un * aquella que está activa de momento. Esto se puede validar con el comando python --version.

También puedes saber la ruta de la versión de Python tiene activa pyenv con el comando pyenv which python.

**Cambiando de versión**

Suponiendo que tenemos instalado Python 3.9, ya instalamos Python 3.8 con pyenv y queremos cambiar solo hay que ejecutar el siguiente comando:

``` bash
pyenv global 3.8.6
```

Puedes verificarlo ejecutando el comando python --version el cual te mostrará la versión activa.

**Volviendo a la versión del sistema operativo**

En caso de necesitar volver a la versión de nuestro sistema operativo solo ejecutamos este comando:

``` bash
pyenv global system
```

Definiendo una versión por defecto en directorios
En ocasiones deberás trabajar con una versión específica para tu proyecto, así que lo mejor es que pyenv sepa de cuál se trata y cada vez que trabajes desde un directorio esté activada. Esto lo puedes realizar con el comando local, por ejemplo, supongamos que queremos Python 3.7.6 por defecto entonces ejecutamos este comando:

``` bash
pyenv local 3.7.6
```

Esto generará el archivo .python_version, mismo que fijará la versión 3.7.6 de Python en el directorio donde se ubique y todos los demás que se contengan en este. Si lo eliminas, entonces podrás cambiar entre versiones con el comando global.

### 4. Utiliza una versión de Python específica en un entorno virtual
Nuestra versión de Python específica está lista para funcionar, lo siguiente es crear un entorno virtual con pyenv donde trabajaremos con esta y poder realizar la instalación de cualquier módulo con pip.

Considera que pyenv nos permite manejar y cambiar entre distintas versiones de Python, los entornos virtuales aislan las instalaciones de diversos módulos y juntos nos permiten aislar módulos para versiones específicas de Python.

#### Seleccionemos una versión de Python

Lo primero será ubicarnos al directorio donde estarán nuestro proyecto y elegir la versión preferida con el comandolocal (de preferencia), por ejemplo 3.8.6:

``` bash
pyenv local 3.8.6
```

### Creando el entorno virtual

Generar un nuevo entorno local es posible con la siguiente convención:

``` bash
pyenv virtualenv <version_de_python> <nombre_del_entorno>
```

Siguiendo el ejemplo de Python 3.8.6 lo haremos así:

``` bash
pyenv virtualenv 3.8.6 curso-selenium-platzi
```

Para activar nuestro entorno virtual con esta versión específica de Python solo ejecutamos el comando local con el nombre del entorno:

``` bash
pyenv local curso-selenium-platzi
```

Podemos utilizar `pyenv versions` y `pyenv which python` para darnos cuenta de que estamos utilizando la `versión 3.8.6` en el directorio de nuestro entorno virtual.

Incluso ahora podemos instalar Selenium de una forma aislada con el comando `pip install selenium`.

Para salir de nuestro entorno solo ejecutamos el comando `pyenv deactivate` y para activarlo de nuevo con `pyenv activate nombre_del_entorno`.

## ¡Hola, mundo!

### Unittest (pytest)

- **Test Fixture:** Preparaciones para antes y despues de la prueba.
- **Test Case:** Unidad de codigo a probar.
- **Test Suite:** Coleccion de Test Cases.
- **Test Runner:** Orquestador de la ejecucion. 
- **Test Report:** Resumen de resultado



[ChromeDriver - WebDriver for Chrome](http://chromedriver.chromium.org/)

# 3. Utilizar comandos básicos


## Encontrar elementos con find_element


## Preparar assertions y test suites


## Entender las clases WebDriver y WebElement

# 4. Interactuar con elementos


## Manejar form, textbox, checkbox y radio button


## Manejar dropdown y listas


## Manejar alert y pop-up


## Automatizar navegación

# 5. incronizar pruebas


## Demora implícita y explícita


## Condicionales esperadas

# 6. Retos


## Agregar y eliminar elementos


## Elementos dinámicos


## Controles dinámicos


## Typos


## Ordenar tablas

# 7. Metodologías de Trabajo


## Data Driven Testing (DDT)


## Page Object Model (POM)

# 8. Cierre del curso


## Realizar una prueba técnica


## Conclusiones