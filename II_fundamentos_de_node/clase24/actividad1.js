/*En este archivo, crea un objeto JSON que represente un libro. El objeto
debe tener las siguientes propiedades: titulo, autor, año, genero (puede
ser un array de géneros).*/

let jsonLibro = {
    "titulo" : "Learning Node",
    "autor" : "Shelley Powers",
    "anio" : "2012",
    "genero" : "Nonficcion"
};
//Muestra en la consola el título y el autor del libro.
console.log(`\nEl titulo del libro es: ${jsonLibro.titulo}`);
console.log(`El autor es: ${jsonLibro.autor}`);

//Actualiza el año del libro a un valor más reciente.
jsonLibro.anio = 2014;

//Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
jsonLibro.paginas = 374;

//• Muestra el objeto actualizado en la consola.
console.log(jsonLibro);