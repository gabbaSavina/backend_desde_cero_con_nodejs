/*Tenemos un array en una variable mix con varios elementos, de distintos
tipos de datos.
Usando filter, crear un nuevo array con todos los elementos que sean
strings y guardalo en la variable soloStrings.
Ayuda: para saber si algo es un string en javascript, podés usar typeof.
Mostrar el array resultante*/
const mix = [
    'Ut vero',
    2,
    function () { console.log('Hola mundo!') },
    56,
    'Diam rebum nonumy et',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [1, 2, 3],
    'Dolore.',
];

let soloStrings = mix.filter(string => typeof string === 'string');

console.log(soloStrings);
