import { Productos, categoriasProductos } from "./productos";

//array de inventario(agregar productos)
const inventario: Productos[] = [
    new Productos('Tablet', categoriasProductos.Electronica, 25000),
    new Productos('Vestido', categoriasProductos.Indumentaria, 15000),
    new Productos('Mayonesa', categoriasProductos.Alimentos, 1950),
    new Productos('SmartTV', categoriasProductos.Electronica, 690000),
    new Productos('Campera', categoriasProductos.Indumentaria, 72000),
    new Productos('Queso Feta x 100g', categoriasProductos.Alimentos,1950)
]

//Funciones
function precioTotalInventario(productos: Productos[]): number {
    return productos.reduce((acum, prod) => acum + prod.precio,0)
}

function mostrarCategoria(categoria: categoriasProductos, productos: Productos[]): void {
    console.log(`Productos en la categoría ${categoriasProductos[categoria]}:`);
    productos.forEach(producto => {
        if (producto.categoria === categoria) {
            producto.mostrarProducto();
        }
    });
}

//aplicacion
console.log(precioTotalInventario(inventario));
mostrarCategoria(categoriasProductos.Indumentaria, inventario);