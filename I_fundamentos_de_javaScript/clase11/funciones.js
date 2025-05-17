/* Funcion expresada: es la que guardo dentro de una variable*/

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}
console.log(sumar(5, 5));

/*Funcion declarada: la escribimos sin variable*/

function restar (numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar(10, 2));

/*Scope: es el alcance de la variable*/

let mensaje = 'hola';

function saludar(){
    return mensaje
}

console.log(saludar());
