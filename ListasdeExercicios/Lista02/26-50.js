// 26. Dadas duas matrizes numéricas A[1.3,1.5] e B[1.3,1.5], calcular a matriz produto
//  P[1 .3,1 .5].

//Constante do prompt
const prompt = require('prompt-sync')();

console.log('\n------------ MATRIZ PRODUTO ------------\n');

const A = [];
const B = [];

FillArray(A, 3, 5);
FillArray(B, 3, 5);



function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FillArray(array, line, column) {
    for (let i = 0; i < line; i++) {
        let line = [];
        for (let j = 0; j < column; j++) {
            let randomNumber = GenerateRandomNumber(0, 99);
            line.push(randomNumber);
        }
        array.push(line);
    }
}