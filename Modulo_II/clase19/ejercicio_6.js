//Crear una función que reciba un string y luego imprimir la
//cantidad de vocales que se encuentran en dicha frase.*/

let fraseUno = 'Lo esencial es invisible a los ojos';
let fraseDos = 'Más vale parjaro en mano que cien volando';
let fraseTres = 'Lo que no te mata te hace más fuerte';

function calcularVocales(frase) {
    sumaVocales = 0;
    for(i = 1; i <= frase.length; i++) {
        let caracter = frase[i];
        if(caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u') {
            sumaVocales++;
        }
    }
    return sumaVocales;
}
console.log(fraseUno);
console.log(`La suma de las vocales es: ${calcularVocales(fraseUno)}`);
console.log(fraseDos);
console.log(`La suma de las vocales es: ${calcularVocales(fraseDos)}`);
console.log(fraseTres);
console.log(`La suma de las vocales es: ${calcularVocales(fraseTres)}`);