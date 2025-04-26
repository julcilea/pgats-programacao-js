/**
 * 
 */

// Funcao nomeada
function exibirNomeDog(nome){
    console.log(`Nome: ${nome}`)
}

// Funcao nomeada, com parametro, com retorno default
function exibirPorteDoDog(porte = "ND"){
    console.log(`Porte: ${porte}`)
}

// Função nomeada, com parametro, com retorno
function obterNomeDogFormatado(nome){
    return nome.toUpperCase()
}

function obterObjetoDog(){
    return {
        nome: 'Madora',
        peso: 9
    }
}

function listarDeObjetosDog(){
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

function listarNomesDog(){
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