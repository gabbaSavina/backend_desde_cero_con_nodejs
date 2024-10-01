const net = require('net');

//array para almacenar los clientes conectados
let clients = [];

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Nuevo cliente conectado: ', socket.remoteAddress + ' : ' + socket.remotePort);
    clients.push(socket);//agrega al array los datos del cliente conectado

    socket.on('data', (data) => {
        console.log(`Mensaje del cliente [${socket.remoteAddress}:${socket.remotePort}]: ${data.toString()}`);
        socket.write('Mensaje recibido');
    });

    socket.on('end', () => {
        console.log('Cliente desconectado', socket.remoteAddress + ' : ' + socket.remotePort);
        clients = clients.filter(client => client !== socket)//elimina al cliente del array despues de q se desconecta
    });

    socket.on('error', (err) => {
        console.log('Error: ', err.message);
        socket.end();//cierra la conexion cuando hay error
    });
});

server.listen(9000, () => {
    console.log('Servidor escuchando en el puerto 9000')
});