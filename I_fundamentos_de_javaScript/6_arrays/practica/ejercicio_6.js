/*Escribe un programa en JavaScript que clasifique diferentes animales
en tres categorías: "mamífero", "ave" o "reptil". Se te proporciona un
array llamado animales que contiene nombres de diferentes animales.
Utiliza un bucle for y operadores ternarios para crear un nuevo array
llamado clasificacion que contenga la clasificación de cada animal
según su tipo.*/

let animales = ['perro','gato','loro','serpiente','elefante','aguila'];
let mamífero = [];
let ave = [];
let reptil = [];

for (let i = 0; i < animales.length; i++) {                                          //mamifero[mamifero.length] = animales[i]
    animales[i] === 'perro' || animales[i] === 'gato' || animales[i] === 'elefante' ? mamífero.push(animales[i]) : 'mamífero no encontrado';
    animales[i] === 'loro' ||  animales[i] === 'aguila' ? ave.push(animales[i]) : 'ave no encontrada';
    animales[i] === 'serpiente' ? reptil.push(animales[i]) : 'reptil no encontrado';
} //.push se utiliza para agregar uno o más elementos al final de un array. Este método modifica el array original y devuelve la nueva longitud del array.
console.log(mamífero);
console.log(ave);
console.log(reptil);