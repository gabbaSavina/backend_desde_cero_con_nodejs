/*
Son modulos o paquetes de codigo que un proyecto necesita para funcionar correctamente.
ej: como manejar solicitudes HTTP, conectar a una base de datos, procesar archivos,
entre otras funciones.

Estas dependencias se declaran en el archivo package.json y pueden ser gestionadas facilmente
con NPM.

------------Dependencias de producción(dependencies)------------
Son módulos que tu aplicación necesita para 'funcionar en producción.'

Estos módulos son esenciales para que el código principal de tu aplicación funcione
correctamente.

Ejemplo: Si tu aplicación utiliza express para manejar solicitudes HTTP, express sería una
dependencia de producción.

Cómo se declaran: En el archivo package.json, bajo la clave "dependencies".

-------------Dependencias de Desarrollo (devDependencies)----------
Son módulos que solo son necesarios durante el 'desarrollo del proyecto'.
• No son requeridos en el entorno de producción.

Estas dependencias suelen incluir herramientas como linters, compiladores, y test
frameworks.

Ejemplo: eslint para el linting del código, mocha para realizar pruebas.

Cómo se declaran: En el archivo package.json, bajo la clave "devDependencies"


*/