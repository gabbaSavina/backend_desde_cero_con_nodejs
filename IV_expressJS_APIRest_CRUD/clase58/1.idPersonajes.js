// Consumo de una API con Parametrizacion
// Descripcion: Modificar la funcion para recibir un id como
// parametro y asi hacer la funcion reutilizable para distintos personajes
// Solicitar datos de diferentes personajes de la API de Star Wars
// pasando un id como argumento.
// Crear una funcion fetchCharater(id).Validar el id y lanzar un error si no es valido

// Definimos una funcion asincronica llamada fetchCharacter que recibe un paramatro 'id'
async function fetchCharacter(id) {
    try {
        //Validamos si el 'id' no fue proporcionado, lanzamos un error con un mensaje.
        if (!id) throw new Error ('No ID provided');

        // Hacemos una solicitud a la API de Star Wars usando el ID proporcionado.
        const response = await fetch(`http://swapi.dev/api/people/${id}/`);

        // verificacmo si la respuesta no fue exitosa(status diferente de 200), lanzamos un error.
        if(!response.ok) throw new Error(`Character not found: ${response.status}`);

        //Convertimos la respuesta a formato JSON para obtener los datos del personaje.
        const character = await response.json();
        
        // Imprimimos en consola los datos del personaje.
        console.log('Character data:', character);
    } catch (error) {
        //Capturamos cualquier error ocurrido en el bloque try y lo mostramos en la consola.
        console.error('Error:', error.message)
    }
}

// llamamos a la funhcion fetchCharacter pasando el ID del personaje (en este caso, 3).
fetchCharacter(3); // cambia el ID para porbar otros personajes