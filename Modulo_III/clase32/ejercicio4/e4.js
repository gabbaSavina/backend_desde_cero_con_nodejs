const readlineSync = require('readline-sync');

let numbers = [];

console.log('Escala ascendente\n');

function askNumbers() {
    while (true) {
        // usamos 'question()' porque permite ingresar Enter para poder salir del ciclo
        let input = readlineSync.question('Ingrese un numero (o presione Enter para salir): ');

        if (input === '') {
            break; // Si el usuario presiona Enter, salir del bucle
        }

        // Convertir el input a número y añadirlo a la lista
        let number = parseInt(input);
        if (!isNaN(number)) {
            numbers.push(number);
        }
    };

    // Ordenar los números en orden ascendente
    numbers.sort((a, b) => a - b);

    console.log('Escala asendente de los numeros ingresados: ', numbers);
};

askNumbers();