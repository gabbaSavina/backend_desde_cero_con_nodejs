/*Tenemos un array en una variable costos con números que representan
costos de diferentes productos.
Usando filter, crear un nuevo array con los precios más caros (mayores a
50) y guardarlo en la variable losMasCaros
Mostrar el array original y el filtrado.*/

const costos = [39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14];

let losMasCaros = costos.filter(function(numero){
    return numero > 50;
});

console.log(costos);
console.log(losMasCaros);