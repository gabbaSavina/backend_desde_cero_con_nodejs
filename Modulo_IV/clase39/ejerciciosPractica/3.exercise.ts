/*Ejercicio 3:
Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
(string), deporte (string), y energia (number). Luego, define una función entrenar
que acepte el objeto deportista y un número de horas de entrenamiento,
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
final, muestra el estado del deportista en la consola*/

let deportista = {
    nombre:'Lionel Messi',
    deporte: "futbol",
    energia: 85
};

function entrenar(deportista: { nombre: string, deporte: string, energia: number }, horas: number): void {
    deportista.energia -= horas * 5;
    console.log(`${deportista.nombre} ha entrenado por ${horas} horas. Energía restante: ${deportista.energia}`);
}

entrenar(deportista, 2);
