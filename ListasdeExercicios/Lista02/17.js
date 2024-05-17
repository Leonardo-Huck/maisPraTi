/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

console.log('\n------------ VETOR COM 20 NUMEROS ALEATÓRIOS ------------\n');
const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    nomes.push(prompt(`Informe o nome da ${i + 1}ª pessoa: `));
    idades.push(parseInt(prompt(`Informe a idade da ${i + 1}ª pessoa: `)));
}

console.log('\nAs pessoas menores de 18 anos são: ');

for (idade in idades) {
    if (idades[idade] < 18) {
        console.log(`${nomes[idade]}: ${idades[idade]} anos`);
    }
}