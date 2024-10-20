/*Ejercicio 10:
Uso de objetos
Declara un objeto en TypeScript con propiedades de tipo string, number y
boolean. Accede a estas propiedades e imprímelas en la consola.*/

let usuario = {
    nombre: 'Olga',
    edad: 55,
    mail: 'olgita@gmail.com',
    tieneMascota: false
};

console.log(`${usuario.nombre} tiene ${usuario.edad} años. Su
    mail es ${usuario.mail} y es ${usuario.tieneMascota} que tiene mascota`);