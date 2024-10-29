// Definición de un enum numérico
enum Colores {
    Rojo,    // 0
    Verde,   // 1
    Azul,    // 2
}

// Acceder a los valores del enum
let colorFavorito: Colores = Colores.Verde;
console.log('Color favorito (por número):', colorFavorito); // Imprime el índice

// Acceder al nombre del valor por su índice
console.log('Nombre del color por índice:', Colores[colorFavorito]); // Imprime "Verde"

// Definición de un enum de cadenas
enum Direcciones {
    Norte = "N",
    Sur = "S",
    Este = "E",
    Oeste = "O"
}

// Asignar un valor del enum a una variable
let direccionViaje: Direcciones = Direcciones.Norte;
console.log('Dirección del viaje:', direccionViaje); // Imprime "N"

//Un enum es una forma de definir un conjunto de valores constantes.
//Los enum pueden ser numéricos (valores por defecto) o de cadenas (personalizados).
//Son útiles para representar grupos de opciones, como roles, días de la semana, estados, direcciones, etc.
//Mejoran la legibilidad del código y permiten hacer referencias más claras a valores constantes.