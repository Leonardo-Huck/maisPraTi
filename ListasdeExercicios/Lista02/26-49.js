// 26. Dadas duas matrizes numéricas A[1.3,1.5] e B[1.3,1.5], calcular a matriz produto
//  P[1 .3,1 .5].

//Constante do prompt
const prompt = require('prompt-sync')();

// console.log('\n------------ MATRIZ PRODUTO ------------\n');

// const A = [];
// const B = [];

// FillArray(A, 3, 5);
// FillArray(B, 3, 5);

// const P = [];

// for (let i = 0; i < A.length; i++) {
//     let lineP = [];
//     for (let j = 0; j < A[i].length; j++) {
//         let product = A[i][j] * B[i][j]
//         lineP.push(product);
//     }
//     P.push(lineP);
// }

// console.log(A);
// console.log(B);
// console.log('\nMATRIZ PRODUTO DE A E B:')
// console.log(P);


///////////////////////////////////////////////////////////////////////////////////////////////

/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
umvetor V(36). Escrever o vetor V no final.
*/

// console.log('\n------------ VETOR V36 ------------\n');

// const M = [];

// console.log('Informe as pocições da matriz M(6,6): ');
// for (let i = 0; i < 6; i++) {
//     let lineP = [];
//     for (let j = 0; j < 6; j++) {
//         lineP.push(parseInt(prompt(`Posição [${i}][${j}] : `)));
//     }
//     M.push(lineP);
// }

// let valueA = parseInt(prompt('\nInforme um valor A para multiplicação: '));

// let V = [];

// for (let i = 0; i < M.length; i++) {
//     for (let j = 0; j < M[i].length; j++) {
//         V.push(M[i][j] * valueA);
//     }
// }

// console.log('\nO vetor produto da operação é: ')
// console.log(V);

///////////////////////////////////////////////////////////////////////////////////////////////

/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
 item:
 a) a soma dos elementos acima da diagonal principal;
 b) a soma dos elementos abaixo da diagonal principal;
*/

// console.log('\n------------ CALCULANDO ELEMENTOS ACIMA E ABAIXO DA DIAGONAL PRINCIPAL ------------\n');

// const M10X10 = [];
// FillArray(M10X10, 10, 10);

// let sumUpPrincipalDiagonal = 0;
// let sumBelowPrincipalDiagonal = 0;

// console.log(ShowMatrix(M10X10));

// for (let i = 0; i < M10X10.length; i++) {
//     for (let j = 0; j < M10X10[i].length; j++) {
//         if (j > i) sumUpPrincipalDiagonal += M10X10[i][j];
//         else if (j < i) sumBelowPrincipalDiagonal += M10X10[i][j];
//     }
// }

// console.log(`A soma dos elementos acima da diagonal principal é: ${sumUpPrincipalDiagonal}`);
// console.log(`A soma dos elementos abaixo da diagonal principal é: ${sumBelowPrincipalDiagonal}`);


///////////////////////////////////////////////////////////////////////////////////////////////

/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
 a) da linha 4 de M;
 b) da coluna 2 de M;
 c) da diagonal principal;
 d) todos os elementos da matriz M.
 Escrever essas somas e a matriz.
 */

// console.log('\n------------ CALCULOS DE UMA MATRIZ 5 X 5  ------------\n');

// const M5X5 = [];

// console.log('Informe as pocições da matriz M(5,5): ');
// for (let i = 0; i < 5; i++) {
//     let lineM5X5 = [];
//     for (let j = 0; j < 5; j++) {
//         lineM5X5.push(parseInt(prompt(`Posição [${i}][${j}] : `)));
//     }
//     M5X5.push(lineM5X5);
// }

// let sumLineFour = 0;
// let sumColumnTwo = 0;
// let sumPrincipalDiagonal = 0;
// let sumAllElements = 0;

// for (let i = 0; i < M5X5.length; i++) {
//     for (let j = 0; j < M5X5[i].length; j++) {
//         if (j === i) sumPrincipalDiagonal += M5X5[i][j];
//         if (i === 3) sumLineFour += M5X5[i][j];
//         if (j === 1) sumColumnTwo += M5X5[i][j];
//         sumAllElements += M5X5[i][j];
//     }
// }

