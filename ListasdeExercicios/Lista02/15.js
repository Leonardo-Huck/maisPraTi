/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
 final, mostre quais são os números pares que foram digitados e em que posições eles
 estão armazenados.
 */

console.log('\n------------ 10 NUMEROS INTEIROS ------------\n');

const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(parseInt(prompt(`Informe o ${i + 1}° número: `)));
}

console.log('\nNumeros pares informados: ');

for (numero in numeros) {
    if (numeros[numero] % 2 === 0) {
        console.log(`Numero: ${numeros[numero]} na posição ${numero}`);
    }
}