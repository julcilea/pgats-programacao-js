/**
 * Repetição ForEach
 * This method demonstrates the use of the forEach loop in JavaScript.
 * It iterates over an array and executes a provided function once for each array element.
 * 
 * @param {Array} array - The array to iterate over.
 * @param {Function} callback - The function to execute for each element.
 * 
 * paraCada (intem da) lista de alunos
 * dar uma nota aleatória
 */

const listaAlunos = [
    {nome: 'Matheus', nota: 9 },
    {nome: 'Renata', nota: 10}, 
    {nome: 'Leandro', nota: 7}, 
    {nome: 'Maria', nota: 8}, 
    {nome: 'Julcilea', nota: 10}
];

listaAlunos.forEach(aluno => {  
    const notaAleatoria = Math.floor(Math.random() * 10) + 1;
    console.log(`${aluno.nome} recebeu a nota: ${notaAleatoria}`);
});

console.log(`-----------------------`);

listaAlunos.forEach(aluno => {  
    console.log(`${aluno.nome} recebeu a nota: ${aluno.nota}`);
});