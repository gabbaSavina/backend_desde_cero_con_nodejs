//Servidor TCP que Obtiene informacion de la ruta
const net = require('net');
const path = require('path');

const PORT = 8082;

const server = net.createServer((socket) => {
    console.log('Cliente conectado: ', socket.remoteAddress);

    socket.on('data', (data) => {
        const message = data.toString().trim();
        const clientPathBasename = path.basename(message);
        const clientPathDirname = path.dirname(message);
        const clientPathExtname = path.extname(message);
        socket.write(`El nombre del archivo es: ${clientPathBasename}, dentro del directorio: ${clientPathDirname}
        y la extencion es: ${clientPathExtname}`);
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
    console.log('Servidor escuchando en el puerto 8082');
});