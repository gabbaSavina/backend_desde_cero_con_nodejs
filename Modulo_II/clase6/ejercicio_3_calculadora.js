const prompt = require("prompt-sync")({ sigint: true });

/*Escribe un programa que pida al usuario dos números y una operación
(suma, resta, multiplicación o división). Luego, realiza la operación 
indicada y muestra el resultado en la consola.*/

console.log("Calculadora")
let numeroUno = parseFloat(prompt("Ingrese un numero:"));
while (isNaN(numeroUno)) {                                                //el bucle WHILE ejecuta repetidamente un codigo MIENTRAS LA CONDICIÓN SEA VERDADERA
    console.log("Por favor, introduce un dato valido");
    numeroUno = parseInt(prompt("Ingrese un numero: "));
}

let operacion = prompt("Ingrese una operación: +, -, *, /; ");
while (operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/" )  {
    console.log("Por favor, ingrese una operación válida");
    operacion = prompt("Ingrese una operación: +, -, *, /: ");
}

let numeroDos = parseFloat(prompt("Ingrese otro numero:"));
while (isNaN(numeroDos)) {                                                //el bucle WHILE ejecuta repetidamente un codigo MIENTRAS LA CONDICIÓN SEA VERDADERA
    console.log("Por favor, introduce un dato valido");
    numeroDos = parseInt(prompt("Ingrese otro numero: "));
}

let resultado = 0;

if (operacion === "+") {
    resultado = numeroUno + numeroDos;
} else if (operacion === "-") {
    resultado = numeroUno - numeroDos;
} else if (operacion === "*") {
    resultado = numeroUno * numeroDos;
} else {resultado = numeroUno / numeroDos}
console.log(resultado);