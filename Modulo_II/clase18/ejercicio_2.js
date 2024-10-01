/*Pide al usuario que ingrese una oración. Luego, escribe la función
“procesarOracion” que haga lo siguiente:*/

const prompt = require("prompt-sync")({ sigint: true });

let oracionUsuario = prompt('Ingrese una oración: ');

function porcesarOracion(oracionUsuario) {
    //1. Quite los espacios en blanco al principio y al final.
    console.log(oracionUsuario.trim());
    //2.dividir la oracion en palabras
    console.log(oracionUsuario.split(' '));
    //3.remplace todas las vocales 'a' por '@'
    console.log(oracionUsuario.replace(/a/g, '@'));
    //4.encuentre la posición de la 1° aparicion de la palabra "javascrip".
    console.log(oracionUsuario.indexOf('javascript'));
    //5.convierta la oracion a una cadena de palabras separadas por guiones
    console.log(oracionUsuario.replace(/ /g, '-'));
};

porcesarOracion(oracionUsuario);