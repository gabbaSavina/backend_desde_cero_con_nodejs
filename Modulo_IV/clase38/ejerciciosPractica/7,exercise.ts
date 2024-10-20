/*Ejercicio 7:}
Tipos literales
Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
"Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en
TypeScript.*/

// Definimos un tipo literal que solo permite tres valores
let diaDeLaSemana: "Lunes" | "Martes" | "Miércoles";

// Asignamos un valor permitido
diaDeLaSemana = "Lunes";  // Correcto

// Asignamos otro valor permitido
diaDeLaSemana = "Miércoles";  // Correcto

// Intentamos asignar un valor no permitido
//diaDeLaSemana = "Jueves";// Error: Type '"Jueves"' is not assignable to type '"Lunes" | "Martes" | "Miércoles"'