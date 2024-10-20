/*Ejercicio 9:
Comparaciones lógicas
Declara dos variables booleanas y realiza una comparación lógica (como AND,
OR). Imprime el resultado.*/

let esEstudiante: boolean = true;
let permisoPaseo: boolean = false;

let puedeViajar: boolean = esEstudiante && permisoPaseo;
console.log(`¿Puede realizar el paseo con la escuela? ${puedeViajar}`);