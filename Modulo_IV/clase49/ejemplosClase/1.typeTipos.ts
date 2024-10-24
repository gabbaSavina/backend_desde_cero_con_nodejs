/*definicion: alias de tipos en typescript
Un alias de tipos permite crear un nombre descriptivo para un tipo ya existente
Esto mejora la legibilidad del codigo*/

//1. Alias de tipos primitivos: ejemplos: Strnig, number, etc
type ID = number;
type Nombre = string;
type Activo = Boolean;

//Usamos los alias para declarar vaariables
let usuarioId: ID = 123;
let nombreUsuario: Nombre = 'Sofi';
let cuentaActiva: Activo = true;

console.log(`Usuario ID: ${usuarioId},nombre del usuario:${nombreUsuario}
    cuenta activa: ${cuentaActiva}`);

//2. Alias para Objetos
type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: number;
};
//usamos el alias direccion
let miDireccion: Direccion = {
    calle: 'Avenida America',
    ciudad: 'Neuquen',
    codigoPostal: 12345
};

console.log(`Vivo en ${miDireccion.calle}, en la ciudad de ${miDireccion.ciudad} y mi 
    codigo postal es ${miDireccion.codigoPostal}`);

//3. Alias para uniones de tipos
type Resultado = "Exito" | "Error";
type IdUsuario = string | number;

//usamos los alias para definir variables
let estadoOperacion: Resultado = "Exito";
let IdUsuario1: IdUsuario = 456;
let IdUsuario2: IdUsuario = "123abc";

console.log(`Estado de operacion: ${estadoOperacion},Usuario id: ${IdUsuario1}. Usuario
    Id con letras: ${IdUsuario2}`);

//4. Alias para funciones
//Alias para la funcion que se toma dos numeros como argumentos y devuelve un numero
//esto se usa para definir la "firma" de funciones que deben cumplir con cieto formato
type Operacion = (a: number, b: number) => number;

//Implementacion de dos funciones que siguen el formato de operacionMatematica
const sumar: Operacion = (a, b) => a + b;
const restar: Operacion = (a, b) => a - b;


