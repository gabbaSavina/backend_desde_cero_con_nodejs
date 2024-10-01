const path = require('path');

//ejemplo 1: obtener el nombre del archivo desde una ruta absoluta
const fullPath = '/home/user/docs/file.txt';
const baseName1 = path.basename(fullPath);//basename devuelve solo el nombre del archivo
console.log('Ejemplo 1 - nombre dek archivo: ', baseName1);

//ejemplo 2: obtener el nombre del archivo sin la extension
const baseName2 = path.basename(fullPath, '.txt');//saber la extencion xq no funciona si no coincide
console.log('Ejemplo 2 - nombre del archivo sin la extension', baseName2);


//ejemplo 3: uso con rutas relativas
const relativePath = 'src/utils/helper'
const baseName3 = path.basename(relativePath);
console.log('ejemplo 3 - nombre del archivo desde una ruta relativa: ',baseName3);

//ejemplo 4: obtenr el nombre de un directorio
const dirPath = 'var/www/html';
const baseName4 = path.basename(dirPath);
console.log('ejemplo 4 - Nmobre del directorio; ', baseName4);

//ejemplo 5: rutas con separadores de windows
const windowPath = 'C\\User\\Santiago Felipelli\\Documents\\claseBack.pdf';
const baseName5 = path.basename(windowPath);
console.log('Ejemplo 5 - Nombre del archivo en ruta windows: ', baseName5);
