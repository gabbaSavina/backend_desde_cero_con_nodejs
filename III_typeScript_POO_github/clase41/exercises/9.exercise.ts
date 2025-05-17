//Ejercicio 9: Sistema de Gestión de Vehículos
//1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
    //o Vehiculo: Clase base con propiedades como marca, modelo y un
    //método para mostrar información del vehículo.
    //o Coche: Clase que extiende Vehiculo e incluye una propiedad para
    //tipoCombustible y un método para mostrar la información completa
    //del coche.
    //o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
    //para cilindrada y un método para mostrar la información completa
    //de la motocicleta.
class Vehiculo1 {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public mostrarInformacion(): void {
        console.log(`El vehiculo es de la marca ${this.marca} y es el modelo ${this.modelo}`);
    }
};

class Coche1 extends Vehiculo1 {
    public tipoCombustible: string;

    constructor(marca: string, modelo: string, tipoCombustible: string){
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }

    public mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tipo de combustible: ${this.tipoCombustible}`);
    }
};

class Motocicleta1 extends Vehiculo1 {
    public cilindrada: number;

    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    public mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Su cilindrada es de ${this.cilindrada}`);
    }
};

const miAuto = new Coche1('Chevrolet', 'Celta', 'Naftero');
miAuto.mostrarInformacion();

const miMoto = new Motocicleta1('Honda', 'Wave', 110);
miMoto.mostrarInformacion();