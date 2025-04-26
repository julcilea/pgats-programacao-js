/**
 * Exercício Individual
Programação para Automação de Testes
Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade.
  
  idade 1 + porte M = nao
  idade 2 + porte M = sim, pela idade
  idade 2 + porte P = sim, pela idade
  idade 1 + porte P = sim, pelo porte
 */

const idadeMinima = 2  

function validarAdocao(nome,idade,porte){
  let statusAdocao = idade >= idadeMinima || porte === 'P' ? 'Liberado para adoção' : "Não pode ser adotado"
  console.log(`Nome: ${nome.toUpperCase()}`)
  console.log(`idade: ${idade}`)
  console.log(`Peso: ${porte}`)
  console.log(`Adotado: ${statusAdocao}`)
}

console.log(`======== Validar adoção ===========`)
validarAdocao('Pitico', 1, 'M')
validarAdocao('Bolinha', 2, 'M')
validarAdocao('Pitiquita', 2, 'P')
validarAdocao('Madona', 1, 'P')
validarAdocao('Leão', 14, 'G')
console.log(`====================================`)



