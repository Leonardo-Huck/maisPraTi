/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
 cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
 a) Osomatório entre todos os valores;
 b) Qual foi o menor valor digitado;
 c) Amédiaentre todos os valores;
 d) Quantos valores são pares.
 */

const prompt = require('prompt-sync')();

console.log('\n------------ VARIOS NÚMEROS ------------\n');

let entradaNumero = [];
let flag = '';
do {
    let entrada = Number(prompt('Digite um número: '));
    entradaNumero.push(entrada);
    flag = prompt('Deseja continuar (S)im ou (N)ão: ');
} while (flag !== 'n' && flag !== 'N')

let soma = 0;
let menor = entradaNumero[0];
let totalPares = 0;

for (numero of entradaNumero) {
    soma += numero;
    if (numero < menor) menor = numero;
    if (numero % 2 === 0) totalPares++;
}

let media = soma / entradaNumero.length;

console.log(`\na) O somatório entre todos os valores é de: ${soma}`);
console.log(`b) O menor valor digitado foi: ${menor}`);
console.log(`c) A média entre todos os valores é de: ${media.toFixed(2)}`);
console.log(`d) O numero de pares é: ${totalPares}`);