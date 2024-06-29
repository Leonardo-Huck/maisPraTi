function cadastrarEmail() {
    alert('E-mail cadastrado com sucesso! Fique atento a sua caixa de entrada para receber nossas promoções!')
}

function popUP(url) {
    let janela = window.open(url, "nova_janela", "width-400")
}

function contato() {
    alert('Recebemos sua mensagem! Por favor aguarde nosso retorno.')
}


function requisitar(url, id) {
    document.getElementById('content').innerHTML = ''
    for (let i = 1; i <= 4; i++) {
        document.getElementById(i).style = "color: #ffff"
    }
    document.getElementById(id).style = "color: #BFAE48"
    let ajax = new XMLHttpRequest()

    ajax.open('GET', url)

    console.log(ajax.readyState)

    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById('content').innerHTML = ajax.responseText
        }

        if (ajax.readyState == 4 && ajax.status == 404) {
            document.getElementById('content').innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.'
        }
    }

    setTimeout(() => {
        ajax.send()
    }, 3000)
}