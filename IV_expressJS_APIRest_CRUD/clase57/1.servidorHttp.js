// Se importa el modulo http de Node.js, que permite crear un servidor HTTP.
const http = require('http');

// Se crea un servidor usando el metodo 'createServer'.
// Esta funcion toma un call bacl con dos paramentros -> 'req' (request): representa la solicitud que hace el cliente.
//                                                    -> 'req' (response): representa la respuesta que enviará el servidor.
const server = http.createServer((req, res) => {

    // Establece el codigo de estado de la respuesta a
    // 200 (ok) indicando que la solicitud fue exitosa
    res.status = 200;

    // Configura el encabezado 'Contenet-type' para que el
    //cliente sepa que el contenido sera texto plano
    res.setHeader('Content-Type', 'text/plain');

    // Envia la respuesta al cliente con el mensaje
    // 'Hola chicas' y finaliza la respuesta.
    res.end('Hola, Mundo!')
});

// Se establece la escucha del servidor en el puerto 3000.
server.listen(3000, ()=> {
    console.log('Servidor ejecutandose en http://localhost:3000');
});