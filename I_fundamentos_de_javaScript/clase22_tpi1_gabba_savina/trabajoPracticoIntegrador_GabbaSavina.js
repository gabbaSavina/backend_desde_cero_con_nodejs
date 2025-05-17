/*1. Estructura de Datos
a) Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).*/

const prompt = require("prompt-sync")({ sigint: true });

let libros = [
    { id:1,
    titulo:'1984',
    autor: 'George Orwell',
    anio: 1949,
    genero: 'ficcion Distopica',
    disponible: true
    },
    { id:2,
    titulo:'La Casa de los Espiritus',
    autor: 'Isabel Allende',
    anio: 1982,
    genero: 'Novela',
    disponible: true
    },
    { id:3,
    titulo:'Harry Potter y la Orden del Fenix',
    autor: 'J. K. Rowling',
    anio: 2003,
    genero: 'Literatura Fantastica',
    disponible: true
    },
    { id:4,
    titulo:'Asesinato en el Orient Express',
    autor: 'Agatha Christie',
    anio: 1934,
    genero: 'Novela de Misterio',
    disponible: true
    },
    { id:5,
    titulo:'Las Puertas de la Percepcion',
    autor: 'Aldous Huxley',
    anio: 1954,
    genero: 'No Ficción',
    disponible: true
    },
    { id:6,
    titulo:'Las Dos Torres',
    autor: 'J. R. R. Tolkien',
    anio: 1979, genero: 'Literatura Fantastica',
    disponible: true
    },
    {id:7,
    titulo:'El Sabueso de los Baskerville',
    autor: 'Arthur Conan Doyle',
    anio: 1902,
    genero: 'Novela de Misterio',
    disponible: true
    },
    {id:8,
    titulo:'Caliban y la Bruja',
    autor: 'Silvia Federici',
    anio: 2004, 
    genero: 'Ensayo',
    disponible: true
    },
    {id:9,
    titulo:'The Thorn Birds',
    autor: 'Colleen McCullough',
    anio: 1977,
    genero: 'Novela',
    disponible: true
    },
    {id:10,
    titulo:'Las Arenas del Tiempo',
    autor: ' Sidney Sheldon',
    anio: 1988,
    genero: 'Ficcion de Aventuras',
    disponible: true
    },
];

/*b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros).*/

let usuarios = [
    {id: 1,
    nombre: 'Juana', 
    email: 'juanita22@gmail.com', 
    librosPrestados: []
    },
    {id: 2, 
    nombre: 'Diego',
    email: 'eldieGote@gmail.com',
    librosPrestados: []
    },
    {id: 3,
    nombre: 'Dylan',
    email: 'dylangonzaleZZ@gmail.com',
    librosPrestados: []
    },
    {id: 4,
    nombre: 'Lucia', 
    email: 'luli1987@gmail.com', 
    librosPrestados: []
    },
    {id: 5,
    nombre: 'Jazmin',
    email: 'jAzz@gmail.com', 
    ibrosPrestados: []
    },
];

/*2. Funciones de Gestión de Libros
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.*/

function agregarLibro(titulo, autor, anio, genero) {
    let id = libros.length + 1;//para que se incremente el id automaticamente
    libros.push({ titulo, autor, anio, genero, disponible: true });//adentro el push() vna todas las propiedades q tienen los objetos
    console.log(`Libro ${titulo} agregada con éxito.`);
};

/*b) Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.*/

function buscarLibro(criterio, valor) {// se pone como paramentro 'criterio,valor' haciendo referencia a una propiedad del objeto y su valor.
    let valorLower = valor.toLowerCase()//declaro la variable para que la busqueda sea mas eficiente
    let librosEncontrados = [];//almacena 
    for (let i = 0; i < libros.length; i++) {
        let libroCriterio = libros[i][criterio].toLowerCase();//declaro una variable q guarde con minusculas
        if (libroCriterio === valorLower) { //[criterio] se esta utilizando de forma dinamica ya que se puede acceder a las porpiedades del objeto que sean invocadas.
            librosEncontrados.push(libros[i]);// retorna el objeto completo si se encuentra
        };
    };
    return librosEncontrados; // retorna null si no encuentra.
};

/*c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
por título o año utilizando el algoritmo de ordenamiento burbuja
(bubble sort) y luego muestre los libros ordenados en la consola.*/

