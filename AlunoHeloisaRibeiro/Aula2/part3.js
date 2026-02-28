let produtos = [
    { nome: "Buquê de Lírios", preco: 120, estoque: 12 },
    { nome: "Buquê de Girassóis", preco: 130, estoque: 9 },
    { nome: "Buquê de Rosas", preco: 180, estoque: 19 },
    { nome: "Buquê de margaridas", preco: 90, estoque: 5 },
    { nome: "Buquê de orquídeas", preco: 200, estoque: 4 },
    { nome: "Buquê de hortências", preco: 150, estoque: 8 },
    { nome: "Buquê de jasmim", preco: 110, estoque: 8 },
    { nome: "Buquê de Peônia", preco: 120, estoque: 13 },
    { nome: "Buquê de copo-de-leite", preco: 100, estoque: 6 },
    { nome: "Buquê de violetas", preco: 50, estoque: 10 }
];

/* A) Preço do segundo objeto (Buquê de Girassóis) */
console.log(produtos[1].preco);

/* B) Nome do terceiro objeto (Buquê de Rosas) */
console.log(produtos[2].nome);

/* C) Quantos itens existem? */
console.log(produtos.length);

/* D) Imprimir nome de todos os produtos */
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome);
}

/* E) Somar total de estoque */
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
}
console.log("Total de estoque: " + totalEstoque);

/* F) Produto com maior estoque */
let maior = produtos[0];
for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maior.estoque) {
        maior = produtos[i];
    }
}
console.log("Produto com maior estoque: " + maior.nome);