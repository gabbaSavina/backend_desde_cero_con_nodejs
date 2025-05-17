/*Ejercicio 4:
Parámetros opcionales simulados
Declara dos variables, una para almacenar un nombre y otra para almacenar una
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
proporcionada". Si se asigna la edad, imprímela junto al nombre.*/

let name4: string = 'Paul';
let age4: number | undefined;

function isAgeDeclared(age4: number | undefined) {
    if (age4 !== undefined) {
        console.log(`${name4} tiene ${age4} años.`);
    } else {
        console.log(`${name4} no ha proporcionado su edad.`);
    }
};

isAgeDeclared(undefined);
isAgeDeclared(34);