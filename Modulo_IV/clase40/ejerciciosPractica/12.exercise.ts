//Ejercicio 12: Uso de tuplas para almacenar información personal
//1. Crea una tupla para almacenar el nombre (string), la edad (número) y el
//país de origen (string) de una persona.
let usuarioApp: [string, number, string];

//2. Inicializa la tupla con los valores "Juan", 30, "Argentina".
usuarioApp = ['Juan', 30, 'Argentina'];
//3. Cambia el país de origen a "Brasil" y muestra por consola la tupla
//actualizada.
usuarioApp[2] = 'Brasil';
console.log(usuarioApp);

//4. Desestructura la tupla para obtener el nombre y la edad, y muestra esos
//valores por consola.
let [ nombreUsuario1, edad, Pais ] = usuarioApp;
console.log(`Usuario:${nombreUsuario1}\n Edad:${edad}`);