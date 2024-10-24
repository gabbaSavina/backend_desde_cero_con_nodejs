//Funcion basica qwue suma dis numeros
function sumar1 (a: number, b: number): number {
    return a + b;
};

//funcion que muestra un mensaje (sin retorno)
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
};

//funcion con parametro opcional
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}`
    }
    return `Hola, ${nombre}`;
};

//funcion con valir predeterminado
function despedirse(nombre: string, despedida: string = "Adiós"): string {
    return `${despedida}, ${nombre}`;
};

//funcion que acepta un numero variable de argumentos parametros rest(...)
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
};

//Funcion flecha para multiplicar dos numeros
const multiplicar = (a: number, b: number): number => a * b;

//ejecucuion de las funciones
let resultadoSuma = sumar1(3,4);
mostrarMensaje('Este es un mensaje ern la consola');
let saludo1 = saludar('Ana', 'Buenos dias');
let despedida = despedirse('LUcia');
let sumaTotal = sumarTodos (1, 2, 3, 4);
let resultadoMultiplicacion = multiplicar(5,6);

//mostrar los resultados en consola
console.log(`Resultado de sumar ${resultadoSuma}`);
console.log(saludo);
console.log(despedida);
console.log(`Resultado de sumar todos: ${sumaTotal}`);
console.log(`Resultado de multiplicar: ${resultadoMultiplicacion}`);