/*Escribe un programa que solicite al usuario ingresar 5 paises y los
almacene en un array. Luego, imprime en consola todos los paises de
manera alfabetica.
Importante: Este ejercicio puede ser resulto con el método sort(). Si
desean investigar y utilizarlo es aceptable.*/
const prompt = require("prompt-sync")({ sigint: true });

//1. Crear array con paises
const paises = [];

//2.Solicita al usuario que ingrese 5 paises
for (i = 0; i < 5; i++){
    paises.push(prompt('Ingrese el nombre de un pais: '));
}

//3. ordenar alfabeticamente
console.log(paises.sort());
                //.sort() es un metodo que ordena los elementos de un array.
