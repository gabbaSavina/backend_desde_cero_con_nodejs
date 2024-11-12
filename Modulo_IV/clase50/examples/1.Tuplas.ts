/* Ejercicio: Gestión de Estudiantes
Consigna: Crea un sistema de gestión de estudiantes que permita realizar 
las siguientes tareas:
- Añadir un nuevo estudiante.
- Modificar la información de un estudiante existente.
- Mostrar la lista de estudiantes con sus detalles.
- Obtener el promedio de las calificaciones de un estudiante.
- Destructurar la información de un estudiante.
Especificaciones:
- Cada estudiante debe tener un nombre, edad, estado activo, y una lista de calificaciones.
- Utiliza tuplas para almacenar la información del estudiante y sus calificaciones.
Implementa funciones para realizar las tareas mencionadas.*/


//1.Se define la tupla para el estudiante
type Estudiante = [string, number, boolean, ...number[]];//[nombre, edad,activo,calificaciones]
// el operador ... (parámetro rest) permite recibir múltiples calificaciones como un array de números.

//2.Se crea una lista de estudiantes
let estudiantes: Estudiante[] = [];

//3.Se declara una funcion para añadir un nuevo estudiante
function agregarEstudiante(nombre: string, edad: number, activo: boolean, ...calificaciones: number[]): void {
    const nuevoEstudiante: Estudiante = [nombre, edad, activo, ...calificaciones];
    estudiantes.push(nuevoEstudiante);
    console.log(`Estudiante ${nombre} agregado con éxito`);
};

//4.Se declara una funcion para modificar la informacion de un estudiante, con parametros opcionales (?)
function modificarEstudiante(indice: number, nombre?: string, edad?: number, activo?: boolean): void {
    if (estudiantes[indice]) {//se verifica si existe un estudiante en el indice especificado por parametro
        //Este enfoque permite actualizar solo los valores proporcionados, dejando los demás sin cambios.
        if (nombre !== undefined) estudiantes[indice][0] = nombre;
        if (edad !== undefined) estudiantes[indice][1] = edad;
        if (activo !== undefined) estudiantes[indice][2] = activo;
    } else {//si el indice es 'undefined'(no hay estudiante en ese indice) se muestra el mensaje en la consola
        console.log(`Estudiante no encontrado`);
    }
};

//5.Se declara la funcion para mostrar la lista de estudiantes
function mostrarEstudiantes(): void {
    console.log('Lista de Estudiantes:');
    estudiantes.forEach((estudiante, indice) => {//forEach es un método que recorre cada elemento del array estudiantes.
        //Esta línea usa la desestructuración para extraer los elementos de estudiante en variables:
        const [nombre, edad, activo, ...calificaciones] = estudiante;
        // - nombre, edad, y activo son los primeros tres elementos del array de cada estudiante.
        // - ...calificaciones captura el resto de los elementos como un array, conteniendo las calificaciones.
        console.log(`${indice}: Nombre: ${nombre}, Edad: ${edad}, Activo: ${activo ? 'Si' : 'No'}
            Calificaciones; ${calificaciones.join(", ")}`);     //La expresión activo ? 'Si' : 'No' convierte el valor booleano activo a texto
    });                     //convierte el array de calificaciones en una cadena separada por comas.
};

//6.Se declara la funcion para obtener el promedio de calificaciones de un estudiante

//como parametro se utiliza un numero para indice y la F. puede devolver numero o null(si no existe el estudiante)
function obtenerPromedioCalificaciones(indice: number): number | null {
    //se busca en el array estudiantes el indice dado
    const estudiante = estudiantes[indice];
    //si existe estudiante
    if (estudiante) {
        // usa slice(3) para obtener los elementos a partir de la posición 3 en el array estudiante,
        //que representan las calificaciones.
        const calificaciones = estudiante.slice(3) as number[];//as number[] le dice a .Ts que trate estos valores como un array de números.
        //La función de reduce revisa cada calificacion en el array calificaciones. Si el valor es un número, lo suma a sum.
        //Si por alguna razón no es un número (verificación de seguridad), suma 0 en su lugar
        const total = calificaciones.reduce((sum, calificacion) => sum + (typeof calificacion === 'number' ? calificacion : 0), 0);//El 0 después de la coma inicializa sum con el valor cero.
        //Estructura de early return:
        //La función primero verifica si estudiante existe con if (estudiante). Si el estudiante existe, entonces se calcula y retorna el promedio.
        //Si el estudiante no existe, el flujo de ejecución pasa directamente al console.log y luego al return null que está fuera del bloque if.
        return total / calificaciones.length;
    }
    //la propia logica de la F. si no existe estudiante pasa directamente al console.log y no ejecuta el if
    console.log('Estudiante no encontrado.');
    return null;
};

// 7. Añadimos algunos estudiantes
agregarEstudiante("María", 22, true, 8, 9, 10);
// Añadimos a María, de 22 años, activa, con calificaciones 8, 9 y 10.

agregarEstudiante("Pedro", 21, false, 7, 6, 8);
// Añadimos a Pedro, de 21 años, no activo, con calificaciones 7, 6 y 8.


// 8. Mostramos la lista de estudiantes
mostrarEstudiantes();
// Mostramos la lista completa de estudiantes, con sus respectivas calificaciones.


// 9. Modificamos un estudiante
modificarEstudiante(1, "Pedro Pérez", 22, true);
// Modificamos el estudiante en el índice 1 (Pedro), actualizando su nombre a "Pedro Pérez", su edad a 22 años y su estado a activo (true).


// 10. Mostramos la lista de estudiantes nuevamente
mostrarEstudiantes();
// Volvemos a mostrar la lista para verificar los cambios.


// 11. Obtenemos el promedio de calificaciones de un estudiante
const promedioMaria = obtenerPromedioCalificaciones(0);
// Calculamos el promedio de las calificaciones de María (índice 0).

if (promedioMaria !== null) {
    console.log(`Promedio de calificaciones de María: ${promedioMaria}`);
    // Si el promedio no es null, mostramos el promedio de calificaciones de María.
}
