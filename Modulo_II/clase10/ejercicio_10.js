/*implementa un programa que permita al usuario registrar la edad de
mascotas en una veterinaria hasta que decida dejar de agregar.
Cuando el usuario no agregue mas edades, imprimir en consola las
mascotas agregadas anteriormente y sus respectivas edades*/
const prompt = require("prompt-sync")({ sigint: true });

let edadMascostas = [];
let nombreMascostas = [];
let continuar;
let i = 0;

do{
    nombreMascostas[i] = prompt('Ingrese el nombre de la mascosta: ');
    edadMascostas[i] = prompt('Ingrese la edad de la mascosta: ');
    continuar = prompt('Desea continuar ingresando mascostas?(si/no):');
    i++;
}while (continuar == 'si');

for(i = 0; i < nombreMascostas.length; i++);{
    console.log(nombreMascostas, edadMascostas);
}