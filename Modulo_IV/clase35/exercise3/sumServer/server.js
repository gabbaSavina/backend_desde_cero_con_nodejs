const net = require('net');
const { handleSumRequest } = require('./controllers/sumController'); // Asegúrate de la ruta correcta

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const message = data.toString().trim(); // Convertir el buffer a string
        const numbers = message.split(' '); // Separa los números por espacios

        if (numbers.length === 2) { // Asegúrate de que se recibieron dos números
            handleSumRequest(socket, numbers); // Llama al controlador para manejar la solicitud
        } else {
            socket.write('Por favor, envía dos números separados por un espacio.\n');
        }
    });

    socket.on('end', () => {
    console.log('Cliente desconectado');
    });
});

// Inicia el servidor en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});