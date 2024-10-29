//Ejercicio 8: Uso de métodos de arrays
//1. Declara un array que contenga los nombres de 5 países.
let mercosur: string[] = [
    'Argentina',
    'Brasil',
    'Uruguay',
    'Paraguay',
    'Venezuela'
];

//2. Ordena el array en orden alfabético.
mercosur.sort();

//3. Usa un método para agregar otro país al inicio del array.
mercosur.unshift('Chile');

//4. Elimina el último país del array.
mercosur.pop();

//5. Recorre el array y muestra cada país por consola.
mercosur.forEach((pais) => {
    console.log(pais)
});