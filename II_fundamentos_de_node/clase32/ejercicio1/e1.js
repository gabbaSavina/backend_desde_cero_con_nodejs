const readlineSync = require('readline-sync');

let nombreUsuario = readlineSync.question('Ingrese su nombre: ');
let edadUsuario = readlineSync.questionInt('Ingrese su edad:');
if (edadUsuario >= 18) {
    console.log(`¡Hola ${nombreUsuario}! Tienes ${edadUsuario} por lo cual puedes ingresar`);
} else {
    console.log(`¡Hola ${nombreUsuario}! Tienes ${edadUsuario} por lo cual no puedes ingresar`);
};
