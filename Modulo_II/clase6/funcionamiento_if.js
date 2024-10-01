let edad = 19;
let acceso = ' '; //declaramos la variable acceso y le asignamos un strig vacío 
                  //con la intencion de asignarle un valor segun el resultado de los condicionantes.

if (edad < 16) {
    acceso = 'prohibido';
} else if (edad >= 16 && edad <= 18) {
    acceso = 'permitido con el acomañamiento de un mayor';
} else {
    acceso = 'permitido';
}

console.log(acceso)