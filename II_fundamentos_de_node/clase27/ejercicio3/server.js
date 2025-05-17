const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Nuevo cliente conectado: ', socket.remoteAddress + ' : ' + socket.remotePort);
    
    socket.on('data', (data) => {
        const message = data.toString().trim();//usamos trim() para limpiar el string de espacios inecesarios
        console.log('Mensaje del cliente:', message);
    
    //respuesta del servidor a comandos especificos
        if (message === 'hola') {
            socket.write('Hola cliente!\n');
        } else if (message === 'status') {
            const serverStatus = 'Servidor en funcionamiento';
            socket.write(serverStatus + '\n');
        } else if (message === 'adios') {
            socket.write('Adiós!\n');
            socket.end();//se termina la conexion xq el cliente dice adios
        } else {
            socket.write('Comando no reconocido. Inteta hola o adios');
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado', socket.remoteAddress + ' : ' + socket.remotePort);
    });

    socket.on('error', (err) => {
        console.log('Error: ', err.message);
        socket.end();//cierra la conexion cuando hay error
    });
});

server.listen(10000, () => {
    console.log('Servidor escuchando en el puerto 10000')
});