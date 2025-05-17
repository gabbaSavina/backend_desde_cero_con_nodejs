const net = require('net');

// Función para crear un cliente TCP
function createClient(id) {
    // Opciones de conexión
    const options = {
        port: 9000,
        host: '127.0.0.1'
    };

    // Crear un nuevo cliente TCP
    const client = net.createConnection(options);

    // Manejar el evento 'connect', que se emite cuando el cliente se conecta al servidor
    client.on('connect', () => {
        console.log(`Cliente ${id} conectado al servidor`);
        const message = `Hola desde el cliente ${id}`;
        client.write(message); // Enviar un mensaje único al servidor
    });

    // Manejar el evento 'data', que se emite cuando el cliente recibe datos del servidor
    client.on('data', (data) => {
        console.log(`Cliente ${id} recibió: ${data.toString()}`);
        client.end(); // Terminar la conexión después de recibir la respuesta
    });

    // Manejar el evento 'end', que se emite cuando el servidor cierra la conexión
    client.on('end', () => {
        console.log(`Cliente ${id} desconectado del servidor`);
    });

    // Manejar el evento 'error', que se emite cuando ocurre un error en la conexión
    client.on('error', (err) => {
        console.log(`Error en el cliente ${id}: ${err.message}`);
    });
};

// Crear varios clientes
for (let i = 1; i <= 5; i++) { // Cambia el número 5 por la cantidad de clientes que quieras crear
    createClient(i);
};