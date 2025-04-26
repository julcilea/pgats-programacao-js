/**
 * Muitos tutores não fazem idéia do porte do seu Dog.
 * Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
 * - até 10Kg -> Pequeno; acima disso -> Médio
 * Use o operador para determinar o porte e exibe:
 * - nome
 * - peso
 * - porte classsificado
 * 
 * Extra: transforme a logica em uma função
 */

const classificadorDePorteAutomatico = (nome,pesoDog) => {
    console.log(`\nNome: ${nome}`)
    console.log(`Peso: ${pesoDog}`)
    console.log(`Porte: ${pesoDog < 10 ? 'Pequeno' : 'Médio'}`)
}

console.log(`======== Classificador de porte automático ===========`)
classificadorDePorteAutomatico('Bolinha', 10)
classificadorDePorteAutomatico('Madona', 9)
console.log(`======================================================`)