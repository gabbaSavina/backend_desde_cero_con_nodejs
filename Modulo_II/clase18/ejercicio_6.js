/*Escribe una función "gestionarAutos" que realice las siguientes tareas con
una lista predefinida de marcas de autos:*/
let entrada = 'Toyota, Honda, Ford, Chevrolet, Nissan';

function gestionarAutos(entrada) {
    //1.quite los espacios en blanco alrrededor de cada marca
    let sinEspacios = entrada.split(',').map(marca => marca.trim()).join(',')
    //2.verifique si existe la marca 'tesla'
    let VerificarMarca = entrada.includes('tesla');
    //3.remplazar 'ford' por 'BMW'
    let reenplazaMarca = entrada.replace('Ford','BMW');
    //4.Encuentre el indice de la marcha 'Chevrolet'
    let indice = entrada.indexOf('Chevrolet');
    //5.Devuelva una cadena de marcas en orden alfabetico separas por puntos
    let marcasArray = entrada.split(', ').map(marca => marca.trim());
    let ordenAlfabetico = marcasArray.sort().join('.');

    return{
        entrada: sinEspacios,
        incluyeTesla: VerificarMarca,
        reenplaza: reenplazaMarca,
        indiceChevrolet: indice,
        marcasOrdenAlfabeticas: ordenAlfabetico,
    }
};

console.log(gestionarAutos(entrada));