/*Declara una variable que contenga una matriz de 5x5
llena de puros numeros entreros y positivos. Luego escribe
un algoritmo para sumar todos los numeros de la matriz*/

let matriz = [
    [25, 55, 67, 78, 98],
    [12, 43, 7, 99, 74],
    [33, 86, 69, 3, 87],
    [11, 23, 27, 66, 44],
    [9, 36, 42, 21, 39],
];

let sumaMatriz = 0;

for(let fila = 0; fila < matriz.length; fila++){
    for(let columna = 0; columna < matriz[fila].length; columna++){
        sumaMatriz += matriz[fila][columna];
        };
    };

console.log(sumaMatriz);