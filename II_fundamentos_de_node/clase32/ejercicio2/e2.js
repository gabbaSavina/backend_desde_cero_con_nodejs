const readlineSync = require('readline-sync');

const options = [
    'Milanesa con pure',
    'Guiso de lentejas',
    'Ensalada de 5 ingredientes',
    'Patamuslo con papas al horno',
];

const almuerzoSeleccionado = readlineSync.keyInSelect(options,'Selecione que desea almorzar:');

if (almuerzoSeleccionado === -1) {
    console.log('No seleccionaste ninguna opcion.');
} else {
    console.log(`Elejiste: ${options[almuerzoSeleccionado]}`);
};