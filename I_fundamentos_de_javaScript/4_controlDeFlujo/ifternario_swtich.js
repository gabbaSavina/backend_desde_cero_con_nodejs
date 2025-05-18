//if Ternario

let fruta = 'Naranja';

let resultado = fruta == 'Manzana' ? 'Buenisimo me gustan las manzanas' : 'Oh no naranjas';
/*           condicion      (if ternario)    primera expresion          : segunda expresion */      

console.log(`naranjas ${resultado}`);

/*SWITCH
una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código
según el valor de esa expresión. Es una alternativa a las múltiples sentencias if-else cuando
se necesita evaluar una variable contra varios valores posibles*/

let edad = 5;

switch (edad){            // se inicia el condicional con la palabra switch+(expresión/condición)
    case 10:
        console.log('tiene 10 años');
        break;            //cada case se separa con la palabra break
    case 5:
        console.log('Tiene 5 años');
        break;
    default:              //se usa para cuando ningun case es V, no es necesario escribir break, va al final
        console.log('Que edad tiene?')
}
