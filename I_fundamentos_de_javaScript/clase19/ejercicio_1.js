//1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
const prompt = require("prompt-sync")({ sigint: true });

function diezNumeros(){
    let numeroUsuario = parseInt(prompt('Ingrese un numero entero: '));
    for(i =0; i < 10; i++) {
        console.log(numeroUsuario += 1);
    } 
    return console.log('Esos son los 10 numeros siguientes');
};

diezNumeros()