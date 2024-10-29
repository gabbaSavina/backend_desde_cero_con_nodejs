//definicion de una interfaz 'Estudiante'

interface Estudiante {
    nombre: string; //propiedad y tipo
    edad: number;
    materiaFavorita: string;
    promedio: number;

    saludar: () => void //metodo saludar q no devuelve valor
    obtenerDetalles: () => string// metodo que devuelve una cadena de texto con detalles del almno
}

//creacion de un objeto que cumple con la interfaz 'Estudiante'
export const estudiante1: Estudiante = {
    nombre: "Mariana",              //Asignacion de cada uno de los atributos
    edad: 21,
    materiaFavorita: "Lengua",
    promedio: 9.5,

    //implementacion del metodo 'saludar'
    saludar: function() {
        console.log(`Hola, soy ${estudiante1.nombre}, tengo ${estudiante1.edad} 
            años y mi materia favorita es ${estudiante1.materiaFavorita}.`);
    },

    //Implementacion del metodo 'obtenerDetalle'
    obtenerDetalles: function() {
        return `Nombre: ${estudiante1.nombre}, Edad: ${estudiante1.edad}, 
        Materia Favorita: ${estudiante1.materiaFavorita}, Promedio: ${estudiante1.promedio}.`;
    }
};

//uso del metodo saludar
estudiante1.saludar(); // Imprime: Hola, soy Ana, tengo 21 años y mi materia favorita es Matemáticas.

// Uso del método 'obtenerDetalles'
const detalles = estudiante1.obtenerDetalles();
console.log(detalles); // Imprime: Nombre: Ana, Edad: 21, Materia Favorita: Matemáticas, Promedio: 9.5.
