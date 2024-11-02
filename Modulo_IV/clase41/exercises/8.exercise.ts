//Ejercicio 8: Integramos contenidos - Animales
//1. Crea un pequeño sistema de gestión de Animales que incluya las clases
//Animal, Mascota, y MascotaExotica.
    //o La clase Animal debe tener propiedades como nombre y tipo.
    //o La clase Mascota debe extender Animal e incluir una propiedad para
    //dueño.
    //o La clase MascotaExotica debe extender Animal e incluir una
    //propiedad para habitat.
class Animal1 {
    public nombre: string;
    public tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public describirAnimal(): void {
        console.log(`Este es ${this.nombre}, un animal del tipo  ${this.tipo}.`);
    }
};

class Mascota extends Animal1 {
    public duenio: boolean;

    constructor(nombre: string,tipo: string, duenio: boolean) {
        super(nombre, 'mascota');
        this.duenio = duenio;
    }

    public describirAnimal(): void {
        super.describirAnimal();
        console.log(`¿Tiene dueño?: ${this.duenio}`);
    }
};

class MascotaExotica extends Animal1 {
    public habitat: string;

    constructor(nombre: string, tipo: string, habitat: string) {
        super(nombre, tipo);
        this.habitat = habitat;
    }

    public describirAnimal(): void {
        super.describirAnimal();
        console.log(`Habitat: ${this.habitat}`);
    }
};
//2. Implementa métodos para mostrar información sobre cada tipo de animal
//y agrega ejemplos de instanciación.

const miPerro1 = new Mascota ('Tito', 'perro', true);
miPerro1.describirAnimal();

const miLoro = new MascotaExotica('Pedro', 'Ave', 'Selva');
miLoro.describirAnimal();