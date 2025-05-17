//3) Escribir un programa que muestre la sumatoria de todos los
//números entre el 0 y el 100.

function sumaCeroCien() {
    suma = 0;
    for(i = 0; i <= 100; i++) {
        suma += i;
    };
    return suma;
};

console.log(`La suma de los numeros entre 0 y 100 es: ${sumaCeroCien()}`);
