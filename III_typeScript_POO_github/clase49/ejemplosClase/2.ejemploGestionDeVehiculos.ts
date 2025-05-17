// Gestión de Vehículos
// Se requiere implementar un sistema para gestionar diferentes tipos de vehículos 
// (coches, motocicletas, bicicletas). 
// Cada vehículo debe tener un identificador único, un tipo de combustible 
// (en caso de que lo use), y todos los vehículos deben poder moverse.
// Los vehículos motorizados como coches y motocicletas deben tener un método para arrancar.
// Las bicicletas solo necesitan poder moverse, ya que no usan combustible ni motor.
// Debes usar tuplas, alias (type) e interfaces para estructurar la solución.

//definimos los tipos antes de declarar la interface

type Coordenadas = [number, number];//se utiliza para dar valor a la propiedad 'posicion' de la
                                    //interface 'Veiculo'

// Funcion que acepta 'Coordenadas' como tupla y muestra la posicion q utiliza la interfese Vehiculo
function mostrarPosicion(posicion: Coordenadas): void {
    console.log(`Posicion actual: X = ${posicion[0]}, Y = ${posicion[1]}`);
}

// Uso de type (Definimos un alias para el combustuble)
type Combustible = "Gasolina" | "Diesel" | "Electrico";
                    //Este alias 'Combustible' puede ser cualquiera de los tres valores de texto
                    //especificados.(union de tipos)

// Alias de union de tipos para el ID de un vehiculo (string o number)
type vehiculoId = string | number;

// Alias para un objeto 'Motor' que contiene informacion del tipo de combustible
type Motor = {
    tipoCombustible: Combustible; 
    encendido: boolean;
};

// Uso de interfaces
// 1.Interfaz 'Vehiculo' le de forma al objeto con las 'propiedades comunes/base'
interface Vehiculo {
    id: vehiculoId; // Identificador unico del tipo union de tipos
    posicion: Coordenadas; // Posicion actual del vehiculo (usando la tupla Coordenadas)
    mover(nuevaPosicion: Coordenadas): void; // Metodo para mover el vehiculo
}

// 2.Interfaz para vehiculos que tienen motor
//Se está definiendo una interfaz nueva llamada VehiculoMotorizado. En TypeScript, las interfaces
//se usan para definir la forma o estructura de un objeto, es decir, qué propiedades y métodos
//debe tener.

/*3.extends Vehiculo
- Esto significa que VehiculoMotorizado está heredando las propiedades y métodos de la
interfaz Vehiculo.
- extends se usa para hacer que una interfaz incluya las características de otra, de modo que
VehiculoMotorizado tendrá tanto las propiedades y métodos de Vehiculo como las nuevas
propiedades y métodos definidos en VehiculoMotorizado.*/

interface VehiculoMotorizado extends Vehiculo {
    motor: Motor; // Informacion del motor type de objeto (Motor*)
    arrancar(): void; // Metodo para arrancar el vehiculo
}           //5.(): Void significa que este método no toma ningún parámetro y no devuelve ningún
            //valor (el tipo void indica ausencia de un valor de retorno).

/*5.(Motor*)
Al incluir motor: Motor, estamos indicando que todo VehiculoMotorizado debe tener una propiedad
motor que almacene la información del motor.(ej{tipo de combustible, etc})
*/



/* Clase coche que implementa la interfaz vehiculoMotorizado
Esto significa que Coche debe cumplir con todas las propiedades y métodos de VehiculoMotorizado.*/

export class Coche implements VehiculoMotorizado {
    id: vehiculoId;
    posicion: Coordenadas;
    motor: Motor;

    constructor(id: vehiculoId, posicion: Coordenadas, tipoCombustible: Combustible) {
        this.id = id;
        this.posicion = posicion;
        this.motor = {//Inicializa la propiedad motor con el tipo de combustible 
            tipoCombustible,
            encendido: false//configura encendido en false,el coche está apagado al principio
        };
    }

    mover(nuevaPosicion: Coordenadas): void {
        this.posicion = nuevaPosicion;//se actualiza la posicion con el parametro de la funcion
        console.log(`El coche se ha movido a la nueva posicion`);
        mostrarPosicion(this.posicion)//llama a la F q muestra la posicion a traves de las coordenadas
    }

    arrancar(): void {
        this.motor.encendido = true;
        console.log(`El coche ha arrancado con ${this.motor.tipoCombustible}`);
    }
};

// Clase Bicicleta que implenta ela interfaz vehiculo
// Como no tiene motor, solo necesita las propiedades y métodos que define Vehiculo.
class Bicicleta implements Vehiculo {
    id: vehiculoId;
    posicion: Coordenadas;

    constructor (id: vehiculoId, posicion: Coordenadas) {
        this.id = id;
        this.posicion = posicion;
    }

    // Implementamos el metodo mover
    mover(nuevaPosicion: Coordenadas): void {
        this.posicion = nuevaPosicion;
        console.log(`La bicicleta se ha movido a la nueva posicion`);
        mostrarPosicion(this.posicion)
    }
};

/*Resumen
-- Coche representa un vehículo motorizado que puede moverse y arrancar el motor.
-- Bicicleta representa un vehículo sin motor que también puede moverse.

La interfaz VehiculoMotorizado se usa para definir vehículos con motor (como Coche), mientras
que Vehiculo se usa para vehículos en general, permitiendo que clases como Bicicleta implementen
solo lo necesario.*/

// creamos la instancia coche que id 1, posicion 0 y 0 y combustible gasolina
let miCoche = new Coche(1, [0,0], "Gasolina");

miCoche.arrancar();//Este método llama a arrancar en miCoche, que cambia el estado del motor a
//encendido (this.motor.encendido = true) y muestra un mensaje en la consola indicando que el
//coche ha arrancado con gasolina.

miCoche.mover([10,20]);//Muestra un mensaje en la consola diciendo que el coche se ha movido a la
//nueva posición, y luego llama a mostrarPosicion para mostrar las coordenadas actuales 


// creamos la instancia bicilceta que id 002, posicion 5, 5 
let miBicicleta = new Bicicleta("002", [5, 5]);
miBicicleta.mover([15,25]);