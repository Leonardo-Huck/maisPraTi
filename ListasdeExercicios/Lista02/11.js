/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA(Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.
*/

const prompt = require('prompt-sync')();

console.log('\n------------ PROGRESSÃO ARITIMÉTICA ------------\n');

let primeiroTermo = Number(prompt('Informe qual o primeiro termo da PA: '));
let razao = Number(prompt('Informe qual a razão da PA: '));

let texto = '\nPA => { ' + primeiroTermo + ', ';
let termo = primeiroTermo + razao;
let soma = primeiroTermo;

for (let i = 0; i < 9; i++) {
    soma += termo;
    texto += termo + ', '
    termo += razao;
}
texto += '...}'

console.log(texto);
console.log(`A soma entre todos os valores dessa sequência é de: ${soma}`);