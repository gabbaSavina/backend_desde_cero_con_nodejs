//importamos el modelo de editoriales desde la carpeta 'models'
//este modelo contiene las funciones para leer, escribir y buscar datos de editoriales del archivo publishers.json
const publishersModel = require('../models/publishersModel');

//importamos la vista de respuesta desde la carpeta 'views'
//Esta vista se encarga de formatear las respuestas que se envian al cliente
const responseFormatter = require('../views/responseFormatter');

//se define el controlador de editoriales, cuya funcion es manejar la lógica de la aplicación, procesar las solicitudes, 
//interactuar con los modelos, para obtener o modificar datos y preparar las respuestas adecuadas.
//se utiliza la encapsulacion en un objetoJS para generar facilidad de acceso, de exportacion y estructura sensilla.
const publishersController = {

    // Método para obtener todos los libros
    getPublishers: () => {
        //se llama al modelo para leer los datos de las editoriales desde el archivo 'publishers.json'
        const publishers = publishersModel.readPublishers();

        // se formatea la respuesta utilizando el módulo de formato de respuestas
        // y se devuelve los datos de las editorales en un formato adecuado
        return responseFormatter.formatResponse(publishers);
    },

    // Método para añadir una nueva editorial
    addPublisher: (newPublisher) => {
        //se  llama al modelo para obtener la lista actual de editoriales
        const publisher = publishersModel.readPublishers();
        publisher.push(newPublisher);//se añade la nueva editorial al objeto de editores

        // se lama al modelo para escribir la lista actualizada de editoriales en el archivo 'publishers.json'
        publishersModel.writePublishers(publisher);

        //se devuelve una respuesta formateada indicando que la editorial se añadió exitosamente
        return responseFormatter.formatResponse({ message: 'Editorial agregada con exito' });
    },

    // Método para encontrar editoriales por pais
    findPublishersByCountry: (country) => {
        //se llama al modelo para obtener la lista de editoriales
        const publishers =publishersModel.readPublishers();

        // se filtran las editoriales para devolver solo aquellos que coinciden con lo proporcionado
        const filteredPublishers = publishers.filter(publishers => publishers.country === country);

        // se devuelve la lista filtrada de editoriales en un formato adecuado
        return responseFormatter.formatResponse(filteredPublishers);
    }
};

// Exportamos el controlador para que pueda ser utilizado en otras partes de la aplicación
module.exports = publishersController;