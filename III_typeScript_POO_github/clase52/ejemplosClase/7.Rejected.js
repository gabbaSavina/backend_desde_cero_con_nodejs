// Definimos una variable con el mensaje de error
const error = "Algo salió mal.";

// Creamos una promesa que ya está rechazada usando Promise.reject()
const miPromesa = Promise.reject(error);
/*
    Promise.reject(error) crea una promesa que ya está rechazada.
    Esto es útil cuando necesitas representar un error de forma inmediata como una promesa rechazada.
    En este caso, la promesa se rechaza con el valor contenido en la variable 'error' ("Algo salió mal.").
*/

// Usamos .catch para manejar el rechazo de la promesa
miPromesa
    .catch((error) => {
        // Este bloque .catch se ejecuta cuando la promesa es rechazada
        console.error("Error de la promesa:", error);
        // Imprime en la consola: "Error de la promesa: Algo salió mal."
    });