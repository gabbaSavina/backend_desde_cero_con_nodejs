//Ejercicio 3: Uso de enum para días de la semana
//1. Declara un enum llamado DiasDeLaSemana con los valores: Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo.
enum DiasDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

//2. Crea una función que reciba un día de la semana y devuelva un mensaje indicando si es un día laborable o un día de descanso.
function esDiaHAbil(dia: DiasDeLaSemana): string {
    if (dia === DiasDeLaSemana.Sabado || dia === DiasDeLaSemana.Domingo) {
        return 'Es un día no laborable';
    } else {
        return 'Es un dia laborable';
    }
};

//3. Usa el enum para invocar la función con el valor Sabado y muestra el resultado por consola
console.log(esDiaHAbil(DiasDeLaSemana.Martes));