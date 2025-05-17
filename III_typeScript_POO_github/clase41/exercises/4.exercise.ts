//Ejercicio 4: Clases y Objetos
//1. Define una clase llamada Animal con propiedades nombre y tipo, y un
//método hacerSonido().
export class Animal {
    public nombre: string;
    public tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido.`);
    }
};

//2. Crea una instancia de la clase Animal y llama al método
const perro = new Animal("Rex", "Perro");
perro.hacerSonido();