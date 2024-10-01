/*1. Estructura de Datos
a) Crear un array de objetos llamado mascotas que contenga al menos 5
mascotas. Cada mascota debe tener las siguientes propiedades:
✓ id (número)
✓ nombre (string)
✓ especie (string)
✓ edad (número)
✓ disponible (booleano)*/
const prompt = require("prompt-sync")({ sigint: true });

let mascotas = [
    {id: 1, nombre: 'Tito', especie: 'Perro', edad: 8, disponible: true},
    {id: 2, nombre: 'Nino', especie: 'Gato', edad: 8, disponible: true},
    {id: 3, nombre: 'Carmela', especie: 'Perro', edad: 2, disponible: true},
    {id: 4, nombre: 'Simba', especie: 'Perro', edad: 5, disponible: true},
    {id: 5, nombre: 'Pedro', especie: 'loro', edad: 20, disponible: true,}
];

/*b) Crear un array de objetos llamado propietarios con al menos 3
propietarios. Cada propietario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ mascotasAdoptadas (array de ids de mascotas)*/

let propietarios = [
    {id: 1, nombre:'Luis', email: 'lucho93@gmail.com', mascotasAdoptadas: []},
    {id: 2, nombre:'Felipe', email: 'felipcf@gmail.com', mascotasAdoptadas: []},
    {id: 3, nombre:'Analía', email: 'ani_dolca@hotmail.com', mascotasAdoptadas: []},
];

/*2. Funciones de Gestión de Mascotas
a) Implementar una función agregarMascota(id, nombre, especie, edad)
que agregue una nueva mascota al array mascotas.*/

function agregarMascota(nombre, especie, edad) {
    let id = mascotas.length + 1;//para que se incremente el id automaticamente
    mascotas.push({ id, nombre, especie, edad, disponible: true });
    console.log(`Mascota ${nombre} agregada con éxito.`);
};

/*b) Crear una función buscarMascota(criterio, valor) que permita buscar
mascotas por nombre o especie.*/

function buscarMascota (criterio, valor) { // seria como {criterio: valor}
    return mascotas.filter(mascota => mascota[criterio] === valor);
};

/* 3. Gestión de Propietarios
a) Implementar una función registrarPropietario(nombre, email) que
agregue un nuevo propietario al array propietarios.*/

function registrarPropietario(nombre, email) {
    let id = propietarios.length + 1;//para que se incremente el id automaticamente
    propietarios.push({ id, nombre, email, mascotasAdoptadas: [] });
    console.log(`Propietario ${nombre} registrado con éxito.`);
};

//b) Crear una función buscarPropietario(email) que devuelva la
//información de un propietario dado su email.

function buscarPropietario(email) {
    return propietarios.find(propietario => propietario.email === email);
};

/*4. Sistema de Adopciones
a) Desarrollar una función adoptarMascota(idMascota, idPropietario) que
marque una mascota como no disponible y la agregue a la lista de
mascotas adoptadas del propietario.*/

function adoptarMascota(idMascota, idPropietario) {
    //encuentra la mascota en el array por su id
    let mascota = mascotas.find(mascota => mascota.id === idMascota);
    //encuentra el propietario en el array por su id
    let propietario = propietarios.find(propietario => propietario.id === idPropietario);
    //verifica si la mascota existe, esta disponible y si el propietario existe
    if (mascota && mascota.disponible && propietario) {
        mascota.disponible = false; // la marca como no disponible
        //agrega el idMascota a la lista del propietario 
        propietario.mascotasAdoptadas.push(mascota.id);
        console.log(`Mascota ${mascota.nombre} adoptada por ${propietario.nombre}.`);
    } else {
        console.log('Error: No se pudo completar la adopción.');
    }
};

/*b) Implementar una función devolverMascota(idMascota, idPropietario)
que marque una mascota como disponible y la elimine de la lista de
mascotas adoptadas del propietario.*/

function devolverMascota(idMascota, idPropietario) {
    let mascota = mascotas.find(mascota => mascota.id === idMascota);
    let propietario = propietarios.find(propietario => propietario.id === idPropietario);

    if (mascota && !mascota.disponible && propietario) {
        mascota.disponible = true;
        //elimina el idMascota de la lista del propietario
        propietario.mascotasAdoptadas = propietario.mascotasAdoptadas.filter(id => id !== idMascota);
        console.log(`Mascota ${mascota.nombre} devuelta por ${propietario.nombre}.`);
    } else {
        console.log('Error: No se pudo completar la devolución.');
    }
};

/*5. Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de
opciones al usuario y permita interactuar con el sistema utilizando
prompt().
b) El menú debe incluir opciones para todas las funcionalidades
anteriores y manejar la lógica mediante estructuras de control (if,
switch, ciclos).*/

function menuPrincipal() {
    let opcion;
    do {//mantiene el menu activo hasta que el usuario elije salir
        console.log("\n--- Menú Principal ---");
        console.log("1. Agregar Mascota");
        console.log("2. Buscar Mascota");
        console.log("3. Registrar Propietario");
        console.log("4. Buscar Propietario");
        console.log("5. Adoptar Mascota");
        console.log("6. Devolver Mascota");
        console.log("0. Salir");
        opcion = parseInt(prompt("Seleccione una opción: "));

        switch (opcion) {
            case 1://agregarMascota
                let idMascota = parseInt(prompt("Ingrese el ID de la mascota: "));
                let nombreMascota = prompt("Ingrese el nombre de la mascota: ");
                let especieMascota = prompt("Ingrese la especie de la mascota: ");
                let edadMascota = parseInt(prompt("Ingrese la edad de la mascota: "));
                agregarMascota(idMascota, nombreMascota, especieMascota, edadMascota);
                break;
            case 2://BuscarMascota
                let criterio = prompt("Buscar por 'nombre' o 'especie': ");
                let valor = prompt(`Ingrese el ${criterio} de la mascota: `);
                let mascotasEncontradas = buscarMascota(criterio, valor);
                console.log("Mascotas encontradas:", mascotasEncontradas);
                break;
            case 3://RegistraPropietario
                let nombrePropietario = prompt("Ingrese el nombre del propietario: ");
                let emailPropietario = prompt("Ingrese el email del propietario: ");
                registrarPropietario(nombrePropietario, emailPropietario);
                break;
            case 4://BuscarPropietario
                let emailBusqueda = prompt("Ingrese el email del propietario: ");
                let propietarioEncontrado = buscarPropietario(emailBusqueda);
                console.log("Propietario encontrado:", propietarioEncontrado);
                break;
            case 5://AdoptarMascota
                let idMascotaAdoptar = parseInt(prompt("Ingrese el ID de la mascota a adoptar: "));
                let idPropietarioAdoptar = parseInt(prompt("Ingrese el ID del propietario que adoptará: "));
                adoptarMascota(idMascotaAdoptar, idPropietarioAdoptar);
                break;
            case 6://devolverMascota
                let idMascotaDevolver = parseInt(prompt("Ingrese el ID de la mascota a devolver: "));
                let idPropietarioDevolver = parseInt(prompt("Ingrese el ID del propietario que devolverá: "));
                devolverMascota(idMascotaDevolver, idPropietarioDevolver);
                break;
            case 0:
                console.log("Saliendo del sistema...");
                break;
            default://para opciones incorrectas
                console.log("Opción inválida, intente nuevamente.");
        }
    } while (opcion !== 0);//se sigue haciendo el ciclo mientras no sea cero sea false
}

// Ejecutar el menú principal
menuPrincipal()