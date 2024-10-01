//Imprimir los números entre 5 y el 20, saltando de tres en tres.
function sumaDeTres(){
    let numero = 5;
    for(i = 5; numero < 20; i++) {
        console.log(numero += 3);
    } 
    return console.log('Esos son los numeros entre el 5 y el 20 de 3 en tres');
};

sumaDeTres();