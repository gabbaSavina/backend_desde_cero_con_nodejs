const prompt = require("prompt-sync")({ sigint: true });

/*2. Escribe un programa que pida al usuario que ingrese su nombre, su
edad y su peso, y luego muestre un mensaje personalizado que incluya
toda esta información.*/

let nombre = prompt("Ingrese su nombre: ");
let edadUsuario = parseInt(prompt("Ingrese su edad: "));
while (isNaN(edadUsuario)) {
    console.log("Por favor ingrese un valor valido");
    edadUsuario = parseInt(prompt("Ingrese su edad: "))
}
let pesoUsuario = parseInt(prompt("Ingrese su peso(kg): "));
while (isNaN(pesoUsuario)) {
    console.log("Por favor ingrese un valor válido");
    pesoUsuario = parseInt(prompt("Ingrese su peso(kg): "))
}
console.log(`Hola ${nombre}, has indicado que tu peso es ${pesoUsuario} y tu edad es ${edadUsuario}`);
