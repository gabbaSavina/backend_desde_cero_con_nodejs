/*
Un namespace es un mecanismo en TypeScript que permite organizar y agrupar código bajo un mismo
nombre lógico, evitando conflictos de nombres y proporcionando un contexto para variables,
funciones, clases, interfaces y otros elementos. Los namespaces ayudan a estructurar aplicaciones
grandes y a mantener el código modular y organizado, especialmente cuando tienes múltiples
componentes o módulos que podrían tener nombres similares.

¿Cuándo Usar Namespaces?
- Cuando estás trabajando en una aplicación que necesita organizar código en una sola unidad
(por ejemplo, en un archivo).
- En aplicaciones más antiguas o scripts que no requieren un sistema de módulos moderno.
*/
export namespace Geometry {
    export namespace Circle {
        const PI = 3.14159;
        export function area(radius: number): number {
            return PI * radius * radius;
        }
    }

    export namespace Rectangle {
        export function area(width: number, height: number): number {
            return width * height;
        }
    }
}