/*Numero pares
Escribí un programa que imprima los números pares del 0 al 100. No es
necesario pedirle al usuario, solo imprimir el resultado. Agreguen los
números pares a un array*/

let numeroPar = [];

let contadorPar = () => {
    for(i = 0; i <= 100; i++) {//itera los numeros del 0 al 100
        if(i % 2 === 0 ) {   // si el resto de la division por 2 es 0 significa q es nuero par.
        numeroPar.push(i); // metodo para agregar los numeros pares al array
        }
    } return numeroPar
};

console.log(contadorPar());
