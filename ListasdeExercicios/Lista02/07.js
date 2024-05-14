/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
    - Até 100 Km percorridos: R$ 0,20 por Km
    - Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
    - Até 200 Km percorridos: R$ 0,30 por Km
    - Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')();

console.log('\n------------ ALUGUEL DE CARROS ------------\n');

let tipoCarro = '';
do {
    tipoCarro = prompt('Informe qual o tipo do veículo alugado (popular ou luxo): ');
} while (tipoCarro !== 'popular' && tipoCarro !== 'luxo')

let diasAlugado = parseInt(prompt('Informe quantos dias o veículo ficou alugado: '));
let kmsPercorridos = parseInt(prompt('Informe quantos quilômetros foram percorridos: '));
let totalKms = 0;
let totalAluguel = 0;

if (tipoCarro === 'popular') {
    totalKms = (kmsPercorridos <= 100) ? kmsPercorridos * 0.20 : kmsPercorridos * 0.10;
    totalAluguel = diasAlugado * 90;
} else {
    totalKms = (kmsPercorridos <= 200) ? kmsPercorridos * 0.30 : kmsPercorridos * 0.25;
    totalAluguel = diasAlugado * 150;
}

console.log(`\nTipo do carro alugado: ${tipoCarro}`);
console.log(`Total de dias alugado: ${diasAlugado}, valor: ${totalAluguel.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
console.log(`Total de Kms percorridos: ${kmsPercorridos}, valor: ${totalKms.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
console.log(`\nO total a pagar é de ${(totalAluguel + totalKms).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);