//Funcion para Caps la primer letra de un string
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

//funcion para string al reves
export function reverse(str: string) : string {
    return str.split("").reverse().join("");
};
