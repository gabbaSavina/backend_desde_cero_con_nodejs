/*Declará las variables vehiculo y litrosConsumidos. A continuación,
realizá los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
✓ Si el vehículo es “coche”, el precio por litro es de $86.
✓ Si el vehículo es “moto”, el precio por litro es de $70.
✓ Si el vehículo es “autobús”, el precio por litro es de $55.
✓ Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al
total a pagar.
✓ Si los litros consumidos son mayores a 25, se ha de añadir $25 al
total a pagar.
Finalmente, imprimí en consola el total a pagar.*/

let vehiculo = 'coche';
let litrosConsumidos = 1;
let total = 0;

if (litrosConsumidos <= 25){
    total = 50;
}
else{
    total = 25;
}

switch(vehiculo){
    case 'coche':
        total = total + (litrosConsumidos * 86);
        console.log(`El total a pagar es: ${total}`);
        break;
    case 'moto':
        total = total + (litrosConsumidos * 70);
        console.log(`El total a pagar es: ${total}`);
        break;
    case 'autobús':
        total = total + (litrosConsumidos * 55);
        console.log(`El total a pagar es: ${total}`);
        break;        
}


