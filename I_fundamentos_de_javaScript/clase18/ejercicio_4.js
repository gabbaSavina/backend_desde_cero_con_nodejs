/*Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
“Pablo” y “Pedro”.*/
const prompt = require("prompt-sync")({ sigint: true });

let nombresUsuario = [];

for (i = 0; i < 6; i++){
    nombresUsuario.push(prompt('Ingrese un nombre: '));
};

console.log(`Los nombres ingresados son: ${nombresUsuario}`);

function transformasYAnalizarNombres(nombresUsuario) {
    //1.quite los espacios en blanco alrededor de cada nombre
    let nombresSinEspacios = nombresUsuario.map(nombre => nombre.trim());
    //2.verifique si existe el nombre 'juan'
    let encontrarNombre = nombresUsuario.includes('juan');
    //3.remplace todos los nombres maria por ana
    let remplazarNombre = nombresUsuario.map( nombre => nombre.replace('maria', 'ana'));
    //4.encuentre el indice del nombre 'pedro'
    let indiceNmobre = nombresUsuario.indexOf('pedro');
    //5.Devuelva una cadena de nombres en orden alfabetico separado por puntos.
    let ordenAlfabetico = nombresUsuario.sort();

    return{
        sinEspacios: nombresSinEspacios,
        incluyeJuan: encontrarNombre,
        remplaza: remplazarNombre,
        indicePedro: indiceNmobre + 1,
        ordenAlfabetico: ordenAlfabetico,
    };
};

console.log(transformasYAnalizarNombres(nombresUsuario));
