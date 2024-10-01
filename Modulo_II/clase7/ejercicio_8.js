const prompt = require("prompt-sync")({ sigint: true });

/*Escribe un programa que
convierta una temperatura dada en grados Celsius a grados Fahrenheit*/

console.log("Conversor de unidades de temperatura");

let celsius = parseFloat(prompt("Ingrese la temperatura en C°:"));
while(isNaN( celsius)){
    console.log("Por favor ingrese un dato valido");
    celsius = parseFloat(prompt("Ingrese la temperatura en C°:"))
}

let fahrenheit = celsius * 9 / 5 + 32;

console.log(`la temperatura es ${fahrenheit} °F`);
