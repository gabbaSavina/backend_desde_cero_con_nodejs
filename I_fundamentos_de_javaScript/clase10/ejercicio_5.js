/*Escribe un programa que lea una nota (entero entre 0 y 100) e imprima
el equivalente en letras siguiendo esta escala:
✓ A si la nota está entre 90 y 100
✓ B si la nota está entre 80 y 89
✓ C si la nota está entre 70 y 79
✓ D si la nota está entre 60 y 69
✓ F si la nota está entre 0 y 59
Utiliza operadores ternarios para determinar la calificación en letras.*/


let nota = 45;
let resultadoEnLetras = " ";

resultadoEnLetras = (nota >= 90 && nota <= 100 ? 'A' : resultadoEnLetras);
resultadoEnLetras = (nota >= 80 && nota <= 89 ? 'B' : resultadoEnLetras);
resultadoEnLetras = (nota >= 70 && nota <= 79 ? 'C' : resultadoEnLetras);
resultadoEnLetras = (nota >= 60 && nota <= 69? 'D' : resultadoEnLetras);
resultadoEnLetras = (nota < 59 ? 'F': resultadoEnLetras);

console.log( `Su nota es: ${resultadoEnLetras}`);