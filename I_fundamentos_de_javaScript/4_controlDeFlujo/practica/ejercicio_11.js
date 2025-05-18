/*Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
Determina y muestra si el triángulo es equilátero, isósceles o escaleno.*/

const prompt = require("prompt-sync")({ sigint: true });

console.log("¿triangulo equilatero, escaleno o isoseles?");

let lado1 = parseFloat(prompt("Ingrese la longuitud en cm del lado1: "));
let lado2 = parseFloat(prompt("Ingrese la longuitud en cm del lado2: "));
let lado3 = parseFloat(prompt("Ingrese la longuitud en cm del lado3: "));

if(lado1 === lado2 && lado2 === lado3){
    console.log("es un triangulo equilatero");
}
else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("es un triangulo isoseles");
}
else{
    console.log("es un triangulo escaleno");
}