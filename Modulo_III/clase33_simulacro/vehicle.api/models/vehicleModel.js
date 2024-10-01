//importamos el modulo 'fs' de node.js para realizar operaciones de sistema de archivos
//Este modulo nos permite leer y escribir archivos
const fs = require('fs');
const path = require ('path');

//importamos el modulo 'path' de node.js para trabajar con rutas de archivos
//Utilizamos 'path.join' para construir la ruta completa del archivo 'vehicles.json' en la carpeta 'data'.
//'__dirname' representa el directorio actual del archivo, lo que permite construir una ruta relativa
const filePath = path.join(__dirname, '../data/vehicles.json');

//definimos el modelo de vehiculos, que contiene funciones para leer y escribir en el archivo JSON
const vehicleModel = {

    //funcion para leer los datos del archivo JSON y devolverlos
    readVehicles: () => {
        try {
            const data = fs.readFileSync(filePath);
            const vehicles = JSON.parse(data);
            console.log('Vehículos leídos:', vehicles);
            return vehicles;
        } catch (error) {
            console.error('Error al leer vehículos:', error);
        }
    },

    //Funcion para escribir datos en el archivo JSON
    writeVehicles: (vehicles) => {
        //convertimos el objeto de vehiculos a una cadena JSON con formato e indentacion
        //'JSON.stringify' toma un objeto y lo convierte a una cadena JSON
        //El segundo argumento es 'null' (no se usa un reemplazo) y el tercer argumento es '2' (para indentacion)
        const jsonData = JSON.stringify(vehicles, null, 2);

        //escribimos la cadena JSON en el archivo utilizando 'fs.writeFileSync'
        //este metodo sobrescribe el archivo con los nuevos datos
        fs.writeFileSync(filePath, jsonData);
    }
};

//exportamos el modelo de vehiculos para que pueda ser utilizado en otras partes de la aplicacion
module.exports = vehicleModel;