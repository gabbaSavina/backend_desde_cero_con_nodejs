//definimos la vista de respuesta, que se encarga de formatear las respuestas que se envian al cliente
//esta v ista toma los datos y los convierte en un formato adecuado para la comunicacion
const responseFormat = {

    //metodo para formatear las respuestas
    //este metodo convierte los datos en una cadena JSON con una estructura legible
    formatResponse: (data) => {
        //convertimos los datos a una cadena JSON utilizando 'JSON.stringify'
        //El primer argumento es el objeto de datos, el segundo es 'null' (no se usa un reemplazo),
        //y el tercer argumento es '2' (para agregar indentacion de dos espacios)
        //Esto produce una cadena JSON bien formateada, con una estructura facil de leer
        return JSON.stringify(data, null, 2);
    }
};

//exportamos la vista de respuesta para que pueda ser utilizada en otras partes de la aplicacion
module.exports = responseFormat;
