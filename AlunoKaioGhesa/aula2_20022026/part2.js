let produto = {
    nome: "Fone Razer",
    cor: "Verde",
    preco: 500,
    estoque: 70,
};

/* A) Acessar nome */
console.log(produto.nome);

/* B) Acessar preço */
console.log(produto["preco"]);

/* C) Acessar estoque (Atualizando o valor de 70 para 80) */
produto.estoque = 80;

/* D) Imprimir todas propriedades */
for (let chave in produto) {
    console.log(chave + ": " + produto[chave]);
}