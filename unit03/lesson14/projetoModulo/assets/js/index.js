var radio = document.querySelector('.manual-btn')
var ativo = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    ativo++

    if (ativo > 3) {
        ativo = 1
    }

    document.getElementById('radio' + ativo).checked = true
}