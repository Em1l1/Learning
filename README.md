# Administracion de Servidores Linux
##### Jhon Edison Castro Sánchez


  ## Distribuciones más utilizadas de Linux

Vamos a usar dos distribuciones de **Linux: Ubuntu Server** en su **versión 18.04** y **CentOS Server versión 7**.

Recuerda que puedes usar cualquier versión para hacer pruebas y estudiar, pero al trabajar con servidores debemos instalar las versiones LTS, ya que incluyen soporte de largo plazo (actualizaciones de software por al menos 5 años).

Recuerda que puedes probar estas distribuciones con una máquina virtual o el proveedor de nube que prefieras **(Google, Amazon, Digital Ocean, entre otros).**

  ## Instalación de Ubuntu Server

  Descargar [Virtual Box]( https://www.virtualbox.org/)

  Descargar [Ubuntu Server](https://ubuntu.com/download/server)

  * Crear una nueva máquina virtual

  * En la configuración de nuestra máquina, en la sección Red cambiar de NAT a Adaptador puente. En avanzadas, colocar en el Modo promiscuo “Permitir todo”.

  * En la sección Storage seleccionamos el cd que dice “Vacío”, y en el apartado de atributos a la derecha seleccionamos el icono del cd para buscar nuestra imagen ISO de Ubuntu ya descargada anteriormente. Aceptamos los cambios.

  * Iniciamos la máquina virtual

  * Si estamos trabajando en un servidor físico, deberíamos seleccionar “Comprobar memoria”

  * Instalamos el sistema operativo


  ## Instalación de CentOS

  Descargar [Virtual Box](https://www.virtualbox.org/)

  Descargar [CentOS](http://isoredirect.centos.org/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-1908.iso)

  [CentOS Mirror](https://centos.org/)

  **Crear una nueva máquina virtual**

  * En la configuración de nuestra máquina, en la sección Red cambiar de NAT a Adaptador puente. En avanzadas, colocar en el Modo promiscuo “Permitir todo”.

  * En la sección Storage seleccionamos el cd que dice “Vacío”, y en el apartado de atributos a la derecha seleccionamos el icono del cd para buscar nuestra imagen ISO de CentOS ya descargada anteriormente. Aceptamos los cambios.

  * Iniciamos la máquina virtual

  * Instalamos el sistema operativo

  * En la configuración, en el apartado de NETWORK & HOST NAME, activar la interfaz con el botón “on”. Cambiamos el host name a “platzi-server” y damos click en aplicar

  * En el apartado de INSTALLATION DESTINATION seleccionamos el disco de Virtual Box

  * Configuramos la hora y damos click en done

  * Hacemos click en ROOT PASSWORD y creamos una contraseña para el usuario root

  * Creamos un usuario nuevo dando click en USER CREATION y finalizamos la instalación


  ## Gestión del árbol de directorios

**pwd:** nos muestra nuestra ubicación actual en el árbol de directorios `(Print Working Directory).`
**ls:** nos muestra el contenido de las carpetas de nuestro sistema operativo. Podemos especificar alguna ruta o, por defecto, listar el contenido de la carpeta donde estamos trabajando.
**cd:** cambiar nuestra ubicación en el árbol de directorios `(Change Directory).` Usamos dos puntos `(..)` para referirnos al directorio padre y solo uno `(.)` para referirnos a nuestro directorio actual.
**touch:** nos ayuda a crear archivos desde la terminal.
**mkdir:** nos ayuda a crear carpetas desde la terminal.
**cp:** nos permite duplicar archivos y carpetas.
**mv:** cambiar el nombre de nuestros archivos y carpetas.

Recuerda que la terminal de Linux es sensible a la diferencia entre mayúsculas o minúsculas.
  
  ## Diferencias entre LESS, CAT, HEAD y TAIL para lectura de archivos

**cat:** nos permite leer archivos en su totalidad.
**less:** nos ayuda a leer el contenido de nuestros archivos por páginas. Nos movemos con las flechas del teclado o la tecla de espacio. Salimos de la lectura del archivo con la letra q. Buscamos palabras específicas escribiendo /palabra.
**tail:** nos muestra las últimas 10 líneas de nuestros archivos.
**head:** nos muestra las primeras 10 líneas de nuestros archivos.

  ## Interacción con archivos y permisos

Interacción con archivos y permisos

Con el comando **ls -l** podemos observar la lista de archivos de nuestro directorio actual con información un poco más detallada. El primer campo nos indica los diferentes permisos para cada archivo o directorio. Por ejemplo: **-rwxrw-r--**.

El primer carácter nos indica si tenemos un archivo `(-)`, enlace simbólico `(l)` o directorio `(d)`.

Los siguientes caracteres se dividen en grupos de 3: lectura `(r)`, escritura `(w)` y ejecución `(x)`. El primer grupo son los permisos del usuario que creó ese archivo, el segundo para el grupo al que pertenece este usuario y el tercero para cualquier otro usuario de tu sistema operativo.

Los grupos nos ayudan a darle los mismos permisos a diferentes usuarios sin necesidad de asignarlos a cada uno individualmente. Todos los usuarios que pertenezcan al grupo tendrán los mismos permisos.

Si en vez de estas letras encuentras un guion significa que ese usuario o grupo de usuarios no tiene permiso para esa acción en particular.

Por ejemplo: **-rwxrw-r--** _nos indica que trabajamos con un archivo. Todos los usuarios del sistema tienen permisos de lectura. El usuario creador y su grupo tienen permiso de escritura. Y solo el usuario creador puede ejecutar el archivo_.

También podemos encontrar estos permisos como 3 números del 1 al 7. Estos números son la suma de los 3 caracteres de permisos para cada usuario o grupo.


  *  - = 0
  *  x = 1
  *  w = 2
  *  r = 4

Por lo tanto, los permisos de nuestro archivo de ejemplo serían:`7 (1+2+4) 6 (0+2+4) 4 (0+0+4)`.

Para cambiar los permisos de un archivo o directorio podemos usar el comando `chmod + a` quién queremos añadir o quitar los permisos:

  *  El usuario propietario: `u`.
  *  El grupo, `g`.
  *  El resto de usuarios, `o`.
  *  Para todos, `a`.

Por ejemplo, para añadir permisos de ejecución a nuestro usuario propietario usamos:

  * `chmod u+x nombre-del-archivo`

También podemos cambiar al usuario propietario del archivo con el comando `chown`.

  * `sudo chown nuevo-usuario:grupo-usuarios nombre-del-archivo`