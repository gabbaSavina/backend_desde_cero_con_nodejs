//Ejercicio 16: Uso de enum para categorías de productos
//1. Declara un enum llamado CategoriaProducto con los valores: Electrónica,
//Ropa, Alimentos, Muebles.
enum CategoriaProducto {
    Electrónica,
    Ropa,
    Alimentos,
    Muebles
};

//2. Crea una función que reciba un valor del enum y devuelva un mensaje
//sobre qué tipo de productos incluye esa categoría.
function mostrarCategoria(categoria: CategoriaProducto): string {
    switch (categoria) {
        case CategoriaProducto.Electrónica:
            return 'Notebooks, Tablets, Smartphones';
        case CategoriaProducto.Ropa:
            return'Remera, Hodie, Short';
        case CategoriaProducto.Alimentos:
            return'Arroz, Fideos, Enlatados';
        case CategoriaProducto.Muebles:
            return 'Sillon, Mesa, Sillas';
    }
};

//3. Llama a la función con el valor Alimentos y muestra el resultado por consola
console.log(mostrarCategoria(CategoriaProducto.Alimentos));