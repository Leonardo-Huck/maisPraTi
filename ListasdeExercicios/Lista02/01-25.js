/* 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

const prompt = require('prompt-sync')();

function CalcularTempoPerdido(cigarros, tempoQueFumou) {
    let tempoPerdido = (cigarros * 10) / 60;
    let diasQueFumou = (tempoQueFumou * 365);
    let totalPerdido = (tempoPerdido * diasQueFumou) / 24;

    return Math.round(totalPerdido);
}

console.log('\n------------ CALCULO DO TEMPO DE VIDA PERDIDO DE UM FUMANTE ------------\n');

let entradaCigarros = parseInt(prompt("Informe quantos cigarros por dia: "));
let entradaAnos = parseInt(prompt("Informe quantos anos: "));

console.log(`\nConsiderando 10minutos de vida pra cada cigarro, 
o tempo perdido foi de ${CalcularTempoPerdido(entradaCigarros, entradaAnos)} dias de vida.`);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h -1
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

console.log('\n------------ VELOCIDADE DE UM VEÍCULO ------------\n');

let velocidade = parseInt(prompt('Informe a velocidade do veículo (Km/h): '));

if (velocidade > 80) {
    console.log(`Usuário Multado!`);
    let multa = ((velocidade - 80) * 5).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    console.log(`A valor da multa é de ${multa}, pois a velocidade acima da permitida foi de ${velocidade - 80}Km/h`);
} else if (velocidade <= 80) {
    console.log('Excelente!! Continue respeitando a velocidade da via!');
} else {
    console.log('Revise a velocidade informada!');
}

///////////////////////////////////////////////////////////////////////////////////////////////////

/*3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

console.log('\n------------ PASSAGEM ------------\n');

let distancia = Number(prompt('Informe quantos quilômetros o passageiro deseja percorrer? '));
let passagem = ((distancia > 200) ? distancia * 0.45 : distancia * 0.50)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

console.log(`Para uma distância de ${distancia}Km o preço da passagem é de ${passagem}`);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

console.log('\n------------ TRIANGULO POSSIVÉL ------------\n');

let reta1 = Number(prompt('Informe o tamanho do primeiro seguimento de reta: '));
let reta2 = Number(prompt('Informe o tamanho do segundo seguimento de reta: '));
let reta3 = Number(prompt('Informe o tamanho do terceiro seguimento de reta: '));

if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2) {
    console.log("\nÉ possivel formar esse triangulo!");
} else {
    console.log("\nInfelizmente não é possivel formar esse triangulo!");
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

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

///////////////////////////////////////////////////////////////////////////////////////////////////

/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/


console.log('\n------------ NUMERO DO 1 AO 5 ------------\n');
console.log('Tente descobrir qual número a máquina escolheu');

let maquina1ao5 = Math.floor(Math.random() * 5) + 1;
let usuario1ap5 = 0;
let tentativa = 0;

while (usuario1ap5 !== maquina1ao5) {
    usuario1ap5 = parseInt(prompt('Escolha um número entre 1 e 5: '));
    tentativa++;
}

console.log(`Você acertou!! O computador escolheu ${maquina1ao5}, o número de tentativas foram: ${tentativa}`);

///////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

console.log('\n------------ VIDA SAUDÁVEL ------------\n');

let totalHoras = Number(prompt('Informe quantas horas de atividades físicas foram realizadas no mês: '));
let totalPontos = 0;

if (totalHoras <= 10) {
    totalPontos = totalHoras * 2;
} else if (totalHoras > 10 && totalHoras <= 20) {
    totalPontos = totalHoras * 5;
} else if (totalHoras > 20) {
    totalPontos = totalHoras * 10;
} else {
    console.log('Número de horas inválido!');
}

console.log(`\nTotal de pontos ganhos: ${totalPontos}`);
console.log(`Total de ganhos: ${(totalPontos * 0.05).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
 mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
 perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
 funcionário.
*/

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

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
 cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
 a) Osomatório entre todos os valores;
 b) Qual foi o menor valor digitado;
 c) Amédiaentre todos os valores;
 d) Quantos valores são pares.
 */

console.log('\n------------ VARIOS NÚMEROS ------------\n');

let entradaNumero = [];
let flag = '';
do {
    let entrada = Number(prompt('Digite um número: '));
    entradaNumero.push(entrada);
    flag = prompt('Deseja continuar (S)im ou (N)ão: ');
} while (flag !== 'n' && flag !== 'N')

