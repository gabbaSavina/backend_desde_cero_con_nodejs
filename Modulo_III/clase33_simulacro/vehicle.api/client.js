//Importamos el modulo 'net' de node.js para cerar una conexion TCP
//Este modulo proporciona funcionalidades para implementar clientes y servidores TCP
const net = require('net');

//importamos el modulo 'readline' de node.js  para leer entradas desde la consola
//este modulo permite crear una interfaz para interactuar con el usuario a traves de la liena de comandos
const readline = require('readline');

//creamos la interfaz para leer entradas desde la consola
//la interfaz utilizada 'process,stdin' como entrada(teclado del usuario) y 'process.stdout' como salida (pantalla cliente)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Creamos un cliente TCP utilizando 'net.Socket'
//Este cliente sera utilizado para conectarse a un servidor TCP
const client = new net.Socket();

//establecemos la conexion con el servidor TCP
//nos conectamos al puerto 8080 en el 'localhost' (direccion del servidor).
client.connect(8080, 'localhost', () => {
    //mensaje que se muestra cuando la conexion se establece exitosamente
    console.log('Conectado al servidor TCP');
    
    //utilizamos rl.question para pedir al usuario que escriba un comando
    //la entrada del usuario se envia al servidor
    rl.question('Escribe un comando(por ejemplo; GET VEHICLES o ADD VEHICLE {"id":"12","marca": "Nissan", "modelo": "Sentra", "anio": 2022}): ', (command) => {
        client.write(command);//enviamos el comando al servidor TCP
    });
});

//Manejo de la respuesta del servidor.
//el evento 'data' se activa cuando el cliente recibe datos del servidor
client.on('data', (data) => {
    //mostramos la respuesta recibida del servidor en la consola
    console.log('respuesta del servidor: ')
    console.log(data.toString())//convertimos los datos a una cadena de texto y los mostramos

    
    //cerramos la interfaz de readline despues de recibir la respuesta
    rl.close();

    //crerramos la conexion TCP con el servidor
    client.destroy();
});

//manejo del evento cuando la conexion se cierra
//el eveto 'close' se activa cuando la conexion TCP se cierra
client.on('close', ()=> {
    //mensaje que se muestra cuando la conexion se cierra
    console.log('conexion cerrada');
});
