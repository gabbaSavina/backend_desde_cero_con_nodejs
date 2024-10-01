//SE importan los módulos necesarios
const net = require('net');
const readlineSync = require('readline-sync');
const prettyjson = require('prettyjson');  
const fs = require('fs');

// se configura del cliente TCP
const client = net.createConnection(8080, 'localhost', () => {
    console.log('Conectado al servidor TCP\n');
    //se llama a la funcion del menu
    showMenu();
});

//Se Verifica si una cadena es JSON válido
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

// Manejar la recepción de datos del servidor
client.on('data', (data) => {
    const response = data.toString();

    // Verificar si la respuesta es JSON válido
    if (isValidJSON(response)) {
        const parsedResponse = JSON.parse(response);
        //se utiliza en modulo 'prettyjson.render' para que se imprima en la consola del cliente de una forma mas sensilla de leer
        console.log('Respuesta del servidor:\n', prettyjson.render(parsedResponse));
    } else {
        console.error('Error: La respuesta del servidor no es JSON válido');
    }

    showMenu(); //se muestra el menú nuevamente después de recibir una respuesta
});

//se maneja el evento cierre de la conexión
client.on('close', () => {
    console.log('Conexión cerrada');
});

//se maneja el evento errores de conexión
client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});

//se declara la función para mostrar el menú de opciones
function showMenu() {
    const options = [
        '\n1. Obtener todos los libros',
        '2. Añadir un libro (incluye funciones para ingresar autor y editorial)',
        '3. Buscar libro por género',
        '4. Obtener todos los autores',
        '5. Buscar autor por nacionalidad',
        '6. Obtener todas las editoriales',
        '7. Buscar editorial por país',
        '0. Salir'
    ];

    console.log('********BOOK-API***********\n');
    console.log('Seleccione una opción:');
    options.forEach(option => console.log(option));

    const choice = readlineSync.question('Ingrese el numero de la opcion: ');//se escriben todos los string sin acentos xq el readlinesync no los acepta
    //llamamos a la funcion q gestiona la seleccion del usuario
    handleMenuChoice(choice);
}

// Función para manejar la opción seleccionada por el usuario
function handleMenuChoice(choice) {
    switch (choice) {
        case '1':
            client.write('GET BOOKS');
            break;
        case '2':
            console.log('Por favor al ingresar los comandos escriba la 1° letra en Mayusculas')
            const newBook = getBookData();
            client.write('ADD ENTRY ' + JSON.stringify(newBook));
            break;
        case '3':
            //se utiliza el metodo 'keyinselect' de modulo readlinesync para mejorar la entrada de datos por parte del usuario, ya que le damos las opciones predeterminadas
            const options = ['Ficcion Distopica', 'Realismo Magico', 'Literatura Fantastica', 'Novela de Misterio', 'No Ficcion', 'Ensayo', 'Ficcion de Aventuras', 'Novela Dramatica']
            const genreIndex = readlineSync.keyInSelect(options, 'Seleccione el genero: ');
            
            //se utiliza un condional para poder gestionar la variable generIndex q es el numero de pocision en el array opcions
            if (genreIndex !== -1) {//si genreIndex no es -1
                const selectedGenre = options[genreIndex];//se genera la variable selectedGenre q contiene el string de la pocision
                client.write('FIND BOOK BY GENRE ' + selectedGenre); //se envia el género seleccionado
            } else {
                console.log('Operacion cancelada.');
                showMenu(); // Volver al menú si el usuario selecciona "Cancelar"
            };
            break;
        case '4':
            client.write('GET AUTHORS');
            break;
        case '5':
            const nationality = readlineSync.question('Ingrese la nacionalidad del autor: ');
            client.write('FIND AUTHOR BY NATIONALITY ' + nationality);
            break;
        case '6':
            client.write('GET PUBLISHERS');
            break;
        case '7':
            const country = readlineSync.question('Ingrese el pais de la editorial: ');
            client.write('FIND PUBLISHER BY COUNTRY ' + country);
            break;
        case '0':
            console.log('Saliendo...');
            client.end(); //se cierra la conexión
            break;
        default:
            console.log('Opción no valida. Intentelo de nuevo.');
            showMenu(); // se muestra el menú nuevamente si la opción no es válida
            break;
    }
}

// Función para obtener el último ID de un archivo JSON
// se utiliza esta funcion para generar automaticamente un id tanto para libros,autores y editoriales
function getLastId(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const items = JSON.parse(data);
        if (items.length === 0) {
            return 0; // Si no hay elementos, el ID base es 0
        }
        // Suponiendo que el ID es un número, obtén el ID máximo
        const lastItem = items[items.length - 1];
        return parseInt(lastItem.id, 10); // Devuelve el último ID
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return 0; // Si hay un error, considera que el último ID es 0
    }
}
//Se declara la funcion q procesa la solicitud del cliente de agregar libros, editoriales y autores
function getBookData() {
    //Se asigna a una variable el resultado de la funcion getlastid
    const lastBookId = getLastId('./data/books.json');
    const bookId = lastBookId + 1;//se suma uno al nuevo bookid

    const lastAuthorId = getLastId('./data/authors.json');
    const authorId = lastAuthorId + 1;

    const lastPublisherId = getLastId('./data/publishers.json');
    const publisherId = lastPublisherId + 1;

    //Se utiliza el metodo.quuestion para que el usuario ingrese los datos a guardar en el JSON correspondiente
    const title = readlineSync.question('Ingrese el título del libro: ');
    const authorName = readlineSync.question('Ingrese el nombre del autor: ');
    const authorNationality = readlineSync.question('Ingrese la nacionalidad del autor: ');
    const publisherName = readlineSync.question('Ingrese el nombre de la editorial: ');
    const publisherCountry = readlineSync.question('Ingrese el país de la editorial: ');
    const year = readlineSync.questionInt('Ingrese el año de publicación: ');
    const genre = readlineSync.question('Ingrese el género del libro: ');

    //se crean  objetos que contiene las respuestas de las operaciones de agregar el libro, el autor y la editorial.
    //Esto permite enviar una respuesta consolidada al servidor con los resultados de todas las operaciones.
    return {
        book: { id: bookId, title, authorId, publisherId, year, genre },
        author: { id: authorId, name: authorName, nationality: authorNationality },
        publisher: { id: publisherId, name: publisherName, country: publisherCountry }
    };
};