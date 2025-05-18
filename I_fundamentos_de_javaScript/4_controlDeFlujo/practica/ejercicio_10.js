/*Pide al usuario que ingrese un número del 1 al 7 y muestra
el día de la semana correspondiente. Si el número no está dentro 
de ese rango, muestra un mensaje de error*/
const prompt = require("prompt-sync")({ sigint: true });

let numeroSemana = parseInt(prompt("Ingrese un numero del 1 al 7:" ));
if(numeroSemana === 1){
    console.log("lunes");
}
else if(numeroSemana === 2){
    console.log("martes");
}
else if(numeroSemana === 3){
    console.log("miércoles");
}
else if(numeroSemana === 4){
    console.log("jueves");
}
else if(numeroSemana === 5){
    console.log("viernes");
}
else if(numeroSemana === 6){
    console.log("sabado");
}
else if(numeroSemana === 7){
    console.log("domingo");
}
else{
    console.log("dato invalido, por favor ingrese un numero del 1-7: ");
    numeroSemana = parseInt(prompt("Ingrese un numero del 1 al 7:" ));
}

