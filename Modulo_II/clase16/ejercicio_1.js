/*Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del aeropuerto
y, a modo de travesura, queremos adelantar una hora cada partida. 
Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.
Además de hacer esto, deberemos realizar las siguientes operaciones:*/

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(adelanto){
    return adelanto -1;
});

console.log(horariosAtrasados);

//a)Añadir un nuevo horario al principio de la lista: Usamos unshift para agregar el horario 10 al principio.
horariosAtrasados.unshift(10);
console.log(horariosAtrasados);

//b)Eliminar el último horario de la lista: Usamos pop para eliminar el último horario y lo guardamos en ultimoHorario.
let ultimoHorario = horariosAtrasados.pop();
console.log(ultimoHorario);

//c)Verificar si el horario 14 está en la lista y agregarlo al final si no está presente: Usamos includes para verificar si 14 está en la lista
//y push para agregarlo si no está.
if (horariosAtrasados.includes(14)){
    console.log(horariosAtrasados)
} else {
    horariosAtrasados.push(14);
    console.log(horariosAtrasados)};

//d)Encontrar la posición del horario 18 y eliminarlo si está presente: Usamos indexOf para encontrar la posición de 18 y splice para eliminarlo
//si está presente.
horariosAtrasados.indexOf(18);
if (horariosAtrasados.indexOf(18) === -1){
    console.log('EL horario de partida no es valido');
} else {
    horariosAtrasados.splice(18);
};

//e)Añadir el horario eliminado en el paso 2 al final de la nueva lista de horarios atrasados: Usamos push para agregar el ultimoHorario
//(adelantado una hora) al final de horariosAtrasados.
horariosAtrasados.push(ultimoHorario);

//f)Mostrar la lista final de horarios atrasados: Mostramos la lista por consola.
console.log(horariosAtrasados);

//g)Eliminar el primer elemento de la lista de horarios atrasados: Usamos shift para eliminar el primer elemento.
let primerHorario = horariosAtrasados.shift();
console.log(horariosAtrasados);

//h)Verificar si el horario 9 está en la lista y agregarlo al principio si no está presente: Usamos includes para verificar si 9 está 
//en la lista y unshift para agregarlo si no está.i)Por último, mostrar la lista final después de todas las operaciones*/
if (horariosAtrasados.includes(9)){
    console.log(horariosAtrasados)
} else {
    horariosAtrasados.unshift(9);
    console.log(horariosAtrasados)};

