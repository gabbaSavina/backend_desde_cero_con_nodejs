/*Pide al usuario que ingrese su peso en kilogramos y 
conviértelo a libras. Muestra el resultado con un mensaje.*/

const prompt = require("prompt-sync")({ sigint: true });

let pesoUsuarioKg = parseFloat(prompt("Ingrese su peso en kg:"));
let pesoUsuarioLb = pesoUsuarioKg * 2.20462;

console.log(`Su peso en lb es:${pesoUsuarioLb}`);
