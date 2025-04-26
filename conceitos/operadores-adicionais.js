/**
 * ++
 * --
 * ternario (condicional)
 * <condicao> ? <acao se verdadeiro>: <acao se falso>
 */

console.log("*** Incremental")
let pesoDog = 10
console.log("pesoDog = ", pesoDog)

pesoDog++
console.log("pesoDog++ = ", pesoDog)

console.log("*** Decrementar")
let pesoTutor = 100
console.log("pesoTutor = ", pesoTutor)

pesoTutor--
console.log("pesoTutor-- = ", pesoTutor)

console.log("*** Ternario (condicional)")
const porte = pesoDog <= 10 ? 'pequeno' : 'medio'
console.log("pesoDog <= 10 ? 'pequeno' : 'medio' = ", porte)

pesoDog = 9
console.log("pesoDog = ", pesoDog)
const portePequeno = pesoDog <= 10 ? 'pequeno' : pesoDog <= 20 ? 'medio': 'grande'
console.log("pesoDog <= 10 ? 'pequeno' : pesoDog <= 20 ? 'medio': 'grande' = ", portePequeno)

pesoDog = 11
console.log("pesoDog = ", pesoDog)
const porteMedio = pesoDog <= 10 ? 'pequeno' : pesoDog <= 20 ? 'medio': 'grande'
console.log("pesoDog <= 10 ? 'pequeno' : pesoDog <= 20 ? 'medio': 'grande' = ", porteMedio)

pesoDog = 21
console.log("pesoDog = ", pesoDog)
const porteGrande = pesoDog <= 10 ? 'pequeno' : pesoDog <= 20 ? 'medio': 'grande'
console.log("pesoDog <= 10 ? 'pequeno' : pesoDog <= 20 ? 'medio': 'grande' = ", porteGrande)

console.log("*** Arredondamento")
console.log("11 / 2 = ", 11 / 2)
console.log("parseInt(11/2) = ", parseInt(11/2))
console.log("Math.floor(5.8) = ", Math.floor(5.8))
console.log("Math.ceil(5.2) = ", Math.ceil(5.2))
console.log("Math.round(5.8) = ", Math.round(5.8))
console.log("Math.round(5.4) = ", Math.round(5.4))
console.log("Math.round(5.5) = ", Math.round(5.5))

const valorDecimal = 2.145865
console.log("valorDecimal = ", valorDecimal)
console.log("valorDecimal.toFixed(3) = ", valorDecimal.toFixed(3))





