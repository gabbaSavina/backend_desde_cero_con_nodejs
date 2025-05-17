// Creamos una promesa resuelta inmediatamente con el valor 3
const promesa1 = Promise.resolve(3);

// Creamos una promesa que se rechazará después de 100 ms con el mensaje de error "Error en promesa 2"
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Error en promesa 2"); // Después de 100 ms, se llama a reject con el mensaje
});

// Creamos una promesa que se resolverá después de 500 ms con el mensaje "¡Mundo!"
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "¡Mundo!"); // Después de 500 ms, se llama a resolve con el mensaje
});

// Usamos Promise.allSettled para manejar todas las promesas
Promise.allSettled([promesa1, promesa2, promesa3]) // Toma un array de promesas
    .then((resultados) => {
        // Este bloque se ejecuta cuando todas las promesas terminan (ya sea resueltas o rechazadas)
        console.log("Resultados de todas las promesas:", resultados);
        /* 
        El array 'resultados' tendrá la forma:
        [
           { status: "fulfilled", value: 3 },          // promesa1 se resolvió con el valor 3
           { status: "rejected", reason: "Error en promesa 2" }, // promesa2 fue rechazada
           { status: "fulfilled", value: "¡Mundo!" }  // promesa3 se resolvió con el valor "¡Mundo!"
        ]
        */
    });