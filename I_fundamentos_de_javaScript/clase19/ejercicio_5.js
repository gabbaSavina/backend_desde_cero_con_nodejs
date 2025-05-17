/*Crear una función que muestre todos los números de la
secuencia de Fibonacci hasta el valor ingresado por parámetro.
Investigar sobre “la secuencia de Fibonacci”.*/

function secuenciaFibonacci(max){
    let secuencia = [0, 1];//inicializo la secuenciacon los dos 1° numeros
    let i = 2;// inicializa el indice[i] en 2, ya que los anteriores 2 ya estan definidos

    while(true) { //se ejecuta indefinidamente hasta q sea maor que (max)
        //calcula el sigNum sumando los dos ultimos de la secuencia
        let siguienteNumero = secuencia[i -1] + secuencia[i -2];
        //se verifica el valor maximo y 'break' detiene el bucle
        if (siguienteNumero > max) break;
        //añade el sigNum a la secuencia
        secuencia.push(siguienteNumero);
        //incrementa el indice para la sig iteracion
        i++;
    }
    return secuencia;
};

console.log(`La secuencia de Fibonacci has el numero 1597 es: ${secuenciaFibonacci(1597)}`);