//1. Importar los modulos net y uuid
const net = require('net');
const { v4: uuidv4, } = require('uuid');

//2.Crear un servidor TCP que genere un UUID v4 para cada conexión y envíe el UUID al cliente.

const server = net.createServer((socket) => {
    console.log('Cliente conectado: ', socket.remoteAddress);

    // Generar un UUID v4 y enviarlo al cliente
    const idV4 = uuidv4();
    socket.write(`Su UUID v4 es: ${idV4}\n`);

    //evento data
    socket.on('data', (data) => {
        const msg = data.toString();
        console.log(`Mensaje del cliente:${msg}`);
    });
    //evento end
    socket.on('end', () => {
        console.log("cliente cerró la conexion");
    });
});

server.listen(4200, ()=> {
    console.log('Servidor escuchando en el puerto 4200');
});

