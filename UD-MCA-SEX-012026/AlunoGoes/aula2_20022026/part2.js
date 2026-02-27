//Parte 2 - Criando um objeto com 4 propriedades
let carro = {
    Nome: "Fiat Uno com escada 2020",
    cor: "Preto",
    preco: 45000,
    estoque: 100,
};
document.getElementById('objetoInicial').innerHTML = JSON.stringify(carro, null, 2);
console.log(carro);

// Variavel DOMContent para mostrar as respostas
let respostaAObjeto = document.getElementById('respostaAp2');
let respostaBObjeto = document.getElementById('respostaBp2');
let respostaCObjeto = document.getElementById('respostaCp2');

// Acessando as propriedades do objeto
respostaAObjeto.innerHTML = `Para acessar o nome do objeto, utilizamos a notação de ponto: ${carro.Nome}.`;
respostaBObjeto.innerHTML = `Para acessar o preço usando colchetes, utilizamos a notação de colchetes: ${carro['preco']}.`;

// Atualizando o estoque para 80
carro.estoque = 80;
respostaCObjeto.innerHTML = `O estoque atualizado para 80: ${carro.estoque}.`;

// Imprimindo todas as propriedades do objeto no console
console.log(`Nome: ${carro.Nome}`);
console.log(`Cor: ${carro.cor}`);
console.log(`Preço: ${carro.preco}`);
console.log(`Estoque: ${carro.estoque}`);