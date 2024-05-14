/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

const prompt = require('prompt-sync')();

console.log('\n------------ VIDA SAUDÁVEL ------------\n');

let totalHoras = Number(prompt('Informe quantas horas de atividades físicas foram realizadas no mês: '));
let totalPontos = 0;

if (totalHoras <= 10) {
    totalPontos = totalHoras * 2;
} else if (totalHoras > 10 && totalHoras <= 20) {
    totalPontos = totalHoras * 5;
} else if (totalHoras > 20) {
    totalPontos = totalHoras * 10;
} else {
    console.log('Número de horas inválido!');
}

console.log(`\nTotal de pontos ganhos: ${totalPontos}`);
console.log(`Total de ganhos: ${(totalPontos * 0.05).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);