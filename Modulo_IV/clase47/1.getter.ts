class Rectangle {
    private _width: number;//porpiedad privada
    private _height: number;//propiedad privada

    constructor (width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    //getter para el area del rectangulo
    public get area(): number {
        return this._width * this._height; //devolvemos el area calculada
    }

    //getter para obtener la altura
    public get height(): number {
        return this._height;
    }

    // Getter para obtener el ancho
    public get width(): number {
        return this._width;
    }
};

// Usamos la clase Rectangulo
const rect = new Rectangle(10, 5);
// Accedemos a los valores usando los getter
console.log(`Ancho ${rect.width}`);
console.log(`Altura ${rect.height}`);
console.log(`Area ${rect.area}`);
//rect._width = 20; // No podemos modificar directamente las prop privadas
