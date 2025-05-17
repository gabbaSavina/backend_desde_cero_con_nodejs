//clase base
export class Animal {
    name: string//porpiedad q alamacena el nombre del animal

    //constructor
    constructor(name: string) {
        this.name = name
    }

    //metodo
    makeSound(): void {
        console.log(`${this.name} hace un sonido`);
    }
}

//clase derivada
class Dog extends Animal {
    breed: string; //nueva propiedad de la clase hija

    //Cosntructor
    constructor(name: string, breed: string) {
        super(name);//llama al constructor de la clase animal
        this.breed = breed // inicializa la propiedad breed
    }

    //sobreescritura del metodo makeSound
    makeSound(): void {
        console.log(`${this.name} ladra`);
    }

    //Nuevo metodo especifico de la clase hija
    search(): void {
        console.log(`${this.name} esta buecando la pelota`);
    }
}

//intanciar objetos de la clase base
const genericoAnimal = new Animal ('Animal');//creacion de un objeto de la clase base
