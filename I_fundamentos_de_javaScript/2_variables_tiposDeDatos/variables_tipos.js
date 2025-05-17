/* 
===============================================
📌 Declaración de variables en JavaScript

👉 var: (NO recomendado)
   - Tiene **ámbito de función**, lo que puede causar errores inesperados.
    - Se usaba antes de ES6. Hoy se evita usarlo.

👉 let:
   - Tiene **ámbito de bloque** (entre llaves `{}`).
   - Se usa cuando el valor de la variable **puede cambiar**.

👉 const:
   - También tiene **ámbito de bloque**.
   - Se usa cuando el valor **no debe cambiar**.
    - Importante: no significa que el contenido no pueda mutar (ej. arrays u objetos).

✅ Buenas prácticas:
- Usar `const` por defecto.
- Usar `let` si sabés que el valor va a cambiar.
- Evitar `var`.
===============================================
*/

// ==============================
// 1. Declaración de Variables
// ==============================

let edad = 25;                    // Número
let nombre = "Ana";               // Cadena de texto (String)
let estaEstudiando = true;        // Booleano


// ==============================
// 2. Declaración de Constantes
// ==============================

const PI = 3.14;                  // Número
const PAIS = "Argentina";         // Cadena de texto (String)


// ==============================
// 3. Tipos de Datos
// ==============================

let cantidadDeLibros = 10;         // Número
let tituloLibro = "El Principito"; // Cadena de texto (String)
let esInteresante = true;          // Booleano

let temas = ["Aventura", "Fantasía", "Filosofía"]; // Array (arreglo)

let autor = {                      // Objeto
    nombre: "Antoine de Saint-Exupéry",
    nacionalidad: "Francesa"
};


// ==============================
// 4. Operaciones Lógicas
// ==============================

let esMayorDeEdad = edad >= 18;                // Comparación
let puedeVotar = esMayorDeEdad && estaEstudiando; // AND lógico


// ==============================
// 5. Imprimir Resultados en la Consola
// ==============================

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Está estudiando?", estaEstudiando);

console.log("Constante PI:", PI);
console.log("Constante País:", PAIS);

console.log("Cantidad de libros:", cantidadDeLibros);
console.log("Título del libro:", tituloLibro);
console.log("¿Es interesante?", esInteresante);

console.log("Temas del libro:", temas);
console.log("Autor del libro:", autor);

console.log("¿Es mayor de edad?", esMayorDeEdad);
console.log("¿Puede votar?", puedeVotar);
