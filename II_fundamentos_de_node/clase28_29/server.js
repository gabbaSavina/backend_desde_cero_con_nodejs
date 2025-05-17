const net = require('net');//Modulo para crear conexiones de red(TCP)
const fs = require('fs');//Modulo para interactuar con el sistema de archivos
const path = require('path');//Modulo para manejar rutas de archivos

//Variables globales
const PORT = 7200;//puerto en el que el servidor escuchara las conexiones
const HISTORY_FILE = path.join(__dirname, 'history.json');//Ruta del archivo de historial de mensajes

//array para almacenar los clientes conectados
let clients = [];

//crear el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado: ', socket.remoteAddress);

    //añadir el cliente al arreglo de cliente conectados
    clients.push(socket);

    //manejar datos recibidos del cliente
    socket.on('data', (data) => {
        const message = data.toString().trim();//covertimos data en string y sacamos espacios en blanco
        console.log('Mensaje recibido: ', message);
    
        if (message === '--history') {
            //si el mensaje es '--history', enviar el historial de mensajes al cliente
            const history = loadHistory();
            socket.write(JSON.stringify(history, null, 2));//enviar el historial como JSON
        } else if (message === '--eraseMessages') {
            console.log('Comando para borrar mensajes recibido');
            //si el mesaje es '--eraseMessages', borrar el historial de mensajes
            saveHistory([{}]); // guardar un arreglo con un solo objeto vacio
            socket.write('History has been erased.'); //confirmar al cliente que el historial ha sido borrado
        } else {
            //enviar el mensaje a todos los clientes conectados
            clients.forEach(client => {
                if(client !== socket) {//no enviar el msj al cliente q lo envio
                    client.write(message);
                }
            });

            //preparar el objeto de mensaje para almacenar en el historial
            const timestamp = getFormattedDate();//obtener la fecha y hora actual
            //obtener el nombre del usuario desde los argumentos de linea de comandos(sin no hay, usar unknown)
            const userName = process.argv[2]?.split('=')[1] || 'Unknown'
            const messageObject = {
                message,//mensaje recibido
                sentBy: userName,//nombre del usuario que envio el mensaje
                date: timestamp //fecha y hora en la que se nevio en mensaje
            };

            //cargar el historial de mensajes existente
            const history = loadHistory();
            history.push(messageObject);//añadir el nuevo mensaje al historial
            saveHistory(history);//guardar el historial actualizado
        }    
    });

    //manejar desxonexion de clientes
    socket.on('end', () => {
        console.log('Cliente desconectado:', socket.remoteAddress);
        clients = clients.filter(client => client !== socket);//eliminar el cliente del array clients
    });
});

//funcion para cargar el historial de mensajes
const loadHistory = () => {
    try {//se utiliza para manejar errores si todo sale bien se hace el 'try' si no el 'catch'
        const data = fs.readFileSync(HISTORY_FILE, 'utf8');//leer el archivo de historial
        if (!data) { // Si el archivo está vacío
            return [];
        }
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al cargar el historial: ', err);
        return[];//retornar un array vacio si hay error
    }
};

//funcion para guardar el historial del mensajes
const saveHistory = (history) => {
    try {
        fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2))//escribir el historial en el archivo
    } catch (err) {
        console.error('Error al guardar el historial:',err);
    }
};

//Funcion para obtener la fecha y hora en formato 'dd/MM/yyyy - HH:mm'
const getFormattedDate = () => {
    const now = new Date(); //Obtener la fecha y hora actual
    const day = String(now.getDate()).padStart(2, '0');//obtener el dia del mes y asegurarse de que tenga dos digitos
    const month = String(now.getMonth() + 1).padStart(2, '0')//obtener el mes (1-12) y asegurarse de que tenga dos digitos
    const year = now.getFullYear();//obtener el año
    const hours = String(now.getHours()).padStart(2, '0');//obtener las horas y asegurarse de que tenga dos digitos
    const minutes = String(now.getMinutes()).padStart(2, '0'); //obtener los minutos y asegurarse de que tenga dos digitos

    return `${day}/${month}/${year} - ${hours}:${minutes}`; //formato 'dd/MM/yyyy - HH:mm'
};

//iniciar el servidor
server.listen(PORT, () => {
    //Imprimir en consola que el servidor está escuchando en el puerto especificado
    console.log(`Servidor escuchando en 127.0.0.1:${PORT}`);
});


