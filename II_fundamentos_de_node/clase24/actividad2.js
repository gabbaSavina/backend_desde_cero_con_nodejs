/* Crea un objeto en JavaScript que represente a un estudiante con las
siguientes propiedades: nombre, edad, curso, notas (un array de
números).
*/
let estudiante = {
    nombre: "Leticia Garcia",
    edad: 22,
    curso: "4C",
    notas:[8, 9, 7, 10],
};

//Convierte este objeto a una cadena JSON usando JSON.stringify().
let jsonEstudiante = JSON.stringify(estudiante);

//Muestra la cadena JSON en la consola
console.log(jsonEstudiante);

//convierte la cadena JSON de nuevo a un objeto utilizando JSON.parse()
//y muestra el objeto en la consola.
console.log(JSON.parse(jsonEstudiante));
