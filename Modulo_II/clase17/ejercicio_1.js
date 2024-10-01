/*Para practicar la implementación del algoritmo de búsqueda binaria,
vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la
solución.
Dada la siguiente lista:*/

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//a)¿Cuál es la posición del número 1?

const busquedaBinaria = (list, item) => {
    let low = 0;// punto mas bajo
    let high = list.length - 1;//punto mas alto

    while (low <= high) { //mientras que low sea menor o igual que high
        const mid = Math.floor((low + high) / 2);//busca la mitad
    
        const guess = list[mid];//adivina si es el de la mitad
        if (guess === item) { //si es asi retornar 'mid'
            return mid;
        }
        if (guess > item) { // si es mayor
            high = mid -1;
        }else {
            low = mid +1;
        }
    }

return null; // si no encuentra
};

console.log(busquedaBinaria(list, 1));
//b) Cuál es la posición del número 5?
console.log(busquedaBinaria(list, 5));
//b) Cuál es la posición del número 6?
console.log(busquedaBinaria(list, 6));
//b) Cuál es la posición del número 9?
console.log(busquedaBinaria(list, 9));
//b) Cuál es la posición del número 11?
console.log(busquedaBinaria(list, 11));