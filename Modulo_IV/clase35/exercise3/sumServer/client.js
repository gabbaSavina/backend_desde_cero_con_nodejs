const net = require('net');
const readline = require('readline');

const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');
});

// Configurar la interfaz de lectura para ingresar números
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Función para solicitar números al usuario
const askForNumbers = () => {
    rl.question('Ingrese dos números separados por un espacio: ', (input) => {
    client.write(input); // Envía los números al servidor
    });
};

// Maneja la respuesta del servidor
client.on('data', (data) => {
    console.log(data.toString()); // Muestra la respuesta del servidor
    askForNumbers(); // Vuelve a pedir números después de mostrar la respuesta
});

// Cierra la conexión al final
client.on('end', () => {
    console.log('Desconectado del servidor');
    rl.close();
});

// Inicia pidiendo números al usuario
askForNumbers();