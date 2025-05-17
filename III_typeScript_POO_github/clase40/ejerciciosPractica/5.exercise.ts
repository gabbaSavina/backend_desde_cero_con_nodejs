//Ejercicio 5: Tuplas y desestructuración
//1. Declara una tupla para representar las coordenadas de un punto en el plano (x, y).
let coordenadas: [number, number];

//2. Inicializa la tupla con los valores [10, 15].
coordenadas = [10, 15];

//3. Desestructura los valores de la tupla en dos variables: x e y.
let [x, y] = coordenadas;

//4. Imprime por consola los valores de x e y.
console.log(`la coordenada x tiene un valor de ${x} y la y de ${y}`);