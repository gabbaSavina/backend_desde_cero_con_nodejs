/*Escribe una función "gestionarFloreria" que realice las siguientes tareas
con una lista predefinida de nombres de flores*/
let entrada = 'Rosa, Tulipan, Orquidea, Lirio';

function gestionarFloreria() {
    //1.Quite los espacios en blanco alrededor de cada flor
    let sinEspacios = entrada.split(',').map(flor => flor.trim()).join(',');
    //2.Verifique si existe 'Margarita' y si esta presente agregue 'Azucena'al final
    if(entrada.includes('Margarita')) {entrada.push('Azucena')};
    //3.Remplace todas las flores 'Orquidia' por 'Clavel'
    let remplazarFlor = entrada.replace('Orquidea', 'Clavel');
    //4.Encuentre el indice de la flor Girasol y si no esta, agregue girasol al inicio de la lista
    let arrayFlores = entrada.split(', ');
    if(arrayFlores.indexOf('Girasol' === -1)) {arrayFlores.unshift('Girasol')};
    //5.devuelva una cadena de flores en orden alfabetico separadas por puntos
        let ordenAlfabetico = arrayFlores.sort().join('.');
    return{
        flores: sinEspacios,
        remplazar: remplazarFlor,
        agregarFlor: arrayFlores,
        orden: ordenAlfabetico,
    }
};

console.log(gestionarFloreria());