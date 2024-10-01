const net = require('net');
const { handleTimeRequest } = require('./controllers/timeController'); // Asegúrate de la ruta correcta

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

socket.on('data', (data) => {
    const message = data.toString().trim();

    if (message === 'hora') { // Si el cliente solicita la hora
      handleTimeRequest(socket); // Llama al controlador para manejar la solicitud
        } else {
        socket.write('Por favor, envía "hora" para obtener la hora actual.\n');
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

// Inicia el servidor en el puerto 3030
server.listen(3030, () => {
    console.log('Servidor escuchando en el puerto 3030');
});