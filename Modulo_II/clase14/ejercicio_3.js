/*Creá la función backEnd() que recibirá 2 números como parámetros. La
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo
en cuenta los siguientes criterios:
✓ Si el número a imprimir es múltiplo del primer parámetro que se
ingresó, deberá mostrar el string “Back” en lugar del número.
✓ Si el número a imprimir es múltiplo del segundo parámetro ingresado,
deberá mostrar el string “End” en su lugar del número.
✓ Si el número a imprimir es múltiplo de ambos parámetros, deberá
mostrar el string “Back End” en lugar del número*/

let numeros = [];

const backEnd = (nun1, nun2) => {
    for(i = 0; i <= 100; i++) {
        if(i % nun1 === 0 && i % nun2 === 0) {
            console.log('Back End')
        } else if(i % nun2 === 0) {
            console.log('End');
        } else if (i % nun1 === 0) {
            console.log('Back');
        } else {
            console.log(i)
        }
    }return numeros;
}

console.log(backEnd(3, 7));