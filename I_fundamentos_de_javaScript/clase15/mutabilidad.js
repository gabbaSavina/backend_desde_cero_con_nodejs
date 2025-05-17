//1.Mutabilidad en Objetos
let persona = {
    nombre: 'berni',
    edad: 26
};
//cambiar una propiedad de mi objeto
persona.edad = 31;
console.log(persona)// imprime {nombre: 'Berni', Edad: 31 }
//Agregar una nueva propiedad
persona.direccion = 'Calle Falsa 123'
console.log(persona)// imprime el objeto con sus propiedades nombre, edad, direccion.

//2.Mutabilidad en Arrays
let numeros = [1, 2, 3, 4, 5];
//Cambiar el elemento del Array
numeros[0] = 10; //cambia la posision 0 (numero 1) por 10
//Agregar un nuevo elemento al array
numeros.push(6);
console.log (numeros); // agrega el numero 6 al final de los elementos del array

//3. Mutabilidad en funciones
let saludar = function (nombre) {
    console.log(`Hola,  ${nombre}`);
};
saludar('Berni');
//rea