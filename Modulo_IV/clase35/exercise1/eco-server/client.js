const net = require('net');

const client = net.createConnection({ host: 'localhost', port: 3000 }, () => {
    console.log('Conectado al servidor');

    // Envía un mensaje al servidor
    client.write('Hola desde el cliente!');
});

// Manejar la recepción de datos del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    client.end(); // Cierra la conexión después de recibir la respuesta
});

// Manejar la desconexión
client.on('end', () => {
    console.log('Desconectado del servidor');
});