function ordenarLibros(criterioOrden) {
    let cantLibros = libros.length; // Guarda la cantidad de libros en el array 'libros'.
    // El primer 'for' controla la cantidad de pasadas necesarias para ordenar el array.
    for (let i = 0; i < cantLibros - 1; i++) { // (cantLibros -1) se usa xq en la ultima pasadas no hay necesidad de hacer comparaciones.
        // El segundo 'for' realiza las comparaciones e intercambios.
        for (let j = 0; j < cantLibros - 1 - i; j++) { // el bucle se detiene en 'cantlibros-1-i' xq con cada pasada de i los elementos mas grandes ya estan en su lugar
            let valor1 = libros[j][criterioOrden];
            let valor2 = libros[j + 1][criterioOrden];
            // Convertimos los valores a números si el criterio es 'anio'
            if (criterioOrden === 'anio') {
                valor1 = Number(valor1);
                valor2 = Number(valor2);
            };
            // Se verifica si el valor del criterio actual 'libros[j]' es mayor que el valor del criterio de 'libros[j + 1]'.
            if (valor1 > valor2) {
                // Si la condición es verdadera, los elementos se intercambian.
                let temporal = libros[j]; // Se guarda temporalmente el libro en la posición 'j'.
                libros[j] = libros[j + 1]; // Se reemplaza 'libros[j]' con 'libros[j + 1]'.
                libros[j + 1] = temporal; // Se reemplaza 'libros[j + 1]' con el valor guardado en 'temporal'.
            };
        };
    };
    console.log(`Libros ordenados por ${criterioOrden}:`); // Muestra un mensaje indicando el criterio de ordenamiento.
    console.log(libros); // Imprime el array de libros ordenado.
};

/*d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro*/

function borrarLibro(idborrar) {
    let indice = libros.findIndex(libro => libro.id === idborrar);// devuelve el 1° elemento que cumple con la condicion especificada
    if (indice !== -1){// si encontro el indice
        libros.splice(indice, 1);//elimina el indice especificado
        console.log('Libro con id ' + idborrar + ' ha sido eliminado.');
    } else {
        console.log('No se encontró un libro con el id '+ idborrar);
    };
};

/*3. Gestión de Usuarios
a) Implementar una función registrarUsuario(nombre, email) que
agregue un nuevo usuario al array usuarios.*/

function registrarUsuario(nombre, email) {
    let id = usuarios.length + 1;//para que se incremente el id automaticamente
    usuarios.push({ id, nombre, email, librosPrestados: [] });
    console.log(`Usuario ${nombre} registrado con éxito.`);
};

/*b) Implementar una función mostrarTodosLosUsuarios() que me
devuelva el array completo de usuarios*/

function mostrarTodosLosUsuarios() {
    return usuarios;//devuelve el array completo de usuarios
};

/*c) Crear una función buscarUsuario(email) que devuelva la información
de un usuario dado su email.*/

function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email === email);
};

/*d) Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado.*/

function borrarUsuario(criterioBorrar, valorBorrar) {
    // Verifica si el criterio es 'nombre' o 'email'
    if (criterioBorrar !== 'nombre' && criterioBorrar !== 'email') {
        console.log("Criterio no válido. Use 'nombre' o 'email'.");
        return;
    }
    // Filtra los usuarios que no coinciden con el criterio y valor proporcionados
    usuarios = usuarios.filter(usuario => usuario[criterioBorrar] !== valorBorrar);

    console.log('Usuarios actualizados:', usuarios);
};

/*4. Sistema de Préstamos
a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
un libro como no disponible y lo agregue a la lista de libros prestados
del usuario.*/

function prestarLibro(idLibro, idUsuario) {
    let libro = libros.find(libro => libro.id === idLibro)//buscamos el libro
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);//buscamos el usuario
    //verificamos si el libros y el usuario existen
    if(!libro) {
        console.log('Error: libro no encontrado');
        return;//se utiliza el return para detener la ejecución de la funcion cuando no se encuentra el libro.
    };
    if (!usuario) {
        console.log('Error: Usuario no encontrado.');
        return;//se utiliza el return para detener la ejecución de la funcion cuando no se encuentra el usuario.
    };
    //verificamos si el libro está disponible
    if (libro.disponible) {
        libro.disponible = false;// se marca el libro como no disponible.
        usuario.librosPrestados.push(libro.id);// se agrega a la lista de prestados del usuario.
        console.log(`Libro ${libro.titulo} es prestado a ${usuario.nombre}`);
    } else {
        console.log(`Error: El libro ${libro.titulo} no esta disponible`);
    };
};

