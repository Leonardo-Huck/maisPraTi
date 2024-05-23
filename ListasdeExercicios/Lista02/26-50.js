// 26. Dadas duas matrizes numéricas A[1.3,1.5] e B[1.3,1.5], calcular a matriz produto
//  P[1 .3,1 .5].

//Constante do prompt
const prompt = require('prompt-sync')();

console.log('\n------------ MATRIZ PRODUTO ------------\n');

const A = [];
const B = [];

FillArray(A, 3, 5);
FillArray(B, 3, 5);

const P = [];

for (let i = 0; i < A.length; i++) {
    let lineP = [];
    for (let j = 0; j < A[i].length; j++) {
        let product = A[i][j] * B[i][j]
        lineP.push(product);
    }
    P.push(lineP);
}

console.log(A);
console.log(B);
console.log('\nMATRIZ PRODUTO DE A E B:')
console.log(P);


///////////////////////////////////////////////////////////////////////////////////////////////

/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
umvetor V(36). Escrever o vetor V no final.
*/

console.log('\n------------ VETOR V36 ------------\n');

const M = [];

console.log('Informe as pocições da matriz M(6,6): ');
for (let i = 0; i < 6; i++) {
    let lineP = [];
    for (let j = 0; j < 6; j++) {
        lineP.push(parseInt(prompt(`Posição [${i}][${j}] : `)));
    }
    M.push(lineP);
}

let valueA = parseInt(prompt('\nInforme um valor A para multiplicação: '));

let V = [];

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        V.push(M[i][j] * valueA);
    }
}

console.log('\nO vetor produto da operação é: ')
console.log(V);

///////////////////////////////////////////////////////////////////////////////////////////////

/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
 item:
 a) a soma dos elementos acima da diagonal principal;
 b) a soma dos elementos abaixo da diagonal principal;
*/

console.log('\n------------ CALCULANDO ELEMENTOS ACIMA E ABAIXO DA DIAGONAL PRINCIPAL ------------\n');

const M10X10 = [];
FillArray(M10X10, 10, 10);

let sumUpPrincipalDiagonal = 0;
let sumBelowPrincipalDiagonal = 0;

console.log(ShowMatrix(M10X10));

for (let i = 0; i < M10X10.length; i++) {
    for (let j = 0; j < M10X10[i].length; j++) {
        if (j > i) sumUpPrincipalDiagonal += M10X10[i][j];
        else if (j < i) sumBelowPrincipalDiagonal += M10X10[i][j];
    }
}

console.log(`A soma dos elementos acima da diagonal principal é: ${sumUpPrincipalDiagonal}`);
console.log(`A soma dos elementos abaixo da diagonal principal é: ${sumBelowPrincipalDiagonal}`);


///////////////////////////////////////////////////////////////////////////////////////////////

/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
 a) da linha 4 de M;
 b) da coluna 2 de M;
 c) da diagonal principal;
 d) todos os elementos da matriz M.
 Escrever essas somas e a matriz.
 */

console.log('\n------------ CALCULOS DE UMA MATRIZ 5 X 5  ------------\n');

const M5X5 = [];

console.log('Informe as pocições da matriz M(5,5): ');
for (let i = 0; i < 5; i++) {
    let lineM5X5 = [];
    for (let j = 0; j < 5; j++) {
        lineM5X5.push(parseInt(prompt(`Posição [${i}][${j}] : `)));
    }
    M5X5.push(lineM5X5);
}

let sumLineFour = 0;
let sumColumnTwo = 0;
let sumPrincipalDiagonal = 0;
let sumAllElements = 0;

for (let i = 0; i < M5X5.length; i++) {
    for (let j = 0; j < M5X5[i].length; j++) {
        if (j === i) sumPrincipalDiagonal += M5X5[i][j];
        if (i === 3) sumLineFour += M5X5[i][j];
        if (j === 1) sumColumnTwo += M5X5[i][j];
        sumAllElements += M5X5[i][j];
    }
}

console.log('\nMatriz informada:');
console.log(ShowMatrix(M5X5));

console.log(`A soma da Linha 4 é : ${sumLineFour}`);
console.log(`A soma da Coluna 2 é : ${sumColumnTwo}`);
console.log(`A soma da Diagonal Principal é : ${sumPrincipalDiagonal}`);
console.log(`A soma de todos os elementos é : ${sumAllElements}`);

///////////////////////////////////////////////////////////////////////////////////////////////

/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
 contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
 e osvetores criados.
*/

console.log('\n------------ CALCULOS DE UMA MATRIZ 5 X 5 E VETORES SL E SC  ------------\n');

const M5X5TWO = [];
let SL = [];
let SC = new Array(5).fill(0);

console.log('Informe as pocições da matriz M(5,5): ');
for (let i = 0; i < 5; i++) {
    let lineM5X5TWO = [];
    let sumLineM5x5TWO = 0;
    for (let j = 0; j < 5; j++) {
        let entryM5X5TWO = parseInt(prompt(`Posição [${i}][${j}] : `));
        sumLineM5x5TWO += entryM5X5TWO;
        SC[j] += entryM5X5TWO;
        lineM5X5TWO.push(entryM5X5TWO);
    }
    SL.push(sumLineM5x5TWO);
    M5X5TWO.push(lineM5X5TWO);
}

console.log('\nA matriz informada é:');
console.log(ShowMatrix(M5X5TWO));

console.log('O vetor SL com a soma das linhas é: ')
console.log(SL);
console.log('O vetor SC com a soma das colunas é: ')
console.log(SC);


//////////////////////////////////////// COMMON FUNCTIONS //////////////////////////////////////// 
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

function ShowMatrix(matrix) {
    let formattedMatrix = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            formattedMatrix += `${(matrix[i][j]).toString().padStart(2, '0')} `;
        }
        formattedMatrix += '\n';
    }
    return formattedMatrix;
}