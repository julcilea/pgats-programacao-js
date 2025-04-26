/**
 * && - E / AND
 * || - OU / OR
 * !  - NÃo / NOT
 */

const nomeDog = "Pipoca"

const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10
console.log("nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres = ", nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres)

const dog = {
    adotado: false,
    peso: 5.3
}

console.log("!dog.adotado || dog.peso < 10 = ", !dog.adotado || dog.peso < 10)

console.log("true || true = ", true || true)
console.log("true || false = ", true || false)
console.log("false || true = ", false || true)
console.log("false || false = ", false || false)

console.log("true = ", true)
console.log("!true = ", !true)

