//Ejercicio 7: Modificadores de Acceso
//1. Define una clase Coche con propiedades marca, modelo (públicas) y
//precio (privada).
class Coche {
    public marca: string;
    public modelo: string;
    private precio: number;

    constructor(marca: string, modelo: string, precio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    public mostrarInformacion(): void {
        console.log(`Coche: ${this.marca} ${this.modelo}`);
    }
};

//2. Implementa un método para mostrar la información del coche que acceda
//a las propiedades públicas y no a la privada directamente.
const miCoche = new Coche("Toyota", "Corolla", 20000);
miCoche.mostrarInformacion();