**********************************BOOK-API********************************************
Para inciar la aplicación ejecutar desde la carpeta 'book-api' el comando npm start.
Asegurate de ejecutar el script del cliente para que funcione la aplicacion.
Desde la consola del cliente selecione las opciones que se desplegan del menu para
ejecutar las funciones
**************************************************************************************

Modulos utilizados
1- Nativos: modulo net
            mudulo fs
            modulo path
            modulo readlinesync (no permite los caracteres especiales por lo cual está todo escrito sin acentos)
2- Terceros:prittyjson
Es la solucion q le encontre para poder hacer mas legible en la consola del cliente
antes de instalar la libreria en la consola se veia asi:

La Casa de los Espiritus\",\n    \"authorId\": \"\": \"Realismo mágico\"\n  },\n  {\n    \"id\": \horId\": \"103\",\n    \"publisherId\": \"203\",\
 {\n    \"id\": \"4\",\n    \"title\": \"Asesinatd\": \"204\",\n    \"year\": 1934,\n    \"genre\" \"Las Puertas de la Percepcion\",\n    \"authorI
\"genre\": \"No Ficcion\"\n  },\n  {\n    \"id\":\n    \"publisherId\": \"206\",\n    \"year\": 19"7\",\n    \"title\": \"El Sabueso de los Bascker
  \"year\": 1902,\n    \"genre\": \"Novela de Misruja\",\n    \"authorId\": \"108\",\n    \"publis\n  {\n    \"id\": \"9\",\n    \"title\": \"The T,\n    \"year\": 1977,\n    \"genre\": \"Novela D del Tiempo\",\n    \"authorId\": \"110\",\n    \ de Aventuras\"\n  }\n]"

(es un fragmento)

--------------------
Funciones replazadas
--------------------
aqui esta la funcion q fue remplazada por el bloque try-catch ya que no me funciono para poder validar el archivo json

// se declara una funcion para validar si una cadena podria ser una JSON(desde el ser)
function isValidJSON(str) {

    //se verifica que la cadena no este vacía, y que comience con '{' o '[' y termine con '}' o ']'
    if (typeof str !== 'string') {//El operador typeof en JavaScript se utiliza para determinar el tipo de dato de una expresión o variable
        return false;//si el paramentro 'str' no es una cadena de texto nos devuelve flase
    }

    //se Verifican los primeros y últimos caracteres
    if ((str.startsWith('{') && str.endsWith('}')) || (str.startsWith('[') && str.endsWith(']'))) {
        //se usa 'JSON.parse' en una función sin 'try-catch' para comprobar si se puede parsear.
        // En caso de error, la función devuelve false
        return (function () {
            return (new Function("return " + str))() !== undefined;
        })();//se realiza una verificacion con el constructor 'Function' que toma la cadena 'str' y la concatena con 'return' para evaluar su validez
    }       //si el resultado es distinto a undefined entonces se asume que 'str'es JSON y se retorna true
    return false;
};

========== Me di cuenta cuando verifique la funcion de agregar libros, autores y editoriakes que en nuevo objeto JSON ingresado
comentario generaba un id numerico respendando el orden de los datos pero difrerentes a los objetos json ya ingresados con el id
========== generado como string entre "", cuando inicie el proyecto tenia entendido q todo en el json iba con comillas. No los cambie
            porque tengo miedo de romper todo y q sea una perdida de tiempo.







