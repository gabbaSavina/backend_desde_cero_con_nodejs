/*12) Crea una función que le pasamos el radio de un circulo y
nos devuelve la circunferencia.*/

function calcularCircunferencia (radio) {
    let PI = Math.PI; 
    let circunferencia = 2 * PI * radio; // Fórmula de la circunferencia
    return circunferencia
};

let radio = 5;
console.log(`La circunferencia de un círculo con radio ${radio} es: ${calcularCircunferencia(radio)}`);