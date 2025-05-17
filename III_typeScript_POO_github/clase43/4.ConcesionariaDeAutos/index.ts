import { Concesionaria } from './concesionaria';
import { Auto } from './autos';

const concesionaria = new Concesionaria();

const auto1: Auto = { marca: 'Toyota', modelo: 'Hilux', anio: 2022, color: 'Gris' };
const auto2: Auto = { marca: 'Ford', modelo: 'Focus', anio: 2018, color: 'Negro' };

concesionaria.agregarAuto(auto1);
concesionaria.agregarAuto(auto2);

console.log('Inventario sin ordenar:');
concesionaria.mostrarInventario();

concesionaria.ordenarInventario('anio');
console.log('Inventario ordenado por año:');
concesionaria.mostrarInventario()