/*Ejercicio 1:
Declarar y usar funciones con tipos
Consigna: Crea una función llamada multiplicarNumeros que acepte dos
parámetros, ambos de tipo number, y retorne el producto de ambos números.
Luego, muestra el resultado en consola llamando a la función.*/
function multiplicarNumeros(a: number, b: number): number {
    return a * b;
};

const resultado =  multiplicarNumeros(2,5);
console.log(`El resultado de multiplicar 2 por 6 es: ${resultado}`);