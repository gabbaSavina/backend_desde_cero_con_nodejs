//importamos el modelo de autores desde la carpeta 'models'
//este modelo contiene las funciones para leer, escribir y buscar datos de autores del archivo autores.json
const authorsModel = require('../models/authorsModel');

//importamos la vista de respuesta desde la carpeta 'views'
//Esta vista se encarga de formatear las respuestas que se envian al cliente
const responseFormatter = require('../views/responseFormatter');

//se define el controlador de autores, cuya funcion es manejar la lógica de la aplicación, procesar las solicitudes, 
//interactuar con los modelos, para obtener o modificar datos y preparar las respuestas adecuadas.
//se utiliza la encapsulacion en un objetoJS para generar facilidad de acceso, de exportacion y estructura sensilla.
const authorsController = {

    // Método para obtener todos los libros
    getAuthors: () => {
        //se llama al modelo para leer los datos de los autores desde el archivo 'authors.json'
        const author = authorsModel.readAuthors();

        // se formatea la respuesta utilizando el módulo de formato de respuestas
        // y se devuelve los datos de los libros en un formato adecuado
        return responseFormatter.formatResponse(author);
    },

    // Método para añadir un nuevo autor
    addAuthors: (newAuthor) => {
        //se  llama al modelo para obtener la lista actual de autores
        const author = authorsModel.readAuthors();
        author.push(newAuthor);//se añade el nuevo autor al objeto de autores

        // se lama al modelo para escribir la lista actualizada de autores en el archivo 'authors.json'
        authorsModel.writeAuthors(author);

        //se devuelve una respuesta formateada indicando que el autor se añadió exitosamente
        return responseFormatter.formatResponse({ message: 'Autor agregado con exito' });
    },

    // Método para encontrar autores por nacionalidad
    findAuthorsByNationality: (nationality) => {
        //se llama al modelo para obtener la lista de autores
        const authors = authorsModel.readAuthors();

        // se filtra los autores para devolver solo aquellos que coinciden con la nacionalidad proporcionada
        const filteredAuthors = authors.filter(authors => authors.nationality === nationality);

        // se devuelve la lista filtrada de autores en un formato adecuado
        return responseFormatter.formatResponse(filteredAuthors);
    }
};

// Exportamos el controlador para que pueda ser utilizado en otras partes de la aplicación
module.exports = authorsController;