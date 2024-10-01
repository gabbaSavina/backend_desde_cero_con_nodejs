/*Calcular el precio final con IVA, solicitar al usiario el precio de un
producto y el porcentahe de IVA. Usar una función flecha para calcular el precio final*/
const prompt = require("prompt-sync")({ sigint: true });

const calcularPrecioIva = (precio, iva) => precio + (precio * iva /100);

let precio = parseFloat(prompt('Ingrese el precio del producto: '));
let iva = parseFloat(prompt('Ingrese el porcentaje de IVA(solo numeros): '));
let precioFinal = calcularPrecioIva(precio, iva);

console.log(`El precio final con IVA es: ${precioFinal}`);
