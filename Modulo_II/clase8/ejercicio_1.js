/* Ejercicio 1: declara dos variables numéricas numero1 y numero2.
pide al usuario que ingrese dos números y muestra cuál es mayor o sin son iguales*/

const prompt = require("prompt-sync")({ sigint: true });

let numeroUsuario1 = parseInt(prompt("Ingrese un primer numero:"));
let numeroUsuario2 = parseInt(prompt("Ingrese un segundo numero:"));
if (numeroUsuario1 === numeroUsuario2 ){
    console.log("son iguales");
}
else if (numeroUsuario1 > numeroUsuario2){
    console.log(`El numero mayor es:${numeroUsuario1}`);
}
else{
    console.log(`el numero mayor es:${numeroUsuario2}`);
}

