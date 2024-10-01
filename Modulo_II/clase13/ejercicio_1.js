/*Conversor de monedas
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
una función flecha para convertir el monto a pesos.*/
const prompt = require("prompt-sync")({ sigint: true });

//funcion flecha
const convercionPesos = (dolar, cotizacionDolar) => dolar * cotizacionDolar;

//declaro variables
let dolar = parseFloat(prompt("Ingrese el monto en dolares(us$): "));
let cotizacionDolar =  1373;

//imprimo en consola
console.log(`El monto de us$${dolar} son equivalentes a $ `, convercionPesos(dolar, cotizacionDolar));