/*11) Crear una función que recibe un parámetro y devuelve que
tipo de dato es ese parámetro.I nvestiga sobre la palabra
reservada typeof*/

function tipoDeDato(variable) {
    if (typeof variable === "string") {
        console.log("Es un string: " + variable);
    } else if (typeof variable === "number") {
        console.log("Es un número: " + variable);
    } else if (typeof variable === "boolean") {
        console.log("Es un valor booleano: " + variable);
    } else {
        console.log("Es de un tipo no manejado: " + typeof variable);
    }
}

tipoDeDato("Hola");
tipoDeDato(123);
tipoDeDato(true);
