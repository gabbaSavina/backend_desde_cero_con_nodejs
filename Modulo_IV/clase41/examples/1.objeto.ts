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
    nombre: "Mariana",
    edad: 21,
    materiaFavorita: "Lengua",
    promedio: 9.5,

    //implementacion del metodo 'saludar'
    saludar: function() {
        console.log(`Hola soy ${estudiante1.nombre}`)
    },

    //Implementacion del metodo 'obtenerDetalle'
    obtenerDetalles: function() {
        return `Nombre: ${estudiante1.nombre}`
    }
};

//uso del metodo saludar