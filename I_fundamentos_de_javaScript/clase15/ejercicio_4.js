/*Se está realizando el desarrollo de una aplicación para control de
gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una
semana y cada columna un día. Es decir fila 0, semana 1, fila 1,
semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.*/

let matrizGastosMensuales = [
    [11779, 8135, 1216, 9836, 7639, 12000, 1879],
    [9000, 16000, 44387, 2200, 12000, 3702, 15489],
    [3542, 12000, 3492, 1890, 5698, 3256, 5621],
    [58061, 3999, 4226, 28327, 16996, 5999, 118993],
];

/*a) Lo que nos solicitan es dar el total de gastos en una semana.
Recordemos que cada fila representa una semana, es decir, si nos
indican semana 2 tenemos que sumar la fila 1 de la matriz.
Recordar que las matrices comienzan siempre en posición 0.*/
const prompt = require("prompt-sync")({ sigint: true });

let semana = parseInt(prompt('Ingrese el numero de semana(1,2,3,4)para saber el total de gastos: '));

function gastosSemanales(semana) {
    let sumaSemana = 0;
    if(semana === 1) {
        for(i = 0; i < matrizGastosMensuales[0].length; i++) {
            sumaSemana += matrizGastosMensuales[0][i];
        };
    }else if(semana === 2) {
        for(i = 0; i < matrizGastosMensuales[1].length; i++) {
            sumaSemana += matrizGastosMensuales[1][i];
        };
    }else if(semana === 3) {
        for(i = 0; i < matrizGastosMensuales[2].length; i++) {
            sumaSemana += matrizGastosMensuales[2][i];
        };
    }else {
        for(i = 0; i < matrizGastosMensuales[3].length; i++) {
            sumaSemana += matrizGastosMensuales[3][i];
        };
    } return sumaSemana;
};

console.log(`Los gastos correspondientes a la semana ${semana} son:$ ${gastosSemanales(semana)}`);

/*b) La aplicación también tendrá una parte de estadísticas, para esto
nos solicitan dar el total de un día en particular, por ejemplo del día
3, acá también tengamos en cuenta lo que ocurre con las filas, ya
que las columnas también comienzan en 0.*/

let diaIngresado = parseInt(prompt('Ingrese el dia del mes para saber cuanto se gasto(1 al 28): '));

function gastosDia(dia) {
    let fila = Math.floor((dia -1) / 7);//convierte el dia en indice de matriz
    let columna = (dia - 1) % 7;

    return matrizGastosMensuales[fila][columna];
};

let gastoPorDia = gastosDia(diaIngresado);

console.log(`El gasto del dia ${diaIngresado} es: ${gastoPorDia}`);

/*c) Por último, es necesario tener el total de gastos realizados en el
mes.*/

let totalMatriz = 0;
for(let fila = 0; fila < matrizGastosMensuales.length; fila++){
    for(let col = 0; col < matrizGastosMensuales.length; col++){
        totalMatriz += matrizGastosMensuales[fila][col];
    };
};
console.log(`El total de gastos del mes es: ${totalMatriz}`);

/*d) Obtener cuál fue la semana que más gastos se realizaron. Indicar
el día que más gastos se realizaron.*/

function semanaMayorGasto(matriz) {
    let semanaMayor = 0;
    let gastoMayor = 0;
    for (let semana = 0; semana < matriz.length; semana++) {
        let gastoSemana = 0;
        for (let dia = 0; dia < matriz[semana].length; dia++) {
            gastoSemana += matriz[semana][dia];
        };
        if (gastoSemana > gastoMayor) {
            gastoMayor = gastoSemana;
            semanaMayor = semana;
        };
    };
    return semanaMayor + 1; // +1 para convertir de índice a número de semana
};

let semanaMayorGasto1 = semanaMayorGasto(matrizGastosMensuales);
console.log(`La semana con mayor gasto es la semana ${semanaMayorGasto1}.`);

function diaMayorGasto(matriz) {
    let diaMayor = { semana: 0, dia: 0, gasto: 0 };
    for (let semana = 0; semana < matriz.length; semana++) {
        for (let dia = 0; dia < matriz[semana].length; dia++) {
            if (matriz[semana][dia] > diaMayor.gasto) {
                diaMayor = { semana: semana, dia: dia, gasto: matriz[semana][dia] };
            };
        };
    };
    return diaMayor;
}

let mayorGasto = diaMayorGasto(matrizGastosMensuales);
console.log(`El día con mayor gasto fue en la semana ${mayorGasto.semana + 1}, día ${mayorGasto.dia + 1}, con un gasto de ${mayorGasto.gasto}.`);