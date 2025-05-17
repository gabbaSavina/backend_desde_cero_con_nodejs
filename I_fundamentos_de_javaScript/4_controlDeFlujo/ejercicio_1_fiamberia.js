const prompt = require("prompt-sync")({ sigint: true });

// Situación 1: (ejercicio fiambrería) temperatura
let temperatura = parseInt(prompt("Ingrese temperatura: "));
while (isNaN(temperatura)) {                                                //el bucle WHILE ejecuta repetidamente un codigo MIENTRAS LA CONDICIÓN SEA VERDADERA
    console.log("Por favor, introduce una temperatura valida");
    temperatura = parseInt(prompt("Ingrese temperatura: "));
}
if (temperatura >= 25) {
    console.log("usar ropa ligera");
} else if (temperatura < 20) {
    console.log("Te recomiendo que uses abrigo");
} else {
    console.log(`el clima está ideal. Temperatura: ${temperatura} C°`);
}

//¿Está lloviendo?
let lluvia = prompt("¿Está lloviendo? escribe S o N: ").toUpperCase();          //toUpperCase() el ingreso del usurario sera en mayúsculas
while (lluvia != "S" && lluvia != "N"){
    console.log("dato inválido:ingrese nuevamente");
    lluvia = prompt("¿Está lloviendo? escribe S o N: ").toUpperCase();
}
if (lluvia === "S"){
    console.log("no te olvides de llevar el paraguas");
} else if(lluvia === "N") {
    console.log("estas lista para salir");
} 

//Asensor
let llamarAsensor = parseInt(prompt("Ingrese un número de piso: "));
while (isNaN(llamarAsensor)) {
    console.log("Por favor ingrese un numero de piso válido");
    llamarAsensor = parseInt(prompt("Ingrese un número de piso: "));
}
if (llamarAsensor > 1){
    console.log(`el asensor esta llegando al piso ${llamarAsensor} `);
}  else {
    console.log("Ve a la fiamberia");
}

//Hora
let horaActual = parseFloat(prompt("Ingrese la hora actual en formato 24 hs: "));         //PARSEFLOAT= para convewntir el string inngresado en numeros con decimales
while (isNaN(horaActual)){
    console.log("Por favor ingrese una hora válida en formato 24hs");
    horaActual = parseFloat(prompt("Ingrese la hora actual en formato 24 hs: "));
}

let horaDeAperutra = parseFloat(prompt("Ingrese la hora de apertura de la fiambería en formato 24 hs: "));
while (isNaN(horaDeAperutra)){
    console.log("Por favor ingrese una hora válida en formato 24hs");
    horaDeAperutra = parseFloat(prompt("Ingrese la hora actual en formato 24 hs: "));
}

let horaDeCierre = parseFloat(prompt("Ingrese el horario de cierre de la fiambería en formato 24 hs: "));
while (isNaN(horaDeCierre)){
    console.log("Por favor ingrese una hora válida en formato 24hs");
    horaDeCierre = parseFloat(prompt("Ingrese la hora actual en formato 24 hs: "));
}

if (horaDeAperutra <= horaActual && horaActual <= horaDeCierre ){
    console.log("Puedes ir a la fiambería que está abierta");
}else {
    console.log ("Quedate en casa, la fiambería está cerrada");
}

//Queso
let quesoDambo = parseInt(prompt("Ingrese la cantidad(gr) de queso a comprar: "));
while(isNaN(quesoDambo)){
    console.log("Por favor ingrese un dato válido");
}

let precioQuesoDambo = quesoDambo * 0.008

console.log(`total a pagar: us$ ${precioQuesoDambo}`);

//Pago
let trajeLaBilletera = prompt("¿traje la billetera? Escribe S o N: ").toUpperCase();
while(trajeLaBilletera != "S" && trajeLaBilletera != "N"){
    console.log("dato inválido:ingrese nuevamente").toUpperCase();
    trajeLaBilletera = prompt("¿traje la billetera? Escribe S o N: ");
}

if (trajeLaBilletera === "S"){
    console.log(`Realiza el pago a Monica, la fiambrera por: us$ ${precioQuesoDambo}`);
}else{
    console.log(`deuda con Monica por: us$${precioQuesoDambo}`);
}
