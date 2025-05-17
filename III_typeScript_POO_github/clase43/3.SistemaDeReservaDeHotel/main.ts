import { Huesped, tipoDeHabitacion } from "./reservas";

//array de reservas
const reservas: Huesped[] = [];

//Agregar Huspedes
reservas.push(new Huesped('Garcia', 3, tipoDeHabitacion.Premium));
reservas.push(new Huesped('Perez', 7, tipoDeHabitacion.Estandar));
reservas.push(new Huesped('Ferrari', 5, tipoDeHabitacion.Suite));

//Ingreso de las reservas
function calcularIngresoReservas(): number {
    return reservas.reduce((acum, hues) => acum + (hues.estadia * hues.habitacion),0)
}

//mostrar total reservas
function listarReservas(reservas: Huesped[]): void {
    reservas.forEach(huesped => {
        huesped.mostrarHuesped();
    });
}

//Implemetacion de las funciones
console.log(`El ingreso del Hotel es:${calcularIngresoReservas()}`);
listarReservas(reservas);