// console.log('\nMatriz informada:');
// console.log(ShowMatrix(M5X5));

// console.log(`A soma da Linha 4 é : ${sumLineFour}`);
// console.log(`A soma da Coluna 2 é : ${sumColumnTwo}`);
// console.log(`A soma da Diagonal Principal é : ${sumPrincipalDiagonal}`);
// console.log(`A soma de todos os elementos é : ${sumAllElements}`);

///////////////////////////////////////////////////////////////////////////////////////////////

/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
 contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
 e osvetores criados.
*/

// console.log('\n------------ CALCULOS DE UMA MATRIZ 5 X 5 E VETORES SL E SC  ------------\n');

// const M5X5TWO = [];
// let SL = [];
// let SC = new Array(5).fill(0);

// console.log('Informe as pocições da matriz M(5,5): ');
// for (let i = 0; i < 5; i++) {
//     let lineM5X5TWO = [];
//     let sumLineM5x5TWO = 0;
//     for (let j = 0; j < 5; j++) {
//         let entryM5X5TWO = parseInt(prompt(`Posição [${i}][${j}] : `));
//         sumLineM5x5TWO += entryM5X5TWO;
//         SC[j] += entryM5X5TWO;
//         lineM5X5TWO.push(entryM5X5TWO);
//     }
//     SL.push(sumLineM5x5TWO);
//     M5X5TWO.push(lineM5X5TWO);
// }

// console.log('\nA matriz informada é:');
// console.log(ShowMatrix(M5X5TWO));

// console.log('O vetor SL com a soma das linhas é: ')
// console.log(SL);
// console.log('O vetor SC com a soma das colunas é: ')
// console.log(SC);

///////////////////////////////////////////////////////////////////////////////////////////////

/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/

// console.log('\n------------ ELEMENTOS DIFERENTES DE A NA MATRIZ V 30 X 30  ------------\n');

// let A2 = parseInt(prompt('Informe um numero inteiro para verificação: '));
// const V2 = [];
// const X = [];

// console.log('Informe as pocições da matriz V(30, 30): ');
// ReadMatrix(V2, 30, 30);

// let contA = 0;
// for (let i = 0; i < V2.length; i++) {
//     let lineX = [];
//     for (let j = 0; j < V2[i].length; j++) {
//         if (V2[i][j] === A2) contA++;
//         else lineX.push(V2[i][j]);
//     }
//     X.push(lineX);
// }

// console.log('\nMatriz informada');
// console.log(ShowMatrix(V2));
// console.log(`Numero inteiro A utilizado para busca: ${A2}`);
// console.log(`Quantidade de valores iguais a A: ${contA}`);
// console.log('\nMatriz Contendo os elementos diferentes de A');
// console.log(ShowMatrix(X));

///////////////////////////////////////////////////////////////////////////////////////////////

/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
 cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
 matriz lida e a modificada.
*/

// console.log('\n------------ DIVISÃO DE ELEMENTOS NA MATRIZ  ------------\n');

// const M12X13 = [];
// const M12X13MODIFIED = [];

// ReadMatrix(M12X13, 12, 13);

// for (let i = 0; i < M12X13.length; i++) {
//     let largestElement = Math.max(...M12X13[i]);
//     let lineM12X13MODIFIED = [];
//     for (let j = 0; j < M12X13[i].length; j++) {
//         lineM12X13MODIFIED.push((M12X13[i][j] / largestElement).toFixed(2));
//     }
//     M12X13MODIFIED.push(lineM12X13MODIFIED);
// }

// console.log('\nMatriz Informada');
// console.log(ShowMatrix(M12X13));
// console.log('\nMatriz Modificada');
// console.log(ShowMatrix(M12X13MODIFIED));


///////////////////////////////////////////////////////////////////////////////////////////////

