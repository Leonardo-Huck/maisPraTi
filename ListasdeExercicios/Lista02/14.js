/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
 mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
 que eles foram informados.
*/

console.log('\n------------ NOMES EM UM VETOR ------------\n');

const prompt = require('prompt-sync')();
let nomes = [];

for (let i = 0; i < 7; i++) {
    nomes.push(prompt('Informe um nome: '));
}

let listaNomes = '\nLista dos nomes informados: '
for (let i = 7; i > 0; i--) {
    listaNomes += nomes[i - 1];
    listaNomes += (i - 1 !== 0) ? ', ' : '';
}

console.log(listaNomes);