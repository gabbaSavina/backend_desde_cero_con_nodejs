import { Auto } from "./autos";
import { ordenarAnio, ordenarMarca } from './utils';

export class Concesionaria {
    private inventario: Auto[] = [];

    agregarAuto(auto: Auto): void {
        this.inventario.push(auto)
    }

    eliminarAuto(modelo: string): void {
        this.inventario.filter(auto => auto.modelo !== modelo);
    }

    mostrarInventario(): void {
        this.inventario.forEach(auto => {
            console.log(`${auto.marca} ${auto.modelo}${auto.anio}- Color: ${auto.color}`)
        })
    }

    ordenarInventario(criterio: 'marca' | 'anio'): void {
        if(criterio === 'marca') {
            this.inventario = ordenarMarca(this.inventario);
        } else {
            this.inventario = ordenarAnio(this.inventario);
        }
    }
};

