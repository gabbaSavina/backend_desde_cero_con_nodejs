/*Escribe un programa que solicite al usuario ingresar una contraseña. Si
la contraseña es incorrecta, debe volver a pedirla hasta que el usuario
ingrese la correcta. La contraseña correcta es "1234".*/
const prompt = require("prompt-sync")({ sigint: true });

let contraseña = parseInt(prompt('Ingrese su contraseña'));

do{
    (contraseña === 1234);
    console.log('Ingrese una contraseña válida');
    contraseña = parseInt(prompt('Ingrese su contraseña'));
}while (contraseña != 1234);

