//importamos el modelo de vehiculo desde la carpeta'models'
//este modelo contiene las funciones para leer y escribir datos de vehiculos en un archivo JSON
const vehicleModel = require('../models/vehicleModel');

//importamos la vista de respuesta desde la carpeta 'views'
//Esta vista se encarga de formatear las respuestas que se envian al cliente
const responseFormat = require('../views/responseFormat');

//Definimos el controlador de vehiculos
//El controlador maneja la logica de negocio para obtener y añadir vehiculos
const vehicleControler = {

    //Metodo para obtener todos los vehiculos
    //Este metodo es utilizado para obtener una lista completa de whiculos desde el archivo JSON
    getVehicles: () => {
        //llamamos a la funcion 'readVehicles' del modelo de vehiculos para leer los datos del archivo JSON
        //Esta funcion devuelve un array con todos los vehiculos
        const vehicles = vehicleModel.readVehicles();

        //llamamos a la funcion 'formatResponse' de la vista de respuesta para formatear los datos de los vehiculos
        //esto nos permite devolver los datos en un formato adecuado para el cliente.
        return responseFormat.formatResponse(vehicles);
    },

    //Metodo para añadir un nuevo vehiculo
    //ESte metodo es utilizado para agregar un nuevo vehiculo al archivo JSON
    addVehicles: (newVehicle) => {
        try {
            const vehicles = vehicleModel.readVehicles();
            vehicles.push(newVehicle);
            vehicleModel.writeVehicles(vehicles);
            return responseFormat.formatResponse({message: 'Vehículo añadido exitosamente'});
        } catch (error) {
            console.error('Error al añadir vehículo:', error);
            return responseFormat.formatResponse({message: 'Error al añadir vehículo'});
        }
    },
};

//exportamos el controlador de vehiculos para que pueda ser utilizado en otras partes de la aplicacion
module.exports = vehicleControler;