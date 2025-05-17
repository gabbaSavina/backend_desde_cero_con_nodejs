class Triangle {
    private _base: number; // propiedad privada
    private _height: number;//propiedad privada

    constructor() {
        this._base = 0; //inicializada en 0
        this._height = 0;//inicializada en 0
    }

    //setter para la base, con validacion
    public set base(value: number) {
        if (value > 0) {
            this._base = value;
        } else {
            console.log('la base debe ser mayor a 0');
        }
    }

    //setter para la altura, con validacion
    public set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log('la altura debe ser mayor a 0')
        }
    }

    //metodo para calcular el area
    public calcularArea(): number {
        return(this._base * this._height) /2;
    }
}

//uso de la clase
const triangle =  new Triangle();

//usamos los setter para establecer los valores permitidos
triangle.base = 10;
triangle.height = 5;
