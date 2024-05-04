//

// LISTA DE EXERCÍCIOS 01

// Constante do prompt

const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////////////////////////////////////////

// 01 - 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

console.log('\n------------ CONVERSOR DE TEMPERATURA °C PARA °F ------------');
let grausCelsius = Number(prompt('Digite a temperatura em °C para converter : '));
let grausFahrenheit = (grausCelsius * 9 / 5) + 32;

console.log(`${grausCelsius} °C equivalem a ${grausFahrenheit}°F`);


///////////////////////////////////////////////////////////////////////////////////////////

/* 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

console.log('\n------------ CONTROLE DE VOTOS ------------');
console.log('Insira as informações');

let totalDeEleitores = parseInt(prompt('Total de eleitores: '));
let totalVotosBrancos = parseInt(prompt('Total de votos em branco: '));
let totalVotosNulos = parseInt(prompt('Total de votos nulos: '));
let totalVotosValidos = parseInt(prompt('Total de votos válidos: '));

totalVotosBrancos = (totalVotosBrancos / totalDeEleitores) * 100;
totalVotosNulos = (totalVotosNulos / totalDeEleitores) * 100;
totalVotosValidos = (totalVotosValidos / totalDeEleitores) * 100;

console.log();
console.log('Resultado das Informações');
console.log(` ${totalVotosBrancos} % de votos em branco.`);
console.log(` ${totalVotosNulos} % de votos nulos.`);
console.log(` ${totalVotosValidos} % de votos válidos.`);

///////////////////////////////////////////////////////////////////////////////////////////

/* 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.*/

console.log('\n------------ INTEIROS ------------');

let primeiroInteiro = parseInt(prompt('Digite o primeiro inteiro: '));
let segundoInteiro = parseInt(prompt('Digite o segundo inteiro: '));
let terceiroInteiro = parseInt(prompt('Digite o terceiro inteiro: '));
let quartoInteiro = parseInt(prompt('Digite o quarto inteiro: '));

primeiroInteiro += 25;
segundoInteiro *= 3;
terceiroInteiro = (terceiroInteiro * 12) / 100;
quartoInteiro = (primeiroInteiro - 25) + (segundoInteiro / 3) + ((terceiroInteiro / 12) * 100);

// console.log(primeiroInteiro);
// console.log(segundoInteiro);
// console.log(terceiroInteiro);
// console.log(quartoInteiro);


///////////////////////////////////////////////////////////////////////////////////////////

/*4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).*/

console.log('\n------------ MÉDIA SEMESTRAL ------------');
console.log();

let primeiraAvaliacao = Number(prompt('Informe a nota da primeira avaliação: '));
let segundaAvaliacao = Number(prompt('Informe a nota da segunda avaliação: '));

let mediaSemestre = (primeiraAvaliacao + segundaAvaliacao) / 2;

console.log(`A media do aluno foi ${mediaSemestre}!`);

if (mediaSemestre >= 6) {
    console.log('PARABÉNS! Você foi aprovado');
} else if (mediaSemestre < 6) {                           //Exercício 05
    console.log('Você foi REPROVADO! Estude mais');       //Exercício 05
}

/*5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/


///////////////////////////////////////////////////////////////////////////////////////////

/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

console.log('\n------------ TRIANGULO ------------');
console.log();

let ladoA = parseInt(prompt("Insira o comprimento do primeiro lado:"));
let ladoB = parseInt(prompt("Insira o comprimento do segundo lado:"));
let ladoC = parseInt(prompt("Insira o comprimento do terceiro lado:"));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log("É possível formar um triângulo com esses comprimentos!");
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Este triangulo é eqüilátero pois possui todos os lados iguais');
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        console.log('Este triangulo é escaleno pois possui todos os lados diferentes');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Este triangulo é isósceles pois possui dois lados iguais');
    }
} else {
    console.log("Não é possível formar um triângulo com esses comprimentos!");
}


///////////////////////////////////////////////////////////////////////////////////////////

/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

console.log('\n------------ MAÇÃS ------------');
console.log();

let totalMacaes = parseInt(prompt('Informe o total de maçães compradas: '));
let totalDaCompra;

if (totalMacaes < 12 && totalMacaes > 0) {
    totalDaCompra = totalMacaes * 0.3;
} else if (totalMacaes >= 12) {
    totalDaCompra = totalMacaes * 0.25;
} else {
    totalDaCompra = -1
}

if (totalDaCompra === -1) {
    console.log('Informe uma quantidade válida');
} else {
    totalDaCompra = totalDaCompra.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    console.log(`O valor total da compra é de ${totalDaCompra}`);
}

///////////////////////////////////////////////////////////////////////////////////////////

/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

console.log('\n------------ 2 VALORES ------------');
console.log();

let primeiroValor = Number(prompt('Informe o primeiro valor: '));
let segundoValor = Number(prompt('Informe o segundo valor: '));

console.log('Os valores em ordem crescente são: ')

if (primeiroValor > segundoValor) {
    console.log(`{${segundoValor}, ${primeiroValor}}`);
} else {
    console.log(`{ ${primeiroValor}, ${segundoValor} }`);
}


///////////////////////////////////////////////////////////////////////////////////////////

/*9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela:

1 - Sul             5 ou 6    - Nordeste
2 - Norte           7, 8 ou 9 - Sudeste
3 - Leste           10 até 20 - Centro-Oeste
4 - Oeste           25 até 50 - Nordeste
Fora dos intervalos - Produto Importado */

