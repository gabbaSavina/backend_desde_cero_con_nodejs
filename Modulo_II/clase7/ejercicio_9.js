const prompt = require("prompt-sync")({ sigint: true });

/*Escribe un programa que calcule el
Índice de Masa Corporal (IMC)*/

console.log("Calculador de Indice de Masa Corporal(IMC)");

let peso = parseFloat(prompt("Ingrese su peso en kg:"));
while(isNaN(peso)){
    console.log("Por favor ingrese un dato válido");
    peso = parseFloat(prompt("Ingrese su peso en kg:"));
}

let altura = parseFloat(prompt("Ingrese su altura en m: "));
while(isNaN(altura)){
    console.log("Por favor ingrese un dato válido");
    altura = parseFloat(prompt("Ingrese su peso en kg:"));
}

let imc = peso / (altura * altura);

console.log(`Su Indice de Masa Corporal(IMC) es:${imc}`);
