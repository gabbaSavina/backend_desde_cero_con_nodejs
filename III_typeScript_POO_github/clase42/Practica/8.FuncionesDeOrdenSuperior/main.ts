import createMultiplier from "./higherOrderFunctions";

const multiplicarPorNueve = createMultiplier(9);
console.log(multiplicarPorNueve(5));

/*
¿Por Qué Usar Funciones de Orden Superior?
Las funciones de orden superior son muy útiles para crear código modular, reutilizable y flexible.
Algunos de sus beneficios incluyen:
- Abstracción: Permiten abstraer patrones comunes, como iteración o filtrado, sin escribir código
repetitivo.
- Reutilización: Al pasar funciones como argumentos, puedes reutilizar código para realizar
diferentes tareas.
- Composición de funciones: Facilitan la creación de flujos de datos, encadenando operaciones que
transforman o procesan datos.
*/