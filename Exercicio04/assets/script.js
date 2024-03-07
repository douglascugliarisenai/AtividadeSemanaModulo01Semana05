const inputProduto = document.getElementById('input-search');
const produtoConsultado = document.getElementById('preco-produto');
const botaoComprar = document.querySelector('#compraProduto')
const totalCarrinho = document.querySelector('.contador')
const valorTotalCompra = document.querySelector('.totalItens')

function consultaPreco() {
    let produtoConsultar = inputProduto.value;

    if (inputProduto.value === '') {
        produtoConsultado.innerText = 'Informe um produto.'
        limparCampos()
        return false
    }

    const produto = produtos.filter(produto => produto.nome.startsWith(produtoConsultar.toUpperCase()));

    if (produto.length != 0) {
        produtoConsultado.innerText = produto[0].nome + ' R$' + produto[0].preco;
        botaoComprar.removeAttribute('disabled')
        botaoComprar.setAttribute('style', 'background-color: green; color:white')
    } else {
        produtoConsultado.innerText = 'Produto não cadastrado.'
        botaoComprar.setAttribute('disabled', 'disabled')
        botaoComprar.setAttribute('style', 'background-color: red; color:white')
        limparCampos()
    }
}

const produtos = [
    {
        id: 1,
        nome: "BANANA",
        preco: 5.99,
    },
    {
        id: 2,
        nome: "LARANJA",
        preco: 9.99,
    },
    {
        id: 3,
        nome: "TOMATE",
        preco: 8.99,
    },
    {
        id: 4,
        nome: "MAÇÃ",
        preco: 3.99,
    },
];

const carrinho = []
let valorTotal = 0.00;

function comprarProduto() {
    let produtoConsultar = inputProduto.value;
    const produto = produtos.filter(produto => produto.nome.includes(produtoConsultar.toUpperCase()));

    if (produto) {
        carrinho.push(produto)
        let totalProdutos = carrinho.length
        let subTotal = produto[0].preco
        valorTotal += subTotal

        console.log(valorTotal)
        valorTotalCompra.innerText = 'R$ ' + valorTotal.toFixed(2)
        totalCarrinho.innerText = totalProdutos
    }
}

function limparCampos() {
    setTimeout(() => {
        location.reload();
    }, 2000);
}


function limparCarrinho() {
    // totalCarrinho.innerText = 'Carrinho vazio'
    // valorTotalCompra.innerText = 'R$ 0.00'
    // produtoConsultado.innerText = ''
    // carrinho.splice(0)
    // produtos.splice(0)
    // valorTotal = 0.00
    // botaoComprar.setAttribute('disabled', 'disabled')
    limparCampos()
}