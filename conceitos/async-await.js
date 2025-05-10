/**
 * Exemplos de uso do async/await
 * async/await é uma maneira moderna de lidar com operações assíncronas em JavaScript.
 * Ele permite escrever código assíncrono de forma mais legível e semelhante ao código síncrono.
 * Aqui estão alguns exemplos de como usar async/await:
 */

async function exibirNomeDogFormatado(nome) {
   return nome.toUpperCase()
}

// console.log(exibirNomeDogFormatado('Iris'))
// Saída: Promise { 'IRIS' }
// A função retorna uma Promise, não o valor diretamente

console.log(await exibirNomeDogFormatado('Iris'))
// Saída: IRIS
// O valor é obtido usando await, que aguarda a resolução da Promise