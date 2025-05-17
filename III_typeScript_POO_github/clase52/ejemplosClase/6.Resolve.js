// Creamos una variable con el valor 42
const valor = 42;

// Creamos una promesa que ya está resuelta con el valor de la variable 'valor'
const miPromesa = Promise.resolve(valor);
/*
    Promise.resolve(valor) crea una promesa que se resuelve inmediatamente.
    Es útil cuando tienes un valor sincrónico (como un número, string u objeto)
    y necesitas representarlo como una promesa.
*/

// Usamos .then para manejar el resultado de la promesa
miPromesa
    .then((resultado) => {
        // Este bloque .then se ejecuta cuando la promesa se resuelve
        console.log("Valor de la promesa:", resultado); 
        // Imprime: "Valor de la promesa: 42" porque la promesa se resolvió con el valor 42
    });