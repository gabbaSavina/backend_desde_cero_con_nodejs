const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log('Datos recibidos del cliente: ', data.toString());
    });

    socket.setTimeout(10000); //tiempo de espera 10 seg
    
    socket.on('timeout', () => { // manejo del evento de espera
        console.log('Tiempo de espera alcanzado');
        socket.end();
    });

    socket.on('error', (err) => {//manejo del evento error
        console.log('Error', err.message);
    });
});


server.listen(7000, () => {// asignacion del puerto
    console.log('El servidor esta escuchando el el puerto 7000');
});