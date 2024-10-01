// Ejemplo de tipos primitivos en TypeScript
//1.String
let nombre: string = 'Savina';
let saludo: string = `Hola, ${nombre}, bienvenida a TypeScript`;
console.log(saludo);

//2.number(numeros: enteros, decimales, notacion cientifica)
let entero: number = 42;
let decimal: number = 3.14;
let cinetificos: number = 1e5;
console.log('Entero:', entero);
console.log('Decimnal',decimal);
console.log('Cientifico',cinetificos);

//3.Boolean (valores logicos: true y false)
let esProfesor: boolean = true;
let tieneTitulo: boolean = false;
console.log('ES profesor?', esProfesor);
console.log('tiene titulo?', tieneTitulo);

//4.null (ausencia intencional de valor)
let valorNulo: null = null;
console.log('valor nulo:', valorNulo);

//5.undefined (valor no inicializado)
let valorIndefinido: undefined = undefined;
console.log('Valor indefinido:', valorIndefinido);

//6.Symbol(simbolo unico)
let id1: symbol = Symbol('id');
let id2: symbol = Symbol('id');
console.log('son simbolos unicos:', id1 === id2);
