const net = require('net'); //2.importa el modulo net
const readline = require('readline-sync');

//3. crea el cliente
const client = net.createConnection({port: 5000, host: 'localhost'}, () => {
    console.log('Conectado al servidor');
    client.write('Hola, servidor: ');
    sendMessage();
});

//4.manela los datos recibidos
client.on('data', (data) => {
    console.log('Respuesta del servidor: ' + data.toString());
    client.end(); //5. cierra la conexión.
});

//6.Maneja los errores
client.on('error', (err) => {
    console.log('Error: ' + err.message)
});

function sendMessage() {
    const message = readline.question('Ingrese mensaje: ');
    client.write(message);
    client.end();
};

