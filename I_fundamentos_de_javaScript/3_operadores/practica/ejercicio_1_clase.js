/* Calculando la edad: Escribir un programa que le pida al usuario su año de nacimiento
e imprima su edad actual en la consola con la frase "tienes X años".Asumiendo que el año
actual es 2024*/
const prompt = require("prompt-sync")({ sigint: true });

//le pedimos al usuario su año de nacimiento
let anioNacimiento = parseInt(prompt('Ingresa tu año de nacimiento: '));

//definir el año actual
const anioActual = 2024;

//calcular la edad
let edad = anioActual - anioNacimiento;


//imprimimos 
console.log(`Tienes ${edad} años.`);