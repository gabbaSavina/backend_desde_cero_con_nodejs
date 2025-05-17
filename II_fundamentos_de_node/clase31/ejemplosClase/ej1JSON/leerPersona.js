//Importamos el modulo fs
const fs = require('fs');

//1.leer el archivo JSON
fs.readFile('persona.json', 'utf8', (err, data) => {
    if(err) {
        console.log('Error al leer el archivo JSON', err);
        return;
    };

    //2.Mostyrar el contenido de JSON leido como texto
    console.log('COntenido del archivo JSON(como texto)');
    console.log(data);

    //3.Convertir la cadena de JSON en un objeto JS
    const persona = JSON.parse(data);

    //4.Mostrar el objeto JS covertido
    console.log('JSON convertido a objeto JS\n');
    console.log(persona);
    
    //5.Acceder a los valer del objeto JS
    console.log('Accediendo a los valores del objeto: ');
    console.log("nombre: ", persona.nombre);
    console.log("ciudad: ", persona.direccion.ciudad);

    //6.Modificar el objeto JS de nuevo va una cadena JSON
    persona.edad = 35;
    const nuevoJSON = JSON.stringify(persona, null, 2);//null y 2 son para formatear el Json con identificacion

    //7.Guardar el JSON modificado en un nuevo archivo
    fs.writeFile('nuevaPersona.json', nuevoJSON, (err) => {
        if (err) {
            console.log('Error al escribir el archivo JSON:', err);
            return;
        }
        console.log('JSON modificado guardado en nuevaPersona.json');
    });
});