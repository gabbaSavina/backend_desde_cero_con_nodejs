//Ejercicio 7: Array de tuplas para almacenar productos
//1. Crea un array de tuplas donde cada tupla almacene el nombre de un
//producto (string), la cantidad disponible (número) y el precio por unidad (número).
let productos1: [string, number, number] [];

//2. Añade tres productos al array con la siguiente información: "Manzana", 10, 1.5; "Pan", 20, 2.0; "Leche", 5, 1.2.
productos1 = [
    ['Manzana', 10, 1.5],
    ['Pan', 20, 2.0],
    ['Leche', 5, 1.2]
];

//3. Imprime la información del segundo producto.
console.log(productos1[2]);