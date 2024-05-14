/*3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

const prompt = require('prompt-sync')();

console.log('\n------------ PASSAGEM ------------\n');

let distancia = Number(prompt('Informe quantos quilômetros o passageiro deseja percorrer? '));
let passagem = ((distancia > 200) ? distancia * 0.45 : distancia * 0.50)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

console.log(`Para uma distância de ${distancia}Km o preço da passagem é de ${passagem}`);