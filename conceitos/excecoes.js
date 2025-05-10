/**
 * Exceções e tratamento de erros são conceitos fundamentais em JavaScript. 
 * Eles permitem que você lide com situações inesperadas e mantenha seu código 
 * funcionando de maneira robusta. Aqui estão os principais pontos sobre exceções 
 * e tratamento de erros:
 * 1. Use try...catch para capturar erros e evitar que seu programa falhe silenciosamente.
 * 2. Sempre que possível, forneça mensagens de erro claras e úteis para facilitar a depuração.
 * 3. Considere o uso de bibliotecas de tratamento de erros para simplificar a gestão de exceções em seu código.
 * 
 * throw new Error('Mensagem de erro personalizada') // Lança um erro com uma mensagem personalizada
 */

try {
    // Código que pode gerar um erro
    console.log(`Tentando alimentar o Pet...`)
    throw new Error('Pet não quis comer')
    console.log(`Nada depois do erro será executado`)
} catch (excessao) {
    // Captura o erro e executa este bloco
    console.error("Name:", excessao.name)
    console.error("Message:", excessao.message)
    console.error(excessao)
} finally {
    // Este bloco é sempre executado, independentemente de um erro ter ocorrido ou não
    console.log("Finalizando o tratamento de exceções.")
}