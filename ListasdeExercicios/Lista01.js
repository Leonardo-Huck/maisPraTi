//

// LISTA DE EXERCÍCIOS 01

// Constante do prompt

const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////////////////////////////////////////

// 01 - 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

// console.log('------------ CONVERSOR DE TEMPERATURA °C PARA °F ------------');
// let grausCelsius = Number(prompt('Digite a temperatura em °C para converter : '));
// let grausFahrenheit = (grausCelsius * 9 / 5) + 32;

// console.log(`${grausCelsius} °C equivalem a ${grausFahrenheit}°F`);


///////////////////////////////////////////////////////////////////////////////////////////

/* 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

// console.log('------------ CONTROLE DE VOTOS ------------');
// console.log('Insira as informações');

// let totalDeEleitores = parseInt(prompt('Total de eleitores: '));
// let totalVotosBrancos = parseInt(prompt('Total de votos em branco: '));
// let totalVotosNulos = parseInt(prompt('Total de votos nulos: '));
// let totalVotosValidos = parseInt(prompt('Total de votos válidos: '));

// totalVotosBrancos = (totalVotosBrancos / totalDeEleitores) * 100;
// totalVotosNulos = (totalVotosNulos / totalDeEleitores) * 100;
// totalVotosValidos = (totalVotosValidos / totalDeEleitores) * 100;

// console.log();
// console.log('Resultado das Informações');
// console.log(` ${totalVotosBrancos} % de votos em branco.`);
// console.log(` ${totalVotosNulos} % de votos nulos.`);
// console.log(` ${totalVotosValidos} % de votos válidos.`);

///////////////////////////////////////////////////////////////////////////////////////////

/* 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.*/

// console.log('------------ INTEIROS ------------');

// let primeiroInteiro = parseInt(prompt('Digite o primeiro inteiro: '));
// let segundoInteiro = parseInt(prompt('Digite o segundo inteiro: '));
// let terceiroInteiro = parseInt(prompt('Digite o terceiro inteiro: '));
// let quartoInteiro = parseInt(prompt('Digite o quarto inteiro: '));

// primeiroInteiro += 25;
// segundoInteiro *= 3;
// terceiroInteiro = (terceiroInteiro * 12) / 100;
// quartoInteiro = (primeiroInteiro - 25) + (segundoInteiro / 3) + ((terceiroInteiro / 12) * 100);

// console.log(primeiroInteiro);
// console.log(segundoInteiro);
// console.log(terceiroInteiro);
// console.log(quartoInteiro);
