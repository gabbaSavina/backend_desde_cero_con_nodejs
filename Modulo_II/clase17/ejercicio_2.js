/* Quiero que hagan lo mismo del ejercicio anterior 
(buscar la posición de un número en unarray),
pero partiendo de esta lista*/

let list = [12, 3, 5, 7, 1, 22, 47, 100];

// ordenar de menor a mayor
for (let i = 0; i < list.length; i++) { //itera sobre todo el array
    for( let j = 0; j < list.length; j++) {//compara elementos adyacentes
        if(list[j] > list[j + 1]) {//si 'j' es > q el sig.,se itercambian
            let temp = list[j]; //se guarda el valor en una variable temporal
            list[j] = list[j + 1]; //se asigna el valor del sig. elemento al actual
            list[j + 1] = temp; //se asigna el valor guardado en 'temp' al sig.elemento
        };
    };
};

console.log(list);

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
//¿Cuál es la posición del número 12?
console.log(busquedaBinaria(list, 12));
//¿Cuál es la posición del número 5?
console.log(busquedaBinaria(list, 5));
//¿Cuál es la posición del número 22?
console.log(busquedaBinaria(list, 22));
//¿Cuál es la posición del número 100?
console.log(busquedaBinaria(list, 100));