const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({port: 7000});

client.on('connect', () => {
    console.log('Conectado al servidor');
    var line = readline.question('Mensaje al servidor: ')
    client.write(line);
    client.end();
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