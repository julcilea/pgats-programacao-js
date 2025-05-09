/**
 * 
 * enquato(pet não estiver casado); faca {
 *  dar uma volta na quadra
 * }
 */

let voltasAteFicarCansado = 5;
let quantidadeDeVoltasAtual = 0;

while(quantidadeDeVoltasAtual < voltasAteFicarCansado) {
    console.log(`Dando a volta ${quantidadeDeVoltasAtual + 1}`);
    quantidadeDeVoltasAtual++;

    if (quantidadeDeVoltasAtual === voltasAteFicarCansado) {
        console.log("Estou cansado!");
    }
}