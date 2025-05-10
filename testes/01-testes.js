/**
 * 
 */

import { exibirNomeDogFormatado } from  '../conceitos/teste-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {
    it('deve exibir o nome do dog com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
        // verifique se: valor atual é igual ao valor esperado
    })

    it('primeiro teste', () => {

    })

    it('segundo teste', () => {
        throw new Error()
    })
})