/*definicion: alias de tipos en typescript
Cuando defines un tipo con type, estás creando un alias que puedes usar en lugar de reescribir
el tipo original. Esto es útil para simplificar el código y mejorar la legibilidad, especialmente
cuando el tipo es largo o se usa repetidamente.
*/

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

//3. Alias para 'uniones de tipos':
//una unión de tipos (|) permite que un valor sea cualquiera de los tipos especificados, sin
//necesidad de cumplir todos a la vez.
type Resultado = "Exito" | "Error";//Un tipo a la vez
type IdUsuario = string | number;

//usamos los alias para definir variables
let estadoOperacion: Resultado = "Exito";
let IdUsuario1: IdUsuario = 456;
let IdUsuario2: IdUsuario = "123abc";

console.log(`Estado de operacion: ${estadoOperacion},Usuario id: ${IdUsuario1}. Usuario
    Id con letras: ${IdUsuario2}`);

//*.Alias 'Intercepcion de tipos'
//una intersección de tipos es una forma de combinar varios tipos en uno solo. Esto significa
//que el nuevo tipo resultante debe satisfacer todas las propiedades y métodos de los tipos 
//originales.
type A = { nombre: string };
type B = { edad: number };

type PersonaAB = A & B; // tiene ambos tipos

//4. Alias para funciones
//Alias para la funcion que se toma dos numeros como argumentos y devuelve un numero
//esto se usa para definir la "firma" de funciones que deben cumplir con cieto formato
type Operacion = (a: number, b: number) => number;

//Implementacion de dos funciones que siguen el formato de operacionMatematica
const sumar: Operacion = (a, b) => a + b;
const restar: Operacion = (a, b) => a - b;

/*Diferencia entre TYPE y INTERFACE
Aunque los alias de tipo y las interfaces son similares, hay algunas diferencias:

- Interfaces se suelen usar para describir la forma de un objeto 
y soportan herencia y extensibilidad.

- Alias de tipo se pueden usar para representar cualquier tipo, incluyendo uniones,
intersecciones, tipos primitivos y tipos de funciones.*/


