//Importamos el modulo fs
const fs = require('fs');

//1.leer el archivo JSON
fs.readFile('person.json', 'utf8', (err, data) => {
    if(err) {
        console.log('Error al leer el archivo JSON', err);
        return;
    };

    console.log('Contenido del archivo JSON(como texto)');
    console.log(data);
});