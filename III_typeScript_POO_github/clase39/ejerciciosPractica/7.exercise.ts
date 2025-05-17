/*Ejercicio 7: 
Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto
empleado con las propiedades nombre (string) y salario (number), y un número
que represente el porcentaje de aumento. La función debe aumentar el salario
del empleado y devolver el nuevo salario. Muestra en la consola el resultado.*/

let empleado = { nombre: "Miguel", salario: 1200000 };

function aumentarSalario(empleado: { nombre: string, salario: number }, porcentaje: number): number {
    empleado.salario += empleado.salario * (porcentaje / 100);
    return empleado.salario;
}

const nuevoSalario = aumentarSalario(empleado, 10); // Aumenta en un 10%
console.log(`El nuevo salario de ${empleado.nombre} es: ${nuevoSalario}`);