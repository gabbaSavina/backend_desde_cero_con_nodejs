//Ejercicio 14: Tuplas opcionales
//1. Declara una tupla que almacene el nombre (string), la edad (número) y si
//tiene licencia de conducir (opcional, booleano).
let empleadoFabrica: [string, number, boolean?];

//2. Inicializa la tupla con los valores "Carlos", 28.
empleadoFabrica = ['Carlos', 28];

//3. Añade el valor true a la tupla indicando que tiene licencia.
empleadoFabrica[2] = true;

//4. Muestra la tupla actualizada por consola.
console.log(empleadoFabrica);