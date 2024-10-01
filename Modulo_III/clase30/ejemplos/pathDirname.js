const path = require('path');

//ejemplo 1: obtener el directorio contenedor de un archivo desde una ruta absoluta
const filepath = '/home/user/docs/file.txt';
const dirName1 = path.dirname(filepath);
console.log('Ejemplo 1 - directorio contenedor de file.txt: ', dirName1);

//ejemplo 2: obtener el directorios de un archivo usando una ruta relativa
const relativaPath = 'src/utils/helpers.js';
const dirName2 = path.dirname(relativaPath);
console.log('Ejemplo 2 - directorio contenedor de helpers.js: ', dirName2);

//ejemplo 3: 