//clase base: Personaje
class Personaje {
    //metodo que sera sobreescrito por la subclases para atacar
    atacar(): void {
        console.log("el personaje ataca");
    }

    //metodo que sera sobreescrito para mover al personaje
    mover(): void {
        console.log(`el personaje se mueve`);
    }

    //metodo que sera sobreescrito para mover al personaje
}