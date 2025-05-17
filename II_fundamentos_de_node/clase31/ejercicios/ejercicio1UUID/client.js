//1. importar el modulo net
const net = require('net');

//2.Establecer conexion con el servidor TCP
const client = net.createConnection({port: 4200});

client.on('connect', () => {
    console.log('Conectado al servidor');
});

client.on('data', (data) => {
    console.log('Datos recibidos del servidor: ', data.toString());
});

client.on('error', (err) => {
    console.log('Error: ', err.message);
});

client.on('end', () => {
    console.log('El servidor cerró la conexión');
});