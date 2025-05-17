/*
-----------.JSON----------
JAVASCRIP OBJECT NOTATION
-------------------------

Es un formato ligero de INTERCAMBIO de DATOS que es facil de leer y escribir para HUMANOS
y  de parsear y generar para las maquinas.

JSON -> LENGUAJE DE TEXTO PLANO intermediario entre el front y el back

SINTAXIS -> "CLAVE", "VALOR"(como un objeto)siempre en comillas dobles

utilidades:
    - Intercambio de datos en Aplicaciones web:JSON es comúnmente utilizado para enviar y
    recibir datos entre el cliente (navegador) y el servidor en aplicaciones web,
    especialmente en servicios web y APIs RESTful.
    - Configuracion de Aplicaciones: se usa a menudo para almacenar configuraciones de
    aplicaciones, debido a su facilidad de lectura y escritura.
    - Almacenamiento de Datos:Aunque no es un sistema de almacenamiento de base de datos en
    sí, JSON se utiliza en bases de datos NoSQL como MongoDB para almacenar datos en un
    formato estructurado.

------JSON.parse()---------

El método JSON.parse() toma una cadena de texto que sigue la estructura de JSON y la convierte
en un objeto o array de JavaScript. Si la cadena no está en un formato JSON válido, JSON.parse()
lanzará un error.

ej: cuando recibes datos del servidor a menudo estan en formato '.json', se 'necesita'
convertir esta cadenaJSON de nuevo a un objeto JS para poder trabajar con los datos en tu
aplicacion.
*/
// cadena JSON recibida por el servidor
let jsonString = '{"nombre": "Berni", "edad":26}';//se utiliza '' para que js lo iterprete como una cadena de texto literan
//convertir la cadena JSON a un objeto JavaScrip
let objeto = JSON.parse(jsonString);
//mostrar la propiedad 'nombre' del objeto en la consola
console.log(objeto.nombre); // salida "Berni"
/*
------------JSON.stringify()----------------

Recibe un objeto o valos de JS y lo convierte a cadena de texto con el formato JSON.

ej: Enviar datos desde una aplicacion web al servidor en un formato que el servidor pueda
enterder.
*/
//crear un objeto en JS
let objeto2 = { nombre: "Berni", edad : 26 };
//corvertir el objeto JS a una cadena JSON
let jsonString2 = JSON.stringify(objeto2);
//Mostrar la cadena JSON en la consola
console.log(jsonString2); // {"nombre": "Berni", "edad": "26"}

/*
En un proyecto de Node.js los archivos 'package.json' y 'package-lock.json' son fundamentales
para la gestion de dependencias y la configuracion del proyecto.

----------------package.json--------------------
es un archivo de configuracion presente en la raiz de un porecto de Node.js contiene info sobre
el proyecto. incluidas sus dependencias, scrips, version y otros metadatos importantes.

*funciones clave:
    Gestionar dependencias: especifica las dependencias y permite a npm instalarlas
    ejecutar scripts: permite definir y ejecutar scripts de desarrollo, ej iniciar el servidor
    o ejecutar pruebas.
    Configuracion del proyecto: proporciona metadatos esenciales sobre el proyec q pueden ser
    utilizados por otras herramientas y servicios.

--------------package-lock.json-----------------
archivo que se genera automáticamente cuando se ejecuta npm install en un proyecto que ya
tiene un package.json. Este archivo detalla las 'versiones exactas' de las dependencias
instaladas, incluidas las versiones de las dependencias de esas dependencias (es decir,
subdependencias).

*funciones clave:
    Congelar Versiones: garantiza que las versiones exactas de las dependecias y subdep se
    mantengan constantes para todos los que trabajen en el proyecto.
    Acelerar Instalaciones: almacena un mapeo de las dependencias en un formato q facilita la inst.
    Seguridad y consistencia: evita que una actualizacion accidental de una dependencia
    rompa el porecto al mantener las versiones exactas especificas.

*************resumen*************
package.json: Es el archivo de configuración principal de un proyecto Node.js. Define las dependencias,
scripts, y otros metadatos importantes.

package-lock.json: Congela las versiones exactas de todas las dependencias y subdependencias instaladas,
asegurando consistencia en todos los entornos donde se ejecuta el proyecto.

*/

