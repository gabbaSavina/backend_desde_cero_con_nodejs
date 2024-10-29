//Ejercicio 13: Array de enums para estados del clima
//1. Declara un enum llamado Clima con los valores: Soleado, Nublado,
//Lluvioso, Tormentoso.
enum Clima {
    Soleado = 'Soleado',
    Nublado = 'Nublado',
    Lluvioso = 'Lluvioso',
    Tormentoso = 'Tormentoso'
};

//2. Crea un array que almacene una serie de estados del clima usando los
//valores del enum.
let estadosDelClima = Object.values(Clima);
console.log(estadosDelClima);

//3. Usa un ciclo para recorrer el array e imprime los valores del clima en cada
//posición
estadosDelClima.forEach((clima) => {
    console.log(clima)
});
