/**
 * Modularização e Exports
 * 
 *Sintaxe CommonJS:
 *      module.exports = {} / require('module-name')
 * 
 * EMS - EcmaScript Modules
 *      export default {} / import 'module-name'
 *
 */
const BRINQUEDOS = ['bola', 'corda', 'guizo', 'osso', 'boneco'];

function exibirNomePet(nomePet) {
    console.group(`o nome do pet é ${nomePet}`);
}

function exibirIdadePet(idadePet) {
    console.group(`a idade do pet é ${idadePet}`);
}

export { exibirNomePet, exibirIdadePet, BRINQUEDOS } // exportando as funções e a lista de brinquedos;
