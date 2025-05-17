/*Ventajas de la Exportación Directa
- Más concisa: Permite ver qué elementos están exportados desde el mismo lugar donde se definen.
- Evita repeticiones: No es necesario declarar las exportaciones por separado al final del archivo.*/

/*Ventajas de la Exportación Separada
- Organización clara: Permite ver todos los elementos exportados en un solo lugar.
- Facilita el mantenimiento: Es fácil agregar o quitar exportaciones sin modificar las líneas
donde se declaran los elementos.*/

/*¿Cuándo Usar Cada Una?
- Exportación Directa: Es ideal para archivos con pocas exportaciones o cuando deseas mantener el
código más conciso.
- Exportación Separada: Es útil cuando el archivo contiene muchas exportaciones y prefieres mantener
las declaraciones y exportaciones organizadas por separado.*/
import { PI, E } from "./constants";

console.log(PI, E);