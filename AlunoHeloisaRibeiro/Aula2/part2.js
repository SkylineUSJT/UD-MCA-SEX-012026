let produto = {
    nome: "Sandália",
    cor: "Branco",
    preco: 150,
    estoque: 35,
};

/* A) Acessar nome */
console.log(produto.nome);

/* B) Acessar preço */
console.log(produto["preco"]);

/* C) Acessar estoque (Atualizando o valor de 35 para 50) */
produto.estoque = 50;

/* D) Imprimir todas propriedades */
for (let chave in produto) {
    console.log(chave + ": " + produto[chave]);
}