/*
 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
 elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/
// console.log('\n------------ MULTIPLICANDO DIAGONAIS  ------------\n');

// const M3X3 = [];

// ReadMatrix(M3X3, 3, 3);

// let diagonal = [];
// for (let i = 0; i < M3X3.length; i++) {
//     diagonal.push(M3X3[i][M3X3.length - 1 - i]);
// }

// let totalSumDiagonalSecondary = 0;
// let totalTermsDiagonalSecondary = 0;
// for (element of diagonal) {
//     totalSumDiagonalSecondary += element;
//     totalTermsDiagonalSecondary++;
// }

// let averageDiagonalSecondary = (totalSumDiagonalSecondary / totalTermsDiagonalSecondary).toFixed(2);
// let elementsDiagonalPrincipal = [];
// let elementsDiagonalPrincipalModified = [];
// for (let i = 0; i < M3X3.length; i++) {
//     for (let j = 0; j < M3X3[i].length; j++) {
//         if (i === j) {
//             elementsDiagonalPrincipal.push(M3X3[i][j]);
//             elementsDiagonalPrincipalModified.push(M3X3[i][j] * averageDiagonalSecondary);
//         }
//     }
// }
// console.log('\nMatriz informada');
// console.log(ShowMatrix(M3X3));
// console.log('A Diagonal secundária é formada por: ')
// console.log(diagonal);
// console.log(`A média desses elementos é de: ${averageDiagonalSecondary}`);
// console.log('\nA Diagonal principal é formada por: ')
// console.log(elementsDiagonalPrincipal);
// console.log('\nA Diagonal principal multiplicada pela média da diagonal secundaria é:');
// console.log(elementsDiagonalPrincipalModified);

///////////////////////////////////////////////////////////////////////////////////////////////

/*
34. Faça umalgoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
 cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
 multiplicações.
 */
// console.log('\n------------ MULTIPLICANDO DIAGONAIS EM UMA MATRIZ 50X50  ------------\n');

// const M50X50 = [];
// const M50X50MODIFIED = [];

// ReadMatrix(M50X50, 50, 50);

// for (let i = 0; i < M50X50.length; i++) {
//     let operand = M50X50[i][i];
//     let lineM50x50MODIFIED = [];
//     for (let j = 0; j < M50X50[i].length; j++) {
//         lineM50x50MODIFIED.push(M50X50[i][j] * operand);
//     }
//     M50X50MODIFIED.push(lineM50x50MODIFIED);
// }

// console.log('\nMatriz informada');
// console.log(ShowMatrix(M50X50));
// console.log('\nMatriz multiplicada');
// console.log(ShowMatrix(M50X50MODIFIED));

///////////////////////////////////////////////////////////////////////////////////////////////

/* 
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
 conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
 estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
 vetor pode ser preenchido quantas vezes forem necessárias.
*/

// console.log('\n------------ LENDO UM CONJUNTO DE 30 VALORES PARES OU IMPARES  ------------\n');

// const OddOrEven = new Object();
// let pair = [];
// let odd = [];

// for (let i = 0; i < 30; i++) {
//     OddOrEven[i] = parseInt(prompt(`${i + 1}º: `));
//     if (OddOrEven[i] % 2 === 0) {
//         if (pair.length === 5) {
//             console.log(pair);
//             pair = [];
//         }
//         pair.push(OddOrEven[i]);
//     } else if (OddOrEven[i] % 2 !== 0) {
//         if (odd.length === 5) {
//             console.log(odd);
//             odd = [];
//         }
//         odd.push(OddOrEven[i]);
//     }
// }

// console.log('\nConjunto informado');
// console.log(OddOrEven);
// console.log('\nVetor Pares');
// console.log(pair);
// console.log('\nVetor Impares');
// console.log(odd);

///////////////////////////////////////////////////////////////////////////////////////////////

/* 
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
 um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
 do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
 número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
 o número do apostador e o número de acertos.Se o apostador tiver 13 acertos, mostrar a
 mensagem"Parabéns, tu foi o GANHADOR"
*/

// console.log('\n------------ LOTERIA  ------------\n');

// const Gabarito = [];
// const Apostadores = [];

