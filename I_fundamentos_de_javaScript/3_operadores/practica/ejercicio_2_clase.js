/*Calculo de descuento por edad Solicitar al usuario su edad y usar
funcion flecha para aplicar un descuento. Puedes tomar punto de partida
los siguientes datos: ✓ 65 anos = 15% de descuento
✓ Menor a 65 = No hay descuento*/
const prompt = require("prompt-sync")({ sigint: true });

const DescuentoPorEdad = (edad) => {
    let descuento = (edad >= 65) ? 0.15 : 0;
    return descuento;
}

let edad = parseInt(prompt('Ingrese su edad: '));
let descuento = DescuentoPorEdad(edad);

if (descuento > 0 ) {
    console.log(`Tienes un descuento del ${descuento * 100}% por ser adulto mayor.`);
} else {
    console.log('Ni tienes descueno por edad.');
}
