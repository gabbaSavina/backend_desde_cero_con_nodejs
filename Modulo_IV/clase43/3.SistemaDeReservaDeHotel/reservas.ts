export enum tipoDeHabitacion {
    Estandar = 185,
    Suite = 310,
    Premium = 950
}

export class Huesped {
    nombre: string;
    estadia: number;
    habitacion: tipoDeHabitacion;

    constructor(nombre: string, estadia: number, habitacion: tipoDeHabitacion) {
        this.nombre = nombre,
        this.estadia = estadia,
        this.habitacion = habitacion
    }

    mostrarHuesped(): void {
        const tipoHabitacion = tipoDeHabitacion[this.habitacion];
        console.log(`Huesped:${this.nombre}\n Estadia en noches: ${this.estadia}\n Tipo de Habitacion: ${tipoHabitacion}`)
    }
};