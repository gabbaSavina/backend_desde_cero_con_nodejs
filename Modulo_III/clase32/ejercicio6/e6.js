/*Crea un script en Node.js que permita al usuario ingresar una contraseña y un "sal" (un valor aleatorio que se usa para añadir
seguridad). Luego, genera un hash de la contraseña combinada con el "sal" usando el algoritmo SHA-256. Muestra el hash generado.*/

//1.Importar los modulos a utilizar
const readlineSync = require('readline-sync');
const crypto = require('crypto');

//2.Funcion para generar hash
function generateHash(password, salt) {
    //se crea el obj hash con el algoritmo SHA-256
    const hash = crypto.createHash('sha256');
    //se actualiza el hash con la combinacion de contr y sal
    hash.update(password + salt);
    //se devuelve el hash en formato hexadecimal
    return hash.digest('hex');
};

//3.Solicitar la entrada del usuario
const password = readlineSync.question('Ingrese su contraseña: ');
const salt = readlineSync.question('Ingrese un valor aleatorio (sal):');

//4.generar y mostrar hash
const hash = generateHash(password, salt);//se llama a la funcion
console.log(`El hash generado es: ${hash}`);//se imprime