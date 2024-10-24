/*Ejercicio 5:
Función con parámetros rest
Consigna: Crea una función llamada sumarTodos que acepte una cantidad
indefinida de números y devuelva su suma. Luego, llama a la función con varios
números y muestra el resultado en la consola*/

function sumarTodos1(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0)
}
let resultado1 = sumarTodos1(3,4,6,7);
let resultado2 = sumarTodos1(8,78,25,31);

console.log(resultado1, resultado2);