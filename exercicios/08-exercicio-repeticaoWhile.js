/**
 * Contador de satisfaçào do passeio
 * 
 * Crie um script que avise quando o Dog já passeou o suficiente. Para saber, vamos considerar que
 * ele se senrtirá satisfeito somente a partir de 5 voltas na quadra.
 * 
 * Use estrutura de repetição while para resolver o problema.
 * 
 * exiba:
 * - Qual o número da volta atual
 * - Quando o dog estiver satisfeito
 * 
 * Extra: transforme a logica em uma função ( da forma que conseguir)
 * 
 * */

function contarVoltas() {
    let voltas = 0;
    while (voltas < 5) {
        voltas++;
        console.log("🐶 Volta atual: ", voltas)
    }
    console.log("✅ O dog está satisfeito!")
}

contarVoltas();