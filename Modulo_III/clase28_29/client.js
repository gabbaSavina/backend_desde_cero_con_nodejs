const net = require('net');
const readline = require('readline');

//configuracion del servidor
const OPTIONS = {
    port: 7200,
    host: '127.0.0.1'
};

//crear la conexion TCP al servidor
const clientTCP = net.createConnection(OPTIONS);

//configurar la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,//flujo de entrada desde la consola
    output: process.stdout,// Flujo de salida a la consola
});

//obtener el nombre del usuario desde los argumentos de linea de comandos(si no hay, usar 'unknown')
const arg = process.argv[2] || ''; // Verifica si hay un argumento
const userName = arg.includes('=') ? arg.split('=')[1] : 'Unknown';

//funcion para manejar la entrada del usuario
const handleInput = () => {
    rl.question ('CLIENT --> ', (clientMsg) => {// leer la entrada del usuario
        //enviar el msj al servidor
        clientTCP.write(clientMsg);

        //volver a llamar handleImput para permitir mas entradas
        handleInput();
    });
};

//manejar la conexion exitosa al servidor
clientTCP.on('connect', () => {
    console.log('Conexión exitosa con el servidor!');
    handleInput();
});

//Manejar datos recibidos del servidor
clientTCP.on('data',(serverData) => {
    const serverMsg = serverData.toString();//Convertir los datos recibidos un String
    console.log('Server -->', serverMsg);//imprime el mensaje del servidor
    //volver a llamar a 'handleInput()' para seguir con el programa
    handleInput();
});

//manejar la desconexion del servidor
clientTCP.on('end', () => {
    console.log('El servidor ha cerrado la conexion');
    rl.close()//cerrar la interfaz de readline
});

//manejar errores de conexion
clientTCP.on('error', (err) => {
    console.log('Error en la conexión: ', err);//imprime el error de conexion
    rl.close();//cerrar la interfaz de readline
});