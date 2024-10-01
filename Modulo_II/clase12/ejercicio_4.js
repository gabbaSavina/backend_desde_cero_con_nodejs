/*Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la cantidad.*/
const prompt = require("prompt-sync")({ sigint: true });

//solicitar al cliente la cantidad de productos
let cantidadDeProductos = parseInt(prompt('Ingrese la cantidad de productos: '));
let productos = []; // vse declara un array para almacenar los precios de cada producto

//Se utiliza el ciclo for para iterar la cant de prod ingresada por el usuario.
for( i = 0; i < cantidadDeProductos; i++){
        productos[productos.length] = parseFloat(prompt('Ingrese el precio unitario: '));
}

// sumar los precios de los productos
let sumaPreciosDeProductos = 0;
for ( i = 0; i < productos.length; i++ ) {
    sumaPreciosDeProductos += productos[i];
}
console.log(`El total sin descuentos: ${sumaPreciosDeProductos}`);

//Verificar segun la cantidad de productos, el descuento que se aplica
let descuento15 = 0.15;
let descuento10 = 0.10;

if (productos.length >= 9){
    let totalConDescuento = sumaPreciosDeProductos - (sumaPreciosDeProductos * descuento15);
    console.log(`El total a pagar con el 15% de descuento: ${totalConDescuento}`);
} else {
    let totalConDescuento = sumaPreciosDeProductos - (sumaPreciosDeProductos * descuento10);
    console.log(`El total a pagar con el 10% de descuento: ${totalConDescuento}`);
}


