// 12. Faça um programa que mostre os 10primeiros elementos da Sequência de Fibonacci.
//  Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

console.log('\n------------ SEQUÊNCIA DE FIBONACCI ------------\n');

let elementoAnterior = 1;
let elemento = 1;
let texto = 'Sequência de Fibonacci => { ';

for (let i = 0; i < 10; i++) {
    texto += elemento + ', ';
    elementoAnterior = elemento - elementoAnterior;
    elemento += elementoAnterior;
}

texto += '...}';
console.log(texto);