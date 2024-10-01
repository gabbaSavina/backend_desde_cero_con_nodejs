//Forma Clasica

function sumar(a, b) {
    return a + b;
}
console.log(sumar(2,4)); // resultado:6

// ES6 Arrow Function
let sumar1 = (a,b) => a + b;
console.log(sumar1(2, 4)); //resultado:6

// Arrow Parametros: ej de una funcion que retorne la mitad de un numero
let laMitad = numero => numero / 2; 
            //por ser un solo paramentro no va con parentesis.
console.log(laMitad(8));

// ej de funcion arrow division
let dividir = (numeroA, numeroB) => numeroA / numeroB; //no necesita el return porque solo es una operacion'
console.log(dividir(20, 4));