//Importamos en modulo net para manejar las conexiones TCP
const net = require('net');

//Crear un servidor TCP
const server = net.createServer();//metodo del modulo net q inicia el servidor

//Manejar el evento 'connection', que se emite cuando un cliente se conecta al servidor
server.on('connection', (socket) => {
    //Manejar el evento 'data' que se emite cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
            //muestra en la consola la direccion y puerto del cliente junto a los datos recibidos
        console.log('\nEl cliente ' + socket.remoteAddress + ":" + socket.remotePort + "dice: " + data);
        //envia una respuesta al cliente confirmando la recepcion de los datos
        socket.write('Recibido!');
    });

//Manejar el evento 'close' que se emite cuando la conexion con el cliente se cierra
    socket.on('close', () => {
        console.log('Comunicacion finalizada');
    });

//Maneja el evento 'error' q se emite cuando ocurre un error con la conexion del cliente
    socket.on('error', (err) => {
        //muestra el mensaje de error en la consola
        console.log(err.message);
    });
});

//Inicia el servidor en el puerto 4000
server.listen(5000, () => {
    //muestra un mensaje en la consola indicando que el servidor esta escuchando en el puerto
    console.log('Servidor está escuchando en el puerto', server.address().port);
});