// for (let i = 0; i < 13; i++) {
//     Gabarito.push(parseInt(prompt(`Informe o ${i + 1}º número do gabarito: `)));
// }

// for (let i = 0; i < 100; i++) {
//     let apostador = {
//         "Numero do Cartão": "",
//         Respostas: []
//     };
//     console.log(`${i + 1}º Apostador`)
//     apostador['Numero do Cartão'] = parseInt(prompt('Informe o número do cartão: '));
//     let respostas = [];
//     for (let i = 0; i < 13; i++) {
//         respostas.push(parseInt(prompt(`Informe o ${i + 1}º número: `)));
//     }
//     apostador.Respostas = respostas;
//     Apostadores.push(apostador);
// }

// for (let i = 0; i < 100; i++) {
//     let acertos = 0;
//     for (let j = 0; j < 13; j++) {
//         let respostasApostador = Apostadores[i].Respostas;
//         if (respostasApostador[j] === Gabarito[j]) acertos++;
//     }
//     console.log('\nNumero do ' + (i + 1) + 'º apostador: ' + Apostadores[i]['Numero do Cartão']);
//     console.log('Numero de acertos: ' + acertos);
//     if (acertos === Gabarito.length) console.log('Parabéns, tu foi o GANHADOR');
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/* 
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
 o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
 respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
 aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
 e mostre uma mensagem de “REPROVADO”, caso contrário.
 */

// console.log('\n------------ GABARITO DA PROVA  ------------\n');

// const vetorG = new Array(20);
// const Alunos = [];

// lerCaracteres(vetorG);

// for (let i = 0; i < 50; i++) {
//     let aluno = {
//         Nome: "",
//         Respostas: []
//     };

//     console.log(`${i + 1}º Aluno`)
//     aluno.Nome = prompt('Informe o nome do aluno: ');

//     let respostas = new Array(20);
//     lerCaracteres(respostas);

//     aluno.Respostas = respostas;
//     Alunos.push(aluno);
// }

// for (let i = 0; i < 50; i++) {
//     let acertos = 0;
//     for (let j = 0; j < 20; j++) {
//         let respostasAluno = Alunos[i].Respostas;
//         if (respostasAluno[j] === vetorG[j]) acertos++;
//     }
//     console.log('\nNome do Aluno : ' + Alunos[i].Nome);
//     console.log('Numero de acertos: ' + acertos);
//     if (acertos >= 12) console.log('APROVADO!');
//     else console.log('REPROVADO!');
// }

// function lerCaracteres(vetor) {
//     for (let i = 0; i < 20; i++) {
//         let caractere;
//         do {
//             caractere = prompt(`Digite o ${i + 1}º caractere:`);
//         } while (!validaCaractere(caractere));
//         vetor[i] = caractere;
//     }
// }

// function validaCaractere(caractere) {
//     return /^[a-eA-E]$/.test(caractere);
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/*  
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
 variável identificadora que calcule a operação conforme a informação contida nesta
 variável:
 1- soma dos elementos;
 2- produto dos elementos;
 3- média dos elementos;
 4- ordene os elementos em ordem crescente;
 5- mostre o vetor.
 */

// console.log('\n------------ MENU VETOR ------------\n');

// const vetor6 = new Array(6);
// let operador = -1;

// for (let i = 0; i < vetor6.length; i++) {
//     vetor6[i] = parseInt(prompt(`Informe o ${i + 1}º elemento do vetor: `));
// }

// console.log('\n----------- MENU -------------')
// console.log('1- soma dos elementos',
//     '\n2- produto dos elementos',
//     '\n3- média dos elementos',
//     '\n4- ordene os elementos em ordem crescente',
//     '\n5- mostre o vetor');

// operador = parseInt(prompt('Informe o que deseja fazer: '));

