/**
 * para, faca
 * contador; condiçãp; manipulação do contador(incremento ou decremento)
 * quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++
 */
const quantidadeCalculada = 3;
const gatos = ['Tigor', 'Iris', 'Demian'];

for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= gatos.length; quantidadeDePetiscos++) {
    console.log(`Dando o petiscos de numero: ${quantidadeDePetiscos}`);
    console.log(`${gatos[quantidadeDePetiscos - 1]} comeu o petisco`);
}

console.log(`-----------------------`);

for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= gatos.length; quantidadeDePetiscos++) {
    console.log(`Dando o petiscos de numero: ${quantidadeDePetiscos}`);

    for (let i = 0; i < gatos.length; i++) {
        console.log(`Para o gato: ${gatos[i]}`);
    }
}
