/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

console.log('\n------------ DADOS DE UM FUNCIONÁRIO ------------\n');
const prompt = require('prompt-sync')();

let funcionario = {
    Nome: "",
    Cargo: "",
    Salario: ""
}

funcionario.Nome = (prompt('Informe o nome do funcionário: '));
funcionario.Cargo = (prompt('Informe o cargo: '));
funcionario.Salario = (Number(prompt('Informe o salário: ')));

console.log(funcionario);