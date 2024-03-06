const inputProduto = document.getElementById('input-search');
const produtoConsultado = document.getElementById('preco-produto');
const botaoComprar = document.querySelector('#compraProduto')

// class Produtos {
//     constructor(codigo, descricao, preco) {
//         this.codigo = codigo
//         this.descricao = descricao
//         this.preco = preco
//     }
// }


function consultaPreco() {
    let produtoConsultar = inputProduto.value;

    const produto = produtos.filter(produto => produto.nome.startsWith(produtoConsultar.toUpperCase()));
    const produtox = produtos.find(parseInt(produtoConsultar));
    console.log(produtox)
    
    console.log(produto.length)
    if (produto.length != 0) {
        produtoConsultado.innerText = produto[0].nome + ' R$'+ produto[0].preco;
        botaoComprar.setAttribute('style', 'background-color: green; color:white')
    }else {
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


function comprarProduto(){
    let produtoConsultar = inputProduto.value;
    const produto = produtos.filter(produto => produto.nome.startsWith(produtoConsultar.toUpperCase()));
        
    console.log(produtos.map(produto[0].nome))

    let carrinho = []
    carrinho.push(produto[0].nome)

    console.log(carrinho)

}

function limparCampos() {
    setTimeout(() => {
        location.reload();
    }, 3000);
}
