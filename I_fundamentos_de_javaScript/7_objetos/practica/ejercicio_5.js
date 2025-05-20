/*Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Utiliza un array para almacenar las flores
favoritas y realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array (aquí usa un método de los vistos en Arrays)
3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas (aquí usa un método de los vistos en Arrays)
4. Muestra por consola cuántas de las flores favoritas se mencionaron.
Pista: Se utiliza el método includes.*/
const prompt = require("prompt-sync")({ sigint: true });

let flores = [];

for(i = 1; i <= 3; i++){
    flores.push(prompt('Menciona tus 3 flores favoritas: '));
}

let florEspecifica = parseInt(prompt('¿te gustan las margaritas? si(1) no(2); '));
if(florEspecifica === 1){
    console.log('que lindo que te gusten!');
} else{
    console.log('Oh que lastima!');
}

console.log(`Tus flores favoritas son: ${flores}`);