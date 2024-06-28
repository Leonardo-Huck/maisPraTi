// document.getElementById('nome').value = 'Grêmio'

function Inserir(valor) {
    if (document.formulario.tela.value.length < 14)
        document.formulario.tela.value += valor;
}

function LimparTela() {
    document.formulario.tela.value = '';
}

function Deletar() {
    let expressao = document.formulario.tela.value;
    document.formulario.tela.value = expressao.substring(0, expressao.length - 1);
}

function CalcularTotal() {
    let result = document.formulario.tela.value;
    if (result) {
        document.formulario.tela.value = eval(result);
    }
}