/* ciclos FOR
es una estructura de control que permite repetir un bloque de código
un número específico de veces. Es muy útil para iterar sobre arreglos, 
listas o cualquier conjunto de elementos.*/

for (inicialización; condición; actualización) {
    // Código a ejecutar en cada iteración
}
//1-INICIACIÓN: se ejecuta una vez al comienzo del ciclo.Se utiliza generalmente para declarar e inicializar la varible del control del ciclo.
//2-CONDICIÓN: evalúa si el ciclo debe continuar.Si la condicion es 'true', se ejecuta el bloque de código dentro del ciclo.Si es 'false', el ciclo se termina.
//3-ACTUALIZACIÓN: se ejecuta al final de cada iteración.Se utiliza para actualizar la variable de control del ciclo.

for (let vuelta = 1; vuelta <= 5; vuelta++){
    console.log('Dando la vuelta número' + vuelta);
}