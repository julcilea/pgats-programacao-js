/**
 * Distribuição de petiscos
 * 
 * Você tem um lista de cães: ['Rex', 'Leão', 'Luna']
 * Crie um script que "entregue" 1 petisco para cada cão da lista.
 * Exiba uma mensagem como: "Entregando petisco para Rex"	
 * 
 * Mantenha os dados e a função em arquivos separados; use modularização para organizar.
 */

function entregarPetiscos(dogs) {
  dogs.forEach(dog => {
    console.log(`Entregando petisco para ${dog}`);
  });
}

export { entregarPetiscos } // exportando a função
