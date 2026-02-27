let produtos = [
    { nome: "Frigideira", preco: 120, estoque: 25 },
    { nome: "Jogo de Pratos", preco: 250, estoque: 15 },
    { nome: "Liquidificador", preco: 180, estoque: 40 },
    { nome: "Batedeira", preco: 350, estoque: 10 },
    { nome: "Faca de Chef", preco: 90, estoque: 50 },
    { nome: "Air Fryer", preco: 450, estoque: 8 },
    { nome: "Escorredor", preco: 40, estoque: 30 },
    { nome: "Tábua de Corte", preco: 55, estoque: 100 },
    { nome: "Mixer", preco: 130, estoque: 22 },
    { nome: "Pote de Vidro", preco: 25, estoque: 150 }
];

/* A) Preço do segundo objeto (Jogo de Pratos) */
console.log(produtos[1].preco);

/* B) Nome do terceiro objeto (Liquidificador) */
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