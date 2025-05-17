//Comparacion entre for in y for of
//ejemplo 1
let auto = ['Toyota', 'Honda', 'Ford'];

console.log('=== RECORRIDO DE UN ARRAY DE AUTOS ===');

//uso de for in(recorre indices)
console.log("Usando for in - Indice");
for (let indice in auto) {
    console.log(`Auto: ${indice}, Auto: ${auto[indice]}`);
}