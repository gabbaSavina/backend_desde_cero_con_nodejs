//importa el modulo 'fs' para realizar operaciones de archivo como lectura y escritura
import * as fs from 'fs';
//imprta el modulo 'path' para manejar las rutas de archivos de manera segura y portatil
import path from 'path';

//Define la ruta al archivo JSON donde se almacenaran los mensajes
const PATH = path.join(__dirname, 'history.json');


//Funcion para obtener todo el historial de mensajes
const getHistory = () => {
    //lee el archivo JSON de manera sincronica y guarda el contenido en un buffer
    const messagesCollectionBuffer = fs.readFileSync(PATH);
    //convertir el bufer del archivo JSON en un objeto JS
    const messagesCollection = JSON.parse(messagesCollectionBuffer);
    //Devuelve el historial de mensajes como un array de objetos
    return messagesCollection;
};

//Funcion para borrar todos los mensajes del historial
const eraseHistory = () => {
    //escribe un array vacio en el archivo JSON para borrar el historial
    fs.writeFileSync(PATH, '[]');
    //devuelve 'true' para indicar que el historial ha sido borrado con exito
    return true;
};

//funcion para agregar un nuevo mensaje al historial
const pushMessage = (message, userName) => {
    //obtiene el historial actual de mensajes llamando a la funcion getHistory
    const messagesCollection = getHistory();
    //crea un nuevo objeto de mensaje con la informacion proporcionada
    const messageObj = {
        message: message,
        sentBy: userName,
        date: new Date().toLocaleString('es-ES', { timeZone: 'UTC' })//fecha y hora actual en formato legible
    };
    //agrega el nuevo mensaje al array de historial
    messagesCollection.push(messageObj);
    //convierte el historial de mnesahes actualizado a una cadena JSON
    const historyJsonString = JSON.stringify(messagesCollection, null, 2);
    //escribe la cadena JSON en el archivo para guardar el historial actualizado
    fs.writeFileSync(PATH, historyJsonString);
};

//Exporta las funciones para que puedan ser usadas en otros modulos
export { getHistory, eraseHistory, pushMessage };