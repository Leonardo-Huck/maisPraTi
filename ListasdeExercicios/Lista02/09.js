/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
 mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
 perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
 funcionário.
*/

const prompt = require('prompt-sync')();

console.log('\n------------ SALARIOS ------------\n');

let salarioHomens = 0;
let salarioMulheres = 0;

while (true) {
    let entrada = '';
    while (entrada !== 'homem' && entrada !== 'mulher') {
        entrada = prompt('Informe o genero do funcionário (homem ou mulher) : ');
    }

    let salario = Number(prompt('Informe o salário: '));
    if (entrada === 'homem') salarioHomens += salario;
    else salarioMulheres += salario;

    console.log('');
    let continuar = prompt('Deseja continuar (S)im ou (N)ão: ');
    if (continuar === 'n' || continuar === 'N') {
        break;
    }
}

console.log(`\nO total de salário pago aos Homens é de : ${salarioHomens.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
console.log(`O total de salário pago as Mulheres é de : ${salarioMulheres.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);


