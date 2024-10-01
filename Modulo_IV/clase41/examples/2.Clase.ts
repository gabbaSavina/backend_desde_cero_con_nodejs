//definimos la clase
class Gato {
    //porpiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    //constructor
    constructor (nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    //Metodo para obtener informacion del gatito
    public obtenerInfo(): string {
        return `Nombre: ${this.nombre}`
    }
}