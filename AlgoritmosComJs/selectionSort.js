const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length - 1; atual++) {

    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;

}

// o algoritimo busca o obj de menor valor e troca com o obj de valor atual

// outra forma usando for each

/*livros.forEach((livro, indice) =>{

    let menor = menorValor(livros, indice);

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco;
    livros[menor] = livroAtual;
})*/