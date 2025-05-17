/* Tenemos un array en una variable frases con frases al azar.
Usar la función map para crear un nuevo array donde cada frase empiece
y termine con signo de exclamación. Mostrar por consola el array original
y el nuevo*/
const frases = ['Labore sea dolor.', 'Justo rebum dolor', 'Stet lorem amet'];

let frasesExclamadas = frases.map(function(exclamacion){
    return '¡' + exclamacion + '!'
})

console.log(frases);
console.log(frasesExclamadas);