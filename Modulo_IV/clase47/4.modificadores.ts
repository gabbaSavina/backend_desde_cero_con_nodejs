class Persona {
    private _id: number;
    private _name: string;
    private _age: number;

    constructor(id: number, name: string, age: number) {
        this._id = id;
        this._name = name;
        this._age = age;
    }

    //getter para obtener el nombre
    public get name(): string {
        return this._name;
    }

    //setter para establecer el nombre
    public set name(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.log('La edad no puede ser negativa');
        }
    }

    //metodo publico para obtener el id
    public getId(): number {
        return this._id;
    }
}

//instancia persona
const persona1 = new Persona(1, 'mariana', 30);
//falta completar