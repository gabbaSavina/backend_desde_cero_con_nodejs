var fs = require('fs');//importamos el modulo fs

//                1P          2P       3P     a    b
fs.readFile('archivo.txt', 'utf-8', function(err, data) {
        //1P: Archivo a leer(colocar la ruta si corresponde)
        //2P: UTF-8(Unicode Transformation Format-8-bit)es el estandar de facto para la 
        //codificacion de texto en la actualidad en la web y entornos de porgramacion.
        //3P:a) obj err b) contenido del archivo leido
    if (!err) {
        console.log(data);
    } else {
        throw err;
    }
});