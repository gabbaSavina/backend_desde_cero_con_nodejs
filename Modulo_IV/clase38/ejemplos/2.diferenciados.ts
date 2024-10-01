//1. any permite almacenar cualquier tipo de valor sin restriccion
let anyValue: any = 'Hola, soy any';
console.log(anyValue);
anyValue = 42;
console.log(anyValue);
anyValue = {name: 'TypeScript'};
console.log(anyValue);

//2.Unknown: Similar a any pero requiere verificacion antes de
let unknownValue: unknown = 'Hola soy unknown';
console.log(unknownValue);

//Necesitamos verificar el tipo antes de usarlo como un string
if (typeof unknownValue === 'string') {
    console.log(unknownValue.toLocaleUpperCase());
};

//3.void: se usa en funciones que no retornan valor
function logMessage(message: string): void {
    console.log(message)
}
logMessage('Esto es una funcion void');

//4. Never Representa el tipo de funciones que nunca retornan
//como aquiellas que arrojan errores o tambien tienen los
function infiniteLoop(): never {
    while (true) {
        
    }
}