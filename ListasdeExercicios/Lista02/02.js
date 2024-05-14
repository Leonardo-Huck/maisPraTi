/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h -1
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const prompt = require('prompt-sync')();

console.log('\n------------ VELOCIDADE DE UM VEÍCULO ------------\n');

let velocidade = parseInt(prompt('Informe a velocidade do veículo (Km/h): '));

if (velocidade > 80) {
    console.log(`Usuário Multado!`);
    let multa = ((velocidade - 80) * 5).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    console.log(`A valor da multa é de ${multa}, pois a velocidade acima da permitida foi de ${velocidade - 80}Km/h`);
} else if (velocidade <= 80) {
    console.log('Excelente!! Continue respeitando a velocidade da via!');
} else {
    console.log('Revise a velocidade informada!');
}
