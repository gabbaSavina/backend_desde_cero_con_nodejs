export class Empleado {
    nombre: string;
    cargo: string;
    salarioMensual: number;
    habilidades: string[];

    constructor(nombre: string, cargo: string, salarioMensual: number) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salarioMensual = salarioMensual;
        this.habilidades = []; //Se inicializa como array vacio, no se pasa como parametro
    }

    agregarHabilidad(habilidad: string): void {
        this.habilidades.push(habilidad);
    }

    obtenerSalarioAnual():number {
        return this.salarioMensual * 12;
    }

    mostrarInformacion(): void {
        console.log(`Empleado: ${this.nombre}, Cargo:${this.cargo}, Salario Mensual:${this.obtenerSalarioAnual()}
        Habilidades: ${this.habilidades.join(",")}`);
    }
};