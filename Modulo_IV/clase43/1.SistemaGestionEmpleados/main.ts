import { Empleado } from "./empleado";

//array de empleados
const empleados: Empleado[] = [
    new Empleado('Sofi', 'Back End', 5000),
    new Empleado('Pau', 'Front End', 4500),
    new Empleado('Kaira', 'Python', 3000),
    new Empleado('Gime', 'QA', 2000),
    new Empleado('Eve', 'Front End', 4500),
]

//Agregando Habilidades
empleados[0].agregarHabilidad('JavaScript');
empleados[0].agregarHabilidad('NodeJs');

empleados[1].agregarHabilidad('JavaScript');
empleados[1].agregarHabilidad('React');

empleados[2].agregarHabilidad('GitHub');
empleados[2].agregarHabilidad('Figma');

empleados[3].agregarHabilidad('Pruebas Unitarias');
empleados[3].agregarHabilidad('Depuracion');

empleados[4].agregarHabilidad('Proyect Manager');
empleados[4].agregarHabilidad('React');

function mostrarEmpleadosSalarioAlto(empleados: Empleado[]): void {
    //recorre array empleados
    empleados.forEach(empleado => {
        if (empleado.obtenerSalarioAnual() > 50000) {
            empleado.mostrarInformacion(); //llamamos a mostrarInfo
        }
    })
};

mostrarEmpleadosSalarioAlto(empleados);