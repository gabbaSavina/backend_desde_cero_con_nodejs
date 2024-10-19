let persona = {
    nombre: 'Ana',
    edad: 25,
    pais: 'Argentina'
};

// Claves del objeto
//Devuelve un array con las claves (o nombres de las propiedades) de un objeto.

const keys = Object.keys(persona);
 console.log("Claves del objeto:", keys); // ['nombre', 'edad', 'pais']

// Valores del objeto
//Devuelve un array con los valores de las propiedades de un objeto.

const values = Object.values(persona);
 console.log("Valores del objeto:", values); // ['Ana', 25, 'Argentina']

// Congelar el objeto
//Congela un objeto, lo que significa que no se pueden añadir, eliminar
//ni modificar sus propiedades.

Object.freeze(persona);
 //persona.edad = 30; // Esto no tendrá efecto porque el objeto está congelado
 console.log("Edad después de intentar modificar:", persona.edad); // 25

// Convertir a un array de pares clave-valor
//Devuelve un array de arrays, donde cada subarray contiene la clave y
//el valor de una propiedad del objeto

const entries = Object.entries(persona);
console.log("Array de pares clave-valor:", entries); 
// [['nombre', 'Ana'], ['edad', 25], ['pais', 'Argentina']]

// Crear un objeto a partir de pares clave-valor
//Convierte un array de pares clave-valor en un objeto.Es la operación inversa de Object.entries().

const nuevoObjeto = Object.fromEntries(entries);
console.log("Nuevo objeto creado:", nuevoObjeto); 
// { nombre: 'Ana', edad: 25, pais: 'Argentina' }
