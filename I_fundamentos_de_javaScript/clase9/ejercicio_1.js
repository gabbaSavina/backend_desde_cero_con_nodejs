/*El objetivo de este ejercicio es imprimir en consola un texto que irá
variando según el día que contenga la variable dia. Para esto, ya
presentamos un código hecho con if/else que tendremos que modificar
y convertirlo a un switch, manteniendo el mismo resultado.*/
const prompt = require("prompt-sync")({ sigint: true });
let dia = prompt('Ingrese un dia de la semana: ').toUpperCase();

switch(dia){
    case 'LUNES':
        console.log('Buen inicio de semana');
        break;
    case 'MARTES':
        console.log('Ya es martes, a seguir');
        break;
    case 'MIERCOLES':
        console.log('Ya mitad de semana');
        break;
    case 'JUEVES':
        console.log('Ya podemos hacer planes para el finde');
        break;
    case 'VIERNES':
        console.log('Que lindo llegó el Viernes');
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
