/*Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación.*/
const prompt = require("prompt-sync")({ sigint: true });

//Solicito datos al usuario
let nombreMascota = prompt('Ingrese el nombre de su mascota: ');
let vacuna = prompt('¿Se encuentra vacunado?(s/n): ');

//Funcion flecha
const Vacunacion = (vacuna) => vacuna === 's' ? `${nombreMascota} se encuentra vacunado` : `${nombreMascota} no se encuentra vacunado`;

//Imprimo en consola
console.log(Vacunacion(vacuna));