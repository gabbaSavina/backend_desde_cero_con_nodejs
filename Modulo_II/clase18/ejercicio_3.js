/*A partir del siguiente array de productos, escriba la función
‘gestionarProductos’ que realice las siguientes tareas:*/
let productos = [
    { nombre: 'Alfajores', precio: 30 },
    { nombre: 'Chocolate', precio: 50 },
    { nombre: 'Chupetines', precio: 70 },
    { nombre: 'Caramelos', precio: 20 },
    { nombre: 'Bombones', precio: 20 },
];

function gestionarProductos(productos) {
    // 1. Añadir un nuevo producto al inicio del array
    productos.unshift({ nombre: 'Chicle', precio: 10 });
    // 2. Eliminar el último producto del array
    let ultimoProducto = productos.pop();
    // 3. Encontrar el índice de un producto específico
    let encuentraIndice = productos.findIndex((producto) => producto.nombre === 'Chocolate');
    // 4. Verificar si existe un producto con precio mayor a 50
    let productoMayor = productos.some((producto) => producto.precio > 50);
    // 5. Devolver una cadena de nombres de productos separados por comas
    let nombresProductos = productos.map((producto) => producto.nombre).join(', ');

    return {
        productosActualizados: productos,
        ultimoProductoEliminado: ultimoProducto,
        indiceProductoChocolate: encuentraIndice,
        existeProductoMayor50: productoMayor,
        cadenaNombresProductos: nombresProductos,
    };
};

// Llamar a la función y mostrar los resultados
console.log(gestionarProductos(productos));


