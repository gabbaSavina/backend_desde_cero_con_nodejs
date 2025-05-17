const net = require('net'); //2.importamos el modulo net

//3.crea el servidor
const server = net.createServer((socket)=> {
    //4.maneja la conexion
    console.log('Cliente conectado', socket.remoteAddress + ':' + socket.remotePort);

    socket.on('data', (data)=> {
        console.log('Mensaje del cliente' + socket.remoteAddress + ':' + socket.remotePort + data.toString());
        //5. envia mensaje al cliente
        socket.write(data);
    });

    //6.maneja la desconexión
    socket.on('end', () => {
        console.log('Cliente desconectado: ', socket.remoteAddress + ':' + socket.remotePort);
    });

    //7.maneja los errores
    socket.on('error', (err) => {
        console.log('Error: ', err.message);
    });
});

//8.Escucha en el puerto 5000
server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});


