/*Declarar 4 variables utilizando la palabra reservada let y asignarles
valores según el tipo de dato que sugiera su nombre. Además, realizar
operaciones y validaciones adicionales sobre estos valores.*/

let verdadero = true;
let texto = "Buen día";
let numero = 8;
let nada = null;

/*. Realiza una operación matemática usando la variable
número, por ejemplo, suma o resta con otro número de tu
elección.*/

let suma = numero + 10;
console.log(suma);

/*Concatena el “string” de la variable texto con otro mensaje
adicional*/

console.log(texto+" a toda la gente!")

/*Verifica si la variable “verdadero” es true o false y muestra
un mensaje diferente según el resultado.*/

if (verdadero === true){
    console.log("verdadero");
}else {
    console.log("falso");
}

/*Implementa una condición para verificar si la variable nada
es null y muestra un mensaje si es asi*/

if (nada === null){
    console.log("nada");
}else{
    console.log("null");
}