const produtoConsultado = document.getElementById('preco-produto');
const botaoComprar = document.querySelector('#compraProduto')
const totalCarrinho = document.querySelector('.contador')
const valorsubtotal = document.querySelector('.subtotal')
const valorDesconto = document.querySelector('.desconto')
const valorTotalCompra = document.querySelector('.totalProdutos')
const imgProduto = document.querySelector('#imagemProduto')
let produto = ''
let produtoSalvo = ''

let totalCarrinhoSalvo = 0
let valorTotalSalvo = 0

produtoSalvo = JSON.parse(localStorage.getItem('produto'))
if(produtoSalvo){
    console.log(produtoSalvo)
    totalCarrinhoSalvo = produtoSalvo.length

    for (let i = 0; i < totalCarrinhoSalvo; i++) {
        valorTotalSalvo += produtoSalvo[i][0].preco
    }

    let calculorDesconto = valorTotalSalvo * 0.10


    valorsubtotal.innerText = valorTotalSalvo
    valorTotalCompra.innerText = valorTotalSalvo
    valorDesconto.innerText = calculorDesconto.toFixed(2);
    totalCarrinho.innerText = totalCarrinhoSalvo
   
}

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
        imgProduto.setAttribute('src', `${produto[0].url}`)
        imgProduto.setAttribute('alt', `foto do produto ${produto[0].url}`)
        imgProduto.style.display = "flex";
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
        url: './assets/img/banana.png'
    },
    {
        id: 2,
        nome: "LARANJA",
        preco: 9.99,
        url: './assets/img/laranja.png'
    },
    {
        id: 3,
        nome: "TOMATE",
        preco: 8.99,
        url: './assets/img/tomate.png'
    },
    {
        id: 4,
        nome: "MAÇÃ",
        preco: 3.99,
        url: './assets/img/maca.png'
    },
];

let valorTotal = 0.00
let desconto = 0.00
let totalComDesconto = 0.00
let carrinho = []

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

        localStorage.setItem('produto', JSON.stringify(carrinho));

        produtoSalvo = JSON.parse(localStorage.getItem('produto'))
        console.log(produtoSalvo)
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
    imgProduto.removeAttribute('src')
    imgProduto.removeAttribute('alt')
    imgProduto.style.display = "none";
}
