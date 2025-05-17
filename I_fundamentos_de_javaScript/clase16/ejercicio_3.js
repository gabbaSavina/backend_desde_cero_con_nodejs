/*Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
Además de hacer esto, deberemos realizar las siguientes operaciones:
a) Añadir una vuelta al principio del array: Usamos unshift para agregar la vuelta 7 al principio del array vueltas.*/
let vueltas = [5, 8, 12, 3, 22];
vueltas.unshift(7);

//b) Eliminar la última vuelta del array: Usamos pop para eliminar la última vuelta del array y guardarla en la variable ultimaVuelta.
let ultimaVuelta = vueltas.pop(4);

//c) Verificar si la vuelta 10 está en el array y agregarla al final si no está presente: Usamos includes para verificar si la vuelta 
//10 está en el array y push para agregarla al final si no está.
let vueltasAlFinal = function() {
    if (vueltas.includes(10) === false) {
        vueltas.push(10)
    } return vueltas
};

console.log(vueltasAlFinal());
//d) Eliminar la primera vuelta del array: Usamos shift para eliminar la primera vuelta del array y guardarla en la variable primeraVuelta.
let primeraVuelta = vueltas.shift(0);

//f) Verificar si la vuelta 15 está en el array y agregarla al principio si no está presente: Usamos includes para verificar si la
//vuelta 15 está en el array y unshift para agregarla al principio si no está.
let vueltasAlPrincipio = function() {
    if (vueltas.includes(15) === false) {
        vueltas.unshift(15)
    } return vueltas
};

console.log(vueltasAlPrincipio());
//g) Calcular el nuevo total de vueltas usando reduce: Después de todas las operaciones, recalculamos el total de vueltas utilizando reduce.
let sumaVueltas = vueltas.reduce(function(acum, vuelta) {
    return acum + vuelta
});

console.log(`EL total de vuetas es:${sumaVueltas}`);