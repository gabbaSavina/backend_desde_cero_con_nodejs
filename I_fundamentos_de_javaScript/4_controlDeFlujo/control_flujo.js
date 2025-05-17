// ==============================
// Control de Flujo en JavaScript
// ==============================

/*
📌 El control de flujo permite ejecutar diferentes bloques de código 
según ciertas condiciones o repetir acciones múltiples veces.

🔹 if / else if / else → decisiones condicionales
🔹 switch → múltiples opciones
🔹 while / do...while / for → bucles o repeticiones
🔹 break / continue → modificar el comportamiento de un bucle
*/


// ==============================
// 1. Sentencia if / else if / else
// ==============================

let temperatura = 30;

// Verificamos la temperatura y mostramos un mensaje adecuado
if (temperatura > 30) {
    console.log("Hace mucho calor");
} else if (temperatura >= 20) {
    console.log("El clima es agradable");
} else {
    console.log("Hace frío");
}


// ==============================
// 2. Sentencia switch
// ==============================

let dia = "lunes";

// Evaluamos diferentes valores posibles de 'dia'
switch (dia) {
    case "lunes":
        console.log("Comienza la semana");
        break; // corta la ejecución del switch aquí
    case "viernes":
        console.log("Último día laboral");
        break;
    case "sábado":
    case "domingo":
        console.log("Es fin de semana");
        break;
    default:
        console.log("Día no reconocido");
        break;
}


// ==============================
// 3. Bucle while
// ==============================

let contador = 0;

// Repite el bloque mientras la condición sea verdadera
while (contador < 3) {
    console.log("while -> Contador:", contador);
    contador++; // incrementamos para evitar bucle infinito
}


// ==============================
// 4. Bucle do...while
// ==============================

let numero = 0;

/*
Este bucle siempre se ejecuta al menos una vez,
porque evalúa la condición después de ejecutar el bloque
*/
do {
    console.log("do...while -> Número:", numero);
    numero++;
} while (numero < 3);


// ==============================
// 5. Bucle for
// ==============================

/*
for tiene tres partes:
1. inicialización -> let i = 0
2. condición -> i < 3
3. incremento -> i++
*/
for (let i = 0; i < 3; i++) {
    console.log("for -> Iteración:", i);
}


// ==============================
// 6. break y continue en bucles
// ==============================

/*
🔹 continue: salta la iteración actual y sigue con la siguiente
🔹 break: rompe el bucle completamente
*/
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Salta el número 3
    }
    if (i === 5) {
        break; // Sale del bucle cuando i es 5
    }
    console.log("Bucle con continue/break:", i);
}
