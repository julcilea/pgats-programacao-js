/**
 * Trabalho final de Algoritmos e Estruturas de Dados
 * Aluno: Julcilea Bolandini Lourenço
 * 
 * Classe de funções para o trabalho final
 * 
 */

// 1. Gera a tag com o nome do pet em letras maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase()
}

// 2. Verifica se o pet pode ser adotado com base na idade e no porte
export function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinima = 2
  return idade <= idadeMinima || porte === 'P' ? true : false
}

// 3. Calcula o consumo de ração com base no peso
export function calcularConsumoDeRacao(nome, idade, peso) {
    return peso * 300
}

// 4. Decide a atividade com base no porte do animal
export function decidirTipoDeAtividadePorPorte(porte) {
    let atividade
    switch (porte) {
        case 'pequeno':
            atividade = `brincar dentro de casa`
            break
        case 'médio':
            atividade = `caminhada no quarteirão`
            break 
        case 'grande':
            atividade = `correr no parque`
            break 
        default:
            atividade = `porte inválido`
    }
    
    return atividade
}

// 5. Simula uma busca de dado assíncrona
export async function buscarDadoAsync() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve('Pipoca') }, 100) 
    });
}
