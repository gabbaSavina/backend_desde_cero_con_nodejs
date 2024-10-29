//Ejercicio 4: Manipulación de Arrays
//1. Crea un array que contenga los nombres de tus 5 frutas favoritas.

let frutasFavoritas: string[] = [
    'frutillas',
    'kiwi',
    'manzana',
    'banana',
    'mandarina'
]
//2. Usa un método para añadir otra fruta al final del array.
frutasFavoritas.push('melon');

//3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana") dentro del array.
let posicionManzana = frutasFavoritas.indexOf('manzana');
console.log('la posision de manzana es:',posicionManzana)

//4. Elimina la última fruta y muestra el array actualizado por consola.
let ultimaFrutaFavorita = frutasFavoritas.pop();
console.log(frutasFavoritas);
