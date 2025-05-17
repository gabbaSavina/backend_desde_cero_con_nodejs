var fs = require('fs'); //importamos modulo fs.

datos = "Ejemplo de datos que podemos escribir en un archivo";
        //la varible contiene los datos a persistir(guardar)

//                1P         2P        3P
fs.writeFile('archivo.txt', datos, function(err) {//err como 'error' es una convencion de nomenclatura
        //1P:se nombra al archivo 2P:la variable que contiene los 'datos' 3P:resolver errores(f.flecha)
    if(!err) {//si no es error imprime el contenido del archivo
        console.log('Los datos han sido escritos en el archivo.txt');
    } else {//si hay error se utiliza el 'throw' q crea y lanza errores personalizados
        throw err;
    }
});
