let produto = {
    nome: "Notebook",
    cor: "Preto",
    preco: 3500,
    estoque: 50,
};

/* A) Acessar nome /** */
console.log(produto.nome);

/* B) Acessar preço /** */
console.log(produto["preco"]);

/* C) Acessar estoque /** */
produto.estoque = 80;

/* D) Imprimir todas propriedades /** */
for (let chave in produto) {
    console.log(chave + ": " + produto[chave]);
}