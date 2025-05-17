const crypto = require('crypto');
const readlineSync = require('readline-sync');

const msgUser = readlineSync.question('Ingrese un mensaje para encriptar: ');
const hash = crypto.createHash('sha256');

hash.update(msgUser);
const hashOutPut = hash.digest('hex');
console.log('Su mensaje ha sido encriptado con Hash SHA-256\n ', hashOutPut);