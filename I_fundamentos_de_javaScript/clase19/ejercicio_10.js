/*Crear una función que recibe un string en minúsculas, lo
convierta a mayúsculas y lo retorne.*/
const prompt = require("prompt-sync")({ sigint: true });

let stringUsuario = prompt('Ingrese una frase: ');

function StringMayusculas () {
    console.log(stringUsuario.toUpperCase());
}

StringMayusculas();