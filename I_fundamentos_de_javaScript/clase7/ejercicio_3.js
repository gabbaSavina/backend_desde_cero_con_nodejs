const prompt = require("prompt-sync")({ sigint: true });

/*1.Crea una constante llamada EDAD_MINIMA y otra llamada
EDAD_MAXIMA, a las cuales les asignarás los valores numéricos
18 y 99 respectivamente.*/

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

//2.Pide al usuario que ingrese su edad

usuarioEdad = parseInt(prompt("Ingrese su edad: "));
while (isNaN(usuarioEdad)){                                     //valiación
    console.log("Por favor ingrese un dato válido.")
}

if (usuarioEdad >= EDAD_MINIMA && usuarioEdad <= EDAD_MAXIMA){
    console.log("Acceso permitido");
} else {console.log("Acceso denegado")};

