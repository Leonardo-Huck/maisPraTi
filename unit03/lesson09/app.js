// const crypto = require('node:crypto');

class Produto {
    constructor(nome, preco, quantidade, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.descricao = descricao;
    }

    validateData() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === "")
                return false;
        }
        return true;
    }
}

function registerTask() {
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const descricao = document.getElementById("descricao").value;

    const produto = new Produto(nome, preco, quantidade, descricao);

    if (produto.validateData()) {
        database.CreateProduto(produto);
    }
}

// function GetId() {
//     let id = localStorage.getItem('id');
//     return parseInt(id) + 1;
// }

// function GetId() {
//     let id = crypto.randomBytes(2).toString("hex");
//     return id;
// }

function GetId(number) {
    let id = "";
    for (let i = 0; i < (number * 8); i++) {
        id += Math.round(Math.random() * 1);
    }
    let numeroDecimal = parseInt(id, 2);
    let numeroHexadecimal = numeroDecimal.toString(16).toUpperCase();
    return numeroHexadecimal;
}

class Database {
    constructor() {
        const contador = localStorage.getItem('contador');

        if (contador === null) {
            localStorage.setItem('contador', 0);
        }
    }

    GetProduto() {
        const produtos = new Array();
        const contador = localStorage.getItem('contador');

        for (let i = 1; i <= contador; i++) {
            const key = localStorage.key(i);
            const produto = JSON.parse(localStorage.getItem(key));

            if (produto === null) {
                continue;
            }

            produto.id = key;
            produtos.push(produto);
        }
        return produtos;
    }

    CreateProduto(produto) {
        const contador = localStorage.getItem('contador');
        const id = GetId(2);
        localStorage.setItem(id, JSON.stringify(produto));
        localStorage.setItem('contador', (parseInt(contador) + 1));
    }

    RemoveProduto(id) {
        const contador = localStorage.getItem('contador');
        localStorage.removeItem(id);
        localStorage.setItem('contador', (parseInt(contador) - 1));
    }

    SearchProdutos(nome) {
        let produtosFiltrados = new Array();
        produtosFiltrados = this.GetProduto();

        if (nome !== '') {
            produtosFiltrados = produtosFiltrados.filter(p => p.nome === nome)
        }

        return produtosFiltrados;
    }
}

function SearchProdutos() {
    const nome = document.getElementById("nome").value;
    const produtosS = database.SearchProdutos(nome);

    LoadProdutos(produtosS)
}

function LoadProdutos(produtos) {

    if (produtos === undefined) {
        produtos = database.GetProduto();
    }

    // const produtos = database.GetProduto();
    const listprodutos = document.getElementById("list-produtos");
    listprodutos.innerHTML = '';

    produtos.forEach((p) => {
        const row = listprodutos.insertRow();
        row.insertCell(0).innerHTML = `${p.nome}`;
        row.insertCell(1).innerHTML = `${p.preco}`;
        row.insertCell(2).innerHTML = `${p.quantidade}`;
        row.insertCell(3).innerHTML = `${p.descricao.substring(0, 40)}`;

        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.id = p.id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            const id = p.id
            database.RemoveProduto(id);

            window.location.reload();
        }

        row.insertCell(4).append(btn);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.body.contains(document.getElementById('list-produtos'))) {
        LoadProdutos();
    }
})

const database = new Database();