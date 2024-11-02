export default class User {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public showInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`
    }
};