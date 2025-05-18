/*Escribe un programa que pida al usuario
que ingrese tres números y determine cuál es el mayor de los tres*/

const prompt = require("prompt-sync")({ sigint: true });

let numeroUsuario1 = parseInt(prompt("Ingrese un primer numero:"));
let numeroUsuario2 = parseInt(prompt("Ingrese un segundo numero:"));
let numeroUsuario3 = parseInt(prompt("Ingrese un tercer numero:"));
if (numeroUsuario2 > numeroUsuario1 && numeroUsuario2 > numeroUsuario3 ){
    console.log(`El numero mayor es:${numero2}`);
}
else if (numeroUsuario1 > numeroUsuario2 && numeroUsuario1 > numeroUsuario3){
    console.log(`El numero mayor es:${numeroUsuario1}`);
}
else{
    console.log(`el numero mayor es:${numeroUsuario3}`);
}