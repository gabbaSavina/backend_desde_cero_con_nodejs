/*
***Modulo Nativo fs - File System***
permite trabajar directamente con el sistema de archivos.

---Operaciones Basicas---
1. Leer Archivos:
    te permite abrir y leer el contenido de archivos de texto, imágenes, o cualquier otro tipo
de archivo que necesites en tu aplicación.
*/
//Importa el modulo 'fs' que permite trabajar con el sistema de archivos
const fs = require('fs');

//Utiliza el metodo '.readFile' para leer el contenido de un archivo de manera asincronica.
//'archivo.txt' es el nombre del archivo a leer.
//'utf8' es el formato de codificacion de caracteres para interpretar el contenido como texto.
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    //si ocurre un error durante la lectura, 'err' contendrá informacion sobre el error.
    if(err) {
        //muestra el mensaje de error en la consola.
        console.error('Error al leer el archivo: ', err);
        //detiene la ejecución de la funcion si hay un error.
        return;
    }
    //Si no huebo errores, muestra el contenido del archivo en la consola.
    console.log('Contenido del archivo: ', data);
});

/* 
2. Escribir en Archivos:
    Puedes crear nuevos archivos o modificar el contenido de archivos existentes.
    Esto es útil para almacenar datos, guardar configuraciones, o generar reportes desde tu
    aplicación.*/

//usa el metodo '.write.file' del modulo 'fs' para escribir en un archivo
fs.writeFile('archivo.txt', '¡Hola, Mundo!', (err) => {
    //si ocurre un error durante la escritura, se maneja aqui
    if (err) {
        //Muestra el error en la consola
        console.log('Error al escribir en el archivo: ', err);
        return;//Termina la ejecución de la funcion si hay error
    }
    //si no hay errores, muestra un mensaje de exito en la consola
    console.log('Archivo guardado con exito');
});

/*
3. Crear y Leer directorios(carpetas):
    Además de trabajar con archivos individuales, fs te permite crear directorios (carpetas) y leer
el contenido de un directorio para ver qué archivos contiene.
*/

//utilizamos el metodo '.mkdir' para cear una nueva carpeta
fs.mkdir('nueva_carpeta', (err) => {
    if (err) {
        console.error('Error al crear la carpeta: ', err);
        return;//Termina la ejecución de la funcion si hay error
    }
    console.log('Carpeta creada con exito')//si se creo con exito muestra el msj.
});

//utilizamos el metodo '.readdir' para leer adentro de la carpeta
fs.readdir('.', (err, files) => {//lee la c arpeta actual('.')
    if (err) {
        console.error('Error al leer la carpeta: ', err);
        return//termina la ejecucion si hubo error
    }
    console.log('Contenido del directorio: ', files);//muestra la lista de archivos y carpetas
});

/*
4. Monitoreo de Archivos:
    Puedes usar fs para vigilar cambios en archivos específicos, lo cual es útil para crear
    aplicaciones que reaccionen a la modificación de archivos, como por ejemplo, recompilar
    código automáticamente cuando un archivo fuente cambia.
*/

//usa el metodo '.watch' del modulo 'fs' para vigilar el arcihvo
fs.watch('archivo.txt', (eventType, filename) => {
    //verifica si se ha porporcionado el nombre del archivo(filename) en el evento.
    if (filename) {
        //muestra en la consola el nombre del archivo y el tipo de evento.
        console.log(`${filename} ha sido modificado. Evento: ${eventType}`)
    }
})

