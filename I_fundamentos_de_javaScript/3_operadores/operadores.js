// ==============================
// Operadores en JavaScript
// ==============================

/*
📌 En JavaScript, los operadores se usan para realizar operaciones sobre valores y variables.
Los más comunes son:
- Aritméticos
- De Asignación
- De Comparación
- Lógicos
- De Incremento / Decremento
*/

// ==============================
// 1. Operadores Aritméticos
// ==============================

let a = 10;
let b = 3;

console.log("Suma:", a + b);            // 13
console.log("Resta:", a - b);           // 7
console.log("Multiplicación:", a * b);  // 30
console.log("División:", a / b);        // 3.33...
console.log("Módulo (resto):", a % b);  // 1
console.log("Exponente:", a ** b);      // 1000 (10^3)

// ==============================
// 2. Operadores de Asignación
// ==============================

let x = 5;
x += 2; // x = x + 2
console.log("x += 2:", x); // 7

x *= 3; // x = x * 3
console.log("x *= 3:", x); // 21

x -= 1; // x = x - 1
console.log("x -= 1:", x); // 20

x /= 4; // x = x / 4
console.log("x /= 4:", x); // 5

// ==============================
// 3. Operadores de Comparación
// ==============================

let edad = 18;

console.log("Igual (==):", edad == "18");        // true (compara solo valor)
console.log("Estricto (===):", edad === "18");   // false (compara valor y tipo)
console.log("Distinto (!=):", edad != 20);       // true
console.log("Mayor que (>):", edad > 17);        // true
console.log("Menor o igual (<=):", edad <= 18);  // true

// ==============================
// 4. Operadores Lógicos
// ==============================

let esMayor = true;
let tieneDNI = false;

console.log("AND lógico (&&):", esMayor && tieneDNI); // false
console.log("OR lógico (||):", esMayor || tieneDNI);  // true
console.log("NOT lógico (!):", !esMayor);             // false

// ==============================
// 5. Operadores de Incremento / Decremento
// ==============================

let contador = 0;

contador++; // Incrementa en 1
console.log("Incremento (++):", contador); // 1

contador--; // Decrementa en 1
console.log("Decremento (--):", contador); // 0

// También existen las formas:
console.log("Pre-incremento:", ++contador); // Suma primero, luego muestra (1)
console.log("Post-incremento:", contador++); // Muestra primero, luego suma (1)
console.log("Valor final:", contador); // 2
