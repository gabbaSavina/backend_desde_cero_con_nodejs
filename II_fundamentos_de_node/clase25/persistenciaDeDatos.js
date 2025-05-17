/*
la 'persistencia de datos' se refiere a la capacidad de un sistema para almacenar datos de
manera que permanezcan disponibles incluso despues de que finalice la ejecucion de un programa
o se apague el sistema. Esto significa que los datos no se pierden y pueden ser recuperados
y utulizados en futuras sesiones o ejecuciones del programa.

Usos en el backend:
- Mantener el estado de la aplicacion entre reinicios del servidor.
- Almacebnar informacion del usuario y configuraciones.
- Guardar registros(logs) para analisis y depuracion.
- Asegurar la integridad y disponibilidad de los datos a lo largo
del tiempo.

----------------------------------
Metodos de persistencia en Node.js
----------------------------------

*****BD Relacionales (SQL)********
Las bases de datos relacionales almacenan datos en tablas con filas y columnas, y se utilizan
lenguajes de consulta estructurados (SQL) para interactuar con los datos.

*****BD no Relaciones(NoSQL)******
Las bases de datos NoSQL almacenan datos en formatos más flexibles, como documentos (JSON),
pares clave-valor, columnas anchas, o grafos. Son ideales para datos no estructurados o
semiestructurados.

****Almacenamiento en la Nube*****
Almacenar datos en servicios de almacenamiento en la nube, como Amazon S3, Google Cloud Storage,
o Azure Blob Storage, es útil para aplicaciones que necesitan escalar o acceder a los datos desde
múltiples ubicaciones.

**Persistencia mediante Archivos**
*************en Disco*************
Otra forma simple de persistencia es almacenar datos en archivos en el sistema de archivos del
servidor. Esto puede ser útil para configuraciones simples o datos de bajo volumen que no
necesitan una base de datos completa.
El modulo fs(File System) nos proporciona una API para interacturar con el sistema de archivos
del servidor.Es una solucion nativa y no requiere dependencias externas.

Caracteristicas:
    Operaciones sinconas y asincronas disponibles
    Almacena configuraciones,log, datos pequeños
    Permite operaciones CRUD(Crear, Leer, Actualizar, Borrar) en archivos y directorios
    Ofrece metodos para manejar permisos, propiedades y metadatos de archivos.

Estructura

fs.readFile(path[, options], callback)
1.path: la ruta del archivo que deseas leer en este caso porque el metodo es readfile
2.options: puedes especificar la condicion del archivo
3.callback: Una funcion que se ejecuta cuando la operacion de lectura se completa.

*/



