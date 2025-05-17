/*Crea un programa que solicite al usuario ingresar números
continuamente hasta que el usuario ingrese un número negativo.
Luego, imprime la suma de todos los números ingresados.*/
const prompt = require("prompt-sync")({ sigint: true });

let suma = 0;
let numeroUsuario =  parseInt(prompt('Ingrese un numero: '));

while(numeroUsuario >= 0){
    suma += numeroUsuario;
    numeroUsuario = parseInt(prompt('Ingrese un numero: '));
}

console.log(`La suma de los números es: ${suma}`);