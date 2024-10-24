/*Ejercicio 4:
Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
titulo (string), autor (string) y paginas (number). La función debe devolver un
objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola.*/


function crearLibro(titulo: string, autor: string, paginas: number): { titulo: string, autor: string, paginas: number } {
    return { titulo, autor, paginas };
};

const libro1 = crearLibro("Cómo como", "Natalia Kiako", 126);
const libro2 = crearLibro("Asuntos de Venus", "Lu Gaitan", 255);

console.log(libro1); 
console.log(libro2);