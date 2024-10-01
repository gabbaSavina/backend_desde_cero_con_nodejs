//definicion basica de un objeto
let gato = {
    color: 'naranja',
    nombre: 'Arturo',
    anios: 1
};

//mostrar las porpiedades del objeto en consola
console.log(`Color: ${gato.color}, nombre: ${gato.nombre}, edad: ${gato.anios}`);

//declaracion explicita del tipo de dato
let libro: {titulo: string; autor: string; paginas:number} = {
    titulo: 'Cien anios de soledad',
    autor: 'Garcia Marquez',
    paginas: 500
};

//se muestran las propiedades del objeto
console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}, paginas ${libro.paginas}`);

//