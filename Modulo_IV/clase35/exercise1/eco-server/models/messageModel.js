// Objeto para manejar mensajes y el contador
const messageHandler = {
    // Variable para contar los mensajes
    messageCount: 0,

    // Función para incrementar el contador
    incrementMessageCount() {
        //Cuando this se utiliza dentro de un método de un objeto,
        //this se refiere al objeto que contiene el método:
        this.messageCount++;
    },

    // Función para obtener el contador actual
    getMessageCount() {
        return this.messageCount;
    },

    // Función para crear un nuevo mensaje
    createMessage(content) {
        return {
        content: content,
        };
    },
};

/* Ejemplo de uso:
a sección "Ejemplo de uso" en el código es simplemente una manera de demostrar cómo se pueden
utilizar las funciones y propiedades definidas dentro del objeto messageHandler
*/
const message = messageHandler.createMessage('Hola, mundo!');
messageHandler.incrementMessageCount();

console.log('Contenido del mensaje:', message.content);
console.log('Contador de mensajes:', messageHandler.getMessageCount());

module.exports = messageHandler;
