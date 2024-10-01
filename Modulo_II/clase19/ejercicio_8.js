/*8) Realizar una función que escriba una pirámide del 1 al 30 de la
siguiente forma:
1
22
333
4444
55555
666666*/

function realizarPiramide() {
    let piramide = '';//declara una cadena vacía que almacenará la pirámide
    for (let i = 1; i <= 6; i++) {
        //convierte el número i a una cadena, la repite i veces y añade un salto de línea ('\n')
        piramide += i.toString().repeat(i) + '\n';
    }
    return piramide;
}

console.log(realizarPiramide())