console.log('\n------------ CÓDIGO DE ORIGEM ------------');
console.log();

let codigoOrigem = parseInt(prompt('Informe o código de origem para verificação (1 ao 50) : '));

console.log('A origem do produto é: ');

if (codigoOrigem === 1) {
    console.log('1 - Sul');
} else if (codigoOrigem === 2) {
    console.log('2 - Norte');
} else if (codigoOrigem === 3) {
    console.log('3 - Leste');
} else if (codigoOrigem === 4) {
    console.log('4 - Oeste');
} else if (codigoOrigem === 5 || codigoOrigem === 6) {
    console.log('5 ou 6 - Nordeste');
} else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
    console.log('7, 8 ou 9 - Sudeste');
} else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
    console.log('10 até 20 - Centro-Oeste');
} else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
    console.log('25 até 50 - Nordeste');
} else {
    console.log('Fora dos intervalos - Produto Importado');
}

///////////////////////////////////////////////////////////////////////////////////////////

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

console.log('\n------------ REPETIÇÃO 10X ------------');
console.log();

let numero10X = parseInt(prompt('Informe um número para ser impresso 10 vezes: '));

for (i = 0; i < 10; i++) {
    console.log(numero10X);
}

///////////////////////////////////////////////////////////////////////////////////////////

/*11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.*/

console.log('\n------------ PAR OU ÍMPAR INFINITO ------------');
console.log();


let parOuImpar = 0;
do {
    parOuImpar = parseInt(prompt('Digite um número para verificar se é Par ou Ímpar (-1 ou nulo para sair): '));
    if (parOuImpar % 2 === 0) {
        console.log(`O número ${parOuImpar} é um número PAR!`)
    } else if (parOuImpar % 2 === 1) {
        console.log(`O número ${parOuImpar} é um número ÍMPAR!`)
    } else {
        console.log('Número Inválido!')
    }
} while (parOuImpar >= 0 && parOuImpar != null);


///////////////////////////////////////////////////////////////////////////////////////////

/* 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.*/

console.log('\n------------ NUMEROS DE 1000 a 1999 COM RESTO IGUAL A 5 QUANDO DIVIDIDOS POR 11 ------------');
console.log();

for (i = 1000; i <= 1999; i++) {
    if (i % 11 === 5) {
        console.log(i);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////

/*13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N*/

console.log('\n------------ TABUADA ATÉ N ------------');

let n;
for (i = 0; i < 5; i++) {
    console.log();
    n = parseInt(prompt('Digite um valor para ver sua tabuada: '));
    for (operando = 1; operando <= n; operando++) {
        console.log(`${operando} X ${n} = ${operando * n}`);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////

/*Utilizar somente while do exercício 14 ao 16

14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

console.log('\n------------ MÉDIA ARITMÉTICA ------------');
console.log();

let flagMedia = 1;
let valorMedia;
let totalMedia = 0;
let somaMedia = 0;

while (flagMedia !== 0) {
    valorMedia = Number(prompt('Informe um decimal para calculo da média aritmética ( 0 para sair ): '));
    if (valorMedia === 0) {
        flagMedia = 0;
    } else {
        somaMedia += valorMedia;
        totalMedia++;
    }
}

if (somaMedia != 0) {
    console.log(`A soma total dos decimais é de ${somaMedia}`);
    console.log(`A média aritmética é de ${somaMedia / totalMedia}`);
} else {
    console.log('Saindo do programa...');
}


///////////////////////////////////////////////////////////////////////////////////////////

/*15. Fazer um algoritmo para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.*/

console.log('\n------------ MÉDIA PONDERADA ------------');
console.log();

let somaMediaPonderada = 0;
let totalPesos = 0;

while (true) {
    let decimalMediaPonderada = Number(prompt('Informe um decimal (0 para sair): '));
    if (decimalMediaPonderada == 0) {
        break;
    }
    let pesoMediaPonderada = Number(prompt('Informe o peso da nota: '));

    somaMediaPonderada += (decimalMediaPonderada * pesoMediaPonderada);
    totalPesos += pesoMediaPonderada;
}

console.log(`O total das notas informadas foi de ${somaMediaPonderada} e o total de pesos foi de ${totalPesos}`);
console.log(`A média ponderada desses valores é de ${(somaMediaPonderada / totalPesos).toFixed(2)} `);


///////////////////////////////////////////////////////////////////////////////////////////

/*16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.*/

console.log('\n------------ 50 NUMEROS PRIMOS MAIORES QUE 100 ------------');
console.log();


let inicioContador = 100;
let fimContador = 0;

while (fimContador < 50) {
    let totalDivisores = 0;
    let divisorAtual = 1;

    while (divisorAtual <= inicioContador) {
        if (inicioContador % divisorAtual === 0) {
            totalDivisores++;
        }
        divisorAtual++
    }
    if (totalDivisores === 2) {
        console.log(inicioContador);
        fimContador++;
    }
    inicioContador++;
}