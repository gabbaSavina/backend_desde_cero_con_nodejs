const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({port: 8081});

client.on('connect', () => {
    console.log('Conectado al servidor');
    sendMessage();
});
//la funcion nos permite enviar varios mensajes al servidor
function sendMessage() {
    var line = readline.question('Ingrese la ruta a normalizar: \n');
    client.write(line);
};

client.on('data', (data) => {
    console.log(data.toString());
    sendMessage(); //Permite enviar otro mensaje
});

client.on('error', (err) => {
    console.log('Error: ', err.message);
});

client.on('end', () => {
    console.log('El servidor cerró la conexión');
});