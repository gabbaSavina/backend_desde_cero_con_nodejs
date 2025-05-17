const messageHandler = require('../models/messageModel.js'); 

// Función para manejar el eco
const echoMessage = (socket, message) => {
    messageHandler.incrementMessageCount(); // Incrementa el contador
    const count = messageHandler.getMessageCount(); // Obtiene el valor actual del contador
    const echo = messageHandler.createMessage(message); // Crea el mensaje eco

    // Envía de vuelta el eco y el contador
    socket.write(JSON.stringify({ echo: echo.content, messageCount: count }) + '\n');
};

// Exporta el controlador
module.exports = { echoMessage };