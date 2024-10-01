/* Número secreto
Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
le pida al usuario que lo trate de adivinar. Si el número es correcto debe
imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe
imprimir "Lo siento, ¡intenta nuevamente!"*/
const prompt = require("prompt-sync")({ sigint: true });

//generar numero aleatorio                          sumamos 1 para poder llegar a 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;// multiplicamos por 10 para que genere un numero en el rango de 1 y casi 10. 
//METODO math.floor(redondea hacia abajo al entero más cercano)
//METODO math.radom(genera un número decimal pseudoaleatorio entre 0 (incluido) y 1 (excluido))

//pedir al usuario un numero
let numeroUsuario = parseInt(prompt('Ingrese un numero del 1 al 10 :'));

// Mientras la adivinanza no sea correcta
while (numeroUsuario !== numeroAleatorio) {
    console.log(`Ese no es el numero! por favor intente otra vez!`);
    numeroUsuario = parseInt(prompt('Ingrese un numero del 1 al 10 :'));
}
//Cuando el usuario adivina
console.log(`Felicidades adiviaste el numero ${numeroAleatorio}`);