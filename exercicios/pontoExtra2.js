/**
 * Retorne um número de vogais no texto fornecido.
 * Considerando a, e, i o e u como vogais para
 * este Kata. O Texto de entrada conterá paenas
 * letras monúsculas e/ou espaçs. Letras
 * acentuadas não fazem parte desse desafio.
 */

function contarVogais(lista) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const resultados = [];
  
    for (const palavra of lista) {
      let contador = 0;
      for (const letra of palavra.toLowerCase()) {
        if (vogais.includes(letra)) {
          contador++;
        }
      }
      resultados.push(contador);
    }
    return resultados;
  }
  
  const listaMista = ['Maria', 'julcilea', 'Ana', 'maria antonieta'];
  console.log(`número de vogais de cada palavra: [${contarVogais(listaMista)}]`);