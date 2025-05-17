// se importa express
const express = require('express');

// se crea una instancia de la api de express
const app = express();

// se habilita el middleware para analizar cunerpos de solicitudes
//en formato JSON
app.use(express.json());

// base de datos
let animales = [
    {id: 1, name: "Leon", species: 'felino'},
    {} 
]