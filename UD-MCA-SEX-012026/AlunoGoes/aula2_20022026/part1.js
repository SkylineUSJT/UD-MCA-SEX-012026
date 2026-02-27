//Parte 1 - Criando um array com 20 elementos
let Marcas=['BMW','Porsche','Mercedes','Volkswagen','Ferrari','Lamborghini','Maserati','Bentley','Rolls-Royce','Jaguar','Land Rover','Volvo','Subaru','Mazda','Honda','Toyota','Nissan','Hyundai','Kia','Audi'];
console.log(Marcas.length);
document.getElementById('arrayInicial').innerHTML = JSON.stringify(Marcas, null, 2);

// Variavel DOMContent para mostrar as respostas
let respostaA = document.getElementById('respostaAp1');
let respostaB = document.getElementById('respostaBp1');
let respostaC = document.getElementById('respostaCp1');
let respostaD = document.getElementById('respostaDp1');
let respostaE = document.getElementById('respostaEp1');

// Acessando os elementos nas posições 0, 7, 11, 15, 18 e 20
respostaA.innerHTML = `O elemento na posição 0 é ${Marcas[0]}, o elemento na posição 7 é ${Marcas[7]}, o elemento na posição 11 é ${Marcas[11]}, o elemento na posição 15 é ${Marcas[15]}, o elemento na posição 18 é ${Marcas[18]} e o elemento na posição 20 é ${Marcas[20]}.`;

// Acessando os elementos nas posições 18 e 19
respostaB.innerHTML = `O elemento na penúltima posição é ${Marcas[18]}, o elemento na última posição é ${Marcas[19]}.`;

// Verificando o número de elementos no array
respostaC.innerHTML = `O array possui ${Marcas.length} elementos.`;

// Adicionando um novo elemento ao final do array
Marcas.push('Tesla');
respostaD.innerHTML = `Novo elemento adicionado ao final do array: ${Marcas[Marcas.length - 1]}.`;

// Imprimindo todos os elementos do array
for (let i = 0; i < Marcas.length; i++) {
    respostaE.innerHTML += `${Marcas[i]}<br>`;
}