/*Solicitar al usuario ingresar la marca de un auto y utiliza una funcion flecha
para verificar y mostrar si el auto es de origen nacional o importado. Considera
que solo los autos de marcas "Chevrolet, Ford y Fiat" son de origen nacional.*/
const prompt = require("prompt-sync")({ sigint: true });

const verificadorOrigenAuto = (marca) => {
    let origen;

    //verificar origen del auto
    if (marca === 'chevrolet' || marca === 'ford' || marca === 'fiat'){
        origen = `${marca} es de origen nacional`;
    }else {
        origen = `${marca} es de origen importado`;
    }
    return origen;
}

//solicitar marca del auto al usuario
let marcaAuto = prompt('Ingrese la marca del auto: ');

//imprimir el resultado
let resultado = verificadorOrigenAuto(marcaAuto)
console.log(resultado);