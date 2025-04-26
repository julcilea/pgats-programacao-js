/**
 * () => {}
 */

// Funcao nomeada
const exibirNomeDog = (nome) => {
    console.log(`Nome: ${nome}`)
}

// Funcao nomeada, com parametro, com retorno default
const exibirPorteDoDog = (porte = "ND") => {
    console.log(`Porte: ${porte}`)
}

// Função nomeada, com parametro, com retorno
const obterNomeDogFormatado = (nome) =>{
    return nome.toUpperCase()
}

const obterObjetoDog = () => {
    return {
        nome: 'Madora',
        peso: 9
    }
}

const listarDeObjetosDog = () => {
    return [
        {
          nome: 'Madona',
          peso: 9
        },
        {
          nome: 'Branquinha',
          peso: 8
        }
    ]
}

const listarNomesDog = () => {
    return [
        'Madora',
        'Branquinha',
        'Bolinha'
    ]
}

exibirNomeDog("Pipoca")
exibirPorteDoDog()
console.log(`Nome formatado: ${obterNomeDogFormatado("Madona")}`)
console.log("obterObjetoDog: ", obterObjetoDog())
console.log("listarDeObjetosDog: ", listarDeObjetosDog())
console.log(`listarNomesDog: ${listarNomesDog()}`)