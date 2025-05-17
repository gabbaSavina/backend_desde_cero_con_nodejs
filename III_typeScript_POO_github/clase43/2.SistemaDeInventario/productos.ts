//enum de cadena
export enum categoriasProductos {
    Electronica = 'Electronica',
    Indumentaria = 'Indumentaria',
    Alimentos = 'Alimentos',
};

//clase
export class Productos {
    nombre:string;
    categoria: categoriasProductos;
    precio: number;

    constructor(nombre: string, categoria: categoriasProductos, precio: number) {
        this.nombre = nombre,
        this.categoria = categoria,
        this.precio = precio
    }

    mostrarProducto(): void {
        console.log(`Producto: ${this.nombre}, Categoría: ${categoriasProductos[this.categoria]}, Precio: $${this.precio}`);
    }
};