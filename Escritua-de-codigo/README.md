# Buenas Prácticas para Escritura de Código

### Mauro Chojrin

# Tabla de Contenido
- [1. Comprender los objetivos y pre-requisitos del curso](#1.-Comprender-los-objetivos-y-pre-requisitos-del-curso)
  - [Introducción y bienvenida](#Introducción-y-bienvenida)
  - [¿A quién beneficia contar con código bien escrito?](#¿A-quién-beneficia-contar-con-código-bien-escrito?)
  - [Ejes que hacen a la calidad del código](#Ejes-que-hacen-a-la-calidad-del-código)
- [2. Aprender a escribir código legible](#2.-Aprender-a-escribir-código-legible)
  - [Código prolijo](#Código-prolijo)
  - [Identificadores mnemotécnicos, específicos y precisos](#Identificadores-mnemotécnicos-específicos-y-precisos)
- [3. Aprender a escribir código mantenible](#3.-Aprender-a-escribir-código-mantenible)
  - [Código modular](#Código-modular)
  - [Código reutilizable](#Código-reutilizable)
  - [Código organizado](#Código-organizado)
- [4. Escribir código libre de vicios](#4.-Escribir-código-libre-de-vicios)
  - [Evitar el hardcoding](#Evitar-el-hardcoding)
  - [Evitar efectos colaterales](#Evitar-efectos-colaterales)
- [5. Conocer los principios SOLID](#5.-Conocer-los-principios-SOLID)
  - [Principios SOLID: Single Responsibility Principle](#Principios-SOLID-Single-Responsibility-Principle)
  - [Open/Closed Principle](#Open-Closed-Principle)
  - [Liskov Substitution Principle](#Liskov-Substitution-Principle)
  - [Interface Segregation Principle](#Interface-Segregation-Principle)
  - [Dependency Inversion Principle](#Dependency-Inversion-Principle)
- [6. Conocer los conceptos de Patrones de diseño y su aplicación](#6.-Conocer-los-conceptos-de-Patrones-de-diseño-y-su-aplicación)
  - [Patrones de diseño: Singleton](#Patrones-de-diseño-Singleton)
  - [Factory](#Factory)
  - [Command](#Command)
- [7. Comprender las nociones de testing automatizado](#7.-Comprender-las-nociones-de-testing-automatizado)
  - [Introducción al Testing Automatizado](#Introducción-al-Testing-Automatizado)
  - [Armado del entorno de pruebas en PHP](#Armado-del-entorno-de-pruebas-en-PHP)
  - [Test Driven Development](#Test-Driven-Development)
- [8. Incorporar habilidades para el trabajo en equipo](#8.-Incorporar-habilidades-para-el-trabajo-en-equipo)
  - [Pull requests](#Pull-requests)
  - [Documentación](#Documentación)
- [9. Reforzar lo aprendido](#9.-Reforzar-lo-aprendido)
  - [A quién beneficia el código bien escrito](#A-quién-beneficia-el-código-bien-escrito)
  - [Aplicar lo aprendido: Libro de visitas](#Aplicar-lo-aprendido-Libro-de-visitas)
  - [Conclusiones](#Conclusiones)
  
  ***

# 1. Comprender los objetivos y pre-requisitos del curso

  ## Introducción y bienvenida

¡Bienvenido al Curso de Buenas Prácticas para Escritura de Código!

En este curso nuestro profesor Mauro Chojrin nos enseñará una serie de técnicas que nos ayudarán a realizar aplicaciones más robustas, escalables y mantenibles en el tiempo.

  - TDD **Test Driven Development (o Desarrollo Orientado por Pruebas)**
  - Identificación de problemas comunes en la escritura de codigo y como evitarlas
  Principio SOLID

  ## ¿A quién beneficia contar con código bien escrito?

El código bien escrito beneficia a todos los involucrados en el proyecto.

  - **A tí:** Cuando retomemos un proyecto después de un largo tiempo nos beneficiará ya que sabremos cómo está ordenado y cómo está escrito todo.
  - **A cualquiera:** Cualquier persona que deba modificar el código después de tí.
  - **A tu cliente:** Aunque nunca lo sabrá, su negocio estará mejor atendido.

  ## Ejes que hacen a la calidad del código

  - **Características externas →** Son las características que observan los usuarios al interactuar con el software.
  - **Características internas →** Son aquellas características que solo estarán visibles cuando analicemos el código independientemente del software que se haya producido con ese código.

Dentro de las características internas habrán tres ejes que nos ayudarán a detectar la calidad del código.

**Los siguientes elementos dotan de calidad al código:**

  - **Legibilidad:** qué tan fácil es interpretar lo que el código dice.
  - **Mantenibilidad:** cuánto esfuerzo supondrá adaptar el código a nuevos requerimientos.
  - **Testeabilidad:** cuánto esfuerzo supondrá realizar pruebas sobre este código.

# 2. Aprender a escribir código legible

  ## Código prolijo

El código fuente lo escribimos para personas como tú y yo, para las computadoras tenemos las versiones compiladas.

Debemos seguir un estándar de codificación, el cual nos ayuda a:

  - Generar código claro y consistente.
  - Evitar perder tiempo en decisiones triviales.

**Tips para mejorar la legibilidad de nuestro código:**

  - **Define un estándar:** Piénsalo una vez y déjalo por escrito.
  - **Respétalo:** Haz un esfuerzo por adherir al estándar durante tu día a día.
  - **Apóyate en algún linter:** Esta sencilla herramienta te ayudará a incorporar buenas prácticas.

  **Ejempo 1**

```PHP
<?php
if(isset($_POST['txtFechainicial']) && $_POST['txtFechainicial']!="")
{
$where[] = "fecha_recibo > ".$_POST['txtFechainicial']."";
}
if(isset($_POST['txtFechafinal']) && $_POST['txtFechafinal']!="")
{
$where[] = "fecha_recibo < ".$_POST['txtFechafinal']."";
}
if(isset($_POST['txtTrabajador']) && $_POST['txtTrabajador']!="")
{
$where[] = "trab_recibo = ".$_POST['txtTrabajador']."";
}
if(isset($_POST['txtSerie']) && $_POST['txtSerie']!="")
{
$where[] = "serie1 = ".$_POST['txtSerie']."";
}

$query = "SELECT * FROM recibo WHERE '".implode(" AND ",$where)."'";
$result = mysqli_query($conexion, $query) or die(mysqli_error($conexion));
?>
```

**Ejemplo 1 Corregido**

```php
<?php
    if (isset($_POST['txtFechainicial']) && $_POST['txtFechainicial'] != "") {
        $where[] = "fecha_recibo > " . $_POST['txtFechainicial'] . "";
    }
    if (isset($_POST['txtFechafinal']) && $_POST['txtFechafinal'] != "") {
        $where[] = "fecha_recibo < " . $_POST['txtFechafinal'] . "";
    }
    if (isset($_POST['txtTrabajador']) && $_POST['txtTrabajador'] != "") {
        $where[] = "trab_recibo = " . $_POST['txtTrabajador'] . "";
    }
    if (isset($_POST['txtSerie']) && $_POST['txtSerie'] != "") {
        $where[] = "serie1 = " . $_POST['txtSerie'] . "";
    }

    $query = "SELECT * FROM recibo WHERE '" . implode(" AND ", $where) . "'";
    $result = mysqli_query($conexion, $query) or die(mysqli_error($conexion));
?>
```

**Ejemplo 2**

```php
<?php
    if (isset($_GET['p']))
        $p = $_GET['p'];
    else
        $p = 1;

    $t = '';
    if (isset($_GET['t']))
        $t = $_GET['t'];
    else if(isset($_GET['codigo']))
        $t = $_GET['codigo'];
    else if(isset($_POST['TxtBuscar']))
        $t = $_POST['TxtBuscar'];

    if (!empty($_POST['TxtBuscar'])) {

        $cadena = $valor[0];
    }
```

**Ejemplo 2 Corregido**

```PHP
<?php
    if (isset($_GET['p'])) {
        $p = $_GET['p'];
    } else {
        $p = 1;
    }
    $t = '';
    if (isset($_GET['t'])) {
        $t = $_GET['t'];
    } else if(isset($_GET['codigo'])) {
        $t = $_GET['codigo'];
    } else if(isset($_POST['TxtBuscar'])) {
        $t = $_POST['TxtBuscar'];
    }
    if (!empty($_POST['TxtBuscar'])) {
        $cadena = $valor[0];
    }
```

  ## Identificadores mnemotécnicos, específicos y precisos

Los identificadores son _variables, funciones, clases, módulos, componentes, etc_. Elementos a los que nosotros debamos crearles un nombre propio.

Ejemplo sin un identificador mnemotécnico una función se vería así:

```php
function f( int $b, int $a ) : float {
        return ( $b * $a ) / 2;
}
```
Al leer este código no sabemos para qué funciona y hasta podríamos borrarlo por equivocación.

Ahora utilizando un identificador mnemotécnico se vería así:

```php
function areaRectangulo( int $base, int $altura ) : float {
        return ( $base * $altura ) / 2;
}
```

Ahora gracias a que el código es más legible sabemos para qué funciona esta función.

  - **Atención a los identificadores** que estableces.

# 3. Aprender a escribir código mantenible

  ## Código modular

El código modular son pedazos de códigos divididos que pueden ser utilizados en cualquier lugar para evitar tener un solo archivo con un bloque de código gigante.

**Ejemplo 3**

```php
<?php
    for ($i = 0; $i < $total; $i++) {
        $rows = oci_fetch_array($rss, OCI_NUM);
        $empl_num = $rows[0];
        $nombre = $rows[1];
        $apaterno = $rows[2];
        $amaterno = $rows[3];
        $fecha = $rows[4];
        $hora = $rows[5];
        $horario = $rows[6];

        $empl_num = str_replace("?", 'Ñ', $empl_num);
        $nombre = str_replace("?", 'Ñ', $nombre);
        $apaterno = str_replace("?", 'Ñ', $apaterno);
        $amaterno = str_replace("?", 'Ñ', $amaterno);
        $fecha = str_replace("?", 'Ñ', $fecha);

        $trabajo = '14:00:00';

        list( $horae, $horas) = calcularHorario( $hora, $trabajo );

        if ($hora < $trabajo) {
            $horaentrada = $hora;
            $horae = $horaentrada;
            $horas = '00:00:00';
        } else {
            $horasalida = $hora;
            $horae = '00:00:00';
            $horas = $horasalida;
        }
        $horae = str_replace("?", 'Ñ', $horae);
        $horas = str_replace("?", 'Ñ', $horas);
        $horario = str_replace("?", 'Ñ', $horario);

        echo "$empl_num, $nombre, $apaterno, $amaterno, $fecha, $horae, $horas, $horario".PHP_EOL;
    }
    for ($i = 0; $i < $total; $i++) {
      imprimirRegistro();
    }

    function calcularHorario( $hora, $trabajo ) : array
    {
      if ($hora < $trabajo) {
            $horaentrada = $hora;
            $horae = $horaentrada;
            $horas = '00:00:00';
        } else {
            $horasalida = $hora;
            $horae = '00:00:00';
            $horas = $horasalida;
      }

      return [ $horae, $horas]
    }
```

  * Ésto es la evolución de la **[programación estructurada](https://es.wikipedia.org/wiki/Programaci%C3%B3n_estructurada)** un paradigma que hablaba de dividir un programa en 3 subrutinas (bloques, condicionales y bucles)
  * Lo que vimos es la **[programación modular](https://es.wikipedia.org/wiki/Programaci%C3%B3n_modular)**, que habla de separar un problema grande en problemas más pequeños, fáciles de solucionar.
    
    **Divide y vencerás**

  ## Código reutilizable

Escribir código reutilizable nos va a ayudar a que en lugar de copiar y pegar una misma línea de código pero con diferentes parámetros lo hagamos a través de una función que retorne los valores que necesitamos y luego la podremos llamar en cualquier lugar del código que necesitemos pasándole los parámetros que deseamos.

**Ejemplo 3**

```php
<?php
    for ($i = 0; $i < $total; $i++) {
        $rows = oci_fetch_array($rss, OCI_NUM);
        $empl_num = $rows[0];
        $nombre = $rows[1];
        $apaterno = $rows[2];
        $amaterno = $rows[3];
        $fecha = $rows[4];
        $hora = $rows[5];
        $horario = $rows[6];

        $empl_num = str_replace("?", 'Ñ', $empl_num);
        $nombre = str_replace("?", 'Ñ', $nombre);
        $apaterno = str_replace("?", 'Ñ', $apaterno);
        $amaterno = str_replace("?", 'Ñ', $amaterno);
        $fecha = str_replace("?", 'Ñ', $fecha);

        $trabajo = '14:00:00';

        if ($hora < $trabajo) {
            $horaentrada = $hora;
            $horae = $horaentrada;
            $horas = '00:00:00';
        } else {
            $horasalida = $hora;
            $horae = '00:00:00';
            $horas = $horasalida;
        }
        $horae = str_replace("?", 'Ñ', $horae);
        $horas = str_replace("?", 'Ñ', $horas);
        $horario = str_replace("?", 'Ñ', $horario);

        echo "$empl_num, $nombre, $apaterno, $amaterno, $fecha, $horae, $horas, $horario".PHP_EOL;
    }
```

**Ejemplo 3 - Corregido**

```php
<?php
    for ($i = 0; $i < $total; $i++) {
        imprimrRegistro();
    }
    
    function imprimrRegistro()
    {
        $rows = oci_fetch_array($rss, OCI_NUM);
        $horario = $rows[6];

        $empl_num = str_replace("?", 'Ñ', $rows[0]);
        $nombre = str_replace("?", 'Ñ', $rows[1]);
        $apaterno = str_replace("?", 'Ñ', $rows[2]);
        $amaterno = str_replace("?", 'Ñ', $rows[3]);
        $fecha = str_replace("?", 'Ñ', $rows[4]);

        $trabajo = '14:00:00';

        list($horae, $horas) = calcularHorario($rows, $trabajo);

        $horae = str_replace("?", 'Ñ', $horae);
        $horas = str_replace("?", 'Ñ', $horas);
        $horario = str_replace("?", 'Ñ', $horario);

        echo "$empl_num, $nombre, $apaterno, $amaterno, $fecha, $horae, $horas, $horario".PHP_EOL;
    }

    /**
     * @param array $rows
     * @param string $trabajo
     * @return array
     */
    function calcularHorario(array $rows, string $trabajo): array
    {
        if ($rows[5] < $trabajo) {
            $horaentrada = $rows[5];
            $horae = $horaentrada;
            $horas = '00:00:00';
        } else {
            $horasalida = $rows[5];
            $horae = '00:00:00';
            $horas = $horasalida;
        }

        return array($horae, $horas);
    }
```

**Buen código reutilizable:**

  1. Mantén tu código DRY (O SECO, en español). Es decir “Don’t Repeat Yourself” (O “No te repitas”)
  2. Haz métodos o funciones que hagan solamente una cosa.
  3. Haz pruebas unitarias para tus métodos y que sean fáciles de testear
  4. Trata de pensar de forma abstracta, usa interfaces o clases abstractas
  5. Escribe código que se pueda extender fácilmente en un futuro (Básicamente que modificarlo no signifique prenderle fuego a medio código)
  6. No escribas código innecesario o que no hace falta en el momento.
  7. Reduce el acoplamiento (Acoplamiento hace referencia a que, el comportamiento de una función depende enteramente de lo que retorne otra función, y esta de otra, y otra, y otra…)
  8. Usa más código modular.
  9. Escribe tu código como si fuera una API externa (Que se pueda importar de otro código y sirva completamente)

  ## Código organizado

El código organizado se refiere a cómo tenemos distribuido nuestros archivos en la raíz (root) del proyecto. A mayor organización, mayor entendimiento del código.

### Código organizado

**Carpetas**

```bash
/public
/src
/tests
/vendor
```

**Reto 2 - html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
<script async src='/cdn-cgi/bm/cv/669835187/api.js'></script></head>
<body>
    <form action="reto2.php" method="post">
        <input name="Numero"/>
        <input type="submit"/>
    </form>
<script type="text/javascript">(function(){window['__CF$cv$params']={r:'627fa62a9adb043d',m:'bfb3ad280d065d6f5606179e8a5bcbfdc9049d2b-1614405244-1800-AS6Lb7r54+ycBIqGhNKtr+xakVDBfGvApfUabzwCeNPV2CEo30B459vTD+mkVAs9BxAIw+iQdcWswfZ4xygdfyOWRPMSvMkqRkM5nBWaU+didINNvyxlC2IiygJ3ln6CcIGffHCJ9YCCs19HI6L9suW+suoPREVMQdtRK46qduKiB6sAy7eftgGnia4vphN8p+x3EOkPmcrWTlOEDIlOZ+U=',s:[0x37bbda26c6,0xa7a2306aae],}})();</script></body>
</html>
```

**Reto 2 php**

```php
<?php
    $numero = $_POST['Numero'];
?>
<table border="1">
    <?php
        for ($i = 0; $i <= 10; $i++):
            ?>
            <tr>
                <td><?php echo "$numero x $i:"; ?></td>
                <td><?php echo $numero * $i; ?></td>
            </tr>
        <?php endfor; ?>
    <?php
        $factorial = 1;

        for ($f = $numero; $f >= 1; $f--) {
            $factorial *= $f;
        }
    ?>
    <tr>
        <td><?php echo "$numero!"; ?></td>
        <td><?php echo $factorial; ?></td>
    </tr>
</table>
```

# 4. Escribir código libre de vicios

  ## Evitar el hardcoding

El *hardcoding* es la práctica de escribir valores literales en lugar de identificadores. **No debe de usarse**, ya que si el día de mañana debemos cambiar los valores eso significa que debemos cambiar el código en los lugares que esté ese valor estático por completo y luego mandar a producción, cuándo podríamos hacer el cambio más orgánico en una variable que afecte a todos los lugares que es llamada.

**hardcoding.php**

```php
<?php

$precioInicial = $argv[1];
$precioConIVA = $precioInicial * 1.21;

echo "Valor del IVA: 21%".PHP_EOL;
echo "Sin IVA: \$$precioInicial, con IVA: \$$precioConIVA".PHP_EOL;
```

**hardcoding.php corregido**

```php
<?php

$configs = require_once __DIR__.'/config.inc.php';
$precioInicial = $argv[1];
$precioConIVA = $precioInicial * ( 1 + $configs['valor_iva'] / 100 );

echo "Valor del IVA: {$configs['valor_iva']}%".PHP_EOL;
echo "Sin IVA: \$$precioInicial, con IVA: \$$precioConIVA".PHP_EOL;
```

**hardcoding php corregido 2**

```php
<?php

class Deposito {
    public const CAPACIDAD_MAXIMA = 30;
}

if ( $cantidad > Deposito::CAPACIDAD_MAXIMA ) {
    // ...
}
```

Otro efecto que tiene el hardcodig es oculta información, cuando estas desarrollando tienes una lluvia de ideas y las escribes directo al código y después de algunos días ya no les encuentras sentido ya que toda la idea no se escribió o desarrollo bien.

  ## Evitar efectos colaterales

Debemos analizar muy bien nuestro código para evitar efectos colaterales y evitar que nuestro código deje de funcionar. Un consejo de nuestro profesor en esta clase: **No uses variables globales.**

**Ejemplo 4**

```php
<?php
$nombre = 'Mauro';
$edad = 18;

imprimirDatos();

if ( esMayorDeEdad( $edad ) ) {

    echo 'Es mayor!';
}

function esMayorDeEdad( int $edad )
{
    return $edad > 18;
}

function imprimirDatos()
{
    GLOBAL $edad, $nombre;

    echo "$nombre: $edad";
    $edad++;
}
```

# 5. Conocer los principios SOLID

  ## Principios SOLID: Single Responsibility Principle

**SOLID** son cinco principios básicos de la programación orientada a objetos que ayudan a crear software mantenible en el tiempo.

**SOLID** significa:

- **S:** Single Reponsibility Principle
- **O:** Open/Closed Principle
- **L:** Liskov Substitution Principle
- **I:** Interface Segregation Principle
- **D:** Dependency Inversion Principle

La **S**    se trata de una clase que debe tener sólo **una** razón para cambiar.

El principio de **responsabilidad única** (también conocido como “la lata cohesión”) nos dice que una clase debería tener un único objetivo, muy claro, muy conciso y muy acotado.

La idea es evitar que una sola clase haga muchas cosas en lo que podría compararse con un “hombre orquesta”.

  ## Open/Closed Principle

Open/Closed Principle establece que una entidad de software debe quedarse **abierta para su extensión**, pero **cerrada para su modificación**.

El principio de abierto/cerrado nos propone una forma de estructurar nuestras clases para que estas se adapten a nuevos requerimientos sin la necesidad de modificar su estructura interna. (Dejarlas abiertas para su extensión y cerradas a modificaciones).

**Ejemplo de open**

```php
<?php

class DocProcessor
{
        public function process( array $docs )
        {
                foreach ( $docs as $doc ) {
                        if ( $doc instanceof Invoice ) {
                                $doc->sendToClient();
                        } elseif ( $doc instanceof Receipt ) {
                                $doc->archive();
                        } elseif ( $doc instanceof Memo ) {
                                $doc->markAsRead();
                        }
                }
        }
}
```

**Ejemplo de correcci&oacute;n**

```php
<?php

class DocProcessor
{
        public function process( array $docs )
        {
                foreach ( $docs as $doc ) {
                        $doc->process(); 
                }
        }
}
```

  ## Liskov Substitution Principle

El **Liskov Substitution Principle** establece que cada clase que hereda de otra puede usarse como su padre sin necesidad de conocer las diferencias entre ellas. Para que pueda darse este principio debe cumplir con dos puntos:

  - El cliente debe usar métodos de la clase padre únicamente.
  - La clase hija no debe alterar el comportamiento de los métodos de la clase padre.

  - [Los principios SOLID](https://www.youtube.com/watch?v=lOg2IuQIp-s)

  ## Interface Segregation Principle

El **Interface Segregation Principle** establece que los clientes de un programa sólo deberían conocer de éste los métodos que realmente usan.

**El principio de segregación de interfaces** nos dice un poco como estructurar nuestras interfaces de modo que cuando una clase implementa una interface, no se le exija implementar métodos que no necesita.

```php
<?php

interface Workable
{
   public function canCode();
   public function code();
   public function test();
}

class Programmer implements Workable
{
   public function canCode() {
       return true;
   }
   public function code() {
       return 'coding';
   }
   public function test() {
       return 'testing in localhost';
   }
}

class Tester implements Workable
{
   public function canCode() {
       return false;
   }
   public function code() {
       throw new Exception('Opps! I can\’t code');
   }
   public function test() {
       return 'testing in test server';
   }
}

class ProjectManagement
{
   public function processCode(Workable $member)
   {
       if ($member->canCode()) {
           $member->code();
       }
   }
}
```

**Correcci&oacute;n**

```php
<?php

interface Codeable
{
   public function code();
}
interface Testable
{
   public function test();
}

class Programmer implements Codeable, Testable {
   public function code() {
       return 'coding';
   }
   public function test() {
       return 'testing in localhost';
   }
}

class Tester implements Testable {
   public function test() {
       return 'testing in test server';
   }
}

class ProjectManagement
{
   public function processCode(Codeable $member)
   {
       $member->code();
   }
}
```

  ## Dependency Inversion Principle

D**ependency Inversion Principle** detalla que los módulos de alto nivel no deben depender de los de bajo nivel, ambos deben depender de abstracciones.

Las abstracciones no deben depender de los detalles, los detalles deben depender de las abstracciones.

Una abstracción se enfoca en la visión externa de un objeto, separa el comportamiento específico de un objeto, a esta división que realiza se le conoce como la barrera de abstracción, la cuál se consigue aplicando el principio de mínimo compromiso.

Pero… ¿Qué es el principio de mínimo compromiso? Se refiere al proceso por el cuál la interfaz de un objeto [muestra su comportamiento específico y nada más](https://styde.net/abstraccion-programacion-orientada-a-objetos/), absolutamente nada más.

En otras palabras la abstracción se enfoca en **“que hace”** sin importar en “cómo lo hace”.

Es como solo fijarse en el nombre de una función calcularHorasDelAño(), sin importar el código que hay dentro, solo nos quedamos con el nombre, que ya nos dice “que hace”, y no "como lo hace".

**Reto 4**

```php
<?php
    class Order
    {
        public function calculateTotalSum(){/*...*/}
        public function getItems(){/*...*/}
        public function getItemCount(){/*...*/}
        public function addItem($item){/*...*/}
        public function deleteItem($item){/*...*/}

        public function printOrder(){/*...*/}
        public function showOrder(){/*...*/}

        public function load(){/*...*/}
        public function save(){/*...*/}
        public function update(){/*...*/}
        public function delete(){/*...*/}
    }
```

**Reto 4b**

```PHP
<?php
    class Programmer
    {
        public function code()
        {
            return 'coding';
        }
    }
    class Tester
    {
        public function test()
        {
            return 'testing';
        }
    }
    class ProjectManagement
    {
        public function process($member)
        {
            if ($member instanceof Programmer) {
                $member->code();
            } elseif ($member instanceof Tester) {
                $member->test();
            };
            throw new Exception('Invalid input member');
        }
    }
```

**Reto 4d**

```php
<?php

    interface UnderlingInterface
    {
        public function program();

        public function filetps();

        public function collate();
    }

    class Underling implements UnderlingInterface
    {
        public function program()
        {
            return 'Program initech systems to deposit fractions of pennies to private account';
        }

        public function filetps()
        {
            return 'Place cover sheet on TPS report before going out';
        }

        public function collate()
        {
            return 'Collect and combine texts, information, and figures in proper order.';
        }
    }

    class Consultant implements UnderlingInterface
    {
        public function program()
        {
            return 'Outsource task to India';
        }

        public function filetps()
        {
            return 'Place cover sheet on TPS report before going out';
        }

        public function collate()
        {
            return null;
        }
    }

    class Lumbergh
    {
        protected $underling;

        public function __construct(UnderlingInterface $underling)
        {
            $this->underling = $underling;
        }

        public function harass()
        {
            $this->underling->program();
            $this->underling->filetps();
            $this->underling->collate();
        }
    }
```

# 6. Conocer los conceptos de Patrones de diseño y su aplicación

  ## Patrones de diseño: Singleton

Los patrones de diseño son soluciones de arquitectura de software aplicables a diferentes problemas.

El patrón **Singleton** permite restringir la creación de objetos pertenecientes a una clase o al valor de un tipo a un único objeto.

### Patrones de diseño: Singleton

Estos son soluciones conceptuales que se pueden aplicar a la hora de cómo diseñar tus clases. Y existen 3 tipos de patrones:

  - **Creación →** Se encargan de cómo crear nuevas instancias de nuestro objetos.
  - **Estructurales →** Nos dicen cómo debemos estructurar nuestras clases.
  - **Comportamiento →** Nos dicen cómo deben comportase nuestros objetos.

⚠ Esto no se trata de código, sino de ayudas de cómo pensar nuestra aplicaciones.

También recuerda que estos patrones no son aplicables siempre. Son ideas que nos pueden ayudar a pensar.

**[Singleton](https://www.youtube.com/watch?v=GGq6s7xhHzY&feature=youtu.be)**

Este patrón se puede pensar como un patrón de creación o de comportamiento. La idea consiste en tener un clase que tenga una sola instancia en nuestra aplicación. Usualmente este patrón se utiliza para optimizar recursos.

Este se encarga de evitar a toda costa de exista más de una instancia. Para conseguir esto debemos hacer private el constructor. Para instanciar esta clase, crearemos una función que normalmente se llamará getInstance y está se encargará de comprobar si ya existe una instancia, si no existe una, la función la creará.

  ## Factory

El patron Factory es creacional, se utiliza para ayudar a la creación de nuevas instancias de objetos.

**Factory**

Se trata de un patrón creacional, o sea, que nos ayuda a crear nuevas instancias de objetos.

El patrón factory consiste en utilizar una clase constructora abstracta con unos cuantos métodos definidos y otro(s) abstracto(s).

![](https://i.ibb.co/sgdWmDv/Factory.png)

  ## Command

El patrón **Command** permite solicitar una operación a un objeto sin conocer realmente el contenido de esta operación, ni el receptor real de la misma. Para ello se encapsula la petición como un objeto, con lo que además facilita la parametrización de los métodos.

**Command**

Se trata de un patrón de comportamiento, y este se utiliza cuando existe alguna operación especialmente compleja que debe ser realizada desde diferentes puntos de entrada.

***¿Qué es una interfaz y qué son las clases abstractas?***

La siguiente explicación menciona a Java pero se puede aplicar a muchos lenguajes de programación las misma definiciones:

🙀

Las **clases abstractas** cuando tienen métodos define lo que tienen qué hacer pero no cómo se debe de hacer. Estas clases pueden ser heredadas por X clases que necesitemos pero no pueden ser instanciadas.

En Java no se puede heredar de más de una clase, para esto utilizamos las interfaces. Aquí igual se especifica qué se debe de hacer pero no el cómo.

A diferencia de una clase abstracta una interfaz no puede hacer nada por si sola, o sea, que las clases hijas están encargadas de definir el comportamiento de todos los métodos abstractos de forma obligatoria.

En otra palabras, las interfaces serán contratos que indicarán que es lo que se debe de hacer sin proveer ninguna funcionalidad.

- [lordvadercito/DesignPatternsPHP](https://github.com/lordvadercito/DesignPatternsPHP)

# 7. Comprender las nociones de testing automatizado

  ## Introducción al Testing Automatizado

Existen dos tipos de testing:

  - **Unit Testing:** Evaluamos el funcionamiento de los componentes individualmente.
  - **Integration Testing:** Validar la interacción entre los componentes y el sistema completo.

  ![](https://i.ibb.co/C1CjtTv/test.webp)

  ## Armado del entorno de pruebas en PHP

Para poder ejecutar el código que veremos en las próximas clases deberás contar con un entorno donde poder ejecutar PHPUnit (El framework de pruebas unitarias más utilizado con PHP).

### 1. Descargar el proyecto

**El primer paso** es clonar el repositorio https://github.com/mchojrin/platzi-tdd

Si no tienes aún instalado el cliente de git puedes descargarlo de https://git-scm.com/downloads (Selecciona la descarga que corresponda con tu sistema operativo).

Si utilizas Windows es muy recomendable descargar GitBash (Una consola tipo POSIX que incluye todas las herramientas que necesitarás para interactuar cómodamente con el sistema de control de versiones)

![](https://i.ibb.co/PZ3RP2k/bash.webp)

Una vez tengas git instalado, abre un terminal y clona el repositorio con el comando `git clone git@github.com:mchojrin/platzi-tdd.git`

![](https://i.ibb.co/GJ4sCXb/clone.webp)

### 2. Instalar PHP

Si estás en un entorno Linux o Mac probablemente ya tendrás PHP instalado, con lo cual puedes saltar este paso.

Si estás en Windows deberás descargar PHP de [aquí](https://windows.php.net/download#php-7.3) y probablemente también tengas que instalar el Runtime de Visual C++ que puedes descargar de [aquí](https://www.microsoft.com/es-ar/download/details.aspx?id=48145).

Para comprobar que la instalación haya sido exitosa debes abrir una terminal y ejecutar el comando php -v.

Deberías ver algo como:

![](https://i.ibb.co/mH1ZN3Y/clon1.webp)

### 3. Instalar Composer

Una vez instalado PHP el siguiente paso es instalar composer, un manejador de dependencias para php (Puedes leer más de qué se trata [aquí](https://academy.leewayweb.com/que-es-composer/)).

La forma más simple de instalar composer es hacerlo a través del propio php siguiendo las instrucciones presentes [aquí](https://getcomposer.org/download/).

Si utilizas Windows puedes usar este [instalador](https://getcomposer.org/Composer-Setup.exe).

### 4. Instalar PHPUnit

PHPUnit es una librería estándar para la ejecución de pruebas unitarias de PHP.

En general puedes descargarlo de [aquí](https://phpunit.de/getting-started/phpunit-8.html). En este caso, utilizaremos la versión de instalación por proyecto.

PHPUnit es la dependencia principal de nuestro proyecto, si tienes instalado composer, su instalación es muy simple.

Sólo debes abrir una terminal en el directorio donde descargaste el proyecto y ejecutar `composer install`.

El resultado debería verse similar a:

![](https://i.ibb.co/0mqXm14/compose.webp)

Para verificar la instalación ejecuta el comando `php vendor/phpunit/phpunit/phpunit`

La salida debería verse así:

![](https://i.ibb.co/sQv1L65/vendor.webp)

### 5. Configurar el entorno

Durante este curso utilizamos Visual Studio Code. Si ya dispones de otro entorno y lo conoces bien puedes utilizarlo, si no tienes preferencia te recomiendo que utilices VS Code.

Puedes descargarlo de https://code.visualstudio.com/Download

Una vez instalado abre la carpeta donde descargaste el proyecto en Visual Studio:

![](https://i.ibb.co/34MkBzj/ent.webp)

Deberías ver algo como:

![](https://i.ibb.co/VN4BWcB/code.webp)

Escribe un primer test para verificar que todo está configurado correctamente:

![](https://i.ibb.co/q7qHc0r/code2.webp)

Y para ejecutarlo, abre un terminal dentro del Visual Studio Code:

![](https://i.ibb.co/q7qHc0r/code2.webp)

Una vez en la consola escribe el comando: `php vendor/phpunit/phpunit/phpunit tests`

![](https://i.ibb.co/mvN5ZKy/code3.webp)

Y deberás ver en la salida:

![](https://i.ibb.co/XXgccRm/code4.webp)

Con esto tendrás todo lo necesario para avanzar a la próxima clase.

  ## Test Driven Development

En esta clase el profesor Mauro Chojrin nos explicará cómo el Test Driven Development nos ayudará a reducir al mínimo los errores de nuestra aplicación aplicando primero las pruebas y luego el código de la aplicación.

TDD o Test Driven Development es una metodología donde hacemos todo al revés. Por un momento vamos a dejar de programar para dedicarnos a escribir las pruebas.

### Test Driven Development

Este consiste en primeros las pruebas y luego el software. Etapas:

  1. Escribir un test que falle
  2. Hacer que el código funcione
  3. Eliminar la redundancia

Escribir el siguiente comando para que nos de los resultados del test mas el nombre del test.

```php
php vendor/phpunit/phpunit/phpunit --testdox tests/CalculatorTest.php
```

**CalculatorTest.php**

```php
<?php

use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase {
    public function testAddWillReturnTheSumOfItsParameter() {
        $sut = new Calculator();

        $this->assertEquals(8, $sut->add(5, 3));
        $this->assertEquals(5, $sut->add(5,0));
    }

    public function testAddWillReturnTheSubtractItsParameter() {
        $sut = new Calculator();

        $this->assertEquals(0, $sut->subtract(3, 3));
        $this->assertEquals(8, $sut->subtract(3, -5));
    }
    
    public function testAddWillReturnTheMultiplyItsParameter() {
        $sut = new Calculator();

        $this->assertEquals(9, $sut->multiply(3, 3));
        $this->assertEquals(20, $sut->multiply(5, 4));
    }

    public function testAddWillReturnTheDivideItsParameter() {
        $sut = new Calculator();

        $this->assertEquals(4, $sut->divide(20, 5));
        $this->assertEquals(2.5, $sut->divide(10, 4));
    }
}
```

**Calculator.php**

```php
<?php

class Calculator {
    public function add(int $num1, int $num2) {
        return $num1 + $num2;
    }
    
    public function subtract(int $num1, int $num2) {
        return $num1 - $num2;
    }

    public function multiply(int $num1, int $num2) {
        return $num1 * $num2;
    }

    public function divide(int $num1, int $num2) {
        if(! $num2 == 0) {
            return $num1 / $num2;
        } else {
            throw new InvalidArgumentException("The number is not divide by zero");
        }
    }
}
```

![](https://i.ibb.co/C1CjtTv/test.webp)

![](https://i.ibb.co/bKHKYyK/test2.webp)

# 8. Incorporar habilidades para el trabajo en equipo

  ## Pull requests

Los pull request son pedidos de mejora a archivos de un proyecto generalmente open source. Sirve para que la comunidad ayude a mejorar el código que ha sido escrito por ti, tu equipo o una empresa; luego de que realizamos un cambio generamos un pull request para ofrecer un cambio a mejora y solo queda esperar a que el dueño del repositorio lo pruebe y lo agregue a el código principal.

El **Pull Requests** es una herramienta desarrollada por Github. Este se trata de generar una solicitud al dueño del repositorio ofreciéndole una mejora del código

**Reto 4**

```php
<?php
    class Order
    {
        public function calculateTotalSum(){/*...*/}
        public function getItems(){/*...*/}
        public function getItemCount(){/*...*/}
        public function addItem($item){/*...*/}
        public function deleteItem($item){/*...*/}

        public function printOrder(){/*...*/}
        public function showOrder(){/*...*/}

        public function load(){/*...*/}
        public function save(){/*...*/}
        public function update(){/*...*/}
        public function delete(){/*...*/}
    }
```

**Reto 4 b**
```php
<?php
    class Programmer
    {
        public function code()
        {
            return 'coding';
        }
    }
    class Tester
    {
        public function test()
        {
            return 'testing';
        }
    }
    class ProjectManagement
    {
        public function process($member)
        {
            if ($member instanceof Programmer) {
                $member->code();
            } elseif ($member instanceof Tester) {
                $member->test();
            };
            throw new Exception('Invalid input member');
        }
    }
```

**Reto 3 C**

```php
<?php
    class Animal
    {
        public function fly()
        {
        }
    }

    class Dog extends Animal
    {
        public function fly()
        {
            if (! $this->hasWings) {
                throw new Exception;
            }
        }
    }
```

  ## Documentación

Documentar es una de las mejores prácticas que podemos hacer cuando estamos en un equipo de trabajo. Dejar por escrito cómo hemos hecho algunas funcionalidades, cómo podría ser mejorado el código y por sobretodo debemos dejar comentarios en el código que ayuden a las personas a ubicarse en qué parte de la aplicación están y qué hacen esas líneas de código.

  **Documentación**

  **¿Qué documentar?**

  + Como implementar nueva funcionalidad.
  + Como se realizan las pruebas.
  + Lo mínimo que necesita las personas que quieren colaborar o heredar tu proyecto.

  **¿Como documentar?**

  - UML como documentación.

  **¿Dónde documentar?**

  - Propio código.
  - Sistema de documentación.
  - Wiki
  - Ficheros externos.
  - [README](https://anabelisa.co/readme/)

**¿Cuándo documentar?**

  - Documentar inmediatamente después de codear.
  - Cuando se resuelve un problema, documentar la solución.

# 9. Reforzar lo aprendido

  ## A quién beneficia el código bien escrito

La primera persona a quien beneficiará es a nosotros mismos, lograremos entender nuestro código no importa el tiempo que pase.

Nuestros compañeros lograrán entender muchísimo más nuestro código luego de todas las buenas prácticas que hemos realizado. Y finalmente a nuestro cliente que aunque no pueda ver al detalle nuestro código, estará mejor organizado y podrá ser leído por cualquier persona.

![](https://i.ibb.co/GCgd4Cd/code-good.webp)

~~A quién beneficia el código bien escrito~~

La primera persona a quien beneficiará es a nosotros mismos, lograremos entender nuestro código no importa el tiempo que pase.

Nuestros compañeros lograrán entender muchísimo más nuestro código luego de todas las buenas prácticas que hemos realizado.

Y finalmente a nuestro cliente que aunque no pueda ver al detalle nuestro código, estará mejor organizado y podrá ser leído,mantenido por cualquier persona.

**El código bien escrito debe cumplir con**

  - Legibilidad (entendible al primer vistaso),
  - Mantenibilidad (Pueda evolucionar sin ningún problema o agregar nuevas funcionalidades)

  - Testeabilidad (que se puedan realizar pruebas automatizadas).

**Temas a Tener en cuenta**

  - La forma de escribir codigo
  - Los nombres utilizados
  - El diseño de las clases
  - No solo se trata de código la documentación es importante

Los Framework aplican todas buenas practicas y te permiten concentrarte en los problemas puntuales de tu APP

  ## Aplicar lo aprendido: Libro de visitas

- Clonar el repositorio | 

```bash
git clone https://github.com/mchojrin/GuestBook.git
```

  ## Conclusiones

Hemos aprendido la importancia que tiene el escribir código limpio, las mejores prácticas y metodología para hacerlo, hemos usado códigos de ejemplo para optimizarlos y obtuvimos los conocimientos necesarios para la escritura de código.

Sabemos que ha sido un largo camino, pero estamos seguros de que valió la pena. Y recuerda, ¡nunca pares de aprender!.