let soma = 0;
let menor = entradaNumero[0];
let totalPares = 0;

for (numero of entradaNumero) {
    soma += numero;
    if (numero < menor) menor = numero;
    if (numero % 2 === 0) totalPares++;
}

let media = soma / entradaNumero.length;

console.log(`\na) O somatório entre todos os valores é de: ${soma}`);
console.log(`b) O menor valor digitado foi: ${menor}`);
console.log(`c) A média entre todos os valores é de: ${media.toFixed(2)}`);
console.log(`d) O numero de pares é: ${totalPares}`);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA(Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.
*/

console.log('\n------------ PROGRESSÃO ARITIMÉTICA ------------\n');

let primeiroTermo = Number(prompt('Informe qual o primeiro termo da PA: '));
let razao = Number(prompt('Informe qual a razão da PA: '));

let texto = '\nPA => { ' + primeiroTermo + ', ';
let termo = primeiroTermo + razao;
let somaPA = primeiroTermo;

for (let i = 0; i < 9; i++) {
    somaPA += termo;
    texto += termo + ', '
    termo += razao;
}
texto += '...}'

console.log(texto);
console.log(`A soma entre todos os valores dessa sequência é de: ${somaPA}`);

///////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Faça um programa que mostre os 10primeiros elementos da Sequência de Fibonacci.
//  Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

console.log('\n------------ SEQUÊNCIA DE FIBONACCI ------------\n');

let elementoAnterior = 1;
let elemento = 1;
let textoFB = 'Sequência de Fibonacci => { ';

for (let i = 0; i < 10; i++) {
    textoFB += elemento + ', ';
    elementoAnterior = elemento - elementoAnterior;
    elemento += elementoAnterior;
}

textoFB += '...}';
console.log(textoFB);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    dasequência de Fibonacci.
    */

console.log('\n------------ SEQUÊNCIA DE FIBONACCI EM UM VETOR ------------\n');

let elementos = [];
let elementoAnteriorVt = 1;
let elementoVt = 1;

for (let i = 0; i < 15; i++) {
    elementos.push(elementoVt);
    elementoAnteriorVt = elementoVt - elementoAnteriorVt;
    elementoVt += elementoAnteriorVt;
}

console.log(elementos);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
 mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
 que eles foram informados.
*/

console.log('\n------------ NOMES EM UM VETOR ------------\n');

let nomes = [];

for (let i = 0; i < 7; i++) {
    nomes.push(prompt('Informe um nome: '));
}

let listaNomes = '\nLista dos nomes informados: '
for (let i = 7; i > 0; i--) {
    listaNomes += nomes[i - 1];
    listaNomes += (i - 1 !== 0) ? ', ' : '';
}

console.log(listaNomes);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
 final, mostre quais são os números pares que foram digitados e em que posições eles
 estão armazenados.
 */

console.log('\n------------ 10 NUMEROS INTEIROS ------------\n');

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(parseInt(prompt(`Informe o ${i + 1}° número: `)));
}

console.log('\nNumeros pares informados: ');

