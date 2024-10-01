/*Utilizando la estructura switch, crea un programa que le pida al usuario
valorar la película que acaba de ver según la siguiente escala:
✓ Muy mala.
✓ Mala.
✓ Mediocre.
✓ Buena.
✓ Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás
o te alegrás por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos
mucho."
En caso de que el usuario ingrese un valor distinto, mostrarle el
mensaje: "Ingresaste un valor inválido".
Finalmente, agradecer al usuario por su visita.*/
const prompt = require("prompt-sync")({ sigint: true });

let pelicula = prompt('Califique la pelicula que acaba de ver(muy mala, mala, mediocre,buena,muy buena): ').toUpperCase();

switch(pelicula){
    case 'MUY MALA':
        console.log('Calificaste la película como Muy Mala. Lo lamentamos mucho.');
        break;
    case 'MALA':
        console.log('que pena que no fue lo que esperabas');
        break;
    case 'MEDIOCRE':
        console.log('pareciera como que perdiste el tiempo en verla');
        break;
    case 'BUENA':
        console.log('que lindo que es disfrutar del cine')
    case 'MUY BUENA':
        console.log('que placer es ver una muy buena pelicula');
        break;
    default:
        console.log('Ingrese un dato valido.');
};

console.log("gracias por compartir tu opinión");