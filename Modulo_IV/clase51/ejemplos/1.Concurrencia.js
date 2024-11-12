//simulacion de concurrencia
function tareaConcurrencia(tarea, tiempo) {
    setTimeout(() => {
        console.log(`Tarea: ${tarea} completada en ${tiempo} ms`)
    }, tiempo)
};

//Ejecutar varias tareas concurrentemente
function ejecutarTareasConcurrencia() {
    tareaConcurrencia('Tarea 1', 1000);//se completa en 1 seg
    tareaConcurrencia('Tarea 2', 500);//se completa en 0.5 seg
    tareaConcurrencia('Tarea 3', 1500)//se completa en 1.5 seg
};

//Se llama a la funcion para ejecutar las tareas
ejecutarTareasConcurrencia();

// Explicación del Ejemplo

// * Concurrencia: Las tres tareas se inician casi al mismo tiempo.
// Aunque Tarea 2 se completará primero (en 500 ms), Tarea 1 y Tarea 3
// seguirán ejecutándose. Esto muestra cómo varias tareas pueden progresar
// al mismo tiempo, aunque solo una tarea se esté ejecutando en un momento dado.

// * Paralelismo: No se simula en este código, ya que setTimeout y el event loop
// de JavaScript manejan todo en un solo hilo. Sin embargo, en un sistema con
// múltiples núcleos, las tareas podrían ejecutarse simultáneamente.
