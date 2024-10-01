/*Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados 
para acordar un recuperatorio.  Por lo tanto, necesitamos dos listas: una lista que almacene todos los
aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados 
respectivamente.
Además de hacer esto, deberemos realizar las siguientes operaciones:
a) Filtra los estudiantes en dos listas: aprobados y desaprobados.*/

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true },
    {nombre: 'Jane', promedio: 7, aprobado: true },
    {nombre: 'Juhe', promedio: 3, aprobado: false },
    {nombre: 'Jake', promedio: 4, aprobado: false },
    {nombre: 'Jill', promedio: 9, aprobado: true }
];

let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.aprobado);
let estudiantesDesaprobados = estudiantes.filter(estudiante => !estudiante.aprobado);

//b) Manipula la lista de aprobados agregando un estudiante al inicio y otro al final.
estudiantesAprobados.unshift({nombre: 'June', promedio: 10, aprobado: true});
estudiantesAprobados.push({nombre:'Joana', promedio: 7.5, aprobado: true});

//c) Manipula la lista de desaprobados eliminando al primero y al último estudiante.
estudiantesDesaprobados.shift(0);
estudiantesDesaprobados.pop(1);

//d) Utiliza map junto con indexOf para buscar un estudiante específico en la lista de aprobados
// y muestra su índice si está presente.
let nombres = estudiantesAprobados.map(estudiante => estudiante.nombre);//un array con solo los nombres
let indice = nombres.indexOf('Jake');

console.log(indice);

//e)	Utiliza includes para verificar si un estudiante está en la lista de desaprobados y muestra
// un mensaje indicando su presencia.
if (estudiantesDesaprobados.includes('jake')) {
    console.log('El estudiante esta desaprobado');
} else {
    console.log('Estudiante no encontrado')
};

//f)	Muestra las listas de aprobados y desaprobados actualizadas después de todas las operaciones.
console.log(estudiantesAprobados);
console.log(estudiantesDesaprobados);