/*Realiza el registro en la app de "la fiamberia de Monica", de esta forma te enteras los descuentros
y las promociones en productos y  medios de pagos.*/

const prompt = require("prompt-sync")({ sigint: true });              //para activar la biblioteca

//1. instalar la app
let instalarApp = prompt("¿Tienes instalada la app de la fiamberia de Monica? Responde S o N : ").toUpperCase();    //toUpperCase: convierte la respuesta en mayusculas
if (instalarApp === "S"){
    console.log("Que bien! Continua con el registo.");
}else if(instalarApp === "N"){
    console.log("Por favor instala la app, disponible en playStore o AppleStore");
}

while( instalarApp != "S" && instalarApp != "N"){                                               //el bucle WHILE ejecuta repetidamente un codigo MIENTRAS LA CONDICIÓN SEA VERDADERA
    console.log("Ingrese un dato valido para poder continuar");
    instalarApp = prompt("¿Tienes instalada la app de la fiamberia de Monica? Responde S o N : ").toUpperCase();
}

//2.1 registro email
console.log("Gracias por instalar nuestra app, por favor completa el registro para acceder a los beneficios");
let eMail = prompt("Ingresa tu dirección de correo electrónico.(Ej: aa@aa): ");
//acá para validar email podría utilizar una FUNCIÓN, pero como todavia no lo vimos, lo dejo para despues.

console.log(`Hola ${eMail}! Por favor continua con el registro`);     //utilizo ${} dentro del string `` para llamar a la variable

//2.2 Nombre y apellido
let nombreYapellido = prompt("Ingresa tu nombre y apellido separados por una ,: ");
console.log(`${nombreYapellido}, tus datos estan seguros con nosotros, por favor continua el registro!Gracias`);

//2.3 Fecha de nacimiento
let fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento en el formato DD-MM-AAAA:");
////acá para validar fechaDeNacimiento podría utilizar una FUNCIÓN, pero como todavia no lo vimos, lo dejo para despues.

console.log(`Recuerda que para participar de los sorteos debes ser mayor de 18 años.`, fechaDeNacimiento);

//2.4 Lugar de residencia
let paisResidencia = prompt("Ingrese su pais de residencia: ").toUpperCase();
// acá para validar paisResidencia podría utilizar una FUNCIÓN, pero como todavia no lo vimos, lo dejo para despues
if (paisResidencia === "ARGENTINA"){
    console.log("ya te ecuentras registrado. Por favor dirigete al buscador de promos.gracias");
}else {
    console.log("lo sentimos, los descuentos, promociones y sorteos son válidos para residentres de Argentina.");
}
//3 Buscador de promos
console.log("buscador de promos por día")

promosPorDias = prompt("Ingrese el día de la semana: ").toUpperCase();
if (promosPorDias == "LUNES" || promosPorDias == "JUEVES"){
    console.log("20% de descuento en salames PALADINI");
}else if(promosPorDias == "MARTES" || promosPorDias == "MIERCOLES"){
    console.log("20% en queso regianito TREGAR");
}else if(promosPorDias == "VIERNES" || promosPorDias == "SABADO"){
    console.log("Con la compra de 2 sixpack de quilmes, llevate un paquete pequeño de mani sin cargo");
}else if(promosPorDias == "DOMINGO"){
    console.log("20% de descuento en pastas YULY");
}else{
    console.log("ingrese un dia valido de la semana");
}