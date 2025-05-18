/*WHILE
El ciclo while evalúa la condición antes de ejecutar el bloque de código.
Si la condición es true, se ejecuta el bloque de código y luego se vuelve 
a evaluar la condición. El ciclo continúa hasta que la condición se convierte
en false*/

while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
}

let vuelta = 1;
while(vuelta <= 5){
    console.log('Dando la vuelta número' + vuelta);
    vuelta++
}

/*DO WHILE
El ciclo do...while es similar al ciclo while, pero garantiza que el bloque
de código se ejecute al menos una vez antes de evaluar la condición.
La condición se evalúa después de ejecutar el bloque de código.*/

do {
    // Código a ejecutar al menos una vez y mientras la condición sea verdadera
} while (condición);

let vuelta1 = 5;
do{
    console.log('dando la vuelta número' + vuelta);
    vuelta1++ //se suma 1 a vuelta1 por lo tanto vuelta1 = 6
}while(vuelta1 <=5); // cuando llega a 6 la condicion es falsa y se termina el bloque de código.
