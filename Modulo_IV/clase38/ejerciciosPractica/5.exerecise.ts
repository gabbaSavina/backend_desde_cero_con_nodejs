/*Ejercicio 5: 
Datos nulos y diferenciados
Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena,
y luego cambia su valor a null. Imprime ambos estados en la consola, explicando
el significado de null en TypeScript.*/

let flexiVar: string | null = 'Texto en Ts';
console.log(`Valor inicial de flexiVar:${flexiVar}\n`);

flexiVar = null;
console.log(`Valor modificado de la variable flexiVar a ${flexiVar}
    que indica que la variable está vacia o sin valor
    de manera intencionada`);