/*b) Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario.*/

function devolverLibro(idLibro, idUsuario) {
    let libro = libros.find(libro => libro.id === idLibro);//encontramos el libro
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);//encontramos el usuario

    if (libro && !libro.disponible && libro) {//se verifica q libro existe y que no está disponible
        libro.disponible = true;//si se cumplen las condiciones se marca como disponible
        //elimina el idLibro de la lista del propietario
        usuario.librosPrestados = usuario.librosPrestados.filter( id => id !== idLibro);
        console.log(`Libro ${libro.titulo} es devuelto por ${usuario.nombre}.`);
    } else {
        console.log('Error: No se pudo completar la devolución.');
    };
};

/*5. Reportes
a) Crear una función generarReporteLibros() que utilice métodos
avanzados de arrays (.map(), .filter(), .reduce()) para generar un
reporte con la siguiente información:
✓ Cantidad total de libros.
✓ Cantidad de libros prestados.
✓ Cantidad de libros por género.
✓ Libro más antiguo y más nuevo*/

function generarReporteLibros() {
    // cantidad de libros
    let totalLibros = libros.length;
    
    // filtra los libros no disponibles y muestra la cantidad
    let librosPrestados = libros.filter(libro => !libro.disponible).length;

    //cantidad de libros por genero
    let cantidadPorGenero = libros.reduce((acc, libro) =>{
        //Verifica si el género del libros ya está en el accummulador, si no está. inicializa en 0
        acc[libro.genero] = (acc[libro.genero] || 0) + 1;
        return acc;//devuelve el cacumular actualizado para la sig. iteración.
    }, {});// el valir incial del acumulador es un obj.vacio.

    //Libro mas antiguo y más nuevo
    let libroMasAntiguo = libros.reduce((antiguo, libro) => {//busca el libro mas antiguo
        return (libro.anio < antiguo.anio) ? libro : antiguo;//compara con el libro actual y actualiza si es menor
    }, libros[0]);//el valor incial del acumulador, el primer libro del array.

    let libroMasNuevo = libros.reduce((nuevo, libro) => {//busca el libro mas nuevo
        return (libro.anio > nuevo.anio) ? libro : nuevo;//compara con el libro actual y actualiza si es mayor
    }, libros[0]);//el valor incial del acumulador, el primer libro del array.

    // Imprimir el reporte
    console.log('Reporte de Libros');
    console.log('=================');
    console.log(`Cantidad total de libros: ${totalLibros}`);
    console.log(`Cantidad de libros prestados: ${librosPrestados}`);
    console.log('Cantidad de libros por género:');
    //'Object.entries()' es un metodo que toma un objeto y devueve un array de arrays, cada subarray conitne clave y valor correspondiente
    Object.entries(cantidadPorGenero).reduce((_, [genero, cantidad]) => {//usamos reduce para iterar e imprimir cada par 'genero-cantidad'
    console.log(`  ${genero}: ${cantidad}`);//'_'representa el acumulador q no se usa
    return null; // El valor de retorno no se utiliza en este caso
    }, null);
    console.log(`Libro más antiguo: ${libroMasAntiguo.titulo} (${libroMasAntiguo.anio})`);
    console.log(`Libro más nuevo: ${libroMasNuevo.titulo} (${libroMasNuevo.anio})`);
};

/*6. Identificación Avanzada de libros
a) Implementar una función librosConPalabrasEnTitulo() que identifique
y muestre todos los libros cuyo título contiene más de una palabra
(no títulos que contengan números ni otros caracteres).*/

function librosConPalabrasEnTitulo() {
    //Se fitran los titulos con más de una palabra y sin números ni caracteres especiales
    let librosFiltrados = libros.filter(libro => {
        // Verificamos que el título contiene más de una palabra
        let palabras = libro.titulo.split(" ");
        let masDeUnaPalabra = palabras.length > 1;//palabras mayor a 1
        // Se verifica que el título no contenga números ni caracteres especiales
        let soloLetrasYEspacios = /^[A-Za-z\s]+$/.test(libro.titulo);//'/^[A-Za-z\s]+$/' es una expreción regular para verifcar que el titulo solo contiene letras
                                            //.test() es un metodo que se utiliza con expresiones regulares, devuelve un boolenao, verifica si un string coincide con el patron definido
        return masDeUnaPalabra && soloLetrasYEspacios; // Retorna true si cumple ambas condiciones
    });
    //b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
    return librosFiltrados.map(libro => libro.titulo);
};

