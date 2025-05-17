//Ejercicio 3: Métodos en Objetos
//1. Modifica el objeto del ejercicio anterior para que incluya un método
//llamado descripcion() que devuelva una descripción del libro.
interface libroBiblioteca2 { 
    titulo: string;
    autor: string;
    anio: number;

    //metodo descripcion
    obtenerDescricion: () => string,
};

//implemetacion metodo
const libroNuevo1: libroBiblioteca2 = {
    titulo: 'Martin Fierro',
    autor: 'Jose Hernandez',
    anio: 1872,

    obtenerDescricion: function() {
    return 'El Gaucho Martín Fierro es un poema narrativo escrito en verso\n y una obra literaria considerada ejemplar del género gauchesco.\n Tiene 2316 versos y 13 cantos.'
    }
}

//2. Llama al método y muestra el resultado en la consola.
console.log(libroNuevo1.obtenerDescricion());
