//Metodos Array
let notas = [3, 5, 10, 9, 8, 8, 8];

//1.PUSH: para agregar elementos a nuestros arrays
notas.push(1);
notas.push(2);
notas.push(4);

console.log(notas);

//2.POP: para eliminar el ultimo elemento
let elUltimo = notas.pop();

console.log(elUltimo);
console.log(notas);

//3.SHIFT:se elimina el primer elemento
notas.shift();
console.log(notas);

//4.UNSHIFT: Agrega un elemento al principio
notas.unshift(1);
console.log(notas);