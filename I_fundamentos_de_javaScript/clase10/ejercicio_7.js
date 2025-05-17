/*Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo)*/
const prompt = require("prompt-sync")({ sigint: true });

//1. Crear array con nombres
const nombres = [];

//2.Solicita al usuario que ingrese 5 nombres
for (i = 0; i < 5; i++){
    nombres.push(prompt('Ingrese un nombre: '));
}
console.log(nombres);

//3.Solicita al usuario otro nombre
let ultimoNombre = (prompt('Ingrese un nombre: '));

//4. Verificar si el ultimo nombres se encuetra en el array
nombres.includes(ultimoNombre) ? console.log ('el nombre esta incluido') : console.log('el nombre no se encuentra');
    //.includes() es un metodo que se utiliza para determina si un array contiene un elemento específico y devuelve true o false.