// let resultado = 0;
// switch (operador) {
//     case 1:
//         for (numero of vetor6) {
//             resultado += numero;
//         }
//         console.log('O resultado da soma dos elementos é: ' + resultado);
//         break;
//     case 2:
//         resultado = vetor6[0];
//         for (let i = 1; i < vetor6.length; i++) {
//             resultado *= vetor6[i];
//         }
//         console.log('O produto dos elementos é: ' + resultado);
//         break;
//     case 3:
//         for (numero of vetor6) {
//             resultado += numero;
//         }
//         let media = resultado / vetor6.length;
//         console.log('A média dos elementos é: ' + media.toFixed(2));
//         break;
//     case 4:
//         console.log('Os elementos em ordem crescente são:');
//         console.log(vetor6.sort());
//         break;
//     case 5:
//         console.log(vetor6);
//         break;
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/* 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
 vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
 */
// console.log('\n------------ VETOR A 100 ------------\n');

// const vetorA100 = [];
// let vetorB = [];

// for (let i = 0; i < 5; i++) {
//     vetorA100.push(parseInt(prompt('Informe um número para inserir no vetor: ')));
// }

// for (let i = 0; i < vetorA100.length; i++) {
//     if (vetorA100[i] === NaN) vetorA100.pop();
//     if (vetorA100[i] > 0) {
//         if (vetorA100[i] !== null) vetorB.push(vetorA100[i]);
//     }
// }
// console.log(vetorA100);
// console.log(vetorB);

///////////////////////////////////////////////////////////////////////////////////////////////

/*
 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
 resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
 cada), representando as apostas feitas. Compare os números das apostas com o
 resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
 corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
 e quadras, apenas por quinas.)
 */

// console.log('\n------------ LOTO ------------\n');

// console.log('Informe os números sorteados: ');
// const vetorLoto = lerVetor();
// const jogos = [];

// console.log('\nInforme os Jogos: ');
// for (let i = 0; i < 50; i++) {
//     console.log(`${i + 1}º Jogo: `);
//     let aposta = lerVetor();
//     jogos.push(aposta);
// }

// for (let i = 0; i < jogos.length; i++) {
//     let acertos = 0;
//     for (let j = 0; j < jogos[i].length; j++)
//         if (jogos[i][j] === vetorLoto[j]) acertos++;
//     if (acertos === jogos[i].length) {
//         console.log(`\nA aposta nº ${i + 1}: [ ` + jogos[i] + ' ]');
//         console.log('Foi um Ganhador!');
//     }
// }

// function lerVetor() {
//     const vetor = [];
//     for (let i = 0; i < 5; i++) {
//         let numero = 0;
//         while (true) {
//             numero = parseInt(prompt(`Digite o ${i + 1}º número (01 ao 25): `));
//             if (numero < 1 || numero > 25) console.log('Número fora do intervalo permitido!');
//             else break;
//         }
//         vetor.push(numero);
//     }
//     return vetor.sort();
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/* 
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
 idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
 nome e idade.
*/
// console.log('\n------------ PESSOA ------------\n');

// let Pessoa = {
//     Nome: 'Leonardo',
//     Idade: 33
// }

// console.log(`${Pessoa.Nome} tem ${Pessoa.Idade} anos.`);

// Pessoa.Email = 'leonardomonteirolima@gmail.com';

// console.log(Pessoa);

///////////////////////////////////////////////////////////////////////////////////////////////

/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
 strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
 propriedades que são arrays.
*/

// console.log('\n------------ OBJETO DADOS ------------\n');

// let Dados = {
//     nome: "Alice",
//     idade: 2,
//     cidade: "Friburgo",
//     'Cores Favoritas': ["vermelho", "azul", "verde"],
//     'Animais de Estimação': ["gato", "cachorro", "coelho"],
// };

// let apenasArrays = verificarArrays(Dados);

// console.log('Dados iniciais:');
// console.log(Dados);
// console.log('\nApenas os arrays: ');
// console.log(apenasArrays);

// function verificarArrays(objeto) {
//     let resultado = {};
//     for (let propriedade in objeto) {
//         if (Array.isArray(objeto[propriedade])) {
//             resultado[propriedade] = objeto[propriedade];
//         }
//     }
//     return resultado;
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/* 
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
 combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
 sobre as do obj1 em caso de conflitos.
*/

