const prompt = require("prompt-sync")({ sigint: true });

/*Escribe un programa que pida al usuario tres números y
determine cuál es el mayor de los tres. Muestra el número mayor en la consola.*/

console.log("¿Cúal es el mayor?")

let primerNumero = parseFloat(prompt("Ingrese el primer numero: "));
while (isNaN(primerNumero)) {                                                //el bucle WHILE ejecuta repetidamente un codigo MIENTRAS LA CONDICIÓN SEA VERDADERA
    console.log("Por favor, introduce un dato valido");
    primerNumero = parseInt(prompt("Ingrese otro numero: "));
}
let segundoNumero = parseFloat(prompt("Ingrese el segundo numero: "));
while (isNaN(segundoNumero)) {                                                //el bucle WHILE ejecuta repetidamente un codigo MIENTRAS LA CONDICIÓN SEA VERDADERA
    console.log("Por favor, introduce un dato valido");
    segundoNumero = parseInt(prompt("Ingrese otro numero: "));
}
let tercerNumero = parseFloat(prompt("Ingrese el tercer  numero: "));
while (isNaN(primerNumero)) {                                                //el bucle WHILE ejecuta repetidamente un codigo MIENTRAS LA CONDICIÓN SEA VERDADERA
    console.log("Por favor, introduce un dato valido");
    segundoNumero = parseInt(prompt("Ingrese otro numero: "));
}
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log(primerNumero);
}
else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
    console.log(segundoNumero);

} else {console.log(tercerNumero)};
