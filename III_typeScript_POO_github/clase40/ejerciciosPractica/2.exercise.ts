//Ejercicio 2: Tuplas para almacenar información
//1. Declara una tupla para representar un libro con la siguiente información:
//título (string), año de publicación (número) y si está disponible (booleano).
let libro3: [string, number, boolean];

//2. Inicializa la tupla con los valores: "El principito", 1943, true.
libro3 = ['El prinicito', 1943, true];

//3. Imprime el título del libro y el año de publicación.
let [titulo, anio, disponible] = libro3;
console.log(titulo, anio);

//4. Cambia el valor de disponibilidad a false y muestra el nuevo valor por consola.
libro3[2] = false;
console.log(libro3);