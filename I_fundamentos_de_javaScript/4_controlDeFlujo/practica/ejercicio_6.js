/*Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección.
Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.*/

RANGO_MINIMO = 10;
RANGO_MAXIMO = 100;

const prompt = require("prompt-sync")({ sigint: true });

let numeroUsuario = parseInt(prompt("Ingrese un número:"));

if(numeroUsuario >= RANGO_MINIMO && numeroUsuario <= RANGO_MAXIMO){
    console.log("Su número esta en el rango")
}
else if (numeroUsuario <= RANGO_MINIMO ){
    console.log("Su número se encuentra fuera del rango");
}
else{
    console.log("Su número se encuentra fuera del rango");
}
