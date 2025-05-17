const readlineSync = require('readline-sync');
const crypto = require('crypto');

//1.Funcion para cifrar el texto
function encrypt(text, key, iv) {//parametros: text(lo q ingresa el usuario), key(clave para cifrar)y iv(vector de inicializacion).
    //se crea el objeto ciper utilizando el algoritmo AES-256-CBC.
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    //se utiliza el metodo .update() para cifrar la primera parte
    let encrypted = cipher.update(text, 'utf8', 'hex');
    //se completa el cifrado y se concatena cualquier dato pendiente q quede con .final()
    encrypted += cipher.final('hex');
    return encrypted;
};

//2.Funcion de descrifrado
function decrypt(encrypted, key, iv) {
    //se crea un obj 'deciper' q funciona para descrifrar
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    //se descifra la primera parte
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    //se completa el proceso
    decrypted += decipher.final('utf8');
    return decrypted;
};

//3. generacion de clave y IV
//clave para cifrar yt descrifrar
const key = crypto.randomBytes(32);//Clave de 32 bytes(256 bits)
//Vector de inicializacion aleatorio necesario para el cifrado con el algoritmo AES-256-CBC
const iv = crypto.randomBytes(16);// clave de 16 bytes(128 bits)

//4.Interaccion con el usuario
const inputText = readlineSync.question('Ingrese un texto para cifrar: ');

//5.Cifrar el texto ingresado
const encryptedText = encrypt(inputText, key, iv);// se llama a la funcion
console.log(`texto cifrado: ${encryptedText}`);//Se imprime

//6.Descifrar el texto
const decrytedText = decrypt(encryptedText, key, iv);
console.log(`Texto descifrado: ${decrytedText}`);


