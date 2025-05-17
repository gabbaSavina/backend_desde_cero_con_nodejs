const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({port: 10000});

client.on('connect', () => {
    console.log('Conectado al servidor');
    sendMessage();
});
//la funcion nos permite enviar varios mensajes al servidor
function sendMessage() {
    var line = readline.question('Mensaje al servidor: ')
    client.write(line);
};

client.on('data', (data) => {
    console.log('Datos recibidos del servidor: ', data.toString());
    const message = data.toString().trim();
    if (message === 'Adiós!') {
        console.log('El servidor ha cerrado la conexión.');
        client.end(); //Cerramos la conexión del lado del cliente
    } else {
        sendMessage(); //Permite enviar otro mensaje si no es "Adiós!"
    }
});

client.on('error', (err) => {
    console.log('Error: ', err.message);
});

client.on('end', () => {
    console.log('El servidor cerró la conexión');
});

