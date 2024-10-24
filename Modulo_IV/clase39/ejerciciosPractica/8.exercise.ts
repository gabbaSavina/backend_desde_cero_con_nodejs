/*Ejercicio 8: 
Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
función debe retornar el área de la figura. Usa tipos específicos para cada caso.*/

function calcularArea(figura: "circulo" | "rectangulo", ...valores: number[]): number {
    if (figura === "circulo") {
        const radio = valores[0]; // El primer valor es el radio del círculo
        return Math.PI * Math.pow(radio, 2); // Área del círculo = π * radio²
    } else if (figura === "rectangulo") {
        const largo = valores[0]; // El primer valor es el largo
        const ancho = valores[1]; // El segundo valor es el ancho
        return largo * ancho; // Área del rectángulo = largo * ancho
    } else {
        throw new Error("Figura no válida"); // Si la figura no es "circulo" o "rectangulo", se lanza un error
    }
}

const areaCirculo = calcularArea("circulo", 5);
console.log(areaCirculo); // Salida: 78.53981633974483 (Área de un círculo con radio 5)

const areaRectangulo = calcularArea("rectangulo", 4, 6);
console.log(areaRectangulo); // Salida: 24 (Área de un rectángulo de 4x6)
