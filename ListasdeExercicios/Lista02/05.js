// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();

console.log('\n------------ JO-KEN-PO (PEDRA-PAPEL-TESOURA) ------------\n');

let maquina = Math.floor(Math.random() * 3) + 1;
if (maquina === 1) maquina = 'PEDRA';
else if (maquina === 2) maquina = 'PAPEL';
else if (maquina === 3) maquina = 'TESOURA';

let usuario = parseInt(prompt('Qual a sua escolha? (1 - PEDRA) (2 - PAPEL) (3-TESOURA) '));
if (usuario === 1) usuario = 'PEDRA';
else if (usuario === 2) usuario = 'PAPEL';
else if (usuario === 3) usuario = 'TESOURA';

if (maquina === 'PEDRA' && usuario === 'PAPEL') {
    console.log('Você venceu!');
} else if (maquina === 'PAPEL' && usuario === 'TESOURA') {
    console.log('Você venceu!');
} else if (maquina === 'TESOURA' && usuario === 'PEDRA') {
    console.log('Você venceu!');
} else if (maquina === usuario) {
    console.log('Empate!!');
} else {
    console.log('Você Perdeu!');
}

console.log(`Você escolheu ${usuario} e o computador escolheu ${maquina}`);