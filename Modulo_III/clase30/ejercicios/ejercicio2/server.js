//Servidor TCP que Normaliza Rutas
const net = require('net');
const path = require('path');

const PORT = 8081;

const server = net.createServer((socket) => {
    console.log('Cliente conectado: ', socket.remoteAddress);

    socket.on('data', (data) => {
        const message = data.toString().trim();
        const clientPath = path.normalize(message);
        socket.write(`La ruta normalizada es: ${clientPath}`);
    });

    socket.on('close', () => {
        console.log('Conexión cerrada con el cliente:', socket.remoteAddress + ' : ' + socket.remotePort);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado', socket.remoteAddress + ' : ' + socket.remotePort);
    });

    socket.on('error', (err) => {
        console.log('Error: ', err.message);
        socket.end();//cierra la conexion cuando hay error
    });
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto 8081');
});