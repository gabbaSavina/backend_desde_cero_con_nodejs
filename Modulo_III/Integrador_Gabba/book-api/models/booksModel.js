//Se importa el  modulo 'fs' de node.js para realizar operaciones CRUD.
const fs = require('fs');
//Se importa el modulo 'path' de node.js para manipular rutas de archivos y directorios.
const path = require ('path');

//Se crea la variable que contiene la ruta completa del archivo 'books.json'.
const booksFilePath = path.join(__dirname, '../data/books.json');

//se define el modelo de libros, que contiene funciones para leer, escribir y buscar por genero en 'books.json'.
//Se utiliza un objetoJS('booksModel') con el fin de organizar el código, mejorar su estructura y legibilidad.
//A esto se le llama 'encapsulacion' cuyas ventajas son: facilidad de acceso, exportación sencilla y estructura organizada.
const booksModel = {

    //Metodo para leer los datos de los libros
    readBooks: () => {
        const data = fs.readFileSync(booksFilePath, 'utf-8');//lee el contienido como cadena de texto
        if (data) { // si hay datos en 'books.json', lo parseamos a un objetoJS
            return JSON.parse(data);
        }
        return [];//la función devuelve un array vacío para evitar errores en el procesamiento posterior
    },

    //Metodo para escribir los datos en books.json
    writeBooks: (books) => {
        //se convierete el array 'books' en una cadena JSON
        const jsonData = JSON.stringify(books, null, 2); // null y 2 para la indentación
        // se utiliza el metodo 'writeFileSync' del modulo 'fs' para escribir la cadena JSON(jsonData) en el archivo books.json
        fs.writeFileSync(booksFilePath, jsonData, 'utf-8');
    },
    
    //Metodo para buscar libros por género
    findBooksByGenre: (genre) => {
        //se utiliza la funcion 'readBooks()' para  definir el objeto 'books'
        const books = booksModel.readBooks(); 
        //se filtran esos libros para encontrar solo aquellos cuyo género coincide con el género proporcionado
        //se devuelve el array filtrado de libros que cumplen con la condición.
        return books.filter(book => book.genre === genre); 
    }
};

//Se exporta el objeto completo para que sea usado en otros archivos
module.exports = booksModel;