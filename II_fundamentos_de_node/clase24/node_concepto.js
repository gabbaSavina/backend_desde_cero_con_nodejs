/*

NODE.js = entorno de ejecuciónn de JS, fuera del navegador, es ideal para
desarrollar aplicaciones de servicios, APIs y serv. backend.

---Caracteristicas---

1. Basado en V8 de Chrome: V8 es el motor mas rápido y eficiente de codigo abierto, compila JS a
codigo maquina nativo.

2. No Bloqueante y Asincrónico: modelo de I/O(Input/Output) quiere decir que en lugar a esperar a
que una operacion termine, antes de pasar a la siguiente, Node.js puede gestionar multiples solicitudes
simultaneamente, lo cual lo hace eficiente en aplicaciones que manejan muchas conexiones al mismo tiempo.

3. Single-threaded: Aunque Node.js es single-threaded (utiliza un solo hilo de ejecución), su modelo de
ejecución basado en eventos le permite manejar muchas conexiones concurrentes sin sobrecargar el sistema.

4. Ecosistema de Módulos: Node.js tiene un ecosistema muy rico de módulos y paquetes, que se gestionan
a través de NPM (Node Package Manager). Esto facilita la integración de funcionalidades externas a tus
aplicaciones, como conectar bases de datos, crear servidores web, etc.

5. Utilizado para Desarrollo Backend: Node.js es popular para el desarrollo de aplicaciones backend,
incluyendo APIs, servicios web y aplicaciones en tiempo real como chats y juegos en línea.

6. Código Compartido entre Servidor y Cliente: Una ventaja de usar Node.js es que puedes compartir
partes del código entre el servidor y el cliente, dado que ambos utilizan JavaScript.

---------NPM--------
Node Package Manager ----> Gestor de paquetes oficial de Node.js
--------------------
Los package pueden ser: bibliotecas, herramientas, frameworks, o codigos reutilizables.

-Repositorio Central: npmjs.com se alojan millones de paquetes q se pueden instalar y usar. 

NPM se compone:
1. La pagWeb: puedes descubir nuevos paqueres y alojar los tuyos de forma publica o privada(costo).
2. La interfaz de Línea de comandos: la forma en que los desarrolladores interactuamos con NPM.
3. El registro: Base de datos de software para JS.

Principales usos:
- Instalar y gestionar paquetes y dependencias.
- Ejecutar scripts para automatizar tareas comunes.
- Actualizar dependencias de forma controlada.
- Crear y publicar paquetes de código.
- Configurar y gestionar proyectos de manera eficiente.

---Comandos Esenciales NPM---

1. npm init:
    El comando npm init es la manera estándar de inicializar un nuevo proyecto Node.js,
    configurando un archivo package.json que gestiona la información básica del proyecto y las
    dependencias necesarias. Este archivo es fundamental para trabajar con npm y gestionar adecuadamente
    un proyecto en Node.js.
    npm init -y: se realiza con valores por defecto sin responder preguntas.
2. npm install: instala paquetes.
3. npm update: actualiza paquetes instalados.
4. npm uninstall: elimina un paquete del proyecto.
5. npm run: ejecuta scripts en la seccion "scripts".
6. npx: se utiliza para ejecutar paquetes q no estan instalados globalmente.
7. npm publish: para compartir un paquete que has creado.

Paquetes Locales:
    -Son específicos para el proyecto.
    -Se declaran en package.json.
    -Útiles para bibliotecas y dependencias necesarias para ejecutar o desarrollar
    un proyecto.

Paquetes Globales:
    -Están disponibles para cualquier proyecto.
    -No se declaran en package.json del proyecto.
    -Útiles para herramientas de desarrollo, como linters (eslint),
    generadores (yo), o servidores locales (http-server).

-----Modulos----
Es cualquier archivo de Js en node.js que tiene una cierta funcionalidad.
Estos te permiten dividr tu codigo en partes más pequeñas y manejables.
Cada modulo tiene su propio ambito, evitando conflictos con otras partes del codigo.

***MODULARIZAR***
Es el proceso de dividir un sistema, aplicacion o codigo en partes más pequeñas y manejables("Modulos")
que encapsulan funcionalidades especificas y pueden ser desarrolladas, probadas y mantenidad de forma
independiente.
Mejora la organizacion, la reutilizacion, el mantenimiento, la escalabilidad, la encapsulación y la realizacion de purebas.

----------------
Sist. de Modulos
----------------

1. CommonJS (CJS)
es un sistema de módulos en Node.js que permite a los desarrolladores estructurar y organizar
su código en módulos reutilizables(c/archivo.js es considerado un modulo). Utiliza require() para importar módulos y module.exports
para exportarlos, proporcionando una forma eficiente de manejar dependencias en aplicaciones
de servidor.

ejemplo:
***math.js(archivo.js que exporta)
function add (a, b) {
return a + b;
}
function subtract(a, b) {
return a - b;
}
module.exports = { //se define que parte del codigo se exporta para ser accesible desde otros modulos
add,
subtract
};
***app.js(archivo.js que requiere)
const math = requiere('./math'); // importa el modulo completo
console.log(math.add(10, 5));      // Imprime 15
console.log(math.subtract(10, 5)); // Imprime 5

2. Modulos ES/(ECMAScrip)/ ES Modules(ESM)
es el sistema moderno desde  ECMAScript 2015 (ES6)

----Caracteristicas---
Sintaxis de Importacion y Exportacion
    import y export palabas clave
Carga Asincronica
    permite la carga dinamica de modulos(carga bajo demanda de ciertos modulos)
Archivos con exptención '.mjs'
Contexto compartido
    Los módulos ES comparten un contexto, lo que significa que las variables y
    funciones declaradas en un módulo son visibles para otros módulos a menos que se
    especifique lo contrario.

----------------
Tipos de Modulos
----------------
Nativos: m.preinstalados en node,js que proporcionan funcionalidades esenciales.
    ejemplos: fs, http, path, os-

Externos: desarrollados por terceros e instalados a traves de NPM
    ejemplos: express, lodash, axios, mongoose
Propios: creados por el desarrollador para encapsular logica especifica.
    ejemplos: operacion.js, usuarios.js, miModulo.js

*/