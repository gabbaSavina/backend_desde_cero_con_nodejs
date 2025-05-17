//Importamos el modulo 'net' de node.js para cerar un servidor TCP
const net = require('net');

//importamos el controlador de vehiculos desde el archivo 'vehicleControler'
const vehicleControler = require('./controllers/vehicleController');

//importamos la funcion 'v4' del paquete uuid para generar identificadores unicos
const { v4: uuid4 } = require('uuid');

//funcion para validar si una cadena podria ser una JSON 
function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};

//creamos el servidor tcp utilizando 'net.createserver'
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Evento que se dispara cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        const command = data.toString().trim();
        console.log('comando recibido', command);

    if (command === 'GET VEHICLES') {
        const response = vehicleControler.getVehicles();
        socket.write(response);
    } else if (command.startsWith('ADD VEHICLE')) {
        // Extraemos los datos del nuevo vehiculo del comando.
        const vehicleDataString = command.replace('ADD VEHICLE ', '');
        console.log('Datos de vehículo recibidos:', vehicleDataString);

        // Verificamos si los datos tienen un formato que parezca ser JSON
        if (isJSON(vehicleDataString)) {
            try {
                const vehicleData = JSON.parse(vehicleDataString);
                if (vehicleData && typeof vehicleData === 'object') {
                    const newVehicle = { id: uuid4(), ...vehicleData };
                    const response = vehicleControler.addVehicles(newVehicle);
                    socket.write(response);
                } else {
                    socket.write('Datos de vehículo inválidos');
                }
            } catch (error) {
                socket.write('Error: JSON no válido');
            }
        } else {
            socket.write('Error: Formato de JSON no válido');
        }
    } else {
        socket.write('Comando no reconocido');
    }
    });

    //evento error
    socket.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
        socket.end();
    });

    //evento cuando el cliente cierra la conexion
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});