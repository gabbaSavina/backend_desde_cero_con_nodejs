//Definimos una clase abstracta
abstract class Vehiculo {
    //Constructor
    constructor (protected velocidad:number){
        this.velocidad = velocidad;
    }
    //Metodo abstracto (debe ser implementado por las subclases)
    abstract acelerar(): void;
    //Metodo concreto que describe el vehiculo y muestra su velocidad actual
    describir(): void{
        console.log(`Este vehiculo va a ${this.velocidad} km/h.`);        
    }
}
//Definimos una clase "Moto" que extiende de la clase Vehiculo
class Moto extends Vehiculo {
//Implementamos el metodo abstracto acelerar
    acelerar(): void {
        this.velocidad += 10
        console.log(`La moto acelera a ${this.velocidad} km/h.`);   
}
}
//Creacion de la instancia de la clase moto con una velocidad inicial de 40 km/h
const moto1 = new Moto(40);
//LLamamos al metodo acelerar, que aumenta la velocidad y mostrara el mensaje
moto1.acelerar();
//LLamamos al metodo describir para mostrar la velocidad actual
moto1.describir();