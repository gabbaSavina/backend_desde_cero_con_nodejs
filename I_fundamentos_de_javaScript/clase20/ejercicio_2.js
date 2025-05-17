/*) Tenemos un array en una variable librosDeJS con una lista de libros de
javascript. Queremos saber la cantidad de libros que tenemos en el array
Nos pidieron que evitemos usar la propiedad length para contar los
elementos de un array y que tenemos que usar si o si un forEach
Completá el siguiente código para que funcione el último console.log() y
muestre el mensaje Mi lista de libros de JavaScript tiene 9 libros.*/
const librosDeJS = [
    'JavaScript for Kids: A playful Introduction to Programing',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programing',
    'JavaScript: The Good Parts',
    'Programing JavaScript Applications: Robust Web Architecture whit Node, HTML5, and Moderns JS Libraries',
    'Effextive JavaScript: 68 Specific Ways to Harness the Powe of JavaScript',
    'JavaScript; The Defini5tive Guide',
    'You Don´t Know JS',
    'JavaScript Allomgé: The Six Edition',
];

let totalLibros = 0;

librosDeJS.forEach(function(libro){
    totalLibros++;
});

console.log ('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');
