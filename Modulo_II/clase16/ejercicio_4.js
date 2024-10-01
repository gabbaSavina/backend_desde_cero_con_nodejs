/*Para este ejercicio, contamos con un array llamado listaDeSuperMercado que contiene una lista de ítems para comprar.
Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.
Ademas, debemos realizar las siguientes operaciones:
a)	Agrega el artículo 'Papas' al final de la lista utilizando el método push.*/
let listaDeSupermercado = [
    'Bife de chorizo',
    'Coca Cola',
    'Bananas',
    'Lechuga',
    'Chimichurri',
    'Lata de tomates',
    'Arvejas',
    'Cereales',
    'Pechuga de pollo',
    'Leche',
];

listaDeSupermercado.push('Papas');

//b) Elimina el primer artículo de la lista utilizando el método shift.
listaDeSupermercado.shift(0);

//c) Utiliza el método forEach para recorrer el arreglo listaDeSuperMercado y mostrar cada ítem por consola.
listaDeSupermercado.forEach(lista => console.log(lista));

//d) Busca la posición del artículo 'Cereales' utilizando el método lastIndexOf y muestra su posición en la lista.
//(considerando que los índices comienzan desde 1 en la lista mostrada al usuario), o indica que no se encontró si no está presente.
let buscarArticulo = function(articulo) {
    if (listaDeSupermercado.lastIndexOf(articulo) === false){
        console.log('Articulo no encontrado')
    } else {
    listaDeSupermercado.lastIndexOf(articulo)
    }return console.log(`${articulo} se encuentra en la posición: ${listaDeSupermercado.lastIndexOf(articulo)}`)
};
buscarArticulo('Cereales');

