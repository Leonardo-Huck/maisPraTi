/*4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

const prompt = require('prompt-sync')();

console.log('\n------------ TRIANGULO POSSIVÉL ------------\n');

let reta1 = Number(prompt('Informe o tamanho do primeiro seguimento de reta: '));
let reta2 = Number(prompt('Informe o tamanho do segundo seguimento de reta: '));
let reta3 = Number(prompt('Informe o tamanho do terceiro seguimento de reta: '));

if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2) {
    console.log("\nÉ possivel formar esse triangulo!");
} else {
    console.log("\nInfelizmente não é possivel formar esse triangulo!");
}