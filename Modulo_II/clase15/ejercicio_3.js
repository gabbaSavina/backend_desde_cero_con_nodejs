/*Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505*/

let matrizRojoVerde = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 50],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];

function rojo(matrizRojoVerde) {
    let DiagonalRoja = 0;
    for(let i = 0; i < matrizRojoVerde.length; i++){
        DiagonalRoja += matrizRojoVerde[i][i] //digonalRoja va a ser la suma de las posisiocnes identicas [i][i]= [0][0]+[1][1]+[2][2],etc
    };
    return DiagonalRoja
};

function verde (matrizRojoVerde) {
    let diagonalVerde = 0;
    for(let i = 0; i < matrizRojoVerde.length; i++) {
        diagonalVerde += matrizRojoVerde[i][matrizRojoVerde.length -1 - i]
    } //diagonalVerde va a ser la suma de: la fila que se esta iterando y la resta de la fila.length -1 -i
    return diagonalVerde
};

console.log(rojo(matrizRojoVerde));
console.log(verde(matrizRojoVerde));