const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    //leemos el archivo datos.json
    fs.readFile('datos.json', 'utf8', (err, data) => {
        if (err) {
            //si hay un error, mostramos un mensaje simple
            res.end('No se pudo leer el archivo JSON');
            return;
        }

        //enviamos el contenido del archivo JSON al navegador
        res.setHeader('content-Type', 'application/json');//configuramos el tipo de contenido
        res.end(data);//enviamos el contenido del archivo JSON
    });
});

//hacemos que el servidor escuche en el puerto definido
server.listen(PORT, ()=> {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})