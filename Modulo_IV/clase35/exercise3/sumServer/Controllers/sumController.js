const { sumNumbers } = require('../models/sumModel'); // Asegúrate de que la ruta sea correcta

const handleSumRequest = (socket, numbers) => {
    const [num1, num2] = numbers.map(Number); // Convierte los números a tipo Number
    const result = sumNumbers(num1, num2); // Suma los números

    socket.write(`La suma de ${num1} y ${num2} es: ${result}\n`); // Envía el resultado al cliente
};

module.exports = { handleSumRequest };