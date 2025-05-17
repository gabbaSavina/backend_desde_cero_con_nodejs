/*Tenemos un array en una variable datos con números al azar, que
pueden ser tanto positivos como negativos
o Queremos eliminar todos los números negativos
o Con los números restantes, obtener el doble de cada uno
o Finalmente, obtener la suma de todos los números que obtuvimos*/
const datos = [2, -4, 6, 0, 5, -1];

let datosPositivos = datos.filter(numero => numero >= 0);
console.log('Los numeros positivos: '+datosPositivos);

let dobleDatos = datosPositivos.map(numero => numero * 2);
console.log('El doble de los numeros positivos: '+dobleDatos);

let totalDobleDatos = dobleDatos.reduce((acum, num) => acum + num);
let totalPositivos = datosPositivos.reduce((acum, num) => acum + num);
let totalDatos = totalDobleDatos + totalPositivos;
console.log('El total de datos: ' + totalDatos);