/*En este ejercicio tienes un array ‘colores’ que contiene nombres de
diferentes colores. Tu tarea es realizar las siguientes operaciones:
✓ Imprimir todos los colores del array.
✓ Modificar el primer color del array a "blanco".
✓ Agregar dos nuevos colores al final del array: "negro" y "gris".*/

let colores = ['rojo','verde', 'azul','amarillo'];

//1.imprimir los colores del array
console.log(colores);

//2.modificar el primer color a blanco
colores[0] = 'blanco';
console.log(colores);

//3.Agregar colores
colores.push('negro', 'gris');
console.log(colores);
