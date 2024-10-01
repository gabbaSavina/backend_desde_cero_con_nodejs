/*Declara dos variables con valores iniciales y luego intercambia 
sus valores. Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una
variable temporal, aritmética o asignación simultanea), eres libre de
elegir el que desees, eso si, investiga sobre el que usaras.*/

//METODO 1: Usando una variable temporal
//Declaración y asignacion de variables con valores iniciales
let variable1 = 10;
let variable2 = 20;

//Mostrar los valores iniciales en la consola
console.log("Valores iniciales:");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);

//Intercambio de valores utilizando una variable temporal
let temp = variable1;
variable1 = variable2;
variable2 = temp;

//Se utiliza una variable temporal (temp) para almacenar temportalmente
//el valor de una de las variables, permitiendo intercambiar los valores de variable1 y variable2.

//Mostrar los valores despues del intercambio en la consola
console.log("Variables finales:");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);