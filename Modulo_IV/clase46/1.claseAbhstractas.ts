//definimos una clase abstracta llamada animal
export abstract class Animal {
    //constructor: define la prop nombre, establece solo en esta clase y sus subclases
    constructor(protected nombre: string) {}

    //metodo abstracto que debera ser implementado por cada subclase
    //este metodo definira como se mueve el animal
    abstract moverse(): void;

    //metodo concreto (con implementacion) que describe al animal
    describir(): void {
        console.log(`este es un animal llamado ${this.nombre}`);
    }
}

//definimos clase concreta 'perro' que extiende de la clase abstracta animal
class Perro extends Animal {
    //implementamos el metodo abtracto 'moverse' de la clase Animal
    moverse(): void {
        console.log(`${this.nombre} esta corriendo`);
    }
}

//definimos otra clase concreta 'pajaro' que extiende de animal
class Pajaro extends Animal {
    //implementamos el metodo abstracto 'moverse' de la clase animal
    moverse(): void {
        console.log(`${this.nombre} esta volando`)
    }
}

//Creamos las instacionas para ambas clases hijas
const miPerro = new Perro('osito');
const miPajaro = new Pajaro('Pedrito');

//usamos los metodos concretos y abstractos
miPerro.describir();
miPerro.moverse();
miPajaro.describir();
miPajaro.moverse();