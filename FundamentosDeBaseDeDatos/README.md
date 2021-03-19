# Fundamentos de Base de Datos

#### Israel Vázquez Morales

- [1. Bienvenida conceptos básicos y contexto histórico de las Bases de Datos](#1-Bienvenida-conceptos-básicos-y-contexto-histórico-de-las-Bases-de-Datos)
  - [Bienvenida conceptos básicos y contexto histórico de las Bases de Datos](#Bienvenida-conceptos-básicos-y-contexto-histórico-de-las-Bases-de-Datos)
- [2. Introducción a las bases de datos relacionales](2-Introducción-a-las-bases-de-datos-relacionales)
  - [Historia de las RDB](#Historia-de-las-RDB)
  - [Entidades y atributos](#Entidades-y-atributos)
  - [Entidades de Platzi Blog](#Entidades-de-Platzi-Blog)
  - [Relaciones](#Relaciones)
  - [Múltiples muchos](#Múltiples-muchos)
  - [Diagrama ER](#Diagrama-ER)
  - [Diagrama Físico: tipos de datos y constraints](#Diagrama-Físico-tipos-de-datos-y-constraints)
  - [Diagrama Físico: normalización](#Diagrama-Físico-normalización)
  - [Diagrama Físico: normalizando Platziblog](#Diagrama-Físico-normalizando-Platziblog)
  - [Formas normales en DB relacionales](#Formas-normales-en-DB-relacionales)
- [3. RDBMS (MySQL) o cómo hacer lo anterior de manera práctica](#3-RDBMS-MySQL-o-cómo-hacer-lo-anterior-de-manera-práctica)
  - [RDB ¿Qué?](#RDB-¿Qué?)
  - [Instalación local de un RDBMS (Windows)](#Instalación-local-de-un-RDBMS-Windows)
  - [Instalación local de un RDBMS (Mac)](#Instalación-local-de-un-RDBMS-Mac)
  - [Instalación local de un RDBMS (Ubuntu)](#Instalación-local-de-RDBMS-Ubuntu)
  - [Clientes gráficos](#Clientes-gráficos)
  - [Servicios administrados](#Servicios-administrados)
- [4. SQL hasta en la sopa](#4-SQL-hasta-en-la-sopa)
  - [Historia de SQL](#Historia-de-SQL)
  - [DDL create](#DDL-create)
  - [CREATE VIEW y DDL ALTER](#CREATE-VIEW-y-DDL-ALTER)
  - [DDL drop](#DDL-drop)
  - [DML](#DML)
  - [¿Qué tan standard es SQL?](#¿Qué-tan-standard-es-SQL?)
  - [Creando Platziblog: tablas independientes](#Creando-Platziblog-tablas-independientes)
  - [Creando Platziblog: tablas dependientes](#Creando-Platziblog-tablas-dependientes)
  - [Creando Platziblog: tablas transitivas](#Creando-Platziblog-tablas-transitivas)
- [5. Consultas a una base de datos](#5-Consultas-a-una-base-de-datos)
  - [¿Por qué las consultas son tan importantes?](#¿Por-qué-las-consultas-son-tan-importantes?)
  - [Estructura básica de un Query](#Estructura-básica-de-un-Query)
  - [SELECT](#SELECT)
  - [FROM](#FROM)
  - [Utilizando la sentencia FROM](#Utilizando-la-sentencia-FROM)
  - [WHERE](#WHERE)
  - [Utilizando la sentencia WHERE nulo y no nulo](#Utilizando-la-sentencia-WHERE-nulo-y-no-nulo)
  - [GROUP BY](#GROUP-BY)
  - [ORDER BY y HAVING](#ORDER-BY-y-HAVING)
  - [El interminable agujero de conejo (Nested queries)](#El-interminable-agujero-de-conejo-Nested-queries)
  - [¿Cómo convertir una pregunta en un query SQL?](#¿Cómo-convertir-una-pregunta-en-un-query-SQL?)
  - [Preguntándole a la base de datos](#Preguntándole-a-la-base-de-datos)
  - [Consultando PlatziBlog](#Consultando-PlatziBlog)
- [6. Introducción a la bases de datos NO relacionales](#6-Introducción-a-la-bases-de-datos-NO-relacionales)
  - [¿Qué son y cuáles son los tipos de bases de datos no relacionales?](#¿Qué-son-y-cuáles-son-los-tipos-de-bases-de-datos-no-relacionales?)
  - [Servicios administrados y jerarquía de datos](#Servicios-administrados-y-jerarquía-de-datos)
- [7. Manejo de modelos de datos en bases de datos no relacionales](#7-Manejo-de-modelos-de-datos-en-bases-de-datos-no-relacionales)
  - [Top level collection con Firebase](#Top-level-collection-con-Firebase)
  - [Creando y borrando documentos en Firestore](#Creando-y-borrando-documentos-en-Firestore)
  - [Colecciones vs subcolecciones](#Colecciones-vs-subcolecciones)
  - [Recreando Platziblog](#Recreando-Platziblog)
  - [Construyendo Platziblog en Firestore](#Construyendo-Platziblog-en-Firestore)
  - [Proyecto final: transformando tu proyecto en una db no relacional](#Proyecto-final-transformando-tu-proyecto-en-una-db-no-relacional)
- [8. Bases de datos en la vida real](#8-Bases-de-datos-en-la-vida-real)
  - [Bases de datos en la vida real](#Bases-de-datos-en-la-vida-real)
  - [Big Data](#Big-Data)
  - [Data warehouse](#Data-warehouse)
  - [Data mining](#Data-mining)
  - [ETL](#ETL)
  - [Business intelligence](#Business-intelligence)
  - [Machine Learning](#Machine-Learning)
  - [Data Science](#Data-Science)
  - [¿Por qué aprender bases de datos hoy?](#¿Por-qué-aprender-bases-de-datos-hoy?)
- [9. Bonus](#9-Bonus)
  - [Bases de datos relacionales vs no relacionales](#Bases-de-datos-relacionales-vs-no-relacionales)
  - [Elegir una base de datos](#Elegir-una-base-de-datos)

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



  ## Entidades y atributos



  ## Entidades de Platzi Blog



  ## Relaciones



  ## Múltiples muchos



  ## Diagrama ER



  ## Diagrama Físico: tipos de datos y constraints



  ## Diagrama Físico: normalización



  ## Diagrama Físico: normalizando Platziblog



  ## Formas normales en DB relacionales



3. RDBMS (MySQL) o cómo hacer lo anterior de manera práctica
RDB ¿Qué?
Instalación local de un RDBMS (Windows)
Instalación local de un RDBMS (Mac)
Instalación local de un RDBMS (Ubuntu)
Clientes gráficos
Servicios administrados
4. SQL hasta en la sopa
Historia de SQL
DDL create
CREATE VIEW y DDL ALTER
DDL drop
DML
¿Qué tan standard es SQL?
Creando Platziblog: tablas independientes
Creando Platziblog: tablas dependientes
Creando Platziblog: tablas transitivas
5. Consultas a una base de datos
¿Por qué las consultas son tan importantes?
Estructura básica de un Query
SELECT
FROM
Utilizando la sentencia FROM
WHERE
Utilizando la sentencia WHERE nulo y no nulo
GROUP BY
ORDER BY y HAVING
El interminable agujero de conejo (Nested queries)
¿Cómo convertir una pregunta en un query SQL?
Preguntándole a la base de datos
Consultando PlatziBlog
6. Introducción a la bases de datos NO relacionales
¿Qué son y cuáles son los tipos de bases de datos no relacionales?
Servicios administrados y jerarquía de datos
7. Manejo de modelos de datos en bases de datos no relacionales
Top level collection con Firebase
Creando y borrando documentos en Firestore
Colecciones vs subcolecciones
Recreando Platziblog
Construyendo Platziblog en Firestore
Proyecto final: transformando tu proyecto en una db no relacional
8. Bases de datos en la vida real
Bases de datos en la vida real
Big Data
Data warehouse
Data mining
ETL
Business intelligence
Machine Learning
Data Science
¿Por qué aprender bases de datos hoy?
9. Bonus
Bases de datos relacionales vs no relacionales
Elegir una base de datos