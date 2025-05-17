/*Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000*/
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
];

let sumaMatriz = 0;

for(let fila = 0; fila < matriz.length; fila++){
    for(let columna = 0; columna < matriz[fila].length; columna++){
        if(matriz[fila][columna] >= 10 && matriz[fila][columna] <1000){
            sumaMatriz += matriz[fila][columna];
        };
    };
};

console.log(sumaMatriz);