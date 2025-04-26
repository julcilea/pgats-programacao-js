/**
 * Calculadora de ração diária
 * 
 * Crie um script que receba o peso do dog em Kg + estoque atual de ração em gramas. Calcule a
 * quantidade diária de ração com base na segunte fórmula: Gramas por dia = peso Kg x 30 gramas
 * Exiba:
 * - Nome do dog
 * - Peso
 * - quantidade de ração recomendada por dia
 * - Quantos dias o estoque atual vai durar
 */

function calculadoraRacaoDiaria(nome,pesoDog,estoqueAtual){
    let quantidadeDiariaRacao = pesoDog * 30
    let duracaoEstoqueAtual = estoqueAtual / quantidadeDiariaRacao

    console.log(`Nome: ${nome}`)
    console.log(`Peso: ${pesoDog}`)
    console.log(`Quantidade de ração recomendada por dia: ${quantidadeDiariaRacao} grama(s)`)
    console.log(`Quantidade de ração no estoque atual: ${estoqueAtual} grama(s)`)
    console.log(`Quantidade dias o estoque atual vai durar: ${Math.floor(duracaoEstoqueAtual)} dia(s)`)

}

console.log(`======== Calculadora de ração diaria ===========`)
calculadoraRacaoDiaria('Bolinha', 1, 1000)
calculadoraRacaoDiaria('Madona', 6, 1000)
calculadoraRacaoDiaria('Leão', 14, 1000)
console.log(`================================================`)