//importamos Express
const express = require('express');

//CReamos una instancia de express
const app = express();

//Definimos un puerto para nuestro servidor
const PORT = 3000;

// ruta GET para la url raiz
app.get('/', (req, res) => {
    res.send('Hola alumnas de ADA, bienvenidas al servidor de Expres.js')
});

// Ruta get para "/pokemon"
app.get('/pokemon', (req, res) => {
    res.json({ message: 'Aqui te muestro una lista de pokemons' })
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});