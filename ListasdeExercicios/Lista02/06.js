/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

const prompt = require('prompt-sync')();

console.log('\n------------ NUMERO DO 1 AO 5 ------------\n');
console.log('Tente descobrir qual número a máquina escolheu');

let maquina = Math.floor(Math.random() * 5) + 1;
let usuario = 0;
let tentativa = 0;

while (usuario !== maquina) {
    usuario = parseInt(prompt('Escolha um número entre 1 e 5: '));
    tentativa++;
}

console.log(`Você acertou!! O computador escolheu ${maquina}, o número de tentativas foram: ${tentativa}`);

