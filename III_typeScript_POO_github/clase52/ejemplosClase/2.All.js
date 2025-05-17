//Tipos de Promesas

//promesa que se resuelve inmediatamente con el valor 3.
const promise1 = Promise.resolve(3);

//Promesa que se resuelve despues de 100ms
const promise2 = new Promise((resolve, reject) => {
    //Despues de 100 ms, la promesa se resuelve con el valor de hola
    setTimeout(resolve, 100, 'Hola')
});

//Promesa que se resuelve despues de 500 ms
const promesa3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 500, 'Mundo'); 
});

//Promise.all() para esperar que todas las pormesas se resuelvan.
Promise.all([promise1, promise2, promesa3])
    //Si todas las promesas se resuelven con  exito.
    //se ejecuta este bloque con un array de resultados
    .then((results) => {
        console.log('Resultados de todas las promesas:', results);
        //los resultados aparecen en el mismo orden que las promesas
    })
    .catch((error) =>{
        //Si alguna de las pormesas es rechazada,
        //se ejecuta este bloque para manejar el error
        log('Una de las promesas fue rechazada:', error)
});