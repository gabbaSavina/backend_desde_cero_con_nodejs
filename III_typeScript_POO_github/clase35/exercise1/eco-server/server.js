const net = require('net');
const { echoMessage } = require('./controllers/echoController');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

  // Manejar la recepción de datos
    socket.on('data', (data) => {
    const message = data.toString().trim(); // Convertir datos a cadena y eliminar espacios en blanco
    echoMessage(socket, message); // Llama al controlador para manejar el eco
    });

  // Manejar la desconexión del cliente
    socket.on('end', () => {
    console.log('Cliente desconectado');
    });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor eco con contador escuchando en el puerto ${PORT}`);
});