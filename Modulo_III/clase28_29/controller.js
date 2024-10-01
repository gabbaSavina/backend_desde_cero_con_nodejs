//importa todas las funciones del archivo model.js
import * as model from './model.js';

//funcion para obtener el historial completo de mensajes
const getHistory = () => {
    //llama a la funcion getHistory del modelo para obtenr el historial e mensajes
    return model.getHistory();
};

//Funcion para borrar todo el historial de mensajes
const eraseHistory = () => {
    //llama a la funcion eraseHistory del modelo para borrar el historial
    return model.eraseHistory();
};

//Funcion para agregar un nuevo mensaje al historial
const pushMessage = () => {
    //llamar a la funcion pushMessage del modelo para agregar el nuevo mensaje
    return model.pushMessage(message, userName);
};

//Exporta las funciones para que puedan ser usadas por el server o el client
export { getHistory, eraseHistory, pushMessage };