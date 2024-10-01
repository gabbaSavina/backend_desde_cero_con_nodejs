//se importa el modulo 'net' de node.js para crear un servidor TCP
const net = require('net');
//se importa 'fs' para realizar operaciones CRUD
const fs = require('fs');

//se importan los controladores de libros, autores y editoriales de la carpeta 'controllers'
const booksController = require('./controllers/booksController');
const authorsController = require('./controllers/authorsController');
const publishersController = require('./controllers/publishersController');

//Se verifica si la cadena es un JSON válido
//el bloque 'try-catch'se utiliza para manejar errores en el código de manera controlada.
function isValidJSON(str) {
    //El bloque try contiene el código que deseas ejecutar y que podría lanzar un error.
    try { 
        JSON.parse(str); 
        return true;
    //El bloque catch se ejecuta si ocurre un error en el bloque try.
    } catch (e) {
        return false;
    }
};

//Se crea el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    //se maneja el evento 'data'(enviada por el cliente)
    socket.on('data', (data) => {
        const command = data.toString().trim();
        //se imprime en la consola para tener un seguimineto de los comandos procesados
        console.log(`Comando recibido: ${command}`);

        //se utiliza el condicional 'if','else if' y 'else' para ir procesando los comandos q envia el cliente
        //en el comando 'ADD ENTRY' unfique las funciones 'addBook', 'addAuthors'y 'addPublisher' para evitar inconsistencias en los archivos JSON correspondientes
        if (command.startsWith('ADD ENTRY ')) {
            //La cadena resultante (dataString) debe ser un JSON que contenga la información del libro, autor y editorial.
            const dataString = command.replace('ADD ENTRY ', '');
            
            //se llama a la funcion 'isValidJSON' para asegurar que la cadena se pueda analizar correctamente antes de intentar procesarla.
            if (isValidJSON(dataString)) {
                //Extrae las propiedades book, author y publisher del objeto resultante usando la desestructuración de objetos
                const { book, author, publisher } = JSON.parse(dataString);
                //Se llaman a las funciones para agregar libros,autores y editoriales y se asignan a una variable
                const bookResponse = booksController.addBook(book);
                const authorResponse = authorsController.addAuthors(author);
                const publisherResponse = publishersController.addPublisher(publisher);
                
                //se crea un objeto 'response' que contiene las respuestas de las operaciones de agregar el libro, el autor y la editorial.
                //Esto permite enviar una respuesta consolidada al cliente con los resultados de todas las operaciones.
                const response = {
                    book: bookResponse,
                    author: authorResponse,
                    publisher: publisherResponse
                };

                //Se envia JSON validas al cliente y se mantiene el formato prettyjson solo para los logs en el servidor, ya que de la otra forma no me funcionaba
                socket.write(JSON.stringify(response));
            } else {
                socket.write(JSON.stringify({ error: 'Error: Formato de JSON no válido' }));
            };
        
        //Se procesan los demas comandos con la misma estructura
        } else if (command.startsWith('FIND BOOK BY GENRE ')) {
            const genre = command.replace('FIND BOOK BY GENRE ', '');
            const books = booksController.findBooksByGenre(genre);
            socket.write(JSON.stringify(books));

        } else if (command.startsWith('FIND AUTHOR BY NATIONALITY ')) {
            const nationality = command.replace('FIND AUTHOR BY NATIONALITY ', '');
            const authors = authorsController.findAuthorsByNationality(nationality);
            socket.write(JSON.stringify(authors));

        } else if (command.startsWith('FIND PUBLISHER BY COUNTRY ')) {
            const country = command.replace('FIND PUBLISHER BY COUNTRY ', '');
            const publishers = publishersController.findPublishersByCountry(country);
            socket.write(JSON.stringify(publishers));

        } else if (command === 'GET AUTHORS') {
            const authors = authorsController.getAuthors();
            socket.write(JSON.stringify(authors));

        } else if (command === 'GET PUBLISHERS') {
            const publishers = publishersController.getPublishers();
            socket.write(JSON.stringify(publishers));

        } else if (command === 'GET BOOKS') {
            const books = booksController.getBooks();
            socket.write(JSON.stringify(books));
        } else {
            socket.write(JSON.stringify({ error: 'Comando no reconocido' }));
        }
    });

    //se maneja el evento end
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
    //se maneja el evento error
    socket.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
    });
});

//Se estable el puerto en donde escucha el servidor
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});