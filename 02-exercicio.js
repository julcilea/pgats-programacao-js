/**
 * Validador de nomes para as tags
 * Alguns donos estão registrando os dogs com nomes
 * mal formatados. Crie um script para limpar e
 * padronizar os nomes.
 * Aplique as formatações e exiba:
 * - O nome original, como foi cadastrado
 * - O nome formatado
 * Extra: aplique uma regra que confira se o nome
 * informado possui apenas uma palavra. Exiba se o
 * nome é válido ou não.
 */

 var dogsName = ['     Thor ', 'hela', 'rEx', 'branquinhA ', '  Tunico cheroso']

for (let index = 0; index < dogsName.length; index++) {
    const element = dogsName[index].trim();

    console.log(`\n====== Validação Nome do Dog =======`)
    console.log(`Nome original: ${element}`)

    if(element.split(" ").length < 2){
        console.log(`Nome formatado: ${element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()}`)
    } else {
        console.log(`Nome formatado: Nome inválido`)
    }   
}
    
