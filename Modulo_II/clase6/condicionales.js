
// CONDI //     Nos permite evaluar condiciones y realizar
// CIONA //     diferentes acciones según el resultado de 
//  LES  //     dicha evaluación.

//Control de fluyo = Condicionales = mecanismos para controlar situaciones.

// I // Un condiconal te permite ejecutar un bloque
// F // de código siempre que se cumpla una CONDICIÓN.

//  CONDICIÓN  // Es una expreción lógica,
               // cuyo resultado es un valor booleano,
               // determiando así el camino a tomar.

//1. Condicional SIMPLE:
let condicion = "verdadera"
let otraCondicion = "reVerdadera"
if (condicion == "verdadera") {
    console.log("true") //codigo a ejecurar si la condición es true.
}

//2. Condicional con bloque ELSE:
if (condicion == "falso") {
    console.log("verdadera")//código a ejecutar si la condicion es true.
} else {
    console.log("falso") //código a ejecutar si la condición es false.
}

//3. Condicional con bloque ELSE IF:
if (condicion == "verdadera"){
    console.log ("verdadera") //código a ejecutar si la condicion es true.
} else if (otraCondicion == "reVerdadera") {
    console.log("reVerdadera")//código a ejecutar si la otra condición es true.
}else {
    console.log("falsoooooo")//código a ejecutar si todas las condiciones son false.
}

//EJEMPLO IF:

let clima = "lluvioso";
let dia = "Domnigo";

if (clima == "Soleado" && dia == "Domingo") {
    console.log("Esta lindo para pasear")
} else if (clima == "Soleado" && dia == "Lunes") {
    console.log("podría salir igual")
} else {
    console.log("me quedo codeando en JS")
}