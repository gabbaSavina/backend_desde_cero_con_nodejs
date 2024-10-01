//Se importa el  modulo 'fs' de node.js para realizar operaciones CRUD.
const fs = require('fs');
//Se importa el modulo 'path' de node.js para manipular rutas de archivos y directorios.
const path = require ('path');

//Se crea la variable que contiene la ruta completa del archivo 'publisher.json'.
const publishersFilePath = path.join(__dirname, '../data/publishers.json');

//se define el modelo de editoriales, que contiene funciones para leer, escribir y buscar por pais en 'publisher.json'.
//Se utiliza un objetoJS('publishersModel') con el fin de organizar el código, mejorar su estructura y legibilidad.
//A esto se le llama 'encapsulacion' cuyas ventajas son: facilidad de acceso, exportación sencilla y estructura organizada.
const publishersModel = {

    //Funcion para leer los datos en publishers.json
    readPublishers: () => {
        const data = fs.readFileSync(publishersFilePath, 'utf-8');//lee el contienido como cadena de texto
        if (data) { // si hay datos en 'publishers.json', lo parseamos a un objetoJS
            return JSON.parse(data);
        }
        return [];//la función devuelve un array vacío para evitar errores en el procesamiento posterior
    },

    //funcion para escribir los datos en publishers.json
    writePublishers: (publisher) => {
        //se convierete el array 'publisher' en una cadena JSON
        const jsonData = JSON.stringify(publisher, null, 2); // null y 2 para la indentación
        // se utiliza el metodo 'writeFileSync' del modulo 'fs' para escribir la cadena JSON(jsonData) en el archivo publishers.json
        fs.writeFileSync(publishersFilePath, jsonData, 'utf-8');
    },

    //Función para buscar editoriales por pais en publishers.json
    findPublishersByCountry: (country) => {
        //se utiliza la funcion 'readPublishers()' para  definir el objeto 'publishers'
        const publishers = publishersModel.readPublishers(); 
        //se filtran las editoriales para proporcionar aquellas q coincidan con lo proporcionado
        //se devuelve el array filtrado de editoriales que cumplen con la condición.
        return publishers.filter(publishers => publishers.country === country); 
    }
};

//Se exporta el objeto completo para que sea usado en otros archivos
module.exports = publishersModel;