/*7. Cálculos Estadísticos
a) Desarrollar una función calcularEstadisticas() que utilice el objeto
Math para calcular y mostrar:
✓ Promedio de años de publicación de los libros.
✓ Año de publicación más frecuente.
✓ Diferencia en años entre el libro más antiguo y el más nuevo.*/

function calcularEStadisticas() {
    //promedio de años de publicación
    let totalAnios = libros .reduce((sum, libro) => sum + libro.anio, 0);//se usa reduce para q en el callback la funcion sume los años de publicacion
    let promedioAnios = totalAnios / libros.length;// se calcula el promedio
    //año de publicacion mas frecuete
    let frecuenciaAnios = {}; //iniciamos el objeto q almacena las claves(años) y valores(cant de veces q aparece)
    libros.forEach(libro => {// iteramos sobre el array
        if (frecuenciaAnios[libro.anio]) {// se verifica si el año de publi ya existe como una clave en frecuenciaAnios
            frecuenciaAnios[libro.anio]++;// si existe se incrementa el valor
        } else {
            frecuenciaAnios[libro.anio] = 1;//si no existe se crea una nueva clave y se inicia en 1
        }
    });
    let anioMasFrecuente = Object.keys(frecuenciaAnios).reduce((a, b) => //con 'Object.keys' se obtienen todas las claves del objeto 'frecuenciaAnios', lo devueve en un array
        frecuenciaAnios[a] > frecuenciaAnios[b] ? a : b);// se usa reduce para iterar sobre el array de claves(años) y encontar el año con mayor frecuecia
        //se usa un ifternario para comparar el valor asociado a cada clave retornando la mayor>
        //cuando reduce()termina de iterar se guarda en la variable 'anioMasFrecuente' el año con la mayor frecuencia
    
    //Calcular la diferencia en años entre el libro más antiguo y el más nuevo
    let anios = libros.map(libro => libro.anio)//se usa map() para crear un nuevo array 'anios'  q extrae el valor anio del array de obj. libros
    let anioMasAntiguo = Math.min(...anios);//se utiliza 'Math.min' para encontar el valor minimo y el operador 'spread' '...anios' q descompone el array en elementos individuales para argumentos del 'Math.min'
    let anioMasNuevo = Math.max(...anios);// busca el valor maximo y '...anio' descompone el array
    let diferenciaAnios = anioMasNuevo - anioMasAntiguo;// se calcula la difrencia con una resta

    // se muesntran los resultados
    console.log(`Promedio de años de publicación: ${promedioAnios.toFixed(2)}`);//'toFixed(2)' es un metodoq convierte el numero a string con dos decimales
    console.log(`Año de publicación más frecuente: ${anioMasFrecuente}`);
    console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios} años`);
};

/*8. Manejo de Cadenas
a) Crear una función normalizarDatos() que utilice métodos de strings
para:
✓ Convertir todos los títulos a mayúsculas.
✓ Eliminar espacios en blanco al inicio y final de los nombres de
autores.
✓ Formatear los emails de los usuarios a minúsculas.*/

function normalizarDatos() {
    // Convertir todos los títulos a mayúsculas
    libros.forEach(libro => {//usamos forEach() para que el callback se ejecute en cada indice del array de objetos
        libro.titulo = libro.titulo.toUpperCase().trim();// toUpperCase y trim, coniverte mayusculas y trim elimita espacios al final y al principio
    });

    // Eliminar espacios en blanco al inicio y final de los nombres de autores
    libros.forEach(libro => {//usamos forEach() para que el callback se ejecute en cada indice del array de objetos
        libro.autor = libro.autor.trim(); //trim() borra espacios al principio y final
    });
    
    // Formatear los emails de los usuarios a minúsculas
    usuarios.forEach(usuario => {//usamos forEach() para que el callback se ejecute en cada indice del array de objetos
        usuario.email = usuario.email.toLowerCase().trim();//toLoerCase() convierte aminusculas y trim elimia espacios
    });
    return { // se retorna libros y usuarios en un objeto
        libros: libros,
        usuarios: usuarios
    };
};

/*9. Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de
opciones al usuario y permita interactuar con el sistema utilizando
prompt().
b) El menú debe incluir opciones para todas las funcionalidades
anteriores y utilizar estructuras de control (if, switch, ciclos) para
manejar la lógica.*/


function menuPrincipal() {
    let opcion;//se declara por fuera del 'dowhile' para q se vuelva a solicitar al usuario
    do { //se ejecuta hasta que el usuario decida salir
        console.log('\n--- Menú Principal ---');//'\n' se usa para generar un salto en el renglon, asi cuando se ejecuta nuevamnte el menu queda visualmente separado de la funcion anterior
        console.log('1. Agregar Libro');
        console.log('2. Buscar Libro');
        console.log('3. Ordenar Libros');
        console.log('4. Borrar Libro');
        console.log('5. Registrar Usuario');
        console.log('6. Mostrar Usuarios');
        console.log('7. Buscar Usuario');
        console.log('8. Borrar Usuario');
        console.log('9. Prestar Libro');
        console.log('10. Devolver Libro');
        console.log('11. Generar Reporte de Libros');
        console.log('12. Identificar Libros con Palabras en el Título');
        console.log('13. Calcular Estadísticas');
        console.log('14. Normalizar Datos');
        console.log('15. Salir');
        opcion = prompt('Seleccione una opción:');//el usuario elije y se pasa al switch
        
        switch (opcion) {
            case '1'://en los 'case' se usa el prompt para pedir al usuario los valores necesarios para hacer funcionar a las funciones declaradas
                let titulo = prompt("Título del libro:");
                let autor = prompt("Autor del libro:");
                let anio = parseInt(prompt("Año de publicación:"));
                let genero = prompt("Género del libro:");
                agregarLibro(titulo, autor, anio, genero);
                break;
            case '2':
                let criterio = prompt("Buscar por (titulo, autor, genero):");
                let valor = prompt(`Valor para buscar por ${criterio}:`);
                console.log(buscarLibro(criterio, valor));
                break;
            case '3':
                let criterioOrden = prompt("Ordenar por (titulo, anio):");
                ordenarLibros(criterioOrden);
                break;
            case '4':
                let idBorrar = parseInt(prompt("ID del libro a borrar:"));
                borrarLibro(idBorrar);
                break;
            case '5':
                let nombre = prompt("Nombre del usuario:");
                let email = prompt("Email del usuario:");
                registrarUsuario(nombre, email);
                break;
            case '6':
                console.log(mostrarTodosLosUsuarios()); // se usa el console.log()para llamar a la funcion ya que la misma esta hecha con un return del array usuarios
                break;
            case '7':
                let emailUsuario = prompt('Ingrese el e-mail del usuario a buscar: ');
                console.log(buscarUsuario(emailUsuario));
                break;
            case '8':    
                console.log('Borrar Usuario');
                let criterioBorrar = prompt("Ingrese el criterio de búsqueda ('nombre' o 'email'):");
                let valorBorrar = prompt(`Ingrese el ${criterioBorrar} del usuario a borrar:`);
                borrarUsuario(criterioBorrar, valorBorrar);
                break;
            case '9':
                let idLibroPrestar = parseInt(prompt("ID del libro a prestar:"));
                let idUsuarioPrestar = parseInt(prompt("ID del usuario que va a tomar prestado el libro:"));
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
                break;
            case '10':
                const idLibroDevolver = parseInt(prompt("ID del libro a devolver:"));
                const idUsuarioDevolver = parseInt(prompt("ID del usuario que va a devolver el libro:"));
                devolverLibro(idLibroDevolver, idUsuarioDevolver);
                break;
            case '11':
                generarReporteLibros();//se llama directamente a la funcion ya que el usuario no ingresa datos para ejecutarla
                break;
            case '12':
                console.log(librosConPalabrasEnTitulo());//se llama directamente a la funcion ya que el usuario no ingresa datos para ejecutarla
                break;
            case '13':
                calcularEStadisticas();//se llama directamente a la funcion ya que el usuario no ingresa datos para ejecutarla
                break;
            case '14':
                console.log(normalizarDatos());//se llama directamente a la funcion ya que el usuario no ingresa datos para ejecutarla
                break;
            case '15':
                console.log("Saliendo del sistema...");
                return;
            default:
                console.log("Opción no válida.");// caso de control de errores
                break;
        }
    } while (opcion !== 15);//se sigue haciendo el ciclo mientras no sea estrictamente 15
}

// Para ejecutar el menú
menuPrincipal();




















