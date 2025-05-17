/*A partir del siguiente array de frases, escribe la función “procesarFrases”
que realice las siguientes tareas:*/
let frases = [
    'El clima es MALO hoy',
    'Este libro es muy MALO',
    'El servicio aquí es MALO',
];

function procesarFases(frases) {
    //1.convierta cada frase a minúsculas.
    let frasesMinusculas = frases.map(frase => frase.toLowerCase());
    //2.divida cada frase en palabras
    let dividePalabras = frases.map(frase => frase.split(' '));
    //3.Reemplace las palabras 'malo' por 'bueno'
    let reenplazaPaslabras = frases.map(frase => frase.replace('MALO','BUENO'));
    //4.combine las palabras de cada frase en una nueva cadena separada por espacios
    let combinarPalabras = frases.map(palabra => palabra.slice(-4));
    
    return {
        FrasesEnMinusculas: frasesMinusculas,
        PalabrasDivididas: dividePalabras,
        RemplazaPalabras: reenplazaPaslabras,
        CombinaFrases: combinarPalabras,
    }
};
//Devuelva un nuevo array con las frases modificadas
console.log(procesarFases(frases));