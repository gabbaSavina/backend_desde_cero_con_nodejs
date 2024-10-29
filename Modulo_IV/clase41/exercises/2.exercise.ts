//Ejercicio 2: Creación de Objetos y Atributos
//1. Define un objeto que represente un libro con las siguientes propiedades:
//título, autor, y año de publicación.
interface libroBiblioteca { 
    titulo: string,
    autor: string,
    anio: number,
};

//2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.
const libroNuevo: libroBiblioteca = {
    titulo:'Romeo y Julieta',
    autor:'William Shakespeare',
    anio: 1597,
};

console.log(libroNuevo);