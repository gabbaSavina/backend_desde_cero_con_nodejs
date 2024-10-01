//Escribe un programa que calcule el precio final de un producto después
//de aplicar un descuento. Pide al usuario que ingrese el precio original y
//el porcentaje de descuento y muestra el precio final.

const prompt = require("prompt-sync")({ sigint: true });

//1. pedir al usuario el precio original del producto.
let precioOriginal = parseFloat(prompt('ingrese el precio original del producto:'));

//2. pedir al usuario el porcentaje de descuento.
let porcentajeDescuento = parseFloat(prompt('ingrese el porcentaje de descuento:'));

//3: calcular el descuento.
let descuento = (precioOriginal * porcentajeDescuento) / 100;

//4. calcular el precio final.
let precioFinal = precioOriginal - descuento;

//5. Mostrar el precio final al usuario.
console.log('el precio fnal después del descuento es:', precioFinal);