// ==============================
// Conversión de Tipos en JavaScript
// ==============================

/*
📌 En JavaScript, se pueden convertir valores de un tipo a otro.
Hay dos tipos de conversión:
- Explícita: cuando usamos funciones como String(), Number(), Boolean().
- Implícita: cuando JavaScript lo hace automáticamente según el contexto.
*/

// -----------------------------------
// 1. Número a String (Conversión Explícita)
// -----------------------------------

let numero = 42;
let numeroComoTexto = String(numero); // Se convierte el número a una cadena de texto

console.log("Número como texto:", numeroComoTexto); // "42"
console.log("Tipo:", typeof numeroComoTexto);       // "string"

// -----------------------------------
// 2. String a Número (Conversión Explícita)
// -----------------------------------

let texto = "123";
let textoComoNumero = Number(texto); // Convierte el texto numérico a un número real

console.log("Texto como número:", textoComoNumero); // 123
console.log("Tipo:", typeof textoComoNumero);       // "number"

// -----------------------------------
// 3. Booleano a Número (Conversión Explícita)
// -----------------------------------

let esActivo = true;
let valorNumerico = Number(esActivo); // true se convierte a 1, false se convierte a 0

console.log("Booleano como número:", valorNumerico); // 1

// -----------------------------------
// 4. Número a Booleano (Conversión Explícita)
// -----------------------------------

let cantidad = 0;
let esVerdadero = Boolean(cantidad); // 0 es considerado false, cualquier otro número es true

console.log("Número como booleano:", esVerdadero); // false

// -----------------------------------
// 5. String a Booleano (Conversión Explícita)
// -----------------------------------

let entradaUsuario = "";
let estaVacio = Boolean(entradaUsuario); // String vacío ("") es false; cualquier otro string es true

console.log("¿El string está vacío?", estaVacio); // false

// -----------------------------------
// 6. Conversión Implícita (JavaScript lo hace automáticamente)
// -----------------------------------

let resultado = "5" * 2; 
// Aquí JavaScript convierte automáticamente el string "5" en número porque * solo funciona con números

console.log("Resultado de '5' * 2:", resultado); // 10

let resultado2 = "5" + 2;
// En este caso, "+" se puede usar tanto para sumar como para concatenar.
// Si uno de los operandos es un string, convierte el otro también a string y los concatena.

console.log("Resultado de '5' + 2:", resultado2); // "52"

