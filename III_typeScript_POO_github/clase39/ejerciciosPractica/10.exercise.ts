/*Ejercicio 10:
Funciones y arrays de objetos
Consigna: Crea una función llamada listarLibros que acepte un array de objetos
libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
función debe recorrer el array y mostrar los detalles de cada libro en la consola.*/

let libros = [
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez" },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" }
];

function listarLibros(libros: { titulo: string, autor: string }[]): void {
    libros.forEach(libro => {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}

listarLibros(libros);
// Título: Don Quijote de la Mancha, Autor: Miguel de Cervantes
// Título: Cien Años de Soledad, Autor: Gabriel García Márquez
// Título: El Principito, Autor: Antoine de Saint-Exupéry