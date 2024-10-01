/* Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio.*/
const prompt = require("prompt-sync")({ sigint: true });

let notas = [];   //array para almacenar notas

for(i = 0; i < 5; i++){
    notas[i] = parseFloat(prompt("Ingrese su nota: ")); //iteracion de notas
}

//funcion flecha para sacar promedio
const promedio = (notas) => {
    let suma = 0;
    for (let i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    return suma / notas.length;
}

//impresion
console.log("Las notas ingresadas son: ",notas);

let promedioFinal = promedio(notas);

console.log(`El promedio de las notas es: ${promedioFinal}`);
