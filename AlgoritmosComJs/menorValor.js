const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial){

    let maisbarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisbarato].preco){
            maisbarato = atual
        }
    }
    return maisbarato;
}



module.exports = menorValor;