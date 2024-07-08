const conteudos = [
    [
        "Grécia me lembra filosofia",
        "Japão me lembra animes e construções fantásticas",
        "Coreia do sul me lembra dorama"
    ],
    [
        "Alvorada me lembra do professor falando que a avó dele mora lá",
        "Itália me lembra pizza e macarrão",
        "Florianopolis não me lembra nada porque não conheço"
    ],
    [
        "Torres falaram que tem balonismo",
        "Portugal me lembra euro",
        "Rio de Janeiro me lembra caos e calor"
    ]
]

const btntab1 = document.getElementById('btn-tab1')
const btntab2 = document.getElementById('btn-tab2')
const btntab3 = document.getElementById('btn-tab3')
const content = document.getElementById('content')

function displayContent(items) {
    let listaConteudo = ""

    for (const item of items) {
        listaConteudo += `<li>${item}</li>`
    }

    const lista = document.createElement('ul')
    content.innerHTML = listaConteudo
    content.append(lista)
}

function activateButton(btn) {
    btntab1.className = ""
    btntab2.className = ""
    btntab3.className = ""
    btn.className = "active"
}

function handleClick(event) {
    const btnId = event.target.id
    activateButton(event.target)

    if (btnId === 'btn-tab1') {
        displayContent(conteudos[0])
    } else if (btnId === 'btn-tab2') {
        displayContent(conteudos[1])
    } else {
        displayContent(conteudos[2])
    }
}

displayContent(conteudos[0])

btntab1.addEventListener('click', handleClick)
btntab2.addEventListener('click', handleClick)
btntab3.addEventListener('click', handleClick)