/*La importación y exportación nombrada en JavaScript y TypeScript permite exportar múltiples
elementos de un archivo o módulo, como funciones, variables y clases, dándoles un nombre explícito.
Esto es útil cuando un módulo tiene varias funcionalidades que quieres hacer accesibles de forma
específica y que pueden ser importadas selectivamente en otros archivos.

¿Cuándo Usar la Exportación Nombrada?
Las exportaciones nombradas son ideales cuando el módulo tiene múltiples funcionalidades y deseas
hacerlas accesibles de forma específica. También permiten importar solo lo que necesitas en cada
archivo, lo que ayuda a mantener el código más limpio y optimizado.
*/

// Como importar estas funciones:
// cuando deseas usar estas exportaciones en otro archivo necesitas, importarlas con nombre
import { PI, add, subtract } from "./mathUtils";

console.log(add(10, 5)); 
console.log(subtract(10, 5));
console.log(PI);