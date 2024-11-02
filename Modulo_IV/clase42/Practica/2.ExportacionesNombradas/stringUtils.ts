//Funcion para Caps la primer letra de un string
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   //Obtiene la primera letra y        Obtiene el resto de la cadena a 
    //la convierte a mayúscula.         partir del segundo carácter y 
                                        //lo convierte a minúsculas

//funcion para string al reves
export function reverse(str: string) : string {
    return str.split("").reverse().join("");
};
/*  str.split(""): Convierte el string en un *** arreglo de caracteres. ***
    .reverse(): Invierte el orden de los elementos en el arreglo.
    .join(""): Junta el arreglo de nuevo en un string.*/

/*
String: Secuencia inmutable de caracteres.

Arreglo de Caracteres: Arreglo mutable donde cada elemento es un carácter.

Cada uno tiene ventajas en diferentes situaciones; el string es más eficiente para
manipular texto completo, mientras que un arreglo de caracteres es útil cuando 
necesitas modificar partes específicas de la secuencia de caracteres.
*/