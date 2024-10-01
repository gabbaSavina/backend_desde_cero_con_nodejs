/* Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener
las siguientes propiedades: nombre, edad y un array de notas (con 5
notas).*/

let estudiante = {
    nombre: "Gabriela",
    edad: 25,
    notas:[8, 6, 9, 7, 10],
};

/*Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
realizar las siguientes tareas:*/

function procesarEstudiante(estudiante) {
    // 1. Agregar una nueva nota al array de notas.
    estudiante.notas.push(8);

    // 2. Eliminar la primera nota del array.
    estudiante.notas.shift();

    // 3. Calcular el promedio de las notas restantes.
    let suma = estudiante.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    let promedio = suma / estudiante.notas.length;

    // 4. Convertir el nombre del estudiante a mayúsculas.
    let nombreMayusculas = estudiante.nombre.toUpperCase();

    // 5. Devolver un objeto con el nombre en mayúsculas y el promedio de las notas.
    return {
        nombre: nombreMayusculas,
        promedio: promedio
    };
}

// Usar la función y mostrar el resultado
let resultado = procesarEstudiante(estudiante);
console.log(resultado);