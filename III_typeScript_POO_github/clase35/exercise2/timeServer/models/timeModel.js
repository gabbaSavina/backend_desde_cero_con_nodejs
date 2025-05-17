// timeModel.js

const getCurrentTime = () => {
    const now = new Date();
    return now.toISOString(); // Devuelve la hora actual en formato ISO
};

module.exports = { getCurrentTime };