let produtos = [
    { nome: "Teclado", preco: 100, estoque: 30 },
    { nome: "Mouse", preco: 80, estoque: 50 },
    { nome: "Monitor", preco: 900, estoque: 20 },
    { nome: "Headset", preco: 200, estoque: 40 },
    { nome: "Webcam", preco: 150, estoque: 25 },
    { nome: "Notebook", preco: 3500, estoque: 10 },
    { nome: "Cadeira", preco: 700, estoque: 15 },
    { nome: "Mesa", preco: 500, estoque: 12 },
    { nome: "HD Externo", preco: 400, estoque: 18 },
    { nome: "Pen Drive", preco: 60, estoque: 100 }
];

/* A) Preço do segundo objeto /**  */
console.log(produtos[1].preco);

/* B) Nome do teceiro objeto /** */
console.log(produtos[2].nome);

/* C) Quantos intens existem? /** */
console.log(produtos.length);

/* D) Imprimir nome de todos os produtos /** */
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome);
}

/* E) Somar total de estoque /** */
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
}
console.log("Total de estoque: " + totalEstoque);

/* F) Produto com maior estoque /** */
let maior = produtos[0];
for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maior.estoque) {
        maior = produtos[i];
    }
}
console.log("Produto com maior estoque: " + maior.nome);

