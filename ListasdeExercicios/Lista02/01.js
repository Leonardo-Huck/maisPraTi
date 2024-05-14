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