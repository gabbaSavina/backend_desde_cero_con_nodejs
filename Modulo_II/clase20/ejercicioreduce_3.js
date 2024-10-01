/*Tenemos un array llamado notasDeTPs con números del 1 al 10, que
representan las notas de los distintos trabajos prácticos entregados por el
curso de Ada.
Usando reduce, queremos calcular la nota promedio final de trabajos
prácticos (el promedio se calcula sumando todas las notas y dividiéndolo
por la cantidad de notas).
Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5*/

const notasDeTPs = [4, 7, 8, 5, 10];

let sumaNumbers = notasDeTPs.reduce((acum, num) => acum + num);
let promedioTPs = sumaNumbers / notasDeTPs.length;

console.log('El promedio de notas es: ' + promedioTPs);