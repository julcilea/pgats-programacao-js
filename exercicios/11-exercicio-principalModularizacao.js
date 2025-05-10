/**
 * Distribuição de petiscos
 * 
 * Você tem um lista de cães: ['Rex', 'Leão', 'Luna']
 * Crie um script que "entregue" 1 petisco para cada cão da lista.
 * Exiba uma mensagem como: "Entregando petisco para Rex"	
 * 
 * Mantenha os dados e a função em arquivos separados; use modularização para organizar.
 */

import { DOGS, GATOS } from "./11-exercicio-dadosModularizacao.js" // importando a lista de cães do arquivo exercicio-modularizacao.js
import { entregarPetiscos } from "./11-exercicio-funcaoModularizacao.js" // importando a função entregarPetiscos do arquivo exercicio-modularizacao.js

entregarPetiscos(DOGS);
entregarPetiscos(GATOS);