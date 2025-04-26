/**
 * Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. 
O script vai receber o porte (pequeno, médio ou grande); 
e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
pequeno -> brincar dentro de casa
médio -> caminhada no quarteirão
grande -> correr no parque
qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
menor que 15 -> "atividade rápida: [atividade]"
de 15 a 30 -> "tempo ideal: [atividade]"
acima de 30 -> "hora da diversão: [atividade]

 */

const planoDeAtividadesParaPet = (nome,porte,tempo) => {
    let atividade
    let mensagemTempoAtividade

    switch(porte.toLowerCase()){
        case "pequeno":
            atividade = 'brincar dentro de casa'
            break
        case "médio":
            atividade = 'caminhada no quarteirão'
            break
        case "grande":
            atividade = 'correr no parque'
            break
        default:
            atividade = 'porte inválido'
    }

    switch(true){
        case tempo < 15:
            mensagemTempoAtividade = 'atividade rápida'
        case tempo >= 15 && tempo <= 30:
            mensagemTempoAtividade =  'tempo ideal'
        case tempo > 30:
            mensagemTempoAtividade =  'hora da diversão'
    }

    console.log(`======== Plano de atividades para o Pet ===========`)
    console.log(`Nome: ${nome}`)
    console.log(`Porte: ${porte}`)
    console.log(`Tempo: ${tempo}`)
    console.log(`${mensagemTempoAtividade}: [${atividade}]`)
}

planoDeAtividadesParaPet('Bolinha', 'Pequeno', 14)
planoDeAtividadesParaPet('Madona','Médio', 15)
planoDeAtividadesParaPet('Branquinha','Grande', 30)
planoDeAtividadesParaPet('Pretinha','Grande', 31)
planoDeAtividadesParaPet('Suzy','ND', 31)
