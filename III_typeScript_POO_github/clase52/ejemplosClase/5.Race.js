// Creamos una promesa que se resuelve después de 100 milisegundos con el mensaje "Promesa 1 completada"
const promesa1 = new Promise((resolve) => {
    setTimeout(resolve, 100, "Promesa 1 completada");
    // setTimeout espera 100 ms antes de llamar a resolve con el mensaje
});

// Creamos una promesa que se resuelve después de 50 milisegundos con el mensaje "Promesa 2 completada"
const promesa2 = new Promise((resolve) => {
    setTimeout(resolve, 50, "Promesa 2 completada");
    // setTimeout espera 50 ms antes de llamar a resolve con el mensaje
});

// Usamos Promise.race para obtener el resultado de la primera promesa que se complete
Promise.race([promesa1, promesa2])
    .then((resultado) => {
        // Este bloque .then se ejecuta cuando la primera promesa (la "ganadora") se resuelve
        console.log("Resultado de la promesa ganadora:", resultado);
        // En este caso, "Promesa 2 completada" se imprime porque promesa2 termina primero (50 ms)
    });