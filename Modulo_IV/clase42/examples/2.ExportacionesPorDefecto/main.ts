/* EXPORTACION POR DEFECTO
Una exportación por defecto es una forma de designar un valor, función, clase o cualquier
otra entidad como la principal para exportar desde un módulo. Esto es especialmente útil
cuando el módulo tiene un único propósito o cuando quieres que se importe con un nombre
libremente asignado.

Diferencia con la Exportación Nombrada
Con una exportación nombrada (export) cada función, constante o clase se exporta
explícitamente y debe importarse con el mismo nombre o mediante alias.

¿Cuándo Usar Exportación por Defecto?
La exportación por defecto es ideal cuando el módulo está diseñado para exportar una sola
entidad (como una función, clase o constante principal). Esto hace el código más limpio y
flexible, especialmente en módulos que encapsulan una funcionalidad principal:
- Un archivo que exporta una clase principal de la aplicación.
- Funciones que tienen un uso predominante en el proyecto.
- Casos donde la reutilización del módulo requiere flexibilidad en el nombre (evitar conflictos
de nombres).

La importación/exportación por defecto te permite designar una entidad principal de un módulo y
tener la libertad de asignarle un nombre durante la importación, manteniendo el código modular 
y fácil de integrar en otros proyectos o módulos.
*/
import Calculator from "./calculator";

const calculadora = new Calculator();
/*Aquí hemos importado saludar como saludo, lo cual es posible gracias a la exportación por
defecto. Esto ofrece flexibilidad en el nombre que le damos a la importación en diferentes
archivos.*/

console.log(calculadora.add(10,5));
console.log(calculadora.subtract(10, 5));

