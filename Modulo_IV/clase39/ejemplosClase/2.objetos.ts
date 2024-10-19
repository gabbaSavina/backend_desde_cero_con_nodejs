/////////////////////////////////////
//Ejemplos de objetos en TypeScrip///
/////////////////////////////////////



//1. Definicion basica de un objeto
let gato = {
    color: 'naranja',
    nombre: 'Arturo',
    anios: 1
};
//Se muetran las porpiedades del objeto en consola
console.log(`Color: ${gato.color}, nombre: ${gato.nombre}, edad: ${gato.anios}`);



//2. Declaracion explicita del tipo de objeto en la consola
let libro: {titulo: string; autor: string; paginas:number} = {
    titulo: 'Cien anios de soledad',
    autor: 'Garcia Marquez',
    paginas: 500
};
//se muestran las propiedades del objeto
console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}, paginas ${libro.paginas}`);



//3. Propiedades opcionales
let estudiante: { nombre: string, edad?: number } = {
    nombre:'Ana'              //'edad?:'es una propiedad que no es estrictamente obligatoria y puede
};                            // esta presente o no en el objeto

//Se utiliza el operador '??' para manejar la propiedad opcional 'edad'
//El operador ?? evalúa dos expresiones: si la primera es null o undefined, devuelve la segunda.
//Si la primera no es null ni undefined, devuelve esa primera expresión
console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad ?? 'Desconocida'}`);


//4. Metodos en un objeto
let perro = {
    nombre:'Firulais',
    raza: 'Labrador',
    ladrar: function() {
        return `${this.nombre} está ladrando!`;
    }
};
//Se llama al metodo ladrar y mostramos el resultado en la consola
console.log(perro.ladrar());