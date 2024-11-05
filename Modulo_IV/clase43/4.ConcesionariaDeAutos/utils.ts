import { Auto} from "./autos";

export function ordenarAnio(autos: Auto[]): Auto[] {
    return autos.sort((a, b) => a.anio - b.anio);
};

export function ordenarMarca(autos: Auto[]): Auto[] {
    return autos.sort((a, b) => a.marca.localeCompare(b.marca));
};

