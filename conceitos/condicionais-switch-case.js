/**
 * No JavaScript, o comando switch-case é utilizado para executar diferentes partes de código com base no valor de uma expressão. Aqui estão as condições e tipos de comparações que podem ser usadas com switch-case:

Comparação Estrita (===): O switch compara o valor fornecido para o switch com cada case utilizando comparação estrita. Isso significa que tanto o valor quanto o tipo devem ser iguais. 

Valores Primitivos: Você pode usar switch-case com valores primitivos, como:
Números
Strings
Booleanos

Expressões: A expressão no switch pode ser uma variável ou uma expressão que retorna um valor (como uma chamada de função).

Case Padrão (default): Quando nenhum dos casos corresponde à expressão do switch, o bloco default (opcional) é executado.

Casos Múltiplos: Você pode listar vários valores para um único bloco case, permitindo que vários valores sejam tratados da mesma maneira.
 */

const peso = 10

switch(peso){
    case 10:
        console.log(`porte: P`)
        break
    case 20:  
        console.log(`porte: M`)
        break  
    case 30:  
        console.log(`porte: G`)
        break 
    default:
        console.log(`porte: ND`)     
}

switch(true){
    case peso >= 10:
        console.log(`porte: P`)
        break
    case peso >= 20:  
        console.log(`porte: M`)
        break  
    case peso >= 30:  
        console.log(`porte: G`)
        break 
    default:
        console.log(`porte: ND`)     
}