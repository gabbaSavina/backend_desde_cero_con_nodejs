//Se importa el  modulo 'fs' de node.js para realizar operaciones CRUD.
const fs = require('fs');
//Se importa el modulo 'path' de node.js para manipular rutas de archivos y directorios.
const path = require ('path');

//Se crea la variable que contiene la ruta completa del archivo 'authors.json'.
const authorsFilePath = path.join(__dirname, '../data/authors.json');

//se define el modelo de autores, que contiene funciones para leer, escribir y buscar por nacionalidad en 'authors.json'.
//Se utiliza un objetoJS('authorsModel') con el fin de organizar el código, mejorar su estructura y legibilidad.
//A esto se le llama 'encapsulacion' cuyas ventajas son: facilidad de acceso, exportación sencilla y estructura organizada.
const authorsModel = {

    //Funcion para leer los datos en authors.json
    readAuthors: () => {
        const data = fs.readFileSync(authorsFilePath, 'utf-8');//lee el contienido como cadena de texto
        if (data) { // si hay datos en 'books.json', lo parseamos a un objetoJS
            return JSON.parse(data);
        }
        return [];//la función devuelve un array vacío para evitar errores en el procesamiento posterior
    },

    //funcion para escribir los datos en authors.json
    writeAuthors: (author) => {
        //se convierete el array 'author' en una cadena JSON
        const jsonData = JSON.stringify(author, null, 2); // null y 2 para la indentación
        // se utiliza el metodo 'writeFileSync' del modulo 'fs' para escribir la cadena JSON(jsonData) en el archivo authors.json
        fs.writeFileSync(authorsFilePath, jsonData, 'utf-8');
    },

    //Función para buscar autores por nacionalidad en authors.json
    findAuthorsByNationality: (nationality) => {
        //se utiliza la funcion 'readAuthors()' para  definir el objeto 'authors'
        const authors = authorsModel.readAuthors(); 
        //se filtran los autores para proporcionar aquellos q coincidan con lo proporcionado
        //se devuelve el array filtrado de autores que cumplen con la condición.
        return authors.filter(authors => authors.nationality === nationality); 
    }
};

//Se exporta el objeto completo para que sea usado en otros archivos
module.exports = authorsModel;