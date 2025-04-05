/**
 * O dono irá informar o nome, idade, peso, raça e se é adotado ou não
 * a tag deve ter: O nome em letras maiúsculas e a raça com a primeira letra maiúscula
 */

const dog = { 
    nome: 'Leão',
    idade: 14,
    peso: 10,
    raca: 'pastor alemão',
    adotado: true
}

const statusAdocao = dog.adotado ? "Sim" : "Não";

console.log(`====== Tag Indetificação Dog =======`)
console.log(`Nome: ${dog.nome.toUpperCase()}`)
console.log(`Raça: ${dog.raca.charAt(0).toUpperCase() + dog.raca.slice(1).toLowerCase()}`)
console.log(`Peso: ${dog.peso}`)
console.log(`Adotado: ${statusAdocao}`)
console.log(`====================================`)
