//Ejercicio 9: Operaciones con tuplas de estudiantes
//1. Declara una tupla que almacene el nombre de un estudiante (string), su
//promedio (número), y si ha aprobado (booleano).
let estudiante2: [string, number, boolean]; 

//2. Inicializa la tupla con los valores "Ana", 8.5, true.
estudiante2 = ['Ana', 8.5, true];

//3. Crea una segunda tupla con los valores "Pedro", 6.2, true.
let estudiante3: [string, number, boolean] = ['Pedro', 6.2, true];

//4. Modifica la nota de Pedro a 4.9 y actualiza el valor de aprobado a false.
estudiante3[1] = 4.9;
estudiante3[2] = false;

//5. Muestra por consola la información de ambos estudiantes.
console.log(estudiante2, estudiante3);