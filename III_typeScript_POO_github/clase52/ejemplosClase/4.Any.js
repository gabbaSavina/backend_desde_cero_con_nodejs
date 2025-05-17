// Creamos una promesa que se rechaza inmediatamente con el mensaje "Error en promesa 1"
const promesa1 = Promise.reject("Error en promesa 1");

// Creamos una promesa que se resuelve después de 100 milisegundos con el valor "¡Hola!"
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "¡Hola!"); 
    // setTimeout espera 100 ms antes de ejecutar resolve, pasando el valor "¡Hola!"
});

// Creamos una promesa que se resuelve después de 500 milisegundos con el valor "¡Mundo!"
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "¡Mundo!"); 
    // setTimeout espera 500 ms antes de ejecutar resolve, pasando el valor "¡Mundo!"
});

// Usamos Promise.any para esperar que al menos una promesa se resuelva con éxito
Promise.any([promesa1, promesa2, promesa3])
    .then((resultado) => {
        // Si alguna promesa se resuelve, este bloque .then se ejecuta
        console.log("Primera promesa resuelta:", resultado); 
        // Aquí se imprime "¡Hola!" porque promesa2 es la primera en resolverse.
    })
    .catch((error) => {
        // Si todas las promesas son rechazadas, este bloque .catch se ejecuta
        console.error("Todas las promesas fueron rechazadas:", error);
        // El error contiene un AggregateError con información sobre todas las promesas rechazadas.
    });
