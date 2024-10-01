/*Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo
contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras.
Considerar que el usuario ingresa números de hasta dos cifras.*/
const prompt = require("prompt-sync")({ sigint: true });

let numeroUsuario = parseInt(prompt("Ingrese un numero de dos cifras: "));

let faltaDosCifras = 10;
let faltaTresCifras = 100;

if(numeroUsuario <= 9) {
    let resultado1 = faltaDosCifras - numeroUsuario;
    console.log(`Al numero ${numeroUsuario} le fatlan ${resultado1} para ser de dos cifras`);
} else if (numeroUsuario <= 99) {
    let resultado2 = faltaTresCifras - numeroUsuario;
    console.log(`Al numero ${numeroUsuario} le fatlan ${resultado2} para ser de tres cifras`)
};

