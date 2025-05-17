//Ejercicio 15: Arrays multidimensionales
//1. Declara un array multidimensional que represente una tabla de notas de 3
//estudiantes. Cada subarray debe tener el nombre del estudiante y sus
//notas en tres materias. Añade los nombres "Maria", "Pedro" y "Luis", junto con sus respectivas notas.

let NotasFinales: [ string, number, number, number ] [] = [
    ['Maria', 6, 7, 9],
    ['Pedro', 8, 6, 6],
    ['Luis', 7, 10, 9]
]

//1. Imprime el nombre y las notas del segundo estudiante (Pedro).
console.log(`${NotasFinales[1]}`)

//4. Muestra la nota promedio de cada estudiante recorriendo el array
NotasFinales.forEach(estudiante => {
    let promedio = (estudiante[1] + estudiante[2] + estudiante[3]) / 3;
    console.log(`${estudiante[0]} tiene un promedio de ${promedio.toFixed(2)}`);
});