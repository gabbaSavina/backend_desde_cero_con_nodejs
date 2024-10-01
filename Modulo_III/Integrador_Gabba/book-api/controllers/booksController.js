//importamos el modelo de libros desde la carpeta 'models'
//este modelo contiene las funciones para leer, escribir y buscar datos de libros del archivo books.json
const booksModel = require('../models/booksModel');

//importamos la vista de respuesta desde la carpeta 'views'
//Esta vista se encarga de formatear las respuestas que se envian al cliente
const responseFormatter = require('../views/responseFormatter');

//se define el controlador de libros, cuya funcion es manejar la lógica de la aplicación, procesar las solicitudes, 
//interactuar con los modelos, para obtener o modificar datos y preparar las respuestas adecuadas.
//se utiliza la encapsulacion en un objetoJS para generar facilidad de acceso, de exportacion y estructura sensilla.
const booksController = {

    // Método para obtener todos los libros
    getBooks: () => {
        //se llama al modelo para leer los datos de los libros desde el archivo 'books.json'
        const books = booksModel.readBooks();

        // se formatea la respuesta utilizando el módulo de formato de respuestas
        // y se devuelve los datos de los libros en un formato adecuado
        return responseFormatter.formatResponse(books);
    },

    // Método para añadir un nuevo libro
    addBook: (newBook) => {
        //se  llama al modelo para obtener la lista actual de libros
        const books = booksModel.readBooks();
        books.push(newBook);//se añade el nuevo libro al array de libros

        // se lama al modelo para escribir la lista actualizada de libros en el archivo 'books.json'
        booksModel.writeBooks(books);

        //se devuelve una respuesta formateada indicando que el libro se añadió exitosamente
        return responseFormatter.formatResponse({ message: 'Libro agregado con exito' });
    },

    // Método para encontrar libros por género
    findBooksByGenre: (genre) => {
        //se llama al modelo para obtener la lista de libros
        const books = booksModel.readBooks();

        // se filtra los libros para devolver solo aquellos que coinciden con el género especificado
        const filteredBooks = books.filter(book => book.genre === genre);

        // se devuelve la lista filtrada de libros en un formato adecuado
        return responseFormatter.formatResponse(filteredBooks);
    }
};

// Exportamos el controlador para que pueda ser utilizado en otras partes de la aplicación
module.exports = booksController;