for (numero in numeros) {
    if (numeros[numero] % 2 === 0) {
        console.log(`Numero: ${numeros[numero]} na posição ${numero}`);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

console.log('\n------------ VETOR COM 20 NUMEROS ALEATÓRIOS ------------\n');

let numeros20 = [];

for (let i = 0; i < 20; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100);
    numeros20.push(numeroAleatorio);
}

console.log('Números gerados:');
console.log(numeros20);
numeros20.sort((a, b) => a - b);
console.log('Números gerados ordenados:');
console.log(numeros20);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

console.log('\n------------ MENORES DE IDADE ------------\n');

let nomesPessoas = [];
let idadesPessoas = [];

for (let i = 0; i < 9; i++) {
    nomesPessoas.push(prompt(`Informe o nome da ${i + 1}ª pessoa: `));
    idadesPessoas.push(parseInt(prompt(`Informe a idade da ${i + 1}ª pessoa: `)));
}

console.log('\nAs pessoas menores de 18 anos são: ');

for (idade in idadesPessoas) {
    if (idadesPessoas[idade] < 18) {
        console.log(`${nomesPessoas[idade]}: ${idadesPessoas[idade]} anos`);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

console.log('\n------------ DADOS DE UM FUNCIONÁRIO ------------\n');

let funcionario = {
    Nome: "",
    Cargo: "",
    Salario: ""
}

funcionario.Nome = (prompt('Informe o nome do funcionário: '));
funcionario.Cargo = (prompt('Informe o cargo: '));
funcionario.Salario = (Number(prompt('Informe o salário: ')));

console.log(funcionario);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
 repetição. Escrever cada um deles no formato HH.MM.SS.
 */

console.log('\n------------ HORÁRIO ------------\n');

let horarios = [];

console.log('Informe 5 horários: ');
for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}º Horário`);
    while (true) {
        let hora = parseInt(prompt('Informe a hora (0 - 23): '));
        let minuto = parseInt(prompt('Informe o minuto (0 - 59): '));
        let segundo = parseInt(prompt('Informe o segundo (0 - 59): '));

        if (hora >= 0 && hora < 24) {
            if (minuto >= 0 && minuto < 60) {
                if (segundo >= 0 && segundo < 60) {
                    horarios.push(new Date().setHours(hora, minuto, segundo));
                    break;
                } else {
                    console.log('Segundo inválido!');
                }
            } else {
                console.log('Minuto inválido!');
            }
        } else {
            console.log('Hora inválida!');
        }
    }
}

console.log('\nHorários no formato HH.MM.SS: ');
for (horario of horarios) {
    let hora = new Date(horario);
    let hour = hora.getHours().toString().padStart(2, '0');
    let minuto = hora.getMinutes().toString().padStart(2, '0');
    let segundo = hora.getSeconds().toString().padStart(2, '0');

    console.log(`${hour}.${minuto}.${segundo}`);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/
console.log('\n------------ CADASTRO DE FUNCIONÁRIOS ------------');

let funcionarios = [];

for (let i = 0; i < 3; i++) {
    console.log(`\nDados do ${i + 1}º Funcionário: `);
    let matriculaFuncionario = parseInt(prompt('Informe a matrícula: '));
    let nomeFuncionario = prompt('Informe o nome: ');
    let salarioBruto = Number(prompt('Informe o salário Bruto: '));

    funcionarios.push(CriarFuncionario(matriculaFuncionario, nomeFuncionario, salarioBruto));
}

console.log('\n------------ EXIBIÇÃO DOS FUNCIONÁRIOS ------------')
let contadorFuncionários = 1;
for (funcionario of funcionarios) {
    console.log(`\nDados do ${contadorFuncionários++}º Funcionário:`);
    console.log(`Matricula: ${funcionario.Matricula}`);
    console.log(`Nome: ${funcionario.Nome}`);
    console.log(`Salário Bruto: ${funcionario.SalarioBruto}`);
    console.log(`Dedução INSS: ${funcionario.INSS}`);
    console.log(`Salário Líquido: ${funcionario.Salarioliquido}`);
}

function CriarFuncionario(matriculaFuncionario, nomeFuncionario, salarioBruto) {
    let inss = (salarioBruto * 12) / 100;
    let salarioLiquido = salarioBruto - inss;
    let funcionario = {
        Matricula: matriculaFuncionario,
        Nome: nomeFuncionario,
        SalarioBruto: salarioBruto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
        INSS: inss.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
        Salarioliquido: salarioLiquido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    return funcionario;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
=72.7 x alt- 58 e, para mulheres, peso ideal = 62.1 x alt- 44.7.
*/

console.log('\n------------ PESO IDEAL ------------\n');

let flagPesoIdeal = '';

let altura = Number(prompt('Informe a sua altura para calcular o peso ideal (ex: 1.78): '));
do {
    flagPesoIdeal = prompt('Agora informe seu sexo (Masculino ou Feminino): ');
} while (flagPesoIdeal != 'masculino' && flagPesoIdeal != 'Masculino'
&& flagPesoIdeal != 'feminino' && flagPesoIdeal != 'Feminino')

console.log(`\nara sua altura de ${altura} e o seu sexo ${flagPesoIdeal}, 
o seu peso ideal é de ${CalcularPesoIdeal(altura, flagPesoIdeal)}Kg`);

function CalcularPesoIdeal(alt, sexo) {
    if (sexo === 'masculino' || sexo === 'Masculino') {
        let pesoIdeal = 72.7 * alt - 58;
        return pesoIdeal.toFixed(2);
    } else {
        let pesoIdeal = 62.1 * alt - 44.7;
        return pesoIdeal.toFixed(2);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
 dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
 número não determinado de pessoas e retorne a média de salário da população, a
 média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
 350,00.
*/

console.log('\n------------ DADOS CADASTRAIS ------------\n');

function LeituraDados() {

    let familias = [];
    let flagDadosFamiliares = '';
    while (true) {
        let salarioFamiliar = Number(prompt('Informe o salário familiar: '));
        let numeroFilhos = parseInt(prompt('Informe o número de filhos: '));
        familias.push([salarioFamiliar, numeroFilhos]);
        flagDadosFamiliares = prompt('Deseja continuar (S)im ou (N)ão? ');
        if (flagDadosFamiliares === 'n' || flagDadosFamiliares === 'N')
            break;
    }

    let numeroSalarios = familias.length;
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let total350 = 0;

    for (familia of familias) {
        if (maiorSalario < familia[0])
            maiorSalario = familia[0];
        if (familia[0] <= 350)
            total350++;
        totalSalario += familia[0];
        totalFilhos += familia[1];
    }

    let mediaSalarioPopulacao = totalSalario / numeroSalarios;
    let mediaNumeroFilhos = totalFilhos / numeroSalarios;
    let percentual350 = total350 / numeroSalarios * 100;

    return {
        mediaSalarioPopulacao,
        mediaNumeroFilhos,
        percentual350,
        maiorSalario
    }
}

const Estatisticas = LeituraDados();
console.log("Média de salário:", Estatisticas.mediaSalarioPopulacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
console.log("Média de filhos:", Estatisticas.mediaNumeroFilhos);
console.log("Maior salário:", Estatisticas.maiorSalario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
console.log("Percentual de pessoas com salário até R$ 350,00:", Estatisticas.percentual350.toFixed(2) + "%");

///////////////////////////////////////////////////////////////////////////////////////////////////

// 23. Criar e imprimir a matriz identidade MI[1.7,1.7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

console.log('\n------------ MATRIZ IDENTIDADE MI[1.7,1.7] ------------\n');

function criarMatrizIdentidade(ordem) {
    const matriz = new Array(ordem);
    for (let i = 0; i < ordem; i++) {
        matriz[i] = new Array(ordem).fill(null);
        matriz[i][i] = 1;
    }
    return matriz;
}

function exibirMatriz(matriz) {
    let matrizFormatada = "";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matrizFormatada += `${matriz[i][j]} `;
        }
        matrizFormatada += '\n';
    }
    return matrizFormatada;
}

const ordem = 7;
const matrizIdentidade = criarMatrizIdentidade(ordem);
console.log(exibirMatriz(matrizIdentidade));

///////////////////////////////////////////////////////////////////////////////////////////////////

/*
24. Dada uma matriz M[1.6,1.8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

console.log('\n------------ VETOR C MATRIZ M[1..6,1..8] ------------\n');

const matrizM = [];

for (let i = 0; i < 6; i++) {
    let linha = [];
    for (let j = 0; j < 8; j++) {
        let numeroAleatorio = gerarNumeroAleatorio(-1000, 1000);
        linha.push(numeroAleatorio);
    }
    matrizM.push(linha);
}

const vetorResultado = contarNegativosNaLinha(matrizM);
console.log(matrizM)
console.log("Vetor C:", vetorResultado);


function contarNegativosNaLinha(matriz) {
    let numLinhas = matriz.length;
    const vetorC = new Array(numLinhas).fill(0);

    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0)
                vetorC[i]++;
        }
    }
    return vetorC;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


///////////////////////////////////////////////////////////////////////////////////////////////////

// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
//  de cada coluna separadamente

console.log('\n------------ MATRIZ 15 X 20 ------------\n');

const matrizM15x20 = [];

for (let i = 0; i < 15; i++) {
    let linha = [];
    for (let j = 0; j < 20; j++) {
        let numeroAleatorio = gerarNumeroAleatorio(0, 99);
        linha.push(numeroAleatorio);
    }
    matrizM15x20.push(linha);
}

let somaColunas = new Array(20).fill(0);

for (let i = 0; i < matrizM15x20.length; i++) {
    for (let j = 0; j < matrizM15x20[i].length; j++) {
        somaColunas[j] += matrizM15x20[i][j];
    }
}

console.log(exibirMatrizM(matrizM15x20));
console.log('////////////////////////////////////')
console.log('A soma das colunas separadamente é: ')
let cont = 1;
for (posicao of somaColunas) {
    console.log(`${cont++}ª posicao: ${posicao}`);
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirMatrizM(matriz) {
    let matrizFormatada = "";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matrizFormatada += `${(matriz[i][j]).toString().padStart(2, '0')} `;
        }
        matrizFormatada += '\n';
    }
    return matrizFormatada;
}