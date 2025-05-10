/**
 * Entregador de brunquedos para os dogs
 * 
 * Dado qeu você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
 * Crie um script que passe pela lista de brinquedos e entregue um por vez.
 * Exiba o nome de cada brunquedo que for entregue.
 * 
 * Use a estrutura de repetição forEach.
 * 
 * Extra: transforme a logica em uma função ( da forma que conseguir)
 */

// const entregarBrinquedos = (brinquedos) => {
//     brinquedos.forEach((brinquedo, indice) => {
//         console.log(Entregando brinquedo ${indice + 1}: ${brinquedo});
//     });
// }

const brinquedos = ["Bola", "Osso", "Corda", "Sino"]

const entregarBrinquedos = (brinquedos) => {
    brinquedos.forEach((brinquedo, indice) => 
        console.log(`Entregando brinquedo ${indice + 1}: ${brinquedo}`))
    console.log("Todos os brinquedos foram entregues.")
}

entregarBrinquedos(brinquedos);