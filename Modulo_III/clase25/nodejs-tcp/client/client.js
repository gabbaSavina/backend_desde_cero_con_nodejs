const net = require('net'); // mudulo para manejar conexiones TCP
const readline = require('readline-sync'); //para leer enradas del usuario sinconicamente

//define la opciones de conexion para el cliente tcp puerto 5000 y direccion IP local host
const options = {
    port: 5000,
    host: '127.0.0.1'
};

//se crean una nueva conexion TCP con el servidor utilizando las opciones definidas
const client = net.createConnection(options);

//Maneja el evento 'connect', que se emite cuando el cliente se conecta exitosamente al servidor
client.on('connect', () => {
    console.log ('Conexion satisfactoria!');
    //muestra el mensaje de la conexion se a establecido
    sendLine();//Llama a la funcion sendLIne() para que el cliente pueda ingresar un mensaje
});

//maneja el evento 'data', que se emite cuando el cliente recibe datos del servidor
client.on('data', (data) => {
    console.log('El servidor dice: ' + data) //muestra los datos recibidos del servidor en la consola
    sendLine();//para que el cliente pueda mandar otro mensaje
});

//Maneja el eveto 'error', que se emite cuando ocurre un error en la conexion
client.on('error', (err) => {
    console.log(err.message); // muestra el mensaje de error
});

//define la funcion sendLine() que permite al usuario ingresar un mensaje y decide q hacer con el
function sendLine() {
    var line = readline.question('\nDigite alguna cosa\t');
    //muestra un prompt y lee la entrada del usuario de manera sincronica
    if (line == '0') { // verifica si el usuario ingreso '0'
        client.end();// Cierra la conexion on el serv sdi el usuario ingreso '0'
    } else {
        client.write(line); // Envia el mensaje ingresado por el usuario al servidor si no es '0'
    }
};
