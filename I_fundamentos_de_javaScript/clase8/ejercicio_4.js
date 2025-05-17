/*Declara una variable nombre y pide al usuario 
que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre.*/

const prompt = require("prompt-sync")({ sigint: true });

let miNombre = "savina";

let nombre = prompt("Ingrese su nombre:");
if(nombre === miNombre){
    console.log("tenemos el mismo nombre!");
}
else {
    console.log(`tu nombre ${nombre}, no es igual al mío, mi nombre es Savina`);
}