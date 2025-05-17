const net = require('net');

const client = net.createConnection({ port: 3030 }, () => {
    console.log('Conectado al servidor');
  client.write('hora'); // Envía la solicitud de hora al servidor
});

client.on('data', (data) => {
  console.log(data.toString()); // Muestra la respuesta del servidor
  client.end(); // Cierra la conexión después de recibir la respuesta
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});
