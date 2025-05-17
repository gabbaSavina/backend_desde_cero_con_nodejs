/*Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
adolescente, adulto o adulto mayor*/
const prompt = require("prompt-sync")({ sigint: true });

//Solicitar al usuario la edad
let edad = [parseInt(prompt('Ingrese su edad: '))];

//funcion flecha
const clasificacion = (edad) =>{
    if(edad <=12){
        return ('Segun tu edad, eres un niño');
    }else if (edad >=13 && edad <= 17){
        return('Segun tu edad, eres un adolecente');
    }else if (edad >=18 && edad <= 65){
        return('Segun tu edad, eres un adulto.')
    }else {
        return('Segu tu edad, eres un adulto mayor.')
    }
}
//imprime en consola(llamado de la funcion)
console.log(clasificacion(edad));
