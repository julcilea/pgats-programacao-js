/**
 * Crie uma função que pega uma lista de inteiros e
 * strings e retorna uma nova lista sem as strings.
 */
const listaMista = ['morango', 1, '20', 'carambola', 100, 99, 100.5];

const separarInteirosDePalavras = (listaMista) => {
    const novaLista = []

    for (const elemento of listaMista) {
        if (Number.isInteger(elemento)) {
            novaLista.push(elemento);
        }
    }

    return novaLista
}

console.log(`Lista de inteiros: [${separarInteirosDePalavras(listaMista)}]`); 

