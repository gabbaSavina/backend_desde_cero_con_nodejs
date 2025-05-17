//1. Importacion del modulo 'http' de Node.js para crear un servidor Http.
const { application } = require('express');
const http = require('http');

//2. Creacion el servidor
const server = http.createServer((req, res) => {

    //3. Manejo de rutas y metodos HTTP

    // 3.1 si el cLiente realiza una solicitud 'GET' a la URL /usuarios:
    if(req.method === 'GET' && req.url === '/usuarios') {
        
        // Devuelve una respuesta con el codigo 200 ok
        // establece el encabezado de tipo de contenido como 'application/json
        res.writeHead(200, { 'content-type' : 'application/json' });

        // Envia una array de usuarios en fomrato JSON como respuesta
        res.end(JSON.stringify([{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'María' }]));

        // 3.2 Si el cliente realiza una solicitud POST a la URL /usuarios:
    } else if (req.method === 'POST' && req.url === '/usuarios') {
        
        //variable para acumular los datos que lleguen en el cuerpo de la solicitud
        let body = '';

        //El evento 'data' se activa cada vez que llega un frangmento de datos
        // Escucha los datos que llegan en el cuerpo de la solicitud, los concatena y los convierte a texto
        req.on('data', chunk => {
            body += chunk.toString(); // Convierte el fragmento de datos a texto y lo agrega a 'body'.
        });

        // El evento 'end' se activa cuando todos los datos han sido recibidos
        req.on('end', () => {
            const nuevoUsuario = JSON.parse(body);

            // configura la respuesta con un codigo 201 (created) indicando que se ha creado un nuevo recurso
            res.writeHead(201, { 'content-type' : 'application/json'})
        })
    }
})
