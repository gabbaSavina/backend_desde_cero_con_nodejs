//Ejercicio 5: Interfaz
//1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
//método presentarse().
interface IPersona {
    nombre: string;
    edad: number;
    presentarse(): void;
};

//2. Crea una clase llamada Persona que implemente esta interfaz y
//proporciona la implementación del método presentarse().
class Persona1 implements IPersona {
    constructor(public nombre: string, public edad: number) {}

    public presentarse(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const juan = new Persona1("Juan", 25);
juan.presentarse();