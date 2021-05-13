<h1>Fundamentos de Base de Datos</h1>

<h3>Israel Vázquez Morales</h3>

<h1>Tabla de Contenido</h1>

- [1. Bienvenida conceptos básicos y contexto histórico de las Bases de Datos](#1-bienvenida-conceptos-básicos-y-contexto-histórico-de-las-bases-de-datos)
  - [Bienvenida conceptos básicos y contexto histórico de las Bases de Datos](#bienvenida-conceptos-básicos-y-contexto-histórico-de-las-bases-de-datos)
- [2. Introducción a las bases de datos relacionales](#2-introducción-a-las-bases-de-datos-relacionales)
  - [Historia de las RDB](#historia-de-las-rdb)
  - [Entidades y atributos](#entidades-y-atributos)
  - [Entidades de Platzi Blog](#entidades-de-platzi-blog)
  - [Relaciones](#relaciones)
  - [Múltiples muchos](#múltiples-muchos)
  - [Diagrama ER](#diagrama-er)
  - [Diagrama Físico: tipos de datos y constraints](#diagrama-físico-tipos-de-datos-y-constraints)
      - [Tipos de dato:](#tipos-de-dato)
      - [Constraints (Restricciones)](#constraints-restricciones)
  - [Diagrama Físico: normalización](#diagrama-físico-normalización)
  - [Diagrama Físico: normalizando Platziblog](#diagrama-físico-normalizando-platziblog)
  - [Formas normales en DB relacionales](#formas-normales-en-db-relacionales)
- [3. RDBMS (MySQL) o cómo hacer lo anterior de manera práctica](#3-rdbms-mysql-o-cómo-hacer-lo-anterior-de-manera-práctica)
  - [RDB ¿Qué?](#rdb-qué)
  - [Instalación local de un RDBMS (Windows)](#instalación-local-de-un-rdbms-windows)
  - [Instalación local de un RDBMS (Mac)](#instalación-local-de-un-rdbms-mac)
  - [Instalación local de un RDBMS (Ubuntu)](#instalación-local-de-un-rdbms-ubuntu)
    - [Para configurar workbench:](#para-configurar-workbench)
    - [Workbench Linux](#workbench-linux)
    - [Error al installar Workbench](#error-al-installar-workbench)
  - [Clientes gráficos](#clientes-gráficos)
    - [Verificar la configuracion de MySQL](#verificar-la-configuracion-de-mysql)
  - [Servicios administrados](#servicios-administrados)
- [4. SQL hasta en la sopa](#4-sql-hasta-en-la-sopa)
  - [Historia de SQL](#historia-de-sql)
  - [DDL create](#ddl-create)
  - [CREATE VIEW y DDL ALTER](#create-view-y-ddl-alter)
  - [DDL drop](#ddl-drop)
  - [DML](#dml)
      - [DDL -> Data Definition Language](#ddl---data-definition-language)
      - [DML -> Data Manipulation Language](#dml---data-manipulation-language)
  - [¿Qué tan standard es SQL?](#qué-tan-standard-es-sql)
  - [Creando Platziblog: tablas independientes](#creando-platziblog-tablas-independientes)
  - [Creando Platziblog: tablas dependientes](#creando-platziblog-tablas-dependientes)
  - [Creando Platziblog: tablas transitivas](#creando-platziblog-tablas-transitivas)
- [5. Consultas a una base de datos](#5-consultas-a-una-base-de-datos)
  - [¿Por qué las consultas son tan importantes?](#por-qué-las-consultas-son-tan-importantes)
  - [Estructura básica de un Query](#estructura-básica-de-un-query)
    - [Atajos con el teclado ue nos pueden ayudar a la escritura y ejecución del código SQL](#atajos-con-el-teclado-ue-nos-pueden-ayudar-a-la-escritura-y-ejecución-del-código-sql)
  - [SELECT](#select)
  - [FROM](#from)
  - [Utilizando la sentencia FROM](#utilizando-la-sentencia-from)
  - [WHERE](#where)
  - [Utilizando la sentencia WHERE nulo y no nulo](#utilizando-la-sentencia-where-nulo-y-no-nulo)
  - [GROUP BY](#group-by)
  - [ORDER BY y HAVING](#order-by-y-having)
  - [El interminable agujero de conejo (Nested queries)](#el-interminable-agujero-de-conejo-nested-queries)
  - [¿Cómo convertir una pregunta en un query SQL?](#cómo-convertir-una-pregunta-en-un-query-sql)
  - [Preguntándole a la base de datos](#preguntándole-a-la-base-de-datos)
  - [Consultando PlatziBlog](#consultando-platziblog)
- [6. Introducción a la bases de datos NO relacionales](#6-introducción-a-la-bases-de-datos-no-relacionales)
  - [¿Qué son y cuáles son los tipos de bases de datos no relacionales?](#qué-son-y-cuáles-son-los-tipos-de-bases-de-datos-no-relacionales)
  - [Servicios administrados y jerarquía de datos](#servicios-administrados-y-jerarquía-de-datos)
- [7. Manejo de modelos de datos en bases de datos no relacionales](#7-manejo-de-modelos-de-datos-en-bases-de-datos-no-relacionales)
  - [Top level collection con Firebase](#top-level-collection-con-firebase)
  - [Creando y borrando documentos en Firestore](#creando-y-borrando-documentos-en-firestore)
  - [Colecciones vs subcolecciones](#colecciones-vs-subcolecciones)
  - [Recreando Platziblog](#recreando-platziblog)
  - [Construyendo Platziblog en Firestore](#construyendo-platziblog-en-firestore)
  - [Proyecto final: transformando tu proyecto en una db no relacional](#proyecto-final-transformando-tu-proyecto-en-una-db-no-relacional)
- [8. Bases de datos en la vida real](#8-bases-de-datos-en-la-vida-real)
  - [Bases de datos en la vida real](#bases-de-datos-en-la-vida-real)
  - [Big Data](#big-data)
  - [Data warehouse](#data-warehouse)
  - [Data mining](#data-mining)
  - [ETL](#etl)
  - [Business intelligence](#business-intelligence)
  - [Machine Learning](#machine-learning)
  - [Data Science](#data-science)
  - [¿Por qué aprender bases de datos hoy?](#por-qué-aprender-bases-de-datos-hoy)
- [9. Bonus](#9-bonus)
  - [Bases de datos relacionales vs no relacionales](#bases-de-datos-relacionales-vs-no-relacionales)
  - [Elegir una base de datos](#elegir-una-base-de-datos)

---

# 1. Bienvenida conceptos básicos y contexto histórico de las Bases de Datos
  ## Bienvenida conceptos básicos y contexto histórico de las Bases de Datos

Tu profesor será Israel Vázquez, senior web developer en San Francisco, seminarista de bases de datos y entusiasta data engineering.
El almacenamiento en la nube tiene un gran pro comparada con los otros métodos de almacenamiento ya que es accesible desde cualquier parte del mundo. Además es centralizada y puede ser usada por varias personas al mismo tiempo.

Las bases de datos entran cuando hacemos la transición a medios digitales.

**Tipos de bases de datos:**

**Relacionales:** En la industria hay varias compañías dedicadas a ser manejadoras de bases de datos relacionales como SQL Server, Oracle, MariaDB, entre otras.
**No relacionales:** Todavía están avanzando y existen ejemplos muy distintos como cassandra, elasticsearch, neo4j, MongoDB, entre otras.

**Servicios:**

  - **Auto administrados:** Es la base de datos que instalas tú y te encargas de actualizaciones, mantenimiento, etc.
  - **Administrados:** Servicios que ofrecen las nubes modernas como Azure y no debes preocuparte por mantenimiento o actualizaciones.

  - [Fundamentos de Base de Datos.pdf](https://drive.google.com/file/d/1V982h0oTtJUuSubzd88d4-rFBqVOOopX/view?usp=sharing)
  - [Bases de Datos Relacionalesvs No relacionales](https://aukera.es/blog/bases-de-datos-relacionales-vs-no-relacionales/)

# 2. Introducción a las bases de datos relacionales

  ## Historia de las RDB

Las bases de datos surgen de la necesidad de conservar la información más allá de lo que existe en la memoria RAM.

Las bases de datos basadas en archivos eran datos guardados en texto plano, 
fáciles de guardar pero muy difíciles de consultar y por la necesidad de mejorar esto nacen las bases de datos relacionales. 
Su inventor Edgar Codd dejó ciertas reglas para asegurarse de que toda la filosofía de las bases de datos no se perdiera, estandarizando el proceso.

- [Codd's 12 rules](https://www.w3resource.com/sql/sql-basic/codd-12-rule-relation.php)
- [Las 12 reglas de CODD del Modelo Relacional](https://www.mindmeister.com/es/1079684487/las-12-reglas-de-codd-del-modelo-relacional?fullscreen=1#)

**Bases de datos relacionales (RBD)**

Es importante que sea fácil de guardar y extraer, anteriormente se usaban bases de datos basadas en archivos, el cuál era texto plano fácil de guardar, pero difícil de extraer, por esto se inventaron las bases de datos relacionales. En 1990 Codd se preocupó porque los sistemas de gestión de bases de datos (SGBD) que decían ser relacionales, no lo eran. En la práctica es difícil cumplir las 12 pero, un SGBD es más relacional cuantas más reglas cumpla

Las Reglas y mandamientos de Edgar Frank Ted Codd

- Regla 0: Regla de fundación.
a) Cualquier sistema que se proclame como relacional, debe ser capaz de gestionar sus bases de datos enteramente mediante sus capacidades relacionales.

- Regla 1: Regla de la información.
a) Todos los datos deben estar almacenados en las tablas
b) Esas tablas deben cumplir las premisas del modelo relacional
c) No puede haber información a la que accedemos por otra vía

- Regla 2: Regla del acceso garantizado.
a) Cualquier dato es accesible sabiendo la clave de su fila y el nombre de su columna o atributo
b) Si a un dato no podemos acceder de esta forma, no estamos usando un modelo relacional

- Regla 3: Regla del tratamiento sistemático de valores nulos.
a) Esos valores pueden dar significado a la columna que los contiene
b) El SGBD debe tener la capacidad de manejar valores nulos
c) El SGBD reconocerá este valor diferenciándolo de cualquier otro
d) El SGBD deberá aplicársele la lógica apropiada
e) Es un valor independiente del tipo de datos de la columna

- Regla 4: Catálogo dinámico en línea basado en el modelo relacional.
a) El catálogo en línea es el diccionario de datos
b) El diccionario de datos se debe de poder consultar usando las mismas técnicas que para los datos
c) Los metadatos, por tanto, se organizan también en tablas relacionales
d) Si SELECT es una instrucción que consulta datos, también será la que consulta los metadatos

- Regla 5: Regla comprensiva del sublenguaje de los datos completo.
a) Al menos tiene que existir un lenguaje capaz de hacer todas las funciones del SGBD
b) No puede haber funciones fuera de ese lenguaje
c) Puede haber otros lenguajes en el SGBD para hacer ciertas tareas
d) Pero esas tareas también se deben poder hacer con el “lenguaje completo”

- Regla 6: Regla de actualización de vistas.
a) Las vistas tienen que mostrar información actualizada
b) No puede haber diferencias entre los datos de las vistas y los datos de las tablas base

- Regla 7: Alto nivel de inserción, actualización, y cancelación.
a) La idea es que el lenguaje que maneja la base de datos sea muy humano
b) Eso implica que las operaciones del lenguaje de manipulación de los datos (DML) trabajen con conjuntos de filas a la vez
c) Para modificar, eliminar o añadir datos, no hará falta programar de la forma en la que lo hacen los lenguajes de tercera generación como C o Java

- Regla 8: Independencia física de los datos.
a) Cambios en la física de la BD no afecta a las aplicaciones ni a los esquemas lógicos
b) El acceso a las tablas (elemento lógico) no cambia porque la física de la base de datos cambie

- Regla 9: Independencias lógicas de los datos.
a) Cambios en el esquema lógico (tablas) de la BD no afectan al resto de esquemas
b) Si cambiamos nombres de tabla, o de columna o modificamos información de las filas, las aplicaciones (esquema externo) no se ven afectadas
c) Es más difícil de conseguir

- Regla 10: Independencia de la integridad.
a) Las reglas de integridad (restricciones) deben de ser gestionadas y almacenadas por el SGBD

- Regla 11: Independencia de la distribución.
a) Que la base de datos se almacene o gestione de forma distribuida en varios servidores, no afecta al uso de esta ni a la programación de las aplicaciones de usuario
b) El esquema lógico es el mismo independientemente de si la BD es distribuida o no

- Regla 12: La regla de la no subversión.
a) La base de datos no permitirá que exista un lenguaje o forma de acceso, que permita saltarse las reglas anteriores

  ## Entidades y atributos

Una **entidad** es algo similar a un objeto (programación orientada a objetos) y representa algo en el mundo real, incluso algo abstracto. Tienen atributos que son las cosas que los hacen ser una entidad y por convención se ponen en plural.

Los **atributos compuestos** son aquellos que tienen atributos ellos mismos.

Los **atributos llave** son aquellos que identifican a la entidad y no pueden ser repetidos. Existen:

  - Naturales: son inherentes al objeto como el número de serie
  - Clave artificial: no es inherente al objeto y se asigna de manera arbitraria.

**Entidades fuertes:** son entidades que pueden sobrevivir por sí solas.

**Entidades débiles:** no pueden existir sin una entidad fuerte y se representan con un cuadrado con doble línea.

  - Identidades débiles por identidad: no se diferencian entre sí más que por la clave de su identidad fuerte.
  - Identidades débiles por existencia: se les asigna una clave propia.

- [Chen-Notation](https://de.wikipedia.org/wiki/Chen-Notation)

Ejemplo:

Una entidad es algo similar a un objeto (programación orientada a objetos) y representa algo en el mundo real, incluso algo abstracto. Las entidades se escriben en Plural y están representadas por un conjunto de atributos

Estas pueden ser:
  - Concreta: Persona, empleado, casa, auto, etc …
  - Abstracta: cta bancaría, empresa, curso

  ![Base de Datos](https://i.ibb.co/5xycdmn/atributos.webp)

  - Multivaluados: puede tener varios valores (teléfonos, hijos, discos duros)
  - Compuestos: desde los cuales se desprenden más atributos
  - Llave: aquel que identifica la entidad y no se puede repetir y existen dos tipos:
    - Natural: Son inherentes del Objeto (Cedula, No. Serie)
    - Artificial: No es inherente al objeto y se asigna arbitrariamente
  - Derivados: es aquel que se obtiene de un atributo definido (fecha Nac = edad)

  ## Entidades de Platzi Blog

Nuestro proyecto será un manejador de Blogpost. Es un contexto familiar y nos representará retos muy interesantes.

  - Primer paso: Identificar las entidades
  - Segundo paso: Pensar en los atributos

  **Diagrama de Platziblog**
   
  - ![](https://i.ibb.co/kyhdhtB/diagrama.webp)


  ## Relaciones

Las relaciones nos permiten ligar o unir nuestras diferentes entidades y se representan con rombos. Por convención se definen a través de verbos.

Las relaciones tienen una propiedad llamada cardinalidad y tiene que ver con números. Cuántos de un lado pertenecen a cuántos del otro lado:

  - Cardinalidad: 1 a 1
  - Cardinalidad: 0 a 1
  - Cardinalidad: 1 a N
  - Cardinalidad: 0 a N
![](https://i.ibb.co/4sv4wzV/nn.webp)


**Diagrama No. 1**

```mermaid
graph TD;
  Automovil-->tiene;
  tiene-->creador;
```

**Diagrama No. 2**

```mermaid
graph TD;
  Jugadores-->pertenece;
  pertenece<-->Equipo;
  Equipo-->Jugadores;
```

**Relaciones**

```mermaid
graph TD;
  laptops-->tiene;
  tiene-->Disco_duro;
```

**Relaciones**

Las relaciones, representadas por un rombo, sirven para crear relaciones entre entidades. Por convención las relaciones son verbos que conectan entidades. Existen entidades multivaluadas o compuestas que tienen vida propia y se relacionan con otras entidades, por lo que se pueden normalizar (concepto que se explicará luego)

Cardinalidad

Es una propiedad de las relaciones que indica la cantidad y correspondencia con la que puede estar relacionada una entidad y puede ser uno a uno, uno a varios, varios a uno y varios a varios.

![](https://i.ibb.co/8zRtqxk/relacion.png)

  ## Múltiples muchos

Cardinalidades múltiples muchos: También conocida como “Muchos a Muchos”. Es el tipo de cardinalidad en el que muchas entidades de un tipo, pertenecen a muchas entidades de otro, la cual debe ser normalizada y relacionada a partir de llaves foráneas.

![](https://i.ibb.co/BVK45vZ/cardinalidad-n-a-n.webp)

  ## Diagrama ER

Un diagrama es como un mapa y nos ayuda a entender cuáles son las entidades con las que vamos a trabajar, cuáles son sus relaciones y qué papel van a jugar en las aplicaciones de la base de datos.

![](https://i.ibb.co/8M28mpn/ER.webp)


- [Top 5 Free Database Diagram Design Tools](https://www.holistics.io/blog/top-5-free-database-diagram-design-tools/#dbdiagramio)
- [Lucidchart](https://www.lucidchart.com/pages/es/simbolos-de-diagramas-entidad-relacion)
- [Cardinalities](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model#Cardinalities)
- [Diagrams](https://app.diagrams.net/)

  ## Diagrama Físico: tipos de datos y constraints

  Para llevar a la práctica un diagrama debemos ir más allá y darle detalle con parámetros como:

  #### Tipos de dato:

  - **Texto:** CHAR(n), VARCHAR(n), TEXT
  - **Números:** INTEGER, BIGINT, SMALLINT, DECIMAL(n,s), NUMERIC(n,s)
  - **Fecha/hora:** DATE, TIME, DATETIME, TIMESTAMP
  - **Lógicos:** BOOLEAN

  #### Constraints (Restricciones)

  - **NOT NULL:** Se asegura que la columna no tenga valores nulos
  - **UNIQUE:** Se asegura que cada valor en la columna no se repita
  - **PRIMARY KEY:** Es una combinación de NOT NULL y UNIQUE
  - **FOREIGN KEY:** Identifica de manera única una tupla en otra tabla
  - **CHECK:** Se asegura que el valor en la columna cumpla una condición dada
  - **DEFAULT:** Coloca un valor por defecto cuando no hay un valor especificado
  - **INDEX:** Se crea por columna para permitir búsquedas más rápidas

  ## Diagrama Físico: normalización

La normalización como su nombre lo indica nos ayuda a dejar todo de una forma normal. Esto obedece a las 12 reglas de Codd y nos permiten separar componentes en la base de datos:

- **Primera forma normal (1FN):** Atributos atómicos (Sin campos repetidos)
- **Segunda forma normal (2FN):** Cumple 1FN y cada campo de la tabla debe depender de una clave única.
- **Tercera forma normal (3FN):** Cumple 1FN y 2FN y los campos que NO son clave, NO deben tener dependencias.
- **Cuarta forma normal (4FN):** Cumple 1FN, 2FN, 3FN y los campos multivaluados se identifican por una clave única.

![](https://i.ibb.co/w7vkh2m/1.jpg)

![](https://i.ibb.co/PNkM7jV/2.webp)

![](https://i.ibb.co/Zh49bys/3.webp)

![](https://i.ibb.co/fYRjXbB/4.webp)

  ## Diagrama Físico: normalizando Platziblog

La normalización como su nombre lo indica nos ayuda a dejar todo de una forma normal. Esto obedece a las 12 reglas de Codd y nos permiten separar componentes en la base de datos:

![](https://i.ibb.co/HpKvXhs/diagrama-normalizado.jpg)

  ## Formas normales en DB relacionales

La normalización en las bases de datos relacionales es uno de esos temas que, por un lado es sumamente importante y por el otro suena algo esotérico. Vamos a tratar de entender las formas normales (FN) de una manera simple para que puedas aplicarlas en tus proyectos profesionales.

**Primera Forma Normal (1FN)**

Esta FN nos ayuda a eliminar los valores repetidos y no atómicos dentro de una base de datos.

Formalmente, una tabla está en primera forma normal si:

- Todos los atributos son atómicos. Un atributo es atómico si los elementos del dominio son simples e indivisibles.
- No debe existir variación en el número de columnas.
- Los campos no clave deben identificarse por la clave (dependencia funcional).
- Debe existir una independencia del orden tanto de las filas como de las columnas; es decir, si los datos cambian de orden no deben cambiar sus significados.

Se traduce básicamente a que si tenemos campos compuestos como por ejemplo `“nombre_completo”` que en realidad contiene varios datos distintos, en este caso podría ser `“nombre”, “apellido_paterno”, “apellido_materno”`, etc.

También debemos asegurarnos que las columnas son las mismas para todos los registros, que no haya registros con columnas de más o de menos.

Todos los campos que no se consideran clave deben depender de manera única por el o los campos que si son clave.

Los campos deben ser tales que si reordenamos los registros o reordenamos las columnas, cada dato no pierda el significado.

**Segunda Forma Normal (2FN)**

Esta FN nos ayuda a diferenciar los datos en diversas entidades.

Formalmente, una tabla está en segunda forma normal si:

- Está en 1FN
- Sí los atributos que no forman parte de ninguna clave dependen de forma completa de la clave principal. Es decir, que no existen dependencias parciales.
- Todos los atributos que no son clave principal deben depender únicamente de la clave principal.

Lo anterior quiere decir que sí tenemos datos que pertenecen a diversas entidades, cada entidad debe tener un campo clave separado. Por ejemplo:

![](https://i.ibb.co/hfp2jdn/1-1.webp)

En la tabla anterior tenemos por lo menos dos entidades que debemos separar para que cada uno dependa de manera única de su campo llave o ID. En este caso las entidades son alumnos por un lado y materias por el otro. En el ejemplo anterior, quedaría de la siguiente manera:

![](https://i.ibb.co/rmZ01ks/2-1.webp)

**Tercera Forma Normal (3FN)**

Esta FN nos ayuda a separar conceptualmente las entidades que no son dependientes.

Formalmente, una tabla está en tercera forma normal si:

Se encuentra en 2FN
No existe ninguna dependencia funcional transitiva en los atributos que no son clave

Esta FN se traduce en que aquellos datos que no pertenecen a la entidad deben tener una independencia de las demás y debe tener un campo clave propio. Continuando con el ejemplo anterior, al aplicar la 3FN separamos la tabla alumnos ya que contiene datos de los cursos en ella quedando de la siguiente manera.

![](https://i.ibb.co/rMfR8M8/3-1.webp)

![](https://i.ibb.co/3pZZQPN/3-2.webp)

**Cuarta Forma Normal (4FN)**

Esta FN nos trata de atomizar los datos multivaluados de manera que no tengamos datos repetidos entre rows.

Formalmente, una tabla está en cuarta forma normal si:

- Se encuentra en 3FN
- Los campos multivaluados se identifican por una clave única

Esta FN trata de eliminar registros duplicados en una entidad, es decir que cada registro tenga un contenido único y de necesitar repetir la data en los resultados se realiza a través de claves foráneas.

Aplicado al ejemplo anterior la tabla materia se independiza y se relaciona con el alumno a través de una tabla transitiva o pivote, de tal manera que si cambiamos el nombre de la materia solamente hay que cambiarla una vez y se propagara a cualquier referencia que haya de ella.

![](https://i.ibb.co/YQJGL5k/4-1.webp)

![](https://i.ibb.co/mJpMswC/4-2.webp)

De esta manera, aunque parezca que la información se multiplicó, en realidad la descompusimos o normalizamos de manera que a un sistema le sea fácil de reconocer y mantener la consistencia de los datos.

Algunos autores precisan una 5FN que hace referencia a que después de realizar esta normalización a través de uniones (JOIN) permita regresar a la data original de la cual partió.


# 3. RDBMS (MySQL) o cómo hacer lo anterior de manera práctica

## RDB ¿Qué?

RDBMS significa **R**elational **D**atabase **M**anagement **S**ystem o sistema manejador de bases de datos relacionales. Es un programa que se encarga de seguir las reglas de Codd y se puede utilizar de manera programática.

La diferencia entre ambos es que las BBDD son un conjunto de datos pertenecientes ( o al menos en teoría) a un mismo tipo de contexto, que guarda los datos de forma persistente para un posterior uso, y el Sistema de gestión de BBDD o sistema manejador, es el que nos permite acceder a ella, es un software, herramienta que sirve de conexión entre las BBDD y el usuario (nos presenta una interfaz para poder gestionarla, manejarla).

RDBMS

- MySQL
- PostgreSQL
- Etc

Todas toman un lenguaje base, pero cada uno lo apropia, imponiéndole diferentes reglas y características.

## Instalación local de un RDBMS (Windows)

Hay dos maneras de acceder a manejadores de bases de datos:

- Instalar en máquina local un administrador de bases relacional.
- Tener ambientes de desarrollo especiales o servicios cloud.

En este curso usaremos `MySQL` porque tiene un impacto histórico siendo muy utilizado y además es software libre y gratuito.
La versión 5.6.43 es compatible con la mayoría de aplicaciones y frameworks.

- La versión 5.6.43 es compatible con la mayoría de aplicaciones y frameworks.

- [MYSQL](https://dev.mysql.com/downloads/windows/installer/5.6.html)

## Instalación local de un RDBMS (Mac)

Si olvidaste tu clave:

1. Abrir Terminal.
2. Apagar MySQL Server:

```bash
sudo /usr/local/mysql/support-files/mysql.server stop
sudo /usr/local/mysql/support-files/mysql.server status
```

1. Iniciar MySQL en Safe Mode:

```shell
sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables
```
1. Abrir otra ventana de la Terminal
2. Iniciar MySQL shell:

```bash
/usr/local/mysql/bin/mysql -u root -p
```

1. Borrar contraseña:

```bash
UPDATE mysql.user SET authentication_string=null WHERE User='root';
FLUSH PRIVILEGES;
exit;
```


1. Crear nueva contraseña:

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'tunuevacontraseña';
```

1. Salir de MySQL Shell:
```bash
exit;
```

1. Reiniciar el Server:

```bash
sudo /usr/local/mysql/support-files/mysql.server stop
sudo /usr/local/mysql/support-files/mysql.server start
```

- [MySQL Community Downloads](https://dev.mysql.com/downloads/workbench/)
- [MySQL Community Downloads](https://dev.mysql.com/downloads/mysql/5.7.html)

## Instalación local de un RDBMS (Ubuntu)

- [MySQL Community Server 5.7.33 | Downloads](https://dev.mysql.com/downloads/mysql/5.7.html#downloads)

Dirígete a la sección de selección de descargas y selecciona tu distribución de Linux. En nuestro caso Ubuntu y selecciona posteriormente la versión que estás utilizando actualmente, en nuestro caso 18.04 de 64 bits.

![](https://i.ibb.co/xmHrcyZ/mysql.webp)

Más abajo encontrarás las diferentes opciones de descarga existen diversos paquetes dependiendo tus necesidades. En el caso del ejemplo usaremos la versión deb bundle. Da click en el botón Download seleccionado.

![](https://i.ibb.co/2FK0pPP/mysql1.webp)

En la siguiente pantalla nos piden que nos registremos o iniciemos sesión, pero ya que solo queremos la descarga daremos click en el link que se encuentre en la parte de abajo.

![](https://i.ibb.co/G0G2BgP/mysql2.webp)

Espera a que la descarga concluya.
Al terminar abre el archivo `.tar` con el desempaquetador de tu preferencia.

![](https://i.ibb.co/WysFzjj/mysql3.webp)

Extrae el contenido en la carpeta de tu preferencia.

![](https://i.ibb.co/4FC5BBp/mysql4.webp)

Selecciona el archivo de servidor de comunidad y ábrelo con tu manejador de paquetes instalado.

![](https://i.ibb.co/CKtB7vs/mysql5.webp)

![](https://i.ibb.co/PtwF46T/mysql6.webp)

Da click en instalar.

Finalmente puedes ir a la consola o terminal de Ubuntu y escribir el siguiente comando.

```bash
sudo mysql
```

![](https://i.ibb.co/THsjLmq/terminal.webp)

A continuación deberá aparecer una ventana con el prompt de mysql donde ya puedes comenzar a ejecutar los comandos de las lecciones.

![](https://i.ibb.co/XXB56pP/terminal1.webp)

**Nota:** recuerda estar seguro que las dependencias para el paquete se cumplen para instalar.

**Nota:** muchas veces las distribuciones ya cuentan con paquetes en su repositorio, en ese caso también puedes ejecutar el comando:

```bash
sudo apt-get install mysql-server
```

### Para configurar workbench:

(Que les recomiendo que hagan esto ahora y copien y peguen los comandos tal cual, ya que en las próximas clases les ahorrará tiempo al tratar con un tipo de error).

```bash
sudo mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'TOD@MySQL123'
```

Para abrir workbench:

```bash
sudo mysql-workbench
```

- Click al local host por default.
- Escribir la contraseña ‘password’
- Listo.

### Workbench Linux

- [Download MySQL Workbench](https://www.mysql.com/products/workbench/)

Se descargará un `archivo.deb`, así que abrí la terminal (en la dirección donde se encuantra el archivo)
y ejecutamos:

```bash
sudo dpkg -i archivo.deb
sudo apt update
```

Dado que me salió un error de copatibilidad con `libpython2.7`, lo corregí ejecutando:

```bash
sudo apt --fix-broken install
```

  - Para iniciar pueden usar:

```bash
mysql -u root
```

  - Para configurar el password y entrar con

```bash
sudo mysql -u root -p
```

Despues enter, cuando pide el `password` pueden ver las indicaciones en [MysQL | Error Access Denied For Root](https://www.youtube.com/watch?v=NdQL-mUGnUE). Asi cuando abran workbench y hagan la conección no habra lios.

- [Instalación de Apache2 - php - Mysql y Phpmyadmin en Ubuntu 18.04](https://www.youtube.com/watch?v=HOzWc_DtdQg)

### Error al installar Workbench

Solucion, va asi:

Pagina oficial, descargar:

```bash
mysql-workbench-community_8.0.22-1ubuntu18.04_amd64.deb
```

luego hacer:

```bash
$ sudo dpkg -i install mysql-workbench-community_8.0.22-1ubuntu18.04_amd64.deb
```
va a haber un problema con dependencias, entonces hacer lo siguiente para resolcerlas:

```bash
$ sudo apt install -f
```

luego volver a hacer:

```bash
$ sudo dpkg -i install mysql-workbench-community_8.0.22-1ubuntu18.04_amd64.deb
```

Para comprobar que si se haya instalado el preciado binario, hacer:

```bash
$ ls /usr/bin/ | grep -i "mysql-workbench"
```

y ahora, podemos trabajar desde debian con dicho cliente grafico! lo lanzamos haciendo:

```bash
$ mysql-Workbench

```

## Clientes gráficos

### Verificar la configuracion de MySQL

```bash
sudo mysql -u root -p
```

```sql
mysql> use mysql
mysql> SELECT User, Host, plugin FROM mysql.user;
```

  - Debemos cambiar el plugin de auth_socket a mysql_native_password.

```sql
mysql> UPDATE user SET plugin='mysql_native_password' WHERE User='root';
mysql> FLUSH PRIVILEGES;
```

  - Revisamos los cambios:

```sql
mysql> SELECT User, Host, plugin FROM mysql.user;
```

En MySQL Workbench modificamos la instancia para poner la clave de root.

## Servicios administrados

Hoy en día muchas empresas ya no tienen instalados en sus servidores los RDBMS sino que los contratan a otras personas. Estos servicios administrados cloud te permiten concentrarte en la base de datos y no en su administración y actualización.

- [Google Cloud Platform](https://console.cloud.google.com/getting-started?pli=1)
- [Free Web Hosting](https://www.000webhost.com/?__cf_chl_jschl_tk__=aead23a2048cd5bf2851c4260a6899fbb5286458-1616684734-0-AdryqIJxNx32xaZDWAIJ14EDRTdeIzShSNfirhSYzSncCJpQQ4sPEr6163bTNeRHyzPzHbPmxeEl8UPwm8AdEpa4s1Yh1HfzsOFLKNpJXbLOsTHXdmYyD4QU80BUySjH-nWuSOGu0bEfF510iZ9bglpqNDtIA3Q4HWg3zETBs6S9iqzOsDGaRARDHjtK9N2RMpsUOGB-1IKZZW4e7N2XPvQMlWk_fOf9DiA2ynpJLdIQNst8k8Y3SyFTwmjIzsUStaJYgqCgI5sDk9YacxITfGEkBP-jwdRc-tf7NY0K4Z-yZy3PL9bW9MmU5KVjFG8SIg)


# 4. SQL hasta en la sopa

## Historia de SQL

**SQL significa Structured Query Language** y tiene una estructura clara y fija. Su objetivo es hacer un solo lenguaje para consultar cualquier manejador de bases de datos volviéndose un gran estándar.

Ahora existe el **NOSQL o Not Only Structured Query Language** que significa que no sólo se utiliza SQLen las bases de datos no relacionales.
Debido a la necesidad de la época por realizar consultas de datos de una forma más organizada se crea SQL como una especie de lenguaje estándar para hacer este proceso en los distintos manejadores de datos, ahora en la actualidad a partir del SQL se crea el NoSQL el cual es un poco más complejo, pero tiene la base de SQL y nos permite manejar los datos de una mejor forma.

SQL es un lenguaje de acceso a bases de datos que explota la flexibilidad y potencia de los sistemas relacionales y permite así gran variedad de operaciones.

SQL es un estándar aceptado por ANSI (Instituto Nacional Estadounidense de Estándares)
PL/SQL es un lenguaje de programación de la base de datos de Oracle, el nombre viene de Procedural Language/Structured Query Language
T-SQL es un lenguaje de programación de la base de datos de Microsoft SQL Server y el nombre viene de TRANSACT-SQL

## DDL create

**SQL** tiene dos grandes sublenguajes:
**DDL** o Data Definition Language que nos ayuda a crear la estructura de una base de datos. Existen 3 grandes comandos:

  - **Create:** Nos ayuda a crear bases de datos, tablas, vistas, índices, etc.
  - **Alter:** Ayuda a alterar o modificar entidades.
  - **Drop:** Nos ayuda a borrar. Hay que tener cuidado al utilizarlo.
   
**3 objetos que manipularemos con el lenguaje DDL:**

  - Database o bases de datos
  - Table o tablas. Son la traducción a SQL de las entidades
  - View o vistas: Se ofrece la proyección de los datos de la base de datos de forma entendible.

**DML**
o Data Manipulation Language o Lenguaje de Manipulación de Datos
o Lenguaje procedimental y declarativo  conjunto de instrucciones que apoyarán al proceso de construcción de la BD
o Las sentencias DML afectan los registros en una tabla. Estas son operaciones básicas que realizamos sobre datos tales como seleccionar algunos registros de una tabla, insertar nuevos registros, eliminar registros innecesarios y actualizar / modificar registros existentes.
o Opciones DML

**`SELECT:`** para seleccionar registros de tablas
**`INSERT:`** para insertar nuevos registros
**`UPDATE:`** para actualizar y modificar registros
**`DELETE:`** para eliminar registros existentes.

**DDL**
o Data Definition Language o Lenguaje de Definición de Datos
o Aquí ya se especifica el esquema de la BD, generando un diccionario de datos, las restricciones de integridad y las autorizaciones para que ciertos usuarios no vean cierto contenido.
o Sentencias DDL son las necesarias para poder modificar la BD, esquema y ESTRUCTURA de las tablas. Son las útiles para el diseño y control de objetos que se encuentran dentro de las BD.
o Opciones DDL

`CREATE:` Crear una nueva base de datos, una tabla o esquema.
`ALTER:` Alterar tabla existente, descripción de columnas, etc.
`DROP:` Eliminar objetos existentes de la BD.

3 objetos que manipularemos con el lenguaje DDL
- Database
- Tables  traducción a SQL de las entidades
- View  se ofrece la proyección de los datos de la BD de forma entendible

**DCL**
o Lenguaje de Control de Datos
o Las declaraciones DLC son las encargadas de controlar el acceso de los usuarios a las BD.
o Opciones DDL

**GRANT:**
• Declaración que permite a los usuarios leer / escribir en objetos que digamos de                                                                                                                                  la BD.
**REVOKE:**
• Es la que ofrece a los usuarios estar sin permiso de lectura / escritura en objetos de la BD.

**TLC**
o Lenguaje de Control de Transacciones
o Instrucciones que permiten administrar transacciones y tener integridad de datos dentro de las declaraciones SQL. Se gestiona a través de las siguientes declaraciones

`BEGIN Transaction`
• Nos permite abrir una transacción
`COMMIT Transaction`
• Ofrece confirmar una transacción
`ROLLBACK Transaction`
• Devuelve una transacción en caso de error cometido.

```sql
CREATE DATABASE IF NOT EXISTS platziblog;
-- SHOW DATABASES; ver bases de datos
USE platziblog;
CREATE TABLE IF NOT EXISTS people (
person_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
last_name VARCHAR(255) NULL,
first_name VARCHAR(255) NULL,
address VARCHAR(255) NULL, 
city VARCHAR(255) NULL
);
-- SHOW TABLES ; ver tablas
DESCRIBE people; -- ver la estructura de la tabla
```

## CREATE VIEW y DDL ALTER

Las vista se usan como una capa de seguridad dentro de las organizaciones. por ejemplo: una tabla trabajador tiene todos los datos de una persona (numero de identificación, numero telefonico, dirección, y otros datos que pueden ser sensibles), el administrador de la base de datos lo que hace es crear vistas solo con los datos que son relevantes para consultas en las distintas areas de la empresas sin exponer información de mas.

Ejercicio

```sql
DELETE FROM people; -- Elimina la información dentro de la tabla.
ALTER TABLE people AUTO_INCREMENT = 1 ; -- Reinicia el autoincrement a 1
INSERT INTO people (last_name, first_name, address, city)VALUES('Vázquez', 'Israel','Calle Famosa Num 1','México'),
('Hernández','Mónica','Reforma 222','México'),
('Alanis','Edgar','Central 1', 'Monterrey'); -- Insertar datos a la tabla

CREATE OR REPLACE VIEW platzi_people AS -- Crear vista
SELECT * FROM people;

select * from platzi_people; -- consultar vista

ALTER TABLE people ADD COLUMN date_of_birth DATETIME NULL AFTER city; -- Agregar columna
DESCRIBE people;
ALTER TABLE people DROP COLUMN date_of_birth; -- Eliminar columna
DESCRIBE people;
```

Si tienes un error al querer hacer una sentencia UPDATE o DELETE ejecuta

```sql
SET SQL_SAFE_UPDATES=0;
```

Una vista es una consulta presentada mediante la estructura de una tabla (filas y columnas) y en ellas solo se almacena la definición, mas no los datos. Una vista esta especificada a través de una consulta, es decir, un SELECT.


- [MySQL What is DDL, DML and DCL?](https://www.w3schools.in/mysql/ddl-dml-dcl/)

## DDL drop

Está puede ser la sentencia ¡más peligrosa! (????), sobre todo cuando somos principiantes. Básicamente borra o desaparece de nuestra base de datos algún elemento.

Es recomendable hacer respaldos antes de cualquier cambio en el código de la base de datos, me he salvado de fallos masivos gracias a tener esa consideración siempre.

> Tu que sabes de tomar riesgos si nunca usaste Drop!!

## DML

**DML** trata del contenido de la base de datos. Son las siglas de Data Manipulation Language y sus comandos son:

- **Insert:** Inserta o agrega nuevos registros a la tabla.
- **Update:** Actualiza o modifica los datos que ya existen.
- **Delete:** Esta sentencia es riesgosa porque puede borrar el contenido de una tabla.
- **Select:** Trae información de la base de datos.

#### DDL -> Data Definition Language

Ayuda a crear la estructura de una BD.

**Create**

  * Database
  * Table
  * View
  - Alter
  - Drop

#### DML -> Data Manipulation Language

Ayuda a la manipulacion del contenido

  - Insert
  - Update
  - Delete
  - Select

**DML: Data Manipulation Language**
Por su traducción lenguaje de manipulación de datos nos proporciona comandos para llevar acabo tareas de consulta o manipulación de datos
Comandos DML:

- **Select (Seleccionar):** Este comando nos permite consultar los datos almacenados en una tabla de la base de datos. Select cuenta con los siguientes subcomandos:

- **ALL:** Indica que queremos seleccionar todos los valores.
- **DISTINCT:** Indica que queremos seleccionar sólo los valores distintos
- **FROM:** Indica la tabla (o tablas) desde la que queremos recuperar los datos.
- **WHERE:** Especifica una condición que debe cumplirse para que los datos sean devueltos por la consulta. Admite los operadores lógicos AND y OR.
- **GROUP BY:** Especifica la agrupación que se da a los datos.
- **ORDER BY:** Presenta el resultado ordenado por las columnas indicadas.
- **Insert (Insertar):** Este comando agrega uno o más registros a una (y sólo una) tabla en una base de datos relacional.
- **Update (Actualizar):** Este comando es utilizado para modificar los valores de un conjunto de registros existentes en una tabla.
- **Delete (Borrar):** Este comando borra uno o más registros existentes en una tabla. 😃

```sql
Insert INTO people (last_name, first_name, address, city) 
VALUES ('Hernandez', 'Laura', 'Calle 21', 'Monterrey');
.
UPDATE people 
SET 
    last_name = 'Chavez',
    city = 'Merida'
WHERE
    person_id = 1;
.
DELETE FROM people 
WHERE
    person_id = 1;
.
SELECT 
    first_name, last_name
FROM
    people;

```

## ¿Qué tan standard es SQL?

La utilidad más grande de SQL fue unificar la forma en la que pensamos y hacemos preguntas a un repositorio de datos. Ahora que nacen nuevas bases de datos igualmente siguen tomando elementos de SQL.

## Creando Platziblog: tablas independientes

- Una buena práctica es comenzar creando las entidades que no tienen una llave foránea.
- Generalmente en los nombres de bases de datos se evita usar eñes o acentos para evitar problemas en los manejadores de las bases de datos.

Example de diagrama de base de dato

![](https://i.ibb.co/wMC3rDg/mysql.webp)

![](https://i.ibb.co/kJkgKP6/diag.webp)

## Creando Platziblog: tablas dependientes

El comando “cascade” sirve para que cada que se haga un update en la tabla principal, se refleje también en la tabla en la que estamos creando la relación.

**Las Foreing Key options son las siguientes:**

- **`On update:`** Significa qué pasará con las relaciones cuando una de estas sea modificada en sus campos relacionados, Por ejemplo, pueden utilizarse los valores:
- `cascade:` Si el id de un usuario pasa de 11 a 12, entonces la relacion se actualizará y el post buscará el id nuevo en lugar de quedarse sin usuario.
- `restrict:` _Si el id de un usuario pasa de 11 a 12, no lo permitirá hasta que no sean actualizados antes todos los post relacionados.
set null Si el id de un usuario pasa de 11 a 12, entonces los post solo no estará relacionados con nada.
no action: Si el id de un usuario pasa de 11 a 12, no se hará nada. Solo se romperá la relación.
On delete
- `cascade:` Si un usuario es eliminado entonces se borrarán todos los post relacionados.
restrict: No se podrá eliminar un usuario hasta que sean eliminados todos su post relacionados.
- `set null:` Si un usuario es eliminado, entonces los post solo no estará relacionados con nada.
- `no action:` Si un usuario es eliminado, no se hará nada. Solo se romperá la relación.

**Crear tablas en orden:**

  - categorias
  - etiquetas
  - usuarios
  - posts


**ACTIONS:**
- `NO ACTION:` No hacer nada al borrar alguna de las partes de la relación
- `SET NULL:` El campo de llave foranea se setea en NULO (NULL), esto solo si el campo tiene permitido los NULOS
- `CASCADE:` Se hace efecto cascada, si la dependencia se borra entonces se borra también se borra el registro que es dependiente Ejemplo: Al borrar un Usuario se borrarían todos los POSTS en caso de seleccionar CASCADE
- `RESTRICT:` En caso de intentar borrar la dependencia y existen registros dependientes, no se permite el borrado, Ejemplo: Si se intenta borrar un usuario y este tiene posts, entonces no se permite el borrado del usuario


## Creando Platziblog: tablas transitivas

- Las tablas transitivas sirven como puente para unir dos tablas. No tienen contenido semántico.
- **Reverse Engineer** nos reproduce el esquema del cual nos basamos para crear nuestras tablas. Es útil cuando llegas a un nuevo trabajo y quieres entender cuál fue la mentalidad que tuvieron al momento de crear las bases de datos.


![](https://i.ibb.co/KN3km0Y/diag.webp)

![](https://i.ibb.co/brN6kxM/blog.webp)

# 5. Consultas a una base de datos

## ¿Por qué las consultas son tan importantes?

Las consultas o queries a una base de datos son una parte fundamental ya que esto podría salvar un negocio o empresa.
Alrededor de las consultas a las bases de datos se han creado varias especialidades como ETL o transformación de datos, business intelligence e incluso machine learning.

Las consultas en una base de datos juegan un papel muy fundamental, puesto que facilitan de manera considerable los procesos en cualquier empresa.
ETL

La palabra ETL correspondería al acrónimo de:

  - **Extract** (Extraer)
  - **Transform** (Transformar)
  - **Load** (Cargar)
 
ETL hace parte del proceso de integración de datos, mas aun es un componente muy importante que completa el resultado final en la relación de aplicaciones y sistemas.

- Las empresas tienen gran necesidad de informacion correcta y oportuna.
- Son una parte fundamental al tratar con bases de datos.
- Se puede aprender a hacer consultas, mejorando nuestra habilidad en ello a lo largo del tiempo.

## Estructura básica de un Query

Los queries son la forma en la que estructuramos las preguntas que se harán a la base de datos. Transforma preguntas en sintaxis.

El query tiene básicamente 2 partes: `SELECT y FROM` y puede aparecer una tercera como `WHERE`.

La estrellita o asterisco `(*)` quiere decir que vamos a seleccionar todo sin filtrar campos.

```sql
SELECT *
FROM platziblog.posts
where fecha_publicacion > 2024;
```

Una consulta normalmente viene con 3 elementos básicos, los cuales son:
  - `SELECT` nombre_atributos
  - `FROM` nombre_entidad
  - `WHERE` nombre_atributo operador`(<, >, =, etc)` valor_atributo

### Atajos con el teclado ue nos pueden ayudar a la escritura y ejecución del código SQL

`Ctrl + T`; nos abre una nueva pestaña de Query para escribir código SQL.

![](https://i.ibb.co/tmC7HJj/1.jpg)

`Ctrl + Shift + Enter`; nos ayuda a ejecutar todo el código SQL que se allá escrito en el editor.

![](https://i.ibb.co/48f5GVd/2.jpg)

`Ctrl + Enter`; nos ayuda ejecutar el código SQL donde el cursor este ubicado.

![](https://i.ibb.co/48f5GVd/2.jpg)


## SELECT

`SELECT` se encarga de proyectar o mostrar datos.

- El nombre de las columnas o campos que estamos consultando puede ser cambiado utilizando AS después del nombre del campo y poniendo el nuevo que queremos tener:

```sql
SELECT titulo AS encabezado
FROM posts;
```

- Existe una función de SELECT para poder contar la cantidad de registros. Esa información (un número) será el resultado del query:

```sql
SELECT COUNT(*)
FROM posts;
```

![](https://i.ibb.co/cF1Q27G/SQL-torpedo.jpg)

## FROM

`FROM` indica de dónde se deben traer los datos y puede ayudar a hacer sentencias y filtros complejos cuando se quieren unir tablas. La sentencia compañera que nos ayuda con este proceso es `JOIN`.

Los diagramas de Venn son círculos que se tocan en algún punto para ver dónde está la intersección de conjuntos. Ayudan mucho para poder formular la sentencia JOIN de la manera adecuada dependiendo del query que se quiere hacer.

![](https://i.ibb.co/1LcM3kD/join.webp)

![](https://i.ibb.co/PZkgkY6/sqljoin.jpg)

![](https://i.ibb.co/kgNvsM8/join1.jpg)

![](https://i.ibb.co/YcYJDZM/join2.jpg)

Ejercicios de consultas para practicar sin la necesidad de ingresar los datos por si mismos [😉](https://josejuansanchez.org/bd/ejercicios-consultas-sql/index.html)


## Utilizando la sentencia FROM

Forma de ejercutar nuestra codigo en la base de datos.

```sql
-- mysql-workbench
SELECT	*
FROM	platziblog.usuarios 
	LEFT JOIN platziblog.posts ON platziblog.usuarios.id = platziblog.posts.usuario_id
    WHERE	platziblog.posts.usuario_id IS NULL;
```

```sql
use platziblog;

-- todos los usuarios tengan o no  un post relacionado
 select*
 from usuarios as u
 left join posts as p
 on u.id = p.usuario_id;
 
-- todos los usuarios que no han hecho post
 select*
 from usuarios as u
 left join posts as p
 on u.id = p.usuario_id
 where p.usuario_id IS NULL;

-- todos los post esten o no asociados con un usuario
 select*
 from usuarios as u
 right join posts as p
 on u.id = p.usuario_id;
 
 -- los post que no estan asociados con un usuario
 select*
 from usuarios as u
 right join posts as p
 on u.id = p.usuario_id
 where u.id is null;
 
 -- todos los usuarios que sí hayan hecho posts, con su respectivo post
  select*
 from usuarios as u
 inner join posts as p
 on u.id = p.usuario_id;
 
 -- conjunto universo UNION
  select*
 from usuarios as u
 left join posts as p
 on u.id = p.usuario_id
 UNION
  select*
 from usuarios as u
 right join posts as p
 on u.id = p.usuario_id;
 
 -- los usuarios que no hayan hecho un post, junto con los post que no tiene usuario
   select*
 from usuarios as u
 left join posts as p
 on u.id = p.usuario_id
 where p.usuario_id is NULL
 UNION
  select*
 from usuarios as u
 right join posts as p
 on u.id = p.usuario_id
 where p.usuario_id is NULL;
```

## WHERE

``WHERE`` es la sentencia que nos ayuda a filtrar tuplas o registros dependiendo de las características que elegimos.

La propiedad `LIKE` nos ayuda a traer registros de los cuales conocemos sólo una parte de la información.

La propiedad `BETWEEN` nos sirve para arrojar registros que estén en el medio de dos. Por ejemplo los registros con id entre 20 y 30.

## Utilizando la sentencia WHERE nulo y no nulo

El valor nulo en una tabla generalmente es su valor por defecto cuando nadie le asignó algo diferente. La sintaxis para hacer búsquedas de datos nulos es IS NULL. La sintaxis para buscar datos que no son nulos es IS NOT NULL

## GROUP BY



## ORDER BY y HAVING



## El interminable agujero de conejo (Nested queries)



## ¿Cómo convertir una pregunta en un query SQL?



## Preguntándole a la base de datos



## Consultando PlatziBlog



# 6. Introducción a la bases de datos NO relacionales
## ¿Qué son y cuáles son los tipos de bases de datos no relacionales?
## Servicios administrados y jerarquía de datos
# 7. Manejo de modelos de datos en bases de datos no relacionales
## Top level collection con Firebase
## Creando y borrando documentos en Firestore
## Colecciones vs subcolecciones
## Recreando Platziblog
## Construyendo Platziblog en Firestore
## Proyecto final: transformando tu proyecto en una db no relacional
# 8. Bases de datos en la vida real
## Bases de datos en la vida real
## Big Data
## Data warehouse
## Data mining
## ETL
## Business intelligence
## Machine Learning
## Data Science
## ¿Por qué aprender bases de datos hoy?
# 9. Bonus
## Bases de datos relacionales vs no relacionales
## Elegir una base de datos
