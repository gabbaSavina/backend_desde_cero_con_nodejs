/*Ejercicio 6: 
Uso de unknown
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los
valores.*/

let unknownVar: unknown;
//como string
unknownVar = 'Cadena de texto';
if ( typeof unknownVar === "string") {
    console.log(`La vatriable unknown es ${unknownVar}`);
};

//como number
unknownVar = 22;
if ( typeof unknownVar === "number") {
    console.log(`pero tambien puede ser numero ${unknownVar} que en la quiniela es "el loco"`);
};

//como boolean
unknownVar = false;
if ( typeof unknownVar === "boolean") {
    console.log(`Y tambien se le puede asignar un boleano que en este caso es un ${unknownVar}`);
};