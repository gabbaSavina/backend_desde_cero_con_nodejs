const { getCurrentTime } = require('../models/timeModel'); // Asegúrate de que la ruta sea correcta

const handleTimeRequest = (socket) => {
  const currentTime = getCurrentTime(); // Obtiene la hora actual
  socket.write(`Hora actual: ${currentTime}\n`); // Envía la hora al cliente
};

module.exports = { handleTimeRequest };