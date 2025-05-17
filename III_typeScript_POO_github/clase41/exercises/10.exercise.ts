/*Ejercicio 10: Registro de Estudiantes
1. Crea un sistema para registrar Estudiantes con las siguientes clases:
    o Estudiante: Clase que incluye propiedades como nombre, edad y
    curso, además de un método que muestre la información del
    estudiante.
    o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con
    métodos para agregar un estudiante y mostrar todos los estudiantes
    registrados.*/
class EstudianteActivo {
    public nombre: string;
    public edad: number;
    public curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    public mostrarInformacion(): void {
        console.log(`El estudiante ${this.nombre}, tiene ${this.edad} años y esta cursando ${this.curso}`);
    }
};
class RegistroEstudiantes {
    private estudiantes: EstudianteActivo[] = [];

    public agregarEstudiante(estudiante: EstudianteActivo): void {
        this.estudiantes.push(estudiante);
    }

    public mostrarEstudiantes(): void {
        console.log("Lista de Estudiantes:");
        this.estudiantes.forEach(estudiante => estudiante.mostrarInformacion());
    }
}

// Ejemplo de uso
const registro = new RegistroEstudiantes();
export const estudiante1 = new EstudianteActivo("Ana", 20, "Matemáticas");
const estudiante2 = new EstudianteActivo("Luis", 22, "Física");

registro.agregarEstudiante(estudiante1);
registro.agregarEstudiante(estudiante2);
registro.mostrarEstudiantes();