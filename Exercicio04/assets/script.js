const produtoConsultado = document.getElementById('preco-produto');
const botaoComprar = document.querySelector('#compraProduto')
const totalCarrinho = document.querySelector('.contador')
const valorsubtotal = document.querySelector('.subtotal')
const valorDesconto = document.querySelector('.desconto')
const valorTotalCompra = document.querySelector('.totalProdutos')
let produto = ''

function consultaPreco() {
    const inputProduto = document.getElementById('input-search');
    let produtoConsultar = inputProduto.value;

    if (inputProduto.value === '') {
        produtoConsultado.innerText = 'Informe um produto.'
        limparCampos()
        return false
    }

    produto = produtos.filter(produto => produto.nome.startsWith(produtoConsultar.toUpperCase()));

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
let valorTotal = 0.00
let desconto = 0.00
let totalComDesconto = 0.00

function comprarProduto() {
    if (produto) {
        carrinho.push(produto)
        let totalProdutos = carrinho.length
        let subTotal = produto[0].preco
        valorTotal += subTotal
        totalCarrinho.innerText = totalProdutos
        desconto = valorTotal * 0.10
        totalComDesconto = valorTotal - desconto


        valorsubtotal.innerText = 'R$ ' + valorTotal.toFixed(2)
        valorDesconto.innerText = 'R$ ' + desconto.toFixed(2)
        valorTotalCompra.innerText = 'R$ ' + totalComDesconto.toFixed(2)
    }
}

function limparCampos() {
    setTimeout(() => {
        location.reload();
    }, 2000);
}


function limparCarrinho() {
    const inputProduto = document.getElementById('input-search');
    totalCarrinho.innerText = 'Carrinho vazio'
    valorTotalCompra.innerText = 'R$ 0.00'
    valorsubtotal.innerText = 'R$ 0.00'
    valorDesconto.innerText = 'R$ 0.00'
    produtoConsultado.innerText = ''
    inputProduto.value = ''
    botaoComprar.setAttribute('style', 'background-color: #373737; color:white')
    carrinho.splice(0, Infinity)
    valorTotal = 0.00
    botaoComprar.setAttribute('disabled', 'disabled')
}
