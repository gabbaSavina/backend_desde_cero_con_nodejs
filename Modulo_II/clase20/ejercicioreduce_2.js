/*Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la multiplicación de todos los
números que están en el array.*/
const numbers = [6, 1, 34, 94, 3, 17];

let multiplicacionNumbers = numbers.reduce(function(acum, num){
    return acum * num;
});

console.log(multiplicacionNumbers);