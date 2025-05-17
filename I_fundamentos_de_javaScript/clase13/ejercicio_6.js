/*Hacer un programa que calcule la suma de los N primeros números
naturales, dónde N es el número límite ingresado por teclado*/
const prompt = require("prompt-sync")({ sigint: true });

let numeroUsuario = parseInt(prompt(`Ingrese un numero natural: `));

let calculador = () => {
    let suma = 0;
    for(i = 0; i < numeroUsuario; i++) {
        suma += i;    
    } return suma;
};

console.log( `La suma de los numero naturales hasta ${numeroUsuario} es ${calculador()}`);