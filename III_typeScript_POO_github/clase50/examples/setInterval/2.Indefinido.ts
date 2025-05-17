//Intervalo Indefinido (Hasta cancelacion manual)

// se usa para ejecutar una función repetidamente a intervalos específicos. La función no espera
//a que se complete el código de setInterval() para seguir ejecutando las siguientes líneas; en
//su lugar, programa la ejecución de esa función para más adelante, manteniendo el flujo del
//programa principal libre.

export let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador (indefinido): ${contador}`);

    // Aquí podrías llamar a clearInterval(intervalo) en algún momento para detener el intervalo
    // Por ejemplo, podrías tener alguna lógica condicional externa o un evento que lo detenga,
    // pero en este caso, lo dejamos correr indefinidamente.

}, 1000);

console.log("Intervalo indefinido iniciado.");