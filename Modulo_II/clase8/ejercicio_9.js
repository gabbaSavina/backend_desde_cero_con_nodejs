/*Define una constante PI con el valor de pi (3.14159). 
Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.*/
const prompt = require("prompt-sync")({ sigint: true });

const PI = 3.14159;

let radioCirculo = parseFloat(prompt("Ingrese en cm el radio de la circunsferencia: "));
let perimetroCirculo = PI * (radioCirculo + radioCirculo);
let areaCirculo = PI *(radioCirculo * radioCirculo);

console.log(`El perimetro del ciruclo es ${perimetroCirculo}`);
console.log(`EL area del circulo es ${areaCirculo}`);