// console.log('\n------------ COMBINANDO OBJETOS ------------\n');


// const obj1 = {
//     Nome: 'Samuel',
//     Idade: 8,
//     Cidade: 'Rio de Janeiro',
//     CPF: '111.000.333-08'
// };

// const obj2 = {
//     Nome: 'Leonardo',
//     Idade: 33,
//     Cidade: "Teresópolis",
//     UF: 'RJ'
// };

// let objetoCombinado = combinarObjetos(obj1, obj2);
// console.log(objetoCombinado);

// function combinarObjetos(obj1, obj2) {
//     let novoObjeto = {};

//     Object.assign(novoObjeto, obj1);
//     Object.assign(novoObjeto, obj2);

//     return novoObjeto;
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/*
44. Escreva uma função que conte quantas propriedades do tipo string existem em um
 objeto e retorne esse número.
*/
// console.log('\n------------ CONTANDO PROPRIEDADES DE UM OBJETO ------------\n');

// let Carro = {
//     Modelo: "Mustang Mach1",
//     Ano: 2023,
//     Combustível: "Gasolina",
//     Portas: 2,
//     Motor: "V8",
//     Marca: "Ford"
// };

// let numeroDeStrings = ContarPropriedades(Carro);
// console.log(Carro);
// console.log(`Número de propriedades do tipo string: ${numeroDeStrings}`);

// function ContarPropriedades(objeto) {
//     let contador = 0;
//     let propriedades = Object.keys(objeto);

//     for (propriedade of propriedades)
//         if (typeof objeto[propriedade] === "string") contador++;

//     return contador;
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/* 
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/
// console.log('\n------------ OBJETO COM ARRAY DE STRINGS ------------\n');

// const Frutas = ["maçã", "banana", "laranja", "uva", "pera", "maçã", "abacaxi", "banana", "morango", "uva", "pêssego", "laranja", "laranja",
//     "kiwi", "pera", "morango", "abacate", "kiwi", "pera", "pera"];

// let ObjetoFrutas = {};

// for (fruta of Frutas) {
//     if (ObjetoFrutas[fruta]) {
//         ObjetoFrutas[fruta]++;
//     } else {
//         ObjetoFrutas[fruta] = 1;
//     }
// }

// console.log(ObjetoFrutas);

///////////////////////////////////////////////////////////////////////////////////////////////

/* 
46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

// console.log('\n------------ OBJETO VENDAS ------------\n');

// const Vendas = [{ Vendedor: 'Leonardo', Valor: 1500 }, { Vendedor: 'Fabiana', Valor: 2000 }, { Vendedor: 'Miguel', Valor: 1600 },
// { Vendedor: 'Leonardo', Valor: 3500 }, { Vendedor: 'Fabiana', Valor: 1100 }, { Vendedor: 'Miguel', Valor: 4000 },
// { Vendedor: 'Leonardo', Valor: 1800 }, { Vendedor: 'Fabiana', Valor: 3000 }, { Vendedor: 'Miguel', Valor: 1100 },
// { Vendedor: 'Leonardo', Valor: 1100 }, { Vendedor: 'Fabiana', Valor: 1900 }, { Vendedor: 'Miguel', Valor: 1700 }
// ];

// let vendasPorVendedor = sumarizarVendas(Vendas);
// console.log(vendasPorVendedor);

// function sumarizarVendas(vendas) {
//     let totalVendas = {};
//     for (venda of vendas) {
//         let { Vendedor, Valor } = venda;
//         if (totalVendas[Vendedor]) {
//             totalVendas[Vendedor] += Valor;
//         } else {
//             totalVendas[Vendedor] = Valor;
//         }
//     }
//     return totalVendas;
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/* 
47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/


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

function ReadMatrix(matrix, line, column) {
    for (let i = 0; i < line; i++) {
        let Line = [];
        for (let j = 0; j < column; j++) {
            Line.push(parseInt(prompt(`Posição [${i}][${j}] : `)));
        }
        matrix.push(Line);
    }
}
