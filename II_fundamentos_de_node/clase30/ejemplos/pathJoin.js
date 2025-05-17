const path = require('path');// se utiliza para trabajar con ruta de archivos y directorios

//ejemplo 1: Uniendo segmentos de rutas simples
const example1 = path.join('/user', '/local', 'bin');
console.log('Ejemplo 1 - Ruta combinada: ',example1);

//ejemplo 2: eliminacion de barras redundantes
const example2 = path.join('/user/', '/local', 'bin/');
console.log('Ejemplo 2 - Ruta normalizada sin barras redundantes: ',example2);

//Ejemplo 3: normalizando rutas con '..'(subir directorio)
const example3 = path.join('/user', 'local', '..', 'bin');
console.log('ejemplo 3 - ruta normalizada con ".." : ', example3);

//ejemplo 4: construccion de una ruta relativa multiplataformas
const example4 = path.join('docs', 'projects', 'index.html');
console.log('Ejemplo 4 - Ruta relativa: ', example4);

