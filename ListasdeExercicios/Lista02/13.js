/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    dasequência de Fibonacci.
    */

console.log('\n------------ SEQUÊNCIA DE FIBONACCI EM UM VETOR ------------\n');

let elementos = [];
let elementoAnterior = 1;
let elemento = 1;

for (let i = 0; i < 15; i++) {
    elementos.push(elemento);
    elementoAnterior = elemento - elementoAnterior;
    elemento += elementoAnterior;
}

console.log(elementos);