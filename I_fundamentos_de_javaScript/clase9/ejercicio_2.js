/*El objetivo de este ejercicio es imprimir en pantalla un texto que estará
condicionado de la siguiente manera. Utilizando switch deberemos
evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso,
debe imprimir el texto "tenés clases". Para cualquier otro caso debe
imprimir "no tenés clases".*/

const prompt = require("prompt-sync")({ sigint: true });
let dia = prompt('Ingrese un dia de la semana: ').toUpperCase();

switch(dia){
    case 'LUNES':
        console.log('Tenes clases');
        break;
    case 'MARTES':
        console.log('Ya es martes, a seguir');
        break;
    case 'MIERCOLES':
        console.log('tenes clases');
        break;
    case 'JUEVES':
        console.log('Ya podemos hacer planes para el finde');
        break;
    case 'VIERNES':
        console.log('tenes clases');
        break;
    case 'SABADO':
        console.log('podemos dormir hasta tarde :p');
        break;
    case 'DOMINGO':
        console.log('Almuerzo con la familia');
        break;
    default:
        console.log('Ingrese un dia valido.');
};