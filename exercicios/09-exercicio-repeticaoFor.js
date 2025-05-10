/**
 * Controle de petiscos
 * 
 * Crie um script que receba uma quantidade de petiscos e dê 1 por vez ate o dog 
 * estiver satisfeito.
 * use uma estrutura for contado.
 * 
 * Exiba:
 * Cada vez que o petisco for entregue
 * Quando o Dog Estiver satisfeito(que é quando o petisco acabar)
 * 
 * Extra: transforme a logica em uma função ( da forma que conseguir)
 */

function controleDePetiscos(quantidadePetiscos) {
    for (let i = 1; i <= quantidadePetiscos; i++) {
        console.log(`Petisco ${i} entregue.`)
    }
    console.log("O Dog Está satisfeito, todos os petiscos foram entregues.")
}

controleDePetiscos(5)



