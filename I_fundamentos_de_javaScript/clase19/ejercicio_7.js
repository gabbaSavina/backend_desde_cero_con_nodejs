//7) Realizar una función que, dada una lista, devuelva una nueva lista
//cuyo contenido sea igual a la original pero invertida.

let listaDietetica = ['Nueces', 'Semillas de Girasol', 'Mix de cereales', 'Quinoa', 'Fecula de Mandioca'];

function revertirLista() {
    let listaRevertida = [];
    // inicializa un bucle desde el último índice del array listaDietetica y se desplaza hacia el principio.
    for(let i = listaDietetica.length -1; i >= 0; i--) {
        listaRevertida.push(listaDietetica[i]);
    }
    return listaRevertida;
}

console.log(revertirLista());