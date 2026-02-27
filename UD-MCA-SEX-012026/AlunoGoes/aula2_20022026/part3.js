// Parte 3 - Criando um array que contenha 10 objetos representando produtos
let Carros = [
    {
        Nome: "Fiat Uno com escada 2020",
        preco: 45000,
        estoque: 80,
    },
    {
        Nome: "Porsche 911 2021",
        preco: 6000000,
        estoque: 50,
    },
    {
        Nome: "lamborghini Aventador 2022",
        preco: 7000000,
        estoque: 70,
    },
    {
        Nome: "Ferrari F8 Tributo 2020",
        preco: 50000,
        estoque: 60,
    },
    {
        Nome: "Chevrolet Camaro 2021",
        preco: 300000,
        estoque: 90,
    },
    {
        Nome: "Ford Mustang 2020",
        preco: 350000,
        estoque: 40,
    },
    {
        Nome: "Dodge SRT Hellcat 2021",
        preco: 450000,
        estoque: 30,
    },
    {
        Nome: "Audi R8 2020",
        preco: 400000,
        estoque: 20,
    },
    {
        Nome: "BMW M4 2021",
        preco: 500000,
        estoque: 15,
    },
    {
        Nome: "Mercedes-AMG GT 2020",
        preco: 550000,
        estoque: 10,
    },
];
document.getElementById('arrayObjetos').innerHTML = JSON.stringify(Carros, null, 2);
console.log(Carros);

// Variavel DOMContent para mostrar as respostas
let respostaAp3 = document.getElementById('respostaAp3');
let respostaBp3 = document.getElementById('respostaBp3');
let respostaCp3 = document.getElementById('respostaCp3');
let respostaDp3 = document.getElementById('respostaDp3');
let respostaEp3 = document.getElementById('respostaEp3');
let respostaFp3 = document.getElementById('respostaFp3');

// Acessando as propriedades dos objetos no array
respostaAp3.innerHTML = `O preço do segundo objeto é: ${Carros[1].preco}.`;
respostaBp3.innerHTML = `O nome do terceiro objeto é: ${Carros[2].Nome}.`;
respostaCp3.innerHTML = `O array possui ${Carros.length} objetos.`;

//  Mostrar o nome de todos os objetos
let nomesCarros = Carros.map(carro => carro.Nome).join(', ');
respostaDp3.innerHTML = `Nomes de todos os carros: ${nomesCarros}`;

// Somando o total de estoque de todos os carros
let totalEstoque = Carros.reduce((total, carro) => total + carro.estoque, 0);
respostaEp3.innerHTML = `Total de estoque de todos os carros: ${totalEstoque}.`;

// Buscando o objeto com maior estoque
let carroMaiorEstoque = Carros.reduce((maior, carro) => carro.estoque > maior.estoque ? carro : maior, Carros[0]);
respostaFp3.innerHTML = `O carro com maior estoque é: ${carroMaiorEstoque.Nome} com ${carroMaiorEstoque.estoque} unidades.`;