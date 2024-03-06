const inputProduto = document.getElementById('input-search');

const produtoConsultado = document.getElementById('preco-produto');

function consultarProduto() {
    const produto = inputProduto.value;
    console.log('Produto: ' + produto);
    const preco = precos(produto.toLowerCase());
    console.log('Preço: ' + preco);
    produtoConsultado.innerText = preco.startsWith('Produto') ? preco : `O valor do produto é ${preco}`;
}

function precos(prod) {
    switch (prod) {
        case 'morango':
        case '1':
            return 'R$5.99'

        case 'laranja':
        case '2':
            return 'R$9.99'

        case 'tomate':
        case '3':
            return 'R$8.99'

        case 'maçã':
        case '4':
            return 'R$3.99'

        default:
            return 'Produto não cadastrado.'
    }
}
