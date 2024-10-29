//Ejercicio 11: Arrays y métodos de búsqueda
//1. Declara un array de números del 1 al 10.
let numeros10: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//2. Usa un método para encontrar si el número 5 está presente en el array.
let incluye5: boolean = numeros10.includes(5);
console.log(`¿Contiene el numero 5? - ${incluye5}.`);

//3. Encuentra el índice del número 8 en el array.
let indice8: number = numeros10.indexOf(8);
console.log(`En el array 'numeros10' el indice del numero 8 es: ${indice8}`);

//4. Invierte el orden de los números en el array.
numeros10.reverse();

//5. Muestra el array final por consola.
console.log(numeros10);