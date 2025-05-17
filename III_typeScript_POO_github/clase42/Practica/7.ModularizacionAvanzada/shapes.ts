export class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calcularArea(): number {
        const PI = 3.14159;
        return PI * this.radius * this.radius
    }
};

export class Rectangle1 {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calcularAreaRectangulo(): number {
        return this.width * this.height;
    }
};