/*Tenemos un array en una variable numeros con números al azar.
Usá la función map para crear un nuevo array incrementando cada
valor del array en 10, y guardarlo en la variable numerosMasDiez
Mostrar por consola el array original y el nuevo.*/

const numeros = [3, 7, 13, 99];

let numerosPorDos = numeros.map(function(numero){
    return numero *2;
});

console.log(numeros);
console.log(numerosPorDos);