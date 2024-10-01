/*Dado un numero entero positivo, mostrar su factorial. Pista: El
factorial de un número se obtiene multiplicando todos los
números enteros positivos que hay entre el 1 y ese número.*/
const prompt = require("prompt-sync")({ sigint: true });

let numeroEntero = parseInt(prompt('Ingrese un numero entero: '));

function calcularFactorial() {
    let factorial = 1;
    for(i = 1; i <= numeroEntero; i++) {
        factorial *= i;
    }
    return factorial;
};

console.log(`${calcularFactorial()} es el factorial del numero: ${numeroEntero}`)